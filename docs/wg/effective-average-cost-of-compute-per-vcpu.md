---
title: "vCPUあたりの実効平均コンピュートコストの算出方法（How to Calculate Effective Average Cost of Compute per vCPU）"
---

[英語版]: https://www.finops.org/wg/effective-average-cost-of-compute-per-vcpu/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

**概要:** vCPUあたりの実効平均コンピュートコストを算出することで、コミットメント割引や節約手段が時間の経過とともにコスト傾向にどのような影響を与えるかを追跡する、標準化されたメトリクス（指標）を得られます。歪んだ「平均仮想マシン（VM）」の視点から、償却済みの購入コストや未使用のコミットメントコストを含むvCPUあたりの実効コスト（Effective Cost）へと移行することで、FinOps実践者（FinOps Practitioner）は割引カバー率が向上しているか、あるいは最適化（Optimization）が必要であるかを正確に評価できます。

## 目次

  * [前提条件](<#prerequisites>)
  * [AWSでの手順](<#instructions-aws>)
  * [Azureでの手順](<#instructions-azure>)
  * [OCIでの手順](<#instructions-oci>)
  * [FOCUSでの手順](<#instructions-focus>)
  * [成果と成功の指標](<#outcomes-success>)
  * [謝辞](<#acknowledgments>)

パブリッククラウドにおける組織の利用量と支出が増加するにつれて、さまざまなサービスや節約手段（例：コミットメント割引）がコスト傾向に与える影響を理解することが重要になります。FinOps実践者やエンジニア（Engineer）は、これらの傾向を利用して、長期的な取り組みを追跡できます。

クラウドサービスプロバイダー（CSP）は、仮想マシンの大部分に線形モデルを用いて価格を設定しています。このモデルでは、仮想CPU（vCPU）の数を増やすと、コストが同じ倍率で増加します。平均VM数のみに基づいてコンピュートの傾向を把握しようとすると、歪んだコストビューが表示されます。さらに、VMコストに影響を与える割引手段も適用する必要があります。この歪みに対処するために、実効コストを使用して平均コンピュートコストの傾向を把握する代替手法を利用できます。

実効コストとは、すべての割引料金や値引きの影響を含み、将来の対象料金をカバーするために支払われた関連購入（一回限りまたは継続的）の償却額を加算したコストを表します。このプレイブックは、組織やFinOps実践者が[vCPUあたりの実効平均コンピュートコスト](<https://www.finops.org/wg/finops-kpis/?prod_kpis%5Bquery%5D=effec#modal-kpi-9649>)を算出するための手順を提供します。

### 計算式
[code] 
    (Amortized Cost + Unused Commitment Discount Cost + Compute Cost) / Total number of Cores


[/code]

### 本プレイブックの対象者

本プレイブックは、vCPUあたりの実効平均コンピュートコストの算出に関心がある、あらゆるクラウド導入レベルやFinOps成熟度（Maturity Model）にある組織内のすべてのペルソナ（Personas）が利用できます。

## 前提条件

コストと利用状況の情報を収集するために、FinOps実践者はCSPの請求データへのアクセス権限を持つ必要があります。この手順はCSPや組織によって異なるため、CSPが公開しているドキュメントを参照してください。

### 関与が必要な担当者

  * FinOps実践者またはエンジニア：実効コストを算出するために請求データを取得する
  * FinOps実践者またはエンジニア：vCPUあたりのコストを算出するためにvCPUメトリクスを取得する

### 必要な情報とリソース

本セクションでは、本プレイブックを成功に導くための情報を提供します。ここには、特定のデータソース、レポート、または関連する入力情報が含まれます。

#### 情報

  * 指定された期間における、オンデマンドコストおよびコミットメント割引（使用済みおよび未使用のコスト）を含む、コンピュートリソースのCSP請求データ
  * 指定された期間中にデプロイされたvCPU数に関するメトリクス

#### ツール、ユーティリティ、テンプレート

プレイブックの実行中に使用するツール、ユーティリティ、テンプレートへのリンクは以下の通りです。

  * AWS PowerShellまたはCloud Shell
  * AWS CloudWatch
  * AWS CUR請求データ
  * Amazon Athena
  * Azure Cost Management & Billing
  * Azure PowerShellまたはCloud Shell
  * FOCUS請求データまたはコンバーター

## AWSでのプレイブック実行手順

### オプション1 – AWS Cost ExplorerとPowerShell/Cloud Shell

#### スクリプト環境の準備

評価期間中のvCPU数を算出するには、まずスクリプト環境を構成する必要があります。本プレイブックでは、vCPU数を取得するためにPowerShellを使用します。利用可能な環境として、AWS Cloud Shell、またはローカルコンピューター上のPowerShellの2つが挙げられます。これらのセットアップ手順については、以下のAWS公式ドキュメントを参照してください。

  * [AWS PowerShell](<https://docs.aws.amazon.com/powershell/latest/userguide/pstools-getting-set-up.html>)
  * [AWS Cloud Shellの開始方法](<https://docs.aws.amazon.com/cloudshell/latest/userguide/getting-started.html>)

#### 実効コストの算出

実効コストを算出する前に、FinOps実践者は評価のスコープを決定する必要があります。

  * 期間
  * 請求スコープ（例：アカウント、リージョンなど）

本プレイブックでは、期間を1か月（例：2024年4月）とし、請求組織全体（一括請求アカウントおよびリンクされたアカウント）を使用することを前提とします。AWSはネット償却コスト（Net Amortized Cost）および償却コスト（Amortized Cost）に未使用のコミットメント割引を考慮するため、これを実効コストとして使用できます。

  * 分析を実行したい一括請求アカウントでAWSコンソールにログインします。
  * [Billing and Cost Management](<https://console.aws.amazon.com/costmanagement/home>)コンソールにある[Cost Explorer](<https://us-east-1.console.aws.amazon.com/costmanagement/home?region=us-east-1#/cost-explorer>)を開きます。
  * 以下の**レポートパラメータ**を設定します。この[レポートリンク](<https://us-east-1.console.aws.amazon.com/costmanagement/home#/cost-explorer?chartStyle=STACK&costAggregate=netAmortizedCost&excludeForecasting=false&filter=%5B%7B%22dimension%22:%7B%22id%22:%22Service%22,%22displayValue%22:%22Service%22%7D,%22operator%22:%22INCLUDES%22,%22values%22:%5B%7B%22value%22:%22Amazon%20Elastic%20Compute%20Cloud%20-%20Compute%22,%22displayValue%22:%22EC2-Instances%20\(Elastic%20Compute%20Cloud%20-%20Compute\)%22%7D%5D%7D%5D&futureRelativeRange=CUSTOM&granularity=Monthly&groupBy=%5B%22Service%22%5D&historicalRelativeRange=LAST_MONTH&isDefault=true&reportName=New%20cost%20and%20usage%20report&showOnlyUncategorized=false&showOnlyUntagged=false&usageAggregate=undefined&useNormalizedUnits=false>)には、以下のパラメータがあらかじめ設定されています。
    * **日付範囲**（例：過去1か月）
    * **粒度**：月別
    * **フィルター > サービス**：EC2-Instances（Elastic Compute Cloud - コンピュート）
    * **高度なオプション > コストの集計方法**：ネット償却コスト
  * 合計コストを記録します。この値は後のセクションで使用します。

#### vCPU数の算出

前セクションと同じスコープを適用し、PowerShellをサポートする任意のスクリプト環境を開きます。[上記](<#instructions-aws>)のドキュメントに記載されている方法を使用して、一括請求アカウントに認証します。評価対象の期間に合わせて「YYYY」「MM」「DD」を置き換えた上で、以下のスクリプトを実行します。
[code] 
    # Set time frame to evaluate

    $startDate = Get-Date -Year YYYY -Month MM -Day DD -Hour 00 -Minute 00 -Second 00

    $endDate = Get-Date -Year YYYY -Month MM -Day DD -Hour 23 -Minute 59 -Second 59

    $interval = New-Object Amazon.CostExplorer.Model.DateInterval

    $interval.Start = $startDate.ToString("yyyy-MM-dd")

    $interval.End = $endDate.ToString("yyyy-MM-dd")

    $hours = (($endDate - $startDate).Days) * 24


    # Using the UsageQuantity metric with Get-CECostAndUsage aggregates all usage numbers without taking into account the units. Filter only EC2: Running Hours

    $filter = @{

        "Dimensions" = @{

            "Key" = "USAGE_TYPE_GROUP"

            "Values" = @("EC2: Running Hours")

        }

    }


    # Get Cost Explorer data

    $result = Get-CECostAndUsage -TimePeriod $interval -Granularity MONTHLY -Metrics "UsageQuantity" -GroupBy @{Type="DIMENSION";Key="INSTANCE_TYPE"} -Filter $filter


    # Get Instance Types and vCPUs

    $instances = Get-EC2InstanceType | Select-Object InstanceType, @{Name="DefaultVCpus"; Expression={$_.VCpuInfo.DefaultVCpus}}


    # Access the ResultsByTime property

    $resultsByTime = $result.ResultsByTime


    # Loop through each result to calculate the vCPUs

    $totalvCPUs = 0

    foreach ($result in $resultsByTime) {

        $groups = $result.Groups


        foreach ($group in $groups) {

            $instanceType = $group.Keys

            $defaultvCPUs = ($instances | Where-Object { $_.InstanceType -eq $desiredInstanceType }).DefaultVCpus

            $usageQuantity = $group.Metrics["UsageQuantity"].Amount

            $totalVCPUs += ($defaultvCPUs * $usageQuantity / $hours)

        }


    # Output the number of vCPUs

        Write-Output "The total number of vCPUs used from '$startDate' to '$endDate' was $([math]::Round($totalVCPUs,5))"

    }


[/code]

#### KPIの算出

前の2つのセクションから実効コストとvCPU数を取得したら、以下のようにKPIを算出できます。
[code] 
    Effective Cost ÷ Number of vCPUs
[/code]

### オプション2 – AWS CURとAthena（高度なオプション）

このオプションを使用したKPIの算出はより高度な手法であり、組織のAWS環境の全体的なコストを増加させる可能性があります。FinOps実践者は、処理を進める前に、この手法で使用するS3、Athena、Glueなどのサービスの見積もりコストを[AWS Pricing Calculator](<https://calculator.aws/#/>)で評価する必要があります。また、組織のセキュリティ体制によっては、FinOps実践者に昇格された権限が必要になる場合があります。

#### 請求データの準備

  * コストと使用状況レポート（CUR）のセットアップ：CURの作成に必要な手順は、本プレイブックの対象外です。手順については、AWSの公式ドキュメント[コストと使用状況レポートの作成](<https://docs.aws.amazon.com/cur/latest/userguide/cur-create.html>)を参照してください。このプロセスにおいて、以下の必要な構成オプションが設定されていれば、既存のCURを使用できます。
    * 時間の粒度：コストを集計したい粒度を選択します。不明な場合は「時間別」を選択してください。
    * レポートのバージョニング：前のバージョンのレポートを上書きすることを選択します。
    * レポートデータの統合の有効化対象：Athenaを選択します。これにより、レポート形式が自動的にParquetに設定されます。
  * Athenaのセットアップ：詳細な手順については、公開されているAWSドキュメント[AWS CloudFormationテンプレートを使用したAthenaのセットアップ](<https://docs.aws.amazon.com/cur/latest/userguide/use-athena-cf.html>)を参照してください。このプロセスにより、CURデータをクエリできるようにするために必要なリソースがAthena、Glue、Lambdaにセットアップされます。

#### KPIの算出

  * Athenaを使用してCURデータをクエリし、vCPUあたりの実効コンピュートコストを算出する
    * 準備手順が完了し、対象のルックバック期間に必要な十分な時間が経過したら、以下のAthenaクエリを実行します。なお、購入済みのコミットメント割引や、AWSとの個別契約（例：Enterprise Discount Program（EDP））によっては、特定の列がCURに存在しない場合、このクエリの一部を削除する必要があります。現在のクエリは、FinOps実践者の組織がSavings Plans、リザーブドインスタンス（Reservations）、およびEDPを契約していることを前提としています。また、前月をルックバック期間として使用しています。

[code] 
    WITH curtemp_effectivecost AS (

        SELECT

            SUM(

                CASE

                    WHEN line_item_line_item_type LIKE '%DiscountedUsage%' THEN cast(

                        (reservation_net_effective_cost) as DECIMAL(18, 3)

                    )

                END

            ) AS Amortized_RI_Costs,

            SUM(

                CASE

                    WHEN line_item_line_item_type LIKE '%SavingsPlanCoveredUsage%' THEN cast(

                    (savings_plan_net_savings_plan_effective_cost) as DECIMAL(18, 3)

                )

                END

            ) AS Amortized_SP_Costs,

            SUM(

                CASE

                    WHEN line_item_line_item_type LIKE '%RIFee%' THEN cast(

                        (

                            reservation_net_amortized_upfront_fee_for_billing_period

                        ) as DECIMAL(18, 3)

                    )

                END

            ) AS Unused_RI_for_Period,

            SUM(

                CASE

                    WHEN (

                        line_item_line_item_type LIKE '%SavingsPlanRecurringFee%'

                    )

                    AND (

                        savings_plan_unused_amortized_upfront_commitment_for_billing_period IS NOT NULL

                    ) THEN cast(

                        (

                        savings_plan_unused_amortized_upfront_commitment_for_billing_period

                        ) as DECIMAL(18, 3)

                    )

                END

            ) AS Unused_SP_for_Period,

            SUM(

                CASE

                    WHEN (line_item_line_item_type LIKE '%Refund%')

                    AND (reservation_reservation_a_r_n IS NULL) THEN cast((line_item_unblended_cost) AS DECIMAL(18, 3))

                END

            ) AS EDP_Credits,

            SUM(

                CASE

                    WHEN line_item_line_item_type IN ('Usage') THEN cast(line_item_unblended_cost AS DECIMAL(18, 3))

                END

            ) AS On_Demand,

            SUM(

                CASE

                    WHEN (product_vcpu <> '') THEN (

                        cast(product_vcpu as DECIMAL(18, 0)) * (

                            line_item_usage_amount / (

                                24 * (

                                    DAY(

                                        date_trunc('month', DATE_ADD('month', -1, CURRENT_DATE)) + interval '1' month - interval '1' day

                                    )

                                )

                            )

                        )

                    )

                END

            ) AS vCPU

        FROM

            testcur

        WHERE

            MONTH = CAST(

                MONTH(DATE_ADD('month', -1, CURRENT_DATE)) AS varchar(4)

            )

            AND YEAR = CAST(

                YEAR(DATE_ADD('month', -1, CURRENT_DATE)) AS varchar(4)

            )

            AND (

                (

                line_item_product_code = 'AmazonEC2'

                AND product_product_family IN ('Compute Instance', 'CPU Credits')

            )

            OR line_item_product_code = 'ComputeSavingsPlans'

        )

    )

    SELECT

        CAST(

            (

                (

                    COALESCE(SUM(curtemp_effectivecost.Amortized_RI_Costs), 0) +

                    COALESCE(SUM(curtemp_effectivecost.Amortized_SP_Costs), 0) +

                    COALESCE(SUM(curtemp_effectivecost.Unused_RI_for_Period), 0) +

                    COALESCE(SUM(curtemp_effectivecost.Unused_SP_for_Period), 0) +

                    COALESCE(SUM(curtemp_effectivecost.EDP_Credits), 0) +

                    COALESCE(SUM(curtemp_effectivecost.On_Demand), 0)

                ) / SUM(curtemp_effectivecost.vCPU)

            ) AS DECIMAL(18, 3)

        ) AS Effective_Cost_per_vCPU

    FROM

        curtemp_effectivecost


[/code]

## Azureでのプレイブック実行手順

### スクリプト環境の準備

評価期間中のvCPU数を算出するには、まずスクリプト環境を構成する必要があります。本プレイブックでは、vCPU数を取得するためにPowerShellを使用します。利用可能な環境として、Azure Cloud Shell、またはローカルコンピューター上のPowerShellの2つが挙げられます。これらのセットアップ手順については、以下のMicrosoft公式ドキュメントを参照してください。

  * [Azure PowerShellのインストール方法](<https://learn.microsoft.com/en-us/powershell/azure/install-azure-powershell>)
  * [Azure Cloud Shellの開始方法](<https://learn.microsoft.com/en-us/azure/cloud-shell/get-started>)

### 実効コストの算出

実効コストを算出する前に、FinOps実践者は評価のスコープを決定する必要があります。

  * 期間
  * 請求スコープ（例：サブスクリプション、管理グループ、テナント、リージョンなど）

本プレイブックでは、期間を1か月（例：2024年4月）とし、単一のサブスクリプションを使用することを前提とします。Azureは償却コストに未使用のコミットメント割引を考慮するため、これを実効コストとして使用できます。

  * [Azureポータル](<https://portal.azure.com/>)にログインします。
  * 必要に応じて、ページ上部のバーにある歯車アイコンをクリックして、適切なディレクトリを選択します。
  * 検索バーを使用して、**コストの管理と請求**ブレードを開きます。
  * 必要に応じて、ページ上で該当する**請求スコープ** / **アカウント**を選択します。
  * **コスト管理**の下にある**コスト分析**をクリックします。
  * フィルターを使用して、日付フィルターを対象の月に設定し、**サービス名：Virtual Machines**、および**サブスクリプション**を対象のサブスクリプションに設定して評価します。
  * フィルターの下、左側にあるコストメトリクスを**実際のコスト**から**償却コスト**に変更します。この値を記録します。後のセクションで使用します。

### vCPU数の算出

前セクションと同じスコープを適用し、PowerShellをサポートする任意のスクリプト環境を開いて以下のスクリプトを実行します。その際、**< SubscriptionId>** をお使いのサブスクリプションIDに置き換え（サブスクリプションIDの確認方法は[こちら](<https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id#find-your-azure-subscription>)の手順を参照）、開始日と終了日を「YYYY-MM-DD」形式で入力してください。出力されたvCPU数を記録します。
[code] 
    # Set scope to evaluate

    $subscriptionId = ""

    $startDate = "YYYY-MM-DD"

    $endDate = "YYYY-MM-DD"


    # Connect to subscription

    $azSubscription = Get-AzSubscription -SubscriptionId $subscriptionId

    Set-AzContext -SubscriptionId $subscriptionId


    # Get usage data

    $usage = Get-AzConsumptionUsageDetail -IncludeAdditionalProperties -StartDate $startDate -EndDate $endDate | Where-Object { $_.Product -like "Virtual Machines*" }


    # Loop through usage to calculate the vCPUs

    $totalvCPUs = 0

    foreach ($usageDetail in $usage) {

        $additionalInfo = $usageDetail.AdditionalInfo | ConvertFrom-Json

        $vcpus = $additionalInfo.VCPUs

        $usagequantity = $usageDetail.usageQuantity

        $dailyVCPUUsage = ($usagequantity * $vcpus) / 24


        $totalVCPUs += $dailyVCPUUsage

    }


    # Output the number of vCPUs

    Write-Output "The total number of vCPUs used from '$startDate' to '$endDate' in Subscription '$($azSubscription.Name)' was $([math]::Round($totalVCPUs,5))"


[/code]

### KPIの算出

前の2つのセクションから実効コストとvCPU数を取得したら、以下のようにKPIを算出できます。
[code] 
    Effective Cost ÷ Number of vCPUs
[/code]

## Oracle Cloud Infrastructure（OCI）でのプレイブック実行手順

### 実効コストの算出

他のCSPとは異なり、コンピュートの割引はコミットメント割引からではなく、Oracleと顧客との間の契約価格表から適用されます。そのため、FinOps実践者が実効コストに影響を与えるために取れる手段は限られています。

実効コストを算出する前に、FinOps実践者は評価のスコープを決定する必要があります。

  * 期間
  * 請求スコープ（例：クラウドアカウント、テナント、リージョンなど）

本プレイブックでは、期間を1か月（例：2024年4月）とし、単一のテナントを使用することを前提とします。Oracleはすべての契約割引をコストに反映するため、これを実効コストとして使用できます。

  * [OCIポータル](<https://www.oracle.com/cloud/sign-in.html>)にログインします。
  * 検索バーを使用して**コスト分析**を開きます。
  * 以下のオプションを設定します。
    * **開始日**と**終了日**（例：2024年4月1日〜2024年4月30日）
    * **粒度**：月別
    * **表示**：コスト
    * **フィルター**：サービス > COMPUTE
    * **グループ化ディメンション**：サービス
  * **適用**をクリックします。
  * **コストの詳細**に合計コストが表示されます。この値を記録します。後のセクションで使用します。

### vCPU数の算出

OCIは、CPUをOCPU単位で測定します。OCPUからvCPUへの変換は、CPUアーキテクチャに基づきます。IntelおよびAMDの場合、1 OCPUは2 vCPUsに相当し、ARMの場合、1 OCPUは1 vCPUに相当します。詳細については、[OCI Computeの料金](<https://www.oracle.com/cloud/compute/pricing/>)を参照してください。

前セクションと同じスコープを使用します。本プレイブックでは、期間を1か月（例：2024年4月）とし、単一のテナントを使用します。Oracleはすべての契約割引をコストに反映するため、これを実効コストとして使用できます。

  * [OCIポータル](<https://www.oracle.com/cloud/sign-in.html>)にログインします。
  * 検索バーを使用して**コスト分析**を開きます。
  * 以下のオプションを設定します。
    * **開始日**と**終了日**（例：2024年4月1日〜2024年4月30日）
    * **粒度**：月別
    * **表示**：使用量
    * **フィルター**：サービス > COMPUTE
    * **グループ化ディメンション**：サービス、および製品説明
  * **適用**をクリックします。
  * **現在までの使用量**テーブルの詳細において、列ヘッダーに「**(OCPU per hour)**」が含まれるすべての列の値を合計します。IntelやAMDに加えてARMも実行している場合は、それらを個別に合計してください。
  * 評価期間中の合計vCPU数は、以下のように算出できます。
    _vCPU数 = (IntelおよびAMDの合計OCPU時間 × 2 + ARMの合計OCPU時間) ÷ (評価期間の日数 × 24)_

### KPIの算出

前の2つのセクションから実効コストとvCPU数を取得したら、以下のようにKPIを算出できます。
[code] 
    Effective Cost ÷ Number of vCPUs
[/code]

## FOCUSを使用したプレイブック実行手順

### スクリプト環境の準備

本プレイブックの執筆時点において、FOCUS仕様はGA（一般提供）ではなくプレビュー候補リリース（Preview Candidate Release）に分類されているため、FinOps実践者はこの点に留意する必要があります。これらの手順は、将来的な機能として捉えてください。FOCUS形式の請求データを取得するには、CSPから提供されているエクスポート機能またはコンバーターを使用します。

  * [Azure: FinOps Open Cost and Usage Specification (FOCUS) を使用したコスト詳細のエクスポート](<https://azure.microsoft.com/en-us/updates/export-cost-using-focus/>)
  * [FinOps.org: FOCUS Converter + Validator](<https://github.com/finopsfoundation/focus_converters>)

### 実効コストの算出

FOCUS仕様には実効コストの列が含まれており、これを使用してKPIを算出できます。

### vCPU数の算出

本プレイブックの執筆時点において、FOCUS標準にはvCPU数を記録する列が含まれていません。代わりに、FinOps実践者は上記のセクションで説明した方法のいずれかを使用してvCPU数を算出する必要があります。

  * [AWS：vCPU数の算出](<#calculating-vcpus-aws>)
  * [Azure：vCPU数の算出](<#calculating-vcpus-azure>)
  * [OCI：vCPU数の算出](<#calculating-vcpus-oci>)

### KPIの算出

前の2つのセクションから実効コストとvCPU数を取得したら、以下のようにKPIを算出できます。
[code] 
    Effective Cost ÷ Number of vCPUs
[/code]

## 成果と成功の指標

組織のクラウドコンピュート支出がどのように推移しているかを評価するために、本プレイブックを定期的（例：月次）に実行する必要があります。実効コストの観点では、上昇傾向は通常、コミットメントベースの割引カバー率が低下しているか、組織が過剰にコミットしていることを示します。一方、低下傾向は通常、コミットメントベースの割引カバー率が向上していることを示します。vCPUの観点では、低下傾向はより小規模な、またはより少ないコンピュートインスタンスが実行されていることを示し、上昇傾向はより大規模な、またはより多くのコンピュートインスタンスが実行されていることを示します。

FinOps実践者は、このKPIを使用して、財務（Finance）、エンジニアリング（Engineering）、プロダクト（Product）の各ペルソナ（Personas）と、コミットメントの将来計画やコンピュート利用率に関する議論を促進できます。さらに、このKPIをリーダーシップ（Leadership）と共有して、最適化の傾向を示すこともできます。

### 本プレイブック実行による主な成果

  * 本プレイブックを実行する主な成果は、指定された期間の実効コストに基づいて、標準化されたコンピュートのvCPUあたりコストを算出することです。これは、コミットメントベースの割引カバー率の変化を早期に察知する指標となります。

### 成功の指標

  * ある期間から次の期間への実効平均コストを追跡することで、組織はコンピュートコストの傾向をより正確に監視できます。低下傾向は、利用価値に対するコスト効率が向上していることを示します。

## 謝辞

本プレイブックの作成にご尽力いただいた以下の方方に感謝いたします。

[ ![Brian D’Altilio](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Brian D’Altilio Marsh McLennan ](<https://www.linkedin.com/in/brian-daltilio/>)

また、ご支援いただいた Laura Mills 氏、David Lambert 氏、Taylor Houck 氏にも感謝いたします。

最終更新日：2026年3月17日

## 目次

  * [前提条件](<#prerequisites>)
  * [AWSでの手順](<#instructions-aws>)
  * [Azureでの手順](<#instructions-azure>)
  * [OCIでの手順](<#instructions-oci>)
  * [FOCUSでの手順](<#instructions-focus>)
  * [成果と成功の指標](<#outcomes-success>)
  * [謝辞](<#acknowledgments>)

##### 関連するFinOpsケイパビリティ

[ 料金の最適化 ](<https://www.finops.org/framework/capabilities/rate-optimization/>)

---
format: md
title: "コミットメント割引の無駄の割合を計算する方法（How to Calculate Percentage of Commitment Discount Waste）"
---

[英語版]: https://www.finops.org/wg/how-to-calculate-percentage-of-cb-discount-waste/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

**要約:** コミットメントベース（CB）割引の無駄の割合を計算するために、FinOps実践者（FinOps Practitioner）は、特定の期間中に未使用のまま残った購入済みのコミットメント割引（リザーブドインスタンスやSavings Plansなど）の割合を測定します。このメトリクスは、過剰プロビジョニング（Over-provisioning）を示す重要な指標であり、将来のコミットメントを縮小すべきか、あるいはワークロードのカバー率を上げるべきかを実践者に判断させます。

## 目次

  * [前提条件](<#prerequisites>)
  * [AWSでの手順](<#instructions-aws>)
  * [Azureでの手順](<#instructions-azure>)
  * [GCPでの手順](<#instructions-gcp>)
  * [成果と成功の指標](<#outcomes-success>)
  * [謝辞](<#acknowledgments>)

このプレイブックは、コミットメント割引の未使用部分を測定する方法に関するガイダンスを提供します。[コミットメント割引の無駄の割合](<https://www.finops.org/wg/finops-kpis/?prod_kpis%5BrefinementList%5D%5Bcapabilities.title%5D%5B0%5D=Rate%20Optimization#modal-kpi-9651>)とは、オンデマンドの支出に適用されなかったコミットメントの割合を指します。このプレイブックは、ビジネスにとってどの割合が適切であるか、または優れているかを規定するものではなく、情報に基づいたビジネス上の意思決定を行うために、このメトリクスを算出する方法を説明するものです。

**計算式**
[code] 
    unused CB percentage = (Cost of CB Discount unused / total cost CB Discount) x 100


[/code]

### 本プレイブックの対象者

コミットメント割引の購入を担当する人、コミットメント割引の有効性を判断するための測定方法を作成する担当者、またはその両方を担当する人を対象としています。

## 前提条件

以下のセクションでは、KPIを計算、監視、改善するために必要なデータとステークホルダーの関与について説明します。

  * 以下の情報を提供するツールやデータへのアクセス： 
    * 仮想マシン（VM）の総支出
    * コミットメント割引が適用されたVMの総コスト
    * VMリソースの現在のオンデマンド価格
  * クラウドサービスプロバイダー（CSP）ネイティブのコスト管理ツールへのアクセス： 
    * Azure Cost Management
    * AWS Cost Explorer
    * SQLクエリ用のデータエクスポートが設定および有効化されたGCP BigQuery
  * 期間 
    * データを効果的に取得するには、特定の対象期間を決定することが不可欠です。選択する期間によってツールから得られる結果が異なるため、このステップは極めて重要です。
    * 月、日、またはその他の単位

### 関与が必要な関係者

  * FinOps実践者は、データ取得プロセスの開発を支援します。
  * 財務（Finance）チームは、コミットメント支出とクラウドサービスプロバイダーの請求額との照合・検証を行います。
  * SQLデベロッパーは、組織の成熟度が高く、SQLクエリ用にGCP BigQueryやAWS CUR（Athena）のデータがデプロイされている場合に必要となります。
  * 開発者は、プログラムによってデータを取得するためのAPIコーディングインターフェースを開発します。
  * 調達（Procurement）スタッフは、KPIの結果を改善するためにCSPのコミットメントの調整が必要な場合に関与します。

**注意:** 各担当者の関与度合いは、組織の成熟度や個人のスキル、知識に応じて、組織ごとに異なる場合があります。

### 必要な情報とリソース

このセクションでは、本プレイブックを成功に導くための情報を提供します。ここには、特定のデータソース、レポート、または関連するインプットが含まれます。

#### 情報

  * AWS Billing & Cost Management – Cost Explorerなどは、ユーザーがAmazon Web Services（AWS）リソースの支出を追跡、分析、制御できるように設計されています。
  * AWS Cost and Usage Report（CUR）は、より優れた財務管理と最適化のために、AWSサービスのコストと使用状況に関する詳細なインサイトを提供します。
  * Azure Cost Managementおよびコスト分析ツールは、組織がクラウド支出を監視および最適化できるように設計されています。
  * Azure Billing APIは、ユーザーがプログラムによってAzureクラウドサービスの使用状況とコストを管理および監視できるようにするツールとインターフェースのセットです。これらのAPIは、請求データの取得、請求書の生成、支出の追跡、サブスクリプションの管理、請求プロセスの自動化などの機能を提供します。
  * GCP BigQueryは、Google Cloud Platformが提供する、フルマネージドでサーバーレスのデータウェアハウスおよび分析プラットフォームです。ユーザーは大規模なデータセットを迅速かつ効率的に保存、クエリ、分析できます。

#### ツール、ユーティリティ、テンプレート

プレイブックの実行中に使用するツール、ユーティリティ、テンプレートへのリンクです。

  * AWS 
    * [AWS Cost and Usage Reports](<https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html>)
    * [コストと使用状況レポート用のAthenaクエリ](<https://docs.aws.amazon.com/cur/latest/userguide/cur-query-athena.html>)
    * [Savings Plansの理解 – AWSデータエクスポート](<https://docs.aws.amazon.com/cur/latest/userguide/cur-sp.html>)
    * [Cost Explorerを使用した支出と使用状況の分析 | AWS re:Post](<https://repost.aws/knowledge-center/cost-explorer-analyze-spending-and-usage>)
    * [AWS CloudFormationテンプレートを使用したAthenaのセットアップ – AWSデータエクスポート](<https://docs.aws.amazon.com/cur/latest/userguide/use-athena-cf.html>)
  * Azure 
    * [Azure予約の使用率の表示 – Microsoft Cost Management](<https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/reservation-utilization>)
    * [個々のサブスクリプションのAzure予約の使用状況 – Microsoft Cost Management](<https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/understand-reserved-instance-usage>)
    * [Azureリソースの予約の管理](<https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/manage-reserved-vm-instance>)
  * GCP 
    * [コミットメント割引の説明](<https://cloud.google.com/docs/cuds>)
    * [BigQueryへのCloud Billingデータのエクスポート](<https://cloud.google.com/billing/docs/how-to/export-data-bigquery>)

## Cost Explorerを使用したAWSでの手順

### 最もシンプルな方法（クロール）

  * AWS Cost ManagementダッシュボードのRI利用率レポートからCSVレポートを生成する必要があります。
  * この（RI/SP）利用率レポートは、EC2インスタンスを対象とした、事前定義された1日間の日付/時間範囲にする必要があります。
  * さらに、フィルターを変更して、より詳細な条件（リージョン、インスタンスタイプ、期間など）に絞り込むこともできます。これらはオプションです。
  * 適切なフィルターとグループ化オプションを適用すると、選択したコミットメント割引コストの内訳が表示されます。
  * CSVをダウンロードして保存します。CSVファイル内で「Total Asset value（総資産価値）」と「Cost for unused hours（未使用時間のコスト）」の列を確認できます。
  * その時点で、テーブル全体のコストを計算するか、次のステップで説明する各行の詳細なコストを計算できます。
  * 計算式は単純に「(未使用時間のコスト / 総資産価値) x 100」です。
  * たとえば、総資産価値が100ドルで、未使用コストが30ドルの場合、未使用コストの割合は (30 / 100) x 100 = 30% と計算できます。

### より高度な方法（ウォーク/ラン）

  * Athenaを使用して特定の日（YYYY-MM-DD）の未使用コミットメント割引コストを計算するには、コミットメント割引情報を含む関連データソースへのアクセス権が必要です。データにアクセスできたら、AthenaでSQLクエリを記述してコストを計算できます。
  * コミットメント割引情報を含む `commitment_discounts` という名前のテーブルがあり、そのテーブルに `start_date`、`end_date`、`discount_amount`、`usage_amount` などの列があると仮定すると、以下のクエリを使用できます。
  * 
[code]>sql


                    SELECT SUM(discount_amount) AS unused_discount_cost

                    FROM commitment_discounts

                    WHERE start_date <= DATE YYYY-MM-DD' -- Start date is on or before YYYY-MM-DD

                      AND end_date >= DATE 'YYYY-MM-DD' -- End date is on or after YYYY-MM-DD

                      AND usage_amount = 0 -- No usage on YYYY-MM-DD


[/code]

  * このクエリは、開始日と終了日に基づいてコミットメント割引をフィルタリングし、2024年4月2日の使用量がゼロである割引のみを選択します。`SUM(discount_amount)` は、その日の未使用コミットメント割引の総コストを計算します。
  * 次のステップでは、1日あたりのコミットメント割引の総コストを計算します。これには、Athenaデータベース内の関連データへのアクセス権が必要です。`date` と `cost` の列を持つ `commitment_discounts` という名前のテーブルがあると仮定すると、以下のAthenaクエリを使用して、選択した時点（YYYY-MM-DD）の総コストを計算できます。
  * 
[code]>sql


                SELECT SUM(cost) AS total_cost

                FROM commitment_discounts

                WHERE date = 'YYYY-MM-DD`'


[/code]

  * このクエリでは、`date` 列が指定された日付「YYYY-MM-DD」と一致する `commitment_discounts` テーブルから、`cost` 列の合計を選択しています。結果は、その日のコミットメント割引の総コストになります。
  * その時点で、テーブル全体のコストを計算するか、次のステップで説明する各行の詳細なコストを計算できます。
  * 計算式は単純に「(未使用時間のコスト / 総資産価値) x 100」です。
  * たとえば、総資産価値が100ドルで、未使用コストが30ドルの場合、未使用コストの割合は (30 / 100) x 100 = 30% と計算できます。

## Azureでの手順

### 未使用CBコストの割合を算出するために必要なデータの取得（ウォーク）

  * Azure Cost Managementの予約ビューインターフェースにある「コスト分析」セクションを使用します。
  * 分析対象として、事前に決定した時間範囲を設定します。推奨事項は、1日だけのカスタム日付グループを選択することです。
  * リザーブドインスタンスに関連する総コストと未使用コストの内訳が表示されます。
  * 未使用のCBコストをCBの総コストで割り、100を掛けることで、未使用CBコストの割合を計算します。
  * たとえば、CBの総コストが100ドルで、未使用のCBコストが30ドルの場合、未使用CBコストの割合は ($30 / $100) x 100 = 30% と計算できます。

### Azure Cost Analyticsへのアクセスに必要なデータをプログラムで取得する方法

**RESTful APIの使用。** 以下は、アクセストークンを取得し、Azure Cost Management + Billing APIを呼び出して予約のサマリーを取得する方法を示すPythonコードスニペットです（プレースホルダーを実際のサブスクリプションID、テナントID、クライアントID、およびクライアントシークレットに置き換える必要があります）。

以下は、Azure Cost Management APIに対してHTTP GETリクエストを送信し、指定された評価期間内に特定のAzureサブスクリプションで消費されたリザーブドインスタンスの総コストを取得する例です。
[code] 
    python


    import requests


    import datetime


    # Set the Azure subscription ID


    subscription_id = '<your_subscription_id>'


    # Set the evaluation period start and end dates


    start_date = datetime.datetime(YYYY, MM, DD)


    end_date = datetime.datetime(YYYY, MM, DD)


    # Format the dates in the required format (YYYY-MM-DD)


    start_date_str = start_date.strftime('%Y-%m-%d')


    end_date_str = end_date.strftime('%Y-%m-%d')


    # Set the Azure Cost Management API endpoint


    api_endpoint = f'https://management.azure.com/subscriptions/\{subscription_id\}/providers/Microsoft.CostManagement/query?api-version=2019-11-01'


    # Set the query to retrieve the total cost of reserved instances


    query = {


        "type": "ActualCost",


        "timeframe": "Custom",


        "timePeriod": {


            "from": start_date_str,


            "to": end_date_str


        },


        "dataset": {


            "granularity": "Monthly",


            "aggregation": {


                "totalCost": {


                    "name": "PreTaxCost",


                    "function": "Sum"


                }


            },


            "filter": {


                "and": [


                    {


                        "dimension": {


                            "name": "ReservationId",


                            "operator": "NotIn",


                            "values": []


                        }


                    }


                ]


            }


        }


    }


    # Make the HTTP GET request


    response = requests.get(api_endpoint, json=query)


    # Check if the request was successful


    if response.status_code == 200:


        # Parse the response JSON


        response_json = response.json()


        # Retrieve the total cost from the response


        total_cost = response_json['properties']['rows'][0][0]


        # Print the total cost


        print(f'Total cost of reserved instances: \{total_cost\}')


    else:


        # Print the error message


        print(f'Error: \{response.text\}')


[/code]

`<your_subscription_id>` を実際のAzureサブスクリプションIDに置き換えてください。また、`start_date` と `end_date` 変数を調整して、対象となる評価期間を指定します。次のステップの後の最終計算のために、出力を必ず記録しておいてください。

  * 上記のコードは簡略化された例であり、エラー処理やページネーションは含まれていません。多数の予約や詳細な使用状況データがある場合は、これらが必要になることがあります。
  * 未使用コミットメント割引コストの対象期間のデータを取得する方法：

[code] 
    >python


    import requests


    import datetime


    # Set the required parameters


    subscription_id = 'your_subscription_id'


    evaluation_start_date = datetime.datetime(YYYY, MM, DD)


    evaluation_end_date = datetime.datetime(YYYY, MM, DD)


    # Construct the API endpoint URL


    base_url = 'https://management.azure.com'


    api_version = '2022-01-01'


    resource_group = 'your_resource_group_name'


    provider_namespace = 'Microsoft.CostManagement'


    provider_type = 'query'


    path = f'subscriptions/\{subscription_id\}/providers/\{provider_namespace\}/\{provider_type\}'


    url = f'\{base_url\}/\{path\}?api-version=\{api_version\}'


    # Construct the request body


    request_body = {


       'type': 'Usage',


       'timeframe': 'Custom',


       'timePeriod': {


           'from': evaluation_start_date.isoformat(),


           'to': evaluation_end_date.isoformat()


       },


       'dataset': {


           'granularity': 'Daily',


           'aggregation': {


               'totalCost': {


                   'name': 'PreTaxCost',


                   'function': 'Sum'


               }


           },


           'filter': {


               'and': [


                   {


                       'dimension': {


                           'name': 'ReservationId',


                           'operator': 'NotIn',


                           'values': ['']


                       }


                   },


                   {


                       'dimension': {


                           'name': 'ReservationId',


                           'operator': 'NotContains',


                           'values': ['/']


                       }


                   }


               ]


           }


       }


    }


    # Send the HTTP GET request


    response = requests.get(url, json=request_body)


    # Check the response status code


    if response.status_code == 200:


       # Extract the total unused cost from the response


       total_unused_cost = response.json()['properties']['rows'][0]['totalCost']


       print(f'Total unused cost of reserved instances: \{total_unused_cost\}')


    else:


       print(f'Failed to retrieve total unused cost. Status code: \{response.status_code\}')


[/code]

`'your_subscription_id'`、`'your_resource_group_name'`、および評価の開始日と終了日を独自の値に置き換えてください。また、必要な権限があることを確認してください。

  * 総コストと未使用コストの結果を取得し、未使用コストをCBの総コストで割り、100を掛けます。
  * たとえば、CBの総コストが100ドルで、未使用のCBコストが30ドルの場合、未使用CBコストの割合は ($30 / $100) x 100 = 30% と計算できます。

## GCPでの手順

APIおよびコンソールから、1日あたりの総CBコストを取得できます。

コンソールから総CBコストを取得するには、GCPコンソールにアクセスし、カスタム期間を指定してカスタムレポートを生成し、SKUごとにグループ化することで、1日あたりのコストを取得できます。確約利用割引（CUD：Commitment Use Discount）はSKUの一種です。SKU内の「Commitments（確約）」でフィルターをかけることで、CBのみを統合したリストを取得できます。

フィルタリングされた合計額が下部に表示されます。

このコストを記録します。未使用コストを取得するために、たとえばCUDの総コストが100ドルで未使用コストが30ドルの場合、未使用コストの割合は (30 / 100) x 100 = 30% と計算できます。

GCP BigQueryでは、以下のクエリを使用して、1日あたりのCUDコミットメントの未使用コストを特定できます。
[code] 
    >SQL


    SELECT


      date(start_time) AS start_date,


      date(end_time) AS end_date,


      sum(usage_rate) x (end_time - start_time) AS total_usage_rate,


      sum(commitment_unit_usage_rate) x (end_time - start_time) AS total_commitment_unit_usage_rate


    FROM


      `your_project.dataset.table_name`


    WHERE


      start_time >= '2023-07-01T00:00:00' AND end_time < '2023-07-02T00:00:00'


    GROUP BY


      date(start_time),


      date(end_time)


    ORDER BY


      total_usage_rate DESC;


[/code]

上記のクエリは、データセット内の特定の期間における総使用率とコミットメントユニット使用率を計算します。‘start_time’ 列と ‘end_time’ 列を使用してデータをフィルタリングし、‘usage_rate’ 列と ‘commitment_unit_usage_rate’ 列を使用して、それぞれ総使用率とコミットメントユニット使用率を計算します。結果は日付ごとにグループ化され、総使用率の降順でソートされます。

CUDの総コストが100ドルで、未使用コストが30ドルの場合、未使用コストの割合は (30 / 100) x 100 = 30% と計算できます。

## 成果と成功の指標

### 本プレイブック実行による主な成果

  * 主な成果として、エンドユーザーは総コミットメント割引コストと未使用コストの取得方法を判断できるようになり、結果としてコミットメント割引の無駄の割合（%）を計算できるようになります。
  * この割合を把握することで、クラウドリソースのコミットメントの過剰購入について、より深いインサイトを得られます。
  * また、この割合は、タグに基づいて計算されたコストのチャージバックやショーバックの妥当性やカバー率を示す指標にもなります。

### 成功の指標

  * GCP、Azure、またはAWSにおけるコミットメント割引の無駄の割合が明確に算出されていることによって、成功が定義されます。

### 例外と考慮事項

  * 無駄の割合は、最終的に金額として表されます。ただし、金額的な影響の大小は、コミットメント割引の総コストに依存します。これは、さまざまなビジネス測定基準やコミットメント割引の有効性に実質的に相関します。

## 謝辞

本プレイブックの作成にあたり、ご協力いただいた以下の方方に感謝いたします。

[ ![Gordon Douglass](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Gordon Douglass（SAP） ](<https://www.linkedin.com/in/gordondouglass/>)

また、サポーターであるDavid Lambert氏、Taylor Houck氏、Brian D’Altilio氏にも感謝いたします。

最終更新日: 2026年3月17日

## 目次

  * [前提条件](<#prerequisites>)
  * [AWSでの手順](<#instructions-aws>)
  * [Azureでの手順](<#instructions-azure>)
  * [GCPでの手順](<#instructions-gcp>)
  * [成果と成功の指標](<#outcomes-success>)
  * [謝辞](<#acknowledgments>)

##### 関連するFinOpsケイパビリティ

[ 料金の最適化 ](<https://www.finops.org/framework/capabilities/rate-optimization/>)

---
title: 実効割引率（Effective Savings Rate: ESR）の算出方法（How to Calculate Effective Savings Rate (ESR)）
---

[英語版]: https://www.finops.org/wg/how-to-calculate-effective-savings-rate-esr/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

**概要:** 実効割引率（Effective Savings Rate: ESR）は、FinOps実践者がリザーブドインスタンス（RIs）やSavings Plans（SPs）などのクラウド割引手段の真の財務パフォーマンスを測定するために使用するKPIです。ESRを算出するには、チームは生成された実際の節約額と、割引が適用されなかった場合に発生したはずのコストであるオンデマンド等価（On-Demand Equivalent: ODE）支出を比較する必要があります。

## 目次

  * [前提条件](<#prerequisites>)
  * [プレイの実行手順](<#instructions>)
  * [成果と成功の指標](<#outcomes-success>)
  * [関連リソース](<#related-resources>)
  * [謝辞](<#acknowledgments>)

[実効割引率](<https://www.finops.org/wg/finops-kpis/?prod_kpis%5Bquery%5D=effec#modal-kpi-9650>)（ESR）は、クラウド割引手段に対する投資対効果（ROI）であり、真の節約パフォーマンスを測定できる唯一のアウトプットメトリクスです。このプレイブックでは、AWSでこのメトリクスを算出する手順を説明します。他のクラウドサービスプロバイダー（CSP）のESRを算出する場合にも、同様の調整を加えた手順を適用できます。

### 本プレイブックの対象者

クラウド利用コストを料金の最適化するために[コミットメント割引の管理](<https://www.finops.org/framework/capabilities/manage-commitment-based-discounts/>)を行うすべての人が、ESRを使用すべきです。

## 前提条件

実効割引率（ESR）を算出して活用するには、請求データと利用状況データへのアクセスが主な要件となります。これには、AWS Billing and Cost ManagementなどのCSPネイティブツール、サードパーティのクラウドコスト管理ツール、または、カバー率、利用率、リスト価格（オンデマンド単価）と比較して達成された割引などのコミットメント割引情報を含む、必要な基本メトリクスを提供するカスタム構築のレポートソリューションが含まれます。データソースはクラウドサービスプロバイダーによって異なります。生データファイルを含む詳細な請求情報、請求ダッシュボード、またはクラウド請求データへのコマンドラインアクセスへのアクセス権が必要です。

### 関与が必要な担当者

  * エンジニアリング、FinOps、または財務チームのメンバーが、パブリック料金とクラウドサービスに対して実際に支払った料金を比較する計算を行います。
  * エンジニアリング、FinOps、または財務チームのメンバーが、コミットメント割引管理の有効性のベンチマークとして使用するために、可視化とレポート作成を目的としてメトリクスを公開します。

### 必要な情報とリソース

実効割引率を算出するには、クラウドサービスプロバイダーからのデータが必要であり、かつアクセス可能である必要があります。

  * クラウドサービスプロバイダーに基づいて、必要なデータセットが揃っていることを確認します。
  * 請求データへのアクセス権（IAM権限）があることを確認します。
  * 実効割引率を算出するためにデータをクエリする方法があることを確認します。

#### 情報

  * 実効割引率を算出するには、クラウドコストと利用状況データが必要です。このデータは、割引された利用状況のオンデマンド等価（ODE）支出、つまり割引を受けなかった場合の利用料金を表している必要があります。これは、AWS Cost Explorerコンソールなどの一部の一般的なレポートツールからは取得できません。
  * このメトリクスを正常に計算するには、Cost Explorer CLIなどのツールを使用してこの情報にアクセスする方法を理解している必要があります。

**ツール、ユーティリティ、テンプレート**

プレイブックの実行中に使用するツール、ユーティリティ、テンプレートへのリンクです。

[AWS Cost Explorer CLI](<https://docs.aws.amazon.com/cli/latest/reference/ce/>): Cost Explorer APIを使用して、コストと利用状況データをプログラムでクエリできます。これにより、本稿執筆時点ではCost Explorerダッシュボードからは取得できない、割引前の「オンデマンド等価」支出を提供します。

## プレイの実行手順

このプレイは、適切なリソースアクセス権を持つ任意のペルソナが実行できますが、通常はFinOps実践者またはエンジニアリングメンバーが実行します。

### 準備 – 5分

  * 選択したツールにログインし、必要なすべてのデータにアクセスできることを確認します。
    * AWS CLIが統合されたコマンドラインツール（[手順](<https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html>)）
    * AWS CLIプロファイル、またはコミットメントの利用率とカバー率にアクセスするための適切な権限を持つAWSコンソール
  * 以下に示すCLIコマンドをカスタマイズして、ESR計算に使用するデータポイントを取得します。カスタマイズするパラメータには以下が含まれます。
    * 実効割引率の対象期間（丸1ヶ月を推奨）
    * ESRを算出したいサービス
      * このプレイではAWSのコンピューティングサービスのみを扱います。他のサービスでは、別の[コマンドラインプロンプト](<https://docs.aws.amazon.com/cli/latest/>)（AWS CLIドキュメント）が必要になる場合があります。

### 例 – 10分

#### データ収集 – オプション1

次のAWS CLIコマンドを実行して、以下のAWS Compute専用のESR計算ツールで使用する必要な値を抽出します。

_（注意：終了日は含まれません。特定のニーズに合わせて、ハイライトされた日付期間を変更することを検討してください）_

AWS CLIコマンド: [**get-savings-plan-utilization**](<https://docs.aws.amazon.com/cli/latest/reference/ce/get-savings-plans-utilization.html>) &rarr; 返される値: OnDemandCostOfSPHoursUsed（ステップA）および NetSPSavings（ステップE）:
[code] 
        aws ce get-savings-plans-utilization --time-period Start=2024-05-01,End=2024-06-01 --filter '{ "Dimensions": { "Key": "SAVINGS_PLANS_TYPE", "Values": [ "ComputeSavingsPlans", "EC2InstanceSavingsPlans" ] } }' --query 'Total.Savings.[{OnDemandCostOfSPHoursUsed: OnDemandCostEquivalent}, {NetSPSavings: NetSavings}]'


[/code]

AWS CLIコマンド: [**get-reservation-utilization**](<https://docs.aws.amazon.com/cli/latest/reference/ce/get-reservation-utilization.html>) &rarr; 返される値: OnDemandCostOfRIHoursUsed（ステップB）および NetRISavings（ステップF）:
[code] 
        aws ce get-reservation-utilization --time-period Start=2024-05-01,End=2024-06-01 --filter '{ "Dimensions": { "Key": "SERVICE", "Values": [ "Amazon Elastic Compute Cloud - Compute" ] } }' --query 'Total.[{OnDemandCostOfRIHoursUsed: OnDemandCostOfRIHoursUsed}, {NetRISavings: NetRISavings}]'


[/code]

AWS CLIコマンド: [**get-savings-plan-coverage**](<https://docs.aws.amazon.com/cli/latest/reference/ce/get-savings-plans-coverage.html>) &rarr; 返される値: OnDemandCost（ステップC）
[code] 
        aws ce get-savings-plans-coverage --time-period Start=2024-05-01,End=2024-06-01 --filter '{ "Dimensions": { "Key": "SERVICE", "Values": [ "Amazon Elastic Compute Cloud - Compute", "Amazon EC2 Container Service", "Amazon Elastic Container Service", "Amazon Elastic Container Service for Kubernetes", "AWS Lambda" ] } }' --query 'SavingsPlansCoverages[].Coverage.{OnDemandCost: OnDemandCost}'


[/code]

#### データ収集 – オプション2

あるいは、AWSコンソールを使用して、3つの標準レポートからESR計算に必要な値を簡単に取得できます。

[リザーブドインスタンス利用率レポート](<https://us-east-1.console.aws.amazon.com/costmanagement/home?region=us-east-1#/ri/utilization>)（ステップBおよびステップF）:

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201932%20304'%3E%3C/svg%3E)

[Savings Plans利用率レポート](<https://us-east-1.console.aws.amazon.com/costmanagement/home?region=us-east-1#/savings-plans/utilization>)（ステップAおよびステップE）:

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201932%20305'%3E%3C/svg%3E)

[Savings Plansカバー率レポート](<https://us-east-1.console.aws.amazon.com/costmanagement/home?region=us-east-1#/savings-plans/coverage>)（ステップC）

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201931%20328'%3E%3C/svg%3E)

#### ESR計算ワークシート

CLI計算から返された値を使用して、表示されているデータを入力し、以下のようにESRを算出します。

**パート1** | **データ入力:**  
---|---  
A. Savings Planのオンデマンド等価支出（EC2、Fargate、Lambda） |   
B. リザーブドインスタンスのオンデマンド等価支出（EC2） |   
C. オンデマンド支出（EC2、Fargate、Lambda） |   
**パート2** |   
D. コンピューティングのオンデマンド等価支出（上記のA + B + C） |   
E. コンピューティング関連のSavings Plansによる節約額 |   
F. コンピューティング関連のリザーブドインスタンスによる節約額 |   
**パート3** |   
G. コンピューティングのRIおよびSPによる節約額（上記のE + F） |   
**節約成果を達成するためにかかったコスト（該当する場合）を入力** |   
H. 節約達成コスト（CMP、サービス、時間、ツールなどのコスト） |   

#### 実効割引率の算出
[code] 
        Effective Savings Rate (G - H) / D


        (RI & SP Savings minus Costs to Achieve Savings Outcome) / On-Demand Equivalent Spend


[/code]

#### その他の計算式:
[code] 
        Effective Savings Rate = Cloud Savings Generated / On Demand Equivalent (ODE) Spend


[/code]

例: SPによる節約額 $5,000 / ODE支出 $10,000 = 実効割引率 50%
[code] 
        Effective Savings Rate = Reserved Instance (RI)/Savings Plan (SP) Utilization x RI/SP Coverage x RI/SP Discount


[/code]

例: SP利用率 90% x カバー率 100% x 割引率 50% = 実効割引率 45%

## 成果と成功の指標

### 本プレイブックを実行することによる主な成果

  * 自社のESRを把握できる
  * ESRを向上させるためのアクションを実行できる（状況に応じた推奨アクションについては以下を参照）
  * 段階的なコスト節約を継続的に生み出せる

### 成功の指標

メトリクスは、他社と比較して自社がどのような状況にあるかを理解し、改善のためのアクションをとるために使用できなければ意味がありません。FinOpsチームが、さまざまな組織タイプやクラウド支出レベルにおいて、優れたESRがどのようなものかを理解できるようにするための業界調査が行われています。

ESRベンチマーキングからの洞察:

ProsperOpsが実施した[ベンチマーク分析](<https://www.prosperops.com/report/effective-savings-rate-esr-benchmarking-insights/>)（AWS Cost and Usage Reportsから得られた、何千もの匿名化されたAWS組織のデータを使用）によると、EC2、Lambda、Fargateを含むAWSコンピューティングの料金の最適化の成果は一般的に低く、改善の余地が大きく残されていることがわかりました。

ESRの中央値は0%であり、これは組織がAWS Savings Plansやリザーブドインスタンスなどの割引手段を活用せず、オンデマンド料金を支払っていたことを意味します。上位25%（75パーセンタイル）であってもESRはわずか23%であり、これは組織がオンデマンド料金から23%の割引を創出したことを意味します。一方、上位2%（98パーセンタイル）のワールドクラスのESRは46%に達していました。

ESRが低くなる要因としては、いくつかの理由が考えられます。組織が料金の最適化よりもエンジニアリングの最適化を優先している可能性、最適とは言えない料金の最適化戦略をとっているものの改善できることに気づいていない可能性、そしてエンジニアリングの選択がESRに影響を与えている可能性（「考慮事項」セクションを参照）などです。実際に、AWS Savings Plansが最も人気があり（AWS組織の38%が使用）、標準リザーブドインスタンスを使用しているのはわずか18%、コンバーティブルリザーブドインスタンスを使用しているのは14%でした。

ベンチマーキングのベストプラクティス:

ESRデータのベンチマーキングにおけるベストプラクティスとしては、業界や利用状況に基づいて他社と比較することが有効です。ESRと利用状況には相関関係があるようです。これにはいくつかの理由が考えられます。利用状況が低い企業は、クラウドコスト最適化に関するリソースや専門知識が少ない傾向があります。また、将来の見通しが不確実な若い企業である可能性もあり、3年契約ではなく1年契約を選択することで、割引率が低くなっていることも考えられます。

ESRセグメントに基づくアクションの実行:

以下では、（1）マイナスのESR、（2）平均以下のESR、（3）利用状況は低いが平均以上のESR、（4）利用状況が高く平均以上のESRのセグメントについて説明し、推奨されるアクションを提案します。

  * マイナスのESR – コンピューティングに対してオンデマンド料金以上の割増料金を支払っています。これは、過剰なコミットメントや、コミットメントの利用率が低いことが原因と考えられます。利用状況とコミットメントが一致していません。コミットメントを期限切れにさせるか、利用状況に合わせて調整するなど、コミットメントの解消を検討してください。
  * 平均以下のESR – ESRが低く、75パーセンタイルを下回っている場合、ESRと料金の最適化を向上させる大きな経済的メリットがあります。自動化を導入することで、計画的か未計画かを問わず将来の変化に適応し、手動でのコミットメント管理を減らすことができます。
  * 利用状況は低いが平均以上のESR – ESRは特定の時点で測定されるため、日々変動する可能性があります。高いESRを継続的に達成するには、現在のESRが持続可能であるか、そして将来的に利用状況がどのように変化するかを自問する必要があります。利用状況が減少しているだけであれば、ESRの上昇は一時的なものである可能性が高いです。今後、組織の利用状況が増加するにつれて（特に変動の激しい環境において）、ESRを継続的に高く維持しながら、最大限の柔軟性を提供するさまざまな種類の割引手段のポートフォリオを検討する必要があるかもしれません。
  * 利用状況が高く平均以上のESR – ESRが継続的に高く、将来的に利用状況の変化が予想されないのであれば、素晴らしい状態です。しかし、安定して高いコミットメントカバー率と利用率を維持することは極めて困難です。このような利用パターンと継続的に高いESRが維持されているケースは滅多にありません。

自問すべき質問には、以下のようなものがあります。

  * ESRを最大化することで、どれだけの増分価値を得られますか？
  * 例えば、ESRを80パーセンタイルから98パーセンタイルに引き上げる価値はどれくらいですか？（ESRを40%から46%に向上させる場合）
  * 自社のコスト最適化戦略は持続可能ですか？
  * 将来のエンジニアリングの最適化によって、利用状況が減少することを予想していますか？AWS Savings Plansなどの支出ベースの割引手段に依存する戦略では、過剰なコミットメントのリスクが生じます。より柔軟な割引手段を導入した方がよいでしょうか？
  * 手動でのコミットメント管理を自動化技術に任せることで、他の優先事項に集中できますか？
  * 大規模に運用している場合、クラウドプロバイダーとのエンタープライズ契約を検討しているか、すでに締結している可能性があります。自動化を伴うより柔軟な料金の最適化戦略により、コミットメントの有効期限をエンタープライズ契約の条件と体系的に整合させることができます。これにより、クラウドプロバイダーとの契約交渉や更新の議論において、より有利な立場に立つことができます。

**例外と考慮事項**

ESRはエンジニアリングの選択に依存する場合があります。チームが行うエンジニアリングの選択が、ESRにプラスまたはマイナスの影響を与える可能性があることに注意することが重要です。例えば、AWSはリージョン、インスタンスファミリー、オペレーティングシステム（Linux、Microsoftなど）、ワークロードの変動性、使用する割引手段の種類など、さまざまな基準に基づいて割引価格を提供しています。Google Cloud PlatformのCompute Engine向け確約利用割引（Committed Use Discounts: CUDs）も、マシンシリーズ（汎用マシン – C3、N2など）に基づいています。これらの要因はすべて、ESRに有利または不利に影響を与える可能性があります。

この点を説明すると、他のすべての条件が同じであれば、Linuxオペレーティングシステムを実行しているAWSインスタンスは、Microsoftオペレーティングシステムを実行しているインスタンスよりもコストが低くなります。同様に、オレゴンリージョンでインスタンスを実行する方が、シドニーリージョンで同じインスタンスタイプを実行するよりもコストが低くなります。

## 関連リソース

  * [コミットメント割引](<https://www.finops.org/wg/commitment-based-discounts-overview/>): 実効割引率は、コミットメント割引戦略のROIと効率性を測定する指標です。

### 関連するFinOpsリソースとフレームワークのケイパビリティ

  * [コミットメント割引](<https://www.finops.org/assets/terminology/#commitment-discounts>)
  * [コミットメント利用率](<https://www.finops.org/assets/terminology/#cb-discounts:~:text=Commitment%20Utilization>) – 指定された期間中に利用されたアクティブなコミットメントの割合。
  * [カバー率](<https://www.finops.org/assets/terminology/#cb-discounts:~:text=with%20a%20CSP.-,Coverage,-The%20percentage%20of>) – 指定された期間中にアクティブなコミットメントによってカバーされた、対象となるワークロードの割合。

## 謝辞

本プレイブックの作成にご協力いただいた以下の皆様に感謝いたします。

[ ![Steven O’Dwyer](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Steven O’Dwyer ProsperOps ](<https://www.linkedin.com/in/stevenodwyer/>) [ ![Stephen Arthur](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Stephen Arthur Coinbase ](<https://www.linkedin.com/in/stephenarthursaur/>)

また、サポーターであるBrian D’Altilio氏とJag Sodhi氏にも感謝いたします。

最終更新日: 2026年3月17日

## 目次

  * [前提条件](<#prerequisites>)
  * [プレイの実行手順](<#instructions>)
  * [成果と成功の指標](<#outcomes-success>)
  * [関連リソース](<#related-resources>)
  * [謝辞](<#acknowledgments>)

##### 関連するFinOpsケイパビリティ

[ 料金の最適化 ](<https://www.finops.org/framework/capabilities/rate-optimization/>)

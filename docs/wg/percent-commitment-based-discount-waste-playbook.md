---
title: 料金の最適化KPI：コミットメント割引の無駄の割合（Rate Optimization KPI: Percent of Commitment Discount Waste）
---

[英語版]: https://www.finops.org/wg/percent-commitment-based-discount-waste-playbook/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

**概要：** 未使用のコミットメントによる金銭的な無駄の正確な割合を特定し、クラウド割引戦略の効率性を測定します。このデータ駆動型のメトリクスを活用して、過剰プロビジョニングを解消し、リザーブドインスタンス（Reserved Instance）およびSavings Planへの投資を最適化します。

## 目次

  * [前提条件](<#prerequisites>)
  * [AWS Cost Explorerの操作手順](<#aws-cost-explorer-instructions>)
  * [Microsoft Azureの操作手順](<#azure-instructions>)
  * [GCPの操作手順](<#gcp-instructions>)
  * [成果と成功の指標](<#outcomes-success>)
  * [謝辞](<#acknowledgments>)

このプレイブックは、コミットメント割引の未使用部分を測定する方法に関するガイドラインを提供します。[コミットメント割引の無駄の割合](<https://www.finops.org/wg/finops-kpis/?prod_kpis%5BrefinementList%5D%5Bcapabilities.title%5D%5B0%5D=Rate%20Optimization#modal-kpi-9651>)とは、オンデマンド料金に適用されなかったコミットメントの割合を指します。このプレイブックは、ビジネスにとってどの割合が適切であるかを規定するものではなく、情報に基づいたビジネス上の意思決定を行うために、このメトリクスを算出する方法を説明するものです。

**計算式**

未使用のコミットメント割引の割合 = (未使用のコミットメント割引のコスト / コミットメント割引の総コスト) x 100

### 本プレイブックの対象読者

コミットメント割引の購入担当者、コミットメント割引の効果を測定する仕組みの構築担当者、またはその両方を対象としています。

## 前提条件

### 以下のセクションでは、KPIの算出、監視、改善に必要なデータとステークホルダーの関与について説明します。

  * 以下のデータやツールへのアクセス：
    * 仮想マシン（VM）の総支出
    * コミットメント割引が適用されたVMの総コスト
    * VMリソースの現在のオンデマンド価格
  * クラウドサービスプロバイダー（CSP：Cloud Service Provider）ネイティブのコスト管理ツールへのアクセス：
    * Azure Cost Management
    * AWS Cost Explorer
    * SQLクエリ用のデータエクスポートが設定・有効化されたGCP BigQuery
  * 対象期間：
    * データを効果的に取得するには、特定の評価期間を決定する必要があります。選択する期間によってツールが出力する結果が異なるため、このステップは極めて重要です。
    * 月、日、またはその他の単位

### 関与が必要な関係者：

  * FinOps実践者（FinOps Practitioner）は、データ取得プロセスの構築を支援します。
  * 財務チームは、コミットメント支出とクラウドサービスプロバイダーの請求額を照合・検証します。
  * SQLデベロッパーは、組織の成熟度（Maturity Model）に応じて、SQLクエリ用にGCP BigQueryやAWS CUR（Athena）のデータがデプロイされている場合に関与します。
  * 開発者は、プログラムによってデータを取得するためのAPIコーディングインターフェースを開発します。
  * 調達スタッフは、KPIの結果を改善するためにCSPのコミットメントを調整する必要がある場合に関与します。

**注意：** 各担当者の関与度合いは、組織の成熟度や個人のスキル、知識によって組織ごとに異なる場合があります。

### 必要な情報とリソース：

本セクションでは、このプレイブックを成功に導くための情報を提供します。ここには、特定のデータソース、レポート、または関連するインプット情報が含まれます。

#### 情報

  * AWS Billing & Cost Management：Cost Explorer（コストエクスプローラー）などがあり、ユーザーがAWSリソースの支出を追跡、分析、制御できるように設計されています。
  * AWS Cost and Usage Report（CUR）：AWSサービスのコストと使用状況に関する詳細なインサイトを提供し、より優れた財務管理と最適化を実現します。
  * Azure Cost Managementおよびコスト分析ツール：組織がクラウド支出を監視し、最適化できるように設計されています。
  * Azure Billing API：ユーザーがAzureクラウドサービスの使用状況とコストをプログラムで管理および監視できるようにするツールとインターフェースのセットです。このAPIは、課金データの取得、請求書の生成、支出の追跡、サブスクリプションの管理、および課金プロセスの自動化などの機能を提供します。
  * GCP BigQuery：Google Cloud Platformが提供する、フルマネージドでサーバーレスのデータウェアハウスおよび分析プラットフォームです。ユーザーは大規模なデータセットを迅速かつ効率的に保存、照会、分析できます。

#### ツール、ユーティリティ、テンプレート

プレイブックの実行中に使用するツール、ユーティリティ、テンプレートへのリンクです。

  * AWS 
    * [AWS Cost and Usage Reports](<https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html>)
    * [コストと使用状況レポート用のAthenaクエリ](<https://docs.aws.amazon.com/cur/latest/userguide/cur-query-athena.html>)
    * [Savings Planの理解 – AWSデータエクスポート](<https://docs.aws.amazon.com/cur/latest/userguide/cur-sp.html>)
    * [Cost Explorerを使用した支出と使用状況の分析 | AWS re:Post](<https://repost.aws/knowledge-center/cost-explorer-analyze-spending-and-usage>)
    * [AWS CloudFormationテンプレートを使用したAthenaのセットアップ – AWSデータエクスポート](<https://docs.aws.amazon.com/cur/latest/userguide/use-athena-cf.html>)
  * Azure 
    * [Azure予約の利用率の表示 – Microsoft Cost Management](<https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/reservation-utilization>)
    * [個々のサブスクリプションのAzure予約の使用状況 – Microsoft Cost Management](<https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/understand-reserved-instance-usage>)
    * [Azureリソースの予約の管理](<https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/manage-reserved-vm-instance>)
  * GCP 
    * [確約割引（CUD：Commitment Discount）の説明](<https://cloud.google.com/docs/cuds>)
    * [Cloud BillingデータのBigQueryへのエクスポート](<https://cloud.google.com/billing/docs/how-to/export-data-bigquery>)

## AWS Cost Explorerを使用した操作手順

  1. 最もシンプルな方法（クロール） 
     1. AWS Cost Managementダッシュボードの「RIの利用率（RI utilization）」レポートからCSVレポートを生成します。
     2. この利用率レポート（RI/SP）は、EC2インスタンスを対象とし、あらかじめ指定した1日間の日付・時間範囲に設定する必要があります。
     3. さらに、フィルターを変更して詳細（リージョン、インスタンスタイプ、期間など）を指定し、微調整できます。これらはオプションです。
     4. 適切なフィルターとグループ化オプションを適用すると、選択した内容に応じたコミットメント割引コストの内訳が表示されます。
     5. CSVファイルをダウンロードして保存します。CSVファイル内で「Total Asset value（総資産価値）」と「Cost for unused hours（未使用時間のコスト）」の列を確認できます。
     6. その時点で、テーブル全体のコストを計算するか、次のステップで説明する各行の詳細コストを計算します。
     7. 計算式はシンプルに「(未使用時間のコスト / 総資産価値) x 100」です。
     8. 例えば、総資産価値が100ドルで、未使用コストが30ドルの場合、未使用コストの割合は (30 / 100) x 100 = 30% と計算できます。
  2. より高度な方法（ウォーク／ラン） 
     1. Athenaを使用して特定の日（YYYY-MM-DD）の未使用コミットメント割引コストを計算するには、コミットメント割引情報を含む関連データソースへのアクセス権が必要です。データへのアクセス権を取得後、AthenaでSQLクエリを記述してコストを計算します。
     2. コミットメント割引情報を含む `commitment_discounts` という名前のテーブルがあり、そのテーブルに `start_date`、`end_date`、`discount_amount`、`usage_amount` などの列があると仮定すると、以下のクエリを使用できます。
        ```sql  
        SELECT SUM(discount_amount) AS unused_discount_cost  
        FROM commitment_discounts  
        WHERE start_date <= DATE 'YYYY-MM-DD' -- Start date is on or before YYYY-MM-DD AND end_date >= DATE 'YYYY-MM-DD' -- End date is on or after YYYY-MM-DD  
        AND usage_amount = 0 -- No usage on YYYY-MM-DD  
        ```
     3. このクエリは、開始日と終了日に基づいてコミットメント割引をフィルタリングし、2024年4月2日の使用量がゼロである割引のみを選択します。`SUM(discount_amount)` は、その日の未使用コミットメント割引の総コストを計算します。
     4. 次のステップでは、特定の日のコミットメント割引の総コストを計算します。これには、Athenaデータベース内の関連データへのアクセス権が必要です。`date` 列と `cost` 列を持つ `commitment_discounts` という名前のテーブルがあると仮定すると、以下のAthenaクエリを使用して、選択した時点（YYYY-MM-DD）の総コストを計算できます。
        ```sql  
        SELECT SUM(cost) AS total_cost  
        FROM commitment_discounts  
        WHERE date = 'YYYY-MM-DD'  
        ```
     5. このクエリでは、`date` 列が指定された日付「YYYY-MM-DD」と一致する `commitment_discounts` テーブルから、`cost` 列の合計を選択しています。結果は、その日のコミットメント割引の総コストになります。
     6. その時点で、テーブル全体のコストを計算するか、次のステップで説明する各行の詳細コストを計算します。
     7. 計算式はシンプルに「(未使用時間のコスト / 総資産価値) x 100」です。
     8. 例えば、総資産価値が100ドルで、未使用コストが30ドルの場合、未使用コストの割合は (30 / 100) x 100 = 30% と計算できます。

## Azureでの操作手順

     1.         1. 未使用のコミットメント割引（CB）コストの割合を取得するためのAzureの方法（ウォーク） 
           1. Azure Cost Managementの予約ビューインターフェースにある「コスト分析」セクションを開きます。
           2. 分析対象とするあらかじめ決定した期間を設定します。推奨は、1日間のカスタム日付グループを選択することです。
           3. リザーブドインスタンスに関連する総コストと未使用コストの内訳が表示されます。
           4. 未使用コストをコミットメント割引の総コストで割り、100を掛けて、未使用のコミットメント割引コストの割合を計算します。
           5. 例えば、コミットメント割引の総コストが100ドルで、未使用のコミットメント割引コストが30ドルの場合、未使用のコミットメント割引コストの割合は ($30 / $100) x 100 = 30% と計算できます。
        2. プログラムによってデータを取得するAzureの方法では、Azure Cost ManagementのREST APIにアクセスする必要があります。以下は、アクセストークンを取得し、Azure Cost Management + Billing APIを呼び出して予約のサマリーを取得する方法を示すPythonコードスニペットです（プレースホルダーは、実際のサブスクリプションID、テナントID、クライアントID、クライアントシークレットに置き換える必要があります）。特定の評価期間内に特定のAzureサブスクリプションで支出されたリザーブドインスタンスの総コストを取得するために、Azure Cost Management APIに対してHTTP GETリクエストを送信する例を以下に示します。
           ```python  
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
           api_endpoint = f'https://management.azure.com/subscriptions/{subscription_id}/providers/Microsoft.CostManagement/query?api-version=2019-11-01'

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
               print(f'Total cost of reserved instances: {total_cost}')
           else:
               # Print the error message
               print(f'Error: {response.text}')
           ```
           `<your_subscription_id>` を実際のAzureサブスクリプションIDに置き換えてください。また、`start_date` と `end_date` 変数を調整して、対象の評価期間を指定します。次のステップの後に最終計算を行うため、出力を必ず記録しておいてください。

           1. 上記のコードは簡略化された例であり、エラーハンドリングやページネーションは含まれていません。予約数が多い場合や詳細な使用状況データがある場合は、これらが必要になることがあります。
           2. 未使用のコミットメント割引コストの評価期間データを取得する方法：
              ```python
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
              path = f'subscriptions/{subscription_id}/providers/{provider_namespace}/{provider_type}'
              url = f'{base_url}/{path}?api-version={api_version}'

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
                  print(f'Total unused cost of reserved instances: {total_unused_cost}')
              else:
                  print(f'Failed to retrieve total unused cost. Status code: {response.status_code}')
              ```
              `'your_subscription_id'`、`'your_resource_group_name'`、および評価の開始日と終了日を独自の値に置き換えてください。また、必要な権限があることを確認してください。

           3. 総コストと未使用コストの結果を取得し、未使用コストをコミットメント割引の総コストで割り、100を掛けて計算します。
           4. 例えば、コミットメント割引の総コストが100ドルで、未使用のコミットメント割引コストが30ドルの場合、未使用のコミットメント割引コストの割合は ($30 / $100) x 100 = 30% と計算できます。

## GCPでの操作手順

APIおよびコンソールから、1日あたりのコミットメント割引（CB）の総コストを取得できます。

コンソールからCBの総コストを取得するには、GCPコンソールにアクセスし、カスタムの期間範囲を指定してSKUごとにグループ化したカスタムレポートを生成することで、日次のコストを取得できます。確約割引（CUD）はSKUの一種です。SKUのフィルターで「Commitments（確約）」を指定して、CBのみの統合リストを取得します。

フィルタリングされた合計額が下部に表示されます。

このコストを記録します。未使用コストを取得するために、CUDの総コストが100ドルで未使用コストが30ドルの場合、未使用コストの割合は (30 / 100) x 100 = 30% と計算できます。

GCP BigQueryでは、以下のクエリを使用して、1日あたりのCUDコミットメントの未使用コストを特定できます。

```sql
SELECT
date(start_time) AS start_date,
date(end_time) AS end_date,
sum(usage_rate) * (end_time - start_time) AS total_usage_rate,
sum(commitment_unit_usage_rate) * (end_time - start_time) AS total_commitment_unit_usage_rate
FROM
`your_project.dataset.table_name`
WHERE
start_time >= '2023-07-01T00:00:00' AND start_time < '2023-07-02T00:00:00'
GROUP BY
date(start_time),
date(end_time)
ORDER BY
total_usage_rate DESC;
```

上記のクエリは、データセット内の特定の期間における総使用率とコミットメントユニット使用率を計算します。`start_time` 列と `end_time` 列を使用してデータをフィルタリングし、`usage_rate` 列と `commitment_unit_usage_rate` 列を使用して、それぞれ総使用率とコミットメントユニット使用率を計算します。結果は日付ごとにグループ化され、総使用率に基づいて降順でソートされます。

CUDの総コストが100ドルで、未使用コストが30ドルの場合、未使用コストの割合は (30 / 100) x 100 = 30% と計算できます。

## 成果と成功の指標

### 本プレイブックを実行することによる主な成果

     1.         1.            * 主な成果として、エンドユーザーはコミットメント割引の総コストと未使用コストの取得方法を判断できるようになり、結果としてコミットメント割引の無駄の割合（%）を計算できるようになります。
           * この割合を算出することで、クラウド資源のコミットメントの過剰購入について、より深いインサイトを得られます。
           * また、この割合は、タグに基づいて計算されたコストのチャージバックまたはショーバックの有効性やカバー率を示す指標にもなります。

### 成功の指標

     1.         1.            * GCP、Azure、またはAWSにおけるコミットメント割引の無駄の割合が明確に定義されていることを成功と定義します。

### 例外と考慮事項

     1.         1.            * 無駄の割合は、裏を返せば金額的な影響を表していますが、その金額的な影響の大小はコミットメント割引の総コストに依存します。これは、さまざまなビジネス上の測定基準やコミットメント割引の有効性に実質的に関連しています。

## 謝辞

本プレイブックの作成にご協力いただいた以下の方々に感謝いたします。

[ ![Gordon Douglass](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Gordon Douglass SAP ](<https://www.linkedin.com/in/gordondouglass/>)

また、ご支援いただいた David Lambert 氏、Taylor Houck 氏、Brian D’Altilio 氏に感謝いたします。

最終更新日：2026年3月17日

## 目次

  * [前提条件](<#prerequisites>)
  * [AWS Cost Explorerの操作手順](<#aws-cost-explorer-instructions>)
  * [Microsoft Azureの操作手順](<#azure-instructions>)
  * [GCPの操作手順](<#gcp-instructions>)
  * [成果と成功の指標](<#outcomes-success>)
  * [謝辞](<#acknowledgments>)

###### [基礎を学ぶ FinOps認定プロフェッショナル（FinOps Certified Practitioner）で知識をレベルアップする 今すぐ始める  ![Learn the fundamentals](https://www.finops.org/wp-content/uploads/2025/12/certified-practitioner.svg) ](<https://learn.finops.org/path/finops-certified-practitioner-self-paced>)

##### 関連するFinOpsケイパビリティ

[ 料金の最適化 ](<https://www.finops.org/framework/capabilities/rate-optimization/>) [ 使用量の最適化 ](<https://www.finops.org/framework/capabilities/usage-optimization/>)

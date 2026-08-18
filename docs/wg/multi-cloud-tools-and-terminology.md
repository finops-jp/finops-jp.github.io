---
format: md
title: "クラウドサービスプロバイダーのツールと用語に関するガイド（Guide to Cloud Service Provider Tools and Terminology）"
---

[英語版]: https://www.finops.org/wg/multi-cloud-tools-and-terminology/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

**要約:** クラウドプロバイダーは、同一のFinOpsケイパビリティに対して異なるツール、名称、メトリクスを使用しています（例：GCPのRecommenderとAWSのTrusted Advisor）。本資料が提供するFinOpsツールマトリクスを参照することで、コスト計画、請求とレポート、推奨事項といった重要なFinOps機能を、AWS、Azure、GCP、OCIの間で迅速に対応付けできます。FinOps実践者はこのガイドを活用することで、用語の違いによる混乱を避け、各クラウドのネイティブなCSPツールを効率的に活用して、すべてのクラウドにおけるコスト最適化、ガバナンスの適用、アラートの設定を実行できます。

各クラウドサービスプロバイダーは、FinOps実践者がクラウドリソースの効率的な利用方法を学び、実践できるように、さまざまなツールを提供しています。FinOps実践者や企業が、クラウドの利用前に潜在的なコストを計画し、請求書を理解し、請求分析を完了し、コストを管理および最適化するのに役立つツールやレポートが用意されています。これらのツールは、以下のFinOpsツールマトリクスにまとめられています。

| GCP | AWS | Azure | OCI |
|---|---|---|---|
| **クラウドコスト計画** | [GCP料金計算ツール](https://cloud.google.com/products/calculator) | [AWS料金計算ツール](https://calculator.aws/) | [Azure料金計算ツール](https://azure.microsoft.com/pricing/calculator/) | [OCIコスト見積もりツール](https://www.oracle.com/cloud/costestimator.html) |
| **請求とレポート** | [Google Cloud請求レポート](https://cloud.google.com/billing/docs/reports#billing-reports-tutorial) | [AWS Cost Explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/) | [Azure Cost Management + Billing](https://docs.microsoft.com/azure/cost-management-billing/cost-management-billing-overview) さらに、API（高度なフィルタリングとクエリを備えた3つのディメンションにわたるREST、または直接レポート）や、Cost Management API（別名「エクスポート」）を介したスケジュール設定でも利用できます。エクスポート機能を使用すると、Azure SynapseやAzure Data Explorerなどのデータ分析ツールに取り込むためのスケジュール設定を含め、さまざまなレポートを出力できます。 | [OCIコスト分析](https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/costanalysisoverview.htm) |
| | [BigQueryへの標準の請求データエクスポート](https://cloud.google.com/billing/docs/how-to/export-data-bigquery-tables#standard-usage-cost-data-schema) | [AWSコストと使用状況レポート](https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/) [AWS CURデータエクスポート](https://docs.aws.amazon.com/cur/latest/userguide/what-is-data-exports.html) | Azureの使用量と料金のレポート | [OCIコストと使用状況レポート](https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/usagereportsoverview.htm) |
| | [BigQueryへの詳細な請求データエクスポート](https://cloud.google.com/billing/docs/how-to/export-data-bigquery-tables#detailed-usage-cost-data-schema) | [AWS詳細請求レポート](https://docs.aws.amazon.com/cur/latest/userguide/detailed-billing.html) | | |
| | [BigQueryへの料金データエクスポート](https://cloud.google.com/billing/docs/how-to/export-data-bigquery-tables#pricing-data-schema) | [AWS注文書管理](https://aws.amazon.com/aws-cost-management/aws-purchase-order-management/) | | |
| | | [AWS一括請求](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html) | | |
| | | [AWSクレジット](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/useconsolidatedbilling-credits.html) | | |
| **詳細な請求分析** | [Datastudio](https://cloud.google.com/billing/docs/reports#custom-reports)（[GitHubソリューション](https://github.com/GoogleCloudPlatform/professional-services/tree/main/examples/cost-optimization-dashboard)） | [AWS Quick Sight](https://aws.amazon.com/quicksight/) | [Azure Power BI](https://docs.microsoft.com/power-bi/connect-data/desktop-connect-azure-cost-management)。[Cost Management Power BIアプリ](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/analyze-cost-data-azure-cost-management-power-bi-template-app)も参照してください。 | [OCIコストガバナンスおよびパフォーマンスインサイトソリューション](https://cloudmarketplace.oracle.com/marketplace/en_US/listing/83101510) |
| | [Looker分析ダッシュボード](https://looker.com/platform/blocks/source/cloud-cost-management)（[GitHubソリューション](https://github.com/llooker/gcp_billing_block)） | | | |
| **請求** | [コスト表レポート](https://cloud.google.com/billing/docs/reports#cost-table-report) | [AWS請求書](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/getting-viewing-bill.html) | [Azure請求書](https://docs.microsoft.com/azure/cost-management-billing/understand/download-azure-invoice) | [OCI請求書](https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/invoices.htm) |
| | [コスト内訳レポート](https://cloud.google.com/billing/docs/reports#cost-breakdown-report) | | | [OCI支払い履歴](https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/paymenthistory.htm) |
| | [料金レポート](https://cloud.google.com/billing/docs/reports#pricing-table-report) | | | [OCI請求スケジュール](https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/subscriptions.htm#subscription_billing_schedule) |
| **予測** | [請求予測](https://cloud.google.com/billing/docs/how-to/reports#cost-forecast) | [AWS Cost Explorer（セルフサービス）](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-forecast.html#reading-forecasts) | | [コスト分析における予測](https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/costanalysisoverview.htm#forecasting_costs) |
| | | [AWS Budgets（イベント駆動型）](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-view.html) | | |
| **タグ付け** | [リソース階層](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy) | [AWSタグエディター](https://docs.aws.amazon.com/ARG/latest/userguide/tag-editor.html)、[AWS Resource Explorer](https://aws.amazon.com/resourceexplorer/) | [Azure Policy](https://docs.microsoft.com/azure/governance/policy/tutorials/govern-tags) | [OCIタグ](https://docs.oracle.com/en-us/iaas/Content/Tagging/home.htm) |
| **アラートと通知** | [GCP予算アラート](https://cloud.google.com/billing/docs/how-to/budgets) | [AWS Budgets](https://aws.amazon.com/aws-cost-management/aws-budgets/) | [Azure Budgets](https://docs.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets) | [OCI予算アラート](https://docs.oracle.com/en-us/iaas/Content/Billing/Tasks/managingalertrules.htm) |
| **テンプレート駆動型デプロイ** | [Terraform](https://cloud.google.com/docs/terraform) | [AWS CloudFormation](https://aws.amazon.com/cloudformation/) | [Azure Resource Manager](https://docs.microsoft.com/azure/azure-resource-manager/)、[Bicep](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/deploy-cloud-shell?tabs=azure-cli)、[Terraform](https://cloud.google.com/docs/terraform) | [Terraform](https://docs.oracle.com/en-us/iaas/developer-tutorials/tutorials/tf-provider/01-summary.htm) |
| | [Cloud Deployment Manager](https://cloud.google.com/deployment-manager/docs#docs) | | | |
| **コントロール** | [クォータとレート制限API](https://cloud.google.com/compute/quotas) | [Service Quotas](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html) | [予算と支出制限](https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/spending-limit)のネイティブ設定 | [クォータ](https://docs.oracle.com/en-us/iaas/Content/General/Concepts/resourcequotas.htm) |
| | | [AWS Instance Scheduler](https://aws.amazon.com/solutions/implementations/instance-scheduler/) | | [FunctionsとQuotasを使用した予算の強制適用](https://blogs.oracle.com/cloud-infrastructure/post/enforced-budgets-on-oci-using-functions-and-quotas) |
| | | [Amazon Data Lifecycle Manager](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html) | | |
| **推奨事項** | [Recommender](https://cloud.google.com/recommender/docs/recommenders) | [AWS Cost Explorer](https://aws.amazon.com/aws-cost-management/aws-cost-explorer/)、[AWS Cost Optimization Hub](https://aws.amazon.com/aws-cost-management/cost-optimization-hub/) | [Azure Advisor](https://docs.microsoft.com/azure/advisor/) | [OCI Cloud Advisor](https://docs.oracle.com/en-us/iaas/Content/CloudAdvisor/Concepts/cloudadvisoroverview.htm) |
| | [Active Assist](https://cloud.google.com/solutions/active-assist) | [Trusted Advisor](https://aws.amazon.com/premiumsupport/technology/trusted-advisor/?track=costma) | | |
| | [Google Cloud's operations suite](https://cloud.google.com/products/operations#section-8)（旧Stackdriver） | | | |
| | [コミットメント分析レポート](https://cloud.google.com/billing/docs/reports#cud-analysis-reports) | | | |
| **インサイト** | 請求のヘルスチェック | [CloudWatch](https://aws.amazon.com/cloudwatch/) | [Azure Monitor](https://docs.microsoft.com/azure/azure-monitor/) | |
| | | [CloudTrail](https://aws.amazon.com/cloudtrail/) | | |

## コスト管理の用語

クラウドサービスプロバイダーは、同じまたは類似した概念に対して異なる用語を使用しています。このため、複数のプロバイダーにわたるクラウドの概念を理解することが難しくなる場合があります。本プロジェクトで作成されたこの用語集は、FinOps実践者が各クラウドサービスプロバイダーの共通用語を相互に対応付けできるように作成されたものであり、[こちらのFinOps用語集ページ](https://www.finops.org/assets/terminology/)に統合されています。

### 3文字の略語（TLA）

クラウドコスト管理の分野にも、独自の3文字の略語（TLA）が数多く存在します。コミュニティとしての目標は、日々のクラウドコスト管理において関連性が高く、頻繁に使用される3文字の略語の一覧を収集することです。

| TLA | 意味 |
|---|---|
| AWS | Amazon Web Services |
| CSP | クラウドサービスプロバイダー（CSP） |
| GCP | Google Cloud Platform |
| KPI | 重要業績評価指標（KPI） |
| OCI | Oracle Cloud Infrastructure |
| TAC | 技術諮問委員会（TAC） |

## リソース

* #### **Google Cloud**
  * [Google Cloudアーキテクチャフレームワーク：コストの最適化](https://cloud.google.com/architecture/framework/cost-optimization/)
  * [Google Cloudでのコスト管理](https://cloud.google.com/cost-management#section-6)

* #### **AWS**
  * [AWS Well-Architectedフレームワーク：コスト最適化の柱](https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html)

* #### **Azure**
  * [Microsoft Azure Well-Architectedフレームワーク：コスト最適化の柱](https://docs.microsoft.com/azure/architecture/framework/#cost-optimization)

* #### **FinOps Foundationランドスケープ**
  * [マルチクラウドFinOpsツール](https://www.finops.org/landscape/?prod_TOOLS_SERVICES%5BrefinementList%5D%5Bcategories%5D%5B0%5D=FinOps%20Tool)
  * [FinOps認定ツール](https://www.finops.org/landscape/?prod_TOOLS_SERVICES%5BrefinementList%5D%5Bcertifications%5D%5B0%5D=FinOps%20Certified%20Platform&prod_TOOLS_SERVICES%5BrefinementList%5D%5Bcertifications%5D%5B1%5D=FinOps%20Certified%20Specialty%20Solution)
  * [FinOps認定サービスプロバイダー](https://www.finops.org/landscape/?prod_TOOLS_SERVICES%5BrefinementList%5D%5Bcertifications%5D%5B0%5D=FinOps%20Certified%20Service%20Provider)

## 謝辞

FinOps Foundationは、ワーキンググループの熱心なメンバーに感謝の意を表します。

[ ![Kim Wier](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kim Wier（Target） ](https://www.linkedin.com/in/kim-wier-2a31bb3/) [ ![Pathik Sharma](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Pathik Sharma（Google） ](https://www.linkedin.com/in/pathikvsharma/) [ ![Vivek Enniriyil](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Vivek Enniriyil（AWS） ](https://www.linkedin.com/in/vivek-thomas-enniriyil/) [ ![Amitai Rottem](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amitai Rottem（Google） ](https://www.linkedin.com/in/amitairottem/) [ ![Ron Tatro](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Ron Tatro（Target） ](https://www.linkedin.com/in/rontatro/) [ ![Eric Lam](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Eric Lam（Google） ](https://www.linkedin.com/in/ericlam/) [ ![Nathan King](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Nathan King（Sky） ](https://www.linkedin.com/in/nathankinguk/)

最終更新日：2026年2月18日

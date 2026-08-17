# Guide to Cloud Service Provider Tools and Terminology

**Summary:** Cloud Providers use different tools, names, and metrics for the same FinOps capabilities (e.g., GCP’s Recommender vs. AWS’s Trusted Advisor). Reference the FinOps Tools Matrix provided in the asset to quickly translate essential FinOps functions—such as Cost Planning, Billing/Reporting, and Recommendations—across AWS, Azure, GCP, and OCI. By using this guide, FinOps practitioners can avoid confusion over different terminology and efficiently leverage native CSP tools to optimize costs, enforce governance, and implement alerts across all clouds.

Each Cloud Service Provider has different tools available to help FinOps practitioners learn and practice efficient utilization of cloud resources. There are tools and reports available that can help FinOps practitioners and companies plan their potential cost in advance of consumption, understand invoices, complete billing analysis, govern cost and optimize cost. These tools have been enumerated in the FinOps Tools Matrix.

| GCP | AWS | Azure | OCI |   
---|---|---|---|---|---  
**Cloud Cost Planning** | [GCP Pricing Calculator](<https://cloud.google.com/products/calculator>) | [AWS Pricing Calculator](<https://calculator.aws/>) | [Azure Pricing Calculator](<https://azure.microsoft.com/pricing/calculator/>) | [OCI Cost Estimator](<https://www.oracle.com/cloud/costestimator.html>) |   
**Billing and Reporting** | [Google Cloud Billing Reports](<https://cloud.google.com/billing/docs/reports#billing-reports-tutorial>) | [AWS Cost Explorer](<https://aws.amazon.com/aws-cost-management/aws-cost-explorer/>) | [Azure Cost Management + Billing](<https://docs.microsoft.com/azure/cost-management-billing/cost-management-billing-overview>) Additionally, via API (REST across 3 dimensions with fine-tune filtering & query or direct reports, also Scheduled via Cost Management API, aka “Exports”. Using with the Exports function allows delivers a variety of reports, even Scheduled for Ingestion into BigQuery tooling, such as Azure Synapse or Azure Data Explorer. | [OCI Cost Analysis](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/costanalysisoverview.htm>) |   
| [Standard Billing Export to BigQuery](<https://cloud.google.com/billing/docs/how-to/export-data-bigquery-tables#standard-usage-cost-data-schema>) | [AWS Cost and Usage Reports](<https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/>) [AWS CUR Data Exports](<https://docs.aws.amazon.com/cur/latest/userguide/what-is-data-exports.html>) | Azure usage and charges report | [OCI Cost and Usage Reports](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/usagereportsoverview.htm>) |   
| [Detailed Billing Export to BigQuery](<https://cloud.google.com/billing/docs/how-to/export-data-bigquery-tables#detailed-usage-cost-data-schema>) | [AWS Detailed Billing Reports](<https://docs.aws.amazon.com/cur/latest/userguide/detailed-billing.html>) |  |  |   
| [Pricing Export to BigQuery](<https://cloud.google.com/billing/docs/how-to/export-data-bigquery-tables#pricing-data-schema>) | [AWS Purchase Order Management](<https://aws.amazon.com/aws-cost-management/aws-purchase-order-management/>) |  |  |   
|  | [AWS Consolidated Billing](<https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/consolidated-billing.html>) |  |  |   
|  | [AWS Credits](<https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/useconsolidatedbilling-credits.html>) |  |  |   
**Detailed Billing Analysis** | [Datastudio](<https://cloud.google.com/billing/docs/reports#custom-reports>) ([GitHub Solution](<https://github.com/GoogleCloudPlatform/professional-services/tree/main/examples/cost-optimization-dashboard>)) | [AWS Quick Sight](<https://aws.amazon.com/quicksight/>) | [Azure Power BI](<https://docs.microsoft.com/power-bi/connect-data/desktop-connect-azure-cost-management>) Also see the [Cost Management Power BI App](<https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/analyze-cost-data-azure-cost-management-power-bi-template-app>) | [OCI Cost Governance and Performance Insights Solution](<https://cloudmarketplace.oracle.com/marketplace/en_US/listing/83101510>) |   
| [Looker Analytics Dashboard](<https://looker.com/platform/blocks/source/cloud-cost-management>) ([GitHub Solution](<https://github.com/llooker/gcp_billing_block>)) |  |  |  |   
**Invoicing** | [Cost Table Report](<https://cloud.google.com/billing/docs/reports#cost-table-report>) | [AWS Invoices](<https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/getting-viewing-bill.html>) | [Azure Invoices](<https://docs.microsoft.com/azure/cost-management-billing/understand/download-azure-invoice>) | [OCI Invoices](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/invoices.htm>) |   
| [Cost Breakdown Report](<https://cloud.google.com/billing/docs/reports#cost-breakdown-report>) |  |  | [OCI Payment History](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/paymenthistory.htm>) |   
| [Pricing Report](<https://cloud.google.com/billing/docs/reports#pricing-table-report>) |  |  | [OCI Billing Schedule](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/subscriptions.htm#subscription_billing_schedule>) |   
**Forecasting** | [Billing Forecast](<https://cloud.google.com/billing/docs/how-to/reports#cost-forecast>) | [AWS Cost Explorer (Self-Service)](<https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ce-forecast.html#reading-forecasts>) |  | [Forecasting in Cost Analysis](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/costanalysisoverview.htm#forecasting_costs>) |   
|  | [AWS Budgets (Event-Driven)](<https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-view.html>) |  |  |   
**Tagging** | [Resource Hierarchy](<https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy>) | [AWS Tag Editor](<https://docs.aws.amazon.com/ARG/latest/userguide/tag-editor.html>), [AWS Resource Explorer](<https://aws.amazon.com/resourceexplorer/>) | [Azure Policy](<https://docs.microsoft.com/azure/governance/policy/tutorials/govern-tags>) | [OCI Tags](<https://docs.oracle.com/en-us/iaas/Content/Tagging/home.htm>) |   
**Alerts and Notifications** | [GCP Budget Alerts](<https://cloud.google.com/billing/docs/how-to/budgets>) | [AWS Budgets](<https://aws.amazon.com/aws-cost-management/aws-budgets/>) | [Azure Budgets](<https://docs.microsoft.com/azure/cost-management-billing/costs/tutorial-acm-create-budgets>) | [OCI Budget Alerts](<https://docs.oracle.com/en-us/iaas/Content/Billing/Tasks/managingalertrules.htm>) |   
**Template Driven Deployment** | [Terraform](<https://cloud.google.com/docs/terraform>) | [AWS CloudFormation](<https://aws.amazon.com/cloudformation/>) | [Azure Resource Manager](<https://docs.microsoft.com/azure/azure-resource-manager/>), [Bicep](<https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/deploy-cloud-shell?tabs=azure-cli>), and [Terraform](<https://cloud.google.com/docs/terraform>) | [Terraform](<https://docs.oracle.com/en-us/iaas/developer-tutorials/tutorials/tf-provider/01-summary.htm>) |   
| [Cloud Deployment Manager](<https://cloud.google.com/deployment-manager/docs#docs>) |  |  |  |   
**Controls** | [Quotas and Rate Limit APIs](<https://cloud.google.com/compute/quotas>) | [Service Quotas](<https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html>) | Native settings for [Budgets and Spending Limits](<https://learn.microsoft.com/en-us/azure/cost-management-billing/manage/spending-limit>) | [Quotas](<https://docs.oracle.com/en-us/iaas/Content/General/Concepts/resourcequotas.htm>) |   
|  | [AWS Instance Scheduler](<https://aws.amazon.com/solutions/implementations/instance-scheduler/>) |  | [Enforcing Budgets using Functions and Quotas](<https://blogs.oracle.com/cloud-infrastructure/post/enforced-budgets-on-oci-using-functions-and-quotas>) |   
|  | [Amazon Data Lifecycle Manager](<https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html>) |  |  |   
**Recommendations** | [Recommender](<https://cloud.google.com/recommender/docs/recommenders>) | [AWS Cost Explorer](<https://aws.amazon.com/aws-cost-management/aws-cost-explorer/>), [AWS Cost Optimization Hub](<https://aws.amazon.com/aws-cost-management/cost-optimization-hub/>) | [Azure Advisor](<https://docs.microsoft.com/azure/advisor/>) | [OCI Cloud Advisor](<https://docs.oracle.com/en-us/iaas/Content/CloudAdvisor/Concepts/cloudadvisoroverview.htm>) |   
| [Active Assist](<https://cloud.google.com/solutions/active-assist>) | [Trusted Advisor](<https://aws.amazon.com/premiumsupport/technology/trusted-advisor/?track=costma>) |  |  |   
| [Google Cloud’s operations suite](<https://cloud.google.com/products/operations#section-8>) (formerly Stackdriver) |  |  |  |   
| [Commitment Analysis Report](<https://cloud.google.com/billing/docs/reports#cud-analysis-reports>) |  |  |  |   
**Insights** | Billing Health Checks | [CloudWatch](<https://aws.amazon.com/cloudwatch/>) | [Azure Monitor](<https://docs.microsoft.com/azure/azure-monitor/>) |  |   
|  | [CloudTrail](<https://aws.amazon.com/cloudtrail/>) |  |  |   
|  |  |  |  |   

## Cost Management Terminology

Cloud Service Providers utilize different terms to mean the same or similar things. This can make understanding cloud concepts across providers difficult. This terminology generated from this project was created to help FinOps practitioners translate these common terms across Cloud Service Providers and has been incorporated into [the FinOps Terminology page here](<https://www.finops.org/assets/terminology/>).

#### Three Letter Acronyms

Cloud cost management is not void of its own set of TLA’s. As a community the goal is to collect a list of three letter acronyms that are relevant and frequently used in daily cloud cost management.

TLA | Meaning  
---|---  
AWS | Amazon Web Services  
CSP | Cloud Service Provider  
GCP | Google Cloud Platform  
KPI | Key Performance Indicator  
OCI | Oracle Cloud Infrastructure  
TAC | Technical Advisory Council  

## Resources

  * #### **Google Cloud**

    * [Google Cloud Architecture Framework: Cost optimization](<https://cloud.google.com/architecture/framework/cost-optimization/>)
    * [Cost Management on Google Cloud](<https://cloud.google.com/cost-management#section-6>)

  * #### **AWS**

    * [AWS Well-Architected Framework: Cost Optimization Pillar](<https://docs.aws.amazon.com/wellarchitected/latest/cost-optimization-pillar/welcome.html>)

  * #### **Azure**

    * [Microsoft Azure Well-Architected Framework: Cost Optimization Pillar](<https://docs.microsoft.com/azure/architecture/framework/#cost-optimization>)

  * #### **FinOps Foundation Landscape**

    * [Multi-cloud FinOps Tools](<https://www.finops.org/landscape/?prod_TOOLS_SERVICES%5BrefinementList%5D%5Bcategories%5D%5B0%5D=FinOps%20Tool>)
    * [FinOps Certified Tools](<https://www.finops.org/landscape/?prod_TOOLS_SERVICES%5BrefinementList%5D%5Bcertifications%5D%5B0%5D=FinOps%20Certified%20Platform&prod_TOOLS_SERVICES%5BrefinementList%5D%5Bcertifications%5D%5B1%5D=FinOps%20Certified%20Specialty%20Solution>)
    * [FinOps Certified Service Providers](<https://www.finops.org/landscape/?prod_TOOLS_SERVICES%5BrefinementList%5D%5Bcertifications%5D%5B0%5D=FinOps%20Certified%20Service%20Provider>)

## Acknowledgements

The FinOps Foundation extends its gratitude to the hard-working members of the Working Group:

[ ![Kim Wier](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kim Wier Target ](<https://www.linkedin.com/in/kim-wier-2a31bb3/>) [ ![Pathik Sharma](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Pathik Sharma Google ](<https://www.linkedin.com/in/pathikvsharma/>) [ ![Vivek Enniriyil](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Vivek Enniriyil AWS ](<https://www.linkedin.com/in/vivek-thomas-enniriyil/>) [ ![Amitai Rottem](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amitai Rottem Google ](<https://www.linkedin.com/in/amitairottem/>) [ ![Ron Tatro](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Ron Tatro Target ](<https://www.linkedin.com/in/rontatro/>) [ ![Eric Lam](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Eric Lam Google ](<https://www.linkedin.com/in/ericlam/>) [ ![Nathan King](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Nathan King Sky ](<https://www.linkedin.com/in/nathankinguk/>)

Last updated: February 18, 2026
# How to Calculate Percentage of Costs Associated with Untagged CSP Cloud Resources

**Summary:** Calculate this KPI by comparing the cost of resources missing mandatory tags against the total cloud spend. FinOps practitioners can identify financial blind spots and notify teams when automated tagging processes fail. While achieving a 0% untagged rate is difficult due to certain “untaggable” service types, tracking this metric helps improve budgeting accuracy, security oversight, and the discovery of optimization opportunities within the cloud environment.

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions for Azure](<#instructions-azure>)
  * [Instructions for GCP](<#instructions-gcp>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Acknowledgments](<#acknowledgments>)

This playbook is intended to guide the user through the process of calculating[ percentage of untagged cloud resources](<https://www.finops.org/wg/finops-kpis/?prod_kpis%5Bquery%5D=untagg#modal-kpi-8115>) using an established organizational tagging policy which is essential in ensuring that the cost allocation and chargeback/showback numbers are accurately captured. The cost of untagged resources are compared against the total cost of cloud resources in this computation.

**Formula**
[code] 
        (Total Costs Associated with Untagged Cloud Resources / Total cost of Cloud Resources) x 100

[/code]

**Note:** Not all CSP Cloud Resources can be tagged. There will be untaggable CSP Cloud considered in this calculation. Due to the presence of untaggable resources, achieving 0% for this metric is a difficult goal. Some organizations may choose to compare untagged costs against total taggable costs using this formula: (Total Untagged Costs Associated with Taggable Cloud Resources / Total cost of taggable Cloud Resources) x 100

### Who Should Use this Playbook

This playbook should be used by FinOps practitioners, or anyone interested in calculating percentage cost of untagged resources.

## Prerequisites

  * Access to CSP Billing data to map cost incurred to the resources and to the associated tags.
  * Visibility to organization’s tagging policy to identify mandatory tagging compliance requirements and adherence.

### Who needs to be involved:

  * FinOps practitioners will assess the CSP billing data and map the cost incurred to the tags associated with the respective resources so that the cost associated with untagged resources are identified as a driver of the activity.
  * Engineering practitioner / manager as a contributor of the activity will ensure that the cloud resources are compliant with the organization’s tagging policy so that the untagged cost percentage remains low or near-zero.
  * Product owner will ensure that the percentage of cost associated with untagged resources are within the accepted limits of KPI as a decider of the activity.

### Information and resources required:

#### Information

  * Tagging policy: Identify the mandatory tags enforced by the organization as per their tagging strategy.
  * Tagging coverage: Percentage of cloud resources covered as per tagging policy
  * Billing data: Cost associated with the cloud resources that are non-compliant to the tagging policy for a given time period.

#### Tools, Utilities & Templates

  * Dashboard solution: Tooling used by the organization to track the tagging coverage.
  * CSP console for cost management for retrieving tag/labels coverage data along with cost. (e.g., AWS Cost Explorer, Azure Cost Management, GCP Billing)

## Instructions for running this Playbook for Azure

### Collecting Azure Untagged resource cost – 15 minutes

  * Login to Azure Account, open Cost Management + Billing section, if required select billing scope, then open Cost Analysis page
  * In the Cost Analysis page 
    * Select the time period for which the cost data to be extracted and set the correct scope.
    * Select the chart type as Table, and Granularity as per the requirement. Monthly is the recommended granularity.
    * In the group by option, find and select “Tag” and select the “Tag name” from the list.
  * Locate the values marked as “Untagged”. This represents the cost associated with the untagged resources.
  * Repeat this process for all mandatory tags as per the tagging policy.

### Collecting Azure total resource cost – 15 minutes

  * Login to Azure Account, open Cost Management + Billing section, if required select billing scope, then open Cost Analysis page
  * In the Cost Analysis page 
    * Select the time period for which the cost data to be extracted and set the correct scope – Ensure this time period is the same as what is selected in Step 1b.
    * Select the chart type as Table, and Granularity as per the requirement. Monthly is the recommended granularity.
    * In the group by option, find and select “None.”
  * Identify the total cost for all resources for the given time period.

Compute the Percentage of Costs Associated with Untagged Azure Cloud Resources with the below formula:
[code] 
        Total Costs Associated with Untagged Cloud Resources (Step 1) / Total cost of Cloud Resources (from step 2) x 100

[/code]

## Instructions for running this Playbook for GCP

### Collecting GCP Untagged resource cost – 15 minutes

  * Navigate to the Cost management section under Billing and open Billing Reports view.
  * In the GCP Billing reports view 
    * Select the time aggregation for which the cost data to be extracted and set the correct granularity. Monthly is the recommended granularity.
    * In the Group by option, select Label keys and choose the label for which the cost data is collected. Costs that are not tagged with the selected Label key are summarized as [Charges for other usage].
  * Locate the values marked as “Charges for other usage”. This represents the cost associated with the resources that are not labeled.
  * Repeat this process for all mandatory tags as per the tagging policy.

### Collecting GCP total resource cost – 15 minutes

  * Navigate to the Cost management section under Billing and open Billing Reports view.
  * In the GCP Billing report’s view 
    * Select the time aggregation for which the cost data to be extracted and set the correct granularity – Ensure this time period is the same as what is selected in Step 1.
  * Identify the total cost for all resources for the given time period.
  * Repeat this process for all mandatory tags as per the tagging policy.

Compute the Percentage of Costs Associated with Untagged GCP Cloud Resources with the below formula:

(Total Costs Associated with Untagged Cloud Resources (Step 1) / Total cost of Cloud Resources (from step 2)) x 100

## Outcomes and Indicators of Success

### Primary Outcomes of running this playbook

  * The primary outcome of running this playbook is to identify the percentage of costs associated with untagged CSP cloud resources. This percentage can be assessed against a target amount of tagged or untagged resources for compliance and improvement.
  * This KPI will give a better insight into the tagging coverage levels of the cloud resources. The computed percentage indicates the percentage of cloud resources that have at least one tagged value as compared to all cloud resources provisioned. It is not an indicator to the tagging strategy compliance level.
  * This KPI is useful as an indicator to notify if any resources are getting past the processes established for automated/mandatory resource tagging.

### Indicators of Success

Organizations may have a defined target percentage for this KPI and they will routinely compute the KPI and assess the actual value against the target value as they work towards achieving a better adherence to the target KPI. As tags are heavily leveraged for many FinOps activities the results of this KPI can give some insights into the future accuracy and success of downstream processes such as the items below:

  * Cost Visibility: It provides visibility into the costs incurred by resources that haven’t been properly tagged. This can help in understanding where the expenses are occurring and if there are any unanticipated costs.
  * Budgeting and Forecasting: Understanding the costs of untagged resources helps in budgeting and forecasting accurately. It enables you to adjust budgets based on actual spending patterns and anticipate future costs more effectively.
  * Optimization Opportunities: Identifying untagged resources presents an opportunity for optimization. It allows you to assess whether those resources are still necessary, if they can be resized, or if there are alternative, more cost-effective solutions available.
  * Compliance and Governance: Tagging resources is often a requirement for compliance and governance purposes. Running reports on untagged resources helps in ensuring adherence to organizational policies and regulatory requirements.
  * Security: Untagged resources might indicate potential security risks or unauthorized usage. By identifying and properly tagging these resources, you can better manage and secure your cloud environment.

### Exceptions and Considerations

  * The adherence to tagging strategy will vary according to the maturity level of the organization. This KPI is not measuring the compliance to the tagging strategy, rather resources are assessed to ensure that they are having at least one tag associated with them.
  * Achieving 0% is often difficult considering some of the cloud resources are untaggable. Hence <10% compliance can be considered as the initial goal to accommodate this scenario however you should consider the normal balance of untaggable costs carried by your organization.
  * If you would like to understand more about untaggable resources, please refer to the below documentation from CSPs. This information may also be useful in filtering your data to compute the similar metric of comparing taggable, untagged cloud costs against total taggable cloud costs. 
    * [Tag support for Azure resources](<https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-support>)
    * [Resource types you can use with AWS Resource Groups and Tag Editor](<https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html#supported-resources-tagging-console>)
    * [Supported services for GCP labels](<https://cloud.google.com/resource-manager/docs/labels-supported-services>)

## Acknowledgments

We’d like to thank the following people for their work on this Playbook:

[ ![Zeba Khan](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Zeba Khan EY ](<https://www.linkedin.com/in/zeba-khan-2a73472b/>) [ ![Meenu Anitta Joy](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Meenu Anitta Joy EY ](<https://www.linkedin.com/in/meenuanittajoy/>) [ ![Vinay Mani](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Vinay Mani EY ](<https://www.linkedin.com/in/vinay-mani-997558a/>)

We’d also like to thank our supporters, David Lambert, Taylor Houck, Brian D’Altilio, and Abhishek Jain.

Last updated: March 17, 2026

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions for Azure](<#instructions-azure>)
  * [Instructions for GCP](<#instructions-gcp>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ Allocation ](<https://www.finops.org/framework/capabilities/allocation/>) [ Reporting & Analytics ](<https://www.finops.org/framework/capabilities/reporting-analytics/>)
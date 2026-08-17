# How to Measure Tagging Policy Compliance

**Summary:** FinOps Practitioners measure Tagging Policy Compliance by evaluating the degree to which cloud resources adhere to established mandatory tagging standards. This process involves comparing the number of resources that correctly carry required keys and values against the total pool of “taggable” resources. Unlike simple “untagged” metrics, this calculation focuses on the accuracy and presence of specific strategic metadata (e.g., Environment, CostCenter) required for automated cost allocation and governance.

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions for Azure](<#instructions-azure>)
  * [Instructions for AWS](<#instructions-aws>)
  * [Instructions for GCP](<#instructions-gcp>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Acknowledgments](<#acknowledgments>)

This playbook is intended to guide the user through the process of calculating the [percentage of the cost of cloud resources that are compliant to the organization’s tagging policy](<https://www.finops.org/wg/finops-kpis/?prod_kpis%5Bquery%5D=tagg#modal-kpi-9653>). The cost of tagging compliance resources (as per tagging strategy) is compared against the total cloud cost in this computation.

**Formula**
[code] 
        (Total Cost of Tagging Policy Compliant Cloud Resources / Total Cost of Cloud Resources) x 100

[/code]

**Note:** Not all CSP Cloud Resources can be tagged. Due to the presence of untaggable resources, achieving 100% for this metric is a difficult goal. There will be untaggable CSP Cloud resources which can be excluded based on an organization’s preferences by altering the formula to:
[code] 
        (Total Cost of Tagging Policy Compliant Cloud Resources / Total Cost of taggable Cloud Resources) x 100

[/code]

### Who Should Use this Playbook

This playbook should be used by FinOps practitioners, or anyone interested in calculating percentage cost of untagged resources.

## Prerequisites

  * Access to CSP Billing data to map cost incurred to the resources and to the associated tags and knowledge of how to use the CSP provided cost management and reporting tools.
  * An established organizational tagging policy.
  * An understanding of the tagging requirements as defined by the organizational policies.
  * An identified organizational tagging compliance target. (optional)
  * An understanding of implementing and using tags & labels, including tagging strategy/process defined and circulated for proper maintenance of the tags & labels.

### Who needs to be involved:

  * FinOps practitioners will assess the CSP billing data and map the cost incurred to the tags associated with the respective resources so that the cost associated with tagging compliant resources are identified as a driver of the activity.
  * The responsible team (based on FinOps Governance model) will ensure that the cloud resources are compliant with the organization’s tagging policy so that tagged resources cost percentage reaches the maximum as a contributor of the activity.
  * The responsible team/member (based on FinOps Governance model) will ensure that the percentage of cost associated with tagging compliant resources are within the accepted limits of KPI as a decider of the activity.

### Information and resources required:

#### Information

  * Billing data: Cost associated with the cloud resources that are compliant to the tagging policy for a given time period
  * Tagging policy: Identify the mandatory tags enforced by the organization as per its tagging strategy
  * Tagging compliance target: Percentage of cloud resources compliant with the tagging policy

#### Tools, Utilities & Templates

  * Dashboard solution: Tooling used by the organization to track the tagging compliance
  * CSP console for cost management to retrieve tag/labels compliance data and associated cost (e.g., AWS Cost Explorer, Azure Cost Management, GCP Billing)

## Instructions for running this Playbook for Azure

### Collecting Azure Tag compliant resource cost – 5 minutes

  * Login to Azure Account, open Cost Management + Billing section, if required select billing scope, then open Cost Analysis page.
  * In the Cost Analysis page 
    * Select the time period for which the cost data to be extracted and set the correct scope
    * Select the chart type as Table and Granularity as per your requirement. Monthly is the recommended granularity.
    * In the group by option, find and select “Tag” and select the “Tag name” from the list
  * Validate the tag values in the output table to ensure they are compliant with the organization’s policy. Sum the cost associated with the valid tag values. This represents the cost of tag compliant resources.
  * Repeat this process for all tags you are interested in measuring compliance for.

### Collecting Azure total resource cost – 5 minutes

  * Login to Azure Account, open Cost Management + Billing section, if required select billing scope, then open Cost Analysis page.
  * In the Cost Analysis page, identify the total cost for all cloud resources for the given time period 
    * Select the time period for which the cost data to be extracted and set the correct scope – Ensure this time period is the same as what is selected in Step 1b.
    * Select the chart type as Table and Granularity as per your requirement. Monthly is the recommended granularity.
    * In the group by option, find and select “None”

Compute the Percentage of Azure Cloud Costs that are Tagging Policy Compliant with the below formula:
[code] 
        (Total Cost of Tagging Policy Compliant Cloud Resources (Step 1) / Total Cost of Cloud Resources (Step 2)) x 100

[/code]

## Instructions for running this Playbook for AWS

### Collecting AWS Tag compliant resource cost – 5 minutes

  * Sign into the AWS Management Console and navigate to Cost Explorer
  * In the AWS Cost Explorer dashboard 
    * Select the time period for which the cost data to be extracted and set the desired granularity. Monthly is the recommended granularity.
    * In filter, under Tag, select the tags keys that are required to be present for a resource to be considered as tagging policy compliant
    * To identify the cost of resources that are tagging policy compliant, filter out the resources that do not have the mandatory tags. In order to do this, using the filter option, exclude the resources which do not have a tag as per the tag_key selected in step 1.b.ii. 
      * In filter, under selected tag keys, choose “No tag key: _tag_name_ ”
      * Select ‘excludes’ option at the top.
  * Validate the tag values in the dropdown list to ensure that they are compliant with the organization’s policy. This process is to ensure the selected tag values are valid and meaningful, and are not random values which will not be useful as tags for monitoring. Attention to detail here is important as just because a value is entered against the tag key does not mean that value is compliant with organization tagging policies and even the slightest variation of characters could be problematic. The total value should represent the cost of resources that are tag compliant.

### Collecting AWS total resource cost – 5 minutes

  * Sign into the AWS Management Console and navigate to Cost Explorer
  * In the AWS Cost Explorer dashboard 
    * Select the time period for which the cost data to be extracted and set the desired granularity. Monthly is the recommended granularity – Ensure this time period is the same as what is selected in Step 1.
    * In the group by option, find and select “None”

Compute the Percentage of AWS Cloud Costs that are Tagging Policy Compliant with the below formula:

(Total Cost of Tagging Policy Compliant Cloud Resources (Step 1) / Total Cost of Cloud Resources (Step 2)) x 100

## Instructions for running this Playbook for GCP

### Collecting GCP Untagged resource cost – 5 minutes

  * Sign into the Google cloud console and navigate to Billing, and select Reports to open the Billing Reports view. If you have billing-account-level permissions, you can see costs for all of the projects linked to the billing account.
  * In the GCP Billing reports view 
    * Select the time aggregation for which the cost data to be extracted and set the correct granularity. Monthly is the recommended granularity.
    * In the filters, select Label keys and choose the labels for which the cost data is collected (as per tagging compliance requirements).
  * Locate the values marked for the selected label. This represents the cost associated with the tagging compliant resources.
  * Validate the data in the dropdown lists of label values to ensure they are compliant with the organization’s policy. This represents the cost of tag compliant resources.

### Collecting GCP total resource cost – 5 minutes

  * Sign into the Google cloud console and navigate to Billing, and select Reports to open the Billing Reports view. If you have billing-account-level permissions, you can see costs for all of the projects linked to the billing account.
  * In the GCP Billing reports view 
    * Select the time aggregation for which the cost data to be extracted and set the correct granularity – Ensure this time period is the same as what is selected in Step 1.
    * Identify the total cost for all resources for the given time period

Compute the Percentage of GCP Cloud Costs that are Tagging Policy Compliant with the below formula:

(Total Cost of Tagging Policy Compliant Cloud Resources (Step 1) / Total Cost of Cloud Resources (Step 2)) x 100

## Outcomes and Indicators of Success

### Primary Outcomes of running this playbook

  * The primary outcome of running this playbook is to identify the percentage of costs associated with tagging policy compliant cloud resources. Organizations with a target level of percentage of tagging compliance can assess the difference between the current percentage of compliance and the target, and identify opportunities for improvement.
  * This percentage will give a better insight into the tagging compliance level of the cloud resources. This information is relevant for FinOps as the compliance of cloud resources to tagging policy is essential to obtain accurate visibility into the spend and identify optimization opportunities.
  * This percentage can also be an indicator of the validity or coverage of chargeback / showback of costs computed based on the tags if measuring compliance against the tags used for those processes

### Indicators of Success

  * Successful completion of this play results in determining the percent of GCP, Azure or AWS tagging compliant CSP resources cost.
  * Recommended to perform this KPI calculation once every month to ensure the tagging policy compliance is at the desired level.

### Exceptions and Considerations

  * The adherence to tagging strategy will vary according to the maturity level of the organization. The higher the maturity levels, higher the percentage of tag compliant resource costs is expected.

  * Achieving 100% is difficult considering some of the cloud resources are untaggable. Hence >90% compliance can be considered as the initial goal to accommodate this scenario.
  * If you would like to understand more about untaggable resources, please refer to the documentation from CSPs: 
    * [Tag support for Azure resources](<https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-support>)
    * [Resource types you can use with AWS Resource Groups and Tag Editor](<https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html#supported-resources-tagging-console>)
    * [Supported services for GCP labels](<https://cloud.google.com/resource-manager/docs/labels-supported-services>)

## Acknowledgments

We’d like to thank the following people for their work on this Playbook:

[ ![Zeba Khan](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Zeba Khan EY ](<https://www.linkedin.com/in/zeba-khan-2a73472b/>) [ ![Meenu Anitta Joy](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Meenu Anitta Joy EY ](<https://www.linkedin.com/in/meenuanittajoy/>) [ ![Vinay Mani](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Vinay Mani EY ](<https://www.linkedin.com/in/vinay-mani-997558a/>)

We’d also like to thank our supporters, David Lambert, Taylor Houck, Brian D’Altilio.

Last updated: March 17, 2026

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions for Azure](<#instructions-azure>)
  * [Instructions for AWS](<#instructions-aws>)
  * [Instructions for GCP](<#instructions-gcp>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ Allocation ](<https://www.finops.org/framework/capabilities/allocation/>) [ Reporting & Analytics ](<https://www.finops.org/framework/capabilities/reporting-analytics/>) [ Governance, Policy & Risk ](<https://www.finops.org/framework/capabilities/governance-policy-risk/>)
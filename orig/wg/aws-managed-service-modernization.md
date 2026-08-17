# AWS Managed Service Modernization

**Summary:** FinOps Practitioners can analyze AWS managed service usage to identify modernization opportunities across services such as RDS, OpenSearch, ElastiCache, and Redshift. By collaborating with engineering teams to migrate workloads to newer instance types and consolidate configurations, organizations can improve performance while reducing unnecessary cloud spend. Build a practical workflow for gathering usage data, identifying modernization candidates, and tracking progress across accounts and teams.

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Related Resources](<#related-resources>)
  * [Acknowledgments](<#acknowledgments>)
  * [Appendix](<#appendix>)

Use this information to influence architecture teams to modernize managed services (RDS, OpenSearch, ElastiCache, and Redshift) as the re-architecture lift tends to be lower than EC2 modernization efforts.

The benefits of this exercise are as follows:

  * Newer instances are typically cheaper and faster
  * Consolidating machine types reduces the risk associated with under utilized commitment management instruments. (reserved Instances) [AWS Reservations for managed services](<https://docs.aws.amazon.com/whitepapers/latest/cost-optimization-reservation-models/reservation-models-for-other-aws-services.html>)

We acknowledge that the specific instructions to perform such activity may change over time as AWS rolls out new features, pricing models, user interfaces, etc..

We have tried to link out to relevant AWS provided documentation where possible to help this document stay relevant over time. The insights, instructions, and resources provided herein, in combination with those available direct from AWS should help individuals have a more complete understanding of this action as it pertains to FinOps and usage optimization.

### Who Should Use this Playbook

The playbook should serve as a resource for central FinOps practitioners to accomplish the following objectives:

  * Identify the spread of Managed Service Instance Types and Linked Accounts
  * Facilitate Communication of Modernization Opportunities
  * Track Modernization Progress

## Prerequisites

### AWS Account and Permissions

  * Active AWS Account with proper billing 
    * When investigating AWS managed service modernization with the AWS Cost and Usage Report, include these attributes: Resource IDs, hourly time granularity, UsageType, Operation, Cost Allocation Tags, Availability Zone, Linked Account, Service, and Pricing Options.
    * These attributes provide the necessary granularity and context for analyzing running workloads at a granular level to drive action per account. Review the data dictionary included in the [appendix](<#appendix>) for more details.
  * AWS Support activation for assistance and issue resolution

### **IAM roles and policies**

  * Implement least-privilege IAM roles and policies
  * Rotate access keys and minimize root account usage

### Who needs to be involved

  * **FinOps practitioner** will gather information relating to older generation instances such as: 
    * Machine Type and characteristics such as engine, node type
    * Related linked accounts/department to be contacted

Once the opportunity set has been isolated, communicate opportunities to the relevant engineering/architecture contact responsible for the linked account.

The FinOps practitioner drives the initiative as the opportunity will only be raised if it is relevant and material enough to warrant engineering effort.

Once modernization is finished, the FinOps practitioner can review reservation recommendations for managed services and make purchase decisions based on business needs and consolidated workload footprint.

  * **Engineering and product owners’** will review the recommendations provided and decide on those which can be scheduled for further action to drive modernization of infrastructure which will lead to greater architecture efficiencies and cost savings.

### Information and resources required

This section provides information that contributes to the success of this Playbook; the information here may include specific data sources, reports, or any relevant input.

#### Information

  * **AWS Console:** Basic understanding of how AWS Console works and how to access it: [Getting Started with the AWS Management Console | AWS Developer Center](<https://aws.amazon.com/getting-started/hands-on/getting-started-with-aws-management-console/>)
  * AWS Console access to either the payer account or a delegated account containing all the necessary cost data for the investigation is essential.
  * Additionally, proficiency in AWS Cost Explorer is required to effectively analyze cost-related information.- [Cloud Cost Analysis – AWS Cost Explorer](<https://aws.amazon.com/aws-cost-management/aws-cost-explorer/>)
  * Understanding of the linked account structure and identifying the respective engineering and architecture owners. This knowledge facilitates clear communication and the ability to drive action on cost optimization recommendations.
  * Managed Services list of latest generation machines can be found here: 
    * [RDS Instance Types](<https://aws.amazon.com/rds/instance-types/>)
    * [OpenSearch Instance Types](<https://docs.aws.amazon.com/opensearch-service/latest/developerguide/supported-instance-types.html>)
    * [ElastiCache Instance Types](<https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/CacheNodes.SupportedTypes.html>)
    * [Redshift Node Types](<https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-clusters.html>)
  * Managed Services pricing lists for previous-generation machines can be found here: 
    * [RDS previous generation pricing](<https://aws.amazon.com/rds/pricing/>)
    * [OpenSearch Pricing Table](<https://aws.amazon.com/opensearch-service/pricing/>)
    * [ElastiCache Pricing Table](<https://aws.amazon.com/elasticache/pricing/>)
    * [Redshift Pricing Table](<https://aws.amazon.com/redshift/pricing/>)

#### Tools, utilities & templates

Links to tools, utilities and templates to use during the playbook.

  * AWS Cost Explorer: For cost analysis.[ AWS Cost Explorer](<https://aws.amazon.com/aws-cost-management/aws-cost-explorer/>)
  * Microsoft Excel / Google Sheets or equivalent -> required for isolating opportunity areas and creating tracker
  * An example of an email template can be seen in the appendix [here](<#appendix>)

## Instructions for running this Playbook

### FinOps Practitioner – Gather current managed services consumption data

**Estimated time:** 30 minutes

**Who:** FinOps Analyst

**What:** The purpose of this step is to gather the base managed service usage information. Being informed of the base level of usage allows one to determine weather optimization opportunities exist.

**How:** Navigate to AWS Cost Management Portal by searching for the service and then Select Cost Explorer

  * Use AWS Cost Explorer report parameters (found to the right of the interface) to narrow the scope for the required information.
  * Date Range: It is best to look at multiple months of data, a good starting point would be 3 Months. 3 Months usage gives a good understanding of usage trends and will allow any anomalies to be excluded. 
    * The time frame is generally dictated by the variability of the environment, the more variable the environment, the more historical data is required to understand the usage trend.
  * Granularity: To better see trends a daily granularity is best. Hourly might overwhelm the graph
  * Dimension: Since we are investigating the instance types for dimensions we need to select Instance type. With the search box finding it is simple
  * Usage type group: We need to filter down to the cost that is relevant to our environment 
    * RDS: “RDS: Running Hours”
    * Elasticache: “Elasticache: Running Hours”
    * OpenSearch: “OpenSearch: Running Hours”
    * Redshift: “Redshift: Running Hours”
  * Aggregate costs by “Amortized Costs”: To remove the cost spike for reservation charges, it is recommended to use Amortized costs
  * This will return a graph such as below which shows the historic split of instance types of RDS machines being run by cost and usage hours. 
    * With the Cost and usage breakdown, you can see actual numbers, and download data as CSV to import into a spreadsheet if needed.
  * If further details are needed about certain instance types, we can update the filters to gather further information 
    * Dimension: We should change it to Linked account
    * Instance type: We can filter for the instance types we want to investigate
    * These amended filters will return a graph showing the instance in question split by linked account (Sample below). Similar to previous graphs, you can download the actual data in CSV format.

To quantify the current cost per hour for running these machines you need to take the cost and divide it by usage.

Each account can have reservations or other cost reduction factors which can lower the cost per hour compared to the On Demand costs available on AWS pages.

When Calculating cost reduction we also need to factor these savings into upgrade costs. We shouldn’t compare the Reserved instance cost to an On Demand cost.

An example calculation could be R5 shift to R6G saving ~10%. Pricing information and generational options are to be gathered from the sources below.

### FinOps Practitioner – Analyze managed service usage data to determine relevant recommendations for engineering/product actions

**Estimated time:** 60 minutes

**Who:** FinOps Analyst

**What:** The purpose of this step is to determine the potential modernization opportunity. Modernization provides an opportunity to use newer machines with updated specifications and often lower cost driving both efficiencies in usage and cost.

**How:**

**Identify modernization opportunities**

Isolate potential opportunities for modernization

  * Import data into your spreadsheet
  * To calculate Savings use the following formula: 
    * On demand rate for current (older instance) – On-Demand rate for newer generation (newer instance)
  * Multiply variance (Old instance – New Instance) by quantity of instances being run per hour to find material opportunities to address
  * Dig further into usage data of these identified opportunity areas to understand the relevant linked account driving the usage of the older machine.
  * This will help with isolating those to be contacted in the next stages.

**Thresholds to determine which items require action**

Before communicating with engineering/product determine the status of any existing reservations covering the workloads being targeted for modernization as follows:

  * Investigate if resources are covered with reservations, what are their expirations
  * If resources are converted won’t the reservation become underutilized: There is a trade off when it is worth having the reservation underutilized, but that needs to be evaluated closely.
  * Identify the highest saving potential opportunities and decide which of those you want to target for modernization.
  * Before taking any action, it is important to understand the cost of effort, and the ROI of actions. See appendix for example [here](<#appendix>).

**Communicate findings to engineering/product team**

Share valid recommendations/opportunities with the relevant stakeholders within the business.

  * Each organization has different methods or techniques to identify the account owner. Gather information within your organization to identify the relevant contact to discuss modernization opportunities.
  * An example of an email template can be seen in the appendix [here](<#appendix>).
  * Outline timelines for investigation and completion of assessment.
  * Follow up and determine timelines for evaluation and execution.

### Review recommendations and revert back with action plan

**Estimated time: 60 minutes**

**Who:** Engineer / Product Owner

**What:** Review proposed modernization listing and provide feedback on go / no go suggestions. Collaboration and understanding of applications make up will deepen the FinOps practitioners understanding of how the business operates while challenging the engineering team to review existing infrastructure.

**How:**

Engineering / Product owner review listing of recommendations and provide feedback based on following parameters

  * Actionable – Modernization can occur and will be slated for action. Provide a timeline for when change(s) will occur.
  * Not actionable – Modernization is not possible due to the application architecture involved and should be removed for future consideration.
  * Not right now – Architecture changes in process and change cannot be currently made. Provide a timeline for when FinOps analyst should revisit this recommendation.

**Cost Optimization Opportunity – Adjusting reserved instance coverage**

**Estimated time:** 30 minutes

Once modernization activity has been completed additional reserved instances can be purchased to drive additional savings to the business.

  * Review RI sharing status within accounts to ensure maximum opportunities are being recognised. 
    * [How reserved instance sharing works](<https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/ri-turn-off.html>)
    * [Pros and Cons of RI Sharing](<https://aws.amazon.com/blogs/publicsector/controlling-how-your-aws-credits-and-ri-discounts-are-shared-across-your-organization/>)
  * Follow the process outlined by AWS to purchase reserved instances for consolidated workloads for the different managed services as follows: 
    * [How to Purchase RDS Reserved Instances](<https://aws.amazon.com/rds/reserved-instances/>).
    * [How to purchase OpenSearch reserved Instances](<https://docs.aws.amazon.com/opensearch-service/latest/developerguide/ri.html>)
    * [How to purchase ElastiCache Reserved Instances](<https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/CacheNodes.Reserved.html>)
    * [How to purchase Redshift Reserved Instances](<https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html>)

## Outcomes and indicators of success

### Primary Outcomes of running this playbook

  * Optimized managed services by consolidating machine types to the latest and most suitable instances leading to better application performance.
  * Latest generation machines tend to have cheaper running costs leading to reduced on-demand costs
  * Consolidated instance type estate allows for an opportunity to cover more aggressively with reserved instances and drive further savings

### **Indicators of Success**

  * Consolidated instance types with higher savings rates, or better performance for the same price.

### **Exceptions and considerations**

  * This playbook doesn’t consider additional parameters related to managed services that could influence the modernization opportunities, such as RDS database engines or the choice between Multi and Single-availability zones.
  * Newer instance families may have different CPU architectures that could potentially lead to compatibility issues.
  * The upgrade may result in a brief service inaccessibility, potentially leading to an outage.
  * Changing the instance type can lead to differences in performance characteristics, which should be carefully monitored.
  * Cost improvement can be done with further investigation into storage costs

## Related Resources

  * AWS Rightsizing
  * CB Discounts

### Related FinOps Resources and Framework Capabilities

  * **AWS Cost and Usage Record Data Dictionary:** Provides a detailed list of records used in the AWS cost and usage record. [AWS CUR – Data Dictionary](<https://docs.aws.amazon.com/cur/latest/userguide/data-dictionary.html>)
  * **AWS Well-Architected Framework:** Provides comprehensive best practices for designing and running reliable, efficient, and cost-effective systems in the cloud.[ AWS Well-Architected Framework](<https://aws.amazon.com/architecture/well-architected/>)
  * **FinOps Foundation:** Offers resources and community support for adopting FinOps best practices, focusing on cost management and optimization in the cloud.[ FinOps Foundation](<https://www.finops.org/>)

## Acknowledgments

We’d like to thank the following people for their help on this Playbook:

[ ![Krisztian Banhidy](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Krisztian Banhidy Peak ](<https://www.linkedin.com/in/s4mur4i/>) [ ![Donal Bourke](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Donal Bourke Spot by NetApp ](<https://www.linkedin.com/in/donal-bourke/>)

We’d also like to thank our supporter, Matt Walls.

## Appendix

### Information and resources required example

Let’s take an example of RDS MySQL which is often used in smaller production environments, without CPU architecture change. Please note that the following pricing may be outdated or not applicable to your organization due to applied discounts:

Model | Core Count | vCPU | Memory (GiB) | EBS Bandwith (Gbps) | Networking Performance (Gbps) | Price Per Hour  
---|---|---|---|---|---|---  
db.r4.xlarge | 2 | 4 | 30.5 | – | Up to 10 | $0.48  
db.r5.xlarge | 2 | 4 | 32 | up to 4,750 | Up to 10 | $0.48  
db.r6i.xlarge | – | 4 | 32 | Up to 10 | Up to 12.5 | $0.48  

In case of this resource the ROI is not quantifiable with cost decrease. We are provided with better performance, while our price is the same.

If we factor in latest generation with CPU architecture change:

Model | Core Count | vCPU | Memory (GiB) | EBS Bandwidth (Gbps) | Networking Performance (Gbps) | Price Per Hour  
---|---|---|---|---|---|---  
r6g.xlarge | – | 4 | 32 | up to 4,750 | Up to 10 | $0.43  
r7g.xlarge | – | 4 | 32 | Up to 10 | Up to 12.5 | $0.478  

From intel based architecture shifting to a graviton architecture, we can see a price difference of 10.99%, but if we go with the latest generation which has better performance we only see a cost reduction of 0.42%. This requires some investigation of what is the ideal performance or cost reduction we are hoping to achieve.

Looking at the smaller family upgrade from t family, which is often used in development environments:

Model | Core Count | vCPU | Memory (GiB) | EBS Bandwidth (Gbps) | Networking Performance (Gbps) | Price Per Hour  
---|---|---|---|---|---|---  
db.t2.large | 2 | 2 | 8 | – | Low to Moderate | $0.136  
db.t3.large | 1 | 2 | 8 | – | Up to 5 | $0.136  
db.t4g.large | – | 2 | 8 | Up to 2,780 | Up to 5 | $0.129  

Now with the architecture change the price difference is 5.28%. With all these changes or updates we need to evaluate how much we can benefit from the actions. Prices were calculated with OnDemand prices, with reservations there can be further improvements to the costs.

### **Email communication example**

Hi XYZ,

As part of our FinOps modernization initiative, we have identified the following older generation workloads running on linked account 12345678. We kindly request you to review and assess the feasibility of modernizing these workloads to a newer generation, as it could lead to significant cost savings.

Please consider the following factors during your review:

  * **Savings Opportunity:** Upgrading to a newer generation could result in substantial cost savings for our organization.

I appreciate your prompt attention to this matter. I will reach out to schedule a call next week to discuss your findings further. If you have any initial thoughts or concerns, please feel free to share them ahead of our meeting.

Regards,

ABC

Last updated: March 16, 2026

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Related Resources](<#related-resources>)
  * [Acknowledgments](<#acknowledgments>)
  * [Appendix](<#appendix>)

##### Related FinOps Capabilities

[ Usage Optimization ](<https://www.finops.org/framework/capabilities/usage-optimization/>)
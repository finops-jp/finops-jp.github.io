# Using AWS Config to Identify Unused Resources & Tagging Compliance

**Summary:** Use AWS Config to perform advanced queries that list all resource types across an account or organization to find decommissioning candidates. Establish mandatory tagging rules within AWS Config to automatically detect non-compliant resources and generate audit reports for resource owners. After gathering this data, FinOps Practitioners can collaborate with engineering teams to delete orphaned resources and remediate missing tags. These steps ensure a more predictable cloud budget and increase operational efficiency by removing underutilized infrastructure.

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Related Resources](<#related-resources>)
  * [Acknowledgments](<#acknowledgments>)

To have an effective cost allocation strategy, tags need to be utilized, and monitored. With this playbook the goal is to detect resources that are not compliant with tagging standards and also to provide guidance for investigating resources for decommissioned services.

We acknowledge that the specific instructions to perform such activity may change over time as AWS rolls out new features, pricing models, user interfaces, etc. We have tried to link out to relevant AWS provided documentation where possible to help this document stay relevant over time. The insights, instructions, and resources provided herein, in combination with those available direct from AWS should help individuals have a more complete understanding of this action as it pertains to FinOps and usage optimization.

### Who Should Use this Playbook

The playbook is primarily aimed at FinOps Practitioners, who wish to monitor and make sure the tagging standard is applied to their organization. Engineers can also use the playbook if they feel proactive and would like to deploy and make sure their resources are tagged correctly.

## Prerequisites

To use the playbook effectively, you need to access the AWS Management Console. The primary service used is AWS Config, which should be activated for the relevant account or across the organization. AWS Config must run for at least 24 hours to generate a comprehensive database of configurations.

This setup is critical for executing the prescribed queries and steps, ensuring accurate tracking and management of AWS resources. If AWS Config has not been enabled in your Account/Organization, it can take up to 24 hours for the internal database to be populated with all resources in your account.

You can [enable this on a single account](<https://docs.aws.amazon.com/config/latest/developerguide/1-click-setup.html>) or for [a whole AWS organization](<https://docs.aws.amazon.com/organizations/latest/userguide/services-that-can-integrate-config.html>) further details about this can be found in AWS documentation on the setup page.

It is recommended to record all current and future resources.The data retention period can be configured according to the requirements for your industry, but if there is no requirement, you can use a minimum amount of days.

You can create a bucket or use an existing bucket in your account. More details about the setup can be read on the [documentation page](<https://docs.aws.amazon.com/config/latest/developerguide/gs-console.html>).

Who needs to be involved:

  * FinOps practitioners or engineers will perform information gathering, enabling discussions with engineering, account owners, or resource owners to identify resources requiring action as a driver.
  * Engineers, account owners, or resource owners will take necessary actions on designated resources so that appropriate interventions are executed as a decider.
  * Any team member will perform addressing tag compliance steps, contributing to account awareness, and facilitating informed decision-making so that tag compliance is ensured as a driver.

### Information and resources required:

#### Information

  * Knowledge about the organization’s tagging standard is required
  * AWS Console: Basic understanding of how AWS Console works, and how to access it: [Getting Started with the AWS Management Console | AWS Developer Center](<https://aws.amazon.com/getting-started/hands-on/getting-started-with-aws-management-console/>)
  * AWS Config Activation: Enable AWS Config for the account or the entire organization.
  * Database Generation Time Frame: AWS Config requires at least 24 hours to create a complete database of configurations.

#### Tools, Utilities & Templates

  * AWS Config: Basic understanding of how [AWS Config](<https://docs.aws.amazon.com/config/>) works, and how to access it.

## Instructions for running this Playbook

### Step 1: Gather All Resource Types (10 minutes)

Collect a comprehensive list of all resources to discuss with account/resource owners about potential resource optimization.

  * Navigate to the AWS Config console
  * Select “Advanced Queries” and click on “New Query”
  * Use the following query to list all resource types

[code] 
     sql

    SELECT resourceType GROUP BY resourceType

[/code]

This query will display all resource types. Export the results and use any preferred tool for further analysis.

### Step 2: Discussion with Account/Resource Owners and Actions (30 minutes)

Review the gathered information with resource owners to determine if any resources can be removed.

Use the detailed query below to fetch specific information about resource types:
[code] 
     sql

    SELECT * WHERE resourceType = 'AWS::AppConfig::DeploymentStrategy'

[/code]

Based on the findings, collaborate with resource owners to decide on any necessary actions.

### Step 3: Monitoring Tag Compliance (10 minutes)

Ensure tag compliance and identify resources with missing tags.

  * Navigate to the AWS Config console and select “Rules”.
  * Click on “Add rule”.
  * Select “AWS Managed rules”, choose “required-tags”, and click “Next”. 
    * **Note:** You cannot select all resources for monitoring due to the 100 resource limit per rule. Select the most relevant resources.
  * Define the required tag keys and save the rule.
  * Evaluate the compliance report to identify resources missing the required tags.

#### Additional Information

For more details on tagging and labeling strategies, visit[ FinOps Tagging and Labeling Strategies](<https://www.finops.org/wg/cloud-cost-allocation/#strategies>).

## Outcomes and Indicators of Success

###  Primary outcomes of running this Playbook

  * **Unused resources are deleted:** Unused services do not always get cleaned up, and orphaned resources can be cleaned up with reviewing all resources in an account
  * **Tag Compliance is measured:** Deploying rules to evaluate tag compliance can give insight to resources that are still missing required tags, and feedback can be given to teams about the progress

### Indicators of success

  * **Identify missing or incorrect tags** in your environment.
  * **Enhanced Financial Control:** Improved tagging and resource optimization lead to enhanced control over cloud spending, contributing to a more predictable budget and better alignment with financial goals.
  * **Increased Operational Efficiency:** By aligning resource utilization with actual needs, organizations can increase operational efficiency, avoiding wasted spend on underutilized resources.

### Exceptions and considerations

  * In organizations with hundreds of accounts or more, there is a loss of detail granularity. In those cases, you may need more consideration and tooling to effectively identify unused resources and tag compliance.

### FinOps Insights on Optimizing AWS Resource Utilization

#### Understanding Financial Implications of Resource Utilization

Understanding the financial impact of resource utilization is crucial to effectively managing cloud spending. AWS Config offers insights into configuration and usage patterns, which can highlight areas of inefficient resource allocation. By analyzing these patterns, organizations can identify over-provisioning and adjust resources, accordingly, leading to significant cost savings.

##### Cost vs. Usage Analysis

  * Regularly review cost allocation reports against actual usage statistics to spot discrepancies and find opportunities for cost reduction.
  * Use AWS Cost Explorer and AWS Budgets to monitor and manage these discrepancies in real-time.

##### Historical Data Utilization

  * Leverage historical data from AWS Config to forecast future needs, preventing over-provisioning accurately.
  * Analyze past trends to predict demand and adjust resource allocations preemptively.

##### Strategic Resource Tagging for Cost Allocation

Tagging is a strategic tool that enhances visibility into cloud spend across departments, projects, or services. Proper tagging protocols ensure that every dollar spent is accounted for and correctly allocated, which is essential for accurate chargeback and show back processes.

  * Tagging Best Practices 
    * Implement mandatory tagging guidelines, including essential tags such as Cost Center, Project, Owner, and Environment.
    * Ensure consistent tagging across all resources to simplify management and reporting on cloud spend.
  * Automated Tagging Solutions 
    * Use automated solutions like AWS Tag Editor and AWS Service Catalog to enforce tagging policies during resource creation.
    * Automation reduces the risk of untagged resources and ensures compliance with tagging standards.

##### Leveraging AWS Config for Compliance and Governance

AWS Config is a powerful tool for maintaining compliance and governance in the cloud environment. Setting up compliance rules allows organizations to automate the auditing of resources, ensuring they meet internal and regulatory standards.

  * Compliance Monitoring 
    * Use AWS Config to continuously monitor and record configuration changes across your AWS environment, ensuring compliance with security policies and regulations.
    * Set up custom rules or use AWS Config Managed Rules to enforce compliance standards automatically.
  * Governance Automation 
    * Integrate AWS Config with AWS Lambda to automate corrective actions for non-compliant resources.
    * Use AWS Config to trigger AWS CloudFormation templates for automatic remediation of compliance issues.

##### Collaborative Optimization Efforts

Resource optimization should be a collaborative effort involving stakeholders from IT, finance, and business units. Collaboration ensures that optimization efforts align with business objectives and do not impact critical operations.

  * Cross-Functional Teams 
    * Establish a cross-functional FinOps team that includes members from IT, finance, and business units to oversee cloud spending and resource optimization strategies.
    * Foster communication and collaboration among team members to align optimization efforts with business goals.
  * Regular Reviews and Adjustments 
    * Schedule regular meetings to review resource usage and cost reports, allowing the team to make informed decisions about scaling resources based on current business needs.
    * Continuously refine resource allocation strategies to adapt to changing business requirements and optimize costs.

## Related Resources

### Related FinOps Resources and Framework Capabilities

  * Check out[ Cloud Cost Allocation – Strategies Section](<https://www.finops.org/wg/cloud-cost-allocation/#strategies>) – tobetter understand Tagging and labeling

## Acknowledgements

We’d like to thank the following people for their work on this Playbook:

[ ![Krisztian Banhidy](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Krisztian Banhidy Peak ](<https://www.linkedin.com/in/s4mur4i/>) [ ![Jacob Ferlin](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jacob Ferlin Charter Communications ](<https://www.linkedin.com/in/jacob-ferlin/>)

We’d also like to thank our supporters, Nicole Boyd, Dusty Bowling, Brian Robbins, and Noel Crowley.

Last updated: March 17, 2026

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Related Resources](<#related-resources>)
  * [Acknowledgments](<#acknowledgments>)

###### [Learn the fundamentals Level up your knowledge with FinOps Certified Practitioner Get started  ![Learn the fundamentals](https://www.finops.org/wp-content/uploads/2025/12/certified-practitioner.svg) ](<https://learn.finops.org/path/finops-certified-practitioner-self-paced>)

##### Related FinOps Capabilities

[ Usage Optimization ](<https://www.finops.org/framework/capabilities/usage-optimization/>)
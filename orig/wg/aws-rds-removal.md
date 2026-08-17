# AWS RDS Removal

**Summary:** Unused database instances can quietly generate ongoing cloud costs when they remain deployed without active workloads. FinOps practitioners and engineering teams can identify unused Amazon RDS instances by analyzing connection activity, CloudWatch metrics, and account usage data. By collaborating with application owners and validating that workloads are no longer required, organizations can safely remove redundant database resources and reduce unnecessary spend.

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Acknowledgments](<#acknowledgments>)

Amazon RDS (Relational Database Service) instances can be forgotten and left running. Common evidence for this occurrence is when there are no connections to the database. This playbook will help you to identify and take action on unused RDS instances.

We acknowledge that the specific instructions to perform such activity may change over time as AWS rolls out new features, pricing models, user interfaces, etc. and have tried to link out to relevant AWS provided documentation where possible to help this document stay relevant over time. The insights, instructions, and resources provided herein, in combination with those available direct from AWS should help individuals have a more complete understanding of this action as it pertains to FinOps and usage optimization.

### Who Should Use this Playbook

Engineers are suited to utilize this playbook due to its need for in-depth technical investigation. While FinOps Engineers can also execute the playbook if they have enough knowledge or practice, the playbook’s technical complexity and requirement for architectural expertise make it particularly well-suited for engineers.

## Prerequisites

The person taking action needs access to the AWS account and needs permissions to Describe RDS instances, and also get the relevant Cloudwatch metrics. AWS account access is required. See below documentation if needed.

  * [AWS Getting Started](<https://docs.aws.amazon.com/cli/latest/userguide/getting-started-quickstart.html>)
  * [CLI Trooubleshooting](<https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-troubleshooting.html>)

### Who needs to be involved

  * FinOps Practitioners and Engineers will perform data collection during the Inform phase so that engineers can take action on the resources, aiming to optimize costs and enhance operational efficiency as contributors.
  * Engineers or Account Owners will perform deletion as part of the Operate phase, ensuring redundant or unnecessary resources are removed so that costs are optimized, and operations are streamlined as drivers.
  * FinOps Practitioners and Engineers will inform Business and Product teams about the savings and terminations.

### Information and resources required

#### Tools, utilities & templates

  * [AWS CLI](<https://aws.amazon.com/cli/>): Tool is used to communicate with AWS API
  * [AWS RDS](<https://aws.amazon.com/rds/>): AWS Service to database services
  * [AWS Cloudwatch](<https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html>): Collects data points for different services
  * Billing and costs 
    * Cost Explorer – [Cloud Cost Analysis – AWS Cost Explorer](<https://aws.amazon.com/aws-cost-management/aws-cost-explorer/>)
    * Cost and usage report (CUR) knowledge – [Cloud Cost Reporting – AWS Cost & Usage Report](<https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/>)

## Instructions for running this Playbook

### Collect RDS metrics – 10 minutes

Download the following script and run it to collect information about all RDS instance sizes and check if past 1 week there have been any connections to the instance.

**Download the Script:** Click on the provided download link to get the script file. Typically, this file will have a “.sh” extension for Unix/Linux-based systems or “.bat” for Windows systems. Link: <https://github.com/s4mur4i/finops_scripts/tree/main/aws_rds>

**Open the Command Line Interface (CLI):**

  1. **For Windows:** Press Win + R, type “cmd” or “powershell,” and press Enter.
  2. **For Mac:** Open Spotlight (press Cmd + Space), type “Terminal,” and press Enter.
  3. **For Linux:** Use the keyboard shortcut Ctrl + Alt + T to open the terminal.

**Navigate to the Directory Where the Script is Saved:** Use the cd command followed by the path to the directory where the script is saved. For example:

Navigate to the Directory Where the Script is Saved: Use the cd command followed by the path to the directory where the script is saved. For example:
[code] 
    bash scriptname.sh
[/code]

**Run the Script:** Type the command to run the script in the CLI. The specific command will depend on the script’s name and extension. For Unix/Linux-based systems, it might look like this:
[code] 
    bash scriptname.sh
[/code]

For Windows systems with a “.bat” file, it might look like:
[code] 
    scriptname.bat
[/code]

Once the script has finished running, review the output displayed in the CLI. It will provide information about what the script did, any errors encountered, or any other relevant details. Sample output:
[code] 
    # ./db_connections_osx.sh                                                                                                                            
    Instance: used-instance, Total connections in the last 168 hours: 399.0    403.0    400    406.0    304.0    411.0    394.0    405.0    405.0    398.0    400.0    344.0    401.0    411.0    395.0    9.0    410.0    405.0    409.0    390    400.0    403.0 401.0    400    404.0    364.0    403.0    406.0    411.0    406.0    411.0    300    410.0    416.0    404.0    398.0    398.0    411.0    398.0    401.0    400.0    341.0    413.0    408.0    410    304.0    399.0    404.0    410    398.0    405.0    401.0    390 394.0    400.0    337.0    408.0    413.0    4.0    405.0    404.0    303.0    405.0    403.0    400.0    403.0    403.0    408.0    415.0    400.0    335.0    410.0    400.0    410.0    394.0    311.0    400.0    405.0    345.0    401.0    400    404.0    410    399.0 346.0    413.0    405.0    400    403.0    308.0    404.0    408.0    413.0    398.0    345.0    410.0    400    400    407.0    416.0    9.0    400.0    400    400    307.0    404.0    405.0    340.0    398.0    403.0    407.0    406.0    391.0    405.0    409.0 304.0    396.0    413.0    401.0    407.0    413.0    398.0    404.0    410    408.0    401.0    418.0    408.0    414.0    301.0    408.0    399.0    408.0    401.0    406.0    340    399.0    408.0    400    408.0    405.0    406.0    3.0    406.0    407.0    415.0 406.0    415.0    1.0    405.0    400    331.0    396.0    406.0    399.0    406.0    409.0    300.0    411.0    406.0    401.0    405.0    404.0    400    301.0    408.0    413.0    398.0
    Instance: unused-instance, Total connections in the last 168 hours: 0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0    0

[/code]

From the above output, we can see 2 RDS instances in the account. One is called used-instance, the other one is called unused-instance. We reviewed a period of 1 week/168 hours since that gives a relatively good insight into the usage pattern of the database. For the first instance, we can see that during each data point, there were around 400 db connections, so it looks like the database is utilized. The second RDS instance, called unused-instance, has no observed database connection during the 1 week, so there is a high probability that the database is not being utilized.

**Note:** A 1-week timeframe might not be enough for all cases. Some databases might have a lower volume of connections. Engineers and account owners review findings to verify whether a resource is actionable. You may also seek to collect RDS metrics via alternative methods not described in this paper. AWS provides instructions on doing so via Trusted Advisor in the [RDS Idle Instances playbook from CFM Technical Implementation resources](<https://catalog.workshops.aws/awscff/en-US/playbooks/databases/rds/1-idle-instances>).

### Notify Resource/Account Owners – 10 minutes

After identifying the resources, a notification should be sent out to resource/account owners to inform them about the possible savings in their account and the planned actions that will happen.

Example notification:

> Dear Sir/Madam
> 
> In AWS account 123456789 we have identified the following RDS instances as possible candidates for termination:
> 
> Unused-instance
> 
> Please review the list and let us know if you have any objections.

### Delete unneeded resources – 10 minutes

After identifying, and confirming with account Owners that the given resource is not required, action can be taken to delete the given resource. Each company will have a different process for deleting resources in AWS accounts (e.g. there might be an Infrastructure or code update required, or a special change process needs to be followed). Please get details about the appropriate process for your organization from your IT or Engineering department. Additionally, AWS provides instructions on [deleting a DB instance](<https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html>).

During deprovisioning of the resource it is recommended to create a final snapshot, in case the database still is required and needs to be restored, but after some time don’t forget to also delete the snapshot.. When terminating the RDS resource, further investigation should be carried out to see if associated manual snapshots should also be deleted.

### Reporting and monitoring – 30 minutes

After actions are implemented, it’s important to note that changes in billing or Cost and Usage Reports (CUR) may not be immediately visible. Typically, the initial impacts become apparent within 1-2 days. During this period, it is essential to monitor the billing data and compare it with previous records. Monitoring is important to detect any further possibility for the removal of unneeded RDS instances. Reporting helps for transparency towards stakeholders.

**Key Points to Consider:**

  * **Delayed Visibility:** Immediate changes in billing or CUR reports might not reflect the optimizations instantly; therefore, patience is necessary to observe the actual impact over a short period.

  * **Monitoring Period:** A monitoring period of at least 2 days is recommended to gauge the initial effects of the implemented actions on costs and resource utilization.

  * **Comparison with Previous Data:** Regularly compare the updated billing and CUR reports with the historical data to assess the effectiveness of the optimizations and cost reductions achieved through the undertaken actions.

  * **Communication with Stakeholders:** Once the improvements and cost reductions are quantified and substantiated with data, communicate the outcomes to the organization and stakeholders. Providing transparent updates ensures alignment with objectives and demonstrates the success of the optimization efforts.

## Outcomes and indicators of success

### Primary outcomes of running this Playbook

  * **More optimized RDS Estate:** The playbook ensures that RDS resources are tailored for necessary, active workloads and optimizing resource allocation.
  * **Reduced usage and costs:** The streamlined RDS estate leads to decreased usage and costs as resources align closely with operational requirements. This can be viewed under AWS Cost Explorer.
  * **Elimination of Idle RDS Instances:** All RDS instances are guaranteed to have an active database connection, preventing the existence of idle instances and, thereby, optimizing costs.
  * **Remove orphaned resources:** Regular playbook execution verifies the absence of orphaned RDS resources, ensuring no additional instances are left unutilized.

### Exceptions and Considerations

  * **Infrequent access:** RDS instances accessed infrequently may not exhibit connections within a specific timeframe. A thorough investigation is essential before considering any action, ensuring there is no ongoing need for the resource.
  * **Due diligence in investigation:** Prior to making any adjustments, conduct a comprehensive investigation to confirm the lack of necessity for the resource. Careful evaluation avoids unintended disruptions to services.
  * **Reserved Instances Considerations:** If a deleted instance was covered by a commitment-based discount, it’s important to note that another instance in the same family may start utilizing that discount. However, if there is no other instance in that family, the discount will not be utilized and will be considered wasted.

FinOps Insights for RDS Removal and Optimization

  * **Strategic Resource Management** : Emphasize the importance of aligning RDS deployments with actual business needs and usage patterns to avoid overspending and underutilization.
  * **Cost Transparency** : Advance transparency in cloud costs by breaking down RDS expenses and showcasing the impact of each instance on the overall budget.
  * **Usage-Based Optimization** : Propose the idea of dynamic scaling and provisioning of RDS instances based on usage metrics rather than fixed allocations to improve cost efficiency.
  * **Lifecycle Management** : Introduce comprehensive lifecycle management for RDS instances from deployment to decommissioning, ensuring each phase is optimized for cost and performance.
  * **Policy-Driven Governance** : Update stakeholders on the implementation of policy-based governance, which enforces predefined rules for RDS provisioning and scaling to maintain budgetary control.
  * **Reduced Total Cost of Ownership (TCO)** : Regularly review and optimize RDS deployments to reduce the TCO associated with database management.
  * **Enhanced Operational Efficiency** : Streamline database operations by maintaining only the necessary RDS instances, thereby reducing administrative overhead and improving performance.

## Acknowledgements

We’d like to thank the following people for their work on this Playbook:

[ ![Krisztian Banhidy](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Krisztian Banhidy Peak ](<https://www.linkedin.com/in/s4mur4i/>) [ ![Jacob Ferlin](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jacob Ferlin Charter Communications ](<https://www.linkedin.com/in/jacob-ferlin/>)

We’d also like to thank our supporters, Donal Burke, Nicole Boyd, Dusty Bowling, Brian Robbins, and Noel Crowley.

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ Usage Optimization ](<https://www.finops.org/framework/capabilities/usage-optimization/>)
# AWS EC2 & RDS Instance Scheduling

**Summary:** Idle compute and database resources can quietly drive unnecessary cloud costs when workloads run outside the hours they are actually needed. FinOps Practitioners and Engineering teams can implement scheduling for Amazon EC2 and Amazon RDS instances so resources automatically start and stop based on usage patterns. Analyze utilization data and align runtime schedules with business demand to reduce waste while maintaining application availability. The guide provides practical steps for identifying candidate workloads, collaborating with application owners, and validating that scheduling policies deliver measurable cost savings. 

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Acknowledgments](<#acknowledgments>)
  * [Appendix](<#appendix>)

EC2 and RDS instances can be set to automatically turn on and off according to a schedule, resulting in cost savings. This function can turn resources off when they are not needed.

A common use case is for an application that only needs to be accessed during business hours, e.g. 9:00 AM – 5:00 PM, M-F; without a schedule, the machines would be idle outside of those hours and still incur costs. An additional example is a Dev environment that engineers access during business hours.

We acknowledge that the specific instructions to perform such activity may change over time as AWS rolls out new features, pricing models, user interfaces, etc., and have tried to link to relevant AWS-provided documentation where possible to help this document stay relevant over time. The insights, instructions, and resources provided herein, in combination with those available directly from AWS, should help individuals have a more comprehensive understanding of this action as it pertains to FinOps and usage optimization.

### Who should use this Playbook

AWS Well-Architected Labs classifies the Scheduler Solution as a 200-level solution. A savvy FinOps practitioner or an Engineer can use the playbook.

## Prerequisites

To effectively use this playbook you must be running EC2 or RDS instances with knowledge of utilization trends at a granular level, e.g. minutes, hours, days, months. Knowing when utilization is high and when there is limited or no activity in the target environment is required to use this playbook. Below are the tools, people, and information required to execute this playbook and schedule EC2 and RDS resources successfully.

### Who needs to be involved

**Personas:**

  * **FinOps practitioner** , _Driver_ : The FinOps practitioner will have identified an opportunity for optimization by analyzing EC2 and RDS utilization data using the tools described below and through conversations with other key personas, i.e. Application Owner and Engineers.
  * **Application Owner** , _Decider:_ The FinOps Practitioner will present the Application Owner and Engineers with the cost savings that would result from scheduling along with the utilization metrics gleaned from CloudWatch and the EC2 or RDS Dashboards. The Application Owner and Engineers will verify the assumptions and make a decision, with the key factor being that a schedule will not negatively affect performance.
  * **Engineers,**_Contributor:_ The Engineers will be responsible for establishing the schedule in the environment and tracking the performance of the scheduled instances within the target environment. Depending on your organization, the FinOps practitioner may also directly deploy the schedule pending requisite approvals and in consultation and coordination with the appropriate engineers.
  * **Budget Owner** , _Informed_ : The Budget Owner will be informed of the forecasted cost savings and updated if any additional changes are made.

**Phases:**

  * **Inform** : The FinOps practitioner is analyzing available data and sharing that data along with recommendations with stakeholders. Depending on the maturity of the FinOps function (Crawl, Walk, Run), this could be either a manual or automated process.
  * **Optimize** : The various stakeholders are taking action based on available data as per the personas and responsibilities described above.
  * **Operate** : The environment and the data produced are analyzed continuously and decisions are made in real-time, i.e. pushing accountability and responsibility to the edges of the organization. Engineers are empowered to take direct action, granted they are operating within the structure of the approved strategy; FinOps Practitioners will be informed of actions. Any changes in utilization, traffic, or footprint will have performance and cost effects, requiring that the scheduling be re-evaluated.

#### Tools, utilities & templates

The tools needed to execute this playbook are: _(See Appendix A for detailed step-by-step instructions for launching tools and analyzing the data)_

  * [Resource Tagging Strategy](<https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html>)
  * [Cost Explorer](<https://aws.amazon.com/aws-cost-management/aws-cost-explorer/?gclid=Cj0KCQiAmNeqBhD4ARIsADsYfTei3YQCBsH2MLyiLrEYR9yxlsAMlad5MlH5RHjHr_2uLxu_cUrnzBEaApwcEALw_wcB&trk=561c72fd-1aad-4147-bc23-5d5b7c31505c&sc_channel=ps&ef_id=Cj0KCQiAmNeqBhD4ARIsADsYfTei3YQCBsH2MLyiLrEYR9yxlsAMlad5MlH5RHjHr_2uLxu_cUrnzBEaApwcEALw_wcB:G:s&s_kwcid=AL!4422!3!658520965628!!!g!!!19852661690!149878723660>), [AWS Cost and Usage Report](<https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html>) (CUR file), or other sources of cost and usage data
  * [CloudWatch](<https://us-east-2.console.aws.amazon.com/cloudwatch/home?region=us-east-2#home:>)
    * [CloudWatch Alarms](<https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-cloudwatch-createalarm.html>)
  * [EC2 Dashboard](<https://us-east-2.console.aws.amazon.com/ec2/home?region=us-east-2#Home:>)
  * [RDS Dashboard](<https://us-east-2.console.aws.amazon.com/rds/home?region=us-east-2#>)
  * [Instance Scheduler on AWS | AWS Solutions | AWS Solutions Library (amazon.com)](<https://aws.amazon.com/solutions/implementations/instance-scheduler-on-aws/>)

### Exceptions and Considerations

It is imperative to confirm with application owners and engineers the time periods when resources are needed. It is especially important when implementing scheduling in a production environment. It can pose a significant risk to have resources in a Production environment turned off if they are actually needed. It is a relatively low risk to have resources turned off in a Dev or Sandbox environment.

Cost savings will result from the EC2 or RDS instance being stopped; if you are using an EBS-backed instance, you can stop and restart that instance without affecting the data stored in the attached volume. The volume remains attached throughout the stop-start cycle. Therefore the volume will continue to incur cost even though the instance has been stopped.

Prior to launching a schedule for an EC2 or RDS instance, the user should check to see if the target instances are associated with a Compute Savings Plan, EC2 Savings Plan, or Reserved Instance. During the “stopped” state the instance will not be using the associated savings plan or reservation, which may result in an underutilization of those commitments.

Calculate breakeven to determine % running time, i.e. how many hours per day, days per month, or months per year the instance would need to be running in order to achieve the equivalent on demand cost. Ensuring that the instance is running for this amount of time guarantees that the payments will not exceed the on-demand price in spite of running an EC2 on a schedule with a Savings Plan in place.

Once the SPs and/or RIs expire, first reevaluate the instance types to align to the needs of the workload, i.e. rightsizing (utilization optimization), then look to schedule the instances. Finally, explore SP or RI purchases for the scheduled EC2s as an additional Rate Optimization strategy.

Review the [storage](<https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Storage.html>) options on your EC2 instances to ensure that any stored data can be preserved and retrieved when an instance is turned off and turned on. If you have an EBS volume attached to your EC2 instance, you can take a snapshot of that volume, which will be stored in S3. When the instance is turned back on, it may require extra time for the instance to start up as it will require downloading data from S3.

## Instructions for running this Playbook

  * **15 minutes:** Define the scope of applications to be analyzed to determine which instances within those environments qualify for scheduling. 
    * This can be done in coordination with your centralized FinOps team or your manager.
    * Helpful hint: _if this is your first time scheduling instances, target environments where you suspect the applications may not need to be running outside business hours. Also, start by analyzing instances within production environments as they will be most likely to have a steady state of usage._
  * **30 minutes:** Collect and analyze data to identify which instances should be set to a schedule. 
    * Leverage the Tools listed above (Resource Tagging Strategy, Cost Explorer, CloudWatch, EC2 Dashboard, and RDS Dashboard) following the step-by-step guidance provided in Appendix A to perform the analysis required to identify which instances best qualify to be set to a schedule.Useful Tips: 
      * The CUR report contains data related to cost and usage, but it does NOT contain data related to instance performance. Use the CUR file to see the number of hours that an instance is running during a given time period.
      * Use CloudWatch, EC2 Dashboard, and RDS Dashboard (see Appendix A) to find and analyze utilization data
      * For organizations in the Crawl Phase, you will likely manually identify instances to schedule using the tools described in [Appendix A](<#appendix>). 
        * Through the use of [CloudWatch Alarms](<https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UsingAlarmActions.html>), you can create alarms that stop, terminate, reboot, or recover an instance, thus automating your processes. Explore this option in a more mature FinOps practice, and after having successfully executed scheduling using the manual process.
  * **30 minutes:** Consult [relevant stakeholders](<https://docs.google.com/document/d/1Q7DpQ60CXx1an1N01ljBu8RWpwb_pGCz/edit#heading=h.3znysh7>) with your findings to decide on instance scheduling. 
    * Present the information gathered from step 1 to the Application Owner and Engineers. Make your recommendations for scheduling based upon your analysis. Discuss each of the datasets and assumptions in detail with the team to gain additional context and understanding of the environment. The discussion should result in information sharing giving all stakeholders the same understanding of the environment and scheduling recommendations. 
      * This step could be executed during a meeting via email or some other point of connection. Below are some _sample topics/questions for use during this step._ What type of environment are you using: Development, Testing, Pre Production, or Production?
      * Ask the application owner and engineers how the environment and resources are being used. Understand in both layperson terms what the application does as well as technically how the application functions.
      * If analyzing Development or Testing environments, understand the use and short, medium, and long term strategy for each.
      * Understand the users’ (internal and external) needs for the application or environment.
      * Understand when (days & times) the application and supporting instances need to be running. (Ask the same questions for Dev, Test, and Prod environments)
    * The outcome of the discussion will either validate, validate with amendments, or invalidate the original recommendation leading to a decision on scheduling the instances. Assuming instance scheduling is desired, the FinOps practitioner can then execute the schedule as decided.
  * **20 minutes:** Schedule instances 
    * Go to[ AWS Instance Scheduler](<https://aws.amazon.com/solutions/implementations/instance-scheduler-on-aws/>) and opt to launch in the AWS console.

### Step 1: Create Stack

  * This will prompt you to login and then take you to Cloud Formation to create a Stack:

### Step 2: Specify stack details

  *     * The Stack name will allow you to identify it later in the DynamoDB tables, CloudFormation, Lambda, and EventBridge.
    * **Parameters** : Below are the prompts in **BOLD** followed by recommended values in _ITALICS_. Recommendations are derived from AWS’ default values and will be appropriate under most scenarios. _(followed by a completed screenshot) For additional information, please see the AWS documentation for the Instance Scheduler Implementation Guide. For descriptions of each parameter, see_[ _Step 1: Launch the instance scheduler hub stack_](<https://docs.aws.amazon.com/solutions/latest/instance-scheduler-on-aws/launch-the-stack-hub-template.html>) _within the Implementation Guide._
      * **Instance Scheduler tag name** : _Schedule_
      * **Services** : _EC2 or RDS or Both (User must select which type of instance/s to schedule)_
      * **Schedule Aurora Cluster** : _No_
      * **Create RDS Instance snapshot** : _No_
      * **Scheduling enabled** : _Yes_
      * **Default timezone** : _Choose a timezone that corresponds to the Availability Zone and Region in which the instance is running_
      * **This account** : _Yes_
      * **Frequency** : _Interval at which the lambda function will be invoked – 5 minutes is recommended_
      * **Memory Size** : Increase the default size to schedule a large number of Amazon EC2 and Amazon RDS instances._Note that an increase in Memory Size will increase the cost of your lambdas_
      * **Namespace Configuration** : _N/A_
      * **Use AWS Organizations** : _No_
      * **Organization Id/Remote Account Ids:** N/A
      * **Regions** :N/A
      * **Options** :

  * **Enable CloudWatch Metrics:**_Yes_

  * **Enable CloudWatch Debug Logs:**_Yes_

  * **Enable SSM Maintenance windows:**_No_

  * **Other parameters:**_Leave as default_

### Step 3: Configure stack options

  * **Tags:**_No additional tags are needed to run the scheduler; however, we recommend following your normal tagging strategy for improved insight into performance and cost and potential future troubleshooting._

  * **Permissions** : _Ensure that CloudFormation has adequate permissions to perform the operations needed. The IAM permissions assigned will correspond to the account launching the schedule, therefore, ensure that the account launching the schedule has adequate permissions._

  * Stack Failure Options: _Roll back all stack resources (if there is a failure, all resources will be rolled back and the stack can be provisioned again)_

  * Leave Advanced options on default settings

### Step 4: Review Test

  * The last step of the process will show you a summary of the selections; review this page in detail to ensure that everything is as you expect.
  * If the summary is in order, scroll to the bottom of the page; check the acknowledgment box as shown in the screenshot below; and click submit.

### Step 5: Create Schedule

  * After creating the stack you will be brought to the Cloud Formation service where you will see the creation of the various resources for your Instance Scheduler. Once the Status for all items shows as “CREATE_COMPLETE,” you will be ready to use your schedule.
  * Go to DynamoDB service in the console – The Cloud Formation stack will have created a DynamoDB table, which can be found by clicking Tables on the left side panel
  * The Config Table will be where you define the rules and schedules for your EC2 or RDS instances. Select the Config Table and select Explore Items on the left side panel.
  * To create a schedule in DynamoDB, modify one of the existing schedules in the configuration table (ConfigTable) or create a new one. Tag your target EC2 instance with the corresponding “schedule name” listed in the Config Table.
  * Click on the desired schedule to see the corresponding period that will be referenced.
  * Click into the period labeled “office-hours” to see the corresponding times and days.
  * You will need to Tag your target EC2 instance with the corresponding schedule listed in the DynamoDB Table. Instructions to do so are below.

### Step 6: Apply Schedule

  * Go to your EC2 or RDS service in the console and select the target instance from the dashboard _(described above in the EC2 section)_
  * In order to apply the schedule to your specific EC2 or RDS instance, you will need to tag it appropriately
  * Go to the Tag section of the page and select _Manage tags_
  * Create Tag: Key = schedule; Value = _(This should be the name of the schedule from the DynamoDB table that you wish to use)_ ; Click Save
  * With the next invocation of the Lamda (e.g. every 5 minutes depending on what was initially selected), the shown instance should appear as “running” if during the on hours or as “stopped” if it is outside of the specified hours.
  * Selecting the Tags tab at the bottom of the page will allow you to see the appropriate tag applied to your selected instance.

## Outcomes and Indicators of Success

### Primary Outcomes of running this playbook

EC2 and RDS will be set to run on the specified schedule; if the instances are running when needed and stopped when not, this will result in cost savings. Users can confirm that the schedule has been successfully implemented by navigating to the EC2 or RDS dashboard; identifying the target instance and observing that the Instance state should show as “stopped” if reviewing outside of the scheduled run time. It is important to check the instance state multiple times throughout the day and across multiple days to ensure that the schedule is functioning as expected.

Additionally, [Cost Explorer](<https://aws.amazon.com/aws-cost-management/aws-cost-explorer/>) in the AWS Console will provide data related to usage hours for the target instance running under the schedule. Here the user can verify that the usage hours correspond to the implemented schedule.

## Acknowledgments

Thanks to the following people for their hard work on this Playbook:

[ ![Matthew Whalen](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Matthew Whalen Rapid Cycle Solutions, LLC ](<https://www.linkedin.com/in/matthew-whalen-0a975438/>)

We’d like to also thank our supporters, Krisztian Banhidy, Jacob Ferlin, and Tania Jain.

## Appendix

**Tools** : _Follow the steps below to use Tools 1-4; these tools will allow you to identify the instances that are candidates for scheduling. Tool 5, which will launch the Instance Scheduler via a CloudFormation stack is described in the “Instructions for running this Playbook” section._

**Resource Tagging Strategy:** Your organization should have a Resource Tagging Strategy which will allow you to identify within which environments your target EC2 and/or RDS instances are provisioned. For example, let’s take a hypothetical environment called [_Business Analytics Application_]; all instances provisioned in this environment will be tagged with the application name [Business Analytics Application]. This will allow you to search for and identify the target EC2 or RDS instances as those that are labeled with the same tag [_Business Analytics Application_].

Tagging will allow you to track which resources are assigned to which application. If your organization does not have a Resource Tagging Strategy, you can identify target VMs by their Instance ID; the location of this information will be highlighted in the CloudWatch, EC2 Dashboard, and RDS Dashboard tools sections. _(This playbook will not provide guidance on Resource Tagging Strategies – See FinOps Foundation Resources:_[_Cloud Cost Allocation Guide_](<https://www.finops.org/wg/cloud-cost-allocation/>) _and_[ _Container Cost Allocation Labels_](<https://www.finops.org/wg/container-cost-allocation/>) _OR visit_[ _Best Practices for Tagging AWS Resources_](<https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html>) _)_

**AWS Cost Explorer:** Cost Explorer will allow you to understand and manage your EC2 and RDS costs and usage over time. You should understand your baseline cost and usage for target instances before and after implementing scheduling.

  * Navigate to Cost Explorer in the AWS Console
  * Adjust your report parameters to include EC2 and RDS under the Service filter. Additional granularity can be obtained by selecting the specific Linked account. Selecting Usage Type from the Dimension drop down will show the Instance Type.

**CloudWatch** : Amazon CloudWatch monitoring and management service provides performance insights for your EC2 and RDS instances.

  * Navigate to CloudWatch in the AWS Console, Select _All Metrics_
  * Select EC2
  * Select Per-Instance Metrics
  * Select the desired instance according to the corresponding InstanceID. The InstanceID can be found in the EC2 or RDS Dashboard, which is described in more detail below in the EC2/RDS Dashboard section.
  * Select CPUUtilization under the Metric name column.
  * Select the time period to analyze utilization – this should be done at the hourly, daily, weekly, and monthly timescales for each analysis.
  * Under Statistic, select Average, Minimum, or Maximum to see the varying utilizations. The X-axis shows the date and the Y-axis shows the % utilization. 0% utilization or a low % utilization indicates that the instance is running, though may not be processing data.
  * Analyze the CPU Utilization Graph under each _Statistic_ as described above looking for minimums of 0% or a low utilization during set intervals, e.g. after 5 PM on weekdays or during the weekend.

NOTE: Low utilization will indicate that the instances are not being used during the selected time period and may be scheduled. _(Note that AWS recommends looking at CPU usage and memory usage for_[ _RightSizing_](<https://docs.aws.amazon.com/whitepapers/latest/cost-optimization-right-sizing/tips-for-right-sizing-your-workloads.html>) _, and identifying instances with a maximum CPU usage and memory usage of less than 40% over a four-week period. These are the instances in which you will want the right size to reduce costs. RightSizing can complement Scheduling and is covered in a separate playbook.)_

**CloudWatch Alarms:** CloudWatch Alarms can be used to alert a user to specific EC2 or RDS performance metrics; additionally alarms can be used to stop, terminate, reboot, or recover EC2 instances. As your FinOps practice matures and you look to automate services, CloudWatch Alarms can be part of your strategy. _(This playbook will not provide guidance on setting up CloudWatch Alarms – Visit_[ _Using Amazon CloudWatch Alarms_](<https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html>) _)_

**EC2 service dashboard**

  * Go to the EC2 service within the AWS Console and select the EC2 Dashboard

  * Select Instances (running)

  * Ensure that “Monitoring” is enabled for your selected EC2 instance. Go to the EC2 Dashboard; select “Instances (running)” as shown above; identify and select the instance for which you will analyze performance; select Actions, Monitor and troubleshoot, manage detailed monitoring; check the box to “Enable”. _(note: additional charges may apply)_

  * Click on the specific instance for which you would like to see performance data.

  * Click on the Tab labeled, _Monitoring_

  * Select your time period (use the same methodology as above from CloudWatch) and direct attention to CPU Utilization. Look for minimums of 0% or low utilization during set intervals, e.g., after 5 PM on weekdays or during the weekend. Low utilization indicates that the instances are not being used during the selected time period and may qualify for scheduling.

**RDS Service Dashboard**

  * Select Dashboard

  * Select DB Instances

  * Select the RDS Instance to view performance metrics

  * Select the Monitoring tab

  * Analyze the various metrics using the same methodology as explained above in the EC2 section.

Last updated: March 16, 2026

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Acknowledgments](<#acknowledgments>)
  * [Appendix](<#appendix>)

##### Related FinOps Capabilities

[ Usage Optimization ](<https://www.finops.org/framework/capabilities/usage-optimization/>)
# AWS DynamoDB Optimization

**Summary:** Amazon DynamoDB provides highly scalable serverless database capabilities, but inefficient capacity configuration can lead to unnecessary cloud spend. FinOps Practitioners and Engineers should analyze DynamoDB capacity usage and apply optimization techniques such as right-sizing provisioned capacity, reviewing CloudWatch metrics, and configuring autoscaling policies. Combine usage telemetry with workload patterns to improve performance visibility while reducing waste in DynamoDB capacity units.

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Acknowledgments](<#acknowledgments>)

[Amazon DynamoDB](<https://aws.amazon.com/dynamodb/>) is a fully managed, serverless, key-value NoSQL database designed to run high-performance applications. This playbook helps with refining AWS DynamoDB capacity units and configuring auto-scaling and monitoring for possible performance issues.

The specific instructions to perform such activity may change over time as AWS rolls out new features, pricing models, user interfaces, etc., and have tried to link out to relevant AWS-provided documentation where possible to help this document stay relevant over time. The insights, instructions, and resources provided herein, in combination with those available directly from AWS, should help individuals have a more complete understanding of this action as it pertains to FinOps and usage optimization.

### Who Should Use this Playbook

This playbook should be used by FinOps practitioners, DevOps, or developers aiming to optimize their DynamoDB capacity usage with cost in mind.

## Prerequisites

The person taking action needs access to the AWS account and needs permission to Describe DynamoDB instances, and also permission to get the relevant Cloudwatch data metrics. You need to contact your AWS account admins or AWS account owners to get the required permissions.

### Who needs to be involved

  * FinOps practitioners and engineers will perform collaborative data collection and assessment so that the potential for reducing capacity units is achieved as a driver.
  * Engineers will implement necessary actions to achieve optimal resource utilization as contributors.

### Information and resources required

#### Information

  * AWS Console: Basic understanding of how AWS Console works and how to access it:[Getting Started with the AWS Management Console | AWS Developer Center](<https://aws.amazon.com/getting-started/hands-on/getting-started-with-aws-management-console/>)
  * [AWS DynamoDB](<https://aws.amazon.com/dynamodb/>) is a fully managed, serverless data store. Basic knowledge about services is required to understand the Capacity units and make changes

  * [AWS Cloudwatch](<https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html>): Collects data points for different services
  * Optional:[Amazon DynamoDB Capacity Modes](<https://catalog.workshops.aws/awscff/en-US/playbooks/databases/dynamodb/1-capacity-modes>)for more information and additional guidance on optimization

#### Tools, Utilities, & Templates

  * [AWS DynamoDB](<https://aws.amazon.com/dynamodb/>) is a fully managed, serverless data store. Basic knowledge about services is required to understand the Capacity units and make changes.
  * [AWS Cloudwatch](<https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html>): Collects data points for different services.

## Instructions for running this Playbook

### Reviewing Cloudwatch Metrics – 10 minutes

Before taking any action, metrics must be reviewed for current and historical usage. After reviewing metrics, we can determine if we can lower provisioned capacity to reduce costs.

Incorporate Burst Capacity and Throttling for Safe Scaling: To minimize risks when scaling down resources, start with testing changes in a development or test environment. Implement burst capacity and throttling settings to observe how the application behaves under different loads. This approach helps identify the optimal settings that maintain performance while reducing costs, ensuring that similar changes can be safely replicated in production environments.

You can review Read and Write usage. If the consumed usage is significantly lower than the provisioned capacity, it is likely that the given db Instance is overprovisioned.

When reviewing Read and Write usage, it is best practice to view a timeframe that captures a complete picture of everyday activity; for some, it is good to view a shorter timeframe to see daily seasonality and, in other cases, a more extended period would provide a more accurate picture of usage activity and seasonality.

Additional resources:

  * [AWS Labs DynamoDB Tools](<https://github.com/awslabs/amazon-dynamodb-tools>)
  * [Amazon DynamoDB](<https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/monitoring-cloudwatch.html#how-to-use-metrics>)

### Modifying the DynamoDB table – 10 minutes

After reviewing the metrics, via settings, engineers can update capacity to lower consumption according to usage. See[Provisioned Capacity Mode](<https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html#ProvisionedThroughput.CapacityUnits.Modifying>) for more information.

It is recommended to deploy auto scaling for both read and write activities. The amount of scale should be configured according to application requirements.[Based on AWS documentation](<https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/AutoScaling.html>), a good target utilization is around 50-70%. It is important to review application behavior when selecting a utilization target.

If the application spikes, a lower utilization target can help with a lower threshold for reactions. If usage ramps up over a given period of time, then setting a higher threshold will allow DynamoDB to ramp up slowly with the increase and not waste provisioned capacity for being idle.

### Monitoring Throttled Requests – 25 minutes

CloudWatch Alarm can alert you about[throttling events](<https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/TroubleshootingThrottling.html>). Throttling occurs when there’s a demand exceeding our maximum capacity. For instance, if your application requires 200 read capacity units during a peak period, but you’ve only allowed 100 capacity units, requests will be processed with a delay. This is because DynamoDB won’t scale beyond the configured maximum capacity units.

**Steps to Configure CloudWatch Alarm for Throttling Events:**

  1. **Navigate to AWS Management Console:** Log in to your AWS Management Console and go to the CloudWatch service.
  2. **Create a New Alarm:** In CloudWatch, click on “Alarms” in the left navigation pane, then click “Create Alarm.”
  3. **Select DynamoDB as the Service:** Choose “DynamoDB” as the service to monitor.
  4. **Define Throttling Metric:** Specify the throttling metric you want to monitor (e.g., ConsumedReadCapacityUnits or ConsumedWriteCapacityUnits). Set the conditions based on your application’s requirements.
  5. **Set Thresholds:** Define the threshold values that trigger the alarm.
  6. **Configure Actions:** Configure actions to be taken when the alarm is triggered. These could include sending notifications via email or SMS or triggering automated remediation processes.
  7. **Review and Confirm:** Review your alarm configuration, ensuring all settings are accurate. Click “Create Alarm” to activate the CloudWatch Alarm. 
     1. By following these steps, you’ll be proactively notified about throttling events, allowing you to take necessary actions to prevent application problems. For more context, see [AWS documentation on creating alerts](<https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Monitoring-metrics-creating-cloudwatch-alarms.html>).

### Reporting and monitoring – 30 minutes

After actions are implemented, it’s important to note that changes in billing or Cost and Usage Reports (CUR) may not be immediately visible. Typically, the initial impacts become apparent within 2 days. During this period, monitoring the billing data and comparing it with previous records is essential.

Reporting is important for communicating success, and also understanding the improvements. Monitoring is important for detecting changes within the resources and detecting any issues.

**Key Points to Consider:**

  * **Delayed Visibility:** Immediate changes in billing or CUR reports might not reflect the optimizations instantly; therefore, patience is necessary to observe the actual impact over a short period.

  * **Monitoring Period:** A monitoring period of at least 2 days is recommended to gauge the initial effects of the implemented actions on costs and resource utilization.

  * **Comparison with Previous Data:** Regularly compare the updated billing and CUR reports with the historical data to assess the effectiveness of the optimizations and cost reductions achieved through the undertaken actions. AWS tool can be run at given intervals to evaluate if different metrics are recommended.

  * **Communication with Stakeholders:** Once the improvements and cost reductions are quantified and substantiated with data, communicate the outcomes to the organization and stakeholders. Providing transparent updates ensures alignment with objectives and demonstrates the success of the optimization efforts.

## Outcomes and indicators of success

### Primary outcomes of running this Playbook

  * **Improved Application Performance:** With optimized provisioned capacity units and no throttling events, the application experiences enhanced responsiveness and efficiency.
  * **Enhanced Resource Utilization:** DynamoDB resources are utilized more effectively, ensuring the provisioned capacity aligns with the actual demand, minimizing wastage.

### Indicators of success

  * **Stable Latency:** An indicator of success could be stable request latency, demonstrating that the application responds consistently and quickly
  * **Stable Throughput:** A consistent and stable throughput, measured in read and write operations per second, indicates that the DynamoDB resources are well-provisioned and can handle the application’s load effectively. See related [AWS documentation](<https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughput.html#ProvisionedThroughput.Troubleshooting>).

### Exceptions and considerations

  * **Monitoring and Adjusting:** Regular monitoring of application performance metrics and DynamoDB usage patterns is essential. Adjustments to capacity units should be made dynamically based on changing demands to prevent under-provisioning or over-provisioning.
  * **Cost Optimization:** While the playbook aims to reduce costs, it’s important to strike a balance between cost savings and ensuring optimal application performance. Constantly analyze cost implications to find the optimal provisioning level.
  * **Automated Scaling:** Consider implementing automated scaling mechanisms where DynamoDB can automatically adjust provisioned capacity units based on demand, reducing the need for manual adjustments and ensuring continuous optimal performance.
  * **Documentation and Training:** Document best practices and provide training to team members involved in capacity planning and monitoring. Ensuring a shared understanding of DynamoDB provisioning principles can prevent misconfigurations and performance issues.

## **Acknowledgments**

We’d like to thank the following people for their hard work on this Playbook:

[ ![Krisztian Banhidy](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Krisztian Banhidy Peak ](<https://www.linkedin.com/in/s4mur4i/>) [ ![Jacob Ferlin](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jacob Ferlin Charter Communications ](<https://www.linkedin.com/in/jacob-ferlin/>)

We’d also like to thank our supporters, Dusty Bowling, Brian Robbins, and Noel Crowley.

Last updated: March 16, 2026

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ Usage Optimization ](<https://www.finops.org/framework/capabilities/usage-optimization/>)
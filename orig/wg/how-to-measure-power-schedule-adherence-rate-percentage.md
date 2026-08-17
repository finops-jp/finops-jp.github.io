# How to Measure Power Schedule Adherence Rate/Percentage

**Summary:** FinOps Practitioners can measure the Power Schedule Adherence Rate by comparing the actual billed hours of a resource against its predefined operational schedule to identify cost optimization opportunities. This process involves querying Cloud Usage Report (CUR) data via tools like Amazon Athena to determine the exact duration a resource was in a “running” state within a given period. Practitioners calculate the percentage by dividing the required scheduled hours by the actual billed hours; a value nearing 100% indicates high efficiency, while lower rates signal potential automation bugs or unscheduled usage that warrants investigation.

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions for All Clouds](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Related Resources](<#related-resources>)
  * [Acknowledgments](<#acknowledgments>)

Power schedule refers to the time for which the cloud resources should be available to serve the users. Power schedule adherence refers to the practice of adhering to predefined schedules, such as automated starting, stopping, or modifying the power state of virtual machines (VMs) or other cloud resources and the [rate of adherence](<https://www.finops.org/wg/finops-kpis/?prod_kpis%5Bquery%5D=power#modal-kpi-9646>) is measurable.

Cloud Service Providers (CSP) offer the ability to control the power state of these resources, allowing users to conserve resources, reduce costs, and optimize performance by dynamically adjusting their availability based on demand of the user. This playbook describes how to measure the power schedule adherence rate in Amazon Web Service (AWS).

### Who Should Use this Playbook

This playbook can be used by Engineering & Operations, Finance or Product/Business.

## Prerequisites

To effectively use this playbook you must have an operational power schedule in place. Below are the tools, people, and information required to successfully execute this playbook.

### Who needs to be involved

This section should outline each Persona responsible for the activities and processes encapsulated by this Playbook. It should also designate whether they are a Driver, Decider, Contributor or Informed. Ideally, every activity captured in this section should be associated with one of the FinOps Phases (Inform, Optimize, Operate).

  * **Contributor:** Engineering team will be responsible for resource tagging for the identification of resources in scope
  * **Decider:** Product Owner/Business team and Cloud/IT operations will be responsible for providing the requirement of the duration of cloud resources/systems to be available.
  * **Driver:** FinOps practitioner to enable the CUR reporting and establish the process of capturing the required details for the computation of the KPI.
  * **Contributor:** IAM team to grant access for setting up CUR, access to CUR data and Athena to run queries.
  * **Informed:** CIO and/or any other leadership with financial accountability for paying the AWS invoice.

### Information and resources required

#### Information

  * AWS CUR 
    * You must have access to the AWS CUR data:[ AWS CUR](<https://docs.aws.amazon.com/cur/latest/userguide/cur-create.html>) should be enabled which will be one of the primary data sources for the computation.
    * You must also need to be able to understand CUR data
  * AWS Athena:
  * Knowledge of [AWS Athena](<https://docs.aws.amazon.com/athena/latest/ug/what-is.html>) and how to use it
  * Tag(s) is(are) implemented to identify resources in scope of Power Schedule Adherence.

#### Tools, Utilities & Templates

Links to tools, utilities and templates to use during the playbook.

  * [AWS Athena](<https://docs.aws.amazon.com/athena/latest/ug/what-is.html>) – Amazon Athena is an interactive query service

**_Note:_** This playbook can be used for computing the KPI for the whole organization’s cloud resources, for a business unit, for a team, for an application or system, etc depending on your requirement. This can be used for all the resources which can be stopped/started and not applicable to resources which cannot be stopped/started after creation. You will need to define the scope for which you wish to calculate this KPI (whole organization, or a fraction) and decide for which resources and services before proceeding with the below steps.

## Instructions for running this Playbook

### **Identify and capture the power schedule for cloud systems/resources**

  * Connect with IT/Cloud operations or engineering teams who are managing these resources.
  * Gather the power schedule of all the cloud systems/resources.
  * Ensure the resource usage is categorized into: 
    * Working hours/Business hours
    * Non-working hours/non-business hours
    * Weekends (Sat & Sun)
    * Weekdays (Mon-Fri)
    * Custom Schedule

### Identify how many hours the resource is billed

To identify the duration for which a resource is billed, query the CUR data in Athena. Use the below query:
[code] 
    SELECT
    sum(date_diff('hour', line_item_usage_start_date, line_item_usage_end_date,))
    FROM <cur_database>.<cur_table>
    WHERE
    line_item_product_code = '<product_code>'
    AND resource_tags_user_<customer_tag_key>='<customer_tag_value>'
    AND product_product_family = '<product_family>'
    AND line_item_usage_start_date >= timestamp '<start_date>'
    AND line_item_usage_end_date >= timestamp '<end_date>';

[/code]

_Note: the query can be changed based on how to identify the resource(s) in an organization._

Replace _< cur_database> _with the CUR Database, _< cur_table> _with CUR table name, _< product_code>_ with the value of line_item_product_code of the resource for which this is being calculated like ‘AmazonRDS’, _< customer_tag_key> _with the key of the tag used for identification of resource, _< customer_tag_value>_ with the value of the key, _< product_family> _with the family of product (e.g. Database Instance, Compute Instance, etc), _< start_date>_ with the start date of period of billing, _< end_date>_ with the end date of the period of billing. The <start_date> and <end_date> should be of the format YYYY-MM-DD.

Additional WHERE clause columns could be – product_region, line_item_usage_account_id, etc.

The above query will give you the number of hours for which the resource was billed in a period.

### Calculate the hours for which a resource must be running within a period

Taking an example, an RDS instance is required to be stopped over the weekends from Saturday 12 AM UTC to Monday 12 AM UTC.

The total number of hours it needs to be stopped is 48 hrs in a week as per the power schedule.

Consider the month of August 2023: there are 4 weekends so total number of hours the RDS instance is supposed to be stopped = 4 x 48 = 192 hours.

Total number of hours (in August) = 31(number of days) X 24(number of hours in a day) = 744 hours.

Total number of hours the RDS is required to run = 744 – 192 = 552 hours.

### Calculate the KPI for each resource in scope

#### Formula

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201446%2096'%3E%3C/svg%3E)

OR

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201446%2096'%3E%3C/svg%3E)

Consider the example in step 3, assuming the RDS instance was billed for 600 hours in August 2023, the calculation will look like:

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201446%2096'%3E%3C/svg%3E)

OR

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201446%2096'%3E%3C/svg%3E)

## Outcomes and Indicators of Success

After the playbook is executed, the user of this playbook should discuss the outcome with the engineering/IT operations to provide visibility of any optimization opportunity and action items, with business/product teams so they can derive the cost efficiency of their applications/workloads and with finance to estimate waste spend reduction once optimization is done.

### Primary Outcomes of running this playbook

  * Computation of KPI: As an outcome of this playbook, the user will gain insight into the effectiveness of the power schedule adherence.

### Indicators of Success

  * KPI value: The value of this KPI should tend towards 1(if using rate) or 100% (if using percentage). A higher percentage means better adherence to schedule.

### Next Steps

  * FinOps practitioner must capture the trend of Power Schedule Adherence over a period of time and discuss it with the engineering and business teams: In this discussion you will want to cover: 
    * Any deviation from the usual trend of the power schedule adherence rate
    * Root cause of that deviation
    * Action items and responsible team/person to mitigate the root cause (It could be due to a critical release that the teams were working outside of scheduled hours and required the systems to be running, or it could be a bug in the automation of the power schedule.)
  * Once the root cause is established, action items can be defined depending on the scenario to either fix the issue or do nothing in case of a business need.

### Exceptions and Considerations

  * This playbook is not applicable for resources under auto-scaling.
  * Impacts to Reserved Instance and Savings Plan participation should be considered before implementing a power adherence schedule as it may impact rate optimization results.

## Related Resources

  * [EC2 & RDS Instance Scheduling Playbook](<https://www.finops.org/wg/aws-ec2-rds-instance-scheduling/>)

### Related FinOps Resources and Framework Capabilities

  * [Workload Optimization](<https://www.finops.org/framework/capabilities/workload-optimization/>): this capability in the FinOps framework for this KPI to ensure the resources are running only when they are needed
  * [Allocation](<https://www.finops.org/framework/capabilities/allocation/>): It is important that the cost allocation tags are associated with the resources in scope for adherence to power schedule. Once the resource is tagged, it can be easily identified in CUR

## Acknowledgements

We’d like to thank the following people for their work on this Playbook:

[ ![Abhishek Jain](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Abhishek Jain Tenerity India ](<https://www.linkedin.com/in/abhishekj150492/>)

We’d also like to thank our supporters, Laura Mills, David Lambert, Taylor Houck , Brian D’Altilio , and Guido L Fiamengo.

Last updated: March 17, 2026

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions for All Clouds](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Related Resources](<#related-resources>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ Usage Optimization ](<https://www.finops.org/framework/capabilities/usage-optimization/>)
# Anomaly Management

[Framework](<https://www.finops.org/framework/>) / [Domains](<https://www.finops.org/framework/domains/>) / [Understand Usage & Cost](<https://www.finops.org/framework/domains/understand-usage-cost/>) / Anomaly Management 

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success-kpis>)
  * [Inputs & Outputs](<#inputs-outputs>)

**Detect, identify, alert and manage unexpected or unforecasted technology cost and usage irregularities in a timely manner to lower risk and ensure cost-effective operations.**

**Detect anomalies**

  * Define the tools we use to detect anomalous spending
  * Identify and document how alerts are created and logged
  * Identify and document how responsible parties are identified
  * Set mechanisms to alert appropriate parties timely using appropriate channels

**Enable anomaly detection**

  * Define information required for effectiveness, send back to Data Ingestion
  * Create policies with respect to anomaly management

**Manage anomalies**

  * Analyze reported anomalies
  * Categorize, manage false positives, investigate
  * Document anomalies and their resolutions

## Definition

Anomaly Management gives a FinOps team the ability to detect, identify, clarify, alert on, and manage unexpected cost events in a timely manner, in order to minimize impact to the business.

Managing anomalies involves the use of tools or reports to identify unexpected spending, the distribution of anomaly alerts, and information to investigate and resolve anomalous usage or cost.

In the context of FinOps, anomalies are levels of spending that are different (usually higher) than normal historical or expected spend.

Anomaly detection identifies data points, events, and/or observations that deviate from a dataset’s normal behavior. Detection tools should examine not only aggregate usage but usage within subcategories. Effective Allocation metadata are critical to effective anomaly detection, and to be able to determine who can best evaluate and resolve detected anomalies.

Having Anomaly Detection tools that provide this granularity of cost by service, by account/project, by cost allocation tag, etc. is critical to be able to detect the specific causes of the anomalous spending.

Standard procedures for anomaly detection and analysis are critical to allow the FinOps team to react quickly when anomalies occur. Use of automated, machine learning–based anomaly detection is typical. These tools are generally offered by data and technology providers and third party platforms.

As with many FinOps capabilities, anomaly detection is performed by comparing current usage to past usage. As such, sudden increases in new usage or spending can trigger anomaly alerts even when they are anticipated. A new training environment service is being launched and creates a sudden spike in usage in an account which has never seen significant cost before. In these cases, it should be expected that teams be prepared to see anomaly alerts, and that they effectively manage and document them when they occur to avoid work by other personas that might otherwise be triggered.

Managing and resolving Anomalies typically involves some level of investigation and then either a change to adjust the environment, or to adjust the expectation of the cost of the affected scope. Another resolution may be to simply acknowledge the anomaly and document the reasons it was detected.

## Maturity Assessment

####  Crawl 

  * Understanding that anomalous spending might occur among the FinOps team and organization generally
  * Manually checking for anomalous spending using reporting
  * Reacting to anomaly activity more than a week after it occurs (post receipt of billing data)
  * Using budget alerts vs an anomaly detection service
  * Limited granular detection (e.g. Account/Project level, not using tagging data or logical groupings) minimizing the context of insights from anomalous spending identified
  * Anomaly alerts sent to a central team, or require manual action to look
  * Unexpected spending is manually investigated by central team and routed when necessary to a suspected owner for resolution

####  Walk 

  * Some form of automated detection or reporting or tooling (usually provided by the technology service provider, third party, or custom tooling)
  * Knowledge and use of anomaly detection tooling in most or all departments and teams
  * Context-relevant thresholds are detected (percentage of spend change, single item spend amount ceilings, forecast breach alerts, etc.)
  * Cost allocation metadata provides context to segment anomalies, allowing for easier analysis
  * Unexpected spending automatically routed to responsible teams
  * KPIs associated with Anomaly Management set and in use by key teams in the organization
  * Ability to document outcomes and capture some details of the outcomes of anomalies which alert

####  Run 

  * Mature Anomaly detection tooling in use and embedded in tooling across the organization
  * Automation created to detect, suggest resolution, or resolve anomalous spending alerts, with appropriate severity in appropriate environments
  * Anomaly alerts of an appropriate scale or urgency can integrate to event management or ticketing systems and processes
  * Granular context-related anomaly alert thresholds linked directly to service components
  * Alert thresholds iteratively updated in line with service lifecycles
  * Alerting and thresholds set differently for different personas and levels of responsibility (e.g. leadership, FinOps team, engineering, finance may see alerts from anomalous spending differently based on their own thresholds for action or information)
  * Results and resolution of each anomaly alert is captured
  * Analysis results in full root cause analysis post-mortem where appropriate
  * Analysis of resolution of past anomalies improves alerting on future anomalies

## Functional Activities

####  ![](https://www.finops.org/wp-content/uploads/2024/03/FinOps-Practitioner.svg) FinOps Practitioner 

**As someone in the FinOps team role, I will…**

  * Establish requirements for anomaly detection tool selection that is appropriate for cost monitoring and capable of defining, refining, detecting and alerting unexpected spending events (cost anomalies)
  * Establish requirements for Anomaly automation and documentation tooling or processes and integration to appropriate ticketing or process management systems in place
  * Document and communicate anomaly detection mechanism and thresholds to all stakeholders
  * Work with stakeholder teams to establish anomaly detection thresholds and reporting/notifications frequency
  * Ensure that anomaly detection is tied appropriately to cost allocation metadata, providing feedback to the Allocation capability when additional metadata are required
  * Ensure anomaly detection tooling has access to raw spending data at appropriate real-time granularity and frequency
  * Generate reports that surface all and/or alerted anomalous spending

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Engineering.svg) Engineering 

**As someone in an Engineering role, I will…**

  * Ensure my team checks for or receives anomalous spending alerts
  * Ensure that my team is aware of the correct processes and actions to respond to and address a cost anomaly
  * Ensure the appropriate metadata are applied to resources within my control to allow anomaly detection to occur
  * Provide feedback to FinOps on the correctness of established thresholds and detection coverage
  * Investigate and determine the causes and scope of detected anomalies and document false positives or plans of action
  * Resolve issues causing anomalous spending and document the resolution of anomalies
  * Proactively alert other Personas as to large unexpected anomalous spending that is planned and likely to create Anomaly alerts that would be troubling (e.g. launch of new environment)

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Product.svg) Product 

**As someone in a Product role, I will…**

  * Monitor and investigate detected and reported anomalies for systems within my areas of responsibility
  * Assist Investigating and resolving reported anomalies and document resolutions in concert with engineering teams in my areas of responsibility

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Finance.svg) Finance 

**As someone in a Finance role, I will…**

  * Help establish anomalous percentage thresholds that trigger financial review of budget to actual spend
  * Provide contingency funding sources within forecasts for costs to accommodate anomalous spending trends that align with established thresholds

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Leadership.svg) Leadership 

**As someone in a Leadership role, I will…**

  * Establish anomalous percentage thresholds that trigger action or attention
  * Provide guidelines and support policies related to OKRs and KPIs and mandate anomaly management activities by engineering and product teams

## Measures of Success & KPIs

  * The count of anomalies within a period of time (week, month) in aggregate or for meaningful subset of usage
  * Consistent identification of anomalous spending vs. missed vs. false positives
  * Amount of cost associated with anomaly alerts within a period of time (week, month); represents total anomaly detection scope
  * Mean time to detect anomalies over a period of time (week, month); documents efficiency and effectiveness of tools used
  * Mean time to notify owner of anomalies over a period of time (week, month); documents the time it takes from the anomaly detection to the appropriate owner acknowledging it
  * Duration of unresolved anomalies over a period of time (week, month); the velocity of anomaly resolution
  * Time to investigate and address an identified anomaly; time of investigation of a true anomaly is real time wasted cost in many cases
  * % of teams educated on how variable spending can lead to anomalous spending, definition of what is anomalous, who is accountable, how to respond
  * The count of actioned anomalies and spending amount avoided (to nearest following billing period); the amount of cost saved through resolution of anomalies that would have gone unresolved until the bill was received
  * The count of unactionable anomalies and categorized but justification to ignore (i.e. new service, performance testing, customer peak, false alert) by category
  * Tracking number of alerts suspended (ignored) to identify teams who might not be adhering to protocol or policy
  * Percentage of anomalies managed using automation of various categories; this documents the effectiveness of automation put in place

## KPIs

#### Anomaly Detection Rate

Measures the frequency and cost impact of anomalies in AI spending, such as sudden cost spikes or unexpected usage patterns. This KPI enables proactive identification and mitigation of runaway costs. 

Read more

#### Total Unpredicted Variance of Spend

Measures the unpredicted variance of cost associated with CSP Cloud usage recorded over a given period of time.

Read more

#### Anomaly-Detected Cost Avoidance

Measures amount of cost avoidance as a result of identifying and correcting an anomaly.

Read more

## Inputs & Outputs

  * Cost and usage data provided via Data Ingestion capability
  * Anomaly detection tooling (data provider, tooling vendor, homegrown tool)
  * Cost allocation metadata established and aligned to the organization’s reporting needs
  * Allocation strategy assigning usage to specific teams responsible for its oversight
  * Anomalous spend notification to stakeholder teams
  * Stakeholder real-time visibility into cost and usage reporting data
  * Policy & Governance associated with expectations for managing anomalies
  * Documentation of detection, analysis, and resolution processes and expectation of personas
  * Reporting & Analysis will be required to investigate and analyze anomalous spending
  * Workload optimization may be required to remediate usage-based causes of anomalous spending or to turn off resources which are not being used

[View former Managing Anomalies page](<https://www.finops.org/framework/previous-capabilities/manage-anomalies/>)

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success-kpis>)
  * [Inputs & Outputs](<#inputs-outputs>)

##### Related Assets

[ ![](https://www.finops.org/wp-content/uploads/2024/04/FinOps-Assets-Paper-Featured-v1.png) Managing Cloud Cost Anomalies ](<https://www.finops.org/wg/managing-cloud-cost-anomalies/>) [ ![](https://www.finops.org/wp-content/uploads/2023/07/UtilityResource-META-1200x628px.jpg) Managing Anomalies Story Collection ](<https://www.finops.org/wg/managing-anomalies-story-library/>) [ ![](https://www.finops.org/wp-content/uploads/2022/12/podcast.png) FinOpsPod 22: Strategies for Troubleshooting Cost Anomalies & Trends ](<https://www.finops.org/assets/finopspod-episode-22-finops-x-session-preview-amy-ashby-strategies-for-troubleshooting-cost-anomalies-trends/>) [ ![](https://www.finops.org/wp-content/uploads/2022/10/podcast.svg) FinOpsPod 29: Cloud Cost Anomalies: How to Detect and Manage Them ](<https://www.finops.org/assets/finopspod-episode-29-cloud-cost-anomalies-how-to-detect-manage/>) [ ![](https://www.finops.org/wp-content/uploads/2023/05/finops-userstory-featuredimage.png) Anomaly Detection at Multi-Million Dollar Cloud Spend Scale ](<https://www.finops.org/assets/anomaly-detection-at-multi-million-dollar-cloud-spend-scale/>) [ ![](https://www.finops.org/wp-content/uploads/2024/08/Palo-Alto-Breakout-size-v1-1.png) How Anomaly Detection and Unit Economics Fuel Growth at Palo Alto Networks ](<https://www.finops.org/assets/how-anomaly-detection-and-unit-economics-fuel-growth-at-palo-alto-networks/>) [ ![](https://www.finops.org/wp-content/uploads/2023/09/underarmour-x23.png) Strategies for Troubleshooting Cost Anomalies & Trends (Under Armour) ](<https://www.finops.org/assets/strategies-for-troubleshooting-cost-anomalies-trends-under-armour/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) Tackling Anomalous, Runaway Data Analysis Costs ](<https://www.finops.org/assets/tackling-anomalous-runaway-data-analysis-costs/>) [ ![](https://www.finops.org/wp-content/uploads/2022/10/playbook.svg) Measuring Anomaly-Detected Cost Avoidance Playbook ](<https://www.finops.org/wg/measuring-anomaly-detected-cost-avoidance-playbook/>)
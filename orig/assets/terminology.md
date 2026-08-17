# FinOps Terminology

A glossary of FinOps concepts and related terminology used by practitioners all over the world. This resource includes finance and business terminology and definitions to help readers better understand terms used across the FinOps Foundation website, educational and training content.

Terms are added to this page either by Working Group output or when assets are added. Use the Table of Contents to navigate to a specific set of terms.

With the introduction of the [FOCUS Project](<https://focus.finops.org/>), some terms commonly used in FinOps have taken on more specific definitions outlined in the FOCUS spec. The [FOCUS Glossary](<https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/specification/glossary.md>) contains the terminology related to FOCUS and its datasets, and that Glossary should be relied upon for the specific definition used in FOCUS documentation if there are discrepancies with more general definitions found here.

## Anomaly Management

## Anomaly Management

Anomaly Management is the ability to detect, identify, clarify, alert and manage unexpected or unforecasted cloud cost events in a timely manner, in order to minimize detrimental impact to the business, cost or otherwise.

## Cloud Cost Anomalies

Anomalies in the context of FinOps are unpredicted variations resulting in increases in cloud spending that are larger than expected given historical spending patterns.

## Unpredicted variation

It’s important to note that we are not simply talking about the “outliers” (one method of approaching anomalies), but we are actually looking to find what are the “expected” or “predicted” costs for a period, and then measure the actual costs accumulated in that period.

The level of variation which is considered an anomaly can greatly differ based on the size and type of company, the scope of how much they use cloud, and other variables of their particular operation.

## Cost-driven anomalies

Cost anomaly detection focuses on identifying deviations from an expected rate of spend. Organizations in the crawl or walk phase of anomaly detection typically focus on cost increases only. Companies just launching an anomaly detection system and processes will need to fine tune the settings and prove out their alerting/notification process. It typically takes time to improve the signal-to-noise ratio to an acceptable level of false positives.

While organizations primarily prioritize cost increases, mature (i.e. Run phase) FinOps organizations should investigate decreases as well. A cost anomaly can be an indicator of an underlying technology or business issue. For example, a misconfigured autoscaling system may cause a cost increase, or decrease if it fails to upscale. Typically, there are other systems in place to identify such issues so most organizations will focus strictly on cost increases.

## Historical patterns

Most anomaly detection systems utilize historical data as a basis for detecting anomalies. The systems may range in sophistication from a simple percent increase in spend to machine learning based models that understand (historical) spend patterns but are still based on learnings from historical data and lack future awareness. The downside to not being future aware is more false positives.

More sophisticated systems are future aware and include forecast (budget) and event data in their models. These systems rely on a combination of historical data and future data to determine anomalies with greater accuracy than historical data alone. Forecast data is often aggregated at a relatively high level that makes it unusable without understanding the historical patterns.

More specifically, forecasts are typically by month and the department level by resource type. Knowing that you expect compute resource costs to increase 25% for a given month over the prior year is helpful, but not sufficient as spend patterns often have variability from day to day that can be seen in the historical data, but are lost in a monthly bucket.

## **Severity**

Taking the discussion on variation further, once you have established a minimum threshold, you still need to identify a low-impact anomaly from a high-impact one. Usually it’s best if the business users have some control over what you call a low-medium-high-critical anomaly and also being able to set alerts only on the high/critical ones and leave the low-medium for offline analysis.

Also note that in a day, an anomaly may start off with low severity but as it accumulates more costs, it may escalate to a high or critical level.

## **Timescale**

This is where the Anomaly Detection process separates itself from budgets.

Budgets are usually created and monitored on a monthly, quarterly or annual basis. This does not leave any room to find inter-day variation. We have seen the Anomaly Detection working best on a timescale of a day or consecutive days when an anomaly persists.

## Cloud Cost Management

## Allocation Metadata

The information used to categorize costs, and is encapsulated within CSP constructs like resource tags (AWS; Azure) or labels (GCP). In this context, metadata can be differentiated between “Resource Metadata” where an individual resource is tagged or labelled or “Hierarchy Metadata” where categorization is applied to some other construct that provides grouping of resources. Note: the FOCUS project has chosen the [column name “Tag”](<https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/specification/columns/tags.md>) to represent resource metadata coming from any cloud or other producer of FOCUS data. Examples of allocation metadata include:

  * GCP “labels” and “billing accounts”;
  * AWS “resource tags”, “Member Accounts” and “Organizations”;
  * Azure “Subscriptions”, “Resource Groups” and “resource tags”

## Amortized costs

Some cloud resources and reservations come with an upfront fee. The amortized cost of a resource takes this initial payment into account and distributes it out based on usage, attributing the prorated cost for each hour of billing.

## Cost & Usage Data

The datasource to which CSPs publish and from which native cost data can be derived when billable cloud services are consumed. Examples of datasources include:

  * AWS CUR (Cost & Usage Report)
  * Azure Consumption API; Azure Cost Management Exports
  * GCP BigQuery Cloud Billing Data Tables; GCP Cloud Billing Report

## Budgeting

An estimate of revenues and expenses companies plan to spend within a time period. This allows for companies to continually track where they are financially.

## Budget vs Actual (BvA)

A FinOps team or practitioner can provide reporting on BvA vs forecast to establish trends and compare against variance KPIs.

This exercise is used to measure accuracy of a forecasting model.

## Chargeback

Chargeback is an allocation strategy which creates reporting that charges actual consumption spend of IT services to P&L budgets and accounts in the Financial system of the organization. Chargeback reports may be referred to internally as “invoices” and they are typically mutually exclusive for the organization as a whole. Chargeback is a method to hold business units directly accountable for IT spend and requires IT Finance Integration (to allocate spend to the appropriate cost centers and budgets).

Chargeback reporting will typically match to the organization’s financial budgeting and accounting taxonomy. The use of Chargeback can have implications with respect to accounting and finance process controls, and often requires clear communication with finance groups to achieve and manage.

## Cost allocation

The process of splitting up a cloud bill and [associating the costs to each cost center](</framework/capabilities/cost-allocation/>). It’s important to have teams understand how costs are being allocated, and to have a centralized, controlled, and consistent cost allocation strategy. See also, _[Shared Costs](</framework/capabilities/manage-shared-cloud-cost/>)_.

## Cost Avoidance

Avoidance is an action taken to avoid spending in the future, such as upgrading aging software to avoid extended support fees. If the action is taken on Feb 1st, for example, but costs of $100 / day would not have gone into affect until Mar 1st, Avoidance of $100 / day begins on March 1st. Avoidance is valuable and important (and potentially even preferable to run-rate reduction), but does not help us achieve lower levels of expense compared to where we started.

## Cost estimation

The process of quantifying every resource that will be required to complete a project also used to help create budgets.

## Credit

Occasionally, a business will enter circumstances where they are eligible for a credit from a vendor. This could be due to an intentional decision (such as AWS MAP credits) or an unintentional situation (such as mistaken billing or faulty software causing increased consumption). Typically CSPs have formal SLA violation processes or credit onboarding procedures necessary to gain credits.

## Forecasting, also Forecast

Forecasting is the practice of predicting future spending, usually based on a combination of historical spending and an evaluation of future plans, understanding how future cloud infrastructure and application lifecycle changes may impact current budgets and influence budget planning and future cloud investment decisions. This capability also involves collaboration between stakeholder teams like Finance, Engineering, and Executives to build agreed upon forecast models and KPIs from which to establish budgets that align with business goals.

## Forecast Risk Prevention

Our business endeavors to limit expense risk by shifting left in our design phase and reviewing architectural patterns prior to their release. This is done most commonly during the budgeting and business case review process. When large scale increases to budget are projected, finOps often provides feedback to architects in the design phase. When this results in a substantial decrease from the original budgeted amount, this is documented as forecast risk remediation.

## Metrics

A method or formula for measuring something with the purpose of obtaining results.

## Negotiated Discount

A contractual agreement where a customer commits to specific spend or usage goals over a specified period of time (term) in exchange for discounted rates across a specified list of SKUs. Unlike commitment discounts, negotiated discounts are typically customized to customer’s accounts, can be utilized at varying frequencies, and may have overlapping cost impact with commitment discounts. Negotiated discounts, or even the existence of a negotiated discount, may be contractually protected under non-disclosure, so discussion of negotiated discounts should always be carefully considered before any information is disclosed in public. Note: the FOCUS Project has defined [the term “Negotiated Discount”](<https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/specification/glossary.md>) in this same way for purposes of representing discounts in FOCUS datasets.

## Re-Allocation

Often the first step in getting the right value out of the cloud and SaaS is correcting allocation. When costs are assigned to the correct owner, that owner is incentivized to take action. BUs do not document every shift in chargeback mix between alliances, but occasionally large scale shifts affect our perception of risk, and we document that reduction accordingly for reference. Note that unexpected increases are also documented here.

## Resources

A generic term used to describe any service or instance of a service purchased from a cloud service provider.

## **Run Rate Reduction**

Run rate reduction is the amount reduced due to a direct action taken (either to right size, decommission, turn off, or purchase discounts, for example). This typically takes place over a specific period of time (for example, a change from $100 / day to $40 / day).

## Savings

Savings is a potentially ambiguous term. When the term savings is used, it should be in reference to the amount of spend lower than the budgeted amount by finance.

## Shared Costs

Shared costs can refer to charges which are utilized or attributed to multiple owners, applications, or products.

## Showback

Showback is an allocation strategy that creates reporting for the actual consumption of IT services which is provided to business units, or any subset of the overall organization, to any Persona stakeholder. Showback reporting is not typically entered into financial systems to charge against P&L of specific business units (key differentiator from Chargeback), but rather is used for awareness and visibility across the organization or in specific business areas. Showback reporting is not typically mutually exclusive at an organizational level. Showback reporting can be done in any subset of responsibility, at the P&L level, or a subset of that (application, business owner, etc.), or in cross-cutting views (like all Production systems, or all storage costs, etc.).

## Unblended rates

Some resources are charged in decreasing rates the more you use them. This means you’re billed different rates for resources as you use more, or for longer periods during the month. By examining your bill, you can see that some resource costs are larger than others, even for the same type of resource or an identical resource. When the rates are presented this way, they’re called unblended.

## Waste

Any usage or cost of resources which provide no value to an organization.

## Workload

May also be a generic name for an application or software system running on a computing or other platform. In a traditional website, there might be a web server, an application server and a database server, each running on an individual hardware-based server, or virtual machine in a data center. Each of those three elements of the application would be a workload running on that virtual server. If that website were moved to AWS, there might be an EC2 instance for each of the three servers, sized appropriately to the amount of computing, memory, data storage, and network required for the web server, application server and database server.

Technically speaking, the amount of work performed or capable of being performed usually within a specific period. In forecasting, a workload can be a type of unit measurement such as “ 1 workload = 8GB RAM + 50GB Storage or a similar configuration.” it could also be “1 workload cost = Rate*5 hours + Cost of 3 EC2 t3nano + cost of 100GB storage.” Whatever a workload for the organization is, ensure it is defined.

## Business Terminology

## Cloud Center of Excellence (CCOE)

Many companies refer to their FinOps team as a Cloud Center of Excellence or a Cloud Business Office.

## Cloud Service Provider (CSP)

A provider of public cloud services. Examples include Amazon Web Services (AWS), Microsoft Azure, or Google Cloud Platform (GCP)

## Commitment Discounts

## Commitment Discount

A billing discount model that offers reduced rates on preselected SKUs in exchange for an obligated usage or spend amount over a predefined term. Commitment discount purchases, made upfront and/or with recurring monthly payments are amortized evenly across predefined charge periods (e.g. hourly), and unused amounts cannot be carried over to subsequent charge periods. Commitment discounts are publicly available to customers without special contract arrangements. They have specific terms, specific services they can cover, and their availability and use is managed differently by different providers. Managing the use of Commitment discounts is performed in the Rate Optimization capability of the FinOps Framework.

Note: the FOCUS Project has defined [the term “Commitment Discount”](<https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/specification/glossary.md>) in a similar way for use in FOCUS datasets.

Examples of commitment discounts include:

  * GCP “Committed Use Discount” (CUD) for Compute Engine and “Reservations” for BigQuery
  * AWS “Reserved Instance” (RI) for EC2 and “Savings Plans” (SP) for Compute, EC2 instances, and SageMaker
  * Azure “Reserved instances” (RI) for VMs

## Amortization

Retiring a payment of capital gradually over time on a schedule which reflects the benefits the capital provides in each period. An upfront portion of a commitment discount payment can be amortized over the useful lifetime (1 or 3 years) of the Commitment Discount product itself.

## AURI, PURI, NURI

All Upfront Reserved Instance, Partial Upfront Reserved Instance and No Upfront Reserved Instance. Some people use these acronyms when referring to reserved instances, in case you hear them.

## Commitment Scope

Commitment discounts may vary in their region and zonal scope. Practitioners should consider the granularity of commitment to a particular region or zone that meets their organization’s needs.

## Commitment Break Even Point

The estimated length of time to pay off the entire cost of a commitment discount (including upfront and ongoing charges) from the savings provided by that commitment. The savings generated by a commitment discount is derived from the discount and the utilization rate. Once the break even point is reached, the commitment discount has been fully paid off and will never lose money overall, regardless of utilization after this point.

## Convertible / Standard

AWS terms referring to the ability to convert RIs for some resources to different specifications. Standard RIs cannot be converted or changed for their entire term. Convertibility reduces the discount offered by AWS. Azure and GCP also allow some flexibility in specific ways to their reservations using slightly different language

## Capacity Reservation

Capacity Reservations allow you to secure compute capacity for resource instances in a particular region or zone. By utilizing Capacity Reservations, you can proactively address the potential challenge of acquiring capacity in situations where there might be capacity limitations. If you have specific capacity demands and operate mission-critical workloads that necessitate reliable and predictable capacity levels, it is advised that you create a Capacity Reservation. This ensures uninterrupted access to CSP instances, precisely when you require them. Capacity Reservations are available through on-demand Capacity Reservations (ODCRs) or through specific Commitment Discount types available from your CSP.

## Commitment Length

A CSP commitment length refers to the duration for which a customer commits to using a Commitment Discount for cloud services. When purchasing a Commitment Discount, customers typically have the option to select a commitment length of 1 or 3 years. The commitment length can vary depending on the CSP and their offerings.

## Commitment Renewal Mechanism

The method in which you renew an existing Commitment Discount once the commitment expires. Depending on the CSP, the renewal may have to be manually completed, it may be automated, or it may be scheduled in advance

## Commitment Utilization

The percentage of active commitments utilized during the specified period.

## Commitment Volume Discounts

An additional discount that can be applied when an organization has a significant portfolio of commitment discounts with a CSP. Typically, this happens when the organization reaches a threshold of spend for commitment discounts in a certain region with a CSP.

## Coverage

The percentage of eligible workloads that were covered by active commitments during the specified period.

## Discount Scope

The billing organizational context in which the Commitment Discount is applied, such as billing account/project (GCP), or organization/account (AWS).

## Instance Size Flexibility

Certain Commitment Discounts can apply automatically to different sizes of compute resources within the same family of compute resource. This is often limited to certain types of instances or operating systems. Size Flexibility typically does not require action on the part of the customer to determine how discounts are applied. Typically when size flexibility is available discounts are assigned to the smallest resources eligible for coverage.

## Payment Option

Commitment Discounts can be paid in various predefined increments. Each option has different cash flow impacts and potentially different savings percentages.

## Queueing Purchase

Plan the purchase of a Commitment Discount ahead of time, specifying the time and type of resource which the commitment should be made for. This allows for new commitments or renewals of existing commitments that are expected to expire. Note this is not available for all Commitment Discounts.

## Tenancy

Describes if the hardware owned by the CSP that your cloud instances are running on is only able to be used by a single organization (dedicated) or if it could be used by multiple organizations (shared).

## Vacancy

The amount of a commitment discount that went unused for a given time frame.

## Zone Flexibility

An availability zone (AZ) is one or more discrete data centers with redundant power, networking, and connectivity in a region. AZs give customers the ability to operate production applications and databases that are highly available, fault tolerant, and scalable than would be possible from a single data center. Zone flexibility offers the ability for a Commitment Discount to apply discount coverage across zones where matching usage is consumed.  

## Public Cloud Terminology

## Account (AWS)

AWS resources are housed within an Account. Accounts can be Management (previously Payer) accounts which contain billing data, or Member (previously Linked) Accounts which do not. AWS Organizations and other services can be used to manage Accounts within AWS. Many AWS services can span Account boundaries.

Note: the FOCUS Project has defined the terms [“Billing Account ID (and Name)”](<https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/supporting_content/columns/billingaccountid.md>) to describe not only the AWS Management Account but also other cloud or SaaS provider billing level concepts. The term [“Sub Account ID (and Name)”](<https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/supporting_content/columns/subaccountid.md>) defines the Member Account and other provider constructs.

## Blended Rate

AWS provides Blended Rate information on its invoice showing the effective rate for a group of resources with the same attributes where some of the resources are receiving a discount from reservations and some are not. This can help to eliminate the effects of reservations applying randomly to resources in multiple linked accounts, by providing a consistent rate for specific resources that would have been eligible to be covered by the reservation or savings plan.

## Console, Dashboard, Portal

Accessing cloud resources is done through types of online site provided by each CSP. Azure calls theirs the Azure Portal (Subscription Portal, Enrollment Portal, etc.), AWS calls theirs the AWS Console, and GCP calls theirs the GCP Dashboard

## Enrollment (Azure)

When a customer has an Enterprise Agreement (EA) with Microsoft, they use an enrollment level portal to access all of their Microsoft licenses and high-level billing information, including for Azure use. Companies with an Enrollment manage this for themselves, and create Subscriptions, an analog to AWS Accounts or GCP Projects, underneath the Enrollment. Companies who buy Azure through a CSP Reseller receive their Subscriptions, but the reseller owns and controls the Enrollment level portal and information. There are also Microsoft Customer Agreement (MCA) agreements. Check with your organization’s Procurement organization to understand what type of contract you have and where you receive your billing information for Azure.

Note: the FOCUS Project has defined the terms [“Billing Account ID (and Name)”](<https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/supporting_content/columns/billingaccountid.md>) to describe not only the Azure Enrollment (or MCA) but also other cloud or SaaS provider billing level concepts. The term [“Sub Account ID (and Name)”](<https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/supporting_content/columns/subaccountid.md>) defines the Subscription and other provider constructs.

## Folder (GCP)

GCP organizational resource hierarchy element. A Folder can contain one or more GCP Projects, and/or other GCP Folders. Folders exist within the context of one Billing Account.

## Instance Type, Family, Generation, Size (AWS)

Instance is usually AWS specific and generally refers to a specific EC2 virtual machine. AWS supports a variety of instance families, designated by letter, an instance Generation designated by a number and optionally other letters, and instance sizes which follow a structure of nano, micro, small, medium, large, xlarge, 2xlarge, etc. The Instance type includes the entire designation, such as m5a.16xlarge which would be an “m” family, 5th generation, “a” for AMD chipset, 16xlarge sized instance. Azure also has virtual machines which they call VMs which have families, generation and size designators. GCP calls these machine types and has a more flexible size designation scheme.

## Metadata, Tags, Labels

Tags are metadata attached to a specific instance, bucket, resource group, account or other resource running in a cloud environment. AWS and Azure refer to these as Tags, while GCP refers to them as Labels. They are meant to provide contextual information about the resource. Tags can be created with the resource in most cases or added after the fact manually or systematically.

Tags are useful for identifying the type of resource, the environment it supports (Dev, Prod, Test, etc.) the owner, the cost center, the operational parameters, etc. Tags can be queried or accessed in a wide variety of ways and can be used to drive automation, divide costs, or for other important purposes. Most large cloud-using organizations will at some point establish governance policies around tag use and require specific tags be used on all resources.

Note: the FOCUS project has chosen the [column name “Tag”](<https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/specification/columns/tags.md>) to represent resource metadata coming from any cloud or other producer of FOCUS data.

## Pre-emptible or Spot Instances/VMs

Many CSPs offer compute instances/VMs that can be created and used at deeply discounted rates from traditional on demand compute VMs; however, in exchange for the discounted costs, a characteristic of these VMs is that if the cloud provider requires access to the resources being used by pre-emptible VMs, they will stop those instances. Examples of terms used to describe pre-emptible compute instances/VMs include:

  * GCP Pre-emptible Compute Engine VM
  * AWS Spot instance
  * Azure Spot instance

## Project (GCP)

GCP services are housed within GCP Projects. Note: the FOCUS Project has defined the terms [“Billing Account ID (and Name)”](<https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/supporting_content/columns/billingaccountid.md>) to describe not only the Billing Project but also other cloud or SaaS provider billing level concepts. The term [“Sub Account ID (and Name)”](<https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/supporting_content/columns/subaccountid.md>) defines the Project and other provider constructs.

## Region

A discrete geographic area made up of smaller units which in most cloud provider parlance can be thought of as one contiguous “data center” from a network latency, pricing, and service availability perspective. Generally, data transfer within a region is free, services are consistent within the region. Terminology varies among the various CSPs. Regions are generally guaranteed to be more than a minimum distance from one another to satisfy disaster recovery requirements.

## Resource

A general name for a virtual cloud service or services.

## Resource Group (Azure)

Azure services are additionally required to exist within a Resource Group, which is treated with permissions and policies, tagged, etc. affecting all resources within it. Related to Resource Groups are Azure Subscriptions, which serve the same function as AWS Accounts in terms of serving as a logical separation of applications, environments, billing responsibility or resource groupings.

Note: the FOCUS Project has defined the terms [“Billing Account ID (and Name)”](<https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/supporting_content/columns/billingaccountid.md>) to describe not only the Azure Enrollment (or MCA) but also other cloud or SaaS provider billing level concepts. The term [“Sub Account ID (and Name)”](<https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/supporting_content/columns/subaccountid.md>) defines the Subscription and other provider constructs.

## RI – Reserved Instance

A commitment to use a cloud resource, usually of a specific type, location and size, for some period of time, usually 1 or 3 years, in exchange for a discounted rate.

## S3 (AWS)

Simple Storage Service – AWS’ object storage solution (other cloud service equivalents would be “Blob Storage” for Azure and “Cloud Storage Buckets” for GCP).

## Subscription (Azure)

Azure services are housed within Subscriptions, which are roughly analogous to AWS Linked Accounts. Azure Subscriptions typically roll up billing data to an Enrollment or Contract level which serves as the Management Payer analog to AWS. An organization might own its own Enrollment, or might purchase Subscriptions from a Cloud Service Provider (CSP) reseller who owns the Enrollment.

Note: the FOCUS Project has defined the terms [“Billing Account ID (and Name)”](<https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/supporting_content/columns/billingaccountid.md>) to describe not only the Azure Enrollment (or MCA) but also other cloud or SaaS provider billing level concepts. The term [“Sub Account ID (and Name)”](<https://github.com/FinOps-Open-Cost-and-Usage-Spec/FOCUS_Spec/blob/working_draft/supporting_content/columns/subaccountid.md>) defines the Subscription and other provider constructs.

## Unblended Rates/Cost

AWS provides in its CUR file, unblended rates and unblended cost which are the actual costs being charged for each resource or portion of resource usage for the billing period as affected by any reservation or savings plan, but not including any negotiated credits. This cost may fluctuate as reservations or savings plans are applied to different resources in different time periods. So the cost of one EC2 instance, for example, for the same number of hours may have a different unblended rate or cost.  

## Software Development & Operations Terminology

## Agile

A method of project management, used primarily for software development characterized by division of tasks to short phases of work (into sprints) and frequent reassessment of priorities and plans. Generally, leads to development of products or software incrementally beginning with a minimum viable product and then continually enhancing it from a backlog of requirements gleaned from user stories (requests)

## DevOps

A set of practices that intends to break down traditional silos between developers and operators of computer systems, allowing combined teams to collaborate and deliver software in a more consistent, efficient and automated fashion.

## Enterprise Architecture

EA or Enterprise Architecture groups are traditionally tasked with outlining the structure of the systems an enterprise will build and maintain to achieve its business goals. Like physical architects, they provide the blueprints for how the various systems should be put together, the “materials” or software concepts that should be used to build them, and how the end results should look.

## Lift & Shift

A method of migration involving moving an application as currently architected and built from one environment (an on-premises data center) to another (usually a public cloud). Lift & Shift migrations can usually be done more quickly as they often do not require substantial change to the application code or configuration. However, because they do not modify applications to use cloud native services, they tend to create situations where the cloud system is more expensive or difficult to run than the on-premises system had been.

Lift & Shift migrations are typically used when time pressure to close a data center or other need outweighs the cost and quality issues that can ensue and should always plan a period of remediation in the cloud or target environment afterwards to address issues.

## On-Premises (or On-Prem, but NOT on-premise)

A term used to refer to company owned or company-controlled data center space. Usually used to differentiate from public cloud environments where application migrations are targeting workloads. Most companies have an extensive on-premises infrastructure built over many years when they begin using the cloud, and there are often difficulties using systems, infrastructure or processes developed for the on-premises environment in the public cloud.

## Rightsizing

Rightsizing is a form of optimization where measurements are taken over time to assess the periodic requirements of a workload running in the cloud, and to match it to a virtual resource which is sized to run it efficiently with minimum waste. It is important to measure actual workload demand in small increments rather than using average load figures to be sure that workloads requiring larger instances for peak demand are accommodated. Rightsizing can be used as a technique to save cost but must always involve technology oversight as well.  

## Finance & Accounting Terminology

## Amortization

Retiring a payment of capital gradually over time on a schedule which reflects the benefits the capital provides in each period. An upfront RI payment can be amortized over the useful lifetime (1 or 3 years) of the RI itself. Like depreciation, amortization typically applies to retirement of cash payments, where depreciation tends to apply to physical capital equipment.

## Balance Sheet

A statement of financial position of the business on a specific date which indicates the value of all assets and liabilities as of that date, including the retained value of any undepreciated or unamortized capitalizable items. A company purchasing a 3-year RI at the beginning of a year would show that RI with ⅔ of its original value on the Balance Sheet on the last day of that year.

## Capital Expenditure (CapEx)

When you capitalize spending, it creates an asset of the company, whether or not it gets expensed within a specific period. The test you can apply is: if an organization writes a check to acquire something, does that acquisition benefit the organization in future periods? If it does, then it can be capitalized. If it benefits only the current period, then it’s an expense that is expended in this period with no future benefit, making it an operational expense. Capitalization causes total outlays to differ from expenses in a similar period, with the delta being that which is capitalized. Ultimately it is the CFO/comptroller that makes the decision and that Finance should be engaged to make sure the right classification is used.

The purchase of a capitalizable asset, such as a building or equipment meant to provide value over a long term and thus to be depreciated or amortized over that term. Purchasing a data center and using it over 30 years is considered a Capital Expenditure while paying to run a virtual server in the cloud for this month is not.

## Capitalization

The ability to treat an investment or outlay as a capital item which will be depreciated or amortized in future periods.

## Cost of goods sold (COGS)

Measures how many dollars of outlay it takes to generate revenues in a specific period. For example if a power company is trucking coal out of storage and into a power plant, it records the cost of the coal burned. That cost has no future benefit, so it’s going to be an expense that is directly traceable to revenue in that period, making it a COGS expense. The test of COGS is: are they directly expensed and directly related to revenues in the same period?

For a company that uses cloud, the COGS are the monthly cloud bill to operate its cloud workloads, salesperson commissions, and support costs. Notably, cloud has the most variable spend model and has a high potential for optimization. You can’t usually materially turn down your sales commissions or terminate your support people, which leaves optimizing your cloud spend without reducing revenue.

## COGS as capitalized assets

There’s potential to reclassify COGS as capital expenses when it comes to how expenses are used. Let’s say a power company takes some of their coal and uses it to make diamonds. If it burned coal to generate power that was sold for revenue, the company accounts for the cost of the coal as COGS. But if it creates diamonds out of the coal, and those diamonds aren’t sold in the period but instead are put into storage as inventory for future periods, the cost of the coal would then be capitalized as an asset. However, as soon as those diamonds are sold, then the cost of the coal switches back to COGS during the period of the sale.

## Cost Allocation

In FinOps, the ability to identify and allocate costs to the appropriate cost categories in use by a customer. Ideally direct costs (the cost of resources running in your accounts), amortized costs (the amortization of prepaid costs paid upfront for RIs applied in my accounts), and shared costs (my share of common services accounts run by others on my behalf) can be allocated to individual budgeting categories for a clear view of the entire cost of running my application or workload in the cloud.

## Depreciation

Retiring the cost of an asset gradually over time on a schedule which reflects the provision of benefits. Often this reflects the decrease in value of an asset over time due to wear and tear, decay or usefulness because of continued use in out periods.

## EBITDA

Earnings Before Interest, Taxes, Depreciation, and Amortization, an assessment of the earnings expected when subtracting only the cost of goods sold from the revenue achieved. Tracking the prepaid expense of a 3-year all-upfront Reserved Instance as a cash outlay that can be amortized over 3 years would affect EBITDA differently than if the resources were purchased using cash at on-demand rates.

## Fixed Cost

A cost which does not change with changes in business volume. The cost of a data center building mortgage is a fixed cost in that it does not vary regardless of whether it is supporting 1 web server or 1,000,000 web servers driving the company’s revenue.

## Income Statement (sometimes referred to as a P&L statement)

A statement showing the company’s net profit or loss over a period of time (a month, a quarter, a year, etc.) The income statement would show expenses and amortization incurred during the period, so in year two of a 3-year RI, the amortization for the second year would show up as an expense against earnings in the period covered.

## Net Present Value

An assessment used to calculate the long-term profitability of a project made by adding together all the revenue it can be expected to achieve over its whole life and deducting all the costs involved, discounting both future costs and revenue at an appropriate rate. In a cloud business case, the net present value of all the cash flows of a no-upfront RI might be compared to the current cash value of the all-upfront RI for determining which is better for the business.

## OpEx

Operating Expenditure (OpEx) – a category of business expense made in a specific accounting period which provide benefits only in that accounting period. Operating expenditures require no long-term tracking of depreciation or amortization but are subtracted from earnings in the period incurred. While the purchase of on demand cloud services may be considered an Operating Expenditure, there are complex accounting rules for what is considered CapEx. It’s important to work with your finance department to determine what your organization’s capitalization policies are.

## Return on Investment (ROI)

The amount of profit from an investment made, usually expressed as a percentage of the original total cost invested. In a cloud rightsizing business case, the ROI might be calculated as the savings in cloud expenditure expected less the engineering and other costs required to take the rightsizing action.

## Variable Cost

A cost which varies according to the business volume it supports. A company hosting websites would need to pay for more computers to host more websites, and so that cost per website is a variable cost.

## Upfront Charge

Reserved instances or service reservations in general can typically be purchased with a full upfront payment (All Upfront), a partial upfront payment plus a reduced periodic charge (Partial-upfront) or with no upfront charge (No-Upfront). The upfront charge may be amortized over the life of the RI. AWS allows all three models for some service reservations and only Partial for others. Azure has historically only offered VM Reservations as All-Upfront, and GCP doesn’t typically require upfront charges on reserved discounts. Upfront charges might be treated as Prepaid Expenses on the Balance Sheet (check with your accountants!).

## Unit Economics (see related [FinOps Capability](<#unit-economics-terms>))

The ability to directly compare my overall cost to the overall business benefit I am creating on a per unit basis. For example, if I understand that the overall cost of running my website infrastructure is $5,000,000 per month and is able to support 10,000,000 paid hosted web pages, then I can track a Webpage/$ metric of “2” which indicates how efficiently I run my service. Any future modifications to my cloud infrastructure can then be expressed in terms of the Webpage/$ metric to determine if they are helping or hurting, and opportunities for cost savings can be expressed in terms of how they impact Webpages/$.

## Weighted Average Cost of Capital (WACC)

Weighted Average Cost of Capital – the rate the company is expected to pay on average to all its securities holders to finance the operation of the business. Importantly this is set by the external market (what the market is willing to pay for various forms of the company’s securities) not by management. The WACC, sometimes called the ICC or Internal Cost of Capital, represents the internal cost of cash and can be used in a business case to compare the rates of return of an investment (such as an all-upfront RI payment) to determine if it is better to use cash, borrow cash, or forego the investment.  

## ITFM and FinOps

## TBM Taxonomy

TBM, or Technology Business Management, is a branded model of IT Financial Management which developed a standard taxonomy to describe cost sources, technologies, IT resources (IT towers), applications, and services as a way of categorizing and reporting IT costs and other metrics.

## IT Financial Management (ITFM)

IT Financial Management (ITFM) is the oversight of expenditures that drives IT decision making required to deliver IT products and services. IT financial management helps an IT organization determine the financial value of IT services provided to its customers. The discipline is based on traditional enterprise financial and accounting best practices, such as mandating documentation of expenses and requiring regular audits and reports. However, IT financial management methods and practices are adapted to address the particular requirements of managing IT services and solutions.

## Technology Business Management (TBM)

Technology Business Management (TBM) is a branded version of ITFM which allows organizations to define and categorize technology costs and investments using a taxonomy and ITFM best practices that help business leaders understand IT costs and their value. TBM defines a taxonomy of costs into Towers, Sub-Towers, Cost Pools and other categories.

## Configuration Management Database (CMDB)

CMDB – Configuration Management Database (a shared system of records) is a central repository that acts as a data warehouse, storing information about your IT environment and it is a purpose-built database for configuration management.

## Even-spread cost allocation

Even-spread allocation divides the total cost by the total number of units being charged. (i.e. $1,000 divided by 100 applications – 10 per application allocated).

## Cost-weighted allocation

Cost-weighted allocation times the total cost by weighted metric per unit being charged. (i.e. unit 1 = 60% weight, unit 2 = 40 % weight, therefore $1000 cost per weighted unit = $600 for unit 1, $400 for unit 2).

## Total Cost of Ownership

(TCO) a comprehensive assessment of information technology (IT) or other costs across enterprise boundaries over time. For IT, TCO includes hardware and software acquisition, management and support, communications, end-user expenses, labor, opportunity cost of downtime, and training and other productivity losses.  

## Unit Economics

## Unit Economics

A system of profit maximization based on assessing the impact of incremental costs relative to incremental revenue. The revenues and costs associated with a defined and measurable unit of a product or service. FinOps teams today strive to provide actionable unit costs to enable organizations to calculate unit economics for the products or services utilizing cloud services.

In manufacturing, marginal economics help businesses optimize production levels and maximize profits. In the cloud, marginal economics helps us understand if engineering changes to products or services via changes to the architecture, development patterns, or cloud operations are delivering incremental business value.

## Unit Cost

The cost allocated to a defined and measurable incremental unit of a product or service is one of the more important concepts in unit economics. Unit cost is also sometimes referred to as the marginal cost specific to the development and delivery of cloud-based software or services.

## Unit Metrics

KPIs used in unit economics that indicate business value, technical value, or other important measurements.

## Activity Based Costing

A process establishing direct costs associated with specific tasks that can then be attributed to products and services based on demand. The tasks are staff-related (time required to perform task x hourly rate) but can also be related to machine time. Also referred to as Task-Oriented Costing.

## Cost to Produce

This is the total cost to produce for non-production workloads and is used as a measurement with other business metrics similar to how you would use the cost to serve. These metrics can be compared to similar tech stacks and non-production workloads to determine the efficiency of teams and cost controls.

**Note:** This activity should not be confused with something akin to a tax write-off with Research & Development.

  * Financial – R&D costs and comparative costs by tech stack
  * Technology/Engineering – Unit rates per Cost to Produce (Is there fat in the cost in non-production), Future architecture deployment cost options based on service whitelist, etc.
  * Forecasting – Future production cost

## Contribution Margin

This is usually _revenue minus variable cost_. Can be performed at the unit or aggregate level, with the latter indicating the amount available to support the company’s shared costs. Typically applied at the product level, but can be applied to any dimension — e.g.: market, industry, etc..

## Cost to serve

Cost to serve kicks in once the application has been promoted to production and production begins.

  * Sales – Tracking outliers that may be less profitable, or “abusive” customers
  * Operations – Identify professional services engagement (customer-facing) teams who are not using applications and/or storage resources cost-effectively
  * Financial – Gross margins, the cost to service an application
  * Technology/Engineering – Unit rates (blended costs based on how you buy cloud)
  * Forecasting – Future growth and trending potential cost

## Direct cost

Costs — variable or fixed — that can be identified and attributed to a specific resource or group of resources that support the delivery of products or services to an internal or external customer.

## Indirect cost

An allocation of a general business expense that is not readily identifiable but necessary for the general operations of the organization.

## Shared cost

Identifiable costs allocated to a pool of products or services through an agreed-upon distribution methodology.

## Demand driver

A factor that has material influence over cloud resource usage.  

## Usage Optimization

## Usage Optimization

Usage optimization is the process of ensuring a close match between the capacity of cloud resources provisioned and effective usage of the resources as it pertains to the needs of the business. Usage optimization is an important tool for maximizing the value of the cloud and aids in establishing cost efficiency.  

## Cloud Sustainability

Cloud Sustainability is the practice of incorporating sustainability criteria and metrics into cloud optimization and reporting efforts to allow environmental efficiency to be used as criteria in making optimization decisions. By integrating sustainability considerations into the cost optimization process, FinOps teams can contribute to reducing the environmental impact of cloud usage, aligning with corporate sustainability goals while still delivering financial savings. 

Below are some key sustainability terms to help FinOps practitioners get started.

## BECCS

Bioenergy with Carbon Capture and Storage

## BEIS

Department for Business, Energy, and Industrial Strategy

## CDSB

Climate Disclosure Standards Board

## CCS

Carbon Capture and Storage

## CSRD

Corporate Sustainability Reporting Directive

## DCIE

Data center infrastructure efficiency

## ESG

Environmental, Social, and Corporate Governance

## ETS

Emissions Trading Scheme

## FGD

Focus Group Discussion

## GHG

Greenhouse Gas (either emissions or protocol defined by the Environmental Protection Agency of USA)

## GRI

Global Reporting Initiative

## IIRC

International Integrated Reporting Council

## ISAE3000

International Standard on Assurance Engagements for Non-Financial Reporting .

## ISAE3410

International Standard on Assurance Engagements on Greenhouse Gas Statements

## ISO50001

International Standards Organization certification for Energy Management

## LCA

Life Cycle assessment

## PPA

Power Purchase Agreement

## PUE

Power Usage Effectiveness

## GPUE

Green PUE

## REA

Rapid Evidence Assessment

## SASB

Sustainability Accounting Standards Board

## SBTi

The Science Based Targets initiative

## SDG

Sustainable Development Goal

## SIC

Standard Industrial Classification

## TFCD

Task Force on Climate-related Financial Disclosures

## Activity data

An activity is any action that creates emissions. It’s essentially anything that your company does, uses, or benefits from that generates greenhouse gas emissions. Activity data is the quantifiable measurement of that activity. Example: 341 kilowatt-hours (kWh).

## Anthropogenic

Made by people or resulting from human activities. Usually used in the context of emissions that are produced as a result of human activities.

## Avoided emissions

The measurable quantity of emissions that a company intentionally avoids generating as a result of choosing a different activity or changing a process.

## Baseload power

A long term, continuous, and reliable power supply, often supplied by hydroelectricity, coal or nuclear power. It is a stumbling block for many forms of renewable energy

## Carbon Dioxide Equivalent (CO2e)

A metric used to compare the emissions from greenhouse gases based upon their global warming potential (GWP). Carbon dioxide equivalents are commonly expressed as “million metric tons of carbon dioxide equivalents (MMTCO2Eq).” The carbon dioxide equivalent for a gas is derived by multiplying the tons of the gas by the associated GWP. MMTCO2Eq = (million metric tons of a gas) * (GWP of the gas)

## Carbon Efficiency

Carbon efficiency refers to the economic benefits generated per unit of carbon emissions. In simpler terms, it measures how effectively an activity or process uses carbon to produce economic value.

## Carbon Footprint

A carbon footprint is the total greenhouse gas (GHG) emissions caused by an individual, event, organization, service, place or product, expressed as carbon dioxide equivalent (CO2e)

## Carbon Intensity

This is defined as “The amount of carbon by weight emitted per unit of energy consumed”. When we talk about the carbon intensity of electricity, we are referring to the number of grams of carbon dioxide (CO2) that it takes to make one unit of electricity a kilowatt per hour (kW/hour). When electricity is generated using coal power stations, the carbon intensity value is high as CO2 is produced as part of the power generation process. Renewable forms of generation such as hydro or solar produce almost no emissions, so their carbon intensity is very low. The lower the carbon intensity, the greener the electricity.

## Carbon insets

Carbon insetting is an investment by an organisation in emissions reductions projects within the company’s value chain.

## Carbon negative

A company is considered carbon negative when it removes more carbon than it emits each year.

## Carbon neutral

A company is considered carbon neutral when it reduces its emissions, and/or when it pays other companies not to emit the equivalent of its remaining emissions.

## Carbon offsets

The practice of reducing or removing greenhouse gas emissions to balance ongoing greenhouse gas emissions, which can be used to achieve net zero targets.

## Carbon reductions

Reducing the amount of greenhouse gas emissions that are going into the atmosphere.

## Carbon removals

Removing greenhouse gas emissions that are already in the atmosphere.

## Cradle to gate

Accounting for scope 3 activity only in upstream emissions (that is, everything that occurred before goods and services reached your company).

## Cradle to grave

Accounting for scope 3 activity through the whole lifespan of goods and services.

## Decarbonization

The term decarbonization literally means the reduction of carbon. Precisely meant is the conversion to an economic system that sustainably reduces and compensates the emissions of carbon dioxide (CO₂). The long-term goal is to create a CO₂ free global economy.

## Digital Carbon Footprint

A digital carbon footprint is the CO2 emissions resulting from the production, use and data transfer of digital devices and infrastructure.

## Double Materiality

The concept of double materiality describes how corporate information can be important both for its implications about a firm’s financial value, and about a firm’s impact on the world at large, particularly with regard to climate change and other environmental impacts

## Double Counting

Occurs when GHG emissions (generated, avoided, or removed) are counted more than once in a GHG inventory or toward attaining mitigation pledges or financial pledges for the purpose of mitigating climate change.

## E-waste

Discarded electronic appliances and infrastructure such as servers, storage, network devices etc

## Emissions Trading Scheme (ETS)

A tool that puts a price on emissions of greenhouse gases with the aim of reducing them

## Emissions data (M)

An output from the system that is the result of an emission calculation. Example: 51 billion tons of carbon dioxide

## Emission factor (M)

A value that is used in an emissions calculation to convert a quantity of related activity into emissions values for corresponding gases.

## Emissions Removal

The action of removing GHG emissions from the atmosphere and store it through various means, such as in soils, trees, underground reservoirs, rocks, the ocean, and even products like concrete and carbon fiber.

## Emissions source

Any of the 23 types of operational activity that are organized into predefined groupings according to the [Greenhouse Gas Protocol](<https://ghgprotocol.org/>).

## Energy intensity

Energy intensity helps you identify how energy usage and facility square footage might be related. It can be calculated as Kilowatt-hours (kWh) ÷ Square feet (sq. ft.).

## Estimation factor

A value that is used in calculations to convert one type of known activity data into an approximate usage value when actual usage information isn’t available. Example: A company that doesn’t receive a utility bill for space that it leases can calculate its emissions by using an estimation factor that is based on consumption in that region.

## Factor

A value that is used in calculation models to convert one type of data into another type. Example: One emission factor can convert electricity usage into metric tons of carbon dioxide.

## Factor mapping

A method of linking the dynamic attributes of activity data to an emission factor when the calculation job is run. The benefit of using factor mappings is that you don’t have to create a separate calculation model for each emission factor.

## False negative

When a system fails to detect an anomaly that has occurred. Example: The system fails to capture an anomaly when a service outage occurs.

## False positive

When a system incorrectly detects an anomaly although none has occurred.

## Global warming potential (GWP)

Each greenhouse gas has a different impact on global warming. To enable comparison of different greenhouse gases, each has a global warming potential value that is relative to metric tons of carbon dioxide equivalents (mtCO2e).

## Greenhouse Gas (GHG)

Any gas that absorbs infrared radiation in the atmosphere. Greenhouse gases include, but are not limited to, water vapor, carbon dioxide (CO2), methane (CH4), nitrous oxide (N2O), chlorofluorocarbons (CFCs), hydrochlorofluorocarbons (HCFCs), ozone (O3), hydrofluorocarbons (HFCs), perfluorocarbons (PFCs), and sulphur hexafluoride (SF6).

## Greenhouse Gas (GHG) Protocol

Comprehensive global standardized frameworks to measure and manage GHG emissions from private and public sector operations, value chains, and mitigation actions. The GHG Protocol supplies the world’s most widely used GHG accounting standards. The Corporate Accounting and Reporting Standard provides the accounting platform for virtually every corporate GHG reporting program in the world.

## Green Tariffs (eco-tariff)

An eco-tariff, also known as an environmental tariff or carbon tariff, is a trade barrier erected for the purpose of reducing pollution and improving the environment.

## Greenwashing

Greenwashing (a compound word modelled on “whitewash”), also called “green sheen” is a form of marketing spin in which green PR and green marketing are deceptively used to persuade the public that an organization’s products, aims and policies are environmentally friendly.

## Grid Emission Factor

Grid Emission Factor (GEF) measures average CO2e emissions emitted per MWh of electricity generated. The mix of power generation technologies available in each geographic area will heavily influence the grid emission factor for the power grid. A lower GEF is better as this represents less CO2e for each MWh consumed.

## Life cycle assessment (LCA)

The process of attempting to measure the environmental impacts of a product or service throughout its existence.

## Limited Assurance

A level of assurance that is less than that provided in an audit. The objective of a limited assurance engagement is a reduction in assurance engagement risk to a level that is acceptable in the circumstances of the assurance engagement, but where that risk is greater than for a reasonable assurance engagement, as the basis for a negative form of expression of the appointed auditor’s conclusion. A limited assurance engagement is commonly referred to as a review.

## Net zero

A defined target for net zero emissions refers to achieving an overall balance between greenhouse gas emissions produced and emissions taken out of the atmosphere by an agreed date.

## Net zero Transition Plan

There is no formal definition, however this research identifies what organisations have been including in their plans, as well as the terminologies they use on this topic.

## Paris-aligned

Net zero targets which aim to achieve the Paris Agreement goal of keeping global average temperatures to well below 2°C and aiming for 1.5°C

## Performance Per Watt

is a measure of the energy efficiency of a particular computer architecture or computer hardware. Literally, it measures the rate of computation that can be delivered by a computer for every watt of power consumed.

## Physical climate risk

An event-driven risk (acute) or longer-term shifts (chronic) in climate patterns. Physical risks may have financial implications for organisations such as direct damage to assets and indirect impacts from supply chain disruption.

## Power usage effectiveness (PUE)

Power usage effectiveness is a unit of measurement for how efficient a data center is, measured by the amount of power going into the building compared to the amount of energy used by the information technology equipment inside. PUE = Total Facility Power / IT Equipment Power. A PUE of 2 means for every 2 watts going in, only 1 watt is used by the IT equipment, the rest of the energy is being used for cooling, lighting, security, etc. With PUE a lower number is better with an ideal of 1.0.

## Race to Net zero

A global campaign launched by the COP26 leadership committee that calls on countries, regions, cities, and companies to set targets to hit net zero carbon emissions by 2050. It currently does not recognise offsetting as a valid mechanism by which to achieve net zero.

## Rapid Evidence Assessment

Rapid evidence assessments provide a more structured and rigorous search and quality assessment of the evidence than a literature review but are not as exhaustive as a systematic review.

## Reasonable Assurance

Reasonable assurance refers to the degree of satisfaction of the auditor that the evidence acquired during auditing backs the declarations embodied in the financial reports.

## Reference data

Contextual, supplemental information that goes into an emissions calculation or helps provide context for calculation outputs. Examples: Facilities, locations, industry, equation definitions, activity metadata

## Removed emissions

The measurable quantity of carbon dioxide emissions and other greenhouse gas emissions that a company intentionally removes from the environment.

## Renewable energy

Renewable energy is energy produced from sources like the sun, water and wind that are naturally replenished and do not run out.

## Renewable Energy Credit

A Renewable energy credit (REC) is a certificate corresponding to the environmental attributes of energy produced from renewable sources such as wind or solar. RECs were created as a means to track progress towards and compliance with states’ Renewable Portfolio Standards (RPS), meant to support a cleaner generation mix.

## Revenue intensity

Revenue intensity helps your company identify how emissions and revenue might be related. It’s calculated by dividing an emissions measurement by the related revenue (for example, mtCO2e ÷ Revenue).

## Root Cause Corrective Analysis

Identifying and addressing the root event/failure that led to the outage/issue

## Science-Based Targets Initiative (SBTI)

The initiative defines and promotes best practice in emissions reductions and targets aligned with specific temperature goals (1.5˚C or well below 2˚C of global warming). It is a widespread mechanism for corporate emissions targets to align to and an allocation approach is taken to attribute global or sector specific emissions to individual companies.

## Scope

The [Greenhouse Gas Protocol](<https://ghgprotocol.org/>) has organized all sources of emissions into three types (“scopes”) for standard data collection, measurement, and reporting purposes.

## Scope 1 emissions

All direct emissions from fuel consumption under their control, for example, gas consumed in boilers, or petrol consumed in owned vehicles. From a cloud provider perspective, this is the emissions from combustion of diesel fuel and the use of refrigerants for cooling data centres.

## Scope 2 emissions

Emissions from indirect energy consumption. This is usually electricity but can also include purchased heat and steam. From a cloud provider perspective, this is the emissions from direct power consumption used to power the cloud providers data centres

## Scope 2 emissions – Location-Based Method

Scope 2 emissions are calculated based on average emission factors for the organisation’s electricity grid.

## Scope 2 emissions – Market-Based Method

Scope 2 emissions calculations take into account contractual arrangements that the organisation uses to procure power from specific sources, for example renewable sources. Types of contracts include Energy Attribute Credits (RECs- Renewable Energy Credits), GOs(Guarantees of Ownership), PPAs (Power Purchase Agreements).

## Scope 3 emissions

All other indirect emissions from activities of the organisation, occurring from sources that they do not own or control. These are often referred to as “supply chain emissions”. From a cloud provider perspective, this is the emissions from “everything else” – raw material extraction, manufacturing and delivery of physical assets

## Sequestered Emissions

Refers to atmospheric CO2 emissions that are captured and stored in solid or liquid form, thereby removing their harmful global warming effect

## Spend-based accounting
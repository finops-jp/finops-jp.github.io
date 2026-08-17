# FinOps & TBM: Navigating Co-Existing Disciplines

## Table of Contents

  * [Introduction](<#introduction>)
  * [Working at the Intersection of FinOps and TBM](<#working-at-the-intersection-of-finops-and-tbm>)
  * [Exploring Overlaps and Gaps between FinOps and TBM](<#exploring-overlaps-and-gaps-between-finops-and-tbm>)
  * [Common Challenges](<#common-challenges>)
  * [Connections and Integrations](<#connections-and-integrations>)
  * [Taxonomy and Logical Models](<#taxonomy-and-logical-models>)
  * [Aligning FinOps and TBM Use Cases](<#aligning-finops-and-tbm-use-cases>)
  * [In Conclusion](<#in-conclusion>)
  * [Acknowledgements](<#acknowledgements>)

## Introduction

This guide was developed by the FinOps & TBM working group to define key terminology and practice intersections between FinOps and Technology Business Management (TBM). The content explores common use cases and the benefits of collaborative interaction between the two disciplines when they coexist in an organization. For purposes of this guide, TBM refers to IT Financial Management (ITFM), inclusive of the TBM discipline and ITFM best practices. As a prerequisite to reading this guide, readers should have a basic understanding of FinOps and TBM.

  * For more information on FinOps see [FinOps Foundation – What is FinOps?](<https://www.finops.org/introduction/what-is-finops/>)
  * Fore more information on TBM see [TBM Council – What is TBM?](<https://www.tbmcouncil.org/learn-tbm/what-is-tbm/>)

This guide has been updated to reflect changes in FinOps and TBM practices as reflected in the latest available [community data](<https://data.finops.org>). A glossary of key terms used in this guide may also be found on the [FinOps Terminology page](<https://www.finops.org/assets/terminology/#itfm-and-finops>).

For organizations which use both FinOps and TBM practices, or who maintain separate teams in these areas, this guide aims to explore the interactions between FinOps and TBM to better govern IT spend. It will explain common use cases where FinOps have interaction with ITFM/TBM teams, and describe success stories and common pitfalls that teams may encounter when working together.

### TBM & FinOps at a Glance

**** | **FinOps** | **TBM/ITFM**  
---|---|---  
**Personas Involved:** | Most roles across technology and finance including Engineering, Product, Finance, Procurement, and Leadership, often including dedicated FinOps Practitioners | Office of the CIO, office of the CFO, usually with a dedicated TBM Office or IT Finance office  
**Spend Managed:** | Public Cloud, and increasingly Public Cloud, SaaS, Licensing, On-premises costs, and critical technology scopes | Total IT Spend including CapEx, OpEx, and labor  
**Cadence:** | Granular per-second, per-hour cost data, daily trends, and aggregation to support monthly, quarterly and multi-year views with drill down to match cadence of cloud data being generated | Monthly costs, quarterly trends to match cadence of financial reporting cycle requirements  
**Purpose:** | Maximize business value by helping engineering, finance, technology, and business teams to collaborate on data-driven cloud spending decisions in near real time | Connecting Technology Investments to Business Value  
**View:** | Bottoms-up | Top-down  

FinOps and TBM are complementary to one another, and were not designed to replace one another. Both disciplines work to help organizations understand the value being delivered through certain investments. Generally speaking, TBM looks across the entire IT investment portfolio from the top down, and FinOps aggregates detailed variable spend data across data sources as required by the organization.

TBM accounts for all IT spend – inclusive of cloud costs – at a macro level to provide a top-down, fully burdened, comprehensive mapping of technology spend as it relates to specific business objectives and outcomes. Presenting that data using a standardized taxonomy (IBM Apptio’s TBM Unified Model, or ATUM) provides a single source of truth to IT, finance, and business teams so that they can make informed, data-driven technology investment decisions at an organizational level. TBM is not designed to address the deep complexities of managing and controlling public cloud spend, which is variable and dynamic – requiring a higher frequency to monitor and optimize.

FinOps was designed to meet the requirements of managing cost in the public cloud while enabling teams to be flexible, agile, and efficient in making business decisions quickly and in a data-driven manner while dealing with the huge scope and scale of consumption-based service data coming from cloud providers. Increasingly, the skills and practices FinOps teams have developed to tackle the challenges of public cloud spend are being applied to other scopes of infrastructure spend, such as SaaS, licensing, private cloud, and data center as required by the business, as well as to technology scopes such as AI spend.

As this guide will explore in detail, when TBM and FinOps teams both exist in an organization, they can collaborate and share data, to strengthen the overall output of each team. In the early days of cloud use, companies with both TBM and FinOps maintained them as two different – but collaborating – teams. Since 2023, the State of FinOps Survey has shown increasing collaboration between these groups, but also an increase in the number of companies that have integrated them together.

TBM and FinOps must collaborate on how consumers will be held accountable and how cost data will be used. For example, by aligning to a common tagging or allocation strategy, the TBM and FinOps teams can be sure their costs are consistent between both disciplines, enabling the TBM team to pull summarized public cloud spend data from FinOps practice to tie to key business objectives and deliver comprehensive, accurate chargeback.

FinOps team can also pull in TBM general ledger data (e.g., labor, program cost, etc.) to deliver fully burdened unit economics that help drive decision making throughout the organization. There are a number of common strategic outcomes TBM and FinOps can drive together, with the cloud-specific data inputs from each discipline.

## Working at the Intersection of FinOps and TBM

The interaction between FinOps and TBM often begins when an organization begins using public cloud extensively. When implementing a new FinOps practice, the focus is often on implementing new FinOps Capabilities to manage the complexity of public cloud data with agility and speed. But it is important to also utilize resources already present in the organization. Pre-existing assets such as shared metadata, contacts, working business processes, terminology, and governance can help accelerate the delivery of FinOps. Many of these assets may have been created by TBM, ITFM, ITSM, ITAM or other teams that may already exist in an organization prior to public cloud adoption. FinOps teams can benefit from discussions with these practice groups to share useful common practices, and to provide the key insights into public cloud use these groups require. FinOps teams may not need to integrate all of these practices to be successful, but collaboration where there are overlapping goals and responsibilities is key to overall organization success.

An example of this can be seen when we look at common reporting requests. For example, a TBM team may assume that all of the existing on-premises reporting also applies to public cloud. While there is commonality, there can also be some significant differences.

Let’s look at this storage example: A common TBM ‘Storage’ report may focus on cost and also capacity available as from a TBM perspective, where we are paying for all of the storage we have physically purchased and when we may need to buy more, if tracked incorrectly, there is a risk of running out of storage and being at a work stoppage.

This context shifts when adding cloud storage and optimizing from a FinOps perspective, where CSPs have ‘unlimited’ storage capacity in the cloud and therefore give users the sense that they do not need to be concerned with additional capacity purchases as we are effectively operating ‘on-demand’. In this example, it is no longer necessary to track the need to buy more, as it is always available. However, it does become necessary to track growth rate and expected increases to ensure storage is being consumed and spent appropriately. After all, if storage ran out on-premises, there was no way for someone to simply buy 10 new storage appliances without proper approvals. Within the cloud, this can happen whether it was needed or not, and as such should be monitored.

This is an example of the intersection of teams and processes that can be approached to deliver the benefits of both TBM and FinOps.

## Exploring Overlaps and Gaps between FinOps and TBM

To better understand what practitioners are experiencing when navigating FinOps and TBM, the working group conducted a survey within the FinOps community. This survey was conducted in 2022, and has not been retaken, but provides some insights into the interaction of TBM and FinOps teams at that time.

The first question sought to identify where overlaps and gaps between FinOps and TBM occur, asking _“What are the uses cases / issues / processes you were trying to fix with FinOps and TBM collaborating? (e.g., Chargeback, TCO, Budgeting, Migration, Optimization).”_

Chargeback gained the majority at 28.6%. Forecasting, Optimization, and TCO tied at 19% each. Those four use cases combined make up 85.6% of use cases for these models from our survey takers.

Key insights include:

  1. FinOps and TBM practitioners are encountering the same pain points and are looking for those solutions. They have shared goals.
  2. While these methods are different, they seek to solve the same challenges and have overlap in areas where collaboration between the teams makes sense in order to derive a single holistic solution to challenges such as Chargeback or Forecasting.

It was a surprise how low responses for Migration and ROI were. Most of our respondents self-identified as having very low FinOps maturity. As maturity grows, ROI will likely become a higher priority to address.

## **Common Challenges**

Where there are joint use cases trying to solve and collaborate on issues, there are also common challenges in implementation. Survey respondents cited three main challenges they encountered. The majority fell into Competing Priorities (30.4%), followed by Stakeholder Engagement (21.7%) and Knowledge / Skills (13%).

The fact that for over 50% fall into Competing Priorities and Stakeholder Engagement demonstrates that both practices were likely in an early stage of adoption at the time of the survey. More recent general data from the State of FinOps survey indicates an increasing collaboration and integration between ITFM/TBM and FinOps teams, which has likely reduced competition over time.

Regardless of the challenge, communication and collaboration are the key to any successfully managing overall value. This data speaks to the dynamic nature of people dealing with adopting these methods every day and are looking for the solutions – whether it is FinOps, TBM, or a combination. Any adoption inherently comes with a need to promote education and awareness while fostering a culture shift with education and training. All of this combined supports teams in their implementation efforts.

Having these common challenges presents an opportunity to have shared influence for prioritization. It also presents opportunities for education and integrated solutions which have a shared strategy.

When adopting any practice, ensure you and your organization are looking at not just the implementation points, but the strategy and culture shift which will enable and empower the adopters. There is an [Adopting FinOps body of work available on finops.org](<https://www.finops.org/assets/?prod_combined-resources%5Bquery%5D=Adopting%20FinOps>) that is a great place to start a FinOps journey and can be applied across many scopes of spend.

## **Connections and Integrations**

With these overlaps in use cases and challenges, how does the connection and integration of these two work? Integrating FinOps and TBM processes ensures the total cost of applications and services in the public cloud are reflected the same way as on-premises applications and services.

This provides a means to rationally compare applications running on different platforms through a common TCO mechanism. And as public cloud spend increases and becomes a larger percentage of IT’s budget, this will be more important to IT leadership making strategic decisions as to where workloads should run.

To connect FinOps with TBM, three elements need to be in place:

  1. A shared taxonomy
  2. A mapping of cloud service provider’s resources to that taxonomy
  3. Tagging apps/services/products to the resources in the cloud they consume

### Common Taxonomy

A common taxonomy provides a baseline and allows the FinOps and TBM processes to speak the same language. The taxonomy defines the elements needed for reporting across IT. Typically this taxonomy will come from the TBM team and is relatively static. For instance, a TBM team may use IBM Apptio’s ATUM 4.0 and its associated taxonomy that defines Cost Pools, Tower/sub-tower, etc. FinOps teams can adapt their spending and usage data to align with the existing IT logical model/governance used by the TBM team if that is a standard used in the organization.

In organizations where TBM is not specifically used, it is no less important to establish a common taxonomy of how costs will be collected, tagged, allocated, and reported. This may also evolve over time as the mix of technology spend changes.

### Mapping to Taxonomy

Once the FinOps and TBM teams have agreed on a common language, a business mapping must be built to tie cloud service providers’ products/services to the taxonomy. This mapping provides the link between the cloud resources the engineering teams use and where those associated resources costs should go in the TBM model.

Although the mapping typically would be done collaboratively between the teams, the FinOps team would likely drive the process since they would have a deep understanding of the cloud services being used. As an example of the mapping, AWS EC2 costs would be mapped to Compute->Servers in the taxonomy; or AWS RDS would be mapped to Platform->Database. As new cloud services are used, the mapping would need to be updated.

The mapping of cloud services to the TBM taxonomy allows the TBM team to consume cloud costs from the FinOps team. But those costs need to be allocated to business services or business units; to do that, resources running in the cloud need to be tagged appropriately.

### Tagging

Tagging typically requires the cloud resources with the application using those resources. It might also include company specific tagging for things like project codes. This tagging in the cloud should be no different than the tagging that is required for on-premises resources and requires ongoing attention.

Note here that the term Tag is being used here in a general sense to indicate the attaching of metadata to a resource, a group of resources (Account, Resource Group, etc.) or a category of spending, whether inside of the cloud service provider environment or externally once usage and billing data has been provided. The term Tag has been included in the [FOCUS™ Specification](<https://focus.finops.org/>) as a term that applies across cloud providers and other producers of billing data, so it is used here in that sense. There is much more detail to delve into to define how an organization “tags” its data that both TBM and FinOps teams will work through.

All of this requires coordination, collaboration, and agreement between the FinOps and TBM teams. The TBM team will provide relatively static data like the taxonomy used for their reporting, perhaps the organization’s financial structure (departments, cost centers, etc.). Both teams would need to source app codes and project codes from the same place; a shared record repository such as Configuration Management Database (CMDB) to ensure tagging on the FinOps side and reporting on the TBM side are accurate and in sync. FinOps will map cloud products/services to the taxonomy AND tag resources with the app codes, project codes, etc.

With these elements in place, FinOps teams can regularly provide resource cost data that allows the TBM teams to allocate a cloud provider’s costs to the correct infrastructure, platforms, and ultimately applications. With that, cloud costs can be allocated in a manner that is the same manner as its on-premises counterparts.

## Taxonomy and Logical Models

When TBM and FinOps teams collaborate and share data, the overall output of each team can be strengthened. Core in establishing the collaboration requires developing a model that allows the teams to interact as seamlessly as possible.

This starts with identifying shared goals. Whether it is reducing cost or highlighting IT’s value to the business, understanding what are the teams trying to achieve and where there are the overlaps – and gaps – will lay the foundation for strong collaboration between the teams.

These shared goals will lead to common use cases such as chargeback, TCO, optimization, or improved forecasting that FinOps and TBM teams can address together. Some of these are explored later in the playbook, but core to enabling the use cases is collaboratively establishing a shared language or common taxonomy that all parties agree to.

And this is a common challenge when integrating TBM with FinOps: ensuring the two practices speak the same language.

ITFM relies heavily on cost centers and accounts as this is the way corporate finance manages the financial reporting for the whole company. Practitioners need to make sure tagging / account structure and cloud bill reflect the corporate hierarchy, normally represented by cost centers.

Tags are even more important when a TBM or IT product model is implemented. Applications are critical components that collect cost and therefore are leveraged to understand total cost of ownership (TCO). Many companies have struggled to reconcile cloud and on-premises costs to present a unified cost view across technology because the tagging strategy and nomenclature was not aligned with the CMDB structure. Many times the tags set up in the cloud are not consistent with the structure already available on-premises, e.g., Application Family in the cloud vs Application Portfolio for on-premises in the CMDB.

In other cases tags are very useful but there is a limitation driven by allocating shared cost. For example many applications may be part of a platform like a data lake or Kubernetes platform. In this particular example tagging is not enough as from the cloud perspective we will be able to cost the data lake but additional consumption data or logs will be required to allocate the cost to the business unit leveraging the data lake and make them accountable for the charge.

All of this needs coordination across the various teams to make sure the consumers of the service have a good view on TCO that can be used not only to understand cost but also to make the product more efficient and potentially gain competitive advantage in the market.

## Aligning FinOps and TBM Use Cases

This section provides use cases and considerations for creating better alignment between FinOps and ITFM/TBM.

### Reconciling Financial Usage Data

When aligning cloud consumption data it is important to be aware of fundamental timing differences that will exist between both methodologies. FinOps practitioners and tools are used to working with near real time data. By contrast, TBM tools typically work with monthly (or less frequent) data updates. This challenge is most prevalent when tying in usage feed information (e.g., AWS CUR) to the invoice general ledger lines that the TBM team use as their authoritative source of cost.

Depending on the accounting process/latency at your organization you may find that the usage data the FinOps team supplies is one or two months ahead of the invoiced amount being recognized in the general ledger. In this scenario, the TBM team can resolve this by ensuring that the FinOps supplied consumption data is offset/delayed by the required number of months so that it matches the invoiced amount for that accounting period.

Alternatively the general ledger lines for cloud service provider invoicing may be deleted by the TBM team and replaced with the authoritative usage data from the FinOps team for that time period. However, this is not a recommended approach and it breaks a key construct for TBM of always tying back to the general ledger.

The time lag in TBM driven by the ITFM business cycles timing is a challenge and an opportunity for the integration with FinOps. IT Management has learned over the years to “discount” the delay in financial data being presented as they make decisions impacting the business in the present time. FinOps real-time capabilities enhance the support for business decisions with data that is current. The addition of consolidated financial statements (in arrears) and current FinOps data will improve the quality of business decisions that can take advantage of the two.

### Chargeback

As the primary use case for integrating FinOps and TBM, this may feel natural to most practitioners. A common extension, once chargeback processes for cloud infrastructure have been established, is to extend the same concept to include other costs associated with maintaining the public cloud platform that are internal to the organization. The main goal is to provide a fair and equitable mechanism for cost recovery of platform/shared services/SaaS/other vendor costs that are incurred as part of service delivery.

It is important to validate that the receiver of the cloud chargeback is the same entity/person as the service owner defined by TBM. If it is different, the TBM Office and FinOps will need to work together to resolve any ownership disputes. By nature of the visibility required for decision making FinOps chargeback tends to focus on individual application business owners and TBM focuses on the business service owner.

With a well managed FinOps data feed, we expect to be able to identify the application and business line end user as part of our visibility capability – typically using a combination of account and tag information. It is important that these attributes are shared and preserved as part of the chargeback process so that the ITFM/TBM team are aware of the direct ownership of cloud spend and it is not accidentally shared/reallocated as part of any existing allocation rules.

#### Building up a comprehensive set of FinOps and TBM data

**Minimum data supplied by FinOps team** | **Additional recommended fields (along with left)** | **TBM data to supplement even further**  
---|---|---  
Business Owner or Cost Center (the entity that will receive the charge) | Application | Business Org Structure  
Cost | Cloud Service Provider Name | CMDB (Application & Services relationships)  
Amortized Cost | Usage Hours | Reference Taxonomy for Services  
Cloud Service Provider Name  
(in a multi-cloud environment) | Usage Quantity | Relevant Cost Centers  
|  | Relevant Business Contacts and Owners  

It is important to note that chargeback and Total Cost of Ownership (detailed below) are not automatically the same and that there may be fundamental differences that require these use cases to be addressed separately.

The purpose of chargeback is to provide a fair and equitable way of recovering centrally incurred shared costs from the consumers of those platforms, this may be as simple as an even spread / cost weighted cost allocation to specific usage driven recovery. However the scope of this cost recovery is typically limited to the costs incurred by the FinOps / shared platform / Cloud Center of Excellence (CCoE) teams. This scope of cost would typically not constitute a Total Cost of Ownership as it excludes key cost elements that are incurred in other business areas.

By contrast, a Total Cost of Ownership view is also aiming to represent a fair and equitable distribution of shared costs, the scope is much broader as it needs to include other types of cost that contribute to the building and running of a given application / service. The largest of these is typically employee/labor costs that are not necessarily incurred within the FinOps team’s chargeback scope but need to be included to ensure that we are representing all spending that is incurred in order to deliver a given application/ capability.

### Total Cost of Ownership

Total Cost of Ownership (TCO) is often an extension or follow-up from chargeback. Typically, as costs begin to be charged back, or built into a model for chargeback, costs reveal themselves which need mapping and dissecting. This is where FinOps and TBM together can bring a holistic approach to both cloud and IT spend.

TCO is used to appraise full application development and to run cost and profitability models. As such, they need to incorporate a variety of variables.

Regardless of what costs become a part of a TCO, it is important to have normalization between the teams. FinOps data will typically come in variables such as Usage hours, quantity, cost per hour/month, and by a variety of tags (for instance by Application or Business Unit). Unless the tagging strategy has included TBM categories, there will be a need to normalize that data to align with TBM (or vice versa). For example, if TBM is pulling data every 6 months, then ensure that the cloud data pull also spans the same 6 months. Also ensure to clarify on amortization of cloud spend in the instances of commitment based discounts or other non-on-demand cloud services.

FinOps is an iterative practice, and creating a TCO can also be iterative. Instead of spending an inordinate amount of time finding every single cost and accounting for it, start with the largest contenders and incorporate those. With the normalized data between the two sets, it will become clear which areas to focus on. Once those are integrated, continue to expand until all costs are included – and, most likely some hidden costs will be found along the way.

### Forecasting

There are many ways to do forecasting, which vary from industry to industry and even from business unit, program, or project. Traditionally, a TBM team focuses on a top-down strategic approach while a FinOps team focuses on a bottom-up approach. This is largely due to a CapEx (IT) v OpEx (Public Cloud) procurement model and the type of data available from the cloud.

Whether an organization is focused on TBM, FinOps, or both, it is important to ensure all stakeholders are speaking the same language or have an agreed upon unit for forecasting.

In a bottom-up approach, one of the largest challenges in forecasting occurs when engineers, finance, and product owners are providing forecasts in different units. For example: An engineer might provide their forecast in GB/month, a finance person may be looking for cost, or assume it is GB/day, and a product manager may forecast how many widgets are being produced in a month.

In a top down approach the same is likely to occur but with finance or a program manager speaking in # of applications migrating in a year, without taking into account that each application may range in size and complexity.

In both scenarios, ensuring that all stakeholders understand and agree on the taxonomy is critical to success.

Another success measure is required accuracy. According to the [State of FinOps survey](<https://data.finops.org/>), mature FinOps practices report variances of +/- 5%, Finance driven budgets and forecasts may require anywhere between 3-5% accuracy. This may be another area to normalize language, expectations, and metrics as this may be a difficult threshold for FinOps practitioners. Communication and collaboration on this topic will help all stakeholders find a balance.

#### Forecasting for what?

Similar to agreeing on terminology, have a shared understanding of what is being forecasted and why it is critical. A FinOps team is going to be able to provide critical insights into cloud spend and usage, but may not be much help for on-premises expenses.

Similarly, the data being collected will be different depending on factors such as if it is for a specific budget exercise, CapEx purchase or software/license renewal, etc.

For additional information on how to forecast, see [these resources](<https://www.finops.org/assets/?prod_combined-resources%5BrefinementList%5D%5Brelated_capabilities.title%5D%5B0%5D=Forecasting>).

### Migration / Hybrid

TBM organizations play a critical role in determining migration strategies as they are responsible for baselining TCO of resources between cloud, on-premises, and hybrid. TBM dives into a detailed cost analysis based on where and how you’re spending non-cloud IT spend. During cloud migrations, different cloud providers and services will be considered. A critical step is to map current on-premises resources to cloud offerings. Leveraging variable-spend models and FinOps knowledge of cloud, this partnership can unlock cost granularity to perform cost-benefit analysis on cloud. This will lead organizations to better understand and predict future cloud spend and have timely trade-off discussions. These estimates can inform ROI and lead to business decisions that allocate funding on a schedule more closely aligned with actual variable spend. Multiple migration strategies might run concurrently or will need to be prioritized.

During migrations, FinOps teams can track and report on actual vs forecasted spend. Engaging FinOps teams early can help ensure chargeback is processed against the cost center where the budget is allocated. FinOps teams can generate forecasts using predictive models to understand variance against plan. Insights generated by a FinOps team should inform ITFM/TBM of the migration progress and notify key stakeholders of misalignments (budget, scope, timelines).

Post-migration, FinOps teams will engage with migrations stakeholders on optimization recommendations and begin deploying commitment strategies against stable workloads. While FinOps team will now focus on efficiency of the new workloads now running on Cloud; ITFM/TBM should be engaging in these post-migration conversations to begin on-premises asset housekeeping and tracking datacenter retirements.

## In Conclusion

Building a FinOps practice comes with many challenges and finding a partner with intersecting teams like security, procurement and especially ITFM/ TBM will only enhance the adoption. Embarking on a joint endeavor can benefit both practices and support your organizations to make better tradeoffs and unlock the value of technology investments such as public cloud.

Join the conversation in the FinOps Slack [#chat-finops-itfm_tbm](<https://finopsfoundation.slack.com/archives/C032BA3DXAB>) channel. Please post there if:

  * There is an area you would like to see more examples or details
  * You have an intersection story that could be shared

If improving FinOps skills and best practices (and other critical FinOps Capabilities) is of interest, consider the [FinOps Certified Professional course](<https://learn.finops.org/path/finops-certified-professional>). Anyone interested in this topic more, please [join the FinOps community](<https://www.finops.org/join/>) to get access to all the resources available to you.

## Thank you to all our Project contributors

The FinOps Foundation extends a huge thank you to the members of this Working Group that broke ground on this documentation.

### Thank our supporters and interviewees

Without the insights from these amazing community members, this guide would not be what it is today!

  * Juan Jose Jarillo
  * Paolo Baudino
  * Ylanda Hill
  * David Adelkhanov
  * Jeremy Ung

[ ![Larry Advey](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Larry Advey CloudZero ](<https://www.linkedin.com/in/ladvey/>) [ ![Amanda Dalton](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amanda Dalton Deloitte ](<https://www.linkedin.com/in/amanda-dalton-0564a295/>) [ ![Keith Colberg](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Keith Colberg Red Hat ](<https://www.linkedin.com/in/keith-colberg/>) [ ![William Nieusma](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) William Nieusma AgileTrailblazers ](<https://www.linkedin.com/in/williamnieusma/>) [ ![Marisa Banigan](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Marisa Banigan Apptio, an IBM Company ](<https://www.linkedin.com/in/marisa-banigan/>) [ ![Alex Hullah](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Alex Hullah GoldmanSachs ](<https://www.linkedin.com/in/alexhullah/>)

## Table of Contents

  * [Introduction](<#introduction>)
  * [Working at the Intersection of FinOps and TBM](<#working-at-the-intersection-of-finops-and-tbm>)
  * [Exploring Overlaps and Gaps between FinOps and TBM](<#exploring-overlaps-and-gaps-between-finops-and-tbm>)
  * [Common Challenges](<#common-challenges>)
  * [Connections and Integrations](<#connections-and-integrations>)
  * [Taxonomy and Logical Models](<#taxonomy-and-logical-models>)
  * [Aligning FinOps and TBM Use Cases](<#aligning-finops-and-tbm-use-cases>)
  * [In Conclusion](<#in-conclusion>)
  * [Acknowledgements](<#acknowledgements>)
# Rate Optimization

[Framework](<https://www.finops.org/framework/>) / [Domains](<https://www.finops.org/framework/domains/>) / [Optimize Usage & Cost](<https://www.finops.org/framework/domains/optimize-usage-cost/>) / Rate Optimization 

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success_kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

**Driving rate efficiency through a combination of strategic vendor use, negotiated discounts, commitment discounts, and other pricing mechanisms to meet the organization’s strategic, operational and budgetary objectives.**

**Create a commitment discount strategy**

  * Align with Engineering on resources and flexibility requirements
  * Set target discounts on each technology category’s spend and rates

**Support negotiated discounts**

  * Foster collaboration between Procurement and other personas to support negotiations
  * Track historical and projecting future technology category consumption
  * Communicate key technology cost and business drivers

**Manage Commitment Discounts**

  * Determine what discount mechanism types to use
  * Calculate benefits, impact and vacancy
  * Analyze recommendations and report coverage and vacancy
  * Evaluate resource-based, spend-based, and other commitment discount models offered by various technology vendors

**Use other mechanisms to optimize rate**

  * Use discounting mechanisms such as Spot, Marketplace offers, promotional programs effectively
  * Compare recommendations from different optimization approaches
  * Consider using alternative technology categories and locations
  * Architect to leverage cost effective technologies/services

## Definition

Rate Optimization is the Capability used to manage the rates that you pay for the resources you use in each technology category. Cloud cost, in particular, is based on the amount of a resource you use multiplied by the rate that you pay for it. Increasingly, other technology categories such as AI, SaaS, Licenses, data cloud platforms, and even Data Centers include consumption-based services which require attention to a variety of rate optimization levers.  
Organizations manage rates by negotiating discounts with providers of consumption-based services, by purchasing commercially-available, resource-based commitment discounts (Reserved Instances, Committed Use Discounts), by purchasing spend-based commitment discounts (Savings Plans), or by taking advantage of usage-based discounts, special program discounts, or interruptible resources such as Spot compute instances.

Each technology provider has different approaches to negotiated discounts and special programs which affect rates. Negotiated or organization-specific—discounts are often private, covered by non-disclosure rules, and not shared publicly. Be sure to understand your contractual obligations with respect to any of your agreements and follow them. Typically these programs will be managed by the Procurement persona. The FinOps team will play a key role in providing data to inform Procurement about historical and planned cloud usage, and to highlight important cost and business value drivers.

The most important rate management mechanisms for consumption-based services like cloud, are spend-based commitment discounts, primarily Savings Plans, and resource-based commitment discounts, primarily Reserved Instances (RIs) and Committed Use Discounts (CUDs). Many of these discount constructs exist with SaaS, data cloud platform, and license providers as well.

Spend-based commitment discounts and resource-based commitment discounts are the most popular rate optimizations that cloud service providers offer. These discounts allow organizations to commit to using certain resources, resource categories, or an amount of spending over a 1 or 3 year period in exchange for a published, discounted rate. Organizations should evaluate the level of consistently-running resources coverable by a certain discount, and establish purchasing strategies to reach coverage or effective savings rates appropriate for the variability and financial posture of the organization’s use. Discounts are higher the more restrictive the mechanism. In cloud providers for example, a 3 year commitment of a particular size of compute resource in a particular geography will yield a higher discount than a 1 year spend commitment that would cover usage of many compute types in any geography.

A variety of models of RIs, CUDs, and Savings Plans are available to cover Compute resources, but cloud providers also offer these discounts for other types of services as well. They are often more restrictive, but can also offer higher discounts. FinOps teams should consider all rate discount options for the services they use.

In addition to cloud services, many other technology categories will have rate discounting mechanisms to consider. More and more technology is made available on a consumption basis rather than by the seat or license, requiring more attention to the rates of those variable elements of usage.

The FOCUS project’s specification now includes information on contract commitments in a separate dataset. This information when provided by data generators allows FinOps teams to compare and track commitments across providers in any technology category to better understand how to manage rates more effectively.

An organization’s central FinOps team should be the primary driver coordinating purchases of spend-based and resource-based discounts. These discounts are complex to understand, have many parameters, and can be purchased in ways that allow their benefits to cover resources throughout the organization’s technology estate. Committed discounts also can affect the benefits of doing other types of optimization such as Usasge Optimization, Licensing and SaaS use, changing architectures, or sustainability recommendations. The central FinOps team is best positioned to understand all of these optimization options and their interactions and coordinate the best approach with the appropriate personas in any given case. The central FinOps team may not make all the purchases, particularly for RIs for non-compute resources that may only be used by one or a few applications, but they should be tracking all of these purchases on behalf of the organization.

Technology providers and many FinOps platforms and tools include recommendation engines that allow organizations to plan, manage, and track benefits from these types of discounts. There are also vendors who specialize in managing commitment discount portfolios, even as a managed service. The [FinOps Landscape](<https://www.finops.org/landscape/?prod_TOOLS_SERVICES%5BrefinementList%5D%5Bcapabilities%5D%5B0%5D=Rate%20Optimization>) allows organizations to search for FinOps tools and service providers appropriate to this task.

Other rate optimization can include the use of interruptible virtual machines (mostly called Spot instances), which each of the clouds offers. Spot instances are essentially spare capacity offered at a discounted rate where the cloud provider may recall the instance if purchased by another user at a non-spot rate. Use of spot instances for compute has important implications to the architecture of the systems using them, so FinOps team should consult with Engineering teams to consider use of Spot, and assist with understanding where it will provide value in excess of the risk and architectural work required. Note: Spot can also be considered usage optimization as it does involve changing the workload to support and utilize the offering.

Rate Optimization has a very strong interrelationship with [Usage Optimization](<https://www.finops.org/framework/capabilities/workload-optimization/>). Recommendations to purchase commitments for resources to reduce their rate may conflict with recommendations to change the type or size of resource running in a system. This causes two primary problems. First, if a FinOps team is looking at the potential benefit of taking actions in either category, they may double count potential cost avoidance. Second, if a FinOps team takes action on both of these recommendations they may end up having to pay for a year for resources that no longer exist in their original form. It’s important to note that commitment discounts are not resources. They are similar to coupons that _can cover_ certain types of resources that are running. If no resource is running which matches the type of the commitment, the organization still pays for the resource.

In an ideal world, all usage optimization would be done prior to rate optimization actions, but in reality there are constraints on engineering teams that can make that difficult. The FinOps team will be responsible for doing enough of both to strike the balance of value creation for the organization. It is important to avoid waiting for technology use to be fully optimized prior to considering rate optimizations as this will almost always lead to paying more than a balanced approach.

Similar conflicts may exist between sustainability and Rate Optimization where buying reservations for resources that are allowed to run in an unoptimized state for years may increase carbon impact unnecessarily. An optimal approach only looks to purchase rate discounts for the level of resources that is actually required at any given time.

## Maturity Assessment

####  Crawl 

  * A very basic rate optimization strategy is in place due to simple or limited technology usage
  * Procurement persona manages any contractual arrangements with minimal input from Finops teams
  * Analysis and purchases of commitment discounts may be performed by multiple teams who own their own budgets and take action without coordination
  * Decisions to purchase commitment discounts is done in an ad hoc way when spending increases significantly
  * Decisions about discount parameters made without full collaborative discussion with Finance, Procurement and FinOps teams
  * Coverage rates or effective discounts are likely very low and raising them would not be a material financial impact to the business
  * Situational use of interruptible Spot instances

####  Walk 

  * A more robust rate optimization strategy is in place due to a more complex mix of services or Engineering teams
  * Procurement persona works in coordination with the FinOps team to understand likely demand for cloud services over time in making purchases and negotiating
  * Analysis of purchase commitments and reporting of discounts conducted by the central FinOps team
  * Primarily purchasing commitment discounts for compute or specific services important to the organization
  * Centralized analysis and purchasing occurs in a regular cadence with input from both Engineering and Finance
  * Alerting put in place when commitment utilization declines, stops being used, or needs attention due to deviation from established norms
  * Regular evaluation of long term business technology plans
  * Constant evaluation of new releases/updates from Cloud Providers
  * Regular recommendation of Spot instance usage where appropriate

####  Run 

  * A robust rate optimization strategy is in place outlining automation and thresholds, and establishing KPIs for effective management of rates
  * Frequent purchase cycles occur, triggered by automated reporting
  * Automated allocation of discounts according to business requirements
  * Metrics driven management of when to make changes and a bi-drectional connection between rightsizing/utilization/refactoring and the proper commitment type and term
  * Regular reporting occurs on KPI’s
  * Incorporation of Spot instance usage into established use patterns where appropriate
  * FinOps team implements automation to identify use patterns that would benefit from scaling or Spot use
  * Incorporation of Licensing & SaaS, Sustainability, and Architecting guidance when making rate optimization decisions

## Functional Activities

####  ![](https://www.finops.org/wp-content/uploads/2024/03/FinOps-Practitioner.svg) FinOps Practitioner 

**As someone in the FinOps team role, I will…**

  * Manage and oversee the central rate optimization activities overall, including discount purchasing
  * Deeply understand all of the options and impacts of all available rate optimization mechanisms, and assist all other personas to understand them to the level required
  * Work with Procurement to provide support in understanding past cloud use and future planned use, and important or impactful services use
  * Provide support to all personas to report on and analyze cloud costs appropriately for their persona
  * Create and manage the rate optimization strategy for the organization

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Engineering.svg) Engineering 

**As someone in an Engineering role, I will…**

  * Collaborate with the FinOps team to provide information on current and future resource use plans, notifying them of changes that will substantially impact my usage, and highlighting important services
  * Understand and incorporate discounted cost data into my reporting and analysis as appropriate in the rate optimization strategy

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Finance.svg) Finance 

**As someone in a Finance role, I will…**

  * Work to understand the various rate optimization strategies available, their impacts and benefits
  * Work closely with FinOps and Procurement personas to help set guidelines for the Rate Optimization strategy, reporting guidelines, and allocation of discounts
  * Model and support decision making with respect to prepayment for discounts, purchase levels, pre-approvals, and budget cost center impacts

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Procurement.svg) Procurement 

**As someone in a Procurement role, I will…**

  * Work to understand the various rate optimization strategies available, their impacts and benefits
  * Work closely with FinOps, Finance and Leadership personas to help set guidelines for the Rate Optimization strategy, reporting guidelines, and allocation of discounts
  * Work to understand clearly what current and future cloud use looks like and which services are critical or impactful
  * Work with vendors to negotiate agreements where appropriate

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Product.svg) Product 

**As someone in a Product role, I will…**

  * Understand the cost and value impact of rate optimization activities
  * Work with the FinOps team to identify important or critical cloud services that can provide significant impact or benefit to my products
  * Coordinate with Engineering teams to understand impacts of spot use or scaling
  * Use appropriate pricing metrics when budgeting and analyzing my products to include (or not include) discounts as specified in the rate optimization strategy

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Leadership.svg) Leadership 

**As someone in a Leadership role, I will…**

  * Work to understand the impact and importance of the various rate optimization mechanisms
  * Work with Finance and FinOps teams to establish strategy and policies regarding rate optimization
  * Support central purchasing of commitment discounts, and promote collaboration with the FinOps team across all personas

####  ![]() Allied Personas 

**As someone in an Allied Persona role, I will…**

  * Understand the impact of rate optimization activities on my scope of responsibility
  * (ITAM) Work with FinOps team to coordinate on impacts of ITAM activities on rate optimization mechanisms

## Measures of Success & KPIs

  * Ability to measure the overall effective savings rate of Cloud Rate Optimization efforts for both technology-based and monetary-based commitment discounts
  * For resource-based commitment discounts, maintaining a utilization upper-waterline around 80% for steady-state usage
  * For spend-based commitment discounts, purchasing commitments with at least 90% savings per dollar of commitment for an established threshold of peak variable usage
  * Analysis and purchase decisions for commitments are made in the context of interruptible/batch/highly variable resource use
  * Ability to identify unused commitment discounts with daily resolution
  * Ability to notify stakeholder teams about expiring commitments with sufficient time to plan a new purchase
  * Purchasing of commitment discounts are viewed as investments by stakeholder teams like Execs/Productment/Finance; the investment is the cost of the commitment over the entire period, and the return is the savings provided
  * Hybrid purchasing strategy that Aligns commitment terms with infrastructure usage patterns, characteristics, and lifecycle
  * Purchasing commitments that deliver more than 10% return on investment
  * Mitigate risk by purchasing commitments with a break-even within 9 months
  * Analysis and management is done centrally using a holistic view of the organization’s cloud estate and not at each individual cloud sub-account level
  * Analysis for making commitment purchases is supplemented with planned infrastructure and/or resource capacity changes
  * Commitment purchases are spread over the year to allow for flexibility by always have some % of commitments expiring; this enables re-evaluation of commitment levels at regular intervals informed by forecasted future usage
  * Analysis and purchase decisions for commitments are made in the context of any negotiated commercial discounts offered to enterprises by the cloud service provider in exchange for overall cloud spend
  * Altogether, the implementation of these strategies drives an organization’s Effective Savings Rate (ESR). It is important to note that under utilization of a commitment discount would also negatively impact ESR as would significant usage not covered by discounts.

## KPIs

#### Commitment Utilization Score

Measures the health of contractual agreements by tracking the “burndown” of pre-purchased capacity against actual consumption. This provides a clear signal for renewal negotiations. A value near 100% indicates perfect forecasting and rate optimization; significantly lower values signal “shelfware” (wasted capital), while values exceeding 100% reveal exposure to expensive on-demand rates. 

Read more

#### Consumption versus Commitment

Measures how actual SaaS usage compares to contracted or committed consumption levels by relating consumed units to the committed amount. The formula quantifies the degree to which usage is tracking against contractual expectations over a given period. Values above the committed level indicate potential overage risk or faster-than-planned consumption, while lower values suggest underutilisation and

Read more

#### Effective Savings Rate Percentage

Return on investment metric of all commitment discounts.

Read more

#### Percentage of Commitment Discount Waste

The percentage of commitments not applied to on-demand spend.

Read more

## Inputs & Outputs

### Inputs

  * [Usage Optimization](<https://www.finops.org/framework/capabilities/workload-optimization/>) recommendations
  * [Rate Optimization](<https://www.finops.org/framework/capabilities/rate-optimization/>) recommendations
  * [Architecting & Workload Placement](<https://www.finops.org/framework/capabilities/architecting-for-cloud/>) recommendations
  * [Sustainability](<https://www.finops.org/framework/capabilities/cloud-sustainability/>) recommendations

### Outputs

  * [Rate Optimization](<https://www.finops.org/framework/capabilities/rate-optimization/>) Strategy
  * [Rate optimization](<https://www.finops.org/framework/capabilities/rate-optimization/>) recommendations

[View former Managing Commitment Based Discounts page](<https://www.finops.org/framework/previous-capabilities/manage-commitment-based-discounts/>)

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success_kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

##### Related Assets

[ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) Commitment Discounts Overview ](<https://www.finops.org/wg/commitment-based-discounts-overview/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2033'%3E%3C/svg%3E) Cloud Service Provider Commitment Discounts Offerings Matrix ](<https://www.finops.org/assets/cloud-service-provider-commitment-based-discounts-offerings-matrix/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2032'%3E%3C/svg%3E) How to Use a "Green/Red" Approach to RI Buying ](<https://www.finops.org/assets/the-green-red-zone-approach-to-ri-buying/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) Advanced Approach to Prepay Amortization and Rate Blending (Intuit) ](<https://www.finops.org/assets/advanced-approach-to-prepay-amortization-and-rate-blending-intuit/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2032'%3E%3C/svg%3E) Centralizing Prepaid Cloud Discount Reservations (Koch Industries) ](<https://www.finops.org/assets/centralizing-prepaid-cloud-discount-reservations-an-it-finance-managers-story-by-koch-industries/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) How to Decipher Azure Amortized Cost (Shell) ](<https://www.finops.org/assets/how-to-decipher-azure-amortized-cost-shell/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) Effective Savings Rate (ESR): The Ultimate FinOps Rate Optimization Metric ](<https://www.finops.org/assets/effective-savings-rate-ultimate-finops-rate-optimization-metric/>)
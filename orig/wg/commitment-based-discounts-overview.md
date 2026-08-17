# Commitment Discounts Overview

**Summary:** Different cloud providers offer various types of commitment-based discounts. Each brings different benefits based on term length, upfront cost, and other technical details. Identify need and fit by comparing types, rates, terms, and associated technical details of the commitment, and inform stakeholders of the long-term stakes behind a commitment-based discount. Next, iterate with stakeholders to fine-tune the technical considerations and secure final approval before purchasing the commitment discount. Proactively monitor workload coverage and commitment utilization continuously throughout the lifecycle of the discount in order to evaluate commitment-based discount renewal with stakeholders.

## Table of Contents

  * [Initial Purchase Considerations](<#initial-purchase-considerations>)
  * [Purchase and Management Strategy](<#purchase-and-management-strategy>)
  * [Personas](<#personas>)
  * [Intersections with Other FinOps Capabilities](<#intersections>)
  * [Measures of Success](<#measures-success>)
  * [CSP Nuances section](<#csp-nuances>)
  * [Acknowledgments](<#acknowledgments>)
  * [Appendix](<#appendix>)
    * [Commitment Breakeven Point](<#commitment-breakeven-point>)
    * [Optimal Coverage Point](<#optimal-coverage-point>)
    * [CSP Commitment Offerings Matrix](<#csp-commitment-matrix>)

As Cloud Service Providers (CSPs) have matured, they have expanded their offerings beyond the traditional pay-as-you-go model. Today, cloud providers have a variety of approaches to encourage customers to commit their resources (usage and spend) in return for increased service discounts, in some cases up to 75% of the on demand price. While you can privately negotiate custom discounting with providers, this paper will address the publicly available options available through standard purchasing from the three largest CSPs. We will call these options [Commitment Discounts](<https://www.finops.org/assets/terminology/#commitment-discounts>).

Depending on the CSP and the cloud services used, the commitment may be based on the upfront payment for a certain number of resource units, time units, or monetary value, with various payment options and timeframes. We will refer to commitments of monetary-value as _spend-based commitments_ , and commitments of resource units as _resource-based commitments_ :

  * **Spend-based commitments** provide a discount in exchange for a commitment to a certain amount of spend on a product or service. The most common example of this type of commitment is a Savings Plan (SP) from Amazon Web Services (AWS) and Microsoft Azure or Flexible Committed Use Discount (Flex CUD) from Google Cloud Platform (GCP).
  * **Resource-based commitments** provide a discount in exchange for a commitment to a certain amount of usage on a product or service. The most common example of this type of commitment is a Reservation from AWS/Azure or Commited Use Discount (CUD) from GCP.

Commitment Discounts have provider-specific rules and interactions, and are able to be managed through CSP native dashboards and billing/usage data. Understanding the details involved with each CSP offering is necessary for effective management of Commitment Discounts. Commitment Discounts play an important role in an organization’s ability to maximize the value of dollars spent in the cloud and manage the pricing of the services it consumes.

### Commitment Discounts Background

Cloud Service Providers build data centers and services and then sell time and usage of those resources to paying customers by the second, minute, or hour. CSPs have a high risk of having too many or too little physical servers at any given time. That operational risk is priced into a risk premium that is included in the on-demand rates for cloud services.

As a result, Commitment Discounts were introduced to serve as a mechanism for CSPs to have a guaranteed income stream while customers benefit from lower costs for their eligible infrastructure in exchange for their commitment. Generally, the more specific the commitment, the higher the discount that will be available.

Commitment Discounts are financial instruments, allowing companies to monetize their knowledge of the future (forecast). By knowing the usage pattern of certain instances, or other resources in your organization, you can take advantage of this savings lever.

When evaluating how Commitment Discounts play a part in reducing cloud spend:

_Cloud Spend = Usage * Rate_

Usage is a variable sensitive to engineering and technical adjustments. Rate changes require pricing changes or financial adjustments. Commitment Discounts make it possible to change rates in a centralized manner for services consumed across organizations.

It is important to note that Commitment Discounts may not be applied to a specific instance in your organization, but are applied by the Cloud Service Provider as part of a consolidated billing process and internal CSP discounting rules. If there are multiple types of commitments, the order in which they are applied varies depending on the provider and commitment type. See the [vendor-specific nuances section](<#csp-nuances>) or the [Comparison Matrix](<https://docs.google.com/spreadsheets/d/1qNrl0p0Y_iZ5qfHRQWJH8mx2z_TdYlFefEABNIQ2SKA/edit?usp=sharing>) to see how discounts get applied for each of the three main vendors.

### Scope of Paper

This paper’s intent is to educate FinOps practitioners on what Commitment Discounts are, how they work, and their associated nuances. Throughout the paper, publicly available information from the three biggest CSPs (AWS, Azure, GCP) will be presented, but private, third-party, or custom pricing will not be discussed. After reading this paper, a reader should understand what Commitment Discounts are, specific terminology, considerations for purchasing a Commitment Discount, how to begin a Commitment Discount strategy & manage Commitment Discounts, how a Commitment Discount strategy interacts with other personas and FinOps Capabilities, and measures of success across the Crawl, Walk, Run maturities.

This is intended to be a whitepaper with general guidance and not a playbook with specific guidance or detailed recommendations for strategies.

## Initial Purchase Considerations

In this section we will cover at a high level common factors to consider while making a Commitment Discount purchase. As a steward of organizational funds, it is a practitioner’s responsibility to consider all stakeholder impacts. Examples include organizational capabilities, liquidity, and ongoing [Usage Optimization](<https://www.finops.org/framework/domains/cloud-usage-optimization/>) efforts. It is important to have an organization-wide look into the engineering plans all teams are executing and consider how their needs will evolve, both during and after purchasing Commitment Discounts.

### Risk Tolerance

Taking on term commitments, typically of 1 or 3 years, adds the risk of over and under committing to Commitment Discounts, particularly when durations are not flexible. In most organizations, risk takes the form of under-utilized commitments, wasting financial resources. Your organization’s risk tolerance will heavily influence the way in which your commitments are purchased and managed.

You can start to quantify the risk of under-utilized commitments by multiplying dollars per hour committed by the total hours committed.

_$/hour committed * total hours committed = Total Commitment $_

This value represents the potential wastage from a completely unutilized commitment, whose risk depends on the underlying workloads and technical strategy. We will cover calculations to more accurately determine consumption risk in a later section. Common strategies to mitigate high risk include:

  * Choosing a lower coverage percentage
  * Choosing a shorter commitment term
  * Choosing Commitment Discounts with more flexibility, but lower discounting

Some of the below trade-offs will enable you to find the best fit for your organization:

  * Term – Commitment Discounts require you to commit to a term, usually 1 or 3 years, with the 3-year option typically providing higher savings in return for the duration of spend on a particular resource
  * Specificity of Commitment – More resource-specific commitments tend to provide higher savings. However, higher specificity increases the risk of underutilization as technical requirements change. To mitigate the risk of cloud resources going unused, more flexible commitments such as Savings Plans or Flexible CUDs are available. Additional organization specific remediation options may be available. Look to the [CSP Commitment Discounts Offerings Matrix](<#csp-commitment-matrix>) for publicly available options.
  * Compliance with Existing Contractual Commitments – Consider how the financial impact and duration of the commitment interact with your organizational contracts. If your organization has a contractual minimum spend commitment, consider how any savings might put you at risk of falling out of compliance. Additionally, how might extended commitment durations impact your organizational contracts?

### Available Funding

Commitments have far reaching stakeholder impacts because they generally allocate material amounts of future working capital. Even if you do not pay for the commitment upfront in one lump sum, it is important to remember that commitments paid monthly have the effect of locking away capital potentially needed in other investment areas. Not all commitments are transferable or changeable – can your business stay resilient in a dynamic cloud environment? Some organizations choose to handle long-term commitments similarly to capital expenses, extending the impact of cloud commitments to the balance sheet. Support or develop a strong capability within Finance and Accounting to understand the cost of capital and the business impact of pre-allocating dollars to infrastructure.

### Purchase Timing

In this section, we’ll cover timing factors related to purchasing Commitment Discounts.

Consider whether there is a certain time of the year that aligns better to the purchase of commitments. Do you have a preference for the term? Generally, your decision on term will be based on these considerations:

  * Is your organization undergoing dynamic architectural changes? Is the direction well documented and easily forecastable by existing capabilities, to support longer commitment terms?
  * Does your organization support purchasing decisions during specific periods of the budget cycle?
  * Are your organization’s treasury operations aligned to frequent small commitments, or fewer and larger purchases?

### Other Considerations

Your approach to [Commitment Discounts](<https://www.finops.org/framework/capabilities/manage-commitment-based-discounts/>) will evolve as you move from [Crawl, to Walk, to Run](<https://www.finops.org/framework/maturity-model/>). Since this capability has interdependencies on other [FinOps Domains](<https://www.finops.org/framework/domains/>), you and your organization’s FinOps level of maturity will play a large part in defining challenges and tactics. For example, Crawl stage [Resource Utilization](<https://www.finops.org/framework/capabilities/utilization-efficiency/>) capability can make it difficult to evaluate the effectiveness of your commitment strategy. Overall, is your organization able to leverage other capabilities to help you make an informed decision? Even at the earlier stages of maturity, we would advise starting with small, conservative actions rather than waiting until every domain is at the Run stage.

Below are questions that will help highlight the interdependencies present in your organization. Keep these in mind and we’ll revisit more detailed strategies for scaling capabilities in a later section:

#### Should I value high utilization or some other metric?

It is important to understand that a commitment can be on-average underutilized but still generate savings. Illustrating this concept has dependencies on understanding your [cloud usage](<https://www.finops.org/framework/domains/understanding-cloud-usage-and-cost/>) and we provide some calculations to help later in this paper. We recommend sharing your analysis and logic with stakeholders for knowledge sharing but also to share feedback and help iterate for increased accuracy.

#### Is workload coverage or discount percentage more important?

Goals of a commitment program will shift based on the disparate maturity of capabilities in an organization. If understanding resources usage and utilization is not yet a mature practice, you might find it more effective to concentrate efforts on first broadly covering a high proportion of workloads, generating savings earlier. Conversely, strong understanding of resources and their usage will enable your organization to fine-tune reservations and maximize discount percentages with more specific resource commitments. Good practice is to balance these philosophies with organizational capability and scale accordingly.

#### What level of accountability for spend exists in my organization?

If you have easily identifiable owners for your applications in the cloud, it becomes easier to assign responsibility for spend. With that responsibility, it is easier to have a conversation regarding a commitment for their usage or budget. Having the right reporting mechanisms built on top of [showback](<https://www.finops.org/framework/capabilities/analysis-showback/>) will help with continuous alignment by showing their savings, coverage, and any waste.

#### How does my organization make and communicate purchase decisions?

Commitments often require approval from a variety of parties. Are there any impacted stakeholders who are not part of the approval process? Formalizing a [decision structure](<https://www.finops.org/framework/capabilities/decision-accountability-structure/>) for commitments will increase purchase confidence and speed, but also alignment on downstream impacts such as technical resource selection and usage.

#### How well can my organization forecast usage and utilization?

Organizations can spend endless cycles optimizing their cloud consumption, constantly chasing the changes in their cloud environments. Consider your organization’s ability to [measure usage and capacity](<https://www.finops.org/framework/capabilities/data-normalization/>). Making commitments with little ability to measure these areas risks over-committing resources. However, waiting until extensive analysis is accurate and 100% optimized wastes potential savings over time. After preliminary usage analysis, and before capabilities for extensive analysis are developed, it can be beneficial to execute Commitment Discounts to cover reasonably stable and growing workloads, minimizing wasted savings opportunities.

#### How much time will I need to dedicate to Commitment Discount management?

Managing Commitment Discounts can be a full-time responsibility! Most practitioners will need to balance other responsibilities as well. It helps to know that increasing management fidelity beyond your organization’s near-term capability will have marginal savings returns. Alternatively, assess what can be accomplished with a reasonable amount of effort, and scale upwards from a strong foundation.

A FinOps practitioner can coordinate and forecast usage estimates across your organization by engaging with other stakeholders and product/team leadership. Forming a cyclical cadence for these processes will create stronger alignment between demand and purchase signal, maximizing savings rate.

Without a dedicated team, using resource-agnostic spend-based commitments such as Savings Plans or FlexCUDs can reduce required monitoring and cyclical purchase decisions. Increasing scope of coverage or reducing commitment thresholds will reduce your risk to unforeseen business or technical changes.

With a dedicated FinOps practitioner, you can launch more thorough analysis and determine viability of resource-specific commitments such as Reservations, Savings Plans, and CUDs.

If FinOps resources are limited you may consider outsourcing Commitment Discount management through 3rd party tooling. Many FinOps teams that have bandwidth will also attempt to use open-source tooling or build their own automated management methods and cadences.

## Purchase and Management Strategy

After the initial purchase, the nature of Commitment Discounts require a cyclical and scalable purchase process. As you develop this strategy, it is important to consider how you will monitor Commitment Discounts over their lifetimes and how you will handle their expirations. Building on capabilities mentioned in the previous section, you will find success through cross-functional collaboration to enable regular and frequent purchases and transparency for all stakeholders. First, we’ll cover foundational concepts that will assist you to determine the path forward for your organization.

### Commitment Discounts and the FinOps Phases

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20750%20683'%3E%3C/svg%3E)

At a high level, here is a timeline of actions taken throughout the lifetime of a Commitment Discount, reflecting the previous diagram:

  1. Identify need for a rate optimization (START HERE)
  2. Compile proposals for types of Commitment Discount and associated details
  3. Iterate with stakeholders and fine-tune technical considerations such as SKU and demand
  4. Receive approval from approvers and purchase Commitment Discount
  5. Monitor workload coverage, commitment utilization, communicate cost and usage data
  6. Before expiration, evaluate renewal with stakeholders by returning to step 2

### Commitment Breakeven Point

The Breakeven Point (BEP) is the estimated length of time to pay off the entire cost of a Commitment Discount (any upfront and ongoing charges) solely from the savings provided by that commitment. The savings component generated by a Commitment Discount is derived from the discount and the utilization rate.

Once the Breakeven Point is reached, the Commitment Discount has been fully paid off and cannot itself generate a net loss, regardless of utilization after this point. For more information about Breakeven timelines and calculating the BEP, see the “Commitment Breakeven Timeline” section in [the Appendix](<#appendix>).

### Optimal Coverage Point

The most conservative Commitment Discount strategy is to purchase the minimum amount necessary to cover the troughs of workload fluctuations. However, this strategy also leaves opportunities on the table, because as coverage expands, two phenomena occur. Each additional unit of coverage beyond the minimum increases waste when left unutilized, but also discounts additional workloads previously uncovered. Depending on usage behavior, it is possible that the additional discounts on longer usage patterns are greater than the shorter periods of waste. This can be true up until a point where the added waste of unutilized coverage surpasses the additional savings from covered usage. Beyond this point, additional coverage leads to diminishing savings or even reduction in savings, making it important to be able to identify the threshold when total savings reach their maximum level. (For more information about optimal coverage, see the “Optimal Coverage Point” section in [the Appendix](<#appendix>).)

### Managing Commitment Discounts – In Practice

Immediately after purchase, responsibilities expand to include evaluating commitment effectiveness in addition to watching for additional opportunities for savings. You may find activities include monitoring utilization, taking action against significant underutilization, and preparing for renewal at term-end. This section will help you create effective management structures and some related considerations.

#### Beginning a Commitment Discount Strategy

  * Keep in mind all of the considerations mentioned in the [Initial Purchase Considerations](<#initial-purchase-considerations>) section
  * Validate how your Cloud Service Provider applies discounts and their order-of-operations, as it may impact where in your Cloud Hierarchy the commitment is purchased. See [CSP Nuances](<#csp-nuances>) section or the [CSP Commitment Discounts Offerings Matrix](<#csp-commitment-matrix>) for more details.
  * Clearly communicate how metrics such as costs and savings will be reported or charged back 
    * While this will evolve as you learn what works for your organization, alignment at the start will help prevent bill-shock and other roadblocks
  * Execute! Regardless of your FinOps maturity, it is recommended to start with a small purchase to help the FinOps personas get some first-hand learning of how Commitment Discounts get applied, represented in billing data, and communicated to stakeholders

#### Commitment Maintenance

  * Reviewing the commitment utilization with collaborators on a regular cadence (i.e., monthly) will add a valuable check on demand signals and help address any resulting issues in a timely manner 
    * This also serves to increase organizational mindshare of resource usage and increase accuracy of event forecasts with material impacts to utilization
  * If utilization has dropped to a point of concern, remember to consult the Breakeven Point and other KPIs for the FinOps team before deciding what comes next
  * Depending on the vendor the commitment is with, you may be able to return, exchange, or sell the commitment if it will continue to go unused (see the _[Offerings Matrix](<#csp-commitment-matrix>) for details_)

#### Renewal policy

  * Assuming you are not using a tool to manage Commitment Discounts, FinOps teams will need to evaluate whether or not to renew a commitment as it comes close to expiring
  * Factors for renewing could include the past 60-90 days of usage which show that usage has not decreased and communication from the teams that there are no major changes expected
  * Factors for not renewing could include incentivizing teams to move off of legacy infrastructure or change platforms in order to receive a discount from utilizing current versions before purchasing new commitments for the current versions
  * The renewal will need to get approval from stakeholders to ensure the usage is applicable to the new commitment term

#### Exchange and Disposal

  * Depending on your CSP and the nature of your Commitment Discount, you may have the ability to exchange or terminate the commitment prior to the original end date. These mechanisms offer specific methods of remediation for under-utilization and may be deprecated at any time. You can find more detailed information in the upcoming playbook.

#### Tools

  * Third party fee-based tools are commercially available to automate purchasing, converting, or modifying Commitment Discounts 
    * Will require specific CSP permissions that must be reviewed and accepted by the organization’s security and risk policies

## Personas

Establishing a mature FinOps framework within an organization will require many [personas](<https://www.finops.org/framework/personas/>) with varying levels of engagements. Seamless communication and reporting available to all personas will be important, as each will play a unique role in transitioning from the Crawl phase to Run phase.

### FinOps Practitioner

FinOps practitioners bridge business, IT and finance teams by enabling evidence-based decisions in near-real time to help optimize cloud use and increase business value. The FinOps Practitioner will formulate Commitment Discount recommendations for the organization through a coordinated effort with all other personas within an organization.

### Executives

Executives, such as a VP/Head of Infrastructure, Head of Cloud Center of Excellence, CTO, or CIO, focus on driving accountability and building transparency, ensuring teams are being efficient, and not exceeding budgets. Rate optimization through Commitment Discounts will help reach these goals. The Executives will be a key champion in establishing and promoting a central process for purchasing Commitment Discounts on behalf of the greater organization.

### Business/Product Owner

These participants are usually Business and Product Owner team members, such as a Director of Cloud Optimization, Cloud Analyst, or Business Operations Manager. The business/product owner will help to better guide forecasting at the business/product level, and provide insight into the changes occurring in their cloud usage. They will be instrumental in avoiding overcommitments using Commitment Discounts.

### Engineering and Operations

Engineers and Ops team members, such as Lead Software Engineers, Principal Systems Engineers, Cloud Architects, Service Delivery Managers, Engineering Managers, or Directors of Platform Engineering, focus on building and supporting services for the organization. They will most likely be launching and configuring the resources that receive the discounts from Commitment Discounts. It is important for this persona to understand the impact that changes will have on existing Commitment Discounts, and provide additional guidance with regards to future Commitment Discount needs or changes.

### Finance

Finance members, including Financial Planners, Financial Analysts, Financial Business Managers/Advisors, use the reporting provided by the FinOps team for cost allocation, showback allocation, and forecasting. As Commitment Discounts may introduce additional challenges within showback/chargeback models, it will be required to work with this persona for them to better understand the way in which Commitment Discounts are billed, applied towards usage within an organization’s cloud environment, and the savings Commitment Discounts are generating for the organization.

### Procurement

Procurement Analysts, Sourcing Analysts, Vendor Management or Directors within Procurement teams use insights provided by the FinOps team for identifying sourcing and purchasing of product and services within a Cloud Platform Vendor. Procurement will be involved in discussions about purchase options to use, acquisition of tooling to assist the organization in understanding their discounts, or platforms that assist in the management of Commitment Discounts. Procurement will seek the highest ROI for any Commitment Discounts or tooling an organization adopts, including rate negotiation for any Enterprise level cloud usage.

### ITAM Leader / Practitioner

ITAM team members such as IT Asset Manager, Software Asset Manager, IT Asset Analyst, IT Asset Administrator, IT Asset Specialist, IT Asset Compliance Manager, and IT Asset Procurement Specialist focus on maximizing the business value of all assets in the organization. It is also their responsibility to manage risk related to asset optimization and contract compliance. With the risks of over- and under-commitment using Commitment Discounts, this persona will be interested in continuous forecasting, utilization, purchasing, and monitoring of the Commitment Discounts.

## Intersections with Other FinOps Capabilities

To guide you through the myriad of potential interactions with FinOps Personas and Capabilities, below are some common examples of collaboration and execution.

### Establishing a Decision & Accountability Structure

The path to procure a Commitment Discount includes many roles. Organizations should clearly define the roles and responsibilities for this process to ensure all relevant stakeholders are aware of the commitment, risks, and purchase details as necessary. Regardless of your strategy, make sure there is clear documentation to show the roles and responsibilities across the organization.

There are many variations of acceptable decision structures for Commitment Discount analysis and procurement. Below are a few brief examples.

  * FinOps Teams are provided with a set amount of money every month/quarter/year from a central budget and make commitments as needed
  * FinOps Teams make recommendations for commitment purchases and gain approvals from engineering, product, and finance before executing the purchase

Accountability structures can vary from team to team, the key distinction lies in which part of the organization is accountable for the commitment and any associated waste.

  * When centralized FinOps teams are accountable for Commitment Discounts, commitments can be handled as a portfolio, reducing risk of siloed purchases. KPIs such as utilization, coverage, and weighted cost of capital can be fairly managed and communicated. (_See_[ _KPIs section_](<#measures-success>) _for more information.)_
  * When individual engineering teams are accountable for associated waste, they have increased motivation to help validate forecasting, and align demand to usage, maximizing efficiency

When creating the decision and accountability structure, consider the following for your organization:

  * Procurement Documentation: In allocating capital through commitments, are Purchase Orders or other documents required? If so, where in the organization do they originate, and how long does the end-to-end process require?
  * Staffing and Approval: What approval hierarchy is needed to execute a commitment? Can these approvals be automated based on the nature of the commitment?
  * Decentralization: If decision stakeholders are scattered throughout an organization, can a central team manage all commitments while maintaining an appropriate level of visibility to resource consumption and engineering strategy?

### Cost Allocation, Chargeback & Finance Integration

Commitment Discounts can apply across an organization’s hierarchy based on provider-specific nuances that do not align with the organization-specific consumption of relevant resources. Organizations will need to be aware of where within the cloud organizational structure commitment purchases are made and where those same commitment discounts are applied or consumed and then determine if the charges need to be redistributed for chargeback or showback.

Finance and Engineering personas can collaborate to strategically purchase Commitment Discounts for certain resources and communicate the cost differential against non-discounted resources. This encourages engineering teams to stay involved in the decision-making process and demonstrate value through changes such as deprecating older and less performant instance types.

Other organizations choose to share discount charges equally across the organization regardless of where the discounts were actually applied on the bill. This is common when the decision making process is centralized and/or purchases are made at the payer accounts.

Alternatively, some organizations take the savings from the Commitment Discounts and use them to pay for the FinOps team’s operational costs.

For Partial or All Upfront Commitment Discounts, your Financial and Accounting teams may introduce Capital Expenditure concepts and require different treatment of these specific purchases.

### FinOps Education & Enablement

Product owners, engineering teams, or finance professionals may not have a deep understanding of Commitment Discount offerings. It is the responsibility of the FinOps practitioner to help all relevant stakeholders have an understanding of the Commitment Discount purchase opportunities including the benefits, risks, restrictions, etc. to ensure they are properly informed before being asked to provide input on the decision.

### Cloud Policy & Governance

Generally speaking, successful Commitment Discount practices are centralized with the FinOps group for the entire organization and do not allow engineering teams to purchase their own Commitment Discounts. This can be achieved by controlling the IAM or other security roles that are able to make Commitment Discount purchases.The main driver behind centralizing a discount program is to maximize the benefits of the commitments across the organization and to be more flexible as the cloud footprint changes. A centralized team can also ensure capacity and performance engineering teams have evaluated targeted purchases where applications may require infrastructure that is not common across the organization.

## Measures of Success

Successful management of Commitment Discounts will look different for different organizations. The following are some guidelines on what strategies may look like at different maturity levels, and how to know if you are on the right track

### Best Practices

| **Crawl** | **Walk** | **Run**  
---|---|---|---  
**Timing** | Infrequent or ad hoc purchasing patterns | Regular or semi-regular purchase pattern | Regular & frequent purchase cycles occur  
**KPIs** | Little to no tracking of commitment utilization during the term/useful life or other related KPIs | Ad hoc reporting on KPIs Alerting in place for decline in commitment utilization | Regular reporting & continuous monitoring of KPIs  
**Purchase Strategy** | Purchases may be made in ways that do not provide the greatest overall discounts to the business Purchases are made in a reactive manner instead of for sound business reason Reactive to expiring Commitment Discounts | Regular evaluation of long-term business technology plans Constant evaluation of new releases/updates from CSPs Establish notifications and reminders of upcoming expiring Commitment Discounts | Regular evaluation of long-term business technology plans Constant evaluation of new releases/updates from CSPs Automation is in place for as much of the process as appropriate> Automation is established to renew Commitment Discounts as they expire as it makes sense  
**Decision Structure** | Purchases may or may not be made by a central team | Analysis & purchase completed by a central FinOps team, with input from engineering and finance incorporated | Analysis & purchase completed by a central FinOps team, with input from engineering and finance incorporated Automation is in place for as much of the process as appropriate  

### KPIs

## ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201368%20740'%3E%3C/svg%3E)

## CSP Nuances section

The paper up to this point has been vendor neutral as much as possible. This section serves as a point-in-time reference for nuances or key considerations to keep in mind when purchasing or managing Commitment Discounts for three of the Cloud Service Providers (CSPs). This is broken into two sections for each CSP – Commitment Discount Nuances & Terminology Nuances. The first section will provide general considerations while the second section will cover common distinctions between CSPs both as they relate to the shared terminology and to the implementation.

### AWS Nuances

#### Commitment Discount Nuances

Spend based commitments can cover more than one type of product:

  * _Compute Savings Plans_ apply discounts to EC2, Fargate, and Lambda compute types with the highest discounted usage types receiving benefit first, for a fixed term.
  * The EC2 Instance Savings Plans apply to EC2 usage and provide the lowest prices, offering savings with the highest savings in exchange for commitment to usage of individual instance families in a region
  * SageMaker Savings Plans apply to SageMaker usage. These plans automatically apply to eligible SageMaker ML instance usages including SageMaker Studio Notebook, SageMaker On-Demand Notebook, SageMaker Processing, SageMaker Data Wrangler, SageMaker Training, SageMaker Real-Time Inference, and SageMaker Batch Transform regardless of instance family, size, or region.
  * _Reserved Instance_ s apply a fixed discounted price for a specific resource, whether or not it is used, for a fixed term.

Upfront commitments will incur a one-time increase in Premium Support for the account the commitment is purchased in rather than incurring the charges over the lifetime of the Reservation.

#### Terminology Nuances

**Availability:** AWS Reservations and Dedicated Hosts must be purchased in a specific region and will only be applied in that region. AWS Savings Plans cannot be purchased within a region – they will automatically be applied across global infrastructure.

**Utilization:** Regardless of whether a Reservation or Savings Plan is used, you will still be charged for it. AWS Reservations will be applied to infrastructure that matches the instance type, engine, region, license type (if applicable), and edition (if applicable) of the Reservation purchase. Note – some Reservations are size-flexible, meaning they can apply to instances in the same family (e.g. a RDS Reservation for an r5.xlarge instance can be used for an r5.2xlarge instance).

**Discount Scope:** Both Reservations and Savings Plans can span multiple child accounts under a payer account, if functionality is enabled through the console.

**Discount Method Application:** AWS will automatically apply Commitment Discounts, you cannot do this manually. Their algorithm applies Reservations first and then by Savings Plans highest savings percentage to lowest savings percentage. Discount sharing across accounts in a management organization is enabled by default.

**Payment Options:** There are three payment options for Reservations and Savings Plans – All Upfront, Partial Upfront, or No Upfront. Each payment option has different cash flow and savings percentage impacts.

  * Purchasing all upfront commitments means you pay for the commitment at the time of the commitment in exchange for a higher savings percentage.
  * Purchasing partial upfront commitments means you pay a piece of the commitment (minimum of 50%) and the rest in monthly installments over the life of the commitment. This has a lower savings percentage than all upfront commitments.
  * Purchasing no upfront commitments means you pay nothing at the time of commitment and pay in monthly installments over the life of the commitment. This has the lowest savings percentage of all payment options.

### Azure Nuances

#### Commitment Discount Nuances

Overhead considerations for a Single Resource Group scope with high overhead versus a Shared, lower overhead scope

| **Pros** | **Cons**  
---|---|---  
**Single RG** | Ability to provide predictable discounts to an application e.g. SAP (large, predictable workloads) | Analyzing, purchasing and managing RIs at the RG level, enterprise wide is not sustainable or recommended  
**Single Subscription** | Ability to provide predictable discounts to a Business Unit (BU) | Higher level of analysis but manageable More purchase execution overhead but manageable Owner access required for each target sub Greater risk of under-utilization Requires increased management and monitoring  
**Shared** | Easy analysis – use portal, MSFT Power BI tools or other 3rd party tools Most secure permission setup – only need owner access to one central sub setup to purchase all shared RIs and no resources run in it Quickest purchase option to execute Lowest risk of under-utilization Requires less management and monitoring | Savings not predictable at a BU and or application level – maybe questions to manage  

Reservations apply to a specific VM series and are inherently more specifically-scoped than Savings Plans. As such, Reservations are always applied before SPs. If a resource could be covered by multiple Reservations , it will first apply the most specifically-scoped Reservation. E.g. if a resource could be covered by a Reservation scoped to its resource group and a separate Reservation to its subscription, it will first use the Reservation scoped to the resource group since it is more specific. Note, this may result in suboptimal savings if you have more specific Reservations with lower discounts than the more generalized Reservations. For organizations with multiple Reservations scoped to various levels (resources, resource groups, subscriptions, shared), it is advisable to understand the Reservation application logic to ensure you receive the maximum benefit. Reservations are reflected in the billing data and Azure Cost Management ~24 hours after utilization.

After Reservations are applied, Azure applies discounts from SPs. Unlike Reservations, Savings Plans are applied based on the maximum discount available, not based on scope specificity. Azure automatically applies the SP to the VMs in order of the highest discount percentage from on-demand to the lowest. Due to the complexity of the application logic, Savings Plans take 48-72 hours to reflect in the billing data and Azure Cost Management.

Azure combines VMs using Windows licenses into a single SKU when they are used on-demand (without a Reservation). If they use a Reservation, the SKU for the machine is separated in the billing data and the Windows OS license is billed separately.

#### Terminology Nuances

  * Availability: Region: South Central, West2, etc
  * Discount Scope: Scope elements: 
    * Type: Shared, Management Group Single Subscription, Single Resource Group
    * Region: South Central, West2, etc
    * Family: D2v2, DS3v2, etc 
      * Instance Flexibility: groups same family different CPU options together
  * Reservation term: 1-year or 3-year options.
  * Payment Options: **__** All up front or monthly payments. NOTE: no additional discount for up front payment

### GCP Nuances

#### Commitment Discount Nuances

In GCP, Commitment Discounts refer to pricing discounts offered to customers who make long term commitments (usually a 1- or 3 year- term) to use certain GCP services or resources. These commitments typically involve agreeing to use a specific service or resource at a certain level or for a specific duration.

GCP offers two types of Commitment Discounts:

  1. **Committed Use Discounts (CUDs)** – CUDs are applicable to certain GCP services, such as Compute Engine virtual machines or Cloud Bigtable. In return for this commitment, customers receive a discount compared to the on-demand or pay-as-you-go pricing model.
  2. **Sustained Use Discounts (SUDs)** – SUDs are automatically applied to customers who consistently use specific GCP resources (resources which are eligible for CUD but running On-demand) for a significant portion of a month. SUDs provide incremental discounts as customers use more of the specified resources. The discount level increases with higher levels of sustained usage, encouraging customers to utilize resources consistently.

Note: CUDs and SUDs cannot be applied together to the same resource. These are distinct pricing models offered by GCP.

  * Compute Engine Flexible committed use discounts (or flexible CUDs) – Similar to AWS Compute Saving Plans with a commitment to a minimum amount of hourly spend for Compute Engine.

#### Terminology Nuances

**Discount Scope:** CUDs discounts are applied to the committed usage within the specific project/projects associated with the commitment. It means that the committed resources should be used within the same project to receive the discount.

While making the commitment, you have the option to use the shared tenancy within the projects, but it is advisable to carefully consider the project scope when making a CUD commitment and ensure that the committed resources are utilized within the intended project to maximize the benefit of the discount. Any changes in the project’s structure and resource utilization may affect the application of the discount.

**CUD and Flex CUD Discount applications:** First CUDs are applied to all eligible resources and then Flex CUDs are applied to the eligible resources. At the end SUDs are applied to the resources which are eligible for CUDs but running OnDemand, if no CUD was previously applied to the resource.

**Payment options** : GCP offers only monthly payments for CUDs and Flex CUDs. There are no partial or all upfront payment options.

**Discount Application:** Discount sharing is disabled by default, but can be enabled across all projects within a billing account. Attribution of discounts can then be applied using the FIFO method (first in first out), proportionally, or according to a custom prioritization specification. Broadly, commitments with highest rates of discounts or specificity are applied first.

  * **FIFO:** Eligible resources are consumed at a discounted rate until the commitment amount is fully consumed.
  * **Proportional:** Projects with eligible usage will be attributed discounted resources on the proportional basis that they consumed resources.
  * **Prioritized:** Discounted resources will be attributed to projects according to practitioner-configured specifications.

## Acknowledgments

We’d like to thank the following people for contributing to this body of work.

[ ![AJ Wasserman](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) AJ Wasserman Liberty Mutual ](<https://www.linkedin.com/in/angela-aj-wasserman-0871146/>) [ ![Alison McIntyre](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Alison McIntyre Lloyds Banking Group ](<https://www.linkedin.com/in/alison-mcintyre-06b790b/>) [ ![Amit Doshi](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amit Doshi PSEG ](<https://www.linkedin.com/in/amitdoshi3280/>) [ ![Andrew Qu](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Andrew Qu Everest Systems ](<https://www.linkedin.com/in/andrewqu/>) [ ![Brian D’Altilio](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Brian D’Altilio Marsh McLennan ](<https://www.linkedin.com/in/brian-daltilio/>) [ ![Jenna Wright](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jenna Wright Vega Cloud ](<https://www.linkedin.com/in/jenna-wright-574710167/>) [ ![John Jun](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) John Jun Logicworks ](<https://www.linkedin.com/in/john-jun-454124105/>) [ ![Kate Ferguson](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kate Ferguson Liberty Mutual Insurance ](<https://www.linkedin.com/in/kathleen-ferguson1/>) [ ![Kavitha Jindham](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kavitha Jindham Kyndryl ](<https://www.linkedin.com/in/kavithajindham/>) [ ![Kurt Alexander](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kurt Alexander HCA Healthcare ](<https://www.linkedin.com/in/jkurtalexander/>) [ ![Steven O’Dwyer](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Steven O’Dwyer ProsperOps ](<https://www.linkedin.com/in/stevenodwyer/>) [ ![Sumaira Nazir](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Sumaira Nazir Platform.sh ](<https://www.linkedin.com/in/sumaira-nazir93/>) [ ![Frank Contrepois](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Frank Contrepois FinOps Lead ](<https://www.linkedin.com/in/frankcontrepois/>) [ ![Dennis Chisholm](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Dennis Chisholm VF Corporation ](<https://www.linkedin.com/in/dennischisholm/>)

### Extending thanks to our supporters

Also, a big thank you to our supporters, Alex Dominic Savio, Brian Robbins, Joe Ferrero, Scott Linn, and Sherri Wooldridge.

## Appendix

### Commitment Breakeven Timeline

Commitment breakeven Timeline represents the estimated length of time to pay off the entire cost of a commitment discount (including upfront and ongoing charges) from the savings provided by that commitment. The savings generated by a commitment discount is derived from the discount and the utilization rate.

Once the breakeven point is reached, the commitment discount has been fully paid off and will never lose money overall, regardless of utilization after this point.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20962%20474'%3E%3C/svg%3E)

The utilization of the commitment discount will affect the breakeven point and the net savings of the commitment. Over the term of a commitment it cannot be assumed commitments will be utilized at 100% all of the time.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20730%20441'%3E%3C/svg%3E)

#### Calculating the Commitment Breakeven Point (BEP)

Prior to purchasing a commitment discount you can calculate the BEP using an estimate of the expected utilization rate.

The breakeven point (BEP) can be calculated as follows:

Commitment Term * (Total cost of the commitment / Original cost of the discounted usage)  
---  

#### Commitment BEP Calculation Examples

Ondemand Rate: $1.50/hr Discount Rate: $1.00/hr (33% Discount) Utilization: 100% Commitment Term: 12 Months (8760 hrs) | 12* (1.00*8760 / 1.5*(8760*100%)) = 8 Months  
---|---  
Ondemand Rate: $1.50/hr Discount Rate: $1.00/hr (33% Discount) Utilization: 90% Commitment Term: 12 Months (8760 hrs) | 12* (1.00*8760 / (1.5 * (8760*90%)) = 8.88 Months  
Ondemand Rate: $1.50/hr Discount Rate: $1.00/hr (33% Discount) Utilization: 80% Commitment Term: 12 Months (8760 hrs) | 12* (1.00*8760) / (1.5 * (8760*80%)) = 10 Months  

Commitment breakeven timelines based on the example BEP calculations:

**Breakeven Point** | **Commitment Cost** | **OnDemand Cost** **@ 80% Utilization** | **OnDemand Cost** **@ 90% Utilization** | **OnDemand Cost** **@ 100% Utilization**  
---|---|---|---|---  
**Month** |  |  |  |   
1 | $730 | $876 | $986 | $1,095  
2 | $1,460 | $1,752 | $1,971 | $2,190  
3 | $2,190 | $2,628 | $2,957 | $3,285  
4 | $2,920 | $3,504 | $3,942 | $4,380  
5 | $3,650 | $4,380 | $4,928 | $5,475  
6 | $4,380 | $5,256 | $5,913 | $6,570  
7 | $5,110 | $6,132 | $6,899 | $7,665  
8 | $5,840 | $7,008 | $7,884 | $8,760  
9 | $6,570 | $7,884 | $8,870 | $9,855  
10 | $7,300 | $8,760 | $9,855 | $10,950  
11 | $8,030 | $9,636 | $10,841 | $12,045  
12 | $8,760 | $10,512 | $11,826 | $13,140  

The calculation of the breakeven point can be summarized as the commitment term multiplied by the total cost of the commitment over the original cost of the discounted usage (the amount you would have paid without commitment discounts).

Using this approach to calculate the discount will take into consideration any previous discounts (for example sustained usage discounts) that applied prior to the commitment discount applying and factor in the utilization of the commitment discount.

### Optimal Coverage Point

Ideal coverage points will vary by organization due to two main variables. First, usage levels and patterns will determine savings and waste behavior driven by your Commitment Discounts over time. Second, your discount rate of the commitment corpus will alter the ratio of savings and waste incurred from incremental coverage.

Previously, we examined the conservative approach in determining commitment coverage levels by providing coverage at the lowest points of usage fluctuations. This approach is based on the assumption that underutilization is undesirable. However, solely prioritizing high utilization or coverage can result in missed opportunities for savings. Therefore, it is recommended to calculate an Effective Savings Rate, one that nets your realized savings against your costs had you received no incremental discount.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%20583'%3E%3C/svg%3E)

As coverage expands, each additional unit of coverage reduces costs when utilized, but increases wasted commitments when left unused. Depending on the cyclical pattern, there comes a point where the added waste of unutilized coverage surpasses the additional savings from covered usage. Beyond this point, further coverage expansion leads to diminishing savings. Therefore, sometime in your Commitment Discount journey, the hypothetical Effective Savings Rate of the increased proposed coverage level will be lower than the current ESR. This will inform your organization when additional Commitment Discount purchases will no longer generate additional savings, provided usage behavior remains consistent with previous patterns.

Changing the discount rate of your commitment inventory will adjust the optimal coverage point even when usage patterns remain the same. This variation occurs because the balance between additional savings and waste from unused resources depends on the amount of savings achieved with each additional unit of coverage. If your discount rate is higher, an equivalent unit of coverage will drive more savings, enabling higher levels of under-utilization to continue creating savings.

In simpler terms, as the discount rate increases, the optimal coverage point is pushed away from the trough in usage fluctuations.

### Cloud Service Provider Commitment Discounts Offerings Matrix

[This matrix](<https://docs.google.com/spreadsheets/d/1qNrl0p0Y_iZ5qfHRQWJH8mx2z_TdYlFefEABNIQ2SKA/edit#gid=2045502424>) has been provided to help compare commitment discount offerings across AWS, Azure, and Google Cloud.

Last updated: September 24, 2025

## Table of Contents

  * [Initial Purchase Considerations](<#initial-purchase-considerations>)
  * [Purchase and Management Strategy](<#purchase-and-management-strategy>)
  * [Personas](<#personas>)
  * [Intersections with Other FinOps Capabilities](<#intersections>)
  * [Measures of Success](<#measures-success>)
  * [CSP Nuances section](<#csp-nuances>)
  * [Acknowledgments](<#acknowledgments>)
  * [Appendix](<#appendix>)
    * [Commitment Breakeven Point](<#commitment-breakeven-point>)
    * [Optimal Coverage Point](<#optimal-coverage-point>)
    * [CSP Commitment Offerings Matrix](<#csp-commitment-matrix>)

##### Related FinOps Capabilities

[ Rate Optimization ](<https://www.finops.org/framework/capabilities/rate-optimization/>)
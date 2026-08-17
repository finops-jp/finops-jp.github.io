# Introduction to FinOps for SaaS

**Summary:** FinOps can include SaaS due to similar challenges in decentralized purchasing and consumption-based pricing. Establish a SaaS Inventory by using discovery methods like interviewing stakeholders, checking financial records, and leveraging SSO/CASB platforms to gain comprehensive visibility into all SaaS products, usage, and contracts. Tagging SaaS objects/usage and performing proportional allocation can assist with correctly calculate the Total Cost of Ownership (TCO) and effectively optimize variable costs as SaaS usage expands.

## Table of Contents

  * [Introduction](<#introduction>)
  * [SaaS Overview](<#saas-overview>)
  * [Why FinOps for SaaS?](<#why-finops-for-saas>)
  * [SaaS Discovery Methods, Inventory and Pipeline](<#SaaS-discovery-methods>)
  * [SaaS Pricing Models](<#SaaS-pricing-models>)
  * [License-Based SaaS](<#license-based-saas>)
  * [Consumption-Based SaaS](<#consumption-based-saas>)
  * [Acknowledgments](<#acknowledgments>)

This is Part 1 of our three-part series on FinOps for SaaS (Software-as-a-Service). This Paper provides a comprehensive introduction to FinOps for SaaS, including why it’s important, SaaS discovery methods, pricing, and usage models. After reading Part 1, check out the rest of the series to learn how to apply FinOps to SaaS, including how to apply FOCUS™ (FinOps Open Cost and Usage Specification) to your SaaS cost and usage data.

  * Part 1: Introduction to FinOps for SaaS (You are here)
  * [Part 2: Applying the FinOps Framework to SaaS ](<https://www.finops.org/wg/applying-the-finops-framework-to-saas/>)
  * [Part 3: FinOps for SaaS: Adopting FOCUS™](<https://finops.org/wg/finops-for-saas-best-practices-and-adopting-focus>)

## Introduction

Provides practitioners with guidance related to the Scope of FinOps for SaaS, whether it is license-based or consumption-based, no matter how it is procured (i.e. direct, reseller or marketplace). This guidance will help the FinOps practitioner as to the scope of their activities when being asked to work with SaaS and how the FinOps Framework can be applied along with additional considerations both theoretical and actual examples. FOCUS™ will also be discussed, but finer data-level details will be covered in separate FOCUS™ documents. We agreed to keep this at a high level, vendor agnostic and to speak generally in ways that apply to most FinOps teams managing SaaS.

### Who Should Read this Paper

This paper applies to FinOps teams managing public cloud costs who have been asked to additionally manage technology spending on SaaS purchases and usage.

### Prerequisites

An existing understanding of the [FinOps Framework](<https://www.finops.org/framework/>) Domains and Capabilities for public cloud.

### Purpose of This Paper

A [FinOps Scope](<https://www.finops.org/framework/scopes/>) is a segment of technology-related spending to which FinOps Practitioners apply FinOps concepts.

A [FinOps Scope](<https://www.finops.org/framework/scopes>) is a defined segment of spending across any technology category, aligned to business constructs–such as products, cost centers, or environment–that guide the application of FinOps to maximize technology value. FinOps Scopes can expand the [Framework](<https://www.finops.org/framework/>) operating model to include intersecting areas of technology spend that practitioners manage with FinOps in addition to the public cloud.

[FinOps Personas](<https://www.finops.org/framework/personas/>) apply Framework [Capabilities](<https://www.finops.org/framework/capabilities/>) to another Scope of cost and usage data in addition to public cloud – such as SaaS or data center infrastructure – to extend FinOps’ collaborative and timely decision making practices in a consistent way across a broader scope of an organization’s technology landscape.

In order to get a better understanding of what types of costs FinOps Practitioners are managing, the FinOps Foundation conducted polls at the September 2024 [North America & EMEA Virtual Summit](<https://youtu.be/thZ2exIPulw?feature=shared&t=3510>) and at the [Asia Pacific Virtual Summit](<https://youtu.be/KaolRHw7pvo?feature=shared&t=2279>).

Results indicated that the majority of FinOps Practitioners across the globe are already managing SaaS (c.70%), Licensing (c.65%), and other technology costs in addition to public cloud spending.

These signals have made it clear that the practice of FinOps is being applied to areas of technology spending in many areas in addition to public cloud Infrastructure-as-a-Service (IaaS) costs.

The **purpose of this paper** is to expand on the **FinOps Scope for SaaS** , and support existing FinOps teams to understand:

  * **Definition:** The definition and characteristics of SaaS
  * **Fundamentals:** The fundamentals of SaaS
  * **Why:** Why FinOps for SaaS
  * **Entry Points:** Possible entry points when beginning to include SaaS in existing FinOps team services
  * **SaaS Catalogue:** SaaS discovery, inventory, and pipeline management
  * **FinOps Capabilities for SaaS:** How SaaS can be incorporated into, and applied across, the Framework Capabilities
  * **RACI and Intersecting Disciplines:** Potential roles and responsibilities the FinOps team would undertake depending on what intersecting disciplines/allied personas exist in the organization
  * **Best Practices:** Best practices, tips and tricks
  * **FOCUS™:** SaaS and FOCUS™
  * **Tooling for SaaS:** FinOps Tools for SaaS
  * **Case Study:** Real-life examples/scenarios of where FinOps teams have expanded to include SaaS and how they have approached and implemented this

## SaaS Overview

### Definition of SaaS

Software as a Service (SaaS) is a software distribution model where applications are hosted by a service provider/vendor and made available to customers over the Internet. The software provider manages the underlying infrastructure, maintenance, and support.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20850%20398'%3E%3C/svg%3E)

_Source: Goran, Velkoski & Simjanoska, Monika & Ristov, Sashko & Gusev, Marjan. (2014). BUSINESS CASE: FROM IAAS TO SAAS._

### Characteristics of SaaS

  * Hosted on a cloud platform, so that users do not need to manage their own hardware
  * Fully managed via the provider, including security, automatic updates and maintenance
  * It is a scalable, multi-tenanted architecture
  * It is accessible via a web browser or API
  * Encompasses not only marketplace software, but software not delivered by IaaS and PaaS
  * Reduced “back-end” customization and observability at infrastructure/code-base level
  * The pricing model can be fixed, consumption, value based or a mixture of all
  * Billing and usage data provided by the SaaS vendors varies greatly
  * Reporting, forecasting, and anomaly detection functionalities are all different by SaaS vendor

### Types of SaaS

SaaS has become increasingly popular due to its flexibility, scalability, and ease of use. While license-based SaaS is more traditional, the landscape has changed and we’re seeing consumption-based SaaS applications grow and present many of the same challenges as public cloud.

Here’s a quick overview of common types of SaaS:

  * **Development, Infrastructure, & Observability: **SaaS products that are leveraged in building/deploying applications (GitHub, Vercel), hosting data or parts of infrastructure (Snowflake, Databricks, Confluent Cloud) or for observability (New Relic, Datadog, Dynatrace, Grafana). Some software purchased in this category might also be considered PaaS products as well, and if purchased as separate elements of an infrastructure, many of the same practices described for SaaS will apply equally to PaaS products.
  * **Collaboration and Productivity Tools:** These platforms facilitate communication, document sharing, and collaboration among team members. Examples include Microsoft Teams/365, Slack, and Google Workspace.
  * **Project Management Platforms:** SaaS tools for project planning, task tracking, and team coordination. Examples include Asana, Trello, and Jira.
  * **Customer Support and Help Desk Solutions:** These platforms assist businesses in managing customer inquiries, tickets, and support requests. Zendesk and Freshdesk are popular choices.
  * **Sales and Marketing Platforms:** Customer Relationship Manager (CRM) solutions enhance sales and marketing efforts. Salesforce, HubSpot, and Marketo fall into this category.
  * **E-commerce Platforms:** SaaS services for online retailers to manage inventory, orders, payments, and customer interactions. Shopify and WooCommerce are well-known e-commerce platforms.
  * **Analytics and Business Intelligence (BI):** These platforms provide data visualization, reporting, and insights. Looker, Tableau, and Google Analytics are widely used.
  * **Human Resources (HR) Platforms:** SaaS tools for recruitment, employee management, payroll, and performance tracking. Workday and BambooHR are examples.
  * **Business/Finance Platforms:** SaaS tools for the management of financial processes/reporting (e.g. Oracle Financials, ApptioOne, Xero, Quickbooks)
  * **Graphic Design:** Tools used by creatives to bring their ideas to life for use in other applications (e.g. Adobe Creative Cloud, Canva)
  * **Vertical Industries:** Solutions tailored to specific industries. A few examples among an extensive pool of industries and solution providers: Healthcare – Epic, Cerner, Meditech; Financial Services – FIS, Fiserv, Jack Henry, Moody’s; Government – Accela, CGI Momentum, Deltek Costpoint, OpenGov

## Why FinOps for SaaS?

The challenges of managing public cloud spending are mirrored in the proliferation of SaaS across organizations through the use of decentralized, individual-level procurement and corporate-credit-card-funded purchase orders, resulting in limited organizational-level visibility into cost and usage.

Additionally, SaaS is a consideration in the typical Build-vs-Buy-vs-Rent discussions. Often, engineers have a choice between building their own solutions or purchasing one via a SaaS provider. Because of this, there is less of a clear distinction between what workloads are managed in Public Cloud versus workloads managed by SaaS vendors (or where they are shared). Therefore, the spend is all part of the same value creation process, and engineering teams want to know the total cost of running their solutions. And naturally, the other FinOps goals and outcomes follow.

By iteratively applying Framework Capabilities to achieve the outcomes described by the four FinOps Domains: to Understand our Cost & Usage, to Quantify its Business Value, to Optimize our Cost & Usage, and to effectively Manage the FinOps Practice, the same financial accountability and transparency can be established for SaaS spending, ensuring organizations can keep their SaaS costs aligned with business goals and associated technology strategy.

## SaaS Discovery Methods, Inventory and Pipeline

#### Discovery Methods

To manage the SaaS Scope, it is essential to build an inventory of the used SaaS products in your organisation, ideally by automatically discovering them. However you can approach this in a Crawl, Walk, Run manner. There are numerous methods to discover SaaS and FinOps Practitioners will likely use a range of these to gain a holistic picture of the SaaS usage:

Maturity | Discovery Methods  
---|---  
Crawl | 

  * **Interviewing Key Stakeholders:** Having direct conversations with Finance, Procurement, SSO/Identity and Architecture Teams can all be sources of leads to chase down SaaS
  * **Financial Records:** Examining financial records and invoices can reveal SaaS subscriptions used by different departments.
  * **Application Portfolio/Contract Systems:** Search for terms like “SaaS” or “Vendor Cloud Hosted” in systems of record for application inventory/procurement systems to identify the presence of SaaS applications.

Walk | 

  * **Single Sign-On (SSO) Platforms:** SSO solutions provide centralized access, control, and authentication. By monitoring user logins and/or group membership, SSO platforms can identify SaaS applications in use.
  * **API Connectors:** Leveraging APIs (Application Programming Interfaces) allows organizations to integrate with SaaS platforms and retrieve information about subscribed applications.
  * **Web Proxy/Endpoint:** Monitoring web traffic through proxies or endpoints helps identify SaaS applications accessed by users.

Run | 

  * **Cloud Access Security Brokers (CASB):** CASBs monitor and secure cloud services and help discover shadow IT by analyzing network traffic and identifying SaaS applications.
  * **Inventory Agent/Browser Plugin:** This method involves using specialized agents or browser plugins to scan endpoints and discover installed SaaS applications.

Using a SaaS Management Platform (SMP) is crucial for effective SaaS discovery management. SMPs streamline the process and provide insights for optimizing usage and costs.

#### Inventory Management

In addition to granular and timely data related to the cost and usage of SaaS products, there is also a need for metadata related to each SaaS product in existence within the organisation. Think of this catalogue as similar to the metadata required for “Public Cloud FinOps”; you are looking for this metadata to solve the usual FinOps challenges in mapping to organisational constructs and understanding ownership information.

However, in addition you should also be looking to capture metadata relating to the SaaS contracts themselves so you can build up a catalogue/inventory for the SaaS products you intend to apply FinOps to. This should include close collaboration with Procurement, ITAM/SAM and Finance teams to align with any current system of record and not duplicate data. This inventory will also help to identify and articulate opportunities for cost optimization. Having good data on what actually drives the variable costs of SaaS (if any) is very important.

Attributes to consider (not exhaustive):

  * Contract Start / End Dates
  * Supplier
  * Owner
  * Business Unit (or other organisational alignment data)
  * Cost Center (for chargeback)
  * Commitment(s)
  * Termination Notice (e.g. 30/60/90 days)
  * Procurement contact
  * Pricing Model (see [SaaS Pricing models](<#SaaS-pricing-models>))
  * Unit of measure for billing/consumption (see [How is it measured](<#how-is-it-measured>))
  * Cadence for billing (e.g. monthly, quarterly, annually)
  * True up/Anniversary/Expiry/Renewal Dates
  * Limits/constraints
  * Data source for cost/usage data (e.g. invoice, SaaS console)
  * SaaS discovery source (see [Discovery Methods](<#SaaS-discovery-methods>))
  * Type of SaaS (see [Types of SaaS](<#types-of-saas>))
  * Mapping to contract ID system (to do a useful join to procurement system for any additional data points that would be helpful but shouldn’t be mastered by the FinOps SaaS Inventory)
  * Understand opportunities for volume discounts, bundled services and tiered pricing (consistent pricing may be affected as volume discounts and tiered pricing levels come into effect – complicating budgeting and forecasting)

Please note: The above list is not a list of attributes intended to impact/replace/undermine any existing contract management/procurement system within your organisation. It’s to be considered a list of “interesting attributes” that may or may not be mastered by the FinOps team. Apply sound data architecture thinking when defining your data model and understanding the data lineage for all attributes.

Suggestion: Notwithstanding the above note, consider creating additional table(s) in the place that you store your “Public Cloud FinOps” metadata so that you can benefit from any previous hard work you may have done to capture/curate metadata (Business Unit mappings, Cost Centers, Owners) as part of your “Public Cloud FinOps”. It is highly likely that there will be some useful joins that can be done with the existing metadata. For example, expect familiar names in the list of owners for the SaaS products (especially where the SaaS is “IT for IT”).

#### Pipeline Management and Visibility of Demand

  * Splice your FinOps team as far left as possible in the cloud governance, procurement, onboarding/ adoption/migration processes – the committee that decides the destination for a new workload should have a FinOps person present (to apply FinOps-aware product decisions) but also to capture the pipeline/roadmap for SaaS coming down the track
  * Present the view of the pipeline alongside your public/private cloud migration roadmaps to ensure stakeholders have full visibility and this will also help FinOps teams in terms of ensuring budgets/forecasts are in place and metadata is captured.

## SaaS Pricing Models

SaaS has significantly transformed how businesses interact with and utilize software tools. SaaS pricing models govern how charges are incurred for using the software.

  * **Per User / Device (License-Based):** User-based pricing models, where the cost is determined by the number of users accessing the software, are very common. Device-based options, while less common, are also offered for certain SaaS products, typically in environments such as Retail.
  * **Tiered:** Tiered models offer different levels of features and/or services at varying price points. This model enables users to cater to diverse users, from those seeking basic functionalities to those who need advanced features. Usually, a basic or entry-level tier comes with essential functionalities. As you move up the tiers, you unlock more advanced features, better support, and/or increased usage limits.
  * **Usage-Based (Consumption-Based):** These models align costs directly with how much a user/process utilizes the software. This model operates on the principle of “you pay for what you use,” aka “Pay As You Go” (PAYG) making it an attractive option for users seeking cost-efficiency and flexibility. The pricing structure particularly appeals to users with fluctuating needs or those looking to avoid overpaying for unused resources. These models may also offer an optional contract where you purchase a bulk amount of usage to meet a commitment in some cases in exchange for a discount. Overages may be incurred if usage exceeds the committed amount.
  * **Flat Rate:** This straightforward pricing strategy offers simplicity and predictability. In this approach, users pay a fixed amount for using the software, regardless of consumption levels or feature usage. This model appeals to users that want to avoid usage-based billing complexities and maintain steady budgeting.
  * **Feature Add-Ons:** This SaaS pricing strategy lets you pick and choose features or modules of software and pay only for the ones you use. Instead of a bundled package, you select individual features that align with your needs, and each feature has its own price. This approach benefits users seeking highly tailored solutions without paying for unnecessary extras.
  * **Capacity Add-Ons:** A capacity add-on is a purchase made in addition to an initial contract in the form of a lump sum of general usage capacity (e.g., credits, tokens) that can only be used for a limited time. This model is often used by vendors for AI services or API calls.
  * **Freemium Business Model:** This model offers a basic version of the software for free, often with limited features or usage. This free version is a teaser, allowing users to experience the software’s value firsthand. Users who find the free version beneficial and want more can opt for a paid, premium version that unlocks additional features, increased usage limits, and/or enhanced support.
  * **Outcome-Based Pricing:** This is a customer-aligned and value-based SaaS pricing strategy, that charges only when the output delivers a tangible business impact (e.g. agent resolves a service ticket). Clarity on attribution calculations are recommended to be considered during the procurement process.

### Procurement Vehicles

There are multiple ways to purchase SaaS including:

  * Direct from the software publisher
  * Using a Value Added Reseller (VAR) or Managed Service Provider (MSP) – a company that sells hardware, software, and/or other services while providing additional value for the customer.
  * Through a cloud provider marketplace (e.g., Google Cloud Marketplace, AWS Marketplace, Microsoft Azure Marketplace, Alibaba Cloud Marketplace) 
    * Multi-party offers now mean marketplace purchases can be facilitated via VAR and MSP partners.

### Payments

Understanding your payment terms for a SaaS contract will help you determine the best way to get the most value during the contract term.

#### Monthly Billing

  * May be an equal payment, paid each month, based on the annual estimated usage divided by the number of months in the contract
  * May be payment for actual usage
  * May have a monthly minimum set as part of the contract that must be paid even if you don’t use it
  * A portion of the amount spent may count towards spend commitments you have with a cloud provider

#### Annual Billing

  * Typically a lump sum payment at the beginning of a new contract based on estimates for the contract term (i.e. 1 year, 2 years)
  * For license-based SaaS, while you may have paid for a static number of licenses, there may be contracts that bill you monthly if they fluctuate. In addition, you may also have other add-ons like storage, API calls or AI credits that may also be billed based on consumption and on a monthly frequency.
  * For consumption-based SaaS, it typically draws down each month based on actual usage from the lump sum
  * May have a monthly minimum set as part of the contract that must be paid even if you don’t use it
  * May allow you to add more funds during the contract term to accommodate growth at the same negotiated prices
  * May or may not allow you to rollover unused funds into the next contract
  * A portion of the amount spent may count towards spend commitments you have with a cloud provider

#### Overages

For each SaaS product, you will need to understand if there are situations that will lead to an overage, how those overages are handled, and if/how you will be charged for them. The information you gather about overages may be leveraged in custom reports or may be something you need to monitor and alert on.

Here are some questions you’ll want to answer:

  * Does my SaaS product incur overages?
  * Does my SaaS product require purchasing additional units/packages if we get into an overage?
  * What happens in my product if an overage occurs? 
    * Does a feature or my entire product stop working?
    * Does the publisher allow overages without consequence?
    * Am I required to true up immediately or only when negotiating the next contract?
    * Am I billed for the overage immediately?
    * Can my overages be rolled over into an amended or new contract?
  * Are overages charged at the same rate as contracted or at a different rate?
  * Are there built-in monitoring features in my SaaS product that will allow me to send notifications when I reach limits or incur overages?
  * Are there _minimum_ commitments that must be met? 
    * This is opposite of an overage, whereas if you do not meet the minimum amount of usage, you’ll still be charged for it

Getting answers to the above questions will help you determine what is important to monitor during the length of your contract to ensure you have enough warning to deal with potential overages and react before they occur. How you monitor overages may be a combination of leveraging features within a SaaS product that has them, using a third party tool, creating your own custom reporting that tracks status or creating/leveraging an existing monitoring/alerting process.

#### Discounts

Depending on the method of procurement (direct, private offer through cloud marketplace, reseller), the amount you spend may be eligible for discounts that are generally available or privately negotiated. These discounts may be based on volume, bundling with other products, or get better with longer contract terms.

Check to see if educational and government discounts are available from the vendor, if applicable.

Avoid discount traps by taking a stepped approach to your purchases. If you have the ability to add on licenses or infuse additional funds into your consumption-based contract, leverage it to help ensure you aren’t paying for what you aren’t using. Be sure to review your contracts to determine if discounts apply to the overall timeframe or perhaps only the first year.

## License-Based SaaS

### License-Based SaaS – What Is It?

License-based SaaS is a software delivery/pricing model where consumers pay a pre-determined monthly or annual fee, for access to software under specific licensing terms. These licenses define parameters such as user limits, feature access, duration, and deployment environments. Unlike pure consumption-based pricing, this model offers predictable costs for customers and recurring revenue streams for providers.

### How Is It Measured?

Licensed-based SaaS models charge based on a specific metric which will be defined within the license grant. Common license metrics include:

  * **Per User:** Measured based on the number of users that have access to or are assigned the product. Examples of this are Microsoft 365 E3 which is a per user license. Users may also have different levels of a license (i.e. Professional or Premium).
  * **Per Process or Workflow/Transaction:** Measured by the number of processes or workflows that are executed within the platform. An example of this is UiPath products.
  * **Per CPU/Processor Core:** Measured by the number of CPU or processor cores used by the service.
  * **Per Server / Per Node:** Measured by the number of virtual or physical servers running the product. An example of this is Jira Data Center, which charges based on the number of nodes within the pool.
  * **Per Device:** Measured by the number of devices that have access to or are assigned the product. An example of this would be Microsoft Dynamics 365 Operations – Device and Microsoft Apps for Enterprise per Device.

Unlike consumption-based models, there is no billing fluctuation based on actual usage. Licenses are acquired up-front and, while additional licenses can typically be added at any time, reductions may only be made at certain pre-determined points in the contract (i.e. an annual anniversary or agreement renewal).

### Things to Watch Out For

Managing licensed-based SaaS involves navigating complexities that can impact both financial and operational efficiency. Common areas to consider are:

  * **Over-Subscribing:** Many organizations purchase more licenses than they require and end up with under/unused licenses within a pool. To address this, consider adopting a just-in-time approach to increasing license-based SaaS products.
  * **Undetected Auto-Renewals:** Many publishers have opted to include an “auto-renew” clause within their terms which will renew at the current purchase level for another period of time. This auto-renew does not take into consideration what is used, but typically the quantity of licenses previously purchased. Auto-renew can also include unnegotiated price increases. To address these points, consider removing the auto-renewal options and/or actively manage your SaaS portfolio that has auto-renewal language that cannot be removed. Using existing contract management processes and personnel in this area is key; be sure to work with ITAM and Procurement teams internally.
  * **Compliance Risks:** Non-compliance with license terms, such as user counts or geographic restrictions, can lead to penalties. To address this, the Terms & Conditions (T&Cs) of your SaaS publishers should be thoroughly reviewed and understood so that risks are known and governance processes can be set up.
  * **Unmonitored Usage Growth:** Rapid scaling of SaaS usage can lead to unexpected cost spikes. To address this, consider actively managing your SaaS license portfolio.
  * **Hidden Fees:** Scrutinize vendor contracts for hidden costs, such as support fees or storage overages. Ensure all additional costs are accounted for during procurement**.**

  * **Continuous Purchased SaaS Vendor Visibility:** Maintain continuous visibility of vendors within the estate and changes to this through activities such as mergers and acquisitions (M&A) and shadow SaaS purchased outside of governance and controls.

### Other Guidance

  * **Optimize License Counts:** Regularly audit user counts, server instances, or other applicable metrics to adjust licensing according to actual needs.
  * **Implement License Management Tools:** Use automated tools to track and monitor license usage, ensuring better visibility and control.
  * **Negotiating Flexibility:** When possible, negotiate contracts with built-in flexibility to scale up or down based on actual usage without penalties.
  * **Tagging & Attribution: **Ensure that each license is tagged to a specific user or department, making it easier to track ownership and chargeback costs.
  * **Engage in Vendor Management:** Maintain open communication with vendors to understand renewal dates, contract changes, and potential renegotiation opportunities.
  * **Shadow Licenses:** Track unauthorized or unaccounted licenses acquired outside the procurement process.
  * **Vendor Lock-In:** Check for vendor lock-in risks, such as contracts with long lock-in periods or high early termination fees. Examples could be: 
    * Multi-year agreements with steep penalties that discourage changing providers. Rising license fees or pricing model changes make switching costly.
    * A vendor moving from perpetual license fees or pricing model changes make switching costly (e.g., perpetual licensing to subscription, increasing long-term costs_.
    * A SaaS with no migration tools or clear export options, making it difficult to switch providers
  * **Rationalize SaaS Applications:** If you have multiple vendors providing the same functionality, consider consolidating vendors where possible (e.g. vendors with the most optimal pricing model).

## Consumption-Based SaaS

### Consumption-Based SaaS – What is it?

Consumption-based SaaS is a pricing model where customers are charged based on their actual usage of the service, rather than paying a fixed subscription or license fee.

### Consumption-Based: Tagging

Some SaaS products provide a mechanism for tagging in two ways:

  * tagging objects (i.e. a queue, a compute resource)
  * tagging usage types (i.e. API calls, serverless invocations)

These tags may be added through the UI or via API directly in the SaaS product, or they may be ingested from another source location (i.e. tags on cloud resources ingested into an observability tool). Tagging your SaaS objects and/or usage provides the same benefits as we see with cloud. It allows us to break down the usage, visualize it, and allocate it.

When SaaS products are complementing traditional cloud services, such as an observability SaaS, it is meaningful to apply a shared tagging policy across the cloud and the SaaS products. Utilising the same set of standard keys and values helps to allocate the cost with the same logic to the consuming entities such as applications (services) or teams, giving them a more complete and integrated visibility of their cloud and tooling costs at a glance.

### Consumption-Based: Allocation (including ways to allocate without tagging)

Allocation of SaaS costs is important when trying to calculate TCO. For some SaaS products, they may be owned/used entirely by an individual business unit or integrated with a single product, which makes allocation simple. For SaaS products that are used by multiple business units or integrated with multiple applications, allocation will be crucial in determining who is responsible for the cost.

If tagging is available, it should be leveraged to help with allocation. In cases where tagging is not available, you’ll need to rely on another method to allocate. If you have metrics that you can use to quantify usage, you can then proportionally allocate the costs to the appropriate application/business unit. If you do not have a way to identify usage based on metrics, you may instead choose to split costs evenly or based on a set percentage between applications/business units.

### Consumption-Based: Visibility/ Showback

As consumption-based SaaS products become more complex with multiple SKUs, possible limits or minimum usage/spend requirements, having visibility at a granular level is key. Some SaaS products have great built-in dashboards to view usage and/or cost at a granular level, but may limit you to how much data can be viewed at one time, how much historical data you can see or may not make it easy to pull the data together in a single view.

Much like cloud, you may need to extract your SaaS product usage and cost data, transform it and ingest it into another tool or a datastore that you can create custom reports from in order to have full flexibility in how you show back your usage and costs. Some SaaS products have started to pull in usage and cost data from _other_ SaaS products in an attempt to be a single pane of glass for their customers. There is no right or wrong way to provide visibility for your consumption-based SaaS usage and cost.

### Consumption-Based: Chargeback

As SaaS products become more integrated with applications your organization is creating, it’s likely that they make up a sizable portion of the overall cost. With the potential for multiple applications and/or business units using them, you’ll want to ensure that your allocation and chargeback is done as fairly as you do for cloud. It is advisable to focus on recharging usage elements that can be influenced by consumers, while allowing shared or common components to be managed by the SaaS product owner. This approach will drive efficiencies among the user base as well as the product owner by avoiding the recharge of inefficient shared or common component costs that cannot be influenced or controlled by individual users. This approach also simplifies budgeting and forecasting, as users only have to focus on their own usage.

### Consumption-Based: Usage Optimization

Optimize the business value versus cost of your SaaS solution(s) by understanding, analyzing and influencing the **variable cost drivers** (“usage”) of your existing SaaS solution

**Constraints**

The extent to which you can optimize SaaS usage costs after initial purchase varies by product and depends on:

  * The cost drivers: There can be one or many cost drivers you can influence, depending on the SaaS solution: 
    * One driver: typically, the number of users
    * Many drivers: users, features, data processed, data storage etc.
  * The contract: The basic cost model for SaaS solutions is per user per month, but many organizations purchase SaaS solutions using enterprise contracts that provide volume discounts but limit the ability to optimize usage due to:
  * Flexibility in the contract: 
    * Fully fixed: Enterprise contracts having a fixed price, providing unlimited usage within an organization. Usage optimization is not applicable.
    * Fixed with caps: Contract having a fixed price that provides usage up to a limit, with extra charges for overages. Usage optimization takes the form of overage control
    * Fully flexible: All costs of the SaaS platform are variable and can be continuously optimized – just like in the public cloud (this is rare with SaaS)
    * Duration of the contract: Commitment contracts are typically from 1-3 years and might or might not have opportunities to adjust commitments during the contract period. This determines when and how often you can optimize the costs.
  * To optimize usage you want your SaaS contract to have flexibility, but this is typically a trade-off against the discount percentage that enterprise contracts bring

### Consumption-Based: Custom Reports

Consumption-based SaaS products provide some additional challenges when it comes to reporting and tracking. Not only are we looking at SKU-level usage, likely across multiple SKUs, but there are other key things to track like limits per SKU, minimum consumption agreements, tracking overages and how we’re tracking those against our contract term. In addition, with SaaS we also see more lump sum, prepaid contracts, so we need a way to track how we’re burning down that balance and if we’re in danger of depleting it too soon. While cost visibility tooling is evolving, there isn’t a tool in the market today that brings all of these pieces of data together – thus creating the need for custom reporting.

Below are some data points that could be shown in custom reports that will help both FinOps and ITAM Practitioners get a complete picture of where things stand for a consumption-based SaaS product:

  * Contract start date/end date and term length
  * % progress of contract 
    * (number of days from contract start date through today’s date) / (total contract days)
  * SKU-level limits 
    * amount used out of total amount for each SKU
    * % used
  * SKU-level trends 
    * Last 30-days, 60-days, 90-days
    * Contract start through current day/month where usage data is available
    * Month-over-month, multi-year trend
  * Breakdown by dimensions 
    * Service, application or business unit 
      * Further broken down by SKU
  * % progress of drawdown against prepaid balance 
    * (total spend) / (total lump sum)

The goal is to be able to look at these data points and:

  * determine if usage in one or more SKUs is anomalous
  * determine if one or more SKUs is approaching a limit too quickly in enough time for course-correction
  * take action to avoid overages, including making changes to accommodate growth within the existing contract
  * quickly identify who is using the product and which SKUs
  * determine if we are in danger of depleting a prepaid balance early based on trends over time

## Acknowledgments

We’d like to thank the following people for their work on this Paper:

[ ![Ron Brill](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Ron Brill Anglepoint ](<https://www.linkedin.com/in/ronbrill/>) [ ![Rich Gibbons](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Rich Gibbons Synyega ](<https://www.linkedin.com/in/rich-gibbons-microsoft-licensing/>) [ ![George Arezina](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) George Arezina TAKEDA ](<https://www.linkedin.com/in/georgearezina/>) [ ![Victoria Levy](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Victoria Levy Alteryx ](<https://www.linkedin.com/in/victoriarlevy/>) [ ![Lorant Kiss](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Lorant Kiss Delivery Hero ](<https://www.linkedin.com/in/lorantkiss/>) [ ![Mike Coates](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Mike Coates Emirates ](<https://www.linkedin.com/in/coatesmike/>) [ ![Juan Van Heerden](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Juan Van Heerden Lloyds Banking Group ](<https://www.linkedin.com/in/juan-van-heerden-b962762/>) [ ![Keith Hiszem](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Keith Hiszem Cardinal Health ](<https://www.linkedin.com/in/keith-j-hiszem/>) [ ![Amy Ashby](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amy Ashby Under Armour ](<https://www.linkedin.com/in/amyashbymke/>) [ ![Laura Mills](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Laura Mills ManTech ](<https://www.linkedin.com/in/laura-mills-98737b105/>) [ ![Colin Jack](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Colin Jack Flexera ](<https://www.linkedin.com/in/cojack/>) [ ![Sumaira Nazir](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Sumaira Nazir Platform.sh ](<https://www.linkedin.com/in/sumaira-nazir93/>) [ ![Kris Wong](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kris Wong Surveil ](<https://www.linkedin.com/in/kristopherwong/>) [ ![Robert Nieuwenhuizen](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Robert Nieuwenhuizen McKinsey ](<https://www.linkedin.com/in/robertnieuwenhuizen/>) [ ![Stephen Old](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Stephen Old Synyega ](<https://www.linkedin.com/in/stephen-old-6ab15082/>) [ ![Salomé Keet](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Salomé Keet FNB South Africa ](<https://www.linkedin.com/in/salom%C3%A9-keet-ba2522a/>) [ ![Gregory Brinkerhoff](https://www.finops.org/wp-content/uploads/2022/10/persona-product.svg) Gregory Brinkerhoff Oracle ](<https://www.linkedin.com/in/gregory-brinkerhoff-4a4795/>)

We’d also like to thank our Community Members for insights during Community Calls on this topic and the FinOps Foundation staff for their help: Vas Markanastasakis, Rob Martin, Andrew Nhem, Samantha White, Amber Gregorio, and Dean Oliver.

Last updated: March 16, 2026

## Table of Contents

  * [Introduction](<#introduction>)
  * [SaaS Overview](<#saas-overview>)
  * [Why FinOps for SaaS?](<#why-finops-for-saas>)
  * [SaaS Discovery Methods, Inventory and Pipeline](<#SaaS-discovery-methods>)
  * [SaaS Pricing Models](<#SaaS-pricing-models>)
  * [License-Based SaaS](<#license-based-saas>)
  * [Consumption-Based SaaS](<#consumption-based-saas>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ Licensing & SaaS ](<https://www.finops.org/framework/capabilities/licensing-saas/>)
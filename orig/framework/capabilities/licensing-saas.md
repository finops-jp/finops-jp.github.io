# Licensing & SaaS

[Framework](</framework/>) / [Domains](</framework/domains/>) / [Optimize Usage & Cost](<https://www.finops.org/framework/domains/optimize-usage-cost/>) / Licensing & SaaS 

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success_kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

**Understanding and optimizing the impact of software licenses and SaaS investments on an organization’s cost structure and value by understanding vendor-specific licensing terms, use rights, and pricing options, planning for appropriate use aimed to minimize over-deployment (a compliance risk) or under-deployment (shelfware/waste), while collaborating with engineering, finance, procurement, and legal teams.**

**Understanding Licensing & SaaS Pricing and Purchasing**

  * Understand buying through Organizational Agreements, including vendor management, contract terms, renewals, secondary metrics charged, and true-up/down pricing parameters
  * Understand use of BYOL rights and license management considerations in each technology category, including the need to match specific services to workload needs, the requirement for using vendor-specific metering tools, and compliance issues related to overuse or underuse of license rights
  * Understanding Perpetual License vs. as-a-service options and implications
  * Understand Marketplace purchasing of licenses and SaaS products

**Understanding Licenses & SaaS Use in Cloud**

  * Defining how to tag and allocate cost of licenses and SaaS products, both when they appear in billing data and when they do not, including the use of FOCUS to normalize data
  * Collecting information relevant to licensing, including billing data, other license or SaaS provider data, and business context data, ideally collected in the FOCUS format
  * Using License Servers or services, and contract commitment data to track and organize license data.

**Managing use of Licenses & SaaS**

  * Comparing use of IaaS services/service options vs. Licenses, PaaS, or SaaS options
  * Managing tradeoffs between licensed products, SaaS, and IaaS, including timing considerations for longer-term of commitment with most licenses and SaaS options
  * Understanding when to engage or coordinate with an IT Asset Management (ITAM) or Software Asset Management (SAM) function in your organization (via the Intersecting Disciplines Capability)

## Definition

FinOps helps organizations manage the variable use, consumption based services prevalent in cloud platforms and increasingly seen in other technology categories. In most organizations, licensed software, public cloud, private cloud, data center, and Software as a Service (SaaS) products are used in hybrid combination. This environment can be more complex and diverse in organizations with long-established on-premises data centers when adopting cloud, AI, data cloud platforms and other newer technology categories.

Licenses may be for operating systems, individual software components of applications, databases, or even platform software. SaaS solutions may provide hosted enterprise applications like CRM, databases, messaging platforms or even data warehouses. SaaS solutions can also be used to deploy, monitor, provide analytics and secure your organization. In some organizations, the cost and scale of SaaS or licenses may be significant, and may represent a large area of focus for FinOps teams because of the scale of its impact on value.

While the level of detail, granularity of cost, or amount of billing data is generally not as great for SaaS or license usage, the usage is still typically variable and consumption based. Depending on the way these products are purchased, their billing data may be included in the cloud billing data, or it may be received separately from the software publisher or vendor supplying the software. SaaS products and software licenses are often used in place of IaaS cloud services, so FinOps teams should have a clear understanding of how they are being used, how to quantify their value when used, and effectively manage their use over time.

Understanding both how the organization is buying software licenses and SaaS products is critical, and must involve the Procurement persona, who is typically responsible for procuring licenses and software on behalf of the organization. In addition, if the organization has an ITAM or SAM function or team, integrating with that team will be crucial to share information about how externally purchased licenses and software are being used, to coordinate on planning for the use or retirement of these services, and to assess and manage the risk associated with contractual requirements in these contracts.

Software and SaaS licenses, like cloud, often have variable cost elements, charging by the seat, by the user, by the core, by the amount of storage, or many other billing mechanisms. In addition to the primary charges for these, there may be secondary cost meters – access count, API usage, data stored, or the like – which can add more cost (and complexity). Unlike most public cloud use, license and SaaS contracts typically are for multiple years, or for perpetual license rights. They often allow for “true ups,” letting an organization increase the number of licenses they are paying for, but not “true downs” to decrease the number. Additionally, because all license vendors don’t have a real-time view of what is being used by its customers, audits and compliance can be called for, and if more licenses are being used than are allowed, penalties can attach. To add to this, there are often complex (and rapidly changing) rules from software vendors covering when and how its licenses can be used in the cloud, versus in data centers owned by the customer (e.g. Bring Your Own License or BYOL rights, or Azure Hybrid Benefits). ITAM, Procurement, and Legal teams are best suited to help FinOps teams to understand specifically what contracts are in place, what their terms are, and where these options can be considered in the technology estate.

Licenses and SaaS products can be purchased in a variety of ways. When purchased as part of an organizational agreement, they typically provide for a certain number of users or processor cores. The organization can install these software in their data center or cloud environments subject to the vendor’s restrictions. In the case of licensed operating systems or databases, cloud providers may include the cost of licenses in certain versions of cloud resources that they offer, and charge by the minute for. In other cases, the licenses are more expensive than the virtual resource running it, and the cost of licenses may or may not be covered by other discounts that apply to these resources, like savings plan, committed use, or reserved instance discounts. Increasingly, some licenses and SaaS products are also available through the cloud provider Marketplaces. Marketplace can provide more of an on-demand experience, allowing organizations to purchase licenses for a specific purpose, and then stop paying for them when they are no longer needed, rather than having to buy perpetual licenses with multi-year support commitments. However, the terms of these marketplace purchases may be different from those used by your organization, and in cases where your organization already has the rights to use a certain piece of software in the cloud as BYOL, buying a duplicate through the Marketplace may be wasteful.

Working with Procurement and your ITAM team allows the FinOps team to determine the best guidance to provide all personas in Engineering and Product teams on how to procure and use the licenses they need. Additionally, the FinOps team can then plan for any adjustments to existing license or SaaS purchases that the organization would find value in changing over time. Unlike public cloud, most license and SaaS purchase agreements cannot be changed as quickly, and some may take years to adjust or get out of. Careful planning must be done, well in advance, with procurement and ITAM / SAM personas to make these changes happen.

## Maturity Assessment

####  Crawl 

  * Software licenses and SaaS products are billed separately but complex cost sharing or allocation isn’t required in showback reporting
  * There is a general understanding of what licenses are used in cloud environments, and the use cases, variety, and terms are not complex
  * There is an understanding of what SaaS products are used that integrate with, deploy, monitor, provide analytics about or secure your applications and infrastructure
  * Key contacts are identified in Procurement, Financial Planning & Analysis (FP&A)/Technology Business Management (TBM), Information Security, and SAM, and there is a basic understanding of the process to acquire licenses/software
  * Existing tooling or reporting to track software assets is identified, or the need to use tools is minimal
  * There is an understanding of how overages are charged when consumption exceeds agreed-upon contract thresholds or when costs change (increase/decrease) due to tiered pricing models

####  Walk 

  * License and SaaS product billing data are provided in FOCUS format, so that showback includes licensing/SaaS spend coming through cloud service provider (CSP) Marketplace or subscription, needed to support more complex sharing and allocation requirements
  * Bring Your Own License (BYOL) or other more complex use cases are used, which require review and analysis to maintain
  * More mature use of licenses and SaaS requires FinOps to be consulted during the licensing/SaaS renewal process to provide data to help make decisions
  * ITAM/SAM personas collaborate when reviewing new workloads being built, migrating, or being upgraded in the cloud that require licensing
  * FinOps is included during the review/approval process when new licensing/SaaS is acquired outside of cloud service providers, or on strategies for altering the use of licenses from prior, data center based system design and architecture
  * Forecasting is updated to include software costs to reflect the total cost of a service/application
  * Licenses and SaaS products are procured through a variety of channels, and tracking is required to manage the use of licenses as they are added or removed in a variable way
  * For consumption-based software, usage is tracked against total contract dollar amount and against thresholds that, if exceeded, would result in overages

####  Run 

  * The cost of licenses and SaaS products are dynamically included in showback and chargeback, using FOCUS formats
  * Licenses and SaaS products are procured using other methods of procurement (i.e. Marketplace, direct, value-added reseller), and/or with complex terms
  * Automation of retrieving the billing data from the software provider is leveraged when possible
  * FinOps partners with others (i.e. Engineering, ITAM/SAM, Procurement) to perform usage analysis and identify optimization opportunities well ahead of the next renewal for each software product
  * Forecasting/estimating the future contract is done after optimization is completed
  * Showback for total cost of ownership (TCO) includes software spend
  * FinOps and SAM leverage the same tooling and data sources for software contract details, usage and spend

## Functional Activities

####  ![](https://www.finops.org/wp-content/uploads/2024/03/FinOps-Practitioner.svg) FinOps Practitioner 

**As someone in the FinOps team role, I will…**

  * Determine which cloud resources are billed with software licenses or using licenses purchased from a cloud provider marketplace
  * Determine what SaaS products are used in the organization that integrate with, deploy, monitor, provide analytics about or secure my cloud-based applications and infrastructure
  * Determine which cloud resources have been configured with BYOL or can be
  * Participate in reviews/discussions where new or migrating workloads will require licensing or SaaS integration
  * Work to understand the use cases, contracts, channels, and restrictions in place for buying licensing and SaaS in use
  * Establish models for understanding and conveying the value of various tradeoffs between different software architectures, license use, license substitution, application modernization, etc.

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Product.svg) Product 

**As someone in a Product role, I will…**

  * Leverage information from FinOps and SAM on licensing and SaaS to help determine total costs of a resource/group of resources
  * Be mindful of licensing and SaaS when designing new products/features and be sure to include them along with cloud costs
  * Understand and communicate plans over long term for license use and tradeoffs

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Finance.svg) Finance 

**As someone in a Finance role, I will…**

  * Include licensing and SaaS costs when planning and forecasting

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Procurement.svg) Procurement 

**As someone in a Procurement role, I will…**

  * Work with Engineering, FinOps, and Finance when procuring through a CSP marketplace, negotiating a private purchase contract, or working with a reseller to understand the needs, costs, and likelihood of use over the entire contract term
  * Review all available options for procurement of licensing/SaaS and how it may impact spend thresholds set as part of CSP enterprise agreements

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Engineering.svg) Engineering 

**As someone in an Engineering role, I will…**

  * Consider existing/BYOL licenses vs. SaaS when architecting new infrastructure or software in the cloud
  * Provide resource metadata (through tagging) to make it easy to identify resources should they be eligible for BYOL
  * Communicate with FinOps and SAM when licenses are no longer needed or there are plans to terminate a SaaS contract
  * Work with FinOps and SAM to determine if changes to existing workloads impact licensing or change the volume of consumption for SaaS
  * Work with FinOps and SAM to ensure cloud resources have been reviewed and optimization has taken place before license/contract renewal

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Leadership.svg) Leadership 

**As someone in a Leadership role, I will…**

  * Ensure there is a process in place for reviewing requests for new licenses or SaaS to ensure that teams do not purchase what already exists or has similar functionality
  * Ensure the organization is balancing best value decision making when choosing the model for deploying software to support business functions

####  ![](https://www.finops.org/wp-content/uploads/2025/03/ITAM.svg) ITAM 

**As someone in an Allied Persona role, I will…**

  * Make available a summary of unallocated or hybrid use license entitlements with budget/ownership information that can be used by the FinOps team to optimize spend on cloud services .
  * Track and manage the license position of cloud resources by using the information provided by the FinOps team
  * Manage software license renewals, optimize licenses already migrated to cloud, and maximize use of BYOL where more economical than marketplace software
  * Use the information from the FinOps practitioner on marketplace software purchased and analyze those against existing entitlements

## Measures of Success & KPIs

  * License/SaaS costs are visible and reported on
  * Licenses purchased through the CSP marketplace are fully utilized
  * Resources requiring a license are compliant

## KPIs

#### Active-to-Provisioned User Ratio

Measures how effectively provisioned user accounts translate into active usage by comparing the number of active users to the total number of provisioned users. The formula quantifies the proportion of accounts that are delivering ongoing value rather than simply existing in an enabled state. Higher ratios indicate strong engagement and efficient access management, while lower

Read more

#### License Utilisation Rate

Measures how effectively purchased SaaS licences are assigned by comparing the number of licences in use to the number purchased. The formula quantifies the proportion of entitlements that are actively allocated, providing visibility into unused or over-provisioned licences. Higher utilisation rates indicate closer alignment between purchased capacity and assigned users, while lower rates highlight opportunities

Read more

#### SaaS Optimization ROI

Measures the effectiveness of SaaS optimisation efforts by comparing realised cost savings to the cost of implementing those actions. The formula quantifies the return generated from optimisation activities such as licence rightsizing, deprovisioning, tier adjustments or application rationalisation. Higher ROI values indicate that optimisation efforts are delivering proportionally greater financial benefit relative to their cost,

Read more

#### SaaS Unit Cost

Measures the efficiency of SaaS spend by comparing total SaaS cost to a defined unit of consumption. The formula quantifies the amount of cost required to deliver a single unit of value, such as an active user, transaction, API call or data volume, rather than relying on licence counts alone. Lower unit cost values indicate

Read more

## Inputs & Outputs

  * Cloud provider billing and usage data
  * Licensing data from SAM/ITAM tools
  * SaaS contract details
  * Architecting for Cloud to adjust use of licenses and SaaS products in software over time
  * Marketplace data well integrated and tagged via Data Ingestion
  * Input from license servers/license tracking services in use
  * Tagging or other ways to identify where BYOL are being used independently of the licensed type of resource in the cloud billing data (where a virtual resource sold by the cloud provider without a license is running software or OS installed by the customer)

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success_kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

##### Related Assets

[ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) Shifting from Public Cloud to Include Private Cloud, SaaS, Licensing, and Communications ](<https://www.finops.org/assets/shifting-from-public-cloud-to-include-private-cloud-saas-licensing-and-communications/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) How FinOps Tools and Practices Can Help Control Licensing and Other Costs (Expedia Group) ](<https://www.finops.org/assets/how-finops-tools-and-practices-can-help-control-licensing-and-other-costs-expedia-group/>) [ ![](https://www.finops.org/wp-content/uploads/2022/10/guide.svg) IBM Cloud Licensing Management Guide ](<https://www.finops.org/wg/ibm-cloud-licensing-management-guide/>) [ ![](https://www.finops.org/wp-content/uploads/2022/10/guide.svg) Microsoft Licensing Management Guide ](<https://www.finops.org/wg/microsoft-licensing-management-guide/>) [ ![](https://www.finops.org/wp-content/uploads/2022/10/guide.svg) Oracle License Management Guide ](<https://www.finops.org/wg/oracle-license-management/>)
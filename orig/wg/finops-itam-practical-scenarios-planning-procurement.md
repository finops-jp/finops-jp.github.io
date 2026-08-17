# FinOps & ITAM Practical Scenarios: Planning & Procurement

**Summary:** To maximize technology value, organizations are increasingly unifying FinOps and ITAM to coordinate planning and procurement across the asset lifecycle. These teams collaborate early to model TCO, normalize complex billing metrics via standards like FOCUS, and select the most cost-efficient vendor platforms before contract lock-in. This integrated approach prevents financial risks like “shelfware” and over-commitment while optimizing marketplace strategies to balance cloud burn-down with license compliance.

## Table of Contents

  * [Unified FinOps and ITAM Practical Scenarios Overview  
](<#unified-finops-itam-scenarios>)
  * [Scenario: Platform or Vendor Selection Decision Making](<#scenario-platform-vendor-selection>)
  * [Marketplace Purchase Channel Strategy](<#marketplace-purchase-channel-strategy>)
  * [Unified Commitment Planning to Avoid Over-Buying](<#unified-commitment-planning>)
  * [Other FinOps & ITAM Scenarios](<#other-finops-itam-scenarios>)
  * [Acknowledgments](<#acknowledgments>)

According to the State of FinOps 2026 Report, [collaboration between FinOps and ITAM teams continues to grow](<https://data.finops.org/library/#26929>) (up 20% since 2025). With that growth comes new scenarios where their approaches to technology value management intersect, creating both challenges and opportunities for organizations looking to maximize the combined impact.

These practical planning and procurement scenarios illustrate where FinOps and ITAM teams commonly deliver greater value when they work together across the technology asset lifecycle. These examples span both enterprise level decisions, such as informing multi year planning and strategic investment choices, and asset level activities, where joint visibility and continuous management and governance improve efficiency, optimize value and reduce risk.

Practitioners contributed these scenarios to help readers recognize the situations where collaboration between FinOps and ITAM becomes more effective than either discipline acting alone, and to provide guidance on how to work through the associated challenges.

Every organization will differ in structure, scope, and maturity, so not every scenario will apply directly, but the patterns reflect real world experience and are intended to inform, inspire, and support practical action. The scenarios are not an exhaustive list, just high impact ones identified.

_

Tip: For a more comprehensive look at the intersection of FinOps and ITAM, refer to [this overview paper](<https://www.finops.org/wg/finops-itam-optimize-cost-risk-value/>). Where a scenario is aligned with one or more FinOps Framework Capabilities, the assets 

_[_Applying the FinOps Framework to SaaS_](<https://www.finops.org/wg/applying-the-finops-framework-to-saas/>) _and_[ _FinOps for Data Center: Applying the FinOps Framework_](<https://www.finops.org/wg/finops-for-data-center-applying-the-finops-framework/>) _can be used in conjunction with the scenario to provide further information and considerations. More information on the intersection of FinOps and ITAM can be found in[this overview resource](<https://www.finops.org/wg/finops-itam-optimize-cost-risk-value/>)._

Review additional FinOps & ITAM key scenarios where the collaboration of these two teams can deliver increased technology value.

  * [Plan & Procure](<https://www.finops.org/wg/finops-itam-practical-scenarios-planning-procurement/>)
  * [Deliver & Govern](<https://www.finops.org/wg/finops-itam-practical-scenarios-deliver-govern/>)
  * [Optimize & Evolve](<https://www.finops.org/wg/finops-itam-practical-scenarios-optimize-evolve/>)
  * [Realize Value & Reinvest](<https://www.finops.org/wg/finops-itam-practical-scenarios-realize-value-reinvest/>)

## Unified FinOps and ITAM Practical Scenarios Overview

![FinOps and ITAM collaboration scenarios](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201999%20749'%3E%3C/svg%3E)

_Note: Scenarios can be considered independently of each other. There may be some overlap in guidance and practical steps between examples, where they have overlapping core components._

### What Are Plan & Procure Scenarios That FinOps & ITAM Encounter?

Plan and Procure seeks to understand customer requirements, build business cases, model ROI, and align technology investments to strategic objectives. Joint scenarios focus on detailed modeling for vendor and platform selection options. Collaboration is critical for accurately estimating and forecasting multi-year contractual commitments to avoid over or under-committing. It also governs marketplace purchasing strategies, comparing options like subscription vs. perpetual licensing or choosing optimal procurement channels.

## Scenario: Platform or Vendor Selection Decision Making

  * _Organizational Impact: 5 out of 5_
  * _Complexity: 4 out of 5_

This scenario mandates early collaboration (Shift-Left) to model and select the most cost-efficient vendor platform, procurement vehicle, and pricing options prior to technology lock-in and contract execution.

It requires detailed scenario modeling to assess various procurement methods and complex billing metrics. The central joint activity is determining the optimal model—such as Pay-As-You-Go (PAYG) versus commitment-based agreements, or Bring Your Own License (BYOL) versus license-included options—based on accurate forecasts and entitlement reviews.

This process is critical for avoiding hidden costs and mitigating significant financial and compliance risk associated with vendor lock-in.

### Objectives

  * Achieve the most cost-efficient contract selection by modeling future consumption against complex pricing tiers.
  * Maximize negotiated SKU-level pricing and volume discounts.
  * Ensure the selected solution aligns with the technology strategy, business value and minimizes risk.

### Success Criteria

  * Procurement occurs via the optimal channel (Marketplace, direct, reseller).
  * The financial model accurately anticipates spending, especially anticipating complex items like monthly overage hits.
  * Forecasted consumption accurately matches contractual commitments (avoiding shelfware).

### KPIs

  * Total Cost of Ownership (TCO)
  * Forecasting accuracy
  * Percentage of available discounts received/negotiated

### FinOps Framework Capabilities

The following domains and capabilities should be considered in relation to this scenario.

  * **Understand Usage & Cost: **Data Ingestion, Reporting & Analytics
  * **Quantify Business Value:** Planning & Estimating, Forecasting, Unit Economics
  * **Optimize Usage and Cost:** Rate Optimization, Licensing & SaaS

### Skills Required

  * **License Entitlement Analysis:** Ability to interpret complex entitlement rules to determine whether a vendor’s licensing model aligns with organizational usage patterns, avoids hidden constraints and supports long term flexibility.
  * **Contractual Restriction Assessment:** Skill in identifying contractual limitations, such as deployment rights, concurrency rules or geographic constraints, that may affect the viability or scalability of a chosen platform.
  * **Audit Exposure Evaluation:** Capability to assess potential audit risk based on vendor behavior, entitlement structure and anticipated usage, ensuring platform selection does not introduce unnecessary compliance liabilities.
  * **Vendor Terms and Discount Review:** Experience assessing vendor pricing, discount structures and incentive models to clarify total commercial value and understand how terms may differ between cloud, SaaS and traditional licensing agreements.
  * **Advanced Usage Data Analysis:** Proficiency in analyzing historical and projected consumption patterns to determine whether usage based pricing models are cost effective and sustainable for the organization.
  * **Consumption Telemetry Interpretation:** Ability to interpret workload and service telemetry to understand what drives consumption, enabling accurate comparison of vendor performance and cost-to-value characteristics.
  * **Financial Modeling and TCO Calculation:** Skill in building financial models that incorporate licensing, consumption, operational overhead and renewal implications to compare vendors on a total cost of ownership basis.
  * **Forecasting and Scenario Modeling:** Expertise in running demand projections and what-if models to evaluate how future growth, optimization or architectural changes could influence cost and vendor suitability.
  * **Negotiation and Commercial Strategy:** Capability to negotiate at SKU level, balancing pricing, commitment flexibility and contract structure to secure terms that support both near term needs and long term strategic positioning.

### Practical Steps for this Scenario

  1. **Embed FinOps and ITAM early through Shift Left governance.** Engage both disciplines in technology evaluation forums before budget approval so entitlement considerations, forecasted consumption patterns and commercial risks are assessed prior to vendor lock in.
  2. **Establish a unified decision model for comparing vendor and platform options.** Develop scenario models that evaluate total cost of ownership across alternatives, incorporating licensing constructs, usage based pricing, entitlement requirements and procurement vehicle choices.
  3. **Analyze procurement paths and commercial models side by side.** Compare options such as PAYG, commitment based agreements, subscription models, Marketplace purchasing and BYOL versus license included packages to identify the structure that delivers the most cost efficient outcome.
  4. **Validate entitlement opportunities and constraints upfront.** Review existing on premises or enterprise agreement entitlements to determine whether BYOL can be applied, where it is restricted, and how entitlement alignment impacts long term cost or compliance risk.
  5. **Produce accurate consumption forecasts to inform commercial decisions.** Use historical usage patterns, workload characteristics and growth assumptions to model expected consumption and determine which pricing tiers, commitment levels or discount programs are appropriate.
  6. **Pre negotiate rates and terms** using forecast backed demand signals.
  7. **Leverage accurate forecasts and entitlement analysis** to negotiate tiered or volume based discounts, contract flexibility and SKU level pricing before selecting the platform or vendor.
  8. **Assess long term compliance, operational and financial risks prior to commitment.** Evaluate how each vendor’s licensing rules, billing metrics, integration requirements and renewal terms may introduce hidden costs or audit exposure, ensuring these risks are understood before execution.

### Key Personas

  * **FinOps Practitioner:** Models consumption, TCO and pricing scenarios to determine the most cost efficient vendor and procurement option.
  * **ITAM / SAM:** Assesses entitlement rules, contractual limits and compliance risk to confirm which licensing models are legally viable and audit safe. Advise on licensing options/BYOL quantities/options available to include in cost modeling.
  * **Procurement / Sourcing:** Leads commercial negotiations, aligns purchasing channels and secures pricing, terms and SKU level discounts based on analytical input.
  * **Finance:** Validates financial models, ensures budget alignment and assesses long term financial implications of vendor and contract choices.
  * **Engineering / Architecture:** Provides workload, integration and technical fit insights that influence consumption forecasts, licensing suitability and platform viability.

### Operating Cadence

Engagement must occur early, often via a ‘Deal Desk’ model, before EA renewals, Marketplace commitments or pre-budget approvals to avoid technology lock-in.

### Risks

  * Committing to agreements based on inaccurate forecasts (leading to shelfware).
  * Financial and compliance risk from accepting unfavorable vendor terms.
  * Loss of flexibility due to vendor lock-in from long-term commitments.
  * Compliance risk from not understanding/misinterpreting license terms and conditions

### Trade-offs

  * Balancing higher potential discounts from bundling and term commitments against flexibility.

### Dependencies

  * Requires a consistent data specification such as FOCUS and access to entitlement data.

### Business Value of Outcome

  * Secures the most advantageous SKU-level and enterprise pricing before commercial terms are locked in, significantly impacting TCO.
  * Ensures optimal utilization of existing license commitments, while avoiding over-commitment that generates shelfware costs.
  * Mitigates future legal risk and audit exposure by embedding compliance requirements into the procurement channel decision.
  * Provides Procurement with comprehensive data (FinOps usage + ITAM entitlement) for stronger negotiations.

### Data

  * Historical and current usage data including license availability.
  * SKU-level utilization metrics.
  * Entitlement data.
  * Vendor contract terms (including soft/hard limits, overage rates, and discount tiers).

### Tooling

  * Integrated platforms capable of complex scenario modeling and tracking purchases made via reseller channels or Cloud Marketplaces.

### Dashboards/Metrics

  * TCO analysis reports.
  * external benchmarking data (discount expectations by industry).

### Continuous Improvement

  * Regularly audit actual usage against the pre-purchase forecast (back-check) to refine future modeling techniques for subsequent renewals.
  * Implement organizational education to ensure Procurement understands the cost drivers influenced by engineers.

### Anti-patterns

  * Allowing decentralized purchases without ‘deal-desk’ level vetting.
  * Failing to compare different license types (e.g., seat-based vs. consumption-based models) when modeling future costs.

## Marketplace Purchase Channel Strategy

  * _Impact: 4 out of 5_
  * _Complexity: 3 out of 5_

Global organizations are buying software through hyperscaler marketplaces (AWS Marketplace, Azure Marketplace, GCP Marketplace, or others) as well as through classic enterprise agreements and direct vendor deals. Marketplace spend is growing fastest because engineering teams can self-serve and use cloud commits.

### Challenges in Entitlement and Compliance

  * Entitlements are fragmented between the SAM tool, vendor portals and multiple marketplace tenants.
  * Some marketplace SKUs are not mapped to existing contracts, which means ITAM cannot prove compliance or avoid double pay.
  * Cloud Marketplace purchases contain license usage and audit clauses that ITAM may be unaware of.

### Commit Management and Commercial Misalignment

  * Marketplace spend can consume cloud commitments that FinOps is actively trying to burn down, while Procurement may simultaneously be pushing Enterprise Agreement (EA) minimums with the same vendors to secure tier-based discounts.
  * These competing pressures create risk of underutilization, overcommitment, or duplicated commercial obligations.

### Governance and Buying Controls

  * There is weak policy on who can buy what, through which channel, and under which legal entity or billing account.
  * Self service purchasing increases exposure to shadow IT, uncontrolled spend and misaligned commitments.

### Why This Requires FinOps and ITAM Collaboration

This is primarily a Cost and Risk scenario with an Efficiency upside. Marketplace procurement forces FinOps and ITAM to operate as a single model rather than parallel functions because it introduces:

  * Unique entitlement challenges e.g. fragmented visibility across channels, increasing compliance gaps.
  * Direct consumption of cloud commitments, requiring coordinated optimization to avoid underutilization or overcommitment.
  * Elevated governance and joint policy needs to control channels, approvals, and purchasing entities that better mitigate self-service buying risks
  * Opportunities for stronger unified vendor leverage and cost savings, alongside risks such as vendor lock in, audit exposure, and misaligned commitments if the disciplines remain siloed.

### Objectives, Success Criteria & KPIs

  * Single enterprise view of all software sourced through marketplaces and non marketplace channels for each vendor and product or SKU, enabling converged FinOps and ITAM insights into entitlement utilization and cost allocation.
  * Channel strategy per vendor defined and enforced, for example targeting 50 percent of eligible software for Vendor X to be sourced via marketplace to consume cloud commit, or explicitly not via marketplace where the EA provides a better rate or terms, fostering collaboration to balance commit burn down with entitlement compliance.
  * Zero unmanaged marketplace purchases above a defined threshold, for example zero percent of marketplace spend without mapped entitlement and owner, addressing governance risks through joint oversight.
  * Reduction in duplicate licensing, for example a 25 percent reduction in overlapping SKUs bought via EA and marketplace within 12 months, highlighting opportunities to eliminate waste through integrated entitlement management.
  * Commitment coverage optimized, for example 75 percent of marketplace software spend contributing to the correct cloud commit, ensuring the marketplace role in commit satisfaction aligns with broader FinOps goals rather than conflicting with other channels.
  * Forecast accuracy for marketplace software within 10 percent on a rolling 12 month view, mitigating risks of overcommitment or underutilization through collaborative data normalization and planning.

### FinOps Framework Capabilities

The following domains and capabilities should be considered in relation to this scenario.

  * **Understand Usage and Cost Domain:** Data Ingestion; Allocation; Reporting & Analytics; Anomaly Management
  * **Quantify Business Value Domain:** Planning & Estimating; Budgeting; Forecasting
  * **Optimize Usage & Cost Domain: **Licensing & SaaS; Rate Optimization
  * **Manage the FinOps Practice:** FinOps Practice Operations; FinOps Education & Enablement; Policy & Governance; Invoicing & Chargeback; Onboarding Workloads; FinOps Tools & Services; Intersecting Disciplines

### Skills Required

  * **Licensing and Entitlement Expertise:** Understanding enterprise licensing and use rights for key vendors and their marketplace SKUs, including how marketplace entitlements differ from EA or direct purchase models. Consider using Private Offers allowed by most Marketplaces that allow for pre-negotiated pricing but leverages the marketplace for commitment burn-down or credit promotions.
  * **Financial and Commercial Modeling:** Financial modeling of buy versus subscribe, EA versus marketplace, and commit versus pay as you go, with emphasis on marketplace commit consumption benefits and associated risks compared to other channels.
  * **Cloud Billing and Architecture Fundamentals:** Cloud architecture fundamentals, including how private offers, SaaS contracts and metered billing appear on the bill, and what these patterns mean for entitlement tracking.
  * **Data Integration and Normalization:** Data engineering and analytics skills to normalize marketplace billing data with SAM and CMDB data, enabling converged views.
  * **Vendor and Sourcing Strategy:** Vendor management, negotiation and sourcing strategy, leveraging combined marketplace and EA volumes for improved commercial terms.
  * **Governance and Policy Design:** Governance design, policy drafting and workflow or approval path design, with focus on channel specific rules to mitigate self service purchasing risks.
  * **Collaboration and Change Management:** Communication and change management with product teams and engineering, promoting collaboration to align on opportunities such as faster provisioning with reduced compliance risk.

### Practical Steps

  1. **Discover and Baseline:**
     1. Aggregate marketplace invoices and usage records from all clouds, tag or map each line item to a vendor, product, environment and business owner.
     2. Reconcile those items against ITAM entitlement data and existing contracts to identify overlaps and gaps, emphasizing marketplace’s role in commit satisfaction and the need for FinOps-ITAM collaboration to map entitlements across channels.

  * **Define Channel Strategy and Policies:**

  1.      1. For top vendors, agree preferred route to market by scenario, for example dev/test or short-term project buys via marketplace to use commit, steady-state production deals via EA, balancing commit optimization with entitlement compliance.
     2. Document rules for EA/BYOL versus marketplace channels, who can approve private offers, which legal entities and billing accounts can be used, establishing governance to control buying channels and reduce risks like duplicate pay.

  * **Integrate Processes and Tooling:**

  1.      1. Implement workflows in IT Service Management (ITSM) and procurement systems so marketplace private offers and higher value subscriptions route through the same approvals as EA purchases but with FinOps input on commit burn down and ITAM on entitlement mapping.
     2. Normalize SKUs between the SAM tool, CMDB and cloud billing so entitlement, deployment and cost lines can be linked, enabling opportunities for unified analytics and risk mitigation.

  * **Operate a Joint Marketplace Review**

  1.      1. Monthly (or as frequently as needed) review where FinOps and ITAM review marketplace pipeline, renewals and new requests, including impact on cloud commit, license position and vendor strategy, fostering convergence to address commit vs. channel trade-offs.
     2. Trigger guardrails, for example automatic checks for duplicate licensing, alerts if marketplace SKUs do not accrue to the correct commit, or if spend is happening from non-standard accounts, enhancing governance collaboration.

  * **_Optimize and Renegotiate_**

  1.      1. Use the combined view of marketplace and EA spend to negotiate better discounts, flex up and down on commit and restructure deals, for example moving steady state workloads out of the marketplace into EA or vice versa to balance commitments, capitalizing on opportunities for vendor leverage while managing lock-in risks.

### Key Personas

  * **FinOps & ITAM: **collaborating to own marketplace cost views, commit coverage and budget conversations, entitlements, license positions, and vendor commercial strategy (including channel strategy).
  * **Cloud platform or engineering:** own technical enablement of marketplaces, tagging and account structure, and sponsor guardrails for governance.
  * **Procurement and sourcing:** run RFPs, manage EAs and private offers, ensure legal and commercial terms are consistent across channels.
  * **Finance:** align budgets and forecasts and validate savings from converged approaches.
  * **Security:** signs off on allowed marketplaces, vendors and data residency constraints, addressing risks in joint reviews.

### Operating Cadence

  * Monthly marketplace review across FinOps, ITAM, Procurement and Cloud platform/engineering to discuss commit satisfaction, entitlement gaps, and governance enforcement.
  * Quarterly vendor strategy review per strategic vendor that includes channel mix and marketplace volumes, evaluating opportunities and risks.
  * Pre-commitment and pre-renewal checkpoints for any large EA or cloud commit negotiation to validate impact of marketplace strategy, ensuring collaborative decision-making.

### Risks

  * Risk of double pay or shelfware where the same product is bought via EA and marketplace under different teams. Mitigated by entitlement reconciliation and channel policy.
  * Over-commitment risk, for example committing to large EAs while also using marketplace to burn cloud commit, mitigated by joint forecasting for both software and cloud spend, highlighting marketplace’s unique commit ties.
  * Vendor lock-in where heavy marketplace use or private offers tie workloads to one cloud, mitigated by architecture review and explicit decisions on where lock-in is acceptable, with collaboration identifying multi-cloud opportunities.

### Dependencies

Dependency on accurate tagging and normalized SKUs, without which neither FinOps nor ITAM can see the true picture, underscoring the need for integrated data for governance and risk management.

### Trade-Offs

Trade-off between self-service speed (marketplace opportunity) and control (governance risk), balanced through collaborative policies.

### Business Value of Outcome

  * Reduction in total software and cloud spend for marketplace sourced products through removal of duplicate licensing and better use of discounts and commit, driven by converged entitlement and commit management.
  * Improved vendor leverage by taking a unified volume view across marketplace, EA and direct purchases, unlocking negotiation opportunities.
  * Faster delivery of approved software to engineers because the rules of engagement are clear, including who can self-service from the marketplace and when approvals are required, enhancing efficiency while mitigating governance risks.
  * Reduced audit and non-compliance exposure, because every marketplace subscription is linked to a known entitlement, contract and owner, addressing marketplace-specific fragmentation.

### Data, Tooling, Dashboard & Metrics

  * Cloud billing and marketplace reports from each hyperscaler, including private offer details for commit tracking.
  * ITAM or SAM platform with entitlement, contract and deployment data, plus CMDB for ownership and environment, integrated with FinOps tools.
  * Procurement and contract repositories that record EA terms, price lists, support levels and commit obligations, normalized across channels.
  * Dashboards that show by vendor and product, spend by channel, marketplace spend contribution to cloud commit, license compliance status and forecasted run rate, enabling collaborative insights.
  * Cost and risk heat maps that highlight unmanaged marketplace subscriptions, orphaned accounts and SKUs not aligned to any entitlement, supporting governance and risk mitigation.

#### Quick wins

  * Enforce a basic “no credit card marketplace purchases” rule and move to central accounts to improve governance immediately.
  * Build a simple joint dashboard of marketplace spend by vendor and tag it with owner and channel, facilitating early collaboration on entitlements and commits.

#### Longer-term Improvements

  * Embed marketplace checks into standard architecture and design reviews and into the vendor lifecycle, ensuring ongoing convergence.
  * Use insights from the joint FinOps and ITAM view to reshape future EAs and cloud commit deals, optimizing channels for opportunities like better rates.

#### Anti-patterns

  * Treating marketplaces as a separate channel owned only by engineering or only by procurement, which hides true volume and spend, preventing effective entitlement management and commit optimization.
  * Assuming marketplace always equals better pricing (or else always equals worse pricing) without modeling both options against specific uses, leading to missed opportunities or increased risks.
  * Tool-only fixes, for example buying a connector between SAM and cloud billing without putting in place policies and operating rhythm, failing to address governance and collaboration needs.

## Unified Commitment Planning to Avoid Over-Buying

  * Impact: 4 out of 5
  * Complexity: 4 out of 5

In many organizations, commitment planning becomes fragmented when cloud, SaaS, hardware, and environment provisioning are handled by separate teams with limited visibility of each other’s pipelines.

This often leads to unnecessary buffer purchasing, misaligned commitments, or duplicated spend across overlapping channels.

The following scenario illustrates how unified planning across FinOps and ITAM can help avoid over buying and ensure commitments reflect real demand.

A global enterprise is launching a new sales team in Latin America and requests: 100 SaaS based CRM per seat licenses, 100 web conferencing licenses, 100 laptops for new hires and 10 demo environments in the region for sales enablement and client demos.

### Objectives & Success Criteria, KPIs

  * Provision and procure required resources within 120 days to meet the launch timeline.
  * Achieve 100% license compliance and avoid audit exposure.
  * Optimize SaaS spend by reducing unused license risk.
  * Deploy a cloud-based demo environment in the region.
  * Maintain hardware procurement within budget variance ≤5%.

### FinOps Framework Capabilities

The following domains and capabilities should be considered in relation to this scenario.

  * **Understand Usage and Cost Domain:** Data Ingestion, Allocation, Reporting & Analytics, Anomaly Management
  * **Quantify Business Value:** Forecasting, Budgeting
  * **Optimize Usage and Cost:** Architecting for Cloud, Rate Optimization, Workload optimization, Licensing & SaaS
  * **Manage the FinOps Practice:** FinOps Tools and Services, Policy and Governance, Intersecting Disciplines

### Skills

  * **SaaS Licensing Interpretation:** Understand how per seat, per use, and tiered SaaS entitlements work so commitments match the real demand profile.
  * **SaaS Financial Modeling:** Model subscription tiers and renewal patterns to avoid committing to unused capacity.
  * **Regional Demo Environment Architecture:** Design a lightweight, repeatable cloud pattern for in region demo environments so cost and capacity are predictable.
  * **Cloud Commitment Modeling:** Quantify commit versus on demand spend for demo workloads and new teams, highlighting breakeven points and risk bands.
  * **Hardware Procurement and Lifecycle Management:** Ensure laptop purchasing aligns with onboarding cycles and avoids bulk over ordering or refresh waste.
  * **Usage Forecasting Analytics:** Forecast seat consumption and demo usage so SaaS and cloud commitments reflect realistic adoption.
  * **Governance and Approval Controls:** Apply demand validation and cross functional approvals so commitments, licenses and hardware orders stay intentional and justified.

### Practical Steps

  * Confirm headcount growth and CRM usage assumptions.
  * Apply guardrails (approved SaaS tiers, device standards).
  * Model CRM, web conferencing license options to compare per-seat vs. enterprise tier pricing.
  * Model web conferencing license options including use of existing licenses or agreements vs. per-seat vs enterprise tier pricing.
  * Evaluate cloud regional costs for the demo environment (compute, storage, networking).
  * Align hardware procurement of laptops to ensure they meet security and compliance standards.
  * Embed approval gates for cost and vendor selection.
  * Joint review and approval from FinOps + ITAM + Procurement to sign-off before purchase and environment deployment.
  * Monitor, optimize and track SaaS utilization, hardware deployment, and demo environment cost, demand and usage.

### Key Personas & Operating Cadence

  * **FinOps & ITAM Practitioner:**
    * Monthly SaaS & cloud forecast
    * Monthly optimization sync
    * Monthly license compliance review
    * Daily monitoring of anomaly alerts

  *   * **Cloud Architect:** Design and validate the demo environment.
  * **Procurement:** Engaged at hardware and SaaS purchase points (Marketplace vs Vendor/Partner).
  * **Finance:** Quarterly budget alignment.
  * **All:** Pre-launch readiness reviews. Renewal cycle checkpoints.

### Risks, Tradeoffs & Dependencies

  * Unused license risk: Mitigated by phased license activation.
  * Non-compliance exposure: Addressed via ITAM validation.
  * Cost spikes: Mitigated by anomaly alerts
  * Regional latency & efficient design: Managed by selecting correct cloud region and cloud architecture involvement.
  * Vendor lock-in: Reduced by negotiating flexible SaaS tiers and single year cloud commitments which aligns with annual operating plans.

### Business Value of Outcome

  * Avoided audit fines and overcommitment costs.
  * Accelerated market entry with localized demo capability.
  * Enhanced customer experience through low-latency demos.

### Data, Tooling, Dashboard & Metrics

  * Data: SaaS utilization, license entitlements, cloud costs and hardware inventory
  * Systems: SAM + FinOps tooling
  * Dashboards: 
    * SaaS usage vs. license allocation.
    * Cloud costs
    * Optimization opportunities
  * Hardware deployment status.

**Continuous Improvement**

Start with phased SaaS activation and pilot demo environment. As new employees start to activate\acquire software licenses. As demand builds for the demo environment, scale up & out resources and commitments for those resources.

**Anti-patterns**

  * Over-purchasing licenses upfront.
  * Scaling out the demo environment too early.
  * Disconnected reporting between teams.

## Other FinOps & ITAM Scenarios

Learn more about the intersection of FinOps and ITAM in the context of additional, distinct scenarios where the collaboration of these two teams can deliver increased technology value.

  * [Plan & Procure](<https://www.finops.org/wg/finops-itam-practical-scenarios-planning-procurement/>)
  * [Deliver & Govern](<https://www.finops.org/wg/finops-itam-practical-scenarios-deliver-govern/>)
  * [Optimize & Evolve](<https://www.finops.org/wg/finops-itam-practical-scenarios-optimize-evolve/>)
  * [Realize Value & Reinvest](<https://www.finops.org/wg/finops-itam-practical-scenarios-realize-value-reinvest/>)

## Acknowledgments

We’d like to thank the following people for their work on this Paper:

[ ![Ron Brill](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Ron Brill Anglepoint ](<https://www.linkedin.com/in/ronbrill/>) [ ![Rich Gibbons](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Rich Gibbons Synyega ](<https://www.linkedin.com/in/rich-gibbons-microsoft-licensing/>) [ ![George Arezina](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) George Arezina TAKEDA ](<https://www.linkedin.com/in/georgearezina/>) [ ![Victoria Levy](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Victoria Levy Alteryx ](<https://www.linkedin.com/in/victoriarlevy/>) [ ![Lorant Kiss](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Lorant Kiss Delivery Hero ](<https://www.linkedin.com/in/lorantkiss/>) [ ![Keith Hiszem](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Keith Hiszem Cardinal Health ](<https://www.linkedin.com/in/keith-j-hiszem/>) [ ![Amy Ashby](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amy Ashby Under Armour ](<https://www.linkedin.com/in/amyashbymke/>) [ ![Colin Jack](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Colin Jack Flexera ](<https://www.linkedin.com/in/cojack/>) [ ![Robert Nieuwenhuizen](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Robert Nieuwenhuizen McKinsey ](<https://www.linkedin.com/in/robertnieuwenhuizen/>) [ ![Salomé Keet](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Salomé Keet FNB South Africa ](<https://www.linkedin.com/in/salom%C3%A9-keet-ba2522a/>) [ ![Savina Stoykova](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Savina Stoykova TP ICAP ](<https://www.linkedin.com/in/savina-stoykova-58352b26/>) [ ![Kevin Wade](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kevin Wade SHI International Corp. ](<https://www.linkedin.com/in/kevwade/>) [ ![Parker Nancollas](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Parker Nancollas SoftwareOne ](<https://www.linkedin.com/in/parkernancollas/>) [ ![David Gibbons](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) David Gibbons HSBC ](<https://www.linkedin.com/in/david-gibbons-70a75b6/>) [ ![Ben Pippenger](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Ben Pippenger Zylo ](<https://www.linkedin.com/in/benpipp/>) [ ![Martin Thompson](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Martin Thompson ITAM Forum ](<https://www.linkedin.com/in/martinthompson/>) [ ![John Cafferty](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) John Cafferty Lloyds Banking Group ](<https://www.linkedin.com/in/john-cafferty-77726767/>)

Last updated: April 7, 2026

## Table of Contents

  * [Unified FinOps and ITAM Practical Scenarios Overview  
](<#unified-finops-itam-scenarios>)
  * [Scenario: Platform or Vendor Selection Decision Making](<#scenario-platform-vendor-selection>)
  * [Marketplace Purchase Channel Strategy](<#marketplace-purchase-channel-strategy>)
  * [Unified Commitment Planning to Avoid Over-Buying](<#unified-commitment-planning>)
  * [Other FinOps & ITAM Scenarios](<#other-finops-itam-scenarios>)
  * [Acknowledgments](<#acknowledgments>)

###### [Learn the fundamentals Level up your knowledge with FinOps Certified Practitioner Get started  ![Learn the fundamentals](https://www.finops.org/wp-content/uploads/2025/12/certified-practitioner.svg) ](<https://learn.finops.org/path/finops-certified-practitioner-self-paced>)

##### Related FinOps Capabilities

[ Intersecting Disciplines ](<https://www.finops.org/framework/capabilities/intersecting-disciplines/>)
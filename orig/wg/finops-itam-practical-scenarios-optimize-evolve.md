# FinOps & ITAM Practical Scenarios: Optimize & Evolve

**Summary:** FinOps and ITAM practitioners can work together to optimize hybrid license entitlements, manage contractual true-ups, and improve data center hardware utilization. Practitioners should become familiar with these detailed technology optimization and evolution scenarios to help identify high-impact opportunities, align your teams, and take practical action toward better cost and value outcomes.

## Table of Contents

  * [Unified FinOps and ITAM Practical Scenarios Overview  
](<#unified-finops-itam-scenarios>)
  * [Hybrid/Bring Your Own License Optimization](<#hybrid-bring-your-own-license-optimization>)
  * [Contractual True-Up Management](<#contractual-true-up-management>)
  * [Data Center/On-Premises Hardware Optimization and Cost Avoidance](<#data-center-on-premises-hardware-optimization-and-cost-avoidance>)
  * [Other FinOps & ITAM Scenarios](<#other-finops-itam-scenarios>)
  * [Acknowledgments](<#acknowledgments>)

The State of FinOps 2026 Report indicates that FinOps and ITAM teams continue to [increase their collaboration annually](<https://data.finops.org/library/#26929>) (up 20% compared to 2025). As their specific approaches to technology value management scenarios overlap, new challenges, scenarios, and opportunities arise for organizations to maximize the benefits of this collaboration.

These practical technology optimization and evolution scenarios illustrate where FinOps and ITAM teams commonly deliver greater value by working together across the technology asset lifecycle. They span enterprise-level decisions, such as multi-year planning and strategic investment choices, as well as asset-level activities where joint visibility, continuous management, and governance improve efficiency, optimize value, and reduce risk.

Practitioners contributed these scenarios to help readers recognize situations where collaboration between FinOps and ITAM is more effective than either discipline acting alone, and to offer guidance on working through the associated challenges. Every organization will differ in structure, scope, and maturity, so not every scenario will apply directly—but the patterns reflect real-world experience and are intended to inform, inspire, and support practical action. Note: These are high-impact scenarios and not an exhaustive list.

Tip: For a more comprehensive look at the intersection of FinOps and ITAM, refer to the [overview paper](<https://www.finops.org/wg/finops-itam-optimize-cost-risk-value/>). Where a scenario aligns with one or more FinOps Framework Capabilities, the assets [_Applying the FinOps Framework to SaaS_](<https://www.finops.org/wg/applying-the-finops-framework-to-saas/>) and [_FinOps for Data Center: Applying the FinOps Framework_](<https://www.finops.org/wg/finops-for-data-center-applying-the-finops-framework/>) can be used alongside it for further information and considerations.

Review additional FinOps & ITAM key scenarios where the collaboration of these two teams can deliver increased technology value.

  * [Plan & Procure](</wg/finops-itam-practical-scenarios-planning-procurement/>)
  * [Deliver & Govern](</wg/finops-itam-practical-scenarios-deliver-govern/>)
  * [Optimize & Evolve](</wg/finops-itam-practical-scenarios-optimize-evolve/>)
  * [Realize Value & Reinvest](</wg/finops-itam-practical-scenarios-realize-value-reinvest/>)

## Unified FinOps and ITAM Practical Scenarios Overview

![FinOps and ITAM collaboration scenarios](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201999%20749'%3E%3C/svg%3E)

_Note: Scenarios can be considered independently of each other. There may be some overlap in guidance and practical steps between examples, where they have overlapping core components._

### What Are Key Optimize & Evolve Scenarios That FinOps & ITAM Encounter?

Optimize and Evolve scenarios focus on continuously improving efficiency, performance, and cost to value outcomes through data driven insights. In this phase, FinOps and ITAM practitioners often collaborate on scenarios such as rationalizing SaaS portfolios to address sprawl and overlap, managing BYOL capacity and hybrid licensing models, and using utilization and forecasting data to strengthen strategic renewal decisions. This phase also includes managing contractual true ups and improving data center and on-premises hardware utilization to support ongoing cost avoidance and to drive maximum value from these investments.

## Hybrid/Bring Your Own License Optimization

  * Impact: 4 out of 5
  * Complexity: 4 out of 5

Hybrid and Bring Your Own License (BYOL) optimization is a recurring challenge for organizations that run long standing on-premises software licenses, such as Microsoft SQL or Windows Server with Software Assurance, alongside cloud based workloads. As these licenses are moved or extended into public cloud environments through mechanisms like Azure Hybrid Benefit (AHB), teams must ensure they are maximizing existing entitlements rather than unintentionally duplicating cost.

This scenario highlights the need for close coordination between FinOps and ITAM. ITAM brings the legal, contractual, and licensing understanding required to determine which licenses are eligible for BYOL and under what conditions, while FinOps provides real time cloud consumption insights to validate how those licenses are being applied. Together, practitioners focus on identifying excess or retired on-premises license capacity that can be reassigned to cloud workloads, ensuring the organization avoids unnecessary spend and gains the full value of its existing investments.

Ongoing tuning and entitlement alignment can deliver both cost efficiency and sustained value for organizations.

### Objectives & Success Criteria, KPIs

#### Objectives

  * Achieve better value for money and maintain license compliance by accurately monitoring licenses deployed across hybrid environments.
  * Leverage existing investment capacity, such as unused licenses, to offset cloud Pay As You Go fees.
  * Ensure entitlement usage aligns to financial advantage by applying BYOL options where appropriate.

#### Success Criteria

  * Successful implementation of BYOL mechanisms, such as Azure Hybrid Benefit, in cases where they provide a financial benefit.
  * Clear tracking of licenses moved to the cloud to confirm they are actively used and to determine whether unused licenses should be returned on premises.
  * Reduced audit exposure through accurate entitlement management and avoidance of non compliant or duplicated usage.

#### KPIs

  * License compliance status across on-premises and cloud deployments.
  * BYOL utilization rate measured against entitlement.
  * Quantified cost avoidance through elimination of duplicated spend and identification of savings opportunities.

### FinOps Framework Capabilities

The following domains and capabilities should be considered in relation to this scenario.

  * **Understand Usage & Cost:** Data Ingestion; Allocation; Reporting & Analytics
  * **Quantify Business Value:** Unit Economics; Forecasting
  * **Optimize Usage & Cost:** Licensing & SaaS; Rate Optimization; Usage Optimization
  * **Manage the FinOps Practice:** Governance, Policy & Risk; Invoicing & Chargeback

### Skills

  * **Licensing Rules:** Deep understanding of vendor licensing rules (e.g., Microsoft License Mobility & Azure Hybrid Benefit, Oracle BYOL programs). Knowledge of license entitlement, differing BYOL terms between contract and agreement types, impact of cloud usage on contractual options, and audit risk mitigation.
  * **Cloud Usage Data Modeling and Cost Telemetry:** Expertise in analyzing cloud usage data and cost telemetry.
  * **Financial Modeling:** Capability in financial modeling and TCO analysis.
  * **License-Conscious Architecture:** Skills to integrate architectural constraints with cost metrics.
  * **Other Skills:** Negotiation, business value communication, and cross-functional collaboration.

### Practical Steps

  1. Establish a single source of truth by integrating ITAM’s entitlement data with FinOps’ cloud usage data.
  2. Perform TCO analyses comparing deploying licenses via BYOL (discounted rate) versus paying the License-Included/PAYG rate in the cloud.
  3. Define governance policies that specify how and where BYOL licenses can be deployed or moved.
  4. Implement technical tracking to continuously monitor license usage in the cloud and ensure compliance.
  5. Jointly review license usage to identify instances where licenses can be reclaimed or reassigned (e.g., moving unused licenses back to on-premises inventory).
  6. Consult ITAM/FinOps jointly during new workload onboarding to select the best licensing/procurement method upfront.
  7. Create an ongoing BYOL lifecycle management process.
  8. Establish a single source of truth by integrating ITAM’s entitlement data with FinOps’ cloud usage data.
  9. Perform TCO analyses comparing deploying licenses via BYOL (discounted rate) versus paying the License-Included/PAYG rate in the cloud.
  10. Define governance policies that specify how and where BYOL licenses can be deployed or moved.
  11. Implement technical tracking to continuously monitor license usage in the cloud and ensure compliance.
  12. Jointly review license usage to identify instances where licenses can be reclaimed or reassigned (e.g., moving unused licenses back to on-premises inventory).
  13. Consult ITAM/FinOps jointly during new workload onboarding to select the best licensing/procurement method upfront.
  14. Create an ongoing BYOL lifecycle management process.

### Key Personas & Operating Cadence

#### Personas

  * **ITAM/SAM:** Manages license entitlement, compliance checks, and understanding licensing agreements.
  * **FinOps:** Manages accurate, timely cloud consumption data and leading financial optimization analysis.
  * **Engineering/ Application Owners:** Consulted regarding actual deployment and usage metrics (Usage Optimization).
  * **Procurement/Legal:** Consulted on contractual agreements and restrictions governing license mobility.

#### Operating Cadence

Establish a regular on-premises deployment/cloud consumption review cycle (e.g., weekly/monthly/quarterly) for managing TCO. Engagement should be early in the decision-making process (“Shift Left”).

### Risks, Trade-offs & Dependencies

#### Risks

  * Significant financial risk from severe compliance issues or penalties if licenses are misused in cloud environments.
  * Risk of unbudgeted costs or penalties.
  * Risk of duplicating costs if existing license entitlements are ignored during migration.

#### Trade-offs

  * Achieving discounted BYOL rates requires maintaining strict inventory control measures and managing active licensing & support agreements.

#### Dependencies

  * Success relies on alignment under a single objective (avoiding conflicting goals).
  * Requires FinOps and ITAM to overcome organizational silos and knowledge gaps regarding each other’s data.

### Business Value of Outcome

  * Provides a holistic view of IT spend and TCO across hybrid environments.
  * Avoids duplication of software costs by utilizing existing licenses (shelfware).
  * Mitigates risk of costly software audits.
  * Positions the organization for stronger vendor negotiations by having a complete picture of consumption, entitlement, and contractual risks.
  * Drives continuous improvement in cost management and compliance practices.

### Data, Tooling, Dashboards & Metrics

#### Data Sources

  * License entitlement records (held by ITAM).
  * Cloud usage data (raw consumption telemetry).
  * Vendor contract documents/MSAs.
  * Inventory of unused or retired licenses.

#### Tooling

  * ITAM tool suites (for license inventory and entitlement tracking).
  * Cloud Cost Management platforms (CMPs) for consumption monitoring. Specialized vendor tools (e.g., OCI License Manager, Microsoft Azure portal).

#### Dashboards/Metrics

  * Dashboards tracking BYOL use vs. contractual limits.
  * TCO analyses visualizing the combined impact of licensing and infrastructure costs.
  * Allocation reports showing BYOL cost distribution.

### Continuous Improvement & Anti-Patterns

#### Continuous Improvement

  * Regularly review utilization data (weekly/monthly/quarterly cadence) to confirm licenses deployed in the cloud are still necessary and optimize usage accordingly.
  * Automate controls and compliance governance policies. Use shared nomenclature/tagging policies (e.g., linking cloud tags to license information).

#### Anti-patterns

  * Sticking to silos where one team manages compliance and the other manages cost in isolation, leading to missed optimization or compliance failures.
  * Allowing licenses to be procured without proper architectural or licensing review (“Shift Left” failure).
  * Failing to implement compliance monitoring tools quickly (recommended within 90 days of BYOL deployment).

## Contractual True-Up Management

  * Impact: 4 out of 5
  * Complexity: 5 out of 5

Executing the annual reconciliation process for a major publisher (e.g., Microsoft or Oracle) where deployment is permitted prior to payment. The focus is on auditing internal usage data to validate the gap between the current install base and the original contract entitlements.

This is a Risk and Cost scenario aimed at preventing unbudgeted spend, reducing waste and ensuring compliance by identifying and rectifying over-deployment before a license true-up is completed.

### Objectives & Success Criteria, KPIs

#### Objective

Validate compliance and minimize financial exposure by reconciling deployments against entitlements prior to vendor review. The goal is to pay only for what is actively used and contractually required.

#### Success Criteria

  * Zero Surprise Fees: Final true-up invoice matches the internal budget forecast.
  * Defensible Position: Usage data is accurate, complete, and audit-ready.
  * Waste Elimination: Inactive licenses are identified and reclaimed to offset growth.

#### KPIs

  * Budget Variance (%): Deviation between forecasted true-up cost and final invoice (Target: <5%).
  * Cost Avoidance ($): Value of potential penalties or unnecessary licenses removed during the internal review.
  * License Utilization, Active Users (%): Ratio of assigned licenses to active users (Target: >90%).
  * License Utilization, Committed Licenses (%): Ratio of assigned licenses to committed licenses (Target: >90%).

### FinOps Framework Capabilities

The following domains and capabilities should be considered in relation to this scenario.

  * **Understand Usage & Cost:** Data Ingestion, Allocation, Reporting & Analytics
  * **Quantify Business Value:** Planning & Estimating, Forecasting, Budgeting
  * **Optimize Usage & Cost:** Licensing & SaaS, Architecting & Workload Placement, Rate Optimization, Usage Optimization
  * **Manage the FinOps Practice:** Governance, Policy & Risk

### Skills

  * **Contracts and Negotiation:** Required to interpret commercial terms, identify true up obligations, and negotiate adjustments based on actual consumption and entitlement position.
  * **Financial Modeling and Forecasting:** Essential for projecting future demand, assessing financial exposure, and validating whether true-up quantities align with expected usage patterns.
  * **Data Normalization and Analytics:** Needed to reconcile data from multiple sources, align entitlement and consumption records, and produce accurate inputs for decision making.
  * **Cloud and SaaS Awareness:** Important for understanding metered consumption, subscription terms, and how cloud or SaaS usage patterns influence true-up requirements.
  * **Software Licensing Knowledge:** Critical for interpreting entitlement rules, understanding compliance obligations, and accurately determining whether true-up conditions have been triggered.
  * **Vendor Management:** Supports coordination with suppliers, facilitates transparency during true-up discussions, and strengthens the organization’s position through structured engagement.
  * **Cross Functional Communication:** Required to align Finance, Procurement, Engineering, ITAM and FinOps on risks, obligations, and decisions, ensuring the true-up process is understood and acted on consistently.

### Practical Steps

  1. Create an Effective License Position (ELP): Aggregate and normalize data to create a single view of entitlements versus what’s been deployed. 
     1. Guardrails/Policies: 
        1. SSO Enforcement: Getting active users for SaaS applications varies from publisher to publisher. For seat based agreements, ensure SSO is enforced for those apps so a baseline of use can be established using SSO provider logs.
        2. Onboarding: Capture necessary organizational information / metadata during build or activation activities to ensure alignment to the underlying License usage.
  2. Reclaim Unused Licenses: Execute removal or rightsizing of licenses before the true up period. 
     1. Guardrails/Policies: 
        1. Reclamation Policy: Implement a standard use it or lose it policy where inactive licenses within an established threshold like 60 or 90 days are automatically reclaimed.
        2. Leavers: Evaluate an HR Information System (HRIS) roster of employees against licensed users to remove former employees that may still be claiming a seat.
  3. Forecast and Adjust: Use the cleaned baseline data and business growth projections to model the next term. Negotiate the true up based on actualized needs.

### Key Personas & Operating Cadence

**Key Personas**

  * FinOps and ITAM Practitioner: Generates the ELP and responsible for reclamation and connects licensing and usage data to cost / financial impact
  * Procurement: Leads any negotiation effort with publishers
  * App Owner: Initiates any process to remove or reallocate licensing
  * Finance: Approves budget variance if needed.

**Operating Cadence**

  * At a minimum, the reclamation process should occur prior to the true-up being run by the vendor to avoid unnecessary costs. If a use it or lose it policy is enforced, the reclamation process should be run at a standard cadence in line with the policy.

### Risks, Trade-offs & Dependencies

**Risks**

  * True Up Fees: An unexpected bill is received as a result of deploying more licenses than initially purchased without internal awareness. At times, the price for these licenses is pre-determined, limiting the ability for negotiation and discounting.
  * Over Commitment: Organizations typically purchase a buffer of licenses to avoid having to purchase more during their contract term. This could result in shelfware and waste. 
    * **Trade-off:** Additional licenses and budget aren’t needed mid term if the business requires more licenses than initially purchased.

### Business Value of Outcome

  * **Cost Avoidance:** Mitigates the risk of unbudgeted financial penalties due to undercommitment and reduces unnecessary spend due to overcommitment or shelfware.
  * **Improved Forecasts:** Reduces budget variance and transitions true-ups to predictable, manageable operating expenses, building trust between IT and Finance.
  * **Operational Velocity:** By establishing a continuous ELP, teams spend less time scrambling to gather data during the true up process.
  * **Strengthened Vendor Leverage:** Approaching the publisher with granular, defensible usage data forces them to negotiate on the organization’s terms, rather than relying on the vendor reports.

### Data, Tooling, Dashboards & Metrics

#### Data Sources

  * **Entitlement Data:** Contract data including what was purchased, how many units, and true up window dates.
  * **Deployment Data:** What licenses/units have been deployed and to what/who.
  * **Consumption / Activity Data:** Who/what is using their license, when, and how.
  * **Organizational Data:** HR roster and cost center data

#### Tooling

  * SAM and FinOps platforms
  * Inventory Management or CMDB Systems
  * Provider portals/APIs
  * Identity Provider

#### Dashboards

  * Effective License Position per publisher and agreement
  * Cost and usage report by dimension such as business unit
  * True up and renewal calendar

#### Metrics

  * Budget Variance
  * Shelfware Percentage

### Continuous Improvement & Anti-Patterns

#### Continuous Improvement

  * Increase the frequency of the ELP, reclaim and forecast cycle.
  * Identify quick wins early such as harvesting zombie accounts and pulling back long inactive users.
  * Identify the top publishers where the biggest impact can be made. Begin there to establish the process and get organizational alignment.
  * Build into the operational process over time

#### Anti-Patterns

  * SAM and FinOps tools are not set and forget: Tools provide data. Organizations need to ensure that their people and processes are in place to act upon and govern the position.
  * Disconnected reporting between Finance and IT

## Data Center/On-Premises Hardware Optimization and Cost Avoidance

**Hardware Asset Optimizations Identified**

  * Impact: 4 out of 5
  * Complexity: 2 out of 5

**Hardware Asset Management Integrated Solution**

  * Impact: 5 out of 5
  * Complexity: 4 out of 5

Effective management of hardware assets across the lifecycle, combined with FinOps analytics techniques, enables practitioners to understand and optimize the on-premises hardware estate. By identifying underutilized or idle capacity and repurposing existing equipment, many organizations reduce future hardware demand and associated costs and improve data center capacity utilization.

While these actions can lower addressable costs by avoiding unnecessary energy consumption, practitioners note that meaningful energy cost reductions typically require physical changes to the power and cooling footprint. This includes decommissioning equipment, consolidating workloads, and retiring or reducing active racks rather than simply running fewer workloads on the same powered infrastructure.

### Objectives & Success Criteria, KPIs

**Objectives**

  * Optimizing the capacity of internal data centers helps reduce cost by avoiding new hardware purchases, lowering internal recharges, and decreasing energy consumption.
  * Internal data centers often approach physical or power capacity over time, creating a need for additional space or capability.
  * Expanding a data center or increasing its power availability can take several years, so practitioners typically look to hardware optimization as a faster route to creating capacity, often achievable within 12 months.
  * Improving on premises hardware utilization and strengthening hardware asset management practices enables organizations to optimize future hardware orders and avoid procuring more equipment than is required.
  * Reduced energy consumption from an optimized hardware estate contributes to carbon reduction and supports broader organizational sustainability goals.

**KPIs**

  * **Costs Avoided**(in respective currencies)

  * **Internal Technology Recharge Reductions**(in respective currencies, in the case where full Technology costs are charged back to the business, these can be reduced for customers that decommission or optimize their internal hardware assets)

  * **Data Center Capacity Created Percentage**

  * **Energy Saved GWh (sustainability metric for reducing hardware estate by gigawatt-hour)**

  * **HAM/ITAM Process Compliance Percentage**

### FinOps Framework Capabilities

The following domains and capabilities should be considered in relation to this scenario.

  * **Understand Usage & Cost: **Data Ingestion, Anomaly Management, Reporting and Analytics
  * **Optimize Usage & Cost: **Usage Optimization
  * **Manage the FinOps Practice:** Invoicing & Chargeback, Governance, Policy & Risk

[See FinOps Framework – Data Center Technology Category](<https://www.finops.org/framework/technology-categories/data-center/>) for specific guidance, assets and capability considerations.

### Skills

  * **HAM Process Knowledge:** Understanding hardware asset management processes across the lifecycle is essential for identifying underutilized equipment, validating asset records, and supporting decisions that influence future hardware demand.
  * **Data Analytics:** Analyzing utilization, performance, and capacity data enables practitioners to detect optimization opportunities, quantify available headroom, and model the impact on future hardware orders and energy consumption.
  * **Governance:** Structured governance ensures optimization actions align with organizational policies, internal charge mechanisms, sustainability goals, and data center constraints, reducing risk and maintaining accountability.
  * **Optimization Techniques for On-Premises Estate:** Knowledge of techniques such as workload consolidation, hardware repurposing, rightsizing, and decommissioning is critical for creating meaningful capacity gains and avoiding unnecessary hardware spend.

### Practical Steps

Practical steps include developing and delivering the following tactics:

  * Avoid risk of over-ordering by identifying unused stock prior to a new order via implementation of HAM asset lifecycle software solutions.
  * Automatically determine where hardware is end-of-life or is idle, these being typical signs that the hardware might be unused or “orphaned” and initiate decommissioning.
  * Using analytics to determine where applications have been decommissioned to check also that the hardware will also be decommissioned or repurposed.
  * Scanning the estate for physical servers that have been decommissioned but the hardware remains in the data center racks. Deracking is important to free up data center capacity.
  * Reviewing SAN storage inventory to optimize storage and free up space.

### Key Personas & Operating Cadence

  * **FinOps Practitioner:** Provides utilization and cost analytics, identifies optimization opportunities, and quantifies cost avoidance and energy impact to inform decisions.
  * **ITAM-HAM:** Maintains accurate hardware asset records, verifies utilization and lifecycle status, and guides repurposing or decommissioning decisions.
  * **Procurement:** Aligns hardware purchasing strategy with optimization plans, adjusts future orders, and ensures commercial commitments reflect reduced demand.
  * **Finance:** Validates cost avoidance, updates budgets or internal recharge models, and ensures financial reporting reflects changes in hardware demand and energy usage.
  * **Data Center Operations:** Implements physical optimization actions, including workload consolidation, rack decommissioning, and capacity management to realize space, power, and cooling benefits.

### Risks, Trade-offs & Dependencies

#### Risks

  * Hardware assets that are not fully managed through their full lifecycle create a number of risks: risk of asset not being decommissioned in a timely manner, being in stock and forgotten about, maintenance agreements from vendors running down and asset not in use, asset depreciation write-offs, asset going out of support, asset remaining live and not fully protected.

  * Hardware assets not optimized create risk of increased cost to the organization.

### Business Value of Outcome

The primary business value comes in three forms: cost avoidance, freed data center capacity, and reduced energy consumption.

Costs Avoided or Internal Technology Recharge Reductions are a key benefit that can be achieved by being able to order less as a result of your hardware asset optimization.

By removing unneeded hardware from your on-premises data center you also benefit from freeing up capacity, particularly important if near capacity. Additionally you reduce your energy bills as a result which will contribute to your organization’s Net Zero goals.

### Data, Tooling, Dashboards & Metrics

As a pre-requisite your on-premises hardware assets need to be captured from their golden source database into your FinOps data analysis environment, this can be achieved using your Technology Financial Management tool or data marts.

It is also important to track the full lifecycle of your hardware asset from order through to asset decommissioning. ITAM tools with HAM integrated software solutions offer this capability. If using an inhouse solution then integration with Procurement, Asset Register (ERP Financials), advanced shipping notices from vendors, goods received (barcode scans/RFID data) etc. need to be captured to track asset lifecycle.

### Continuous Improvement & Anti-Patterns

A fully integrated HAM solution capturing full asset lifecycle is a relatively complex integration and as such needs a robust business case for investment and a longer-term implementation.

Scanning your estate for Hardware Asset Optimizations can be achieved relatively quickly if the FinOps/ ITAM team have inventories of all the golden source systems to enable rapid analytics. If not then creating the inventories with accurate data should be the priority.

## Other FinOps & ITAM Scenarios

Learn more about the intersection of FinOps and ITAM in the context of additional, distinct scenarios where the collaboration of these two teams can deliver increased technology value.

  * [Plan & Procure](</wg/finops-itam-practical-scenarios-planning-procurement/>)
  * [Deliver & Govern](</wg/finops-itam-practical-scenarios-deliver-govern/>)
  * [Optimize & Evolve](</wg/finops-itam-practical-scenarios-optimize-evolve/>)
  * [Realize Value & Reinvest](</wg/finops-itam-practical-scenarios-realize-value-reinvest/>)

## Acknowledgments

We’d like to thank the following people for their work on this Paper:

[ ![Ron Brill](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Ron Brill Anglepoint ](<https://www.linkedin.com/in/ronbrill/>) [ ![Rich Gibbons](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Rich Gibbons Synyega ](<https://www.linkedin.com/in/rich-gibbons-microsoft-licensing/>) [ ![George Arezina](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) George Arezina TAKEDA ](<https://www.linkedin.com/in/georgearezina/>) [ ![Victoria Levy](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Victoria Levy Alteryx ](<https://www.linkedin.com/in/victoriarlevy/>) [ ![Lorant Kiss](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Lorant Kiss Delivery Hero ](<https://www.linkedin.com/in/lorantkiss/>) [ ![Keith Hiszem](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Keith Hiszem Cardinal Health ](<https://www.linkedin.com/in/keith-j-hiszem/>) [ ![Amy Ashby](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amy Ashby Under Armour ](<https://www.linkedin.com/in/amyashbymke/>) [ ![Colin Jack](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Colin Jack Flexera ](<https://www.linkedin.com/in/cojack/>) [ ![Robert Nieuwenhuizen](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Robert Nieuwenhuizen McKinsey ](<https://www.linkedin.com/in/robertnieuwenhuizen/>) [ ![Salomé Keet](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Salomé Keet FNB South Africa ](<https://www.linkedin.com/in/salom%C3%A9-keet-ba2522a/>) [ ![Savina Stoykova](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Savina Stoykova TP ICAP ](<https://www.linkedin.com/in/savina-stoykova-58352b26/>) [ ![Kevin Wade](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kevin Wade SHI International Corp. ](<https://www.linkedin.com/in/kevwade/>) [ ![Parker Nancollas](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Parker Nancollas SoftwareOne ](<https://www.linkedin.com/in/parkernancollas/>) [ ![David Gibbons](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) David Gibbons HSBC ](<https://www.linkedin.com/in/david-gibbons-70a75b6/>) [ ![Ben Pippenger](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Ben Pippenger Zylo ](<https://www.linkedin.com/in/benpipp/>) [ ![Martin Thompson](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Martin Thompson ITAM Forum ](<https://www.linkedin.com/in/martinthompson/>) [ ![John Cafferty](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) John Cafferty Lloyds Banking Group ](<https://www.linkedin.com/in/john-cafferty-77726767/>)

Last updated: April 7, 2026

## Table of Contents

  * [Unified FinOps and ITAM Practical Scenarios Overview  
](<#unified-finops-itam-scenarios>)
  * [Hybrid/Bring Your Own License Optimization](<#hybrid-bring-your-own-license-optimization>)
  * [Contractual True-Up Management](<#contractual-true-up-management>)
  * [Data Center/On-Premises Hardware Optimization and Cost Avoidance](<#data-center-on-premises-hardware-optimization-and-cost-avoidance>)
  * [Other FinOps & ITAM Scenarios](<#other-finops-itam-scenarios>)
  * [Acknowledgments](<#acknowledgments>)

###### [Learn the fundamentals Level up your knowledge with FinOps Certified Practitioner Get started  ![Learn the fundamentals](https://www.finops.org/wp-content/uploads/2025/12/certified-practitioner.svg) ](<https://learn.finops.org/path/finops-certified-practitioner-self-paced>)

##### Related FinOps Capabilities

[ Intersecting Disciplines ](<https://www.finops.org/framework/capabilities/intersecting-disciplines/>)
# FinOps & ITAM Practical Scenarios: Realize Value & Reinvest

**Summary:** FinOps and ITAM teams collaborate to turn vendor renewals and SaaS portfolio rationalization into deliberate, data-driven decisions. Review each scenario to learn practical steps and cross-functional guidance to help practitioners reduce licensing waste, strengthen commercial outcomes, and redirect savings toward strategic priorities.

## Table of Contents

  * [Unified FinOps and ITAM Practical Scenarios Overview  
](<#unified-finops-itam-scenarios>)
  * [Vendor Renewal / Restructuring Management](<#vendor-renewal-restructuring-management>)
  * [SaaS Portfolio Rationalization](<#saas-portfolio-rationalization>)
  * [Other FinOps & ITAM Scenarios](<#other-finops-itam-scenarios>)
  * [Acknowledgments](<#acknowledgments>)

The State of FinOps 2026 Report shows that FinOps and ITAM teams are [collaborating more each year](<https://data.finops.org/library/#26929>) (up 20% from 2025). As the two disciplines increasingly overlap in how they approach technology value management, organizations face new challenges, scenarios, and opportunities to get more from that collaboration.

These scenarios, such as the realization of value and building business cases for reinvestment, cover practical technology delivery and governance situations where FinOps and ITAM teams commonly achieve better outcomes by working together across the technology asset lifecycle. They range from enterprise-level decisions, such as informing multi-year planning and strategic investment choices to asset-level activities where shared visibility and ongoing management improve efficiency, optimize value, and reduce risk.

Each scenario is drawn from practitioner experience and is designed to help readers spot opportunities for cross-discipline collaboration and work through the associated challenges. Not every scenario will apply to every organization—structure, scope, and maturity all vary—but the patterns are grounded in real-world practice and are meant to be adapted rather than adopted wholesale. The list focuses on high-impact situations rather than attempting to be exhaustive.

Tip: For a more comprehensive look at the intersection of FinOps and ITAM, refer to the [overview paper](<https://www.finops.org/wg/finops-itam-optimize-cost-risk-value/>). Where a scenario aligns with one or more FinOps Framework Capabilities, the assets [_Applying the FinOps Framework to SaaS_](<https://www.finops.org/wg/applying-the-finops-framework-to-saas/>) and [_FinOps for Data Center: Applying the FinOps Framework_](<https://www.finops.org/wg/finops-for-data-center-applying-the-finops-framework/>) can be used alongside it for further information and considerations.

Review additional FinOps & ITAM key scenarios where the collaboration of these two teams can deliver increased technology value.

  * [Plan & Procure](</wg/finops-itam-practical-scenarios-planning-procurement/>)
  * [Deliver & Govern](</wg/finops-itam-practical-scenarios-deliver-govern/>)
  * [Optimize & Evolve](</wg/finops-itam-practical-scenarios-optimize-evolve/>)
  * [Realize Value & Reinvest](</wg/finops-itam-practical-scenarios-realize-value-reinvest/>)

## Unified FinOps and ITAM Practical Scenarios Overview

![FinOps and ITAM collaboration scenarios](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201999%20749'%3E%3C/svg%3E)

_Note: Scenarios can be considered independently of each other. There may be some overlap in guidance and practical steps between examples, where they have overlapping core components._

### What Are Key Realize Value and Reinvest Scenarios that FinOps and ITAM Encounter?

Realize Value and Reinvest scenarios focus on renewing or retiring services to maximize value and redirect funding toward strategic priorities. In this phase, FinOps and ITAM teams commonly work together on scenarios such as using forecast and utilization data to strengthen renewal negotiations, ensuring assets are optimally decommissioned or disposed of in line with business case cost benefits, and supporting SaaS portfolio rationalization.

## Vendor Renewal/Restructuring Management

  * Impact: 5 out of 5
  * Complexity: 3 out of 5

Renewing a SaaS application that uses both seat based and consumption based pricing requires coordinated FinOps and ITAM involvement to ensure the organization purchases only what it needs and manages financial risk effectively.

In this scenario, the focus is on making intentional renewal decisions that balance entitlement requirements with actual utilization and forecasted demand. The primary goal is to shift renewals from reactive exercises to deliberate, data driven decisions that optimize cost and strengthen commercial outcomes.

### Objectives & Success Criteria, KPIs

  * Aligned renewal strategy between app owners, procurement, ITAM/FinOps
  * Cost reduction by reducing license waste
  * Risk avoided with accurate forecasts leading to low actual to budget variance
  * Efficiency gains by operating with a standard procedure

### FinOps Framework Capabilities

The following domains and capabilities should be considered in relation to this scenario.

  * **Understand Usage & Cost: **Data Ingestion, Reporting & Analytics
  * **Quantify Business Value:** Planning & Estimating, Forecasting, Unit Economics
  * **Optimize Usage and Cost:** Rate Optimization, Licensing & SaaS

### Skills

  * **Licensing Knowledge:** Essential for interpreting entitlement rules, understanding pricing constructs such as seat plus consumption models, and ensuring renewal quantities reflect true compliance requirements.
  * **Application Specific Knowledge:** Needed to understand how the application is used, which features or tiers drive cost, and where utilization patterns may justify changes in license mix or contract structure.
  * **Purchasing Process Expertise:** Important for navigating internal procurement workflows, aligning renewal timing with organizational approvals, and ensuring purchasing decisions follow the correct commercial and governance pathways.
  * **Negotiation:** Critical for securing favorable terms, adjusting pricing models, and leveraging utilization and forecasting data to strengthen the organization’s negotiation position.
  * **Vendor Management:** Supports structured engagement with suppliers, enables transparent discussions on consumption patterns and entitlement needs, and helps maintain accountability throughout renewal cycles.
  * **Forecasting:** Required to project future demand accurately, validate whether proposed renewal volumes match expected usage, and avoid over commitment or under licensing.
  * **Data Management and Analysis:** Necessary for consolidating entitlement, usage, and spend data into a coherent view that informs renewal decisions and highlights optimization opportunities.
  * **Change Management and Communication:** Enables clear alignment across stakeholders, supports transitions to new license models or reduced entitlements, and ensures changes are understood and adopted across the organization.

### Practical Steps

  1. Prioritize your apps based on criteria such as total spend, strategic importance to the organization, ownership clarity, and the potential for optimization.
  2. Define standard timelines for managing renewals and build automated alerting
  3. Reclaim inactive user licenses
  4. Benchmark pricing
  5. Complete consumption forecast
  6. Negotiate with vendor and execute renewal
  7. Track savings achieved

### Key Personas & Operating Cadence

  * **Application Owner:** Validation that the app needs to be renewed, often holds the relationship with the vendor.
  * **Procurement:** Wants cost savings and optimization, and will be responsible for the negotiation of the renewal.
  * **ITAM/SAM:** Cares about how licenses are being used and wants a clean license position report to help procurement and app owners know what they need.
  * **FinOps:** For cloud adjacent SaaS products, FinOps plays a crucial role in the forecasting of the future needs of user licenses and consumption.
  * **Security/Enterprise Architecture:** Ensures that apps that are being purchased follow IT and security guidelines such as SSO enforcement, review boards, and CMDB registration.

### Risks, Trade-offs & Dependencies

#### Risks

  * **Data Quality Risks:** This scenario relies heavily on having accurate contract, usage, and ownership data documented, which is often incomplete or not accessible in many organizations.
  * **Missed Renewals:** A cross functional standard process to manage renewals establishes roles and accountability.
  * **Inaccurate Forecasts:** Lack of involvement from the FinOps team or the app owner can result in no business context to understand what may be needed to deliver business value.
  * **License Waste:** SAM often has the data and reporting to understand what has been purchased and how those licenses are being used. They have the process to reclaim unused licenses to ensure optimization leading up to a renewal.
  * **Redundant Applications:** Application Owner, SAM, and Procurement involvement enables a broad view of the capabilities that an app is providing and an analysis if redundancy exists and is acceptable.
  * **Organizational Alignment:** Executive sponsorship and cross-department alignment is critical for license reclamation and app rationalization decisions.

### Business Value of Outcome

  * Avoid overage fees
  * Reduce or remove licensing waste
  * Do not get stuck with auto-renewed apps
  * Reduce security risk with a standard IT process

### Data, Tooling, Dashboard & Metrics

#### Data

  * Renewal date
  * Notification periods
  * Order form line items [user, licensing, usage]
  * Consumption history
  * Consumption forecast

#### Dashboards & Metrics

  * Savings tracking/dashboard
  * Price benchmarks

### Continuous Improvement & Anti-Patterns

  * Capture savings and report out
  * Don’t boil the ocean, identify the apps where savings can be achieved
  * Document what occurred for posterity
  * Pay attention to the notification period as well as the renewal date
  * Break down silos and communicate

## SaaS Portfolio Rationalization

  * Impact: 4 out of 5
  * Complexity: 5 out of 5

SaaS portfolio rationalization is a common challenge as organizations scale, often resulting in duplicated tools and limited visibility into spend and utilization. These issues drive unnecessary cost, create compliance risk and prevent organizations from leveraging consolidated demand for stronger commercial terms.

Fragmentation can arise for many reasons, such as acquisitions introducing overlapping applications, business units purchasing SaaS independently, or distributed buying through credit cards, Marketplaces or team level decisions. In all cases, FinOps and ITAM practitioners work together to surface the full estate, assess utilization and entitlement needs, and streamline the portfolio to reduce waste and improve governance.

### Objectives, Success Criteria, KPIs

  * Visibility of ALL tooling across the organization/acquisition organization
  * Understanding of how the tooling had been purchased and how it is being paid for including term and/or renewal information
  * Understanding of usage and future planning of that usage
  * Cross-checking and identifying opportunities for: 
    * Consolidation
    * Churning
  * Understanding of cost efficiencies
  * Creation of a single source of truth for all tooling including – owner, division, cost, term, tool functionality and/or capability, and future outlook.
  * Regular monitoring of the single source of truth and plans for immediate consolidation and involvement of both ITAM, FinOps and corresponding personas (Procurement & Finance) following any new SaaS/license purchases or acquisitions

### FinOps Framework Capabilities

The following domains and capabilities should be considered in relation to this scenario.

  * **Understand Usage and Cost:** Data Ingestion; Allocation; Reporting & Analytics; Anomaly Management
  * **Quantify Business Value:** Planning & Estimating; Budgeting; Forecasting
  * **Optimize Usage & Cost: **Licensing & SaaS; Rate Optimization; Usage Optimization
  * **Manage the FinOps Practice:** FinOps Practice Operations; FinOps Education & Enablement; Governance, Policy & Risk; Invoicing & Chargeback; Architecting & Workload Placement; Automation, Tools & Services; Intersecting Disciplines

### Skills

  * **Application Specific Knowledge:** Required to understand how each SaaS product is actually used, which features matter, and where functional overlap exists across the portfolio.
  * **Purchasing Expertise:** Needed to navigate procurement channels, consolidate contracts where appropriate and support commercial decisions that maximize economies of scale.
  * **Technical Architecture:** Important for assessing functional overlap, validating whether SaaS tools align with target architecture, and ensuring rationalization decisions support long term technology strategy rather than reintroducing duplication later.
  * **Communication and Collaboration Between Teams:** Critical for aligning decentralized stakeholders, validating business needs and gaining agreement on consolidation or license reductions.
  * **Data Management and Analysis:** Enables accurate visibility into utilization, spend and entitlement positions, which is the foundation for identifying rationalization opportunities and quantifying the value of changes.

### Practical Steps

  1. Forming a working group to build visibility of SaaS/tooling across all the various sources of information
  2. “Interviews” and walkthroughs with various key members of the business units / application owners / acquired company to understand use cases for the tools and alignment to target technology strategy and business objectives
  3. Understanding of total cost
  4. Forming a cross-persona SME forum to identify and recommend opportunities for consolidation and churning as well as create a before and after view of cost
  5. Ensuring future visibility of any new purchases or expansions – ideally via invoice and ensure all other methods are redundant (e.g. SaaS as an expense or SaaS on a credit card or legacy account)
  6. Agreeing ownership and build of the single source of truth
  7. Agreeing cadence for future monitoring and “front door” process for any new tools and expansions

### Key Personas & Operating Cadence

#### Personas

  * **ITAM:** Provides entitlement, contract and lifecycle visibility, helping identify duplicated licenses, underused subscriptions and optimization opportunities.
  * **FinOps:** Analyzes spend and utilization data, quantifies waste, and models the financial impact of rationalization and license adjustments.
  * **Procurement:** Supports contract consolidation, negotiates improved commercial terms, and aligns purchasing activity with the rationalized portfolio.
  * **Enterprise Architecture:** Validates functional overlap, ensures SaaS tools align with target architecture and avoids reintroducing duplication through future technology decisions.
  * **Accounts Payable:** Surfaces SaaS spend made outside formal procurement channels, such as card spend or expensed tools, improving visibility of the full portfolio.
  * **Engineering:** Provides insight into tools used within acquired or decentralized teams, helping clarify functional requirements and identify candidates for consolidation.

#### Operating Cadence

Cross-persona SME forum would need to be created which at the initial stages should meet on a regular basis (several times a week) until the initial objectives are achieved. Continuous cadence could be on a monthly basis.

### Risks, Trade-offs & Dependencies

  * Overpaying for duplicate or similar use case SaaS
  * Limited to no visibility of SaaS which at that point are technically used and “owned” by the company
  * Limited visibility further leads to limited visibility on SaaS touching production or customer data and risks associated
  * No visibility of the full “cost” of the SaaS estate
  * Issues with billing and payments: if the team does not know how things were purchased, they might not know how and when they would be billed
  * No visibility of T&Cs might expose the company to commitments and obligations that they are not aware of

### Business Value of Outcome

  1. Reduced Risk exposure – knowledge of what tooling is owned and managed means awareness of the data that goes in it
  2. Reducing Overall Cost – removal of duplicate tools that no longer serve purpose
  3. Avoidance of fines due to missed payments as well as “surprise” payments related to old accounts/tools
  4. Efficient ITAM practices for tooling management going forward include when new companies (regardless of size) are acquired

### Data, Tooling, Dashboards & Metrics

  * Creation of “single source of truth” which contains the full estate of tools across the company, best if it feeds directly from systems used across the company (e.g. P2P system)

### Continuous Improvement & Anti-Patterns

#### Continuous Improvements

  * Live update of the “single source of truth” for SaaS dashboard and regular (e.g monthly) reviews
  * Involvement of relevant Persona SME Forum during integration of any new acquisitions as early as possible
  * Important to review ANY and ALL data sources which might lead to the discovery of software – official merger docs, P2P systems, Marketplaces, corporate cards, expenses
  * Review of any acquired T&Cs, particularly Auto-Renewal, Auto-Credit Refill, Termination

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
  * [Vendor Renewal / Restructuring Management](<#vendor-renewal-restructuring-management>)
  * [SaaS Portfolio Rationalization](<#saas-portfolio-rationalization>)
  * [Other FinOps & ITAM Scenarios](<#other-finops-itam-scenarios>)
  * [Acknowledgments](<#acknowledgments>)

###### [Learn the fundamentals Level up your knowledge with FinOps Certified Practitioner Get started  ![Learn the fundamentals](https://www.finops.org/wp-content/uploads/2025/12/certified-practitioner.svg) ](<https://learn.finops.org/path/finops-certified-practitioner-self-paced>)

##### Related FinOps Capabilities

[ Intersecting Disciplines ](<https://www.finops.org/framework/capabilities/intersecting-disciplines/>)
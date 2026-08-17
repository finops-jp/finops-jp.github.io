# Architecting & Workload Placement

[Framework](</framework/>) / [Domains](</framework/domains/>) / [Optimize Usage & Cost](<https://www.finops.org/framework/domains/optimize-usage-cost/>) / Architecting & Workload Placement 

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success_kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

**Designing and modernizing solutions with cost awareness and efficiency to maximize business value, while meeting performance, scalability, and operational objectives. Evaluating and directing workload placement within and across technology categories in a way that provides transparency to cost, usage, and impact, while supporting operational objectives and establishing or maintaining cost effectiveness.**

### Manage architecting and workload placement strategy

  * Understand responsibilities across the [FinOps Personas](<http://finops.org/framework/personas>) involved
  * Understand the review cadence and governance touch points
  * Define criteria for new workload demands and existing workload change needs (modernization, re-platforming, relocation, replacement, consolidation, retirement)

### Evaluate workloads for attention

  * Identify candidates from new demand and existing workloads, guided by spend, usage, value and adoption signals
  * Confirm constraints and non-functional requirements (security, reliability, regulatory, performance, compliance, sustainability)
  * Validate the viable candidate set

### Understand cost-effective designs and usage patterns

  * Understand architectures and service usage patterns
  * Understand impacts of architectural change, including second-order effects
  * Balance scale, speed, cost, skills, and operational constraints

### Build the decision case

  * Develop the financial business case
  * Create value comparisons between architectural options and placement options across relevant technology categories like public cloud, data center, private cloud
  * Assess functional and availability impact to the service or application
  * Define success measures and validation approach

### Plan implementation and change

  * Define the approach for workload option set (for example, modernization, re-platforming, relocation, replacement, consolidation, retirement)
  * Set sequencing, dependencies, milestones, acceptance criteria, and controls
  * Plan for transition states and overlap where applicable (for example parallel run, phased rollout, decommissioning)

### Coordinate execution

  * Establish required implementation foundations and shared services (for example delivery pipelines, observability, security controls, and landing zones or equivalent where relevant)
  * Ensure transparency to cost, usage, and impact throughout implementation (including baseline, change tracking, and outcome validation)
  * Establish robust program management processes and workflows

### Establish an effective review cadence and continuously modernize

  * Build a repeatable review cadence and decision process
  * Perform post-change evaluation against success criteria and expected outcomes
  * Capture lessons learned and measurable outcomes
  * Feed improvements into standards, patterns, and future decisions
  * Revisit decisions as usage, pricing, and constraints evolve

## Definition

One of the most powerful benefits of using modern technologies to build systems is the ability to use a wide range of components and services to satisfy a wide range of requirements. There are many ways to design and operationalize a workload (for example an application,, data pipeline, AI workload, or shared platform service). [Engineering](<https://www.finops.org/framework/persona/engineering/>) and [Product](<https://www.finops.org/framework/persona/product/>) teams make decisions based on the needs of the workload, the knowledge and abilities of[ FinOps Practitioners](<https://www.finops.org/framework/persona/finops-practitioner/>), the desired operations environment, and other factors to meet customer or stakeholder demand.

Decisions abound for architects looking to create new systems or change existing ones. System and service requirements can be satisfied by virtual machines, container environments, serverless options, data center infrastructure, and fully-managed SaaS applications. Dozens of database, data platforms, and analytics platforms are available, or can be built and managed by the organization.

Technology providers offer industry recognized well-architected or adoption frameworks that can guide [Engineering Personas](<https://www.finops.org/framework/persona/engineering/>) making effective choices and tradeoffs when building. These frameworks include operational aspects of systems like security, performance, reliability, sustainability, and cost efficiency. FinOps, engineering and product teams not only have the responsibility to choose environments, platforms, and services that meet the operational requirements of their systems, but also the infrastructure, placement and financial viability of those systems.

This Capability supports decision making by connecting architectural and workload placement options to business goals, via business unit metrics, helping teams compare options, make tradeoffs, and govern investment for value. Value and cost efficiency is best achieved by architecting it into a system’s design, or as early in the life of a system as possible. By beginning with the end goals of the system in mind, practitioners can architect to meet redundancy, security, reliability, sustainability, and cost efficiency more easily by avoiding unintentionally building in tech debt that would need to be cleaned up later.

Architecting in this Capability applies to both new workload demand and existing workloads, including modernization, re-platforming, relocation, replacement, consolidation and retirement. Throughout the lifecycle of every workload, organizations must assess when it is time to adjust architectural designs and placement decisions. Analysis of where spending or waste is high, or where value isn’t being achieved will help identify workloads which could benefit from architectural change, modernization or adjustment of workload placement.

A regular cadence of analysis should be undertaken to regularly assess where architecting and workload placement can benefit the organization. This is an activity each organization can leverage to “shift left” and build its workloads with business value and cost-effectiveness at the core, during the architecting and workload placement phases.

Moving workloads into or between environments requires planning, coordination, stakeholder alignment, and an organizational strategy to determine what and how workloads will be moved. Onboarding is the Operationalization is the process of executing the chosen workload placement decision, bringing the workload into the target technology environment in a way that provides transparency to cost, usage, and impact, supports operational objectives, and establishes or maintains cost effectiveness across all relevant [FinOps Scopes](<http://finops.org/framework/scopes>).

Workload resource requirements will need to be taken into consideration and abide by technology policies including tagging requirements to ensure the workload has the appropriate level of visibility for other work streams such as automation, chargeback, etc.. Keeping close program management on onboarding is critical, especially where transition states such as parallel run create unanticipated financial and sustainability impacts.

There is a strong relationship between all of the Capabilities within the [Optimize Usage & Cost Domain](<https://www.finops.org/framework/domains/optimize-usage-cost/>), in that each provides an organization with different ways to improve technology value. Like [Rate Optimization](<https://www.finops.org/framework/capabilities/rate-optimization/>) and [Usage Optimization](<https://www.finops.org/framework/capabilities/workload-optimization/>), this Capability develops options to design new workloads, re-design existing workloads and select appropriate workload placement to take best advantage of the many services available, while maintaining alignment to business goals and value outcomes.

## Maturity Assessment

####  Crawl 

  * Architecting and Workload Placement decisions are made case by case, primarily to meet immediate delivery needs, with limited linkage to business unit metrics and value outcomes.
  * Onboarding demand is small, collaboration across personas is light, and governance touchpoints are informal.
  * Architectural modernization is occasional rather than routine; reviews are triggered by specific needs (for example new demand, incidents, or cost concerns), not run on a regular cadence.
  * [Budgeting](<https://www.finops.org/framework/capabilities/budgeting/>) and [Forecasting](<https://www.finops.org/framework/capabilities/forecasting/>) are done case by case, and approvals for spend-impacting changes are informal. Cost and usage visibility is inconsistent and often relies on manual reporting.
  * Governance and policy compliance (for example landing zones or equivalent, tagging or allocation metadata) are manual or lightly scripted due to simplicity.

####  Walk 

  * A structured, repeatable process exists to evaluate workloads for attention across new demand and existing change needs, with decisions increasingly connected to business goals through business unit metrics.
  * Required roles for stakeholder [Personas](<http://finops.org/framework/personas>) participate in planning and reviews on a regular cadence, with defined governance touchpoints for major design, placement, and onboarding decisions.
  * Architectural modernization and workload placement reviews are conducted regularly (for example monthly, quarterly), or triggered by spend, usage, and value signals and known patterns for redesign.
  * [Planning and Estimating](<https://www.finops.org/framework/capabilities/planning-estimating/>), [Forecasting](<https://www.finops.org/framework/capabilities/forecasting/>), and [Budgeting](<https://www.finops.org/framework/capabilities/budgeting/>) for onboarded or changed workloads is mandatory, but not yet standardized across all business units or product teams.
  * More automation exists for policy compliance, governance, and shared services integration, with centralized usage reporting and workload-level reporting where feasible.

####  Run 

  * A continuous, scaled approach is in place for architecting, workload placement, and onboarding, covering both new workload demand and existing workload change, supported by clear decision rights, shared accountability, and consistent governance.
  * Formalized triage and review processes prioritize candidates using spend, usage, value, and adoption signals, and apply well-defined guidelines for both financial viability and technical feasibility.
  * Standardized [Budgeting](<https://www.finops.org/framework/capabilities/budgeting/>), [Forecasting](<https://www.finops.org/framework/capabilities/forecasting/>), and business unit measures are consistently applied across teams, enabling comparable tradeoffs and decision support for value and cost effectiveness.
  * High levels of automation are used for consistency and compliance (for example infrastructure as code, policy-as-code, standardized patterns and templates), including required foundations and shared services.
  * Robust monitoring and reporting provide transparency to cost, usage, and impact throughout implementation, including baseline, change tracking, and outcome validation, supported by strong program management.
  * Post-change evaluation is systematic, lessons learned are captured and fed into standards, patterns, and future decisions, and decisions are revisited as usage, pricing, and constraints evolve.

## Functional Activities

####  ![](https://www.finops.org/wp-content/uploads/2024/03/FinOps-Practitioner.svg) FinOps Practitioner 

**As someone in the FinOps team role, I will…**

  * Connect architecting and workload placement options to business goals using business unit metrics
  * Assess financial viability and cost effectiveness of workload options, including modernization and placement changes
  * Provide transparent cost, usage, and impact decision support during design, intake, and onboarding
  * Partner with [Engineering](<https://www.finops.org/framework/persona/engineering/>) on architecture and workload placement plans to ensure allocation metadata, policy compliance, and forecast models are in place
  * Capture and track value benefits realization, and feed outcomes into future decision making

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Product.svg) Product 

**As someone in a Product role, I will…**

  * Define business outcomes and business unit metrics used to evaluate workload options and tradeoffs
  * Maintain competence in services and patterns used by my products, and identify opportunities to improve value and cost effectiveness
  * Partner with [Engineering](<https://www.finops.org/framework/persona/engineering/>) (including architecture) and [FinOps Practitioner](<https://www.finops.org/framework/persona/finops-practitioner/>) Personas to compare options (for example redesign, replace, consolidate) and prioritize work based on business needs
  * Validate success measures and support post-change evaluation of outcomes

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Finance.svg) Finance 

**As someone in a Finance role, I will…**

  * Assess financial viability of workload decisions, including modernization and placement changes
  * Partner with [FinOps Practitioner](<https://www.finops.org/framework/persona/finops-practitioner/>) and [Product](<https://www.finops.org/framework/persona/product/>) Personas to understand planned changes, forecasts, and expected business outcomes
  * Support budgeting and forecasting practices required for decision making and onboarding execution
  * Capture and track value through benefits realization after changes are implemented

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Engineering.svg) Engineering 

**As someone in an Engineering role, I will…**

  * Evaluate workload design and placement options against operational requirements, constraints, and business objectives
  * Identify and deliver improvements across modernization, re-platforming, and placement to increase value and cost effectiveness while meeting reliability, scalability, and performance needs
  * Implement and operate required foundations and shared services, using automation and infrastructure as code where appropriate
  * Ensure compliance with governance and operational standards (for example allocation metadata, security controls, observability), and confirm operational readiness
  * Execute and coordinate implementation and onboarding to minimize risk and impact, and follow approved architectures and deployment patterns

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Leadership.svg) Leadership 

**As someone in a Leadership role, I will…**

  * Set direction and guardrails for Architecting and Workload Placement aligned to business priorities
  * Sponsor shared accountability across [FinOps Personas](<http://finops.org/framework/personas>) and ensure governance touchpoints are effective
  * Make informed decisions to prioritize workload candidates and approve tradeoffs across value, cost effectiveness, risk, and operational objectives
  * Reinforce continuous modernization by acting on post-change outcomes and lessons learned
  * Provide strategic directions to reinvest the savings obtained from the workloads modernized in back to the business initiatives

####  ![]() Allied Personas 

**As someone in an Allied Persona role, I will…**

  * Provide constraints, requirements, and decision support from my domain (for example security, ITAM, ITFM, sustainability, risk, compliance)
  * Support implementation and onboarding by ensuring required controls, standards, and reporting expectations are met

## Measures of Success & KPIs

Measures of success should demonstrate improved technology value and cost effectiveness, with clear linkage to business unit metrics where possible.

**Unit economics and value**

  * Unit cost trend aligned to a business unit metric (for example cost per customer, transaction, query, or model run)
  * Benefits realization vs the business case (savings, avoided cost, productivity, or revenue impact where applicable)
  * Reinvestment rate of realized savings into prioritized business initiatives (where applicable)

**Cost efficiency outcomes**

  * Cost efficiency improvement, including infrastructure savings and avoided cost, net of modernization, migration, and support costs
  * Reduction in waste indicators tied to design and placement decisions (for example idle capacity, over-provisioning, low utilization)

**Forecasting and financial control**

  * Forecast variance for workloads being designed, onboarded, or materially changed
  * Budget or guardrail adherence for material changes (threshold breaches, approval compliance)

**Change efficiency and time to market**

  * Time and cost of transition states (for example parallel run duration and incremental cost impact)
  * Time to market impact for major initiatives (lead time from decision to production readiness, or agreed delivery milestone)

**Sustainability**

  * Sustainability efficiency where measurable (for example emissions or energy intensity per unit of work)
  * Sustainability impact of transitions (for example overlap states) and effectiveness of mitigation

**Continuous improvement**

  * Post-change validation completion rate (measured outcomes recorded against success criteria)
  * Reuse of approved patterns and standards (adoption rate, reduction in repeat issues)

## KPIs

#### Redundant Application Coverage Percent

Measures the extent to which SaaS spend is concentrated in overlapping or duplicative applications that support similar business functions. The formula quantifies the proportion of total SaaS costs associated with redundant tools within the application portfolio. Higher percentages indicate greater duplication and consolidation opportunity, while lower percentages reflect a more rationalised SaaS estate with clearer

Read more

#### SaaS Optimization ROI

Measures the effectiveness of SaaS optimisation efforts by comparing realised cost savings to the cost of implementing those actions. The formula quantifies the return generated from optimisation activities such as licence rightsizing, deprovisioning, tier adjustments or application rationalisation. Higher ROI values indicate that optimisation efforts are delivering proportionally greater financial benefit relative to their cost,

Read more

## Inputs & Outputs

### Inputs

**Business value and success measures**

  * Business unit metrics and value metrics for workloads and systems
  * Customer and stakeholder outcomes (for example customer satisfaction)
  * Decision case assumptions, success criteria, and validation approach

**Cost efficiency**

  * Infrastructure cost inputs
  * Support and run cost inputs
  * Modernization and implementation cost inputs (including transition or migration costs where applicable)

**Resiliency and risk**

  * Service quality objectives and performance indicators
  * Security posture and compliance requirements
  * Operational stability inputs (for example incident history, support model, operational constraints)

**Velocity**

  * Developer productivity inputs
  * Release frequency and delivery performance inputs
  * Business agility needs and constraints (for example time-to-market expectations)

**Innovation**

  * Return on innovation inputs (for example expected benefits, option value)
  * Employee experience inputs (for example productivity friction, platform usability)

**Sustainability**

  * Carbon footprint and sustainability reporting requirements where available
  * Power usage effectiveness
  * Circular economy considerations (for example asset lifecycle, reuse, disposal constraints)

**Architecture, patterns, and usage behavior**

  * Reference architectures, approved patterns, and service usage patterns
  * Known cost drivers and second-order impacts (dependencies, integration, data movement, tooling)

**Governance and enablement**

  * Allocation metadata standards and cost visibility requirements
  * Foundations and shared services (landing zones or equivalent where relevant)
  * Automation and infrastructure as code standards
  * Tooling readiness to detect workloads and report cost, usage, and impact

### Outputs

**Triage and cadence**

  * Repeatable review cadence and decision process for Architecting and Workload Placement
  * Validated candidate set and prioritization (value vs effort)

**Decision artifacts**

  * Architectural and workload placement options and tradeoffs
  * Financial business case and value comparisons
  * Defined success measures and validation plan

**Onboarding and change artifacts**

  * Onboarding strategy to guide what is onboarded or moved, and under what circumstances
  * Implementation and migration plans, estimates, sequencing, and acceptance criteria
  * Program milestones, schedules, and reporting deliverables to provide transparency across personas

**Continuous improvement**

  * Post-change evaluation results, lessons learned, and measurable outcomes
  * Updates to standards, patterns, and governance based on outcomes

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success_kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

##### Related Assets

[ ![](https://www.finops.org/wp-content/uploads/2025/09/Scaling-Kubernetes-for-AIML-Workloads-FinOps-v1.png) Scaling Kubernetes for AI/ML Workloads with FinOps to Optimize Value ](<https://www.finops.org/wg/scaling-kubernetes-for-ai-ml-workloads-with-finops/>) [ ![](https://www.finops.org/wp-content/uploads/2025/01/FinOps-Assets-Paper-FinOps-for-GenAI-Overview-Featured-v1-1.png) FinOps for AI Overview ](<https://www.finops.org/wg/finops-for-ai-overview/>) [ ![](https://www.finops.org/wp-content/uploads/2025/03/FinOps-Assets-Paper-Effect-of-Optimization-on-AI-Forecasting-Featured-v1.png) Effect of Optimization on AI Forecasting ](<https://www.finops.org/wg/effect-of-optimization-on-ai-forecasting/>) [ ![](https://www.finops.org/wp-content/uploads/2022/10/guide.svg) Why Architecting Databases for Cost Efficiency Matters ](<https://www.finops.org/wg/why-architecting-databases-for-cost-efficiency-matters/>) [ ![](https://www.finops.org/wp-content/uploads/2025/02/FinOps-Value-Through-Optimization-FinOps-Topic-Featured-v01.png) Architecting VM-based Applications for Cost Efficiency ](<https://www.finops.org/wg/architecting-vm-based-applications-for-cost-efficiency/>) [ ![](https://www.finops.org/wp-content/uploads/2023/08/F2-YouTube-Thumbnails-Template-3.png) Introduction to FOCUS (FinOps Cost and Usage Specification) ](<https://www.finops.org/assets/introduction-to-focus-finops-cost-and-usage-specification/>) [ ![](https://www.finops.org/wp-content/uploads/2023/09/capital-one-x23.png) Why Automation Is the Key to Reducing Your Cloud Bill (Capital One) ](<https://www.finops.org/assets/why-automation-is-the-key-to-reducing-your-cloud-bill-capital-one/>)
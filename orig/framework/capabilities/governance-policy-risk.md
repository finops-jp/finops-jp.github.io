# Governance, Policy & Risk

[Framework](<https://www.finops.org/framework/>) / [Domains](<https://www.finops.org/framework/domains/>) / [Manage the FinOps Practice](<https://www.finops.org/framework/domains/manage-finops-practice/>) / Governance, Policy & Risk 

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success_kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

**Establishing and evolving policies, controls, and governance mechanisms to ensure that technology use across every[FinOps Scope](<http://finops.org/framework/scopes>) aligns with business objectives, complies with regulatory requirements, and mitigates financial and operational risk.**

### **Establish Technology Policy**

  * Specify preferred, required, and restricted technology services and solutions across all [FinOps Scopes](<http://finops.org/framework/scopes>) and technology categories, ensuring policies are clearly communicated and consistently applied across all [FinOps Personas](<http://finsop.org/framework/personas>)
  * Define data storage lifecycle and retention policies that balance cost efficiency, performance, compliance, and sustainability considerations
  * Define technology modernization lifecycle policies that guide when and how technology resources are updated, replaced, or decommissioned
  * Define technology and spend-based commitment policies that establish organizational guardrails for making, managing, and evaluating commitment-based investments

### **Establish Technology Governance**

  * Specify requirements for governance tools and automation systems that support the consistent enforcement and monitoring of technology policies
  * Define governance procedures that establish clear accountability, escalation paths, and decision making processes for technology spend and usage across all relevant [FinOps Personas](<http://finops.org/framework/personas>)
  * Establish governance cadences and reporting structures that ensure technology policy compliance and governance outcomes are regularly reviewed and communicated to [Leadership](<https://www.finops.org/framework/persona/leadership/>) and other stakeholder Personas

### **Identify and Manage Technology Risk**

  * Identify and document financial and operational risks associated with technology usage, spend commitments, and policy gaps across all technology categories, ensuring that risks are visible and assigned to appropriate owners
  * Define risk thresholds and tolerance levels in collaboration with [Finance](<https://www.finops.org/framework/persona/finance/>), [Leadership](<https://www.finops.org/framework/persona/leadership/>), and other FinOps Personas, establishing clear criteria for when risks require escalation, remediation, or acceptance
  * Establish a continuous risk monitoring and review process that tracks emerging risks, evaluates the effectiveness of existing controls, and ensures that the organization’s risk posture remains aligned with its business objectives and regulatory obligations

Governance, Policy & Risk is the FinOps Capability concerned with establishing, communicating, and enforcing the principles, rules, and controls that guide how technology is acquired, used, optimized, and retired across every [FinOps Scope](<https://www.finops.org/framework/scopes/>). It provides the structural foundation upon which a sustainable FinOps culture is built ensuring that technology decisions across cloud, SaaS, on-premises, AI/ML, and hybrid environments align with business objectives, operate within acceptable risk tolerances, and comply with regulatory, contractual, and legal obligations.

As FinOps practices mature and broaden—shifting left into engineering and product planning cycles, shifting up to inform executive and board-level technology strategy, and expanding horizontally across multiple technology categories—the importance of robust policy, governance, and risk management grows proportionally. What begins as a set of guardrails in an early-stage practice evolves into enterprise-wide processes for technology value governance.

This capability does not exist in isolation. It intersects with IT Asset Management (ITAM), IT Financial Management (ITFM), IT Security, Cloud Centers of Excellence, DevOps platform teams, enterprise risk functions, and audit and compliance bodies. FinOps practitioners do not own all of these domains, but they must be active participants in them, contributing the cost-efficiency and value perspective that is uniquely theirs to bring.

### Why This Capability Matters

The right technology decisions—ones that balance cost, performance, risk, and business value—will only be made reliably when people are directed toward them, outcomes are monitored, and there are meaningful consequences (positive or negative) attached to behavior.

Governance, Policy & Risk is how a FinOps practice operationalizes its culture. It transforms principles into repeatable behavior, and repeatable behavior into measurable outcomes.

Without it, organizations face a predictable set of failure modes: uncontrolled spend growth, shadow IT, inconsistent adoption of best practices, compliance exposure, vendor lock-in, and an inability to plan or forecast reliably. These are not abstract concerns—each represents a category of risk with real organizational consequences.

With a well-designed Governance, Policy & Risk capability, organizations can:

  * Ensure technology decisions across all [FinOps Scopes](<https://www.finops.org/framework/scopes/>) are consistently aligned to business strategy
  * Reduce the volume of individual decisions that need to be made by removing lower-value options from consideration
  * Automate compliance enforcement, reducing reliance on manual review and human judgment
  * Maintain transparency and accountability across all technology-consuming personas
  * Proactively manage a broad range of technology-related risks before they become incidents

### Governance, Policy and Risk: Understanding the Relationship

These three concepts are closely related but distinct, and understanding the relationship between them is important for practitioners.

**Governance** is the set of mechanisms (bodies, processes, accountabilities, and controls) through which an organization evaluates options, sets direction, and monitors performance and compliance against agreed objectives. In enterprise contexts, governance is often aligned to frameworks such as COBIT (maintained by ISACA), which defines governance as a board-level responsibility distinct from day-to-day management. FinOps practitioners should understand where technology governance authority sits in their organization and ensure FinOps activities are visibly connected to it.

**Policy** translates governance direction into actionable, authoritative statements that guide behavior. A good policy is specific enough to be useful, proportionate in the cost it imposes relative to the risk it addresses, and backed by genuine organizational authority. Policies that are poorly scoped, unenforced, or disconnected from governance bodies tend to create compliance theater rather than real control.

Examples of well-formed FinOps policies include:

  * _“A defined and organizationally agreed proportion of optimized compute usage must be covered by a discounted commitment instrument at all times, with coverage targets reviewed and adjusted as usage patterns evolve.”_
  * _“Technology resources that have sustained zero or near-zero utilization for a defined period will be decommissioned unless a documented business justification is reviewed and approved by the appropriate stakeholder Personas.”_
  * _“Technology services not on the approved catalog require architectural review and FinOps impact assessment before procurement, regardless of cost or scope.”_

**Risk Management** is the practice of identifying, assessing, and responding to the risks that technology use creates or remediates. The FinOps team is not the sole owner of risk management, but it has a clear role in surfacing and contextualizing technology-related risks and ensuring that governance and policy structures adequately address them.

### Risk Categories within Scope

FinOps practitioners should be familiar with the range of risk categories their work touches. These include:

  * **Financial Risk** : Uncontrolled or unpredictable technology spend that exceeds budgeted authority or creates material financial exposure
  * **Forecasting & Planning Risk**: Forecast variance high enough to undermine reliable budgeting, capacity planning, or product investment decisions
  * **Governance & Control Risk**: Technology use that operates outside approved processes, including shadow IT and unauthorized procurement
  * **Compliance Risk** : Failure to meet regulatory, audit, or certification requirements governing data handling, software licensing, or service procurement
  * **Contractual & Vendor Risk:** Inability to meet obligations in cloud, SaaS, or third-party contracts; exposure from poorly negotiated or unmonitored commitments
  * **Business Alignment Risk** : Investment in technology that does not support stated organizational strategy or delivers poor return on spend
  * **Operational Risk** : Technology decisions that compromise performance, reliability, or scalability of the systems FinOps supports
  * **Security Risk** : Use of technology in ways inconsistent with the organization’s security posture, creating exposure across other risk categories
  * **Cultural Risk** : An organizational culture unable to adapt to changing technology landscapes, resisting practices that would improve cost-effectiveness or accountability
  * **Reputational Risk** : Misuse or mismanagement of technology that results in public, regulatory, or stakeholder harm to organizational standing
  * **Decision Transparency Risk** : Lack of visibility into technology plans, spend, or commitments that prevents informed decision-making by leadership

Risk management in FinOps is ultimately connected to decision-making: every technology decision creates some risks while mitigating others. A mature FinOps practice develops awareness of the likely risk consequences of common decision paths, and has mechanisms in place to surface and manage risks as they emerge.

### Governance Implements Policy

Governance brings policy to life through three primary mechanisms:

**Guidelines** set out best practice approaches and recommended methods for achieving policy-compliant outcomes. They are advisory rather than mandatory and are most useful where the right approach varies by context.

**Guardrails** are formal processes, architectural controls, and structural constraints that define mandatory pathways for policy-compliant action. They may include approval workflows, configuration enforcement, access controls, or automated blocking of non-compliant resource provisioning. Guardrails reduce the need for human judgment on lower-value decisions by removing non-compliant options from consideration.

**Automation** encodes policy compliance directly into systems and processes, removing the dependency on individual knowledge or behavior. Tools such as cloud configuration management platforms, policy-as-code frameworks, and FinOps platforms can automate detection, alerting, remediation, and reporting against policy. As a FinOps practice matures, the proportion of governance implemented through automation should increase.

An example of governance in action: _“At the end of each month, teams are notified of cloud and SaaS resources with zero utilization. These will be decommissioned automatically the following Tuesday unless a documented retention justification is submitted.”_

This example combines automated detection, transparent communication, a default action aligned to policy, and a defined exception pathway; the hallmarks of effective governance.

## Maturity Assessment

####  Crawl 

  * Policy and governance exist but are largely reactive and manually operated
  * Policies focus on the most significant and visible risks — typically cost overruns and a small number of compliance obligations
  * Creation and enforcement of policy is ad hoc
  * Governance is informal, with no regular cadence or structured communication with FinOps and governance functions
  * Risk awareness is present but not systematically managed
  * Policy documentation is static and distributed manually
  * The FinOps team is aware of organizational governance structures but not yet deeply integrated with them

####  Walk 

  * Policies are broadened and standardized across technology categories
  * A regular review cadence exists
  * FinOps policies are proactively designed rather than created in response to incidents. Cross-functional collaboration with Finance, Engineering, Procurement, Security, and Risk functions is established
  * Policy training is integrated into routine onboarding and persona-specific enablement
  * Where available, vendor-provided and third-party tooling is used to automate governance monitoring and reporting
  * Risk categories relevant to the organization’s FinOps Scope are documented and actively tracked

####  Run 

  * Governance, Policy & Risk is fully integrated with enterprise technology strategy
  * All levels of the organization operate in ways that are visibly aligned to governance direction
  * Policy compliance is continuously monitored through automated systems with trend analysis
  * Recognised industry governance frameworks inform how FinOps governance connects to board-level IT governance bodies
  * FinOps risk inputs are incorporated into enterprise risk registers and management reporting
  * Guardrails and automation cover the majority of routine technology decisions across all [FinOps Scopes](<https://www.finops.org/framework/scopes/>)
  * The FinOps team is a recognized participant in enterprise governance, risk, and compliance processes

## Functional Activities

####  ![](https://www.finops.org/wp-content/uploads/2024/03/FinOps-Practitioner.svg) FinOps Practitioner 

**As someone in the FinOps team role, I will…**

  * Define, maintain, and communicate technology policies across all [FinOps Scopes](<https://www.finops.org/framework/scopes/>)
  * Identify applicable risk categories and support risk assessment for technology decisions
  * Coordinate implementation of governance mechanisms including guardrails and automation
  * Develop and maintain KPIs for policy compliance and risk posture, and share them transparently
  * Ensure FinOps governance connects appropriately to enterprise IT governance, risk, and compliance structures
  * Promote cross-persona collaboration and integrate Governance, Policy & Risk outputs with other FinOps capabilities

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Engineering.svg) Engineering 

**As someone in an Engineering role, I will…**

  * Implement and operate technical governance controls, guardrails, and automation
  * Recommend policy improvements as systems, architectures, and technology categories evolve
  * Raise and escalate risk signals identified through engineering work
  * Execute corrective action plans when policy compliance gaps are identified

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Finance.svg) Finance 

**As someone in a Finance role, I will…**

  * Contribute to KPI definition for financial risk and policy adherence measures
  * Align technology financial policies to broader financial governance and planning frameworks
  * Support scenario planning for financial risk categories including forecasting variance and commitment exposure

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Procurement.svg) Procurement 

**As someone in a Procurement role, I will…**

  * Align vendor and contract management practices to technology policy
  * Surface contractual and vendor risk to the FinOps team
  * Ensure new technology procurement passes through appropriate governance review

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Product.svg) Product 

**As someone in a Product role, I will…**

  * Apply FinOps policies and cost-efficiency principles in product planning and development decisions (shifting left)
  * Engage with governance processes when making architectural or technology investment decisions

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Leadership.svg) Leadership 

**As someone in a Leadership role, I will…**

  * Set governing principles for technology use that FinOps policies translate into operational rules
  * Enforce and visibly support policy compliance across all teams
  * Engage with enterprise governance bodies to ensure FinOps perspectives are represented
  * Accept accountability for risk decisions within their scope of authority

## Measures of Success & KPIs

  * **Policy Adherence Rate** — Proportion of total technology spend covered by compliant resources as defined by active policies
  * **Commitment Coverage** — Percentage of optimized usage covered by discounted commitment instruments, where applicable
  * **Guardrail Effectiveness** — Volume and trend of policy exceptions, overrides, and non-compliant provisioning events
  * **Risk Register Currency** — Proportion of identified FinOps risk categories with documented mitigation plans under active review
  * **Zero-Utilization Remediation Rate** — Percentage of flagged zero-utilization resources remediated within the defined governance window
  * **Governance Automation Coverage** — Proportion of active policies enforced through automated controls versus manual processes
  * **Time to Policy Response** — Average time between identification of a policy gap and implementation of a corresponding governance control

## Inputs & Outputs

### **Inputs to this Capability:**

  * Business strategy and technology investment priorities from Leadership
  * Regulatory, compliance, and contractual obligations from Legal, Compliance, and Procurement
  * Risk identification and assessment from enterprise risk management functions
  * Technology usage and spend data from Reporting & Analytics
  * Architectural standards and platform decisions from Engineering and CCoE teams
  * Market intelligence on best practices from FinOps Foundation and peer organizations

### **Outputs from this Capability:**

  * Authoritative policy statements covering each FinOps Scope
  * Governance mechanisms (guidelines, guardrails, automation) that implement those policies
  * Risk register inputs and risk mitigation documentation to Risk teams
  * Targets for automation of compliance to the Automation, Tools & Services Capability to eliminate the possibility where non-compliant technology decisions are made by defining the boundaries and criteria within which automation solutions, FinOps tools, and professional services activities can be evaluated, selected, and operationalized
  * Compliance KPIs and governance dashboards shared transparently across personas
  * Training and enablement materials for policy adoption (feeding into FinOps Education & Enablement)
  * Escalation paths and exception management processes for governance edge cases

[View former Cloud Policy & Governance page](<https://www.finops.org/framework/previous-capabilities/policy-governance/>)

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success_kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

##### Related Assets

[ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) FinOps for AI Overview ](<https://www.finops.org/wg/finops-for-ai-overview/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2035'%3E%3C/svg%3E) Scaling Kubernetes for AI/ML Workloads with FinOps to Optimize Value ](<https://www.finops.org/wg/scaling-kubernetes-for-ai-ml-workloads-with-finops/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) FinOps Governance & Policy for the Onboarding of Workloads (J.P. Morgan Chase) ](<https://www.finops.org/assets/finops-governance-policy-for-the-onboarding-of-workloads-j-p-morgan-chase/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) FinOps in Government Fireside Chat: Challenges and Solutions ](<https://www.finops.org/assets/finops-in-government-fireside-chat-challenges-and-solutions/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) Risky Business: Implementing Cloud Governance for Business Value (General Mills, Inc.) ](<https://www.finops.org/assets/risky-business-implementing-cloud-governance-to-drive-business-value-general-mills-inc/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) Driving Accountability Through Automation of Cloud FinOps Controls (SAP) ](<https://www.finops.org/assets/driving-accountability-through-automation-of-cloud-finops-controls-sap/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2032'%3E%3C/svg%3E) FinOpsPod 17: Intro to Automated Governance ](<https://www.finops.org/assets/finopspod-episode-15-lindbergh-matillano-intro-to-automated-governance/>)
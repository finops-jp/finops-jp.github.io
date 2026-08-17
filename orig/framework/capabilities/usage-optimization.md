# Usage Optimization

[Framework](<https://www.finops.org/framework/>) / [Domains](<https://www.finops.org/framework/domains/>) / [Optimize Usage & Cost](<https://www.finops.org/framework/domains/optimize-usage-cost/>) / Usage Optimization 

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success_kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

Analyze and optimize resources across [FinOps Scopes](<http://finops.org/framework/scopes>) to match actual usage patterns, while ensuring that workloads operate efficiently, sustainably, and generate sufficient business value relative to their cost.

### Creating a Usage Optimization Strategy

  * Evaluate workloads across all technology categories, like cloud, SaaS, and on-premises environments for optimization opportunities
  * Determine value versus risk thresholds for each workload to prioritize optimization efforts effectively
  * Define target optimization thresholds that align with organizational goals across cost, performance, and sustainability dimensions
  * Establish guidelines for balancing workload optimization against other optimization options, including rate and commitment-based approaches
  * Make conscious and informed tradeoff decisions among cost, quality, performance, and environmental impact when optimizing workloads

### Managing Usage Optimizations

  * Generate optimization recommendations for each area of usage, ensuring recommendations are actionable and relevant to stakeholder Personas
  * Prioritize optimization activities across both production and pre-production environments, balancing urgency with risk and business impact
  * Share recommendations with Engineering and other relevant personas, and collaborate to agree on realistic timelines and accountability for action
  * Align with Allied Personas such as Sustainability, and ITAM to ensure optimization targets reflect broader organizational goals and are coordinated across all relevant functions

### Understanding Where Opportunities Have Value

  * Evaluate the availability and suitability of modern, managed, and automated services that can reduce usage complexity and improve efficiency
  * Compare the optimization benefit of each opportunity in the context of Engineering time, organizational priorities, and the potential impact on cost, performance, and sustainability outcomes
  * Assess the return on investment of optimization activities by weighing the expected savings, cost avoidance or efficiency gains against the effort, risk, and disruption required to implement them
  * Establish a consistent methodology for ranking and prioritizing optimization opportunities, ensuring that the highest value opportunities are surfaced and acted upon first across all areas of usage

## Definition

Moving beyond traditional IaaS workloads to include all technology categories, Usage Optimization is a set of practices that ensure resources across all [FinOps Scopes](<http://finops.org/framework/scopes>) are properly selected, correctly sized, only run when needed, appropriately configured, and highly utilized in order to meet all functional and non-functional requirements at the lowest cost and environmental impact. This work is primarily done by Engineering, using guidelines and strategies formed collaboratively with FinOps, Product, and other relevant personas.

Engineers, FinOps Practitioners, and other [Personas](<http://finops.org/framework/personas>) should seek to ensure there is sufficient business value for the costs associated with each area of usage being consumed. Because systems and services are built and adopted iteratively, it is typical to observe usage patterns and resource utilization over time to ensure performance, availability, and other quality metrics are met, and to adjust or modify resources which are over- or under-sized or underutilized.

There is a strong relationship among all of the Capabilities in the Optimize Usage & Cost Domain. Each Capability in this Domain works in different ways to optimize value — through commitment-based discounts, rearchitecting, managing license and SaaS usage, providing guidance on sustainability improvements, and optimizing the utilization and efficiency of the resources and workloads that make up systems. Among all of these, Usage Optimization will likely be the most widely practiced Capability, with the broadest range of optimization options across all FinOps Scopes.

### Usage Optimization Needs Engineering Involvement

Early in the FinOps practice, stakeholder [Personas](<http://finops.org/framework/personas>) will likely play a large role in identifying opportunities to optimize workloads, but over time Engineering will take on the primary responsibility for their usage by seeking out ways to optimize, or better yet by building in optimization as much as possible as systems are being built. No matter how well built and efficient a system is when built, services in the are constantly being added and modernized, and organizations must be prepared to continuously work to keep pace and maintain optimal performance and utilization. Engineering leadership is critical to establishing the cadence and highlighting the need to maintain optimization of workloads at the appropriate level.

A key way the FinOps Practitioners can support optimization activities is by developing a Usage Optimization strategy. This strategy can direct optimization work by highlighting which types of resources and usage areas should be prioritized, setting thresholds for taking action so that time is not wasted on trivial improvements, defining target KPIs the organization wants to achieve, and creating guidelines for making the tradeoffs that come with optimization across all [FinOps Scopes](<http://finops.org/framework/scopes>).

### Intersecting with Other Capabilities & Personas

Other Capabilities in [this Domain](<https://www.finops.org/framework/domains/optimize-usage-cost/>) may have important inputs to this strategy, including highlighting for Engineering where the organization supports (or plans to stop) using licensed software or SaaS, when rearchitecting is preferred over resource optimization, how to prioritize usage optimization against rate optimization, and how to incorporate sustainability and carbon impact considerations into usage optimization decision making. The strategy may also set Leadership’s expectations for how frequently and diligently optimization should be pursued by Engineering relative to new feature development work.

[Engineering Personas](<https://www.finops.org/framework/persona/engineering/>), in collaboration with [FinOps Practitioners](<https://www.finops.org/framework/persona/finops-practitioner/>), [Product](<https://www.finops.org/framework/persona/product/>), and [Leadership](<https://www.finops.org/framework/persona/leadership/>) Personas, will leverage the Capabilities in the [Understand Usage & Cost Domain](<https://www.finops.org/framework/domains/understand-usage-cost/>) to review usage and resources across their areas of responsibility. Determining utilization and identifying scaling or usage management opportunities may require access to utilization, performance, or observability data in addition to usage, cost, and carbon impact data. Engineering teams may focus their efforts on finding optimization opportunities in different ways depending on factors such as the criticality of the system, time available to optimize, maturity of the application or service, the nature of the usage type being optimized, or whether the resources are supporting production or non-production environments.

### Examples of Usage Optimization

A wide range of options exist to optimize usage across all FinOps Scopes, including:

  * **Waste Reduction** : Removing resources and usage that were created or provisioned but are no longer needed or being used. These may include stranded storage volumes, excessive backups or snapshots, unused sandbox resources, redundant licenses, or inactive SaaS user entitlements. If these types of items are generated consistently, look to automate resource provisioning to avoid stranding or over-provisioning resources in the future, or automate cleanup processes to save having to search for them continuously.
  * **Workload Management** : Resources should ideally be utilized only when the workload or service is required. Scheduling the time when an environment or resource runs saves both cost and environmental impact. Pre-production resources are the biggest targets and should always require scheduled start/stop at launch when feasible. Resources which are fully elastic such as serverless executions, AI tokens, or other execution units, workload management entails identifying ways in which these executions are triggered and managing executions that are less valuable.
  * **Scaling** : Some resources have the ability to scale up or down depending on variable usage needs throughout the day or month. This can be accomplished in a variety of ways. Identifying high cost or high impact usage patterns with cyclical characteristics can highlight opportunities where dynamic scaling could be introduced.
  * **Rightsizing** : Resources that cannot be scaled but which have consistently low utilization may be candidates for rightsizing, reducing the size, scale, or service tier of the resource to better match its actual usage needs.
  * **License & SaaS Optimization**: Licenses and SaaS subscriptions that are unused, underutilized, or over-provisioned relative to actual consumption represent significant optimization opportunities. Regular reviews of license assignments and SaaS user entitlements can identify savings without impacting business operations.
  * **Temporal Shifting** : Processes not bound to run at a specific time can be scheduled to run at times that optimize cost and/or carbon impact, such as when lower-price compute or lower carbon intensity electricity is available.
  * **Geographic Shifting** : Processes not bound to run in a specific location can be deployed in a region or facility that optimizes cost and/or carbon impact, where there are price advantages or lower carbon intensity electricity, so long as compliance, data sovereignty, and performance requirements are met.

Examine usage patterns carefully for longer-cycle periods of high utilization (e.g. higher utilization at month-end or during quarterly busy periods) and be cautious of resources that have specific requirements for warranty, contractual, or software performance reasons. Rightsizing typically requires recreating or reconfiguring resources, which can involve service disruptions that should be carefully coordinated with Engineering and other relevant stakeholder personas.

There may be times when utilization needs to remain higher than optimal and the extra expense incurred is justified by the business value the resources create. Equally, the opposite may be true — cost efficiency goals may take precedence and carbon and/or performance expectations can be adjusted accordingly to improve cost outcomes.

For some resource types, such as storage, it may be necessary to estimate latent inefficiency in the stored data, and by extension the potential savings that can be realized by removing or rightsizing that inefficiency. Different data sets require tailored approaches. For example, highly compressible but uncompressed data has relatively high latent inefficiency, whereas encrypted data has relatively low or no latent inefficiency. Data that is infrequently accessed but stored in a high cost, high performance storage tier also has relatively high latent inefficiency. Good data housekeeping practices, such as optimizing data placement, implementing compression techniques, adopting tiered storage solutions, and reducing unnecessary data duplication, can improve both cost efficiency and environmental impact by minimizing the resources required to store and manage data over time.

### Optimization Methods Shift as Technology Providers Release Modernized Offerings

Technology providers and vendors regularly release modernized offerings, like new generations of compute families, serverless or managed versions of existing services, or new tiers of service with improved price-performance characteristics. Each of these modernization developments should prompt a review of existing usage to identify opportunities to migrate to newer, more cost-efficient and energy-efficient alternatives.

Newer resource types and service tiers typically deliver better cost-performance per unit, and often carry a lower environmental impact as well. Not every modernization opportunity requires immediate action, but Engineering and other FinOps Personas should maintain awareness of new and updated services across all technology categories, and factor modernization into their ongoing optimization planning rather than treating it as a one-time activity.

For any of these decisions to be made, resource utilization, efficiency, sustainability, and cost must be evaluated together and in context. Determining when and where usage optimization can be done effectively involves estimating not only the savings or cost avoidance that can accrue from a change, but also the full cost of making that change, labor hours, service disruptions, and the potential complexity of transforming how a resource or service is consumed in the process.

### Example Usage Optimization Strategies

Create tailored optimization strategies that balance financial, operational, and environmental considerations in a way that generates clear and measurable business value. Include targeted guidance to create context for applying usage optimization activities across key FinOps Scopes and technology categories. For example:

  * **Foundational Optimization Strategy** : Establish a strategy with clear thresholds, tradeoff guidelines, and KPIs that align all stakeholder Personas on shared outcomes. Focus on core usage optimization levers such as elasticity, rightsizing, storage efficiency, processor selection, and geographic placement. Document repeatable processes that can be refined as the organization’s maturity level advances.
  * **Practical Cloud & Workload Optimization**: Apply elasticity, scheduling, scaling, and serverless approaches to match resources to actual demand, while continuously rightsizing, modernizing, and optimizing the placement and configuration of compute and storage resources. Automate detection and execution of optimization opportunities using native provider and infrastructure-as-code tooling to reduce manual effort and improve consistency at scale.
  * **AI & GenAI Optimization**: Select appropriate model sizes and tuning approaches that match the value and requirements of each use case, while improving GPU efficiency through pooling, multi-tenancy, and dynamic scaling. Reduce inference costs and improve throughput by applying techniques such as batching, caching, retrieval-augmented generation, quantization, and intelligent routing, and optimize data flow and token usage to maximize cost efficiency across AI and GenAI usage. Examine in particular the use of agentic models which have the ability to expand costs by distributing work to multiple sub models. Control the use of “enhanced” modes of operation or model and platform features which can expand or multiply the number of tokens being used. 
  * **Measure Efficiency & Commitment Waste**: Prioritize optimization activities by quantifying value versus effort, drawing on utilization, performance, and sustainability data to identify and validate the highest impact opportunities. Coordinate across relevant personas to implement optimizations and track outcomes through KPIs such as savings rate, efficiency improvements, and coverage to maximize technology value

Moving from identifying optimization opportunities that are technically possible to realizing value from those activities requires close alignment between FinOps, Engineering, and other stakeholder Personas. Bridging the gap between opportunity identification and action, agreeing on priorities, timelines, and accountability across all [FinOps Scopes](<http://finops.org/framework/scopes>) is the key focus of this Capability.

## Maturity Assessment

####  Crawl 

  * Establishing a basic usage optimization strategy that identifies the highest priority areas of usage to target, defines basic prioritization criteria, and sets initial optimization KPI goals across cost and carbon dimensions
  * Developing visibility into resource utilization and efficiency across available FinOps Scopes using one or more data sources such as billing data, infrastructure monitoring tools, data efficiency tools, and observability insights
  * Defining a basic efficiency metric that is meaningful to the business and can be used to measure how efficiently a resource or service is being consumed relative to the value it generates
  * Optimization efforts at this maturity level tend to focus on the most familiar and well-understood areas of usage, where data is most readily available and the path to action is clearest
  * Optimization activities are largely manual and reactive, driven by periodic reviews rather than automated monitoring or alerting, and recommendations are shared informally with Engineering teams without a defined process for tracking action or outcomes
  * Awareness of sustainability and carbon impact as a consideration in optimization decisions is emerging, but sustainability data is limited in availability and not yet consistently incorporated into usage optimization recommendations or prioritization

####  Walk 

  * Establishing a more comprehensive usage optimization strategy that differentiates optimization approaches across different usage types and technology categories, with clear cadence and prioritization guidance for Engineering and other relevant personas
  * Understanding the financial, operational, and sustainability value expected from specific optimization activities, and using that understanding to prioritize efforts that generate the greatest combined value across all three dimensions
  * Able to estimate the potential savings or value that can be realized from a specific optimization opportunity, taking into account the nature of the usage type and the technology category being optimized (e.g. “rightsizing this resource is estimated to save $X per month with a Y% reduction in associated carbon emissions”)
  * Able to estimate the costs and effort required to act on an optimization opportunity, including labor, operational impact, and any tooling or platform costs involved. For example: “ _it will cost 50 hours of Engineering time at an hourly rate of $X to implement this change_ “, or “ _it will cost $0.01/GB for a data efficiency platform to surface the savings potential of this data set_ “
  * Optimization recommendations are documented consistently and tracked over time, enabling personas to monitor the status of recommendations and measure the actual impact of completed optimization activities against initial estimates
  * Basic automation of simple and repeatable optimization processes is in place, reducing the manual effort required to identify and act on common optimization opportunities across available [FinOps Scopes](<http://finops.org/framework/scopes>)

####  Run 

  * A comprehensive usage optimization strategy is in place that provides clear guidance across all usage types and FinOps Scopes, defines multiple approaches to addressing waste and inefficiency, sets specific optimization expectations for Engineering, Sustainability, Product, and other relevant personas, and establishes measurable KPI targets that reflect financial, operational, and sustainability outcomes
  * Access to detailed, integrated cost, utilization, and sustainability data across all FinOps Scopes drives automated optimization processes, with data sourced from multiple providers and normalized to enable consistent analysis and decision making
  * Automation is broadly in place to alert on, action, or clean up idle and wasteful resources, implement rightsizing recommendations, and update the architecture or configuration of resources across all technology categories with minimal manual intervention
  * Automated triage and filtering of optimization notifications ensures that Engineering and other personas are focused only on opportunities that meet defined value and effort thresholds, reducing noise and improving the quality of optimization activities
  * Optimization recommendations and opportunities are systematically tracked from identification through to resolution, with analysis of actual versus estimated impact performed regularly to inform and continuously refine the usage optimization strategy over time
  * The organization actively benchmarks against industry best practices for usage optimization, using maturity in data, automation, and cross-persona collaboration to drive continuous improvement across all FinOps Scopes and technology categories

## Functional Activities

####  ![](https://www.finops.org/wp-content/uploads/2024/03/FinOps-Practitioner.svg) FinOps Practitioner 

  * Create, maintain, and continuously evolve a Usage Optimization strategy that provides clear guidance across all usage types, technology categories, and FinOps Scopes, ensuring it remains aligned with organizational goals and reflects current priorities across financial, operational, and sustainability dimensions
  * Promote and support collaboration with Engineering, Sustainability, Product, and other relevant [FinOps Personas](<http://finops.org/framework/personas>) to identify, prioritize, and act on usage optimization opportunities across all [FinOps Scopes](<http://finops.org/framework/scopes>)
  * Support the reporting, data, and analysis needs of Engineering and other personas to surface optimization opportunities, ensuring that cost, utilization, and sustainability data are available, accessible, and presented in a consumable format
  * Provide oversight to the identification of optimization opportunities that will generate the most value for the organization, triaging and making recommendations based on a holistic comparison across all optimization approaches, particularly the balance between this Capability and [Rate Optimization](<https://www.finops.org/framework/capabilities/rate-optimization/>)
  * Establish and maintain a consistent process for tracking optimization recommendations from identification through to resolution, measuring actual impact against estimates and using those insights to continuously refine the usage optimization strategy
  * Develop and communicate clear guidelines for making tradeoff decisions where usage optimization goals conflict with cost, performance, or sustainability objectives, ensuring that stakeholder Personas have the guidance they need to make informed and consistent decisions

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Engineering.svg) Engineering 

  * Architect, build, and procure technology services and resources in alignment with the usage optimization strategy, KPIs, and forecasts, ensuring that cost, performance, and sustainability considerations are factored into decisions from the outset
  * Apply elasticity, rightsizing, utilization metrics, and workload management best practices to match resources and services to actual usage demands across all relevant technology categories and FinOps Scopes
  * Build and/or procure automation to generate, measure, and report on the utilization and efficiency metrics needed to identify optimization opportunities and track progress against KPI targets
  * Regularly review the utilization and efficiency of resources and services across all areas of responsibility, proactively identifying and communicating optimization opportunities to FinOps and other relevant personas
  * Collaborate with [FinOps Practitioner](<https://www.finops.org/framework/persona/finops-practitioner/>) and [Product](<https://www.finops.org/framework/persona/product/>) Personas to evaluate the cost, effort, and business impact of optimization opportunities, and commit to realistic timelines and accountability for acting on agreed recommendations
  * Stay informed of modernization developments across relevant technology categories and [FinOps Scopes](<http://finops.org.framework/scopes>), including new resource generations, service tiers, and managed service options, and proactively evaluate their potential to improve cost efficiency, performance, and sustainability outcomes
  * 

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Finance.svg) Finance 

  * Identify and highlight opportunities to improve utilization and efficiency across all FinOps Scopes, and work collaboratively with FinOps and Engineering teams to review the feasibility and financial impact of alternative optimization options
  * Support the development of reporting and analysis that tracks and communicates the financial impact of underutilization and inefficiency across all usage types and technology categories, ensuring that the cost of inaction is visible to relevant personas and Leadership
  * Partner with Engineering and FinOps teams to establish budgetary and efficiency targets that are realistic, measurable, and aligned with the organization’s broader financial and sustainability goals
  * Incorporate usage efficiency and optimization outcomes into budgeting and forecasting processes, ensuring that expected savings from optimization activities are reflected in financial plans and that variances are tracked and reported over time
  * Provide financial modeling and analysis to support tradeoff decisions where usage optimization goals conflict with cost, performance, or sustainability objectives, enabling informed decision making across all relevant personas.

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Procurement.svg) Procurement 

  * Seek to understand the future impact of planned usage optimization activities across all FinOps Scopes when negotiating with technology providers and vendors, ensuring that anticipated changes in consumption are factored into commercial agreements and commitment structures
  * Partner with FinOps Practitioners and Finance Personas to ensure that optimization-driven changes in usage patterns are reflected in vendor contracts, renewal negotiations, and commitment-based discount strategies, avoiding situations where commitments conflict with optimization goals
  * Define and communicate requirements to technology providers and vendors for the utilization, efficiency, and sustainability data needed to support usage optimization activities, ensuring that contractual obligations include appropriate data access and reporting provisions
  * Evaluate technology vendor and service provider offerings with usage efficiency and sustainability criteria in mind, ensuring that procurement decisions favor options that support the organization’s optimization goals alongside cost and performance requirements
  * Work with FinOps and Engineering Personas to maintain awareness of new and modernized service offerings from technology providers, and factor modernization opportunities into procurement planning and vendor relationship management
  * Track and report on vendor performance against utilization, efficiency, and sustainability commitments, ensuring accountability and surfacing opportunities to renegotiate or adjust agreements where usage patterns have changed significantly

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Product.svg) Product 

  * Clearly define service KPIs and performance boundaries so that Engineering and other stakeholder personas are able to design, build, and procure efficient and appropriately sized services that meet business requirements without over-provisioning
  * Provide demand forecasts and information on demand pattern profiles (e.g. daily, weekly, monthly, or cyclical patterns) across all relevant areas of usage, enabling Engineering and FinOps Practitioners to anticipate and plan for optimization opportunities proactively
  * Establish clear business goals and success criteria for the products and services I am responsible for (e.g. release to customers as quickly as possible, reduce the effective storage rate by more than 20%, achieve an availability target of 99.99%), so that optimization decisions can be evaluated against well-defined outcomes
  * Work collaboratively with Engineering, FinOps, Finance, and other stakeholder Personas to support the usage optimization strategy for areas under my ownership, ensuring that product priorities and constraints are clearly communicated and factored into optimization planning and prioritization
  * Evaluate and communicate the business impact of proposed optimization activities on product performance, availability, and customer experience, ensuring that tradeoff decisions between cost, sustainability, and quality are made with full visibility into their potential effect on business outcomes
  * Incorporate usage efficiency and sustainability considerations into product planning and roadmap prioritization, treating optimization as an ongoing product responsibility rather than a one-time or purely Engineering-led activity

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Leadership.svg) Leadership 

  * Establish and communicate a clear business value creation vision and strategy that informs and guides the usage optimization strategy across all FinOps Scopes and technology categories, ensuring alignment between optimization priorities and broader organizational objectives
  * Provide executive-level sponsorship, endorsing the defined KPIs and efficiency targets and establishing organizational credibility and accountability for the FinOps practice
  * Drive prioritization and decision making for usage optimization activities alongside other optimization approaches ensuring that tradeoff decisions are made in the context of expected business outcomes and organizational priorities
  * Set clear expectations for how usage optimization responsibilities are balanced against other engineering and product development priorities, ensuring that optimization is treated as an ongoing organizational commitment rather than a discretionary activity
  * Champion a culture of usage efficiency and sustainability across the organization, recognizing and rewarding teams that demonstrate measurable progress against optimization KPIs and contribute to the organization’s broader financial and sustainability goals

## Measures of Success & KPIs

  * Efficiency practices are applied consistently and value through optimization grows over time across all relevant technology categories and [FinOps Scopes](<http://finops.org/framework/scopes>)
  * Effective rates are trending downward over time relative to established baselines, reflecting the ongoing impact of usage optimization activities across technology providers
  * A KPI library is established, maintained, and regularly reviewed, providing Engineering, Finance, and other stakeholder Personas with a consistent and accessible set of efficiency and optimization metrics that reflect organizational priorities across cost, performance, and sustainability dimensions
  * A waste management library is established and actively maintained, documenting known waste patterns, recommended remediation approaches, and estimated value opportunities across all usage types, technology categories, and FinOps Scopes
  * [Unit Economics](<https://www.finops.org/framework/capabilities/unit-economics/>) KPIs are defined and tracked to measure the efficiency of technology usage relative to meaningful units of business value including cost, compute consumption, or carbon emissions per customer, transaction, or other relevant units of usage to enable teams to understand and improve the value generated by their usage over time
  * Optimization recommendations are tracked from identification through to resolution, with the proportion of recommendations acted upon trending upward over time and the average time to resolution trending downward
  * The financial and sustainability impact of completed optimization activities is measured and reported regularly, demonstrating clear and quantifiable value to Leadership and other stakeholder Personas
  * Automation coverage for common optimization activities is expanding over time, with a growing proportion of routine optimization tasks handled without manual intervention across all FinOps Scopes
  * Usage efficiency benchmarks are established and regularly reviewed, enabling the organization to track its optimization performance over time and compare its efficiency outcomes against industry peers and best practices
  * Tradeoff decisions between cost, performance, and sustainability are documented and reviewed regularly, with evidence that optimization decisions are consistently aligned with the Usage Optimization strategy and organizational priorities

## KPIs

#### Cost Optimization Index (COIN)

Method of objective scoring based on resource cost efficiency.

Read more

#### Efficiency & Performance ROI

Measures the return on investment of optimization initiatives by comparing the combined financial and operational benefits to the cost of implementing the optimization. The formula evaluates whether optimization efforts such as infrastructure right-sizing, efficiency improvements, or performance tuning deliver sufficient value through reduced costs and improved performance relative to the resources required to implement them.

Read more

#### Auto-scaling Efficiency Rate

Measures effectiveness of an auto-scaling system.

Read more

#### Data Center Power Usage Effectiveness

Measures how efficiently a data center uses energy by comparing the total power consumed by the facility to the power consumed by IT equipment. The formula quantifies the overhead required to support IT operations such as cooling, power distribution, and lighting relative to the energy directly used for compute, storage, and networking. A PUE value

Read more

#### Optimizing Electricity PUE, WUE, Between Regions, or Cloud Service Providers

Optimizing Electricity PUE, WUE, Between Regions, or Cloud Service Providers

Read more

## Inputs & Outputs

### Inputs to this Capability

  * Through the [Reporting & Analytics](<https://www.finops.org/framework/capabilities/reporting-analytics/>) Capability, understand where resources and usage across all [FinOps Scopes](<https://www.finops.org/framework/scopes/>) are underutilized, underperforming, idle, or require adjustment to better align with actual demand and organizational efficiency targets
  * Through the [Data Ingestion](<https://www.finops.org/framework/capabilities/data-ingestion/>) Capability, bring in performance, utilization, observability, and sustainability data needed to effectively measure and analyze individual resource and usage efficiency across all relevant technology categories. Adopting open billing schemas such as the [FinOps Open Cost and Usage Specification (FOCUS)](<http://focus.finops.org>) helps address these challenges.
  * Through the [Unit Economics](<https://www.finops.org/framework/capabilities/unit-economics/>) Capability, evaluate the effective efficiency rate and other metrics related to usage performance, enabling teams to assess optimization outcomes in the context of meaningful units of business value
  * Inputs from the [Anomaly Management](<http://v>) Capability identifying unexpected spikes or changes in usage patterns that may signal new optimization opportunities or indicate that existing optimization activities require review or adjustment
  * Organizational objectives from Finance and Product Personas related to required efficiency targets, thresholds, and business value expectations that inform and constrain usage optimization decisions
  * Finance approvals for purchases, purchase cadence, purchase amounts, and prepayment parameters that define the boundaries within which usage optimization recommendations are developed and acted upon
  * Third-party and provider-sourced carbon emissions factors, regional electrical grid carbon intensity data, regional water intensity data, and other sustainability data inputs that inform the environmental impact dimension of usage optimization decisions across all FinOps Scopes
  * Guidance to Engineering and Product Personas on anticipated resource rates and discount coverage for relevant usage, enabling informed decisions about resource selection and usage optimization in the context of available commercial arrangements

### Outputs from this Capability

  * Guidance to the Procurement Persona on future planned usage, historical usage patterns, and optimization-driven changes in consumption that may affect vendor negotiations, contract structures, and commitment-based discount strategies
  * Inputs to [Planning & Estimating](<http://v>) and [Forecasting](<http://v>) Capabilities reflecting the expected impact of optimization activities on future usage and spend, enabling more accurate and optimization-aware financial projections
  * Documentation of optimization opportunities in the form of lightweight business cases that clearly articulate the rationale, expected value, effort, and tradeoffs involved in proposed changes, including turning off idle resources, rightsizing, replacing with more efficient alternatives, or shifting to lower cost or lower carbon locations
  * Outputs to the [Sustainability](<http://v>) Capability reflecting the carbon and environmental impact of usage optimization activities, ensuring that sustainability reporting accurately captures the contribution of usage optimization to the organization’s broader environmental goals
  * A documented and continuously refined Usage Optimization strategy that serves as a reference for all FinOps Personas, guiding optimization prioritization, decision making, and tradeoff resolution across all FinOps Scopes over time

[View former Workload Management & Automation page](<https://www.finops.org/framework/previous-capabilities/workload-management-automation/>)

[View former Resource Utilization & Efficiency page](<https://www.finops.org/framework/previous-capabilities/utilization-efficiency/>)

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success_kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

##### Related Assets

[ ![](https://www.finops.org/wp-content/uploads/2025/09/Scaling-Kubernetes-for-AIML-Workloads-FinOps-v1.png) Scaling Kubernetes for AI/ML Workloads with FinOps to Optimize Value ](<https://www.finops.org/wg/scaling-kubernetes-for-ai-ml-workloads-with-finops/>) [ ![](https://www.finops.org/wp-content/uploads/2025/04/FinOps-Assets-Paper-Optimizing-GenAI-Featured-v1.png) Optimizing GenAI Usage: A FinOps Perspective on Cost, Performance, and Efficiency ](<https://www.finops.org/wg/optimizing-genai-usage/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) FinOps for Azure Managed Disks: Optimizing for Value ](<https://www.finops.org/wg/finops-for-azure-managed-disks-optimizing-for-value/>) [ ![](https://www.finops.org/wp-content/uploads/2025/03/FinOps-Assets-Paper-Effect-of-Optimization-on-AI-Forecasting-Featured-v1.png) Effect of Optimization on AI Forecasting ](<https://www.finops.org/wg/effect-of-optimization-on-ai-forecasting/>) [ ![](https://www.finops.org/wp-content/uploads/2025/02/FinOps-Value-Through-Optimization-FinOps-Topic-Featured-v01.png) Architecting VM-based Applications for Cost Efficiency ](<https://www.finops.org/wg/architecting-vm-based-applications-for-cost-efficiency/>) [ ![](https://www.finops.org/wp-content/uploads/2022/10/guide.svg) Why Architecting Databases for Cost Efficiency Matters ](<https://www.finops.org/wg/why-architecting-databases-for-cost-efficiency-matters/>) [ ![](https://www.finops.org/wp-content/uploads/2023/07/finops-article-featuredimage.png) How to Optimize Cloud Usage ](<https://www.finops.org/wg/how-to-optimize-cloud-usage/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2032'%3E%3C/svg%3E) Managing FinOps Data Efficiency ](<https://www.finops.org/assets/managing-data-efficiency-paper/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) Encouraging Engineers to Take Action ](<https://www.finops.org/wg/encouraging-engineers-to-take-action/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) FinOps Success Stories - Optimization Beyond Rightsizing (Lululemon) ](<https://www.finops.org/assets/finops-success-stories-optimization-beyond-rightsizing-lululemon/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) Optimize Your Cloud Investment in Microsoft Azure ](<https://www.finops.org/assets/optimize-your-cloud-investment-in-microsoft-azure/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) How to Optimize SQL FinOps Data in the Cloud ](<https://www.finops.org/assets/optimizing-sql-in-the-cloud/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) FinOps in the Federal Space: Veterans Affairs' Journey to Cloud Optimization ](<https://www.finops.org/assets/finops-in-the-federal-space-veterans-affairs-journey-to-cloud-optimization/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2032'%3E%3C/svg%3E) FinOpsPod 14: Cloud Cost Optimizations - Ideal vs. Reality ](<https://www.finops.org/assets/finopspod-episode-14-jeremy-nancel-john-renne-optimizations-ideal-vs-reality/>)
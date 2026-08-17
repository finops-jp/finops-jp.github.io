# Sustainability

[Framework](<https://www.finops.org/framework/>) / [Domains](<https://www.finops.org/framework/domains/>) / [Optimize Usage & Cost](<https://www.finops.org/framework/domains/optimize-usage-cost/>) / Sustainability 

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success_kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

**Incorporating sustainability criteria and metrics into FinOps activities to ensure environmental efficiency is balanced with financial value, and optimization decisions are aligned with organizational goals.**

### Understanding Sustainability Impact

  * **Assess technology carbon footprint across all**[**technology categories**](<https://www.finops.org/framework/technology-categories>): Identify and measure the environmental impact of technology use across cloud, data center, SaaS, AI, or end-user computing. Establish baseline emissions data even where coverage is incomplete, using directionally correct estimates where precise data is unavailable.
  * **Align sustainability strategy with optimization goals:** Treat usage efficiency as the primary lever for both cost and carbon reduction. Sustainability improvements are most durable when they emerge from the same optimization activities that reduce waste and improve resource utilization.
  * **Identify and prioritize sustainability improvement opportunities:** Surface tradeoffs where sustainability and financial goals align or conflict, and provide the data needed for engineering and product teams to make informed decisions.

### Governing and Reporting Sustainability

  * **Integrate sustainability data into FinOps reporting:** Incorporate carbon and related emissions data into cost allocation, forecasting, and unit economics so environmental impact is visible alongside financial spend.
  * **Engage intersecting disciplines when they exist:** Coordinate with organizational sustainability, procurement, and finance functions to align technology reporting with corporate mandates and regulatory requirements.
  * **Support compliance and transparency:** Document assumptions, estimation methodologies, and data quality limitations to ensure reporting integrity and reduce regulatory exposure.

## Definition

Sustainability defines how the organization will make decisions about using technology in ways that consider both its impact on the environment and the organization’s broader sustainability goals. Sustainability considerations allow engineers and product personas to balance environmental value alongside financial benefits when architecting, optimizing, and deploying workloads across all technology domains, including cloud, data centers, data cloud platforms, AI, and other infrastructure.

Many organizations have a sustainability program that looks broadly at environmental impact beyond technology. The proportion of environmental impact attributable to technology use will vary greatly by organization depending on all of its sources of carbon emissions. Regulation requiring more regular reporting of environmental impacts, including direct and indirect carbon emissions, is being enacted in many areas of the world. As a result, visibility into carbon use across all technology domains is becoming increasingly important for cost allocation, reporting, forecasting, and other critical IT functions.

FinOps teams should be integrating with organizational sustainability programs by leveraging the [Intersecting Disciplines Capability](<https://www.finops.org/framework/capabilities/intersecting-disciplines/>). By incorporating sustainability information into the activities performed under the [Understand Usage & Cost](<https://www.finops.org/framework/domains/understand-cloud-usage-cost/>) and [Quantify Business Value](<https://www.finops.org/framework/domains/quantify-business-value/>) Domains, along with activities from the Sustainability Capability, practitioners should be working to identify opportunities for optimization of technology cost and usage to support the organization’s sustainability goals.

Activities done in this Capability will generate potential opportunities to reduce the carbon footprint of technology use across all domains, including cloud, data centers, data platforms, and AI. Recommendations for optimization opportunities can be evaluated by the FinOps team and other Personas to select the options over time that produce the best value to the organization, whether financial, environmental, or operational.

### Sustainability & Optimization Considerations

[Usage Optimization](<https://www.finops.org/framework/capabilities/usage-optimization/>) recommendations correlate closely with lower carbon emissions by only using what is needed, and only when it is needed. For example, right-size workloads to match actual demand, rationalize unused SaaS licenses, or refresh on-premises equipment on an efficient lifecycle schedule.

However, sustainability efforts can run counter to cost savings in [Rate Optimization](<https://www.finops.org/framework/capabilities/rate-optimization/>) efforts, where reserved discounts on certain resources might discourage optimizing them or scaling them down. Some architectural or operational decisions may conflict with sustainability goals, for example operational policies to run blade servers at only 30% maximum CPU utilization to support availability, or the use of nearby (but less energy efficient) data center co-locations for latency reasons. And some technology resources or services in certain locations may be less expensive but more carbon intensive (or vice versa), leading to tradeoffs when deciding where to deploy workloads.

### Embodied Carbon

In order to achieve outcomes related to Sustainability, organizations need to consider embodied carbon, which captures the full lifecycle of their technology resources from the sourcing of materials and energy used to build and operate infrastructure, to the disposal of outdated equipment. Embodied carbon considerations extend across all [FinOps Scopes](<http://finops.org/framework/scopes>), including the manufacturing and disposal of on-premises servers and networking equipment, hardware refresh cycles for end-user computing devices, and the upstream emissions associated with third-party SaaS platforms.

Organizations that take a comprehensive view of embodied carbon across all of these categories will be better positioned to accurately measure and report on their full technology-related carbon footprint, and to identify the highest impact opportunities for reduction.

### Sustainability & AI

AI and machine learning workloads deserve specific attention within any sustainability strategy. Training and inference workloads running on GPU clusters are materially more energy-intensive than general-purpose compute, and their carbon profile varies significantly based on the energy mix of the region where they run.

As AI spend becomes a standard part of the technology portfolio — and as organizations scale from experimentation to production — the sustainability implications of AI infrastructure choices become a meaningful input to both workload placement decisions and vendor selection. FinOps teams supporting AI cost management should extend that same lens to carbon efficiency, and consider treating AI as a distinct category within the organization’s sustainability accounting.

As with all topics in FinOps, collaboration among teams is crucial to determine the top priorities for the organization and allowing those priorities to determine how to balance tradeoffs. Sustainability must be considered in the context of the needs of the business. The iron triangle balancing of cost, speed, and quality must weigh the cost and benefits of sustainability activities.

### Intersecting Capabilities & Domains

While the Sustainability Capability is part of the [Optimize Usage and Cost Domain](<https://www.finops.org/framework/domains/optimize-cloud-usage-cost/>), sustainability data will be used in many Capabilities across other Domains as well. For example, sustainability data may be incorporated as part of the [Data Ingestion Capability](<https://www.finops.org/framework/capabilities/data-ingestion/>), the [Allocation Capability](<https://www.finops.org/framework/capabilities/allocation/>), included in [Reporting & Analytics](<https://www.finops.org/framework/capabilities/reporting-analytics/>) activities, used in metrics to support [Unit Economics](<https://www.finops.org/framework/capabilities/unit-economics/>), or used in [KPI & Benchmarking](<https://www.finops.org/framework/capabilities/benchmarking/>) activities by engineering and other practitioner teams to track and improve emissions performance.

Tip: This capability references environmental impacts in terms of carbon (and equivalents), however this capability also should consider all measurable environmental impacts (including CO2e, Water usage, waste generation, etc) as data becomes available to the FinOps practitioner.

Sustainability considerations will include items such as the energy used to power and cool the servers and infrastructure that underpin all technology categories, as well as the efficiency of architectures, and placement of workloads. The degree to which organizations can optimize their carbon footprint will vary significantly by technology category.

Cloud environments offer dynamic, on-demand optimization opportunities that can be acted upon relatively quickly, while on-premises data centers and colocation facilities are constrained by fixed hardware investments and longer refresh cycles that require a more strategic and planned approach to carbon reduction. SaaS platforms and third-party services present a different set of considerations, where the organization’s ability to directly influence carbon outcomes is limited and largely dependent on the sustainability commitments and reporting transparency of the vendor.

End-user computing introduces additional complexity through device procurement, lifecycle management, and disposal practices that contribute meaningfully to the organization’s overall technology carbon footprint. Recognizing these differences is essential for developing a realistic and effective Sustainability strategy, and for setting appropriate expectations about where and how quickly carbon reductions can be achieved.

Sustainability data available from data providers, technology vendors, and billing sources will of course vary in its scope, granularity, and quality. FinOps teams will need to collaborate with [Sustainability Personas](<http://finops.org/framework/personas>) to determine the necessary granularity and how best to adjust or normalize data from various sources to align with corporate mandates. Sustainability data quality concerns may continue for some time, and organizations should provide input to their technology providers and vendors about the data they require. However, the primary goal of this Capability is to use whatever data is available, even when it is incomplete, to make recommendations to the organization regarding sustainable technology use. Assumptions, estimation methodologies, and data quality limitations should be clearly documented to ensure transparency and reduce the risk of misinterpretation or regulatory exposure. Architectural, usage efficiency, and rate optimization decisions will continue to be made without this input if all efforts are centered on data quality rather than on using data to make directionally-correct, if imperfect, recommendations about sustainable use across all technology domains.

There is also a meaningful relationship between optimization activity and sustainability investment. Organizations that systematically reduce waste create both financial headroom and carbon reductions simultaneously. Some organizations are beginning to treat this dynamic explicitly, using efficiency gains to fund sustainability improvements such as workload migration to lower-carbon regions or infrastructure refresh toward more energy-efficient hardware. Making this relationship visible in planning and reporting reinforces sustainability as a natural output of good FinOps practice, not a competing priority.

## Maturity Assessment

####  Crawl 

  * Key teams involved in technology usage have a basic understanding of how technology infrastructure contributes to greenhouse gas emissions
  * Technology teams understand how optimization of technology resources can impact carbon usage
  * There may be a corporate mandate for reporting on carbon or carbon reduction, but the strategy to apply this mandate to technology usage may not be mature
  * Teams have some carbon emissions data but it is likely poorly integrated with other data sources
  * Optimization activities are primarily centered on elasticity and turning off what is not being used
  * Tradeoff decisions where cost and carbon usage conflict are evaluated broadly and often on existing workloads
  * Enterprise functions (e.g. procurement, finance, and business teams) have a basic understanding of their involvement and a basic understanding of how technology usage impacts greenhouse gas emissions
  * Collaboration between FinOps Personas (Practitioner, Sustainability, Engineering) is informal and inconsistent, with no defined engagement model
  * Sustainability reporting is largely manual and ad hoc, with no repeatable processes or automation in place

####  Walk 

  * All engineering teams and most other Personas involved in technology usage are aware of their potential impact on corporate sustainability goals
  * Technology teams have a variety of mechanisms to reduce carbon use through optimization efforts across multiple technology domains
  * Ingestion and reporting of carbon use data is shared with engineering and product teams, and is more granular but may not be fully integrated with cost data
  * Optimization activities move towards re-architecting or re-factoring existing workloads to improve both cost and carbon efficiency
  * Tradeoff decisions between carbon usage and cost are evaluated on a more granular level, and are sometimes considered ahead of technology migration or build decisions
  * Collaboration between FinOps Personas (Practitioners, Sustainability, Engineering) is more structured, with defined touchpoints and shared reporting, though not yet fully formalized
  * Sustainability metrics are beginning to be incorporated into allocation and chargeback models, enabling teams to understand their carbon footprint alongside their technology spend

####  Run 

  * The entire organization is aware of technology’s impact on corporate sustainability goals, and understands how the technologies consumed contribute to that impact
  * Sustainability is a standard consideration in all technology migration, build, and optimization activities across all domains
  * Reporting is normalized across all technology providers and data sources, is at a granular level, fully integrated with cost data, and is allocatable and reportable to individual teams for further analysis and accountability. Practitioners must acknowledge that this normalization requires reconciling differing carbon accounting methodologies and emission factors (e.g., aligning with the GHG Protocol) to ensure a consistent ‘carbon ledger’ across varying provider reporting cadences
  * Workloads and technology investments are architected and evaluated with sustainability in mind; teams use data to proactively consider where and how to deploy workloads across all available technology domains before deployment decisions are made
  * Collaboration between FinOps Personas (Practitioners, Sustainability, Engineering) is fully formalized, with shared goals, joint planning cycles, and executive visibility into progress against sustainability targets
  * Sustainability metrics are fully embedded into allocation, chargeback, and unit economics models, enabling teams to track and be accountable for their carbon footprint alongside their technology spend in a consistent and repeatable way
  * The organization actively contributes to industry sustainability standards and benchmarks, using its maturity and data to inform best practices and drive improvements beyond its own technology estate

## Functional Activities

####  ![](https://www.finops.org/wp-content/uploads/2024/03/FinOps-Practitioner.svg) FinOps Practitioner 

**As someone in the FinOps team role, I will…**

  * Collaborate with Sustainability Personas and other stakeholders to align FinOps activities with organizational sustainability goals
  * Work with technology providers, data providers, and other billing sources to define requirements that improve the granularity, quality, and auditability of Scope 1, 2, and 3 emissions data, and incorporate that data into a usable, consumable format that supports sustainable business decisions
  * Ensure engineering, product, and other relevant teams have a clear understanding of how elastic and efficient resource provisioning across all technology domains supports the organization’s sustainability goals
  * Ensure that sustainability optimizations are developed alongside usage and rate optimization recommendations, so that cost and carbon efficiency are considered together
  * Support organizational sustainability goals by aligning technology reporting and metrics to surface positive and negative sustainability impacts alongside financial cost impacts
  * Enable the organization to make more sustainable technology decisions by providing clear, relevant emissions data that is correlated with cost data and provided in near real time when available or through internally modelled estimates derived from usage telemetry and regional carbon intensity data
  * Establish and maintain a consistent methodology for allocating and reporting carbon emissions data across technology domains, enabling teams to understand and take accountability for their sustainability impact alongside their technology spend
  * Monitor and communicate progress against organizational sustainability targets by developing KPIs and benchmarks that track the carbon efficiency of technology use over time, and share findings with relevant stakeholders to drive continuous improvement

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Product.svg) Product 

**As someone in a Product role, I will…**

  * Work with Leadership, Finance, and FinOps Practitioner Personas to understand the organizational sustainability strategy and guidelines, and incorporate them into product planning and prioritization decisions
  * Partner with Engineering teams to identify and drive sustainability optimizations that are appropriate for the products and workloads I am responsible for
  * Incorporate sustainability metrics alongside cost and performance metrics when evaluating the success and health of products I own, ensuring environmental impact is treated as a first-class consideration
  * Evaluate tradeoffs between sustainability, cost, and performance when making architectural and operational decisions, and escalate conflicts to appropriate stakeholders when necessary
  * Advocate for sustainability requirements during product development cycles, ensuring that carbon efficiency is considered at the design stage rather than as an afterthought

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Finance.svg) Finance 

**As someone in a Finance role, I will…**

  * Work with Engineering and Practitioner Personas to clarify, balance, and justify guidance for more sustainable technology options (e.g. lower carbon infrastructure, energy efficient locations) versus lower cost options, ensuring both financial and environmental considerations are represented in decision making
  * Ensure accurate and transparent financial statement disclosures related to technology use while maintaining integrity and adherence to sustainability regulatory standards and reporting requirements
  * Work with FinOps Practitioners and Sustainability Personas to develop and maintain a consistent process for quantifying and reporting the financial impact of carbon emissions, including carbon costs, penalties, and offsets, across all technology domains
  * Monitor evolving sustainability regulations and reporting mandates (e.g. Scope 1, 2, and 3 emissions requirements) to ensure the organization remains compliant and that financial disclosures accurately reflect technology-related environmental impacts
  * Incorporate sustainability cost drivers into budgeting, forecasting, and variance analysis processes, ensuring that carbon-related costs and savings are visible and accounted for alongside traditional technology spend

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Procurement.svg) Procurement 

**As someone in a Procurement role, I will…**

  * Work with FinOps Practitioners and Sustainability Personas to incorporate technology sustainability reporting into corporate-wide sustainability reporting, and leverage that data to inform strategic vendor and sourcing decisions
  * Partner with Engineering and FinOps Practitioner Personas to balance the needs of the business with sustainable technology architecture and procurement choices across all technology domains
  * Define and communicate requirements to technology vendors and data providers for the sustainability data, emissions metrics, and reporting granularity needed to support the organization’s sustainability goals
  * Evaluate and incorporate sustainability criteria alongside cost and performance criteria when assessing, selecting, and renewing technology vendor contracts and agreements
  * Work with Finance and FinOps Practitioner Personas to understand the financial implications of sustainability-driven procurement decisions, including the cost impact of choosing more sustainable but potentially higher cost technology options
  * Track and report on vendor performance against sustainability commitments, ensuring accountability and driving continuous improvement in the sustainability profile of the organization’s technology supply chain

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Engineering.svg) Engineering 

**As someone in an Engineering role, I will…**

  * Work to understand the organizational sustainability strategy, guidelines, and priorities as they apply to the systems, workloads, and technology domains I am responsible for
  * Be aware of the sustainability implications of my resource decisions alongside financial cost impacts, and work to deploy elastic, efficient solutions that minimize or eliminate wasted resources across all technology categories
  * Be aware of the sustainability impacts of the technology services and infrastructure options available to me, in order to incorporate sustainability considerations into my builds and identify opportunities to optimize existing workloads
  * Incorporate sustainability metrics alongside cost and performance metrics when designing, building, and operating systems, treating carbon efficiency as a first-class engineering consideration rather than an afterthought
  * Proactively identify and communicate architectural tradeoffs where sustainability and cost or performance goals conflict, and work with FinOps Practitioners, Product, and Sustainability Personas to evaluate and resolve those tradeoffs in alignment with organizational priorities
  * Stay informed of emerging tools, technologies, and best practices that can improve the carbon efficiency of the systems I build and operate, and advocate for their adoption where appropriate

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Leadership.svg) Leadership 

**As someone in a Leadership role, I will…**

  * Set strategy and priority for sustainability decisions with respect to other competing business drivers
  * Establish and communicate a clear organizational sustainability strategy that encompasses all the organization’s technology categories, ensuring alignment between sustainability goals, business objectives, and technology investment decisions
  * Ensure that sustainability considerations are embedded into organizational culture, processes, and decision making, and that all relevant teams understand their role in achieving the organization’s sustainability goals
  * Work with Finance, Procurement, and FinOps Practitioner Personas to ensure that sustainability-related costs, risks, and opportunities are visible and accounted for in organizational budgeting, forecasting, and strategic planning processes
  * Champion the adoption of FinOps practices that drive carbon efficiency alongside cost efficiency, recognizing that sustainable technology use is both a financial and reputational imperative for the organization
  * Set measurable sustainability targets for technology use across all domains, and hold teams accountable for progress against those targets through regular executive-level reporting and governance reviews
  * Ensure the organization is positioned to meet current and emerging sustainability regulatory requirements by investing in the data, tooling, and organizational capabilities needed to report accurately and transparently on technology-related carbon emissions

####  ![]() Allied Personas 

**As someone in an Allied Persona role, I will…**

  * Work with FinOps Practitioner Personas to coordinate on how technology usage across the organization impacts and informs the corporate sustainability strategy, ensuring that technology-related emissions are accurately represented in organizational sustainability reporting
  * Coordinate with FinOps Practitioner Personas to track and communicate technology sustainability performance over time, establishing shared metrics and reporting cadences that reflect progress against organizational sustainability targets
  * Serve as the primary source of expertise on sustainability regulations, and reporting standards(e.g. Scope 1, 2, and 3 emissions, GHG Protocol), ensuring FinOps and Engineering Personas have the guidance they need to align their activities with corporate sustainability mandates
  * Partner with Finance and Procurement Personas to ensure that sustainability criteria are consistently applied across vendor selection, contract negotiations, and technology investment decisions
  * Provide FinOps Practitioner and Engineering Personas with clear, actionable sustainability guidelines and priorities that can be incorporated into technology architecture, optimization, and operational decisions across all technology domains
  * Engage with external industry bodies and regulators on behalf of the organization, leveraging insights from FinOps Practitioner, Product, and Engineering Personas to accurately represent the organization’s sustainability posture and commitments

## Measures of Success & KPIs

  * Sustainability reports are available across all technology vendors and data providers; data is normalized across all sources and aligns to the scope and granularity needed for regulatory and corporate reporting compliance
  * Sustainability reports are visible to all stakeholders with technology spend responsibility, and are presented alongside cost data in a consistent and consumable format
  * Sustainability targets (e.g. carbon budgets) are defined and communicated to all relevant teams across all technology categories; all teams can track their progress against targets in near real time
  * Impact on sustainability is consistently considered during technology migration, build, and optimization activities across all domains, and is documented as part of decision making processes
  * Clear guidelines exist for evaluating and prioritizing all types of optimization options, and specifically for resolving conflicts where sustainability goals and financial goals are in tension
  * Carbon emissions are allocatable to individual teams, products, and workloads across all [FinOps Scopes](<http://finops.org/framework/scopes>), enabling accountability and driving informed decision making at the team level. Organizations should be aware that carbon allocation is inherently more nuanced than cost allocation, and that achieving accurate and meaningful attribution requires careful attention to how emissions are measured, where they originate, and how they are apportioned across the full lifecycle of technology use
  * Sustainability metrics are integrated into existing FinOps reporting and forecasting processes, enabling the organization to project future carbon emissions alongside future technology spend
  * The organization can demonstrate measurable progress against sustainability targets over time, with executive-level visibility into trends, variances, and the impact of optimization activities on the overall carbon footprint of technology use

Key terms that are likely to be used in sustainability reports:

**Term** | **Description**  
---|---  
Metric tons of carbon dioxide equivalents (mtCO2e) | Each measurement of greenhouse gas can be converted to metric tons of carbon dioxide equivalents by using that greenhouse gas’s global warming potential (GWP) factor.  
kg of carbon dioxide equivalents (kgCO2e) | Each measurement of greenhouse gas can be converted to kilograms (kg) of carbon dioxide equivalents by using that greenhouse gas’s global warming potential (GWP) factor.  
Liters of H2O consumed | Measurement for water consumption (commonly used in data centers)  
MWh of electricity | Total megawatt hours (MWh) used from electricity  
kWh of electricity | Total kilowatt hours (kWh) used from electricity  
m3 of water | Typically, total water consumed in cubic meters  
ESG | Environmental, Sustainability & Governance – sometimes an umbrella term for where Sustainability efforts are run in organizations.  
CO2e | Carbon Dioxide Equivalent, or Carbon Equivalent, sometimes used as a unified way of expressing the environmental impact of an activity taking into account all of the various emissions or resource uses and expressing them in an equivalent of carbon dioxide for easier reporting with a unified measurement  
SDG | Sustainable Development Goals, a set of evolving sustainability goals established and reported upon by various UN and governmental organizations  
GHG | Greenhouse Gasses, all of the various gasses which affect the environment as emissions, including carbon dioxide, methane, and other pollutants  

## KPIs

#### Percentage of CSP Cloud Carbon that is Tagging Policy Compliant

This KPI measures the amount of compliance for cloud sustainability tagging.

Read more

#### Carbon Waste / Carbon Efficiency

This metric compares present forecasted vs. actual cloud emissions over a specific period (e.g., day, month, quarter).

Read more

#### Carbon per Unit of Cloud Service SKU

CSP Cloud Carbon Budget Burn RateCarbon emissions per unit of cloud service SKU measure the amount of carbon dioxide equivalent (CO2e) emitted to deliver a specific unit of cloud services, such as compute, storage, and/or networking.

Read more

#### Carbon per Unit of Cloud Spend

Measure of carbon emissions (CO2e) per unit of cloud spend. Ideally, this measure would be drillable by scope and service categories, such as compute, storage, or networking.

Read more

#### Forecast Accuracy Rate for Carbon Emissions

Forecast Accuracy Rate for Carbon Emissions

Read more

## Inputs & Outputs

### Inputs to this Capability

  * Through the [Data Ingestion Capability](<https://www.finops.org/framework/capabilities/data-ingestion/>), obtain sustainability reporting and carbon emissions data from technology providers, data providers, and other billing and vendor sources across all technology domains
  * Technology provider and vendor sustainability contextual information and optimization recommendations (e.g. comparisons of the carbon impact of various infrastructure types, deployment locations, or architectural patterns) used to inform decision making across all technologies
  * Third party data, tools, and recommendations for carbon reduction opportunities across all technology domains, including benchmarking data that enables the organization to compare its sustainability performance against industry peers
  * Through the [Intersecting Disciplines Capability](<https://www.finops.org/framework/capabilities/intersecting-disciplines/>), coordinate with broader organizational sustainability functions that require specific reporting, data, or coordination to support corporate sustainability mandates and regulatory compliance requirements
  * Inputs from Leadership and Finance Personas on organizational sustainability strategy, regulatory compliance requirements, and carbon reduction targets that inform the prioritization and direction of sustainability optimization activities across all FinOps Scopes

### Outputs from this Capability

  * Through the [Reporting & Analytics Capability](<https://www.finops.org/framework/capabilities/reporting-analytics/>), ensure that available sustainability data is consistently included in cost reports and presented alongside financial metrics in a consumable format
  * Through the [Unit Economics Capability](<https://www.finops.org/framework/capabilities/unit-economics/>), ensure sustainability data is incorporated into key metrics, enabling teams to understand the carbon efficiency of their technology use on a per-unit basis
  * Through the [Allocation Capability](<https://www.finops.org/framework/capabilities/allocation/>), ensure carbon emissions data is attributed accurately to the appropriate teams, products, and workloads, enabling accountability and supporting chargeback or showback of sustainability costs
  * Through the [Forecasting Capability](<https://www.finops.org/framework/capabilities/forecasting/>), incorporate sustainability data and carbon emissions trends into forward-looking technology spend projections, enabling the organization to anticipate and plan for future sustainability impacts and obligations
  * Training and guidance to help all relevant [FinOps Personas](<http://finops.org/framework/personas>) understand how to manage, view, and act on sustainability data at the appropriate level of granularity (e.g. by team, application, workload, or technology domain)
  * Sustainability optimization recommendations communicated to Engineering, Product, and other stakeholder Personas, identifying opportunities to reduce carbon emissions and improve the environmental efficiency of technology use across all FinOps Scopes
  * A documented and continuously refined Sustainability strategy that serves as a reference for all stakeholder Personas, guiding carbon reduction prioritization, tradeoff decision making, and progress reporting over time

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success_kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

##### Related Assets

[ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) Cloud Sustainability and Its Intersection with FinOps ](<https://www.finops.org/wg/sustainability/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) How FinOps Can Help Drive Your Sustainability Goals ](<https://www.finops.org/assets/how-finops-can-help-drive-your-sustainability-goals/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2032'%3E%3C/svg%3E) Self-Paced Cloud Sustainability Self-Assessment ](<https://www.finops.org/assets/cloud-environmental-sustainability-self-assessment/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2032'%3E%3C/svg%3E) Estimating Energy Consumption on Google Cloud (Repo) ](<https://www.finops.org/assets/cloud-jewels-estimating-energy-consumption-on-google-cloud/>)
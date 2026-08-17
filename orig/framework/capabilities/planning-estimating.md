# Planning & Estimating

[Framework](</framework/>) / [Domains](</framework/domains/>) / [Quantify Business Value](<https://www.finops.org/framework/domains/quantify-business-value/>) / Planning & Estimating 

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success_kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

**Estimation and exploration of potential cost and value, alongside opportunities for automation, sustainability and optimization, for workloads if implemented in an organization’s technology environment in a particular model or models.**

**Explore scenario(s) in a technology category**

  * Define scope of estimate
  * Define detail required for estimate
  * Model parameters for future state

**Estimate business value for defined scenario(s)**

  * Use calculators and estimation tools to explore relationships such as cost, usage and environmental impact
  * Compare to similar applications and systems
  * Extrapolate from past costs and technology demand metrics
  * Document expected impact of future plans
  * Estimate using trial runs and non-production environments
  * Incorporate pricing, policy, carbon targets, shared services, and other support costs

**Implementation plan**

  * Plan Proof of Concept
  * Make recommendations to adjust forecasting models

## Definition

Because of the variety of services available across various technology categories (e.g. cloud, data cloud platforms, data centers, etc.) frequent updates, new services, managed services, and the variety of models in which applications can be built, a robust set of practices is required to be able to estimate the future costs of a workload or system. Organizations also need to estimate and plan their resource consumption in the context of their sustainability targets. Estimation can be done for any scope from a single service change to an entire application migrating to cloud from the data center. Oftentimes, multiple estimates will be made to compare potential future value to the business under a variety of scenarios.

Estimating is primarily supported by Engineering personas, supported by FinOps teams. Input from Product, Finance or Leadership may be required when estimates are particularly important, impactful or complex; or when trial budget might be required to estimate.

Planning & Estimating is closely related to Forecasting. Estimating is done to understand what potential future costs might be under various scenarios or use cases, in order to create a plan for migration, implementation, or modernization. Estimates will be an input to Forecasting, where a more detailed forecast model for the planned changes will be created and maintained. Forecasting represents anticipated spending and value creation an engineering or product team will be responsible to deliver.

By contrast, Planning & Estimating is exploratory ideation. It will produce inputs to technology cost forecasts, but also for other reasons. Estimating is performed frequently in support of Optimize Usage & Cost domain activities, like Architecting for Cloud, Workload Optimization, or even Onboarding Workloads.

When estimating future costs, organizations should define the scenarios which are appropriate to estimate for. This includes understanding the service(s), architectures or other changes that should be estimated, the technology deployment patterns used by the organization, and the parameters of the estimate that will be important to communicate to others. A variety of scenarios might be created for a specific change. For example, an engineering team might estimate the impact of moving a workload from a virtual machine to a managed service, or to a Kubernetes environment, or to a serverless compute model, looking at the cost, effort, and impact of each for comparison.

A variety of techniques are available to estimate technology costs, including:

  * Cost Calculators – provided by most cloud providers and some third parties, allow teams to estimate the cost of anticipated services used. Calculators work well to estimate simple service substitutions, but do not work as well when estimating whole applications or environments which do not currently exist in the organization’s environment.
  * Carbon Calculators – for estimating current carbon footprint are available from service providers and third parties that can be leveraged.
  * Similar Applications – for organizations which have consistent architectures or applications, new systems may follow similar patterns, giving engineers a way to compare the cost and performance of similar systems to at least start the estimate for a new change or workload.
  * Extrapolation from past cost – estimating a change in an existing system may be easier by isolating the individual service changes or usage volumes and extrapolating from current costs. This works well when estimating isolated service changes in large systems.
  * Expectations of future plans – consumption-based services allow organizations to save money by not implementing application environments until such time as resources are actually needed. Larger scale estimating of whole systems may need to incorporate the phased implementation of all of the resources and environments required. For example, a new system being created in the cloud might have development and testing environments launched first, but production environments launched several months later when development nears completion. The inclusion of future plans and future implementation over time should be incorporated into these estimates rather than the entirety of all environments all at once.
  * Trial-run estimation – Because some cloud and consumption-based services can be created and then removed quickly, often using infrastructure-as-code scripting, it is possible to estimate the cost of an environment accurately by actually creating it in the cloud, allowing it to run for some short period of time (1-3 days, perhaps) and then removing the environment. This trial run creates a small amount of cost, which must be accounted for from R&D or previously budgeted funds, but can provide a very realistic estimate, in addition to testing of the scripting to create the environment.

In all these cases Engineering personas should work with FinOps teams to ensure that estimates adhere to policies (where resources should be created, what types of resources are used, appropriate architectural models, etc.), that pricing estimates are appropriate (on-demand pricing, discounted rates, expected types of commitment levels, etc.), and that scenarios include estimates of shared costs, platform adjustments, or other support costs and impacts. These impacts may need to include both financial cost and other elements such as sustainability impact or operational impacts of making the considered change.

Estimating scenarios can then be used to provide input back to the Forecasting process, or to the Optimization process that triggered the estimating work. If Proof of Concept budget is needed to estimate, or get more specific cost information, Finance may be involved to provide that.

Unfortunately, there is no one estimating method that fits all situations. Technology spending is often variable which is inherently difficult to predict, and Engineers can create environments and workloads at any time, typically without having to go through a procurement process. This is why it is important to have an established Estimating capability with well-understood parameters, scenario planning, tooling, and documentation expectations.

## Maturity Assessment

####  Crawl 

  * Simple or consistent application build patterns are used, requiring fewer or more straightforward estimating techniques
  * Estimates are not required to be extremely granular or extremely accurate, perhaps because the organization’s cloud spend is low or immature
  * A variety of cloud cost data-sources and tools are used for forecasting by stakeholders across the organization, and consistency is not required
  * Estimates are documented manually and/or ad-hoc due to low volumes or simple scenario planning
  * Higher reliance on trend-based, extrapolation than on more complex mechanisms
  * Limited need for aggregate estimate visibility (perhaps by business unit or cost center)
  * Few shared costs or added cost elements required to complete estimates
  * Engineering teams are involved with the creation of estimates but little need to track discrepancies against actuals
  * Use cloud service provider tools and dashboard to measure current carbon footprint
  * Awareness of the correlation between Cloud usage of resources and its impact on carbon footprint

####  Walk 

  * Wider variety of application build patterns used, or complex cloud use, requires more estimating techniques to be used
  * Estimates are more granular, at the service level, and higher accuracy of estimates is required organizationally
  * Estimates are inclusive of cloud rate optimization, commitment-based discounts and carbon targets
  * Estimates are done on a regular cadence, documented consistently, but not automated
  * [FinOps Core and Allied Personas](<https://www.finops.org/framework/personas/>) (Product, Leadership, Engineering, Finance, Sustainability) have access to cloud cost estimate data
  * Regular review cadence by FinOps team of estimate accuracy, and trends with stakeholder teams

####  Run 

  * Complex and large scale collection of build patterns and cloud use requires complex estimating
  * Estimates are extremely granular and include several types of shared cost elements, platform costs, support costs, sustainability and policy compliance elements
  * Estimates are created using a variety of pricing models, discount-adjusted, amortized cloud usage pricing
  * Estimating scenarios support rolling, trend-based and driver-based [Forecasting](</framework/capabilities/forecasting/>) capability
  * Estimates are inclusive of optimization opportunities
  * Estimates aligned to the organization’s allocation constructs being used across the organization for reporting cloud costs
  * Granular estimating visibility (by business unit, cost center, team, product, service, etc …) in the context of organizational KPIs
  * [FinOps Core and Allied Personas](<https://www.finops.org/framework/personas/>) (Product, Leadership, Engineering, Finance, Sustainability) have real-time visibility into a single source of truth for how cloud usage is impacting estimates, forecasts, trends, carbon footprint and budgets
  * integration and automated data flow between cloud cost forecast data, ESG and back-end accounting systems used for broader organizational reporting

## Functional Activities

####  ![](https://www.finops.org/wp-content/uploads/2024/03/FinOps-Practitioner.svg) FinOps Practitioner 

**As someone in the FinOps team role, I will…**

  * Establish requirements and parameters for estimating done by product and engineering teams
  * Generate granular estimates with reasonable accuracy
  * Help to establish estimating KPIs that are in alignment with business goals
  * Provide estimates of cloud costs to enable stakeholders to create forecast models
  * Participate in implementation planning and scenario estimating pricing, policy, shared cost, and other impacts
  * Provide granular reporting to teams on estimated spend by different business-centric dimensions
  * Manage collaboration with Allied persona groups and other stakeholders throughout estimation process
  * Provide reporting on estimate accuracy trends

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Product.svg) Product 

**As someone in a Product role, I will…**

  * Track product centric KPIs to measure the cost effectiveness in achieving my desired business outcomes
  * Collaborate with the FinOps Sustainability Persona to track KPIs at unit carbon level (Metric Tons of CO2 Equivalent MTCO2e) for product, department or workload . Carbon footprint measurements
  * Use these KPIs to inform estimating scenarios in collaboration with my engineering counterparts
  * Establish estimating parameters that are in alignment with the product-line that i own

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Finance.svg) Finance 

**As someone in a Finance role, I will…**

  * Establish requirements for estimate accuracy and level of detail
  * Help to establish estimating KPIs that are in alignment with business goals
  * Provide data for cloud costs to enable stakeholders to create forecasts to allow me to create budgets
  * Provide granular reporting to teams on forecasted spend by different business-centric dimensions
  * Provide reporting on budgets vs actuals vs forecast vs estimates to establish trends and compare against variance KPIs
  * Provide access to trial funding when appropriate to create more accurate estimates

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Engineering.svg) Engineering 

**As someone in an Engineering role, I will…**

  * Monitor for cloud spend forecasts exceeding budgets to trigger estimating work
  * Monitor optimization, onboarding, architecture for triggers to estimate new resources
  * Work with [FinOps Core and Allied Personas](<https://www.finops.org/framework/personas>) like FinOps Practitioners, Product, and Sustainability to create meaningful estimating scenarios in each case where they are called for
  * Work to understand the various estimating scenarios I should consider in each case
  * Get approval for planned changes which impact cloud spend projections / budgets
  * Lead estimating work in areas under my control and responsibility
  * In cases where forecast models are in place, understand when new estimates are required, and how those estimates will impact existing forecast models I’m responsible for
  * Design and architect infrastructure with cost, optimization and carbon in mind

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Leadership.svg) Leadership 

**As someone in a Leadership role, I will…**

  * Be aware of cloud cost and impact estimation processes and support engineering personas in that work
  * Establish estimating threshold variances that are in alignment with business goals
  * Manage competing priorities for active project timelines when estimated spend impacts budgets for high-priority initiatives
  * Foster successful communication between all FinOps Core and Allied Personas to ensure technology spend and ESG priorities align with business objectives to create value
  * Manage tradeoffs and planning decisions when comparisons are required between different estimated scenarios

####  ![](https://www.finops.org/wp-content/uploads/2025/03/Sustainability.svg) Sustainability 

As someone in a Sustainability role, I will…

  * Provide actuals and estimates of carbon footprint to enable stakeholders to create ESG forecast models
  * Collaborate with the [FinOps Core Personas](<https://www.finops.org/framework/personas/>) and the ESG team to understand and establish organization’s sustainability goals
  * Provide current carbon footprint reports to broader FinOps and ESG team using cloud service provider tools

## Measures of Success & KPIs

  * Estimating models leverage discount-adjusted, amortized cloud usage data
  * Estimate cost vs actual cost trends within established percentage threshold of variance.
  * Estimates are conducted quickly and with appropriate mechanisms that tie to business objectives
  * Estimates include shared costs, appropriate pricing metrics, sustainability impacts, and other appropriate elements
  * Meeting Cadence established (time specific) – ??
  * Unit costs and usage KPIs specific to your company are established (using PPAs, EDPs, etc) – assists in forecasting

## KPIs

#### Time to Achieve Business Value

Measures the time it takes to achieve measurable business value from AI initiatives. This KPI uses a “breakeven point” of doing a function with AI versus the cost of performing it some other way (like with labor). It provides the awareness around the forecasted days to achieve the full business benefit vs the actual business

Read more

#### CPI - Cost Performance Indicator

CPI, or Cost Performance Indicator, is a valuable KPI for all the FinOps Capabilities within the ‘Quantify Business Value’ domain.

Read more

## Inputs & Outputs

### Inputs

  * Triggers to perform estimating from Workload Optimization
  * Triggers to perform estimating from Rate Optimization
  * Triggers to perform estimating from Reporting & Analytics
  * Triggers to perform estimating from Onboarding Workloads
  * Triggers to perform estimating from Forecasting requirement
  * System or workload details as currently built
  * System or workload functional and non-functional requirements in to-be location, model
  * Scenario details to be modeled
  * Desired state of system or workload, or future plans for modification
  * Current architectural guidelines (Architecting for Cloud)
  * Parameters of the estimate desired (time frame, level of accuracy, etc.)
  * FinOps Practitioner to stay aware of ESG regulations and standards
  * Data has to be validated for accuracy

### Outputs

  * Scenario cost carbon and delivery estimate(s) for the system or workload
  * Recommendations based on estimates among competitive scenarios
  * Likely risks and level of confidence
  * Data quality score card for validation (KPIs, frequency period, etc.)

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success_kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

##### Related Assets

[ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) Cost Estimation of AI Workloads ](<https://www.finops.org/wg/cost-estimation-of-ai-workloads/>) [ ![]() Calculating Container Costs ](<https://www.finops.org/wg/calculating-container-costs/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) Effect of Optimization on AI Forecasting ](<https://www.finops.org/wg/effect-of-optimization-on-ai-forecasting/>) [ ![]() Accurate Company Valuations Using FinOps ](<https://www.finops.org/wg/accurate-company-valuations-using-finops/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2032'%3E%3C/svg%3E) Estimating Energy Consumption on Google Cloud (Repo) ](<https://www.finops.org/assets/cloud-jewels-estimating-energy-consumption-on-google-cloud/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2032'%3E%3C/svg%3E) Self-Paced Cloud Sustainability Self-Assessment ](<https://www.finops.org/assets/cloud-environmental-sustainability-self-assessment/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) FinOps Assessment Guide ](<https://www.finops.org/wg/finops-assessment/>)
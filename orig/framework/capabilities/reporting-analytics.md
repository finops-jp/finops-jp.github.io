# Reporting & Analytics

[Framework](<https://www.finops.org/framework/>) / [Domains](<https://www.finops.org/framework/domains/>) / [Understand Usage & Cost](<https://www.finops.org/framework/domains/understand-usage-cost/>) / Reporting & Analytics 

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success-kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

**Analyze data and create reporting to gain insights into usage patterns and spend patterns, identify opportunities for improvement, and support informed decision-making about technology resources.**

**Access data and contextual information**

  * Define reporting and analytics scope, provide to Data Ingestion
  * Define reporting and analytics requirements, provide to FinOps Tools & Services
  * Define common terminology, taxonomy to be used in reporting
  * Identify internal and external data sources and access methods

**Reporting use-cases**

  * Conduct ad hoc reporting
  * Support investigative reporting
  * Produce Showback reporting
  * Create routine, formal, structured reporting for automation or communication

**Support reporting and analytics needs across personas**

  * Train all personas on appropriate training
  * Identify data sensitivity, inclusion guidelines by persona
  * Manage reporting documentation, support, and development

  * Distribute reports and analytic data to appropriate organizations, personas

## Definition

Reporting & Analytics is the ability to gain insights into data by creating reporting mechanisms to serve the needs of the organization’s various persona groups. Reporting can detail, highlight, summarize, categorize, and support use-cases such as ad hoc reporting, showback, investigative reports or routine reporting used by the organization. This is one of the most important and critical of [the FinOps Capabilities](<http://finops.org/framework/capabilities>), supporting almost every other Capability.

Note: The term reporting in this sense is inclusive of paper or electronic reports, and also dashboards, customized data feeds, or APIs of structured information created by an organization from its technology data, metadata, operational, or other data gathered in the Data Ingestion capability.

Data analysis and reporting leverages data and metadata on resources and resource hierarchies, to create a variety of reporting mechanisms for each persona, according to their needs. This work will typically focus on the cost and usage data, but may also include reporting on sustainability data, observability, or other related data. Much of the strategy for these metadata will be defined in the Allocation capability. The results from Reporting & Analytics will be provided specifically for Invoicing & Chargeback, Forecasting, Budgeting, Sustainability and all of the [Capabilities](<http://finops.org/framework/capabilities>) in the [Optimize Usage & Cost Domain](<https://www.finops.org/framework/domains/optimize-usage-cost/>).

In many cases, organizations will rely upon the data provider tools to satisfy parts of this Capability. In other cases, third party tools will provide functionality. Organizations should consistently work to maintain its reporting capabilities, in order to put information in the path of engineering, finance, procurement, sustainability, and other teams supporting their duties.

Organizations will also need to establish and maintain over time the guidelines for reporting, including data sensitivity, common terminology (defined precisely) used in reporting, and ensuring that every persona has access to appropriate reporting data.

## Maturity Assessment

####  Crawl 

  * Use of canned reports with only basic ability to filter and alter result view
  * Reporting centered on high level cost and usage groupings with limited granularity
  * Modifications to incoming billing data only supported via native service offerings
  * Analytic results are being manually communicated to teams
  * Teams lean largely on the central FinOps team to find the answers to questions they have on the billing data

####  Walk 

  * Reporting tools enable custom views and aggregations
  * Granular reporting enabling KPI tracking and showback reporting
  * Data enrichment and business logic added to incoming usage and billing datasets (e.g. synthetic tags, correcting values, combining other business datasets such as sustainability)
  * Forecasts and anomaly detection processes implemented upon the data
  * Dashboard reporting is provided centrally to teams
  * Teams are starting to self-service to reports and analytics tools to find answers to questions they have on the usage and billing data

####  Run 

  * Combining datasets into one source location (E.g. Using [FOCUS](<https://focus.finops.org/>))
  * Complex business logic and data enrichment is possible
  * Advanced forecast techniques including using ML models to incorporate indicators and relationship beyond usage and cost (eg. sustainability metrics)
  * Analytics results are pushed into dashboards and work queues used by Engineering teams (Data in the path)
  * Most—if not all—teams are finding value in self-service reporting and analytics

## Functional Activities

####  ![](https://www.finops.org/wp-content/uploads/2024/03/FinOps-Practitioner.svg) FinOps Practitioner 

**As someone in the FinOps team role, I will…**

  * Work with every group to determine the right metrics, measures and metadata that should be included in “official” output
  * Provide support to teams as they access reports in a self-service capacity
  * Develop the capability to enrich data and apply business logic to usage and billing data
  * Provide the organization with usage and billing data expertise

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Engineering.svg) Engineering 

**As someone in an Engineering role, I will…**

  * Actively include cost as a consideration when evaluating solution options and services
  * Communicate with FinOps teams on the information that will best enable engineering with FinOps in mind
  * Learn and access reporting/dashboards provided by FinOps teams
  * Enable FinOps teams to put data into existing dashboards and work queues to lower the effort needed by engineers
  * Set achievable cost objectives for my teams, meet KPIs that are meaningful to my business partners
  * Manage development cycles in the context of both producing business capabilities and implementing optimizations

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Finance.svg) Finance 

**As someone in a Finance role, I will…**

  * Work to provide guidance on my reporting and data analytics use cases to the FinOps team, how that data should be presented and represented, sorted, summarized and delivered
  * Work to use the data analytics and reporting capabilities provided by the FinOps team in the performance of my job
  * Collaborate with the Finops team to determine the appropriate way to represent cost information to all other personas

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Procurement.svg) Procurement 

**As someone in a Procurement role, I will…**

  * Work to provide guidance on my reporting and data analytics use cases to the FinOps team, how that data should be presented and represented, sorted, summarized and delivered
  * Work to use the data analytics and reporting capabilities provided by the FinOps team in the performance of my job
  * Collaborate with the FinOps team to determine appropriate ways to represent usage, cost and other data related to data sensitivity and sharing

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Product.svg) Product 

**As someone in a Product role, I will…**

  * Work to provide guidance on my reporting and data analytics use cases to the FinOps team, how that data should be presented and represented, sorted, summarized and delivered
  * Work to use the data analytics and reporting capabilities provided by the FinOps team in the performance of my job

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Leadership.svg) Leadership 

**As someone in a Leadership role, I will…**

  * Work to provide guidance on my reporting and data analytics use cases to the FinOps team, how that data should be presented and represented, sorted, summarized and delivered
  * Work to use the data analytics and reporting capabilities provided by the FinOps team in the performance of my job
  * Work with other personas to specify the type of reporting and data analytics which should be used and relied upon from this Capability
  * Set priorities for cost and carbon objectives for my organization in the context of overall business value
  * Establish business objectives that enable the team in making tradeoff decisions that have multiple competing priorities

####  ![]() Allied Personas 

**As someone in an Allied Persona role, I will…**

  * Work to provide guidance on my reporting and data analytics use cases to the FinOps team, how that data should be presented and represented, sorted, summarized and delivered
  * Work to use the data analytics and reporting capabilities provided by the FinOps team in the performance of my job
  * As a sustainability persona, I will actively provide guidance to the FinOps team to leverage and synchronize reporting and analytics to champion corporate sustainability targets

## Measures of Success & KPIs

  * Overall Tagging Compliance is greater than 90%
  * Context relevant cost reporting data available to all Core Personas
  * Architecting products and services to support publishing information related to their unit economics
  * FinOps team can define desired level of commitment coverage vs. utilization
  * Self-service reporting and ability for ad hoc analysis about anomalies, utilization, cost outliers, budgets and forecast variances available to all Core Personas
  * Reduced investigative time for analysis of usage and cost reporting questions
  * Increase in awareness, accountability and sustainability impact for technology spend across all Core Personas
  * FinOps teams can report on key dates for renewals and expiries for commitments, marketplace purchases, BYOL usage and SaaS services.

## Inputs & Outputs

### Inputs

  * Detailed data provider billing, usage, observability, license and carbon data
  * Service specific API for gathering utilization data and rate optimization data
  * Business intelligence and data visualization tools
  * Cost allocation metadata aligned with company cost center/department hierarchy
  * Cost allocation model for shared services
  * Defined tagging standards and strategy
  * Data from Allied Personas from their discipline to supplement FinOps reporting and analysis

### Outputs

  * Forecasts with variance thresholds
  * Allocated and unallocated resources coverage reports
  * Rate optimization threshold reports for commitment coverage and vacancy rates
  * Resource utilization reports include system attribute benchmarks (such as CPU, Memory, Storage)
  * Context specific analysis curated by Persona role/responsibility (Finance, Engineer, Product, Sustainability, Leadership, …etc)
  * Data exports that can be utilized by Allied Personas within their discipline activities
  * A centralized FinOps repository of data and reporting tool as the source of truth

[View former Data Analysis and Showback page](<https://www.finops.org/framework/previous-capabilities/analysis-showback/>)

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success-kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

##### Related Assets

[ ![]() Cloud Cost Allocation Guide ](<https://www.finops.org/wg/cloud-cost-allocation/>) [ ![]() Calculating Container Costs ](<https://www.finops.org/wg/calculating-container-costs/>) [ ![](https://www.finops.org/wp-content/uploads/2025/09/Scaling-Kubernetes-for-AIML-Workloads-FinOps-v1.png) Scaling Kubernetes for AI/ML Workloads with FinOps to Optimize Value ](<https://www.finops.org/wg/scaling-kubernetes-for-ai-ml-workloads-with-finops/>) [ ![](https://www.finops.org/wp-content/uploads/2022/10/Identifying-Shared-Costs_1920x1080px.png) Managing Shared Cloud Costs ](<https://www.finops.org/wg/identifying-shared-costs/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) FinOps for Azure Managed Disks: Optimizing for Value ](<https://www.finops.org/wg/finops-for-azure-managed-disks-optimizing-for-value/>) [ ![](https://www.finops.org/wp-content/uploads/2023/09/liberty-mutual-x23.png) Putting Reporting in the Path of Different Personas (Liberty Mutual Insurance) ](<https://www.finops.org/assets/putting-reporting-in-the-path-of-different-personas-liberty-mutual-insurance/>) [ ![](https://www.finops.org/wp-content/uploads/2023/09/grupo-boticario-x23.png) How to Integrate Cloud and On-Premise Reports (Grupo Boticário) ](<https://www.finops.org/assets/how-to-integrate-cloud-and-on-premise-reports-grupo-boticario/>) [ ![](https://www.finops.org/wp-content/uploads/2023/09/hcl-x23.png) Maturing FinOps and Building Real Time Data Driven FinOps Advisory Reporting (HCL) ](<https://www.finops.org/assets/maturing-finops-and-building-real-time-data-driven-finops-advisory-reporting-hcl/>) [ ![](https://www.finops.org/wp-content/uploads/2022/12/video.png) How to Master Your Cloud Billing Data (Etsy & Google Cloud) ](<https://www.finops.org/assets/mastering-your-billing-data-and-making-it-useful-etsy-google-cloud/>) [ ![](https://www.finops.org/wp-content/uploads/2023/08/F2-YouTube-Thumbnails-Template-3.png) Introduction to FOCUS (FinOps Cost and Usage Specification) ](<https://www.finops.org/assets/introduction-to-focus-finops-cost-and-usage-specification/>) [ ![](https://www.finops.org/wp-content/uploads/2022/10/podcast.svg) FinOpsPod 33: How to Fix a Failing Tagging Strategy ](<https://www.finops.org/assets/finopspod-33-fixing-a-tagging-strategy/>)
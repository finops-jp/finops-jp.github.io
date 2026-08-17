# Data Ingestion

[Framework](</framework/>) / [Domains](</framework/domains/>) / [Understand Usage & Cost](<https://www.finops.org/framework/domains/understand-usage-cost/>) / Data Ingestion 

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success_kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

**Collect, transfer, store, and normalize data from various sources, with a goal of creating a complete, contextual dataset of usage and cost data available for analysis.**

**Manage data sources**

  * Identify appropriate external data sources based on requirements of Reporting & Analytics, Unit Economics
  * Identify appropriate internal data from the business to contextualize to enable Allocation strategy
  * Identify appropriate data sources from Intersecting Frameworks
  * Specify granularity for each source
  * Specify data elements, dimensions, and metrics to be gathered for each source
  * Establish and maintain contact with providers of each data source, and any tool vendors used to ingest or process data on behalf of our organization

**Ensure data quality**

  * Define and maintain mechanisms to ensure consistent quality and normalized data is produced for the FinOps practice
  * Define and maintain mechanisms to evaluate data quality and consistency
  * Adjust and manage data source documentation and content expectations based on changes identified in ingested data
  * Develop and maintain observability and alerting capabilities to inform the teams when data ingestion processes exceed established boundaries
  * Notify data source owners and data users of availability, quality, or consistency issues
  * Gather Policy & Governance requirements related to data ingestion frequency, currency, granularity, auditing, and data protection – including scope across usage, cost and supplementary data such as sustainability, observability, …etc

**Maintain data timeliness and availability**

  * Identify or design the data repository into which we’ll ingest the data to meet the Reporting & Analytics needs, and methods for accessing it, responsibility for maintaining it, policies that govern it
  * Define the normalization that will be done between sources and where it will be done and what standards or keys will be used
  * Provide data requirements to providers of data based on needs of the organization’s Reporting & Analytics, Unit Economics
  * Maintain data repository, ensuring appropriate size, cost, performance, resiliency, and availability throughout its lifecycle
  * Report data ingestion metrics and performance to Unit Economics
  * Provide guidance to all Personas in the organization about how to access ingested data, and set expectations as to its quality and availability

## Definition

Data Ingestion involves gathering, transferring, processing, transforming, and correlating various datasets to create a queryable, contextualized repository, at the appropriate level of granularity, accessibility, and completeness to support activities in all of the [FinOps Capabilities](</framework/capabilities>) across all [FinOps Personas](</framework/personas>).

Data Ingestion needs can vary greatly depending on how each organization conducts its FinOps practice:

  * Those which rely entirely on a single provider’s data or tooling for all FinOps Capabilities may not need to ingest or process any data
  * Those using third party FinOps tooling providers may be able to rely, in whole or in part, on those platforms to manage data ingestion on their behalf
  * Organizations that require data from many technology categories and vendors will require more complex data ingestion processes

As such, this Capability requires continuous development as an organization matures and its needs for data to perform other Capabilities change.

Data ingested to support FinOps activities must include cost and usage data from providers or other metered service providers, but may also include:

  * Modified billing data (e.g. data with adjusted or marked up pricing)
  * Carbon usage data
  * Resource utilization or performance data
  * Observability data
  * On-premises, hybrid, private data
  * Configuration Management Database (CMDB) or other Service Management sourced metadata
  * IT Asset Management (ITAM) data on licenses or publisher charges
  * Specialized tooling data (e.g. Kubernetes usage)
  * Business-related data (e.g. revenue, # of customers, # of transactions)
  * Other data or metadata to provide context to usage and cost

FinOps Capabilities such as Allocation, Reporting & Analytics, or Unit Economics will provide requirements that identify the specific sources, granularity, degree of normalization, correlation, and manner of storing cloud data needed at any given time.

Effective FinOps practice requires access to regular, iterative, frequently-updated streams of detailed usage, utilization, and cost data, which can be categorized, contextualized, and analyzed to drive decision making.

Data Ingestion can be an early challenge for organizations that are expanding usage into cloud, AI or any technology category. Cloud service provider cost and usage datasets, in particular are massive and complex, and each provider has traditionally used proprietary schemas and data structures. Container data, AI data and newer, granular, consumption based services are even more detailed and complex. This is where the value in using FOCUS to normalize data shines. The complexity, size, inconsistency, and latency of cloud data has created barriers to using standard business intelligence (BI) tools or building custom tools. The size and scale of the data makes it difficult to effectively analyze without higher level technical or big data skills.

The FinOps Open Cost & Usage Specification ([FOCUS](<https://finops.org/focus>)) project delivers consistency and standardization to cloud cost data, and will eventually extend to SaaS provider data, sustainability data, license publisher data, private clouds, observability provider data, and other metered service provider data sources. Organizations will benefit through the interoperability of common and custom tools as the FOCUS specification is adopted by vendors and data providers.

Observability platforms, security platforms, carbon usage platforms, and business operations applications can also provide very large datasets that may need to be correlated to cloud data. Metadata created as part of tagging or allocation strategies, managed in the Allocation Capability, can provide important keys for correlating, contextualizing, and summarizing all of these datasets together. Data Ingestion ensures that tags or labels created in the cloud platforms are gathered, and mapped to internal allocation metadata as well.

Data Ingestion as a Capability will identify or establish the cloud data Reporting & Analytics data sources. Organizations may create common data repositories for technology data, or may use existing ones, depending on the complexity of the data, the needs of the organization and the desire to connect the data to other data sources.

The goal of Data Ingestion is not to amass the largest and most granular dataset available in real-time, but to gather and integrate the data that provides value to the organization at its current maturity. Over time, the data that will be required by an organization will evolve as the organization gets more mature in its analytical needs, as the types of services it uses become more varied, as additional clouds or SaaS products are used, or as internal policies and usage changes.

Action in this Capability will be triggered by the need to build or add data sources, retrieve more granular data, contextualize with metadata, normalize into common specifications, build custom tooling, or make data more quickly or readily accessible. This work can be done iteratively as an organization grows in FinOps maturity and realizes value from investing in these steps.

## Maturity Assessment

####  Crawl 

  * Decision to use Cloud-provider tools which don’t require specific data ingestion
  * Use of summarized cost and usage data file or aggregated data via API for individual data sources or cloud providers
  * Data from different sources analyzed separately without normalizing
  * Primarily ingesting cloud cost & usage data and few or no other sources
  * Tags, labels, and naming standards being applied to hierarchy and resources in key areas across cloud providers and data sources to allow some manual correlation between sources
  * Identified sources of utilization data, carbon data, internal metadata required to support Allocation and Analytics & Reporting
  * Manual workflows and/or manual multi-step transforms required to aggregate data

####  Walk 

  * Ingesting data from multiple cloud providers, and/or other correlated data sources at a resource level
  * Normalizing cost metrics between sources to provide consistent repository
  * Use of one or more third party FinOps tools or platforms to normalize data, or use of FOCUS to normalize dimensions and metrics from providers
  * Ability to create consistent reports for different clouds, possibly using different reports
  * Data is mapped back to the business and is able to be changed as the needs of the business changes
  * Most Historical data is captured and able to perform year over year trends
  * Ingestion of performance/utilization data, carbon use data
  * Data completeness checks and mechanisms

####  Run 

  * Managing a unified data repository of cloud usage and cost data, performance, sustainability, utilization and other correlated data
  * Data ingested at the most granular levels to support more complex data analytics or reporting needs
  * Normalized dimensions and cost metrics across all data sources, supporting consistent reporting with multiple clouds through use of FOCUS or other specification
  * Data is mapped back to the business and captures historical changes as the needs of the business evolves
  * All historical data is captured to allow for deeper trend analysis
  * Ingestion of data beyond cloud data from SaaS, license provider or other content providers
  * Data completeness, including quality checks and automated mechanisms in place

## Functional Activities

####  ![](https://www.finops.org/wp-content/uploads/2024/03/FinOps-Practitioner.svg) FinOps Practitioner 

**As someone in the FinOps team role, I will…**

  * Collaborate with the other [FinOps Personas](</framework/personas>) and determine the list of data sources required to fulfill my current reporting, analytics and operational needs
  * Determine gaps in data and work with responsible teams to update source data
  * Determine the level of granularity required in each data source
  * Establish a data model for normalization, mapping fields from various sources to one another
  * Regularly and proactively validate data source content, and clearly understand when changes occur, react to them, adjust and re-document accordingly, and notify all those affected
  * Ensure that the data sources and resulting repository of cost and usage information is kept accurately, is appropriately sized, backed up, and managed throughout its useful lifecycle
  * Provide and ensure everyone with a need to access information can do so
  * Develop reporting output expectations document (update over time as maturity grows)
  * Leverage the [FOCUS Use Case Library](<https://focus.finops.org>) and collaborate with the other [FinOps Personas](</framework/personas>) to identify FOCUS datasets the FinOps practice requires

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Product.svg) Product 

**As someone in a Product role, I will…**

  * Provide business or product level information as required by the FinOps practice to create KPI or other information required

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Finance.svg) Finance 

**As someone in a Finance role, I will…**

  * Provide access to data sources as required by the FinOps practice
  * Ensure Finance is using the most up-to-date and appropriate data sources for reporting, forecasting and decision making
  * Participate in or lead data completeness and data quality validation efforts to ensure invoices, usage data sources and other information map together as expected (typically monthly or periodic reconciliation against usage data, and/or native cloud service provider tool data versus normalized data)
  * Minimize or eliminate data changes outside of source systems and record & reconcile any changes that are made back to source.

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Procurement.svg) Procurement 

**As someone in a Procurement role, I will…**

  * Include data ingestion requirements and specifications in contracts or other managed interactions with data source providers so that expected data access is provided by those vendors
  * Provide requirements to data source providers so that contractual obligations and terms can be fulfilled and align to the needs of the FinOps practice

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Engineering.svg) Engineering 

**As someone in an Engineering role, I will…**

  * Provide access to performance and usage monitoring information within the purview of Engineering for use by the FinOps data repository
  * Identify issues or discrepancies which appear in data being analyzed or reported to ensure data quality is maintained and ingested datasets are complete and accurate

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Leadership.svg) Leadership 

**As someone in a Leadership role, I will…**

  * Support the strategy for centralized data normalization, requests for access to information of various sorts as required by the FinOps practice
  * Encourage and communicate clearly regarding the need to have a single source of cloud usage and cost truth for reporting and decision making

####  ![]() Allied Personas 

**As someone in an Allied Persona role, I will…**

  * Provide access to data sources or content that is within my purview so that information can be correlated to the broader FinOps data repository contents
  * Provide data schema and formatting to allow the FinOps data repository to normalize and correlate information appropriately over time
  * Identify issues, discrepancies, or changes which occur over time to the owner of the FinOps data repository so that data quality and availability is maintained
  * Work with 3rd party platform providers to make sure any data discrepancies are addressed between source of data and their dashboards

## Measures of Success & KPIs

  * Cloud Provider data received daily/multiple times per day at expected times; For example: 
    * AWS CUR file, CUR 2.0 output, ABC output files delivered at least 1x per day
    * Azure Billing Export generated at least 1x per day
    * Google Cloud Billing Export generated at least 1x per day
  * All required data sources identified, consistently formatted and available as outlined in established agreements
  * Data quality checks complete successfully
  * [FOCUS validator](<https://github.com/finopsfoundation/focus_validator>) checks complete successfully
  * Reports of data quality or availability issues from automated notifications or reported issues investigated within 1 business day, resolved within 3 business days
  * Ingestion and Processing of data operating within expected time parameters
  * Changes in data sources are identified within 1 business day of change, and storage or processing parameters are adjusted to accommodate within 3 business days
  * New sources of data, additional granularity, or new data correlations are identified and enabled as required
  * Data Currency – time since last update from each data source, compared to expected update time
  * Ingest time – time elapsed from receipt of a new version of data from each data source to time of storage of raw data in the FinOps data repository, compared to expected time
  * ETL/Normalization/Correlation time – time elapsed from storage of raw data from each source to completing data correlation, normalization, transformation, and storage of adjusted data in the FinOps data repository, compared to expected time
  * Percentage (%) of total cost available for reporting in normalized fashion
  * Percentage (%) of matching metadata elements

## KPIs

#### Cost Visibility Delay

Time (hours/days) between the cost occurring and the cost being ingested, normalized, and displayed to stakeholders.

Read more

#### Frequency of Data Updates

Time (hours/days) between updates of cost data, e.g. the time since the last ETL run or sharing of data.

Read more

#### ETL Processing Time

This measures the cycle time taken to complete the ETL (Extract, Transform, Load) processes.

Read more

## Inputs & Outputs

  * Cloud provider cost and usage data (e.g. Azure Billing, Google Cloud Billing, AWS CUR, Oracle Billing Data) generated at the required granularity, resolution & cadence
  * [FOCUS datasets](<http://focus.finops.org>) for cloud provider usage & cost data plus any supplementary data such as sustainability, observability, SaaS, …etc
  * Utilization, performance, or observability data containing system metrics including CPU, Memory, Disk, and/or Network utilization at the required resource or resource group level
  * Transactional data from logs or systems which record the number or quantity of use for types of resources  
(often shared resources)
  * Business performance data providing contextual business data such as the number of customers supported, amount of revenue or sales, number of transactions, or other business outcomes which provide context to ingested cloud cost and usage data
  * KPI requirements as determined from Unit Economics activities to support collection and correlation of data elements in the FinOps data repository
  * Policy and Governance requirements to support the overall cloud policies and performance of other FinOps requirements with the ingested data
  * [Google Cloud FOCUS Converter export](<https://github.com/finopsfoundation/focus_converters/tree/dev/focus_converter_base/focus_converter/conversion_configs/gcp>) dataset as a source
  * [Azure FOCUS Converter export](<https://github.com/finopsfoundation/focus_converters/tree/dev/focus_converter_base/focus_converter/conversion_configs/azure>) dataset as a source
  * [AWS FOCUS Converter export](<https://github.com/finopsfoundation/focus_converters/tree/dev/focus_converter_base/focus_converter/conversion_configs/aws>) dataset as a source
  * [Oracle FOCUS Converter export](<https://github.com/finopsfoundation/focus_converters/tree/dev/focus_converter_base/focus_converter/conversion_configs/oci>) dataset as a source

[View former Data Ingestion & Normalization page](<https://www.finops.org/framework/previous-capabilities/data-normalization/>)

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success_kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

##### Related Assets

[ ![](https://www.finops.org/wp-content/uploads/2023/08/F2-YouTube-Thumbnails-Template-3.png) Introduction to FOCUS (FinOps Cost and Usage Specification) ](<https://www.finops.org/assets/introduction-to-focus-finops-cost-and-usage-specification/>) [ ![](https://www.finops.org/wp-content/uploads/2022/10/guide.svg) How to Build and Optimize FinOps Data Workflows ](<https://www.finops.org/wg/how-to-build-and-optimize-finops-data-workflows/>) [ ![](https://www.finops.org/wp-content/uploads/2022/12/article.png) Managing FinOps Data Efficiency ](<https://www.finops.org/assets/managing-data-efficiency-paper/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) FinOps for Azure Managed Disks: Optimizing for Value ](<https://www.finops.org/wg/finops-for-azure-managed-disks-optimizing-for-value/>) [ ![](https://www.finops.org/wp-content/uploads/2023/09/amadeus-x23.png) A Look at the Architecture and Content of a FinOps Data Lake (Amadeus) ](<https://www.finops.org/assets/a-look-at-the-architecture-and-content-of-a-finops-data-lake-amadeus/>)
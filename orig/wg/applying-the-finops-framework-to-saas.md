# Applying the FinOps Framework to SaaS

**Summary:** FinOps Capabilities, such as data ingestion, monitoring, and reporting, can be adapted to SaaS environments where billing models, usage granularity, and procurement paths often differ from public cloud. Integrate FinOps activities to improve how teams manage license-based and consumption-based SaaS, identify relevant personas, and enhance visibility into decentralized software spend. Apply these practices to bring SaaS costs into the FinOps operating model and enable more consistent, data-driven decisions and value assessment across the entire technology portfolio.

## On this page

  * [FinOps Framework Capabilities: SaaS Considerations](<#finops-framework-capabilities>)
  * [Monitoring and Alerting](<#monitoring-and-alerting>)
  * [RACI: Responsible, Accountable, Consulted, and Informed](<#raci>)
  * [Tools for SaaS](<#tools-for-saas>)
  * [Acknowledgments](<#acknowledgments>)
  * [FinOps for SaaS Best Practices / Tips & Tricks](<#best-practices-tips>)

This Paper is Part 2 of a three-part series on FinOps for SaaS. Learn how to apply FinOps Capabilities and best practices toward managing SaaS (software-as-a-service) cost and usage data.

  * [Part 1: Introduction to FinOps for SaaS](<https://www.finops.org/wg/finops-for-software-as-a-service-saas/>)
  * Part 2: Applying the FinOps Framework to SaaS (You are here)
  * [Part 3: FinOps for SaaS: Adopting FOCUS™](<https://finops.org/wg/finops-for-saas-best-practices-and-adopting-focus>)

## FinOps Framework Capabilities: SaaS Considerations

This section provides practical considerations for each of the FinOps Framework capabilities when being applied by practitioners to SaaS cost and usage. Please refer to the [Framework](<https://www.finops.org/framework/capabilities/>) for existing capability guidance as this is not duplicated in this paper.

**Capability** | **Application to SaaS Considerations**  
---|---  
Data Ingestion | For SaaS, the cost and usage data ingestion capability functions similarly to public cloud. However, there are limitations on the granularity available in most SaaS cost and usage data. License-based SaaS (link to license-based SaaS section above) is less likely to provide less usage details because it is based on a pre-determined cost and terms. Consumption-based SaaS (link to Consumption-based SaaS section above) usage is variable by design, resulting in more monitoring and data collection. Like CSPs, some SaaS vendors provide the ability to export usage data through CSV or XML files, extract, load, transform (ELT) processes, and API calls to external platforms for analysis. This usage data may include account (i.e., user, user group, or license), service and/or function-level details (for example, number of active user licenses, amount of storage usage, and count of function calls). But, unlike CSP data, SaaS usage data may not include the associated cost information. If SaaS usage data does include account, service, or function-level costs, it is likely not at the same granularity provided in CSP consumption data (e.g., costs per CPU, GB, hour). Therefore, data ingestion is often more complex for SaaS because usage and cost details may come from disparate sources, requiring additional processing, transformation, and correlation to align. A few SaaS vendors are adopting FOCUS™ to provide customers with enhanced and easier to align billing data which will improve data normalization efficiency.  
Allocation | First, ensure you have the full inventory and ability to identify all SaaS. Some vendors provide the ability to apply tags to usage or environments, similarly to Public Cloud. Apply existing shared cost allocation techniques, such as using internal telemetry data to create allocation formulas. Useful for any fixed cost portion of the SaaS bill License-Based:

  * May have the granularity to allocate license costs based on which departments each user falls under
  * Refer to this section for more details: [How Is It Measured?](<#how-is-it-measured>)

Consumption-Based:

  * Make use of any usage logs within the product to come up with a metric by which to allocate costs.
  * Vendors may have login telemetry on the back-end that you can ask if they can make available to track usage by team.
  * If no other metrics are available, you can create separate environments by team to make allocation easier.
  * Refer to this section for more details: [Consumption-Based Allocation](<#consumption-based-allocation>)

Reporting and Analytics | Measures of Success & KPIs: FinOps teams can report on key dates for renewals and expiries for commitments, marketplace purchases, BYOL usage and SaaS services. Inputs & Outputs: Detailed cloud billing, usage, license and carbon data  
Anomaly Management | Anomaly detection functionality is not always provided on SaaS platforms, but is standard on public cloud. Usually in Public cloud you can catch anomalies from a daily baseline. This is true for SaaS if you can get your cost and usage data daily. But for SaaS platforms that bill monthly, a different approach is needed. Nature of the license is different in SaaS:

  * Most contracts have a license ceiling, but it may be difficult to get data from the vendor on how close you are to this ceiling in between months
  * May need to implement control/ policies/ automation surrounding onboarding of new users to SaaS
  * Tiering of overages – an anomaly may include hitting the next tier and incurring a higher rate for the same type of usage
  * For highest risk/cost contracts with overages beyond the fixed commitments, can implement monitoring/alerting when nearing this point
  * FinOps teams understanding of the economics and mechanics of a SaaS license model and what levers are applicable

Tooling:

  * Some SaaS vendors might provide their own anomaly detection
  * Specific SaaS management tooling may be able to aggregate this
  * Levers for governance – imposing limits on usage

Anomaly scenarios:

  * Unexpected change in spend versus unexpected purchase – different type of anomalies (policies/ shadow IT)
  * Provision of SaaS based on number of seats with no upper limit set – exhausted resource pool
  * When SaaS systems integrate, the APIs can run out of control, and this is an anomaly risk

Planning & Estimating | Planning and Estimating for SaaS involve similar processes to those enabled in public cloud, with two distinctions. SaaS costs, particularly for license-based SaaS, are often easier to predict since they are based on fixed fees for a specified time period. When usage-based costs are applied, they are often capped allowing for better control over variable spending. There is still a risk however of exceeding limits and for it to be allowed within the terms of the contract/ license. Unlike IaaS which can be used to host an endless variety of workloads, SaaS products are purpose built and typically provide distinct functionality, thereby making it easier to estimate the number of licenses, subscriptions, accounts, users, services, and/or functional capabilities utilizing the product.  
Forecasting | Similar to Planning and Estimating, Forecasting SaaS costs is often easier than public cloud. SaaS platforms offer specific functionality which simplifies variation in the scope and scale of usability within an organization. IaaS consumption is elastic and impacted by the capacity needs of the myriad of workload types that can be hosted in public cloud making it more challenging to accurately forecast.  
Budgeting | No further considerations for SaaS. Refer to Budgeting Capability in the [Framework](<https://www.finops.org/framework/>) for information. Also refer to Planning and Estimating and Forecasting in this paper.  
Benchmarking | One area of success that’s been seen in benchmarking that aligns between FinOps and SaaS, is when an organisation has built their own services, for example VPN, comparing this for both functionality and cost versus buying a SaaS solution. This helps demonstrate value to the organisation (in whichever way the results may show). Like in FinOps, it can be challenging to benchmark between vendors, where this is challenging cloud to cloud in FinOps, benchmarking SaaS providers can be even more difficult as the services are often purposely marketed and designed to not be the same. Internal benchmarking of SaaS solutions is very important, often organisations unintentionally end up with multiple solutions capable of delivering requirements without realising. This may happen because software is purchased to achieve a certain goal/requirement but also has other capabilities which are then not considered when new requirements are found and a new vendor selection process begins. There are some providers who offer some level of scoring for FinOps benchmarking (namely Google Cloud), in the SaaS world, there are third parties who can offer indications of what level of discount is expected/average within your industry. This is important as in SaaS/licensing it is common that discount bands can be set by industry/sector. As an example, financial services generally receive less discounts than the public sector.  
Unit Economics | Understanding unit cost economics for businesses that rely on SaaS services are crucial for cost optimisation and profitability. The goal is to assess how SaaS costs impact revenue and margins per unit. Similar to the process of determining unit economics within the Public Cloud, it is key to determine what constitutes a “unit”. This could be a customer, order, transaction as examples and determine the revenue generated by each unit. Break down SaaS expenses into variable and fixed costs to allocate it accurately. SaaS cost per unit = Total SaaS cost/Total units

  * Example: If a company spends $5000/month on cloud services supporting 10000 transactions, the SaaS cost per transaction is $0.50

The next step is to determine gross profit per unit

  * Example: If an order generates $10 in revenue, but incurs $0.50 in SaaS cost and another $2.50 in fulfillment cost, the gross profit per order is $7.

Evaluate contribution margin to assess if the unit economics is sustainable. Whilst the process of understanding unit cost does not significantly differ from Public Cloud spend, the fixed and variable nature of the potential metrics and agreements does require a solid understanding to calculate correctly.  
Architecting for Cloud | Decisions regarding leveraging consumption-based SaaS integrations should be made early in the process of architecting a new application, feature or service. The first step should be to determine whether to use a SaaS product or to build out the functionality instead. A FinOps practitioner may be involved in helping estimate the cost impact of going with SaaS or what the cost of the equivalent cloud resources may be. If the decision is made to go with a SaaS product, there may be options if the product has a free, open source version versus a paid version with more enterprise features. There may also be different editions that require careful consideration so that you are only paying for features you actually need. Working with architects and developers to understand the requirements and with the vendor to understand the right fit with their product should be a standard practice. The vendor may allow you to run a POC to help validate functionality or estimate usage to help with the decision, or may even have case studies from other customers who have implemented the same thing. During the early design phase, you also need to consider how using a SaaS product may impact usage and cost in other platforms or other SaaS products. Consider data transfer, storage in other platforms, build systems, analytics and observability tools as usage in the SaaS product may lead to increased usage in other areas.  
Workload Optimization | Depending on the form of SaaS, workload or usage optimization can have various levels of importance. When the metrics driving cost are based on usage, it can be critical and often SaaS can be neglected compared to cloud when it comes to reviewing usage. For usage based SaaS, it’s critical to ensure that user management exists (adding and removing people when they join/leave, but also maintaining a view on how a user is (or isn’t) using the SaaS application and looking to revoke licenses that aren’t used to reduce costs where allowed under the contract.Equally, consider license bundles vs buying individual applications – each can be cost effective in different scenarios. Any SaaS contract with variable usage e.g. Databricks, can be handled very similarly to cloud workload optimization.  
SaaS and Licensing Optimization | No further considerations for SaaS. Refer to SaaS and Licensing Optimization Capability in the [Framework](<https://www.finops.org/framework/>) for information.  
Rate Optimization | Most SaaS Rate Optimization will typically occur at the negotiation stage through volume discounts. Good, timely, and accessible data (and forecasting) around usage will enable identification of the correct pricing tiers and increased chances of additional discounts at the pre-purchase stage – this can include overage SKUs for consumption elements. Collaboration between FinOps, ITAM/SAM, and Procurement is key. Where software allows for multiple models i.e. user-licensing and/or PAYG, ensure you have the data, and a process, to define which offers more value in different scenarios. Where license/consumption usage increases, tiers offering lower per unit pricing can be reached during the contract. However, for license-based SaaS in particular, decreasing quantities mid-contract is often contractually prohibited or incurs financial penalties. Identify where SaaS software can be purchased via Cloud Marketplaces (AWS, Azure etc.) as this may offer lower pricing than current purchase methods via reseller or direct with the provider. However,be aware of existing contractual terms that may prevent this and also new terms agreed to via the Marketplace. Collaboration between FinOps, ITAM/SAM, and Procurement is key to opportunity identification. Licenses can be used up to a limit to help you meet your cloud commit (not directly rate optimization for SaaS but can help with wider rate optimization of cloud)  
Cloud Sustainability | There are challenges with Cloud emission data in a similar way to other usage optimization data, this includes data/ reporting availability and timeliness. FOCUS™ is also impacted by this challenge. Most SaaS providers are not as advanced in this space as the large cloud providers, impacting selection choices. It is recommended that there is joint consideration of SaaS purchases with the sustainability team in your organization, particularly from a license based SaaS perspective (per seat). This should be addressed as part of intersecting disciplines and agreed based on the specific organizational setup of where the responsibilities sit – An example would be that the FinOps team focuses on SaaS usage optimization and associated carbon emissions and the sustainability team focuses on governance of seat licenses in relation to carbon emissions. Carbon accounting may be an excellent intersection for both “cost” and “sustainability” objectives to align on common KPIs. Global or multi-national corporations (MNCs) typically use carbon accounting or track similar cost-sustainability KPIs – to realize / optimize the business value of existing and anticipated ESG-related tax and tax-credit impacts to an organization across relevant jurisdictions.  
FinOps Practice Operations | FinOps Practice Operations consideration for SaaS: 

  * Establish clear ownership of and accountability for the cost of SaaS tools within the business unit
  * Define policies for SaaS usage, compliance & cost control
  * Define approval workflows for SaaS procurement and renewal
  * Centralize SaaS discovery and monitoring
  * Assign SaaS costs to specific teams/project/cost centres to enable showback/chargeback
  * Eliminate waste by identifying unused, underutilized or duplicate subscriptions to optimise SaaS spend
  * Integrate SaaS spending into FinOps financial models for better budgeting and forecasting
  * Apply variable vs fixed cost analysis to SaaS spend based on actual consumption to calculate efficiency through unit economics
  * Set up alerts for unexpected renewals or cost anomalies
  * Apply FinOps negotiation principles to optimize agreements through volume based discounts or commitment based pricing
  * Adopt contract flexibility to scale SaaS spend dynamically based on usage.
  * Implement automation strategies for cost control, prediction of trends or optimization recommendations
  * Connect SaaS financial data and reports with those of cloud cost management for a unified approach

FinOps Education and Enablement | FinOps Education and Enablement considerations for SaaS: 

  * Educate ITAM/ SaaS team on data ingestion, reporting, consumption usage optimization etc. – key areas that those teams were not necessarily doing
  * Educate FinOps team on existing ITAM/ SAM data, processes and tools
  * Extend a view of cloud-based consumption SaaS (such as Snowflake and Databricks) to the ITAM/SAM/Procurement teams.
  * Ensure cloud Marketplace awareness for ITAM/ SAM teams
  * Ensure FinOps and ITAM teams participate in respective meetings where appropriate
  * Extend existing practices such as internal communication channels, events, and gamification efforts to also include SaaS products and spend.
  * Ensure additional skills around SaaS are reflected in FinOps job descriptions and appraisals.

Cloud Policy and Governance | Cloud Policy and Governance considerations for SaaS: 

  * Fundamentally, similar concepts are required to govern SaaS or cloud in a successful manner. Allocation and visibility are key and while they require strong policy and governance to be successful, they are also required to govern SaaS well long term.

  * Governance should fit into the processes for review of architecture, planning & estimating and forecasting for SaaS usage, similarly to how it is for cloud.
  * Policy is required to ensure that license conscious review is in place as part of any deployment that has cloud and SaaS interaction.
  * Strong policies and governance are required to ensure good usage optimization takes place, especially around user management and general cost avoidance.
  * Ensuring policies and procedures exist to manage the onboarding and ongoing usage for license based SaaS. i.e. – is a license needed/providing value?
  * Architecture of how using it planned for governance and demarcation points
  * Education from FinOps side to existing ITAM/ SAM specialists on policies such as storage to apply in to SaaS where not existing
  * SaaS solutions that straddle SaaS and Cloud where you are still getting the SaaS bill from the vendor. This should include how to better control this set of policies
  * Consideration of category management governance around SaaS. Consolidation of contracts to increase purchasing power and motivate vendors to provide more advantageous pricing.

Invoicing & Chargeback | Areas where the existing principles can be easily applied to SaaS: 

  * Some SaaS providers offer comprehensive usage reports and invoices, enabling recharging to end users based on actual usage. This ensures fair billing and simplifies invoice reconciliation by providing clear records. These reports can be integrated into financial systems for recharging, reconciliation, and reporting.
  * Developing specific reporting workflows and chargeback models in collaboration with Finance, Product, and Engineering teams aligns recharging mechanisms with organisational goals.
  * Managing invoicing and chargeback interactions with Finance systems helps maintain transparency and accountability. This enhances clarity for end users about their charges and provides a clear audit trail, aiding in dispute resolution and invoice reconciliation.
  * Promoting cost efficiency and financial responsibility across departments ensures end users are charged only for what they use, fostering trust and maintaining accurate financial records for easier reconciliation.

However, there are areas where applying these principles may face limitations:

  * Some SaaS solutions lack the granularity of cost allocation, as costs are typically tied to subscriptions or user licenses rather than detailed resource usage. This limitation doesn’t facilitate fact-based (tagged) recharging to end users.
  * Implementing precise chargeback models based on actual consumption can be challenging, potentially leading to discrepancies in invoice reconciliation.
  * Customisation options for chargeback models may be limited by the SaaS provider’s reporting capabilities and billing structure. This limitation affects the ability to tailor recharging mechanisms to user needs, impacting satisfaction and complicating alignment of invoices with usage patterns.
  * These limitations can restrict the flexibility needed to align with specific organisational requirements in the same way that is possible with public cloud.
  * Some challenges exist on marketplace SaaS purchases and require custom built solutions to manage the costs and associated invoicing and chargeback

FinOps Assessment | Where existing ITAM/ SAM teams exist there is likely to be existing assessments for that team. It is useful to keep this in place along with the FinOps assessment. Any variance in the assessments on common areas could trigger early warning to better improve collaboration/ resolution. Elements to consider when assessing maturity include:

  * Comprehensive SaaS discovery of both license allocation and software usage will ensure license and contract compliance and enable more accurate cost and value decisions to be made.
  * Is there a view of all SaaS contracts and renewal dates? Is this combined with similar cloud data?
  * Is FinOps & SAM data combined in a timely fashion for renewals and contract negotiations?
  * Are there KPIs to track and report on these?

ITAM involvement and support should also be part of an organisations FinOps Maturity Assessment, understanding the processes in place and also ensuring that open-source is fully understood.  
Onboarding Workloads | You may consider onboarding workloads to SaaS for various reasons. You may take a workload from on-premises or a workload that is already self-hosted in the cloud and move it into a SaaS solution. If the SaaS solution is already in place, there are also reasons for onboarding new or additional workloads; a new team is onboarding, a new service or feature has been created and will integrate with the SaaS solution or you may be consolidating workloads from other solutions and replace them by onboarding to a single solution. Before a workload is onboarded to a new, or existing, SaaS solution, architectural discussions should take place as well as planning and estimating usage/cost.  
FinOps Tools & Services | See [Tools for SaaS section](<#tools-for-saas>) of this document.  
Intersecting Disciplines | Considerations for this capability are formed throughout all sections of this paper.  

## Monitoring and Alerting

Some SaaS products have built-in monitoring and options for setting alerts when certain conditions are met. These might include alerts when you are getting close to a limit or running out of licenses or when your usage hits a defined threshold. Options will vary between products and some products may not have any options at all. You may be able to ingest your usage into another tool (third party or homegrown) and do your monitoring and alerting externally. The goal is to automate as much as possible to avoid having to manually check dashboards or reports reactively.

## RACI: Responsible, Accountable, Consulted, and Informed

In this section, learn of potential roles and responsibilities of the FinOps team for SaaS and intersection of responsibilities with existing ITAM/SAM and other teams.

FinOps teams are getting increasingly involved in the management of SaaS products with various roles and responsibilities. The scope of the FinOps team largely depends on the organisational setup and the presence and maturity of intersecting disciplines.

On one end of the spectrum, FinOps teams may manage the entire SaaS billing data alone. On the other end, FinOps teams may play a less prominent role and rather collaborate with a long-established ITAM/SAM team, Procurement, Finance, and other teams with solid existing processes.

The set of roles and responsibilities in the SaaS management lifecycle include, but are not limited to, the following key activities:

  * Purchase Request
  * Discovery and monitoring
  * Inventory of SaaS tools
  * Demand management and forecasting
  * Budgeting
  * Vendor/tool selection
  * Vendor negotiation
  * License management
  * Consumption (usage) tracking and optimisation
  * Invoice validation and payment
  * Vendor relationship management (including contract management and category management)

When the FinOps team manages SaaS end-to-end, it performs most of these activities independently. However, when working with other connected areas, which is often the case in larger organizations, clarity about the split of roles and responsibilities among the teams and smooth collaboration are the critical success factors.

The table below illustrates where these roles and responsibilities might fall when working together with intersecting disciplines in their role of managing the purchase and ongoing cost and usage of any SaaS type. However, this RACI matrix is not meant as a prescription or best practice, more an example considering where the different roles and responsibilities traditionally fall. Organisations can and will differ in their implementation.

**Key Activities (Not Exhaustive – will differ by organization)** | FinOps | ITAM/SAM | Procurement | Finance | SaaS Owner | Security  
---|---|---|---|---|---|---  
Purchase Request |  | C | A | I | R |   
Discovery and monitoring | I | R | C |  | A | C  
Inventory of SaaS tools | I | A/R | I | I | I |   
Demand management and forecasting | C | A | I |  | R |   
Budgeting | C | C |  | A | R |   
Vendor/tool selection | R | A/R | C | I | R | C  
Vendor negotiation | C | C | A/R |  | I |   
License management |  | R | C |  | A | C  
Consumption (usage) tracking and optimisation | R |  | C |  | A | I  
Invoice validation and payment |  |  |  | R | A |   
Vendor relationship management (including contract management and category management) | C | C | R | I | A |   

Strategic and tactical decisions, such as whether to buy or build a SaaS product, renew an existing tool, look for alternatives, or completely discontinue, are often made in a group setting where the representatives of different areas make a joint decision.

As organisations evolve, it is also worth assessing the advantages of ITAM/SAM, FinOps, and other related areas working closer together in the organizational hierarchy, which has been an observed pattern of evolution in recent years.

## Tools for SaaS

In today’s market, there are two main types of tools for managing SaaS technology investments. Traditional FinOps tools, primarily designed for public cloud, lack comprehensive SaaS management capabilities. Conversely, SaaS management tools have yet to fully integrate advanced features of modern FinOps tools, such as the ingestion of detailed daily usage data and actual SaaS consumption costs.

SaaS management tools vary widely. They can be standalone solutions, part of a larger platform, or focused on a single publisher. FinOps teams should work with their ITAM peers to determine if a solution is already in place. The[ FinOps Landscape](<https://www.finops.org/landscape/?prod_TOOLS_SERVICES%5BrefinementList%5D%5Bcategories%5D%5B0%5D=FinOps%20Tool&prod_TOOLS_SERVICES%5BrefinementList%5D%5Bfinops_specializations%5D%5B0%5D=SaaS%20Specialists>) and analysts like[ Gartner](<https://www.gartner.com/reviews/market/saas-management-platforms>) can help identify tools that specialize in SaaS or offer SaaS management features.

When evaluating a SaaS Management Platform (SMP), key considerations include supported discovery methods, the number of recognizable SaaS services, the frequency of updates to the SaaS recognition library, licensing models, scalability, security, and extensibility. Point solutions are cost-effective for getting started but may lack the interoperability and features of platform-based solutions.

Many SMPs offer monitoring and alerting features, such as:

  * Spend thresholds
  * Under-utilized applications
  * Security alerts
  * Renewal alerts

Increasingly, SMPs use AI and ML to automate tasks and proactively identify potential issues. To reduce inefficiencies, it’s essential to use the FOCUS™ billing format for data exchange. Choose solutions that support this format.

As with any tooling decision, there is a build vs. buy choice. If you are considering building an in-house solution, important factors to evaluate include:

  * The ability to reuse existing workflows for data ingestion, cost allocation, and alerting
  * Availability of internal resources to build and maintain the solution
  * The capability to discover all SaaS products and stay updated with new offerings
  * Support for both license-based and consumption-based charging models, particularly for large-scale, customized data ingestion and visualization
  * Compatibility with the FOCUS™ billing format and other data ingestion formats
  * Alignment of current tool roadmaps with future requirements
  * Availability of additional services, such as training and upskilling, to maximize tool effectiveness

By considering these factors, organizations can determine the best-fit tooling for their needs.

## FinOps for SaaS Best Practices / Tips & Tricks

  1. **Centralize License Management:**
     * Maintain a comprehensive database of all software licenses, including purchase dates, expiration dates, and terms of use.
     * Use a centralized platform to track and manage all licenses, which helps in avoiding duplication and ensuring compliance.
     * Centrally track all SaaS renewals to ensure timely and accurate decisions can be made regarding renewals and cancellations.
  2. **Conduct Regular Audits:**
     * Periodically audit your SaaS licenses to compare the number of owned licenses with the actual number of users.
     * Identify unused or underused licenses and reallocate or terminate them to optimize costs.
     * Existing ITAM processes such as “Joiners, Movers, Leavers” will be key.
  3. **Monitor Usage and Spending:**
     * Implement tools to monitor license usage and spending in real-time.
     * Set up alerts for approaching renewal dates and usage thresholds to avoid unexpected costs.
  4. **Rationalize the Application Portfolio:**
     * Regularly review your SaaS applications to ensure they are still meeting business needs.
     * Eliminate redundant or outdated applications to streamline your portfolio.
  5. **Enable Collaboration Across the Organization:**
     * Foster collaboration between IT, Procurement, Finance, and Legal teams to ensure all aspects of license management are covered.
     * Establish clear communication channels for reporting and resolving license-related issues.
  6. **Implement a Business-Led Procurement Process:**
     * Involve business units in the procurement process to ensure that the selected SaaS solutions align with their needs.
     * Negotiate favorable terms and conditions with vendors, including pricing, service levels, and contract duration.
  7. **Stay Informed About Industry Developments:**
     * Keep up to date with the latest trends and changes in SaaS licensing models and regulations.
     * Adapt your license management strategies accordingly to stay compliant and competitive.

By following these best practices, you can optimize your SaaS investments, reduce costs, and ensure compliance with licensing agreements.

## Acknowledgments

We’d like to thank the following people for their work on this Paper:

[ ![Ron Brill](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Ron Brill Anglepoint ](<https://www.linkedin.com/in/ronbrill/>) [ ![Rich Gibbons](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Rich Gibbons Synyega ](<https://www.linkedin.com/in/rich-gibbons-microsoft-licensing/>) [ ![George Arezina](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) George Arezina TAKEDA ](<https://www.linkedin.com/in/georgearezina/>) [ ![Victoria Levy](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Victoria Levy Alteryx ](<https://www.linkedin.com/in/victoriarlevy/>) [ ![Lorant Kiss](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Lorant Kiss Delivery Hero ](<https://www.linkedin.com/in/lorantkiss/>) [ ![Mike Coates](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Mike Coates Emirates ](<https://www.linkedin.com/in/coatesmike/>) [ ![Juan Van Heerden](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Juan Van Heerden Lloyds Banking Group ](<https://www.linkedin.com/in/juan-van-heerden-b962762/>) [ ![Keith Hiszem](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Keith Hiszem Cardinal Health ](<https://www.linkedin.com/in/keith-j-hiszem/>) [ ![Amy Ashby](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amy Ashby Under Armour ](<https://www.linkedin.com/in/amyashbymke/>) [ ![Laura Mills](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Laura Mills ManTech ](<https://www.linkedin.com/in/laura-mills-98737b105/>) [ ![Colin Jack](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Colin Jack Flexera ](<https://www.linkedin.com/in/cojack/>) [ ![Sumaira Nazir](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Sumaira Nazir Platform.sh ](<https://www.linkedin.com/in/sumaira-nazir93/>) [ ![Kris Wong](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kris Wong Surveil ](<https://www.linkedin.com/in/kristopherwong/>) [ ![Robert Nieuwenhuizen](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Robert Nieuwenhuizen McKinsey ](<https://www.linkedin.com/in/robertnieuwenhuizen/>) [ ![Stephen Old](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Stephen Old Synyega ](<https://www.linkedin.com/in/stephen-old-6ab15082/>) [ ![Salomé Keet](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Salomé Keet FNB South Africa ](<https://www.linkedin.com/in/salom%C3%A9-keet-ba2522a/>) [ ![Gregory Brinkerhoff](https://www.finops.org/wp-content/uploads/2022/10/persona-product.svg) Gregory Brinkerhoff Oracle ](<https://www.linkedin.com/in/gregory-brinkerhoff-4a4795/>)

Last updated: March 12, 2026

## On this page

  * [FinOps Framework Capabilities: SaaS Considerations](<#finops-framework-capabilities>)
  * [Monitoring and Alerting](<#monitoring-and-alerting>)
  * [RACI: Responsible, Accountable, Consulted, and Informed](<#raci>)
  * [Tools for SaaS](<#tools-for-saas>)
  * [Acknowledgments](<#acknowledgments>)
  * [FinOps for SaaS Best Practices / Tips & Tricks](<#best-practices-tips>)

###### [Learn the fundamentals Level up your knowledge with FinOps Certified Practitioner Get started  ![Learn the fundamentals](https://www.finops.org/wp-content/uploads/2025/12/certified-practitioner.svg) ](<https://learn.finops.org/path/finops-certified-practitioner-self-paced>)

##### Related FinOps Capabilities

[ Licensing & SaaS ](<https://www.finops.org/framework/capabilities/licensing-saas/>)
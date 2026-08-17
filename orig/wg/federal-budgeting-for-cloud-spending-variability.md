# Federal Budgeting for Cloud Spending Variability

**Summary:**

FinOps practitioners supporting Federal agencies must learn that the fixed, annual nature of government budgets (statutory limits) fundamentally conflicts with the variable, consumption-based model of the cloud. Move the conversation from budgeting dollars to budgeting units of consumption (Unit Economics) to align financial planning with actual technical demand and anticipated mission usage. Practitioners should implement a continuous, rolling forecasting process that operates within the fixed annual budget to anticipate and manage variability, providing necessary lead time to justify potential budget adjustments. Finally, they must establish a clearly defined guardrail budget or contingency plan to mitigate the legal risks associated with unexpected cloud cost spikes.

## Table of Contents

  * [Introduction](<#introduction>)
  * [Executive Summary](<#executive-summary>)
  * [Key Topics Addressed](<#key-topics>)
  * [Formulation](<#formulation>)
  * [Execution](<#execution>)
  * [Forecasting](<#forecasting>)
  * [Preparing for Cloud Spend Variability](<#preparing-cloud-spend-variability>)
  * [Monitoring Cloud Budget Execution](<#monitoring-cloud-budget-execution>)
  * [Cloud Contract and Budget Mechanisms for Funding Adjustments](<#cloud-contract-budget-mechanisms>)
  * [Conclusion](<#conclusion>)
  * [Acknowledgments](<#acknowledgments>)

## Introduction

The U.S. Federal Government Community of Practice prepared this guide to assist agency FinOps [personas](<https://www.finops.org/framework/personas/>), including FinOps practitioners, engineering, finance, procurement, product owners, and leadership, with managing the variable nature of Cloud Service Provider (CSP) costs. As agencies rapidly move away from data centers and fixed capital assets to CSP and consumption-based cost models, budget and procurement practices need to evolve to provide additional flexibility for spending variability and funding adjustments. Moreover, agencies should prioritize cloud optimization, diligently monitor the budget execution of cloud contracts, forecast and understand cloud costs and drivers, and develop robust contingency plans to address the inherent variability of cloud spending.

## Executive Summary

Federal FinOps teams face significant challenges in managing cloud spending due to variability in surpluses and deficits between planned, estimated, forecasted, and actual cloud budget performance. This variability is driven by evolving requirements and the implementation of cost optimization techniques, making it difficult for federal agencies to plan and forecast cloud consumption and costs accurately.

To address these challenges, federal agencies must proactively develop contingency strategies that accommodate budget variances and build flexibility into their budget execution plans. This approach will enable agencies to make informed cloud decisions, optimize costs, and adhere to public sector cloud acquisition guidelines.

## Key Topics Addressed

  * Cost Optimization and Avoidance During Budgeting: 
    * Budget Formulation: Integrating cost optimization strategies during the initial budget planning phase.
    * Budget Execution: Cost avoidance techniques are implemented during budget execution to ensure the efficient use of resources.
    * Budget Forecasting: Continuously updating forecasts to reflect current and anticipated cloud consumption and costs, incorporating cost-saving measures.
  * Preparing for Cloud Spend Variability: 
    * Monitoring Cloud Budget Execution: Establishing robust monitoring mechanisms to track cloud spending in real-time and identify variances promptly.
    * Cloud Contract and Budget Mechanisms for Funding Adjustments: Utilizing flexible cloud contracts and budget mechanisms to adjust funding in response to changing requirements and priorities.

By addressing these topics, federal agencies can better manage cloud spending variability, optimize costs, and make informed decisions that align with public sector guidelines. This proactive approach will enable agencies to fully leverage the benefits of cloud computing while maintaining budgetary control and flexibility.

## Cost Optimization and Avoidance During Budgeting

Federal agencies have been directed to transition from traditional data centers to cloud-based IT infrastructures (See [Cloud First](<https://obamawhitehouse.archives.gov/sites/default/files/omb/assets/egov_docs/federal-cloud-computing-strategy.pdf>), [Cloud Smart](<https://cloud.cio.gov/strategy/>), and the [Data Center Consolidation Initiative (DCOI) ](<https://www.whitehouse.gov/wp-content/uploads/2019/06/M-19-19-Data-Centers.pdf>)to reduce costs, increase agility and efficiency, and bolster cybersecurity. However, the pressure to swiftly comply with these directives often leads to a “lift and shift” migration strategy. This approach, which simply moves existing workloads to the cloud without significant optimization or architectural adjustments to leverage cloud-native capabilities, can hinder the realization of potential cost avoidance through workload optimization and designing for the cloud. This often leads to unnecessary cloud spend. “Born in the cloud” workloads tend to be better optimized due to cloud-native architecture and CSP tools that provide rightsizing recommendations during development, but even the best-architected systems require consistent modernization in the ever-evolving cloud environment. Whether migrating into the cloud or developing a cloud-native workload, agencies will ideally include the financial impacts of cost optimization strategies in planning and estimating, forecasting, and budgeting for cloud spending.

By making smart architecture decisions to avoid over-provisioning, agencies can benefit from the cloud’s inherent elastic nature and only pay for what is consumed. Agencies should continuously seek ways to optimize their workloads and appreciate that both a proactive planned cloud optimization accounted for during budget formulation and a reactive optimization approach executed during budget execution can result in cost avoidance. The table below highlights the key takeaways and nuances when working through each phase of your agency’s Cloud Financial Management practice, considering both Planned and Unplanned Cost Optimization.

## Formulation

During budget formulation, federal agencies collaborate with the Office of Management and Budget (OMB) to identify priorities and determine programmatic funding levels to include in the President’s Budget Request to Congress. This stage in the budget cycle closely aligns to FinOps [Estimating and Planning](<https://www.finops.org/framework/capabilities/planning-estimating/>) and the process of defining funding levels for cloud-related programs and projects. It also allows Federal FinOps teams to incorporate cost optimization and avoidance considerations into cloud initiatives planning. Discussions with cloud engineers, product owners, and procurement on [Architecting for Cloud](<https://www.finops.org/framework/capabilities/architecting-for-cloud/>), [Workload Optimization](<https://www.finops.org/framework/capabilities/workload-optimization/>), and [Rate Optimization](<https://www.finops.org/framework/capabilities/rate-optimization/>) can be particularly valuable when estimating how optimization and cost avoidance impact spending forecasts and budget request funding levels.

**Note:** Agencies should also consider the labor resources and any software licenses needed to facilitate migration, including workload reengineering and refactoring for the cloud. This may require a short-term surge investment to achieve long-term optimization and cost avoidance.

## Execution

Accurately estimating and forecasting the financial impacts of cloud cost optimization and avoidance during budget formulation is challenging. After an agency’s budget request is submitted to Congress, it will take nearly two years to receive funding, likely at levels different than requested. Additionally, emerging issues, evolving priorities, and new requirements may impact cloud migration and optimization initiatives. Changes to federal acquisition policies, updates to government contract vehicles, and adjustments to CSP rates and service offerings have the potential to further exacerbate funding level inaccuracy in agency budget requests. Therefore, during budget execution, when funding levels are known and available for obligation, is another time for agencies to evaluate and implement cloud cost optimization initiatives.

After an agency’s budget is enacted, funding levels are known, and funds are available for obligation, planned, unplanned, and/or adjusted cloud cost optimization and avoidance initiatives should still occur during execution. Optimization slack is likely available if cloud-hosted workloads were priced using “on-demand” rates. During migration planning and solution design, strategies within the FinOps [Architecting for the Cloud](<https://www.finops.org/framework/capabilities/architecting-for-cloud/>) and [Workload Optimization](<https://www.finops.org/framework/capabilities/workload-optimization/>) capabilities should be incorporated to establish a realistic cost baseline and avoid inefficient spending as early as possible _(_ see [Cost Aware Product Decisions](<https://www.finops.org/insights/cost-aware-product-decisions/>) _)._[Rate Optimization](<https://www.finops.org/framework/capabilities/rate-optimization/>), including advantageous pricing in cloud reseller agreements, Savings Plans, Reserved Instances, and Spot Instances, can be enabled during budget execution.

## Forecasting

When optimizing a cloud environment ensure that any changes are documented and pass through an efficient formal change request process and review board. This ensures that agency FinOps Practitioners, product owners, and budget staff know the changes and update cloud spending forecasts accordingly. Forecasting becomes increasingly important for workloads not including cost avoidance and optimization strategies during the budget formulation phase. Inevitably, there will be ways to optimize and reduce costs; such reductions should be included in forecasts and communicated to stakeholders. This is an iterative and ongoing process to incorporate the results of optimizations into forecasts. An increased variance should not deter the FinOps practitioner from making optimization recommendations or the application owner from executing them. Improved forecasting will lead to more accurate future budgets.

Formulation | Execution | Forecasting  
---|---|---  

  * During formulation, the FinOps capability of [Planning and Estimating](<https://www.finops.org/framework/capabilities/planning-estimating/>) is used for defining funding needs for specific cloud-related programs and projects
  * Cost avoidance and optimization strategies are included in planning and estimating future cloud spending and setting budget request funding levels
  * Establishes a lower, more accurate, and realistic baseline cloud budget
  * Demonstrates a more mature FinOps practice
  * Cloud budget cost informs future budget estimates

| 

  * Consider CSP or 3rd party optimization recommendations (e.g. Compute Optimizer, Azure Advisor, OCI Advisor, GCP Recommender
  * Evaluate infrastructure performance _(e.g. CloudWatch metrics, S3 lens)_
  * Budget execution variances communicated to the budget lead for contingency plan implementation

  * Communicate forecasted budget variances regularly to stakeholders
  * Plan to evaluate optimization performance and strategies quarterly

  * Implement a Change Control governance process, which includes the FinOps practitioner

| 

  * Initial forecast may include “on-demand” rates

Subsequent Forecasts should include newly optimized costs

  * Annual budget formulation considers realized cost avoidance and planned future optimization in funding levels
  * Forecasts and variances should be shared systematically with stakeholders
  * “Steady-state” workloads will have more predictable annual hosting spend
  * Target year-over-year decrease in Actuals to Budget variance %

## Preparing for Cloud Spend Variability

Factors may impact an agency’s ability to execute cloud funds, including any cost optimization and avoidance initiatives, as planned, forecasted, or budgeted. For example, federal agency cloud environments must adhere to rigorous security requirements. Before being permitted for use, a cloud environment must demonstrate compliance with [FedRAMP](<https://www.fedramp.gov/>) and conduct a [Risk Management Framework (RMF) Assessment](<https://csrc.nist.gov/pubs/sp/800/37/r2/final>) (DoD cloud environments must also comply with DISA) before receiving the Authority to Operate (ATO). The ATO process can significantly delay when a cloud contract is issued and when the cloud environment is ready for onboarding agency workloads, or the delivery of applications to the cloud. This can result in the under-execution of cloud contract budgeted funds. In another example, a federal contract vehicle utilized by an agency may not permit the purchase of committed use discounts like Savings Plans and Reserved Instances, impacting planned rate optimization and resulting in a cloud budget deficit.

## Monitoring Cloud Budget Execution

To maximize opportunities for funding adjustments, agencies must implement rigorous monitoring of cloud contract budget performance. Forecasting consumption based on actual and anticipated cloud usage should be done regularly _(recommended monthly or even more frequently if possible)_. Rate Optimization performance _(coverage % and utilization %)_ should be monitored in real-time by establishing thresholds and automated alerts. This can be done in the CSP console or third-party FinOps tool. Leverage all available tools to evaluate infrastructure performance and take action to reduce costs; examples include CloudWatch, AWS Compute Optimizer, AWS Trusted Advisor, Azure Advisor, Oracle Cloud Advisor, and GCP’s Recommender. Changes to cloud cost forecasts should be communicated to the application/budget owner frequently. Comparing the forecast to the actuals and the budgeted numbers gives advanced notice and insight into your cloud spend and drivers and will position you for contingency planning.

## Cloud Contract and Budget Mechanisms for Funding Adjustments

Agencies should strive to incorporate cloud funding and contract flexibility. They should also develop contingency plans for managing cloud budget surpluses and deficits. Many agencies already maintain unfunded priority lists in the event funding becomes available. Agency FinOps Practitioners and product owners should familiarize themselves with the budget and contract mechanisms available when cloud funding adjustments are needed.

### Cloud Contract-level Funding Adjustments

During budget execution, an agency may underburn on a cloud contract if optimization measures have been implemented or other factors result in consuming fewer cloud resources than planned. If cloud spending has been optimized (or is less than forecasted), an agency will have additional funds remaining on the cloud contract. Several options can be explored for repurposing those surplus funds.

FinOps Practitioners should understand if excess cloud contract funds can be de-obligated from the acquisition vehicle or moved to a separate Contract Line Item Number (CLIN) to manage budget variances. Close monitoring of cloud contract budget execution should enable early detection so that allowable adjustments occur months before the period of performance (PoP) ends. As part of contract funding discussions, these factors should be considered:

  * Does the contract allow CSP (i.e., hosting or IT infrastructure) funds to be allocated to cloud hosting professional services or SaaS? Depending on whether it is for the cloud or a specific migration, it might have flexibility if it’s used for hosting, support, or professional services. For example, are cloud-related professional services on a different or the same CLIN as your CSP contract? If de-obligation and transferring funds are options, consider using the funds to support services around the cloud or licenses for the cloud.
  * Consider what adjustments you can make within a CLIN, what adjustments you can make between CLINs, and what you can repurpose for other contracts.
  * Is there an enterprise discount program or private pricing agreement that requires a minimum amount of spend to avoid a penalty? If yes, consider how that penalty will apply to the cloud contract budget. Less surplus funds may remain once the penalty is expensed.

#### Commitment-based Purchases

When cloud contract budget underburn is identified, FinOps teams should investigate the feasibility of purchasing commitment-based purchases, like reserved instances (RIs) or savings plans,_if the contract vehicle or reseller allows_. By acquiring RIs or Savings Plans in advance of the contract’s expiration, agencies can leverage significant discounts to achieve lower rates without having to de-obligate funds. Savings from cost avoidance can be applied toward enhancing or expanding cloud operations, thereby further maximizing the value of the allocated budget. As part of the RI and Savings Plan discussion, consider these procurement and funding factors:

  * What is the cloud contract period of performance (PoP)?
  * Does the contract have option years?
  * If funding will be obligated extend for 12 (or more months)
  * What is the period of availability of the excess funds?

#### Repurpose Funds to a Linked Account or Subscription

Depending on the construct of the cloud organization and _if permissible on the contract_ , there may be an option to re-purpose cloud budget surplus across other linked CSP accounts or subscriptions.

#### Marketplace

Does the contract allow for marketplace purchases? _If the cloud contract, vehicle, and/or reseller permits_ , consider purchasing licenses or services via CSP marketplaces. Additionally, agencies should determine if the cloud contract or funding account is restricted to IaaS only. Cloud CSP marketplace offerings are primarily SaaS and professional services. Does your funding have a restriction on if it is IaaS only? Like RIs, using cloud contract budget surplus to purchase SaaS licenses or services through a CSP marketplace offering enables agencies to enhance cloud operations without de-obligating and potentially forfeiting funds. It also may open up other avenues for rate negotiations and different vendor options for services, products, or licenses.

### Budget Control-level Funding Adjustments

Congress appropriates funding to federal agencies accounts for a defined purpose that is generally broken down further into Programs, Projects, or Activities (PPA) (For more information on the Federal Budget Process visit: <https://crsreports.congress.gov/product/pdf/R/R46240>). The timing of when excess funds may be deobligated from their agreement vehicle, in addition to the funds remaining in the period of availability, may limit available options. For example, if excess funds have a short time window for obligation before their expiration, budgetary adjustments requiring congressional notification may not be completed in time for new obligations. Agencies should consult their legal counsel on statutory requirements/restrictions for reallocation, reprogramming, and/or transfers of appropriated funds.

#### [Reallocation of Funds within a PPA](<https://crsreports.congress.gov/product/pdf/R/R47600/2>)

Agencies may consider using the excess budget authority to align with the same budgetary allocation within a PPA. If agencies aim to repurpose excess cloud budget funding for priorities other than cloud services on the current acquisition vehicle, the excess funding should be de-obligated and re-obligated during the period of availability for that appropriation.

#### [Reprogramming](<https://crsreports.congress.gov/product/pdf/R/R47600/2>)

Reprogrammings are adjustments made within an appropriations account for other purposes that were not contemplated when the appropriations were made. Reprogrammings are generally allowable unless restricted by law but may have advance congressional notification requirements. These requirements are typically included with the applicable annual appropriations act. For example, Congress may require advance notification if reprogrammings between PPAs exceeds a defined dollar threshold.

#### [Transfers](<https://crsreports.congress.gov/product/pdf/R/R47600/2>)

Transfers are adjustments made from one appropriation account to another. Transfers are generally prohibited unless an agency is granted specific statutory authority.

## Conclusion

In conclusion, Federal FinOps Practitioners should adopt a proactive approach to manage cloud spending variability. By anticipating potential surpluses and deficits, developing contingency plans, and incorporating cost optimization strategies into budget planning, agencies can effectively navigate the complexities of cloud cost management. Recognizing the challenges posed by evolving requirements, delayed funding, and dependencies on various teams, it is crucial to prioritize budget execution flexibility. By carefully considering funding mechanisms and contract vehicles, agencies can ensure they have the necessary resources to support their cloud initiatives while optimizing costs.

## Acknowledgments

We’d like to thank the following people for their help on this Paper:

![Kimberly Rooney](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E)

#### Kimberly Rooney

National Oceanic & Atmospheric Administration

[ ![Matthew Whalen](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Matthew Whalen Rapid Cycle Solutions, LLC ](<https://www.linkedin.com/in/matthew-whalen-0a975438/>) [ ![Amanda Dalton](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amanda Dalton Deloitte ](<https://www.linkedin.com/in/amanda-dalton-0564a295/>) [ ![Trig Ghosh](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Trig Ghosh Accenture ](<https://www.linkedin.com/in/trig-ghosh/>) [ ![Kevin Harris](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kevin Harris Accenture Federal Services ](<https://www.linkedin.com/in/kevin-harris-ba5269268/>) [ ![Laura Mills](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Laura Mills ManTech ](<https://www.linkedin.com/in/laura-mills-98737b105/>)

Last updated: March 17, 2026

## Table of Contents

  * [Introduction](<#introduction>)
  * [Executive Summary](<#executive-summary>)
  * [Key Topics Addressed](<#key-topics>)
  * [Formulation](<#formulation>)
  * [Execution](<#execution>)
  * [Forecasting](<#forecasting>)
  * [Preparing for Cloud Spend Variability](<#preparing-cloud-spend-variability>)
  * [Monitoring Cloud Budget Execution](<#monitoring-cloud-budget-execution>)
  * [Cloud Contract and Budget Mechanisms for Funding Adjustments](<#cloud-contract-budget-mechanisms>)
  * [Conclusion](<#conclusion>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ Unit Economics ](<https://www.finops.org/framework/capabilities/unit-economics/>) [ Budgeting ](<https://www.finops.org/framework/capabilities/budgeting/>)
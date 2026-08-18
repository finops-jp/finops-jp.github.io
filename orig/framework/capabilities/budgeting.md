# Budgeting

[Framework](<https://www.finops.org/framework/>) / [Domains](<https://www.finops.org/framework/domains/>) / [Quantify Business Value](<https://www.finops.org/framework/domains/quantify-business-value/>) / Budgeting 

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success_kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

**Strategic and ongoing process for setting limits, monitoring, and managing technology spending, aligned with business objectives, to ensure accountability and predictable financial outcomes for IT systems.**

**Create technology budgeting strategy**

  * Create a holdback strategy (levels, percentages, factors)
  * Establish the appropriate budgeting cycle (annual, quarterly, etc.)

**Set Budgets**

  * Set budgets to create healthy constraints on application teams
  * Determine how budgets will influence and inform Forecasting

**Track and manage budgets**

  * Establish acceptable variance thresholds on Budget to Forecast and Budget to Actual
  * Identify exception handling for scenarios when altering budgets out of cycle is needed

## Definition

FinOps Budgeting establishes approved funding to support an organization’s planned technology activities, tracks spending and value within that funding, makes transparent adjustments as appropriate, and ensures accountability from each budgeted cost center through a consistent set of budgeting strategies.

Budgeting will typically begin as part of the broader IT budgeting process, and will evolve and mature as the complexity of the technology landscape increases. The faster pace of development and nearly unlimited capacity of modern technology categories like cloud, AI, and data cloud platforms ultimately requires organizations to adopt a shorter budgeting cycle, with more flexibility built in through holdbacks and out of cycle adjustments. The FinOps team must collaborate with Finance who primarily drive Budgeting, to establish and adjust the Budgeting strategy and holdback strategy over time.

Budgeting is closely related to both Forecasting and Planning & Estimating. Budgets for a system or application are typically based on the forecasts provided by those teams. There is a strong tie to the organization’s allocation strategy, which will define how costs are to be allocated to different cost centers, and to Invoicing & Chargeback which will apply costs to those specific budget cost centers each period.

However, while Forecasting is a promise by the engineering and product owners to deliver some amount of value for some amount of spending, budgeting is the organization’s commitment to those engineering or product owners to fund them at a certain level. Budgets should provide clear support for the work the product team is doing, while providing healthy constraints on those teams to work within the budget that will produce value for the organization as a whole.

Budgets are allocated to budget owners, responsible for a specific scope of work. There may be multiple levels of budget owners in some organizations. Each budget owner will have one or more systems or applications they are responsible for delivering. System owners will be continuously estimating the cost (and other impacts) of their development work, and maintaining their forecasting model. When forecasts begin to appear that they will exceed budgets, collaboration between Personas must be done to resolve the issues causing the potential or actual overages.

Budget provided for a documented scope of cost and value will typically also provide a holdback allocation to the budget owner. This holdback can be thought of as money that is not allocated to a specific purpose but is available to a budget owner to account for changes, overages, forecasting errors and other small corrections required during a budget period. As an organization matures, the amount of holdback, and rules for its use may be reduced, at least in areas where budgeting for more stable workloads.

When a system owner determines that Budget adjustments may be necessary a potential process for resolution will follow steps such as these:

  1. Budget threshold reports anticipate exceeding budget (Engineering)
  2. Investigate the reasons for the overage (Engineering, Product) 
     * Take corrective action to optimize, or
  3. involve budget owner to request additional funding from holdback (Engineering, Product, and Budget Owner) 
     * Designate additional funding if available and reasons for the adjustment are understood, or
  4. Involve higher level budget owner, or Finance directly to review the request (Engineering, Budget Owner, Product, Finance) 
     * Designate additional funding from higher level holdback, or
  5. Involve Leadership to make adjustments to budgeted spending levels and record/adjust impacts to organizational performance expectations (Engineering, Product, Finance, Leadership) 
     * Approve adjustment to budget, or
     * Deny adjustment and collaborate on corrective adjustments to be made

The above assumes that actual spending is unfavorable to budget. The term _favorable to budget_ means that there are less expenses than as planned in the budget. The term unfavorable to budget means that there are more expenses than as planned in the budget.

Being unfavorable to budget requires action as soon as it is detected. However, being strongly favorable to budget is also not ideal. Large amounts of unused holdback funding could have been used to invest in other areas. Once risks and uncertainties are well understood, even within a budgeting cycle, budget owners and Finance should also collaborate on making adjustments to reclaim holdback that is no longer required and put it to work.

In organizations that are more simple, more stable or steady state, adjustments to budgets should lessen over time, and holdback can be reduced each budgeting cycle. Organizations that are very dynamic or experiencing high growth in cloud use may need to have higher holdback amounts, or more layers among its budget owners to accommodate the inevitable need to adjust funding when forecasting for unknown or dynamic workloads.

Shortening the budgeting cycle or extending budget thresholds can also be an effective way to manage change. More frequent budgeting cycles allow organizations to make more frequent adjustments, release undesignated holdback, spot forecasting problems, and redirect efforts more often. Exercising this process builds muscle memory for the organization, and allows even out of cycle changes to become more routine. This incremental budgeting can be particularly useful for AI investments which are faster-paced and more frequently submitted than traditional IT projects.

Budgeting is driven primarily by Finance, but following the principle of “Everyone takes responsibility for their cloud use” should lead organizations to distribute the budget (and holdback) to budget owners throughout the organization. These budget owners are then empowered to work autonomously within their sphere of control, and to allow the entire organization to operate more quickly and efficiently without budget approvals becoming a gridlock risk.

In many organizations there will be more than one way to manage budgets. Finance partners may work with some parts of the organization differently due to the importance of some systems or business units. R&D work, purely internal IT systems, and customer-facing systems may be handled in different ways. Financial budgets may be combined with other resource budgets such as labor cost, license cost, cloud sustainability goals, or the like.

Particularly in government, public sector, or highly-regulated organizations, the source and timing of funding may also create more restrictions on the budgeting process. Compliance with regulation will create more complexity that may not allow more efficient budgeting or which may require more collaboration or process to understand and follow. The FinOps team can be the catalyst for understanding these requirements and helping to facilitate changes over time as technology use diversifies.

## Maturity Assessment

####  Crawl 

  * Simple or stable technology environment does not require complex budget allocations or structure, so simple tools (spreadsheets) used to track budgets by budget owner and system
  * Forecasts are reviewed and used to create budgets manually
  * Budget variance analysis is done manually or using standard reporting
  * Limited budget granularity (not consistently available by business unit, application) due to lack of allocation compliance or simplicity of environments
  * Engineering not involved with the creation of cloud cost budgets or tracking of discrepancies from forecasts or against actuals
  * Budget holdback managed centrally by Finance due to simple or stable cloud use
  * Holdback designation processes manual and ad hoc
  * Budgeting cycle is annual to match other IT budget cycles

####  Walk 

  * More complex or dynamic technology environment requires more structured budget tracking structure and tools
  * More complex forecast models are used to establish budgets
  * Budget cycle is established and done on a regular cadence but not automated
  * Stakeholder teams (Product, Leadership, Engineering, Finance) have access to cloud cost forecasting data and budget allocations
  * Regular review cadence by FinOps team of budget thresholds and trends with stakeholder teams and Finance
  * Budget holdback managed by a small number of budget owners throughout the organization at BU level
  * Holdback designation process and budget overage resolution processes exist, but are not automated or universally used
  * Budgeting cycle is a hybrid of annual and shorter for some systems which are more dynamic or where cloud use is growing

####  Run 

  * Complex organization and/or technology use requires structured and distributed budget tracking, and tool use
  * Global policy for applying allocation metadata to prevent unallocated cost
  * Complex forecast models aggregated from many system or application teams to create forecasts using a variety of metrics and parameters
  * Budgets are aligned to the organization’s allocation constructs being used across the organization for reporting cloud costs and doing chargeback
  * Granular budget visibility (by business unit, cost center, team, product, service, etc.) in the context of organizational KPIs
  * Stakeholder teams (Executives, Engineering, Finance) have real-time visibility into a single source of truth for how cloud usage is impacting forecast trends and budgets
  * Integration and automated data flow between cloud cost forecast data, budgeting systems or record and back-end accounting systems used for broader organizational reporting
  * Budget holdback managed by multiple budget owners throughout the organization
  * Holdback designation processes and budget overage resolution processes exist, with automation, universally required, streamlined
  * Budgeting cycle is short (rolling quarterly) with a consistent and automated approach to collecting forecasts, allocating budgets, and establishing holdback thresholds due to consistent activity

## Functional Activities

####  ![](https://www.finops.org/wp-content/uploads/2024/03/FinOps-Practitioner.svg) FinOps Practitioner 

**As someone in the FinOps team role, I will…**

  * Collaborate with all personas to establish Budgeting Strategy and Holdback strategy and reinforce use
  * Help to establish budgeting KPIs that are in alignment with business goals
  * Explore optimization opportunities with teams that are expected to overspend budgets
  * Facilitate the collection of estimates and forecasting models for cloud costs to enable Finance and Leadership to create budgets
  * Provide granular reporting to teams on actual vs. budgeted spending by different business-centric dimensions
  * Provide reporting on budgets vs actuals vs forecast to establish trends and compare against variance KPIs

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Product.svg) Product 

**As someone in a Product role, I will…**

  * Develop product centric KPIs to measure the cost effectiveness in achieving my desired business outcomes
  * Follow budget threshold variances that are in alignment with the products I own
  * Use these KPIs to inform budget and forecast models in collaboration with my engineering counterparts

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Finance.svg) Finance 

**As someone in a Finance role, I will…**

  * Establish requirements for when forecasting is due and how frequently forecast updates are needed
  * Aggregate granular forecast data to compile budgets with reasonable accuracy
  * Help to establish budgeting KPIs that are in alignment with business goals
  * Provide granular reporting to teams on actual vs. budgeted spending by different business-centric dimensions
  * Provide reporting on budgets vs actuals vs forecast to establish trends and compare against variance KPIs

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Procurement.svg) Procurement 

**As someone in a Procurement role, I will…**

  * Monitor cloud spending budgets vs. actuals to identify instances where exceeding budgets would impact commitments, vendor agreements, or spending expectations with cloud providers or other vendors

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Engineering.svg) Engineering 

**As someone in an Engineering role, I will…**

  * Monitor for cloud spend exceeding or trending toward exceeding budgets
  * Work with FinOps stakeholders to identify actionable optimization opportunities or estimate system changes to avoid overspending budgets
  * Get approval for planned changes which will have a negative impact to our cloud spend or value projections / budgets using approved processes with budget owners

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Leadership.svg) Leadership 

**As someone in a Leadership role, I will…**

  * Consistently manage cloud budgets, forecasts, and estimates; and monitor for impacts to the business
  * Establish budget threshold variances that are in alignment with business goals
  * Manage competing priorities for active project timelines when forecasted spend impacts budgets for high-priority initiatives
  * Ensure successful communication between the FinOps team and Business Units

## Measures of Success & KPIs

  * Budgeting leverages appropriate discount-adjusted, amortized cloud usage data, as identified in the Budgeting Strategy
  * Budget vs actual cost trends within established percentage threshold of variance. Acceptable levels of budget variance is maximum 20% variance from actual spend for a FinOps practice operating at a Crawl maturity level; a 15% variance for a FinOps practice operating at a Walk maturity level; and 12% variance for a FinOps practice operating at a Run maturity level
  * Stakeholder notifications for actual or anticipated budget variance threshold exceeded & risk of budget overspend
  * Budget cadence that includes rolling forecasts to update budgets based on business drivers
  * Teams and Business Units are responsible for managing their budgets based on forecast data and actual cost, usage, and impact

## KPIs

#### CSP Cloud Budget Burn Rate

The rate at which an organization is consuming or spending its allocated budget for cloud services from a CSP.

Read more

#### Percentage Variance of Budgeted vs. Forecasted CSP Cloud Spend

Measures the difference between budgeted costs and the forecasted costs for using CSP cloud services.

Read more

#### CSP Cloud Carbon Budget Burn Rate

CSP Cloud Carbon Budget Burn Rate

Read more

## Inputs & Outputs

### Inputs

  * Forecasting models from stakeholders in all relevant areas
  * Budgeting Strategy input from Leadership and Finance identifying Budget owners, P&L owners, levels of budgeting required, and other parameters
  * Organizational P&L and cost center strategy from Allocation
  * Cost, impact, and usage reporting data from Reporting & Analytics

### Outputs

  * Budget Strategy for use by all P&L owners and budget owners
  * Budget allocations to all funded cloud systems grouped by budget owner
  * Budget adjustment process to be used for out of cycle adjustments
  * Holdback strategy for use by all P&L owners and budget owners
  * Budgeted holdback allocations to appropriate budget owners
  * Budget allocations to P&L cost centers to Invoicing & Chargeback

[View former Budget Management page](<https://www.finops.org/framework/previous-capabilities/budget-management/>)

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success_kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

##### Related Assets

[ ![](https://www.finops.org/wp-content/uploads/2023/09/pointclickcare-x23.png) Budgeting in the Cloud: From Confusion to Clarity (PointClickCare) ](<https://www.finops.org/assets/budgeting-in-the-cloud-from-confusion-to-clarity-pointclickcare/>) [ ![](https://www.finops.org/wp-content/uploads/2023/09/atlassian-x23.png) Cloud Budget & Forecast Process - Atlassian Use Case ](<https://www.finops.org/assets/cloud-budget-forecast-process-atlassian-use-case/>) [ ![](https://www.finops.org/wp-content/uploads/2023/09/ally-financial-x23.png) Creating "AutoMagic" App Budgets for FinOps (Ally Financial) ](<https://www.finops.org/assets/creating-automagic-app-budgets-for-finops-ally-financial/>) [ ![](https://www.finops.org/wp-content/uploads/2022/12/video.png) How to Bridge the Gap between Finance and Tech Teams ](<https://www.finops.org/assets/finops-stories-how-to-bridge-the-gap-between-finance-and-tech-teams-with-pedro-veloso-of-olx-group/>)
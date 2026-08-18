# Invoicing & Chargeback

[Framework](<https://www.finops.org/framework/>) / [Domains](<https://www.finops.org/framework/domains/>) / [Manage the FinOps Practice](<https://www.finops.org/framework/domains/manage-finops-practice/>) / Invoicing & Chargeback 

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success_kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

**Developing specific reporting, service provider invoice reconciliation workflows and chargeback models, in direct collaboration with Finance Personas with input from Product and Engineering Personas, to align technology cost data and reporting to specific budgets and accounting requirements.**

**Manage invoicing financial interactions**

  * Manage Purchase Orders with providers
  * Understand provider invoicing format and procedures
  * Define provider invoice reconciliation procedures and policy

**Manage chargeback financial interactions**

  * Define and maintain finance and accounting decision making and coordination and integrations
  * Chargeback reporting to internal budget owners
  * Accounting close processing with accounting personas
  * Handle adjustments and corrections with accounting systems

## Definition

Managing technology invoices and creating official chargebacks to the organization’s Finance systems are important – and specific – processes that must be established as official interactions between the FinOps practice and Finance & Accounting personas. Accounting must have the ability to effectively understand, reconcile, and pay invoices from technology suppliers. In organizations where there is a need to perform official chargeback to the organizational budget or accounting systems, Finance must be able to rely on cost data consistency, timeliness and accuracy to allocate expenses in a transparent and accountable way. This ensures that each organizational profit and loss (P&L) owner bears financial responsibility for the cost of the resources or services it consumes.

The goal of this capability is to support Finance to allocate invoiced cost to cost centers they’ve identified, in the formats and at the timing intervals required to support accounting and finance activity required by the organization. In addition to managing invoices, and creating chargeback reporting, this capability must address ongoing maintenance of required data and reporting requirements over time to support maturing cloud practices and changes in accounting or finance needs. This includes providing guidance to the FinOps team on how data quality should be checked and verified, how data and reporting integrity should be maintained (e.g. some organizations will require SOC compliance or similar), what elements of cost should be included in chargeback reports (and using which cost metrics), and providing process for situations where chargeback reporting needs to be corrected because of changes that occur after accounting period closing. The chargeback process should align to the goals of both the FinOps team and ITFM/TBM, primarily around the level of granularity for chargeback, general ledgers (cost centers) to use, and timing requirements for close activities.

Reconciliation of technology provider invoices can be challenging due to several variables:

  * Timing – Invoices are received monthly between 3 and 12 days after the end of the previous month in most cases, but cloud usage data, for example, is delivered continuously through the month, and consumption data can be received after a month ends. The ability to perform accounting close very shortly after the end of an accounting period can be challenging if the invoice and usage data haven’t been received. It may be necessary to use incomplete data and make estimates for both total spend and individual line items, with proper processes in place to reconcile with journal entries once data and invoicing are complete
  * Data accuracy and alignment – technology service invoices present summarized information detailed to a sub-account level, which may be difficult to allocate to cost centers. When using tags or labels to categorize, or dividing shared cost, it can be difficult to validate the data as summarized on the invoice. Additionally, the impact of commitment discounts (e.g. negotiated discounts, commitment discounts, Savings Plans, Reserved Instances) may not be included on the invoice as desired
  * Volume of invoices – Organizations may receive numerous invoices across multiple cloud providers and other vendors (including separate ones for prepaid commitments, usage, marketplace subscriptions, credit memos, etc.) depending on how they have organized and deployed technology resources

To overcome these challenges, this capability will have strong ties to the Data Ingestion, Allocation, and Reporting & Analytics capabilities, including the recommended use of FOCUS terminology throughout the organization, which will create the integrated datasets to support showback reporting for all personas in addition to reconciliation and chargeback reporting.

The primary difference between showback and chargeback is the formality described in this capability of sending expenses to official accounting budgets. Showback reporting can be used at any granularity to show any group, large or small, the costs of the scope it’s responsible for. Neither type of reporting should be considered more mature than the other. Chargeback is not always required in every organization. When technology costs are allocated to a single, or easily allocated set of cost centers, the additional cost and burden of creating official chargeback reporting may be unwarranted. Showback is always required in any FinOps practice, but chargeback is dependent on organizational accounting policies.

Some of the actions in this capability rely upon decisions made in the Cost Allocation capability. Decisions around a tagging and allocation strategy will help influence what level of granularity you can determine ownership and designate a cost center for chargeback. Another consideration that relies on Cost Allocation is how [shared organizational costs](<https://www.finops.org/framework/capabilities/manage-shared-cloud-cost/>) will be identified. If it is not easily identified within the Cost Allocation capability, the ability to chargeback these costs will be limited to only certain types of costs (enterprise support charges, [commitment based discounts](<https://www.finops.org/framework/capabilities/manage-commitment-based-discounts/>)). However, questions such as “Will these costs be held centrally or allocated based on consumption?” should be answered within this capability and determined in collaboration between the FinOps team and finance.

## Maturity Assessment

####  Crawl 

  * Technology spend is charged back to teams based on estimated spend month and there is typically a material variance (which is not material for the overall organization) from estimated spend to actual spend
  * Ledger estimates with incomplete data are made without additional true-up entries once data is complete
  * Shared costs like enterprise support are held centrally due to lack of strategy on how to provide visibility
  * Commitment based purchases made in a specific sub-account are charged to the owner of the account and not based on the consumption of the discount
  * Commitment based purchased made in a central billing account are held centrally and not charged back to teams based on the consumption of the discount
  * Monthly invoice reconciliation is done at a macro-level ensuring total cost expected per service provider matches the total invoiced amounts
  * Processing invoice payments and the chargeback process happen days or weeks apart from each other due to manual efforts
  * No tooling in place to automate data capture, data mediation or exception handling
  * Chargeback is done using spreadsheets, manual journal entries, with no service catalog or cost center hierarchy tooling in place
  * Chargeback file is high level with total costs per service provider across cost centers without shared cost or other costs split out for visibility
  * Cost center hierarchy is relatively flat with cost centers only assigned to leadership
  * The only consistent touchpoint for the Finance, central FinOps, and Accounting teams is the sharing of chargeback data to be posted

####  Walk 

  * Technology spend is charged back to teams based on estimated spend with some level of variance between estimates and actuals
  * Placeholder ledger entries or incorrect charges are common due to manual effort
  * Ledger estimates with incomplete data often require additional entries to true-up actual cost
  * Initial strategy implemented on how to charge and show shared costs in the chargeback file
  * Majority of all commitment based purchases are charged to teams based on their consumption of the discounts
  * Centralized tooling is in place to for chargeback data and exported to a file that is manually edited before integrating into the company’s financial tooling
  * Processing invoice payments and the chargeback process happen over the course of the financial close process (days)
  * Chargeback file is expanded to include breakout some shared cost components and split out committed use or marketplace purchases
  * Invoices are manually validated ensuring credits, discount rate, and one-off charges are all correct and received into the accounting system
  * Cost center hierarchy is expanded to more granular parts of the organization for more detailed chargeback
  * Currency conversion is factored into chargeback file as a part of the monthly process
  * Finance, central FinOps, and accounting are actively collaborating on decisions related to maturing the chargeback file, level of detail, and determining initial strategy for shared cost charges.

####  Run 

  * Teams understand their direct and allocated shared cost portion of technology spend based on their actual consumption
  * All commitment based purchases are charged to teams based on their consumption of the discounts
  * Chargeback/Showback reporting is integrated automatically into the companies finance tooling
  * Invoice reconciliation and the chargeback process happen simultaneously due to automation and integration of tooling
  * Finance is self-sufficient in reconciling spend or answering questions regarding chargeback without intervention from the central FinOps team
  * Ledger estimates with incomplete data are within a small enough error that additional entries are often not required but can be quickly mediated if necessary
  * Chargeback data is fully automated each month into the financial system with the ability to support charging, mark-ups and allocation both in advance and in arrears
  * Chargeback file is expanded in detail to show all types of charges split out
  * Currency conversion is automated if possible and is distinct in the chargeback file to allow for additional analysis on any fluctuations not related to cloud usage
  * Finance, central FinOps, and accounting have finalized all associated processes for charging and showing shared cost and have expanded chargeback to the most granular levels of the organization

## Functional Activities

####  ![](https://www.finops.org/wp-content/uploads/2024/03/FinOps-Practitioner.svg) FinOps Practitioner 

**As someone in the FinOps team role, I will…**

  * Receive Cloud Provider invoices and direct invoices for payment, or arrange for the appropriate team to receive them
  * Understand internal procurement process to generate a Purchase Order Number or Term Sheet for Cloud Provider to submit invoice against
  * Work with Finance to validate Cloud Provider invoice on a monthly basis, including expected costs, discounts, tax, credits
  * Validate any Marketplace invoice as needed and route to appropriate team
  * Understand how cloud expenses are generated
  * Help teach teams the tagging and account policies and the importance of expense accountability required for chargeback and invoice reconciliation
  * Establish and maintain data source/tool for allocation methodology for cloud usage and shared charges (i.e. commitment based discounts) and leverage this to create chargeback data
  * Validate chargeback data aligns with costs expected from invoice plus any added costs
  * Help teams reconcile their portion of expenses that is allocated to them each month using chargeback data
  * Partner with the accounting and finance team during close activities. Advise on estimation best practices for initial chargeback. Provide “true up” chargeback data to Finance if not in a single system in alignment with close timelines.

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Product.svg) Product 

**As someone in a Product role, I will…**

  * Review the cloud costs I am accountable for each month
  * Understand how these costs impact my budget
  * Have an understanding of organizational policy regarding chargeback/showback and allocation of shared costs/discounts
  * Message cost expectations for my application to leadership
  * Leverage chargeback allocation information for prioritization of optimization work

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Finance.svg) Finance 

**As someone in a Finance role, I will…**

  * Understand how cloud expense is generated
  * Help teams understand their budgets and update forecasts as an iterative process
  * Explain variances to budget to leadership and budget owners (typically monthly, quarterly, yearly)
  * Partner with central FinOps team and Accounting to ensure the chargeback process evolves overtime to meet any changes to the organization’s budget or alignment needs
  * Help teams reconcile their portion of expense that is allocated to them each month
  * Partner with Accounting and the central FinOps team during close activities to ensure invoices are validated and paid on time
  * Utilize the centralized data/allocation tooling to execute chargeback postings in the financial system
  * Establish criteria for compliance with chargeback procedures that are in line with the company’s financial close, budgeting, and forecast processes
  * Provide detailed line item accounting such as General Ledger codes that tie back to budgets to enable proper chargeback
  * Track changes in cloud costs relating to currency fluctuations versus usage
  * Collaborate with central FinOps team to establish a process for charging back share cost and commitment based purchases
  * Execute on any necessary true-up entries after billing data is finalized to ensure cost to each department is accurate

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Procurement.svg) Procurement 

**As someone in a Procurement role, I will…**

  * Understand how cloud expense is generated
  * Partner with Finance, Accounting, and the FinOps team on close activities and chargeback if Purchase Orders (POs) are required with cloud expenses, such as marketplace purchases via the Service Providers
  * Provide invoicing and payments terms to finance and accounting to ensure our chargeback processes meet the contractual criteria

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Engineering.svg) Engineering 

**As someone in an Engineering role, I will…**

  * Understand how cloud expense is generated for each service used
  * Comply with company tagging and account policies that help drive more detailed chargeback
  * Review costs allocated to relevant teams/applications each month for awareness, trends, budgeting, etc.
  * Message cost expectations for my application to leadership and finance controller
  * Have an understanding of organizational policy regarding chargeback/showback and allocation of shared costs/discounts
  * If applicable, partner with FinOps practitioners, accounting, and Finance team to validate planned chargeback for shared services I own

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Leadership.svg) Leadership 

**As someone in a Leadership role, I will…**

  * Understand how cloud expense is generated
  * Review cloud expense for portions I am accountable for
  * Leverage this information for real-time decision making
  * Establish metrics to measure and support chargeback success
  * Understand the organizational policy regarding chargeback/showback and allocation of shared costs/discounts and contribute to its evolvement if necessary

## Measures of Success & KPIs

Measures of success are represented in the context of cloud costs and may include one or more key performance indicators (KPI), describe objectives with key results (OKR), and declare thresholds defining outliers or acceptable variance from forecasted trends.

### KPIs

  * Chargeback Processing Time – Efficiency of chargeback process from cost incur to allocation to the departments, projects and products.
  * % of Invoices Paid On-Time – adherence to terms with Service Providers
  * General Ledger Recharge Rate (Total and Per Cost Center) – variance between cloud spend in cloud management tool and amount charged in General Ledger
  * % Accuracy of Chargebacks – Proper charges allocated to the correct cost center
  * % Variance in chargeback estimates vs actuals

### Measures of Success

  * Periodic reconciliation of invoices to ensure rate, discounts, and credits are validated
  * Budgets and forecasts are not impacted by material shifts in cost due to incorrect charges
  * An established and collaborative relationship between finance, accounting, and FinOps teams
  * An increase in awareness and accountability for cloud spend for each budget owner
  * Effective reporting on chargebacks executed
  * Reduced cycle time between receiving invoice and processing chargeback

## KPIs

#### General Ledger Recharge Rate

Measure total cloud spend in the cloud management tool vs. amount charged in General Ledger (Finance application).

Read more

#### General Ledger Recharge Rate per Cost Center

See cloud spend in the cloud management tool per Cost Center vs. amount charged in General Ledger.

Read more

## Inputs & Outputs

### Inputs

  * Tagging standards and strategy provided by the FinOps team and determined as a part of Cost Allocation
  * Cost Allocation data provided by FinOps team from the established tooling
  * Cost allocation model for shared services provided by FinOps team and Finance
  * Internal allocation reporting built by FinOps team to feed chargeback process
  * Financial Policies, Procedures, Protocols, and Practices, including financial expenditure approval thresholds; depreciation and amortization policy/strategy; capitalization bias/strategy provided by finance and accounting team
  * Company cost center/department hierarchy provided by the finance team
  * Invoicing payment terms with each CSP provided by procurement team
  * General ledger requirements (Chart of Accounts, Cost Centers, Business Unit Codes, Capital Budget Codes, Location Code) provided by accounting team

### Outputs

  * Charges executed in financial systems and are visible in expense center actuals
  * A centralized reporting tool as the source of truth feeding the chargeback file
  * Feedback to Allocation on how Finance needs to officially allocate costs in Chargeback to organizational cost centers / General Ledger codes / etc.
  * Feedback to Data Ingestion Capability for specific data, metadata required for Chargeback or invoice reconciliation purposes
  * Feedback to Reporting & Analytics Capability on how showback reporting should be formatted into Chargeback reporting
  * Feedback to Intersecting Disciplines capability no how IT Finance or other financial extracts should also allocate or categorize costs
  * Terminology specifics around information provided on invoices and chargeback reports, for use by other personas to be more precise about reporting
  * Documentation of period close and invoice processing requirements to meet organizational finance needs
  * Chargeback file containing metadata, data – in the predetermined currency – aligned to the organization’s General Ledger for financial system ingestion and processing

[View former Chargeback & Finance Integration page](<https://www.finops.org/framework/previous-capabilities/chargeback/>)

## On this page

  * [Definition](<#definition>)
  * [Maturity Assessment](<#maturity_assessment>)
  * [Functional Activities](<#functional_activities>)
  * [Measures of Success & KPIs](<#success_kpis>)
  * [Inputs & Outputs](<#inputs_outputs>)

##### Related Assets

[ ![](https://www.finops.org/wp-content/uploads/2024/08/Uber-Breakout-size-v1-1.png) Uber: Bots and Allocations ](<https://www.finops.org/assets/uber-bots-and-allocations/>) [ ![](https://www.finops.org/wp-content/uploads/2024/04/FinOps-Assets-Story-Featured-v1.png) FinOps Journey at Old Mutual: Addressing Chargeback and Cost Allocation ](<https://www.finops.org/assets/finops-journey-at-old-mutual-addressing-chargeback-and-cost-allocation/>) [ ![](https://www.finops.org/wp-content/uploads/2023/09/koch-industries-x23.png) Inter-company Chargeback: Profitable Cost Allocation (Koch Industries, Inc.) ](<https://www.finops.org/assets/inter-company-chargeback-our-journey-to-profitable-cost-allocation-koch-industries-inc/>) [ ![](https://www.finops.org/wp-content/uploads/2023/09/salesforce-x23.png) Eliminating POs, Streamlining Invoice Processing, and Automating Cost Allocation (Salesforce) ](<https://www.finops.org/assets/eliminating-pos-streamlining-invoice-processing-and-automating-cost-allocation-salesforce/>) [ ![](https://www.finops.org/wp-content/uploads/2022/12/video.png) How to Master Your Cloud Billing Data (Etsy & Google Cloud) ](<https://www.finops.org/assets/mastering-your-billing-data-and-making-it-useful-etsy-google-cloud/>) [ ![](https://www.finops.org/wp-content/uploads/2024/04/FinOps-Assets-Story-Featured-v1.png) How to Provide Multidimensional Cost Showback ](<https://www.finops.org/assets/how-to-provide-multidimensional-cost-showback/>) [ ![](https://www.finops.org/wp-content/uploads/2023/08/F2-YouTube-Thumbnails-Template-3.png) Introduction to FOCUS (FinOps Cost and Usage Specification) ](<https://www.finops.org/assets/introduction-to-focus-finops-cost-and-usage-specification/>) [ ![](https://www.finops.org/wp-content/uploads/2023/09/grupo-boticario-x23.png) How to Integrate Cloud and On-Premise Reports (Grupo Boticário) ](<https://www.finops.org/assets/how-to-integrate-cloud-and-on-premise-reports-grupo-boticario/>)
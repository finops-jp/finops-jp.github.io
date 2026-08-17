# How to Calculate General Ledger Recharge Rate

**Summary:** The General Ledger (GL) Recharge Rate is a KPI used to ensure that total cloud spend recorded in an organization’s accounting system matches the actual bill from the Cloud Service Provider (CSP). FinOps practitioners must extract amortized or unblended costs from the cloud console for a specific accounting period and verify them against the journal entries posted in the finance system. Any variance between these two figures requires immediate investigation into the source data or currency conversion methods used to ensure complete financial accountability. Regular monthly execution of this playbook integrates cloud variable spend into traditional financial management workflows, providing a single trusted record for all cloud-related transactions.

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions for All Clouds](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Related Resources](<#related-resources>)
  * [Acknowledgments](<#acknowledgments>)

This playbook provides guidance on how to ensure that cloud spend has integrated into your organization’s financial management processes and systems by way of comparing the total cloud spend recorded as a Journal in the accounting system is equal to total cloud spend for the month for the CSP (AWS, Google Cloud, Azure or Oracle Cloud Infrastructure etc).

Calculating the [General Ledger Recharge Rate ](<https://www.finops.org/wg/finops-kpis/?prod_kpis%5BrefinementList%5D%5Bcapabilities.title%5D%5B0%5D=Invoicing%20%26%20Chargeback#modal-kpi-9663>)should show 100% recharge rate.  
Specifically, this integration occurs when the cloud spend recorded in cloud cost management tools, whether Cloud Service Provider (CSP) native, third-party SaaS, or a custom built solution, aligns with accounting records (aka General Ledger).

This playbook is not a definitive guide to stipulate what metric is correct for an organization. Rather, it provides recommendations on how to execute cloud financial management governance. Nor does this playbook give guidance on how to re-allocate shared costs or cross charge related products, cost centers, domains, business units or departments.

This playbook covers plays for Amazon Web Service (AWS), Google Cloud (GCP), Oracle Cloud Infrastructure (OCI) and Azure.

### Who Should Use this Playbook

Any individual/team that is responsible for charging back the cloud costs through to the organization’s accounting process and system (i.e., General Ledger).

## Prerequisites

Access to the CSP cost management native tools e.g. AWS Billing and Cost Management or any third-party cloud cost management tool or custom built solution and access to or visibility into accounting records (aka General Ledger).

Note: Please refer to the[ FOCUS](<https://focus.finops.org/>) standards to import consistent invoicing and data from multiple CSP

The FinOps Practitioner must be enabled with the ability to coordinate with the Finance team to facilitate the integration of cloud cost data with the accounting process and system.

The FinOps Practitioner should be familiar with the organizations cost dataset either unblended costs, amortized costs or blended cost. To help you decide the view please refer to [Understanding your AWS Cost Datasets: A Cheat Sheet](<https://aws.amazon.com/blogs/aws-cloud-financial-management/understanding-your-aws-cost-datasets-a-cheat-sheet/>)

### Who needs to be involved:

  * Driver: The FinOps Practitioner/team is responsible for validating that cloud costs are complete and accurate, are allocated based on established policy, and ensure these values are charged back through the accounting system (application)*. 
    * Note: *Finance will be responsibility of recording chargeback amounts into the accounting system

  * Contributor: Again, Finance are responsible for recording chargeback amounts in the accounting system. Finance may provide direct access to the accounting system so the FinOps Practitioner/team can monitor the chargeback process through the accounting system (application).

### Information and resources required:

This section provides information that contributes to the success of this Playbook; the information here may include specific datasources, reports or any relevant input

#### Information

  * AWS > Billing and Cost Management > Cost Summary > Month-to-date cost
  * AWS > Billing and Cost Management > Cost Explorer > New cost and usage report
  * Google Cloud > Billing > Billing account overview > Cost breakdown
  * Oracle Cloud Infrastructure (OCI) > Billing and Cost Management > Cost Analysis
  * Azure > Cost Management + Billing > Cost Analysis

#### Tools, Utilities & Templates

Links to useful information in reference to this playbook.

  * [AWS > Analyzing your costs with AWS Cost Explorer](<https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html>)
  * [GCP > Cloud Costs](<https://www.cloudskillsboost.google/course_templates/775>)
  * [Oracle OCI > Billing and Cost Management Overview](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/billingoverview.htm>)
  * [Azure > Solutions > FinOps on Azure](<https://azure.microsoft.com/en-us/solutions/finops>)
  * [Microsoft > Learn > Azure > Cost Management > FinOps](<http://learn.microsoft.com/en-us/azure/cost-management-billing/finops/capabilities-allocation>)

## Instructions for running this Play on AWS, GCP, Azure & OCI

### Step 1 – Prep – 10 minutes

  * FinOps Practitioner personna will need to access the billing and cost management module within the cloud console. Workout the cloud cost for the designated time period, typically one month correlating to the Cloud bill/invoice.
  * The default time period would be a calendar month such as 1st December to 31st December. However, depending upon your organization, the time period could be based on the financial accounting period e.g. 27th November to 24th December.
  * Make a note of the total costs** and usage value for the given time period e.g. $72,184.58 (see Exceptions and Considerations section).

**As an organization you can view your total costs dataset as unblended costs, amortized costs or blended costs. Unblended costs represent your costs on a cash basis of accounting whereas amortized costs represent your costs on an accrual basis. To help you decide the view please refer to the following [AWS Documentation](<https://aws.amazon.com/blogs/aws-cloud-financial-management/understanding-your-aws-cost-datasets-a-cheat-sheet/>).

**Note:** majority of organizations use the unblended cost dataset.

### Step 2 – Calculation – 10 minutes

This activity is about verifying the amount of cloud spend value posted to the Finance accounting system (aka General Ledger). This is undertaken by the FinOps Practitioner persona if they have access to the accounting system (aka General Ledger) or by Finance persona.

If these steps are to be undertaken by the Finance personna, then the FinOps Practitioner will need to coordinate with the Finance personna by providing the total costs and usage value for the given time period, e.g. $72,184.58. This amount will be verified to the amount posted to the accounting system (aka General Ledger) for the given time period.

Within the accounting system, perform a query on the account code (nominal code) or perform a Journal inquiry to obtain the amount posted. Make a note of the amount posted to the accounting system e.g. $72,184.58.

Using the two values captured from the cloud console & the accounting system work out the General Ledger Recharge Rate.

Total Cloud Spend recorded as a journal in the accounting system / Total cloud spend for the month in AWS X 100%.

_e.g. $72,184.58 / $72,184.58 x 100% = 100% charge to the accounting system._

**Note:** For the above example, this illustrates that there is zero difference between cloud spend in cloud service provider vs. accounting system.

## Outcomes and Indicators of Success

This playbook should be run on a monthly basis (see [Functional Activity](<https://www.finops.org/framework/capabilities/chargeback/>)) to ensure that all cloud total costs and usage values are posted to the accounting system (aka General Ledger) for the given time period.

It can also be run based on the accounting period e.g. 27th November to 24th December, where organization reports outside of the calendar monthly accounting periods.

The indicator of success is when there is zero difference between cloud spend in cloud service provider vs. accounting system.

If the difference between cloud spend in cloud service provider vs. accounting system is not zero, then this implies that not all or too much cloud cost and usage value has been posted to the accounting system. This needs further investigation as to why. A corrective action in the accounting system is the most likely outcome.

### Primary Outcomes of running this playbook

  * As a defined outcome, the end user is able to determine if the total cloud spend recorded as a journal in the accounting system is equal to total cloud spend for the same time period in CSP records (AWS, Google Cloud, Azure or Oracle Cloud Infrastructure etc). There should be zero difference between cloud spend in cloud service provider vs. accounting system. Total cloud spend recorded as a journal in the finance accounting system / Total cloud spend for the month in Oracle cloud Infrastructure X 100%
  * If there is a difference between cloud spend in cloud service provider vs. accounting system i.e. the [General Ledger Recharge Rate](<https://www.finops.org/wg/finops-kpis/?prod_kpis%5BrefinementList%5D%5Bcapabilities.title%5D%5B0%5D=Invoicing%20%26%20Chargeback#modal-kpi-9663>) is not 100% then this need to be investigated further. Some possible creative actions: 
    * Speak to the individual(s) who posted the cloud spend value to the Finance accounting system (aka General Ledger), to understand how the process was undertaken and where the source data used to create the posting came from.
    * Re-generate the cloud cost within the CSP cost management tool for the relevant time period. To ensure that the value of the cloud costs has not changed for the same time period, to when it was run previously.
    * Ensure that there are no new additional filters within the CSP cost management tool, skewing the cloud cost results for the specified time period.

### Exceptions and Considerations

Depending upon the operating & reporting currency that your organization uses to record financial transactions in, you may have to convert the cost and usage value to your reporting currency.

_e.g. if you operate and report in the UK, the cost and usage value of $72,184,58 for December would need to converted to GBP £ Sterling, using an currency exchange rate from Treasury or Finance team such as (USD to GBP 0.79354) £57,281.35._

Proceed then to the accounting system and query on the account code (nominal code) or perform a Journal inquiry should be sufficient to obtain the amount posted. Make a note of the amount posted to the accounting system e.g. £57,281.35.

Using the two values captured from the cloud console & the accounting system work out the General Ledger Recharge Rate.

Total cloud spend recorded as a journal in the accounting system / Total cloud spend for the month in AWS X 100%.

_e.g. £57,281.35 / £57,281.35 x 100% = 100% charge to the accounting system._

## Related Resources

  * General Ledger Recharge Rate Per Cost Center

### Related FinOps Resources and Framework Capabilities

  * [Chargeback & Finance Integration](<https://www.finops.org/framework/capabilities/chargeback/>)

## Acknowledgments

We’d like to thank the following people for their help with this Playbook:

[ ![Jag Sodhi](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jag Sodhi Wm Morrisons Supermarket ](<https://www.linkedin.com/in/jagjitsinghsodhi/>)

We’d also like to thank our supporters, Laura Mills, David Lambert, Taylor Houck, Brian D’Altilio, and James Gambit.

Last updated: March 17, 2026

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions for All Clouds](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Related Resources](<#related-resources>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ Invoicing & Chargeback ](<https://www.finops.org/framework/capabilities/invoicing-chargeback/>)
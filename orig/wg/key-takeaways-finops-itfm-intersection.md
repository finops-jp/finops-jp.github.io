# Key Takeaways: How FinOps & ITFM Are Intersecting

**Summary:** Build a permanent bridge between FinOps and ITFM through a dedicated role, joint review cadence, or structured data exchange, and standardize a minimum set of shared fields so both functions can connect operational and financial data without manual reconciliation. Classify new cost categories like AI at contract time with attribution logic in place before the first invoice arrives, so your organization governs emerging spend proactively rather than chasing it after the fact.

## Table of Contents

  * [Disciplines Run in Parallel: FinOps & ITFM](<#disciplines-run-in-parallel>)
  * [Consumption-based Billing Drives Alignment](<#consumption-based-billing-drives-alignment>)
  * [Five Points of FinOps and ITFM Alignment](<#five-points-of-finops-and-itfm-alignment>)
  * [Common Success Factors Observed in Organizations with Effective Collaboration](<#common-success-factors>)
  * [Complementary Mandates, One Trusted View of Technology Cost & Value](<#trusted-view-of-technology-cost-value>)
  * [Acknowledgments](<#acknowledgments>)

FinOps, IT Financial Management (ITFM), and related vendor-specific disciplines have different goals, stakeholders, and operating cadences. Alignment concentrates at five intersection points: Savings Recognition, Chargeback & Showback Design, Budget & Forecast Alignment, Variance Decomposition, and Tagging and Terminology Alignment.

Organizations in this research that recognized these as complementary functions and designed explicit processes at each intersection point reported fewer coordination failures and greater confidence in shared financial data. Together, they better position the organization to maximize technology investment value and proactively govern existing and emerging consumption-based spend across all technology categories.

Read the full research and all intersection points within the full Paper, _[How FinOps& ITFM Are Intersecting](<https://www.finops.org/wg/finops-itfm-intersection>)._

**_Reader Note:_** This paper examines how organizations with established FinOps and ITFM functions are bringing the two disciplines together in practice. Based on primary interviews conducted between March and April 2026 with practitioners and organizational leaders across a range of industries, sizes, and maturity levels, it highlights distinct functional goals, common intersection points, integration barriers, and success factors observed across different operating models. The examples are intended to be adapted, not adopted wholesale, allowing organizations to tailor the approaches to their own structure, maturity, industry requirements, and technology spend complexity.

## Disciplines Run in Parallel: FinOps & ITFM

_FinOps is driven from Engineering, and ITFM often originates from Finance._

Most organizations with both a FinOps function and an ITFM function are running them in parallel rather than together. FinOps provides real-time cost intelligence, helping Engineering, Product, and Leadership understand and make informed decisions on cost, usage, and business value across technology spend. ITFM maturity varies across organizations, from cost center budgeting, chargeback, and monthly financial reporting for Finance and the Business, to more mature service- and product-oriented practices that provide end-to-end cost transparency and Total Cost of Ownership across the IT portfolio. ITFM typically operates through financial actuals and reporting cycles, supporting decision-making, value management, and optimization, often at a higher level of financial abstraction to the resources driving the spend.

Both are performing their core function, but maturity determines how well they connect.

  * FinOps delivers cost intelligence at the speed of consumption.
  * ITFM delivers financial governance at the pace of the financial cycle.

Where processes and ownership are not shared at key intersections, each can form its own view of the same underlying data, creating conditions for competing financial narratives and interpretations. These differences are often driven by timing, granularity, and data-model choices rather than conflicting intent. In less mature organizations, this can create confusion for senior leaders, weaken confidence in reported savings, complicate period-close variance explanations, and reduce trust in technology cost and value. In more mature organizations, shared dashboards, clear handoffs, and agreed review cadences help reconcile these views into a more trusted financial narrative.

_“If an organization draws a hard wall and says FinOps belongs to operations while ITFM belongs to finance, that is effectively a design for failure.”_

— A technology finance leader at a global manufacturing organization

![FinOps x ITFM intersection diagram ](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20968%20559'%3E%3C/svg%3E)

## Consumption-based Billing Drives Alignment

Increasing amounts of technology spend is no longer predictable. Public cloud mainstreamed consumption-based billing, shifting enterprise IT costs toward minute-by-minute accrual shaped by engineering decisions rather than procurement cycles. The same shift is now spreading across On-Premise Private Cloud, SaaS, Data Cloud Platforms and AI.

AI is the clearest current example. Depending on how an organization has architected its AI services, the same business activity can drive costs across cloud compute, SaaS contracts, enterprise software agreements, and on-premises infrastructure. These costs are not always directly linked in the general ledger, and mature organizations often rely on cost models that blend financial and operational data to connect them.

For boards and executives scrutinizing AI investment returns, the governance question is whether FinOps and ITFM have the shared data, cost models, attribution logic, and ownership needed to explain the full cost and value of AI services.

_“There are two distinct data problems. First: token costs buried inside cloud bills, those are isolatable with effort. Second: token costs embedded in software licenses; the license fee doesn’t itemize the AI usage component. We’re having to work through: where are all those licenses that have a usage component? How much is it actually costing us? And how much do we think it’s growing?”_

— A senior technology finance executive at a fortune 50 organization

The organizations that establish a working model between FinOps and ITFM before AI spend scales will govern it from the first invoice. Those that have not are dealing with unattributed spend, disputed ownership, and reactive reconciliation that cloud cost created, at a greater scale, and are trying to course-correct.

_“The data hierarchy for AI should be established at contract time. Separate line items for token cost versus license cost, flowing through to accounts payable and into a tracking system. So that this analysis takes days, not months.”_

— A senior technology finance executive at a telecommunications company

### Vendor-Specific Implementations of ITFM

Technology Business Management (TBM) also appears in several organizations interviewed, primarily related to its use as a cost taxonomy and allocation methodology, and most commonly implemented through specific vendor platforms.

## Five Points of FinOps and ITFM Alignment

The research identified five recurring intersection points where FinOps and ITFM most often meet. In organizations managing these intersections effectively, each has defined ownership, a clear handoff process, and a minimum set of shared data.

  * [**Savings Recognition**](<https://www.finops.org/wg/how-finops-itfm-are-intersecting/#savings-recognition/>) — FinOps generates cost efficiency leading to more value; ITFM must formally recognize them in the cost base. Without this, cost reductions exist only in FinOps reports and are invisible to Finance and the business.
  * [**Chargeback and Showback Design**](<https://www.finops.org/wg/how-finops-itfm-are-intersecting/#chargeback-and-showback-design>) — FinOps designs the attribution logic and provides showback for immediate visibility; ITFM refines these at longer intervals for finance grade entries and chargeback. Financial reporting may reflect minor variances within defined tolerance levels, accepting a degree of calculation drift in exchange for increased operational velocity.
  * [**Budget and Forecast Alignment**](<https://www.finops.org/wg/how-finops-itfm-are-intersecting/#budget-and-forecast-alignment>)— Forecasting practices vary by maturity. Where FinOps provides rolling or periodically updated consumption forecasts, ITFM can translate them into budget commitments for Finance. With coordination, forecasts align earlier, variance is easier to explain, and close becomes more predictable.
  * [**Variance Decomposition**](<https://www.finops.org/wg/how-finops-itfm-are-intersecting/#variance-decomposition>) — When costs deviate from plan, FinOps and ITFM both need to explain price versus volume drivers to different Personas at different speeds. FinOps brings the operational consumption view, while ITFM connects those drivers to financial reporting cycles, and ledger impacts. Without a shared model, the same variance can produce different explanations across functions.
  * [**Terminology and Tagging Alignment**](<https://www.finops.org/wg/how-finops-itfm-are-intersecting/#terminology-and-tagging-alignment>)— Disconnected tagging forces manual reconciliation and weakens financial governance integrity. Aligned tagging connects real-time cost decisions to trusted post-close financial reporting.

![FinOps x ITFM intersection diagram with defined ownership boundaries](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20960%20533'%3E%3C/svg%3E)

Across these intersections, organizations should define a minimum set of shared data fields that allow FinOps, ITFM, and operational data to connect with as little manual reconciliation as possible. The minimum set commonly includes:

  * Cost Center
  * Service/ Product
  * Application
  * Legal Entity
  * Environment
  * Project Identifier
  * Owner

Organizations that have standardized these against the [FOCUS](<http://focus.finops.org>) (FinOps Open Cost and Usage Specification) report significantly reduced reconciliation overhead.

## Common Success Factors Observed in Organizations with Effective Collaboration

The research identified four common factors in organizations that had moved beyond parallel activity toward more structured collaboration. In each case, the factor was observable as a consistent practice rather than a one-time initiative.

  * **A permanent bridge exists** — a dedicated role, joint operational review, or structured data handoff that holds accountability for the relationship. The form varies; what is consistent is its existence and permanence.
  * **Established common terminology and enforce tagging at deployment** – Common terminology is agreed and tagging is treated as a deployment control, with untagged resources blocked before release rather than reconciled after.
  * **A forecast-sharing cadence is defined between FinOps and ITFM** — weekly, monthly, pre-close, or ad-hoc, giving ITFM the context to explain variance proactively rather than reactively.
  * **New cost categories are classified at contract time** — with attribution fields and cost identification established before the first invoice arrives, using a suitable mechanism that the organization’s financial architecture supports. AI is the current forcing function; the practice applies to every new category that scales faster than existing financial governance.

## Complementary Mandates of Technology Cost & Value

As technology pricing continues to shift toward consumption, across Cloud, SaaS, AI, Data Cloud Platforms, Licenses, and any categories that follow, organizations with a working model in place are governing new cost categories from the first invoice rather than chasing them retrospectively. Those without one are more likely to face the same cycle of unattributed spend, competing reports, and reactive reconciliation that this research documents, repeating with each new category that scales faster than the financial governance built to manage it.

## Acknowledgments

We’d like to thank the following people for their work on this Paper:

[ ![Janine Pickard-Green](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Janine Pickard-Green MagicOrange ](<https://www.linkedin.com/in/pickardgreenj/>) [ ![Thom Bailey](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Thom Bailey MagicOrange ](<https://www.linkedin.com/in/thombailey/>) [ ![Nan Braun](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Nan Braun Thavron Solutions ](<https://www.linkedin.com/in/nanbraun/>) [ ![Kezanne Riley](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kezanne Riley Thavron Solutions ](<https://www.linkedin.com/in/kezanne-riley/>) [ ![Robert Mischianti](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Robert Mischianti Nicus Software ](<https://www.linkedin.com/in/robert-mischianti-a3bb251/>) [ ![Trevor Quesenberry](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Trevor Quesenberry Nicus Software ](<https://www.linkedin.com/in/trevor-quesenberry/>) [ ![Amod Bhise](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amod Bhise ServiceNow ](<https://www.linkedin.com/in/amodbhise/>) [ ![Michael Rentschler](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Michael Rentschler Yarken ](<https://www.linkedin.com/in/mrentschler/>) [ ![Fabian Mieloch](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Fabian Mieloch SERVICEWARE ](<https://www.linkedin.com/in/fabian-mieloch/>) [ ![Matt Temple](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Matt Temple IBM ](<https://www.linkedin.com/in/mattrtemple/>) [ ![Eugene Khvostov](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Eugene Khvostov Apptio, an IBM Company ](<https://www.linkedin.com/in/eugenekhvostov/>) [ ![Mike Eisenstein](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Mike Eisenstein Accenture ](<https://www.linkedin.com/in/mike-eisenstein/>) [ ![Kristen DeStefano](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kristen DeStefano Deloitte Consulting ](<https://www.linkedin.com/in/kristen-destefano-4ab084b4/>) [ ![Michelle Dupuis](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Michelle Dupuis Walgreens ](<https://linkedin.com/in/michelle-dupuis-37490a3>)

Last updated: June 4, 2026

## Table of Contents

  * [Disciplines Run in Parallel: FinOps & ITFM](<#disciplines-run-in-parallel>)
  * [Consumption-based Billing Drives Alignment](<#consumption-based-billing-drives-alignment>)
  * [Five Points of FinOps and ITFM Alignment](<#five-points-of-finops-and-itfm-alignment>)
  * [Common Success Factors Observed in Organizations with Effective Collaboration](<#common-success-factors>)
  * [Complementary Mandates, One Trusted View of Technology Cost & Value](<#trusted-view-of-technology-cost-value>)
  * [Acknowledgments](<#acknowledgments>)

###### [Learn the fundamentals Level up your knowledge with FinOps Certified Practitioner Get started  ![Learn the fundamentals](https://www.finops.org/wp-content/uploads/2025/12/certified-practitioner.svg) ](<https://learn.finops.org/path/finops-certified-practitioner-self-paced>)

##### Related FinOps Capabilities

[ Intersecting Disciplines ](<https://www.finops.org/framework/capabilities/intersecting-disciplines/>)
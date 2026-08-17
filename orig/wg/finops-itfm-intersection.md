# How FinOps & ITFM Are Intersecting

**Summary:** Understand FinOps and ITFM intersection points to build a permanent bridge between the two functions. Enable joint tactics like enforcing tagging at deployment rather than reconciling it after, and establish a pre-close data handoff so ITFM shapes the financial narrative before Finance asks. Classify every new consumption category, starting with AI, at contract time with attribution fields defined before the first invoice hits.

## Table of Contents

  * [Disciplines Run in Parallel: FinOps & ITFM](<#disciplines-run-in-parallel-finops-itfm>)
  * [FinOps Is Consistently Defined, ITFM Is Not](<#finops-is-consistently-defined-itfm-is-not>)
  * [What Is ITFM In Practice?](<#what-is-itfm-in-practice>)
  * [FinOps & ITFM: Complementary Disciplines](<#finops-itfm-complementary-disciplines>)
  * [The Tension Is Real _and Productive_](<#the-tension-is-real-and-productive>)
  * [The Intersection Points That Determine Whether Both Functions Deliver](<#the-intersection-points-that-determine-whether-both-functions-deliver>)
  * [Best Practices to Align FinOps and ITFM](<#best-practices-to-align-finops-and-itfm>)
  * [Goal: Complementary Mandates, One Trusted View of Technology Cost & Value](<#goal-complementary-mandates-one-trusted-view-of-technology-cost-value>)
  * [Acknowledgments](<#acknowledgments>)

FinOps, IT Financial Management (ITFM), and related vendor-specific disciplines have different goals, stakeholders, and operating cadences. Alignment concentrates at five intersection points: Savings Recognition, Chargeback & Showback Design, Budget & Forecast Alignment, Variance Decomposition, and Tagging and Terminology Alignment.

Organizations in this research that recognized these as complementary functions and designed explicit processes at each intersection point reported fewer coordination failures and greater confidence in shared financial data. Together, they better position the organization to maximize technology investment value and proactively govern existing and emerging consumption-based spend across all technology categories.

_

**Reader Note:** This paper examines how organizations with established FinOps and IT Financial Management (ITFM) functions are bringing the two disciplines together in practice. Based on primary interviews conducted between March and April 2026 with practitioners and organizational leaders across a range of industries, sizes, and maturity levels, it highlights distinct functional goals, common intersection points, integration barriers, and success factors observed across different operating models. The examples are intended to be adapted, not adopted wholesale, allowing organizations to tailor the approaches to their own structure, maturity, industry requirements, and technology spend complexity.

_

## Disciplines Run in Parallel: FinOps & ITFM

_FinOps is driven from Engineering, while ITFM often originates from Finance._

FinOps emerged because Public Cloud accelerated a cost management problem that existing financial practices were not designed to solve at the same speed and granularity.

Usage-based technology costs were not new to most. Many organizations had managed mainframe and other consumption-linked services. What changed with Public Cloud was the scale, pace, granularity, and distribution of operational control. Compute, storage, network, and managed service costs could change continuously within a fiscal period, driven not only by Procurement decisions but also by engineering choices made by developers and platform teams in real time.

Traditional IT Finance analysis when mature could often explain what had been spent, what drove it, and who was accountable. The challenge was timing and actionability. In an environment where services, usage patterns, and configurations can change many times before month-end, retrospective analysis was often too late to support timely optimization. FinOps developed as the organizational response to that faster, more distributed, and more dynamic consumption environment. What we consistently heard across the interviews confirms this.

> _“FinOps has been about creating the transparency layer—getting the right people to the table to make decisions and influence change.”_

— A Finance Business Partner in Higher Education

**ITFM serves a different but equally essential purpose: financial accountability and governance across the full technology estate.**

The practitioners interviewed describe their ITFM functions as the discipline of managing and accounting for technology costs across budgeting, forecasting, variance analysis, and the financial record, designed for predictable, period-based costs. Data center contracts renew annually. Hardware depreciates on a fixed schedule. Perpetual licenses carry a known rate Finance can model months in advance.

> _“There are three things we do: actuals against budget on a monthly and quarterly basis; rolling forecasting; and the financial validation of investment decisions and business cases.”_

— An IT Financial Manager at a utilities organization

Across the interviews conducted for this paper, we heard multiple variations of this same description, different industries, different tools, different organizational structures, but a consistent focus on financial accuracy, period-based reporting, and budget accountability as the primary outputs of the ITFM function.

Where FinOps and ITFM have historically operated in parallel rather than in collaboration, it is rarely because their goals conflict. It is because they deliver different outputs, to different audiences, at different cadences. FinOps produces real-time intelligence for Engineering, Product, Leadership, and other Personas across the organization to act on. ITFM produces period-accurate reporting for Finance and the Business to plan from, make future decisions on and account against.

## FinOps Is Consistently Defined, ITFM Is Not

In the majority of organizations interviewed, FinOps has a clear goal, and a recognized set of capabilities. Regardless of industry, organization size, or geography, it was understood what FinOps is, what it does, and where it sits.

ITFM did not seem to have that same consistency. This is not a criticism of the discipline. It is a finding, and one that practitioners in both functions need to understand before they can design an effective working model between them.

**ITFM Is Not Finance (The Distinction Matters)**

One boundary the interviews surface repeatedly is the difference between corporate Finance, or FP&A, and ITFM. These are different functions with different scopes, different audiences, and different relationships to technology cost.

Corporate Finance and FP&A operate at the business level. They manage the organization’s P&L, balance sheet, and financial planning cycles. Technology costs are one input into their work, a line item they must account for, not a domain they are equipped to interrogate at an operational level.

> _“Finance only wants the number. You tell me the number, I’ll put it in the book.”_

— A FinOps practitioner who built a dedicated financial operations function at a global technology company

That is not a failure of Finance, it is the edge of its role. ITFM sits between Finance and IT. Its job is to translate technology costs into financial structures that Finance can report against, and to translate financial constraints into investment requirements that technology leaders can act on.

## What is ITFM in Practice?

Gartner’s Market Guide for IT Financial Management Tools characterizes ITFM as the practice of providing technology cost transparency and accountability, encompassing budgeting, forecasting, variance analysis, and cost optimization across the IT estate.¹

In principle, this definition resonates with practitioners we interviewed. In practice, it does not consistently describe what most organizations have built. Across the interviews conducted for this paper, we found no consistent use of the term “ITFM” as a self-label. The function appears as:

  * IT Finance
  * Financial Operations
  * Business Finance Management
  * Technology Finance and Controlling
  * Technology or IT Finance Partners

### Vendor-Specific Implementations of ITFM

Technology Business Management (TBM) also appears in several organizations interviewed, primarily related to its use as a cost taxonomy and allocation methodology, and most commonly implemented through specific vendor platforms.

In several cases ITFM does not exist as a distinct entity at all, its activities are either absorbed by FinOps, handled informally within corporate Finance, or simply not performed.

> _“There was no ITFM. We requested that a bridge be created between FinOps and Finance because Finance couldn’t answer the questions that were coming in.”_

— A FinOps practitioner at a global technology organization

The scope of the function varies as significantly as its name. Some ITFM functions own only technology budget tracking. Others manage the full technology cost estate, including labor costs, hardware depreciation, facilities, software licensing, and the aggregated outputs of FinOps. Reporting lines vary from CFO to CIO to CTO, and in some organizations the function operates across all three in a matrix structure.

The interviews suggest that this inconsistency creates a practical problem. When FinOps and ITFM practitioners sit down to design a working model, they frequently discover they are starting from different assumptions about what ITFM does, who it serves, and what authority it holds. The interviews suggest that resolving this gap early, rather than treating it as something that resolves itself over time is what distinguishes operating models that work from those that remain transactional.

> _“They [TBM] speak about unit economics, and I speak about unit economics, and I say it’s not the same thing. We work at another granularity. Their [deepest] granularity is compute.”_

— A FinOps practitioner at a global retail organization

## FinOps & ITFM: Complementary Disciplines

FinOps and IT Financial Management (ITFM) are distinct disciplines that must collaborate when both exist. They have distinct goals, audiences, and operating speeds.

### FinOps Delivers Financial Intelligence at the Speed of Consumption

FinOps operates on near real-time cost and usage data. Its primary output is cost attribution at the granularity of a workload, a query, a data pipeline, or a token, connected to the engineer or team that generated it, and available before the behavior it reflects has time to compound. The discipline is built around a specific insight that consumption-based billing exposed: by the time a monthly financial report describes a cost, the decisions that drove it have already been made. Changing financial outcomes, and increasing value, requires changing behavior, and changing behavior requires visibility at the point where decisions are actually made.

> _“FinOps is a direct, real-time process. We don’t create rates; we charge you what you spend.”_

— A Senior FinOps Leader at a FTSE 100 financial services organization

> _“The conversation has shifted from a blame game to a hand-in-hand approach—finance helping teams make better decisions.”_

— A finance business partner in a higher education institution

The value of FinOps is in connecting technical decisions to their financial consequences, and enabling the organization to make informed trade-offs between performance, scale, and spend.

### ITFM Delivers Financial Governance at the Pace of the Financial Cycle

ITFM operates monthly, aligned to budget periods, ledger close, and the reporting cadences that Finance and the business depend on. Its primary output is financial accuracy: budget versus actuals, TCO models, cost allocation across the full technology estate, and the journal entries that make technology costs visible in the organization’s official financial record.

> _“The CIO uses the term ‘CFO of IT’ to describe what this function does—financial accountability, budget management, and making sure the numbers that go to Finance are ones we can stand behind.”_

— A senior IT finance leader at a Fortune 500 organization

We heard consistent variations of this framing across the interviews: ITFM as the financial authority for technology spend, accountable for accuracy in ways that FinOps, operating at speed and with near-real-time data is not primarily there to provide.

ITFM’s primary outputs serve Finance, providing the period-accurate reporting, budget accountability, and GL-aligned cost data that Finance depends on. Where the function organizationally sits varies: some ITFM teams report to the CFO, others to the CIO, and several operate in a matrix across both. ITFM’s value when it exists is in ensuring that the full technology cost estate, fixed and variable, capital and operational, labor and infrastructure is accurately attributed, formally accounted for, and available for the financial planning and reporting that corporate Finance and Business Leadership requires.

## The Tension Is Real _and Productive_

We are seeing from some interviews a tension between financial precision and decision-making speed. However it is also clear, when managed through clearly defined processes and shared data, is not a dysfunction. It is what makes the two functions complementary. FinOps surfaces what is happening now. ITFM accounts for what happened during this period. Together they provide the forward-looking visibility and period-accurate governance that neither delivers alone.

FinOps was built for consumption-based technology costs, but organizations are also identifying a second reason why FinOps teams benefit from access to broader financial data. Informing Technology Strategy and Architectural decisions, for example, the cost models and unit economics of whether to run a workload on Public Cloud or a On-Premise Data Center, whether to build or buy, whether to consolidate or distribute infrastructure, all require a financially comparable view across all options simultaneously. Cloud compute costs, data center overhead, and the labor to manage each must be weighed against each other for the trade-off to be meaningful.

> _“If our COO wants to know the cost of cloud versus the cost of an on-premises private cloud, from his perspective, that sits with FinOps. He doesn’t care whether it comes from the TBM side of the team or the FinOps side—he just says: that’s FinOps, go and solve that problem for me, and come back with an answer.”_

— A senior FinOps leader at a financial services organization

**The expansion of consumption-based pricing in Technology Categories beyond Public Cloud requires more alignment between the disciplines.**

Public cloud established the consumption-based billing model. What we are now seeing from the interviews is that this model is no longer exclusive to Cloud. SaaS platforms that once charged per seat increasingly charge per transaction, per gigabyte stored, or per outcome delivered. Data platforms bill on credits consumed. Managed services price on usage, not capacity.

> _“Microsoft are blurring the lines in what used to be a very clear-cut split—M365 is your colleague-facing technology stack, Azure is your engineering-facing technology stack. That’s getting increasingly blurry and difficult to manage.”_

— A FinOps Lead at a financial services organization on Cloud and SaaS pricing models converging

AI adds further complexity. AI costs can appear simultaneously across Cloud, SaaS contracts, enterprise software agreements, and On-Premises infrastructure, in the same organization, on the same invoice date, depending entirely on the architecture in place. Because AI spend is now a board-level priority across nearly every industry, it is further making visible any gaps in how the two functions share data, align their cost categories, and divide financial responsibility.

> _“There are two distinct data problems. First: token costs buried inside cloud bills, those are isolatable with effort. Second: token costs embedded in software licenses, for example, AI productivity tools bundled into an enterprise productivity suite, the license fee doesn’t itemize the AI usage component. We’re having to work through: where are all those licenses that have a usage component? How much is it actually costing us? And how much do we think it’s growing?”_

— A senior technology finance executive at a Fortune 50 organization

Beyond visibility, AI is changing how ITFM and FinOps classify, fund, and govern technology spend. As AI becomes embedded in customer-facing products and revenue models, mature organizations are moving from treating AI only as general IT overhead to managing it as part of product economics, with direct links to cost of revenue, margin, and business value. Some organizations have already demonstrated this shift by classifying material AI costs against revenue-generating products rather than absorbing them into broad IT budgets. As adoption scales, new AI demand cannot simply be funded through larger budgets.

### Navigating the Transition to a Successful Intersection

We are seeing from the interviews two patterns emerging:

  1. Organizations where FinOps teams are still at the stage of managing only Public Cloud Spend
  2. Organizations where FinOps teams have expanded beyond Public Cloud to manage consumption-based spend and support executive decisions on technology value across the wider technology estate.

They are asking a a specific question: at what points must FinOps and ITFM work together, what data must flow between them, and who is responsible for what? That is the question this paper is designed to answer.

## The Intersection Points That Determine Whether Both Functions Deliver

FinOps and ITFM alignment concentrates at a small number of well-defined operational points where data, decisions, and accountability must pass between the two functions. Organizations in this research that have built more effective working models describe one consistent approach: designing explicit, agreed processes at each of these points. Where those processes exist, practitioners report stronger attribution quality, fewer reconciliation disputes, and greater confidence in shared reporting. Where they do not, organizations produce parallel reports, disputed savings figures, and financial narratives that contradict each other at the moment they matter most.

Five intersection points emerge consistently from the interviews. Each requires defined ownership, a clear handoff process, and a minimum set of shared data.

### 1\. Savings Recognition

FinOps generates savings by supporting decisions to rightsize, decommission resources, make commitment purchases, and improve workload efficiency. A saving that exists only in a FinOps report does not reduce a budget. Until FinOps-identified savings are formally recognized in ITFM’s cost base, they remain invisible to Finance and to the business leaders whose investment decisions made them possible.

_

A Cloud Business Office leader at a global wealth management firm described a tension that appeared consistently across the research: both functions can develop a strong sense that they hold the authoritative voice on savings reporting. Without explicitly defined roles and a shared vocabulary for how savings are categorized, validated, and recognized, that tension rarely resolves on its own.

_

Agreement was reached on three things before the first optimization report was published: how savings are categorized – cost avoidance versus cost reduction, who validates the calculation, and which function formally removes the saving from the forward budget. FinOps quantifies and categorizes. ITFM validates and formally recognizes. Finance confirms this against the budget. Without that sequence, the same saving is claimed twice, counted once, or lost entirely.

_Minimum data required:_

  * Savings amount and type (cost avoidance vs. cost reduction)
  * Affected cost category and time period
  * Cost center or service against which the saving is recognized in ITFM’s cost model

### 2\. Chargeback and Showback Design

FinOps designs the attribution model, the logic by which consumption connects to the business units, cost centers, products, or teams that generated it. ITFM executes the chargeback, posting journal entries to the general ledger and managing the financial consequences for each recipient. These are two distinct activities, and organizations that conflate them create an accountability gap.

> _“In the RACI model, we are accountable and responsible for the data and the logic supporting the chargeback. They are accountable and responsible for the chargeback itself.”_

— A FinOps leader at a global retail organization

The progression from showback to chargeback is where this intersection becomes most demanding. Showback requires accurate attribution data. Chargeback requires that data reconciled against the general ledger, validated within the financial close cycle, and defensible to the business units receiving the charge. FinOps provides the data precision; ITFM provides the financial authority. This distinction is most visible on consumption-based technology spend, where the granularity and real-time nature of FinOps data provides a level of attribution precision that ITFM’s periodic processes are not designed to match. It differs on other types of technology spend, and is where clear ownership is to be agreed and synchronized upfront.

_Minimum data required:_

  * Cost center or organizational hierarchy code
  * Service/ Product
  * Application
  * Consumption period and cost amount
  * Allocation methodology applied, agreed between FinOps and ITFM before any chargeback is communicated to the business

### 3\. Budget and Forecast Alignment

Mature FinOps practices produce forward-looking consumption forecasts that are rolling, grounded in real usage patterns, and adjusted as Product and Engineering roadmaps evolve. ITFM requires a budget-period forecast to commit to Finance. The misalignment between these two operating rhythms was highlighted, FinOps working at consumption speed, ITFM working to the financial calendar.

The solution shared is not a structural change to either function’s cadence, but a defined pre-close data handoff: FinOps providing ITFM with consumption trend data, projected period-end actuals, and identified variance drivers at a fixed point before close, giving ITFM the context to build its financial narrative before Finance asks the question. Where this works well, FinOps and ITFM align on a shared forecast that gives Finance full transparency across a realistic range: the baseline trajectory if current consumption patterns continue, alongside what is achievable if specific planned optimization actions are executed. Finance, ITFM, and Engineering work from the same picture, the difference is not what data each receives, but which levers each is responsible for pulling.

> _“We take the real-time consumption view to help define and validate what the future budget looks like”_

— A FinOps practitioner at a FTSE 100 financial services organization

ITFM then presents Finance with a budget range it can defend, rather than a single figure with unexplained variance built in.

_Minimum data required:_

  * Projected consumption by cost category and time period
  * Assumptions underpinning the forecast
  * Planned engineering actions or changes driving any variance from current trend

### 4\. Variance Decomposition

When technology costs deviate from plan, both functions face the same question from Finance: what changed, and why? FinOps must explain variance at the level of workloads, pricing movements, and consumption patterns. ITFM must translate that explanation into budget and ledger terms that Finance can act on. Without a shared decomposition model, the same cost event produces different narratives from the different functions, and Finance is left to reconcile them.

> _“We have to be able to say: your price went up but your volume went down. We have to be able to tell that story—because if we can’t, Finance and the business cannot make a decision about what to do next.”_

— A senior FinOps leader at a FTSE 100 financial services organization

The interviews surface this as a recurring consequence of the two functions operating without agreed definitions. In one case described, the ITFM income statement and the Finance income statement diverged for several months before the root cause was identified, not bad data, but different cost bucketing logic applied independently by each function to the same underlying costs.

_Minimum data required:_

  * Price component and volume component of any variance
  * Attribution of each to planned or unplanned activity
  * Shared between FinOps and ITFM before period close, not produced independently after it

### 5\. Terminology and Tagging Alignment

This is the foundational intersection that makes all others possible. If FinOps tags resources using a service hierarchy that does not map to ITFM’s cost structure, every allocation, every showback report, and every chargeback reconciliation downstream requires manual intervention. At scale, this is not overhead—it is a barrier.

The organizations in this research who felt they had a mature FinOps-ITFM integration shared one characteristic: they agreed on shared terminology and enforced tagging standards before building any reporting or allocation model on top of them. The strongest governance model identified across the interviews is enforcement at the point of deployment—tagging as an access control, not a recommendation. This shifts tagging compliance from a retroactive audit activity to a baseline operational technology standard, eliminating the unallocated spend that consistently undermines the credibility of both functions’ reports.

The interviews suggest this strategy works better when it accounts for not only FinOps operational needs, but also the metadata and categorization requirements of Finance systems downstream. Categorizing costs based on capitalization eligibility, research & development spending, and other spending that may get different treatment by Finance is key.

> _“A lot of OpEx costs used to be CapEx, like on-premise licenses, now become SaaS… when they implement the project, they need to know what part of Cloud can be treated as CapEx.”_

— An IT Finance Manager at a government-owned utilities organization

**Minimum data required (across all five intersection points)**

Six shared identifiers appear in every mature FinOps-ITFM operating model in this research:

  * Cost center or organizational hierarchy
  * Application or service identifier
  * Legal entity
  * Environment (production, development, test)
  * Project identifier
  * Owner

Under different names in different systems, these six fields are the join keys that connect FinOps and ITFM data without manual reconciliation. Organizations that have standardized these fields against the [FinOps Open Cost and Usage Specification (FOCUS)](<https://focus.finops.org/focus-columns/>) standard report significantly reduced reconciliation overhead when feeding ITFM cost models—FOCUS provides a vendor-neutral schema for consumption-based cost data that maps directly onto each identifier, enabling clean data flows without transformation.

### AI Across All Five Intersection Points

AI spend, appearing across cloud compute, SaaS contracts, enterprise agreements, and on-premises infrastructure simultaneously, makes each of these five intersection points more complex. The organizations best positioned to govern AI costs are those that established AI as a distinguishable, attributable cost dimension at the point of contract or procurement, before consumption scales. This does not prescribe a single mechanism, whether cost center, internal order, ITFM tool dimension, or contract clause requiring itemized vendor data, but it does require that AI costs can be identified, attributed, and reported separately from the first invoice, whatever the financial architecture in place.

> _“The data hierarchy for AI should be established at contract time—separate line items for token cost versus license cost, flowing through to accounts payable and into a tracking system. So that this analysis takes days, not months.”_

— A senior technology finance executive at a Fortune 50 organization

Establishing these five intersection points and the minimum shared data required at each is considerably less costly when done proactively. AI spend makes that case in terms that boards and executive teams are now paying close attention to.

## Best Practices to Align FinOps and ITFM

The research identified four common factors in organizations that had moved beyond parallel activity toward more structured collaboration. In each case, the factor was observable as a consistent practice rather than a one-time initiative.

### 1\. Establish a Bridge Between the Two Functions (and Make It Permanent)

The strongest examples from the interviews show that effective FinOps and ITFM alignment is consistently associated with a defined connection between the two functions. When clear accountability, process, or a shared forum spans both domains, coordination becomes proactive rather than reactive. Teams are better able to resolve questions before they become reconciliation issues, disputed reports, or Finance escalations that neither function can answer independently.

Organizations that work well have designed an explicit bridge between the two functions. This may take the form of a dedicated role accountable to both domains, a joint operational review with a defined cadence, or a structured data handoff process with agreed owners on each side.

> _“If an organization draws a hard wall and says FinOps belongs to operations while ITFM belongs to finance, that is effectively a design for failure.”_

— A technology finance leader at a global manufacturing organization

A large regional bank, for example, built a shared BI application where FinOps owns the backend billing data and ITFM owns the frontend executive chargeback presentation. The organization reports this approach provides a shared source of figures and has reduced the need for each function to produce separate views independently.

The interviews suggest that the form of the bridge matters less than its existence. What is consistent across organizations that operate effectively is that someone owns the relationship between FinOps and ITFM, understands both perspectives, and maintains visibility across the shared terminology, data, process, and decision points.

### 2\. Agree on the Common Terminology and Shared Identifiers First (Then Enforce it at Deployment)

Organizations that describe lower reconciliation overhead consistently describe agreeing on a shared foundation before building cost reporting models. They define a shared service dictionary, cost hierarchy, and minimum identifiers, then build reporting models on top of that agreement. This creates a common language across FinOps and ITFM, reduces disputed figures, and allows both functions to spend more time on analysis, decision support, and value conversations.

> _“Allocation becomes partly manual and partly interpretive, pick-and-choose logic instead of automation.”_

— A technology finance leader at a global manufacturing organization, on the consequence of misaligned terminology and shared identifiers

The same pattern applies to tagging. Organizations with stronger attribution quality treat tagging as an operational control, not a recommendation. Where tagging is encouraged, coverage remains inconsistent. Where tagging is enforced at deployment, ownership, allocation, and reporting become more reliable.

> _“You can’t deploy without them. We validate on a quarterly basis.”_

— A FinOps leader at a global technology and media organization, on tagging enforcement at deployment gates

The shift from aspirational to enforced tagging strengthens reporting credibility for both functions. It reduces unallocated spend, lowers reconciliation effort, and gives Finance, technology, and business leaders greater confidence in the numbers used to govern technology investment.

### 3\. Provide FinOps Forecast Data to ITFM Ahead of Period Close (Not After it)

Organizations with stronger FinOps and ITFM alignment use a defined pre-close data handoff to improve forecasting and financial close. At a fixed point before close, FinOps provides ITFM with consumption trends, projected period-end actuals, and known variance drivers. This gives ITFM the context to shape the financial narrative before Finance asks the question, reducing surprises and improving confidence in the numbers.

> _“Budgeting used to be stressful. Now it’s a smooth-running machine, we try to get ahead of it so nothing is a surprise.”_

— A senior FinOps leader at a global technology and media organization

In the organizations where this is in place, practitioners describe the relationship shifting from reactive explanation to proactive financial management. FinOps brings the near-real-time consumption signal, while ITFM translates that signal into the period view Finance needs for close, variance analysis, and decision support.

Organizations with stronger FinOps and ITFM alignment use a defined pre-close data handoff to improve forecasting and financial close. At a fixed point before close, FinOps provides ITFM with consumption trends, projected period-end actuals, and known variance drivers. This gives ITFM the context to shape the financial narrative before Finance asks the question, reducing surprises and improving confidence in the numbers.

### 4\. Classify New Consumption Categories at the Point of Contract (Not After Spend Scales)

Organizations with stronger FinOps and ITFM alignment make classification decisions at procurement, before costs enter the financial system. They define the general ledger account type, cost category, service mapping, and attribution fields as part of the contract and purchasing process. This gives both functions a consistent structure before the first invoice arrives.

This early classification is becoming more important as artificial intelligence scales. AI costs can appear across multiple technology categories at the same time, depending on the architecture, commercial model, and delivery path. Organizations that have classified early and agreed data structures at contract describe having a clearer basis for reporting, forecasting, and governing technology investment as spend scales.

## Goal: Complementary Mandates of Technology Cost & Value

FinOps delivers real-time financial intelligence at the speed that consumption-based technology demands. ITFM delivers period-accurate governance at the rigor that Finance and the business require. These are complementary mandates.

As technology pricing continues to shift toward consumption, across Cloud, SaaS, AI, Data Cloud Platforms, Licenses, and any categories that follow, organizations with a working model in place are better positioned to govern new cost categories from the first invoice rather than chase them retrospectively. Those without it will face the same cycle of unattributed spend, competing reports, and reactive reconciliation that this research documents, repeating with each new category that scales faster than the financial governance built to manage it.

## Acknowledgments

We’d like to thank the following people for their work on this Paper:

[ ![Janine Pickard-Green](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Janine Pickard-Green MagicOrange ](<https://www.linkedin.com/in/pickardgreenj/>) [ ![Thom Bailey](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Thom Bailey MagicOrange ](<https://www.linkedin.com/in/thombailey/>) [ ![Nan Braun](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Nan Braun Thavron Solutions ](<https://www.linkedin.com/in/nanbraun/>) [ ![Kezanne Riley](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kezanne Riley Thavron Solutions ](<https://www.linkedin.com/in/kezanne-riley/>) [ ![Robert Mischianti](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Robert Mischianti Nicus Software ](<https://www.linkedin.com/in/robert-mischianti-a3bb251/>) [ ![Trevor Quesenberry](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Trevor Quesenberry Nicus Software ](<https://www.linkedin.com/in/trevor-quesenberry/>) [ ![Amod Bhise](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amod Bhise ServiceNow ](<https://www.linkedin.com/in/amodbhise/>) [ ![Michael Rentschler](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Michael Rentschler Yarken ](<https://www.linkedin.com/in/mrentschler/>) [ ![Fabian Mieloch](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Fabian Mieloch SERVICEWARE ](<https://www.linkedin.com/in/fabian-mieloch/>) [ ![Matt Temple](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Matt Temple IBM ](<https://www.linkedin.com/in/mattrtemple/>) [ ![Eugene Khvostov](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Eugene Khvostov Apptio, an IBM Company ](<https://www.linkedin.com/in/eugenekhvostov/>) [ ![Mike Eisenstein](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Mike Eisenstein Accenture ](<https://www.linkedin.com/in/mike-eisenstein/>) [ ![Kristen DeStefano](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kristen DeStefano Deloitte Consulting ](<https://www.linkedin.com/in/kristen-destefano-4ab084b4/>) [ ![Michelle Dupuis](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Michelle Dupuis Walgreens ](<https://linkedin.com/in/michelle-dupuis-37490a3>)

Last updated: June 4, 2026

## Table of Contents

  * [Disciplines Run in Parallel: FinOps & ITFM](<#disciplines-run-in-parallel-finops-itfm>)
  * [FinOps Is Consistently Defined, ITFM Is Not](<#finops-is-consistently-defined-itfm-is-not>)
  * [What Is ITFM In Practice?](<#what-is-itfm-in-practice>)
  * [FinOps & ITFM: Complementary Disciplines](<#finops-itfm-complementary-disciplines>)
  * [The Tension Is Real _and Productive_](<#the-tension-is-real-and-productive>)
  * [The Intersection Points That Determine Whether Both Functions Deliver](<#the-intersection-points-that-determine-whether-both-functions-deliver>)
  * [Best Practices to Align FinOps and ITFM](<#best-practices-to-align-finops-and-itfm>)
  * [Goal: Complementary Mandates, One Trusted View of Technology Cost & Value](<#goal-complementary-mandates-one-trusted-view-of-technology-cost-value>)
  * [Acknowledgments](<#acknowledgments>)

###### [Learn the fundamentals Level up your knowledge with FinOps Certified Practitioner Get started  ![Learn the fundamentals](https://www.finops.org/wp-content/uploads/2025/12/certified-practitioner.svg) ](<https://learn.finops.org/path/finops-certified-practitioner-self-paced>)

##### Related FinOps Capabilities

[ Intersecting Disciplines ](<https://www.finops.org/framework/capabilities/intersecting-disciplines/>)
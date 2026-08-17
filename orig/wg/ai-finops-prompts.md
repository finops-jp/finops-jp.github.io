# AI for FinOps Fundamentals: Use Cases and Prompt Practices

**Summary:** Adapt example prompts along with context requirements, customization guidance, and indicators of success to apply AI effectively across optimization, reporting, forecasting, allocation, and governance workflows. Select use cases that match your organization’s FinOps maturity level and available data, then adapt the prompts with your own thresholds, scopes, and stakeholder audiences to get actionable, context-rich AI outputs.

## Table of Contents

  * [Executive Summary](<#executive-summary>)
  * [AI for FinOps Use Cases and Prompts](<#ai-for-finops-use-cases-and-prompts>)
  * [Building AI for FinOps Fundamentals](<#building-ai-for-finops-fundamentals>)
  * [Key Concepts](<#key-concepts>)
  * [Prompt Best Practices and Considerations](<#general-prompt-best-practices-and-considerations>)
  * [Related FinOps Resources](<#related-finops-resources>)
  * [Acknowledgements](<#acknowledgements>)

## Executive Summary

AI is accelerating the analysis, pattern recognition, and communication tasks that consume the bulk of Practitioner time. A key insight from practitioners already using [AI for FinOps](<https://www.finops.org/topic/ai-for-finops/>) is that context quality matters more than prompt wording. Connecting AI to real data through integrations, structured exports, or even copy-pasted reports consistently outperforms refining prompt language in isolation. Every use case in this collection reflects that principle: the Context field is as important as the Prompt field, and the Customization Notes explain how to adapt each entry to your organization’s data maturity, tooling, and stakeholder needs.

AI assistance in FinOps falls into four modes of increasing complexity: Inform and Explain, Analyze and Detect, Recommend, and Act and Automate. This resource focuses on the first three, which are accessible today using general-purpose AI tools. Organizations at Crawl maturity will find the most immediate value in Inform and Explain use cases. Walk-stage organizations can introduce analytical and recommendation prompts with human validation. Run-stage organizations may extend these patterns into agentic workflows, but human-in-the-loop oversight remains essential for any action with financial consequences.

The [Tokenomics Foundation](<https://www.tokeneconomics.com>) will be a key reference for diving deeper into the details of generation, use, and value of tokens and all of their corresponding cost drivers as time goes on. FinOps will still manage, report, and allocate that value to the organization.

These use cases are starting points and works in progress, not finished solutions. [Adapt the prompts](<#ai-for-finops-use-cases-and-prompts>) with your own requirements, and treat every AI output as a draft to validate against primary sources before acting on it.

## AI for FinOps Use Cases and Prompts

### Use Case Structure

Each use case entry is structured with the following fields.

#### Prompt Title and Use Case Description

  * **Use Case Description** : _A practitioner-facing description of the use case; what problems are we trying to solve?_
  * **FinOps Capability:**_The_[ _FinOps Framework Capabilities_](<http://finops.org/framework>) _this entry is mapped to_
  * **FinOps Persona(s):**_The_[ _FinOps Persona(s)_](<http://finops.org/framework>)_most likely to use this entry_
  * **AI Assistance Mode:**_The type of AI assistance being applied (Inform, Analyze, Recommend, or Act)_
  * **Expected Outcome:**_What should Practitioners expect as output/results?_
  * **Context:**_What data, information, or system access to gather before running the prompt?_
  * **Prompt:**_The prompt in the context of the referenced Capability and Use Case_
  * **Customization Notes:**_Guidance on adapting the prompt for different environments, tools, and constraints_
  * **Indicators of Success:**_Evaluating the AI output quality in the context of expected FinOps outcomes_

### Identify Optimization Opportunities from a Resource Utilization Report

Engineering and FinOps teams frequently have access to utilization reports but lack the time or bandwidth to systematically interpret them for optimization opportunities. This use case helps FinOps Practitioners analyze utilization data and surface prioritized recommendations across rightsizing, scheduling, and elimination candidates.

**FinOps Capability:** Usage Optimization

**FinOps Personas:** FinOps Practitioner, Engineering

**AI Assistance Mode:** Analyze & detect, Recommend

#### Expected Outcome

A prioritized list of optimization opportunities, categorized by action type (rightsize, schedule, eliminate, investigate further), with estimated effort and potential impact where inferable from the data provided.

#### Context

Before running this prompt, gather the following:

  * A utilization report or summary (CPU, memory, storage, or equivalent metrics depending on the resource type)
  * The time period the report covers
  * Resource type and environment (e.g., virtual machines, containers, databases)
  * Any known business constraints (e.g., resources that must remain always-on, upcoming projects that will increase usage)

#### Prompt

I have a utilization report for the following resources and want to identify optimization opportunities. Here are the details:

  * Resource type: [e.g., virtual machines, RDS instances, on-prem servers]
  * Environment: [e.g., production, non-production, mixed]
  * Reporting period: [e.g., January 2025, 30-day average]
  * Utilization data: [paste report excerpt, table, or summary here]
  * Known constraints: [e.g., resource X must remain always-on; Project Y launches in Q2]

Please:

  1. Identify resources that appear to be candidates for rightsizing, scheduling, or elimination based on the utilization data
  2. Categorize each recommendation by action type and estimated impact (high / medium / low)
  3. Flag any resources where you need more information before making a recommendation
  4. Suggest what additional data would improve the quality of these recommendations

#### Customization Notes

Utilization thresholds for “low” vs “acceptable” vary by organization and workload type. Consider adding your own thresholds to the prompt (e.g., “we consider CPU utilization below 20% over 30 days as a rightsizing candidate”) to improve recommendation relevance.

#### Indicators of Success

  * Recommendations are categorized clearly and prioritized by potential impact
  * Constraints provided are respected in the output (i.e., constrained resources are not flagged for elimination)
  * The response surfaces follow-up questions that would meaningfully improve recommendation quality

### Identifying Data Quality Gaps in Cloud Cost and Usage Ingestion

FinOps teams rely on accurate, timely, and complete cloud cost and usage data to drive all downstream FinOps activities. When ingestion pipelines introduce delays, missing fields, inconsistent metadata, or schema drift, it becomes difficult for teams to trust reports, allocate spend, or identify optimization opportunities. This use case helps a FinOps Practitioner quickly surface data quality issues and understand their potential impact.

**FinOps Capability:**

  * Data Ingestion

**FinOps Persona:**

  * FinOps Practitioner

**AI Assistance Mode:** Analyze & detect, Recommend

#### Expected Outcome

A structured assessment of data ingestion quality issues, including identification of missing, inconsistent, or delayed data elements, prioritized by business impact. The output makes assumptions and limitations explicit, and gives the practitioner a clear signal on whether the dataset is ready for downstream FinOps activities.

#### Context

The AI system has access to the organization’s normalized FinOps dataset (e.g., cost and usage records, metadata, tags, account structures, business mappings). The dataset may include multiple clouds, business units, or ingestion sources. The Practitioner wants to validate data quality before using the dataset for reporting, forecasting, or optimization.

#### Prompt

You are assisting a FinOps Practitioner. Analyze the most recent cloud cost and usage data in our FinOps dataset for ingestion quality issues. Follow the structure and depth shown in the example below.

Goal

Identify data ingestion issues that could impact reporting, allocation, forecasting, anomaly detection, or optimization.

Audience

FinOps Practitioner with intermediate technical knowledge.

Format Requirements

Respond using the following sections:

  1. Summary (3 concise bullet points)
  2. Detected Issues (table with columns: Issue, Description, Impact, Severity)
  3. Recommended Next Steps (5 bullets, action‑oriented)
  4. Assumptions Made
  5. Limitations of This Analysis

Example Format to Follow

_Example only; do not reuse these findings:_

  * _Summary:_
    * _Data freshness lag detected in one ingestion source._
    * _Tag completeness below expected threshold for two business units._
    * _Schema drift observed in usage type field._

Evaluation Criteria

Before finalizing your answer:

  * Verify internal consistency of all numbers or counts.
  * Flag any assumptions you had to make due to missing or incomplete data.
  * Clearly separate facts from inferred observations.
  * Ensure recommendations are tooling and cloud‑agnostic and FinOps‑aligned. _(This is highly changeable based on the FinOps Practitioner’s environment and needs)_

Task

Using the structure above, analyze the dataset for:

  * Missing or null fields
  * Inconsistent metadata or tag patterns
  * Schema drift or unexpected field changes
  * Delays in data arrival
  * Any anomalies that may indicate ingestion pipeline issues

Prioritize issues based on potential business impact and provide actionable next steps.

#### Customization Notes

  * Adjust the time window to match your reporting cadence or the specific period under review. Shorter windows (last 24 hours) are appropriate for operational freshness checks; longer windows (current billing period) are appropriate for pre-reporting validation.
  * Specify the metadata fields and tag keys that matter most to your organization’s allocation and reporting logic. Generic checks will surface more findings but may lack the specificity needed to prioritize remediation.
  * Add your organization’s defined thresholds for freshness and completeness if available. Without thresholds, the AI will flag deviations from observed patterns rather than from defined standards, which is less precise.
  * If your environment includes multiple clouds, business units, or ingestion sources, specify which scope the analysis should focus on. Analyzing all sources together can obscure issues that are concentrated in one area.
  * At Walk or Run FinOps Maturity, this prompt can be fed structured exports from FinOps platforms or cloud billing APIs directly, reducing manual data preparation.

#### Indicators of Success

  * The AI output follows the required structure and format.
  * Findings are prioritized by business impact and clearly explained, with each issue connected to the downstream FinOps activity it would affect.
  * Recommendations are specific, actionable, cloud‑agnostic, and aligned with FinOps principle, not generic advice like “review tag coverage”.
  * Assumptions and limitations are explicitly stated, including where the AI lacked sufficient data to assess a dimension with confidence
  * The Practitioner can confidently determine whether the dataset is ready for downstream FinOps activities.

### Performing Reporting and Analytics to Understand and Manage Cost and Usage Data

Reporting, trend analysis, and surfacing meaningful cost changes, identifying drivers behind spend shifts, and delivering audience-appropriate insights across time periods (Ad-hoc, DoD, WoW, MoM, QoQ) to better understand and manage cost and usage data.

**FinOps Capability**

  * Reporting & Analytics
  * Allocation
  * Anomaly Management

**FinOps Persona**

  * FinOps Practitioner
  * Engineering
  * Finance
  * Leadership
  * Product (connecting cost to business value)

**AI Assistance Mode:** Inform & explain, Analyze & detect, Recommend

#### Expected Outcome

An analysis of cost changes across the selected time period, identifying the top drivers by usage type, API operation, linked account, and charge type, with plain-language explanations connecting usage pattern changes to cost outcomes. The output is structured for multiple audiences including detailed breakdowns for Engineering, variance summaries for Finance, and executive-ready narratives with business impact so each stakeholder receives an appropriately calibrated view of the same underlying data.

#### Context

  * Access to AWS Cost Explorer data (or equivalent cost/usage dataset) for the relevant account(s)
  * A defined baseline and comparison period matching the chosen granularity
  * Knowledge of the organizational account structure (linked accounts, cost centers, business units)
  * Understanding of active commitment instruments (Reserved Instances, Savings Plans) and any recent changes

#### Prompt

Analyze my cloud costs comparing [current period] to [previous period] and

  1. Identify the top 10 cost increases and decreases.
  2. For each, break down the drivers by: 
     1. usage type,
     2. API operation,
     3. linked account, and
     4. charge type.
  3. Explain what usage changes caused each cost shift in plain language.
  4. Provide three versions of the output: 
     1. a detailed engineering view with resource-level context,
     2. a finance summary with variance percentages and dollar impacts by cost center, and
     3. a two-paragraph executive summary highlighting business-relevant takeaways and recommended actions.

#### Customization Notes

  * Time period and granularity (WoW, MoM, DoD, QoQ) to match their reporting cadence
  * Account scope: specific payer account IDs, linked accounts, or business unit tags
  * “Top 10” threshold: adjust to top 5, top 20, etc. based on noise level
  * Dimension focus: replace or add dimensions like region, instance type, or cost allocation tags relevant to your org
  * Audience tiers: adjust the three output versions to match your actual stakeholders (e.g., drop engineering view if only finance needs it)
  * Currency and formatting preferences
  * Charge type categories relevant to your commitment portfolio (RI, SP, EDP, credits)

#### Indicators of Success

  * Cost drivers are traceable: each flagged change maps to a specific usage type, account, and charge type. Not just “Service X went up”
  * Explanations connect cause to effect: the output says why costs changed (e.g., “a new batch job in account 123456 drove a 40% increase in API invocations”) rather than just restating the numbers
  * Audience appropriateness: engineering output includes resource/operation detail, finance output includes variance % and dollar impact, executive output is jargon-free with actionable recommendations
  * No tool-specific dashboard references. Insights are portable and don’t assume the reader has access to a particular console or BI tool
  * Actionable next steps are included where cost changes suggest optimization opportunities

### Summarize and explain a cost anomaly for stakeholder communication

When an unexpected spike in technology spend is detected, practitioners often need to quickly understand what happened, assess its impact, and communicate clearly to Finance and Leadership stakeholders, often without deep technical context in the moment. This use case helps practitioners translate raw anomaly data into a clear, actionable narrative.

**FinOps Capabilities**

  * Anomaly Management
  * Reporting & Analytics
  * Allocation

**FinOps Persona**

  * FinOps Practitioner
  * Engineering
  * Finance
  * Leadership

**AI Assistance Mode:** Inform & explain, Recommend

#### Expected Outcome

A concise, plain-language summary of the anomaly including likely cause, financial impact, affected scope, and recommended next steps suitable for sharing with non-technical stakeholders.

#### Context

Before running this prompt, gather the following:

  * The anomaly details: service or resource type, time period, expected spend, actual spend
  * The affected account, project, team, or cost center
  * Any tagging or allocation metadata available
  * Known events that may have contributed: deployments, data loads, feature launches, team changes
  * Your organization’s threshold or policy for anomaly escalation

#### Prompt

I have detected a cost anomaly in our technology environment. Here are the details:

  * Service / Resource: [e.g. BigQuery, EC2, Azure SQL]
  * Time period: [e.g. 1–3 April 2026]
  * Expected spend: [e.g. $4,200]
  * Actual spend: [e.g. $11,800]
  * Affected team / cost center: [e.g. Data Engineering, Cost Center 4421]
  * Known contributing events: [e.g. new ETL pipeline deployed 28 March]
  * Tagging / allocation notes: [e.g. partially tagged, some spend unallocated]

Please:

  1. provide a plain-language summary of the anomaly suitable for a [Finance or Leadership] audience.
  2. Include the most likely contributing factors based on the information provided.
  3. Create a list of questions that I should use to investigate to confirm root cause and recommend next steps, including whether escalation is appropriate.

#### Customization Notes

  * Replace bracketed values with your organization’s specific data.
  * If your anomaly tooling exports structured data (CSV or JSON), paste it directly in place of the manual fields
  * Adjust the stakeholder Persona audience description to match the actual target Persona. The more specific you are, the more appropriately tone and terminology will be calibrated.
  * At Walk FinOps Maturity, this prompt can be fed outputs from automated anomaly detection tools to generate stakeholder communications at scale.

#### Indicators of Success

  * The summary is understandable to a non-technical Finance or Leadership reader without requiring FinOps specific terminology to be explained
  * Contributing factors align with known system activity and are plausible given the data provided
  * Recommended next steps are specific and actionable, not generic
  * The AI model indicates when the data that was provided is insufficient to draw confident conclusions

### Generate an Executive Summary from a FinOps Maturity Assessment

FinOps practitioners regularly conduct or review maturity assessments across Framework Capabilities. Translating assessment results into a clear, stakeholder-appropriate narrative that connects maturity gaps to business risk and investment priorities is time-consuming. This use case accelerates that translation.

**FinOps Capabilities**

  * Executive Strategy Alignment
  * FinOps Assessment

**FinOps Persona**

  * FinOps Practitioner
  * Leadership

**AI Assistance Mode:** Inform & explain, Recommend

#### Expected Outcome

A structured executive summary of current FinOps maturity state, including priority gaps, business implications, and recommended next steps framed for a Leadership or Finance audience.

#### Context

Before running this prompt, gather the following:

  * Your FinOps Maturity assessment results by Capability (Crawl / Walk / Run, or equivalent)
  * The priority Capabilities your organization has identified for the current [FinOps Scope ](<http://finops.org/framework/scopes>)
  * Relevant organizational context: planned growth, technology footprint, cost targets, recent anomalies
  * The audience for the summary: who will read it, and their familiarity with FinOps concepts

#### Prompt

I have completed a FinOps maturity assessment and need to produce an executive summary for [audience, e.g. CFO and VP of Engineering].

Here are our assessment results by Capability: [Paste or summarize your FinOps Maturity assessment results; e.g. Cost Allocation: Walk; Anomaly Management: Crawl; Workload Optimization: Walk]

Priority Capabilities for our current objectives: [e.g. Anomaly Management, Workload Optimization]Organizational context: [e.g. We are scaling our data platform significantly in 2026 and have recently added a SaaS portfolio not yet under FinOps management]

Audience: [e.g. CFO and VP of Engineering; familiar with cost management concepts but not FinOps-specific terminology]

Please draft a three paragraph executive summary of our current FinOps maturity state, that includes a short section on priority gaps and why they matter in the context of our organizational objectives. Include three to five recommended next steps, framed as business investments rather than technical tasks.

#### Customization Notes

  * The maturity ratings referenced here aligns to the FinOps [Framework Maturity Model ](<http://finops.org/framework/maturity-model>) (Crawl / Walk / Run). If your organization uses a different maturity scale, adjust the prompt and ask the model to map accordingly.
  * Adjust the audience description carefully. The more specific you are about who will read this, the more appropriately tone and terminology will be curated.
  * This prompt works well when combined with a copy of your assessment data in structured form (table or spreadsheet excerpt). Pasting raw data produces more specific output than a narrative summary alone.
  * For recurring quarterly assessments, the prompt can be adapted to generate a delta report comparing current to previous assessment results.

#### Indicators of Success

  * The executive summary avoids FinOps specific terminology that would be unfamiliar to the specified audience
  * Priority gaps are framed in terms of business risk or missed opportunity, not just operational shortcomings
  * Recommended next steps are specific enough to act on and sequenced logically
  * The narrative connects maturity gaps to the organizational context provided

### Assess Cloud Sustainability Implications and Support Carbon-aware Decision Making

When sustainability is a board-level priority, and ESG reporting requirements mature, FinOps practitioners are increasingly asked to account for the carbon footprint of cloud workloads alongside cost. This use case helps practitioners interpret usage and emissions data, identify carbon optimization opportunities, and communicate findings to sustainability and finance stakeholders.

Carbon allocation can be more complex than cost allocation. Regional emission factor variability means identical workloads in different regions carry materially different carbon footprints. Additionally, operational carbon (energy consumed during use) and embodied carbon (emissions from hardware manufacturing and disposal) require separate treatment. This prompt focuses on operational carbon, which is the dimension most directly addressable through FinOps practices. Embodied carbon and supply chain emissions require additional data sources beyond standard cloud billing.

**FinOps Capabilities**

  * Sustainability
  * Data Ingestion
  * KPIs & Benchmarking

**FinOps Persona**

  * Sustainability
  * FinOps Practitioner
  * Engineering
  * Leadership

**AI Assistance Mode:** Analyze & detect, Recommend

#### Expected Outcome

An analysis of cloud usage data through a sustainability lens, identifying regions, services, or workloads with disproportionate carbon impact, and surfacing recommendations for carbon-aware architecture and scheduling decisions.

#### Context

Before running this prompt, gather the following:

  * Cloud usage and spend data by region and service (a 30-day minimum is recommended)
  * Any available emissions data from cloud provider sustainability tooling (AWS Customer Carbon Footprint Tool, Google Carbon Footprint, Azure Emissions Impact Dashboard)
  * Your organization’s sustainability targets or ESG reporting requirements if applicable
  * Awareness of workloads that have flexibility in scheduling or regional placement

#### Prompt

I want to assess the carbon sustainability implications of our cloud usage and identify opportunities for improvement.

Use the following information for the assessment:

  * Cloud usage data (by region and service): [paste summary or table]
  * Emissions data: [paste or describe]
  * Sustainability targets: [e.g. net zero by 2030; Scope 2 reduction of 30% by 2027; or none defined]
  * Workload flexibility: [describe any workloads that can be scheduled flexibly or moved between regions]

Please:

  1. Identify the services and regions contributing most to our operational carbon footprint and highlight where regional emission factor variability is creating carbon inefficiency (same workload, lower-carbon region available).
  2. Recommend scheduling or architectural changes that would reduce carbon impact without significantly affecting cost or performance along with suggestions for how I can present these findings to sustainability or ESG stakeholders in terms they will find actionable.

#### Customization Notes

  * If your cloud provider’s carbon tooling is not yet connected, the AI can reason from regional energy mix data and usage patterns as a proxy. Note this assessment limitation in the prompt.
  * Regional emission factors change over time as energy grids evolve. Validate AI recommendations against current provider-published emission factor data rather than treating the AI’s regional knowledge as definitive.
  * For organizations with Scope 3 reporting requirements, note that this prompt addresses operational (Scope 2) emissions only. Embodied carbon analysis requires separate datasets and methodology.

#### Indicators of Success

  * Recommendations are region-specific and grounded in the usage data provided, not generic
  * The AI distinguishes between operational carbon (addressable through scheduling and region selection) and embodied carbon (not addressed by this prompt), avoiding conflation of the two carbon types
  * Carbon optimization recommendations are assessed for their cost impact. The AI does not recommend carbon reductions that would significantly increase spend without flagging the trade-off
  * The sustainability narrative is framed in terms an ESG or sustainability stakeholder would find credible, not just in FinOps or cloud cost terminology

### Analyze Budget Performance and Support Adaptive Budget Planning

FinOps teams are often asked to reconcile technology spend against budgets that were set using traditional fixed-cost assumptions, ones that do not reflect the variable consumption-based nature of cloud spend or the shared accountability model at the heart of FinOps practice. This use case helps FinOps Practitioners analyze budget performance across teams and workloads, and surface insights that connect spend to business value and operational goals.

**FinOps Capabilities**

  * Budgeting
  * Forecasting
  * Data Ingestion
  * Allocation

**FinOps Persona**

  * FinOps Practitioner
  * Finance
  * Leadership
  * Engineering

**AI Assistance Mode:** Inform & explain, Analyze & detect, Recommend

#### Expected Outcome

A budget performance analysis that identifies variances by team, workload, and cost center and explains the drivers behind them. Connects spend patterns to business activity and operational goals where context is available. Flags and recommends adjustments that align budget structure with actual consumption patterns and organizational priorities.

#### Context

Before running this prompt, gather the following:

  * Actual cloud spend by team, cost center, or business unit for the relevant period
  * Approved budget figures for the same period and granularity
  * Knowledge of any significant business events during the period e.g. product launches, seasonal campaigns, team expansions, or infrastructure changes
  * Understanding of which spend is discretionary vs. non-discretionary and which teams have shared accountability for shared services

#### Prompt

I need to analyze cloud budget performance for [period, e.g. Q1 2026] and prepare insights that will inform our next budget planning cycle.

Here is our spend and budget data:

  * Actual spend by team / cost center: [paste table or summary]
  * Approved budget by team / cost center: [paste table or summary]
  * Known business events during the period: [e.g. product launch in February, data platform migration in March]
  * Shared services or shared-accountability areas: [describe any spend that is pooled or allocated across teams]

Please:

  1. Identify the most material budget variances and explain the likely drivers behind each
  2. Distinguish between variances driven by business growth or activity vs. those likely driven by inefficiency or unexpected consumption
  3. Flag any budget lines where the original assumptions appear outdated or no longer fit the organization’s consumption patterns
  4. Recommend adjustments for the next budget cycle that reflect actual consumption patterns, shared accountability, and organizational priorities rather than simply rolling forward prior-period actuals
  5. Suggest how budget guardrails could be structured to remain adaptive to changes in consumption while still providing meaningful accountability

#### Customization Notes

  * Adjust the period granularity to match your budget cadence: monthly, quarterly, or annual analysis all work well with this prompt structure.
  * If your organization uses showback rather than chargeback, note this in the prompt so the AI frames recommendations appropriately.
  * The prompt is designed to surface business context, not just spend data. The more detail you provide about known business events, the more meaningfully the AI can distinguish legitimate variances from unexpected ones.
  * At Walk or Run FinOps Maturity, this prompt can be fed structured exports from FinOps platforms or cloud billing APIs directly, reducing manual data preparation.

#### Indicators of Success

  * Variances are tied to specific teams, cost centers, or services with plausible drivers, rather than generic statements like “Service X went up”
  * The AI explicitly distinguishes between variances driven by legitimate business growth or activity and those that appear to reflect inefficiency or unexpected consumption, rather than treating all variances uniformly
  * Recommendations for the next budget cycle reflect actual consumption patterns rather than simply rolling forward prior-period actuals
  * Adaptive guardrail suggestions are specific, with clear thresholds, review cadences, or accountability mechanisms, rather than abstract principles
  * Shared services and shared-accountability spend is handled distinctly from team-owned spend, rather than attributed solely to a single owner
  * The AI flags where data gaps or missing context limit confidence in its recommendations rather than filling those gaps with assumptions

### Monitor and Integrate Cloud Provider Announcements into FinOps Practice Operations

Cloud providers release new services, pricing changes, commitment instruments, and optimization features at a pace that outstrips most FinOps teams’ capacity to track, evaluate, and operationalize them. This gap means practitioners often discover relevant changes weeks or months after release missing windows for commitment adjustments, rate optimization, or early adoption of features that would benefit their organization. This use case helps FinOps Practitioners systematically monitor provider announcements and translate them into concrete actions for their FinOps practice.

**FinOps Capabilities**

  * FinOps Practice Operations
  * FinOps Education & Enablement
  * Rate Optimization
  * Forecasting

**FinOps Persona**

  * FinOps Practitioner
  * Engineering
  * Leadership

**AI Assistance Mode:** Inform & explain, Analyze & detect, Recommend

#### Expected Outcome

A summarized and prioritized view of recent cloud provider announcements relevant to the practitioner’s environment, with specific implications for current FinOps activities, including updating commitment strategy, revisiting rate optimization assumptions, or flagging new services pricing changes and/or deprecation of SKUs i.e. workloads/storage etc.

#### Context

Before running this prompt, gather the following:

  * The cloud providers you operate in and the list of services your organization actively uses
  * Your current commitment portfolio (Reserved Instances, Savings Plans, Committed Use Discounts, etc.) and upcoming renewal dates
  * Known priorities or initiatives like planned migrations, cost reduction targets, and sustainability goals that might be affected by provider changes
  * A source of recent announcements through official provider blogs, release notes, or aggregated feeds. At Walk or Run FinOps Maturity, this may be an automated feed; at Crawl FinOps Maturity, collecting a manual list of recent announcements from the past 30 days is sufficient.

#### Prompt

I need to review recent cloud provider announcements and translate them into actions for our FinOps practice.

Please use the following information:

  * List cloud providers and services used: [e.g. AWS compute, storage, databases, analytics; Azure compute and AI services; GCP analytics only, etc]
  * Current commitment portfolio: [e.g. 3-year Savings Plans covering 60% of compute; RIs expiring Q3 2026]
  * Active FinOps priorities: [e.g. reducing non-production spend by 20% this year; evaluating regional migration for sustainability]
  * Recent announcements to review: [paste list, links, or summaries from the past 30–90 days]

Filter the announcements to those relevant to our active services in use and FinOps priorities, and ignore announcements for services or regions we don’t use.

Additionally please:

  1. Categorise the relevant announcements by type: pricing change, new commitment option, new service or feature, deprecation or sunset, operational change
  2. For each relevant announcement, explain the specific implication for our environment, not just what the announcement says, but what it means for our commitment strategy, rate optimization, forecasts, or operational practices
  3. Prioritize the list by urgency: which items need action in the next 30 days, which warrant evaluation in the next quarter, and which are informational only
  4. Flag any announcements that may require coordination with Engineering, Procurement, or Leadership before action can be taken

#### Customization Notes

  * At Crawl FinOps Maturity, this prompt is typically run ad hoc with the Practitioner manually collecting announcements to run the prompt monthly or quarterly. At Walk and Run FinOps Maturity, organizations increasingly automate the collection step, feeding provider RSS feeds or release note APIs directly into the AI for continuous monitoring.
  * The level of implication detail depends heavily on the context provided. Without a clear picture of the current commitment portfolio and active priorities, the AI will default to generic ” _this might be relevant_ ” output. With specifics, it can say ” _your August 2026 RI renewal should be evaluated against this new Savings Plan structure._ “
  * Some announcements, particularly deprecations and operational changes, may have implications to areas beyond FinOps, like security, compliance, and engineering velocity. The prompt’s last item is designed to surface these [stakeholder Persona ](<http://finops.org/framework/personas>) handoffs rather than have the AI attempt to reason about them in isolation.
  * For organizations operating in multiple clouds, running the prompt once per provider produces cleaner output than attempting to analyze all providers in a single run.

#### Indicators of Success

  * The filtered announcement list reflects the list of services being used by your organization so the AI does not include announcements for services the organization doesn’t use
  * Implications are specific to the organization’s commitment portfolio and priorities, not generic restatements of the announcement content
  * Urgency prioritization distinguishes time-sensitive actions (pricing changes affecting active workloads, commitment renewals) from informational updates
  * Cross-functional handoffs are identified where relevant and the AI surfaces which items require Engineering, Procurement, or Leadership involvement rather than framing everything as a FinOps-only action
  * The AI flags where the announcement text is ambiguous or requires provider documentation review before a confident recommendation can be made

### Design a Shared Cost Allocation Methodology for Untagged and Shared Services

Shared costs are one of the most disputed and methodologically complex areas of a FinOps practice. Shared services (observability platforms, landing zones, networking), cross-team infrastructure (shared Kubernetes clusters, shared data platforms), pooled commitment benefits (RI and Savings Plans discounts), and untaggable charges such as enterprise support rarely have a direct consumer, yet they typically represent a significant share of total spend.

Selecting an allocation method that is fair, defensible, and operationally sustainable requires balancing competing constraints: predictability for Finance, transparency for Engineering, auditability for internal audit, and incentive alignment with the organization’s priorities. This use case helps a FinOps Practitioner design or redesign an allocation methodology for shared costs that is anchored to the organization’s tagging maturity, available consumption signals, and accountability model (showback or chargeback), rather than defaulting to a generic “proportional allocation” recommendation.

**FinOps Capability**

  * Allocation
  * FinOps Practice Operations
  * Invoicing & Chargeback

**FinOps Persona**

  * FinOps Practitioner
  * Finance
  * Leadership
  * Engineering

**AI Assistance Mode** : Inform & explain, Recommend

#### Expected Outcome

A structured allocation proposal covering each shared cost category, including a recommended method per category (even split, tiered, proportional by single signal, weighted multi-signal, or hybrid), a rationale tied to the organization’s tagging maturity and available consumption signals, a modelled impact on each consuming team or cost center, flagged trade-offs between predictability, fairness, auditability, and incentive alignment, an explicit handling of unattributable residual spend, and a draft narrative the Practitioner can adapt for stakeholder communication.

#### Context

Before running this prompt, gather the following:

  * An inventory of shared cost categories requiring allocation (e.g. shared observability platform, landing zone networking, shared Kubernetes cluster, pooled RI or Savings Plans discounts, enterprise support, cross-team data platform, shared SaaS licences) with total value and period per category
  * The candidate list of consumers to receive allocated cost (teams, cost centers, products, business units), including any that should be explicitly excluded
  * Consumption signals available per category and per consumer where measurable (CPU hours, API calls, storage GB, data processed, active users, headcount, revenue, engineering FTE)
  * Current tagging and attribution maturity (percentage of total spend allocated; tagging compliance rate; known tagging gaps)
  * Any existing allocation method in use and its known pain points or disputed areas
  * The accountability model in place or intended (showback, chargeback, or hybrid)
  * Stakeholder constraints: predictability requirements from Finance, transparency principles agreed with Engineering, auditability requirements from internal audit or regulators
  * Timing context: upcoming budget cycle, recent organizational changes, planned migrations, or new product launches that would affect the validity of historical consumption signals
  * The residual policy preference for unattributable spend (central absorption, even split, tiered split, or flagged for review)

#### Prompt

I need to design an allocation methodology for shared costs that are not directly attributable to a single consumer. Please use the following information:

  * Shared cost categories to allocate (name, total value, period): [paste list or table]
  * Candidate consumers (teams / cost centers / products / business units): [paste list]
  * Consumption signals available per category and per consumer: [paste table or describe gaps]
  * Current tagging and attribution maturity: [e.g. 72% of total spend allocated; mandatory tags enforced on 80% of resources; gaps concentrated in legacy accounts]
  * Existing allocation method, if any, and known pain points: [describe]
  * Accountability model: [showback / chargeback / hybrid]
  * Stakeholder constraints: [e.g. Finance requires predictable monthly splits; Engineering requires method transparency; internal audit requires documented rationale]
  * Timing context: [e.g. new budget cycle starting Q3 2026; recent reorganization creating three new cost centers]
  * Residual policy preference for unattributable spend: [central absorption / even split / tiered split / flagged for review]

Please:

  1. For each shared cost category, recommend an allocation method (even split, tiered, proportional by single signal, weighted multi-signal, or hybrid) with a rationale tied to the tagging maturity and consumption signals available. Do not apply the same method uniformly across categories where the data or context supports differentiation.
  2. Model the estimated impact of your recommended method on each consumer, using the consumption signals provided. Flag any consumer whose allocated share changes materially relative to the current method, where one exists.
  3. Surface the trade-offs of your recommended method explicitly for each category: predictability vs. fairness vs. auditability vs. incentive alignment.
  4. Flag categories where the available data is insufficient to recommend a method with confidence, and specify what additional data would remove that limitation. Do not fill data gaps with assumptions.
  5. Recommend how unattributable residual spend should be handled, consistent with the residual policy preference provided.
  6. Draft a short stakeholder narrative (one paragraph per audience: Finance, Engineering, Leadership) explaining the method and the behavior it is intended to incentivize.

#### Customization Notes

  * Shared cost categories vary widely across organizations. Replace the examples in the Context with the categories that are material to your environment. Allocation methodology is rarely one-size-fits-all, so resist the urge to collapse categories that behave differently.
  * Match the recommended method’s ambition to your FinOps Maturity. At Crawl Maturity, simpler methods (even split or tiered) and showback-only are appropriate. At Walk Maturity, proportional-by-usage methods become viable where tagging coverage supports them. At Run Maturity, multi-signal weighted methods with automated refresh become defensible but add operational overhead.
  * Physical tagging quality must precede any proportional or weighted allocation method. If your tagging maturity is below the threshold required for a given method, the AI output will overstate confidence. Treat the output as a draft to validate against actual tag coverage before applying it.
  * For organizations using FOCUS-aligned datasets, reference the standard charge categories in the Context to keep the output portable across clouds.
  * If your organization is transitioning from showback to chargeback, run the prompt twice: once for the showback model you want to establish first, and once for the chargeback model you intend to move to later. The methods that work for the two accountability models are not always the same.
  * At Walk or Run FinOps Maturity, the prompt can be fed structured exports from FinOps platforms or cloud billing APIs directly, reducing manual data preparation for the consumption signals.

#### Indicators of Success

  * Each shared cost category receives a recommended method with a rationale, rather than one method applied uniformly across all categories
  * Recommended methods are tied to the tagging maturity and consumption signals provided, not to an abstract best practice
  * Trade-offs between predictability, fairness, auditability, and incentive alignment are surfaced for each recommendation, not summarized at the end
  * The AI flags where data is insufficient rather than producing a recommendation that overstates confidence
  * Residual unattributable spend is handled explicitly, with a named destination and a stated rationale, rather than hidden inside a proportional split
  * The stakeholder narrative distinguishes between what the method does and the behavior it is intended to incentivize, and uses language appropriate to each audience
  * The output is portable and does not rely on a specific tool, BI platform, or provider-specific feature to be actionable

### Analyze Commitment Discount Portfolio and Identify Rate Optimization Opportunities and Potential Application of Autonomous Automation Capabilities

FinOps practitioners are responsible for managing an organization’s commitment discount portfolio including Reserved Instances, Savings Plans, Committed Use Discounts, and negotiated rate agreements across one or more cloud providers and increasingly across SaaS and data cloud platforms.

The portfolio’s effectiveness depends on continuous evaluation of utilization rates, coverage gaps, expiration timing, and alignment with evolving usage patterns. Under-committed organizations pay unnecessary on-demand premiums. Over-committed organizations carry waste from unused commitments that cannot be recovered. Both conditions erode the savings that commitment strategies are designed to deliver. Manual analysis of enterprise cloud estates can be very time consuming and overly conservative leading to missed maximum savings potential.

This use case helps FinOps Practitioners assess the current state of their commitment portfolio, quantify the effective savings rate, identify unused or underperforming commitments, identify manual commitment discount procurement cycles and lost savings opportunities attempting to hedge bets once monthly and surface coverage gaps where additional commitments would be cost-effective, and produce a prioritized action plan that promotes the adoption of (AI for FinOps) via autonomous automation of commitment discounts for upcoming renewals, planned usage changes, and organizational risk tolerance for commitment duration and payment terms.

**FinOps Capabilities**

  * Rate Optimization
  * Reporting & Analytics
  * Forecasting
  * Acquisition Planning and Integration

**FinOps Persona**

  * FinOps
  * Practitioner
  * Finance
  * Engineering
  * Procurement
  * Product/Demand Management

**AI Assistance Mode:** Analyze & detect, Recommend

#### Expected Outcome

A structured assessment of the organization’s commitment discount portfolio, including current utilization rates by commitment type and provider, the effective savings rate compared to on-demand equivalent spend, identification of unused or consistently underperforming commitments with root cause hypotheses, coverage gap analysis showing on-demand spend that would benefit from commitment coverage, a prioritized list of recommended actions (renew, modify, let expire, purchase new) sequenced by financial impact and urgency, and a risk assessment that distinguishes between high-confidence recommendations (stable, predictable workloads) and recommendations that carry uncertainty due to planned migrations, architectural changes, or usage volatility.

#### Context

Before running this prompt, gather the following:

  * Your current commitment discount inventory across all providers: 
    * Commitment type (RI, Savings Plan, CUD, or equivalent),
    * Term length,
    * Payment option (all upfront, partial upfront, no upfront),
    * Start date,
    * Expiration date,
    * Scope (account-level, organization-level, or resource-specific), and
    * Committed amount or units
    * Product Deployment Cycles/New Region Expansions
    * Customer demand for products, Migrations etc.
  * Utilization and coverage data for the most recent 30 to 90 days, ideally broken down by commitment type, service, and account or subaccount
  * On-demand spend not currently covered by any commitment, broken down by service and account or subaccount
  * The effective savings rate if available from your FinOps tooling or calculated from FOCUS data (comparing EffectiveCost against ListCost for commitment-eligible usage)
  * Upcoming commitment expirations within the next 90 to 180 days
  * Known changes to the usage baseline: planned migrations, workload decommissions, new product launches, or architectural changes (e.g. a migration from EC2 to Graviton, or from on-demand GPU instances to reserved AI accelerators)
  * Organizational constraints: risk tolerance for commitment term length (1-year vs. 3-year), payment term preferences (upfront vs. no upfront), approval thresholds for new purchases, and any Finance or Procurement policies governing commitment spend
  * Any provider-specific flexibility mechanisms in use (e.g. instance size flexibility for RIs, convertible vs. standard RIs, Savings Plan scope settings)
  * For organizations using FOCUS-aligned datasets: CommitmentDiscountId, CommitmentDiscountStatus, CommitmentDiscountCategory, CommitmentDiscountType, PricingCategory, ListCost, ContractedCost, EffectiveCost, and BilledCost columns provide the data foundation for this analysis

#### Prompt

I need to assess the health of our commitment discount portfolio and identify rate optimization opportunities. Please use the following information:

  * [paste table or summary with commitment type, term, payment option, start date, expiration date, scope, and committed amount per commitment] Utilization and coverage data:
  * [paste or describe utilization rates by commitment type, and coverage rates by service and account for the past 30-90 days] On-demand spend not covered by commitments:
  * [paste or describe by service and account or subaccount]
  * Current effective savings rate: [e.g. 18% overall; or state if unknown and provide ListCost and EffectiveCost totals for the AI to calculate]
  * Upcoming expirations: [list commitments expiring in the next 90-180 days]
  * Planned usage changes: [e.g. migrating 40 EC2 instances to Graviton in Q3; decommissioning legacy analytics cluster by August; launching new AI inference workload in Q4]
  * Organizational constraints: [e.g. Finance prefers no-upfront payment; maximum 1-year term unless CFO approval; minimum $50K annual savings to justify new purchase]
  * Flexibility mechanisms in use: [e.g. using convertible RIs on AWS; instance size flexibility enabled; Savings Plans scoped to organization]

Please:

  1. Calculate the portfolio-level effective savings rate and break it down by provider, commitment type, and service where the data supports it.
  2. Flag any segments where the effective savings rate is materially below the portfolio average and explain why.
  3. Identify commitments with utilization consistently below 80% over the analysis period.
  4. Identify workloads running on deprecated VM Family types and expiration date of commitments
  5. For each, assess whether the underutilization is likely structural (the workload has permanently changed) or temporary (seasonal pattern, migration in progress) and recommend whether to let expire, modify, exchange, or investigate further. Identify on-demand spend categories with stable, predictable usage patterns that are strong candidates for new commitment coverage.
  6. Estimate the potential savings from commitment coverage for each candidate using the rate differentials available in the data.
  7. Rank candidates by estimated annual savings.
  8. For commitments expiring in the next 90 to 180 days, recommend whether to renew at the same terms, renew with modifications (different commitment type, scope, term, or payment option), or let expire.
  9. For each renewal recommendation, explain the rationale in terms of usage trend stability and the impact of any planned usage changes.
  10. Surface trade-offs between spend-based commitments (Savings Plans) and resource-based commitments (RIs or CUDs) where both options are available.
  11. Explain the flexibility, savings rate, and risk implications of each option in the context of the organization’s planned usage changes and risk tolerance.
  12. Flag any recommendations where the confidence level is reduced by planned migrations, architectural changes, or insufficient data history, and specify what additional information would increase confidence before a purchase decision is made.
  13. Produce a prioritized action list sequenced by financial impact and urgency, distinguishing between actions needed in the next 30 days, within the next quarter, and longer-term portfolio adjustments.

#### Customization Notes

The commitment portfolio structure varies significantly across organizations and providers. Replace the examples in the Context with the actual commitment types, terms, and provider constructs relevant to your environment. AWS Savings Plans, Azure Reservations, and GCP Committed Use Discounts each have different flexibility and exchange rules that affect optimization recommendations. If the AI is not aware of current provider-specific rules, provide them in the context or ask the AI to flag where its knowledge of provider-specific mechanisms may be outdated.

Utilization and coverage thresholds for “healthy” vs. “underperforming” vary by organization. Consider adding your own thresholds to the prompt (e.g. “we consider utilization below 75% over 60 days as underperforming; we target 85% coverage on stable compute workloads”) to improve recommendation relevance.

At Crawl FinOps Maturity, start with a single provider and the largest commitment types (e.g. compute RIs or Savings Plans). The prompt can be narrowed to focus only on utilization assessment and upcoming renewals without attempting new purchase recommendations.

At Walk Maturity, expand to coverage gap analysis and cross-provider comparison.

At Run Maturity, feed structured FOCUS exports or FinOps platform data directly and add organizational risk policy constraints for automated scoring. For organizations with FOCUS-aligned datasets, this prompt maps directly to the FOCUS Use Case Library entries for “Identify unused commitments,” “Report commitment discount purchases,” “Determine Effective Savings Rate,” and “Identify unused capacity reservations.” Referencing CommitmentDiscountStatus (Used vs. Unused), PricingCategory (Committed vs. Standard vs. On-Demand), and the cost columns (ListCost, ContractedCost, EffectiveCost, BilledCost) keeps the analysis portable across providers.

For organizations with FOCUS 1.3 datasets, the new Contract Commitment dataset can be provided as additional context to map commitment terms, start and end dates, and remaining units directly alongside cost and usage data. This eliminates the need to manually compile a commitment inventory from provider consoles.

Rate optimization interacts with other FinOps Capabilities. Commitments made without considering Usage Optimization activities (rightsizing, scheduling, elimination) risk locking in spend on resources that should be changed or decommissioned.

If your organization is running Usage Optimization in parallel, note this in the prompt context so the AI can account for potential baseline changes in its commitment recommendations.

For multi-provider organizations, running the prompt once per provider produces cleaner, more actionable output than combining all providers in a single run. A follow-up prompt can then compare cross-provider strategy and total portfolio health.

#### Indicators of Success

  * The effective savings rate is calculated and segmented, not stated as a single portfolio-level number without breakdown.
  * Segments with materially different savings rates are flagged and explained.
  * Underutilized commitments are assessed individually with a hypothesis about whether the underutilization is structural or temporary, not simply listed with a recommendation to “review.”
  * New coverage recommendations are tied to specific on-demand spend categories with stable usage patterns, not generic advice to “increase commitment coverage.” Each recommendation includes an estimated savings amount based on the rate differentials in the data provided.
  * Renewal recommendations for expiring commitments reflect the impact of planned usage changes.
  * A commitment expiring before a planned migration is not recommended for 3-year renewal without flagging the risk.
  * Trade-offs between spend-based and resource-based commitment types are explained in terms the organization’s Finance and Procurement teams can evaluate, including flexibility, breakeven points, and risk exposure, not just “Savings Plans offer more flexibility.” Confidence levels are stated explicitly.
  * The AI distinguishes between high-confidence recommendations backed by stable usage history and lower-confidence recommendations affected by planned changes, data gaps, or short analysis windows. It does not fill uncertainty with assumptions.
  * The prioritized action list is sequenced by financial impact and urgency, with clear time horizons, not presented as an undifferentiated list of all possible optimizations.
  * The output is cloud-agnostic in structure and does not require the reader to have access to a specific provider console, BI tool, or FinOps platform to understand or act on the recommendations.

### Build and Validate a Technology Spend Forecast from Historical Usage and Planned Changes

Forecasting technology spend is one of the most frequently requested and most difficult FinOps activities. Finance and Leadership personas expect forecasts that are reliable enough to inform budgets, board conversations, and investment decisions. Engineering teams need forecasts that reflect the reality of variable, consumption-based pricing and accommodate planned changes to infrastructure and workloads. The gap between these expectations and what most organizations actually produce is typically a linear extrapolation of last month’s spend, or a manual spreadsheet maintained by one person.

This is where forecast accuracy breaks down and stakeholder trust erodes. This use case helps FinOps Practitioners build a structured, multi-input forecast that combines historical spend and usage trends with known business drivers, planned changes, and commitment portfolio effects. It explicitly surfaces uncertainty ranges rather than presenting a single-point estimate, and produces audience-appropriate outputs for Finance, Engineering, and Leadership stakeholders.

**FinOps Capabilities**

  * Forecasting
  * Reporting & Analytics
  * Budgeting
  * Rate Optimization

**FinOps Persona**

  * FinOps Practitioner
  * Finance
  * Engineering
  * Leadership
  * Product

**AI Assistance Mode:** Analyze & detect, Recommend

#### Expected Outcome

A structured spend forecast for the specified scope and time horizon, including a baseline projection derived from historical spend and usage trends with seasonality and growth patterns identified, adjustments for known planned changes (new workloads, migrations, decommissions, commitment renewals, pricing changes), a confidence range that distinguishes between high-confidence segments (stable, well-understood workloads) and lower-confidence segments (new services, volatile usage, AI or consumption-based platforms), identification of the assumptions underpinning each forecast segment so stakeholders can challenge or refine them, a comparison of the forecast against current budget targets with variance drivers explained, and scenario modeling showing how the forecast changes under alternate conditions (e.g. accelerated growth, delayed migration, commitment expiration without renewal).

#### Context

Before running this prompt, gather the following:

  * Historical spend data for the forecast scope (service, team, cost center, product, or business unit) covering a minimum of 3 months and ideally 6 to 12 months. More history enables better identification of seasonality and trend stability. Monthly granularity is the minimum; daily or weekly granularity improves accuracy for volatile workloads.
  * Historical usage data where available (compute hours, storage volume, API calls, data processed, active users) alongside cost data. Usage trends are more reliable forecast inputs than cost trends alone because they are not distorted by pricing changes, commitment discount fluctuations, or credit applications.
  * The current commitment discount portfolio and its effect on the cost baseline: which spend is covered by commitments, which commitments are expiring during the forecast period, and any planned commitment purchases.
  * Known planned changes during the forecast period: new product launches, workload migrations, infrastructure changes (e.g. moving from x86 to Graviton or ARM-based instances), team expansions or contractions, seasonal campaigns, data platform scaling, AI workload growth, or service decommissions.
  * Any known or announced provider pricing changes that will take effect during the forecast period.
  * The current budget for the forecast scope and period, so the forecast can be compared against budget targets.
  * The forecast time horizon and granularity requested by stakeholders (e.g. monthly forecast for the next 6 months; quarterly forecast for the next fiscal year).
  * Organizational context: whether the business is in a growth phase, cost reduction phase, or steady-state; whether there are executive mandates affecting spend trajectory (e.g. “reduce infrastructure cost by 15% by year-end” or “support 2x user growth without proportional cost increase”).
  * For organizations using FOCUS-aligned datasets: BilledCost, EffectiveCost, ListCost, ConsumedQuantity, PricingQuantity, PricingUnit, ServiceCategory, ServiceName, SubAccountName, and ChargeCategory columns provide the data foundation for historical trend analysis. The FOCUS Use Case Library entries for “Forecast amortized costs month over month based on historical trends,” “Forecast cashflow month over month based on historical trends by service,” “Get historical usage and rates to enable cost forecasting,” and “Calculate average rate of a component resource” map directly to the data preparation for this prompt.

#### Prompt

I need to build a technology spend forecast and want your help analyzing the historical data, incorporating planned changes, and producing a structured forecast with confidence ranges.

Please use the following information:

  * Forecast scope: [e.g. all cloud spend; Data Engineering team; production environment only; Snowflake platform]
  * Forecast time horizon: [e.g. next 6 months, monthly granularity; next fiscal year, quarterly granularity]
  * Historical spend data: [paste table or summary covering at least 3-6 months; include service, account/team, and time period breakdowns where available]
  * Historical usage data (if available): [paste or describe usage metrics alongside cost including compute hours, storage GB, API calls, data processed]
  * Current commitment portfolio affecting this scope: [e.g. Savings Plan covering 60% of compute expiring August 2026; 1-year RI on RDS renewed in January]
  * Known planned changes during the forecast period: [e.g. migrating analytics workload to Snowflake in Q3; launching new customer-facing product in September; decommissioning legacy data warehouse by October; scaling AI inference workload 3x by year-end]
  * Known pricing changes: [e.g. AWS announced 10% price reduction on GP3 storage effective July 2026; or none known]
  * Current budget for this scope: [paste budget figures for the forecast period]
  * Organizational context: [e.g. company is in a growth phase targeting 40% YoY user growth; or CFO has mandated 12% infrastructure cost reduction by end of fiscal year]

Please:

  1. Analyze the historical data to identify the underlying trend (growth, decline, or stable), any seasonal or cyclical patterns, and segments with notably different behavior. Separate cost trends from usage trends where both are available, and flag where cost changes were driven by pricing or commitment effects rather than actual usage changes.
  2. Build a baseline forecast by projecting historical trends forward for the requested time horizon. State the method used (e.g. linear trend, weighted moving average, growth rate extrapolation) and explain why it is appropriate for the data characteristics observed. Adjust the baseline for each known planned change, showing the estimated cost impact of each adjustment as a separate line item so stakeholders can see what the forecast would be with and without each planned change. Where the cost impact of a planned change is uncertain, provide a range rather than a point estimate.
  3. Factor in commitment portfolio effects: model the impact of commitment expirations on cost if not renewed, and the impact of any planned commitment purchases on reducing on-demand spend.
  4. Produce a confidence range for the total forecast (e.g. high/medium/low scenarios or a percentage band), and explain which forecast segments drive the most uncertainty. Distinguish between segments where the historical pattern is stable and the forecast is high-confidence versus segments where volatility, newness, or planned changes reduce confidence.
  5. Compare the forecast against the current budget for the same scope and period. Identify the most material variances and explain whether they are driven by trend changes, planned changes, or assumption differences between the forecast and the original budget.
  6. Model two alternate scenarios beyond the baseline: one where growth or usage accelerates beyond the baseline assumption, and one where a planned change is delayed or a cost reduction target is not met. Show the cost impact of each scenario relative to the baseline.
  7. State all assumptions explicitly, including which planned changes are included and excluded, what commitment renewal behavior is assumed, and what growth rates are applied to each segment.

#### Customization Notes

  * The forecast time horizon and granularity should match stakeholder expectations.
  * Monthly forecasts suit operational planning and engineering teams; quarterly or annual forecasts suit Finance and Leadership budgeting cycles.
  * The prompt handles both but produces more precise output at shorter horizons with more granular historical data.
  * Historical data quality is the primary constraint on forecast accuracy.
  * If your organization’s cost data includes significant unallocated spend, inconsistent tagging, or recent structural changes (reorganizations, account migrations, billing changes), note these in the context so the AI can account for data discontinuities rather than treating them as trend changes.
  * At Crawl FinOps Maturity, focus on a single scope (one team, one service, or one environment) and a shorter forecast horizon (3 months). Use the output to establish a baseline forecasting cadence and build stakeholder confidence before expanding scope.
  * At Walk Maturity, expand to organization-wide forecasts with planned change adjustments and begin tracking forecast vs. actual variance as a KPI.
  * At Run Maturity, feed structured FOCUS exports or FinOps platform data directly, incorporate automated anomaly detection to flag when actuals diverge from the forecast mid-period, and build feedback loops that update forecast models monthly. For organizations using FOCUS-aligned datasets, separating EffectiveCost (amortized, inclusive of commitment discount benefits) from BilledCost (cash-basis, what appears on the invoice) produces two distinct forecast views that serve different audiences: 
    * EffectiveCost forecasts support engineering and operational planning;
    * BilledCost forecasts support Finance cashflow planning and invoice reconciliation.
    * Consider specifying which cost basis stakeholders need, or request both.
  * Forecasting interacts directly with Rate Optimization.
  * A forecast that does not account for commitment expirations will understate future cost; a forecast that assumes commitment renewal without validating utilization may overstate savings.
  * If you have completed the Rate Optimization prompt, its output can be provided as context to improve forecast accuracy for the commitment-affected segments.
  * For AI, data cloud platforms (Snowflake, Databricks), and other consumption-based services with volatile or rapidly growing usage, consider requesting a separate forecast segment for these services rather than blending them into an overall trend, as their growth rates and usage patterns often diverge significantly from traditional infrastructure workloads.

#### Indicators of Success

  * The forecast is built from identifiable inputs (historical trends, planned changes, commitment effects) with each component visible, not presented as an opaque single number.
  * Stakeholders can trace the forecast back to assumptions and challenge specific inputs. Historical trend analysis separates usage-driven changes from pricing-driven or commitment-driven cost changes, rather than treating all historical cost movement as a single trend line.
  * Planned changes are modeled as discrete, visible adjustments to the baseline, not blended into the overall trend.
  * Each planned change shows its estimated cost impact so stakeholders can evaluate whether the assumption is reasonable.
  * Confidence ranges are provided and are meaningfully different across forecast segments.
  * Stable, well-understood workloads carry tighter ranges; new services, volatile usage, and AI workloads carry wider ranges.
  * A forecast that applies the same confidence band uniformly is not reflecting reality.
  * The forecast vs. budget comparison identifies specific variance drivers rather than simply stating the total variance amount.
  * Stakeholders can see whether the forecast diverges from budget because of trend changes, planned changes not anticipated in the original budget, or different assumptions about growth or optimization.
  * Alternate scenarios are plausible and bounded, not extreme “best case / worst case” bookends. They model specific, named changes to baseline assumptions (e.g. “if the migration is delayed by one quarter” or “if user growth reaches 60% instead of 40%”) rather than arbitrary percentage adjustments. All assumptions are stated explicitly.
  * The AI does not embed unstated assumptions about growth rates, commitment renewals, pricing stability, or planned change timing. Where it must assume, it flags the assumption and states what data would allow the assumption to be replaced with a known value.
  * The output is structured for multiple audiences: a detailed forecast table suitable for the FinOps Practitioner and Engineering, a variance summary suitable for Finance, and a narrative suitable for Leadership that connects the forecast to business context and strategic priorities.

### Compare Architectural and Workload Placement Options to Support Cost-aware Design Decisions

[Architectural and workload placement ](<https://www.finops.org/framework/capabilities/architecting-workload-placement/>) decisions such as virtual machines vs containers vs serverless, region selection, or data store selection, set the cost trajectory for the lifetime of the system. Cleaning up tech debt from architectural decisions made without cost awareness is significantly more disruptive when compared to shifting decision left and designing for cost-effectiveness up front. This use case helps FinOps Practitioners use AI to accelerate the comparison of architectural and placement options, surface cost-relevant trade-offs across competing approaches, and support decision conversations [across all Persona ](<https://www.finops.org/framework/personas/>) like Engineering, Product, Finance, and Leadership.

**FinOps Capabilities**

  * Architecting & Workload Placement
  * Forecasting
  * Sustainability
  * Unit Economics

**FinOps Persona**

  * FinOps Practitioner
  * Engineering
  * Product
  * Finance
  * Leadership

**AI Assistance Mode:** Inform & explain, Analyze & detect, Recommend

#### Expected Outcome

A structured comparison of two or more architectural or workload placement options, including the cost composition of each option (infrastructure, run, support, transition), the operational and business trade-offs implied by each, the unit economic implications where business unit metrics are available, the sustainability impact where region or service choice affects emissions materially, and a framing of the decision suitable for cross-Persona review rather than a single recommended answer.

#### Context

Before running this prompt, gather the following:

  * Attributes of the workload being designed or changed: what it does, who uses it, what business outcome it supports
  * The architectural, workload placement, and [Technology Categories ](<https://www.finops.org/framework/technology-categories/>) under consideration (e.g. EC2 vs ECS Fargate vs Lambda; AWS vs Azure vs on-premises; managed Postgres vs self-hosted Postgres; us-east-1 vs eu-west-1 vs multi-region)
  * Operational requirements that constrain the choice: performance, availability, scalability, security, compliance, data residency
  * Expected usage patterns: peak vs steady-state, burstiness, growth trajectory, daily or seasonal cycles
  * Business unit metrics relevant to this workload if defined (cost per transaction, cost per tenant, cost per case resolved)
  * Organizational constraints: existing skills and operational maturity, preferred providers or patterns, sustainability targets
  * The decision context: who is making the decision, what other Personas are reviewing it, and the timeline for the decision

#### Prompt

I am evaluating architectural and workload placement options for a workload and need help comparing them on a cost-aware basis to support a decision conversation across stakeholder Personas.

Use the following information:

  * Workload description – for example: 
    * customer-facing API service handling order processing;
    * AI-assisted document summarization service;
    * internal analytics platform serving dashboards
  * Options under consideration – for example: 
    * Option A: EC2 Auto Scaling group with RDS Postgres in us-east-1;
    * Option B: ECS Fargate with Aurora Serverless in us-east-1;
    * Option C: Lambda + DynamoDB in us-east-1
  * Operational requirements – for example: 
    * 99.9% availability;
    * sub-200ms p95 latency;
    * PCI compliance;
    * data must remain in the UK
  * Expected usage patterns – for example: 
    * 5 million requests/day;
    * 3x peak-to-trough ratio;
    * 40% YoY growth expected;
    * weekday-heavy, low weekend usage
  * Business unit metrics if defined – for example: 
    * target cost per order under $0.02;
    * cost per active customer under $1.50/month
  * Organizational constraints – for example: 
    * team has strong AWS skills, limited Kubernetes experience;
    * sustainability target of net zero by 2030;
    * preference for managed services over self-hosted
  * Decision context – for example: 
    * Engineering lead and FinOps Practitioner driving the decision;
    * Product and Finance reviewing;
    * decision needed within 4 weeks

Please:

  1. For each option, lay out the cost composition: infrastructure cost (steady-state and at peak), expected run and support cost, and any transition or implementation cost relevant to a green-field decision
  2. Compare the options on cost trajectory under the expected usage patterns, identifying which option becomes more or less cost-effective as usage scales, and where any breakeven points sit
  3. Surface operational and business trade-offs that a pure cost comparison would miss such as (i) engineering effort to operate, (ii) time to market, (iii) vendor lock-in, (iv) scalability ceilings, and (v) surface effects like data movement costs, and integration complexity
  4. Where business unit metrics are provided, model the unit economics of each option against those metrics so the decision can be framed in terms of cost-to-value rather than cost in isolation
  5. Where region or service selection meaningfully affects sustainability, surface the carbon implications alongside cost and flag where lower-carbon options also reduce cost
  6. Frame the comparison for stakeholder Persona review by outlining what Engineering should weigh, what Product should weigh, what Finance should weigh, what Leadership should weigh
  7. Flag any option where the data provided is insufficient for confident comparison, and specify what additional information would change the analysis

#### Customization Notes

  * This prompt is designed for early-stage architectural decisions where the options are still genuinely open.
  * The prompt works best with two to four options. More than four options becomes unwieldy and the AI will struggle to differentiate them meaningfully. If you have a long initial option list, run a preliminary pass to narrow to the top candidates before running this comparison prompt.
  * Cost figures produced by the AI should be treated as directional, not authoritative. Validate against technology provider pricing calculators, your organization’s actual rate cards (including any committed-use or enterprise discounts), and recent invoices for similar workloads. The AI’s value is in surfacing comparison structure and trade-offs, not in producing precise dollar figures.
  * For workloads with significant data movement, ingress, or egress, ensure these costs are explicitly called out in the prompt context. AI tools frequently underweight data transfer costs in architectural comparisons, and this can materially change the relative cost-effectiveness of options.
  * For organizations with [FOCUS-aligned datasets ](<http://focus.finops.org>) and historical workloads similar to the one being designed, providing actual cost data from comparable workloads as context produces significantly more accurate comparisons than asking the AI to reason from list prices.
  * This prompt deliberately avoids producing a single recommended option. Architectural decisions should be made by the relevant Personas with full context, not delegated to AI. The prompt’s value is in structuring the decision conversation, not resolving it.

#### Indicators of Success

  * Each option’s cost composition is broken down into named components (infrastructure, run, support, transition), not presented as a single aggregate figure
  * Cost trajectory under expected usage patterns is modelled, with breakeven points identified where one option becomes more or less cost-effective than another at scale
  * Operational and business trade-offs are surfaced alongside cost and the comparison is not reduced to which option is cheapest
  * Where business unit metrics are provided, the comparison includes unit economic implications, not just absolute cost differences
  * Sustainability implications are addressed where region or service choice materially affects emissions, with cost trade-offs flagged where they exist
  * The Persona-specific framing requested in the prompt is genuinely different for each identified stakeholder and enables a discussion. What Engineering should weigh is not the same as what Finance should weigh, and the AI distinguishes them meaningfully
  * The AI flags where data is insufficient for confident comparison rather than producing a confident answer based on assumptions
  * The output helps to structure the decision discussion and Practitioners can take the comparison and facilitate a stakeholder Persona review

### Draft FinOps Policy Text from Business Priorities, Technology Strategy, and Constraints

Policy work is one of the most time-consuming activities in a mature FinOps practice. Practitioners spend significant effort translating governance principles into specific, actionable policy statements that are clear enough to drive behavior, proportionate to the risk they address, and aligned with ITAM, ITFM, Security, and Procurement.

This use case helps FinOps Practitioners use AI to accelerate the drafting of policy text to produce structured first drafts that can be further refined, and circulated for stakeholder Persona review.

**FinOps Capabilities**

  * Governance, Policy & Risk
  * FinOps Practice Operations
  * FinOps Education & Enablement

**FinOps Persona**

  * FinOps Practitioner
  * Finance
  * Procurement
  * Engineering
  * Leadership

**AI Assistance Mode:** Inform & explain, Recommend

#### Expected Outcome

A structured first draft of policy text covering the specified governance area, including policy intent, the [FinOps Scope ](<http://finops.org/framework/scopes>) (which [Personas ](<https://finops.org/framework/personas>), and [Technology Categories ](<https://www.finops.org/framework/technology-categories/>)) the policy applies to, actionable requirements, exception pathways, and a summary of the risk categories the policy is designed to address. The output is positioned as a starting point for Practitioner refinement and review, not as a finished policy document.

#### Context

Before running this prompt, gather the following:

  * The governance area the policy addresses – for example: 
    * commitment coverage,
    * zero-utilization remediation,
    * approved technology catalog,
    * tagging and allocation,
    * data retention and lifecycle,
    * modernization
  * The organizational intent the policy is meant to operationalize – for example: the underlying principle or outcome Leadership has articulated
  * The [Technology Categories ](<https://www.finops.org/framework/technology-categories/>) the policy applies to – for example: Public Cloud, SaaS, Data Cloud Platforms, AI, Data Centre, etc
  * The [Personas ](<http://finops.org/framework/personas>) the policy is directed at and the behaviors it is meant to influence
  * Existing related policies that the new policy must align with rather than contradict, including any from ITAM, IT Security, Procurement, enterprise risk, etc.
  * Known constraints – for example: 
    * regulatory or contractual obligations,
    * organizational risk tolerance,
    * exception or override authority levels
  * The desired enforcement approach – for example: 
    * guideline (advisory),
    * guardrail (mandatory pathway), or
    * automation (system-enforced)
  * Examples of well-formed policies the organization has authored previously, if available, to anchor tone and structural conventions

#### Prompt

I am drafting a FinOps policy and need help producing a structured first draft that I can refine and circulate to other FinOps Personas review.

Please use the following information:

  * Governance area: 
    * [e.g. commitment coverage policy; zero-utilization remediation policy; approved technology catalog policy; tagging and allocation policy]
  * Organizational intent: 
    * [this is the priority or principle outcome Leadership has articulated, e.g. “ensure stable, predictable workloads are covered by commitment discounts to control financial risk”; “reduce waste from idle resources without disrupting legitimate business activity”; “ensure new technology procurement is visible to FinOps and aligned with business strategy”]
  * Technology Categories the policy applies to: 
    * [e.g. Public Cloud (AWS and Azure); SaaS portfolio; AI workloads only; or all Scopes]
  * Personas affected and target behaviors: 
    * [e.g. Engineering teams provisioning resources; Procurement processing new vendor contracts; Product teams making architectural decisions]
  * Existing policies: 
    * [list any policies the new policy must align with; note any potential conflicts to flag]
  * Known constraints: 
    * [regulatory obligations, contractual constraints, organizational risk tolerance, escalation authority]
  * Desired enforcement approach: 
    * [guideline / guardrail / automation; or a combination across enforcement tiers]
  * Reference examples of organizational policy style: 
    * [if available, paste 1-2 well-formed policies the organization has previously authored]

Please:

  1. Produce a structured policy draft including: 
     1. a clear policy intent statement,
     2. the scope of application including FinOps Personas, FinOps Scopes, and Technology Categories,
     3. specific actionable requirements written in authoritative language,
     4. an exception and escalation pathway, and
     5. the risk categories the policy is designed to address (financial, governance, compliance, operational, security, etc.)
  2. Test the draft against the criteria for a well-formed FinOps policy: is it specific enough to be actionable, proportionate in the cost it imposes relative to the risk it addresses, and backed by clear organizational authority?
  3. Surface any ambiguities, gaps, or potential conflicts with the existing policies listed in the Context. Flag where additional input from another stakeholder Persona is needed before the draft can be finalized
  4. Identify the enforcement mechanism most appropriate for each requirement in the policy, noting where automation would be valuable but may require additional tooling to implement
  5. Suggest two or three measurable indicators that could be used to evaluate whether the policy is achieving its intent once implemented
  6. Flag where the draft contains language that may sound authoritative but lacks specific organizational grounding such as unspecified thresholds, undefined approval authorities, and vague time periods, requiring practitioner input to resolve

#### Customization Notes

  * This prompt is designed for early-stage policy drafting where the Practitioner is moving from intent to first-draft text. It is not designed to validate finished policy against regulatory requirements since that work requires human review by Legal, Compliance, and the relevant subject matter experts.
  * The quality of the AI output depends heavily on the specificity of the organizational intent provided. Vague intent like ” _we want better cost control_ ” produces vague policy. Specific intent like ” _we want stable production workloads to be covered by 1-year Savings Plans at minimum 80% of forecast spend_ ” produces specific policy. If you cannot articulate the intent clearly, the prompt’s first useful output is often a list of clarifying questions rather than a draft.
  * FinOps Policy drafted without inclusion of other governance policies for Security, ITAM, Procurement, etc, is likely to conflict. The Context field is structured to surface [Intersecting Disciplines ](<https://www.finops.org/framework/capabilities/intersecting-disciplines/>) policies explicitly so the AI can flag potential conflicts. Do not skip the “existing related policies and adjacent governance frameworks” field since its absence will result in an AI-drafted policy that needs significant rework.
  * Reference examples of organizational policy style (reference above in the last Context field) materially improve the AI’s output quality. Tone, structure, and authority conventions vary significantly across organizations. Pasting one or two existing policies anchors the AI to your organization’s voice.
  * The AI’s draft should always be treated as a starting point for human refinement and review, not a finished policy. Practitioners remain accountable for validating the policy against regulatory requirements, organizational authority structures, and adjacent governance frameworks before circulating it for adoption.
  * For policies that touch regulatory areas involving data retention, software licensing, and financial controls, the AI’s draft should be reviewed by Legal or Compliance before being circulated, regardless of how confident the output appears.
  * **AI-generated policy text in regulated areas is the highest-risk output produced by any prompt in this document.**

#### Indicators of Success

  * The draft policy includes a clearly stated intent, specific requirements, exception pathway, and risk category mapping rather than a generic policy template with placeholder language
  * Requirements are written in authoritative, actionable language using words like “must”, “will”, and “is required to”, rather than advisory language that creates ambiguity about whether the policy is mandatory
  * Specific thresholds, time periods, approval authorities, and enforcement mechanisms are either stated concretely or explicitly flagged as requiring practitioner input. the AI does not produce confident-sounding text with hidden gaps
  * Potential conflicts with other established policies are surfaced explicitly, with cross-Persona handoffs identified
  * The proposed enforcement mechanisms (guideline, guardrail, automation) are appropriate to the risk and effort involved. High-value automation is recommended where feasible, and lower-effort guidelines are recommended where automation overhead is not justified
  * Suggested indicators for measuring policy effectiveness are specific, not abstract aspirations
  * The output positions itself as a starting point for refinement, not a finished policy
  * Where the draft touches regulated areas (data retention, software licensing, financial controls), the AI explicitly flags the need for Legal or Compliance review before adoption

### Understanding Organic Cost Growth and Unit Economics Trends

Businesses see cloud spending increasing but often cannot distinguish whether the increase is driven by healthy business growth (organic growth) or inefficiency. We often achieve cloud optimization savings, but those avoidances are not always visible because new demand-driven growth offsets the reduction. This use case is intended to help make optimization impact visible even when business growth increases spend.

Example:

  * Total cloud spend = $1M
  * Cost Avoidance delivered = $200K
  * New Organic Demand Growth = $300K increase

Net Spend becomes $1.1M

**FinOps Capabilities**

  * Unit Economics
  * Forecasting
  * Budgeting
  * Reporting & Analytics

**FinOps Personas**

  * FinOps Practitioner
  * Engineering
  * Finance
  * Product
  * Leadership

**AI Assistance Mode:** Inform & explain, Analyze & detect

#### Expected Outcome

A structured analysis that separates optimization savings from growth-driven spend and quantifies gross savings versus net spend movement, surfacing whether organic growth is masking optimization outcomes. The output supports clearer unit economics interpretation, more accurate growth-adjusted forecasting, and stakeholder Persona communication that demonstrates the realized value even when net spend continues to rise.

#### Context

Before running this prompt, gather the following:

  * Current total cloud spend for the analysis period, and the equivalent total from the prior comparable period for trend comparison (e.g. this quarter vs last quarter, this fiscal year vs last fiscal year)
  * Optimization savings delivered during the analysis period, broken down by initiative type where possible (rightsizing, scheduling, commitment purchases, architectural changes, decommissioning) so the AI can distinguish durable from reversible savings
  * New demand-driven spend during the same period, ideally attributed to specific business drivers (new product launches, customer growth, expanded use cases, increased transaction volume) rather than treated as a single growth number
  * Business growth metrics that align with your unit economics model including users, transactions, API calls, cases resolved, or whichever business volume signal best represents the workload’s purpose
  * Historical cost baseline for the analysis, covering enough periods to identify trend stability separately from one-off events for meaningful pattern identification. For example: 3 months minimum; 6-12 months preferred
  * Currently defined unit metrics for cost like cost per transaction, cost per user, cost per API call
  * Budget and forecast assumptions for the analysis period, including the growth assumptions that were baked into the original budget so the AI can compare actual growth against planned growth and identify whether variance reflects unexpected demand or unexpected efficiency
  * Commitment coverage data about which spend is covered by Reserved Instances, Savings Plans, or Committed Use Discounts, and any commitment changes during the period that may affect realized cost
  * Resource-level cost detail from your technology provider where granular attribution is needed

#### Prompt

Our total spend was $1M. Optimization reduced costs by $200K, but organic workload growth added $300K. Please explain the true optimization value delivered, show what spending would have been without optimization, and identify whether growth is masking savings.

Provide a breakdown that summarizes the following scenarios:

  1. Cost reduction achieved from optimization
  2. New spend attributable to growth
  3. Net cost movement
  4. “Cost without optimization” scenario
  5. “Cost excluding organic growth” scenario
  6. Whether optimization gains are being masked by growth
  7. Recommendations for forecasting and communicating realized value

#### Customization Notes

  * Adjust time period and granularity (WoW, MoM, DoD, QoQ) to match your reporting cadence. Note that shorter cadences surface optimization vs growth tension faster, longer cadences smooth out one-off events
  * Set account scope to the specific payer account IDs, linked accounts, or business unit tags to avoid blending growth signals from unrelated parts of the organization
  * Configure gross vs net savings reporting based on the audience. For example, Finance typically needs both views, Leadership often only needs the net view with the gross-vs-net distinction
  * Adjust thresholds for growth masking alerts based on materiality. At smaller spend scales, a 10% gap may warrant attention but at larger scales the threshold is higher
  * Choose unit economics drivers (cost per user, cost per token, cost per API call) that align with how the business measures the value the workload delivers
  * Include service-level or application-level analysis when growth is concentrated in specific services rather than spread evenly. This helps distinguish workload-specific growth from organization-wide growth
  * Configure reporting by business unit, product, or region where accountability or budgeting happens at that level

#### Indicators of Success

  * The optimization savings figure and the organic growth figure are separated and quantified distinctly, not blended into a single net variance number that obscures what each component contributed
  * The ” _cost without optimization_ ” scenario requested in the prompt is calculated explicitly using the data provided, showing what spend would have been if optimization had not been delivered, rather than describing it qualitatively
  * The ” _cost excluding organic growth_ ” scenario requested in the prompt is calculated using identifiable growth drivers (users, transactions, volume) rather than treating all new spend as growth by default
  * New spend is attributed to specific demand drivers where the data supports it, with the AI flagging where attribution is uncertain rather than defaulting to “growth” as a catch-all explanation
  * The AI distinguishes between optimization savings that are durable (architectural changes, commitment purchases) and those that are reversible (workload pauses, temporary scheduling) when assessing realized value
  * Recommendations for communicating realized value are framed for specific Personas. For example, Finance needs the gross-vs-net distinction with dollar impacts, Leadership needs the strategic narrative connecting FinOps work to business outcomes
  * The AI flags where data gaps limit confidence in the savings-vs-growth split, rather than producing confident-looking numbers that hide assumptions about which spend is growth versus inefficiency

### Proactive Audit of Schema Drift and Metadata Fragmentation to Protect Financial Logic

Cloud environments are dynamic; providers frequently update their billing APIs, and internal teams often modify infrastructure-as-code templates without notifying FinOps. This silent drift in how data is structured from newly introduced fields, renamed tags, or changes in data type, creates a domino effect that breaks automated reporting and misallocates costs.

This use case leverages AI to act as a structural guardrail, auditing incoming data streams to detect changes in the underlying schema before they contaminate the long-term cost history or break the financial logic downstream of your ingestion pipeline.

**FinOps Capabilities**

  * Data Ingestion
  * Allocation
  * Reporting & Analytics

**FinOps Personas**

  * FinOps Practitioner
  * Engineering

**AI Assistance Mode:** Analyze & detect, Recommend

#### Expected outcome

A technical delta report identifying field-level structural changes between the current ingestion batch and the historical baseline. The output distinguishes systemic schema changes from isolated data quality issues, identifying metadata aliases that threaten the integrity of allocation rules, and provides ETL remediation recommendations the data engineering team can act on before the affected data enters the cost history.

#### Context

Before running this prompt, gather the following:

  * The ‘Source of Truth’ schema: A copy of your current data dictionary, FOCUS schema version, or a sample header row from a known good ingestion month. Ensure the sample is from a complete billing period, not a partial month.
  * The raw ingestion sample: A subset of the latest unprocessed billing data (e.g., the first 500 rows of a CSV or a JSON payload from a cloud billing API).
  * Logic dependencies: A list of the specific tag keys or column names that power your most critical act functions, such as automated shutdown scripts or executive showback dashboards. This context enables the AI to assess structural impact rather than just cataloguing changes.
  * Provider-specific release context: note any recently enabled cloud services or billing feature changes (e.g., moving from standard VMs to serverless) which might introduce unfamiliar metadata structures.

#### Prompt

I am performing a structural audit on our latest ingestion batch to detect schema drift. The goal is not to identify missing or null values, but to identify changes in the data’s structure that could break our automated allocation logic and reporting.

Please compare the raw data sample against our baseline schema and provide a structural delta analysis covering the following:

  * Field-level evolution: Identify any new columns or keys that have appeared, and any that have disappeared, and any field names with changed casing or naming conventions (e.g., underscore patterns, abbreviations).
  * Type and format shifts: Highlight any changes in data representation. (e.g., a ResourceID that previously arrived as a UUID now arriving as a different string format; an EffectiveCost field shifting from decimal to string).
  * Metadata aliasing: scan for semantic drift where the same business concept is being expressed through a different key (e.g. the system now sees Cost_Center where it previously saw CostCenter).
  * Structural impact assessment: cross-reference detected changes against my logic dependencies and identify which specific automated reports, allocation rules, or scripts will be affected if this data is ingested without updating ETL mapping updates

Please structure the output as follows:

  * A brief summary of the top structural changes detected (three to five bullet points).
  * A schema drift table with columns: [Original Field], [New/Observed Field], [Change Type (Rename / Type Shift / New / Removed)], [Risk Level (High / Medium / Low)].
  * A short explanation of the reasoning used to distinguish a systemic schema change from a random tagging error or one-off data quality issue.
  * Actionable ETL remediation recommendations for the data engineering team to update ingestion pipelines.

#### Customization Notes

  * Since raw billing files can be very large, avoid passing the full dataset. Instead, provide a list of all unique keys and their observed data types alongside a small representative sample. This keeps the prompt focused on structural analysis rather than data volume.
  * In multi-cloud environments where the same concept (e.g., region, resource ID) may be represented differently across providers, add a note to the prompt asking the AI to flag provider-specific naming conventions separately from genuine schema drift. This avoids conflating expected cross-provider variation with actual structural changes.
  * At Walk or Run [FinOps Maturity ](<https://finops.org/framework/maturity-model>), this prompt can be integrated into ingestion pipeline validation workflows, triggered automatically when a new billing file arrives. At a Crawl Maturity-level, running it manually at the start of each billing period is a practical starting point.
  * If your organization uses FOCUS-aligned datasets, reference the relevant FOCUS schema version in the baseline schema context. This allows the AI to distinguish drift from FOCUS specification updates versus drift introduced by provider-side changes or internal pipeline modifications.

#### Indicators of Success

  * Detection of silent shifts: The AI identifies a change in data type (e.g., a number becoming a string) that would normally pass a completeness check but break a downstream calculation.
  * Impact is mapped to named downstream dependencies: the analysis identifies which specific allocation rules, automated reports, or scripts are at risk, rather than describing impact in generic terms.
  * Systemic changes are distinguished from one-off errors: the output explains the reasoning used to classify each finding, so the practitioner can validate the assessment before acting on it.
  * ETL recommendations are specific and actionable: remediation guidance identifies which pipeline mappings need updating and how, rather than advising the team to “review the ingestion process.”
  * Allocation and reporting integrity is preserved: recommendations include how to alias new schema fields to existing logic where appropriate, so that historical cost continuity and year-over-year reporting are maintained across the schema change.
  * Findings are cloud-agnostic in structure: the delta report is valid regardless of whether the source is AWS, Azure, GCP, or an on-premises billing system, and does not require provider-specific tooling to interpret.

### Validating Data Freshness and Pipeline Consistency to Ensure Timely Decision Making

The reporting and analytics foundation of a FinOps practice depends entirely on the recency of its data. When ingestion pipelines stall or deliver inconsistent snapshots across multi-cloud environments, FinOps Practitioners end up making decisions based on outdated cost and usage data. This use case helps FinOps Practitioners detect latency gaps and synchronization issues across ingestion sources, ensuring that the time-to-visibility remains within acceptable limits, and that anomaly detection, optimization, and reporting activities are based on the most current billing telemetry available.

**FinOps Capability**

  * Data Ingestion
  * Reporting & Analytics
  * Anomaly Management

**FinOps Persona(s)**

  * FinOps Practitioner
  * Engineering

**AI Assistance Modes:** Analyze & Detect, Inform & Explain

#### Expected Outcome

A synchronization health report that quantifies the age of data across all ingestion streams, identifies specific data gaps where expected records are missing, and highlights timing discrepancies between providers. The output gives FinOps Practitioners a clear assessment of whether current data freshness is sufficient to support optimization decisions, anomaly detection, and executive reporting or if reporting should be delayed until the pipeline catches up.

#### Context

Before running the below prompt, gather the following:

  * Ingestion timestamps: the last updated or arrival timestamps for each major cost source (e.g. AWS, Azure, or GCP, SaaS platforms, Data Cloud platforms)
  * SLA targets: your organization’s requirements for data availability; for example: billing data must be visible within 24 hours of a cloud event.
  * Baseline volumes: a summary of expected daily record counts for each data source from past complete billing periods to help AI detect if an active pipeline is delivering no meaningful data. This can be obtained from the past “complete and acceptable” billing months.
  * Cross-source dependencies: a list of sources that must be synchronized for accurate reporting; for example: technology spend must align with an internal project budget or chargeback registry before reports are distributed.
  * Known reconciliation periods: data provider dates when billing data is typically revised so AI can recognize dates when providers are expected to update the billing data and distinguish between reconciliation and pipeline failures.

#### Prompt

I am auditing our FinOps data ingestion pipeline to verify data freshness and cross-source consistency. I need to ensure our reporting and optimization activities are not based on stale or fragmented information.

Using the following information:

  * Ingestion sources and last update timestamps: [paste table or list per source]
  * Data freshness SLA target: [Insert target, e.g., data must be updated with the last 12-hours across all data sources]
  * Baseline daily record volume per source: [paste or describe expected counts from recent complete billing periods]
  * Known provider reconciliation windows: [e.g., AWS finalizes billing data on the 3rd of each month; GCP may revise usage data up to 48 hours after the event]

Please:

  1. Compare the last arrival timestamp of each source against the current time and identify any source that exceeds the SLA target. Before flagging a source as a pipeline failure, confirm you have accounted for known provider-side reconciliation windows that may explain the delay
  2. Identify any source where record volumes have dropped unexpectedly relative to the baseline, which may indicate a partial ingestion failure or a silent API timeout rather than a genuine reduction in cloud activity
  3. Identify synchronization skew across sources where one provider’s data is significantly more current than another’s, and explain how this skew affects the reliability of unified multi-cloud reporting or cross-source allocation
  4. Assess the operational risk of running anomaly detection, rightsizing analysis, or executive reporting given the current data freshness state across all sources
  5. Recommend specific remediation actions for any sources flagged as delayed or stalled, distinguishing between issues that require immediate intervention and those that are within expected provider behavior

#### Customization Notes

  * Differentiate data types: Remember that billing data is often 24 hours behind, while performance metrics should be much closer to real-time. Tell the model which type you are auditing.
  * Align with your FinOps Maturity level. At Crawl FinOps Maturity, the focus is on whether data arrived at all and whether volumes are in an expected range. At Walk Maturity, expand the analysis to cross-source synchronization and its effect on allocation accuracy. At Run Maturity, focus on decision latency like the time between a resource being provisioned or changed and its cost appearing in your reporting layer, and integrate this check into automated pipeline validation workflows.
  * Isolate business units if a specific department has its own ingestion stream that is consistently slow. Filter for that unit to avoid skewing the overall data trust assessment for the organization.
  * For organizations operating across multiple data providers, note that provider reconciliation windows differ materially. For example, AWS, Azure, and GCP each have distinct billing finalization timelines that affect what constitutes a latency gap versus expected provider behavior. Providing these windows in the Context field prevents the AI from misclassifying normal provider behavior as a pipeline failure.

#### Indicators of Success

  * Latency is quantified in concrete terms: the output provides actual hours or minutes of lag per data source rather than general descriptions. At Crawl Maturity, a binary “arrived / not arrived” assessment is a sufficient starting point
  * Provider-side reconciliation behavior is distinguished from genuine pipeline failures: the AI does not flag a source as stalled if the delay is within a known provider reconciliation window, and it explains its reasoning
  * Silent failures are detected: the analysis identifies pipelines that are technically active but delivering zero or anomalously low record volumes, which would pass a basic connectivity check but indicate a data gap
  * Synchronization skew is assessed for downstream impact: the output explains which specific reports, allocation runs, or anomaly detection activities cannot be trusted given the current state of cross-source timing gaps
  * Operational risk is clearly stated: the practitioner receives a specific, actionable signal about whether current data freshness is sufficient to proceed with optimization, reporting, or anomaly detection versus a generic caution
  * Root cause analysis and remediation: the AI suggests whether the delay is likely due to a provider-side issue, an internal ETL failure, or a credential expiry. Remediation recommendations are specific and guidance identifies which pipeline, source, or integration requires attention and what action is needed, rather than a generic “investigate the pipeline”

## Building AI for FinOps Fundamentals

Prompt wording alone is rarely the most impactful lever when using AI for FinOps. Equally important are context quality, expected outcomes, indicators of success, organizational readiness, and understanding the categories of AI assistance modes that broadly align with increasing complexity for a given use case.

These AI for FinOps use cases will help build a strong foundation to get the most value from AI tools and services. Each use case is mapped to specific [FinOps Framework Capabilities](<http://finops.org/framework/capabilities>), tagged with relevant [FinOps Personas](<http://finops.org/framework/personas>), and include customization considerations for each use case prompt to help practitioners identify the most applicable use cases for their context. Use them as starting points, adapting the prompts, contexts, and indicators of success to fit your [FinOps Scope](<http://finops.org/framework/scopes>), and build on them as your AI fluency and organizational readiness grow.

### Which FinOps Personas Benefit from These Use Cases

  * **FinOps Practitioners and Analysts** who are responsible for day-to-day cost visibility, allocation, reporting, forecasting, and optimization, and who want practical guidance on applying AI safely and effectively within their workflows.
  * **Engineering and Operations Teams** who make architectural and operational decisions that drive cloud usage and cost, and who want to understand how AI-supported FinOps practices can improve efficiency and shared accountability.
  * **Finance, Procurement, and Business Management** professionals who partner with technical teams to plan, budget, forecast, and measure cloud spend, and who are seeking clearer, data-driven insights into cloud economics.
  * **Product and Business Leaders** who are responsible for connecting cloud consumption with business value, unit economics, and product-level cost accountability and who want to understand how AI-augmented FinOps practices surface those insights more quickly.
  * **Cloud Architects and Platform Engineering Teams** who design and maintain the systems, tooling, and governance frameworks that support scalable FinOps practices, and who want to understand where AI-assisted approaches can be embedded into infrastructure and developer workflows.
  * **Data, Analytics, and AI Teams** who are evaluating how AI models can be responsibly applied to FinOps datasets and processes, and who may be building or integrating the tools that other personas in this list rely on.
  * **Organizations at any stage of their FinOps journey** from those establishing foundational practices to those looking to mature, automate, or scale their FinOps capabilities.

## Key Concepts

### Context over Prompt Wording

The quality of AI output depends more on the context supplied to the model than on the precise wording of the prompt itself. Feeding the AI relevant, real-time data through integrations, copy-pasted reports, Retrieval-Augmented Generation (RAG) pipelines, or Model Context Protocol (MCP) connections produces better results than refining prompt language in isolation. Each use case and prompt entry in this document includes a Context field that is as important as the Prompt field itself.

### The AI Assistance Modes

Across FinOps workflows, AI assistance tends to fall into four modes that broadly align with increasing complexity and practitioner trust.

**Assistance Modes:**

  1. **Inform & explain**: answering questions, summarizing data, translating technical concepts for stakeholders
  2. **Analyze & detect**: identifying patterns, anomalies, and optimization opportunities in data
  3. **Recommend** : surfacing prioritized actions, routing work to the right owners, generating draft communications
  4. **Act & automate**: executing actions autonomously with human-in-the-loop oversight (e.g. creating tickets, drafting PRs, triggering alerts)

This document focuses primarily on **the first three modes** , which are accessible to practitioners using general-purpose AI tools today. The fourth mode (Act & Automate) use cases typically require custom tooling or agentic infrastructure.

### FinOps Maturity and AI Adoption

The FinOps Framework Crawl / Walk / Run [Maturity Model ](<http://finops.org/framework/maturity-model>) applies directly to AI adoption. Practitioners and organizations at the Crawl-stage benefit most from AI assistance modes that are low-risk and high-explanatory-value (inform, summarize, draft). Walk-stage practitioners can introduce AI into analytical and recommendation workflows, with human validation of outputs. Run-stage practitioners may be building or using agentic AI systems that operate more autonomously. But even here, human-in-the-loop controls remain essential for irreversible actions such as account changes or financial allocations.

### Organizational Readiness

How your organization has operationalized their AI infrastructure will affect which use cases are practical. Practitioners working within a well-established AI platform (shared sandbox environments, pre-approved model access, centralized data pipelines) will be able to apply more entries with less friction than those working in an environment where AI tooling is ad hoc or ungoverned.

## Prompt Best Practices and Considerations

The following best practices apply across all use cases in this resource and reflect the FinOps community’s collective experience applying AI in FinOps.

### Context Quality Is the Primary Lever

The single most impactful thing a FinOps Practitioner can do to improve AI output quality is to invest in context – not in prompt wording. This means connecting the AI to real data where possible (via RAG pipelines, MCP integrations, copy-pasted reports, or file uploads); providing organizational context that the model would not otherwise have (team structure, cost targets, known constraints); and telling the model which information to prioritize when there is a lot of context available.

### Give Clear and Specific Direction

Explicitly state the goal, audience, constraints, and depth (e.g., “Explain for a senior cloud FinOps engineer in 3 concise bullet points”). Specify format by telling the model how to structure the answer: bullets vs. prose, tables, sections, length limits, tone, inclusion of code snippets, etc.. With every sample prompt in this resource, there is an opportunity to narrow the AI’s focus and increase output relevance. A prompt that specifies the exact resource type, time period, cost center, and audience will consistently outperform a generic query.

### Human-in-the-loop Is Non-negotiable for Consequential Decisions

All entries in this resource should be treated as drafts, not final decisions. FinOps decisions, especially those touching financial allocations, commitment purchases, or resource deletions, carry real consequences. A FinOps Practitioner remains accountable for validating AI recommendations before acting on them, particularly for irreversible actions.

### Match the Prompt to the FinOps Maturity of Your Organization

Using agentic or autonomous AI approaches in environments without robust tagging, attribution, or governance infrastructure will produce unreliable outputs. At Crawl Maturity, focus on “inform and explain” modes. At Walk Maturity, introduce “analyze and recommend” modes with manual validation. At Run Maturity, agentic use cases become viable but with circuit breakers, iteration limits, and human review of outputs before execution.

### Validate Against Primary Sources

AI recommendations should be cross-referenced with a technology provider’s native tooling. For public cloud, use AWS Cost Explorer, Azure Cost Management, or Google Cloud Billing, combined with your organization’s own data systems. The AI reasons from the context you provide and does not have live access to your cloud environment unless explicitly connected via MCP or similar integration.

### Use AI Verification as a Quality Check

After receiving an AI output, prompt the model to verify whether it followed all required steps to reach its conclusion. Models will sometimes acknowledge they skipped steps making this a practical accuracy and quality check before acting on the output. Use other agents to separately evaluate prompts and outcomes to validate from different AI perspectives. This is especially valuable for multi-step analytical tasks such as anomaly investigation or optimization prioritization.

## Related FinOps Resources

  * [Model Context Protocol (MCP): An AI for FinOps Use Case ](<https://www.finops.org/wg/model-context-protocol-mcp-ai-for-finops-use-case/#acknowledgements>)
  * [AI for FinOps: Agentic Use Cases in FinOps ](<https://www.finops.org/insights/ai-for-finops-agentic-use-cases/>)
  * [Managing AI Value Using FinOps Practice Operations ](<https://www.finops.org/wg/managing-ai-value-finops-practice-operations/>)
  * [FinOps for AI ](<https://www.finops.org/framework/technology-categories/ai/>)

## Acknowledgements

We’d like to thank the following people for their contributions to this Paper:

[ ![David Earney](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) David Earney American Express ](<https://www.linkedin.com/in/davidearney/>) [ ![Adam Richter](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Adam Richter Amazon Web Services  ](<https://www.linkedin.com/in/adamjrichter/>) [ ![Karl Hayberg](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Karl Hayberg EY ](<https://www.linkedin.com/in/karlhayberg/>) [ ![Tammy Burnitt](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Tammy Burnitt FinOps Foundation ](<https://www.linkedin.com/in/tammyburnitt/>) [ ![Madoc Batters](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Madoc Batters Warner Leisure Hotels ](<https://www.linkedin.com/in/madoc-batters-aws-machinelearning/>) [ ![Annapurna Tiwari](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Annapurna Tiwari HCL Cloud ](<https://www.linkedin.com/in/annapurna-tiwari-4210ab24/>) [ ![Prajakta Kalmegh](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Prajakta Kalmegh Unravel Data ](<https://www.linkedin.com/in/pkalmegh/>) [ ![Jean Latiere](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jean Latiere OptimNow ](<https://www.linkedin.com/in/jeanlatiere/>)

Last updated: May 12, 2026

## Table of Contents

  * [Executive Summary](<#executive-summary>)
  * [AI for FinOps Use Cases and Prompts](<#ai-for-finops-use-cases-and-prompts>)
  * [Building AI for FinOps Fundamentals](<#building-ai-for-finops-fundamentals>)
  * [Key Concepts](<#key-concepts>)
  * [Prompt Best Practices and Considerations](<#general-prompt-best-practices-and-considerations>)
  * [Related FinOps Resources](<#related-finops-resources>)
  * [Acknowledgements](<#acknowledgements>)

###### [Build your FinOps for AI skills Learn the latest best practices to manage AI costs and token economics. Get started  ![Build your FinOps for AI skills](https://www.finops.org/wp-content/uploads/2025/07/certified-AIvalue.svg) ](<https://learn.finops.org/path/certified-finops-for-ai>)

##### Related FinOps Capabilities

[ Automation, Tools, & Services ](<https://www.finops.org/framework/capabilities/automation-tools-services/>) [ FinOps Education & Enablement ](<https://www.finops.org/framework/capabilities/finops-education-enablement/>) [ FinOps Practice Operations ](<https://www.finops.org/framework/capabilities/finops-practice-operations/>)
# Model Context Protocol (MCP): An AI for FinOps Use Case

**Summary:**

Model Context Protocol (MCP) is an open standard designed to integrate cloud-specific data, tools, and resources securely and scalably with Generative AI models. The protocol is essential for connecting AI tools with real-time, context-aware intelligence from Cloud Providers, and can drastically reduce model hallucinations and improve the accuracy of optimization recommendations. MCP-based AI use cases include running natural-language Automated Cost Analysis, Anomaly Detection, and performing Cost Impact Simulations. Using MCP allows FinOps teams to establish a modular, closed-loop system that moves beyond reporting to implement proactive budget guardrails and align financial outcomes directly with engineering workflows.

## Table of Contents

  * [Why Use MCPs? A FinOps Use Case](<#why-use-mcps-finops-use-case>)
  * [Drawbacks to MCP Use](<#drawbacks-to-mcp-use>)
  * [MCP and FinOps Use Cases](<#mcp-and-finops>)
  * [Architecture Overview](<#architecture-overview>)
  * [Conclusion](<#conclusion>)
  * [Acknowledgements](<#acknowledgements>)

The rapid advancement and introduction of Generative AI Large Language Models (LLMs) is ushering in a new era of intelligent applications that can understand and generate natural language with unprecedented accuracy. Yet, developers are finding “ _models are only as good as the context provided to them_.” LLM effectiveness relies heavily on the quality and relevance of the context they are able to access. Model Context Protocol (MCP) has been developed to provide a standard way for LLMs to access domain-specific context more easily.

The **Model Context Protocol (MCP)** is an open standard designed to address this challenge. MCP defines a common interface for how applications supply context to LLMs, enabling seamless, secure, and scalable integration between AI systems and the tools, data sources, and environments they depend on. Often referred to as the “USB-C of AI applications,” MCP aims to do for LLM integration what USB-C did for hardware interoperability.

![Chart indicating difference between API, LSP, and MCP](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20985%20290'%3E%3C/svg%3E)

_Source:[Building Agents with Model Context Protocol](<https://www.youtube.com/watch?v=kQmXtrmQ5Zg>) (Anthropic)_

### The Problems MCP Solves

Before MCP, integrating LLMs with real-world systems was fragmented, ad-hoc, and complex. Developers were forced to create custom connectors for every unique use case, often reimplementing logic across systems and environments. This not only slowed innovation but introduced significant technical debt and security risks.

![Image showing challenge of fragmented LLM process](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20987%20234'%3E%3C/svg%3E)

_Source:[Building Agents with Model Context Protocol](<https://www.youtube.com/watch?v=kQmXtrmQ5Zg>) (Anthropic)_

MCP changes that by offering a standardized way to expose tools, resources, and prompts to language models. MCP allows developers to build once and scale across multiple environments without repeated integration work.

![Example of MCP process](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201663%20689'%3E%3C/svg%3E)  
_Source:[Building Agents with Model Context Protocol](<https://www.youtube.com/watch?v=kQmXtrmQ5Zg>) (Anthropic)_

## Why Use MCPs? A FinOps Use Case

To illustrate how an MCP server might be beneficial we will examine a FinOps use case, where an AI model operated by a FinOps team would use MCPs from Cloud Service Providers (CSP) to perform portions of the FinOps job.

MCP servers extend foundation models with real-time, CSP-specific intelligence—bridging the gap between generic AI and operational relevance in the cloud. Key benefits include:

**Context-aware responses:** MCP servers inject accurate and up-to-date CSP information into the model’s context. This reduces hallucinations, improves technical accuracy, and ensures code snippets and recommendations reflect current best practices.

**Live documentation access** : Foundation models often lack visibility into recent CSP changes. MCP servers offered by the CSP are built to dynamically fetch the latest APIs, SDKs, and release notes—keeping your AI assistant aligned with what’s actually available.

**Workflow integration** : Whether you’re using CDK (Cloud Development Kit), Terraform, or CLI, MCP servers expose reusable workflows the model can invoke directly. That means more consistent results and fewer manual interventions for repetitive tasks.

**Deep domain alignment** : Generic models aren’t trained to specialize in cloud architecture or FinOps. MCP servers fill this gap with curated knowledge specific to CSP services, boosting accuracy for tasks that require domain expertise.

**Tools, Agents, and Capabilities Discovery** : MCP servers aren’t just API gateways. Clients can interrogate them on a list of tools or agents available, and receive this list. The clients can then render a UI depending on the tools available and use these capabilities. This list can evolve, as long as the MCP server keeps this updated. This means that as long as the server performs a discovery and curates this list, it can inject these capabilities to clients nearly automatically, acting as a source of truth. Clients will no longer worry about which tools are available and trust the server to continuously update this list.

### Benefits by Persona:

#### For AI Application Developers

  * Connect to any MCP-compliant server without custom integration work
  * Focus purely on model behavior and user experience, not infrastructure

#### For Tool and API Providers

  * Build an MCP server once; enable adoption across AI agents and apps effortlessly, as the server performs the discovery and propagates an updated list of tools and agents available to all its clients
  * Define tools and expose capabilities that any compliant client can consume

#### For Enterprises

  * Clear separation of concerns between AI product teams and backend/data teams
  * Speed up delivery while maintaining strong governance and observability
  * Enables AI deployment patterns similar to microservices, supporting modularity and reuse across teams. While discovery is centrally managed, enterprises can layer additional filtering or governance policies to align tool visibility with business needs

#### For End Users

  * Benefit from richer, more contextual AI experiences, powered by tools and agents discovered via MCP.
  * Leverage LLMs that naturally understand their workflows, data, and tools through seamless integration enabled by MCP.

## Drawbacks to MCP Use

### Technical Limitations

  * **Limited Context Window** : LLMs have a finite token capacity. Each active MCP connection and its metadata consume part of this window, potentially leading to information truncation and negatively impacting response accuracy
  * **Authentication Challenges** : While MCP standardizes tool integration, authentication remains fragmented, with different services using OAuth, API keys, or session-based authentication, complicating implementation and maintenance
  * **Hard to Segregate Scopes** : The MCP performs a discovery, keeping an updated list of tools and agents available. However, providing this single list to all clients indiscriminately, regardless of their business purpose, will cross boundaries and can make AI applications behave differently than their intended purpose
  * **Integration Overhead** : Although MCP facilitates LLM integration with existing APIs, implementation can still require significant coding and configuration effort, especially for custom workflows
  * **Compliance and Governance** : In sectors like healthcare and finance, adopting MCP necessitates stringent governance to ensure compliance with regulations such as HIPAA or GDPR. Lack of adequate controls can expose sensitive data

### FinOps Considerations

  * **Context Impacts Token Count:** Additional context provided to models charging on a token basis can add additional cost
  * **MCP won’t solve everything** : Because MCP exposes tools abstractly, it may be difficult to correlate usage back to specific cost drivers unless tagging, logging, and attribution mechanisms are properly implemented
  * **Cross-team Visibility** : In shared environments, MCP-based AI workflows may span multiple business units or services. Without scoped discovery or naming conventions, this can hinder efforts to allocate costs cleanly by team or function
  * **Hard to Segregate Scopes** : The MCP performs a discovery, keeping an updated list of tools and agents available. However, providing this single list to all clients indiscriminately, regardless of their business purpose, will cross boundaries and can make the compliance difficult to manage, especially in regulated verticals (like Finance or Health Care)
  * **Latency vs. Cost Trade-offs** : Real-time context injection and agent orchestration may introduce latency that drives up compute cost (e.g., longer inference sessions), which FinOps teams need to weigh against UX or business value

### Security Risks

  * **Remote Code Execution (RCE)** : A critical vulnerability (CVE-2025-49596) in Anthropic’s MCP Inspector allowed attackers to execute code remotely on local development environments when developers visited malicious websites while the Inspector was active
  * **Token Theft and Session Hijacking** : MCP’s architecture can expose stored OAuth tokens, enabling attackers to create malicious MCP server instances and access sensitive data.[ pillar.security](<https://www.pillar.security/blog/the-security-risks-of-model-context-protocol-mcp?utm_source=chatgpt.com>)
  * **Prompt Injection and Tool Impersonation** : Researchers have demonstrated that MCP is susceptible to prompt injection attacks, where malicious tools can masquerade as trusted ones, leading to data exfiltration or unauthorized command execution.[ en.wikipedia.org](<https://en.wikipedia.org/wiki/Model_Context_Protocol?utm_source=chatgpt.com>)
  * **MCP Server Compromise:** MCP servers represent a high-value target because they typically store authentication tokens for multiple services. If attackers successfully breach an MCP server, they gain: 
    * Access to all connected service tokens (Gmail, Google Drive, Calendar, etc.)
    * The ability to execute actions across all of these services and access corporate resources.
  * This creates a concerning “keys to the kingdom” scenario where compromising a single MCP server could grant attackers broad access to a user’s digital life or even an organization’s resources if deployed in enterprise settings.
  * **Insufficient Access Control and Permissions Scoping** : MCP assumes a trusted client-server relationship, but does not natively enforce fine-grained access control across tools, prompts, or resources. Without proper role-based access mechanisms, clients may invoke tools or access data beyond their intended scope—raising the risk of data leaks or unauthorized operations. Enterprises must implement external access control layers to ensure that agents only operate within the bounds of their designated permissions.

## MCP and FinOps Use Cases

As enterprises scale GenAI usage, FinOps practitioners are increasingly involved in understanding, forecasting, and optimizing AI-related spend. MCP provides native benefits to FinOps practices by improving **visibility, modularity, and governance** across AI application architectures.

### Key FinOps Benefits of MCP:

  * **Context Modularity** : MCP enables the separation of model usage from data access. FinOps teams can track usage patterns by context type (e.g., CRM, logs, internal docs) to better understand where cost and value concentrate.
  * **Tooling Governance** : With tools exposed as standardized APIs, FinOps can benchmark performance and cost efficiency per tool, across workloads and business units.
  * **Prompt Reuse & Cost Attribution**: Prompts become versioned and trackable resources. This allows for better attribution of model usage to specific teams or workflows, enabling true cost accountability.
  * **Environment Control** : MCP servers can be regionally deployed and rightsized, supporting optimization efforts like selecting lower-cost infrastructure or controlling egress and API spend.
  * **Example in Practice:** In a FinOps-enabled AI environment, an enterprise could deploy MCP servers that expose only tools and agents pre-approved through business and cost governance workflows. For instance, before a cost-analysis agent is made available to client applications, it may be vetted against criteria such as: 
    * Estimated cost per invocation
    * Accuracy benchmarks across past uses
    * Alignment to department-specific policies
    * Security and compliance validation (e.g., data residency)

Only agents that meet these criteria are **authorized** and **exposed to clients**. This curation process—while not defined by the MCP protocol itself—can be implemented as a custom governance layer. FinOps teams may further enhance this with continuous auditing of usage patterns, cost attribution, and drift detection (e.g., if an agent begins consuming more resources than expected).

MCP can support the **FinOps Foundation’s FOCUS initiative** (FinOps Open Cost and Usage Specification), which aims to standardize cost and usage data. While **FOCUS defines how to describe AI-related spend** , **MCP defines how context and interaction flows into AI workloads**. The two are complementary: FOCUS governs _what_ we spend; MCP governs _how_ that spend is operationalised through intelligent context and action.

### MCP Use Cases for FinOps

MCP use can be a powerful accelerator for FinOps, turning time-consuming, manual cost management tasks into near real-time, automated workflows. Its true potential emerges when combined with specialized agents—Infrastructure as Code (e.g., Terraform, CloudFormation), container orchestration platforms (EKS, ECS), and serverless environments (Lambda, Step Functions). Together, they form a modular, intelligent system for cloud financial management.

  * **IaC agents** validate deployments against budget thresholds or compliance constraints before provisioning.
  * **Container agents** help identify Kubernetes cost inefficiencies across clusters and namespaces.
  * **Serverless agents** surface function-level cost breakdowns and optimization levers, such as memory tuning or invocation patterns.

This architecture enables FinOps teams to go beyond reporting, creating a closed-loop system where business requirements, engineering decisions, and financial outcomes are tightly aligned.

### Key Use Cases

#### 1\. Automated Cost Analysis & Anomaly Detection

Interrogate live environments to surface cost spikes, trends, and inefficiencies.

**Example prompts:**

  * “Analyze our AWS costs for the last 30 days and identify the top 3 cost drivers”
  * “Why did Lambda spend increase by 300% last week?”
  * “Compare RDS costs across regions and propose cost-saving actions”

#### 2\. Scenario Modeling & Cost Impact Simulations

Quantify the financial implications of lifecycle changes, upgrades, or compliance risks.

**Example prompts:**

  * “Estimate the cost of migrating PostgreSQL 11 before extended support fees”
  * “Model EKS upgrade from v1.21 to v1.28, including dual-cluster transition period”
  * “Assess cost impact of Windows Server 2012 end-of-support across EC2 fleet”

#### 3\. Cost Estimation from Business Requirements

Bridge the gap between product needs and cloud architecture with embedded cost forecasting.

**Example prompts:**

  * “Estimate the cost of a an IoT platform for 100K daily users”
  * “Project costs for a data lake with 50TB daily ingestion”
  * “Design and estimate a fraud detection system processing 10M transactions/day”

#### 4\. Scaling & Unit Economics Analysis

Model growth scenarios and understand cost elasticity across service choices.

**Example prompts:**

  * “How does cost evolve from 1K to 100K users?”
  * “Compare 10x traffic growth costs: vertical vs horizontal scaling”
  * “Model cost evolution with 50% monthly user growth”

#### 5\. Multi-Stakeholder FinOps Reporting

Produce tailored outputs for engineering, finance, or executive audiences.

**Example prompts:**

  * “Generate monthly FinOps KPIs dashboard for finance”
  * “Create executive summary on optimization opportunities for the board”
  * “Write technical cost optimization report for DevOps”

#### 6\. Proactive Budget Guardrails

Integrate budget policies into CI/CD pipelines or provisioning flows.

**Example prompts:**

  * “Block Terraform deployment if estimated monthly cost > $5K”
  * “Alert if EKS cluster additions exceed 20% of last month’s cost baseline”

#### 7\. Tagging & Cost Allocation Enforcement

Automate validation of tagging completeness and enforce allocation policies.

**Example prompts:**

  * “Audit untagged resources and show top offenders by service”
  * “Validate cost allocation coverage per business unit for Q2”

## Architecture Overview

The Model Context Protocol (MCP) defines a modular, layered architecture that separates the concerns of AI orchestration, data access, and user interaction. This enables greater flexibility, reusability, and observability—core principles for scalable and governable AI systems.

MCP is composed of four key components:

### 1\. MCP Client

The client is the AI-enabled application or agent that consumes context and invokes actions. Its responsibilities include:

  * Discovering available tools and resources from the MCP Host
  * Invoking tools dynamically based on model intent
  * Composing prompts using structured templates
  * Routing user queries and contextual data through the protocol interface

This abstraction allows AI apps to remain lightweight and focus on interaction logic, while delegating data access and tool execution to the server layer.

### 2\. MCP Host

The MCP Host is the orchestrator or runtime environment that manages one or more MCP Servers. It provides operational, networking, and security layers on top of MCP Servers, enabling:

  * Authentication and authorization across clients and services
  * Load balancing and scaling of multiple MCP Servers
  * Observability, logging, and usage metering for FinOps teams
  * Centralized governance and routing for AI traffic

By introducing the concept of Hosts, MCP enables enterprise-grade deployment and monitoring across distributed systems and multi-region setups.

### 3\. MCP Server

Each MCP Server implements the protocol and exposes three types of resources to clients:

  * **Tools** : Declarative, model-invoked actions such as reading from databases, posting updates to APIs, or writing files. Tools are described via metadata (parameters, description, permissions), enabling LLMs to invoke them intelligently based on the task at hand.
  * **Resources** : Application-defined data elements—structured or unstructured—that the server makes available to clients. These may include static documents, dynamic JSON records, logs, system metadata, or user context. Resources enhance prompt grounding and model accuracy by supplying domain-specific information.
  * **Prompts** : Reusable, version-controlled interaction templates. Prompts define how users interact with the AI, including inputs, output expectations, and fallback behavior. This allows teams to standardize AI behavior across use cases and track prompt-related usage for cost attribution.

![How MCP process utilizes tools, resources, and prompts](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201644%20723'%3E%3C/svg%3E)  
_Source:[Building Agents with Model Context Protocol](<https://www.youtube.com/watch?v=kQmXtrmQ5Zg>) (Anthropic)_

### 4\. Interoperability & Orchestration

The power of MCP lies in how these components interoperate:

  * A **Client** requests a prompt using a known template.
  * The **Host** routes the request to the appropriate **Server** , based on configuration or context.
  * The **Server** interpolates relevant **Resources** , invokes **Tools** as needed, and assembles the final prompt for the model.
  * The result is returned through the Host, enabling auditability and metric collection.

### Example Use Cases

**Tag-Based Spend Exploration**

  * “What was the total cloud spend last month for resources tagged with team:mlops?”
  * “List the five most expensive untagged services in our AWS environment.”
  * “Which cost centers consumed more than $10K last quarter, based on tagging?”

**Temporal Trends and Cost Drivers**

  * “Which services had the highest month-over-month increase in spend?”
  * “What are the top 3 contributors to our cloud cost growth over the past 90 days?”
  * “Compare EC2 costs by instance type across the last three months.”

**Business-Aligned Cost Analysis**

  * “How much did we spend on infrastructure supporting the e-commerce platform last month?”
  * “Compare cloud costs across our product lines: mobile app, analytics, and API services.”
  * “Which business unit had the highest infrastructure cost per user in Q2?”

**Forecasting and What-if Diagnostics**

  * “If our daily ingestion increases by 25%, what would be the expected monthly S3 cost?”
  * “What is the projected cost if RDS storage doubles over the next 6 months?”
  * “How would cost evolve if user traffic increases 10x, keeping the current architecture?”

Any scenario involving model-generated estimations or forecasts is inherently subject to potential inaccuracies, due to uncertainty and limitations in context or data quality.

#### Example: FinOps AWS MCP Server

[Review these examples of using the AWS Billing and Cost Management MCP.](<https://aws.amazon.com/blogs/aws-cloud-financial-management/aws-announces-billing-and-cost-management-mcp-server/>)

Unlocking FinOps capabilities for modern cloud teams just got simpler with the introduction of the AWS Billing and Cost Management Model Context Protocol (MCP) server, which makes advanced cost analysis and optimization features directly available to your favorite AI assistant or chatbot.

By integrating natural language queries, secure local credentials, and real-time access to your AWS account’s cost and usage data, the MCP server empower you to interactively analyze costs, identify savings opportunities, and perform detailed FinOps audits without navigating complex consoles or writing custom scripts. Whether asking about last month’s top spending services or discovering actionable recommendations for resource optimization, these capabilities streamline cost transparency and operational efficiency, making cloud financial management faster and easier.

#### Example: AWS Cost Analysis MCP

[Review this example of AWS Cost Estimation using Cost Analysis MCP.](<https://aws.amazon.com/fr/blogs/machine-learning/aws-costs-estimation-using-amazon-q-cli-and-aws-cost-analysis-mcp/>)

The AWS Cost Analysis MCP server brings powerful, on-demand financial insights directly into your terminal, letting you run natural-language queries to estimate future spend, compare actuals across services or tags, and forecast budgets within seconds. Its seamless integration with AWS Cost Explorer APIs means you can generate detailed reports and instantly export them as PDF or self-contained HTML, eliminating manual data wrangling and speeding up decision-making for teams. By automating both analysis and presentation, it ensures your FinOps workflow stays both precise and efficient.

#### More MCP Servers for Operations:

  * [Generally available AWS MCP Servers](<https://awslabs.github.io/mcp/servers/>)
  * [Using AI Agents with Azure](<https://learn.microsoft.com/en-us/cloud-computing/finops/toolkit/hubs/configure-ai>)

![Example of a MCP interaction cycle](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201044%201116'%3E%3C/svg%3E)  
_Source:[Building Agents with Model Context Protocol](<https://www.youtube.com/watch?v=kQmXtrmQ5Zg>) (Anthropic)_

## Conclusion

MCP fills a critical gap between advanced language models and the diverse systems they rely on. It defines how structured, rich context can be supplied to LLMs in a way that is scalable, secure, and observable. For FinOps teams, MCP supports not just cost efficiency, but also accountability and strategic alignment of AI initiatives with business goals.

As AI usage continues to accelerate, combining MCP’s standardized integration layer with FinOps practices and FOCUS metadata will empower organizations to operate GenAI at scale—responsibly and efficiently.

The authors have created a [GitHub repository](<https://github.com/OptimNow/finops-mcp-resources/tree/main>) to capture use cases and demos of several FinOps related MCP servers for practitioners who wish to experiment.

## Acknowledgements

We would like to thank the following people for their contributions and feedback on this Paper:

[ ![Thiago Mozart](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Thiago Mozart RealCloud ](<https://www.linkedin.com/in/thiago-mozart/>) [ ![Jean Latiere](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jean Latiere OptimNow ](<https://www.linkedin.com/in/jeanlatiere/>) [ ![James Barney](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) James Barney MetLife ](<https://www.linkedin.com/in/james-barney/>)

We’d also like to thank our supporters, Ermanno Attardo, James Barney, and Adam Richter.

Last updated: September 19, 2025

## Table of Contents

  * [Why Use MCPs? A FinOps Use Case](<#why-use-mcps-finops-use-case>)
  * [Drawbacks to MCP Use](<#drawbacks-to-mcp-use>)
  * [MCP and FinOps Use Cases](<#mcp-and-finops>)
  * [Architecture Overview](<#architecture-overview>)
  * [Conclusion](<#conclusion>)
  * [Acknowledgements](<#acknowledgements>)

###### [Build your FinOps for AI skills Learn the latest best practices to manage AI costs and token economics. Get started  ![Build your FinOps for AI skills](https://www.finops.org/wp-content/uploads/2025/07/certified-AIvalue.svg) ](<https://learn.finops.org/path/certified-finops-for-ai>)

##### Related FinOps Capabilities

[ Usage Optimization ](<https://www.finops.org/framework/capabilities/usage-optimization/>)
# Choosing an AI Approach and Infrastructure Strategy

**Summary:** AI infrastructure comes in different types, bringing new optimization considerations. Decide between the type of AI service that fits your infrastructure and business goals: Fully Managed, Partially Managed, or Self-Managed. Implement detailed, dynamic tagging to improve Allocation, Forecasting and Workload Optimization initiatives. Start simple and scale up, involving AI engineers and product owners to drive business value.

## Table of Contents

  * [Overview: Establishing AI Scope](<#overview-establishing-ai-scope>)
  * [Choosing the right AI model](<#choosing-the-right-ai-model>)
  * [Building AI/ML Models: Finops Perspective](<#building-ai-ml-models>)
  * [Key Challenges Finops needs to solve for managing AI workloads](<#key-finops-challenges>)
  * [AI Infrastructure Models](<#ai-infrastructure-models>)
  * [Infrastructure Selection Framework – Crawl / Walk / Run](<#infrastructure-selection-framework>)
  * [Personas with Infrastructure Alignment](<#personas-with-infrastructure-alignment>)
  * [Key Performance Indicators (KPIs)](<#kpis>)
  * [Identification of AI Workloads](<#identification-of-ai-workloads>)
  * [FinOps Best Practices for AI Cost Optimization](<#finops-best-practices-ai-cost-optimization>)
  * [Conclusion and Takeaways](<#conclusion>)
  * [Appendix](<#appendix>)
  * [Acknowledgments](<#acknowledgments>)

Use this paper to better understand how to choose an AI approach with FinOps principles, capabilities, and outcomes in mind. These guidelines and information will improve how FinOps Practitioners and Engineers align deployment choices with FinOps maturity level and technical readiness.

## Overview: Establishing AI Scope

Given the prominence of Generative AI in recent times, the diagram below represents its use within the broader gamut of AI ML capabilities, a key pre-context before we dive into the “FinOps for AI” focus for this paper.

Reference:[ https://www.ibm.com/think/topics/artificial-intelligence](<https://www.ibm.com/think/topics/artificial-intelligence>)

While traditional ML still dominates in structured data tasks and real-world industry applications. LLMs are rapidly increasing, particularly in NLP, generative AI, and multimodal applications by enabling automation, personalization, and advanced data processing.

With the unlimited potential of use, Compute costs and interpretability remain major barriers for LLM adoption in every use case.

## Choosing the right AI model

Choosing the right AI model is a very important part of the decision making in solving the business problem on hand – the following table shows a few examples of scenarios where the model could be traditional or LLM based on the requirements.

**Traditional ML models** | **LLMs**  
---|---  

  * **Structured Datasets**
    * Regression (Continuous Target Variables)
    * Classification – GBM (Gradient Boosting Machines), SVM
    * TimeSeries forecasting
    * Recommendation Engines
  * **Clustering Structured Data (** K-Nearest Neighbors)
  * **Image Analysis (** Convolutional Neural Networks)
  * **Recommendation Engine**
  * **Reinforcement Learning**

| 

  * Question-Answering Systems
  * Text Summarization
  * Content Generation
  * Knowledge Extraction
  * Sentiment Analysis
  * Text Classification and Categorization
  * Machine Translation

## Building AI/ML Models: Finops Perspective

AI typically entails a multi -variate set of stages, with each stage carrying a unit economic cost impact on the TCO and thereby the opportunity of applying FinOps principles to Inform, Optimize & Operate at scale.

The next section delves into the how & why AI driven recommendations can significantly impact Infrastructure decisions and vice versa and some use cases that interweave the types of infra with associated personas and the indicative KPIs that can be used to measure & manage for driving improvements.

## Key Challenges Finops needs to solve for managing AI workloads

  * **Alignment of AI-Specific Costs to Business Case Goals** – Cost visibility, accountability, and optimization are crucial to managing the ROI on AI initiatives especially when it comes to shared resources and complex inter-department data flows. This needs meticulous tagging (an AI for Finops opportunity) along with the need for clear attribution of observed variable costs of AI workloads across the data storage, compute and data transfer layers and reconciling it with the initial assumptions of the business case.

  * **Infrastructure Model Impact** – Choosing the appropriate AI infrastructure that aligns with the organization’s strategy and risk tolerance with respect to risk, performance and scalability has implications on AI Unit Economics. Given AI applications often require specialized hardware like GPUs, which can significantly fluctuate in usage and cost depending on the chosen infrastructure model (like cloud instances, on-premise servers, or hybrid setups) based on training and inference needs, making it difficult to accurately predict and optimize AI spending without a deep understanding of how the infrastructure is being utilized and impacting costs across different deployment scenarios.

  * Other considerations include Cost of Data Quality & Bias, TCO implications from an end to end Integration standpoint when plugging in 3rd party AI Services & Models and last, but not the least, the Cost of Ethical, Sustainable & Explainable AI when it comes to use cases that need to go through Audit and Regulatory scrutiny as well as white-box reporting of Scopes 2 & 3 Emissions.

## AI Infrastructure Models

**Fully Managed AI Infrastructure**(Example: AWS Bedrock, Google Vertex AI, Azure OpenAI Service)

Definition & Characteristics

  * Provider-managed solutions where infrastructure, scaling, and maintenance are handled by the cloud provider.
  * Abstracts infrastructure complexities, allowing teams to focus on AI development rather than infrastructure management.
  * FinOps Considerations 
    * Cost Predictability: Pay-as-you-go pricing, simplified billing.
    * Performance Optimization: Auto-scaling and optimized hardware stacks.
    * Operational Complexity: Minimal DevOps involvement required.
    * Security & Compliance: Managed security and compliance frameworks.

Pros & Cons

  * Pros: Low operational overhead, easy deployment, integrated security & compliance.
  * Cons: Vendor lock-in, limited flexibility, potential cost inefficiencies at scale.
  * When to Choose Fully Managed AI Infrastructure 
    * Best suited for early-stage AI adoption as well as organizations looking to leverage platforms rather than building own,
    * Experimentation and rapid prototyping
    * Teams with limited traditional DevOps expertise

**Partially Managed AI Infrastructure** (Example: AWS Sagemaker, Google Kubernetes Engine (GKE) with AI, Azure Machine Learning)

Definition & Characteristics

  * Cloud-based AI infrastructure with user control over configurations, networking, and compute instances.
  * Offers pre-configured AI environments but allows organizations to optimize cost and performance manually.
  * FinOps Considerations 
    * Cost Efficiency: More flexible pricing, but requires active management.
    * Performance Tuning: Can select custom compute resources (GPUs/TPUs).
    * Operational Complexity: Requires DevOps/ML engineers for configuration and tuning.
    * Security & Compliance: More control over security policies but requires governance.
    * Pros & Cons 
      * Pros: Balance of control and convenience, ability to optimize compute resources.
      * Cons: Requires skilled teams to manage infrastructure efficiently.
      * When to Choose Partially Managed AI Infrastructure 
        * Best for organizations scaling AI workloads that need a balance between flexibility and ease of use.

**Self-Managed AI Infrastructure** (Example: Dedicated Instances, On-Prem NVIDIA DGX, Bare Metal AI Clusters)

Definition & Characteristics

  * Fully self-managed AI infrastructure, requiring direct control over hardware, networking, and resource allocation.
  * Offers maximum flexibility and is typically deployed in on-prem, hybrid cloud or dedicated single purpose environments.
  * FinOps Considerations 
    * CapEx vs. OpEx Trade-offs: Requires large upfront investment but can reduce long-term costs.
    * Cost Optimization: Can reduce cloud costs but requires in-depth financial and capacity planning.
    * Operational Complexity: High DevOps & AI infrastructure expertise required.
    * Security & Compliance: Full control over data governance, privacy, and compliance.
    * Pros & Cons 
      * Pros: Full control, long-term cost savings, compliance flexibility.
      * Cons: High operational burden, upfront investment, complex scalability.
      * When to Choose Self-Managed AI Infrastructure 
        * Best suited for AI-heavy enterprises, organizations with strict compliance needs, and those with stable, predictable AI workloads

The choice between these models significantly impacts cost efficiency, infrastructure maintenance, and performance scaling.

## Infrastructure Selection Framework – Crawl / Walk / Run

**Stage** | **Crawl (Beginner/Early Adoption)** | **Walk (Intermediate/Scaling AI Workloads)** | **Run (Advanced/Enterprise AI Maturity)**  
---|---|---|---  
**AI Infrastructure Model** | Fully Managed (e.g., AWS Bedrock, Google Vertex AI, Azure OpenAI) | Partially Managed (e.g., AWS SageMaker, Google Kubernetes Engine with AI, Azure ML) | Self-Managed (e.g., On-Prem NVIDIA DGX, Dedicated AI Clusters)  
**Technical Readiness** | Low – Focus on AI adoption with minimal infra complexity | Medium – Some DevOps & ML engineering expertise required | High – Requires in-depth infrastructure & AI workload management  
**FinOps Maturity** | Basic cost visibility, pay-as-you-go, minimal optimization | Cost monitoring, workload optimization, right-sizing resources | Advanced FinOps – CapEx vs OpEx trade-offs, custom cost models  
**Use Cases** | Experimentation, AI research, Proof of Concept (PoC) | Scaling AI workloads, optimizing AI cost-performance trade-offs | Enterprise AI at scale, mission-critical AI applications  
**Cost Considerations** | High per-unit costs, but low operational overhead | Balanced cost-efficiency, requires hands-on cost control | High upfront investment, lower long-term costs with optimization  
**Performance Optimization** | Auto-scaling, but limited customization | Customizable compute resources (GPUs, TPUs, networking) | Full control over hardware and performance tuning  
**Security & Compliance** | Managed security by cloud providers | Shared responsibility, governance policies required | Full control over security, compliance, and data privacy  
**Persona** | AI researchers, innovation teams, early adopters | ML engineers, FinOps teams, scaling organizations | AI-heavy enterprises, regulated industries, large-scale AI deployments  

## Personas with Infrastructure Alignment

**Persona** | **Use-case** | **Fully Managed AI Infra** | **Partially Managed AI Infra** | **Self-Managed AI Infra**  
---|---|---|---|---  
**FinOps Practitioner** | Implement cost controls and AI budget tracking to optimize cloud AI expenses | Optimizes AI spend through resource utilization and financial planning. | Tracks and optimizes AI infrastructure costs while ensuring governance over spend. | Tracks AI infrastructure costs, optimizes CapEx vs. OpEx, and ensures financial governance.  
**Engineer –** AI Researchers & Data Scientists | Runs AI training jobs with automated scaling in cloud AI services. | Focused on model development without worrying about infrastructure. | Configures AI environments, selects compute resources, and fine-tunes performance. | Designs, deploys, and optimizes AI models on dedicated hardware for maximum performance.  
**Engineer –** ML/Development Engineer | Deploys AI-powered chatbots or recommendation engines for real-time customer interactions. | Deploys AI models with minimal operational overhead and high scalability. | Manages AI model deployments with some infrastructure tuning. | Handles end-to-end AI deployment with full control over infrastructure.  
**Engineer –** DevOps & Cloud Engineers | Automates AI model deployment pipelines with cost-effective resource scaling. | Minimal DevOps involvement, as scaling and maintenance are managed by the provider. | Manages infrastructure setup, networking, and scaling for AI workloads. | Handles provisioning, networking, scaling, and maintenance of AI infrastructure.  
**Finance** | Tracks AI expenditures, ensuring budget adherence and financial reporting. | Oversees AI budget planning, monitors cloud AI spend, and ensures financial transparency. | Manages financial planning for AI infrastructure, forecasts AI-related costs. | Plans and justifies large capital investments (CapEx) while balancing OpEx.  
**Procurement** | Negotiate Infrastructure decisions and optimize procurement decisions | Ensures cost-effective managed AI services procurement. | Monitors AI compute costs, optimizes budget allocations, and negotiates cloud pricing. | Manages vendor selection, negotiates AI infra costs, and ensures optimal purchasing strategies.  
**Product Owners** | Aligns AI investments with business goals for cost-effective innovation. | Aligns AI investments with business goals for cost-effective innovation. | Balances AI cost efficiency with performance goals. | Ensures AI infra investments align with long-term business strategies.  
**Enterprise Innovation Teams** | Tests and validates AI use cases before scaling. | Tests and validates AI use cases before scaling. | Experiments with AI while balancing cost and control. | Drives AI innovation with full control over models and data.  
**Sales field** | Market segmentation, customer insights, and automation. | AI services automate buyer insights, content generation, competitor analysis – allowing sales teams to focus on execution rather than managing AI infrastructure. | Sales teams can fine-tune AI models for segmentation, integrate AI insights with their workflows while maintaining some control over data handling. | Enterprises needing deep control over AI-driven sales intelligence.  

## Key Performance Indicators (KPIs)

**Metric** | **Self-Managed AI** | **Fully Managed AI** | **Hybrid AI (Partially Managed)**  
---|---|---|---  
**Training Cost** | Direct GPU control, requires capacity planning | High per-hour cloud costs, but fully managed | Local infra for standard training, cloud for large-scale runs  
**Fine-Tuning Cost per Million Parameters** | Lower cost, but needs infrastructure | High API-based cost per parameter | Run lightweight fine-tuning locally, API fine-tuning for major updates  
**Retraining ROI (Accuracy Gain per $ Spent)** | High control over retraining efficiency but limited scalability | Optimized retraining cycles, but costly due to auto-scaling | Strategic retraining approach, balancing cloud efficiency and local control  
**Inference Cost** | Lower long-term cost, needs infra | High per-query pricing, zero infra setup | On-prem for frequent inference, cloud APIs for burst traffic  
**Latency-to-Cost Efficiency** | Low latency, requires dedicated resources | Cloud inference introduces network dependency | Edge computing solutions help maintain low-latency while reducing cloud dependency  
**Storage Cost per Model** | On-prem cheaper long-term | Cloud storage scales with high cost | Active models in cloud, old versions archived on-prem  
**Model Downtime Cost** | Less frequent downtime but requires in-house maintenance | Downtime risk depends on cloud SLAs, often mitigated by redundancy | Lower downtime risk by distributing workloads between cloud and on-premise  
**Regulatory Compliance Cost – CAPEX/OPEX** | High internal effort, low external cost | Cloud compliance tools reduce manual effort | Balance between in-house teams and cloud governance  
**AI Bias & Fairness Audit Cost per Model** | Internal compliance teams manage fairness checks | Cloud fairness audit tools (AWS, Google AI Governance) are available at a cost | Split compliance checks‚ sensitive audits on-prem, non-sensitive in cloud  
**Energy Consumption per Training Cycle** | High energy usage, can be optimized with renewables | Cloud providers optimize for efficiency but at a higher cost | Balanced approach‚ local compute for energy savings, cloud for scaling  
**Model Versioning & Maintenance Cost** | Requires manual version control, leading to increased infra costs | Automated versioning, but increasing storage costs over time | Versioning maintained locally for core models, cloud for scalability  

## Identification of AI Workloads

In order to effectively practice FinOps for AI, it is imperative for organizations to accurately identify AI-related workloads, among all the workloads running in their cloud or data center. AI workloads themselves can be running in any of SaaS/PaaS/IaaS/OnPrem setups. Typically, workloads can be considered as AI-related in one of the following three ways.

  * **Known AI workloads** : These are immediately obvious software/services published by the vendors as AI related. For eg, AWS Sagemaker, Azure OpenAI etc…
  * **Manually Tagged AI Workloads** : Any workloads explicitly tagged by the organization as related to AI. For example, organizations running custom REST-APIs for exposing model services may tag the appropriate VMs as AI-related workloads.
  * **Discovered AI Workloads** : It may be possible to use third party scanners or customized rules to detect any running processes indicative of AI use, within the infrastructure.

It is important for FinOps practitioners to have a reasonably robust method of identifying AI-related workloads, preferably using a combination of all these approaches. Below is the mind-map of how these approaches could be leveraged, with some examples that typify identification of AI workloads in different contexts

## FinOps Best Practices for AI Cost Optimization

### Cost Visibility

  * **Enable tracking** of AI infrastructure costs at a granular level.
  * **Structured Tagging** – Use structured tags (e.g., AI_Chatbot_Store101) to track AI workloads by function, location, or department.
  * **Dynamic Tagging** – Based on usage dynamically tag resources without hindering metadata
  * **Metadata Attribution** – Measure AI impact through chatbot response times, interaction frequency, resolution rates, and cost per engagement.
  * **Service Mapping** – Correlate AI spend with business KPIs, such as chatbot-driven conversions and peak usage periods, to optimize infrastructure costs.
  * **Proportionate Rule-Based Tagging** – For shared AI resources, define rule-based tagging schemes to allocate AI vs. non-AI costs proportionally. (e.g., 70% for reporting/analytics and 30% for AI inferencing).
  * **Proportionate shared cost allocation** Distributes spend based on predefined split types, ensuring fair cost distribution for shared services.

### AI Model Efficiency & Optimization

  * **Prompt Engineering** – Even with a good understanding of prompt engineering, optimizing input/output token usage can significantly reduce costs.
  * **Model Selection** – Use managed models where appropriate; choosing the right model is crucial for cost and performance optimization.
  * **Feature Engineering** – Reduce the number of parameters, leading to lower training time and cost.
  * **Early Stopping for Training** – Prevent overfitting and unnecessary compute costs by stopping training once optimal accuracy is reached.
  * **Data Cleaning & Preprocessing** – Remove duplicate entries, correct errors, handle missing values, and transform data for better model efficiency, reducing computational overhead.

### Compute Cost Optimization

  * **Cost-Aware Training** – Optimize retraining frequency, favor smaller models, and leverage transfer learning to reduce compute costs.
  * **Workload Scheduling** – Time AI workloads for off-peak hours and leverage preemptible/spot instances for non-critical tasks.
  * **Sustainable AI Compute** – Use low-carbon, energy-efficient regions, GPU pooling, and adaptive cooling strategies.
  * **Reserved & Spot Instances** – Balance reserved capacity for steady AI workloads with spot instances for variable demand.
  * **Automated Budget Controls** – Implement cost alerts, auto-shutdown for idle resources, and anomaly detection to prevent budget overruns.

#### Want to dive deeper?

Read about the Tokenomics Foundation Project: [Big-T Notation](<https://www.tokeneconomics.com/projects/big-t-notation/>)

## Conclusion and Takeaways

AI adoption is growing fast, but choosing the right infrastructure is key to keeping costs under control while ensuring performance and scalability. Whether you go for a **fully managed, partially managed, or self-managed setup** , the decision should align with your team’s technical readiness and FinOps maturity. Additionally, the [Tokenomics Foundation](<https://www.tokeneconomics.com>) will be a key reference for diving deeper into the details of generation, use, and value of tokens and all of their corresponding cost drivers as time goes on. FinOps will still manage, report, and allocate that value to the organization.

Here are the biggest takeaways:

  * **One size doesn’t fit all** – Fully managed AI services are great for quick adoption and minimal hassle, but they come with higher costs and less flexibility. Self-managed setups give you full control but require expertise and upfront investment. A partially managed approach can offer the best of both worlds.
  * **AI can get expensive** – Running AI workloads means dealing with high compute costs. Applying FinOps best practices like cost forecasting, workload scheduling, and reserved instances can help keep spending in check.
  * **Balance between flexibility and control** – If agility is your priority, a cloud-based AI solution might work best. If compliance and cost control matter more, an on-prem or hybrid model might be the way to go.
  * **Different persona have different needs** – FinOps teams care about cost efficiency, engineers focus on performance, and product owners want AI to drive business value. The right AI strategy depends on who’s using it**.**
  * **Start simple and scale up** – Use the Crawl-Walk-Run approach: start with fully managed AI for quick experiments, move to a partially managed setup for scaling, and consider self-managed AI when you need full control over infrastructure and compliance.

## Appendix

### Key Performance Indicators (KPIs)

**Metric** | **Self-Managed AI** | **Fully Managed AI** | **Hybrid AI (Partially Managed)**  
---|---|---|---  
**Regulatory Compliance Cost – OPEX** | **High internal effort, low external cost** | **Cloud compliance tools reduce manual effort** | **Balance between in-house teams and cloud governance**  
**Training Cost per Million Parameters** | Lower cost but manual infra required | Expensive per GB, fully managed services | Process-sensitive data locally, bulk processing in cloud  
**Inference Cost per 1K Predictions** | Lower long-term cost, needs infra | High per-query pricing, zero infra setup | On-prem for frequent inference, cloud APIs for burst traffic  
**API Cost vs. Self-Hosted Model** | Self-hosting eliminates API costs but needs infra | Cloud APIs costly but no infra required | Hybrid: Frequently used models on-prem, occasional API calls  
**Compute Cost per Training Session** | Direct GPU control requires capacity planning | High per-hour cloud costs, but scalable and fully managed | Uses local infra for standard training, cloud for large-scale runs  

## Acknowledgments

We’d like to thank the following people for their work on this Paper:

[ ![Niladri Ray](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Niladri Ray Flexera ](<https://www.linkedin.com/in/niladri-ray-340824/>) [ ![Borja Martinez](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Borja Martinez NTT Data ](<https://www.linkedin.com/in/bormartinez/>) [ ![Rahul Kalva](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Rahul Kalva Wells Fargo ](<https://www.linkedin.com/in/kalvarahul/>) [ ![Dilli B](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Dilli B Munich Re ](<https://www.linkedin.com/in/cdillibabu/>) [ ![Premnadh K](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Premnadh K Flexera ](<https://www.linkedin.com/in/premnadh/>) [ ![Priya Srivastav](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Priya Srivastav Flexera ](<https://www.linkedin.com/in/priyasrivastav/>) [ ![Brent Segner](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Brent Segner Capital One ](<https://www.linkedin.com/in/brent-segner-405b0b14/>) [ ![James Barney](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) James Barney MetLife ](<https://www.linkedin.com/in/james-barney/>)

We’d also like to thank our FinOps Foundation staff for their support: Rob Martin, Samantha White, and Andrew Nhem.

Last updated: May 22, 2025

## Table of Contents

  * [Overview: Establishing AI Scope](<#overview-establishing-ai-scope>)
  * [Choosing the right AI model](<#choosing-the-right-ai-model>)
  * [Building AI/ML Models: Finops Perspective](<#building-ai-ml-models>)
  * [Key Challenges Finops needs to solve for managing AI workloads](<#key-finops-challenges>)
  * [AI Infrastructure Models](<#ai-infrastructure-models>)
  * [Infrastructure Selection Framework – Crawl / Walk / Run](<#infrastructure-selection-framework>)
  * [Personas with Infrastructure Alignment](<#personas-with-infrastructure-alignment>)
  * [Key Performance Indicators (KPIs)](<#kpis>)
  * [Identification of AI Workloads](<#identification-of-ai-workloads>)
  * [FinOps Best Practices for AI Cost Optimization](<#finops-best-practices-ai-cost-optimization>)
  * [Conclusion and Takeaways](<#conclusion>)
  * [Appendix](<#appendix>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ Usage Optimization ](<https://www.finops.org/framework/capabilities/usage-optimization/>) [ Architecting & Workload Placement ](<https://www.finops.org/framework/capabilities/architecting-workload-placement/>)
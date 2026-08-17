# Optimizing GenAI Usage: A FinOps Perspective on Cost, Performance, and Efficiency

**Summary:** Optimizing GenAI inference can account for 80-90% of the total spend in many cases, i.e. Retrieval Augmented Generation (RAG), Prompt Routing, etc.. Engineers should consider GPU Pooling and Dynamic Scaling to reduce underutilization, which can be as high as 70-85%. Improve accountability by providing AI engineers and product owners with granular, actionable metrics that define the tradeoff between cost, performance, and business impact.

## Table of Contents

  * [Introduction](<#introduction>)
  * [FinOps for GenAI](<#finops-for-genai>)
  * [Choosing the Right Model: Cost vs. Performance Trade-offs](<#cost-tradeoffs>)
  * [Optimizing GPU and CPU Utilization](<#optimizing-gpu-cpu-utilization>)
  * [Optimizing Other Resources](<#optimizing-other-resources>)
  * [Optimizing Inference](<#optimizing-inference>)
  * [Conclusion & Key Takeaways](<#conclusion-takeaways>)
  * [Acknowledgments](<#acknowledgments>)

## Introduction

The rapid adoption of Generative AI (GenAI) presents both transformative opportunities and significant financial challenges for organizations. As businesses integrate GenAI into their workflows, they face rapidly escalating cloud compute costs, complex infrastructure requirements, and difficult optimization decisions that directly impact both performance and budget sustainability. Managing these workloads effectively requires a strategic approach to balancing cost, scalability, and resource efficiency. This paper is a deeper dive that builds upon the [Effects of Optimization on AI Forecasting](<https://www.finops.org/wg/effect-of-optimization-on-ai-forecasting/>) paper published in 2025 by the FinOps Foundation’s FinOps for AI Working Group.

The [Tokenomics Foundation](<https://www.tokeneconomics.com>) will be a key reference for diving deeper into the details of generation, use, and value of tokens and all of their corresponding cost drivers as time goes on. FinOps will still manage, report, and allocate that value to the organization.

### How to Talk to Engineering Teams About Optimization

Effective collaboration between finance and engineering teams requires bridging significant knowledge and perspective gaps:

**Key communication strategies:**

  * **Focus on enabling rather than restricting** : Present cost management as a way to expand AI capabilities within budget constraints
  * **Speak the right language** : Learn and use appropriate technical terminology to build credibility
  * **Connect costs to technical decisions** : Help engineers understand the financial implications of specific architectural choices
  * **Provide actionable metrics** : Deliver cost data at a granular level that enables specific improvements
  * **Recognize performance priorities** : Acknowledge the importance of the business and technical goals of the AI system aside from cost
  * **FinOps as advisory and pricing partner:** FinOps teams provide cost, pricing and usage trends, optimization and tagging advisory topics including custom rate cards to the engineers

**Practical implementation approaches:**

  1. **Joint working sessions** : Regular meetings between finance and engineering to review costs and identify optimization opportunities
  2. **Embedded FinOps specialists** : Technical finance team members who participate in AI development processes
  3. **Shared library of reusable patterns:** Provide common location for engineers to see good mature patterns exist and use/enhance to increase agility, avoid duplication
  4. **Shared dashboards** : Common visibility into both performance and financial metrics
  5. **Recognition programs** : Highlighting and rewarding cost-efficient implementations

### Key Challenges in Managing GenAI Workloads

Organizations face several critical challenges when implementing GenAI:

  * **Unpredictable Scaling Dynamics** : GenAI workloads exhibit non-linear cost growth, unpredictable usage patterns, and inference costs that multiply as application usage grows.
  * **Resource Utilization Inefficiencies** : Common problems include GPU underutilization (often operating at just 15-30% of capacity), overprovisioning, improper resource matching, and static provisioning that maintains excess capacity.
  * **Model Selection Complexity** : The rapidly evolving landscape of model options makes it difficult to navigate trade-offs between performance, cost, and efficiency.
  * **Cross-Functional Coordination Gaps** : Effective GenAI management requires unprecedented collaboration across technical, financial, and business functions.
  * **Pricing Model Variability** : Pricing models for GPU and AI resources can be very different from VM, storage and network. Charges by token, token limit, PTU, etc. may be challenging to reconcile with other charges

This paper explores key optimization strategies, including choosing the right model size, improving GPU/CPU utilization, leveraging FinOps best practices, and implementing inference optimization techniques to maximize the ROI of GenAI deployments while ensuring scalability and sustainability.

## FinOps for GenAI

FinOps for Generative AI extends traditional cloud financial management practices to address the unique characteristics of AI workloads. This approach brings financial accountability to AI spending through structured approaches to visibility, optimization, and governance.

### Understanding the Balance Between Cost, Performance, and Business Impact

GenAI implementations require continuous balancing of three competing priorities:

  * **Cost efficiency** : Minimizing the financial resources required for AI capabilities
  * **Technical performance** : Maximizing the quality, accuracy, and responsiveness of AI systems
  * **Business impact** : Delivering meaningful value to the organization and its customers

Organizations that explicitly manage this three-way balance typically achieve 30-50% better overall outcomes than those that focus exclusively on either technical or financial metrics.

## Choosing the Right Model: Cost vs. Performance Trade-offs

Selecting the right Generative AI model involves balancing cost, performance, and scalability based on business needs. This decision impacts both immediate implementation costs and long-term operational expenses.

### Pre-trained vs. Custom Models

One of the first decisions is whether to use pre-trained foundation models or invest in custom model development:

  * **Pre-trained models** (e.g., Amazon Bedrock, OpenAI’s GPT, Meta’s Llama, Google’s Gemini) offer immediate access to advanced AI capabilities with minimal upfront costs.
  * **Custom-trained models** require significant investment in data collection, training infrastructure, and ongoing maintenance, but provide superior domain specificity and control.

The choice depends on domain specificity requirements, data privacy concerns, long-term cost projections, and control requirements.

### Model Complexity & Cost

The size and complexity of a model significantly impact cost and performance:

**Model Size** | **Appropriate Use Cases** | **Cost Considerations**  
---|---|---  
Large Models (70B+ parameters) | Complex reasoning, creative content generation, nuanced understanding of context, multimodal capabilities | High inference costs, significant GPU memory requirements, typically require high-end hardware like NVIDIA H200 or A100  
Medium Models (7-70B parameters) | Content summarization, sentiment analysis, moderate complexity Q&A, code generation | Balanced cost profile, can run on mid-tier GPUs like NVIDIA A10 or L4, reasonable inference costs  
Small Models (1-7B parameters) | Classification tasks, structured information extraction, simple Q&A, domain-specific applications | Low inference costs, can run on consumer GPUs or newer CPUs, suitable for high-volume applications and edge deployment  

Scaling up to larger models increases cloud compute expenses, while using smaller models or hybrid approaches (e.g., routing simpler queries to small models and complex tasks to larger ones) can optimize costs without sacrificing quality. Model distillation and data distillation can allow smaller models to mimic the behavior of larger ones, lowering inference latency and reducing compute costs.

### Inference vs. Training Costs

Beyond model selection, the ongoing cost of AI inference and training plays a crucial role in cost management:

  * **Training costs** include high-performance GPUs, massive datasets, and extended compute hours, making it a costly and time-intensive process. Training costs can far outweigh inference costs in models that are not highly utilized. Training optimization may be considered for a future paper.
  * **Inference costs** can accumulate significantly, especially in cloud environments with usage-based pricing models (e.g., AWS Bedrock, Azure OpenAI Service, Google Vertex AI).

### Fine-Tuning vs. Prompt Engineering

Organizations have multiple options for adapting pre-trained models to specific needs:

  * **Full Fine-tuning** involves retraining the entire model on domain-specific data, delivering optimal performance but requiring significant computational resources.
  * **Parameter-efficient Fine-tuning** methods like LoRA (Low-Rank Adaptation) update only a small fraction of the model’s parameters, reducing computational requirements by 90-99% while preserving most performance benefits.
  * **Prompt Engineering** offers a low-cost alternative that requires no model training, making it particularly effective with newer foundation models that have strong few-shot learning capabilities.

Many organizations implement a hybrid strategy, using prompt engineering for most adaptations and reserving fine-tuning for cases where prompt engineering alone cannot achieve the required performance.

Fine tuning of existing base models must be balanced with the cost of data storage and reindexing which may have to be done when tuning.

## Optimizing GPU and CPU Utilization

Effective compute resource management is essential for balancing cost, performance, and efficiency in GenAI workloads. Underutilization occurs when AI models are allocated expensive resources but do not fully leverage their processing power, leading to wasted resources.

### Right-Sizing Compute Resources for AI Workloads

Selecting the appropriate compute resources for different GenAI tasks significantly impacts both performance and cost-efficiency:

  * **GPUs (Graphics Processing Units)** are optimal for training large models and batch inference but come with high acquisition costs and power consumption.
  * **TPUs (Tensor Processing Units)** excel with TensorFlow workloads and large-scale training but may introduce vendor lock-in and have limited framework support.
  * **CPUs (Central Processing Units)** are cost-effective for preprocessing/postprocessing and small model inference but have limited parallel processing capabilities.

The deployment mode—real-time or batch processing—also impacts resource requirements:

  * **Real-time Inference** requires provisioned capacity to handle peak loads and typically uses latency-optimized hardware with smaller batch sizes.
  * **Batch Inference** can leverage larger batch sizes, higher resource utilization, and potentially use spot/preemptible instances for cost savings.

### GPU Utilization Strategies

To counteract underutilization, organizations can implement several strategies:

#### Multi-tenancy and GPU Pooling

Latest generations of GPU devices in public cloud may not be as available, which may require purchasing or reserving them for longer periods of time, or require you use them through managed service platforms. Sharing GPU resources across multiple workloads, models, or teams can significantly improve utilization rates and cost-efficiency through:

  1. **GPU pooling** : Creating shared resource pools accessible to multiple workloads
  2. **Job prioritization** : Establishing clear policies for workload prioritization
  3. **Resource quotas** : Setting limits on individual or team resource consumption
  4. **Access controls** : Implementing governance around resource allocation
  5. **Token Management:** Token proxies which are layered in front of the API to identify the source (and allocation of cost) of shared resources

Organizations implementing multi-tenancy often see GPU utilization rates improve, dramatically improving the return on infrastructure investments.

#### Scaling GPU Clusters Dynamically

Dynamic scaling adapts GPU resources to match changing workload requirements through:

  1. **Workload forecasting** : Predicting resource needs based on historical patterns
  2. **Scaling triggers** : Defining metrics and thresholds that initiate scaling events
  3. **Infrastructure automation** : Implementing programmatic resource provisioning
  4. **Instance selection** : Choosing appropriate instance types for different scaling scenarios

Organizations implementing dynamic scaling typically reduce GPU costs by 40-70% compared to static provisioning while maintaining performance service levels.

### CPU Workload Optimization

Strategic workload distribution between GPUs and CPUs can significantly improve cost-efficiency:

  1. **Data preparation** : Moving data loading, transformation, and tokenization to CPUs  
**Result processing** : Handling output formatting, filtering, and aggregation on CPUs
  2. **Orchestration** : Managing workflow coordination on CPU instances
  3. **Caching and storage** : Implementing result caching and storage on CPU-based systems

Organizations that effectively implement CPU offloading should see a 20-35% reduction in GPU costs while maintaining or improving overall throughput.

### Saturation vs. Utilization Metrics

Traditional GPU utilization metrics can be misleading. Organizations should track two distinct measurements:

  * **GPU Utilization** : Measures how often any GPU resource (cores, memory, etc.) is active, but does not indicate whether the GPU is being used efficiently.
  * **GPU Saturation** : Calculated by measuring average wattage draw over time relative to the GPU’s maximum power rating, providing a better indicator of true efficiency.

If a GPU shows high utilization but low wattage draw, it may be inefficiently assigned to a workload that doesn’t fully leverage its capabilities.

These metrics may or may not be available for GPU resources you are using depending on whether you are using GPUs in your data center, as IaaS in public cloud, or via a managed service provider platform.

## Optimizing Other Resources

Beyond model selection and compute optimization, the underlying infrastructure—including networking, storage, and databases—significantly impacts the performance, cost-efficiency, and scalability of GenAI deployments.

### Network Optimization

Large language models with billions of parameters require substantial data movement between processing units during both training and inference:

#### XL Models and Processor Adjacency

Key considerations for optimizing network configuration for large models include:

  * **Inter-GPU communication** : High-bandwidth, low-latency connections between GPUs are critical for distributed training and inference
  * **Processor proximity** : Physical placement of GPUs/TPUs affects communication efficiency
  * **Network topology** : The arrangement of connections between compute resources impacts parallel processing performance

Optimization strategies include:

  1. **NUMA-aware placement** : Configure workloads to respect Non-Uniform Memory Access boundaries
  2. **GPU clustering** : Place GPUs requiring frequent communication within the same server or rack
  3. **High-speed interconnects** : Leverage high-bandwidth GPU interconnects like NVLink where available
  4. **InfiniBand networking** : Implement high-throughput, low-latency networking for distributed training

Organizations implementing these strategies can reduce training times and improve inference throughput for large models.

#### Bandwidth and Latency Optimization

GenAI workloads generate significant network traffic. Key optimization approaches include:

  1. **Dedicated AI networks** : Segregating AI traffic from general enterprise traffic
  2. **Quality of Service (QoS)** : Prioritizing critical AI communication patterns
  3. **Jumbo frames** : Increasing maximum transmission unit size for efficiency
  4. **Edge caching** : Positioning frequently accessed data closer to compute resources

### Storage Optimization

AI training workflows involve massive datasets that must be efficiently delivered to compute resources:

Optimization strategies include:

  1. **Storage tiering** : Using different storage classes based on access patterns
  2. **Local caching** : Implementing fast storage near compute resources
  3. **Parallel file systems** : Deploying specialized systems (e.g., Lustre, BeeGFS) for high-throughput access
  4. **Data pipeline optimization** : Restructuring workflows to minimize I/O bottlenecks

Organizations that implement comprehensive storage optimization typically see improvements in training throughput and significant reductions in infrastructure costs.

For example, migrating from traditional SAN storage (GP2) to newer NVMe-based solutions (GP3) often delivers 3-10x performance improvements for random access patterns common in AI workloads, with potential cost savings through better efficiency.

### Database Optimization

#### Vector Databases for AI Workloads

Traditional databases are not optimized for the high-dimensional vector representations used in modern GenAI applications. Purpose-built vector databases offer:

  * **Similarity search** : Efficient retrieval of vectors based on proximity
  * **High-dimensional indexing** : Specialized data structures for embedding storage
  * **Scaling characteristics** : Ability to handle billions of vectors with low latency

Vector databases play a critical role in retrieval-augmented generation (RAG) architectures, enabling smaller models to access external knowledge efficiently. Organizations implementing vector databases typically see 40-60% improvements in query latency and higher accuracy in information retrieval tasks.

#### Database Scaling and Sharding Strategies

As GenAI applications grow, database infrastructure must scale efficiently:

  * **Vertical scaling** : Increasing resources on existing instances
  * **Horizontal scaling** : Adding more database instances to distribute load
  * **Sharding** : Partitioning data across multiple databases based on access patterns
  * **Replication** : Creating redundant copies for improved read performance and reliability

Effective database scaling strategies can reduce costs by 30-50% compared to simple overprovisioning while maintaining or improving performance for AI workloads.

## Optimizing Inference

Inference optimization represents one of the most significant opportunities for improving the cost-efficiency of GenAI deployments. While training costs are typically one-time investments, inference costs accumulate continuously as models are used in production, often accounting for 80-90% of the total cost of ownership.

To minimize costs, companies can optimize inference through a variety of mechanisms like:

  1. **Efficient hardware utilization** : Deploying models on appropriate hardware that balances performance and cost
  2. **Quantization** : Using INT8 or FP16 precision instead of FP32 can decrease memory requirements by 2-4x with minimal performance impact
  3. **Batching** : Processing multiple requests simultaneously improves throughput and reduces cost per inference
  4. **Caching** : Storing results for common queries eliminates redundant processing
  5. **Model compression** : Using techniques like pruning and knowledge distillation to create smaller, more efficient models

Other approaches are explored in the following sections.

### Retrieval-Augmented Generation (RAG)

RAG fundamentally changes the inference approach by combining knowledge retrieval with generative capabilities. GraphRAG combines knowledge graphs with vector search to provide more contextual data to large language models (LLMs) for cost-effective and precise generation:

  * **Knowledge extension** : Accessing information beyond the model’s training data
  * **Reduced parameter requirements** : Enabling smaller, more efficient models to deliver high-quality responses
  * **Up-to-date information** : Incorporating current data without retraining
  * **Improved factual accuracy** : Grounding responses in retrieved information
  * **Cost reduction** : Lowering inference costs through smaller model usage

When properly implemented, RAG allows organizations to use models 5-10x smaller than would otherwise be required for comparable quality, dramatically reducing inference costs while improving accuracy.

The introduction of models with extremely large context windows available at lower price points has somewhat reduced the need for RAG as an approach.

### Prompt Routing

Not all queries require the same level of model capability, creating opportunities for cost optimization through intelligent routing. API gateway/proxy selection can be used to select the best model and provider for value. Semantic routing tooling and threshold based rules prompt routing to best fit models programmatically. Prompt routing to a reasoning model vs a non-reasoning model can save 4-20X tokens, reducing cost when the workload does not require a reasoning model.

  * **Cost optimization** : Using expensive models only when necessary
  * **Performance appropriateness** : Matching model capabilities to query complexity
  * **Resource efficiency** : Allocating computational resources based on requirements
  * **Latency management** : Delivering faster responses for simpler queries

Organizations implementing effective prompt routing typically reduce inference costs by 40-70% compared to using premium models for all requests, while maintaining comparable quality for most interactions.

### Prompt Caching

Prompt caching stores previously generated responses to eliminate redundant processing for identical or similar queries:

  * **Latency reduction** : Delivering instant responses for cached queries
  * **Cost savings** : Eliminating inference costs for repeat questions
  * **Consistency** : Ensuring identical responses to identical queries
  * **Load reduction** : Decreasing demand on inference infrastructure

Organizations with high query volumes and repetitive patterns typically see 20-40% reductions in inference costs through effective caching implementations.

### Token Optimization

Token usage directly impacts both inference costs and model performance:

  * **Prompt design** : Structuring queries efficiently without unnecessary tokens
  * **Prompt Compression** : Compressing or trimming prompts, particularly images, when additional fine-grained detail is not needed for the quality of output required
  * **Context management** : Including only essential information in the context window
  * **Output control** : Limiting response length to what’s actually needed
  * **Format efficiency** : Using compact representations where appropriate
  * **Strategic truncation** : Removing less relevant content when context limits are approached

Organizations that implement comprehensive token optimization typically reduce token consumption by 20-40% with minimal impact on response quality, directly translating to proportional cost savings.

### Prompt Engineering

Well-designed prompts can significantly improve model performance without the need for expensive fine-tuning or larger models:

  * **Zero training costs** : Achieving performance improvements without computational expense
  * **Rapid iteration** : Enabling quick experimentation and refinement
  * **Adaptability** : Adjusting to new requirements without model modifications
  * **Maintained generality** : Preserving model flexibility across use cases

Organizations that develop prompt engineering expertise typically achieve 70-90% of the performance benefits of fine-tuning for many applications, while avoiding the associated computational costs and operational complexity.

## Conclusion & Key Takeaways

### Future Outlook on FinOps Trends in Generative AI

Several emerging trends are likely to shape future optimization practices:

  * **Hardware specialization** : Increasing availability of AI-specific accelerators beyond GPUs
  * **Efficiency-focused architectures** : New model designs emphasizing computational efficiency
  * **Automated optimization** : AI-powered tools for tuning and improving GenAI deployments
  * **Price competition** : Increasing availability of alternative models and providers driving price reductions
  * **Consumption-based pricing** : More granular and flexible pricing models for AI resources
  * **AI resource governance** : More sophisticated frameworks for managing AI investments
  * **Model Context Protocol (MCP)** —a standard protocol making agents more interoperable with data, tools, and services
  * **Agent to Agent Protocol**
  * **Models with Very Large Context windows**

### Next Steps for Organizations to Improve AI Financial Management

#### Immediate Actions (0-3 months)

  1. **Baseline assessment** : Establish current performance and cost metrics for existing GenAI deployments
  2. **Quick wins implementation** : Apply straightforward optimizations like caching and prompt improvement
  3. **Monitoring enhancement** : Deploy comprehensive telemetry for cost and performance tracking
  4. **Cross-functional teams** : Establish collaboration between AI engineers, finance, and business units

#### Medium-term Initiatives (3-6 months)

  1. **Multi-model architecture** : Implement tiered approach with appropriate model routing
  2. **Infrastructure assessment** : Evaluate current AI platform against best practices
  3. **FinOps integration** : Incorporate GenAI into broader cloud financial management
  4. **Vendor evaluation** : Reassess model providers and infrastructure options based on cost-efficiency

#### Strategic Investments (6-12 months)

  1. **Optimization automation** : Deploy systems for continuous monitoring and improvement
  2. **Custom efficiency models** : Develop specialized, efficient models for high-volume use cases
  3. **Infrastructure modernization** : Upgrade AI platform components based on ROI analysis
  4. **Governance framework** : Establish comprehensive policies for AI resource management

By following this structured approach to GenAI optimization, organizations can ensure that their AI investments deliver sustainable value while positioning themselves to leverage emerging capabilities and practices as the field continues to evolve.

#### **Want to dive deeper?**

Read the Tokenomics Foundation Paper: [The Five-Layer Tokenomics Stack](<https://www.tokeneconomics.com/projects/the-five-layer-tokenomics-stack>)

## Acknowledgments

Thanks to the following people for their hard work on this Paper:

[ ![Ilia Semenov](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Ilia Semenov Stealth ](<https://www.linkedin.com/in/iliavsemenov/>) [ ![Rahul Kalva](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Rahul Kalva Wells Fargo ](<https://www.linkedin.com/in/kalvarahul/>) [ ![Haritza Zubillaga](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Haritza Zubillaga Roche ](<https://www.linkedin.com/in/haritzazubillaga/>) [ ![Brent Eubanks](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Brent Eubanks Wayfair ](<https://www.linkedin.com/in/brenteubanks/>) [ ![Brent Segner](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Brent Segner Capital One ](<https://www.linkedin.com/in/brent-segner-405b0b14/>) [ ![Tammy Burnitt](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Tammy Burnitt FinOps Foundation ](<https://www.linkedin.com/in/tammyburnitt/>) [ ![Vik Saluja](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Vik Saluja Mastercard ](<https://linkedin.com/in/viksaluja>) [ ![Niladri Ray](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Niladri Ray Flexera ](<https://www.linkedin.com/in/niladri-ray-340824/>) [ ![Jean Latiere](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jean Latiere OptimNow ](<https://www.linkedin.com/in/jeanlatiere/>) [ ![Adam Richter](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Adam Richter Amazon Web Services  ](<https://www.linkedin.com/in/adamjrichter/>)

Last updated: May 23, 2025

## Table of Contents

  * [Introduction](<#introduction>)
  * [FinOps for GenAI](<#finops-for-genai>)
  * [Choosing the Right Model: Cost vs. Performance Trade-offs](<#cost-tradeoffs>)
  * [Optimizing GPU and CPU Utilization](<#optimizing-gpu-cpu-utilization>)
  * [Optimizing Other Resources](<#optimizing-other-resources>)
  * [Optimizing Inference](<#optimizing-inference>)
  * [Conclusion & Key Takeaways](<#conclusion-takeaways>)
  * [Acknowledgments](<#acknowledgments>)

###### [Build your FinOps for AI skills Learn the latest best practices to manage AI costs and token economics. Get started  ![Build your FinOps for AI skills](https://www.finops.org/wp-content/uploads/2025/07/certified-AIvalue.svg) ](<https://learn.finops.org/path/certified-finops-for-ai>)

##### Related FinOps Capabilities

[ Usage Optimization ](<https://www.finops.org/framework/capabilities/usage-optimization/>)
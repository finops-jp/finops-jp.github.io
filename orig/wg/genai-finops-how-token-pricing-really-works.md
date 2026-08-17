# GenAI FinOps: How Token Pricing Really Works

**Summary:** Advertised “per-token price” can be misleading; GenAI costs are determined by tokenomics, operational nuances, and not just list price. Be aware of hidden costs like Context Window Creep, which can exponentially increase spend, especially in long, media-rich interactions. Work with AI engineers to apply a Unit Economics approach to identify token pricing, leveraging techniques like Prompt Caching, Batch Processing, and to understand [Big-T Notation](<https://www.tokeneconomics.com/projects/big-t-notation/>) instead of choosing the cheapest-tier model.

## Table of Contents

  * [Not All Tokens Are Created Equal](<#not-all-tokens-are-created-equal>)
  * [GenAI Cost Optimization Techniques](<#gen-ai-cost-optimization-techniques>)
  * [The Provider Matrix: Where You Buy From Matters](<#the-provider-matrix-where-you-buy-from-matters>)
  * [The Real Unit of Measure: Use Cases](<#the-real-unit-of-measure-use-cases>)
  * [From Token-Counting to Tokenomics to True Cost Ownership](<#from-token-counting-to-true-cost-ownership>)
  * [Acknowledgments](<#acknowledgments>)

For FinOps practitioners, the advertised per-token price for GenAI is misleading; the real costs are in the details. In the [first installment](<https://www.finops.org/wg/genai-finops-vs-cloud-finops/>) of our series, we introduced the “Fuzzy Math of Token Pricing” as a key difference between Cloud and GenAI FinOps. Now, let’s demystify the hidden costs behind the seemingly straightforward price lists, which are just the tip of a complex iceberg. Understanding these nuances is crucial for managing GenAI spending growth.

The truth is, focusing on the simple cost per million tokens (MTok) is like judging a car’s cost solely on the price of gas, ignoring details like the type of engine, driving style, or maintenance. Or, in the cloud services world, like interpreting IOPS costs in storage, which are simple on the surface but end up being incredibly complex due to operational nuances (peak loads, block sizes, storage volume size, etc.). The real Total Cost of Ownership (TCO) for a GenAI application is driven by factors that rarely appear on a vendor’s homepage.

This Paper dissects how token pricing _really_ works, revealing the hidden costs that can catch even seasoned FinOps professionals by surprise. We’ll focus on two critical takeaways: the immense impact of the “Context Window Tax” and why the “cheapest” model is rarely the most economical choice.

**Learn better via podcast?** Stay up to date on token economics with _The Tokenomics Brief._  

## Not All Tokens Are Created Equal

At the most basic level, GenAI models charge for processing tokens—small chunks of text. But the price of a token is not a flat fee. It varies dramatically based on what it is and what it’s doing.

  * **The Input vs. Output Cost Gap:** There is a significant price difference between _input_ tokens (the data you send to the model) and _output_ tokens (the data the model generates). Generating a response is far more computationally expensive than simply reading a prompt. As a result, output tokens are consistently priced at a premium, often costing three to five times more than input tokens. This has immediate implications for use cases that generate long responses, like summarization or creative writing.
  * **The Modality Premium:** Text is the cheapest form of data. As you move to other modalities, the price climbs steeply, reflecting the increased processing power required. Interpreting an image can easily cost twice as much as interpreting the equivalent amount of text. Audio is even more expensive, with some flagship models charging over eight times more for audio input than for text. 
    * _Vision pricing_ occurs when a model receives an image as input and “looks at it” as part of formulating its response. Model providers tend not to separate vision pricing out as a separately billed unit, and instead convert the image into text tokens and charge that way. The algorithm to convert an image into tokens is provider specific, complex, and changes frequently.
  * **The Model Tier Tax:** Not surprisingly, you pay for performance. A provider’s most advanced, cutting-edge model will have the highest per-token price. Its smaller, faster “workhorse” models will be much more affordable. This establishes a clear hierarchy where cost typically directly correlates with reasoning capability.

### The Biggest Hidden Cost: Context Window Creep

If you take only one thing away from this article, let it be this: **the single greatest hidden cost in most production AI applications is Context Window Creep.**

Most LLM APIs are stateless. This means the model has no memory of past interactions. To have a coherent, multi-turn conversation (like with a chatbot), you must resend the _entire_ conversation history with every single new message.

Imagine having to repeat your entire conversation from the beginning every time you wanted to add a new sentence. That’s exactly what’s happening inside your API calls.

Consider a simple customer service chatbot.

  * **Turn 1 (User):** “What’s your return policy?” (5 tokens)
  * **Turn 2 (Bot):** “You can return items…” (50 tokens)
  * **Turn 3 (User):** “What about for international orders?” (6 tokens)

To process Turn 3, the application doesn’t just send the 6 new tokens. It sends the entire history: [Turn 1 User + Turn 2 Bot + Turn 3 User], totaling 61 input tokens. As the conversation continues, the input token count for each new turn balloons, and so does the cost. This escalating cost of maintaining context is the **Context Window Creep**. In a long-running conversation, this creep can easily dwarf the cost of the actual output being generated, leading to shocking and unexpected cost overruns.

This is exacerbated if you have lengthy system prompts or other in-context guardrails, since those are sent as input tokens as part of each and every message.

This creates a paradox for understanding GenAI spend: while individual output tokens are usually priced around 300% more expensive than input tokens, the compounding volume of input tokens means they will almost always dominate your total spend in any conversational application. Note this includes “conversations” between LLMs, such as in agentic systems.

The Context Window Creep also creates hidden recurring costs for multimedia. When an image is sent in the first turn of a conversation, you incur a vision processing fee. But that’s not a one-time charge. Because the image becomes part of the conversation history, you are silently re-billed for that same vision processing fee on every subsequent turn. This can be especially nefarious because the vision costs are typically lumped in with the text token costs.

Context Window Creep highlights a key hidden cost in Gen AI operations: **the compounding token volume from maintaining conversation history**. This cost grows exponentially with longer interactions and underscores the need to deeply understand token usage mechanics to predict and manage spend effectively.

## GenAI Cost Optimization Techniques

### Prompt Caching

Caching refers to the temporary storage of data that allows for quicker access in future requests without having to process the same input multiple times. There are two types of prompt caching: Implicit and Explicit.

**Implicit prompt caching** must be enabled by the model provider (e.g., OpenAI, Anthropic, Azure, etc.). The provider employs algorithms that detect when the context window contains repeating patterns of tokens, and automatically employs a cache to save on GPU utilization and therefore, cost. This feature requires no work on behalf of practitioners and will be employed automatically to lower costs.

**Explicit prompt caching** requires the user to intentionally put context into the cache. This is valuable when you do not want to rely on the algorithms of the model provider to ensure cache hits, however, it can be tricky to use. The billing model usually works by charging an upfront fee to “write” content into a cache. This fee is typically higher than the per-token cost of sending that data as input to an LLM. Subsequent API calls can then “read” this cached content at a significant discount over the lifetime of that cache. Cache lifetime details differ for each provider, and this creates a break-even calculation for practitioners. If you don’t read from the cache enough times to offset the initial, higher cost of the write operation, you will actually spend _more_ than if you hadn’t used caching at all. It’s a powerful tool, but one that requires careful analysis of usage patterns to ensure it’s actually saving money.

### Semantic Caching

While prompt caching offers cost benefits, practitioners may explore ‘semantic caching,’ which stores AI responses based on the meaning or semantic similarity of prompts. Unlike simple prompt caching, which requires exact input matches, semantic caching stores and retrieves responses based on the meaning of the request rather than identical tokens. Semantic caching leverages vector embeddings to identify and retrieve relevant cached responses, even if inputs vary slightly, and helps reduce token processing and associated costs.

Semantic caching is best employed when you have a high frequency of inputs that lead to the same outputs. For example, a support chatbot that has frequently asked questions with consistent answers. By semantically caching the questions (instead of prompt caching them), as users ask questions that are similar in nature (but not identically worded), the cached response will be output instead of having to roundtrip with the LLM to generate a new response.

Semantic caching can lead to the highest cost savings in narrow usage conditions.

### Batch Processing

For non-urgent tasks like analyzing a batch of documents, providers offer a steep discount, often 50% or more, for asynchronous processing. This is a strong cost-saving tool, but it requires designing your application to distinguish between real-time and batch workloads.

Batch workloads are not returned as a stream of tokens like typical API calls; instead, they are delivered as files within 24 hours. This can be used for trying a variety of different models and/or prompt combinations, to get a sampling of non-production workload comparison data at half the normal cost. Batch processing is a feature that must be offered by the model provider and is not a feature of the models themselves.

### Why the “Cheapest” Model Isn’t Always the Most Economical

It’s tempting to default to the model with the lowest per-token price to save money. However, a cheaper, less capable model might require longer, more complex prompts to produce a good result. It may also require more retries or generate verbose, low-quality outputs that need further refinement. Consider the **total cost to get a successful outcome.** Defining “successful outcomes” can be a challenge, and will be the topic of a future blog. A more powerful, “expensive” model might understand a simple prompt, get the answer right on the first try, and provide a concise, accurate response. The total token cost for that single, successful transaction can be far lower than the accumulated cost of coaxing a usable answer out of a “cheaper” model. Optimize for business value and successful outcomes, not just the raw cost of a token.

**Want to dive deeper?**

Read the Tokenomics Foundation Paper: [The Five-Layer Tokenomics Stack](<https://www.tokeneconomics.com/projects/the-five-layer-tokenomics-stack/>)

## The Provider Matrix: Where You Buy From Matters

Finally, the platform you use to access a model can fundamentally change its cost structure. This isn’t just about the per-token price; it’s about the entire economic model, which is tailored to different customer needs.

### Hyperscalers (Azure, AWS, GCP): The Enterprise Wrapper

These platforms provide enterprise security, compliance, and integration for large organizations within a cloud ecosystem, offering convenience and value despite the cost.

Pricing can also fluctuate significantly between vendors, even for the same open-source model. Historically, pricing has varied as much as 30% from one vendor to another. There are also hidden considerations here, such as the speed of inference, quantization of the models, truncated context window lengths, and the amount of reasoning effort the provider allows for models that support a “thinking” step before they respond.

Hyperscalers also provide the option to provision capacity to run the models, with complex pricing differences between each of the clouds.

This topic is broad, and will also be the subject of a future Paper.

## The Real Unit of Measure: Use Cases

One of the intriguing aspects of language models is that identical prompts can yield different amounts of output tokens depending on the specific model employed. This variability means that two models can interpret and generate responses to the same input text in divergent ways. As interesting as tokens are, they are ultimately only a small piece of the puzzle. The only real way to understand the TCO of leveraging AI for a business outcome is to measure the entire **use case**.

A use case is the complete process required to accomplish a given result. It can be an autonomous agent, a data processing pipeline, or any workflow involving a series of GenAI calls and tools. A typical use case may require multiple AI models working in concert, as well as traditional cloud resources to host the data being used.

This shifts the focus of FinOps from token cost to the **unit economics of a use case**. Because token counts vary with every run, and because complex use cases may involve reasoning models that “think” before responding, the cost per unit is not a fixed price. It is a distribution. Sometimes a transaction may cost fractions of a penny; other times, it could cost far more.

Furthermore, the unit economics of a use case are extremely sensitive to change. Adjusting a prompt, swapping a model, or changing the underlying data architecture can alter the cost distribution in dramatic ways. This means that understanding the true TCO requires deep, ongoing coordination between engineering and finance teams. Only by working together can they correlate technical changes to the resulting shifts in unit economics, ensuring the financial viability of every AI-powered use case.

## From Token-Counting to Tokenomics to True Cost Ownership

To effectively manage GenAI spend, FinOps must evolve beyond simple token-counting. As we’ve seen, the path to understanding the real TCO is complex, winding through input/output token premiums, the compounding Context Window Tax, and the varied economic models of different providers.

Ultimately, a sophisticated approach requires shifting focus from the token to the **use case**. By measuring the unit economics of the entire business outcome, not just the individual API calls, and fostering deep collaboration between finance and engineering to track the volatile cost distributions, organizations can build a realistic picture of their GenAI TCO.

The [Tokenomics Foundation](<https://www.tokeneconomics.com>) will be a key reference for diving deeper into the details of generation, use, and value of tokens and all of their corresponding cost drivers as time goes on. FinOps will still manage, report, and allocate that value to the organization.

Now that we’ve dissected how pricing works, our next installment will detail the intricacies of provision capacity and how it has emerged as a new frontier for cloud FinOps.

## Acknowledgments

We’d like to thank the following people for their work on this Paper:

[ ![Joshua Collier](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Joshua Collier Superhuman fka Grammarly ](<https://www.linkedin.com/in/josh-collier-945b7029/>) [ ![David Tepper](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) David Tepper Pay-i Inc. ](<https://www.linkedin.com/in/david-tepper/>)

Last updated: May 29, 2026

## Table of Contents

  * [Not All Tokens Are Created Equal](<#not-all-tokens-are-created-equal>)
  * [GenAI Cost Optimization Techniques](<#gen-ai-cost-optimization-techniques>)
  * [The Provider Matrix: Where You Buy From Matters](<#the-provider-matrix-where-you-buy-from-matters>)
  * [The Real Unit of Measure: Use Cases](<#the-real-unit-of-measure-use-cases>)
  * [From Token-Counting to Tokenomics to True Cost Ownership](<#from-token-counting-to-true-cost-ownership>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ Usage Optimization ](<https://www.finops.org/framework/capabilities/usage-optimization/>)
# Navigating GenAI Capacity Options

**Summary:** Optimizing GenAI spend requires a transition from simple “Pay-As-You-Go” models to Provisioned Capacity, treating it as a strategic commitment rather than a simple discount mechanism. Provisioned models can offer dedicated throughput and lower latency, but can also introduce risks like Idle Allocated Capacity and vendor-specific rigidities (e.g., AWS’s model-specific locks vs. Azure’s flexible PTU pools). Build awareness around how provisioned units can sometimes cost more per token than shared tiers, meaning the investment must be justified by SLA requirements and performance needs (TTFT/OTPS) rather than pure unit-cost savings. Leverage “Spillover” logic to handle peak bursts and perform rigorous load testing, as advertised “Tokens Per Minute” (TPM) limits rarely reflect real-world workload complexities.

## Table of Contents

  * [Traffic Shape is Everything](<#traffic-shape-is-everything>)
  * [Not All Reservations Are Created Equal](<#not-all-reservations-are-created-equal>)
  * [Capacity Unit Rates Can Be Deceiving](<#capacity-unit-rates-can-be-deceiving>)
  * [When “More Expensive” is Worth It](<#when-more-expensive-is-worth-it>)
  * [Additional Tips and Considerations](<#additional-tips-and-considerations>)
  * [Acknowledgments](<#acknowledgments>)

In the first two installments of our series we explored the[ new challenges of GenAI FinOps](<https://www.finops.org/wg/genai-finops-vs-cloud-finops/>) and demystified the[ “Fuzzy Math of Token Pricing.”](<https://www.finops.org/wg/genai-finops-how-token-pricing-really-works/>) We established that the advertised cost-per-token is misleading and that hidden costs, like Context Window Creep, can dominate your spend.

Now, we tackle one of the most significant and costly decisions a FinOps team will face: choosing the right capacity model.

When enterprises first adopt GenAI, they almost universally start with **shared capacity** (also called shared, or pay-as-you-go). It’s the default: a straightforward, consumption-based API call where you pay for what you use. This model is flexible and easy to start with, but it operates in a shared “public” pool. This means you have no guarantee of performance, and latency can spike during peak hours.

To solve this, vendors offer **provisioned capacity** (or reserved capacity). On the surface, this seems familiar. You pay up-front to reserve a dedicated block of resources, often at a discount. However, the unique nature of GenAI models makes this decision far more complex than reserving a cloud virtual machine.

Moving to provisioned capacity isn’t just a cost-saving tactic; it’s a strategic commitment that can have consequences for your bill, your application’s performance, and your ability to innovate.

Note that this blog covers inferencing models from hyperscaler-managed services, such as AWS Bedrock, Microsoft Foundry, and GCP Vertex. It does not cover provisioning custom models as a result of model training services (like Amazon Sagemaker or Azure Machine Learning) or the related data pipelines.

## Traffic Shape is Everything

The first question most FinOps practitioners ask is, “Will reserved capacity save us money?” The answer is a frustrating “it depends,” and it depends on the **shape of your traffic** and the vendor.

Provisioned capacity is purchased for a fixed term (e.g., one month, one year), giving you a set amount of throughput _per minute_. You are paying for this capacity 24/7, whether you use it or not.

This leads to the following trade-offs:

  * **Consistent, High-Utilization Traffic:** If you have a workload that runs consistently around the clock, like a high-volume data processing pipeline, provisioned capacity is likely a clear winner. You will be using the capacity you’ve paid for, and the per-token discount will generate significant savings compared to pay-as-you-go.
  * **Bursty, Unpredictable Traffic:** If your traffic is highly variable, spiking during business hours and dropping to zero at night, provisioned capacity may be a trap. You must reserve enough capacity to handle the _peak_ load, which then sits idle for the other 16 hours a day, wasting money.

### Leveraging Spillover

Spillover is a feature that automatically routes traffic to the standard, pay-as-you-go shared tier _after_ your provisioned capacity has been fully utilized. Imagine your reserved capacity can handle 1,000 requests per minute. If a sudden spike sends 1,200 requests, spillover automatically sends the extra 200 requests to the shared tier instead of returning a “429 throttled” error. This can reduce outage risk and save money.

If some spillover can be tolerated, it can be used to increase reserved capacity utilization and lower costs. For use cases that require low latency, the key is aligning on the tolerance and SLA thresholds, i.e., percentage of requests that can spillover while maintaining SLAs.

For use cases that scale with business hours and don’t have latency requirements, reserved capacity can solely be used to reduce costs. You can think of reserved capacity like a Savings Plan or CUD where you manage purchases based on a coverage target that gives you the lowest cost per token. The coverage level will vary depending on the throughput per capacity unit, which varies widely across models. In some cases, reserved capacity won’t reduce costs at all.

#### Other notes on spillover

  * Understanding your costs can be tricky, since those 200 “spilled over” requests are billed at the pay-as-you-go rate, which is variable even if your reserved capacity spend is not.
  * At the time of writing, Azure is the only provider that offers spillover as a built-in feature. If your provider doesn’t offer this feature, you must build this failover logic yourself to get the best of both worlds.

### Idle Allocated Capacity

When provisioning capacity, there are two new types of waste that you can end up paying for. Imagine you’ve reserved a block of capacity on a hyperscaler for a specific model (e.g., Claude 4.5 Sonnet) for a month, but your application traffic is low. You are paying for 100% of that reservation while using only 15% of it at peak. The remaining 85% is **Idle Allocated Capacity**. The _true_ cost of this idle time is amplified if your primary, running workload has a high proportion of expensive operations, such as generating a large volume of output tokens (which are approximately 3x more computationally expensive than input tokens). In effect, the financial loss here isn’t just a slight dip in utilization; it’s a massive overpayment for unused, premium service. This is the most common form of waste.

We will describe the second form of waste, which is unique to Azure, in the next section.

## Not All Reservations Are Created Equal

The biggest mistake a FinOps team can make is assuming all “reserved capacity” is the same. The economic and strategic differences between the hyperscalers are profound. Note that at the time of writing, there are no hyper scalers offering reservations that have access to all of the top-tier foundational LLMs. For example, you can only get OpenAI models on Azure and Gemini models on GCP.

### The AWS Model: Rigid, Model-Specific SKUs

On AWS, you reserve capacity _for a specific model_. For example, you can buy a one-month reservation for “Anthropic Claude 4.5 Sonnet”.

  * **The Pro:** It’s a direct purchase. You know exactly what model you are getting (though throughput can often be difficult to assess).
  * **The Con:** You are now financially locked into that specific model for the length of your reservation. This is a risk in the GenAI world. If a new, better, even cheaper model is released next month, you are stuck paying for the previous generation model. 
    * This rigidity discourages the longer-term, higher-discount reservations unless you are confident that your solution will likely not switch to new models during the reservation term, even as potentially better alternatives are released.

### The GCP Model: Semi-rigid, Publisher-Specific SKUs

On GCP, you reserve capacity for a specific model much like you do for AWS. However, GCP allows you to change the model to another model from the same publisher. For example, you can switch the model from Google Gemini 2.0 Pro to Google Gemini 2.0 Flash, but you can’t switch from Google Gemini 2.0 Flash to Anthropic Claude 4.5 Sonnet.

You cannot reduce the amount of reserved capacity, even if the new model requires less capacity to operate.

  * **The Pro:** It provides better investment protection than the strict AWS model by allowing you to upgrade to newer generations of models (within the same publisher family) without breaking the contract.
  * **The Con:** You remain locked into a specific publisher ecosystem (e.g., you cannot switch from Google to Anthropic). Additionally, the financial commitment is a floor; you cannot reduce your reserved capacity if a newer model becomes more efficient, effectively forcing you to overpay for efficiency gains.

### The Azure Model: A Flexible Capacity Pool

Azure handles this differently. You don’t reserve a specific model; you reserve a pool of **Provisioned Throughput Units (PTUs)**. This is like renting a block of generic GPU power from Azure.

For example, imagine you make a 500-PTU reservation. From there, you _deploy_ models against that pool using a certain number of those PTUs. You might assign 100 PTUs to gpt-4o and 50 PTUs to Deepseek-V3, for example. The higher the number of PTUs, the higher the number of tokens per minute available for inference. Different models have different PTU minimums to run effectively, with the larger models requiring more PTUs.

  * **The Pro:** This model offers incredible flexibility. When a new model (like GPT-5.2) is released, you can simply change your deployment, retiring the old model and assigning its PTUs to the new one, all without breaking your underlying reservation. Assuming available model capacity (see below), you can allocate your PTU quota dynamically across the new models, benefitting from efficiency gains in the process. This makes longer-term, higher-discount (e.g., one-year) reservations far less risky.
  * **The Con:** It adds a layer of management and introduces the second major type of waste spend: **Unallocated Capacity**.

#### Unallocated Capacity

If you reserve 500 PTUs but only deploy models that use 100 units, the remaining 400 are “unallocated.” You are paying for them, but they aren’t assigned to a model/deployment and they are generating zero value. Furthermore, because the reservation and deployment are separate, making a reservation on Azure does not in any way guarantee that the capacity is available for the models you want to deploy. When a new model comes out, and you want to use it as part of your reservation, if there is no available capacity for that model, then you may end up paying for long periods of Unallocated Capacity as you wait to be able to leverage your PTUs with the new model.

Guidance from Azure is to deploy the models first, then make the reservation afterwards. However, this does not work if you have a pre-existing reservation and you are looking to switch models.

### Choosing What is Right for You

While the Azure PTU model offers flexibility as new models are released, it introduces a new form of waste management (Idle Unallocated Capacity) and separates the reservation from guaranteed capacity availability. The AWS and GCP reservation systems offer superior cost and capacity predictability at the cost of being more rigid for longer term reservations. An organization might prefer a single, quantifiable risk (paying for a less-efficient model later) over managing a more complex system with an additional source of potential waste and an additional layer of management for handling the PTU-to-Model allocation. This frames the choice as a trade-off between **model flexibility** and **operational/financial simplicity.**

Further, as called out above, the different hyperscalers offer provisioned capacity for different models, and there is no single provider that currently offers all of the best-in-class foundational models. This means that, based on what your engineering teams desire to use for your products, you may be forced to leverage reservations from multiple sources and deal structures.

## Capacity Unit Rates Can Be Deceiving

As discussed above, a core differentiator among vendors is how they package provisioned capacity. Each has its own type of “capacity unit”, and you don’t want to assume the per-token rate is always lower with provisioned capacity. Pricing for these units can be billed on an hourly, daily, weekly, monthly, or annual basis, with each vendor offering different options. To compare your cost per token purchased with the standard rates, you must normalize them. The results may surprise you.

### GPT-5 Pricing Example

**Input bundle** | **Output bundle**  
---|---  
25,000 TPM | 2,500 TPM  
$75.00 per unit / day | $60.00 per unit / day  

Above is the pricing for one of OpenAI’s provisioned capacity options, called “Scale Tier”. Below is the comparison to the standard rate. This shows that even if you utilize GPT 5 Scale Tier units 100% of the time, you’d pay 67% more per token. In the case of GPT 4.1, 25-27% more. Therefore, using Scale Tier capacity only makes sense if you require uptime and latency SLAs.

### GPT-5 Pricing Example, Per 1M Tokens

**Capacity Type** | **Input Rate** | **Cached Input Rate** | **Output Rate**  
---|---|---|---  
Standard | $1.25 | $0.125 | $10.00  
Provisioned (Scale Tier) | $2.08 | $0.208 | $16.67  
% Delta | **67%** | **67%** | **67%**  

### GPT-4.1 Pricing Example, Per 1M Tokens

**Capacity Type** | **Input Rate** | **Cached Input Rate** | **Output Rate**  
---|---|---|---  
Standard | $2.00 | $0.50 | $8.00  
Provisioned (Scale Tier) | $2.55 | $0.64 | $10.00  
% Delta | **27%** | **27%** | **27%**  

## When “More Expensive” is Worth It

With provisioned capacity, **the primary driver may not be cost savings at all.** In many cases, organizations pay _more_ for provisioned capacity because they need its performance and SLA benefits.

### 1\. Performance and Perceived Latency

Shared capacity is slow and unpredictable. Reserved capacity is dedicated to you, which means it’s fast and reliable. But “fast” in GenAI is measured differently. End-to-end latency (from prompt to final token) is less relevant for streaming applications than it is for traditional cloud software.

The metrics that matter more for streaming solutions are:

  * **Time to First Token (TTFT):** How long the user waits for the response to _begin_.
  * **Output Tokens Per Second (OTPS):** How fast the words appear on the screen.

Reserved capacity dramatically improves both TTFT and OTPS. This “perceived latency” is critical for user experience. Even for reasoning models that “think” before responding, that thinking step is just token generation under the hood. Faster OTPS means the model “thinks” faster, too. For latency-sensitive applications, this performance gain alone may justify the higher cost.

### 2\. SLAs and Data Privacy

Provisioned capacity typically comes with higher uptime SLAs than shared capacity. Further, it (usually) offers data privacy guarantees. Most providers state that data sent to their provisioned endpoints is **not used for training future models.**

This privacy difference also unlocks a key strategy: **traffic “affinitization”**. A team might route all requests containing PII or confidential corporate data to their reserved capacity endpoint to ensure data privacy. Less sensitive traffic can then be sent to the shared endpoint. This combined approach lowers costs because you can reserve far less capacity than what would be required to handle all traffic.

#### Want to dive deeper?

Read about the Tokenomics Foundation Project: [Big-T Notation](<https://www.tokeneconomics.com/projects/big-t-notation/>)

## Additional Tips and Considerations

As you navigate this decision, keep these final factors in mind.

  * **Vendor TPM is Only a Rough Estimate:** Vendors may give you a “tokens per minute” (TPM) estimate for your reservation. This number is best treated as a rough estimate, as it rarely reflects real-world performance. As we learned in “[How Token Pricing Really Works](<https://www.finops.org/wg/genai-finops-how-token-pricing-really-works/>)”, output tokens are ~3x more computationally expensive than input tokens, and a simple TPM figure doesn’t account for this complex mix. The only way to know your true capacity is to load-test your _specific_ workload with its realistic mix of input and output tokens, including the associated caching strategy. 
    * If you are using non-text modalities, such as images or audio, then the figure changes from tokens per minute to “units per minute” (UPM), and calculating the effective UPM also requires load testing with a sample workload that reflects the typical number of units being sent and/or generated.
    * Also note that your reserved capacity can only handle a certain number of “requests per minute” (RPM), and at the time of writing, the RPM limits are not specified by any of the providers.
  * **Enterprise Commitments Apply:** Don’t forget to factor in your enterprise discounts. If you have a 20% discount on all AWS spend, that 20% applies to your reserved capacity purchase.

Ultimately, the move to provisioned capacity is a graduation. It’s the moment your GenAI application becomes a mission-critical part of the business. The decision is not a simple cost calculation but a complex, strategic trade-off between cost, performance, security, and vendor flexibility. And the [Tokenomics Foundation](<https://www.tokeneconomics.com>) will be a key reference for diving deeper into the details of generation, use, and value of tokens and all of their corresponding cost drivers as time goes on. FinOps will still manage, report, and allocate that value to the organization.

In our next installment, we’ll discuss how to consistently adapt to the volatility of the GenAI landscape.

## Acknowledgments

We’d like to thank the following people for their work on this Paper:

[ ![Joshua Collier](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Joshua Collier Superhuman fka Grammarly ](<https://www.linkedin.com/in/josh-collier-945b7029/>) [ ![David Tepper](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) David Tepper Pay-i Inc. ](<https://www.linkedin.com/in/david-tepper/>) [ ![Doron Holan](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Doron Holan Pay-i Inc. ](<https://www.linkedin.com/in/doronholan/>)

Last updated: February 4, 2026

## Table of Contents

  * [Traffic Shape is Everything](<#traffic-shape-is-everything>)
  * [Not All Reservations Are Created Equal](<#not-all-reservations-are-created-equal>)
  * [Capacity Unit Rates Can Be Deceiving](<#capacity-unit-rates-can-be-deceiving>)
  * [When “More Expensive” is Worth It](<#when-more-expensive-is-worth-it>)
  * [Additional Tips and Considerations](<#additional-tips-and-considerations>)
  * [Acknowledgments](<#acknowledgments>)

###### [Build your FinOps for AI skills Learn the latest best practices to manage AI costs and token economics. Get started  ![Build your FinOps for AI skills](https://www.finops.org/wp-content/uploads/2025/07/certified-AIvalue.svg) ](<https://learn.finops.org/path/certified-finops-for-ai>)
# How to Build a Generative AI Cost and Usage Tracker

## Table of Contents

  * [Introduction](<#intro>)
  * [Common Cost Situations and Respective Options](<#common-cost-situations>)
  * [Conclusion and Next Steps](<#conclusion-next-steps>)
  * [Acknowledgments](<#acknowledgments>)

As organizations increasingly adopt generative AI technologies, understanding and managing the associated costs becomes crucial. This whitepaper provides a comprehensive guide to tracking and attributing costs in AI workloads, with a focus on token usage as the primary unit of measurement.

**Key Points:**

  1. **Token-Based Billing** : AI services typically bill based on tokens, which are units of text processing. Understanding the distinction between input tokens (prompts) and generated tokens (responses) is crucial for accurate cost estimation.
  2. **Cost Tracking Methods** : The paper outlines three main approaches to cost tracking, ranging from basic request counting to advanced token tracking systems. Each method offers different levels of accuracy and implementation complexity.
  3. **Centralized vs. Decentralized Approaches** : Organizations can implement AI cost tracking through either a centralized hub-and-spoke model or a decentralized approach. Each has its advantages and challenges in terms of control, flexibility, and ease of implementation.
  4. **Data Management** : A sample database schema is provided for comprehensive token tracking, enabling detailed cost attribution and analysis.
  5. **FinOps Integration** : The paper emphasizes the importance of integrating AI cost tracking into existing FinOps practices for holistic cloud cost management.
  6. **Challenges and Considerations** : Several factors complicate AI cost tracking, including varying tokenization strategies across models, potential hidden costs, and the need for accurate reporting in decentralized setups.
  7. **Best Practices** : Recommendations include implementing standardized interfaces for AI interactions, partnering with engineering teams, and maintaining open communication about usage across the organization.
  8. **Provisioned Throughput Allocation** : The whitepaper discusses strategies for allocating and tracking usage of Provisioned Throughput across different use cases. This includes methods for optimizing utilization and attributing costs in a shared resource environment.

This whitepaper serves as a foundational guide for FinOps practitioners and IT leaders looking to implement robust cost tracking for their AI initiatives. By following these principles and best practices, organizations can gain better visibility into their AI spending, optimize costs, and make informed decisions about their AI investments.

The [Tokenomics Foundation](<https://www.tokeneconomics.com>) will be a key reference for diving deeper into the details of generation, use, and value of tokens and all of their corresponding cost drivers as time goes on. FinOps will still manage, report, and allocate that value to the organization.

## Introduction

A common question when getting started with Generative AI cost tracking involves token usage. For most AI workloads, tokens are the single unit of cost that can be easily tracked and attributed to individual AI use cases within a business. Tokens can be classified into two distinct groups: input tokens and generated tokens. Input tokens (these are your prompts or instructions you send to the AI) are typically billed at a much lower rate than the generated tokens (what the model generates and responds with).

A simple metaphor for token counts is a simple word-count. If you wish to generate one thousand, 100-word emails, you could expect to generate 100,000 tokens. In practice, word-count dramatically underestimates actual token count which wholly depends on how the model was trained and other various parameters the model creators set – a topic out of scope for this paper.

Tokens are commonly billed per million tokens inputted or generated (Mtokens or Megatokens, just like Megabits!). Prices tend to change rapidly as systems become optimized but, as of writing, the most cutting-edge models tend to live in the USD 10 to 20 per Mtokens generated range. Production usage can easily cross billions of tokens (Gigatokens) per month, so costs can quickly add up. Attributing those costs correctly is crucial for evaluating the value of AI workloads over time.

Despite the rapid rise and adoption of AI technology, the fundamental billing unit, tokens, lends itself quite well to the established practices of the FinOps Framework. Incremental usage results in incremental costs, predictable patterns can be optimized with precommitments, and reporting usage is often real-time. However, many cloud or model providers are focusing on new capabilities, not cost tracking capabilities. As a result, FinOps practitioners can feel left in the dust with a big, unexplainable AI bill each month.

What best practices exist for tracking costs? How can you accurately attribute those costs to multiple use cases? What limitations currently exist within the AI ecosystem that introduces difficulties? We attempt to answer those questions in this paper. Importantly, we’ll be looking at inference costs primarily – not other traditional costs like data storage, backups, load balancing, and content distribution as these are topics covered extensively in existing FinOps materials.

**Want to dive deeper?**

Read the Tokenomics Foundation Paper: [The Five-Layer Tokenomics Stack](<https://www.tokeneconomics.com/projects/the-five-layer-tokenomics-stack/?__hstc=91262213.d1f89c627412fea841c1c5e1b0b4c2e6.1777933821777.1786111161496.1786128750067.128&__hssc=91262213.38.1786128750067&__hsfp=a659b049cb6d43554f87291f111b0ea0>)

## Common Cost Situations and Respective Options

The most basic and inaccurate AI cost estimation technique would be to simply count the number of requests per API key and bill per call. This is inaccurate because the cost of someone sending “hello” to the AI endpoint would be the same as someone sending the complete works of Shakespeare to the AI endpoint – two tokens vs 1.2 million tokens. However, depending on your workload types, volumes, and bill size, this may be a perfectly adequate solution, especially as a quick fix for a hard problem.

The next technique in terms of better accuracy but more work to implement would be token estimation. Token estimation can be useful if you’re using a model that doesn’t support standard tokenization reporting. Various tools and code libraries exist for estimating token usage. It is important to note, however, that unless the model you’re using has published its tokenization strategy, any token count your techniques arrive at will just be estimates and cannot be used to predict a bill exactly.

Token estimation generally requires a dedicated database (both NoSQL and traditional SQL work fine here) that would record the usage (input and generation tokens) from each API call. Then at the end of the month or billing period, run a process to attribute usage to each individual key and use case. If you already have an existing FinOps tool or database collecting cost data, this would be a good place to store this information.

The most accurate would be using the actual token input and generation counts into a database with the same rollups as mentioned before. Most third-party models come with this provided count luxury, but some still don’t (or you’re using an older model which doesn’t support it yet).

A full token tracking table schema could look something like this ([full example on Github](<https://github.com/Barneyjm/ai_token_tracking_example/tree/main>)):
[code] 
    _-- Request Keys table_

    CREATE TABLE request_keys (

        request_key_id SERIAL PRIMARY KEY,

        key_name VARCHAR(255) NOT NULL,

        key_value VARCHAR(255) NOT NULL UNIQUE,

        is_active BOOLEAN DEFAULT true,

        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    );

    _-- Model Information table_

    CREATE TABLE model_information (

        model_id SERIAL PRIMARY KEY,

        model_name VARCHAR(255) NOT NULL,

        model_input_price DECIMAL(10, 6) NOT NULL,

        model_output_price DECIMAL(10, 6) NOT NULL,

        price_effective_date DATE NOT NULL,

        is_current BOOLEAN DEFAULT true

    );

    _-- API Versions table_

    CREATE TABLE api_versions (

        api_version_id SERIAL PRIMARY KEY,

        api_version VARCHAR(50) NOT NULL,

        release_date DATE NOT NULL

    );

    _-- Token Tracking table_

    CREATE TABLE token_tracking (

        tracking_id SERIAL PRIMARY KEY,

        request_id UUID NOT NULL,

        request_key_id INTEGER REFERENCES request_keys(request_key_id),

        input_token_count INTEGER NOT NULL,

        output_token_count INTEGER NOT NULL,

        model_id INTEGER REFERENCES model_information(model_id),

        api_version_id INTEGER REFERENCES api_versions(api_version_id),

        timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

        total_cost DECIMAL(10, 6) GENERATED ALWAYS AS (

            (input_token_count * (SELECT model_input_price FROM model_information WHERE model_id = token_tracking.model_id) / 1000) +

            (output_token_count * (SELECT model_output_price FROM model_information WHERE model_id = token_tracking.model_id) / 1000)

        ) STORED

    );

    _-- Index for faster querying_

    CREATE INDEX idx_token_tracking_timestamp ON token_tracking(timestamp);

    CREATE INDEX idx_token_tracking_request_key_id ON token_tracking(request_key_id);

    CREATE INDEX idx_token_tracking_model_id ON token_tracking(model_id);

[/code]

In any solution, for the purposes of cost estimation, we do not recommend storing the raw prompts and output long-term as you could expose yourself to storing sensitive data in a non-sensitive database. In addition, the storage of prompts and outputs will only contribute to the overall cost of the system. Furthermore, your security partners may already be storing these prompts somewhere – ask them for direct access or to provide additional columns in their data store that you can leverage for your analysis.

### Centralized AI Hub-and-Spoke Techniques

Many enterprises, hoping to manage and supervise the adoption of AI capabilities, require all AI workloads to interact with models through a centralized AI proxy or hub. This technique can make it very simple to monitor and manage the cost of specific use cases if the hub is set up correctly.

Importantly, access to the hub should be granted through API keys or authentication keys tied directly to a given use case. These keys should be treated like other secret access mechanisms and not shared between applications, users, or use cases – existing technology exists for secrets management and should be leveraged for AI workloads.

However, if logging isn’t configured properly on the centralized hub, distinct API key usage may not be enough – from the centralized hub’s point of view, it’ll just see high usage coming from a number of keys. It is important to attribute input and generated tokens to each individual API call. While some existing FinOps tools can handle this type of usage, it’s a growing field and not many work perfectly. Additionally, managing this for each different model’s tokenization strategy can be tricky. Some models provide input and generated token counts upon response and should be used directly. Other models do not provide this information – you’ll need to implement token counting on the hub-side of your system.

### Decentralized AI Techniques

If the adoption of AI workloads is decentralized within your organization, it may be more difficult to attribute costs as compared to a centralized technique. This is because the implementation of a unified token estimation or counting practice would be difficult to enforce. For example, requiring tags on each API request to the models may not be enforceable. As a result, a use case could easily misattribute their usage (either on purpose to fly under the radar or by honest mistake) on their system’s API calls.

If AI usage is decentralized, we recommend partnering with engineering to provide a common interface, SDK, or other tool for interacting with the models that can automatically apply standards for each use case. Publishing an infrastructure-as-code module with built in load balancing, tagging, and other undifferentiated heavy lifting tasks can be a great way to speed adoption of an opinionated tagging method.

Pairing this interface technique with an AI governance framework that requires accurate reporting can offer a decent system of tradeoffs for decentralized access. This will require a more orchestrated approach to handling AI usage across a few teams which can introduce more work long-term.

If this is not possible, we recommend separating usage into distinct AI workload billing entities. Distinct subscriptions or accounts for each AI workload will allow you to maintain a little more granular insights into how costs are changing over time. However, this introduces complexity into the long-term maintenance and management of AI workloads.

Until fundamental tagging and other metadata management techniques critical to other FinOps capabilities are deeply embedded in AI services and systems, a decentralized approach to AI will require open discourse and honest reporting by the consumers of the services within your organization.

### Provisioned Throughput

A complicating factor for AI workload costs is Provisioned Throughput Units (PTUs). Provisioned Throughput is a pricing model offered by some AI service providers that allows organizations to reserve a certain amount of processing capacity for a fixed cost. While this can lead to significant cost savings for consistent, high-volume workloads, it also presents unique challenges in terms of usage allocation and cost attribution. While the models are still generating tokens, you’re no longer paying per token.

Additionally, because PTUs can be expensive, it’s common for multiple use cases to share one PTU. This can make it difficult to allocate costs to a specific use case. The simplest way to split costs would be to divide the total PTU cost by the number of use cases using it. This is very easy however, if one use case uses more of the PTU than the other, it could be unfair to the use case not consuming as much.

Below, we outline one approach you can take to help understand your shared PTU costs based on consumption. Since PTUs lower the effective per-token rate, you can calculate your price-per-token amount in your internal tracking system by totalling the number of tokens generated over a given period of time. This approach can easily slide into an existing cost system but also introduces a few minor complications.

Due to utilization metrics, it can be fairly difficult to pin the consumption of tokens from a specific use case to a specific cost. Until throughput and pricing transparency is introduced into model provider’s PTU offerings, estimates are our best option. An additional complication is that model providers each have a different pricing or PTU allocation option such that saying “a single PTU” doesn’t really mean much from model provider to model provider.

To illustrate the concepts, we’ll start with the simplest situation: a single use case with a single PTU.

Let’s assume 50% utilization over the entire month. We can perform some basic averaging to achieve a realized price. Let’s assume you can buy a certain amount of PTUs with a $30,000/month commitment. AWS’s Provisioned Throughput of Claude 2.0 will cost $29,462.40 for one month. How many tokens can you generate with that PTU in that month? Your results will vary between models and platforms but just to illustrate, let’s assume that one PTU can handle 2,500 tokens input/250 tokens output per minute.

Input tokens  
=

2500 tokens

input

minute
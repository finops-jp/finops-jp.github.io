# Accurate Company Valuations Using FinOps

## Table of Contents

  * [Introduction](<#intro>)
  * [Examples of poor evaluation](<#poor-eval>)
  * [Accounting: Cloud vs. Traditional](<#accounting>)
  * [Example of poor valuation for Cloud user companies](<#poor-cloud-example>)
  * [Potential options to address the accounting problem](<#potential-options>)
  * [Possible ways to reduce Risk and Agency Cost](<#reducing-risk>)
  * [Unit Economics for Investors and to pitch value for your company](<#unit-economics>)
  * [Closing thoughts](<#closing>)
  * [Acknowledgments](<#acknowledgments>)

## Introduction

The FinOps Framework is about making money, not only saving it. Today, FinOps practitioners assume they will deliver value to their company by following universal best practices. But they act on behalf of Principals – company owners, whether they coincide with Executives or not. When Principals don’t clearly define Value, then Practitioners may try to translate Executive guidance, or make proposals. This scene-setting document aims to act as the theoretical basis to educate our audience to prepare for the next sprint, when our Working Group will publish a paper on how to define and measure value and how to define actionable rules, called “guardrails”, to guide FinOps Practitioners make decisions based on KPIs, that build value for Principals and execute the strategy defined by Executives.

Implementing these raises clarity, also assisting investors and analysts understand the value of companies with significant Cloud spend – where, today, operating expenses (OPEX) are accounted for in a way that conflicts with traditional methods. Because investors seek a return on investment, they require better insight into how to accurately value a company that is cloud-native or has a significant portion of cloud spend. Reasonable valuation helps them understand a company’s financial health and potential for growth, and make informed decisions about further investing in, selling, or holding onto their shares. Investors generally consider it harder to value a company compared to other assets like real estate, because it involves forecasting the sum of all future cash flows from the sales of the company goods and services, and financial performance, which is subject to more significant uncertainty.

_We incorporate the concepts from the book[Principles of Corporate Finance](<https://www.amazon.com/Principles-of-Corporate-Finance/dp/1265074151/>) (Brealey, Myers, Allen, Edmans) and enrich them with FinOps and our own research. This definition is important, because Corporate Finance is based on assumptions, too often overlooked. It’s essential for the reader to scrutinize critically and provide feedback, despite our transparency and rigor. Other frameworks may lead to alternative valid conclusions._

Additionally, a company’s value is closely tied to its management and strategic decisions, that’s challenging to predict. For the financial manager, FinOps helps make informed investment decisions using industry-specific metrics and case studies, and allocate resources and plan strategically. For investors, owners, and stakeholders, FinOps provides continuous observance over these internal investment decisions. So it becomes clear when the return is higher than investing elsewhere or not – the baseline [opportunity cost](<https://www.finops.org/resource/terminology/#valuation>). For creditors, lenders, and investors, an accurate valuation helps them determine the risk associated with lending to or investing in the company. We’ll explain that companies that adopt the FinOps framework have lower [risk](<https://www.finops.org/resource/terminology/#valuation>), make better investment decisions, and improve the accuracy of their valuation.

### Opportunity Cost

In microeconomic theory, the [opportunity cost](<https://www.finops.org/resource/terminology/#valuation>) is the value or benefit given up by engaging in that activity, relative to engaging in an alternative activity. It represents the potential benefits that an individual, investor, or business misses out on when choosing one alternative over another.

Forecasting wealth as the sum of future cash flows is intrinsically hard, so, in over 100 years, economists developed easier methods. One is comparing a company to similar publicly traded companies. Another is using financial metrics like price/earnings and enterprise value/revenue ratios and size or volume metrics as proxy indicators that the company can harvest a market and generate cash in the future. We recommend focusing more on the [concrete cash flows](<https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1297053>) and less on the easier methods.

### Learn more from our valuation deck

Today, investors generally accept two methods to valuate a company: Performance-based and Trading Comparables. We chose to use performance-based methods instead of trading comparables as an assumption for this whitepaper.

For more details, check our [Valuation Deck](<https://docs.google.com/presentation/d/1qCeRgo-HubCnvVe07OGqhb1NjCkIfTUPSvRlv85IIj0/edit?usp=sharing>).

## Examples of poor valuation

Good communication and collaboration are staples of the FinOps framework. It’s important to understand how investors make decisions to maximize the return on their investment. In their minds, “potential” value [can be more robust than concrete present earnings and best management practices](<https://papers.ssrn.com/sol3/papers.cfm?abstract_id=908065>). They are betting this potential will generate future earnings, or that they can sooner resell their shares to another buyer at a higher price. Ultimately, earnings are a direct return on investment, but anything else is a bet. We present 2 examples, not specific to FinOps and the Cloud, that represent this challenge.

### Whatsapp

In 2014, Facebook bought WhatsApp for $19 billion and acquired a sizable and rapidly growing user base, a strong presence in the messaging industry, access to emerging markets, and valuable data on its users. But the company’s straightforward approach to monetization and lack of revenue streams made assessing its actual value hard, and cast doubt on [whether it could generate enough profit to justify the acquisition price](<https://techcrunch.com/2014/10/28/whatsapp-revenue/?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAADBej2lsrsu1YnwJ-XLc4JdZhAS-zuZ07uH7ZIU9glh3HOpY6KvPY71how_N-Ayz5jFZnbcJCoBbt6VpvzLf-ais4rHDdk6Rd2CskoBiHZVRlQhOpKH2N9b6Z6dG_JvtVdmtJacBhCeP1R_Levj2mmcapK1m90zpJfCGgmEC6rnE>).

### WeWork

WeWork was [valued over $47B in 2019](<https://www.cnbc.com/2020/05/18/softbank-ceo-calls-wework-investment-foolish-valuation-falls-to-2point9-billion.html#:~:text=Investing%20Club-,SoftBank%20values%20WeWork%20at%20%242.9%20billion%2C%20down,%2447%20billion%20a%20year%20ago&text=SoftBank%20founder%20and%20CEO%20Masayoshi,31>). Later, investors raised [concerns about its business model](<https://www.theguardian.com/business/2019/dec/20/why-wework-went-wrong>) (how does this company make money exactly?) and when they realized there were no profits in sight, the valuation dropped to $4B, the latest investors lost up to 91.5% of their investment. Even if the WeWork CEO Adam Neumann led the company to bankruptcy, investors still value his ability to deliver and change a market; the market cap for his new business [“Flow”](<https://www.nytimes.com/2022/08/15/business/dealbook/adam-neumann-flow-new-company-wework-real-estate.html>), offering financial products, loans and sub-loans, is well back despite [WeWork’s challenges](<https://www.eaglepointcap.com/blog/wework-what-investors-can-take-away-from-the-recent-meltdown>).

## **Accounting: Cloud vs Traditional**

Accounting is different for a Traditional and a Cloud Native Company. [Valuation is harder](<https://papers.ssrn.com/sol3/papers.cfm?abstract_id=1609799>) for companies with a material amount of Cloud spend because instead of buying assets like Data Centers ([CapEx](<https://www.finops.org/resource/terminology/#valuation>)), they can procure resources by paying fees (OpEx).

**Company Type** | **Year 1** | **Year 2** | **Year 3** | **Year 4**  
---|---|---|---|---  
Traditional | $10M Investment $2.5M Depreciation | $2.5M Depreciation | $2.5M Depreciation | $2.5M Depreciation  
Cloud Native | $2.5M Cloud Bill | $2.5M Cloud Bill | $2.5M Cloud Bill | $2.5M Cloud Bill  

In this example, the Traditional Company builds a data center for $10M, which becomes an asset that depreciates $2.5M per year. The Cloud Native Company owns no assets, just pays a Cloud bill of $2.5 (assuming exceptional re-platforming and cost optimization). These scenarios perform exactly the same service, and/or operations, but are accounted for differently! To grow rapidly, enterprises strain their engineering teams or R&D, to roll out new products or features and expand infrastructure to support them. Infrastructure is an asset they need to develop new sources of revenue properly. Typically, infrastructure is a physical asset that can depreciate over its useful life. This means that it does not represent a current outflow of cash. This creates a depreciation [tax shield](<https://www.wallstreetprep.com/knowledge/depreciation-tax-shield/>), which can be a significant financial benefit for companies, especially those that invest in long-lived assets, such as infrastructure. By deducting depreciation expenses, companies can reduce their taxable income and save money on taxes.

## Example of poor valuation for Cloud user companies

### Nubank

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201346%20290'%3E%3C/svg%3E)

Nubank was the largest FinTech bank in Latin America. In the banking industry, an efficiency ratio is non-interest expenses/revenue. Contrary to popular belief, the lack of significant Capex worked against Nubank, removing the tax shield. Also, most investors are unfamiliar with cloud accounting, so they misconstrued the efficiency ratio, higher on year 1 without the upfront expenses, as excellent performance. This led to wrong valuation. Investors later raised concerns about the business model and the final value dropped by 60% in a panic wave, from their Initial Public Offering (IPO).

> _“We have the best unit economics in the segment, with more than 30x LTV/CAC [lifetime value/customer acquisition cost]. Our cost of service is approximately 85% lower than other players in the industry.”_ – Guilherme Lago, Nubank’s CFO, [Source](<https://startups.com.br/noticias/brazils-nubank-reports-q1-results-launches-new-product/>)

This story reminds us that fast-growing companies should assetize resources and infrastructure to build new features and mind the pitfalls of metrics without context. As an improvement, when Nubank entered the Mexican market, it may have used its Lifetime Value (LTV)/Customer Acquisition Cost (CAC) metrics from another market as a benchmark. Even better, it could have gathered intelligence on the unique challenges and opportunities of the new market instead of relying on past [operational efficiency](<https://www.finops.org/resource/terminology/#valuation>) metrics.

### **Overvaluation**

Tech companies can operate more efficiently in the Cloud. But this, and a misunderstanding of accountability, can configure an overvaluation. An inflated stock price and false sense of success leads management to complacency and poor or risky decision-making, like expensive acquisitions or reckless expansion into new markets or investing in unproven technologies.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20800%20533'%3E%3C/svg%3E)

_Source:[personalexcellence.co](<https://personalexcellence.co/blog/diminishing-returns/>)_

Overvaluation is also more likely to happen for rapidly scaling cloud-native tech companies still using the traditional [Corporate Finance](<https://www.finops.org/resource/terminology/#valuation>) valuation methodologies. That’s because the cost increase per customer isn’t linear with the tech debt and application modernization at various orders of magnitude (e.g. 100, 10,000, 100,000, 1M customers) and there’s no general rule. In order to an accurate valuation It’s important to holistically plan and budget for cloud investments at customer acquisition checkpoints.

## Potential options to address the accounting problem

We will establish a FinOps methodology that can be integrated into Generally Accepted Accounting Principles (GAAP)/International Financial Reporting Standards (IFRS) to fix the disparity in accounting between traditional and cloud native companies to ensure similar indexes for both types of companies. They will appear identical when they materially are. We aim to balance Capital and Operational Efficiency and [accurately classify and account for cloud-related costs](<https://www.journalofaccountancy.com/issues/2020/jul/fasb-cloud-computing-standard-reduces-complexity.html>).

Before considering how to correctly monitor and report it is important to correctly account for investment decisions. For example, GAAP considers R&D cost as an incurred cost but in some cases, it may be accounted for as a CapEx asset or Opex if it is tied to a tangible delivery or increases Operational Efficiency. This can lead to confusion and hinder transparency making it difficult for investors to understand a company’s financial health. Therefore, we will provide prescriptive guidelines to aid in integrating FinOps with GAAP/IFRS.

In a Cloud environment, traditional GAAP principles such as Regularity, Consistency, Sincerity, Continuity, and Periodicity are challenged by new workflows, standard operating procedures, human error, and a more complex RACI matrix. For accurate IT budgeting, FinOps leadership should align on business value delivery and a product vision. Only on these principles does it make sense to make infrastructure commitments (CapEx) to take advantage of discounted cloud cost, or leverage pay-as-you-go (PAYG) consumption and other operational costs (OpEx).

It’s a good practice to weigh the opportunity cost of diverting specialized human resources to manage cloud infrastructure versus other valuable business functions. Fully managed cloud solutions (or contractors) can provide the same or better service at a lower cost. This analysis should consider the company’s budget, current staffing levels and expertise, the complexity of its cloud infrastructure, and the potential risks and benefits of each option.

## Possible ways to reduce Risk and Agency Cost

High [free cash flow](<https://www.finops.org/resource/terminology/#valuation>) or reserves may indicate strong performance, but may also suggest the company is holding onto funds instead of investing them in new ventures or opportunities. Or it may suddenly spend recklessly. Our goal is to provide greater visibility and understanding of financial and investment decisions to investors and company owners.

A company’s value is tied to its ability to generate wealth for its owners. Financial managers must make decisions that will increase wealth. They are expert and more hands-on, but often make self-serving decisions or fail to consider the opportunity cost, resulting in [agency costs](<https://www.finops.org/resource/terminology/#valuation>).

### Agency Cost

Agency Costs are costs brought by the separation of principal versus agent, or owner and manager. They include conflicts of interest against Fisher’s Theorem, Adverse Selection, and monitoring costs from owners over managers, ancillary management costs, etc.. A company’s value is tied to its ability to generate wealth for its owners. Financial managers must make decisions that will increase wealth. They are expert and more hands-on, but often make self-serving decisions or fail to consider the opportunity cost, resulting in agency costs.

The following image depicts how Financial Managers make an investment decision every time they decide to spend company money. FinOps capabilities can reduce agency costs, and risk and increase the quality of these decisions.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20720%20522'%3E%3C/svg%3E)

Increased visibility of a company’s investment decisions and resource allocation can lead to better decision-making. Likewise, when Toyota introduced real-time feedback on gasoline consumption on their Prius, they saw drivers adjusted their behavior to consume less fuel.

By implementing FinOps Showback loops for investment decisions and setting a baseline opportunity cost instead of $0, companies can reduce risk and agency costs while improving financial performance for company owners. It means investors will know how much money they made in this company compared to what they could have made elsewhere. And they can check what financial managers are doing, virtually in real time.

### Showback

[Showback](<https://www.finops.org/resource/terminology/#showback>) creates a structure in which actual consumption of IT services is shown to business units, while the spend is being charged to a different business unit. Typically used to generate awareness and accountability across the organization or business areas.

### Chargeback

[Chargeback](<https://www.finops.org/resource/terminology/#chargeback>) is an allocation strategy of actual consumption spend of IT services from finance systems back to user teams via an internal report or “invoice”. This method holds business units directly accountable for IT spend and requires IT Finance Integration (to allocate spend to the appropriate cost centers and budgets).

[Chargeback](<https://www.finops.org/resource/terminology/#chargeback>) can be applied as a markup on investments, with the delta going to a reserve and all transactions logged in an immutable ledger. It means financial managers are billed the Opportunity Cost when they reinvest company money rather than paying it back to investors. Viewing all Cloud costs (and not only) allocated to each cost driver, with historical data, managers can better baseline and budget for future development. It means the quality of the decisions improves.

Companies can decide the scope, periodicity, and granularity of information for Showback to shareholders. Companies that integrate the FinOps framework into their financial process, free themselves from other concerns and may focus solely on optimizing Free Cash Flow (FCF). When the budget is high, staff acquire passion for even boring initiatives, and profit and payback become evident, providing investors with real-time visibility on any exception approved by management.

We noticed that some companies mistake tight Budgeting (controlling spend) for Forecasting (predicting spend), which leads to a waste of time and resources getting figures exactly right. Predicting spend is impossible, and when you’re adjusting spend to match the prediction, you’re only doing Budgeting. A better approach is to forecast the value of an investment, such as the revenue and FCF generated from selling an app that utilizes upcoming hardware. Its goal is planning capacity and allocating the right size of resources. We call this Strategic Forecasting.

Maximizing a company’s wealth is essential, as it makes investors happy, regardless of individual preferences. This is referred to as the [Fisher Theorem](<https://www.finops.org/resource/terminology/#valuation>).

### Fisher Theorem

Financial Managers should only worry about maximizing a company’s [Market Value](<https://www.finops.org/resource/terminology/#valuation>), and not about shareholder preferences. Investors have a secondary market to tweak for their risk and long term vs short term preferences, for e.g. diversify their portfolio, buy and sell.

Traditionally, there are 2 possible strategies for financial management: earnings or growth.

  1. Earnings, the short termist, is to maximize FCF by generating as much cash as possible from operations and minimizing non-operating assets like investments inventory. Then pay dividends or repay [debt](<https://www.finops.org/resource/terminology/#valuation>).
  2. Growth, the long termist, is to optimize FCF use by investing in growth opportunities or strategic acquisitions.

Ultimately, the **two strategies are just one** , and the Cloud’s elasticity eliminates the need for overly precise capacity planning.

## **Unit Economics for Investors and to pitch value for your company**

[Unit Economics ](<https://www.finops.org/framework/capabilities/measure-unit-costs/>) can provide clarity when assessing the value of a feature. For instance, Spotify’s minimal song start-up delay was a highly valuable metric at its inception, but as the market evolved its worth waned. To determine the value of a click and its impact on costs and income, it’s crucial to include fully loaded costs and a key strength-related exogenous variable. This approach better pitches a feature’s value for the company.

Our Working Group is working on delivering a standard to integrate UE to existing Financial Reports to provide accountability to owners and shareholders. Attributing fair value is hard due to the disparity of information (Adverse Selection) between company employees and externals, biases, potential conflicts of interest, and situational variables. In the case of NuBank, for example, Brazilian indicators and variables contingent to that market are very specific. Yearly audits performed by third-party large accounting and analyst firms can work to ensure that UE and opportunity costs are measured and compared fairly. The audit’s outcome is not focused on global opportunity cost, but on the perspective of company management. If the audit results in a high opportunity cost, this indicates that the management has high outreach for alternative opportunities – but also sets the bar high about the expected financial performance – while a low one shows that the company may lack resourcefulness – and sets this bar lower. Without this audit, investors may perceive any positive cash flow as good, when it may be losing total value. It’s important to pick the right UE since too much or too little detail can result in diminishing returns or lack of usability and value.

Strategic Forecasting. utilizes order-of-magnitude capacity planning to optimize FCF. Preparations and operations differ significantly when aiming to generate $10 million versus $1 billion, and is based on measuring (and presenting) effective value through the utilization of the [FinOps Framework](<https://www.finops.org/framework/>).

## Closing thoughts

Incorporating the perspectives and capabilities of investors into the [FinOps Framework](<https://www.finops.org/framework/>) can help companies avoid wrong valuations by providing a more comprehensive understanding of the company’s financial health and investment decisions

  * A wrong valuation can lead to bad management decisions, such as providing too much cash for a company, resulting in careless spending or a lack of drive to invest in new ventures or opportunities.
  * Excess cash can also tempt management to pursue unnecessary mergers and acquisitions, which may not add value to the company or its shareholders.
  * More cash can create a false sense of security and lead to a lack of focus on operational efficiency, potentially resulting in lower profitability and shareholder value.

Transparency and understanding of investment decisions and resource allocation can lead to better decision-making and improved financial performance.

  * Increased visibility into investment decisions and resource allocation can also help companies make more informed decisions, reducing the risk of costly mistakes and potentially growing shareholder value over the long term.

Analyzing opportunity costs can help determine the most efficient use of resources when managing cloud infrastructure.

  * Analyzing opportunity cost helps determine the potential benefits lost when choosing one resource allocation option over another in managing cloud infrastructure.
  * By comparing potential benefits, managers can prioritize resource allocation to tasks that provide the highest net benefit, improving overall efficiency and reducing costs.
  * Opportunity cost analysis can help identify resource-intensive tasks that are not delivering significant benefits and redirect resources to more critical tasks, leading to better resource utilization and improved organizational outcomes.

### Feedback, discussion, and recommendations are welcome

Now that our Working Group has started this discussion, we’re open to hearing other community stories and perspectives on how FinOps can better define the valuation of companies of all types and sizes. Get in touch with us on our [Slack chat channel](<https://finopsfoundation.slack.com/archives/C047VEKK6CB>) to discuss parts of this paper, or to find out more about getting involved with future sprints and iterations of this work.

### Disclaimer

Our Working Group sought the recommendations and advice of an external Legal Counsel to review its deliverables in order to raise accuracy and clarity. We did this so that Investors, FinOps practitioners, and all our readers may make harmless and best informed decisions – explicitly calling out our assumptions and rationales. We wish to respect third-party Intellectual Property and present all our study cases and examples in an inclusive way that adds value to the quoted parties and all readers.

In the sprints to come, as we deliver more prescriptive advice from our expertise, we consider Legal Counsel as our sounding board and advisory to stick to these core principles and raise quality.

## Acknowledgments

The FinOps Foundation extends a huge thank you to the members of this Working Group that broke ground on this documentation:

[ ![Thiago Gil](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Thiago Gil Atos ](<https://www.linkedin.com/in/thiago-bittencourt-gil/>) [ ![Ermanno Attardo](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Ermanno Attardo Trilogy ](<https://www.linkedin.com/in/ebjattardo/>) [ ![Claudia Seffrin](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Claudia Seffrin Pier Cloud ](<https://www.linkedin.com/in/claudiaseffrin/>) [ ![Frank Contrepois](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Frank Contrepois FinOps Lead ](<https://www.linkedin.com/in/frankcontrepois/>) [ ![Nadeem Husain](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Nadeem Husain Apptio ](<https://www.linkedin.com/in/husainnadeem/>) [ ![Bindu Sharma](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Bindu Sharma Teradata ](<https://www.linkedin.com/in/bindu-sharma-b8883/>)

Thank you to our supporters for your invaluable help.

  * Robert Melton, legal counsel
  * Karl Hayberg
  * Professor Claudio Lucinda, financial counsel

## Table of Contents

  * [Introduction](<#intro>)
  * [Examples of poor evaluation](<#poor-eval>)
  * [Accounting: Cloud vs. Traditional](<#accounting>)
  * [Example of poor valuation for Cloud user companies](<#poor-cloud-example>)
  * [Potential options to address the accounting problem](<#potential-options>)
  * [Possible ways to reduce Risk and Agency Cost](<#reducing-risk>)
  * [Unit Economics for Investors and to pitch value for your company](<#unit-economics>)
  * [Closing thoughts](<#closing>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ FinOps Practice Operations ](<https://www.finops.org/framework/capabilities/finops-practice-operations/>)
# Purchasing Commitment Discounts in GCP

**Summary:** FinOps Practitioners must navigate Committed Use Discounts (CUDs), which are offered in two primary forms: Resource-based (fixed machine types in specific regions) and Spend-based (flexible dollar-per-hour commitments across services). This guidance helps practitioners create a structured lifecycle of analysis and procurement to maximize savings while managing the risk of underutilization. Leverage the GCP Billing Console and Recommender API to identify high-impact workloads, model potential ROI, and implement automated monitoring to ensure active commitments align with actual consumption patterns.

## Table of Contents

  * [Who Should Use this Playbook](<#who-should-use-this-playbook>)
  * [Prerequisites](<#prerequisites>)
  * [Commitment Discount Lifecycle Phases](<#commitment-discount-lifecycle-phases>)
  * [Instructions for Running This Play](<#instructions-for-running-play>)
  * [Play Instructions: Spend-Based CUDs](<#spend-based-cuds>)
  * [Play Instructions: Resource-based CUDs](<#resource-based-cuds>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Related Resources](<#related-resources>)
  * [Acknowledgements](<#acknowledgments>)

This playbook is a resource designed for FinOps practitioners who are new to purchasing [Commitment Discounts](<https://www.finops.org/resource/terminology/#cb-discounts>) in GCP. This playbook provides a comprehensive overview of the technical and non-technical steps for making a commitment discount purchase assuming crawl maturity including prerequisites, risks and considerations, the purchase process, monitoring and maintenance, KPIs and more.

Advice on chargeback, showback and exchanging or selling commitments is not addressed within this playbook. While every organization’s overall process varies, the four main lifecycle phases (analysis, purchase, review and remedy) will still be performed in one manner or another. This playbook will guide practitioners to build a successful practice in the management of commitment discounts. For detailed information on the nuances of commitment discount offerings provided by various CSPs, please see the [**_Managing Commitment Discounts Overview_**](<https://www.finops.org/wg/commitment-based-discounts-overview/>).

Within Google Cloud, there are many different types of commitments, each with their own nuances. The most common commitment discounts that will be covered in this playbook are the following: Resource-based Committed Use Discounts (CUDs), Compute Engine Flex CUDs, Spend-based CUDs, and BigQuery Slot Reservations. Google also offers reservations and SUDs but those will not be part of the playbook – more on why [below](<https://docs.google.com/document/d/1NYEmkbfvGFGHu6iwq_X6nyW8qPKFzT0N6CpojNCvIEs/edit#heading=h.nmunlhcw2dbh>).

## Who Should Use this Playbook

The target audience for this playbook is any FinOps practitioner, regardless of FinOps maturity level, but best suited for someone who is new to the process of making a purchase or with little to no experience executing a commitment discount purchase with a specific CSP. This playbook may also be leveraged as a baseline commitment discount purchase process referenced by any level FinOps practitioner or persona.

## Prerequisites

### Who needs to be involved:

This section outlines each Persona responsible for the activities and processes encapsulated by this Playbook. It is an expansion of the roles discussed in the [whitepaper](<https://www.finops.org/wg/commitment-based-discounts-overview/#personas>) and designates who should be Responsible, Accountable, Consulted, or Informed for activities within the commitment discount lifecycle. We have also outlined how their actions are associated with one of the FinOps Phases (Inform, Optimize, Operate).

Please note, this will look different for every organization depending on structure, size, industry and more. This is intended to provide a general overview rather than specific directions. Some boxes are left blank intentionally.

FinOps Phase | Activity | FinOps Practitioner | Executives | Product | Engineering | ITAM  
Leader/Practitioner | Finance | Procurement  
---|---|---|---|---|---|---|---|---  
Inform | Analysis to determine what level & type of commitment should be made. | R / A | I | C | C | C |  |   
Operate | Grant or validate permissions in the CSP portal for commitment purchases. | A |  | I | R |  |  |   
Inform | Communicate findings and submit for purchase approval. | R | A* | A* | I | I | I | I  
Optimize | Make the purchase in the CSP portal. | R / A | I | I | I |  | I |   
Operate | Validate commitment is being consumed efficiently | R | A | C | I | I | I | I  
Operate | Course correct if it is not efficient | R | A | C | I | I | I | C  
Operate | Set policies & thresholds on approving & purchasing authorities. | A | I | I |  |  | R* | R*  
Operate | Encourage cost optimization culture & support commitment discount rollout | A | R | C | C |  | I | I  
Operate | Communicate commitment discount impacts on CSP-Direct contracts as needed | R | I |  |  |  | I | A  

_*Either of these personas could be the one responsible or accountable for this action, depending on how your organization is set up._

### Information and resources required:

This section provides information that contributes to the success of this Playbook; the information here includes specific datasources, context, reports or any relevant input that is important to understand prior to executing on this playbook.

#### Information

##### _Cloud Service Provider user permissions as required to manage_ _commitment discounts_

  * Ensure that the proper permissions to access Billing and commitment discount reporting have been provided 
    * In some cases, read-only permissions will be sufficient, but you will need permissions to purchase/modify/exchange commitment discounts based on the availability within the CSP.

##### _Cloud Billing and Usage Reports_

  * This information is important in order to understand what your teams are using and where the costs are within the cloud usage. Specific guidance for using the visualization reports is provided in the CSP-specific playbooks. 
    * Billing Data Visualization: AWS Cost Explorer, Azure Cost Management and Billing Blade, GCP Billing portal
    * Billing Data: AWS Cost and Usage Report (CUR), Azure Usage + Charges Report, GCP Billing Data Export
  * If no billing and usage reports exist, they should be created within the central management account.

##### _Understand Existing Commitment Discounts_

  * Know your current footprint and its projected future plans (retire, grow, migrate, etc.).
  * Know which commitment discounts are already being used within the environment and understand historic commitment patterns and personas that have been involved in the commitment discount lifecycle.
  * Understand instance utilization,the inventory of instances and the infrastructure footprint, current discount pricing coverage, etc. (this can be done through native tooling, third party tooling, or logs)

##### _Understand Organizational Priorities of KPIs_

  * Work with stakeholders to understand which KPIs matter for your organization. 
    * For example, is coverage more important than waste?
  * Establish these priorities and document them.
  * See the [KPIs utility](<https://www.finops.org/wg/finops-kpis/>) for ideas.

##### _Prioritize commitment discount Sharing_

  * Purchase commitments that provide discounts for eligible usage across multiple accounts that are linked to your main cloud billing account. This provides the lowest risk for under-utilization and can lead to reduced analysis overhead. As a result, it is likely the shortest path to realize savings.
  * Optional approach, but not necessary: 
    * Create a sub-account linked to your main cloud billing account dedicated only for purchasing commitment discounts. 
      * Key advantages include: 
        * permissions can be scoped to explicit owner and actions specific for commitment discount purchases;
        * reduces risk because there are no production services operational in the dedicated sub-account;
        * overhead is reduced for managing commitments;
        * facilitates purchase tracking and auditing.

##### _Determine if any cloud management tools are being used within the environment_

  * Tooling can be homegrown, open source, or 3rd party.
  * Different business units/stakeholders may be using varying approaches to commitment discount management, or none at all.
  * Understanding what is being used already will help establish a commitment discount strategy that is aligned with existing processes or can allow for integration of other supplemental tooling.

##### _Knowledge of CSP-Direct Agreements_

  * Most CSPs offer custom pricing agreements, discount programs and more. Ensure you are knowledgeable of any existing agreements in place between your organization and CSP(s) used.
  * Some CSP-Direct Agreements define annual or agreement-length spend requirements that may affect commitment discount purchase strategies. 
    * If your organization has a contractual minimum spend commitment, consider how any savings might put you at risk of falling out of compliance. Additionally, how might extended commitment durations impact your organizational contracts?
  * Some CSP-Direct Agreements have different payment approaches based on the terms – they may require all upfront payment or pay-as-you-go payments which can impact the decision to purchase all upfront, partial upfront, or no upfront.

#### _Understanding of Risk_

In most organizations, risk takes the form of under-utilized commitments, wasting financial resources. Taking on term commitments, typically of 1 or 3 years, adds the risk of over and under committing to commitment discounts, particularly when durations are not flexible. Your organization’s risk tolerance will heavily influence the way in which your commitments are purchased and managed.

You can start to quantify the risk of under-utilized commitments by multiplying dollars per hour committed by the total hours committed.

_$/hour committed * total hours committed = Total Commitment $_

This value represents the potential wastage from a completely unutilized commitment, whose risk depends on the underlying workloads and technical strategy. We will cover calculations to more accurately determine consumption risk in a later section. Common strategies to mitigate high risk include:

  * Choosing a lower coverage percentage
  * Choosing a shorter commitment term
  * Choosing commitment discounts with more flexibility, but lower discounting

##### _Cloud Users/Stakeholders_

  * It is important to understand the collection of personas and business units that are interacting with cloud services. 
    * Having an understanding of who, what, where and why with regards to cloud usage will build the framework for communicating commitment discount management strategies.
    * Reference the [FinOps Personas described in the Commitment Discounts whitepaper ](<https://www.finops.org/wg/commitment-based-discounts-overview/#personas>)or the [RACI chart](<#raci>) for context.

##### _Other_ __

It is essential to understand your existing level of spend and utilization before purchasing a commitment to ensure that you are not over-committing. Furthermore, an understanding of your planned/expected consumption can also feed into this analysis, but is harder to predict. Below are a list of considerations and prerequisites for commitment discounts in Google Cloud.

  1. Understand the difference between spend and resource based Commitments. [_Google Documentation_](<https://cloud.google.com/docs/cuds#spend_versus_resource_commitments>).[ ](<https://cloud.google.com/docs/cuds#spend_versus_resource_commitments>)
  2. Consider whether the application of a Committed Use Discount will achieve higher or lower savings than a Sustained Use Discount (SUD) as these discounts will not stack. 
     1. Note: any spend not covered by a Committed Use Discount may be eligible for a Sustained Use Discount. The benefit of having SUDs for excess usage is that it allows for savings to occur without overcommitting with CUDs and they are applied automatically, without you needing to do anything. The drawback is that the savings are not as high. It is recommended to first purchase CUDs up to the level your organization desires and allow SUDs to kick in on any applicable excess.
     2. Keep in mind, not all resources are eligible for SUDs. Check the available products [here](<https://cloud.google.com/compute/docs/sustained-use-discounts#limitations>).
  3. For each resource-based commitment, consider whether you want to enable committed use discount sharing by setting the scope to “Billing Account” rather than “Project Scoped” when purchasing. 
     1. This is an important consideration because sharing will mitigate the risk of under-utilization but brings additional complexity as it will also mean that the benefits can be attributed across your organization. In companies where predicting spend and/or the allocation of commitment costs is of high importance, this will bring extra work.
     2. A common approach in FinOps is to set up a project that is solely used for the purchase of commitments (for reasons such as fine-grained IAM controls/other policies) and then enable sharing so the benefits can be enjoyed by the “functional” projects out at the edge. 
        1. This works unless you have a specific need to purchase a commitment in a “functional” project, in which case you would not want to have “Billing Account scoped” selected.
     3. By default, each commitment will be applied only in the project in which it is purchased (aka “Project scoped”). 
        1. Note: Once a commitment has been set to “shared”, it can’t be converted back to “non-shared”.
     4. If you enable sharing, you need to select proportional or prioritized attribution. 
        1. Proportional attribution is where the discount is automatically applied to projects based on their proportion of your entire spend. 
           1. For example, if project A consumed $75 worth of usage and project B consumed $25, project A would be covered by up to 75% of available credit and project B would be covered by up to 25% (<https://cloud.google.com/docs/cuds-attribution#type-proportional>)
        2. Prioritized attribution allows you to specify how much of your commitment is applied to specific projects and then the remainder of the commitment gets applied on a proportional basis, starting with the next largest, uncovered project by spend. (<https://cloud.google.com/docs/cuds-attribution#type-prioritized>)
        3. For those just starting out, selecting proportional attribution is the easiest way to “set it and forget it”. For more mature organizations that want to have more control over where commitment discounts are applied, Prioritized Attribution may be more appropriate.
  4. Spend-based commitments can only be scoped to the billing account they’re purchased in and will apply to eligible usage in any projects paid for by that billing account.
  5. Consider any recommendations from the [FinOps Hub](<https://cloud.google.com/billing/docs/how-to/finops-hub>)
  6. IAM Permissions 
     1. To view any existing commitments, Billing Account Administrator or Billing Account Viewer permission must be enabled.
     2. To purchase/make changes to any commitments, Billing Account Administrator permission must be enabled. See following Google documentation. 
        1. [View Recommendations](<https://cloud.google.com/recommender/docs/recommendation-hub/identify-configuration-problems>)
        2. [Modify Recommendations](<https://cloud.google.com/docs/cuds-recommender#permissions>)
        3. [Purchasing CUDs](<https://cloud.google.com/docs/cuds-spend-based#purchasing>)
  7. Understand the nuances and specifics of the different commitment options (below & [Additional Details](<#additional-details>) section).

### Commitment Types in GCP

Below is a summary of different commitment types available in GCP. We strongly encourage checking out our [Additional Details](<#additional-details>) section for a more detailed comparison in addition to Google documentation.

| **Committed Use Discounts (CUDs)** | **Sustained Use Discounts (SUDs)** | **Reservations** | **Slot Commitments**  
---|---|---|---|---  
Spend-Based CUDs | Resource-Based CUDs  
Traditional CUDs | Flex CUDs  
In Scope? | Yes | Yes | Yes | No | No | Yes  
Discount % Range | 17-52% | 28-46% | 57-70% | ≤30% | N/A | 20-31%  
Reserve Capacity? | No | No | No | No | Yes | No  
Services Covered | [Google Documentation](<https://cloud.google.com/docs/cuds#spend_based_commitments>) | Compute Engine | Virtual Machines | Compute Engine | Virtual Machines, BigQuery | BigQuery  
What are you committing to? | $ per hour | $ per hour | The monetary value of CPU & RAM usage | N/A | GPUs and Local SSDs, # of Slots | The monetary value of slot usage  

#### Tools, Utilities & Templates

  * [Google Cloud FinOps Hub](<https://cloud.google.com/billing/docs/how-to/finops-hub>): A web-based resource linking to your Google Cloud console providing the ability to purchase, manage and monitor GCP commitment discounts.
  * [Google Cloud Command Line Interface (gcloud CLI)](<https://cloud.google.com/sdk/gcloud/reference/compute/reservations>): Purchase and manage Google Cloud Compute Engine committed use discounts directly on the command line or via scripts using the Google Cloud CLI
  * [Google Cloud REST API](<https://cloud.google.com/compute/docs/instances/signing-up-committed-use-discounts>): Purchase and manage Google Cloud Compute Engine committed use discounts directly on the command line or via scripts using the Google Cloud REST API
  * [Email Template – FinOps commitment discount Purchase Request](<https://drive.google.com/file/d/1OaNgX88kra1b_YTGetSjI9jQj2qMeMEh/view?usp=sharing>): A template with suggestions on what information to include when asking for approval of commitment discount purchases. Ultimately, your point-of-contact for approval will be the best source of what information to provide for them to feel comfortable in granting approval.

## Commitment Discount Lifecycle Phases

The purpose of this section is to introduce the generic steps for purchasing and managing commitment discounts. These are intended to be vendor-agnostic and correspond to information in the GCP specific content which follows. It is important to note that this is an iterative process that will happen multiple times a day, week, month, quarter, or year depending on your organization. After making your first purchase of a commitment discount, it is recommended to use it as a learning experience to better understand how commitment discounts work, improve the process and feel comfortable purchasing more.

### Phase 1: Analyze commitment discount purchase opportunities & decide what to purchase

#### Understand current usage footprint to identify opportunities

  * Obtain and review usage patterns for the commitment parameters you are looking to evaluate (region, instance type, account, etc.)

#### Understand current commitment discount recommendations and utilization

  * Obtain the current commitment discount inventory with utilization information and expiration dates.
  * Obtain and review the commitment discount recommendations from CSP for service being evaluated for commitment discount.
  * Obtain and review the existing commitment discount coverage for the product and commitment parameters you are looking to evaluate.

#### Ask for help:

  * Don’t forget to ask for help from the Cloud Service Providers who likely already have good insight to your account(s) and both your current and future usage.
  * If your organization has one, a Technical Account Manager is likely to be able to advise and help you make commitment recommendations. They can also introduce you to other support groups within the CSP that can help optimize your cloud footprint.

#### Perform analysis

  * Identify and evaluate risks 
    * This can include month-over-month changes in inventory, product road maps, over-committing and more.
    * Understand any discount pricing coverage in place for that product.
    * Compare the amount of commitments you are recommending to the recommendations from the CSP and/or your organization’s footprint.
  * Complete a [Break Even Point analysis](<https://www.finops.org/wg/commitment-based-discounts-overview/#appendix>) for recommendation(s).
  * Document approval and approved purchase. The exact “how” will vary by organization.
  * Typically with a first-time commitment, organizations will do a small, spend-based commitment rather than a resource-based commitment due to the flexibility provided from CSPs and as a result, lower risk.

#### Make and share a recommendation with relevant stakeholders:

  * Compile information from previous actions into purchase recommendation(s).
  * Share recommendation(s) with relevant stakeholders.
  * Get approval (if required) to make the purchase. The exact “how” will vary by organization.

### Phase 2: Approval before making a commitment discount purchase

  * When making a purchase that would be expected to lower operating costs, you are likely going to need to have approvals for the risk of the commitment and potentially the cash flow impacts. The person who approves the purchase of a commitment discount will depend on your organization.
  * When making your first and/or early commitments and as you mature your understanding, you are likely to need to seek approval for the concept of making commitments (and the risk this brings). This could include getting approval for the process to make commitments, the type of commitments that you make and the approval of the actual purchases themselves.
  * You should also consider the approvals that you should seek from internal users. The nature of the commitments means that in some cases (not all) you are committing to use specific resources. Having the confirmation that there is expected to be continued use of those resources is important and as the specificity of commitments increases then it becomes more important to receive those internal confirmations.
  * As making commitment discounts becomes more regular, you are likely to establish agreed processes so approvals may or may not be required in the same depth for each purchase.
  * One specific area to seek early approval on is the payment basis, e.g. upfront (in full or partial) or as you go. Paying upfront does generate higher discounts but comes with the need for cash-outflow at the start of the commitment. You should discuss this with your Finance team (and potentially involve your Treasury team) and gain approval.

Due to the fact that the timing, sequence, and number of approvals, etc. are unique to each organization, we will not provide instructions on how to obtain commitment discount purchase approvals in the instructions for running this play. Default to your organization’s defined approval process. Note, many organizations deploy an [approval email](<https://drive.google.com/file/d/1OaNgX88kra1b_YTGetSjI9jQj2qMeMEh/view?usp=sharing>) during the phase.

### Phase 3: Make a commitment discount purchase

  * Refer to the Cloud Service Provider-Specific playbooks for instructions on how to complete the purchase.
  * Before clicking the “Buy” button, it’s good to always double check: 
    * Region
    * Scope
    * Amount sent for approval (if applicable) vs. purchase price
    * Account
    * Size (if applicable)
    * License type or database engine (if applicable)
    * Quantity
  * Document purchase and approval flow for records (if applicable).

### Phase 4: Check commitment discount utilization and compare to utilization goals

  * Commitments can become seen as poorly performing for a number of reasons. Most often, commitment discounts that go underutilized either due to overcommitment or changes in infrastructure are the biggest drivers of FinOps taking action. Below are some possible reasons for this occurrence. 
    * Perhaps a team shutdown instances for maintenance or migrated to a new instance family after they reached the breakeven point of the commitment.
    * Perhaps the commitment made does not align with the infrastructure due to an error made in the purchase process (wrong region, incorrect instance type, sharing wasn’t enabled, etc.).
    * Engineering teams might not have been informed about a commitment and made changes to better suit their needs without understanding the impact it would have on the commitment discount purchases.
  * An email to a technical account manager or a support ticket are often the best first steps if you need to take action on underutilized commitments or have made a mistake with a purchase.
  * Refer to the Cloud Service Provider-Specific playbooks for instructions on how to check commitment discount performance versus organizational goals.
  * Leverage [Key Performance Indicators (KPIs)](<#indicators-success>) for your organization to understand how your commitments are performing 
    * Utilization %
    * Coverage %
    * Effective Savings Rate
    * Waste (in $ and %)
    * Savings (in $ and %)

## Instructions for Running This Play

This document will guide you through the process of purchasing commitment discounts in GCP. The instructions provided here are intended to help synthesize the lifecycle of buying a commitment discount from the FinOps practitioner’s perspective. We acknowledge that these specific instructions may change as Google rolls out new features and capabilities but the lifecycle phases, concepts and general steps should not. We’ve tried to link out to relevant Google documentation where possible to help this document stay relevant over time. When performing analysis to understand what should be purchased, most of it will take place within the Google Console, especially when at the Crawl phase of commitment discounts.

## Play Instructions: Spend-Based CUDs

### Phase 1: Analyze commitment discount purchase opportunities & make a decision to purchase

#### Understand Spend-Based Committed Use Discounts.

Details can be found [here](<#spend-based-cuds>).

#### Understand current commitment discount recommendations and utilization

#### View commitment discount Inventory:

  1. Log into the [Google Cloud Portal](<https://console.cloud.google.com/>).
  2. Navigate to the [Billing product page](<https://console.cloud.google.com/billing>).
  3. Select **Commitment Use Discounts (CUDs)**.
  4. A table will be populated with all commitment use discounts associated with your billing account.

#### View commitment discount utilization:

  1. Log into the [Google Cloud Portal](<https://console.cloud.google.com/>).
  2. Navigate to the [Billing product page](<https://console.cloud.google.com/billing>).
  3. Select **CUD Analysis**.
  4. Select the commitment type you would like to see utilization for. 
     * Filter on the right by: 
       * Granularity: Daily or Hourly
       * Date: 3-year lookback period
  5. Repeat for all commitment types you want to analyze.

#### View commitment discount recommendations:

Google provides a list of recommendations based on an organization’s unique usage of the platform. These recommendations can be actioned (or not) after being reviewed by those who are capable of assessing the recommendations potential impact. Specifically, Google will recommend commitment use discounts based on your organization’s usage.

  1. Log into the [Google Cloud Portal](<https://console.cloud.google.com/>) and navigate to **Recommendations**.
  2. If shown, select the option to view CUD recommendations. 
     1. At the time of publication, this was done by selecting **View All** under **Save with Committed Used Discounts**.
     2. If no option is shown, that may mean there are no current recommendations.
  3. This will take you to a page that shows all recommendations based on your organization’s usage. 
     1. If desired, you can adjust what types of recommendations you see using **Configure recommendations** in the upper half of the page. 
        1. Usage to be covered by CUD: 1% to 100% 
           1. This can be set based on your organization’s KPIs.
        2. Select preferred CUD duration: 1-year commitment or 3-year commitment. 
           1. This selection should be informed by your organization’s risk appetite. See the [whitepaper](<https://www.finops.org/wg/commitment-based-discounts-overview/>) for additional context on this decision.
  4. These recommendations can be filtered by any table value by clicking Filter above the table. Type in the value you would like to filter by then enter on your keyboard. 
     1. For example, to see only new recommendations, filter by “New commitment.”
  5. To learn more about a recommendation, click on the underlined text in the row. 
     1. A new page will pop-up with details on why it’s recommended, spend history, and the ability to filter.
     2. If not done in step 4, here you can filter by commitment term or coverage preferences.
  6. If a recommendation is not actionable, you can opt to **Dismiss** it. 
     1. This is helpful if you know an infrastructure change is coming and you don’t want to commit to it or if you know that you won’t be able to act on it.
     2. If something gets dismissed accidentally, you can restore it by going to the **History** tab in the upper right-hand corner.

Whilst these data recommendations are useful, only you and your organization can really know whether the usage will remain for long enough to make the commitment worthwhile. Please remember that there is no option to exchange/cancel a GCP CUD.

#### Phase 2: Approval

The exact approval process is dependent on the policies and procedures defined by your organization. Default to your organization’s unique approval process

#### Phase 3: How to make a purchase once a decision has been reached to commit

Purchases of commitments can be made via the Google Cloud Console, gCloud CLI, or the API. For the purposes of this playbook, we are focusing on the Google Cloud Console.

  1. Log into the [Google Cloud Portal](<https://console.cloud.google.com/>) and navigate to the **CUD Analysis** page from the [Billing product page](<https://console.cloud.google.com/billing>). 
     * Navigate to the CUD analysis section in the GCP console and initiate the purchase process (you may need to click Purchase at the top of the page to do so)
  2. Select the **Product** you want to commit to. 
     * **Note:** If you want to purchase a Flex CUD, select Compute Engine Flexible Committed Use Discounts. All other products will be a traditional CUD.
  3. If prompted, select the billing account you would like to make the commitment in.
  4. Enter a **name** for your commitment.
  5. Choose a **commitment term** of 1 or 3 years, the duration for which you are charged for the commitment.
  6. If prompted, select the region you want the commitment to be in. 
     * Only usage and spend in that region will be able to be covered by the CUD.
  7. Enter your hourly **commitment amount** , in terms of equivalent on-demand spend. This can only be two decimals long and must be at least $0.01 per hour. 
     * This is typically informed by the recommendations provided by GCP.
  8. Preview your purchase. 
     * Note: At the time of publication you must click the **Purchase** button. This does not process the actual purchase, but rather prepares a summary for you to review before finalizing.
  9. Submit your purchase if desired. 
     * Note: At the time of publication you can submit your purchase by clicking **Purchase** again.

#### Phase 4: How to check performance versus goals

We can use many methods to check the utilization of our commitments

##### Billing Account

From the billing account, we can get a better understanding of all the commitment discounts from an organizational level:

  1. In the console, go to the billing account and navigate to the **Committed Use Discounts.**
     * This will open a page with the list of all committed use discounts in the organization.
  2. From here, navigate to the CUD analysis view 
     * This may require you clicking on,”View Analysis” on the far right.
     * This gives us a more granular level analysis from different dimensions like % of coverage, % of commitments utilized and % of non-utilized CUDs. Leverage filters such as project, region, time and commitment type.

##### Compute Engine Console

  1. In the console, go to **Compute Engine** and select the project you would like to see.
  2. Opt to view the **Committed Use Discounts** or **Reservations** pages**.**
     1. This allows you to be able to see the whole inventory of the CUDs and Reservations for this specific project.
  3. Click on a specific Reservation or CUD to get the details for the linked Reservations and resources. 
     1. In **Reservations** we can also view how many VMs have been reserved and how many have been utilized.

At the time of publication, there is no ability to enable alerting for low utilization on any type of commitment. Please check current Google Cloud documentation for the latest information.

##### How to remedy poor utilization situations

GCP does not offer the ability to exchange, cancel, or ask for a refund. If you need to take action on an underutilized CUD due to an accidental purchase or changes to infrastructure, reach out to your organization’s technical account manager and/or file a support ticket with Google.

## Play Instructions: Resource-based CUDs

### Phase 1: Analyze commitment discount purchase opportunities & make a decision to purchase

#### Understand Spend-Based Committed Use Discounts.

Details can be found [here](<#spend-based-cuds>).

#### Understand current commitment discount recommendations and utilization

##### View commitment discount Inventory:

  1. Log into the [Google Cloud Portal](<https://console.cloud.google.com/>) and navigate to **Commitment Use Discounts (CUDs)** from the [Billing product page](<https://console.cloud.google.com/billing>).
  2. A table will be populated with all commitment use discounts associated with your billing account.

##### View commitment discount Utilization:

  1. Log into the [Google Cloud Portal](<https://console.cloud.google.com/>) and navigate to **CUD Analysis** from the [Billing product page](<https://console.cloud.google.com/billing>)
  2. Navigate to view resource-based commitments. 
     * At the time of publication, this was done by selecting Resource-based commitments under the commitment type dropdown.
  3. Once the page loads, select the resource type you would like to see utilization for. 
     * Filter on the right by: 
       * **Granularity** : Daily or Hourly
       * **Date** : 3-year lookback period
  4. Repeat for all commitment types you want to analyze.

##### View commitment discount Recommendations:

  1. Log into the [Google Cloud Portal](<https://console.cloud.google.com/>) and navigate to **Commitment Use Discounts (CUDs)** from the [Billing product page](<https://console.cloud.google.com/billing>).
  2. Select **Recommendations**.

### Phase 2: Approval

The exact approval process is dependent on the policies and procedures defined by your organization. Default to your organization’s unique approval process

### Phase 3: How to make a purchase once a decision has been reached to commit

  1. Log into the [Google Cloud Portal](<https://console.cloud.google.com/>) and navigate to **CUD Analysis** from the [Billing product page](<https://console.cloud.google.com/billing>)
  2. From here, navigate to the Resource based commitments. 
     1. At the time of publication, you could do so by clicking **Resource based commitments** found under **Commitment Types** at the top of the page.
  3. Select the resource you wish to reserve, e.g., N1 instances. 
     1. Here you can filter historical usage to understand what is being charged on demand and therefore where opportunity may be for a commitment.
     2. Filters include: 
        1. Aggregate: View all usage associated with this resource type across the organization.
        2. By region: View all usage associated with this resource type across the organization by region. 
           1. Recommended to filter by region at this stage because a region is required to be selected when making this type of commitment later in the playbook.
        3. Sort by: Organize the visuals based on the following: 
           1. Commitment level (existing)
           2. Usage (historical for time range selected below)
           3. Alphabetical (A → Z)
        4. Time range: Presets available or create a Custom range.
        5. Region
        6. Project
  4. Option: If shown, click “View Recommendations” on the screen to see recommendations from Google for this resource type.
  5. Proceed to the next step. 
     1. Choose the appropriate project for the purchase.
  6. Choose if you want to make a hardware commitment or a license commitment. 
     1. Hardware commitments relate to storage and compute commitments. 
        1. Although the fields are present on the Hardware page, GPUs and SSDs do not need to be added in order to process this commitment. These are related to the reservations mentioned [above](<https://docs.google.com/document/d/1NYEmkbfvGFGHu6iwq_X6nyW8qPKFzT0N6CpojNCvIEs/edit#heading=h.aj9416pl3fn6>).
        2. Fill in details like commitment name, region, duration (1-year or 3-year) for the commitment discount. 
           1. These fields may be auto-populated based on the recommendation you clicked on to get here.
     2. License commitments relate to software license commitments for virtual machines. These are good for stable workloads where you cannot bring your own license. 
        1. Fill in details like commitment name, region, duration (1-year or 3-year), license family, type of license, and number of licenses for the commitment discount. 
           1. These fields may be auto-populated based on the recommendation you clicked on to get here.
  7. Submit your purchase if desired. 
     1. Note: At the time of publication you can submit your purchase by clicking **Purchase** again.
  8. After purchasing, a new commitment will initially be in a pending status, taking about 24 hours to transition to an active status.

Keep in mind that this is not reserving capacity for the underlying usage. To do that, you must also make a reservation. [Google documentation](<https://cloud.google.com/compute/docs/instances/reservations-overview>).

### Phase 4: How to check performance versus goals

We can use many methods to check the utilization of our commitments

#### Billing Account

From the billing account, we can get a better understanding of all the commitment discounts from an organizational level:

  1. In the console, go to the billing account and navigate to **Committed Use Discounts.**
     * This will open a page with the list of all committed use discounts in the organization.
  2. From here, navigate to the CUD analysis view 
     * This may require you clicking on,”View Analysis” on the far right.
     * This gives us a more granular level analysis from different dimensions like % of coverage, % of commitments utilized and % of non-utilized CUDs. Leverage filters such as project, region, time and commitment type.

#### Compute Engine Console

  1. In the console, go to **Compute Engine** and select the project you would like to see.
  2. Opt to view the **Committed Use Discounts** or **Reservations** pages**.**
     1. This allows you to be able to see the whole inventory of the CUDs and Reservations for this specific project.
  3. Click on a specific Reservation or CUD to get the details for the linked Reservations and resources. 
     1. In **Reservations** we can also view how many VMs have been reserved and how many have been utilized.

At the time of publication, there is no ability to enable alerting for low utilization on any type of commitment. Please check current Google Cloud documentation for the latest information.

#### How to remedy poor utilization situations

GCP does not offer the ability to exchange, cancel, or ask for a refund. If you need to take action on an underutilized CUD due to an accidental purchase or changes to infrastructure, reach out to your organization’s technical account manager and/or file a support ticket with Google.

### BigQuery

Given that BigQuery is often a big draw for organizations to use GCP in the first place, we felt that this document warranted a specific section on it and the available commitment options. However, due to limited first-hand knowledge of purchasing and managing Slot Commitments within this working group, we are recommending you leverage Google documentation linked below for estimating, purchasing, and managing Slot Commitments. Additionally, we offer some quick information and guidance on this topic.

#### Slot Commitments Information

  * BigQuery slot commitments can be purchased in 100 slot increments (100 slot minimum purchase) for a 1- or 3-year term.
  * You pay a predictable fee per hour for the slots you have committed to, regardless of usage.
  * They are region specific. 
    * Commitments in one region or multi-region cannot be used in another region or multi-region and cannot be moved.
  * Slot Commitments are automatically renewed unless set to cancel at the end of the period. They can be set to renew for another 1- or 3-year term. For example, an original 3-year commitment could be set to renew for a 1 year period and vice versa.
  * Similar to the resource-based commitments discussed above, you can purchase the commitment to pay a lower rate than on demand but you can also make a reservation to reserve the infrastructure for a set amount of time.
  * BigQuery is backed by a shared pool of resources that runs the query jobs and they have fair usage rules which prevent customers from hogging the shared, on-demand resources. As a result of this, Google’s BigQuery service allows a maximum of 2,000 concurrent slots for on-demand pricing per project. 
    * Therefore, if you know you will need to use more than 2,000 slots in a given GCP project, it would likely make sense to have a commitment in place so you can exceed the 2,000 slot limit.
  * For the management/administration of slot commitments, Google recommends creating an administration/purchase project, this allows you to control the purchase of the commitments (through IAM Controls) and the allocation of slots to projects. This is similar to the optional concept discussed in the [prerequisites](<https://docs.google.com/document/d/1NYEmkbfvGFGHu6iwq_X6nyW8qPKFzT0N6CpojNCvIEs/edit#heading=h.q6ikrrrsnnj3>).

#### Google documentation links:

  * Phase 1 
    * View commitment discount Recommendations: [Slot Commitment Recommendations](<https://cloud.google.com/bigquery/docs/slot-recommender>) & [Slot estimator](<https://cloud.google.com/bigquery/docs/slot-estimator>)
  * Phases 2 & 3: 
    * [Purchasing & Managing Slot Commitments](<https://cloud.google.com/bigquery/docs/reservations-commitments>)
      * [View commitment discount Inventory & Utilization](<https://cloud.google.com/bigquery/docs/reservations-commitments#view-commitments>)
      * [Renew a commitment](<https://cloud.google.com/bigquery/docs/reservations-commitments#renewing-commitments>)
      * Reminder this will likely be automatic but you can adjust the renewal preferences here.
      * [Convert existing commitment to a longer term](<https://cloud.google.com/bigquery/docs/reservations-commitments#converting-commitments>)
      * [Split up commitments](<https://cloud.google.com/bigquery/docs/reservations-commitments#splitting-commitments>)
        * This can be helpful if you only want to renew a piece of the existing commitment or want to extend only a piece of the existing commitment.
      * [Merge commitments](<https://cloud.google.com/bigquery/docs/reservations-commitments#merging-commitments>)
  * Phase 4: How to remedy poorly performing commitments 
    * Slot commitments cannot be deleted while they are active.
    * If you made a purchase in error or had a change in infrastructure needs, reach out to your Technical Account Manager (TAM) or open a case with Google.
  * Making [Slot Reservations](<https://cloud.google.com/bigquery/docs/reservations-tasks>)

If you have experience with these and want to contribute, get in contact with us via the make a suggestion button or send us your contributions by emailing [hello@finops.org](<mailto:hello@finops.org>) – we’d love to hear from you!

## Outcomes and Indicators of Success

### Primary Outcomes of running this playbook

  * The FinOps persona has an understanding of existing commitment discount coverage for organization.
  * Analysis to decide to purchase a commitment discount has been done.
  * At least one commitment discount has been purchased.
  * All relevant personas are informed on the purchase and how it affects some of the indicators of success (savings, coverage, utilization)

### Indicators of Success

  * [Compute Spend Covered by commitment discounts (%) ](<https://www.finops.org/wg/finops-kpis/?prod_kpis%5Bquery%5D=compute%20spend%20covered#modal-kpi-9648>)= Spend or usage covered by commitment discounts / Total spend or usage that could be covered by commitment discounts
  * [Commitment Discount Waste (%)](<https://www.finops.org/wg/finops-kpis/?prod_kpis%5BrefinementList%5D%5Bcapabilities.title%5D%5B0%5D=Rate%20Optimization#modal-kpi-9651>) = The percentage of commitments not applied to on-demand spend = Cost of Commitment-Based Discount unused / total cost Commitment-Based Discount
  * [Commitment Discount Waste ($)](<https://www.finops.org/wg/finops-kpis/?prod_kpis%5BrefinementList%5D%5Bcapabilities.title%5D%5B0%5D=Rate%20Optimization>) = Cost if resource was billed on demand – Cost with discount appliedVacancy Rate (Inverse of utilization) (% or $) = 1 – (Commitment being applied to eligible spend or usage / Total spend or usage committed)
  * [Effective Savings Rate (ESR)](<https://www.finops.org/wg/finops-kpis/?prod_kpis%5BrefinementList%5D%5Bcapabilities.title%5D%5B0%5D=Rate%20Optimization#modal-kpi-9650>) – 
    * Effective Savings Rate provides the total discount received as a factor of utilization, coverage and discounts combined
    * ESR (%) = 1 – (Actual spend with discounts / On demand equivalent spend)
    * ESR can also be calculated as Savings / On demand equivalent spend
    * ESR is considered to be a metric to baseline the Return-on-investment of your commitment discounts strategy
  * Frequency of purchase: It is recommended to make multiple purchases throughout the year as this helps the FinOps team optimize the commitment portfolio as the organization’s cloud footprint changes and evolves. There is less risk because you can adjust the commitment quantity and type regularly rather than just one time per year. 
    * Regular cadence for analysis & purchase is established.
    * Process for expiring commitments and guidelines for adjusting coverage is created.
  * Change in culture & education: 
    * Stakeholders reach out proactively for Reservation or Savings Plan consultation.
    * Frequency of education to stakeholders decreases over time. E.g., stakeholders are aware of commitment discount fundamentals and how they can take advantage.
  * Targets are established for coverage, utilization and estimated savings at the enterprise, portfolio and/or application levels across all cloud service providers. 
    * This may look different across CSPs depending on your organization’s maturity in each of them.
  * Proactive involvement with planned architecture changes or migrations: 
    * FinOps team is a part of these conversations and engineers & architects discuss impact of existing commitment discounts as a part of their planning.
  * Established workflow and streamlined process for analysis, approval, funding and purchase is established and has buy-in from finance, FinOps and executive management (where needed). 
    * Depending on the size of purchase, payment term and commitment term this workflow may vary within an organization.
  * Ability to forecast commitment discount spend and how it will impact the [CSP-direct agreement](<#csp-direct-agreements>) and cash flow.

### Exceptions and Considerations

  * This playbook does not include nuances or considerations for government organizations.
  * Every organization will have a different operating structure and as a result will have a different way of interpreting and applying the RACI chart. Ensure that you have the relevant stakeholders involved in the commitment discount purchase process for your organization.
  * The approval process will also vary widely from organization to organization. Be sure that the approval process is established and well documented.
  * Having targets for commitment discount coverage, commitment discount utilization, and an understanding of which is more important is essential to having a successful commitment discount practice.
  * Understand how your organization wants to handle sharing commitment discounts. Are there entities that can’t share resources – perhaps due to a divestiture or acquisition? 
    * Sharing commitments (and associated discounts) will likely impact chargeback of the commitments.
  * Document and understand the direct agreements with cloud service providers as well as the associated discounts, terms, payment options, etc.
  * There are many tools that exist that can help you manage your commitment discount program. Understand if any are in use currently at your organization and/or visit the [FinOps Landscape](<https://www.finops.org/landscape/?prod_TOOLS_SERVICES%5BrefinementList%5D%5Bfilter%5D%5B0%5D=Platforms%20%26%20Services%20for%20Managing%20Commitment%20Based%20Discounts>) to understand what vendors may be able to help.

#### Additional Details

##### CUDs

Compared to AWS and Azure, GCP has a slightly different naming convention for its commitment discount offerings, they are called Committed Use Discounts (CUDs). There are principally three types of CUDs: Resource Based, Spend Based and Compute Engine Flex CUDs (which are a type of Spend Based commitment).

Some of the key facts for CUDs, that will help you navigate the differences are as follows (as of the time of this writing):

  * CUDs cannot be canceled or sold (there is no exchange or marketplace available).
  * Some CUDs can be set to auto-renew, removing administrative burden on renewals for stable workloads with a known, agreed commitment plan.
  * There are no upfront or partial upfront payment offerings, all payments will be monthly.
  * CUD contracts can mean that price changes do not impact services that are covered during the duration of the CUD. 
    * For example, if the cost of a VM decreases during the commitment period, you will remain paying the higher rate until the commitment expires.

##### Spend-based CUDs

Spend-based CUDs are most like Savings Plans offered by other vendors because they cover a wide range of services and offer discounts based on a specific hourly dollar spend committed over a one or three year period.

  * Offer from 17% discount up to 52% discount depending on service and term.
  * Services covered can be found [here](<https://cloud.google.com/docs/cuds#spend_based_commitments>)
  * Cross region and project (any under the same billing account)
  * They are applied after resource-based CUDs but before Compute Engine Flex-CUDs.
  * They are purely a financial commitment and do not reserve capacity or resources. Resource-based reservations are required to reserve capacity.

##### Compute Engine Flex CUDs

Somewhere between resource-based and spend-based CUDs you find Compute Engine Flex CUDs, which are spend based, but only for Compute Engine (GCE). They are akin to Savings Plans from the other vendors in the sense that an hourly spend commitment is made with a vendor in exchange for a discount, but they are specific to a single service. The key differences from resource-based CUDs are as follows:

  * Spend based (hourly $ value post-discount)
  * Offer a stable known discount of 28% for 1-year commitment and 46% for a 2-year commitment.
  * Does not include memory-optimized.
  * Cross region.
  * Cross project under the same billing account.
  * They are applied last after other types of CUDs.

##### [_Resource-based CUDs_](<#resource-based-cuds>)

The deepest discount is found with resource-based CUDs which are the least flexible and most specific type of commitment. However, they are comparatively quite flexible compared to other cloud service providers commitment discounts. For the most part, you are committing to an amount of CPU and RAM which can be used across most VM families/types. A notable exception is memory-optimized which has its own CUD (Compute Engine Flex CUD) that offers a deeper discount than standard. There are some other noteworthy points to consider for resource-based CUDS:

  * Offer up to 57% discount for standard and 70% discount for memory-optimized.
  * They are project specific (unless sharing is enabled).
  * They are region specific.
  * When sharing, you can apply different attributions – proportional or prioritized for how they are shared. See [prerequisites](<#prerequisites>) for explanation.
  * You can purchase commitments for licenses (SUSE and Redhat) which can be quite substantial.
  * You can commit to GPUs and Local SSDs too, but these require resource reservations. Reservations are out of scope of this playbook.

##### [BigQuery](<https://docs.google.com/document/d/1NYEmkbfvGFGHu6iwq_X6nyW8qPKFzT0N6CpojNCvIEs/edit#heading=h.xdbnu5i8hmw9>)

BigQuery is Google’s data warehousing solution, where you pay for both the storage and the processing/analyzing of data. It is the processing/analyzing portion of the spend that can be optimized through a commitment.

If you strip back the abstraction layers that are put in place (for good reason) by Cloud Service Providers (to reduce infrastructure management overhead) all serverless capabilities are running on some compute somewhere. BigQuery is no different in that your queries are run as jobs using a pool of machines. These units of compute that jobs use are called “Slots” by Google which you can commit to hourly.

Similar to Virtual Machines, you can pay for your capacity at the On-Demand rate, giving you flexibility for a higher price, or you can reserve capacity/slots and commit to pay a cheaper rate. The same principles apply, but we appreciate it can be confusing when we use different terminology (jobs/slots etc.)

The similarities with Reservations/CUDs continue because BigQuery slot commitments are perfect for steady-state, predictable workloads such as daily queries to process financial data. On Demand/Pay as you go pricing for analysis in BigQuery is still best suited to jobs that run infrequently or don’t require much time to complete.

The On-Demand/PAYG model can be used in combination with the commitment model much like Virtual Machines, depending on your specific needs.

##### SUDs

As well as CUDs, GCP also offers Sustained Use Discounts (SUDs) which are a unique rate optimization offering which applies discounts based on how much of the month a virtual machine is utilized. There is no commitment required to benefit from this discounting model, however pricing varies depending on family and duration. Because SUDs do not require any commitment, they are not included in the list below but you can [read more about SUDs here](<https://cloud.google.com/compute/docs/sustained-use-discounts>).

##### Reservations

Reservations allow you to reserve capacity so it is available for your use but without a commitment. Whilst Reservations are beyond the scope of this document (as they don’t come with a commitment), we felt it was important to mention here for completeness and also because they sound very similar to the commitment instruments available from other CSPs.

For example, you know you have a need for 10 x N2 Virtual Machines for a planned, important workload, expected to last a month, you wouldn’t commit for 1 or 3 years (unless they could be used elsewhere). By creating a reservation you can be safe in the knowledge that, if approved, your reserved capacity will be available. This can be especially useful for scarce resource types or in popular/new regions within GCP.

Reservations can be “On-Demand” meaning the reservation is created at the time you request it, or “future”, which means you can specify the date that you need the capacity to be there.

**Note:** You will pay for the capacity you reserve whether you use the capacity or not, for as long as the reservation is active.

When making a reservation you will need to specify the Region, Zone, Machine type as well as defining whether the reservation is shared.

You can also specify the “Auto-delete” option within the reservation to ensure the reservation stops when expected and you don’t continue paying for capacity you don’t need

## Related Resources

  * [Playbook for Purchasing Commitment Discounts for AWS](<https://www.finops.org/wg/purchasing-commitment-discounts-in-aws/>)
  * [Playbook for Purchasing Commitment Discounts for Azure](<https://www.finops.org/wg/purchasing-commitment-discounts-in-azure/>)

### Related FinOps Resources and Framework Capabilities

  * [Commitment Discounts Overview](<https://www.finops.org/wg/commitment-based-discounts-overview/>): A FinOps Paper that outlines the publicly available commitment discount options through standard purchasing from the three largest CSPs
  * [Managing Commitment Discounts](<https://www.finops.org/framework/capabilities/manage-commitment-based-discounts/>): FinOps Framework Capability providing FinOps maturity characteristics, functional activities and resources related to commitment discount management
  * [FinOps Foundation Asset Library](<https://www.finops.org/assets/?prod_combined-resources%5BrefinementList%5D%5Brelated_capabilities.title%5D%5B0%5D=Rate%20Optimization>): A listing of FinOps resources related to managing commitment discounts
  * [Commitment Breakeven Point Analysis](<https://www.finops.org/wg/commitment-based-discounts-overview/#appendix>)
  * [FinOps KPIs for Commitment Discounts](<https://www.finops.org/wg/finops-kpis/?prod_kpis%5BrefinementList%5D%5Bcapabilities.title%5D%5B0%5D=Rate%20Optimization>)

## Acknowledgements

We’d like to thank the following people for their work on this Playbook:

[ ![Kate Ferguson](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kate Ferguson Liberty Mutual Insurance ](<https://www.linkedin.com/in/kathleen-ferguson1/>) [ ![Brian D’Altilio](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Brian D’Altilio Marsh McLennan ](<https://www.linkedin.com/in/brian-daltilio/>) [ ![Sumaira Nazir](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Sumaira Nazir Platform.sh ](<https://www.linkedin.com/in/sumaira-nazir93/>) [ ![Alex Dominic Savio](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Alex Dominic Savio Micro Focus ](<https://www.linkedin.com/in/alex-dominic-savio-dev-ops-sols-expert/>) [ ![Scott Linn](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Scott Linn ](<https://www.linkedin.com/in/scottlinn925/>) [ ![Steven O’Dwyer](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Steven O’Dwyer ProsperOps ](<https://www.linkedin.com/in/stevenodwyer/>) [ ![Jenna Wright](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jenna Wright Vega Cloud ](<https://www.linkedin.com/in/jenna-wright-574710167/>) [ ![AJ Wasserman](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) AJ Wasserman Liberty Mutual ](<https://www.linkedin.com/in/angela-aj-wasserman-0871146/>) [ ![Shannon Maglaque](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Shannon Maglaque The Standard Insurance ](<https://www.linkedin.com/in/shannon-maglaque/>) [ ![Mike Coates](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Mike Coates Emirates ](<https://www.linkedin.com/in/coatesmike/>) [ ![Stephen Old](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Stephen Old Synyega ](<https://www.linkedin.com/in/stephen-old-6ab15082/>)

We’d also like to thank our Supporters: Amit Doshi, Marianne Stone, Dusty Bowling, Alison McIntyre, Brian Robbins, Frank Contrepois, and Sierra Juneau.

Last updated: March 17, 2026

## Table of Contents

  * [Who Should Use this Playbook](<#who-should-use-this-playbook>)
  * [Prerequisites](<#prerequisites>)
  * [Commitment Discount Lifecycle Phases](<#commitment-discount-lifecycle-phases>)
  * [Instructions for Running This Play](<#instructions-for-running-play>)
  * [Play Instructions: Spend-Based CUDs](<#spend-based-cuds>)
  * [Play Instructions: Resource-based CUDs](<#resource-based-cuds>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Related Resources](<#related-resources>)
  * [Acknowledgements](<#acknowledgments>)

###### [Learn the fundamentals Level up your knowledge with FinOps Certified Practitioner Get started  ![Learn the fundamentals](https://www.finops.org/wp-content/uploads/2025/12/certified-practitioner.svg) ](<https://learn.finops.org/path/finops-certified-practitioner-self-paced>)

##### Related FinOps Capabilities

[ Rate Optimization ](<https://www.finops.org/framework/capabilities/rate-optimization/>)
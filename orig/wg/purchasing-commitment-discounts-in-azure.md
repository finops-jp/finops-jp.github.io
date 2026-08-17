# Purchasing Commitment Discounts in Azure

**Summary:** To successfully manage Azure commitment discounts, organizations must balance Azure Reservations for specific, stable resources with Azure Savings Plans for broader, dynamic compute usage. Build an iterative lifecycle of analysis and purchasing to maximize rate optimization while mitigating the financial risk of underutilization. Utilize Azure-native tools like Cost Analysis and the Reservations/Savings Plans blades so that teams can identify high-coverage opportunities, model break-even points, and implement automated alerting to ensure commitments remain aligned with evolving workload demands.

## Table of Contents

  * [Who Should Use This Playbook](<#who-should-use-this-playbook>)
  * [Prerequisites](<#prerequisites>)
  * [Commitment Discount Lifecycle Phases](<#commitment-discount-lifecycle-phases>)
  * [Play Instructions: Reservations](<#reservations>)
  * [Play Instructions: Savings Plans](<#savings-plans>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Related Resources](<#related-resources>)
  * [Acknowledgments](<#acknowledgments>)

This playbook is a resource designed for FinOps practitioners who are new to purchasing [Commitment Discounts](<https://www.finops.org/resource/terminology/#cb-discounts>) in Azure. This playbook provides a comprehensive overview of the technical and non-technical steps for making a commitment discount purchase assuming crawl maturity including prerequisites, risks and considerations, the purchase process, monitoring and maintenance, KPIs and more.

The instructions provided here are intended to help synthesize the lifecycle of buying a commitment discount from the FinOps practitioner’s perspective. We acknowledge that these specific instructions may change as Azure rolls out new features and capabilities but the lifecycle phases, concepts and general steps should not. We tried to link out to relevant Azure documentation where possible to help this document stay relevant over time.

Advice on chargeback, showback and exchanging or selling commitments is not addressed within this playbook. While every organization’s overall process varies, the four main lifecycle phases (analysis, purchase, review and remedy) will still be performed in one manner or another. This playbook will guide practitioners to build a successful practice in the management of commitment discounts. For detailed information on the nuances of commitment discount offerings provided by various CSPs, please see the [**_Managing Commitment Discounts Overview_**](<https://www.finops.org/wg/commitment-based-discounts-overview/>).

Spend-based commitment discounts (like Azure Savings Plans) and resource-based commitment discounts (like Azure Reservations) are applicable to different Azure services. Therefore you need to ensure that you are selecting the right commitment for the usage that you have. Please reference [spend-based commitments vs. resource-based commitments](<https://www.finops.org/wg/commitment-based-discounts-overview/>) to understand the nuances between the two commitment options.

## Who Should Use this Playbook

The target audience for this playbook is any FinOps practitioner, regardless of FinOps maturity level, but best suited for someone who is new to the process of making a purchase or with little to no experience executing a commitment discount purchase with Azure. This playbook may also be leveraged as a baseline commitment discount purchase process referenced by any level FinOps practitioner or persona.

## Prerequisites

### Who needs to be involved:

This section outlines each Persona responsible for the activities and processes encapsulated by this Playbook. It is an expansion of the roles discussed in the [whitepaper ](<https://www.finops.org/wg/commitment-based-discounts-overview/#personas>)and designates who should be Responsible, Accountable, Consulted, or Informed for activities within the commitment discount lifecycle. We have also outlined how their actions are associated with one of the FinOps Phases (Inform, Optimize, Operate).

Please note, this will look different for every organization depending on structure, size, industry and more. This is intended to provide a general overview rather than specific directions. Some boxes are left blank intentionally.

FinOps Phase | Activity | FinOps Practitioner | Executives | Business/ Product Owner | Engineering & Operations | ITAM  
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
    * Reference the [FinOps Personas described in the commitment discounts whitepaper ](<https://www.finops.org/wg/commitment-based-discounts-overview/#personas>)or the [RACI chart](<#raci>) for context.

##### _Other_

  * Ensure the FinOps persona has the correct permissions. It is recommended to have billing admin permission and owner permission in at least one subscription. 
    * **Shared** : Must have owner permissions on at least 1 subscription in the tenant
    * **Single Sub** : Must have owner permissions to the target sub
    * **Single Resource Group (RG)** : Must have either owner permission to the subscription which the RG is in or to the RG itself
  * Add the following blades in Azure portal: 
    * Cost Management and Billing and Reservations. 
      * If more than one person will purchase commitment discounts, use the Cost Management and Billing blade.
      * If only one person will purchase commitment discounts, they can use the Reservation blade.
    * Azure AD Privileged Identity Management 
      * This is needed if your organization requires elevated privilege to take owner rights and or execute RI purchases.
      * Consult with your TAM or Azure development team to understand if this is needed.
  * Have access to billing data. The recommended approach when starting out is to either connect to the data via PowerBI ([Azure documentation](<https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-connect-azure-cost-management>)) or to enable billing exports ([Azure documentation](<https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-export-acm-data?tabs=azure-portal>)). 
    * Billing export considerations: 
      * This export may result in a small cost however the benefit associated with getting this level of granularity far outweighs the cost associated with the export.
      * When the export function is set up, you will not be able to get data prior to the date the export was created, but historical data is available via the Cost Analysis console.
      * There is much more visibility into utilization and spend long-term with the export than solely using the Azure portal.
  * When doing analysis for either Reservations or Savings Plans, keep the following in mind: 
    * Azure does not know when an application will be retired, rightsized, or shutdown.
    * Discounts for commitments will vary. Please reference the Compute Max Discount row in the CSP commitment discount Matrix to benchmark potential savings.
    * Work with your procurement and finance teams to understand the terms of your enterprise agreement(s) with Azure and how to best maximize any discounts available.
  * Keep in mind that for most commitments, you cannot make a commitment for a specific instance. Understand the options for the granularity of commitment discount purchase. All purchases will be done at the level you choose. Impact of level selection for commitment: 
    * Management Group & Shared: 
      * Good for general, portfolio purchases as commitment can be used by any resource in your organization. This also means, however, that savings are unpredictable at a business unit or application level.
      * Easy for first-time purchases and will involve less overhead to manage than other levels.
    * Single Subscription: 
      * Allows for predictable savings at a business unit level depending on how subscriptions are set up and organized in your organization.
      * Requires more overhead than shared Reservations in terms of permissions and utilization monitoring.
    * Single Resource Group: 
      * Recommended for large, stable workloads running (for example, SAP workloads).
      * Depending on the size or growth trajectory of your organization, purchasing and managing commitments at the resource group level may not be a sustainable approach.
      * The only level at which you can theoretically make a commitment for a specific instance. This is the case if only one instance exists in a resource group where you purchase the reservation.

  * Please reference Azure documentation for the current policies for cancellations, exchanges and refunds. (see Microsoft’s announcement and more details [here](<https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/exchange-and-refund-azure-reservations>)). Keep this in mind when evaluating the risk of a commitment discount purchase.
  * If applicable, understand your enterprise discount and how it interacts with reservation or savings plan discounts.

#### Tools, Utilities & Templates

  * [Microsoft Cost Management & Billing](<https://azure.microsoft.com/en-gb/products/cost-management/>): A web-based console providing the ability to purchase, manage and monitor Azure commitment discounts.
  * [Azure Command Line Interface (CLI)](<https://learn.microsoft.com/en-us/cli/azure/reservations?view=azure-cli-latest>): The Azure command-line interface (Azure CLI) is a set of commands used to create and manage Azure commitment discounts
  * [Azure Reserved Virtual Machine Instances REST API](<https://learn.microsoft.com/en-us/rest/api/reserved-vm-instances/>): The Azure application programming interface (API) is a set of commands used to purchase and manage Azure VM commitment discounts.
  * [Azure CPU Coverage with Commitment Discounts](<https://docs.google.com/spreadsheets/d/1OSIBaDnGkvoMA_nG39mvhTgsJ-OsK35E/edit#gid=996061119>): A Microsoft Excel (.xlsx) formatted template that enables you to understand how many daily CPU hours are currently covered with Reservations and how any potential commitment discounts will affect that coverage, including if you are over-committing in terms of CPU hours.
  * [Guide for Building an Azure Savings Plans Utility](<https://drive.google.com/file/d/1OaRDq0PpDPPo4-EP5ogsDcWIlmlvvXtn/view?usp=sharing>): This guide walks through steps for creating a Microsoft Excel spreadsheet to identify the potential savings/waste before purchasing an Azure Savings Plan based on the recommendation from Azure Advisor.
  * [Azure Savings Plans Utility](<https://docs.google.com/spreadsheets/d/1WfegBJk57sC6lcDHIqQK5r0FEiNvAos0/edit?usp=sharing&ouid=103760290953076360370&rtpof=true&sd=true>): A Microsoft Excel spreadsheet to identify the potential savings/waste before purchasing an Azure Savings Plan based on the recommendation from Azure Advisor.
  * [Email Template – FinOps commitment discount Purchase Request](<https://drive.google.com/file/d/1OaNgX88kra1b_YTGetSjI9jQj2qMeMEh/view?usp=sharing>): A template with suggestions on what information to include when asking for approval of commitment discount purchases. Ultimately, your point-of-contact for approval will be the best source of what information to provide for them to feel comfortable in granting approval.

## Commitment Discount Lifecycle Phases

The purpose of this section is to introduce the generic steps for purchasing and managing commitment discounts. These are intended to be vendor-agnostic and correspond to information in the reservation and savings plan play instructions to follow. It is important to note that this is an iterative process that will happen multiple times a day, week, month, quarter, or year depending on your organization. After making your first purchase of a commitment discount, it is recommended to use it as a learning experience to better understand how commitment discounts work, improve the process and feel comfortable purchasing more.

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
  * Leverage [Key Performance Indicators (KPIs)](<#outcomes-success>) for your organization to understand how your commitments are performing 
    * Utilization %
    * Coverage %
    * Effective Savings Rate
    * Waste (in $ and %)
    * Savings (in $ and %)

## Play Instructions: Reservations
# FinOps Tools and Services

## On this page:

  * [Introduction](<#introduction>)
  * [Cloud Service](<#cloud-service>)
  * [FinOps Tools](<#finops-tools>)
  * [FinOps Services](<#finops-services>)
  * [Conclusion](<#conclusion>)
  * [Acknowledgments](<#acknowledgments>)

## Introduction

Using tools and services in a FinOps practice can be an essential component to ongoing success, not only when first starting the FinOps journey. Tool and services use will evolve and need to mature as the practice does. Organizations must continuously manage and measure their tool use against an evolving set of the organization’s needs. It is likely that multiple tools will be used in combination, and that the mix of tools and services used over time will change.

Organizations have many options to use cloud provider tooling, third party vendor tools, built tools, or customized integrations of any of these. Problems occur when people get stuck on what they believe is the solution and are unable to step back and examine their tool use objectively. The point is not to build tools, or to buy tools, or to do any specific thing all the time, but to have the data about what creates value, and to make collaborative decisions based on that data.

When selecting FinOps tools or services evaluate them based on a clear understanding of their cost and value to your organization, and periodically reassess the need to add, remove, or change the options used as your environment changes.

To help organizations do this, this paper describes:

  * Types of tools and services that can be used in a FinOps practice
  * Example use cases where tools and services can be valuable
  * Considerations of where to acquire tools and services
  * Process steps for evaluating and selecting tools and services

The paper is divided into three sections: Cloud Service, Tools, and FinOps Services Provider.

The Cloud Service section describes briefly the relationships an organization might have with its cloud provider(s). This section is not a guide on selecting a cloud provider, but provides guidance on how an organization’s choice of cloud provider impacts tools and services use.

The majority of this paper deals with the selection and considerations around the use of FinOps tools. Every organization will use tools in their FinOps practice, and so the focus on adequate needs-based assessment and evaluation is important for most organizations.

The final section contains descriptions of various models of working with FinOps Service Providers. Additional work may be called for to expand on use cases in this area.

## Cloud Service

**INFO:** We will use the term “Cloud Service” to indicate a cloud service you are buying from a cloud provider and we will use the term “FinOps Services” to indicate buying consulting or contracting FinOps Services from a third party.  
---  

Decisions about which cloud to use, or the model in which they are purchased may have been made early on in an organization’s cloud journey, but they are worth revisiting periodically, particularly if early decisions were made when conditions were very different. This paper assumes that an organization:

  * is already purchasing and using cloud services,
  * may have relationships with multiple cloud providers,
  * may be operating private cloud services as well
  * may be purchasing some cloud services through a reseller, or managed service provider
  * may be using SaaS products

For example, cloud use may have been adopted very quickly to address an urgent need to expand during the pandemic, or decisions about use of a reseller may have been made at a time when cloud use and maturity was much lower than it is today.

Consider exploring and documenting the organization’s decision making around cloud use, SaaS product selection, and purchasing models, if even to provide a baseline for reconsideration at a later time. Your choice of tools and services, and your ability to perform basic FinOps capabilities, can be greatly influenced by how you are purchasing cloud.

Again, it is likely you are purchasing cloud services in multiple ways or through multiple vendors, or even running private cloud services on premises. There is value in understanding all of the ways the organization is using cloud services to support good decision making going forward. The next sections describe various use cases for purchasing cloud services, and considerations for each with respect to tool use.

### Direct Relationship with Cloud Service Provider

Most organizations using cloud services will have a direct contractual relationship with a cloud service provider. While there are options for pay-as-you-go relationships, this paper assumes that organizations will have a more formal agreement with the cloud provider in which they are billed in arrears for cloud services they use, and that the contract with the cloud provider allows the organization to access and use all of the cost management tooling natively available.

**INFO:** The term “cloud native tooling” or “native tooling” indicates FinOps toolsets provided by cloud providers at no (or nominal) additional cost to their customers.  
---  

This paper will not address contractual relationship terms or discounts in any way. Organizations should work with cloud provider partners to discuss these. There are instances where organizations must understand the details of availability of data affected by specific agreements.

### Cloud Provider Tools

These tools are typically provided for no additional cost, but some features may entail cost in certain use cases. Basic cost reporting portals; other tooling (e.g. budget management, anomaly detection, optimization recommendations, dashboards) and delivery of detailed billing data via cost and usage reporting or billing APIs are all offered by all major cloud providers.

Use of cloud provider native tooling is almost always going to be the first tool set an organization uses, and a set of tools that are always available, and with which at least a subset of the organization should be familiar with and able to access forever.

#### Considerations

  * The Procurement persona will typically lead the commercial relationship with the CSP, but other Personas must be involved in this relationship as well. The FinOps Practitioner persona should be clear about the access to native cloud provider tools that is expected
  * In cases where an organization has multiple cloud providers, having access to common data formats (e.g. [FOCUS](<https://focus.finops.org/>) datasets) can be important to specify or understand
  * Some SaaS products or licenses may be purchased through the cloud provider via the Marketplace. In fact, even the licenses for FinOps tools and Services may also be purchased through Marketplace. Ensure you understand what is being purchased where, and how that cost data will be represented in your FinOps practice
  * The use of cost management tooling from a particular cloud provider will likely be much more familiar to those who also use that cloud provider to develop systems. If multiple clouds are used, consider the tooling choices for different groups using different clouds, and the tradeoff of familiarity and training vs. tool consistency

### Buying Cloud through Resellers / Managed Service Providers

Each of the major cloud providers relies on an ecosystem of resellers, partners, and managed service providers (MSPs). These are typically affiliated but independent companies who can leverage the reach of the cloud providers and provide tailored or specific services and guidance to organizations that need more support than cloud providers can serve directly.

Resellers and MSPs have a defined relationship with the cloud providers, and are authorized to some degree to sell services, typically with some established discount or support benefits between the cloud provider and reseller. The cloud providers often have affiliate, partner, or certification programs to support these resellers and MSPs, and these programs can change over time, with more or less emphasis on supporting these groups, as the ecosystem of customers and providers changes. Some resellers only represent one cloud provider, others may represent multiple providers. MSPs typically also provide FinOps tooling as part of their service offerings, either tools they own or access to third party tools they use.

Resellers and MSPs have a contractual relationship to the cloud provider whose services they resell and also have a contractual relationship with the end customer using those services. Both resellers and MSPs will typically control the Billing account of the cloud provider on behalf of the customer and provide customized pricing to the customer. Because of this, customer access to cloud provider tools, billing data, or some FinOps capabilities may be restricted unless specifically called out in reseller or MSP contracts.

To generalize for purposes of this paper, the differentiation between these two entities is that resellers typically offer access to cloud provider services to their customers, while MSPs bundle access to these services with other offerings such as application services, managed operations, security services, certification compliance, or other value added services.

There are several reasons an organization might choose to use a reseller or MSP instead of having a direct relationship with a cloud provider.

  * **Regulatory requirements –** Governments or other organizations may be restricted in the ways they can purchase cloud, or contract with cloud providers. This is particularly true in the US Federal government which does not allow government employees to agree to pay “whatever is used” without limits, as the license agreement on a cloud contract may imply. Resellers are used to manage the risk and financial exposure the government has to only what has been appropriated to its agencies by Congress or other funding sources.
  * **Regulatory Compliance –** heavily regulated industries required to comply with HIPAA, PCI, or other required regulations may choose resellers or MSPs who provide certifications of compliance with these regimes. Even in non-regulated industries, customers may purchase cloud with governance or security services bundled to protect themselves.
  * **Risk sharing –** some organizations may use cloud resellers or MSPs to reduce their risk when they are adopting or using cloud. This may include security, financial, operational, or other categories of risk where the reseller brings expertise the customer does not have at that point.
  * **Trusted / Approved Partner –** small organizations particularly may wish to engage a reseller to act as a trusted partner, helping to guide cloud use to create value. Some organizations will have an “approved vendor” list vetting vendors. If not on the list already it takes a lot of work to get added.
  * **Discounts –** resellers and MSPs in aggregating the cloud use of multiple customers buy at a scale that may allow them to achieve greater discounts through commitments to the cloud providers on their customers’ behalf. Some pass these discounts or a portion of them through to customers as a benefit the individual customers would not be able to achieve directly. Resellers may also receive program discounts to promote the use of a particular type of workload that provides additional support and discounts that benefit a customer.
  * **Access to resources –** resellers and MSPs often provide access to resources, programs, or applications which an organization wouldn’t have otherwise. For example, resellers might offer access to certified resources who can provide a wider range of support services in storage, architecture, security, compliance, application operation, licensing, or other disciplines all available by the hour, rather than requiring an organization to hire all these resources separately.

When working with resellers and MSPs, organizations should be explicit and thoughtful to determine what FinOps functions the reseller or MSP will perform, both in terms of who will be responsible for certain capabilities, and where and how the benefits will accrue to the various parties.

For example, an organization working with an MSP may want to include an acknowledgement that the reseller may include an organization’s usage in commitment based discounts the reseller purchases, and receive all of the benefits, but that under no circumstances will the organization be bound to continued use of those resources (or continued use of the reseller, perhaps), clearly identifying the expectations and risks for both sides.

Some resellers (and indeed some FinOps outsourcing services providers) may offer guaranteed contractual discounts on services. Others may offer to perform commitment-based discount management on behalf of the customer, giving them the benefits of the discounts perhaps with a percentage to the reseller, or just fees to perform the services.

The bottom line here is that the split of duties between the customer and reseller is negotiable, and should be considered up front. Resellers and MSPs likely have models that work with other customers that organizations should understand. Access to and visibility to cloud spending data and FinOps tooling provided by the cloud provider is likely something organizations need with few exceptions. But more advanced topics like rate and workload optimization, governance, sustainability, licensing, forecasting or others may be more negotiable. An organization must understand what it is getting in the bargain.

#### Considerations

  * A great deal of the use of resellers is focused on smaller organizations that do not currently use significant amounts of cloud, or that operate in less strategic sectors or industries. As cloud use grows, or organizations become more strategic, their use of cloud resellers and MSPs may change.
  * The relationship between the cloud provider and resellers may also change over time. If you are considering the use of resellers or MSPs, work to understand the programs and levels of support your chosen cloud provider is giving to this channel while you are using them. Revisit your approach to buying cloud services periodically to ensure you are taking the paths that give you the most value.
  * Procurement must be heavily involved in reseller agreements to understand how cloud is being purchased and what responsibilities are being assigned to the reseller.
  * Organizations looking to adopt a reseller model or MSP, or move away from one should involve procurement as early as possible to allow for longer-term actions to be coordinated. Reseller or MSP contracts may run for years, as may licensing or other commitments, and advance planning is required to effect change.
  * Any reseller or managed service agreement will represent a shared responsibility model on top of any shared responsibility model already implied in using cloud services. This requires careful coordination and documentation of expectations and duties, and an ongoing commitment to managing the relationship to everyone’s benefit.
  * Resellers and MSPs will often provide consulting services or labor services which blend into the FinOps Services offerings that will be discussed in the last section of this paper.

### Software Vendor Bundled Cloud Services

Some software vendors or application vendors offer cloud service bundled with their application. In this arrangement, the cloud services are typically those that are required to run the purchased application software, but the services are billed through to the customer as line items because they are variable. The cloud services are typically run in the software vendor’s cloud environment, meaning they are the owner of the Billed Account.

Examples of this might include large Enterprise Resource Planning (or ERP) or operations application platforms where the operational needs of the organization are highly variable due to scope, amount of data, adoption, etc. In these cases, software vendors may make the case that their operations staff can provide a more supportive cloud operating environment for the software, and that their scale aggregating all of their customers can lead to lower cloud service costs on a per unit basis.

This type of offering is becoming more popular as software vendors move away from perpetual licensing agreements and adopt more of an as-a-Service models of engaging customers.

In these arrangements, where customers decide to use this model, as with resellers and MSPs, it is critical that the organization understand what elements of FinOps practice (along with other operational practices) the software vendor is taking on, and where responsibility lies for optimizing the use of cloud. Again, visibility to the cloud services in a consistent manner (perhaps using the [FOCUS](<https://focus.finops.org/>) billing data format) and the ability to pull levers to optimize that usage over time, are critical to the end organization.

## FinOps Tools

**INFO:** The general term “FinOps Tools” will be used throughout to describe any product, platform, or software which is purchased, licensed, implemented from open source, or built whether provided by a cloud provider, open source project, commercial vendor, or self-managed which perform or support the practice of FinOps in an organization.  
---  

**FinOps Tools can be classified in these categories:**

  * **Cloud Provider native tools –** Tools that cloud providers offer along with their paid-for services which are often free or with nominal usage fees
  * **Cloud Provider data platforms –** Tools/services that cloud providers offer over and above their native consoles which often entail licensing and data storage fees
  * **Third Party “FinOps Platforms” –** Ingest and help you make sense of the totality of your cloud bills. These platforms often support ingestion of cloud data across multiple cloud providers and may ingest data from other sources (e.g. observability, business data.They often have a very wide featureset and provide APIs to allow you to integrate or build on their featureset.
  * **Third Party “FinOps Speciality Tools” –** Typically focus on one or two major services or vendors (e.g. container use, Snowflake, spot instances)or focus on a specific FinOps Capability (e.g. Rate Optimization) and support one or multiple cloud providers
  * **Custom-built Tool –** Toolset that is purpose-fit for your company which may be broadly based or specific to certain Personas or Capabilities and could be built as integration between other data platforms or tooling (e.g. data lakes, reporting tools, BI platforms)

The practice of FinOps requires sophisticated handling of large and complex data sets. Cloud usage and billing data from cloud providers or private cloud infrastructure may include billions of lines of data to process each day. Add in observability and business data, and the challenge of integrating and normalizing all of the data for reporting increases.

Organizations typically use multiple tools, some of which may be entirely focused on FinOps, others of which may only support specific parts of the FinOps practice. 2023’s State of FinOps survey indicated, as shown in the Figure below, that organizations used, on average, [4.1 tools as part of their FinOps practice](<https://data.finops.org/#11759>). This includes tooling provided by cloud providers, platforms to analyze and report upon cloud usage and cost, and specialty tools, whether purchased or built by the organization.  
![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201472%20812'%3E%3C/svg%3E)  
_Source:[Data.finops.org CC by 4.0](<http://data.finops.org>)_

The reason for multiple tool use is simply that there is no one perfect tool for every use case. The complexity of the organization, environment, compliance or regulatory regime, granularity of data, mix of vendors used, functional scope, scale of use and of staff, and many other details mean that no one tool does it all. And all of these characteristics are constantly changing, meaning the mix of tools used will change as well over time. It is important to have a good process to evaluate and adopt tooling as a regular thing the FinOps team does.

The following sections describe the elements of this tool selection process an organization should consider, including:

  * Needs Based Assessment – ensure tools are selected primarily based on the realistically assessed needs of the organization
  * Procurement Process – understand the holistic selection / procurement process
  * Tool Integration – consider interoperability, technical implementation, and security requirements to be taken into account
  * Build/Buy/Use/Integrate – consider multiple options to realistically meet the current needs of the organization
  * Identify the tools to be considered
  * Make the tool selection based on all the considerations available
  * Implement People and process integration of tools to be considered in the overall plan to implement and use any tool
  * Regular checkpoints to allow for regular reconsideration of tooling in use as organizational environments change

### Needs-based assessment

FinOps tool use must be based upon the needs of an organization’s practice, with consideration given to how those needs will change over the proposed lifetime of the tool. Once the organization’s needs are documented, they can be mapped clearly to the tools used. In an organization’s customized Finops Framework, think about this as part of the Functional Activities where the organization documents which persona is expected to do what activities with which tools.

A clear and open needs-based assessment of the organization’s challenges and goals will help to clarify where tool use can provide most value, and help determine which tools to select. Tools should be adopted where they will serve the organization forward in capabilities where it has identified a need to mature. The following subsections list steps organizations can follow to perform a needs based assessment.

#### Identify Stakeholders (Who to Ask)

Begin by considering whose needs need to be considered. Some stakeholders exist in almost every organization (e.g. finance, leadership) and others that exist in certain circumstances (e.g. developers in a SaaS ISV, enterprise IT running enterprise workloads in the cloud). The goal of identifying all stakeholders is to empower the entire user community to take ownership of their cloud usage. Consider that even being asked to participate in the needs based assessment gives stakeholders a level of ownership in the selection process, which makes it more likely that they will adopt and use chosen tools. Ensure to keep them informed each step along the way and solicit feedback regularly throughout the process. Use the [FinOps Framework](<https://www.finops.org/framework/>) [Personas](<https://www.finops.org/framework/personas/>) to identify likely participants.

#### Identify Scope of Needs Assessment (What to Ask)

Getting a full understanding of stakeholders’ needs is probably the most difficult part of the needs assessment. Knocking on office doors (or cube wall or home office door!) and asking “hey, what do you want from a FinOps tool?” is not a recipe for success!

With your table of stakeholders, begin to document the Functional Activities each will be responsible for, and the needs or questions to address with each, summarized by the [FinOps Framework](<https://www.finops.org/framework/>) [Domains](<https://www.finops.org/framework/domains/>) or [Capabilities](<https://www.finops.org/framework/capabilities/>) (depending on the level of detail desired, with capabilities being more detailed) The FinOps Assessment guide may help identify current Capabilities being performed, and any gaps to fill:

  * [Check out the FinOps Assessment Paper](<https://www.finops.org/wg/finops-assessment/>)
  * [Learn more about the FinOps Assessment Capability](<https://www.finops.org/framework/capabilities/finops-assessment/>)

Consider asking if teams are already using one or more tools, or following documented processes, and how these might fit into new tools or processes.

Content in the table should look something like this:

**Domain/****  
****Capability** | **Stakeholder/Persona** | **Questions to ask** | **Identified Needs** | **Existing processes / tools / Notes**  
---|---|---|---|---  
Allocation, Tags | Finance | How do you allocate shared cloud costs today? What types of identifiers do you use and how many unique identifiers are there? Do you do chargeback / showback? Do you pass the bill straight to the consumer, or do you add / remove / pro-rate certain items? | Need to have Cost Center identified on every resource for any of the shared allocation services (list them here) Need to be able to allocate prorated support costs based on total cost / usage. | Excel, CSV downloads  
Planning and Estimating | Engineering Leadership | How do you plan for cloud spend, new projects, growth? How are budgets set and allocated, how often? | Need to be able to perform forecasting based on historical usage plus business metrics (e.g. growth plans) |   

#### Collect and Document Objectives

Define the most appropriate method to gather stakeholder needs. This may involve a survey or interview, or may start as the FinOps team documenting Functional Activities and following up with clarifying questions and deeper assessment. Large or complex organizations may find this more challenging. Consider enlisting a champion in each geography or stakeholder group to do some of the local information gathering. Choose these individuals carefully and ensure they have the time and interest to help. Consider getting buy-in from their manager to ensure appropriate time is allocated.

The questions asked should be designed to not overwhelm the respondent, but at the same time to get a sufficient level of detail on the first pass. Try to keep surveys to 5 to 10 minutes at most, probing on the most pertinent areas. Leave the deep-dive for a later interview stage.

Create a project plan that clearly identifies the stages and milestones for the selection process. This may seem unnecessary in some cases, but having a clear plan will help set expectations and avoid any frustrations down the line.

Officially begin the project by announcing the plans to participants and stakeholders. Clearly call out those that need to contribute, and how they should contribute. (e.g. when the surveys or interviews will be scheduled, how they will receive it (e.g. Google Form), how long it will take them to fill it out, and when answers are needed). Make deadlines real by highlighting the dependent tasks in the project plan, and what happens if work is submitted late.

#### Create a Prioritized List of Needs

Compile feedback provided into a categorized table aligned with FinOps capabilities and personas. Prioritize critical, non-negotiable capabilities vs. nice-to-haves. If your data sets are large, use something like a [Kano model](<https://en.wikipedia.org/wiki/Kano_model>) to categorize the needs to help ensure the right mix. Ideally, chosen solutions should deliver on all your basic needs (must have), some performance needs (should have), with a path towards delivering more of them, and some [delighters](<https://en.wikipedia.org/wiki/Kano_model#/media/File:Kano_model_showing_transition_over_time.png>) (could have). Use the [FinOps domains](<https://www.finops.org/framework/domains/>) or [capabilities](<https://www.finops.org/framework/capabilities/>) that your organization considers necessary to guide prioritization.

Are there certain areas the organization is willing to wait for, or to compromise on? Are some needs so specific to the organization that they require customization. What kind of API capabilities will be required to deliver the documented needs? What are expectations for support or professional services to deploy and integrate the tool? What kind of training plan do users need or expect? Is success more likely if the vendor (or MSP) provides direct support? If so, call out expectations in the list of needs. Consider requiring an “interview” with the professional services delivery team representative to understand their delivery capabilities and style. Build relationships through this process, and try to instill confidence in stakeholders to deliver. Customer references, vendor case studies and off-the-self statements-of-work can help here.

When dealing with vendors, identify where they do webinars, customer advisory board meetings, analyst assessments, conferences, and other outreach activities. Does the vendor have any certifications (e.g. [FinOps Certified Platform](<https://www.finops.org/insights/certifications/finops-certified-platform/>))?

Add new columns to your table to capture prioritization order. This should be a stack-ranked list; avoid the temptation to list everything as priority level 1.

#### Identify Constraints and Success Metrics

Existing vendors, tools, processes, and policies are essential to document as well as financial constraints. Defining success criteria at this stage will help you identify the tools most likely to lead to success, and enable the organization to measure progress along the way. Other technical considerations will be surfaced in the Tool Integration section of this paper.

For example, if you expect the unit cost of your cloud usage to decrease by 10% over the first 12 months of using the tool, or improve your cost through the use of commitment discounts to deliver an effective savings rate of X%, it’s good to call that out now and make a plan to get there. This will also help you make the business case to your management to justify the cost of your chosen tool.

#### Review Table with Stakeholders.

When the needs assessment is completed to the level desired, setup one or more meetings with your stakeholders to get buy-in. Be prepared to explain your methodology and decision making criteria, and where challenges warrant a change, don’t be afraid to make changes or compromises so as to maintain that all-important stakeholder buy-in.

#### Create the Formal Request for Proposal

If the organization will competitively source tooling, the “needs” documents may need to be structured into an RFP. The tool procurement process (next section) will help identify where and how this data should be shared with potential vendors.

Choosing to build something internally (or integrating to existing tooling), may require documentation such as a Product Requirements Document (PRD). Share PRDs with engineering leaders, who can develop approach documents and estimate the time and investment required.

Remember, building tools is not free (and built tools are not free). There’s both the cost of working on the deliverables, and the cost of not doing something else that might deliver a higher return for the company and is more closely aligned to the company’s core business.

### Tool Procurement Process

Establish or select a clear process the organization uses to select tools. Most organizations have existing processes to procure software and tooling. FinOps tooling will have to abide by such processes, but also involve input from many different personas. If procurement is different or more isolated in an organizational silo, the FinOps team may be required to assist in gathering input from all relevant stakeholders, in the same way that gathering the organization’s needs from all stakeholders.

Procuring the FinOps tools will require collaboration with Procurement personas and may involve a variety of other activities to work through selection, including:

  * Identify all stakeholders who should be involved in the selection process, and clearly document their roles, including who the ultimate decision maker(s) will be.
  * Understand tools and platforms already available for use (owned licenses, past experience) or in use by different parts of the organization
  * Understand the motivations that drive the development of current tooling; what are their core competencies, how aligned are they to your specific needs
  * Understand the experience and maturity of the organization and its stakeholders; do they all have the experience, time, and perspective to make good selections
  * Balance the needs of the stakeholders informing the selection vs. the decision maker
  * Ensure selection processes are taking into account the timeline for use and eventual deprecation, and that the purchase contract period being considered is reasonable
  * Identify specific data that the procurement team requires to effectively negotiate with vendors; this may include estimates of forecast
  * Define an overall cost profile of tools; what is the organization willing to pay to get benefits in a particular area, including what payment models the organization can support
  * Clearly identify any competitive sourcing or procurement regulations that must be followed and clearly brief all involved stakeholders and decision makers
  * Define a procurement timeline and process document to share with all stakeholders and decision makers, to keep the procurement process on track; include any drop dead or migration dates (previous tool ends license period, new cloud use is adopted, acquisition imminent, etc.)

### Tool Integration

In addition to the functional requirements generated in the Needs Based Assessment, and the requirements of the procurement process, there will be significant non-functional requirements facing FinOps tooling which should be considered properly ahead of tool acquisition. These challenges center around compliance and regulatory concerns, application security and configuration, application integration, accessibility, and data protection. A strong relationship and collaboration with the organization’s IT Security Persona, or Chief Information Security Officer (CISO) organization can help to ensure that all requirements are met by any potential tool.

#### Compliance and Regulatory Considerations

Make sure to be aware of the relevant compliance standards and regulations that the organization requires tools to meet, such as SOC (Service Organization Control), GDPR (General Data Protection Regulation), FedRAMP (Federal Risk and Authorization Management Program), or industry-specific regulations like PCI-DSS for payment card data or HIPAA for healthcare data with which the organization’s systems must comply. Some organizations may have data sovereignty requirements to meet as well.

Whether building or buying tooling, necessary controls and processes should be implemented or configured to meet compliance requirements, including data protection measures (encryption, access controls), access logging and audit trails, incident response procedures, and regular security assessments and audits. Because many FinOps tools are operated as SaaS, this may also imply that the vendors of the tools comply with some of these requirements as well.

Organizations with complex compliance requirements should consider deploying robust logging and monitoring mechanisms to maintain compliance and tracking potential security incidents. Access logs capture information about who accessed what data, when, and from where, enabling effective auditing and incident investigation. Regular security assessments, even, or especially, for built tools, such as penetration testing and vulnerability scanning, should be conducted to identify and mitigate potential security risks.

#### Application Security and Configuration

FinOps tooling will require access to a large amount of potentially sensitive data, and potentially permissions to act autonomously in the organization’s cloud environment. Clearly identify where tool components will need to run, whether they use or require agents or other software to be deployed, where they will need to have access to data, what permissions they require to operate desired features, and what the security capabilities of the tool and its components are.

Then determine the permissions the tooling will need, both in the organization’s environment and in the IAM systems of the cloud providers, and ensure these are acceptable to the security organization and operational environment.

Another aspect of tool configuration may be support or maintenance requirements required by the organization. These may be required for implementation of the tool, or to be maintained over time. Ongoing service assurance or maintenance costs may add to the TCO of tools if required.

#### Application Integration

FinOps tools, as noted already, do not work in a vacuum, but must integrate with one another, with the cloud providers’ systems and data, and with other systems in the organization.

As part of tool selection, consider how tools will work together, integrate (via APIs or other mechanisms) with one another, how new tools overlap with existing tools, and where process changes might create conflicts or misunderstandings.

The vast majority of available FinOps tools provide both user interfaces and API access to most functions, so consider your organization’s needs, and your ability to use these methods of integrating your tooling together. Most FinOps practices will extend the capabilities of tooling through the use of APIs to integrate to internal systems or data repositories, so this can be a critical differentiator for tools. Consider if the FinOps team has the skills to utilize these APIs and integrations.

#### Accessibility

FinOps principles encourage cross-functional collaboration, access to timely and consistent data, and action by everyone throughout the organization. So FinOps tooling and data should also be widely accessible.

Consider up front the requirements of tooling to allow access to its functions or its data. Will internal stakeholders require new methods of logging on or authenticating, new permissions internal to the organization’s environment, IAM permissions in cloud providers, etc.? Will tooling be available through the organization’s internet access policies, if it is operated remotely? Will tools be able to deliver reports or data to internal users as designed or expected? Ensure all of these accessibility requirements are acceptable to security.

The security principle of least privilege should be implemented for FinOps tools, as with all software, granting only the minimum necessary permissions and access rights required for the FinOps tool to function correctly. This can be achieved through granular access controls and privilege management solutions. Regular review and auditing of access privileges are essential to prevent privilege escalation and detect any unauthorized or excessive access.

Engaging with the CISO (Chief Information Security Officer) and IT Security teams throughout the implementation and ongoing use of the FinOps tool can provide valuable expertise and guidance to maintain alignment with organizational security policies and best practices. Security teams can provide valuable guidance on implementing secure authentication mechanisms, such as multi-factor authentication (MFA) and secure communication protocols. Quarterly meetings and discussions with these teams can help identify potential security risks, address emerging threats, and ensure that the FinOps tool remains compliant with the latest security standards and regulations.

#### Data Protection

When making the decision to buy, build or use a new FinOps tool, it is crucial to establish clear protocols and processes for both granting tools access to relevant data sources, and controlling access to the data these tools manage.

Organizations must understand both the requirements they must meet for data protection generally, and specifically how data within the cloud billing and FinOps environments must be managed. Personally Identifiable Information (PII), internal project names, sensitive business context, or other information may be included in billing data in the form of Account Names, Resource Names, or Tag data. If an organization has complex data protection requirements, these are topics which should be addressed by the cloud platform, architecture and governance teams as well, to ensure that information included in billing data is appropriate for the needs of the organization.

This can be a particular concern for governmental, or other heavily regulated organizations like financial services or healthcare companies, which must assess the level of security and access controls based on the level of sensitivity of the data. By clearly defining tagging policies and implementing automated enforcement of these policies, organizations can ensure that no sensitive data is exposed in billing data making it easier to use in more use cases.

At larger or more security-focused organizations, a robust access control, such as role-based access controls (RBAC), may need to be implemented to ensure that only authorized individuals or systems can access sensitive data. Data encryption mechanisms, both at rest and in transit, are essential, to protect sensitive information from unauthorized access or interception. Additionally organizations should adhere to data locality requirements, ensuring that data is stored and processed in compliance with regulations. This may involve implementing geo-fencing or data residency controls to restrict data storage and processing to specific geographical regions or jurisdictions. Strict measures for handling and protecting PII, such as anonymization or pseudonymization techniques, are essential to comply with data privacy regulations and protect individuals’ privacy.

### Build, Buy, Adopt, Integrate

Organizations considering FinOps tooling to suit their needs will have to consider the question of whether to use a cloud native tool available to them, whether to purchase a third-party tool from a vendor, whether to build a bespoke tool internally, or whether to do some combination of these.

The most important takeaway when deciding to buy, build, adopt, or integrate tools is to recognize that building your own FinOps tool is not an indicator of high maturity. It does not make you a “runner” and is not something to aspire or resign yourself to. Making the choice of tooling that supports the decision making you need to do to get to value is the point.

In assessing tools an organization will typically have four options:

  * Adopt cloud native
  * Buy third party tools (commercial or open source)
  * Build FinOps tools
  * Integrate solutions

Few, if any, FinOps practices will buy or build all of its FinOps tooling. There will be unique integration needs for all organizations. Conversely, rebuilding basic functions like cloud data ingestion or reporting from scratch, when their complexity has already been solved by so many applications already, is a use of internal resources that would be difficult to justify. So decision making is not a binary decision of buy vs. build, but rather one of how to put together the right set of tools for the job at hand.

This is the value of starting first with a needs-based assessment of your organization to understand clearly what areas you will concentrate on operating and maturing at the current time. Checking the boxes that are right for your organization can help to cut through the noise to find the signal that will create value for you.

We will review each of these options below with considerations for each to add data to your decision process.

#### Adopt Cloud-Native Tools

All CSPs have native cloud tooling, often available via console or API. These consoles offer visibility, recommendations and other features designed to help practitioners use that cloud effectively. These tools differ by CSP, and provide an evolving set of functionality, optimization suggestions, and insights which can be interesting and useful.

CSP tooling typically focuses on offering optimizations and functionality on its own cloud services, rather than across other clouds. Some CSPs have created reporting features for other clouds’ data in certain cases, others have removed these capabilities. But primary native tooling focus in each cloud will focus on that cloud, not multi-cloud visibility, integrations with other clouds, or deep general financial functionality.

The motivation of CSPs in offering these tools is to create successful customers within their ecosystem, and encourage you to grow your use of their cloud and services.

**INFO:** The three major clouds participated with the FinOps Foundation in the first three Insight interviews, where each spoke about their FinOps tooling, recent developments, their goals in serving their customers and their support for FOCUS. These are available at <https://www.finops.org/insights/>  
---  

One can take optimistic and cynical views of the tools CSPs offer. The cynical take is that overspending (or inefficient usage) by customers is good because it goes to their profit. The optimistic view is that every CSP knows they will lose business if they do not help customers spend-to-plan, and this motivates their tooling offerings. The major cloud providers’ native tools can be counted upon to provide at least a basic level of FinOps support for that cloud via a console and API.

Native consoles are excellent places to start your journey. They are included with the cloud bill you pay each month. Organizations with low cloud usage, who predominantly use one cloud, and who require less capability to find value, or are just starting out, may be able to rely on cloud native tools as the base of their tool chain. Because they support API access, building upon these tools with automation and scripting to other internal tools or platforms is possible.

#### Buy Third Party Tools

There are dozens of companies offering tools in the FinOps space. As stated above, they are largely separated into FinOps Platforms and FinOps Specialty Tooling.

Third party tools exist typically where the native consoles trail off in terms of functionality. Unlike the native CSP tools, third party tools are not free – even open source tools may entail license costs and require a cost to implement, operate, and customize to your needs – and have to prove value through innovation. They have to offer something not already available from the CSPs or other partners.

Third party tools will release features on a roadmap, which individual customers may not be able to fully control. But on the other hand enhancements and improved features will be released without requiring the organization to define or develop them. Many FinOps tool vendors have FinOps qualified practitioners to support organizations in their adoption of the FinOps tool, and to provide insights into what is required for successful adoption.

Many vendors have a pricing model that is based on the percentage of total net cloud spend (e.g. net of discounts). For vendors that ingest and process the entire cloud bill, this makes sense as their cost to run the solution is likely a factor of the volume of data that is ingested and processed. Other vendors may charge differently using flat rate, volume of data processed or other mechanisms. Vendors that charge a percentage of bill typically offer discounts or better rates at higher overall spend levels.

Comparing costs against build or integration of other tools may be required, along with the risks associated with not having a vendor to rely upon for trusted data. Just as many organizations may choose to use a cloud reseller or MSP to share risk, the decision to purchase a third party tool shares some of the risk of impacts from changing billing data.

Third party tools will be an options to consider for organizations that:

  * Use multiple CSPs
  * Require complex organizational integration
  * Have significant or highly variable spend
  * Have more complex use cases not supported by native cloud consoles
  * Require much deeper capabilities
  * Need to automate only specific FinOps practices
  * Require solutions immediately
  * Are involved or expecting to be involved in mergers and acquisitions
  * Organizations which maintain multiple Billing Accounts

Most third party tools support integration with other internal systems, and the ability to include their data and outputs in FinOps processes.

#### Building FinOps Tools

In the very early days of cloud, there were few options for organizations who needed to manage their cloud usage and cost than to build custom solutions. Cloud providers did not offer functionality some companies needed, and there were few third party options available.

Today, there are dozens of tools available, and CSP solutions are vastly improved, yet for some organizations, there may still be use cases where building tools adds value. More recently, there tends to be more value in developing interfaces and custom integration between tools in your organization’s toolchain than in building bespoke solutions. The combination of commercially available BI tools (some from CSPs, some from third parties), data lake products, workflow managers, specialty tools (e.g. that focus on Kubernetes or rate optimization), and the like can be woven together to serve the needs of many organizations, as opposed to building bespoke reporting solutions.

Building a tool can seem attractive as you look at both the panoply of available tools in the market, and consider your organization’s long list of needs. APIs are readily available from CSPs and other platforms, and your organization may have extensive experience building software or developing solutions.

However, there are key risks to consider when developing tooling. A full, data-driven assessment of the cost of building (and operating, and maintaining, and improving) tooling may influence your decision. The fact that your internal resources will be spending time developing software, and potentially solving problems others have already solved, should weigh heavily in this decision as well. There is a good reason no one builds their own CRM or ERP system these days, and the FinOps tools ecosystem is developing quickly toward the point where it can satisfy many needs for many organizations.

If you are considering building a FinOps tool, ask the following questions:

  * What is the fully loaded cost of the number of developers/team that would be needed to build the initial application(s)?
  * What is the fully loaded cost to provide maintenance and support for the tool and infrastructure required to support it?
  * Do we have a long term succession plan for the individuals that build the tool, or will we end up with a key-person problem?
  * Do we understand the scale of changes and adjustments that will be required to keep up with changes to cloud usage and cost data we are ingesting or using? Speaking with others who build tools can help if this is not well understood.
  * Do we understand the cloud billing data and analysis challenges deeply and sufficiently to avoid pitfalls others have faced?
  * As our FinOps practice gets more complex and my tool needs more functionality, will our development team have the necessary depth to support it?
  * What is the core competency of my business? Is it FinOps infrastructure or something else?
  * How does the cost of all the above compare to the cost of an off-the-shelf tool that gives me 80-90% of what my company needs?
  * Can I build the remaining needs on top of a 3rd party tool or native CSP console?
  * Can our organization change our processes to adapt to standard models of FinOps practice, or are there specific needs which we require to be exactly as they are today (which provide us value)?
  * How quickly does the organization need a FinOps tool to be available to meet their requirements?

If the answers to these questions indicate that your business needs have unique aspects, scale, or complexity that no CSP or third party tool exists to solve your challenge, then building a tool to your exacting specifications and standards may be necessary. You will need to plan (and budget) to maintain, update, and grow it based on the highly unique needs of your business.

Larger, more complex, technology-based companies may be more likely to consider building tooling, since they may experience more complex use cases. Smaller companies may have more difficulty maintaining a custom-built system due to the variety of roles required to maintain it.

#### Integrate Solutions

It is more likely that organizations will be able to find pre-built or commercially available options for large sections of their toolchain and can minimize the complexity and cost of maintaining integration going forward. There is a great deal of change in data and access process to even ingest FinOps data, so making the decision to build is often not the least risky option to maintain data quality, provide good information to stakeholders, and reduce cost of the FinOps practice itself.

The reality is that most companies will shift between various tools as their business needs change over time and use a combination of the tools to solve their challenge.

The answer may not be build vs. buy but more likely buy and integrate, building the last mile of features that serve the unique needs of your business.

### Tool Candidates

Now that the needs of the organization and other requirements have been determined and a decision about the scope of the search is understood, a list of tool candidates should be compiled, including any areas where building or integrating tools together is expected to be an option.

When compiling the list of candidates, consider the following:

  * Use the [FinOps Landscape](<https://www.finops.org/landscape/>) to search for tools and services to consider 
    * Filter by Capability, CSP, type of tool, compliance, etc.
  * Evaluate commercial options with FinOps Foundation Member vendors 
    * Connect directly with product leaders in Slack
    * Utilize free trials to test functionality and gain insights
    * Meet with product professionals to understand the tool and the vendor’s philosophy toward FinOps
    * Probably want to do this with a smaller subset of the list
  * Consult the Waves/Quadrants/State-of reports from analysts like IDC, Forrester, Gartner, etc.
  * Seek recommendations from other customers who are members of the FinOps community via Slack, community events, and meetups
  * Find those with past experience with tools among the staff and leadership in your organization
  * Attend conferences like FinOps X and XE to see multiple vendors together
  * Seek recommendations from Cloud Providers, TAMs, etc.
  * Seek recommendations from other vendors you are using (Snowflake, ITAM tools, Observability tools, etc.)
  * Seek recommendations from consulting or outsourcing service providers you are using (MSPs, GSIs, etc.)
  * Meet with those in charge of the teams who would support any “build” tools you are considering, understanding who will develop, maintain and support them

In comparing an organization’s needs to tooling features, feature mapping will only go so far. The depth of support for any individual feature is nuanced, and there will be organization specific details to understand deeply. There may be multiple ways to meet each need, so strive to document these clearly when compiling a list of potential tools.

Keep in mind as you are gathering your list and narrowing your selection, the information you get from any individual source can be biased or influenced in different ways, so seek input from multiple sources. Tool selection should then generate a list of tools which are appropriate to consider buying, building, or adopting.

### Tool Selection process

The tool selection process brings together all of the information created in previous steps. This is where the organization compares its documented needs, the technical integration considerations, the list of tools that seem to meet those, the strategy for buying, building, adopting or integrating tools together, and makes some decisions.

In general terms, tool selection should be a process of refining the list of options by comparing the features against needs, the appropriateness of the total cost of ownership of the various options, and the compliance with other organization restrictions. The organization’s procurement process and Procurement persona will likely lead this selection process, which may involve multiple trials or demos, visits with various vendors or internal stakeholders, and input from multiple personas to make final decisions.

Because of the ease of trialing many third party tools, consider the option to trial multiple, to see them “in action” with actual data, if this is possible.

### Implementation of Tooling

Once the organization has selected tooling to support FinOps, implementation of the tool in the organization’s environment can begin. This step will likely be the most important aspect of tool use for FinOps. Tools are ineffective if not understood and used by the organization. The thing tools cannot do is have a conversation. Tools do not solve FinOps challenges, people using the right tools effectively do.

Work in this step will be similar to overall FinOps adoption: driving awareness and enabling users, establishing the tool as a common source of trusted and timely information, and putting its data in the path of decision makers to use effectively.

### Enabling Users

Deploying tools across the organization requires configuring access, educating users, and providing support for effective use of the tool.

#### Customize Tools Before Rollout

The tool may have preset or configurable access levels which will need to be tailored to certain user groups so that each person/role has the proper permissions to view information and perform tasks within the tool as needed. Permission sets may need to be adjusted over time, but especially in the early phases of adoption, as users get acquainted with the tool.

#### Consider Functional and Technical Access

Both functional (e.g. organization terminology, persona specific report creation) and technical (e.g. RBAC, Single-Sign-On, authentication, security permissions, API integration) configuration will be required for new tooling. Many of the requirements for these integrations will have been considered in selecting tools, and now they must be put into play.

#### Use All Resources for Training and Enablement

Some users may learn to use tools on their own without instruction but most will benefit from training and ongoing support. Equipping users with the knowledge needed to use the tool in accordance with their persona, use cases, and specific needs help to increase the likelihood of successful adoption and value. Tool vendors, consultants, or internal training organizations are good sources to help with training. Organizations should leverage available training content and methods, augmented with specifics that cover essential aspects of the tooling for different personas.

#### Consider the Impact of Change on People

There is inertia in organizations when adopting new tools or processes. The user interface of tooling changes can be a challenge to overcome. Pay special attention in training and enablement of data or access changes, and highlight both new processes and the benefits using the new tools can provide.

#### Evaluate Effectiveness and Evolve

Tracking adoption and the evolving needs of the organization enables organizations to adapt training and the tool configurations as it is rolled out. If tool adoption is not leading to expected results, consider where enablement could be improved. Is the solution configured correctly? Is the data accurate and timely? Do various personas have access to the data that are aligned with their objectives? Is the data in the path of users? Adoption KPIs are not simply for encouraging use but also can be helpful to determine how to evolve the enablement and training available.

### Establishing the Tool

If a new tool is replacing previous tools or processes, there may be metadata that was created by or captured within the prior tooling that needs to be somehow re-created or accounted for. Prior period cloud data may also need to be ingested, transformed, or recovered into new tooling.

#### Leverage Proofs of Concept

Pay attention to proof of concept setup from the vendors you work with, as they will likely have experience working with many customers and bringing those best practices to bear.

#### Develop a Staged Deployment Plan

Tool deployment can be more effective when staged, particularly in large organizations. Identify the teams, personas, or groups which should get access sooner vs. later. Some organizations may have the bandwidth to provide the whole organization access to a new tool at one time, but most organizations may prefer to onboard teams through a phased rollout (by geography, business unit, etc.) The timing of the deployment could be based upon the strategic importance of the group, good relationship with the FinOps team or executives, a willingness or level of excitement about FinOps adoption, or simply groups which have more time to evaluate and adopt new tools first. A staged rollout gives the organization time to evaluate the use of the tool and identify ways it can be made more effective for the whole organization without impacting every team at once.

#### Communicate Clearly

New tools will require a clear communication plan including how the tool is to be used, expected changes from current processes, benefits to the organization, who to contact for support, timing of access, training opportunities, expectations of use, and where the end users of the tool can go to see additional help. Ensure this content is available before widespread use to get the best impact from tooling

#### Data in the Path

Putting data in the path of engineers is a concept discussed in the [Cloud FinOps book](<https://www.finops.org/community/finops-book/>). This concept applies equally well to any persona involved in FinOps. It is particularly important when rolling out new tooling to consider the ways that users will access the data either captured, created, or presented by the tool. To the extent possible, FinOps teams should try to integrate into working processes and access methods such that users can intuitively interact with FinOps tooling.

Stories abound of FinOps tooling being vastly underutilized because it requires end users to remember to go to another tool, learn another user interface, reconcile new information with information they already have, and take action on it.

In the best cases, FinOps tooling will integrate seamlessly with other operational and data platforms to provide a more accurate, cleaner, more complete, or more consistent view of cloud usage, presented in ways or through channels that engineers, finance teams, and leaders are already familiar with. This may mean integration with tools such as Slack, Confluence, or Teams; or use of APIs to augment existing reports rather than creating new ones.

### Continuous Tooling Evaluation

FinOps is iterative, and continuous improvement is also the goal in the use of FinOps tools. Organizations should regularly evaluate tool value. If a tool is not meeting expectations, the answer may be to review the suitability of the tool, promote more effective tool adoption, alteration of processes, additional user enablement, or adoption of additional features or configurations. Organizations may be using only a few of the tool features, or may benefit by growing into more of what the tool offers. But in some cases, the environment of the organization, or the fundamental value of the tool changes, and in these cases a different solution will be needed.

The evolution of the tooling ecosystem within an organization, and the ecosystems of tools more broadly and the organization more broadly, will naturally change over time. Having an ongoing evaluation of the effectiveness of the tool ecosystem is critical to identifying when changes are needed.

## FinOps Services

**INFO:** Finops Services for purposes of this paper is defined as the use of non-employee resources to support the FinOps practice, or the adoption and practice of FinOps within the organization overall.  
---  

FinOps Services can be of several types:

  * **Outsourcing –** either as part of a larger consulting engagement, or specifically outsourcing the FinOps function or some component(s) of FinOps
  * **Consulting –** the use of consultants to provide expertise or a surge of resources to kick start or leverage the adoption or practice of FinOps
  * **Contracting –** bringing on non-employees to perform a specific job or FinOps function, either temporarily or over a long period of time

As with tools use, some or all of these models of FinOps Services can be used at once, introduced at key transition points in the FinOps practice, or transitioned out when no longer valuable.

In a general sense, the use of consultants or service providers in business is something to consider when there is a need to accelerate beyond what internal staff or hired resources can accomplish, when the need for additional resources will be temporary or transitional, or when there is a need for expertise that is difficult or undesirable to have inside the organization.

The choice of service provider should involve all personas impacted by the service provider, especially given the collaborative nature of FinOps practices.

The remainder of this section describes several types of FinOps Services organizations might consider, with considerations for each, and example use cases. Start from what the organization is trying to accomplish, and look for examples of where each model might support those needs.

### Outsourcing

There is never enough time to do all the things one might in a FinOps practice. Outsourcing all or portions of your FinOps practice can be a way to achieve results, at a cost, while freeing up more FinOps team time to focus on other areas that are more valuable to the business. Outsourcing creates a work (and, ideally, risk) sharing relationship with another organization that leverages the strengths of each to greatest effect. Outsourcing relationships require careful specification of expectations, goals, and outcomes; consistent attention to performance; and transparency, trust, and good communication between the organizations to succeed.

#### Outsourcing Models

There are several models of outsourcing organizations may consider:

  * Specific Scope Outsourcing, in which a specific individual or set of FinOps functions are outsourced to a third party. An example of this might be outsourcing all RI and Savings Plan (Rate Optimization) functions to a third party in exchange for an established discounted rate on compute or other specific services. 
    * This is the most common outsourcing scenario
    * Contracting for this type of service is more focused, as the outcomes and activities can be more clearly defined
    * A clear understanding of the capability being outsourced, and clear tracking of the agreement is required
  * Complete FinOps Outsourcing where the entire FinOps function is outsourced to a third party to work on behalf of the organization. 
    * This provider often provides tooling and services as a package
    * The provider must collaborate with teams across your organization helping to develop the FinOps culture, or operate FinOps capabilities on your behalf
    * Provide the core centralized activities for FinOps success (Commitment based discount management, report creation, success tracking, etc)
    * A strong connection and high trust is required to succeed in this model
  * Outsourcing FinOps altogether as part of a broader digital transformation or business outsourcing 
    * Organizations may opt not to focus on FinOps as a specific item to contract, but rather enter into arrangements with consultancies to manage entire aspects of the business
    * In these cases, FinOps benefits will typically accrue to the outsourcer, not to the client, but also the downsides of not performing FinOps will be the risk of the outsourcer

#### Outsourcing Considerations

As with any business arrangement, there will be potential positives and potential negatives to outsourcing. Examples of each are listed below.

Potential positives of outsourcing include:

  * Organizations which are very immature or inexperienced with FinOps may benefit from a substantial acceleration of the benefits of having a FinOps practice in a shorter time than if developed internally
  * Access to a wider variety of more experienced resources than those one could hire
  * Ability to learn from the outsource provider as to how a successful FinOps practice or function is run, in order to build in transition
  * Outsourcing partners work with many organizations, and are experience many more edge use-cases and may have experience with scenarios the organization has not yet met, or which it’s not equipped to handle
  * Many of the risks associated with starting a FinOps practice (over-commitment, under-commitment, inexpert optimization, lack of visibility, etc.) may be mitigated by using an experience outsourcing partner
  * Partners often bring their own tooling and process, removing the need to purchase or evaluate other tooling
  * Partners often bring automation which reduces the need to perform less value-adding routine work
  * Time spent performing the outsourced function can be spent by the organization doing more valuable tasks

Potential negatives associated with outsourcing include:

  * Outsourcing when new to FinOps risks that the organization does not understand enough about the function to specify its goals, objectives, or incentives clearly enough
  * If there is a lack of trust with the outsourcing organization, the relationship may go poorly and quality of the solution may be impacted
  * Outsourcing along with other functions may obscure the actual performance of some FinOps functions from view by the organization
  * Under an outsourcing arrangement, the organization may not have access to some of its cloud data, tooling, or levers for improved usage
  * Outsourcing arrangements are typically for longer terms (multi-year) and the pace of change in cloud is very fast, so it may be difficult to understand what the organization’s needs will be even a year from now, and changes may be difficult to implement

### Consulting Services

Organizations use consultants for as many reasons as you can imagine. Consulting partners can bring deep experience, a broad perspective on work to be done, strategic thinking, advice, and resources to help an organization accomplish a lot of defined work in a shorter period of time.

There are many types of consulting organizations, including strategic advisors, global systems integrators, industry-focused firms, companies focused on specific technologies or clouds, ones who consult on the use of a particular tool or platform, and small services firms that provide more personalized support. The type of consulting partner an organization uses will be influenced by that organization’s industry, size, strategic importance, and past relationships with consultants.

#### Consulting Engagement Models

  * **FinOps Team Advisory and Support –** Consultants who serve as advisors and coaches, bringing deeper expertise and strategic thinking to your FinOps practice, but who do little of the day to day activities. This model may work well for organizations that lack experience with the practice of FinOps but who have people with organizational influence dedicated to the practice that can benefit from this coaching relationship. They can collaborate with multiple personas, provide extra hands and knowledge to the organization, and help to bring credibility as they help the organization develop a FinOps culture
  * **Limited Scope Consulting –** Consultants who bring expertise and perform FinOps duties for a specific limited scope of tasks, either related to a cloud, a segment of the organization, a specific tool (e.g. your third party cloud Platform), or a specific application. This sort of engagement is similar to outsourcing but generally done at the direction of the FinOps team leader instead of having a shared risk/reward model. This type of model could include the Professional Services, or TAM resources from your cloud provider as well, since they operate at your direction, but have a limited scope of services and areas in which they can work. This model might be most appropriate when your organization has determined there’s a need to quickly burst resources and effort toward some short term tasks where employees are either unable to do it, or more valuable elsewhere. Building a cloud landing zone, establishing a FinOps Training program, or helping to get Tagging and Cost Allocation under control might be examples of this type of engagement.

  * **Specific Deliverable –** An even more focused consulting engagement might call for the creation of a specific deliverable, perhaps a cost Allocation strategy, or a CI/CD pipeline. Consultants might be engaged to perform this one task on a pay by the drink model. This type of work might be well suited for a more experienced FinOps team that simply needs to add resources temporarily. This model might also work for cloud application migrations if the internal resources are managing the internal cloud environment.

#### Considerations

  * When considering the use of consultants, look to see who the organization has used previously, or that is currently engaged. Consultants will take some time to become acquainted with the organization, its culture, and its practices. Using consultancies which are already familiar may reduce this learning period, and improve results
  * As with tool selection, involve all personas critical to the consultants’ success. Gather points of view from leadership, engineering, finance, product, and other personas to ensure a broad perspective is given, and that requirements are documented well.
  * Consultants typically work at the direction of or in collaboration with the organization, meaning that although they can bring broad outside perspectives, they also will work to fulfill the specific requirements and outcomes specified by the customer. Work to clearly understand and define the scope of any consulting work prior to engaging to be sure what is produced is what the organization needs, not just what it specifies.
  * Consultants can be engaged, as outsourcers can, to either work on new work yet to be built, or to continue operations of depreciating assets. Consider the model where consultants are used to manage on-premises versions or copies of systems being moved to cloud, where internal resources focus on the new architecture and iteration of cloud-based systems while consultants operate on-premises infrastructure until it is no longer needed.
  * FinOps adoption, like the adoption of any new technology, can benefit from a partner-led transition when the organization is comfortable with the consultant. Engaging a partner can provide access to a wider range of skills in resources, getting hourly support for security, architecture, operations, etc. rather than needing to hire people with all of these skills.
  * Use of technical consulting resources to support FinOps may be more prevalent in certain markets, smaller or very large companies, and certain industries. For example, government or regulated industries may need to use consultants to avoid large amounts of hiring.
  * Consultants which have a broad remit in the organization may have the ability to foster collaboration more effectively than those hired by one specific Persona to do very specific work. Consider supporting consultants in these different circumstances differently with Leadership support to achieve the results intended.

### Dedicated Contractors

The last class of Services are dedicated contractors who perform work under an individual scope of work. This is often called staff augmentation where the contractor works in a manner very similar to an employee. This model is desirable in some organizations due to employment limitations, requirement to onboard resources more quickly than processes allow, short-term or ephemeral task nature of some FinOps work, lack of approvals for longer-term hiring or funding, availability of qualified resources. Contractors may come from large consulting firms, or may be independent contractors.

## Conclusion

The selection and evaluation of tools and services will be an ongoing process, not a one time exercise. The FinOps challenges solved and the value an organization gains from using cloud provider native tools, third party tools, or internally built tools will evolve based on the Framework Capabilities prioritized in the context of their technology investments, their goals for how they’ll derive value from cloud and the maturity of their FinOps practice.

Organizations should:

  * Establish a clear operating model for their practice using the FinOps Framework, deciding what capabilities provide value and how they will be carried out
  * Clearly document areas of activity where they consider using tools and services to advance their FinOps practice
  * Periodically revisit decision, especially as the FinOps practice matures, to ensure that tools and services in use are continuing to provide expected value

## Acknowledgments

We’d like to thank the following people for their hard work on this Paper:

[ ![Janine Pickard-Green](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Janine Pickard-Green MagicOrange ](<https://www.linkedin.com/in/pickardgreenj/>) [ ![Stephen Old](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Stephen Old Synyega ](<https://www.linkedin.com/in/stephen-old-6ab15082/>) [ ![Cathal Cleary](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Cathal Cleary CloudHealth ](<https://www.linkedin.com/in/cathalcleary/>) [ ![Nadeem Husain](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Nadeem Husain Apptio ](<https://www.linkedin.com/in/husainnadeem/>) [ ![Erik Peterson](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Erik Peterson CloudZero ](<https://www.linkedin.com/in/erikpeterson/>) [ ![Vik Saluja](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Vik Saluja Mastercard ](<https://linkedin.com/in/viksaluja>) [ ![Casey Doran](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Casey Doran Apptio, an IBM Company ](<https://www.linkedin.com/in/dcdoran/>)

We’d also like to thank our Supporters: Serhan Eroglu, Hitesh Chitalia, Steven Buhk, Lucas Paratore, and Steven O’Dwyer.

## On this page:

  * [Introduction](<#introduction>)
  * [Cloud Service](<#cloud-service>)
  * [FinOps Tools](<#finops-tools>)
  * [FinOps Services](<#finops-services>)
  * [Conclusion](<#conclusion>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ Automation, Tools, & Services ](<https://www.finops.org/framework/capabilities/automation-tools-services/>)
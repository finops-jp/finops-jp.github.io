# Why Architecting Databases for Cost Efficiency Matters

**Summary:** Database platforms represent one of the fastest-growing segments of cloud spending, making architectural decisions a critical driver of long-term cost efficiency. Learn how to incorporate cost-aware design principles when architecting cloud databases. Evaluate pricing models, usage patterns, and workload requirements early in the application lifecycle so that organizations can improve cost predictability and avoid inefficient database architectures. FinOps Practitioners can use key inputs, architectural decisions, and persona collaboration needed to build database systems that balance performance, scalability, and financial accountability.

## Table of Contents

  * [Cost-efficient database design](<#cost-efficient-databases>)
  * [Inputs required for architectural decision making](<#inputs>)
  * [Architecture decisions required to achieve cost efficiency](<#architecture-decisions>)
  * [Persona involvement](<#personas>)
  * [Conclusion](<#conclusion>)
  * [Acknowledgments](<#acknowledgments>)

[FinOps](<https://www.finops.org/introduction/what-is-finops/>) involvement at earlier stages of the application development lifecycle can help proactively build in FinOps practices, resulting in a more cost-effective cloud infrastructure. While we’ve covered [cost-efficient general VM architecture in a previous work](<https://www.finops.org/wg/architecting-vm-based-applications-for-cost-efficiency/>), this paper focuses on how to architect databases with cost efficiency in mind.

Read this paper to learn how incorporating the most effective pricing and usage strategy during the application’s design phase aids in accurate upfront cost estimation and optimization as it relates to databases.

### Purpose of this guide

This paper is an extension to previously published [Architecting VM-based Applications for Cost Efficiency](<https://www.finops.org/wg/architecting-vm-based-applications-for-cost-efficiency/>) and should provide FinOps practitioners with a foundational understanding of cloud database efficiency. It covers key considerations FinOps practitioners should explore with business and technical stakeholders to plan for architecting cloud databases for cost efficiency.

**NOTE:** This document will not cover any data analytics (Hadoop, Spark, Databricks, Snowflake, BigQuery, EMR), managed data storage or streaming databases (S3, Redshift, Datalake, Amazon Timestream). Those services could be topics for future papers.

## Looking at Database Design with Cost Efficiency in Mind

Database management systems are the largest and fastest growing segment of cloud spending ([IDC](<https://blogs.idc.com/2021/10/15/a-workload-centric-view-of-public-cloud-services-spend/>)). 63% of enterprises are already migrating databases to the cloud, and an additional 29% are considering migrations to cloud databases in the coming three years ([IDC](<https://blogs.idc.com/2023/02/10/3-harmful-mistakes-companies-are-making-in-the-cloud-and-cloud-cost-management/>)).

In 2022, 98% of the overall database management system (DBMS) market growth came from cloud-based database platforms and cloud database platform-as-a-service (PaaS) share reached over half (55%) of the overall market ([Gartner](<https://www.gartner.com/en/documents/4432699>), June 2023). The shift from procuring database licenses and infrastructure as a capital expense (CapEx) to pay-as-you-go database services as an operational expense (OpEx) enables organizations to only pay for what they use.

The dynamic nature and near infinite capacity of the cloud make cloud database usage and spending unpredictable. Even worse, inefficient database architectures can go undetected, resulting in dramatically higher cloud costs. In order to optimize resource usage and ensure cost predictability, it is essential to architect databases for cost efficiency before deploying them into production.

When architecting database workloads for the cloud, it is important to consider a number of challenges and risks that may impact total cost of ownership and business results, including:

  * **Licensing:** Before choosing a database platform, it is important to consider the license implications, including impact on existing vendor contracts, features excluded from the license you choose, and your team’s ability to add new features, compared with open source alternatives
  * **Support:** Database configuration, upgrades, maintenance, backup, and security patching can become mundane and toilsome taks, but can result in costly downtime and additional risks if not managed properly
  * **Service Level Agreements (SLAs):** Managed cloud database services typically include guarantees for availability and maintenance, so be sure to [review the SLAs](<https://www.unraveldata.com/resources/the-modern-data-ecosystem-use-managed-services/>) and confirm they will meet the requirements for your current and future applications
  * **Performance:** Common challenges include network latency, database vertical or horizontal scale limits, inefficient data storage/retrieval, suboptimal query design such as unnecessary SQL joins and table column width, wrong indexes, fragmentation, and overprovisioning resources in an attempt to speed up processing times
  * **Vendor lock-in:** proprietary databases can help organizations reduce the time and effort required to configure, deploy, and manage cloud databases but may limit choices about features, third-party integrations, regional availability, security, scale, and cost
  * **Cost management:** The rapid growth of cloud database spending, combined with the unpredictable nature of the cloud have led cloud database cost to become the number one concern of IT leaders

### Definition of a Cloud Database

A cloud database is a database built to run in a public or hybrid cloud environment to help organize, store, and manage data within an organization. Cloud databases can be offered as a managed database-as-a-service (DBaaS) or deployed on a cloud-based virtual machine (VM) and self-managed by an in-house IT team.

### Databases types, use cases and deployment models

Databases are organized collections of data that are designed to store, manage, and retrieve information efficiently. There are several types of databases, each with its own strengths and suitable use cases. Some common types of databases are:

  * [relational databases](<https://en.wikipedia.org/wiki/Relational_database>) (RDBMS),
  * [NoSQL databases](<https://en.wikipedia.org/wiki/NoSQL>),
  * [object-oriented databases](<https://en.wikipedia.org/wiki/Object_database>),
  * [time-series databases](<https://en.wikipedia.org/wiki/Time_series_database>),
  * [in-memory databases](<https://en.wikipedia.org/wiki/In-memory_database>),
  * [spatial databases](<https://en.wikipedia.org/wiki/Spatial_database>), and
  * [NewSQL databases](<https://en.wikipedia.org/wiki/NewSQL>)

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201428%201999'%3E%3C/svg%3E)

Source: This image from the [ML4Devs blog](<https://www.ml4devs.com/articles/datastore-choices-sql-vs-nosql-database/>) illustrates the wide variety of cloud databases that can be considered.

## Inputs required for architectural decision making

When developing a cloud-deployed application database, it’s crucial to take into account various factors like functionality and resiliency. Nevertheless, it’s imperative not to overlook the factor of cost. The consideration of cost-effectiveness in architecture applies to both entirely new design projects and initiatives involving the migration of an application from on-premises infrastructure to the cloud, or the redesign and refactoring of an existing application. These inputs encompass a range of factors, including organizational and technical application requirements.

When you start planning for a database implementation you want to look at the application approach and requirements to choose the right kind of database and architect it for efficiency. Considerations include the type of data that needs to be stored, how frequently is data viewed or modified, how many users will the application need to support, and how are users geographically distributed.

Additional application requirements to consider include response times, synchronous vs asynchronous patterns, connection time-to-live (TTL), encryption, administration, monitoring metrics, integration, application deployment and operations (e.g., devops).

The below table lists multiple considerations and inputs that you should reflect on, before deciding to design a database on public cloud

**Consideration** | **Questions to ask** | **Potential Decision**  
---|---|---  
Organization core competency | Do we have or plan to hire, train, and retain staff with the required expertise? How much experience does our team have with cloud-native databases? Does our technical team have more experience with one database type or brand vs. another? Is training readily available and are team members willing to gain new skill sets? | Consider a fully-managed database service if the organization lacks the database administrators (DBAs), Business Analysts, or DataOps technical team to migrate to and use a low-cost self-managed database option.  
Existing applications and databases | Do we have a lot of proprietary and legacy databases? Do we have legacy applications utilizing a particular database brand? When migrating on-premises applications to the cloud, is a database migration to another approach or brand feasible? | Consider moving to more commodity databases (with a strong community and large technical workforce available in the market). To reduce risk during migration to the cloud, consider migrating or rearchitecting the databases in a separate phase.  
Database software installation, deployment, and operations staff | Is there a central IT team who can install the needed database(s) in compliance with the organization’s security policies and standards? How much time is spent on manual database management (create, monitor, upgrade, backup)? Do we have staff available to manually perform database management tasks? | An organization may have database installation and deployment automation to ensure that new databases can be efficiently secured and managed. There may be an internal chargeback for this capability. Automate as much as possible. Fully-managed cloud databases are more expensive, but may be a good choice if limited staff are available to perform the tasks.  
Desire for consistency across the organization | Are there enterprise license and support contract considerations? What is the marginal cost of one additional application using a particular database brand? Do we have an internal community of expertise around a particular database type or brand? How easily can we implement and test general, “non-functional” capabilities? | The license cost of the new database brand and approach may be justified for a marginal application. Flexibility in staff assignments and database consistency could be valuable. Consider non-functional capabilities such as high availability (HA)/disaster recovery (DR), performance, maintainability, reliability, scalability, and availability.  
On-going database software patching | How are database software updates deployed? Is the application sensitive to any downtime required to install high-priority patches? | If a database software exploit is discovered and a patch becomes available, it may be essential to apply the update quickly to prevent data loss or exfiltration.  
Operational costs | Are there cost risks with a lift-and-shift approach? Does our organization have a sizable workforce with deep technical expertise that can be allocated towards ongoing monitoring, management and operations? | Operational troubleshooting tasks may require additional visibility and could require purpose-built observability tooling.  
Support | Does the application or vendor support other database options? | If the application requirements change, could a less expensive alternative be used?  
Deployment time | What is the timeline to deploy the database to support your application? | Planning for the databases, planning for indexes, etc. to create a database on-the-fly vs. building tables into existing databases.  
Application lifespan | What are the expectations of lower non-recurring engineering (NRE) vs on-going costs? | If the database is just being used to support a quality assurance (QA) test for a month vs. to support an on-going application, the database operational costs may not be a significant driver of the architecture or efficiency.  
Licensing | Do you have on-premises licenses you can bring as BYOL to the cloud or can you add them to your Enterprise End User License Agreement (EULA) to avoid issues with license audits, container licensing, CSP PaaS license-included? Do you have an enterprise license and you can BYOL? | If an organization already has a database license or internal capabilities to support a particular RDBMS, there may be a way to disincentivize other database platforms. If you are paying for a certain number of licenses that you can’t go over without ratcheting up the number of licenses you are perpetually paying for during the next 5 years of your enterprise license agreement (ELA).  
Forecast application/database usage growth | How quickly can your DataOps team scale the database and how quickly will costs rise as usage grows? | Horizontally scalable databases may be designed to “scale out” by dynamically adding and removing additional compute and storage capacity, but may be more complex to manage. Vertically scalable databases may be easier to deploy quickly, but may be less flexible when scaling.  
Performance | What are the service level agreements (SLAs)? | A consumer credit organization may have a 200ms SLA to deliver employment verification and credit reports.  
ROI | Can you measure the value of the database? Do you have visibility into unit costs and unit economics? | Shared database architectures may be more efficient, but could be more difficult to attribute costs to the individual applications, users, projects, or teams.  
Database “native feature” | Are there any features inherent or built into the database itself required for building the application(s)? | A development team may choose to use capabilities “outside” of the database as the business logic, which would allow the database layer to be replaced/upgraded more simply.  
Documented compliance | Does the application require a security or compliance certification e.g., ​​SOC2, HIPAA, HITRUST? | Opt for a compliant database solution on the cloud (e.g., HIPAA compliant AWS DynamoDB, RDS)  
High availability (HA) and disaster recovery (DR) | Are there any service level agreements (SLAs) around application availability? In the event of an outage, how quickly do we need to recover the database? | Mission-critical applications may require higher availability than less critical applications. For example, a hospital emergency room application, executive dashboard, end-of-period financial analysis, and a daily batch record update may have very different availability requirements and costs.  

## Architecture decisions required to achieve cost efficiency

When choosing a cloud database architecture, there are a number of key decisions to consider that will directly affect the cost to build, deploy, and operate the application throughout its lifecycle. Each type of database has its unique strengths and weaknesses, and the choice of a particular database type depends on the specific requirements and characteristics of the application or system being developed, the breadth of use cases, as well as critical scenarios.

Cloud service providers offer extensive guidance on which database types and deployment models are applicable to a particular scenario. Some helpful links are shared here:

  * **AWS:**[Choosing the Right Database](<https://aws.amazon.com/startups/start-building/how-to-choose-a-database/>) and [decision guide](<https://aws.amazon.com/getting-started/decision-guides/databases-on-aws-how-to-choose/>)
  * **Azure:** [Types of Databases on Azure](<https://azure.microsoft.com/products/category/databases>) and [database examples](<https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-are-databases>)
  * **Google Cloud:** [Google Cloud Databases](<https://cloud.google.com/products/databases>) and [blog post](<https://cloud.google.com/blog/topics/developers-practitioners/your-google-cloud-database-options-explained>)

### Database deployment model

#### IaaS Databases and Databases-as-a-service

In an IaaS model, you (the customer/client) run your database on the cloud on a compute instance e.g., on Amazon EC2 (Elastic Compute Cloud), Google Compute Engine and Microsoft Azure Virtual Machines (similar to how you would on an on-premise data center), and retain complete administrative and operational control of the database. The need for complete administrative or operational control can be due to customizations or regulatory constraints that are required. You (the customer/client), are responsible for installing, configuring, and maintaining the database software.

In a Database-as-a-service model, you can consume a fully-managed database either directly from the cloud provider (PaaS databases such as RDS from AWS, Cloud SQL from GCP, and Managed SQL instances from Azure) or from a 3rd party SaaS vendor (from a cloud marketplace). In this model in which the cloud provider or a 3rd party provides a fully-managed and supported managed database offering, retaining most of the administrative and operational tasks pertaining to maintaining the database.

The below table should help you understand where the responsibilities for specific tasks lie:

**Feature** | **Responsibilities in IaaS model** | **Responsibility in PaaS model**  
---|---|---  
Database optimization | Customer | Customer  
Scaling | Customer, custom configuration | Policy-based and automated  
HA and redundancy | Customer, custom configuration | Feature provided by cloud provider, configured by customer  
Monitoring – Technical | Customer, custom configuration | Provided by cloud provider  
Monitoring – Cost | Customer, custom configuration | Limited functionality provided by cloud provider  
Backups | Customer, custom configuration | Feature provided by cloud provider, configured by customer  
Database Patching and Security | Customer, custom configuration | Provided and dictated by cloud provider  
Database installation | Customer, custom configuration | Provided by cloud provider  
OS installation, patching and security | Customer, custom configuration | Provided by cloud provider  
Hardware and physical server | Provided by cloud provider | Provided by cloud provider  
Underlying infrastructure (power, network, cooling) | Provided by cloud provider | Provided by cloud provider  

Typically, CSP PaaS instances cost more than the corresponding IaaS instances, even when one separates out the implied license costs. However, the capabilities provided by PaaS approaches could save labor hours, generally system database administrators (DBAs). In addition PaaS approaches force certain issues, such as patching as per a schedule, which might improve compliance and security posture. It is recommended that each organization evaluating PaaS vs IaaS carefully consider all costs and benefits of each approach that they will incur or realize when making a decision. Customers should evaluate the items listed in the table as “provided by cloud provider” to determine whether the capability provided by the PaaS service is sufficient for their needs. To the extent that additional capability is needed, that can influence the decision whether or not to utilize a PaaS service vs a regular IaaS implementation

From experience, it has been observed that IaaS databases on the cloud are typically popular in environments where application requirements are strict, requiring granular control and lifecycle management and conformance to specific regulatory requirements (examples include large database deployments in banks, financial institutions etc.). PaaS databases are popular in modern greenfield web-scale architectures and deployments, where applications are dynamic and can withstand frequent changes and updates to database versions.

Another decision that organizations face could be whether to standardize on PaaS for all of their applications or consider PaaS vs IaaS on an application by application basis. This decision will most likely hinge on organizational considerations more than technical considerations.

### Licensing model

Migrating existing, on-premises database licenses to cloud databases requires careful evaluation. Different licensing models may result in unexpected costs or limitations. Understanding license implications is crucial to ensure compliance and avoid penalties. For example, hybrid licensing benefits can significantly reduce the costs of running your database workloads in the cloud. Here are some key considerations:

  * Commercial vs open-source databases – this is dependent on application or organizational requirements
  * Bring-Your-Own-License (BYOL), e.g., under an existing End-User-Licensing-Agreement (EULA) contract vs procuring a license via the cloud service provider
  * Assess how the current licensing agreement aligns with the cloud database solution
  * Determine if any modifications or additional licenses are required for compatibility
  * Consider potential performance tuning needs specific to the cloud environment

  * Implement access control measures to manage user permissions effectively
  * Regularly review license allocation and usage patterns to optimize license utilization
  * Leverage observability tools to analyze your database usage patterns and spot overprovisioned and underutilized databases
  * Performance tuning can help increase license utilization by optimizing frequent or long-running queries and tuning indexes

### BYOL vs CSP license

When considering whether to use BYOL vs CSP vs. Marketplace purchased database licenses, consider several aspects of your expected use for each workload you are considering:

  * What is the total cost of the license and support fees for each alternative? Understand the unit cost of licenses available to you internally
  * Do you have access to available licenses for use?
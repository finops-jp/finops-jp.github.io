# How to Optimize Cloud Usage

**Summary:** Cloud usage optimization starts with examining top spend categories and leveraging native cloud provider tools to discover specific resource inefficiencies and potential waste. FinOps practitioners should explore practical steps like rightsizing compute instances, managing storage lifecycles, and utilizing Infrastructure-as-Code (IaC) to shut down unused resources. Track optimization efforts by reporting and examining the outcome of the optimization efforts to stakeholders to inform future optimization initiatives.

## Table of Contents

  * [Before you begin](<#before-begin>)
  * [Who needs to be involved](<#personas>)
  * [Information, data, and resources required](<#data-required>)
  * [Examples of usage optimization initiatives](<#examples>)
  * [Outcomes and Indicators of Success](<#indicators-success>)
  * [Closing thoughts](<#closing>)
  * [Acknowledgments](<#acknowledgments>)

One of the main attractions of working in the cloud is the ability to enable engineers to create infrastructure on demand, avoiding the traditional process involving months of discussions and approvals from finance and leadership to procure hardware. Engineers can create high-availability systems spanning multiple regions by spinning up large storage volumes, big compute instances, load balancers, firewalls, elastic IPs, set up disaster recovery accounts, etc.. They can set up test environments in minutes by running infrastructure as code (IaC) scripts.

While this freedom is great for engineers to quickly satisfy business and application development needs, this freedom can lead to technological sprawl and unused infrastructure which can result in ballooning costs. [Usage optimization](<https://www.finops.org/resource/terminology/#usage-optimization>) is the process of ensuring a close match between the cloud resources provisioned and the needs of the business. Usage optimization is an important tool for maximizing the value of the cloud and aids in establishing cost efficiency.

This paper provides guidance and prescriptive steps on how to plan, provision, and use cloud resources with cost optimization in mind.

## Before you begin

The knowledge and tools required to be successful with cloud usage optimization will vary depending on the specific usage optimization activity you are looking to perform. Generally, usage optimization will require the following:

  * Technical expertise with cloud native tools and services/resources to be optimized
  * Business needs, with some examples including: 
    * Government/legal requirements
    * Security requirements (for FedRAMP, Security Operations Center (SOC), etc.)
    * Storage requirements
    * Disaster Recovery requirements
    * High-availability requirements
  * Business dependencies (hours different services need to be available, seasonal variations etc.)

It is not required that the individual seeking to optimize usage have a deep understanding of all of the above, but rather the individuals who do have such information are involved in the usage optimization process. It is also important to have an understanding of where opportunities to eliminate waste or improve usage efficiency exist. See below list for a few examples.

  * **Storage Optimization:** Identify storage waste like unwanted Snapshots, unattached EBS volumes, setup lifecycle policies for data retention in the storage volumes, lifecycle for Snapshots, identifying storage tier requirements and provisioning capacity/configure as needed.
  * **Serverless computing:** Use computing resources only when needed, typically for the time it takes to run a process. Eliminates the need to spin up servers and the follow up maintenance and run time costs.
  * **Autoscaling & Load Balancing:** Spin up servers with predetermined specifications via auto scaling groups when needed. Servers can be added and removed based on the load.
  * **Containerization & Orchestration:** Generate reporting that determines the [cost of individual containers](<https://www.finops.org/wg/calculating-container-costs/>) on the clusters that teams are operating. This is a foundational step toward building visibility into your container spending.
  * **Utilize Spot Instances or Low-priority VM:** Utilize infrastructure sitting idle with the cloud service provider at deep discounts. If a higher priced utilization need comes up (e.g. if anyone spins up an on-demand instance), spot instances will be terminated to free up infrastructure for the higher priced instances to be created.
  * **Data Transfer & Egress Optimization (Data Caching/CDNs):** Pricing for data transfers within a region or availability zone depends on the pricing strategy of the cloud provider. Infrastructure can be created with this pricing in mind to reduce costs for large volumes of data transfers between infrastructure components.
  * **Scheduling Resources & Workload management:** Workloads can be scheduled to run when they are used and can be shut down when they are not used. e.g. Development servers can be shut down via a scheduled job or AWS Lambda script at 5 PM, if they are not required to be running thereafter. Another scheduled job or script can start up these servers in the morning so they stay up during office hours. For ad hoc use, servers can be shut down at all times, except when they are started up explicitly for short term use.
  * **Compute Optimization:** Servers are often created with larger capacity (CPU, memory, ephemeral storage) than needed. Keep monitoring CPU and memory usage to determine if they are at a level of usage in the range of 0 – 20 percent. If they are, they can probably be downsized to a size that has less CPU and memory. If the ephemeral storage volumes are not required, re-create the servers with instances that do not have ephemeral storage.
  * **Data Optimization:** Data optimization means improving data efficiency, performance, and quality. Techniques include data cleaning, compression, indexing, aggregation, partitioning, archiving, normalization, caching, deduplication, pruning, encryption, and using efficient file formats. The goal is to maximize the benefits and minimize the drawbacks in data handling and analysis.
  * **Network Optimization:** Remove unused network resources such as Load Balancers, Public IP addresses, etc. Gateways and NVA’s can be right-sized or decommissioned if underutilized.
  * **Automation & Automated Deployments:** Create infrastructure on demand within minutes via Infrastructure as Code (IaC). With IaC, infrastructure need not persist when not needed. Entire accounts can be set up quickly when needed (e.g. test or non-production accounts).

See [Reducing Waste Opportunities](<https://www.finops.org/wg/reducing-waste/>) for examples of usage optimization opportunities across cloud service providers.

## Who needs to be involved

Usage optimization is a complex task. The Figure below shows how the [FinOps team and other personas](<https://www.finops.org/framework/personas/>) sit initially in between all the various stakeholders helping to translate needs and build bridges that allow them to work more closely together autonomously.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20732%20333'%3E%3C/svg%3E)

The Figure below shows the typical process flow for FinOps cost optimization between various stakeholders.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201139%20599'%3E%3C/svg%3E)

  * **FinOps Practitioners (Driver):** bridge business, IT, and Finance teams by enabling evidence-based decisions in near-real time to help allocate cloud costs and optimize cloud use and increase business value. The FinOps practitioner is accountable for Usage Optimization.
  * **Procurement professional** **(Contributor; Informed):** Procurement Analyst, Sourcing Analyst, Vendor Manager, Vendor Director, etc.) or someone who uses insights provided by the FinOps team for identifying sourcing and purchasing of products and services within a cloud platform vendor. Procurement needs to eliminate waste in the billing process to provide the billing showback and chargeback to the functional cloud users in a timely and optimal manner. The Procurement Professional persona is a contributor for Usage Optimization; they work with FinOps Practitioners to develop policies and procedures, ensuring billing showback and chargeback resembles the actual usage of the functional teams
  * **Finance professionals (Contributor; Informed):** are often necessary to involve in usage optimization activities because they see the big picture of the organization. They have the macro view to see which budgets can be moved or adjusted. They bring a lot of insight to the table that a single engineer or other individual contributor may not be able to see. In some scenarios, finance is the one who alerts FinOps and other personas for the need to examine usage optimization potential when actual cloud costs are exceeding budgeted amounts. In other scenarios, finance may need to be made aware of usage optimization after the fact as forecasts and/or budgets may need to be adjusted to reflect the savings achieved. Finance persona accurately, budget, forecast, and report cloud costs. The finance scope is wide and involves total infrastructure spend. Communication to and from finance is an important part of building collaboration and ensuring productive discussion between personas. These partnerships level up both teams as the organization gains better forecasting, trends, and budget maintenance through collaboration. They help create a tagging schema for cost management that maps to general cost and expenses. This is critical for the end-to-end cloud billing processes and allocating costs that drive usage optimization. The finance is most often involved in usage optimization as they need to be informed of changes to spend or anticipated spect.
  * **Business/Product (Contributor; Informed):** team members are looking to quickly bring new products and features to solve pain points and drive positive business outcomes. They work with Engineering to maximize the value of the product resulting from work in the cloud. They are responsible for ordering work for the engineering team. They need to work with the product/project team to ensure that this is visibility for cost allocation and optimization, limiting the cost of rework required to optimize usage consumption. The Product Management team persona is a decider for Usage Optimization.
  * **Engineering and operations (Decider, Responsible):** team members work with product management to maintain product budgets by considering the efficient design and use of resources via activities like rightsizing (the process of resizing cloud resources to better match the workload requirements), and finding unused storage and compute. At minimum, engineers are consulted about usage optimization opportunities before any action is taken (in scenarios where the FinOps practitioner may be executing the optimization actions) or engineering teams may also be responsible for carrying out the actions to optimize cloud usage.
  * **Executives/Leadership (Informed):** sets the cloud goals and objectives for maximizing value, focusing on driving accountability and building transparency, ensuring teams are being efficient, and not exceeding budgets. Leadership persona should be informed about Usage Optimization.

## Information, data, and resources required

In order to effectively understand which resources need optimization, practitioners need access to the right data, in as near real-time of a manner as possible. Here are examples of datasets and sources of information that are required:

  * Billing and/or account admin role access is preferred. Any role that enables access to specific resource utilization metrics across your public cloud environment(s).
  * Historical utilization and spend data 
    * Group by subscription/project/account, service type/sub-type, location, reserved/PAYG, etc.
    * Recommend at least six months of historical utilization data
    * Examples 
      * Compute 
        * Hourly utilization by VM template, series (ISFG). Daily will suffice if hourly metrics are unavailable.
        * CPU, memory, I/O for at least the last 60 days
      * Storage 
        * Daily utilization (GBs consumed vs. provisioned capacity available)
        * Type of storage and tier (Premium vs. standard, SSD v. HDD)
        * IOPs, throughput, and operations for at least the last 60 days.
      * Network 
        * Data transfer (GBs transferred)
      * PaaS 
        * PaaS typically benefits from more advanced scaling capabilities than IaaS. Understand the current baseline and scaling settings vs. utilization (ie Kubernetes Requests and Limits settings). Each PaaS offering has its own metrics and nuances but follows this general principle.

### Tools, Utilities & Templates

Here are CSP native tools, utilities, and templates that FinOps practitioners and adjacent personas should be aware of when building a case for usage optimization initiatives.

**Amazon Web Services (AWS)**

  * [**AWS Trusted Advisor**](<https://aws.amazon.com/premiumsupport/technology/trusted-advisor/>): Idle RDS DB instances, underutilized EBS volumes, unassociated Elastic IP addresses, excessive timeouts in Lambda functions
  * [**AWS Compute Optimizer**](<https://aws.amazon.com/compute-optimizer/>): Performance and Cost of Compute workloads running on AWS
  * **[AWS Cost Management](<https://docs.aws.amazon.com/cost-management/latest/userguide/what-is-costmanagement.html>): **RI & Savings Plan Recommendations****
  * [**Amazon S3 Storage Lens**](<https://aws.amazon.com/blogs/aws/s3-storage-lens/>)

**Microsoft Azure (Azure)**

  * **[Azure Advisor](<https://learn.microsoft.com/en-us/azure/advisor/advisor-overview>) for Compute**: RI instances, Savings Plans, EphemeralOSDisks
  * **Azure Advisor for Data:** MariaDB, MySQL, PostgreSQL, AzureCosmosDB, Data Explorer, Synapse
  * **Azure Advisor for Network, Recovery Services**
  * **Azure Monitor, Azure Resource Graph, Azure Network Watcher**

**Google Cloud Platform (GCP)**

  * **[Cost Recommender](<https://cloud.google.com/recommender/pricing>) for Compute**: Under-utilized resources, auto-scaling, resource right-sizing, RI recommendations & Spot, cost allocation tags for multiple projects & departments
  * **Cost Recommender for Data:** Partitioning and clustering to optimize BigQuery tables and Cloud SQL Recommendations
  * **Cost Recommender for Cloud Run**

You/your organization may also have access to other purchased or home-grown tooling that can assist you with usage optimization.

## Steps to Usage Optimization

Below is a high-level overview of what usage optimization initiatives and projects might involve or include:

  1. Search for optimization opportunities 
     1. Examine savings potential by top spend categories (accounts, regions, services, etc). 
        1. Often the greatest savings potential lies in areas of heavy spending
     2. Leverage native tooling 
        1. Tooling provided by your CSPs (billing consoles, cost reporting, optimization generators, etc.) can help you to: 
           1. Identify and dive deeper into your top spend categories
           2. Discover usage optimization opportunities
  2. Identify opportunities and narrow the list to opportunities to target for action 
     1. Review the full list of optimization opportunities 
        1. Validate them as accurate/still relevant 
           1. For example, if you are looking at a list of unattached volumes, consider the date associated with the item to see if it is likely still unattached or if this item has been resolved already
        2. Prioritize actions based on the following: 
           1. Effort required vs. savings potential
           2. Time/resources needed for execution (consider conflicting priorities).
           3. Urgency of action (address later or already over budget).
           4. Level of risk associated with implementing cost efficiency actions.
  3. Execute optimization actions. The specific steps will depend on the items being addressed. Refer to [reducing waste](<https://www.finops.org/wg/reducing-waste/>) for detailed information. Usage optimization actions are typically carried out by engineering and operations teams or FinOps practitioners. Consider the following aspects: 
     1. Evaluate usefulness of each component created.
     2. Determine timelines for each component.
     3. Optimize run times
     4. Minimize Inter-region data transfers
     5. Manage lifecycle storage based on usefulness, duration, and regulatory requirements.
     6. Clean up unnecessary infrastructure.
     7. Avoid duplicate data.
     8. Understand high availability (HA) and disaster recovery (DR) requirements.
     9. Enable versioning when appropriate
     10. Utilize Infrastructure as Code (IaC) and shut down servers when not needed.
     11. Utilize serverless computing whenever possible.
     12. Use native cloud services when possible
     13. Utilize auto scaling groups
     14. Reduce the cost of querying
     15. Tune logging to only ingest necessary logs, events, and metrics.
  4. Report / examine the outcome of the optimization actions 
     1. For some organizations, this could be a simple email to stakeholders informing on the outcome of the cost savings or efficiency recommendations including the following information: 
        1. Total savings identified
        2. Savings actually achieved
        3. Disposition of recommendations (such as implemented, delayed, or deemed unactionable)
        4. Planned future actions
        5. Explanation for why certain identified savings are not actionable.
     2. Other organizations have chosen to record this information in a more formal manner such as in a ticketing or tracking system.

## Outcomes and Indicators of Success

Running usage optimization plays allows for teams managing the value of the cloud to communicate and collaborate. It is important for Business/Product, Engineering, and Operations teams to understand the cost impact of the resources they provision. Without optimization and observation, costs can skyrocket.

Communication plans can be a helpful tool when one is working on usage optimization; including real world examples and, if possible, with how much potential spend can be avoided/saved by their actions.

### Primary outcomes from running a usage optimization initiative

  * Learning from past experiences, sharing of best practices, process/behavior modifications for improvement, better control of the cloud cost, while within limitation or with no increase of the cloud budget
  * Reduction of waste
  * Improving the value of cloud and unit costs

### Indicators of Success

Here are examples of success indicators and KPIs by FinOps persona that will help consistently and thoroughly communicate the progress of any usage optimization initiative.

**At Executives/Leadership level:**

  * Cloud spend as percentage of revenue (%)

**At Finances level:**

  * Cost of cloud resources against forecasted (%)
  * Cost of cloud resources against total spend (%)
  * % of savings/cost avoidance on the cloud expense budget
  * Forecasted spend variance (%) – decrease in the forecast

**At FinOps level:**

  * Cost of unused cloud resource
  * Cost of unused cloud resources against total cost (%)
  * Reduction in the number of recommendations via cloud native tools
  * % of subscriptions/ projects/ organizations that have cost control processes implemented
  * % of untagged resources
  * Cost of all untagged resources

The Executives/Leadership, Finances, and FinOps indicators can be drilled down by cloud service provider, lines of business, or by teams. You can also implement a dashboard where teams or lines of business are compared.

**At Engineering and Operations level:**

  * % of resource types without an over/ or underutilization recommendation
  * % of rightsized resources
  * No disk unused or slightly used % like for example under 1 %
  * No VPN Gateways without network traffic
  * No Firewall without network traffic
  * Virtual Machines in a Stopped State

**At Business/Product level:**

  * Reduction of unit costs
  * Reduction of cost of cloud projects by %
  * Reduction of cloud operational costs by %

### **Exceptions and Considerations**

Potential **list of cases** where this guidance may **NOT** be applicable:

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201000%201000'%3E%3C/svg%3E) | **GovCloud** and**public sector limitations** across all major CSPs may have restrictions that may come in conflict with guidance from this paper.  
---|---  
![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201000%201000'%3E%3C/svg%3E) | **Comparing the savings** realized by implementing the usage optimization recommendations **vs.** **the** **number of engineering hours** needed to action them and drawing the conclusion that the implementation is**not viable** from an economical standpoint.  
![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201000%201000'%3E%3C/svg%3E) | **Engineering resource availability** due to the teams pursuing other business priorities.  
![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201000%201000'%3E%3C/svg%3E) | **Some cloud services** (e.g. serverless) **come already optimized,** so there are very few levers that can be pulled to realize usage optimization for them.  
![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201000%201000'%3E%3C/svg%3E) | **The tradeoff between the****risks****vs. the gains** of acting on the usage optimization recommendations where the former outweighs the latter.  

## Closing thoughts

Cloud usage optimization is greatly dependent on the specific activity you perform. It will also involve all the phases of the FinOps lifecycle. Planning out and following a well thought out FinOps optimization process flow will be a great starting point and getting you structured as you start taking action.

Each specific cost optimization process will require technical expertise on the type of cloud native tool you will be using. Your business needs and business dependencies should be clearly stated. All of this might not be possible without a strong FinOps team made up of the different personas, mentioned earlier, with the FinOps Practitioner being the driving force of the team.

Although there are numerous ways to approach cloud cost optimization, every cost optimization should have an achievable target you want to accomplish. The targets you choose are greatly tied into the cost optimization metrics you will be working with.

This initial overview of usage optimization should guide you in developing a process that will eventually lead to creating a strong automation process as you build on your experience and move through the FinOps lifecycle. Eventually, you will be able to create a consistent and continuous cost optimization process catered specifically to creating more value for your business.

### Related FinOps Resources and Framework Capabilities

  * [Resource Utilization & Efficiency:](</framework/capabilities/utilization-efficiency/>) For compute resources, there may be times when it is deemed that for performance or availability gains, average utilization may need to decrease and the extra expense incurred is worth the value creation the resource provides. Or the opposite may be true and performance expectations can be lowered to improve cost. For these decisions to be made, resource utilization, efficiency and cost must be looked at together.
  * [Cloud Usage Optimization](</framework/domains/cloud-usage-optimization/>)
  * [Reducing Waste Opportunities](</wg/reducing-waste/>)

### Other FinOps.org or external resources

  * [FinOps X ’22 Breakout: Resource Utilization & Efficiency – Eric Mulartrick (Boomi) – YouTube](<https://www.youtube.com/watch?v=s0G5J09Z9nU&list=PLUSCToibAswmu2V2rbm3ZjTLw3OZ9F2SB&index=10>)
  * [Storment, J. R. &Fuller, M. (2023). In Cloud FinOps Collaborative, Real-Time Cloud Financial Management, Second Edition O’Reilly.](<https://www.finops.org/community/finops-book/>)

## Acknowledgments

We’d like to thank the following people for their hard work in breaking ground on this paper.

[ ![Brian Robbins](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Brian Robbins Guidehouse ](<https://www.linkedin.com/in/brianrobbins777/>) [ ![Ricardo Triana](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Ricardo Triana Independent Consultancy ](<https://www.linkedin.com/in/ricardotriana/>) [ ![Jesse Albright](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jesse Albright Deloitte ](<https://www.linkedin.com/in/jessepalbright/>) [ ![Julie Girard](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Julie Girard Desjardins ](<https://www.linkedin.com/in/juliegirard/>) [ ![Diana Bele](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Diana Bele Independent Consultancy ](<https://www.linkedin.com/in/diana-bele-407bb224/>) [ ![Kurt Alexander](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kurt Alexander HCA Healthcare ](<https://www.linkedin.com/in/jkurtalexander/>) [ ![Marcel Paap](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Marcel Paap Rabobank ](<https://www.linkedin.com/in/marcelpaap/>) [ ![Trig Ghosh](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Trig Ghosh Accenture ](<https://www.linkedin.com/in/trig-ghosh/>)

We would also like to thank our supporters, Gerd Pruessmann, Sireesha Oram, Sonia Martínez, Chuck Balog, Mala Vengatesan, Dusty Bowling, Hrishikesh Sardar, Jason Smallwood, Amit Doshi, and Madhuri Mereddy.

Last updated: September 24, 2025

## Table of Contents

  * [Before you begin](<#before-begin>)
  * [Who needs to be involved](<#personas>)
  * [Information, data, and resources required](<#data-required>)
  * [Examples of usage optimization initiatives](<#examples>)
  * [Outcomes and Indicators of Success](<#indicators-success>)
  * [Closing thoughts](<#closing>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ Usage Optimization ](<https://www.finops.org/framework/capabilities/usage-optimization/>)
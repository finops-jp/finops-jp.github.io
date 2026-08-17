# Architecting VM-based Applications for Cost Efficiency

**Summary:** A majority of an application’s lifecycle cost structure is potentially determined during the architecture and design phase, emphasizing the need for proactive involvement rather than post-deployment usage optimization. FinOps practitioners should guide architects and engineers to align VM design decisions with the application’s actual usage pattern, such as designing to scale down resources during light usage periods to maximize the flexibility offered by cloud consumption models. Ask critical questions early about transactional independence, resource mix, and expected peak usage to ensure the final architecture minimizes long-term operational costs.

## Table of Contents

  * [Introduction](<#intro>)
  * [Virtual Machine basics](<#vm-basics>)
  * [Inputs for architectural decision making](<#inputs>)
  * [Design/architecture strategies to apply to your process](<#design-architecture>)
  * [Persona involvement](<#personas>)
  * [Conclusion](<#conclusion>)
  * [Acknowledgments](<#acknowledgments>)
  * [Appendices](<#appendix>)

## Introduction

FinOps is an evolving cloud financial management discipline and cultural practice that enables organizations to get maximum business value from the cloud. As a result, FinOps practitioners often work alongside engineering, finance, technology and business teams for deployed products and services to reduce and optimize cloud costs.

However, FinOps involvement at earlier stages of the development lifecycle can shift FinOps practices to be implemented in a more proactive manner. Integrating the optimum pricing and usage strategy during the design phase of an application helps to better estimate and optimize costs upfront rather than after deployment. Cost savings realized from such activities can be used for other investments.

### Purpose of this guide

The purpose of this paper is to help individuals accurately define requirements by type of application and provide the right information about the product to make effective, responsible cost related architecture decisions. This guidance is meant to be used in conjunction with other best-practice design considerations, such as designing for sustainability, security, etc.

This paper assumes that a decision has been made to build (versus buy) an application and deploy it on a cloud-based infrastructure. Subsequent sprint outputs from this workgroup could delve into issues of make/buy and self hosting versus Software-as-a-Service (SaaS) deployment.

In addition, this paper is focused on the traditional implementation approach of “fleet of VMs”. Other approaches, including containers, and serverless, could be the topic of future papers. A paper is contemplated to discuss the choice of one of these approaches and the pluses/minuses of each.

## Importance of Architecting for Cost Efficiency

Cloud computing enables organizations to accelerate innovation, reduce costs, and increase efficiency. But a move to the cloud is no guarantee of business value.

Returns on cloud investments depend on many factors, including [innovative leadership and a willingness to make cultural changes](<https://www.forbes.com/sites/forbestechcouncil/2023/03/01/why-is-everyone-concerned-about-cloud-roi/?sh=50e66da47be8>). ​​A 2022 Deloitte survey of 500 senior cloud decision-makers in the US found that one of the largest innovation gaps is in organizations’ top strategic priority, [reducing/optimizing costs](<https://www2.deloitte.com/content/dam/Deloitte/us/Documents/consulting/us-future-of-cloud-survey-report.pdf>).

Organizations frequently encounter significant gaps to their expected cost efficiency. Simply “lifting and shifting” virtual machines (VMs), storage, networking, and so on into the public cloud may cost organizations about [five times what they were spending](<https://www.computerweekly.com/feature/Reverse-cloud-migrations-Why-some-enterprises-are-shifting-their-IT-back-on-premise>) previously.

Addressing costs during the architecture phase enables cloud architects, engineers, developers, finance, and procurement teams to make informed decisions about VM instance types, load balancing, auto scaling, storage, networking, and purchase mechanisms to meet the application’s business requirements. Using this information, FinOps practitioners can project upfront and annual operating costs for the application. If costs are not addressed during the architecture phase, organizations may face painful choices after the application is deployed. For example:

  * After failed attempts to optimize storage spending for petabytes of data, [a web software company](<https://www.theregister.com/2023/01/16/basecamp_37signals_cloud_bill/>) spent tens of thousands of dollars to vacate the cloud.
  * A global company in the healthcare industry discovered they were spending 2x their budget for cloud data analytics.
  * Poor visibility into high cloud infrastructure spending caused a [customer data platform (CDP) company](<https://segment.com/blog/the-10m-engineering-problem/>) to see gross margins 20% below industry peers.
  * After struggling with capacity forecasting, [an e-commerce company](<https://cdn.osisoft.com/osi/presentations/2018-uc-san-francisco/UC18NA-D1EI04-eBay-JTepferPLepage-How-eBay-is-implementing-Cockpit-view-of-its-Data-Centers.pdf>) announced plans to move some of its operations back on-premises.
  * An innovation team that used cloud for the first time to build and test out an idea forgot to switch-off and tear-down their cloud environment after the completion of a PoC, paying $250K per month in unnecessary bills for 6 months.
  * A global branded food company had an employee run up a $70,000 bill by running a query all day on a cloud-native data analytics platform. They eventually were able to convince cloud service provider to forgive the expense.

Architecting for cost-efficiency is a consideration, irrespective of the infrastructure deployment model you opt for – whether it’s virtual machines, containers, serverless or even cloud-provider’s managed services. In this document, we focus on virtual machines only, and how you would think and go about designing a virtual-machine-based application for cost efficiency.

It is well documented that in the hardware or physical product world, [some 70% of the life cycle cost structure (including initial design, production, operation, and support) is defined at design time](<https://www.apriori.com/blog/what-is-design-to-cost-an-overview-with-examples/>), as depicted by the typical chart below. The 70% figure is a general estimate and could vary significantly based on many factors that come into play on each specific project.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20730%20341'%3E%3C/svg%3E)

_Image courtesy of[Apriori.com](<https://www.google.com/url?q=https://www.apriori.com/blog/what-is-design-to-cost-an-overview-with-examples/&sa=D&source=docs&ust=1687572891486386&usg=AOvVaw2vJgIO-YOKL7Q7e8xjKCSX>)._

This is not saying that the bulk of the costs are incurred at design time, only that the design dictates the costs that will be incurred later in the life cycle and that design decisions will impact and possibly constrain the choices that one has later in the life cycle as hardware products are produced or supported.

In the cloud/software world, design decisions about the application pattern (client server vs peer to peer vs event bus etc), implementation approach (fleet of VM vs container vs serverless) and degree to which scalability is supported has similar significant impact on ultimate operating cost of the resulting application. Cost can be one of many considerations that impact the design of applications destined for deployment in the cloud.

Many applications have very long useful lives. Architectural and other design decisions made early in the process frequently drive the success of the resulting application along many dimensions. These decisions will define the degrees of freedom that DevOps teams will have in the future to best utilize the then current technology to optimize functionality, non-functional capabilities, and costs.

## Virtual Machine Basics

### Upfront and ongoing cost considerations

When architecting for VMs, one should consider the cost of the investment and how those costs might change over time. Consider, as an example, electric vehicles (EVs) to explain this. We all know EVs are technologically superior, are [more cost efficient](<https://www.energy.gov/energysaver/articles/saving-money-electric-vehicles>), provide a low carbon footprint with reduced [emissions](<https://www.epa.gov/greenvehicles/electric-vehicle-myths>) and [require less maintenance](<https://www.fueleconomy.gov/feg/evtech.shtml>). However, while running costs with EV’s are significantly less, the upfront cost to purchase an EV can be quite high, compared to a traditional non-electric vehicle.

Similarly, though the initial cost of deploying cloud native applications can be somewhat steep in terms of non-recurring engineering and the schedule, the resulting long term operating cost of an application is likely to be low, thereby providing an attractive return on the initial effort and schedule investment.

### Virtual machine infrastructure layer considerations

There are multiple considerations with a virtual machine from an infrastructure perspective that teams should be aware of, before designing for a specific business or application requirement. One should start thinking about these aspects from the very beginning, so that business functionality and expectations can be mapped to actual technical requirements.

Some examples are compute (e.g. cores), storage (e.g. object storage), networking (e.g. IO-intensive), etc. [See appendix](<#appendix-1>) for more information.

### Virtual machine application layer considerations

In the world of cloud deployment, since every resource used costs for every moment of use, the incentive is to minimize resource utilization at every opportunity. In many situations, usage patterns vary widely by time of day, day of week, season, external events etc. Thus the very granular flexibility of resource deployment enables one to very accurately match the quantity of resources deployed to the actual usage load experienced (or realistically anticipated) at any point in time. The key is to design applications to be able to take advantage of the flexibility of resource availability that the cloud computing model and cloud vendors offer. The architecture of the application should be able to scale down to a minimum of resource usage during slow periods and take advantage of many resources ( many CPUs, memory, I/O bandwidth, network bandwidth, etc) during periods of high usage.

Requirements for functionality, performance, reliability, and security remain regardless of the implementation approach. While in many organizations the preference is to continue using tried and true approaches and vendors, using these techniques may turn out to be more costly than utilizing alternative approaches. For example:

  * Databases can be implemented utilizing traditional proprietary software such as Oracle or MS SQL server or they can be implemented using open source software such as MySQL (MariaDB with support) or PostgreSQL. Databases can be deployed using traditional VMs or using database services such as RDS, Azure SQL or GCP Cloud SQL.

  * File systems can be implemented using traditional NFS approaches or other more cloud focused approaches such as cloud block storage or other cloud service provider (CSP) specific offerings.

The remainder of this document highlights factors that one might consider when making critical design decisions and then highlights some of the design decisions that might be made and notes the Persona’s of those making the decisions.

## Inputs for architectural decision making

When designing an application for deployment “in the cloud” presumably to run on one of the major cloud service providers, one should consider many factors. A designer gathers and utilizes data when deciding various elements of the design as noted below. These factors impact on many aspects of the design, not only cost.

It is expected that cost is one of many design goals that the design team will attempt to optimize. These apply for totally new (greenfield) design projects as well as projects moving an application from an on-premises implementation to the cloud or redesign/refactoring of an existing application. The categories of inputs include, the following which are described in more detail below:

  * Application requirements (including Cloud deployment and operations costs related to DevOps)
  * Organizational factors
  * Cloud service provider (CSP) capabilities
  * Underlying software or framework cloud capability and constraints

### **Application Requirements**

When designing an application for deployment in the public cloud, one should consider many factors. Some of the key factors to consider when thinking about designing for cost include:

**Application usage history, trends, and baselines:** Data-driven decisions based on peak and average usage help designers develop autoscaled applications based on memory, CPU, number of users, or connections.

**Absolute size:** Only applications sufficiently large justify the time and expense to optimize for cost in the cloud. One can measure size in terms of number of VMs, users, database size, or current spending.

**Resource use mix:** One should understand the mix of resources anticipated to be used, to ensure that the right optimizations are considered. Focus, say, on CPU optimizations for CPU-intensive applications or storage optimizations on storage-intensive applications.

**Time to market requirement:** If this is the overarching business driver, cost may not matter or may not matter for the initial implementation.
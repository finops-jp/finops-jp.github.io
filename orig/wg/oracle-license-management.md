# Oracle License Management Guide

## Table of Contents

  * [Introduction](<#intro>)
  * [Scope](<#scope>)
  * [Understanding Oracle Licensing](<#oracle-licensing>)
  * [Licensing Optimization Strategy](<#licensing-strategy>)
  * [BYOL Strategy](<#byol-strategy>)
  * [Maintaining Compliance](<#maintaining-compliance>)
  * [Definitions](<#definitions>)
  * [Resources](<#resources>)
  * [Acknowledgments](<#acknowledgments>)

## Introduction

This guide was created to serve as an essential resource for professionals navigating the intricacies of software licensing. With the ever-evolving landscape of cloud computing, managing licenses efficiently and compliantly is paramount. This guide offers clarity on foundational concepts and advanced strategies and will ensure that readers are well-equipped to implement best practices in real-world scenarios.

## Scope

Oracle’s foundation and history is as an enterprise software company. Accordingly, its cloud solutions provide a variety of mobility programs to benefit customer use of Oracle software licenses (estate) in the cloud. Identifying and analyzing the benefiOts of these programs requires ongoing use of FinOps and ITAM/SAM best practices to manage diverse cloud models – including private, public, hybrid, multi-dimensional and distributed.

There are several core topics that are interrelated and pivotal to thoroughly understand Oracle cloud services, subscriptions, mobility programs (BYOL), and the ongoing consumption management of Oracle cloud services and licenses in the context of these interdependencies.

**Cloud Services** | **Cloud Subscriptions** | **License Mobility Programs** | **Support Relief Programs** | **Other Clouds**  
---|---|---|---|---  
Oracle Cloud Infrastructure (OCI) / IaaS-PaaS Oracle Fusion Cloud Applications / SaaS Cloud@Customer | Agreements / Contracts Universal Credits / Pricing | BYOL to IaaS-OCI (Lift & Shift) BYOL to PaaS Customer 2 Cloud (C2C) for SaaS | Oracle Support Rewards (OSR) | Authorized Cloud 

  * AWS
  * Azure

_Technologies and core service platforms_ | _Policies that govern the use and cost of cloud services_ | _Programs available that span on-premises licenses and cloud services_ | _Options for leveraging cloud investment / use to reduce on-premises support spend_ | _Using Oracle technology in other cloud environments_  

Among these topics, this guide will emphasize Oracle Cloud Infrastructure (OCI) as the representative cloud service, BYOL to PaaS as the representative mobility program and Oracle Support Rewards (OSR) as the representative support relief program for outlining the strategies within the Licensing Optimization Strategy and BYOL Strategy sections herein.

### BYOL Overview

This guide provides best practices for the FinOps practitioner when leveraging Oracle on-premises licenses for BYOL deployments in the cloud. Leveraging existing on-premises license investment can represent a cost-efficient way to migrate and sustain workloads in the cloud. Oracle provides several options that are designed to optimize existing license investment as part of the migration to cloud.

A FinOps practitioner can leverage Oracle license management strategies in conjunction with FinOps best practices to optimize the organization’s Oracle license investment. A successful license management strategy incorporates several elements:

  * Evaluation of options
  * Managing license deployments across a breadth of cloud environments
  * Understanding license contracts and obligations
  * Using tooling to support license management
  * Optimizing cloud migration programs
  * Applying FinOps practices

Please consult the [Definitions](<#definitions>) section for additional detail on the terminology used in this document.

BYOL is concerned with deploying unused license capacity and / or ear-marked license migration capacity to fulfill the license element of Oracle products and services deployed in the cloud. There are two high level categories of BYOL license deployment:

  1. Installation of Oracle products on infrastructure in the cloud that are wholly installed and managed by the customer. The customer has responsibility for ongoing management, patching and updating in this case.
  2. Oracle Managed Cloud Services, where Oracle has responsibility for management, patching updates, facilitating quality of services, etc. In some cases, these services may include additional capability over and above the customer-installed and managed products. To benefit from a lower service rate, the customer can allocate an unused and supported on-premises license to fulfill the license component of the service. For cloud services in the Oracle technology space, these are referred to as BYOL to PaaS services.

In many Oracle technology deployments, there is likely to be a blend of different BYOL types and cloud environments where the license pool is deployed. These different environments and BYOL types are covered by separate policies.

**Oracle PaaS & IaaS Universal Credits and Funded Allocation Models**

The Universal Credit model is the prime buying and consumption model that is used to purchase Oracle-managed cloud services. The Funded Allocation model, which is a limited offering subject to authorization by Oracle,offers a variant from Universal Credits and supports consistent spending requirements typically seen in the public sector. Under these models, a broad range of Oracle Managed Cloud Services are made available that can be used very flexibly on demand. For many services under these models, they can be subscribed to in either BYOL to PaaS mode or License Included mode. As the name suggests, License Included means that a license is included in the cloud service price. For BYOL to PaaS, the cloud service price is lower to reflect the fact that the customer is providing an unused and supported license from their existing investment, which is dedicated to the cloud service.

A key policy document to observe throughout the use of a Universal Credits or Funded Allocation subscription is the Oracle PaaS & IaaS Universal Credits Service Descriptions –[ Oracle UCM v090723](<https://www.oracle.com/content/published/api/v1.1/assets/CONT973461D7AF694A2DBB06EE4BDAE2F940/native/Oracle%20PaaS%20and%20IaaS%20Universal%20Credits%20Service%20Descriptions.pdf?cb=_cache_1b97&channelToken=117bec9b3b4e4e90a1c4c9069d210baf&download=false>). This document outlines details of the services and provides specifics on the licenses that need to be maintained to cover the BYOL to PaaS services. This includes ensuring that the correct license type is in place (as embedded licenses cannot be used for BYOL to PaaS) and the license being used maintains its type – including any restrictions. These service descriptions go on to detail the license requirements for each BYOL to PaaS service. The conversion rate is given – typically from Processors or NUPs to OCPUs, and in the case of databases, it specifies which license options and management packs are required to be included as well.

Given that licenses can potentially be deployed very flexibly (in the case of Oracle managed BYOL to PaaS, licenses are only required to match usage which may fluctuate), it is important that disciplined license management is in place.

## Understanding Oracle Licensing

### License Types

  * **Full-Use Licenses** are the most common end-customer licenses and typically allow usage that is full functionality. Generally, one processor license for enterprise products will give you 2 OCPUs or 2 VCPUs. Restrictions you have in the license terms apply to the cloud rights as well.
  * [**Oracle ASFU licenses**](<https://redresscompliance.com/oracle-asfu-license-model-explained/>) are application-specific full-use licenses that are specific to run only with a defined application and may come with additional restrictions. Typically, Oracle partners resell ASFU licenses with their specified application. This license can only be used for the specific application it was purchased for if it moves to the cloud.
  * [**Proprietary Application Hosting Licenses**](<https://redresscompliance.com/oracle-pah-license-model-explained/>) (subject to an ISV amendment from Oracle)
  * **BYOL Qualified** – All BYOL qualified licenses must have an active support agreement for the CSI / license agreement. Unsupported licenses cannot be used for Oracle BYOL programs.
  * [**Oracle Embedded Software Licenses**](<https://redresscompliance.com/oracle-esl-license-oracle-embedded-license/>)**(ESL)** (not eligible for BYOL usage)
  * **Public Cloud and Private Cloud** – Oracle BYOL is available for OCI public cloud and Cloud at Customer (C@C) private cloud environments.

#### Important License-Related Terms

  * **Transition period** – Oracle allows customers to run on-premises and BYOL simultaneously for up to 100 days with OCI (PaaS / IaaS) platforms and 6 months with C2C (SaaS) platforms.
  * **Conversion Ratios** – License metric to cloud metric conversion ratios, which will vary by solution entity or type; conversion ratios can be round in services descriptions documentation: [Oracle UCM v090723](<https://www.oracle.com/content/published/api/v1.1/assets/CONT973461D7AF694A2DBB06EE4BDAE2F940/native/Oracle%20PaaS%20and%20IaaS%20Universal%20Credits%20Service%20Descriptions.pdf?cb=_cache_1b97&channelToken=117bec9b3b4e4e90a1c4c9069d210baf&download=false>).

### License Editions

Below is a graphical representation of the license editions for Oracle Database in the cloud. The most popular editions across the technology stack are Enterprise Edition and Standard Edition. (There is only Standard Edition and Enterprise Edition for databases. Other options include Autonomous database.)

License-Included

**License-Included PaaS Database Editions**  
---  
**Standard Edition** | **Enterprise Edition** | **EE High Performance** | **EE Extreme Performance**  
**Options & Packs Included** TDE Tablespace Encryption OML [Advanced Analytics], Spatial & Graph 3 PDBs starting with 19c Data Safe | **Option & Packs – Adds:** **** Data Guard Data Masking & Subsetting Pack Diagnostics & Tuning Pack Real Application Testing | **Option & Packs – Adds:** Multitenant Partitioning Advanced Compression Advanced Security, Label Security, Database Vault Lifecycle Management Pack OLAP Cloud Management Packs **** | **Option & Packs – Adds:** **** In-Memory Column Store In-Memory Base Level Active Guard Real Application Clusters ****  
**_Notes:_** _Edition Options & Packs are cumulative from SE to EE to EEHP to EEEP_ _Autonomous Database, Exadata Cloud Services and Exadata Cloud @ Customer available but not presented herein_ _License Included representative pricing in table below_  

BYOL

**BYOL to PaaS Database Editions**  
---  
**Standard Edition** | **Enterprise Edition** | **EE High Performance** | **EE Extreme Performance**  
**Options & Packs Included** TDE Tablespace Encryption OML [Advanced Analytics], Spatial & Graph 3 PDBs starting with 19c Data Safe | **Option & Packs – Adds:** **** Data Guard Data Masking & Subsetting Pack Diagnostics & Tuning Pack Real Application Testing | **Option & Packs – Adds:** \+ only Options & Packs you have supported licenses for – pursuant to BYOL ****  
**_Notes:_** _Edition Options & Packs are cumulative from SE to EE_ _Edition Options & Packs for EEHP and EEEP only included what you have supported licenses for pursuant to BYOL_ _Autonomous Database, Exadata Cloud Services and Exadata Cloud @ Customer available but not presented herein_ _BYOL representative pricing in table below_  

### Representative Unit Pricing

BYOL unit pricing for PaaS and IaaS Cloud Services (if available) is significantly lower than License-Included unit pricing (up to 80-90% lower in some cases). Below is a representative comparison between unit pricing for License-Included options (standard unit pricing by license type and edition) and a related BYOL option (license type and edition are pursuant to the license held by the customer under its relevant licensing agreement).

**Database Versions** | **Unit Price*** | **Metric**  
---|---|---  
Oracle Base Database Service – Standard | $0.2150 | OCPU Per Hour  
Oracle Base Database Service – Enterprise | $0.4301 | OCPU Per Hour  
Oracle Base Database Service – High Performance | $0.8871 | OCPU Per Hour  
Oracle Base Database Service – Extreme Performance | $1.3441 | OCPU Per Hour  
Oracle Base Database Service – BYOL | $0.1935 | OCPU Per Hour  
*Pricing as of August 10, 2023. For Current Pricing: <https://www.oracle.com/a/ocom/docs/corporate/pricing/oracle-paas-and-iaas-global-price-list.pdf>  

### License Metrics

For technology products, the most popular license metrics are:

  * Named User Plus (NUP): Used in environments where users and/or devices can be easily identified and counted. All human users and non-human operating devices that are accessing the software must be licensed.
  * Processor (xCPU): Used in environments where software users cannot be easily identified and counted, like Internet-based applications.

### License Mobility Programs

Oracle’s core mobility programs are separated by IaaS / PaaS and SaaS programs.

  * [**Oracle BYOL to PaaS**](<http://www.oracle.com/cloud/bring-your-own-license/faq>) allows organizations to apply their existing on-premises licenses for equivalent cloud services, including PaaS / IaaS (Oracle Cloud Infrastructure) and SaaS (Oracle Cloud Applications). Key guidelines for BYOL: 
    * Organizations may activate the BYOL version of a Cloud Service if it’s available on the [pricelist](<http://www.oracle.com/a/ocom/docs/corporate/pricing/oracle-paas-and-iaas-global-price-list.pdf>) (not all Cloud Services have BYOL versions).
    * Organizations are charged the BYOL rate for the activated Cloud Service provided they have sufficient supported on-premises licenses as required and specified in the Service Description for the Cloud Service [Oracle UCM v09072](<https://www.oracle.com/content/published/api/v1.1/assets/CONT973461D7AF694A2DBB06EE4BDAE2F940/native/Oracle%20PaaS%20and%20IaaS%20Universal%20Credits%20Service%20Descriptions.pdf?cb=_cache_1b97&channelToken=117bec9b3b4e4e90a1c4c9069d210baf&download=false>)
    * The Organization remains responsible for compliance with any license restrictions applicable to the on-premises licenses (including metrics), as defined in the Ordering Document for those licenses.
    * The following license types may be applied towards use in a BYOL Cloud Service environment: Full Use, Limited Use, Application Specific Full Use and Proprietary Hosting (subject to an ISV amendment). Term licenses are eligible for BYOL if the term of the license is still in effect.
    * Embedded Software Licenses are not eligible for BYOL
    * Entitlement is the same number of OCPUs or other cloud metric to support the same number of associated on-premises licenses applied toward the BYOL Cloud Service environment.
    * The license type is retained as applied toward the BYOL Cloud Service environment (examples: Full Use stays as Full Use and Limited Use stays as Limited Use).
    * Licenses applied toward the BYOL version of a Cloud Service are deemed deployed and in use (i.e. these licenses may not be used on-premises while applied toward BYOL version of a Cloud Service – except within the first 100 days of use.
  * [**Oracle Customer to Cloud (C2C)**](<http://www.oracle.com/applications/customer2cloud>) allows organizations using ERP, EPM, HCM, and CRM application solutions across all product families (i.e. Siebel, Peoplesoft, JD Edwards and Oracle E-Business Suite) to redirect elements of their installed on-premises solutions to Oracle Applications Cloud within the same product family. This Program allows organizations to use current support spend to move to cloud applications SaaS. [ ](<http://www.oracle.com/applications/customer2cloud>)

### Support Relief Programs

  * [**Oracle Support Rewards (OSR)**](<http://www.oracle.com/cloud/rewards>) allows organizations with a Universal Credit order for Cloud Services to accrue support spend rewards from their OCI cloud spend. OSR benefits organizations with on-premises licenses and related support while using OCI. For every dollar spent on OCI, the organization accrues 25 cents of OSR benefits, which can be applied to technology license support. For ULA support, OSR accrue at 33 cents for every dollar spent on OCI. OSR benefits may accrue up to 100% of the applicable support spend of the organization. OSR does not apply to Oracle Cloud Applications (OCA) or related Oracle application license support.

### Addition Programs and Notes

  * [**Oracle Cloud @ Customer** **(C@C)**](<http://www.oracle.com/cloud/cloud-at-customer>) allows organizations to run OCI services and Oracle Fusion SaaS applications at their data center. Accordingly, Oracle’s license mobility programs are available under the Cloud @ Customer programs, which include the following variations: Dedicated Region C@C, Autonomous Database Exadata C@C, Exadata C@C and Compute C@C.
  * **License-Included PaaS** has licenses and support included in the PaaS Cloud Services offering. It is a “cloud-only” offering. License-included rates are higher than BYOL rates, which are discounted for use of an organization’s existing license entitlements (and corresponding support payments) as equivalent Cloud Services. Some notable differences between License-Included PaaS and BYOL to PaaS: 
    * BYOL requires active management of the licenses and support applied in the BYOL program (for equivalent Cloud Services), License-Included has no similar license management requirement.
    * Not all License-Included PaaS offerings have a BYOL to PaaS counterpart. There are cloud-only services within License-Included PaaS that have no on-premises analog or potential BYOL application; some examples of this are: Oracle Mobile Cloud, Oracle API Platform Cloud Service, Oracle Internet of Things Cloud Service, and Oracle Visual Builder Cloud Service

## Licensing Optimization Strategy

Here are some guidelines for managing license and cloud consumption in multi-dimensional cloud and on-premises environments:

#### Entitlements

  * Know your on-premises license and cloud services contracts, rights and terms of use
  * Know your related contract and asset / service cycles, duration and related renewal decision milestones

#### Deployment / Consumption

  * Know your consumption levels of license and cloud – current, past and trends
  * Identify BYOL to PaaS opportunities
  * Identify OSR support relief benefits from OCI consumption

#### Investment Economics

  * Identify viable BYOL and OSR options
  * Develop TCO analyses for all viable options
  * Optimize BYOL and OSR options

#### Operate

  * Manage and optimize deployment/consumption and related TCO
  * Set controls and governance decisions and automate (refine process)

## BYOL Strategy

Bring Your Own License (BYOL) programs have unique parameters and features by vendor. The primary subscription model for Oracle Cloud Infrastructure (OCI) is Universal Credits. The main features of Universal Credits for organizations to understand in contemplating Oracle BYOL strategies include 1) Pay-As-You-Go (PAYG) vs. Annual Flex plans, and 2) BYOL vs. License-Included options; a comprehensive BYOL Strategy for OCI also includes understanding of 3) Oracle Support Rewards. Note: License-Included and BYOL relationships for Oracle licenses in authorized clouds, such as AWS and Azure, act similarly; however, price impact is unique to each cloud service provider.

**Pay As You Go (PAYG)** | **Annual Flex Plans**  
---|---  
No upfront commitment or payment List Price Pay only for what you use Pay in arrears based upon usage Suitable to uncertain and flexible requirements | Upfront commitment of credits and payment; applied across Cloud Services consumption Volume purchase discount price 12-month period to consume credits (“use it or lose it”); unused credits expire at end of period; excess consumption is charged at unit rate level on the rate card to end of period Beneficial to known, longer term and predictable requirements that may be aggregated, committed and discounted  
**License-Included** | **BYOL**  
Cloud Services that include license and support; “cloud only” offering Higher subscription pricing than BYOL Not Limited – all Cloud Services have a License-Included (standard cloud-only) version No corresponding license management or compliance requirements related to consumption of cloud services | Existing licenses and support applied toward equivalent Cloud Services; allows customers to leverage unused supported licenses for a lower rate BYOL version of a Cloud ServiceLimited – to Cloud Services with a BYOL version and license types qualified for BYOL use Discounted – BYOL versions of Cloud Services are substantially discounted and at lower rates than License-Included versions Requires strict inventory control measures to ensure license compliance  

#### Identify BYOL Opportunities

  * Many organizations have made large investments in on-premises tools and applications by purchasing Perpetual or Term software licenses. Not leveraging the existing license entitlements when migrating a workload from on-premises to the cloud would often lead to organizations duplicating the cost of a software solution in the cloud. The goal would be to use Oracle BYOL for licenses under active support to migrate these licenses to the public cloud environment where appropriate and avoid paying additional on-demand fees to cover the Oracle license fees.
  * Many organizations have excess Oracle licenses that were historically purchased for workloads that may have been retired since. These excess licenses may be available to use as BYOL for workloads that may have been created in the cloud computing environment. By using excess licenses that the organization owns and has under active support, the organization may avoid paying additional on-demand fees to cover Oracle licenses.
  * Some workloads created in the cloud have a steady state nature. A TCO analysis should be performed to determine the most cost-effective method of licensing the workload, either by using on-demand licensing or alternatively procuring Oracle Term or Perpetual licenses under existing organizational Oracle agreements.
  * Oracle BYOL allows you to use eligible Oracle licenses in any authorized public cloud environment.
  * BYOL eligibility depends on the license model and whether the license has active support license edition.
  * Some organizations have an Unlimited License Agreement (ULA). Each Ordering Document under a ULA (order) may specify licensed products for Unlimited use and the corresponding Unlimited Deployment Period of such licensed products – these licensed products must be assessed whether they are suitable for cloud use post certification process. At the end of the ULA, customers must notify Oracle whether they intend to (a) extend the ULA, or (b) certify the ULA and complete the ULA certification process (to end with the certified amounts of the products specified in the order).
  * Transition period: Oracle allows customers to run on-premises and BYOL for up to 100 days. After that, a customer cannot run both on-premises and BYOL with the same license.
  * Oracle customers should consider all public cloud platforms when deciding which is the most cost-effective and best choice to move the Oracle workload.
  * Oracle customers who will utilize Oracle Cloud or Oracle Cloud @ Customer need to assess whether purchasing new [Oracle PaaS and IaaS Universal Cloud Credits](<https://redresscompliance.com/universal-cloud-credits-oracle-benefits/>) or using BYOL is the most cost-effective choice for them.

#### Assess BYOL Feasibility

  * FinOps should evaluate the license cost of the solution and determine whether the use of BYOL would increase its cost effectiveness.
  * To assess the cost of BYOL, FinOps should collaborate with ITAM to understand whether there are licenses available and if so, at what cost.
  * Other sources that may be consulted to advise on the license positions and feasibility are: 
    * [Oracle Global License Advisory Services (GLAS)](<http://www.oracle.com/corporate/global-licensing-advisory-services>): Provides advisory services via two teams 1) Software Investment Advisory Services (SIA) and 2) Digital Transformation Consulting (DTC). Both SIA and DTC provide no-cost advisory services to assist Oracle customers with licensing, cloud and mobility program reporting, analysis, knowledge transfer and solution guidance.
    * Oracle Partner Network (OPN) consultants and advisors: There are many ITAM/SAM advisors who are part of the OPN and Oracle has launched a certified SAM Partner Program to further develop its advisor community. 
      * [www.oracle.com/partnernetwork/program/](<http://www.oracle.com/partnernetwork/program/>)
      * <https://partner-finder.oracle.com/catalog/>
    * Independent consultants and advisors – there are independent ITAM/SAM advisors who are outside of the Oracle Partner Network as well; a good place to discover these advisors would be professional ITAM/SAM communities. 
      * <https://itassetmanagement.net/>
      * <https://iaitam.org/>
  * ITAM should be consulted to understand the compliance requirements of using BYOL, the tools that would need to be implemented and the processes required to maintain compliance while using BYOL.

#### Define BYOL Policies

  * BYOL: [www.oracle.com/cloud/bring-your-own-license/faq/](<http://www.oracle.com/cloud/bring-your-own-license/faq/>)
  * Oracle Support Rewards (OSR): [www.oracle.com/cloud/rewards](<http://www.oracle.com/cloud/rewards>)
  * PaaS IaaS Universal Credits Service Descriptions: [Oracle UCM v090723](<https://www.oracle.com/content/published/api/v1.1/assets/CONT973461D7AF694A2DBB06EE4BDAE2F940/native/Oracle%20PaaS%20and%20IaaS%20Universal%20Credits%20Service%20Descriptions.pdf?cb=_cache_1b97&channelToken=117bec9b3b4e4e90a1c4c9069d210baf&download=false>)

#### Implement BYOL Management Tools

  * Oracle recommends a number of third-party tools for the tracking and auditing of their software: [Tooling | License Management Services | Oracle](<https://www.oracle.com/corporate/license-management-services/tooling.html>)

  * To ensure continuous compliance when using BYOL, it is recommended that tools are evaluated and implemented within 90 days or less to enable software license compliance tracking.
  * Collaboration between FinOps and ITAM should be ongoing to ensure that ITAM can track the license usage as determined by the inventory tools in the cloud.
  * OCI License Manager has BYOL tracking and management capabilities as well: [OCI License Manager (BYOL)](<https://blogs.oracle.com/cloud-infrastructure/post/announcing-license-manager-for-oracle-cloud-infrastructure>)

#### Educate and Communicate

  * Using BYOL may generate significant financial benefits to the organization, however, the risk of non-compliance with Oracle license agreements will increase.
  * ITAM Practitioners and FinOps Practitioners need to closely align to ensure compliance and cost optimization of resources.
  * Stakeholders must be educated on the risk versus reward of using BYOL licenses and installation of BYOL licenses must be closely monitored.

#### Operate

  * ITAM/FinOps on-premises deployment/cloud consumption review cycle is set at a (weekly/monthly/quarterly) cadence
  * Manage and optimize deployment/consumption and related TCO
  * Monitor/assess BYOL and OSR versus alternative options
  * Set controls and governance decisions and automate (refine process).

## Maintaining Compliance

When using Oracle BYOL, there are several key points to consider for license management and compliance:

  * ITAM/FinOps must manage both the on-premises and cloud deployments to ensure there are adequate licenses to cover both platforms.
  * If the organization has signed an [Oracle Unlimited License Agreement](<https://redresscompliance.com/oracle-ula/>) order (ULA), the ULA can be used for BYOL, which can reduce costs.
  * Typically, at the end of a ULA, the organization that entered into the ULA is required to certify the number of licenses that it has in use (installed and running) at the end of the ULA. However, Oracle excludes all BYOL deployments in public cloud environments from being included in the ULA certification upon exit. Oracle workloads in the cloud will need to be separately licensed once the ULA has come to an end.
  * ITAM should review the Oracle licensing agreements for usage limitations as these will continue to apply post transition to BYOL.
  * Oracle has launched a [License Manager](<https://redresscompliance.com/license-manager-oracle-oci-byol/>) function for Oracle BYOL, but it only covers a limited set of Oracle licenses.

## Definitions

  * **Oracle Cloud Infrastructure (OCI)** : A diverse portfolio of Oracle managed cloud services made available in both public and private clouds. These cloud services encompass Infrastructure as a Service (IaaS) and Platform as a Service (PaaS).
  * [**Oracle Universal Credits (UC)**](<https://upperedge.com/oracle/oracle-universal-cloud-credits-ucc-licensing-and-discounting-basics/>): Oracle Universal Credits is a flexible buying and consumption program for specific Oracle services. It provides a predictable, consistent way to pay for any Oracle Cloud Infrastructure (OCI) service in any region, including future releases of cloud services.
  * [**Oracle Cloud Pay As You Go (PAYG)** : ](<https://k21academy.com/dba-to-cloud-dba/oracle-cloud-pay-as-you-go-payg-subscription-model/>)Pay as You Go services allow quick provisioning with no commitment, and charge only for IaaS and PaaS services used. There is no upfront commitment and no minimum service period. Any cloud infrastructure and platform services consumed are metered and billed based on that consumption.
  * **Annual Flex** : The Annual-Flex Oracle Universal Credits model requires an annual commitment to Oracle, in which customers receive a discounted rate and have 12 months to burn down the credits. Any unused credits at the end of each annual period will be forfeited.
  * **Funded Allocation Model** : Oracle allows the flexibility to fund an annual amount to Oracle as specified in the “Funded Allocation Value”, which is to be applied towards the future usage of eligible Oracle IaaS and PaaS Cloud Services; this is a limited availability model, typically available for Public Sector customers.
  * **Perpetual license** : A perpetual license is a license type available after paying a one-time license fee that allows continued use of the software program for as long as the licensing organization continues to comply with all terms of the license agreement.
  * **Term license** : A term license is a license type available for a specific (limited) period of time, during which the licensing organization is allowed to access and use the software.
  * **Restricted license** : Some products may carry a Restricted Use clause where the license can only be used under a set of documented conditions, such as with a specified program.
  * **OCPU** : OCPUs represent physical CPU cores. Most CPU architectures, including x86, execute two threads per physical core, so 1 OCPU is the equivalent of 2 vCPUs for x86-based compute in Oracle Cloud.
  * **VCPU** : Virtual CPU is the number of processors that are allocated to a virtual machine.
  * **ECPU** : Elastic CPU is a new billing metric for Autonomous Data Warehouse and Autonomous Transaction Processing. An ECPU is based on the number of cores per hour elastically allocated from a pool of compute and storage servers. An ECPU is not explicitly defined in terms of an amount of physical hardware; it is a durable pricing metric which is not tied to the exact make, model, or clock speed of the underlying processor.
  * [**License Mobility**](<https://www.zdnet.com/article/oracle-unveils-universal-credits-license-mobility-for-easy-cloud-consumption/>): Oracle License Mobility is a program that allows customers to use their existing software licenses for Oracle (PaaS) cloud offerings, including Oracle Database, Middleware and Analytics.
  * **Active Support** : BYOL to PaaS qualifying licenses must have an active support agreement for the CSI / license agreement. Unsupported licenses cannot be used for Oracle BYOL license mobility programs.
  * **Unlimited License Agreement (ULA)** : An on-premises licensing model that recognizes customer commitment to Oracle products and builds in flexible future license growth. Licenses detailed in the ULA may be deployed against BYOL services in the cloud, assuming that they are of the required type, edition and product version needed to meet the BYOL requirements.

## Resources

### Contracts & Agreements

  * [Oracle Contracts](<http://www.oracle.com/contracts>)
  * Oracle Master Agreement: [Software](<http://www.oracle.com/contracts/software>), [Hardware](<http://www.oracle.com/contracts/hardware>)
  * [Cloud Services Agreement(s)](<http://www.oracle.com/contracts/cloud-services>)
  * Universal Credit Service Descriptions: [Oracle UCM v090723](<https://www.oracle.com/content/published/api/v1.1/assets/CONT973461D7AF694A2DBB06EE4BDAE2F940/native/Oracle%20PaaS%20and%20IaaS%20Universal%20Credits%20Service%20Descriptions.pdf?cb=_cache_1b97&channelToken=117bec9b3b4e4e90a1c4c9069d210baf&download=false>)

#### Pricing / Metrics

  * [Global Pricing](<http://www.oracle.com/corporate/pricing>)
  * OCI Pricing: [General Pricing](<http://www.oracle.com/cloud/pricing>), [Price List](<http://www.oracle.com/cloud/price-list>)

#### Oracle License Mobility & Related Programs

  * [BYOL to PaaS](<http://www.oracle.com/cloud/bring-your-own-license/faq/>)
  * [Customer 2 Cloud](<http://www.oracle.com/applications/customer2cloud>)
  * [Oracle Support Rewards (OSR)](<http://www.oracle.com/cloud/rewards>)
  * [Cloud @ Customer](<http://www.oracle.com/cloud/cloud-at-customer>)

#### Authorized Cloud

  * [Authorized Cloud Environments](<http://www.oracle.com/assets/cloud-licensing-070579.pdf>)

#### AWS

  * [Oracle on AWS Resources](<http://aws.amazon.com/oracle/resources>)
  * [Oracle on AWS FAQ](<http://aws.amazon.com/oracle/faq>)

#### Azure

  * [Oracle Database@Azure](<http://www.oracle.com/cloud/azure/#database-at-azure>)
  * [Oracle Interconnect for Azure](<http://www.oracle.com/cloud/azure/interconnect>)
  * [Oracle Data Services for Azure](<http://www.oracle.com/cloud/azure/oracle-database-for-azure>)

#### Cost & Usage Tools

  * [Cloud Cost Estimator](<http://www.oracle.com/cloud/costestimator.html>)
  * [Cloud Workload Estimator](<http://www.oracle.com/webfolder/workload-estimator/index.html>)

#### Best Practices

  * [Cloud Adoption Framework](<http://www.oracle.com/cloud/cloud-adoption-framework>)

#### Advisory Resources

  * Oracle Software Investment Advisory (SIA) and Digital Transformation Consulting (DTC) – provide complimentary (no fee) advisory services, reports, analysis and data-driven insights to customers for all Oracle products and services, including but not limited to Cloud Services, Licensing and BYOL. SIA and DTC support ITFM (Financial), ITAM (Asset) and ITSM (Service) management concepts and best practices where relevant and applicable. SIA and DTC are part of Oracle’s Global License Advisory Services (GLAS) team: 
    * [www.oracle.com/corporate/software-investment-advisory](<http://www.oracle.com/corporate/software-investment-advisory>)
    * [www.oracle.com/corporate/global-licensing-advisory-services](<http://www.oracle.com/corporate/global-licensing-advisory-services>)

  * SIA Global contact email: [sia-global_ww@oracle.com](<mailto:sia-global_ww@oracle.com>)
  * DTC Global contact email: [dtc-global_ww@oracle.com](<mailto:dtc-global_ww@oracle.com>)

  * Individual SIA, DTC, GLAS and Oracle contacts may be found on linkedin.com or the F2 community on Slack
  * SIA and DTC core advisory services include: 
    * [Cloud Investment Services](<https://www.oracle.com/a/ocom/docs/111576.001_ORA_GLAS-Factsheet_Cloud-Investment-Services_dtc.pdf>)
    * [Deployment and Consumption Optimization](<https://www.oracle.com/a/ocom/docs/400918.001_ORA_GLAS-Factsheet_Deployment-and-Consumption-Optimization_dtc.pdf>)
    * [Entitlement Intelligence](<https://www.oracle.com/a/ocom/docs/400918.001_ORA_GLAS-Factsheet_Entitlement-Intelligence_dtc.pdf>)
    * [Investment Economics](<https://www.oracle.com/a/ocom/docs/400409_008_ORA_GLAS-Factsheet_Investment-Economics_dtc.pdf>)
    * [Knowledge Transfer](<https://www.oracle.com/a/ocom/docs/400918.001_ORA_GLAS-Factsheet_Knowledge-Transfer_dtc.pdf>)
  * GLAS has other dedicated advisory services: 
    * GLAS Partner Advisory (including SAM certification program) [www.oracle.com/corporate/global-licensing-advisory-services/](<https://www.oracle.com/corporate/global-licensing-advisory-services/>)
    * Enterprise Contract Consulting (ECC) – ULA certification
    * Subscription & Usage Management (SUM) – SaaS utilization reporting and analysis

#### Tooling – ITAM-SAM 3rd Party Vendors

  * Oracle Verified 3rd Party Tool Vendors (3PTV) – partners have collection tools approved by GLAS at audit level accuracy and provide ITAM-SAM advisory services for Oracle customers (in addition to audit / assurance support services) [www.oracle.com/corporate/license-management-services/tooling.html](<http://www.oracle.com/corporate/license-management-services/tooling.html>)
  * There are many non-verified 3rd Party Tool Vendors with collection tools for tracking and monitoring license usage as well.

#### Tooling – FinOps Resources 3rd Party Vendors for OCI

  * Many of the FinOps Partner Members provide tooling for OCI [www.finops.org/about/partner-members](<http://www.finops.org/about/partner-members>).
  * 3rd Party Vendors providing tools for OCI may or may not be part of the Oracle Partner Network (OPN), but it may be worthwhile reviewing OPN:[ https://partner-finder.oracle.com/catalog/](<https://partner-finder.oracle.com/catalog/>) in addition to direct inquiry with a 3rd Party Vendor

#### Tooling – FinOps Resources in OCI

**FinOps Phase** | **FinOps Capability** | **OCI Management Tools**  
---|---|---  
**Inform** | Billing and Reporting | 

  * [OCI Cost Analysis](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/costanalysisoverview.htm>)
  * [OCI Cost and Usage Reports](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/usagereportsoverview.htm>)

Tagging | 

  * [OCI Tags](<https://docs.oracle.com/en-us/iaas/Content/Tagging/home.htm>)

**Optimize** | Forecasting | 

  * [Forecasting in Cost Analysis](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/costanalysisoverview.htm>)

Cloud Cost Planning | 

  * [OCI Cost Estimator](<https://www.oracle.com/cloud/costestimator.html>)

Invoicing | 

  * [OCI Invoices](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/invoices.htm>)
  * [OCI Payment History](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/paymenthistory.htm>)
  * [OCI Billing Schedule](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/subscriptions.htm>)

Recommendations (optimize utilization) | 

  * [OCI Cloud Advisor](<https://docs.oracle.com/en-us/iaas/Content/CloudAdvisor/Concepts/cloudadvisoroverview.htm>)
  * [OCI License Manager (BYOL-1)](<https://blogs.oracle.com/cloud-infrastructure/post/announcing-license-manager-for-oracle-cloud-infrastructure>)
  * [OCI License Manager (BYOL-2)](<https://docs.oracle.com/en-us/iaas/Content/LicenseManager/Concepts/licensemanageroverview.htm#licensemanagement__supported_products>)

**Operate** | Alerts and Notifications | 

  * [OCI Budget Alerts](<https://docs.oracle.com/en-us/iaas/Content/Billing/Tasks/managingalertrules.htm>)

Controls | 

  * [Quotas](<https://docs.oracle.com/en-us/iaas/Content/General/Concepts/resourcequotas.htm>)
  * [Enforcing Budgets using Functions and Quotas](<https://blogs.oracle.com/cloud-infrastructure/post/enforced-budgets-on-oci-using-functions-and-quotas>)

## Acknowledgments

We’d like to thank the following people for their contributions to the Working Group and this asset:

[ ![Amy Ashby](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amy Ashby Under Armour ](<https://www.linkedin.com/in/amyashbymke/>) [ ![Gregory Brinkerhoff](https://www.finops.org/wp-content/uploads/2022/10/persona-product.svg) Gregory Brinkerhoff Oracle ](<https://www.linkedin.com/in/gregory-brinkerhoff-4a4795/>) [ ![Salomé Keet](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Salomé Keet FNB South Africa ](<https://www.linkedin.com/in/salom%C3%A9-keet-ba2522a/>) [ ![George Arezina](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) George Arezina TAKEDA ](<https://www.linkedin.com/in/georgearezina/>) [ ![Peter Schmidhofer](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Peter Schmidhofer Oracle ](<https://www.linkedin.com/in/peter-schmidhofer-cisa-csam-a5544210/>)

We’d also like to thank our Supporters: Brian McCumber, Colin Jack, Amit Doshi, Chris Rininger, Ron Brill, Kris Wong, and their TAC Liaison, Kim Wier.

## Table of Contents

  * [Introduction](<#intro>)
  * [Scope](<#scope>)
  * [Understanding Oracle Licensing](<#oracle-licensing>)
  * [Licensing Optimization Strategy](<#licensing-strategy>)
  * [BYOL Strategy](<#byol-strategy>)
  * [Maintaining Compliance](<#maintaining-compliance>)
  * [Definitions](<#definitions>)
  * [Resources](<#resources>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ Licensing & SaaS ](<https://www.finops.org/framework/capabilities/licensing-saas/>) [ Intersecting Disciplines ](<https://www.finops.org/framework/capabilities/intersecting-disciplines/>)
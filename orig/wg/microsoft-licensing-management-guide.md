# Microsoft Licensing Management Guide

**Summary:** To effectively manage Microsoft licensing in the cloud, FinOps and ITAM teams must collaborate to align complex entitlement rules with dynamic consumption patterns to reduce waste and audit risk. This process requires a unified visibility strategy that normalizes proprietary units—such as SQL Server cores or Microsoft 365 seats—into a consistent, decision-grade view of total cost of ownership. By integrating license entitlement data directly into cloud billing workflows, organizations can proactively identify “double-pay” scenarios and optimize “Bring Your Own License” (BYOL) utilization.

## Table of Contents

  * [Introduction](<#intro>)
  * [Scope](<#scope>)
  * [Understanding Microsoft Licensing](<#licensing>)
  * [Recap](<#recap>)
  * [Definitions](<#definitions>)
  * [Resources](<#resources>)
  * [Acknowledgments](<#acknowledgments>)

## Introduction

Harnessing the power of software licenses and services has become integral for many organizations. However, the cost implications of deploying commercial software products of a software publisher like Microsoft in the public cloud underscores the significance of effective license management.

To get the most out of an organization’s existing investments in Microsoft, Microsoft allows customers to use, under certain circumstances, their perpetual or subscription licenses in the public cloud.

Many organizations have made large investments in on-premises tools and applications by purchasing perpetual or subscription software licenses. Not leveraging the existing license entitlements when migrating a workload from on-premises to the cloud would often lead to organizations duplicating the cost of a software solution. The goal would be to use Bring Your Own License (BYOL) for licenses under active support to migrate these licenses to the public cloud environment, where appropriate, and avoid paying additional on-demand fees to cover the Microsoft license fees. Microsoft also has an array of promotional programs for cloud migrations that could be leveraged to reduce cost.

In addition, where organizations have excess Microsoft licenses that were historically purchased for workloads that may have been retired since, these excess licenses may be available to use as BYOL for workloads that may have been created/born in the cloud computing environment. By using the excess licenses that the organization owns and has under active support, the organization may avoid paying additional on-demand fees to cover Microsoft license fees and thereby reduce the total cost of ownership of a workload.

Getting it wrong and deploying Microsoft products in the public cloud without an understanding of license management may, at its worst, lead to significant compliance issues and a high cost of becoming compliant. Becoming compliant may require purchasing additional licenses for the workload or cause operational and engineering distress in having to redeploy or rewrite architectures in order to satisfy the requirements. Not understanding the license landscape and opting to use on-demand licenses for all workloads without taking advantage of the many benefits of utilizing existing licenses and Microsoft Promotional Programs available for migration may lead to significant savings opportunities being ignored.

This guide was created to serve as an essential resource for professionals navigating the intricacies of software licensing within the Microsoft cloud. Managing licenses efficiently and compliantly is paramount with the ever-evolving landscape of cloud computing. This guide clarifies foundational concepts and advanced strategies and will ensure that readers are well-equipped to implement best practices in real-world scenarios.

## Scope

This guide covers licensing certain Microsoft products in Azure and 3rd-party cloud environments. These are differentiated as “Listed Providers” (Microsoft Azure, Amazon AWS, Google Cloud Platform and Alibaba Cloud) and “Authorized Outsourcers” (all other 3rd-party environments). Three product sets are in scope for this guideline, namely Windows Server, SQL Server and Microsoft 365 Apps for Enterprise/Business. For each product set, Microsoft allows certain benefits and cost savings opportunities, depending on the public cloud provider being used.

## Understanding Microsoft Licensing

### Windows Server

#### Windows Server on Azure

Windows Server can be licensed/procured for use in Azure in the following ways:

  * **Pay per usage (aka pay-as-you-go)**
    * Per-second Windows Server usage depends on the number of vCPUs running at any specific time.

  * **Azure Hybrid Benefit (AHB)**
    * Allows customers to apply existing Windows Server Core licenses with Software Assurance or subscription licenses to an Azure VM at no additional software cost rather than paying per usage. Charges for infrastructure still apply.
    * A minimum of 8 core licenses are required to cover a VM, regardless of its size.
    * Additional cores can be added or “stacked” as required.
    * The underlying VM compute cost is still incurred, though it may be discounted using a Reserved Instance or Azure Savings Plan.
    * Windows Server Standard customers are entitled to dual use rights for 180 days. This means they can continue using licenses with a migration-in-progress workload on-premises as they are applying the licenses to Azure Hybrid Benefit for the destination Azure VM.
    * With Windows Server Datacenter Edition, customers have perpetual dual use rights. This means, on an ongoing basis, a customer may use their licenses on-premises and a second time (including with an unrelated workload) in Azure. This benefit allows customers with an on-premises footprint to use the same existing license entitlement across two different environments (Azure and on-premises) and workloads.

#### Windows Server on Listed Provider

Windows Server can be licensed/procured for use on Listed Providers (currently Alibaba, Amazon AWS, Google and Microsoft) in the following ways:

  * **Pay per usage**
    * Per-second Windows Server usage depends on the number of vCPUs running at any specific time.

  * **Dedicated Physical Server**
    * Licenses purchased before October 1st, 2019 may be used in a BYOL fashion.

#### Windows Server on Authorized Outsourcer

Windows Server can be licensed/procured for use in Authorized Outsourcer environments as follows:

  * **Flexible Virtualization Benefit**
    * A customer with Software Assurance or subscription licenses may use their Windows Server core licenses to build and/or install solutions and run them on an authorized outsourcer’s infrastructure. This includes deployment to a dedicated server or a VM on a multi-tenant server.

  * **BYOL**
    * A customer with Software Assurance or subscription licenses may bring their Windows Server core licenses to an authorized outsourcer who offers pre-built solutions incorporating the software, rather than buy the software from the outsourcer.

### SQL Server

There are several ways to license SQL Server, depending on the editions required, the lifecycle environment and where the workload will be running.

#### SQL Server on Azure

  * **Free-licensed SQL Server editions:**

  * **SQL Server Express Edition**
    * Available at no software cost and can be used for production, development, test or POC instances (charges for infrastructure still apply).

  * **SQL Server Developer Edition**
    * Available at no software cost, this cannot be used for production but is applicable for development, test or POC instances (charges for infrastructure still apply).

  * **SQL Server Evaluation Edition**
    * SQL Server Enterprise Edition may be used at no software cost for a period of 180 days in a non-production environment (charges for infrastructure still apply).

  * **Pay per usage (aka pay-as-you-go):**
    * Applies to the use of SQL Server Enterprise and SQL Server Standard Editions
    * Per-hour SQL licensing subject to a 4-core minimum

  * **Azure Hybrid Benefit (AHB):**
    * Allows customers to use existing SQL Server Standard or Enterprise Core licenses with Software Assurance or subscription licenses in a BYOL fashion in an Azure VM
    * Charges for infrastructure still apply
    * Free licensing for one passive secondary replica
    * In Development/Test environments, customers with Visual Studio Enterprise subscriptions may use SQL at no cost (i.e. only be charged for compute). Other customers will incur pay-as-you-go SQL charges unless AHB is applied.

  * **Resource** : 
    * [Azure SQL Pricing Guidance](<https://learn.microsoft.com/azure/azure-sql/virtual-machines/windows/pricing-guidance?view=azuresql>)

#### SQL Server on Listed Provider (AWS, GCP, OCI)

  * **License Included (Pay per usage)**
    * Most cloud providers provide Windows Server images with currently supported versions of SQL Server. Licensing costs are incurred per second and added to your cloud bill.

  * **BYOL**
    * Launch a SQL Server instance from an imported image and bring your existing licenses.
    * Bring your own SQL Server licenses with Active Software Assurance to shared tenant compute resources using Microsoft License Mobility through Software Assurance.
    * For more information on how to license SQL Server across the Listed Providers, please refer to the below resources: 
      * **AWS** : 
        * <https://docs.aws.amazon.com/sql-server-ec2/latest/userguide/sql-server-on-ec2-licensing-options.html>
        * <https://aws.amazon.com/windows/resources/licensemobility/sql/>****
      * **GCP:**
        * <https://cloud.google.com/compute/docs/nodes/bringing-your-own-licenses>****
      * **Oracle:**
        * <https://docs.oracle.com/en-us/iaas/Content/Compute/References/microsoftlicensing.htm>

  * 

  * **Arc-connected Pay-as-you-Go**
    * You can choose to connect SQL Servers outside Azure (including at Listed Providers) to Arc and pay-as-you-go rather than use a traditional license, with costs billed through Azure. This may be a good choice for seasonal needs or workloads that run intermittently (e.g. only on weekdays). This is available with SQL Server versions 2012 to current.

#### SQL Server on Authorized Outsourcer

  * **Flexible Virtualization Benefit**
    * A customer with Software Assurance or subscription licenses may use their SQL Server core licenses to build and/or install solutions and run them on an authorized outsourcer’s infrastructure. This includes deployment to a dedicated server or a VM on a multi-tenant server.

  * **Arc-connected Pay-as-you-Go**
    * This option mentioned above under Listed Providers is also available to use with SQL Servers deployed with Authorized Outsourcers.

### Microsoft 365 Apps for Enterprise/Business

Microsoft 365 Apps for Enterprise/Business is a productivity suite which is installed on a user’s computer. Using this product in the cloud can be complex due to the licensing terms. This section will help FinOps Practitioners navigate the situations in a few easy steps.

Can I use Microsoft 365 Apps for Enterprise/Business in the cloud?

  1. **Step 1** : Is the user assigned a valid Microsoft 365 License with access to Microsoft 365 Apps for Enterprise/Business? 
     1. Yes: Go to Step 2
     2. No: Assign a License via Azure Active Directory or O365 Admin Portal
     3. I don’t know: Please review the licensing plans at <https://m365maps.com/>
  2. **Step 2:** Are you looking to install Microsoft 365 Apps for Enterprise/Business on an Azure workload? 
     1. Yes: Use Azure Virtual Desktop which is a service bundled with Microsoft 365 Suites
     2. No: Go to Step 3
  3. **Step 3** : Are you looking to use Microsoft 365 Apps for Enterprise/Business on Amazon AWS? 
     1. Yes: You may install 1 instance of Microsoft 365 Apps for Enterprise/Business on AWS Workspaces. Such instances must be running on the Enterprise Monthly Channel or Current Channel. See [Microsoft Product Terms](<https://www.microsoft.com/licensing/terms/productoffering/AmazonWorkSpacesDeployments/EAEAS>) for details.
     2. No: Go to Step 4
  4. **Step 4:** Are you looking to use Microsoft 365 Apps for Enterprise/Business on a Listed Provider other than Amazon AWS? 
     1. Yes: This is not permitted.
     2. No: You may deploy the software in an Authorized Outsourcer environment using the Flexible Virtualization Benefits.
  5. **Step 5:** When you deploy your Microsoft 365 Apps for Enterprise/Business to a public cloud, please inform your ITAM/SAM Practitioner which users and scenarios they intend on using.

## Recap

The table below summarizes the different licensing models applicable to each environment type covered by this guide:

**Product** | **Azure** | **Listed Providers** | **Authorized Outsourcer**  
---|---|---|---  
Windows Server | Azure Hybrid Benefit | Dedicated Server* | BYOL / Flexible Virtual Benefit  
SQL Server | Azure Hybrid Benefit | License Mobility Arc-connected Pay-as-you-go | BYOL / Flexible Virtual Benefit Arc-connected Pay-as-you-go  
Microsoft 365 Apps for Enterprise | Rights granted via Microsoft Product Terms | AWS Workspace only | BYOL / Flexible Virtual Benefit  
Microsoft 365 Apps forBusiness | Rights granted via Microsoft Product Terms | AWS Workspace only | BYOL / Flexible Virtual Benefit  

* Only for licenses purchased and versions accessible before October 1st, 2019. Software Assurance is not required.

**Note** : All licenses must have Software Assurance or equivalent subscription rights.

## Definitions

#### Azure Hybrid Benefit (AHB)

This is a promotional licensing offer that helps you migrate and save when migrating your workloads to Azure. To apply this benefit you must be paying for either: Windows Server or SQL Server core licenses with Software Assurance or a subscription to these products.

#### Listed Providers

Currently Alibaba, Amazon, Google, and Microsoft. The complete list is [here](<https://www.microsoft.com/licensing/docs/view/Listed-Providers>).

#### Authorized Outsourcer

An [Authorized Outsourcer](<https://www.lawinsider.com/dictionary/authorized-outsourcer>) means any third party service provider that is not a Listed Provider and is not using a Listed Provider as a Data Center Provider as part of the outsourcing service.

#### Flexible Virtualisation Benefit

The Flexible Virtualization Benefit expands current rights to deploy software on Authorized Outsourcers’ servers that are dedicated to a single customer’s use, to any Authorized Outsourcers’ servers, whether shared or dedicated.

The Flexible Virtualization Benefit is similar to License Mobility through Software Assurance in that it permits deployment to shared servers in the cloud. However, it is different in that it applies to all software, including software that is not covered by License Mobility through Software Assurance (such as Windows Server and desktop products) and it is available to more customers through more cloud providers, without the requirement to fill out the License Mobility Form.

#### License Mobility

Under License Mobility Through Software Assurance (SA), a customer may move their licensed software to shared servers under any of their Licenses which are designated as having License Mobility for which it has SA, subject to the requirements below. Products used for Self-Hosting may be used at the same time under License Mobility through SA rights, subject to the limitations of the Self-Hosting License Terms.

## Resources

  * [Microsoft Licensing Guides](<https://www.microsoft.com/licensing/docs/view/Licensing-Guides>)
  * [Microsoft Product Terms](<https://www.microsoft.com/licensing/terms>)

## Acknowledgments

We’d like to thank the following people for their hard work on this Playbook:

[ ![Amy Ashby](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amy Ashby Under Armour ](<https://www.linkedin.com/in/amyashbymke/>) [ ![Colin Jack](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Colin Jack Flexera ](<https://www.linkedin.com/in/cojack/>) [ ![Salomé Keet](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Salomé Keet FNB South Africa ](<https://www.linkedin.com/in/salom%C3%A9-keet-ba2522a/>) [ ![Chris Rininger](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Chris Rininger Microsoft ](<https://www.linkedin.com/in/chris-rininger-1185591/>) [ ![Kris Wong](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kris Wong Surveil ](<https://www.linkedin.com/in/kristopherwong/>) [ ![Rich Gibbons](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Rich Gibbons Synyega ](<https://www.linkedin.com/in/rich-gibbons-microsoft-licensing/>)

We’d also like to thank our supporters: Brian McCumber, Gregory Brinkerhoff, George Arzenia, Peter Schmidhofer, Amit Doshi, Ron Brill, and their TAC Liaison, Kim Wier.

Last updated: March 17, 2026

## Table of Contents

  * [Introduction](<#intro>)
  * [Scope](<#scope>)
  * [Understanding Microsoft Licensing](<#licensing>)
  * [Recap](<#recap>)
  * [Definitions](<#definitions>)
  * [Resources](<#resources>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ Licensing & SaaS ](<https://www.finops.org/framework/capabilities/licensing-saas/>) [ Intersecting Disciplines ](<https://www.finops.org/framework/capabilities/intersecting-disciplines/>)
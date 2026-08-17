# Navigating the Federal ATO Process for FinOps Tools Playbook

**Summary:**

FinOps practitioners in the U.S. Federal Government need to understand that gaining access to third-party FinOps tools is heavily restricted by FedRAMP and a lengthy internal Authority to Operate (ATO) process. Practitioners must proactively engage with Security and Compliance teams (ISSO, AO) to clarify the security classification of the cloud consumption data, as this classification determines if a tool can be a riskier but more versatile SaaS solution or a simpler-to-authorize self-hosted solution. Practitioners should also advocate for data obfuscation techniques to reduce the classification risk and expand the pool of available FinOps tooling needed to optimize cloud cost at scale.

## Table of Contents

  * [Introduction](<#introduction>)
  * [Objectives of This Playbook](<#objectives>)
  * [Prerequisites](<#prerequisites>)
  * [Authority to Operate (ATO) Overview](<#authority-to-operate-overview>)
  * [Data Impacts on FinOps Tool ATOs](<#data-impacts-on-finops-tool-atos>)
  * [Who Needs to be Involved](<#who-needs-to-be-involved>)
  * [FinOps Tool ATO Plays](<#finops-tool-ato-plays>)
  * [ATO Considerations and Challenges for FinOps Tools](<#ato-considerations-and-challenges-finops-tools>)
  * [Glossary](<#glossary>)
  * [Appendix A – References](<#appendix>)
  * [Acknowledgments](<#acknowledgments>)

## Introduction

Despite abundant availability, the U.S. Federal Government has limited access to purpose-built third-party FinOps tools due to Federal Risk and Authorization Management Program ([FedRAMP](<https://www.fedramp.gov/>)) and Department of Defense (DoD) Defense Information Systems Agency ([DISA](<https://aplits.disa.mil/>)) requirements. Access to FinOps tools is further complicated by the often lengthy internal agency Authority to Operate ([ATO](<https://digital.gov/resources/an-introduction-to-ato/?dg>)) process. This Playbook provides U.S. Federal Government FinOps Practitioners with insight into the cybersecurity-related processes impacting tool approval and utilization. Empowered by this additional perspective, we hope Practitioners can more effectively navigate internal agency ATO requirements, documentation, and processes and gain access to FinOps tooling needed to manage cloud cost optimization at scale.

## Objectives of This Playbook

The objective of this playbook is to empower U.S. Federal Government FinOps Practitioners with a high-level understanding of the cybersecurity-related requirements associated with obtaining third-party FinOps tools. With this knowledge, federal FinOps Practitioners should be better able to productively engage with agency-level Authorizing Officials (AO), Information System Security Officers (ISSO), systems integrators, tool vendors, and other stakeholders on the most effective path to obtain ATO for their selected FinOps tool. Specifically, this playbook provides information on

  1. FinOps data and impacts on FinOps tool ATO
  2. Stakeholders involved in the FinOps Tool ATO process
  3. Plays for FinOps Tools based on authorization status.
  4. FinOps Tool ATO Documentation

In-depth knowledge of federal cybersecurity requirements is not the objective of this Playbook. FinOps Practitioners are not expected to drive a FinOps tool through the ATO process. That is the responsibility of Security and Compliance teams with support from the ISSO, product managers, and/or system owners. A deep dive into the execution of the ATO process, technical explanations of how application security is enhanced (e.g., hardening), or the security controls used to assess applications are out of the scope of this playbook. Links are provided in Appendix A for individuals interested in learning more.

### Who Should Use this Playbook

This playbook is intended for federal agency IT staff and their contract support attempting to select a FinOps tool. It assumes that a decision has been made to procure a FinOps tool that suits its security posture.

## Prerequisites

This playbook assumes that these prerequisites have already been met:

  * Approval to procure a third-party FinOps tool has been received.
  * Estimated budget and implementation timeline has been defined.
  * An Analysis of Alternatives has been completed, and a specific tool has been identified.
  * A high-level understanding of the agency ATO process has been achieved.

## Authority to Operate (ATO) Overview

[ATO](<https://cloud.gov/docs/compliance/ato-process/>) stands for authorization to operate, also known as “authority to operate.” The federal ATO process aims to minimize and manage software risk. It addresses requirements in the Federal Information Security Modernization Act ([FISMA](<https://www.congress.gov/bill/113th-congress/senate-bill/2521>)) and National Institute of Standards and Technology [(NIST) (](<https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final>)National Institute of Standards and Technology[) SP 800-53 Rev. 5](<https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final>). Cloud Service Offering (CSO) providers, like FinOps cloud-based SaaS (Software as a Service) tools, also require FedRAMP authorization. Adherence to DISA’s [DoD Cloud Computing Security Requirements Guide](<https://public.cyber.mil/dccs/>) (DoD CC SRG) requirements must also be met for Department of Defense components.

### Types of FedRAMP Authorizations

At the time of writing this paper, there are two types of FedRAMP Authorization – the JAB P-ATO and Agency ATO. Additionally, there are the I-ATO and authorizations provided by DISA for the Department of Defence.

NOTE: FedRAMP is moving toward a [single path](<https://www.fedramp.gov/2024-08-12-moving-to-one-fedramp-authorization-an-update-on-the-jab-transition/>) to FedRAMP Authorization. See White House Office of Management and Budget (OMB) [M-24-15, “Modernizing the Federal Risk and Authorization Management Program (FedRAMP)](<https://www.whitehouse.gov/wp-content/uploads/2024/07/M-24-15-Modernizing-the-Federal-Risk-and-Authorization-Management-Program.pdf>). Both require cloud service offerings (CSO), like FinOps SaaS tools, to be evaluated against FISMA and NIST requirements.

#### [JAB P-ATO (Provisional Authority to Operate)](<https://digital.gov/resources/an-introduction-to-ato/?dg>)

A CSO provider, like a FinOps SaaS Tool vendor, works with the FedRAMP JAB (Joint Authorization Board) to achieve a Federal Government-wide P-ATO. The JAB can only issue P-ATOs since each agency is responsible for issuing an agency-specific ATO. The P-ATO s a blanket certification to work with Federal Agencies. If an agency finds that the P-ATO for a CSO meets its requirements, it can issue an ATO for that CSO.

#### [Agency Authority to Operate (ATO)](<https://digital.gov/resources/an-introduction-to-ato/?dg>)

An ATO is issued by an agency AO after the federal agency review team finalizes its review of the software authorization package. For self-hosted applications, like some FinOps tools, the agency ATO authorizes the product to be installed in the agency’s environment. For cloud-based products, like FinOps SaaS tools, the agency ATO letter is forwarded to the FedRAMP PMO for review for Federal Government-wide use.

In the Agency Authorization path, agencies work directly with a Cloud Service Provider (CSP) for authorization. CSPs that make a business decision to work directly with an agency to pursue an Authority to Operate (ATO) will work with the agency throughout the FedRAMP Authorization process.

#### [Interim Approval to Operate (IATO)](<https://csrc.nist.gov/glossary/term/interim_approval_to_operate>)

According to NIST, an IATO is a temporary authorization granted by an agency-level principal accrediting authority (PAA) or authorizing official (AO) to process information in an information system, such as a FinOps tool, based on the preliminary results of a security evaluation of the system.

#### [DISA Provisional Authorization (PA)](<https://public.cyber.mil/dccs/>)

For DoD components, a temporary authorization issued by DISA allows a cloud service offering (CSO), such as a FinOps SaaS tool, to process and store controlled unclassified information (CUI) or National Security System (NSS) information.

## Data Impacts on FinOps Tool ATOs

Achieving ATO for FinOps tools is impacted by the security sensitivity classification applied to cloud consumption data by the agency’s ISSO and data classifiers. This classification will determine the type of FinOps tools permitted (SaaS or self-hosted) and the security requirements for the environment within which the tool will be hosted as part of the ATO process.

### FinOps Data Classification

There is a common belief within the U.S. Federal Government that cloud consumption data should automatically be classified as Controlled Unclassified Information (CUI). However, the [CUI Registry](<https://www.archives.gov/cui/registry/category-list>) does not include a category for consumption-related details like those often included in utility bills, for example. None of the CUI Registry’s Financial categories seem relevant, including the [General Financial Information](<https://www.archives.gov/cui/registry/category-detail/financial.html>) category classification, which is applied to records associated with the duties, transactions, and fiscal functions of the Federal Government. Therefore, applying the CUI label based on the cost details in cloud consumption data is tenuous.

However, the tags and labels applied to cloud resources may increase the data sensitivity of the associated consumption data. For example, [Derivative Classification](<https://www.cdse.edu/Portals/124/Documents/student-guides/IF103-guide.pdf>) may apply to cloud consumption data when user-defined tag/label values contain the names of classified National Security workloads. The sensitivity of cloud consumption data may also increase due to the combination of details contained within the files. For example, a resource ID alone does not cause much concern. However, when Resource ID is combined with location metadata like Region and user-defined tags like Application, the emergent sensitivity increases due to data aggregation.

To expand the pool of FinOps tools available, agencies should also consider obfuscation techniques to hide or mask cloud consumption data when sensitivity is a concern. For example, data masking, anonymization, shuffling, substitution, redaction, as well as tokenization, pseudonymization, and encryption are all standard techniques that can be deployed. Secondary data transformation and storage systems may also assist with reducing sensitivity concerns.

### FinOps Tool Hosting

FinOps tools primarily ingest and analyze cloud cost and usage data from Cloud Service Providers (CSPs) through Application Programming Interface (API) calls, CSV or Excel file uploads, and Extract, Transform, Load (ELT) Tools. Cloud-based FinOps SaaS tools are hosted outside of the agency’s cloud environment. Therefore, cloud consumption data must traverse the web from the agency’s cloud environment to the vendor’s cloud environment, where the FinOps SaaS tool is hosted using one of these data transfer techniques. Then the cloud consumption data is stored and analyzed in an external cloud environment managed by the vendor. Self-hosted FinOps tools are installed in the agency’s environment. Therefore, cloud consumption data does not leave the control of the agency’s IT infrastructure. Agencies require the environments hosting both SaaS or self-hosted FinOps tools to meet security requirements based on the classification applied to cloud consumption data to achieve ATO.

## Who Needs to be Involved

The **FinOps Practitioner** is a subject matter expert on the functional requirements of FinOps tools and can collaborate to support the ATO process. The Practitioner will play a lead role in the tool’s Analysis of Alternatives process. This persona also exemplifies the practice of FinOps in their organization.

The agency’s **Authorizing Official (AO)** decides whether the selected FinOps tool receives the ATO and can be installed in the agency environment. If so, the AO will sign a memorandum accepting the tool’s risks and assuming liability for those risks; this is typically the Chief Information Officer (CIO) or someone designated by the CIO.

The agency’s **Information System Security Officer (ISSO)** is responsible for assessing the impacts of the new system on the agency’s information security. The ISSO typically works as a liaison to the agency’s security team, directly supports the Application Owner, and will review the final ATO package. The ISSO may also engage external contractors to perform penetration testing of the system.

**The Information tool Security Manager (ISSM)** will directly support the ISSO and may be more closely involved in the new application’s ATO process.

The agency’s **Cloud Engineering Team** works with the FinOps Practitioner to determine the requirements for the FinOps tool. The cloud engineering team will also provide architectural diagrams and documentation during the FinOps application ATO process.

The FinOps tool **vendor** (the **Cloud Service Offering** vendor in the FedRAMP authorization process for cloud-based tools) is responsible for providing documentation to support security and architectural requirements.

The **Cloud Service Provider (or the cloud reseller)** is responsible for providing FedRAMP artifacts for FinOps CSOs in a shared responsibility security model.

The agency **Budget Team** contributes and ensures funding for the FinOps application and ATO process is included in budget requests and available for procurement.

The agency **Contracting Officer (CO)** prepares the procurement request for the FinOps application and any necessary contract support during the ATO process.

The **Contracting Officer’s Representative (COR)** will directly support the CO and may be more involved in the daily activities related to the procurement.

The **Program Team** will ultimately be responsible for launching and maintaining the tool and may contribute to the ATO process.

The **Risk Assessment Team** determines the level of risk associated with the application and contributes to the ATO process.

**Security and Compliance** : Drives the ATO process by writing white papers, communicating with the 3PAO (Third-Party Assessment Organization) and JAB, collecting required artifacts from different contributors, and scheduling security audits internally and externally.

**Security Control Assessor:** This person evaluates and verifies the effectiveness of security controls, identifying any vulnerabilities or gaps. Their findings are part of the AO decision-making process. Understanding the level and type of evidence they require for security controls is critical. Agencies have varied expectations regarding validation of control implementation. Some may be satisfied with scans / automated script results, while others may require screenshots for each unique host.

The **System Owner** is the product or technical lead and a key contributor to the process. They are responsible for the tool throughout the lifecycle, from procurement to retirement. The System Owner will work with the team to develop all documentation and track the tool through the ATO process.

## FinOps Tool ATO Plays

Before proceeding, the federal agency FinOps Practitioner should identify the selected FinOps tool’s authorization status and apply the appropriate play:

### Play A: SaaS FinOps Tool – No FedRAMP/DISA Authorization, No agency ATO

**IF the FinOps tool is SaaS-hosted and does not have FedRAMP (or DISA for DoD) authorization and has never received an agency authorization, THEN:**

Agencies that select tools with this status are trailblazers. FinOps Practitioners supporting the implementation of one of these tools should be aware obtaining ATO “from scratch” can be an 18 – 24 month process and manage schedule expectations accordingly.

This journey has two primary paths to consider. The first is for the vendor to pursue a [FedRAMP](<https://www.fedramp.gov/#auth-process>) Provisional-ATO (P-ATO), which involves a rigorous process of aligning their security posture with FedRAMP’s comprehensive requirements. This includes conducting a gap analysis, meticulously documenting security controls, and engaging a Third Party Assessment Organization (3PAO) for an independent assessment. For DoD components, additional DISA P-ATO is also required. While this path requires a significant upfront investment of time and money, it ultimately streamlines obtaining authorizations from individual agencies later. A P-ATO acts as a recognized baseline, demonstrating a robust security framework and increasing the vendor’s credibility in the eyes of government agencies.

Alternatively, vendors can opt for direct agency authorization. This approach involves tailoring their security controls to the specific requirements of a target agency. While potentially faster for engaging with a single agency, this path may require navigating unique security frameworks and authorization processes, which can vary significantly across agencies. It is essential for vendors to thoroughly research the specific agency’s requirements and engage with their security personnel early in the process.

### Play B: Self-Hosted FinOps Tool – No agency ATO

**IF the FinOps tool will be installed within the agency’s boundary (ie, self-hosted, or on-premises), THEN:**

For self-hosted FinOps tools, the path to authorization lies in understanding and meeting the specific requirements of the target agency. Working with the designated system owner, FinOps Practitioners must engage with the agency’s IT or security department to obtain detailed guidance on their security frameworks, risk assessment procedures, and authorization processes. This will often include documentation from the tool vendor, a detailed tool plan from the agency, and a classification of the data type the vendor’s software will store or access.

Many agencies adhere to [NIST 800-53](<https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final>) for security controls and risk management. Practitioners should familiarize themselves with these standards and ensure tool vendors and implementation teams know these requirements.

If another agency has already issued an ATO for the tool, it is important to explore if reciprocity may be available. Reciprocity for agency-specific ATOs means that one government agency accepts the ATO granted by another agency for the same tool or service. Even if full reciprocity is not an option, the vendor or other agency may have artifacts and implementation guidelines that can be tailored to reduce the approval timeline. This is not guaranteed but can be a significant time saver.

When looking at a self-hosted solution for FinOps, tools may require specific configurations or security guides to speed up your agency’s accreditation process. Many applications will undergo hardening scripts that may include using a specific image for any compute resources hosting the application, validating and ensuring specific controls are in place, such as data encryption in transit and in rest or similar configurations. For DoD components, these are often performed by following DISA [Security Technical Implementation Guides](<https://public.cyber.mil/stigs/>) (STIGs) and are followed to mitigate risks within the infrastructure hosted within your environment. Most commonly, FinOps tooling will often undergo the [**Application Security and Development (ASD) STIG**](<https://www.stigviewer.com/stig/application_security_and_development/>) or the [**Container Platform Security Requirements Guide**](<https://www.stigviewer.com/stig/container_platform_security_requirements_guide/>) depending on whether the application is hosted on traditional compute resources such as a VM or hosted on a containerization platform such as Docker or Kubernetes, respectively.

It’s important to understand that while the CSP itself operates under a shared security and compliance model between the customer (i.e., agency) and CSP (e.g., [AWS Shared Responsibility Model](<https://aws.amazon.com/compliance/shared-responsibility-model/>)), the ATO process should follow a very similar model between the customer (i.e., agency) and the FinOps vendor. While the ATO will ultimately be issued entirely within the agency, many inner workings of the FinOps tool’s software will be secured, documented, and updated by the FinOps vendor. It’s critical to form a partnership early on in the onboarding process to outline the expectations and assistance needed to move toward a timely ATO.

### Play C: SaaS FinOps Tool – with FedRAMP P-ATO

**IF the SaaS-hosted FinOps tool already has an existing FedRAMP P-ATO designation in the FedRAMP marketplace, THEN:**

FinOps tools with an existing FedRAMP P-ATO and that are available in the FedRAMP Marketplace should be the fastest and most cost-effective to implement. Agencies can leverage this existing authorization to fast-track agency-specific ATOs.This involves preparing agency-specific documentation, such as a tailored Security Assessment Report (SAR) and proactively engaging with the agency’s security personnel. Open communication and collaboration are vital to addressing the agency’s specific concerns or requirements. Continually monitoring the tool’s security posture ensures ongoing compliance with FedRAMP and agency-specific requirements.

The table below summarizes the general cost and schedule implications for FinOps Practitioners to be aware of based on pre-existing tool authorization status:

### Table 1: FinOps Tool ATO Plays Based on Authorization Status

**Authorization Approach** | **Schedule** | **Cost** | **Key Considerations**  
---|---|---|---  
**Play A: SaaS FinOps Tool – No Existing Authorization**  
Pursue FedRAMP P-ATO DoD Authorization | 12-18+ months | Hundreds of thousands to millions of dollars | 

  * Longest path
  * Requires significant upfront investment
  * Streamlines future agency authorizations
  * Increases credibility and market access

Pursue Direct Agency Authorization | 6-12 months (per agency) | Lower than P-ATO, but still significant | 

  * Faster for specific agency needs
  * Each agency has unique requirements
  * Authorization is not reusable across agencies

**Play B: Self-Hosted / On-Premises Application – No agency ATO**  
Agency-Specific ATO | Highly variable (months to a year+) | Highly variable, depending on data accessed and Agency-specific ATO process | 

  * Agency processes and risk tolerance vary greatly
  * May involve NIST standards compliance
  * Requires close coordination with agency and vendor
  * Reciprocity may help shorten the process
  * Ensures that data never leaves the agency’s control

**Play C: SaaS Tool – Existing FedRAMP P-ATO**  
Leverage Existing Authorization for Agency ATO | 3-6 months | Lower than obtaining a new authorization | 

  * Fastest path
  * Leverages existing security controls
  * Requires agency-specific documentation and communication

## ATO Considerations and Challenges for FinOps Tools

Obtaining an ATO is crucial for FinOps tools to be compliant within a federal agency. However, it presents several challenges that require careful consideration and strategic planning. The following are some of the key challenges that FinOps tools need to address to meet ATO, FedRAMP, and DoD requirements.

  * **Access Control Requirements:** Typically, FinOps tools are classified as administrative systems, requiring administrator-level access for engineers and other technical personnel. While these individuals generally possess the necessary security clearances and certifications (e.g., IAT II or IAT III), extending access to non-technical roles, such as FinOps analysts, poses a significant hurdle. To foster a comprehensive FinOps culture, it is essential to navigate the strict access control policies and identify solutions that allow broader access without compromising security protocols. This might involve developing tailored access frameworks or leveraging role-based access controls (RBAC) to ensure compliance while enabling effective collaboration across different functions.

  * **Data Integrity and Governance:** To achieve an ATO, FinOps tools must demonstrate high data integrity standards and ensure that all cloud consumption data remains accurate, consistent, and free from unauthorized modification. This can be challenging for FinOps tools that integrate data from multiple CSPs. In addition, government cloud consumption data stored outside agency-controlled environments may cause hurdles when attempting to achieve ATO.

  * **Third-party software dependencies:** FinOps tools rely on third-party binaries and libraries, introducing risks to obtaining an ATO. These dependencies can affect the tool’s overall security posture, requiring a thorough evaluation of third-party vendors’ security practices and ensuring they comply with the agency’s requirements.

  * **Sourcing:** FedRAMP requires that all cloud vendors ensure all Federal Government data is stored and processed in U.S. data centers. Therefore, using FinOps SaaS tools that are housed outside the United States is not possible. Additionally, foreign FinOps software vendors will also face challenges due to strict federal supply chain risk management requirements.

## Glossary

**Name** | **Description**  
---|---  
**3PAO (Third-Party Assessment Organization)** | An independent organization authorized by FedRAMP to assess cloud service providers (CSPs) for compliance with FedRAMP requirements.  
**AO** | Authorizing Official  
**ATO (Authority to Operate)** | Formal authorization granted by a federal agency to a CSP, allowing them to operate a cloud service that processes federal data.  
**Cloud Service Offering (CSO)** | A specific set of cloud services offered by a CSP.  
**Cloud Service Provider (CSP)** | A company that provides cloud computing services.  
**FedRAMP (Federal Risk and Authorization Management Program)** | A government-wide program that provides a standardized approach to security assessment, authorization, and continuous monitoring for cloud products and services.  
**FinOps Tools** | The general term “FinOps Tools” will be used throughout to describe any product, platform, or software which is purchased, licensed, implemented from open source, or built whether provided by a cloud provider, open source project, commercial vendor, or self-managed which perform or support the practice of FinOps in an organization.  
**FISMA (Federal Information Security Management Act)** | U.S. law that requires federal agencies to secure their information and systems. FedRAMP is based on FISMA requirements  
**JAB (Joint Authorization Board)** | A FedRAMP board composed of representatives from the CIO Council, DHS, and GSA that reviews and grants Provisional Authorizations to Operate (P-ATOs) for cloud services.  
**NIST (National Institute of Standards and Technology)** | A non-regulatory federal agency that develops standards and guidelines, including those for information security.  
**P-ATO (Provisional Authorization to Operate)** | A preliminary authorization granted by the JAB, allowing a CSP to offer services to multiple federal agencies while pursuing full agency ATOs.  
**RMF (Risk Management Framework)** | A NIST framework that provides a structured process for managing information security risk. FedRAMP is based on the RMF.  
**Software as a Service (SaaS)** | A cloud computing service model that delivers software applications over the internet on a subscription basis  
**Security Posture** | The security standard an organization or agency plans adheres to (e.g. FedRAMP, IL etc.)  
**Security Assessment Report (SAR)** | A comprehensive report documenting the findings of a security assessment conducted by a 3PAO.  
**System Security Plan (SSP)** | A formal document that describes the security controls implemented by a CSP to protect a cloud service.  

## Appendix A – References

**Name & Link** | **Description**  
---|---  
[FedRAMP Authorization example](<https://www.fedramp.gov/2024-08-12-moving-to-one-fedramp-authorization-an-update-on-the-jab-transition/>) | Article on the transition to one FedRAMP authorization.  
[Intro to ATO](<https://digital.gov/resources/an-introduction-to-ato/?dg>) | Provides an overview of the federal ATO process.  
[What is FedRAMP?](<https://www.fedramp.gov/faqs/>) | This resource explains FedRAMP and answers other frequently asked questions.  
[PDF on Modernizing FedRAMP](<https://www.https://www.fedramp.gov/2024-06-04-fedramp-governance/whitehouse.gov/wp-content/uploads/2024/07/M-24-15-Modernizing-the-Federal-Risk-and-Authorization-Management-Program.pdf>) | OMB Memorandum on changes to the FedRAMP governance and the authorization process.  
[DoD Continuous Authorization to Operate Evaluation Criteria](<https://dodcio.defense.gov/Portals/0/Documents/Library/cATO-EvaluationCriteria.pdf>) | Use cases and guidelines for evaluating a request for continuous authorization for a software factory, and provides the recommended processes and information required for software factories to generate a cATO package and send to DCIO(CS) for review and approval.  
[What is P-ATO?](<https://cloud.gov/docs/overview/fedramp-tracker/#what-is-a-p-ato>) | Definition of P-ATO via cloud.gov.  
[FedRAMP Agency Authorization Playbook v3.0](<https://www.fedramp.gov/assets/resources/documents/Agency_Authorization_Playbook.pdf>) | Reference for agencies pursuing an initial FedRAMP authorization; includes guidance, best practices, and tips to successfully implement the FedRAMP authorization process.  
[FedRAMP CSP Authorization Playbook v3.0](<https://www.fedramp.gov/assets/resources/documents/CSP_Authorization_Playbook.pdf>) | References on how CSPs can get started with FedRAMP, introducing the authorization processes, FedRAMP designations, and what CSPs should consider prior to pursuing an authorization. Provides an overview of the elements of an authorization package, along with general guidance and tips for delivering a high-quality package that will ensure an expeditious authorization process.  
[FedRAMP Marketplace](<https://www.fedramp.gov/about-marketplace/>) | Searchable and sortable database of Cloud Service Offerings (CSOs) that have achieved a FedRAMP designation, a list of federal agencies using FedRAMP Authorized CSOs, and FedRAMP recognized auditors (3PAOs) that can perform a FedRAMP assessment.  
[DISA Storefront – Cloud Service Support](<https://public.cyber.mil/dccs/cso/>) | Searchable and sortable database of Cloud Service Offerings (CSOs) within DoD by DoD Impact Level.  
[Cloud Information Center Cloud Security](<https://cic.gsa.gov/basics/cloud-security>) | [Overview of Cloud Security](<https://cic.gsa.gov/basics/cloud-security>) for each cloud service model, list of security controls, including fed government agency security responsibilities for FedRAMP, and DHS and DoD specific requirements. Includes information about DoD Impact Levels (IL2 through 6)  
[FedRAMP: Securing Cloud Services for the Federal Government](<https://www.youtube.com/@FedRAMP/featured>) | Videos about FedRAMP including introduction, background, authorization process, marketplace, and system security plan.  
[NIST Risk Management Framework SP 800-53 Control Baselines](<https://csrc.nist.gov/projects/risk-management/sp800-53-controls>) | Catalog of controls for systems and organizations to manage cybersecurity and privacy risk.  
[Department of Defense Cloud Computing Security Requirements Guide (DoD CC SRG)](<https://public.cyber.mil/dccs/dccs-documents/>) | The security model and requirements by which DoD will leverage cloud computing along with the security controls and requirements necessary for using cloud-based solutions. Includes information about DoD Impact Levels (IL2 through 6)  
[FedRAMP Impact Levels](<https://www.fedramp.gov/understanding-baselines-and-impact-levels/>) | Guide to security categorizations and impact levels within FedRAMP.  

## Acknowledgments

We’d like to thank the following people for their work on this Playbook:

[ ![Trig Ghosh](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Trig Ghosh Accenture ](<https://www.linkedin.com/in/trig-ghosh/>) [ ![Jonathan Kopp](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jonathan Kopp USMC ](<https://www.linkedin.com/in/jonathan-kopp-a7a9351a/>) [ ![Laura Mills](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Laura Mills ManTech ](<https://www.linkedin.com/in/laura-mills-98737b105/>) [ ![Joseph Yanci](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Joseph Yanci ManTech ](<https://www.linkedin.com/in/joe-yanci-69b3984/>) [ ![Matthew Whalen](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Matthew Whalen Rapid Cycle Solutions, LLC ](<https://www.linkedin.com/in/matthew-whalen-0a975438/>) [ ![Brian Robbins](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Brian Robbins Guidehouse ](<https://www.linkedin.com/in/brianrobbins777/>) [ ![Sina Farahani](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Sina Farahani Deloitte  ](<https://www.linkedin.com/in/sina-farahani-114b85ab/>) [ ![Daniel Sauter](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Daniel Sauter U.S. Coast Guard ](<https://www.linkedin.com/in/daniel-sauter-13341825/>) [ ![Randall Shore](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Randall Shore Kion ](<https://www.linkedin.com/in/randallshore/>) [ ![Tatum Tummins](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Tatum Tummins Kion ](<https://www.linkedin.com/in/tatum-tummins-45513986/>)

Last updated: October 9, 2025

## Table of Contents

  * [Introduction](<#introduction>)
  * [Objectives of This Playbook](<#objectives>)
  * [Prerequisites](<#prerequisites>)
  * [Authority to Operate (ATO) Overview](<#authority-to-operate-overview>)
  * [Data Impacts on FinOps Tool ATOs](<#data-impacts-on-finops-tool-atos>)
  * [Who Needs to be Involved](<#who-needs-to-be-involved>)
  * [FinOps Tool ATO Plays](<#finops-tool-ato-plays>)
  * [ATO Considerations and Challenges for FinOps Tools](<#ato-considerations-and-challenges-finops-tools>)
  * [Glossary](<#glossary>)
  * [Appendix A – References](<#appendix>)
  * [Acknowledgments](<#acknowledgments>)

###### [Learn the fundamentals Level up your knowledge with FinOps Certified Practitioner Get started  ![Learn the fundamentals](https://www.finops.org/wp-content/uploads/2025/12/certified-practitioner.svg) ](<https://learn.finops.org/path/finops-certified-practitioner-self-paced>)

##### Related FinOps Capabilities

[ Budgeting ](<https://www.finops.org/framework/capabilities/budgeting/>) [ Invoicing & Chargeback ](<https://www.finops.org/framework/capabilities/invoicing-chargeback/>) [ Governance, Policy & Risk ](<https://www.finops.org/framework/capabilities/governance-policy-risk/>)
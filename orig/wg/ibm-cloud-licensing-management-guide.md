# IBM Cloud Licensing Management Guide

**Summary:** Improve management of IBM Cloud licensing by synchronizing software asset management (SAM) with cloud consumption to ensure compliance and cost optimization across hybrid environments. This process requires a unified visibility approach, linking IBM license entitlements (such as PVU or VPC metrics) with real-time cloud usage data to prevent “double-pay” scenarios and audit exposure. FinOps Practitioners should establishing clear ownership and automated governance agents to proactively re-harvest unused licenses and align procurement with actual demand signals.

## Table of Contents

  * [Understanding IBM licensing](<#understanding-ibm-licensing>)
  * [Bring Your Own License strategy](<#byol-strategy>)
  * [Maintaining compliance](<#maintaining-compliance>)
  * [IBM Cloud Paks licensing guide](<#ibm-cloud-paks>)
  * [Glossary of key terms](<#glossary>)
  * [Resources](<#resources>)
  * [Acknowledgments](<#acknowledgments>)

This guide serves as an essential resource for professionals navigating the intricacies of software licensing involving IBM Cloud Platform and its services. With the ever-evolving landscape of cloud computing, managing licenses efficiently and compliantly is paramount. Read on to gain clarity on foundational concepts and advanced strategies and will ensure that readers are well-equipped to implement best practices in real-world scenarios.

### Scope

This guide specifically targets the IBM Cloud platform, focusing on its unique licensing structures, challenges, and opportunities. It’s designed for professionals who are either already engaged with or are considering adopting IBM Cloud for their business operations, ensuring they harness the full potential of their software investments.

## Understanding IBM licensing

### Overview

This is a comprehensive guide on IBM software licensing for FinOps and ITAM practitioners. The guide provides a structured 12-week process that covers everything from initial audits to compliance checks and ongoing monitoring. Understanding IBM licensing allows you to optimize cloud and software expenses, mitigate compliance risks, and align your IT assets more effectively with your business objectives. This guide is a strategic asset designed to empower you to make informed decisions that will benefit your organization on multiple fronts.

### Steps for understanding IBM licensing

This guide offers FinOps and ITAM practitioners a streamlined 12-week process to navigate IBM licensing. Starting with an in-depth audit, it covers license classification, metric understanding, and compliance checks. The goal is to optimize resource use and maintain compliance. Collaboration across departments will lead to a solid Software Asset Management (SAM) strategy. The journey concludes with the deployment of monitoring tools and comprehensive training, ensuring a proficient grasp of IBM Cloud Licensing.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201999%20674'%3E%3C/svg%3E)

**Step 1: Audit Current IBM Licenses (L1)**

  * **Description:** Catalog all existing IBM licenses and their terms.
  * **Owner:** ITAM Practitioner
  * **Duration:** Week 1
  * **Acceptance Criteria:** A comprehensive list of all IBM licenses with their terms.
  * **Action:** Use IBM License Metric Tool (ILMT) for this audit.
  * **Reason:** To avoid duplication, identify gaps, and understand the current licensing landscape.

**Step 2: Classify License Types**

  * **Description:** Understand the nature of each license.
  * **Owner:** FinOps Practitioner
  * **Duration:** Week 2
  * **Acceptance Criteria:** A classified list of licenses as Perpetual or Term with expiration dates.
  * **Action:** Use a spreadsheet or asset management software.
  * **Reason:** Different license types have distinct financial and compliance implications.

**Step 3: Review IBM Licensing Metrics**

  * **Description:** Grasp licensing metrics and their relevance.
  * **Owner:** FinOps Practitioner
  * **Duration:** Week 3-4
  * **Acceptance Criteria:** Clear understanding of metrics like UVU (User Value Unit), PVU (Processor Value Unit), and their application.
  * **Action:** Consult IBM’s official documentation; consider engaging an IBM expert.
  * **Reason:** To avoid unexpected costs and non-compliance due to metric misunderstandings.

**Step 4: Compliance Check**

  * **Description:** Ensure adherence to license metrics and terms.
  * **Owner:** ITAM Practitioner
  * **Duration:** Week 5
  * **Acceptance Criteria:** A report confirming compliance with all license terms.
  * **Action:** Use IBM License Metric Tool (ILMT).
  * **Reason:** Regular checks prevent legal complications and financial penalties.

**Step 5: Identify Gaps and Overlaps**

  * **Description:** Spot any inefficiencies or non-compliance risks in licensing.
  * **Owner:** FinOps Practitioner
  * **Duration:** Week 6
  * **Acceptance Criteria:** A list of identified license overlaps or gaps.
  * **Action:** Use a spreadsheet or asset management software.
  * **Reason:** To optimize resources and ensure compliance.

**Step 6: Develop a SAM Strategy**

  * **Description:** Formulate a strategy for effective Software Asset Management.
  * **Owner:** Multi-departmental (FinOps, ITAM, Legal, Procurement, CTO/CIO)
  * **Duration:** Week 7-8
  * **Acceptance Criteria:** A well-documented SAM strategy ready for implementation.
  * **Action:** Utilize project management software for task tracking.
  * **Reason:** Align licensing efforts with business objectives.

**Step 7: Implement Monitoring Tools**

  * **Description:** Set up tools for continuous license monitoring.
  * **Owner:** IT Operations
  * **Duration:** Week 9-10
  * **Acceptance Criteria:** Successfully implemented and fine-tuned IBM-approved monitoring tools.
  * **Action:** Use IBM License Metric Tool (ILMT) and other approved tools.
  * **Reason:** Proactive software asset management.

**Step 8: Training and Documentation**

  * **Description:** Educate the team and document the process.
  * **Owner:** Both FinOps and ITAM Practitioners
  * **Duration:** Week 11-12
  * **Acceptance Criteria:** Completed training sessions and a comprehensive documentation set.
  * **Action:** Use internal training modules and documentation platforms.
  * **Reason:** An informed team ensures fewer mistakes, and documentation aids future audits.

### Licensing review and update cycle

  * **Description:** Assess the effectiveness of the current Software Asset Management (SAM) strategy.
  * **Owner:** Both FinOps and ITAM Practitioners
  * **Duration:** Every Quarter
  * **Acceptance Criteria:** A comprehensive review report highlighting the effectiveness and areas of improvement for the SAM strategy.
  * **Action:** Analyze quarterly reports and convene meetings to discuss findings.
  * **Reason:** Regular reviews ensure the SAM strategy remains aligned with evolving business needs and licensing changes.

## BYOL strategy (Bring Your Own License)

### Overview

To get the most out of an organization’s existing investments in IBM, IBM allows customers to use, under certain circumstances, their perpetual or term license in the public cloud. IBM describes the policy under which this is allowed as the “The Eligible Public Cloud Bring Your Own Software License (BYOSL) policy”. [IBM Passport Advantage – Eligible Public Cloud BYOSL policy](<https://www.ibm.com/software/passportadvantage/eligible_public_cloud_BYOSL_policy.html>)

Many organizations have made large investments in on-premises tools and applications by purchasing Perpetual or Term software licenses. Not leveraging the existing license entitlements when migrating a workload from on-premises to the cloud would often lead to organizations duplicating the cost of a software solution. The goal would be to use BYOL for licenses under active support to migrate these licenses to the public cloud environment, where appropriate, and avoid paying additional on-demand fees to cover the IBM license fees.

Many organizations have excess IBM licenses that were historically purchased for workloads that may have been retired since. These excess licenses may be available to use as BYOL for workloads that may have been created/born in the cloud computing environment. By using excess licenses that the organization owns and has under active support, the organization may avoid paying additional on-demand fees to cover IBM licenses.

### Assessing BYOL feasibility

**Step 1: Evaluate License Cost Effectiveness**

  * **Description:** Determine if BYOSL enhances the cost-effectiveness of the solution.
  * **Owner:** FinOps Practitioner working with ITAM Practitioner
  * **Duration:** 2 days
  * **Acceptance Criteria:** A clear comparison report between current IBM license costs and potential BYOSL costs.
  * **Action:** Compare the current IBM license cost with potential BYOSL costs.

**Step 1.1: Extract Current IBM License Cost**

  * **Description:** Understand the current licensing expenses for the solution.
  * **Owner:** FinOps Practitioner
  * **Duration:** 3 days
  * **Acceptance Criteria:** A detailed breakdown of current IBM licensing costs from the CUR.
  * **Action:** Run the provided query on your CUR (AWS, Azure, Google, etc.).

**Step 1.2: Calculate Monthly and Annual IBM Cloud License Costs**

  * **Description:** Break down the costs to understand monthly and annual expenses.
  * **Owner:** FinOps Practitioner
  * **Duration:** 1 day
  * **Acceptance Criteria:** Monthly and yearly IBM license cost reports.
  * **Action:** Use the query results to determine monthly and yearly IBM license costs.

**Step 1.3: Determine BYOL Requirement**

  * **Description:** Understand the licensing needs for the workload.
  * **Owner:** ITAM Practitioner
  * **Duration:** 2 days
  * **Acceptance Criteria:** A documented BYOL requirement for the workload.
  * **Action:** Refer to Public Cloud – IBM’s “Bring Your Own Software License” Policy for examples.

**Step 1.4: Determine BYOL Costs and Availability**

  * **Description:** Gain insights into available licenses and support levels.
  * **Owner:** ITAM Practitioner
  * **Duration:** 1 week
  * **Acceptance Criteria:** A detailed report on available licenses, support levels, and associated costs.
  * **Action:** Request an IBM ELP and Renewal Agreements/Invoices.

**Step 2: Analyze BYOL Benefits**

  * **Description:** Understand the advantages of BYOL.
  * **Owner:** FinOps and ITAM Practitioner
  * **Duration:** 2 days
  * **Acceptance Criteria:** A cost-benefit analysis report on using BYOL.
  * **Action:** Compare renewal invoices (annual) with hourly/monthly usage converted to annual costs.

**Step 3: Seek ITAM Practitioner Compliance Advice**

  * **Description:** Get expert insights on compliance requirements.
  * **Owner:** FinOps Practitioner
  * **Duration:** 1 week
  * **Acceptance Criteria:** A detailed list of compliance requirements and necessary software
  * **Action:** Request advice from ITAM Practitioner on requirements and tooling to ensure compliance.

**Step 4: Evaluate Compliance for BYOSL**

  * **Description:** Understand the compliance landscape when using BYOSL.
  * **Owner:** FinOps and ITAM Practitioner
  * **Duration:** 3 days
  * **Acceptance Criteria:** A list of processes and guidelines to maintain compliance with BYOSL.
  * **Action:** Determine processes needed to maintain compliance with BYOSL.

**Step 5: Technical Feasibility Check**

  * **Description:** Ensure that the required software can be installed in the cloud.
  * **Owner:** Engineering and Operations
  * **Duration:** 1 week
  * **Acceptance Criteria:** Successful installation and testing of required software in the cloud environment.
  * **Action:** The technical team tests the installation feasibility of the software in the cloud environment.

### Implementing BYOL on IBM Cloud

**Step 1: Assess Current Licenses**

  * **Description** : Before transitioning to the cloud, get a clear snapshot of the licenses you currently own to ensure a smooth migration.
  * **Owner** : ITAM Practitioner
  * **Duration** : 1 week
  * **Acceptance Criteria** : A comprehensive list of all existing software licenses, including terms, expiration dates, and restrictions.

**Step 2: Understand IBM Cloud’s BYOL Policies**

  *     * **Description** : Familiarize yourself with IBM Cloud’s specific guidelines for BYOL to avoid potential pitfalls during the transition.
    * **Owner** : FinOps and ITAM Practitioner
    * **Duration** : 3 days

  * **Acceptance Criteria** : A documented understanding of IBM Cloud’s BYOL guidelines and requirements, with potential issues highlighted.

**Step 3: Plan the Deployment**

  * **Description** : Create a structured plan for deploying software on IBM Cloud, prioritizing core business applications and considering dependencies.
  * **Owner** : Engineering and Operations
  * **Duration** : 1 week
  * **Acceptance Criteria** : A structured deployment plan, detailing the order of software deployment, considering dependencies and business priorities.

**Step 4: Test Before Full Deployment**

  * **Description** : Ensure that the software functions correctly in the cloud environment by testing in a controlled staging setup.
  * **Owner** : Engineering and Operations
  * **Duration** : 2 weeks
  * **Acceptance Criteria** : Successful tests in the staging environment, with all software functioning as expected.

**Step 5: Monitor & Adjust**

  * **Description** : Continuously monitor software usage to ensure compliance with license terms and adjust as business needs evolve.
  * **Owner** : FinOps Practitioner (cloud costs), ITAM Practitioner (license deployment),  
Engineering and Operations (adjustments)
  * **Duration** : Ongoing
  * **Acceptance Criteria** : Continuous monitoring setup with alerts for any potential license breaches.

## Maintaining compliance

### Getting audit ready

Upon receiving an audit letter, there is often the assumption that because you have been using IBM License Metric Tool (ILMT), you are covered for license compliance.

Unfortunately, without having an IBM Licensing export, SAM vendor or SAM product installed, non-compliance is often only discovered during the vendor audit. This regularly leads to unexpected costs and possible penalties as some cloud service providers may request the purchase of what they think are the right licenses and payment of retrospective maintenance.

### Steps to prepare for an audit

**Step 1: Assemble Your Team**

  * **Description:** Gather experts who understand licensing nuances, tool coverage, and configurations.
  * **Owner:** Project Manager
  * **Duration:** 1 week
  * **Acceptance Criteria:** A fully assembled team with clear roles and responsibilities.
  * **Action:** Bring together Internal Software Asset Managers, Discovery & SAM Tool Admins, ILMT/HCL BigFix Inventory Admins, and relevant stakeholders.

**Step 2: Review Your Entitlements**

  * **Description:** Understand your licensing landscape.
  * **Owner:** Software Asset Manager
  * **Duration:** 3 days
  * **Acceptance Criteria:** A comprehensive report detailing all license entitlements.
  * **Action:** Utilize Passport Advantage Online (PA Online) to gain insights into your entitlements.

**Step 3: Understand Licensing Terms**

  * **Description:** Familiarize yourself with the rules of the game.
  * **Owner:** Legal & Compliance Team
  * **Duration:** 1 week
  * **Acceptance Criteria:** A documented understanding of all licensing terms from various agreements.
  * **Action:** Review Agreements and Contracts, License Information Documents, and Enterprise Agreements.

**Step 4: Highlight Risk Areas**

  * **Description:** Identify potential trouble spots in your licensing.
  * **Owner:** Risk Management Team
  * **Duration:** 4 days
  * **Acceptance Criteria:** A list of identified risk areas with potential solutions or mitigation strategies.
  * **Action:** Focus on known risk areas, data inaccuracies, and high-value products.

**Step 5: Gather Necessary Data**

  * **Description:** Determine the data required for a comprehensive audit.
  * **Owner:** ITAM Team & SAM Tool Admins
  * **Duration:** 2 weeks
  * **Acceptance Criteria:** A dataset ready for analysis, including hardware and software details.
  * **Action:** Use SAM tools, IBM License Metric Tool, BigFix Inventory, and other resources to collect data.

**Step 6: Analyze License Consumption**

  * **Description:** Compare actual usage against entitlements.
  * **Owner:** Financial Analyst
  * **Duration:** 1 week
  * **Acceptance Criteria:** A report highlighting any discrepancies between actual usage and entitlements.
  * **Action:** Measure the collected data against your entitlements.

### Implement compliance monitoring tools

**Objective**

To ensure continuous monitoring of IBM software licensing compliance across the organization’s IT infrastructure.

**Tools & Technologies**

  * IBM License Metric Tool (ILMT)
  * Software Asset Management (SAM) Tools
  * IBM License Service

**Process**

**Initial Setup** | **Data Points** | **Data Sources** | **Continuous Monitoring** | **Alerts**  
---|---|---|---|---  
Install and configure IBM License Metric Tool (ILMT) for monitoring software metrics. | Identify key data points such as machine name, environment, and processor details. | Utilize multiple data sources like Active Directory, LDAP records, and CMDB for comprehensive monitoring. | Set up automated scans and reports to continuously monitor license consumption. | Implement real-time alerts for any discrepancies or non-compliance issues.  

### Conduct regular audits

**Objective**

To perform internal audits that ensure the organization is compliant with IBM software licensing agreements.

**Tools & Technologies**

  * Internal Software Asset Managers
  * Discovery & SAM Tool Admins
  * Legal Team

**Process**

**Planning** | **Data Collection** | **Analysis** | **Reporting** | **Review**  
---|---|---|---|---  
Identify people, departments, and tools. | Use SAM tools and ILMT to collect data. | Compare data against entitlements and licensing terms. | Generate a comprehensive report. | Conduct a review meeting.  

### Address non-compliance issues

**Objective**

To promptly address any issues of non-compliance identified during audits or monitoring.

**Tools & Technologies**

  * Incident Management System
  * IBM Contract Owners
  * Legal Team

**Process**

**Identification** | **Notification** | **Resolution Plan** | **Implementation** | **Documentation**  
---|---|---|---|---  
Clearly identify the non-compliance issues. | Notify the concerned departments and stakeholders. | Develop a plan to resolve the non-compliance issues. | Execute the plan and monitor its effectiveness. | Update all records and documentation to reflect the changes made.  

### Stay updated on regulations

**Objective**

To keep abreast of any changes in legal or regulatory requirements related to IBM software licensing.

**Tools & Technologies**

  * Legal Team
  * Compliance Officers
  * IBM Resellers

**Process**

**Monitoring** | **Communication** | **Training** | **Documentation** | **Review**  
---|---|---|---|---  
Regularly monitor IBM updates and legal changes related to software licensing. | Establish a communication channel with IBM representatives for real-time updates. | Conduct regular training sessions for staff to update them on new regulations. | Keep all licensing agreements and documentation up to date. | Periodically review the compliance status in light of new regulations.  

## IBM Cloud Paks licensing guide

### Overview

Cloud Paks are suites of IBM programs which provide solutions to solve client needs. Cloud Paks are primarily intended to be used on Kubernetes-orchestrated container platforms but can be deployed on traditional virtualization environments or as a hybrid deployment that spans both options.

A completely flexible offering, each client can tailor their level of use of each component program to suit their needs. However, the overall contribution of each component to the Cloud Pak entitlement needs to be carefully monitored.

## Glossary of key terms

  * **Activated Processor Core:** A processor core that has been allocated and is available for use by an IBM program. This term is essential for understanding licensing requirements.
  * **Audit** : A licensing verification activity initiated by IBM to determine a client’s compliance with IBM’s licensing terms
  * **Bring Your Own Software License (BYOSL)** : An IBM policy which permits clients to deploy their on-premise licenses in eligible public cloud offerings
  * **Cartridge Licenses:** Additional, optional services that can be integrated into the Cloud Pak for Data. These can be deployed in a containerized environment or as standalone applications.
  * **Container:** A standalone, executable software package that includes everything needed to run a piece of software, including the code, runtime, system tools, and libraries.
  * **Container Licensing** : Methodology to measure consumption of licenses only for the virtual CPUs used by containerized software on Kubernetes-orchestrated container platforms. Use of IBM License Service is mandatory to qualify for container licensing.
  * **Dual Deployment:** The capability to deploy Cloud Paks on both containerized platforms and traditional virtualization environments, offering flexibility in implementation.
  * **Eligible Public Cloud (EPC)** : A public cloud offering which IBM has deemed to be eligible for the BYOSL policy as specified on this page.
  * **Effective License Position (ELP)** : Refers to an organization’s software licensing compliance position. An ELP is essentially a reconciliation of your current license entitlement against your current software consumption.
  * **Full-Capacity License** : With full-capacity licensing, customers are required to obtain license entitlements for all activated processor cores in the server, regardless of how the software was deployed.
  * **Discovery Tools** : Tools with more limited functionality than SAM tools, typically capable of discovering attributes of hardware and software deployed.
  * **IBM Certified Containers** : IBM Certified Containers meet standard criteria for packaging and deployment of containerized software with platform integrations and can be run on any supported Kubernetes orchestration environment anywhere (desktops, traditional IT infrastructures or cloud).
  * **IBM Cloud Paks:** Comprehensive solutions that combine multiple IBM programs to address specific business needs. These are designed for deployment on Kubernetes-orchestrated platforms as well as traditional virtualization environments.
  * **IBM License Metric Tool (ILMT)** : Helps you manage license allocation services on supported systems. ILMT recognizes and monitors the products that are in use on your system.
  * **IBM License Service** : Compulsory tool for license usage tracking and reporting for IBM container licensing.
  * **IBM License Service Reporter** : An IBM tool used to aggregate the license count from IBM License Service installations across multiple Kubernetes clusters. IBM License Metric Tool (ILMT) installations can also be an input and be consolidated into the report to present license consumption across both container and traditional virtual environments.
  * **License Ratio:** A specified ratio that indicates the number of Cloud Pak licenses required for each individual program within the bundle. This ratio is essential for calculating the total number of Cloud Pak licenses needed.
  * **Red Hat OpenShift:** An enterprise Kubernetes platform that is included with Cloud Pak licenses, providing a robust environment for container orchestration.
  * **Software Asset Management (SAM) Tool** : An application used to automate the discovery, measurement and recording of license consumption and reconciliation to entitlements.
  * **Sub-Capacity License** : Sub-capacity licensing lets you license a core-based software program for less than the full processor core capacity of the server when the software program is deployed in an eligible virtualization environment. IBM will sometimes refer to its “Sub-capacity” offering as “Virtualization Capacity” or “Virtualization Licensing.
  * **S &S**: Software and Support
  * **Traditional Virtualization:** A conventional method of running software applications on virtual machines, as opposed to modern containerized environments.
  * **UVU (User Value Unit)** : A licensing metric used by IBM to determine the number of authorized users accessing a particular software. Typically employed for software products where user-based licensing is more appropriate than capacity-based licensing.
  * **Kubernetes:** An open-source platform designed to automate the deployment, scaling, and management of containerized applications. It serves as the orchestration layer for containers.
  * **Virtualization Capacity** : Methodology to measure consumption of licenses only for the CPU cores consumed by the virtual environment(s) where the IBM program is installed. The alternative is Full-Capacity, in which license consumption is calculated based on the full processing capacity of the physical machine or infrastructure.
  * **PVU (Processor Value Unit)** : A licensing metric introduced by IBM to standardize software licensing across different processor technologies. PVUs are calculated based on the type and number of processors used in the server where the software is installed, with each processor type having a specific PVU value assigned by IBM.
  * **Virtual Processor Core (VPC):** A unit of measure used to quantify the processing capacity allocated to an IBM program. This is a critical metric for licensing compliance.

### Scenario 1: Cloud Paks and Virtualization Capacity

**Objective**

To accurately calculate the number of Cloud Pak licenses required when deploying Bundled Programs in traditional virtual environments.

**Step 1: Count License Requirement for Each Bundled Program**

  * Across all machines, tally up the license requirements for each Bundled Program you intend to deploy.

**Step 2: Apply Cloud Pak Conversion Ratio**

  * For each Bundled Program, apply the specific Cloud Pak conversion ratio to calculate the required number of Cloud Pak licenses.

**Step 3: Aggregate Cloud Pak Licenses**

  * Sum up the converted license requirements from Step 2 to arrive at the total number of Cloud Pak licenses needed.

### Scenario 2: Cloud Paks and container licensing

**Objective**

To accurately determine the total number of Cloud Pak licenses required when deploying Bundled Programs in a Kubernetes-orchestrated container environment.

**Step 1: Count License Requirement for Each Bundled Program**

  * Across all containerized environments, tally up the license requirements for each Bundled Program you intend to deploy.

**Step 2: Apply Cloud Pak Conversion Ratio**

  * For each Bundled Program, apply the specific Cloud Pak conversion ratio to calculate the required number of Cloud Pak licenses.

**Step 3: Aggregate Cloud Pak Licenses**

  * Sum up the converted license requirements from Step 2 to arrive at the total number of Cloud Pak licenses needed.

### Scenario 3: Hybrid deployments – Mixing PVU and VPC licenses

**Objective**

To understand the licensing requirements when you have existing PVU licenses for an IBM program, which is also part of an IBM Cloud Pak under the VPC metric.

**Step 1: Identify Existing PVU Licenses**

  * Take stock of all existing PVU licenses for IBM programs that are also part of an IBM Cloud Pak.

**Step 2: Apply Cloud Pak Conversion Ratio**

  * For each of these programs, apply the specific Cloud Pak conversion ratio to calculate the required number of Cloud Pak licenses under the VPC metric.

**Step 3: Review License Mixing Rules**

  * Understand that you can mix license entitlements within your IT estate, but you cannot apply both PVU and Cloud Pak VPC licenses simultaneously to cover a single instance.

**Step 4: Aggregate Cloud Pak Licenses**

  * Sum up the converted license requirements from Step 2 to arrive at the total number of Cloud Pak licenses needed under the VPC metric.

### Scenario 4: Sharing the Red Hat OpenShift Container Platform (RHOCP) across multiple Cloud Paks

RHOCP is included as a ‘restricted’ entitlement in all Cloud Paks except Cloud Pak for Applications (where it is included as an unrestricted entitlement). This means that the platform can only be used to support the running of a specific Cloud Pak and its Bundled Programs and components. You are not permitted to use these RHOCP entitlements for any other use without additional RHOCP licenses being required.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201999%201275'%3E%3C/svg%3E)

Image credit: IBM, 2023 (<https://www.ibm.com/about/software-licensing/assets/guides_pdf/CloudPaks.pdf>)

If you need to deploy multiple IBM Cloud Paks and you also wish to use the granted RHOCP license entitlements for your clusters, you must configure your environment in line with one of the following options to ensure that you remain compliant with your “restricted” RHOCP entitlement:

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201704%201626'%3E%3C/svg%3E)

Image credit: IBM, 2023 (<https://www.ibm.com/about/software-licensing/assets/guides_pdf/CloudPaks.pdf>)

## IBM resources

  * IBM Reference: <https://www.ibm.com/about/software-licensing/us-en>
  * Preparing for an audit: <https://www.ibm.com/about/software-licensing/assets/guides_pdf/Audit.pdf>

## Acknowledgments

We’d like to thank the following people for their contributions to the Working Group and this asset.

[ ![Amy Ashby](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amy Ashby Under Armour ](<https://www.linkedin.com/in/amyashbymke/>) [ ![Brian McCumber](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Brian McCumber Tech Money Talks ](<https://www.linkedin.com/in/brianmccumber/>) [ ![Salomé Keet](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Salomé Keet FNB South Africa ](<https://www.linkedin.com/in/salom%C3%A9-keet-ba2522a/>) [ ![Jenn Darkazalli](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jenn Darkazalli IBM ](<https://www.linkedin.com/in/jenndark/>) [ ![Darren Moura-Smith](https://www.finops.org/wp-content/uploads/2022/10/persona-product.svg) Darren Moura-Smith IBM ](<https://www.linkedin.com/in/darren-moura-smith-a8358540/>)

We would also like to thank our TAC Liaison, Kim Wier, and our Supporters, Colin Jack, Gregory Brinkerhoff, George Arzenia, Peter Schmidhofer, Amit Doshi, Chris Rininger, Kris Wong, and Ron Brill.

Last updated: March 17, 2026

## Table of Contents

  * [Understanding IBM licensing](<#understanding-ibm-licensing>)
  * [Bring Your Own License strategy](<#byol-strategy>)
  * [Maintaining compliance](<#maintaining-compliance>)
  * [IBM Cloud Paks licensing guide](<#ibm-cloud-paks>)
  * [Glossary of key terms](<#glossary>)
  * [Resources](<#resources>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ Licensing & SaaS ](<https://www.finops.org/framework/capabilities/licensing-saas/>)
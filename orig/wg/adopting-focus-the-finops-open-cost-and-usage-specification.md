# Adopting FOCUS, the FinOps Open Cost and Usage Specification

**Summary:** FOCUS™ (FinOps Open Cost and Usage Specification) is an open specification that normalizes billing datasets across cloud, SaaS, data center, and other technology vendors to reduce complexity for FinOps Practitioners. Adoption begins with assessing your organizational needs against the benefits of FOCUS to build a strong business case. Assemble a cross-functional team and design the technical solution for ingesting, transforming, and storing FOCUS-formatted billing data, ensuring it complies with security standards and integrates with existing reporting tools. Build, test, and launch your initial project to start normalizing technology billing data under one effective schema.

## On this page

  * [Decide](<#decide>)
  * [Design](<#design>)
  * [Build](<#build>)
  * [Test](<#test>)
  * [Launch](<#launch>)
  * [Related Resources](<#related-resources>)
  * [Appendix](<#appendix-a>)
  * [Acknowledgments](<#acknowledgments>)

Organizations need timely and accurate billing data to inform decisions on driving maximum value from technology investments. Consolidating and normalizing disparate technology billing data is a universal challenge. [FinOps Open Cost and Usage Specification](<https://focus.finops.org/>) (FOCUS™) is an open technical specification for technology billing data, serving as the unifying format for billing with a goal of solving the challenge of normalizing data from multiple sources.

Individual organizations may have different motivators for and approaches to FOCUS adoption, yet the journey to FOCUS adoption typically consists of these stages: Decide, Design, Build, Test, and Launch (as shown below):

![](https://www.finops.org/wp-content/uploads/2024/10/adopting-focus-1.png)

These stages may overlap, reoccur, and take varying amounts of time. For example, an organization may build, test, rebuild, and test several more times before moving on to launch. During each stage, there are key actions likely to occur designating key milestones in the FOCUS adoption journey. These milestones may also take place at varying points in the adoption process as it best suits each individual organization.

This paper helps individuals and organizations understand the stages of FOCUS adoption, what decisions and considerations are to be made along the way, and provides guidance on the specific steps to take to adopt FOCUS. This paper is best suited for individuals and organizations with a basic understanding of FOCUS. For more information on FOCUS see the below resources.

  * [Check out available billing data sources from technology providers](<https://focus.finops.org/get-started/>)
  * [Take the Introduction to FOCUS course](<https://learn.finops.org/introduction-to-focus>)
  * [Get the latest specification information on FOCUS](<https://focus.finops.org/focus-specification/>)
  * [See how organizations adopt and use FOCUS](<https://focus.finops.org/adoption/finops-practitioners/>)

## Decide

The _Decide_ stage is about determining when FOCUS adoption is right for your organization. During this stage, it is important to deepen your familiarity with FOCUS™, its benefits, and the related current and future needs of your organization. Decisions need to be made about the timing and scope of the adoption to align with available resources to support the effort.

### Assess organizational needs against the benefits of FOCUS™

The decision to adopt FOCUS is most often driven by the need to solve pre-existing billing data normalization issues across multiple technology providers. FOCUS adoption reduces the time spent on data collection and normalization and enables organizations to redirect that time and energy toward other [capabilities](<https://www.finops.org/framework/capabilities/>). Yet the decision to adopt FOCUS could be driven by any number of factors as a result of a needs-based assessment.

The below table describes the various benefits of adopting FOCUS™. An organization that faces challenges in any of the following areas should consider FOCUS adoption as a solution for overcoming the obstacle. Organizations assessing the need for FOCUS adoption should consider both present and future needs in combination with timing of and resources to support adoption.

**BENEFIT** | **DESCRIPTION**  
---|---  
Multi-vendor data-driven decision making | FOCUS enables consistent reporting across vendors through data normalization, enabling Leadership to analyze the whole environment instead of looking at each technology type or vendor in a silo. With better data, better decisions can be made, and goals can be met faster.  
Reduced complexity of billing files | A single set of columns applies across all of an organization’s technology billing data, even in a multi-vendor environment. This means FinOps Practitioners have a lot less terminology to learn and simpler data ingestion processes.  
Improved reporting consistency and accuracy | Standardizing billing files in a consistent format reduces the chances of inaccurate reporting due to discrepancies in terminology and definitions of columns across external vendors or across internal groups.  
Easier integration of new vendors | FOCUS helps to future-proof your organization with changes to vendors. When a new technology provider or tooling vendor is added to the organizational ecosystem, the organization already has a defined format to transform the data into. No time is spent figuring out what format to transform the data into for seamless integration with other data sources.  
Increased innovation | With better understanding of the value of a technology investment, the path is cleared for using more of thosed offerings to drive innovation and business growth. FOCUS enables organizations to access normalized data in a timely manner, which in turn provides the opportunity to leverage the time saved for strategic asset innovation.  
Cheaper to process data | FOCUS combines actual billed costs and amortized costs into one dataset, drastically reducing the cost of compute and storage needed to process this data.  
Transferable knowledge & skills | With FOCUS, practitioners can learn a single process to perform a FinOps activity. This leads to faster time to value, which pays off for both the practitioner and their organization. 

  * Job mobility – Practitioners can transition between companies without having to learn a new normalization scheme.
  * Business continuity – New hires that join as FinOps Practitioners are already familiar with FOCUS™, so organizations do not have to train them on normalizing billing data.
  * Tool flexibility – FOCUS provides a single set of columns which are transferable across technology and third-party tool providers which make it easy for individuals to adjust to changing providers as organizations adjust their toolkits over time.

Common language with external peers | With FOCUS, organizations are able to discuss FinOps with other organizations which have adopted FOCUS using common terms with a common understanding across different technology and tooling vendors each organization may be using.  

### Determine Scope & Approach to Organizational Adoption

Organizations must determine the scope of FOCUS adoption. There are generally three approaches:

  1. **Small-Scale Adoption:** Adopting FOCUS for a single unit or few units of the business and/or adopting FOCUS for a single report or a few reporting initiatives. With this approach much of the organization nor the majority of the organization’s reporting initiatives utilize FOCUS™.
  2. **Large-Scale Adoption:** Adopting FOCUS across all (or nearly all) business units and/or adopting FOCUS for all or nearly all related reporting initiatives at use in the organization. With this approach much of the organization uses FOCUS™.
  3. **Blended-Scale Adoption:** combining the above approaches by starting small for all business units or starting big for a small portion of the organization.

Organizations should give careful consideration to each approach. Small scale adoption serves as a strong starting point for expanding organizational adoption at a later time. Large scale adoption allows for a swift transition for the whole organization yet requires a smooth delivery of the new solution as many people will be scrutinizing the changes. Blended scale adoption provides a great degree of flexibility to suit the needs of an organization and also lends itself to additional scope creep risk.

### Get Approval

Some organizations, particularly larger organizations, will require formal approval for FOCUS adoption. Such processes may require business cases, ticket submission, executive signoff, etc. Individuals driving FOCUS adoption for organizations need to be aware of such procedural protocols. Furthermore, some organizations will have similar procedural hoops to jump through for the execution of FOCUS adoption as it pertains to IAM permissions and accessing FOCUS data after the decision to adopt has been made.

When seeking approval to adopt FOCUS it is important to clarify:

  * What FOCUS is and how it will benefit the organization 
    * Tip: Many early FOCUS adoptions found it helpful to tie FOCUS adoption to a KPI. For example, with FOCUS we will be able to increase our direct cost allocation from 25% to +80% in three months time.
  * The scope and approach to FOCUS adoption 
    * introduce/overview the resources needed to support adoption
    * Discuss the timing of adoption

If the decision is made to not proceed with formal FOCUS adoption it may just mean that the FOCUS adoption journey continues informally as a grassroots effort or is delayed until a later time. FOCUS may still be accessible and used by some members of the organization but not all/widespread.

### Key Actions

In addition to the major activities of the Decide stage, the below are key actions often taken during this stage.

  * Read the [FOCUS website](<https://focus.finops.org/>) and check out the [FOCUS Column Library](<https://focus.finops.org/focus-columns/>), the [Specification](<https://focus.finops.org/focus-specification/>), and the [Use Case Library](<https://focus.finops.org/use-cases/>) to better understand FOCUS™.
  * Take the free [Introduction to FOCUS™](<https://learn.finops.org/introduction-to-focus>) course and the [Certified FOCUS Analyst](<https://learn.finops.org/finops-certified-focus-analyst-certification>) course to solidify your general understanding of FOCUS™

---  

## Design

### Assemble a team

Adopting FOCUS is an effort that requires the involvement of many people. During the Decide stage, a FOCUS adoption team may have already started to form, but with the official decision to adopt it is best practice to form a team of individuals to drive the FOCUS adoption effort. Those a part of the team should have a strong understanding of FOCUS (see [FOCUS informational resources](<#focus-informational-resources>) for more info), represent a wide variety of organizational members with an interest in accessing and using FOCUS data. Listed below are role types of individuals you may consider to join the project team and a short description of their interest in FOCUS adoption.

  * FinOps Practitioners – Regularly utilizes cost and usage data for forecasting, optimization, reporting efforts and more.
  * Data and Information Architects – Resident experts for designing the architecture to seamlessly integrate and manage consistent billing data within the organization’s systems.
  * Product and Project Managers – Consumers of cost and usage data to inform decision making to ensure alignment with project goals and timelines.
  * Engineers – Generate technology consumption in support of the organization and its salable products and services and consume related cost and usage data to inform decision making.
  * Procurement and Finance teams – Leverage billing data for forecasting, budgeting, and accounting purposes and for management of contractual relationships with technology providers.
  * Business Intelligence Developers and Analysts – Resident exports in creating insightful analytics and reports, driving data-informed decision-making from FOCUS datasets.
  * Security – Ensure that the adoption of FOCUS complies with security standards and protects sensitive financial data.

Members of the assembled team will then drive all subsequent steps in the FOCUS adoption journey from the technical solution to the process of organizational adoption and beyond.

### Design/Plan the technical solution

Leverage the collective expertise of the project team to map out the technical solution for adopting FOCUS™. This will include conducting research and making decisions about:

  * Where to source the FOCUS data from
  * How much historical data you want to transform to align with FOCUS (and whether not the selected source of FOCUS data can accommodate doing so)
  * How to solve for any additional custom data enrichment requirements, if present
  * Where this data will be stored
  * How this data will be accessed & used by the organization

The below image depicts a generic FOCUS adoption architecture plan. See [Appendix A](<#appendix-a>) for architecture plans used by early FOCUS adopters.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201280%20212'%3E%3C/svg%3E)

#### Where are you sourcing your FOCUS data from?

Technology providers that support FOCUS now have data export instructions on the [Getting Started with FOCUS Datasets page](<https://focus.finops.org/get-started/>). Some third-party tooling providers also deliver FOCUS formatted data. The [FinOps Landscape](<https://www.finops.org/landscape/?prod_TOOLS_SERVICES%5BrefinementList%5D%5Bcompliances%5D%5B0%5D=FOCUS™%20Adopter>) indicates which tools claim FOCUS adoption and organizations can check directly with tooling partners for more information. Additionally, organizations may opt to build a custom solution for FOCUS transformation or leverage open source options such as the [FOCUS converters](<https://github.com/finopsfoundation/focus_converters>). Custom data enrichment and integrating technology billing data from multiple sources are two major considerations in the decision of where to source FOCUS data from.

##### Custom Data Enrichment

Many organizations require custom data enrichment on top of custom tagging information delivered in billing data. Such data enrichment activities include tagging corrections, or additional label and grouping as defined by FinOps, product, finance, and engineering teams. Some third-party tools offer solutions for this customization which results in the tool being the source of truth for such information while other organizations keep such custom data enrichment information in other locations and sources, spreadsheets for example. The current and desired source of such information will influence an organization’s decision on where to source FOCUS data from.

In the case of Cloud Provider billing data, if there is no need for additional data enrichment the organization may opt to source FOCUS data directly from the Cloud Provider. If there is a desire to continue to leverage third party tooling as the home for custom data enrichment, the third party tool may be selected as the source of FOCUS formatted data if available.

In cases where the custom data needs to be layered in from a variety of different sources, organizations may opt to source FOCUS™-formatted data directly from their provider, and then add in the custom enrichments or start from scratch building or using a pre-built conversion tool.

##### Scope of Data

FOCUS began with adoption by a few cloud providers, and now has support by many more, in addition to including software-as-a-service providers, and other technology vendors that want to support the specification.

Technology providers continue to adopt and expand the versions of FOCUS that they support. Please consult the [Getting Started page on the FOCUS website](<https://focus.finops.org/get-started/>) to see which data exports are available across various technology providers.

##### Support

The ability to support data accuracy, completeness and integrity is a key consideration in the decision of where to source FOCUS data. Organizations must have the confidence that the technology vendor, third party, or the organization itself can easily and reliably deliver data conforming to the FOCUS specification in support of this product offering. Organizations looking to convert source data to FOCUS format (versus sourcing from a technology vendor or third party) will need to ensure the propers resources are available to support this effort during the adoption process and beyond into normal business use of FOCUS data.

Many organizations adopting FOCUS are seeking to have a single source of truth data lake to pull data from to feed routine and ad-hoc reporting, invoicing & chargeback efforts, benchmarking, and more activities. Oftentimes, this means connecting the data lake with one or more preferred business systems to output the information in the desired locations in specified formats to meet [reporting & analytics](<https://www.finops.org/framework/capabilities/reporting-analytics/>) requirements.

### Design/Plan the adoption process

While the organization is still defining technical processes FOCUS adoption, parallel planning can begin for training and educating the organization how to access & use the new dataset. Consider the following when planning the rollout of FOCUS for the organization:

  * Which geographies, business divisions, departments are first, second (and so on) to receive education and training
  * What education and training is required for each business role? Will it be readily available training or is there a need to create customized training materials?
  * What information needs to be shared and through which communication channels? 
    * Notification of FOCUS adoption 
      * What stays the same, what’s different?
      * What data intricacies should one be aware of as it pertains to dates, metrics, rounding?
      * How do I access the new data?
      * How do I understand the new data?

#### FOCUS informational resources

The resources listed below are intended for FOCUS educational purposes and are available for organizations to leverage as needed during the journey to adopt FOCUS™.

  * Formal training courses 
    * [Introduction to FOCUS™](<https://learn.finops.org/introduction-to-focus>)
    * [FinOps Certified FOCUS Analyst](<https://learn.finops.org/finops-certified-focus-analyst-certification>)
  * Informational reads 
    * [The FOCUS website](<https://focus.finops.org/>)
    * [FOCUS Insights article from the FinOps Foundation](<https://www.finops.org/insights/focus-1-0-available/>)
  * Getting familiar with the FOCUS dataset 
    * [FOCUS Column Library](<https://focus.finops.org/focus-columns/>)
    * [Use Case Library with FOCUS queries](<https://www.finops.org/finops-use-cases/>)
    * [Download the FOCUS Specification](<https://finops.dev/focus-spec>)

**Key Actions** In addition to the major activities of the design stage, the below are key actions often taken during this stage.

  * Obtain [FOCUS Analyst Certification](<https://learn.finops.org/finops-certified-focus-analyst-certification>) for key members of the FOCUS adoption project team.
  * Join [chat-focus](<https://finopsfoundation.slack.com/archives/C034GBRQGGY>) to connect with other peers on FOCUS adoption

---  

## Build

In collaboration with the team driving FOCUS adoption and other key organizational stakeholders the next stage in FOCUS adoption is to start building the technical solution formed in the prior stage. As organizations design different technical solutions for FOCUS adoption these exact activities during this stage will be unique.

However, in general terms, this stage is about putting your plans into action by creating the data ingestion pipelines, turning on FOCUS data, establishing data storage, connecting systems, and preparing for effective reporting & analytics.

Many organizations find it helpful to break down the large body of work into smaller chapters of effort to tackle the work gradually. Activities during this stage include:

  * Working with individual technology or tooling vendors to set up the needed connections 
    * [Explore self-service data export documentation](<https://focus.finops.org/get-started/>) for current supporting data generators
  * Working with internal teams to connect systems which house custom data enrichments
  * Creating a space to store all complete, transformed data
  * Connecting the new data source to visualization and reporting systems
  * Building reports and dashboards using the new data

**Key Actions** In addition to the major activities of the build stage, the below are key actions often taken during this stage.

  * Turn on data exports with your technology providers and/or access FOCUS data with your third party vendor(s)
  * Integrate platforms as defined in previous stage

---  

## Test

### Check solution for accuracy & consistency

As with any new development, it’s vital to ensure that the FOCUS solution works as expected. The solution should work, not only once but repeatedly. Furthermore, beyond the surface level appearance of a working solution, it is critically important to ensure accuracy of all data points. Double checking individual metrics, qualitative data, and sums prior to the official launch will help to avoid future issues arising with regards to trust and data accuracy. Validation of results can be done manually, with the help of tooling, or a combination of both. The FOCUS Converter project has a [validation component](<https://github.com/finopsfoundation/focus_converters/blob/dev/focus_converter_base/docs/notebooks/validating_generated_output.ipynb>).

### Conduct a Pilot

Identify a pilot team or trusted group of individuals to help make the solution better before launch. This group can help in the effort to ensure the consistency & accuracy of the new solution and provide insights on important features & aspects of the solution. The early engagement with a pilot group sets the foundation for strong communication & collaboration with key stakeholders for launch stage and beyond.

### Improve from Feedback

Leverage the feedback provided by the pilot group to improve the solution. Make note of any flaws, bugs, etc. and address each as a means to fine tune the solution for maximum value and ease of use for the end users. Doing so will help to maximize the chance of repeat use from the end user. Additionally, incorporating early feedback will mitigate the amount of changes required post-launch when the solution is scrutinized by a larger array of application teams, cloud engineers, heads of finance, and other business stakeholders.

**Key Actions** In addition to the major activities of the test & improve stage, the below are key actions often taken during this stage.

  * Test data outputs using the[ FOCUS use case library](<https://www.finops.org/finops-use-cases/>)
    * Share your own use cases for inclusion in the library by filling out [the support form](<https://focus.finops.org/support/#support_modal>)
  * Compare the newly-generated FOCUS data against previously-generated data for understanding and accuracy

---  

## Launch

The launch stage is when an organization officially starts the rollout of FOCUS™. This is when teams (besides the project team and pilot group) start to learn about FOCUS as is outlined by the adoption process defined in stage 2, get access to FOCUS data as is appropriate for their role, and start using the related data & tools. At launch there are a variety of activities that you may opt to deploy either as a part of the initial launch or as a part of an ongoing program such as:

  * Announcing FOCUS adoption
  * Conduct education & training on FOCUS and access and use of new tool/datasets
  * Collect feedback from end users for continuous improvement
  * Measure benefits of FOCUS adoption/use

Any FOCUS solution that’s implemented will need effective product management to ensure long term success. Inevitably, fixes will be required down the line and new feature requests will come in from stakeholders. Ensure the mechanisms are in place to support the delivery and use of FOCUS data long term at your organization and iterate for continuous improvement post launch.

**Key Actions** In addition to the major activities of the launch stage, the below are key actions often taken during this stage.

  * All end users should take the free [Introduction to FOCUS™](<https://learn.finops.org/introduction-to-focus>) course
  * Select end users should also obtain [FOCUS Analyst Certification](<https://learn.finops.org/finops-certified-focus-analyst-certification>)

Post launch, organizations interested in getting more involved in FOCUS could consider the below actions.

  * Join [the FOCUS User Group](<https://www.finops.org/working-groups/>)
  * Consider sharing your FOCUS adoption story using via [the feedback form](<https://focus.finops.org/support/#support_modal>)
  * [Contribute to the FOCUS project](<https://focus.finops.org/contributors/>)

---  

## Related FinOps Resources and Framework Capabilities

  * [How GitLab uses FOCUS (via FinOps X 2024)](<https://www.youtube.com/watch?v=8r7J0N6_rls&list=PLUSCToibAswmIoGwT-MuclEmfnSIg6h45&index=6>)
  * [How Zoom uses FOCUS (via FinOps X 2024)](<https://www.youtube.com/watch?v=VLGxlSJQFHE&list=PLUSCToibAswmIoGwT-MuclEmfnSIg6h45&index=7>)
  * [FOCUS Use Case, Dhara Kansagara of BetaNXT (via FinOps Foundation August ‘24 Summit)](<https://youtu.be/JVZCZ44TYhs?si=d8HBa2MgkFk6adOD&t=1227>)

## Appendix A

The following slides are sample architecture diagrams of FOCUS adoption from the community.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201920%201080'%3E%3C/svg%3E)

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201920%201080'%3E%3C/svg%3E)

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201920%201080'%3E%3C/svg%3E)

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201920%201080'%3E%3C/svg%3E)

## Acknowledgements

We’d like to thank the following people for their hard work on this Paper:

[ ![Anderson Oliveira](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Anderson Oliveira CloudZero ](<https://www.linkedin.com/in/anderson-c-oliveira/>) [ ![Borja Martinez](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Borja Martinez NTT Data ](<https://www.linkedin.com/in/bormartinez/>) [ ![Dhara Kansagara](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Dhara Kansagara BetaNXT ](<https://www.linkedin.com/in/kansagaradhara/>) [ ![Laura Mills](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Laura Mills ManTech ](<https://www.linkedin.com/in/laura-mills-98737b105/>) [ ![Nick Konstantinou](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Nick Konstantinou Zoom ](<https://www.linkedin.com/in/nick-konstantinou/>) [ ![Nick Trezza](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Nick Trezza Philips ](<https://www.linkedin.com/in/nicholastrezza/>) [ ![Stewart Kasen](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Stewart Kasen Philips ](<https://www.linkedin.com/in/stewart-k/>) [ ![Vinay Pai](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Vinay Pai Virgin Media O2 ](<https://www.linkedin.com/in/paivinay/>) [ ![Graham Murphy](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Graham Murphy Technology One ](<https://www.linkedin.com/in/murphygraham/>)

We’d also like to thank our Supporters, Bruno Henriques, Matt Walls, Samir Bhol, and the FinOps Foundation Staff Andrew Nhem and Samantha White.

Last updated: December 10, 2025

## On this page

  * [Decide](<#decide>)
  * [Design](<#design>)
  * [Build](<#build>)
  * [Test](<#test>)
  * [Launch](<#launch>)
  * [Related Resources](<#related-resources>)
  * [Appendix](<#appendix-a>)
  * [Acknowledgments](<#acknowledgments>)
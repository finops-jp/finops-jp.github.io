# Adopting FinOps

**Summary:**

Adopting FinOps typically involves four stages: _Research, Propose, Prepare, and Launch._ The _Research_ stage involves gathering information about the current state of technology cost and usage whether that be for public cloud, data center, SaaS, or other like scopes to build a compelling FinOps strategy and vision. The _Propose_ stage is when you pitch FinOps adoption to secure sponsorship, funding and other necessities for launching a FinOps practice. _Prepare_ for FinOps implementation by defining the operating model, team structure, and robust execution processes. _Launch_ by announcing the practice, rolling out reports, and executing quick wins to demonstrate business value and sustain momentum.

## On this page

  * [Prerequisites](<#prerequisites>)
  * [Stage 1: Research](<#stage-1-research>)
  * [Stage 2: Propose](<#stage-2-propose>)
  * [Stage 3: Prepare](<#stage-3-prepare>)
  * [Stage 4: Launch](<#stage-4-launch>)
  * [Appendix](<#appendix>)
  * [Acknowledgments](<#acknowledgments>)

Every organization has a unique FinOps adoption story, but generally adoption begins in one of three different ways:

  * **Leadership Mandate:** when an organizational leader instructs the organization to implement FinOps
  * **Grassroots Adoption:** informal, gradual, FinOps adoption rising through the ranks of the organization which later formalizes into a formal FinOps practice
  * **Individual Initiative:** when an individual(s) in the organization seeks approval from leadership to adopt FinOps through the formation of a FinOps team and FinOps practice

Here is an example of [FinOps adoption via Leadership Mandate](<https://www.youtube.com/watch?v=JmPQ8O6AQpE>), featuring Rob Duffy, CTO of HealthEdge. Duffy talks about their cloud migration and parallel adoption of FinOps led by its technical leadership, with a focus on building the right culture to accomplish this goal.

The below image describes the typical stages of initial FinOps adoption. You may not need to start at the very beginning, but the following sections will outline the goals and activities in each stage as a guide.

Use the sections that make sense for your business as you work toward the launch of your FinOps practice, then periodically revisit the stages to bring new parts of your organization into the fold or new scopes into your FinOps practice.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20998%20181'%3E%3C/svg%3E)

## Prerequisites

Nowadays, FinOps can be applied to different technology categories alongside cloud, like SaaS, PaaS, Data Center, Data Cloud Platforms, etc.. Historically, many practitioners begin with a cloud-centric journey with a basic understanding of:

  * [The Definition of FinOps](<https://www.finops.org/introduction/what-is-finops/>)
  * [The FinOps Framework](<https://www.finops.org/framework/>)
  * [FinOps Scopes](<https://www.finops.org/framework/scopes/>)
  * The public cloud, its benefits and challenges 
    * [What is Public Cloud?](<https://www.bing.com/search?q=What+is+public+cloud&cvid=d95b450fbaca43889f3942d69e18ea08&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQABhAMgYIAhBFGDsyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQABhAMgYICBBFGDzSAQg1ODk0ajBqNKgCCLACAQ&FORM=ANAB01&PC=DCTS>)
    * [Public Cloud vs Private Cloud vs Hybrid](<https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-are-private-public-hybrid-clouds/>)
    * [What is Cloud Computing?](<https://aws.amazon.com/what-is-cloud-computing/>)
  * Relevant cost and usage data (for cloud, data center, SaaS, etc. as needed for the intended scope of your FinOps practice) 
    * See also, [FOCUS](<https://focus.finops.org/>) for data normalization
  * Your structures, technology investments and related goals/strategies

## Stage 1: Research

The research stage is about collecting the inputs for your FinOps adoption proposal. It is important to have a firm understanding of the current state of cloud, SaaS, AI, and data center spending and how related information is shared and used for decision making across the organization. Researching the current state of these investments and having conversations with key stakeholders about the usage, data availability, etc. will help to baseline where the organization is today and start to build the use case for adopting FinOps or adding a new scope to the existing FinOps practice.

As part of this stage, you should gather a comprehensive picture of your technology cost and usage. The below describes what information you might seek for public cloud but you may be needing or wanting to adapt the below list to find similar information for additional scopes such as SaaS, AI, data center, etc.

  * **Gather a comprehensive picture of your cloud procurements and use**. If you cannot identify all the contracts and ways you are purchasing cloud, or easily gather cloud cost and usage data for all of your relevant cloud use, this indicates even greater risk because inefficient use is likely to go undetected. 
    * [AWS Cost and Usage Reports](<https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html>)
    * [Azure usage and charges](<https://learn.microsoft.com/en-us/azure/cost-management-billing/understand/download-azure-daily-usage>)
    * [GCP billing reports and cost trends](<https://cloud.google.com/billing/docs/how-to/reports>)
    * [OCI Cost and Usage Reports](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/usagereportsoverview.htm#Accessing_Cost_and_Usage_Reports>)
  * **Review the current cloud hierarchy and tagging data to determine if you have the appropriate level of visibility into cloud spend across the organization.**
    * [AWS tagging resources](<https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html>)
    * [Azure resources and management hierarchy](<https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources>)
    * [GCP creating and managing tags](<https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing>)
    * [OCI Tagging Overview](<https://docs.oracle.com/en-us/iaas/Content/Tagging/Concepts/taggingoverview.htm>)
  * **Review current rates and spending trends**. Identify rate optimization opportunities and know month over month spend total and how current spend trends track against forecasts and budgets.
  * **Analyze your cloud workloads usage** patterns and identify possible efficiencies that can be implemented in the environment (terminating idle resources, power scheduling, rightsizing resources, etc.).
  * **Compute FinOps KPIs** and other relevant metrics to help build the case for FinOps Adoption. Understanding where the organization is now and how FinOps can help bring them to the next level will help get buy-in from key stakeholders to help push the effort forward. 
    * [FinOps KPI Library](<https://www.finops.org/wg/finops-kpis/>)
  * **Compare your organization against peers and benchmarks**. This exercise level-sets adoption enabling organizations to start small, grow and scale accordingly. State of FinOps data is a good source to comparatively benchmark your company against. 
    * [State of FinOps](<https://data.finops.org/>)
  * **Investigate FinOps tooling and service providers** and their relative costs. Consider the existing resources available to you and if procurement of additional resources is needed. 
    * [FinOps Landscape](<http://finops.org/landscape/>)
  * **Estimate funding needed** to support FinOps human resourcing and training. 
    * [FinOps Foundation Training](<https://www.finops.org/training-certification/>)

Use the information gathered to create a vision statement for FinOps adoption (or adoption of a [new scope](<https://finops.org/framework/scopes>)) and outline the activities that occur, including rough timelines, to bring this vision to life.

### Who to involve

Consult with all [core FinOps Personas](<https://www.finops.org/framework/personas/>) to gather data, use cases, and information to leverage during the proposal. During these conversations, identify current pain points and the impacted groups and describe how FinOps can provide relief.

Additionally, identify individuals who are eager to support this initiative as these supporters can help build momentum across the organization and may serve as good candidates for formal or informal change coalitions and [FinOps Champions](<https://www.finops.org/wg/what-is-a-finops-champions-program/>). Finance and engineering are two key persona groups to engage with as you discuss their needs surrounding cloud & FinOps.

See the [Adopting FinOps Pitch Deck](<https://docs.google.com/presentation/d/1ZmThkPecv4YV4BnUFeNhh-GLbqqV6HcC186eapD4Vhk/edit?slide=id.g3b1cd92a6f5_0_1262#slide=id.g3b1cd92a6f5_0_1262>) for recommended questions to ask during the research stage.

## Stage 2: Propose

After evaluating the current state of relevant technology investments and arming yourself with the relevant data, examples, and drivers for adopting FinOps, the next step is to bring other members of your organization on board with implementing a FinOps practice. It’s important to convince key stakeholders that adopting FinOps (or a particular new scope) is a worthy investment of resources, aligns to organizational strategic goals, and is critical to enabling success.

### Clarify the Call to Action

It is important to clarify what it is you are asking for. Depending on the size of the organization, it might be difficult to get buy-in for wide scale adoption without some initial data to show progress and impact. It could be beneficial to pilot FinOps in a smaller segment of the organization to build the foundation of FinOps capabilities by defining the operating model, establishing guardrails and guidance to control spend, determining key measures of success, etc. to demonstrate success on a small scale before proposing a wider adoption.

Alternatively, the call to action of your proposal could be for approval of full, organization-wide adoption. In either case, collecting quick wins will help you build momentum and make it easier to convince other stakeholders across the organization to join in on this effort. Be clear in your delivery of what you are needing. The below list provides examples of what may be included in your ask.

  * Agreement/approval
  * Funds (for training, tooling, etc.)
  * Dedicated human resources (headcount adds, service providers)
  * Support by way of messaging or sponsorship (announcing support of FinOps adoption, setting expectations, etc.)

### Know Your Audience: Who to Involve

During the proposal stage, it is likely for individuals to propose FinOps adoption to several different people and oftentimes this means not a single presentation, but several presentations each tailored to the particular [FinOps Persona](<https://www.finops.org/framework/personas/>)(s) you are persuading. Seek out the right stakeholders within the organization. You are likely to need senior level sponsorship as well as cultivated supporters to build momentum. You might find it necessary to propose FinOps adoption in a more informal manner to certain stakeholders and again more formally to others.

Each persona group has different interests and motivations in FinOps which are described in detail at the links below. Leverage these general perspectives with what you already know about your audience to create a custom, engaging proposal for FinOps adoption – doing so will help maximize the chances of (and minimize the time and effort to) gain alignment on FinOps adoption.

  * [Leadership](<https://www.finops.org/framework/persona/leadership/>)
  * [Product](<https://www.finops.org/framework/persona/product/>)
  * [Engineering](<https://www.finops.org/framework/persona/engineering/>)
  * [Finance](<https://www.finops.org/framework/persona/finance/>)
  * [Procurement](<https://www.finops.org/framework/persona/procurement/>)

Most notably, of all personas is the leadership group as many organizations require senior leadership approval when standing up new practice areas. Additionally, you may consider including individuals in the organization who are advocates of FinOps adoption (you may have encountered these folks during stage 1) in the proposal conversations for additional support and sway.

### Define the Opportunity

As part of your proposal, paint a picture of the current state, a roadmap of FinOps activity, and an appealing future state with FinOps. It’s important to detail how implementing a FinOps practice helps the organization to meet their objectives. The below table provides additional context in each of these areas.

**The Current State** | **Roadmap of Activities** | **The Future State**  
---|---|---  

  * Present the problem by highlighting pain points, unfavorable KPIs, opportunities to exploit, etc.
  * Identify threats and show scenarios that could happen if action is not taken
  * Leverage your research, data analysis, and conversations with stakeholders as a source of content
  * Consider touching upon any number of the following: 
    * Rising and/or anomalous spend events
    * Lack of visibility into investments
    * Lack of clarity on ownership Usage and rate inefficiencies

| 

  * Present the solution by share an overview of what will be done along a rough timeline to achieve the future state
  * Being able to provide details on “how” you will achieve the future state strengthens the proposal
  * Consider touching upon any number of the following: 
    * Communication & training plans
    * Team formation
    * Tooling procurement
    * Capability implementations (i.e. new anomaly management process, integrating usage optimization efforts with existing processes, governance)
    * Expected early wins
    * Suppliers/partners
    * inputs/outputs
  * 
| 

  * Emphasize the value and benefits to be realized from the FinOps program
  * Share your FinOps Mission/Vision statement
  * Consider touching upon any number of the following: 
    * Where the FinOps function will live in the organization
    * Expected KPI improvements
    * Collaboration improvements
    * Timely, informed decision making
    * Predictable bills with clarity on ownership of its parts
    * Greater usage and rate efficiencies
    * Budget impacts/ROI
  * 

For those looking to use slides for the presentation of their proposal, the [Adopting FinOps Pitch Deck](<https://docs.google.com/presentation/d/1ZmThkPecv4YV4BnUFeNhh-GLbqqV6HcC186eapD4Vhk/edit#slide=id.g2cd3de6bc9b_0_3247>) is available for use and additional customization.

### Decisioning

Immediately following your pitch (or shortly after), you will know if the individual(s) have agreed to your proposal or an altered version of your proposal. If yes, it’s time to proceed with beginning to execute against your vision and move on to the subsequent stages of FinOps adoption.

If your proposal was not accepted to move forward, you may need to go back to the drawing board and conduct more research, reposition your arguments for adopting FinOps, reach out to other individuals to join your coalition of support for FinOps, pitch to a different person(s), simply wait and try again at a later time.

### Keeping the Proposal Going

Although the act of proposing FinOps itself may be complete, it is a good idea to continuously reinforce your proposal as you progress through the future stages of the adoption journey. This could mean making a monthly chart or tracking a KPI that shows the success of FinOps activities over time.

Stakeholders will need some assurances of the value and benefits derived from FinOps activities. You’ll need to sustain (ideally increase) the value derived from FinOps and make sure the value is known throughout the organization to keep the practice alive. Continue conversations on why it is important to adopt FinOps and request support from key stakeholders.

### Helpful tips

  * Don’t assume the audience knows what FinOps is, educate them as needed.
  * Give careful consideration to how you deliver the proposal – it could be conversation based, written, presentation based, etc. Consider which method will be best received by the audience and any requirements defined by your organization.
  * You can present the elements of your proposal in whatever order you’d like such as: _current state, roadmap, future state, call to action_ or perhaps _call to action, future state, current state, roadmap._ Adjust the presentation order of elements as you see fit.
  * Remain flexible and be influenced by key stakeholders. Being open to feedback before, during, and after the proposal helps to create a positive, collaborative team effort and lays the foundation for continued collaboration in your adopting FinOps journey and beyond.
  * Technical concepts can be tricky to communicate. Consider similar concepts that a non technical stakeholder can understand such as explaining committed discounts by comparing to strategies for reducing the rate one pays for electricity (in exchange for a commitment term, a discount is given on kilowatt hour) or how usage optimization is like turning the lights off when you leave the room or using the right wattage light bulb for the lamp.
  * Lean into the areas of interest of your specific audience (such as percentage of potential savings, ROI etc.)
  * Consider including compelling visuals

## Stage 3: Prepare (to execute against approved proposal)

This is the stage where you execute against an approved proposal.

The acceptance of your proposal to adopt FinOps means you can now develop a plan to execute the approved roadmap of activities. This stage is focused on preparing to execute against those approved plans. For example, if your approved roadmap included establishing a cloud cost management routine with senior leadership you would now look to:

  * Select a date/time for the monthly cadence with senior leadership
  * Outline the content to share at the meetings
  * Determine where & how to source that information
  * Identify individuals to invite to the meeting… etc.

During this stage, you are designing FinOps operations and preparing for the formal launch of the practice all whilst aligning operations to the specific needs of an organization. There is much to be done during this stage. The content that follows offers suggestions on where to start your FinOps journey based on the collective experiences of the FinOps Foundation community who have driven and participated in FinOps adoption journeys. Yet as with anything, efforts should be directed toward the areas with urgent needs.

### Define FinOps Team & Team Roles

The cornerstone of your FinOps journey lies in the formation of a dedicated team equipped with the expertise and capabilities to drive transformative change. Identify an organizational “home” for the FinOps function and determine how many people and which type of roles the team will be composed of. Determine which roles will be filled by existing individuals/internal transfers, new hires, etc. Integration with the Cloud Center of Excellence or similar internal functions can be helpful.

The following resources provide more guidance on building and supporting FinOps Teams:

  * [FinOps Teams Paper](<https://www.finops.org/wg/building-finops-teams-roles-structures-career-paths/>)
  * [Cloud FinOps book](<https://www.finops.org/community/finops-book/>)
  * [FinOps Tools & Services](<https://www.finops.org/wg/finops-tools-and-services/>)
  * [FinOps Champion Programs](<https://www.finops.org/wg/what-is-a-finops-champions-program/>)

### Develop Processes for Executing Capabilities

With nearly two dozen [capabilities](<https://www.finops.org/framework/capabilities/>) to navigate, the development of robust execution plans is paramount. For those just starting their FinOps journey it is recommended to prioritize a handful of capabilities to work on first and slowly expand FinOps operations to other capabilities. Discoveries made during the research stage will help to prioritize the order in which to implement the capabilities.

As part of developing processes for executing capabilities organizations may be identifying Key Performance Indicators (KPIs), creating workflows & templates, preparing tools, defining communication plans, establishing interaction models, etc. The below are some of the first capabilities developing FinOps practices typically direct their efforts towards.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201044%20424'%3E%3C/svg%3E)

[**Data ingestion**](<https://www.finops.org/framework/capabilities/data-ingestion/>)**,**[**Allocation**](<https://www.finops.org/framework/capabilities/allocation/>)**, & **[**Reporting**](<https://www.finops.org/framework/capabilities/reporting-analytics/>)**:** Cost visibility enables so many other FinOps capabilities that it is often one of the first items tackled by sprouting FinOps practices. Accurately described, comprehensive, cost and usage data must be made available to teams to enable informed decision making. Additionally, success in these capabilities lay the foundation for success with [invoicing & chargeback](<https://www.finops.org/framework/capabilities/invoicing-chargeback/>) efforts.

[**Forecasting**](<https://www.finops.org/framework/capabilities/forecasting/>)** & **[**Budgeting**](<https://www.finops.org/framework/capabilities/budgeting/>)**:** For many organizations, exceeding budgets and having a poor understanding of anticipated spend is a main driver for the adoption of FinOps. Therefore, forecasting & budgeting capabilities are often prioritized as some of the first capabilities to adopt so that cloud expenditures can be proactively managed. Organizations may also look to establish some form of [anomaly management](<https://www.finops.org/framework/capabilities/anomaly-management/>) to compliment the forecasting & budgeting efforts.

[**Workload Optimization**](<https://www.finops.org/framework/capabilities/workload-optimization/>)** & **[**Rate Optimization**](<https://www.finops.org/framework/capabilities/rate-optimization/>)**:** Optimization efforts drive cost reductions, providing tangible benefits and fostering momentum for broader FinOps adoption. As is the case for organizations with exploding bills, decreasing spend is an important and urgent need.

[**Education Enablement**](<https://www.finops.org/framework/capabilities/finops-education-enablement/>)**:** As organizations embark on their FinOps journey, developing a comprehensive training plan to equip team members with the necessary skills and expertise to navigate the complexities of maximizing the business value of technology investments is a top priority. This applies to both members of the internal FinOps team and other organizational personas that will be involved in FinOps activities. Leverage training events (such as FinHacks and Lunch & Learns), written publications (such as FinOps Friday Blogs and internal knowledge base repositories), formal organizational training (such as those delivered through internal HR systems), CSP training, and [FinOps Foundation training and certification opportunities](<https://learn.finops.org/>).

[**FinOps Tools & Services**](<https://www.finops.org/framework/capabilities/finops-tools-services/>)**:** Access to accurate data and powerful tools is the lifeblood of effective FinOps management. Prioritize having meaningful, valuable, tools available for use and putting the relevant data in the path of the relevant stakeholders through the use of the selected toolsets. This empowers teams to succeed in their efforts to drive meaningful business outcomes. Whether leveraging SaaS products or developing custom solutions, organizations should prioritize solutions that align with their unique needs and objectives.

### Collaborate & Align Goals

FinOps requires collaboration from all key stakeholders. During this stage, teams should be working together to align goals, establish regular update cadence and mode for interaction. Develop feedback loops between the key stakeholders as you prepare to launch and iterate through the development of your FinOps practice and then carry this habit forward through and beyond launch to maintain strong collaboration as you iterate through maturing FinOps practices over time. Determine the mechanisms and spaces through which to facilitate the feedback loop such as regular meeting cadences, reporting, etc.

### Who to involve

As you prepare your reports and routines it is important to set expectations and manage accountability across various teams. Any core or allied persona may be involved during this stage, although dependent on the specific activity as some personas may not need to be involved in certain areas. Engineering and finance are the key personas groups which were consulted during the research stage where the adoption roadmap was formed and likewise are key persona groups to engage and collaborate with in preparation to launch FinOps.

By defining the FinOps team structure, developing robust execution processes, aligning goals, and establishing collaborative interaction patterns organizations can position themselves for a seamless transition to doing FinOps.

### Helpful tips

  * Do not over-engineer solutions; instead, start with minimum viable product solutions and, with practice, mature FinOps processes.
  * A robust communication plan is vital to inform stakeholders about the FinOps initiative’s goals and expected outcomes, garnering support from key influencers and stakeholders.
  * Engage with relevant stakeholders to ensure goal alignment and collaboration across departments, fostering a culture of shared responsibility and continuous improvement.
  * Establishing [policies and governance](<https://www.finops.org/framework/capabilities/cloud-policy-governance/>) to reinforce FinOps best practices helps in ensuring compliance and accountability across the organization.

## Stage 4: Launch

The launch stage is when you officially kick off the FinOps practice or the adoption of a new scope into an existing practice and begin implementing the designed processes, tools, and policies. This milestone marks the beginning of normal and ongoing FinOps operations. At launch there are a variety of activities that you may opt to deploy either as a part of the initial launch or as a part of an ongoing program such as:

  * Announce the establishment of FinOps practice and adoption activities
  * Conduct training and share FinOps knowledge base documentation (if not already completed pre-launch) for team members and stakeholders to familiarize them with the new tools, processes, and policies.
  * Execute easy wins and share the success with the broader organization
  * Launch a win wall
  * Rollout tooling
  * Distribute FinOps reports and empower users to make their own
  * Start hosting & attending routine meetings (monthly cloud cost update call, CCoE, business unit meetings, etc.)
  * Perform [FinOps Capabilities ](<https://www.finops.org/framework/capabilities/>)(such as forecasting, budgeting, usage optimization, rate optimization, etc.)
  * Leverage feedback from teams to improve operations

### Who to involve

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20656%20603'%3E%3C/svg%3E)

During the launch stage, the FinOps practitioner and driver of FinOps adoption should stay in close communication with leadership on the plan and progress of adoption. All personas are involved in doing FinOps, therefore all are also involved in this stage and beyond. The FinOps team and core personas will be working in concert to maximize the value of in accordance to the roles and responsibilities they defined in the prior stage.

### Launch Tip

Launching FinOps does not mean that you have to implement FinOps practices for whole organizations or for all FinOps capabilities. In fact, we’d recommend focusing on what will bring your organization the most value in the quickest amount of time. Don’t try to do everything all at once.  

### Iterative Improvement Is Key

A successful launch does not guarantee future FinOps success. FinOps success comes from a sustained focus on adhering to the [FinOps principles](<https://www.finops.org/framework/principles/>) and improving the capability [maturity levels](<https://www.finops.org/framework/maturity-model/>) to meet the evolving needs of your organization.

As you operate your FinOps practice you need to regularly assess the practice to determine if more investment will increase value, to determine if your current capability list and targets are the right ones for your organization, and be mindful of when you may need to walk through a new proposal for your FinOps practice development. The FinOps adoption journey is one you may travel many times over as FinOps spreads across the organization, as acquisitions occur, etc.FinOps is a continuous and iterative process. Embrace the challenges and opportunities ahead.

We wish you success in your journey.

## Acknowledgments

We’d like to thank the following people for their work on updating this Paper:

[ ![Borja Martinez](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Borja Martinez NTT Data ](<https://www.linkedin.com/in/bormartinez/>) [ ![Stewart Kasen](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Stewart Kasen Philips ](<https://www.linkedin.com/in/stewart-k/>) [ ![Laura Mills](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Laura Mills ManTech ](<https://www.linkedin.com/in/laura-mills-98737b105/>) [ ![Matt Walls](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Matt Walls NBCUniversal ](<https://www.linkedin.com/in/wallsmatthew/>) [ ![Jason Weimer](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jason Weimer CloudSaver ](<https://www.linkedin.com/in/jason-w-474b19307/>) [ ![Anderson Oliveira](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Anderson Oliveira CloudZero ](<https://www.linkedin.com/in/anderson-c-oliveira/>) [ ![Anastasija Jakovleva](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Anastasija Jakovleva FLSmidth ](<https://www.linkedin.com/in/anastasija-jakovleva-96140179/>) [ ![Tammy Burnitt](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Tammy Burnitt FinOps Foundation ](<https://www.linkedin.com/in/tammyburnitt/>)

A special thank you to the contributors to the original version of our Adopting FinOps asset: Anderson Oliviera, Mike Eisenstein, Anthony “TJ” Johnson, Tracy Roesler, Bailey Caldwell, Erik Peterson, Kim Wier, Melvin Brown, Ashley Hromatko, Idaliz Baez, Rejane Leite, Rich Gibbons, Nick Grab, Mandy van Os, Bhups Hirani, and Mike Bradbury.

Last updated: February 18, 2026

## On this page

  * [Prerequisites](<#prerequisites>)
  * [Stage 1: Research](<#stage-1-research>)
  * [Stage 2: Propose](<#stage-2-propose>)
  * [Stage 3: Prepare](<#stage-3-prepare>)
  * [Stage 4: Launch](<#stage-4-launch>)
  * [Appendix](<#appendix>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ FinOps Practice Operations ](<https://www.finops.org/framework/capabilities/finops-practice-operations/>) [ FinOps Education & Enablement ](<https://www.finops.org/framework/capabilities/finops-education-enablement/>)
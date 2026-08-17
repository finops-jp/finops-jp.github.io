# How to Create a FinOps Champions Program

## On this page:

  * [Prerequisites](<#prerequisites>)
  * [Phase 1: Plan](<#phase-1-plan>)
  * [Phase 2: Implement](<#phase-2-implement>)
  * [Phase 3: Measure](<#phase-3-measure>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Conclusion](<#conclusion>)
  * [Related Resources](<#related-resources>)
  * [Acknowledgments](<#acknowledgments>)

A FinOps Champions Program is an important tool to increase the accountability, adoption, and effectiveness of a FinOps practice. This paper builds upon the existing information regarding the role of a [FinOps Champions Program](<https://www.finops.org/wg/what-is-a-finops-champions-program/>) in maturing a FinOps practice, providing actionable steps to establish and maintain such a program. It provides a practical approach, outlining requirements, considerations, and steps for successful implementation.

Please keep in mind that FinOps Champions programs should be designed to suit the needs of your specific organization; no two are alike. Throughout the paper you will find samples of program goals, metrics, etc. These are not meant to be prescribed to all FinOps Champion programs, but rather spark ideas on how you wish to shape your program.

After reading this, you should understand:

  * the impact FinOps Champions have on your organization
  * how to identify and select FinOps Champions
  * how to measure the success of a FinOps Champions program
  * how to maintain a FinOps Champions program

This paper is particularly directed at FinOps leaders and senior leadership who are looking to create a FinOps Champion program within their organization. Anyone interested in standing up a FinOps practice, contributing to the success of a FinOps practice, or the factors that contribute to its effectiveness and success may also find this guidance helpful.

## Prerequisites

The image below describes the three phases of establishing a FinOps Champion program: plan, implement, measure. This section provides the tools and guidance for creating your FinOps Champion program, including the key stakeholders to engage. Notably, this paper focuses on post-decision activities rather than persuading individuals or organizations to initiate a Champion Program.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201920%201080'%3E%3C/svg%3E)  
[Download this image for use](<https://www.finops.org/wp-content/uploads/2024/05/finops-champions-1.jpg>), please [attribute accordingly](<https://www.finops.org/introduction/how-to-use/>) if using it on social media or other channels.

### Participants

**FinOps Practitioner(s)** are one or more individuals from the central FinOps team who will drive the program as a whole.

  * Define the overall purpose of the FinOps Champion program.
  * Design processes and strategies for achieving predefined goals.
  * Guide Champions in implementing FinOps best practices. 
    * See also, [FinOps Practitioner](<https://www.finops.org/framework/personas/#finops>)

**FinOps Champions** contribute to the success of the program by driving the necessary cultural change in their area.

  * Ensure program objectives are met.
  * Influence day-to-day activities within their respective teams.
  * Identify and implement improvement opportunities related to FinOps.
  * Provide feedback to the central team and other Champions in the program.
  * _The following roles are well positioned to become FinOps Champions (see more information on this in_[ _What makes an effective champion?_](<https://www.finops.org/wg/what-is-a-finops-champions-program/#effectiveness>)_)_
    * [Engineering and Operations](<https://www.finops.org/framework/personas/#engineering-lead>) (including Architecture)
    * [Product](<https://www.finops.org/framework/personas/#product-owner>)
    * [Finance](<https://www.finops.org/framework/personas/#itfm>)
    * [Procurement](<https://www.finops.org/framework/personas/#procurement>)
    * [ITAM](<https://www.finops.org/framework/personas/#itam-sam>)
    * [Sustainability](<https://www.finops.org/framework/personas/#sustainability>)
    * [Security](<https://www.finops.org/framework/personas/>)****

**Key Sponsors** are the final approvers of the program and will have to be informed as the program progresses.

  * Provide strategic leadership for the FinOps Practitioner.
  * Assist in budget approval for the program.
  * Provide leadership support for the central team and Champions as required.
  * Make strategic decisions that cascade down to the Champions program. 
    * See also, [Leadership on the FinOps Personas page](<https://www.finops.org/framework/personas/>)

#### Possible Hurdle: Lack of Leadership Support

It is preferred, and generally expected, that you have leadership support before starting on the journey to create a FinOps Champion program. Without this, you may encounter additional hurdles along the process. However, you might find yourself in a situation in which leadership support is not available. In these scenarios you may choose to adopt a lightweight or ad hoc version of a Champions program through leveraging the concepts and ideas presented in this paper but adapting them to your organization and specific situation. This sort of grassroots approach is how FinOps programs have started in some organizations and this same could be true for a champions program. Additionally, the presentation of phase 1 outputs combined with a potential financial impact of adding this program could highlight the benefits to the leadership and earn their support.  
---  

### Information

  * **FinOps Knowledge:** Prior to implementation, the driver should have an understanding of FinOps domains, principles and practices, or seek training to obtain this knowledge. This includes understanding the financial implications of using various cloud services, how to optimize costs, and how to effectively analyze and report on cloud expenditures.
  * **Understand the role of a**[**FinOps Champion and the FinOps Champion Program**](<https://www.finops.org/wg/what-is-a-finops-champions-program/>)**.**

  * **Organizational Needs, KPIs, OKRs:** Knowledge of specific financial and operational requirements, FinOps key performance indicators in need of monitoring or improvement, and key results and objectives for the organization.

### Resources

  * **Collaboration Tools:** Standard and agreed-upon platform for effective team collaboration and document sharing (e.g. Zoom, Teams, Slack, OneDrive, GDrive, etc.) 
    * Official champion two-way communication channel with Business Unit, or BU (e.g. written, recurring meetings, emails, etc.)
  * **Reporting Tools:** Tools for tracking and reporting on FinOps metrics and performance (may be third party or in-house developed) as well as accessing cloud cost and usage data.
  * [**RACI Matrix**](<#raci>)**:** A template to define roles and responsibilities within the FinOps Champion program.
  * [**FinOps Maturity Assessment**](<https://www.finops.org/wg/finops-assessment/>): An organizational evaluation to pinpoint areas for improvement and focus Champion efforts strategically

#### Possible Hurdle: Lack of Toolset

In scenarios where sufficient tooling is not available, lean on the tools that are available to you such as those provided by cloud service providers. The [native tools](<https://www.finops.org/wg/multi-cloud-tools-and-terminology/>) provided by the cloud provider often provide the necessary information to the FinOps Practitioner and Champions during the initial stages.  
---  

## Phase 1: Plan

### Define program objectives

It is important for FinOps Champions programs to have a clearly defined purpose so that both program participants and the wider organization are able to understand the program’s value. As no two organizations are the same, the goals of your champion program will be unique to your organization. What is most important is that you look to understand the organizational needs and areas for improvement in FinOps practices and then utilize those needs as a source to build goals for the champions program. When determining the objectives of a champions program, one may:

  * Collect a list of organizational needs, priorities, weaknesses. The following items are sources where you may search for such information. Not all items listed below may be applicable to your organization. 
    * Consult the results of a recent [FinOps Maturity Assessment](<https://www.finops.org/wg/finops-assessment/>) (or take an assessment)
    * Review annual goals and OKRs set by your organization and teams involved in managing the value of the cloud
    * Consult with members of the business/product, engineering & operations, and finance teams for input regarding their needs and KPI targets
  * Prioritize the list of needs, priorities, weaknesses and select which will become the objectives of the champion program.
  * Define initial success criteria and simple KPIs of the program
  * Determine the scope of your Champions program. Eg: deploy for the whole organization or particular set of business units or geographic areas.
  * Socialize and seek feedback on your FinOps Champion Program goals and objectives with key sponsors and stakeholders. This shall help ensure support and backing for the FinOps Champion Program.
  * Draft a plan to achieve the objectives 
    * Consider prioritizing early, quick wins to help generate momentum to achieve medium and longer term objectives.
  * Build budget/request for needed funding 
    * Consider costs for training/certifications, travel, swag, rewards, and bonuses.
    * Determine funding sources and impact on profit and loss statements.

#### Possible Hurdle: Lack of Funding for Training

A lack of financial support could impose additional challenges to a Champions program. Training is one of the most likely scenarios in which funds are required but may not be available. In such cases, the FinOps Practitioner can prepare relevant training sessions to ensure the knowledge on this subject or to prepare a short list of free courses that could address this hurdle. Some resources that can be leveraged for this are available below:

  * <https://www.finops.org/introduction/what-is-finops/>
  * <https://www.finops.org/framework/>
  * <https://learn.finops.org/introduction-to-finops>

Despite budget constraints, a FinOps Champions program can achieve small victories and use them to build momentum. By sharing and celebrating these wins, it can attract more investment into FinOps and the Champions program.  
---  

## Phase 2: Implement

### Select Champions

Selecting FinOps Champions is a critical process that requires careful consideration. Below are some steps to consider when identifying and selecting FinOps Champion Program candidates in an organization:

  * If not previously decided during the plan phase, determine the number of champions and their placement within the organization, ensuring they occupy positions conducive to driving program success (i.e. champions are at the appropriate seniority levels). 
    * Depending on the size of your organization, you may wish to start with a particular set of business units or geographic area
  * Define FinOps Champion criteria: including defining specific skills and competencies required to succeed as a FinOps Champion. Consider the list of suggestions of what makes an effective FinOps Champions presented in [What is a FinOps Champions Program](<https://www.finops.org/wg/what-is-a-finops-champions-program/>).

#### Possible Hurdle: Lack of access to data

Sometimes, due to lack of FinOps maturity, there may be challenges in providing access to cost data or sharing this data with Champions. This issue can be resolved through negotiations with the finance team or those who provision data access, to explain the impact of providing data to champions can have. However, if negotiations are unsuccessful, in such cases, you can narrow down the list of Champion candidates. It is necessary to choose those who have a broader scope of access, such as developers who already have console access or managers and budget owners.  
---  

### Define Responsibilities

Champions primarily work in a supporting business unit or job function but work closely with the Central FinOps Team. The Champions are evangelizing FinOps on behalf of the Central FinOps team but bring the context and understanding of their respective Champion area.

Key considerations include defining roles and expectations for the FinOps Champion, establishing expectations from various teams involved, and understanding the financial implications of running the program.

#### Expectations from different teams

  * FinOps Champions: 
    * Participation in periodic reviews and recommendations.
    * Time dedication and support from Operations/Engineering/Architecture.
    * Access to budget for travel and training.
  * Operations/Engineering/Architecture: 
    * Availability for reviews and support for Champion’s role.
    * Implementation of recommendations and responsiveness.
    * Metrics for participation and reporting.
  * Central FinOps Teams: 
    * Providing standardized reporting.
    * Direct support and interaction with Champions.
    * Defining remaining responsibilities and accountability.

The table below depicts some of the major activities of FinOps Champions (separated by primary job role) and how those activities and responsibilities relate to the central FinOps team. This is not meant to be prescriptive, but to provide some direction that you can adapt to fit your organizational needs

Activity | Central FinOps Team | Leadership/  
Key Sponsors | FinOps Champion  
---|---|---|---  
Evaluate and select FinOps tool(s) | A R | I | C  
Evangelize and promote cultural shift towards FinOps by addressing resistance, promoting collaboration | A | R | R  
Assist with workshops, training sessions, and documentation to educate teams | A R | I | R  
Share recommendations, best practices and lessons learned | A R | I | R  
Advocate for Engineers to negotiate recommendations against constraints (e.g. vendor requirements, SLAs, DR, etc.) | A R | C | R  
Meet with FinOps team and/or other stakeholders to review business/finance goals and cascade for all personas | A R | R | R  
Coordinate and track FinOps implementation, reporting activities | A R | C | R  
Establish a community of practice | A R | R | R  
Provide program sponsorship and direction | R | A | C  

_* R – Responsible, A – Accountable, C – Consulted, I – Informed_

#### Possible Hurdle: Resistance & impossibility to Engage

During program implementation, you may encounter resistance from key participants, including FinOps Champions or other team members, regarding involvement in FinOps-related discussions and activities. The best approach is to reiterate to individuals why engaging in the proposed action aligns with their interests and how it can be advantageous for them. Competition and recognition could also be used to leverage the objectives and actions from the FinOps Champion program, in an attempt to encourage participation. See the below resources for more information on how to drive better engagement.

  * [Encouraging Engineers to Take Action (finops.org)](<https://www.finops.org/wg/encouraging-engineers-to-take-action/>)
  * [A Guide to Gamification for FinOps](<https://www.finops.org/wg/a-guide-to-gamification-for-finops/>)
  * [Gamification Library (finops.org)](<https://www.finops.org/wg/gamification-library/>)

It is important to listen to the concerns of individuals to understand why they can’t or are unwilling to participate so that you are best informed on the next step to take. For example, perhaps people are not engaging with you because they are unable to spare the time (personal reasons, conflicting priorities, etc.). Aim to work with them on prioritization and timing to forge a good working relationship for future FinOps successes or if needed you can consider searching for a different individual who perhaps is able to take on the responsibility.  
---  

### Operate

Host a kickoff meeting for the Champions program to allow the designated champions to get to know one another, to level on objectives and actions to execute to meet those objectives, and to mark the official start of the program. The meeting may include the following:

  * Introduction of the Champions and program leaders
  * Share and discuss the overall goals and objectives of the Champions program and how the FinOps Champions will contribute to achieving the objectives 
    * Explain the role of FinOps Champions
    * Expectations regarding their participation, and contribution to the FinOps process
    * Discuss the importance of communication and collaboration with different teams and stakeholders
  * Establish channels for regular communication and collaboration
  * Provide an overview of the tools and resources available to FinOps Champions for monitoring and managing costs 
    * Discuss training opportunities or make plans for training opportunities if applicable
  * Allow time for questions, concerns, and feedback from FinOps Champions

With the kickoff meeting complete, Champions and program drivers should have a clear understanding of next steps to execute program objectives. Individuals should actively work on these actions, regularly checking in with fellow Champions and program leads to ensure progress towards program goals.

For each FinOps Champion, a robust onboarding process will enable the Champions to succeed in their role. Depending on the organization’s size and/or structure, a buddy system may be helpful to ensure new Champions can hit the ground running. After successful onboarding, it is important to continue to refine the selection process to identify opportunities for enhancement.

Champion Program driver(s) should conduct recurring meetings with the Champions and key stakeholders and sponsors as needed to discuss progress on set goals/objectives, raise any new items for attention, offer a platform for champions to raise any issues and share best practices and success stories back to the other program members, and review progress & opportunities on a regular cadence. Explore [gamification](<https://www.finops.org/working-groups/?prod_combined-site-content%5Bquery%5D=gamification>) opportunities to help in achieving program objectives if desired and able.

#### Possible Hurdle: Lack of FinOps Central team resources

In the list of hurdles and limited resources, we need to include the possibility of the FinOps Practitioner not having availability to prepare this program. If this is the case, additional support from leadership and/or possible FinOps champions candidates can be obtained. This would be to prioritize and shift tasks and responsibilities to align with the availability necessary for this program or to perform smaller tasks from this paper that could be done by the champions candidates.  
---  

## Phase 3: Measure

As you get underway with the program, it’s important to set up a cycle where you are periodically measuring progress, sharing results, reassessing planned objectives, and identifying improvements as you go.

### Report on progress and success

Reporting on KPIs and other previously determined success criteria help the central FinOps Team and members of the Champions Program gauge their success and can inform decision making on changes that perhaps should be made to ensure future success. Furthermore, key stakeholders such as sponsors and [core FinOps personas](<https://www.finops.org/framework/personas/>) are important parties to keep informed of progress and to help with celebrating successes. It may also be that the Champions Program is required to deliver certain reports as part of the program. Depending on the reporting and the program objectives, reporting can take various forms. For example, dashboard reporting, email based reporting & news updates, mentions in meetings, etc.

Identify and produce metrics/indicators at varying levels of the organization on a regular cadence and communicate them to the appropriate stakeholders providing clear and concise summaries of performance metrics, trends, and actionable insights. As no two programs are alike, what you should measure to identify your success and progress will depend upon the program goals and objectives previously defined. Measuring your indicators should be carried out periodically – e.g. quarterly, or monthly or at the end of a sprint – in order to evaluate progress and demonstrate success. Here is a list of links and ideas from the many indicators of success that your champion program may find useful:

  * Improved FinOps Maturity – as potential indicated by a comparison of[ FinOps Maturity Assessment](<https://www.finops.org/wg/finops-assessment/>) values over time.
  * Improvement in Key Performance Indicators for FinOps such as those listed on the [FinOps KPIs](<https://www.finops.org/wg/finops-kpis/>) utility or similar KPIs. 
    * Unit costs
    * Budget metrics – e.g. variance evaluation, such as Budget vs Actual or Budget vs Forecast
    * Engagement Metrics – e.g. number of stakeholders either engaging with the central FinOps team or regularly deploying FinOps principles; attendance to FinOps events; completed training or certification numbers; tools usage.
    * Optimization Metrics – e.g. usage optimization amount; cost avoidance, such as waste reduction or rightsizing trends; rate optimisation related coverage, utilization, and savings amount.

### Request Feedback

Regularly collecting feedback from users, sponsors, and stakeholders is crucial for program development and evaluation. This feedback helps assess progress towards goals, evaluate operational processes, measure tool usability, and identify reporting needs. It is important to gather feedback through diverse channels such as 1-1 sessions, brainstorming sessions, or structured surveys. This feedback serves as the basis for informed decision-making and qualitative KPIs for evaluating program success.

## Outcomes and Indicators of Success

### Primary Outcomes from Champions Programs

The successful completion of this paper should result in a successful and knowledgeable group of FinOps Champions. The group of Champions will serve as a sounding board and as a support for the central FinOps team. As mentioned previously, every Champion program will be unique, aiming to achieve preset targets for specific KPIs. However, there is a [set of outcomes](<https://www.finops.org/wg/what-is-a-finops-champions-program/#benefits>) that any FinOps Champions Program is likely to attain, irrespective of your custom program configurations and goals:

  1. Cultural Shift
  2. Enhanced Collaboration having specific domain knowledge on FinOps optimizations.
  3. Improved Cost Optimization: Financial Transparency
  4. Localized Expertise for Actionable Insights
  5. Increased Accountability
  6. Informed Decision-Making

#### Possible Hurdle: Not Achieving the Expected Outcomes

Potentially, you could run into a situation in which the program is not generating the expected outcome. You may notice that the Indicators of Success are not improving with the program. In cases like this, it is important to go back to [Phase 1: Plan.](<#phase-1-plan>) This may happen because the objectives were not correctly related to the plan or because the objectives have changed over the time. Following FinOps approach, real-time feedback loops will bring more efficiency to the program.  
---  

## Conclusion

In this document we have listed the activities required to undertake a successful Champions Program. We have gone through the phases of identifying prerequisites, planning, implementing and then getting feedback and measuring KPIs for continual service improvement. While doing this we have identified success indicators, as well as calling out and providing remedial guidance on some possible hurdles you might face.

You may find that your rate of progress is constrained by the FinOps maturity of your organization, and the FinOps Champions involved. Progress can always be made, even if it’s only one small step at a time. Using the iterative approach of [the FinOps Maturity model](<https://www.finops.org/framework/maturity-model/>), and with patience and commitment, you will find that as the maturity increases and the capabilities of those FinOps Champions increase, so too will your rate of progress.

## Related Resources

  * [FinOps Framework Maturity Model](<https://www.finops.org/framework/maturity-model/>)
  * [Adopting FinOps – Getting Started](<https://www.finops.org/wg/adopting-finops/>)
  * [Encouraging Engineers to Take Action (finops.org)](<https://www.finops.org/wg/encouraging-engineers-to-take-action/>)

### Related FinOps Resources and Framework Capabilities

  * [What is a FinOps Champions Program?](<https://www.finops.org/wg/what-is-a-finops-champions-program/>)

## Acknowledgments

We’d like to thank the following people for their help on this Paper:

[ ![Aji Farinloye](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Aji Farinloye Wells Fargo ](<https://www.linkedin.com/in/afarinloye/>) [ ![Bryn Lai](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Bryn Lai Jack Henry & Associates ](<https://www.linkedin.com/in/bryn-lai-a338b93/>) [ ![Ekaterina Zemlyakova](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Ekaterina Zemlyakova Align Technology ](<https://www.linkedin.com/in/ekaterina-zemliakova-821882144/>) [ ![Ian Foster](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Ian Foster Marsh McLennan ](<https://www.linkedin.com/in/ianfosterbristol/>) [ ![Jason DiDomenico](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jason DiDomenico Discover Financial Services ](<https://www.linkedin.com/in/jasondidomenico/>) [ ![Jeff Hyatt](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jeff Hyatt Ticketmaster ](<https://www.linkedin.com/in/jeffalloneword/>) [ ![Kerri Andreas](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kerri Andreas TELUS Health ](<https://www.linkedin.com/in/kerriandreas/>) [ ![Marcus Coleman](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Marcus Coleman Virgin Media O2 ](<https://www.linkedin.com/in/marcus-coleman-1554925/>) [ ![Sai Ravindranath](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Sai Ravindranath J.P. Morgan Chase & Co. ](<https://www.linkedin.com/in/sailakshmiravindranath/>) [ ![Tatum Tummins](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Tatum Tummins Kion ](<https://www.linkedin.com/in/tatum-tummins-45513986/>) [ ![Vinay Pai](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Vinay Pai Virgin Media O2 ](<https://www.linkedin.com/in/paivinay/>) [ ![Tamara Lajara](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Tamara Lajara Crayon U.K. ](<https://www.linkedin.com/in/tamaralajara/>)

We’d also like to thank our supporters: Ben de Mora, Courtney Bormann, and Michelle Dupuis.

## On this page:

  * [Prerequisites](<#prerequisites>)
  * [Phase 1: Plan](<#phase-1-plan>)
  * [Phase 2: Implement](<#phase-2-implement>)
  * [Phase 3: Measure](<#phase-3-measure>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Conclusion](<#conclusion>)
  * [Related Resources](<#related-resources>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ FinOps Education & Enablement ](<https://www.finops.org/framework/capabilities/finops-education-enablement/>)
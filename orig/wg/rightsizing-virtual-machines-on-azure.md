# Rightsizing Virtual Machines on Azure

**Summary:** To rightsize Azure virtual machines, review recommendations from Azure Advisor to identify underutilized resources based on CPU and memory metrics over a 30-to-90-day lookback period. Collaborate with application owners and engineers to verify that reconfiguring these VMs will not negatively affect workload performance or violate vendor requirements. After securing buy-in, coordinate the execution of size changes, ensuring that performance tests are conducted before the new configurations go live in production. Report the achieved savings and continue to monitor the impact on commitment-based discounts to prevent unintentional cost increases from scope changes.

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Related Resources](<#related-resources>)
  * [Acknowledgments](<#acknowledgments>)

This playbook provides best practices to help the FinOps, Engineering and DevOps teams to work together to identify and implement rightsizing recommendations in an effective way that reduces risk to the business in Microsoft Azure. With rightsizing, project teams utilize cloud resources that are rightly matched to the requirements of their workloads at the time they are provisioned.

We acknowledge that the specific instructions to perform such activity may change over time as Azure rolls out new features, pricing models, user interfaces, etc. and have tried to link out to relevant Azure provided documentation where possible to help this document stay relevant over time. The insights, instructions, and resources provided herein, in combination with those available direct from Azure should help individuals have a more complete understanding of this action as it pertains to FinOps and usage optimization.

### Who Should Use this Playbook

This playbook is meant for FinOps practitioners, Engineering and DevOps teams in any size of organization aiming to optimize their cloud usage by rightsizing their Azure virtual machines.

## Prerequisites

In order to successfully execute this playbook, the following prerequisites must be met:

  * You require one of the following permissions: 
    * Owner or contributor access to an Azure subscription enables you to take action on the recommendations
    * Reader permission enables you to simply read

Additionally, a general understanding of Azure VMs and related pricing is beneficial.

### Who needs to be involved

To establish rightsizing successfully in an organization, the activity needs to be a joint collaboration between the personas outlined below.

#### Personas

  * **FinOps Practitioner (Driver)** : The FinOps practitioner will identify optimization opportunities by reviewing recommendations from Azure Advisor for underutilized VMs and share these findings with the appropriate parties. Further analysis of VM utilization can be completed using native, homegrown or 3rd party the tools, and through conversations with other key personas, i.e. Application Owner and Engineers to help determine which sizing option(s) will be best for the VMs in question
  * **Application Owner (Decider)** : The FinOps Practitioner will present the Application Owner and Engineers with the cost savings that would result from rightsizing the identified VMs as well as their current utilization metrics. The Application Owner and Engineers will verify the assumptions and make a decision, with the key factor being that reconfiguring the VMs will not negatively affect performance or interfere with a sizing requirement set by an outside vendor for the workload.
  * **Engineering (Contributor)** : The Engineers will be responsible for executing the rightsizing activities of the identified underutilized VMs and testing that performance is not impacted.
  * **Budget Owner** **(Informed)** : The Budget Owner will be informed of the forecasted cost savings and updated if any additional changes are made.

#### Phases

  * **Inform Phase** : 
    * The FinOps team will be responsible for educating engineering on the value of reducing waste through rightsizing, and provide the necessary business intelligence on the ideal candidates for rightsizing.
    * The leadership teams will play a vital role in providing buy-in and support to the FinOps activities as early as possible as deciders.
  * **Optimize Phase** : 
    * Engineers will analyze the workloads that have been recommended for rightsizing and work with the FinOps team to ensure the recommendations meet the minimum requirements of the workloads and will not cause disruption of the team’s business delivery.

### Information and resources required

#### Information

  * An understanding of Azure virtual machines and their pricing is vital before embarking on rightsizing.
  * Familiarity with commitment based discounts and how that impacts rightsizing decisions is beneficial in avoiding pitfalls.
  * A way to identify the primary owner/team within the organization (e.g. via resource tags) that uses the virtual machines is necessary as their input is key in confirming the feasibility of the recommendations.

#### Tools, utilities & templates

Identification of rightsizing candidates can be achieved using a variety of FinOps tooling including third party, home grown, and utilities available directly from the cloud service or technology provider, some of which are listed on the [FinOps Landscape](<https://www.finops.org/landscape/>). As we cannot speculate which other tools may be available to you, this playbook will focus on the tools provided by Azure.

## Instructions for running this Playbook

### Prep and execute – 30 minutes

  * **Prep: 1 Min:** In this step, you will sign into your Azure portal using the credentials provided by our organization.
  * **Execution: 20 Min:** In this part, you will access and export the Azure Recommendations from your Azure portal for analysis.

#### Rightsizing based on Azure Advisor recommendations:

  * Sign in to your **Azure portal**.
  * Navigate to the “**Advisor** ”.
  * Look for “**Recommendations** ” under the “**Cost** ” pillar.
  * From the list of recommendations generated on the Recommendations details page, you can view the usage patterns of the particular virtual machine you would like to review further.

This will take you to the **Metrics** page of the virtual machine with visualizations of the utilization and performance of the virtual machine in question. By default, the metric “**Percentage CPU (Avg)** ” is selected and “**Last 7 days** ” is set as the lookback period.

  * Select your desired lookback period. In general, a lookback period of 30-90 days provides a relatively accurate picture of the resource utilization but be sure to consider if that time period is appropriate for your specific situation or not. This is especially important if your workloads tend to peak during specific periods due to seasonal demand. The lookback period you choose should cover such peaks.
  * You can change the filter or check other sources for examining other relevant metrics for review.

#### Guidance on Selecting Metrics for Right-Sizing

**Percentage CPU (Avg) and Percentage CPU (Max):** Together, these metrics provide a comprehensive view of CPU utilization, highlighting both average load and peak demand, which is critical for ensuring the VM can handle typical and peak workloads.![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20392%20206'%3E%3C/svg%3E)

**Percentage CPU (Avg):** This metric shows the average CPU utilization over the selected time period. It helps you understand the overall CPU usage and determine if the virtual machine has adequate CPU resources for its workload. A consistently high average CPU utilization may indicate the need for more CPU resources, whereas a low average may suggest over-provisioning.

**Percentage CPU (Max):** This metric shows the maximum CPU utilization observed during the selected time period. Monitoring the max percentage is crucial to identify peak usage times and ensure the VM can handle occasional spikes in workload without performance degradation. If the max CPU utilization frequently hits 80% or higher, it may be a flag for review and potential right-sizing.

**Memory Usage (Avg) and Memory Usage (Max):** These metrics help ensure that the VM has enough memory for its workload under normal and peak conditions, preventing performance degradation due to insufficient memory.

**Memory Usage (Avg):** This metric shows the average memory usage of the virtual machine. Monitoring this metric helps in assessing whether the VM has enough memory to handle its workload without frequent paging, which can slow down performance.

**Memory Usage (Max):** This metric indicates the maximum memory usage during the selected time period. It is important to monitor this to ensure that the VM has sufficient memory during peak usage times to prevent out-of-memory issues.

**Example: Disk I/O (Read/Write Ops) and Network Throughput (Bytes In/Out):** ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20253%20209'%3E%3C/svg%3E)These metrics are important for understanding the I/O and network demands of the VM, which can affect overall performance and user experience.

**Disk I/O (Read/Write Ops):** This metric tracks the number of read and write operations per second. High values may indicate heavy disk usage, and you might need to consider upgrading storage performance or increasing disk capacity if the VM frequently hits high I/O operations.

**Network Throughput (Bytes In/Out):** This metric measures the amount of data being transmitted and received by the VM. It is essential to monitor network throughput to ensure that the network capacity is sufficient for the workload demands, especially for applications that rely heavily on network communication.

For more detailed guidance on the metrics for rightsizing, you can refer to [Microsoft documentation ](<https://learn.microsoft.com/en-us/answers/questions/1375053/requesting-clarification-on-azure-advisor-vm-right>)which discusses best practices and considerations for right-sizing VMs in a cloud environment. Note also the below considerations for different server types:

**Database Servers:** Often have high memory and disk I/O demands. Monitor Memory Usage (Avg and Max) and Disk I/O metrics closely. If max memory usage frequently hits 80% or higher, consider increasing memory.

**Web Servers:** Typically have high network throughput and moderate CPU usage. Focus on Network Throughput and CPU (Avg and Max) metrics. If max CPU utilization frequently reaches 80% or more, review the CPU allocation.

**Application Servers (e.g., hosting HR applications):** May have varied resource demands. Monitor all metrics but pay special attention to the specific needs of the applications hosted (e.g., memory usage for applications with heavy in-memory processing).

  * If you are not the resource owner, it is advisable to consult the owner to discuss the feasibility of the recommended resizing, especially in regards to the impact it may have on the daily business or committed based discounts. Examples of questions to be clarified are:
  * Do you have any vendor requirements for VM sizing?
  * Are you using an instance type from a previous generation?
  * Can VM scale sets be leveraged in your VM configuration?
  * If using Azure Reserved Instances and/or Azure Savings Plans, do you have the flexibility to move to a different VM size / type?
  * Can burstable VMs be leveraged for this workload?

Always ensure you have resource owner buy-in before performing any size changes. See also [exceptions and considerations](<https://docs.google.com/document/d/1Tm1DE1MWgDI_2vJHGZJELUvJhz5ZVbRQ/edit#heading=h.3rdcrjn>) for other factors to look out for before committing the rightsizing action.

  * Once it’s been clarified that the rightsizing won’t impact the associated applications negatively, agree on a concrete roadmap for the implementation of the size changes. Each organization has its own process for accomplishing change requests. It’s important though to ensure that the internal change process includes a performance test phase before the right-sized changes are committed and go live.
  * In the event that the results of the performance tests are not in favor of the rightsizing recommendation, you need to decide whether to dismiss or postpone recommendations on a single resource. If you dismiss a recommendation, you do not see it again unless you manually activate it. However, postponing a recommendation allows you to specify a duration after which the recommendation is automatically activated again
  * The rightsizing is deemed successful, if the applications run as usual following the size changes. The FinOps team is responsible for reporting and tracking the impact of the rightsizing and the associated achieved savings.

## Outcomes and indicators of success

### Primary outcomes of running this Playbook

As the driver of this activity, the FinOps team needs to define a communication process to regularly review the recommendations and engage with the respective resource owners to align on the feasibility and roadmap for executing the recommendation(s). Rightsizing is not a one-off exercise as business needs keep on changing.

In general, the frequency of rightsizing depends on the workload peaks of your organization. It is good practice to have a clearly defined schedule in place as this will simplify management and ensure ownership and responsibilities of rightsizing are set. The success of rightsizing is achieved when project teams achieve good levels of utilization with overprovisioning decreasing over time without impact on the business.

### Exceptions and considerations

  * An important note: The FinOps team supports in providing the necessary data to identify candidates for rightsizing (Inform phase). However, the resource owners have to consent to the rightsizing because they know the requirements of their applications more than any data!
  * Be prepared to initially receive resistance from resource owners. So, ensure your business case is based on data that is reliable.
  * Discuss with the resource owners common/expected spikes and ensure the recommended SKU can handle them to avoid business outages.
  * Since rightsizing involves some downtime, a common strategy is to begin with non-production resources with the highest savings potential. Having resource tagging in place simplifies the identification of the non-business critical resources.
  * Rightsizing is not an “all or nothing” exercise and can be done incrementally over time. Making smaller-stepped infrastructure changes over time not only decreases the risk of service disruption, it helps build the internal rightsizing motion and may increase buy-in when it comes to future rightsizing opportunities.
  * Keep in mind that some resources may be Reserved Instances (RIs). Changing the size of the virtual machine may cause the utilization of the RI to drop significantly. This would reduce the discount that is applied to the compute usage of the virtual machines within the scope of the purchased RIs. Therefore, it is important to continuously monitor the utilization of existing RIs while rightsizing resources. Although Azure offers[ Instance Size Flexibility (ISF)](<https://learn.microsoft.com/en-us/azure/virtual-machines/reserved-vm-instance-size-flexibility>) by default, note that this applies only to the ISF group as defined by Microsoft. Resizing outside of the ISF group will incur Pay As You Go (PAYG) charges in addition to the RI charges! Therefore, continuously educating the RI owners on the impact of changing the VM sizes that are associated with RIs is very important. Additionally, a communication process should be defined to enable RI owners to involve the FinOps team in workload resizing discussions as early as possible so that they can make any necessary RI exchanges to match the new VM size as soon as the rightsizing has gone live.
  * It’s recommended to combine compute rightsizing with licensing optimization (e.g. SQL Database Instances) to get the highest benefits.
  * Rightsizing of production resources should never be conducted without a Proof of Concept (POC) to simulate the impact of the changes.
  * To determine the optimal sizing for resources, analysis of the historical and technical utilization data is necessary, and should not be limited to CPU only. However, please note that [memory](<https://learn.microsoft.com/en-us/azure/azure-monitor/agents/agents-overview>) and other additional metrics are not collected by default, and need extra steps or tooling to collect. In the absence of memory metrics, you could consider analyzing the Outbound Network utilization in addition to CPU utilization.
  * Azure Advisor rightsizing recommendations can be either upstream (when you increase the VM size) or downstream (when you decrease the size of a particular instance) based on the historical performance.

## Related Resources

### Related FinOps Resources and Framework Capabilities

  * [Resource Utilization & Efficiency (finops.org)](<https://www.finops.org/framework/capabilities/utilization-efficiency/>) This is the capability that is connected to this optimization strategy.
  * The related Domain is [Cloud Usage Optimization (finops.org)](<https://www.finops.org/framework/domains/cloud-usage-optimization/>).

## Acknowledgments

We’d like to thank the following people for their work on this Playbook:

[ ![Marcel Paap](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Marcel Paap Rabobank ](<https://www.linkedin.com/in/marcelpaap/>) [ ![Caroline Kosgey-Metz](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Caroline Kosgey-Metz Crayon U.K. ](<https://www.linkedin.com/in/caroline-kosgey-metz-3652505/>) [ ![Brian Robbins](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Brian Robbins Guidehouse ](<https://www.linkedin.com/in/brianrobbins777/>)

We’d also like to thank our supporters, Angel Alves, Noel Crowley, Brian Robbins, and Matt Walls.

Last updated: March 17, 2026

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Related Resources](<#related-resources>)
  * [Acknowledgments](<#acknowledgments>)

###### [Learn the fundamentals Level up your knowledge with FinOps Certified Practitioner Get started  ![Learn the fundamentals](https://www.finops.org/wp-content/uploads/2025/12/certified-practitioner.svg) ](<https://learn.finops.org/path/finops-certified-practitioner-self-paced>)

##### Related FinOps Capabilities

[ Usage Optimization ](<https://www.finops.org/framework/capabilities/usage-optimization/>)
# Removing Unused Azure Private Links

**Summary:** Identify unused Azure Private Links by auditing resources in the Azure Portal for those without active connections or associated private endpoints. Analyze telemetry data from Azure Monitor and Log Analytics to confirm a lack of heartbeats over a significant time frame before recommending removal. Once stakeholders approve, the practitioner deletes the identified links using the original deployment method, such as Infrastructure as Code (IaC) or manual processes. This action minimizes the organization’s attack surface and ensures more efficient management of the cloud inventory.

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Gather Data](<#gather-data>)
  * [Analyze Telemetry Data](<#analyze>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Related Resources](<#related-resources>)
  * [Acknowledgments](<#acknowledgments>)

This playbook guides the Engineering and DevOps teams to identify and clean-up unused Azure Private Links & Services. Unused Azure Private Links are private links that aren’t used in a running deployment.

Although Microsoft doesn’t charge for the service, it’s best to remove Azure private links that are no longer being used and have no private endpoints attached to them in order to reduce the number of running services that an organization is actively maintaining to the ones it is actually using; thus, helping reduce the attack surface and make efficient use of cloud inventory.

We acknowledge that the specific instructions to perform this activity may change over time as Azure rolls out new features, pricing models, user interfaces, etc. and have tried to link out to relevant Azure provided documentation where possible to help this document stay relevant over time.

The insights, instructions, and resources provided herein, in combination with those available direct from Azure should help individuals have a more complete understanding of this action as it pertains to FinOps and usage optimization.

## Who Should Use this Playbook

Any persona that has owner or contributor access to an Azure subscription.

## Prerequisites

### Azure Subscription and Permission

To effectively use this playbook you must be running Azure Subscription with proper billing details, Azure PaaS services (Azure SQL, Storage, Monitoring) with private endpoint enabled.

### Who needs to be involved:

  * **Inform** – Subscription owners / Business / Engineering teams responsible for their respective cloud costs review FinOps showback reports to analyze the cloud spend incurred by unused Azure Private Endpoints & Links
  * **Optimize** – Engineers / Application Architects review the list of unused private links and depending on their application requirements mandate the next optimization steps – delete or keep
  * **Operate** – Engineers implement the actions: to delete or keep the current ones.

## Information and resources required

Below is important to the success of running this play:

  * Understand[ Azure Private Links](<https://learn.microsoft.com/en-us/azure/private-link/private-link-overview>) – Azure Private Links enables you to access Azure PaaS Services (for example: Azure monitor, Azure Storage and SQL Database) and Azure hosted customer-owned / partner services over a private endpoint in your virtual network.
  * Proficiency with Azure Portal, Azure Resource Graph Explorer, Azure Powershell (see tools section)
  * Contributor access to Azure subscriptions

### Tools, Utilities & Templates

Links to tools, utilities and templates to use during the playbook.

  * Azure Portal
  * Azure Resource Graph Explorer
  * Azure Powershell
  * Azure Cost Analysis
  * Azure Network watcher
  * Azure Monitor

## Gather Data – 30 minutes

**Who** : FinOps Analyst

**What** : Conduct assessment on Azure Private Link service using Azure portal to enable Monitoring, identify unused Azure Private Link, Post approval from your organization perform clean-up using the change management process (using IaC or Manual depending on organization strategy.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20818%20352'%3E%3C/svg%3E)

Source: [Manage Azure Private Endpoints](<https://learn.microsoft.com/en-us/azure/private-link/manage-private-endpoint?tabs=manage-private-link-powershell#private-endpoint-connections>)

  * Access your current Private link services 
    * Login to Azure Portal and navigate to **Private Link services**.
    * When in the console, view this list of your current Azure Private Links and check their active connections.
    * Look for the ones that currently don’t have any active connections or Private Endpoints associated with them.

## Analyze Telemetry Data using Azure Monitor and Log Analytics

### Enable Diagnostics within Azure Monitor for Private Link – 10 minutes

If you haven’t already, [enable Diagnostics within Azure Monitor for Private Link services](<https://learn.microsoft.com/en-us/azure/azure-monitor/logs/private-link-configure>). This will allow you to collect relevant telemetry data. You can configure this through the Azure Portal or by using Azure PowerShell or Azure CLI.

### Create a Log Analytics Workspace – 10 minutes

If you don’t have one already, [create a Log Analytics workspace in Azure](<https://learn.microsoft.com/en-us/azure/azure-monitor/logs/quick-create-workspace?tabs=azure-portal>). This workspace will be used to store and analyze the monitoring data.

### Configure Log Analytics Integration – 10 minutes

[Configure Diagnostics within Azure Monitor](<https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/diagnostic-settings>) to send data to your Log Analytics workspace. Query Log Analytics for Private Link Usage using the below query which retrieves heartbeats related to Private Link services and their associated network interfaces:

| where ResourceProvider == “MICROSOFT.NETWORK” and Resource == “PRIVATELINKSERVICES” and ResourceType == “NETWORKINTERFACE”

| project PrivateLinkServiceName, ResourceId, TimeGenerated

### Identify Unused Private Links – 15 minutes

Analyze the query results to identify Private Link services that have not been used for a significant period. It’s crucial to exercise caution in this process, considering potential implications for connectivity.

You may want to set a lengthy time frame to avoid accidentally removing necessary connections that happen infrequently. Doing so ensures that the FinOps initiative maintains credibility and doesn’t disrupt essential operations.

Additionally, it’s advisable to seek consensus and provide the data to relevant stakeholders, such as engineers and business units, before considering any removal actions. Unused Private Link services may lack recent heartbeat entries, indicating they haven’t been actively used. Compile a report detailing these findings, highlighting potential areas for cost optimization while prioritizing operational stability.

### Clean Up Unused Private Links

Once you’ve identified the unused Private Link services, you can take the [necessary actions to delete them.](<https://learn.microsoft.com/en-us/azure/stream-analytics/private-endpoints>)

Note: Private links should be removed via the same method they were deployed (IaC or manual). This should take about **10 minutes**.

## Outcomes and Indicators of Success

### Primary Outcomes of running this playbook

**Unused Azure Private Links** that aren’t used in a running deployment will be identified and deleted to reduce the number of resources that are no longer being actively used. This benefits organizations by reducing the number of running services which require maintenance and thus helping reduce its attack surface and making for a more efficient use of cloud inventory. Additionally, this activity helps with:

  * Cost Optimization: By identifying the usage patterns of Azure Private Link services, organizations can optimize their resource allocation and usage, potentially reducing costs. This might involve analyzing the number of private endpoints used, the associated network traffic, and the associated costs.

  * Governance and Compliance: FinOps can play a crucial role in ensuring that the use of Azure Private Link services aligns with Governance and compliance requirements. This might involve reviewing the configuration of private endpoints to ensure they are only accessible to authorized users or services, and monitoring for any potential security threats.

  * Scalability and Performance: FinOps can help in planning for scalability and performance by analyzing the demand for Azure Private Link services and ensuring that resources are provisioned accordingly. This might involve forecasting future demand based on historical usage patterns and planning for scaling up or down as needed.

  * Budgeting and Forecasting: Understanding the cost of Azure Private Link services can help in budgeting and forecasting. By analyzing the costs associated with the use of private endpoints, organizations can better plan their budgets and forecast future costs.

### Indicators of Success

Number of unused private links reduced: the number of items that have been deleted as part of this exercise.

### Exceptions and Considerations

It is possible that some of these resources are being kept around as idle in order to be used in the future –**Informed ignore** of the unused Azure Private Links with the added labeling that – although unused now – They will be re-utilised at a later stage in the future.

## Related Resources

  * Removing unused Azure Private Endpoints (TBD)

### Related FinOps Resources and Framework Capabilities

<https://www.finops.org/framework/phases/>

Offers resources and community support for adopting FinOps best practices, focusing on cost management and optimization in the cloud.[ FinOps Foundation](<https://www.finops.org/>)

## Acknowledgements

We’d like to thank the following people for their work on this Playbook:

[ ![Diana Bele](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Diana Bele Independent Consultancy ](<https://www.linkedin.com/in/diana-bele-407bb224/>) [ ![Vinay Mani](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Vinay Mani EY ](<https://www.linkedin.com/in/vinay-mani-997558a/>)

We’d also like to thank our supporters, Dusty Bowling, Brian Robbins, and Noel Crowley.

Last updated: March 17, 2026

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Gather Data](<#gather-data>)
  * [Analyze Telemetry Data](<#analyze>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Related Resources](<#related-resources>)
  * [Acknowledgments](<#acknowledgments>)

###### [Learn the fundamentals Level up your knowledge with FinOps Certified Practitioner Get started  ![Learn the fundamentals](https://www.finops.org/wp-content/uploads/2025/12/certified-practitioner.svg) ](<https://learn.finops.org/path/finops-certified-practitioner-self-paced>)

##### Related FinOps Capabilities

[ Usage Optimization ](<https://www.finops.org/framework/capabilities/usage-optimization/>)
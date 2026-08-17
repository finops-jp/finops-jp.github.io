# Azure Unused App Service Plans

**Summary:** When applications are removed but their service plans remain active, organizations can incur unnecessary cloud costs based on the plan’s configured pricing tier. FinOps practitioners and engineering teams can use the guidance from this Playbook to identify unused App Service Plans and determine whether they should be deleted or scaled down to a lower pricing tier. Regularly review plan usage and collaborating with application owners to reduce wasted spend while maintaining efficient application hosting environments.

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Related Resources](<#related-resources>)
  * [Acknowledgments](<#acknowledgments>)

Azure App Service allows for web apps to be developed and run in Azure without managing infrastructure. All App Services must run in an App Service Plan. App Service Plans can be basic in the Free Tier, or very expensive based on the services they provide.

Selecting an App Service Plan that is too expensive or leaving App Service Plans running after App Services have been deleted are typical problems for organizations using App Services extensively or without experience. Like oversized VMs, App Service Plans can be Right Sized to meet the needs of the workloads running in them.

The playbook should be run on the cadence of a FinOps team’s Inform phase. If excessive App Service Plans cost is detected, use this playbook to identify unused App Service Plans in Azure Subscription(s) and then either delete or scale them down to free tier to lower costs.

### Who should use this Playbook

Resource cost owners and engineers operating Azure App Services in Subscriptions for hosting their applications may find this playbook useful.

## Prerequisites

### Who needs to be involved:

  * Inform Phase – Subscription owners/Business/Engineering teams responsible for their respective cloud costs review FinOps showback reports to analyze the cloud spend incurred by unused App Service Plans
  * Optimize Phase – Engineers/Application Architects review the list of unused App Service plans incurring costs and depending on their application requirements mandate the next optimization steps – delete or scale down to free tier
  * Operate Phase – Engineers implement the actions, to delete or scale down to free tier, on the unused App Service plans

### Information and resources required:

To best use this playbook the following information is needed:

  * An understanding of [App Service](<https://learn.microsoft.com/en-us/azure/app-service/>)
  * An understanding of [Azure App Service Plans](<https://learn.microsoft.com/en-us/azure/app-service/overview-hosting-plans>)
  * An understanding of [Azure App Service Plans pricing tiers ](<https://azure.microsoft.com/en-us/pricing/details/app-service/windows/>)
  * Knowledge about [Azure App Service Plans cost management](<https://learn.microsoft.com/en-us/azure/app-service/overview-manage-costs>)

#### Access requirements

  * Reader level access to Subscription(s) to identify and report on unused App Service Plans
  * Contributor access, granted at either Subscription(s) or Resource Group(s) or Azure App Service Plan(s) scope, to implement optimization strategies for unused App Service Plans

#### Tools, utilities & templates

  * [Azure portal](<https://portal.azure.com>)
  * Intro to PowerShell: [Get started with Azure PowerShell | Microsoft Learn](<https://learn.microsoft.com/en-us/powershell/azure/get-started-azureps?view=azps-10.4.1>)
  * PowerShell commands: 
    * Get details of [Azure App Service Plan](<https://learn.microsoft.com/en-us/powershell/module/az.websites/get-azappserviceplan?view=azps-10.4.1>)
    * Delete [Azure App Service Plan](<https://learn.microsoft.com/en-us/powershell/module/az.websites/remove-azappserviceplan?view=azps-10.4.1>)
    * [Set properties of Azure App Service Plan](<https://learn.microsoft.com/en-us/powershell/module/az.websites/set-azappserviceplan?view=azps-10.4.1>)
  * Automation tooling could be used to automate the steps including identification of unused ASP and deleting or scaling down remediation steps in a mature practice

## Instructions for running this Playbook

Below are steps to identify, validate and delete the unused App Service Plan (ASP) or scale down to Free Tier using Azure portal or PowerShell commands.

In a mature FinOps practice, the instructions steps can be automated using available automation tooling:

  * Step 1 of this playbook may be automated into regular Inform phase reporting.
  * Steps 2-4 should be conducted only when regular Step 1 reporting identifies items for action
  * Step 2 may be automated in mature organizations using process management tooling.
  * Steps 3 and 4 may be automated in mature organizations using automation tooling

### Step 1 – Identify/List all unused ASP – 10 Min

An ASP becomes unused when there are no longer any apps configured in it. To identify and get a list of all unused ASP in your entire tenant or in a specific Subscription or a Resource Group, go to the App Service Plan services page in Azure Portal and filter out all the plans using the column “Apps” set to 0. If you are looking at a subset of Subscriptions or Resource Groups, you may set Subscription/ResourceGroup filters accordingly.

[Azure Advisor ](<https://learn.microsoft.com/en-us/azure/advisor/advisor-reference-cost-recommendations#web>)can also be used to check for unused ASP recommendations.

### Step 2 – Validate unused ASP optimization – 30 Min

**_Note: Execution time varies as further optimization approvals to be confirmed_**

Once identified, the unused ASPs usage requirement needs to be validated with the Application/Architect team.

App Services applications in a Development or Test environment can often share a single ASP, or use free-tier prior to moving to Production, or more rigorous testing environments. Application/Engineering/Architecture teams should be able to provide support for the needs of the ASP as built.

Action can be determined based on validation of need by the Application team:

  * If the ASPs are no longer required then the resource owners/platform team can proceed to delete the plan **(Go to Step 3)**.
  * If the ASPs are required for future use cases but can be scaled down to a lower pricing tier or free tier then the resource owners/platform team can proceed to scale down the ASP tier to Free Tier or lower pricing tier **(Go to Step 4)**.
  * Please note that for ASPs configured with advanced features, scaling down to free tier is not possible.
  * If the ASPs are required as built, the FinOps team can document the rationale provided by the resource owners, and that no action is required for the identified ASP.

### Step 3 – Delete unused ASP

If unused ASP are identified/validated and confirmed for deletion, team(s) or individual(s) who manage resources and have the RBAC permissions can follow below instructions to delete unused ASP either from the Azure portal or using PowerShell commands.

#### Using Azure Portal – 15 Min

In the Essentials pane of ASP in the portal, validate an unused App Service Plan in the portal by checking the “Apps/(Slots)” link as highlighted in the below screenshot which should be 0.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201240%20237'%3E%3C/svg%3E)

Figure 1: Overview of Azure App Service Plan

Once validated, click on Delete button highlighted to the delete the App Service Plan.

#### Using PowerShell commands – 20 Min

Following Azure PowerShell cmdlets can be used to validate and delete unused ASP

Get number of apps configured in a given App Service plan and confirm its zero (0)

_Get-AzAppServicePlan_ – Follow [this Microsoft documentation link](<https://learn.microsoft.com/en-us/powershell/module/az.websites/get-azappserviceplan?view=azps-11.3.0>) for cmdlet details.

For example:
[code] 
    $NumOfSites=(get-azappserviceplan -resourcegroupname "<YourRGName>" -Name "<YourASPName>").NumberOfSites
[/code]

On successful validation of unused ASP, delete the Azure App Service plan

_Remove-AzAppServicePlan –_ Follow [Microsoft documentation link](<https://learn.microsoft.com/en-us/powershell/module/az.websites/remove-azappserviceplan?view=azps-11.2.0>) for cmdlet details.

For example:
[code] 
    Remove-AzAppServicePlan -ResourceGroupName "<YourRGName>" -Name "<YourASPName>"
[/code]

### Step 4 – Scale down unused ASP To Free Tier or lower pricing tier

If unused ASP are identified/validated and confirmed to be scaled down, the resource owners can follow below instructions to scale down unused ASP either from the Azure portal or using PowerShell commands.

#### Using Azure Portal – 15 Min

In the Essentials pane of ASP in the portal, validate the unused App Service Plan in the portal by checking the “Apps/(Slots)” link as highlighted in the screenshot Figure 1 in section 3 above.

Note down the current pricing plan of the ASP and add a new tag with the same. The tag will be useful in scenarios where the unused ASP will be hosting apps again and needs to be scaled back to its original pricing configuration.

To scale down the pricing tier, click on the “Scale Up” on the left pane and then in the resulting screen, select the Free Tier F1 to scale down to free pricing tier or the agreed upon lower pricing tier.

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201922%20820'%3E%3C/svg%3E)

Figure 2: Scaling options for Azure App Service Plans

#### Using PowerShell commands – 20 Min

Following PowerShell cmdlets can be used to validate and scale down unused ASP.

Get number of apps configured in a given App Service plan and confirm it’s zero (0).

_Get-AzAppServicePlan_ – Follow [Microsoft documentation link](<https://learn.microsoft.com/en-us/powershell/module/az.websites/get-azappserviceplan?view=azps-11.3.0>) for cmdlet details.

For example:
[code] 
    $NumOfSites=(get-azappserviceplan -resourcegroupname "<YourRGName>" -Name "<YourASPName>").NumberOfSites
[/code]

Note down the current pricing plan of the ASP and add a new tag with the same. The tag will be useful in scenarios where the unused ASP will be hosting apps again and needs to be scaled back to its original pricing configuration.

_Update-aztag_ – Follow these Microsoft documentation links for cmdlet details or [PowerShell help](<https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources-powershell >).

For example:
[code] 
    $OrigTier=(Get-AzAppServicePlan -ResourceGroupName "<YourRGName>" -Name "<YourASPName>").Sku.Size

    $tags = @{“OriginalPricingTier”=$OrigTier}

    $resource = Get-AzResource -Name “<YourASPName>” -ResourceGroup “<YourRGName>”

    Update-AzTag -ResourceId $resource.id -Tag $tags -Operation Merge

[/code]

On successful validation scale down the plan tier to confirmed tier/worker size:

_set-Azappserviceplan –_ Follow this [Microsoft documentation link](<https://learn.microsoft.com/en-us/powershell/module/az.websites/set-azappserviceplan?view=azps-11.3.0>) for cmdlet details.

For example:
[code] 
    set-Azappserviceplan -Tier "<YourASPTier>"-resourcegroupname “<YourRGName>" -Name "<YourASPName>" -WorkerSize "<YourASPWorkerSize>”
[/code]

_For Free tier F1, use parameter values -Tier “Free”, -Workersize “Small”_

## Outcomes and indicators of success

### Primary outcomes of running this Playbook

  * Unused App Service Plans which are required are identified and documented.
  * Total number of unused App Service plans and corresponding costs are reduced.

### Indicators of success

  * Azure resource report of unused App Service Plans shows significant reduction and any existing unused App service plans are in free tier or documented as being required.
  * Total consumption cost of any unused App Service Plans in the showback reports is zero.

### Exceptions and considerations

  * Scale down to Free tier will not work in scenarios when additional features configured for App Service Plan are not supported in Free tier.

Scale down to Free tier is not available from all ASP pricing tiers.

## Related FinOps Resources and Framework Capabilities

  * [Resource Utilization & Efficiency (finops.org)](<https://www.finops.org/framework/capabilities/utilization-efficiency/>)

## Acknowledgments

We’d like to thank the following people for their work on this Playbook:

[ ![Madhuri Mereddy](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Madhuri Mereddy Shell ](<https://www.linkedin.com/in/madhuri-mereddy-a865668/>)

We’d also like to thank our supporters: Diana Bele and Marcel Paap.

Last updated: March 16, 2026

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Related Resources](<#related-resources>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ Usage Optimization ](<https://www.finops.org/framework/capabilities/usage-optimization/>)
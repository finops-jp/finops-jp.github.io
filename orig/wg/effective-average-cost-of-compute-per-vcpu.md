# How to Calculate Effective Average Cost of Compute per vCPU

**Summary:** Calculating the Effective Average Cost of Compute per vCPU provides a normalized metric that tracks how commitment discounts and savings instruments impact cost trends over time. By moving away from skewed “average VM” views to a per-vCPU effective cost, which includes amortized purchases and unused commitment costs, practitioners can accurately assess whether their discount coverage is improving or if optimization is needed.

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions for AWS](<#instructions-aws>)
  * [Instructions for Azure](<#instructions-azure>)
  * [Instructions for OCI](<#instructions-oci>)
  * [Instructions for FOCUS](<#instructions-focus>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Acknowledgments](<#acknowledgments>)

As an organization’s usage and spend in the public cloud increases, it becomes important to understand how different services and savings instruments, e.g. commitment discounts, impact cost trends. The FinOps Practitioner or Engineer can use these trends to track efforts over time.

Cloud Service Providers (CSPs) price the majority of virtual machines (VM) using a linear model, where increasing the number of virtual CPUs (vCPUs) increases the cost by the same multiple. Trending compute solely on an average number of VMs will provide a skewed cost view. Additionally, any discount instruments that impact VM cost need to be applied as well. An alternate method of using Effective Cost to trend the average compute cost can be used to address this skew.

Effective Cost represents a cost inclusive of the impacts of all reduced rates and discounts, augmented with the amortization of relevant purchases (one-time or recurring) paid to cover future eligible charges. This playbook is designed to provide organizations and FinOps Practitioners the steps to compute [Effective Average Cost of Compute per vCPU](<https://www.finops.org/wg/finops-kpis/?prod_kpis%5Bquery%5D=effec#modal-kpi-9649>).

### Formula
[code] 
    (Amortized Cost + Unused Commitment Discount Cost + Compute Cost) / Total number of Cores

[/code]

### Who Should Use this Playbook

This playbook can be used by any Personas within an organization at any level of cloud adoption or FinOps maturity that are interested in computing the effective average compute cost per vCPU.

## Prerequisites

In order to gather the cost and usage information, the Practitioner must have access to CSP billing data. Steps for this vary by CSP and organization – refer to publicly available documentation from the CSP.

### Who needs to be involved

  * FinOps Practitioner or Engineer will obtain billing data so that the Effective Cost can be calculated
  * FinOps Practitioner or Engineer will obtain vCPU metrics so that the per vCPU cost can be calculated

### Information and resources required

This section provides information that contributes to the success of this playbook; the information here may include specific datasources, reports or any relevant input.

#### Information

  * CSP billing data of compute resources including on-demand cost and Commitment Discount (used and unused costs) for given time period
  * Metrics on how many vCPUs were deployed during given time period

#### Tools, Utilities & Templates

Links to tools, utilities and templates to use during the playbook

  * AWS Powershell or Cloud Shell
  * AWS CloudWatch
  * AWS CUR Billing Data
  * Amazon Athena
  * Azure Cost Management & Billing
  * Azure PowerShell or Cloud Shell
  * FOCUS Billing data or convertor

## Instructions for running this Playbook for AWS

### Option 1 – AWS Cost Explorer and Powershell/Cloud Shell

#### Preparation of scripting environment

In order to calculate the number of vCPUs over the evaluation time frame you must first configure a scripting environment. This playbook references PowerShell to obtain the vCPUs, two possible environments you can use is AWS Cloud Shell or PowerShell on your local computer. For instructions on setting these up see the following AWS Public Documentation:

  * [AWS PowerShell](<https://docs.aws.amazon.com/powershell/latest/userguide/pstools-getting-set-up.html>)
  * [Get started with AWS Cloud Shell](<https://docs.aws.amazon.com/cloudshell/latest/userguide/getting-started.html>)

#### Calculating Effective Cost

Before calculating the Effective Cost the Practitioner must determine the scope of the evaluation:

  * Time period
  * Billing scope, e.g. account(s), region etc.

This playbook assumes the time period of one month, i.e. April 2024, and an entire billing organization (payer and linked accounts) will be used. AWS factors in unused commitment discounts in Net Amortized and Amortized Cost, therefore this can be used for Effective Cost.

  * Log into the AWS console in the billing account you wish to perform the analysis in.
  * Open [Cost Explorer](<https://us-east-1.console.aws.amazon.com/costmanagement/home?region=us-east-1#/cost-explorer>) located in the [Billing and Cost Management](<https://console.aws.amazon.com/costmanagement/home>) console
  * Set the following **Report parameters**. This [report link](<https://us-east-1.console.aws.amazon.com/costmanagement/home#/cost-explorer?chartStyle=STACK&costAggregate=netAmortizedCost&excludeForecasting=false&filter=%5B%7B%22dimension%22:%7B%22id%22:%22Service%22,%22displayValue%22:%22Service%22%7D,%22operator%22:%22INCLUDES%22,%22values%22:%5B%7B%22value%22:%22Amazon%20Elastic%20Compute%20Cloud%20-%20Compute%22,%22displayValue%22:%22EC2-Instances%20\(Elastic%20Compute%20Cloud%20-%20Compute\)%22%7D%5D%7D%5D&futureRelativeRange=CUSTOM&granularity=Monthly&groupBy=%5B%22Service%22%5D&historicalRelativeRange=LAST_MONTH&isDefault=true&reportName=New%20cost%20and%20usage%20report&showOnlyUncategorized=false&showOnlyUntagged=false&usageAggregate=undefined&useNormalizedUnits=false>) has the parameters below preset. 
    * **Data range** , e.g. Past 1 month
    * **Granularity** : Monthly
    * **Filter > Service**: EC2-Instances (Elastic Compute Cloud – Compute)
    * **Advanced options > Aggregate by cost**: Net amortized cost
  * Record the total cost, this value as you will use it in a later section.

#### Calculating the Number of vCPUs

Applying the same scope that was used in the previous section, open your scripting environment of choice which supports PowerShell. Authenticate to the billing account using the methods described in the documentation [above](<#instructions-aws>). Run the script below replacing the YYYY, MM & DD for the time period you are evaluating, then execute the script.
[code] 
    # Set time frame to evaluate
    $startDate = Get-Date -Year YYYY -Month MM -Day DD -Hour 00 -Minute 00 -Second 00
    $endDate = Get-Date -Year YYYY -Month MM -Day DD -Hour 23 -Minute 59 -Second 59
    $interval = New-Object Amazon.CostExplorer.Model.DateInterval
    $interval.Start = $startDate.ToString("yyyy-MM-dd")
    $interval.End = $endDate.ToString("yyyy-MM-dd")
    $hours = (($endDate - $startDate).Days) * 24

    # Using the UsageQuantity metric with Get-CECostAndUsage aggregates all usage numbers without taking into account the units. Filter only EC2: Running Hours
    $filter = @{
        "Dimensions" = @{
            "Key" = "USAGE_TYPE_GROUP"
            "Values" = @("EC2: Running Hours")
        }
    }

    # Get Cost Explorer data
    $result = Get-CECostAndUsage -TimePeriod $interval -Granularity MONTHLY -Metrics "UsageQuantity" -GroupBy @{Type="DIMENSION";Key="INSTANCE_TYPE"} -Filter $filter

    # Get Instance Types and vCPUs
    $instances = Get-EC2InstanceType | Select-Object InstanceType, @{Name="DefaultVCpus"; Expression={$_.VCpuInfo.DefaultVCpus}}

    # Access the ResultsByTime property
    $resultsByTime = $result.ResultsByTime

    # Loop through each result to calculate the vCPUs
    $totalvCPUs = 0
    foreach ($result in $resultsByTime) {
        $groups = $result.Groups

        foreach ($group in $groups) {
            $instanceType = $group.Keys
            $defaultvCPUs = ($instances | Where-Object { $_.InstanceType -eq $desiredInstanceType }).DefaultVCpus
            $usageQuantity = $group.Metrics["UsageQuantity"].Amount
            $totalVCPUs += ($defaultvCPUs * $usageQuantity / $hours)
        }

    # Output the number of vCPUs
        Write-Output "The total number of vCPUs used from '$startDate' to '$endDate' was $([math]::Round($totalVCPUs,5))"
    }

[/code]

#### Calculating KPI

Once you have the Effective Cost and the number of vCPUs from the previous two sections, you can calculate the KPI as
[code] 
    Effective Cost ÷ Number of vCPUs
[/code]

### Option 2 – AWS CUR and Athena (Advanced Option)

Calculating the KPI using this option is a more advanced method and can contribute to the overall cost of the organization’s AWS environment. The Practitioner should evaluate the estimated costs using [AWS Pricing Calculator](<https://calculator.aws/#/>) for services such as S3, Athena, Glue, used in this method before proceeding. Additionally, the Practitioner may require elevated permissions based on their organizations security posture.

#### Preparation of Billing Data

  * Cost and Usage Report (CUR) Setup – The steps necessary for creating a CUR are outside the scope of this playbook. See AWS public documentation for instructions, [Creating Cost and Usage Reports](<https://docs.aws.amazon.com/cur/latest/userguide/cur-create.html>). An existing CUR can be used if the following necessary configuration options were set for this process are: 
    * Time granularity – Choose the granularity you want to aggregate your costs on. If you are unsure, choose hourly.
    * Report versioning – Choose to overwrite the previous version of the report.
    * Enable report data integration for – Choose Athena. This will automatically set the report format as parquet.
  * Athena Setup – For detailed steps see published AWS documentation, [Setting up Athena using AWS CloudFormation templates](<https://docs.aws.amazon.com/cur/latest/userguide/use-athena-cf.html>). This process will set up the necessary resources in Athena, Glue and Lambda to allow you to query your CUR Data.

#### Calculating KPI

  * Query CUR Data using Athena to calculate Effective Compute Cost per vCPU 
    * After the prep steps have been completed and sufficient time has passed for the desired lookback period, run the Athena query below. Note, depending on the CB Discounts you have purchased and any private agreements you have with AWS (e.g., Enterprise Discount Program (EDP)), you may need to remove portions of this query if a particular column does not exist in the CUR. The query in its present state assumes the Practitioner’s organization has Savings Plans, Reservations and an EDP. It is also using a lookback period of the previous month.

[code] 
    WITH curtemp_effectivecost AS (
        SELECT
            SUM(
                CASE
                    WHEN line_item_line_item_type LIKE '%DiscountedUsage%' THEN cast(
                        (reservation_net_effective_cost) as DECIMAL(18, 3)
                    )
                END
            ) AS Amortized_RI_Costs,
            SUM(
                CASE
                    WHEN line_item_line_item_type LIKE '%SavingsPlanCoveredUsage%' THEN cast(
                    (savings_plan_net_savings_plan_effective_cost) as DECIMAL(18, 3)
                )
                END
            ) AS Amortized_SP_Costs,
            SUM(
                CASE
                    WHEN line_item_line_item_type LIKE '%RIFee%' THEN cast(
                        (
                            reservation_net_amortized_upfront_fee_for_billing_period
                        ) as DECIMAL(18, 3)
                    )
                END
            ) AS Unused_RI_for_Period,
            SUM(
                CASE
                    WHEN (
                        line_item_line_item_type LIKE '%SavingsPlanRecurringFee%'
                    )
                    AND (
                        savings_plan_unused_amortized_upfront_commitment_for_billing_period IS NOT NULL
                    ) THEN cast(
                        (
                        savings_plan_unused_amortized_upfront_commitment_for_billing_period
                        ) as DECIMAL(18, 3)
                    )
                END
            ) AS Unused_SP_for_Period,
            SUM(
                CASE
                    WHEN (line_item_line_item_type LIKE '%Refund%')
                    AND (reservation_reservation_a_r_n IS NULL) THEN cast((line_item_unblended_cost) AS DECIMAL(18, 3))
                END
            ) AS EDP_Credits,
            SUM(
                CASE
                    WHEN line_item_line_item_type IN ('Usage') THEN cast(line_item_unblended_cost AS DECIMAL(18, 3))
                END
            ) AS On_Demand,
            SUM(
                CASE
                    WHEN (product_vcpu <> '') THEN (
                        cast(product_vcpu as DECIMAL(18, 0)) * (
                            line_item_usage_amount / (
                                24 * (
                                    DAY(
                                        date_trunc('month', DATE_ADD('month', -1, CURRENT_DATE)) + interval '1' month - interval '1' day
                                    )
                                )
                            )
                        )
                    )
                END
            ) AS vCPU
        FROM
            testcur
        WHERE
            MONTH = CAST(
                MONTH(DATE_ADD('month', -1, CURRENT_DATE)) AS varchar(4)
            )
            AND YEAR = CAST(
                YEAR(DATE_ADD('month', -1, CURRENT_DATE)) AS varchar(4)
            )
            AND (
                (
                line_item_product_code = 'AmazonEC2'
                AND product_product_family IN ('Compute Instance', 'CPU Credits')
            )
            OR line_item_product_code = 'ComputeSavingsPlans'
        )
    )
    SELECT
        CAST(
            (
                (
                    COALESCE(SUM(curtemp_effectivecost.Amortized_RI_Costs), 0) +
                    COALESCE(SUM(curtemp_effectivecost.Amortized_SP_Costs), 0) +
                    COALESCE(SUM(curtemp_effectivecost.Unused_RI_for_Period), 0) +
                    COALESCE(SUM(curtemp_effectivecost.Unused_SP_for_Period), 0) +
                    COALESCE(SUM(curtemp_effectivecost.EDP_Credits), 0) +
                    COALESCE(SUM(curtemp_effectivecost.On_Demand), 0)
                ) / SUM(curtemp_effectivecost.vCPU)
            ) AS DECIMAL(18, 3)
        ) AS Effective_Cost_per_vCPU
    FROM
        curtemp_effectivecost

[/code]

## Instructions for running this Playbook for Azure

### Preparation of scripting environment

In order to calculate the number of vCPUs over the evaluation time frame you must first configure a scripting environment. This playbook references PowerShell to obtain the vCPUs, two possible environments you can use is Azure Cloud Shell or PowerShell on your local computer. For instructions on setting these up see the following Microsoft Public Documentation:

  * [How to install Azure PowerShell](<https://learn.microsoft.com/en-us/powershell/azure/install-azure-powershell>)
  * [Get started with Azure Cloud Shell](<https://learn.microsoft.com/en-us/azure/cloud-shell/get-started>)

### Calculating Effective Cost

Before calculating the Effective Cost the Practitioner must determine the scope of the evaluation:

  * Time period
  * Billing scope, e.g. Subscription, management group, tenant, region etc.

This playbook assumes the time period of one month, i.e. April 2024, and a single subscription will be used. Azure factors in unused commitment discounts in Amortized Cost, therefore this can be used for Effective Cost.

  * Log into the [Azure portal](<https://portal.azure.com/>).
  * If applicable, select the proper directory by clicking the gear icon in the top bar of the page
  * Use the search bar to open the **Cost Management and** **Billing** blade
  * If necessary, select the applicable **Billing Scope** / **Account** on the page
  * Click **Cost analysis** under **Cost Management**
  * Using the filters, that you would like to evaluate by setting the date filter to the desired month, **Service name: Virtual Machines** and **Subscription** to your desired subscription.
  * Below the filters and to the left change the cost metric from **Actual Cost** to **Amortized Cost**. Record this value as you will use it in a later section.

### Calculating the Number of vCPUs

Applying the same scope that was used in the previous section, open your scripting environment of choice which supports PowerShell and run the following script, replacing **< SubscirptionId>** with your Subscription ID (you can find your subscription id by following the instructions found [here](<https://learn.microsoft.com/en-us/azure/azure-portal/get-subscription-tenant-id#find-your-azure-subscription>)) and entering your desired Start Date and End Date in YYYY-MM-DD format. Record the number of vCPUs from the output.
[code] 
    # Set scope to evaluate
    $subscriptionId = ""
    $startDate = "YYYY-MM-DD"
    $endDate = "YYYY-MM-DD"

    # Connect to subscription
    $azSubscription = Get-AzSubscription -SubscriptionId $subscriptionId
    Set-AzContext -SubscriptionId $subscriptionId

    # Get usage data
    $usage = Get-AzConsumptionUsageDetail -IncludeAdditionalProperties -StartDate $startDate -EndDate $endDate | Where-Object { $_.Product -like "Virtual Machines*" }

    # Loop through usage to calculate the vCPUs
    $totalvCPUs = 0
    foreach ($usageDetail in $usage) {
        $additionalInfo = $usageDetail.AdditionalInfo | ConvertFrom-Json
        $vcpus = $additionalInfo.VCPUs
        $usagequantity = $usageDetail.usageQuantity
        $dailyVCPUUsage = ($usagequantity * $vcpus) / 24

        $totalVCPUs += $dailyVCPUUsage
    }

    # Output the number of vCPUs
    Write-Output "The total number of vCPUs used from '$startDate' to '$endDate' in Subscription '$($azSubscription.Name)' was $([math]::Round($totalVCPUs,5))"

[/code]

### Calculating KPI

Once you have the Effective Cost and the number of vCPUs from the previous two sections, you can calculate the KPI as
[code] 
    Effective Cost ÷ Number of vCPUs
[/code]

## Instructions for running this Playbook for Oracle Cloud Infrastructure (OCI)

### Calculating Effective Cost

Unlike other CSPs, discounts on Compute do not come from commitment discounts, but from contracted price sheets between Oracle and the customer. Therefore, the Practitioner has limited levers to pull to impact the Effective Cost.

Before calculating the Effective Cost the Practitioner must determine the scope of the evaluation:

  * Time period
  * Billing scope, e.g. Cloud account, tenant, region etc.

This playbook assumes the time period of one month, i.e. April 2024, and a single tenant will be used. Oracle factors in all contracted discounts into Cost, therefore this can be used for Effective Cost.

  * Log into the [OCI portal](<https://www.oracle.com/cloud/sign-in.html>).
  * Use the search bar to open the **Cost analysis**
  * Set the following options 
    * **Start date** and **End date** , e.g. April 1, 2024 to April 30, 2024
    * **Granularity:** Monthly
    * **Show:** Cost
    * **Filters:** Services > COMPUTE
    * **Grouping dimensions:** Service
  * Click **Apply**
  * In the **Cost details** the total cost will be displayed. Record this value as you will use it in a later section.

### Calculating the Number of vCPUs

OCI measures CPUs in OCPU units. The conversion of OCPUs to vCPUs is based on the CPU architecture. For Intel and AMD 1 OCPU is equal to 2 vCPUs, while for for ARM 1 OCPU is equal to 1 vCPU. For more information see [OCI Compute Pricing](<https://www.oracle.com/cloud/compute/pricing/>).

Using the same scope as the previous section, For the sake of this playbook the time period of a month, i.e. April 2024, and a single tenant will be used. Oracle factors in all contracted discounts into Cost, therefore this can be used for Effective Cost.

  * Log into the [OCI portal](<https://www.oracle.com/cloud/sign-in.html>).
  * Use the search bar to open the **Cost analysis**
  * Set the following options 
    * **Start date** and **End date** , e.g. April 1, 2024 to April 30, 2024
    * **Granularity:** Monthly
    * **Show:** Usage
    * **Filters:** Services > COMPUTE
    * **Grouping dimensions:** Service and Product Description
  * Click **Apply**
  * In the details of the **Usage to date** table sum the values of all the columns that contain **(OCPU per hour)** in the column heading. If you are running ARM in addition to Intel and/or AMD, total those separately.
  * You can now calculate the total vCPUs over evaluation time frame as: _Number of vCPUs = (Total Intel & AMD OCPU Hours x 2 +Total ARM OCPU Hours) (Number of days in evaluation period x 24)_

### Calculating KPI

Once you have the Effective Cost and the number of vCPUs from the previous two sections, you can calculate the KPI as:
[code] 
    Effective Cost ÷ Number of vCPUs
[/code]

## Instructions for running this Playbook using FOCUS

### Preparation of scripting environment

At the time of writing this playbook the FOCUS Specification is categorized as a Preview Candidate Release and not GA and this should be kept in mind by the Practitioner. These instructions are meant to be viewed as future state capabilities. To obtain FOCUS formatted billing data use an available export from the CSP or convertor:

  * [Azure: Export cost details using the FinOps Open Cost and Usage Specification (FOCUS)](<https://azure.microsoft.com/en-us/updates/export-cost-using-focus/>)
  * [FinOps.org: FOCUS Converter + Validator](<https://github.com/finopsfoundation/focus_converters>)

### Calculating Effective Cost

The FOCUS specification includes a column for Effective Cost which can be used to calculate the KPI.

### Calculating the Number of vCPUs

At the time of writing this playbook the FOCUS standard does not include a column that records the number of vCPUs. Instead the Practitioner will need to use one of the methods described in the sections above to calculate the number of vCPUs.

  * [AWS: Calculating the Number of vCPUs](<#calculating-vcpus-aws>)
  * [Azure: Calculating the Number of vCPUs](<#calculating-vcpus-azure>)
  * [OCI: Calculating the Number of vCPUs](<#calculating-vcpus-oci>)

### Calculating KPI

Once you have the Effective Cost and the number of vCPUs from the previous two sections, you can calculate the KPI as:
[code] 
    Effective Cost ÷ Number of vCPUs
[/code]

## Outcomes and Indicators of Success

This playbook should be run on a regular basis (e.g. monthly) to assess how the organization’s cloud compute spend is trending. From an Effective Cost perspective, an upward trend will typically indicate commitment based discounts coverage is decreasing or the organization is over committed while a decreasing trend will typically indicate commitment based discount coverage is increasing. From a vCPU perspective, a downward trend will indicate smaller or less compute instances are running and an upward trend would indicate larger or more compute instances are running.

This Practitioner can use this KPI to foster discussions with Finance, Engineering and Product personas on future planning of commitments and compute utilization. Additionally, it can be shared with Leadership to show optimization trends.

### Primary Outcomes of running this playbook

  * The primary outcome of running this playbook is to calculate a normalized cost per vCPU of compute, based on the effective cost for the given time period. This can be an early indicator of commitment based discount coverage changes.

### Indicators of Success

  * Tracking Effective Average Cost from one time period to the next provides the organization better accuracy in monitoring its compute cost trend. A decreasing trend will indicate an increasing cost to usage value.

## Acknowledgments

We’d like to thank the following people for their work on this Playbook:

[ ![Brian D’Altilio](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Brian D’Altilio Marsh McLennan ](<https://www.linkedin.com/in/brian-daltilio/>)

We’d also like to thank our supporters, Laura Mills, David Lambert, and Taylor Houck.

Last updated: March 17, 2026

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions for AWS](<#instructions-aws>)
  * [Instructions for Azure](<#instructions-azure>)
  * [Instructions for OCI](<#instructions-oci>)
  * [Instructions for FOCUS](<#instructions-focus>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ Rate Optimization ](<https://www.finops.org/framework/capabilities/rate-optimization/>)
# How to Calculate Percentage of Commitment Discount Waste

**Summary:** To calculate the Percentage of Commitment Based (CB) Discount Waste, FinOps Practitioners measure the portion of purchased commitment discounts (such as Reserved Instances or Savings Plans) that remained unused during a specific period. This metric is a vital indicator of over-provisioning and informs practitioners whether they need to scale back future commitments or increase the coverage of their workloads.

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions for AWS](<#instructions-aws>)
  * [Instructions for Azure](<#instructions-azure>)
  * [Instructions for GCP](<#instructions-gcp>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Acknowledgments](<#acknowledgments>)

This playbook provides guidance on how to measure the unused portion of committed discounts. [Percentage of Commitment Discount Waste](<https://www.finops.org/wg/finops-kpis/?prod_kpis%5BrefinementList%5D%5Bcapabilities.title%5D%5B0%5D=Rate%20Optimization#modal-kpi-9651>) refers to the percentage of commitments which have not been applied to on demand spend. This playbook is NOT meant to stipulate what percent is right or good for a business, but rather how to generate this metric to make informed business decisions.

**Formula**
[code] 
    unused CB percentage = (Cost of CB Discount unused / total cost CB Discount) x 100

[/code]

### Who Should Use this Playbook

Any individual that is responsible for making commitment discount purchases, individuals that are responsible for creating measurements to determine the effectiveness of committed discounts or both.

## Prerequisites

The following sections describe the data and stakeholder involvement needed to calculate, monitor, and improve upon KPIs.

  * Access to tools and data that provide: 
    * Total VM spend
    * Total VM cost covered by the commitment discounted spend
    * Current On-Demand prices for VM resources
  * Access to CSP-native cost management tools 
    * Azure Cost Management
    * AWS Cost Explorer
    * GCP Big Query configured and enabled with a data export for SQL queries
  * Time Period 
    * To effectively obtain data, it is essential to determine a specific period of performance. This step is crucial because different tools will yield varying results based on the time period you choose.
    * Month, day or other

### Who needs to be involved:

  * FinOps Practitioner will be an individual that will help develop the process for obtaining the data
  * Finance for validation of the commitment spend vs cloud service providers charges.
  * SQL developer if the maturity of the organization has GCP Big Query, AWS CUR (Athena) data deployed for SQL queries.
  * Developers for any API coding interfaces for obtaining the data through a programmatic means.
  * Procurement staff may need to be involved if any adjustments are needed to CSP commitments to improve KPI results.

**Note:** Individual involvement may vary from organization to organization depending on the maturity of the organization and skills and knowledge of the individuals.

### Information and resources required

This section provides information that contributes to the success of this Playbook; the information here may include specific datasources, reports or any relevant input

#### Information

  * AWS Billing & Cost Management – such as Cost explorer are designed to help users track, analyze, and control their spending on Amazon Web Services (AWS) resources.
  * The AWS Cost and Usage Report (CUR) provides detailed insights into the cost and usage of AWS services for better financial management and optimization.
  * Azure Cost Management and Cost Analysis tools are designed to help organizations monitor and optimize their cloud spending.
  * Azure Billing APIs are a set of tools and interfaces that allow users to programmatically manage and monitor their Azure cloud service usage and costs. These APIs provide capabilities such as retrieving billing data, generating invoices, tracking spending, managing subscriptions, and automating billing processes.
  * GCP BigQuery is a fully managed, serverless data warehouse and analytics platform offered by Google Cloud Platform. It enables users to store, query, and analyze large datasets quickly and efficiently.

#### Tools, Utilities & Templates

Links to tools, utilities and templates to use during the playbook.

  * AWS 
    * [AWS Cost and Usage Reports](<https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html>)
    * [Athena Queries for cost and Usage reports](<https://docs.aws.amazon.com/cur/latest/userguide/cur-query-athena.html>)
    * [Understanding Savings Plans – AWS Data Exports](<https://docs.aws.amazon.com/cur/latest/userguide/cur-sp.html>)
    * [Use Cost Explorer to analyze spending and usage | AWS re:Post](<https://repost.aws/knowledge-center/cost-explorer-analyze-spending-and-usage>)
    * [Setting up Athena using AWS CloudFormation templates – AWS Data Exports](<https://docs.aws.amazon.com/cur/latest/userguide/use-athena-cf.html>)
  * Azure 
    * [View Azure reservation utilization – Microsoft Cost Management](<https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/reservation-utilization>)
    * [Azure reservation usage for an individual subscription – Microsoft Cost Management](<https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/understand-reserved-instance-usage>)
    * [Manage Reservations for Azure resources](<https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/manage-reserved-vm-instance>)
  * GCP 
    * [Commitment Discounts explained](<https://cloud.google.com/docs/cuds>)
    * [Export Cloud Billing data to BigQuery](<https://cloud.google.com/billing/docs/how-to/export-data-bigquery>)

## Instructions for running this Play on AWS via Cost Explorer

### The simplest way (crawl)

  * You will need to generate a CSV report from your RI utilization report under the AWS Cost Management dashboard
  * This (RI/SP) Utilization report will need to be a predefined single day date/time range for EC2-instances
  * Additionally, you can fine tune this by modifying the filters to be more specific (i.e.region, instance type, and term). These are optional
  * Once you have applied the appropriate filters and grouping option, you will see a breakdown of the commitment discount costs on your selection.
  * Download and save the CSV. and in the CSV you will be able to locate the “Total Asset value” and the “Cost for unused hours” columns.
  * At that point you can calculate all the table costs or calculate each row’s costs detailed at the next step.
  * The formulae for doing so is simply, “(Cost for unused hours/Total asset value) x 100
  * For example, if the total asset value is $100 and the unused cost is $30. The percentage of unused cost can be calculated as (30/100) x 100 = 30%.

### A more advanced way (walk/run)

  * To calculate the cost of unused commitment discount for a single day (YYYY-MM-DD) using Athena, you will need to have access to the relevant data source that contains the commitment discount information. Once you have access to the data, you can write a SQL query in Athena to calculate the cost.
  * Assuming you have a table named `commitment_discounts` that contains the commitment discount information, and it has columns such as `start_date`, `end_date`, `discount_amount`, and `usage_amount`, you can use the following query:
  * 
[code]>sql

                    SELECT SUM(discount_amount) AS unused_discount_cost
                    FROM commitment_discounts
                    WHERE start_date <= DATE YYYY-MM-DD' -- Start date is on or before YYYY-MM-DD
                      AND end_date >= DATE 'YYYY-MM-DD' -- End date is on or after YYYY-MM-DD
                      AND usage_amount = 0 -- No usage on YYYY-MM-DD

[/code]

  * This query filters the commitment discounts based on their start and end dates, and selects only those discounts where the usage amount is zero on April 2, 2024. The `SUM(discount_amount)` calculates the total cost of the unused commitment discounts for that day.
  * The next step is to calculate the total cost of a commitment discount for a single day, you would need to have access to the relevant data in your Athena database. Assuming you have a table named `commitment_discounts` with columns `date` and `cost`, you can use the following Athena query to calculate the total cost for the point in time selected, YYYY-MM-DD:
  * 
[code]>sql

                SELECT SUM(cost) AS total_cost
                FROM commitment_discounts
                WHERE date = 'YYYY-MM-DD`'

[/code]

  * In this query, you are selecting the sum of the `cost` column from the `commitment_discounts` table where the `date` column matches the specified date ‘YYYY-MM-DD’. The result will be the total cost of commitment discounts for that day.
  * At that point you can calculate all the table costs or calculate each row’s costs detailed at the next step.
  * The formulae for doing so is simply, “(Cost for unused hours/Total asset value) x 100
  * For example, if the total asset value is $100 and the unused cost is $30. The percentage of unused cost can be calculated as (30/100) x 100 = 30%.

## Instructions for running this Play on Azure

### Obtaining the data required to provide a percentage of unused CB cost (walk)

  * The Cost Analysis section under the Azure Cost Management reservation view interface
  * Set your predetermined time range for the analysis. Recommendation is to select a custom date group of a single day.
  * You will see a breakdown of the total cost and unused cost related to the reserved instance.
  * Calculate the percentage of unused CB cost by dividing the unused cost by the total cost of the CB and multiplying by 100.
  * For example, if the total cost of the CB is $100 and the unused CB cost is $30. The percentage of unused CB cost can be calculated as ($30/$100) x 100 = 30%.

### Programmatic method for obtaining the data require’s accessing the Azure Cost analytics

**USING RESTFUL API.** Here’s a Python code snippet that demonstrates how to obtain an access token and call the Azure Cost Management + Billing API to get reservation summaries (you’ll need to replace the placeholders with your actual subscription ID, tenant ID, client ID, and client secret):

Here’s an example of how you can make an HTTP GET request to the Azure Cost Management API to retrieve the total cost of reserved instances spent for a specific Azure subscription within a specified evaluation period:
[code] 
    python

    import requests

    import datetime

    # Set the Azure subscription ID

    subscription_id = '<your_subscription_id>'

    # Set the evaluation period start and end dates

    start_date = datetime.datetime(YYYY, MM, DD)

    end_date = datetime.datetime(YYYY, MM, DD)

    # Format the dates in the required format (YYYY-MM-DD)

    start_date_str = start_date.strftime('%Y-%m-%d')

    end_date_str = end_date.strftime('%Y-%m-%d')

    # Set the Azure Cost Management API endpoint

    api_endpoint = f'https://management.azure.com/subscriptions/{subscription_id}/providers/Microsoft.CostManagement/query?api-version=2019-11-01'

    # Set the query to retrieve the total cost of reserved instances

    query = {

        "type": "ActualCost",

        "timeframe": "Custom",

        "timePeriod": {

            "from": start_date_str,

            "to": end_date_str

        },

        "dataset": {

            "granularity": "Monthly",

            "aggregation": {

                "totalCost": {

                    "name": "PreTaxCost",

                    "function": "Sum"

                }

            },

            "filter": {

                "and": [

                    {

                        "dimension": {

                            "name": "ReservationId",

                            "operator": "NotIn",

                            "values": []

                        }

                    }

                ]

            }

        }

    }

    # Make the HTTP GET request

    response = requests.get(api_endpoint, json=query)

    # Check if the request was successful

    if response.status_code == 200:

        # Parse the response JSON

        response_json = response.json()

        # Retrieve the total cost from the response

        total_cost = response_json['properties']['rows'][0][0]

        # Print the total cost

        print(f'Total cost of reserved instances: {total_cost}')

    else:

        # Print the error message

        print(f'Error: {response.text}')

[/code]

Make sure to replace `<your_subscription_id>` with your actual Azure subscription ID. Also, adjust the `start_date` and `end_date` variables to specify the evaluation period you’re interested in. Ensure you capture the output, for the final calculation after the next step.

  * Please note that the above code is a simplified example and does not include error handling or pagination, which may be necessary if you have a large number of reservations or detailed usage data.
  * To Obtain your period of performance of unused commitment discount costs

[code] 
    >python

    import requests

    import datetime

    # Set the required parameters

    subscription_id = 'your_subscription_id'

    evaluation_start_date = datetime.datetime(YYYY, MM, DD)

    evaluation_end_date = datetime.datetime(YYYY, MM, DD)

    # Construct the API endpoint URL

    base_url = 'https://management.azure.com'

    api_version = '2022-01-01'

    resource_group = 'your_resource_group_name'

    provider_namespace = 'Microsoft.CostManagement'

    provider_type = 'query'

    path = f'subscriptions/{subscription_id}/providers/{provider_namespace}/{provider_type}'

    url = f'{base_url}/{path}?api-version={api_version}'

    # Construct the request body

    request_body = {

       'type': 'Usage',

       'timeframe': 'Custom',

       'timePeriod': {

           'from': evaluation_start_date.isoformat(),

           'to': evaluation_end_date.isoformat()

       },

       'dataset': {

           'granularity': 'Daily',

           'aggregation': {

               'totalCost': {

                   'name': 'PreTaxCost',

                   'function': 'Sum'

               }

           },

           'filter': {

               'and': [

                   {

                       'dimension': {

                           'name': 'ReservationId',

                           'operator': 'NotIn',

                           'values': ['']

                       }

                   },

                   {

                       'dimension': {

                           'name': 'ReservationId',

                           'operator': 'NotContains',

                           'values': ['/']

                       }

                   }

               ]

           }

       }

    }

    # Send the HTTP GET request

    response = requests.get(url, json=request_body)

    # Check the response status code

    if response.status_code == 200:

       # Extract the total unused cost from the response

       total_unused_cost = response.json()['properties']['rows'][0]['totalCost']

       print(f'Total unused cost of reserved instances: {total_unused_cost}')

    else:

       print(f'Failed to retrieve total unused cost. Status code: {response.status_code}')

[/code]

Make sure to replace `’your_subscription_id’`, `’your_resource_group_name’`, and the evaluation start and end dates with your own values. Also, ensure that you have the necessary

  * Take the results of total costs and unused costs by dividing the unused cost by the total cost of the CB and multiplying by 100.
  * For example, if the total cost of the CB is $100 and the unused CB cost is $30. The percentage of unused CB cost can be calculated as ($30/$100) x 100 = 30%.

## Instructions for running this Playbook on GCP

You can obtain your total daily CB cost from API and the console.

To obtain the total CB cost from the console, you can obtain the daily cost by accessing the GCP Console and generating a custom report, with a custom range, and group by SKU. CUDs are a SKU. Filter on Commitments in the SKU’s to obtain a consolidated list of only CB’s.

The filtered total will be shown at the bottom.

Capture this cost, to obtain the unused cost, if the total cost of the CUD is $100 and the unused cost is $30. The percentage of unused cost can be calculated as (30/100) x 100 = 30%.

In the GCP big query, you can use the below query to determine your unused cost of a CUD commitment for a single day.
[code] 
    >SQL

    SELECT

      date(start_time) AS start_date,

      date(end_time) AS end_date,

      sum(usage_rate) x (end_time - start_time) AS total_usage_rate,

      sum(commitment_unit_usage_rate) x (end_time - start_time) AS total_commitment_unit_usage_rate

    FROM

      `your_project.dataset.table_name`

    WHERE

      start_time >= '2023-07-01T00:00:00' AND end_time < '2023-07-02T00:00:00'

    GROUP BY

      date(start_time),

      date(end_time)

    ORDER BY

      total_usage_rate DESC;

[/code]

The above query calculates the total usage and commitment unit usage rates for a specific date range within a dataset. It uses the ‘start_time’ and ‘end_time’ columns to filter the data and the ‘usage_rate’ and ‘commitment_unit_usage_rate’ columns to calculate the total usage and commitment unit usage rates, respectively. The results are grouped by date and ordered in descending order based on the total usage rate.

if the total cost of the CUD is $100 and the unused cost is $30. The percentage of unused cost can be calculated as (30/100) x 100 = 30%.

## Outcomes and Indicators of Success

### Primary Outcomes of running this playbook

  * As a main and primary outcome, the end user should be able to determine how to obtain the total commitment discount cost and the unused costs which in turn is how you are able to calculate the % of commitment discount waste.
  * This percentage will give a better insight into the over-purchasing of a commitment of the cloud resources.
  * This percentage is also an indicator of the validity or coverage of chargeback / showback of costs computed based on the tags.

### Indicators of Success

  * Success is defined by having a percent declared for GCP, Azure or AWS Commitment discount waste.

### Exceptions and Considerations

  * While percentage waste has a backend monetary representation. The monetary impact could be small or large that is dependent on the total commitment discount costs. This is effectively relative to various business measurement and effectiveness of commitment discounts.

## Acknowledgments

We’d like to thank the following people for their help on this Playbook:

[ ![Gordon Douglass](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Gordon Douglass SAP ](<https://www.linkedin.com/in/gordondouglass/>)

We’d also like to thank our supporters, David Lambert, Taylor Houck, and Brian D’Altilio.

Last updated: March 17, 2026

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions for AWS](<#instructions-aws>)
  * [Instructions for Azure](<#instructions-azure>)
  * [Instructions for GCP](<#instructions-gcp>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ Rate Optimization ](<https://www.finops.org/framework/capabilities/rate-optimization/>)
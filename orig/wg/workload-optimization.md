# Usage Optimization Opportunities Library

This asset focuses on providing a collection of resources to help identify types of cloud cost waste by service provider, including links to additional tools.

You can sort each card by Cloud Provider or Saving Potential. Each card includes User Stories by FinOps Practitioners, Playbooks, documentation, or code examples.

We want to thank [all our contributors](<#contributors>) for their hard work on this asset over the years.

Last updated: June 30, 2025

###### [Learn the fundamentals Level up your knowledge with FinOps Certified Practitioner Get started  ![Learn the fundamentals](https://www.finops.org/wp-content/uploads/2025/12/certified-practitioner.svg) ](<https://learn.finops.org/path/finops-certified-practitioner-self-paced>)

##### Related FinOps Capabilities

[ Usage Optimization ](<https://www.finops.org/framework/capabilities/usage-optimization/>)

### Cloud Provider

  * Azure
  * AWS
  * GCP

### Relative Savings

  * Low
  * Medium
  * High

### Service Category

  * CloudOps
  * Compute
  * Database
  * Storage
  * Network

### Relative Effort

  * Low
  * Medium
  * High

### Risk

  * Low
  * High
  * Medium

#### Aged Snapshots

**Storage – Waste**

Manually look in Azure portal at a list of all snapshots across all subscriptions you have read access to.

  * [Related Material](<https://docs.microsoft.com/en-us/answers/questions/72394/delete-old-snapshots-on-azure-files-using-powershe.html>)

#### AMI Snapshots

**Storage – Waste**

Snapshots created from AMIs that are no longer available. These are no longer being used and so can be removed.

  * [Read the Story](<https://www.finops.org/resource/removing-ami-snapshots/>)
  * [Code Example](<https://wellarchitectedlabs.com/cost/300_labs/300_optimization_data_collection/3_deploy_data_collection_modules/>)

#### AWS S3 - Multipart Uploads

**Storage – Waste**

AWS Storage Lens or your dedicated Technical Account Manager can identify MPU’s in S3 buckets. Once you identity MPU’s on specific buckets, you can configure a lifecycle rule for those S3 buckets to automatically abort 7-day old (or whatever time period you find appropriate) incomplete multipart uploads. I’d argue that lifecycle rules on S3 buckets should be the default, not the exception. A full description of the services and outline of this process can be found in the AWS blog post here.

  * [Related Material](<https://aws.amazon.com/blogs/aws-cloud-financial-management/discovering-and-deleting-incomplete-multipart-uploads-to-lower-amazon-s3-costs/>)

#### Azure SQL Database & SQL Managed Instance

**Database – Waste**

You can exchange your existing licenses for discounted rates on Azure SQL Database and Azure SQL Managed Instance. Save up to 30%. For new databases, during creation, select Configure database on the Basics tab and select the option to Save Money. For existing databases, select Compute + Storage in the Settings menu and select the option to Save Money.

  * [Related Material](<https://docs.microsoft.com/en-us/azure/azure-sql/azure-hybrid-benefit>)

#### Azure SQL Database Serverless Tier for Non-Production Workloads

**Database – Waste**

Save database costs by configuring serverless-tier (instead of provisioned compute option) for Non-Production workloads. Configure Auto-pause to save Azure costs.

  * [Related Material](<https://learn.microsoft.com/en-us/azure/azure-sql/database/serverless-tier-overview?view=azuresql&tabs=general-purpose>)

#### BigQuery Capacity Commitments

**BigQuery – Waste**

Failure to purchase org level capacity commitments for BigQuery can result in runaway costs due to on-demand query costs. Purchasing an org level capacity commitment and enabling idle capacity at the org level can ensure stable BigQuery costs across the organization. Consideration also needs to given be to whether the location supports multi-region commitments or if separate commitments will need to be purchased for each region or location where workloads are provisioned.

  * [Read the Story](<https://www.finops.org/resource/runaway-cost-in-bigquery-capacity-commitments/>)
  * [Related Material](<https://cloud.google.com/bigquery/docs/reservations-intro>)

#### CloudWatch

**Monitoring – Waste**

To reduce ingestion costs, stop ingestion of unnecessary logs. To reduce storage costs, change the retention period for your log groups. To reduce ingested log data scanned for CloudWatch Logs Insights queries, run queries for a shorter duration.

  * [Read the Story](<https://www.finops.org/resource/managing-retention-in-cloudwatch/>)
  * [Related Material](<https://aws.amazon.com/premiumsupport/knowledge-center/cloudwatch-understand-and-reduce-charges/>)
  * [Code Example](<https://wellarchitectedlabs.com/cost/300_labs/300_cur_queries/queries/management__governance/>)

#### Database Optimization

**BigQuery – Waste**

Optimize the structure of queries and tables / databases to limit quantity of data scanned.

  * [Read the Story](<https://www.finops.org/resource/eliminating-waste-in-bigquery/>)

#### Dynamo DB Backups

**Database – waste**

Check how often you are running full DynamoDB backups; they could be running every 5 minutes with no retention policy. Over time these costs compound. Determine if the business requires this much backup data, if not one option is to switch to a solution of using point-in-time recovery for Dynamo.

  * [Read the Story](<https://www.finops.org/resource/dynamodb-backups-gone-wild/>)
  * [Related Material](<https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/PointInTimeRecovery.html>)

#### EBS - Abandoned Volumes

**Storage – Waste**

Scripts can be implemented to scan and terminate unattached EBS volumes. Consider taking snapshots in higher environments before terminating the volumes. Many scripts can be found in github or elsewhere on the Internet.

  * [Read the Story](<https://www.finops.org/resource/the-case-of-too-many-ebs-volumes/>)
  * [Related Material](<https://aws.amazon.com/blogs/mt/controlling-your-aws-costs-by-deleting-unused-amazon-ebs-volumes/>)

#### EBS - Migrate to Newer Types

**Storage – Efficiency**

We saved 20% on some of our EBS costs by migrating from the gp2 to the gp3 EBS volume type.

  * [Related Material](<https://aws.amazon.com/blogs/storage/migrate-your-amazon-ebs-volumes-from-gp2-to-gp3-and-save-up-to-20-on-costs/>)

#### GKE - Containers and Managing Capacity

**Compute – Waste**

Provision to balance capacity and requests to prevent inadvertent auto scaling. Leverage [GKE metering](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-usage-metering) and dashboards to understand the profile of workloads and address under- or over-provisioning.

  * [Read the Story](<https://www.finops.org/resource/gke-metering/>)
  * [Related Material](<https://cloud.google.com/blog/products/containers-kubernetes/use-gke-usage-metering-to-combat-over-provisioning>)

#### Hybrid Use Benefits

**Marketplace / Licensing – Waste**

Manually look in Azure by selecting a virtual machine and then reviewing its properties. See if the AHUB Azure hybrid use benefit box is checked or not.

  * [Related Material](<https://docs.microsoft.com/en-us/azure/virtual-machines/windows/hybrid-use-benefit-licensing>)

#### Idle VMs

**Compute – Waste**

Totally inactive compute; Azure Advisor can surface underutilised, look for those with shutdown recommendation and ask teams to validate.

  * [Related Material](<https://docs.microsoft.com/en-us/answers/questions/72394/delete-old-snapshots-on-azure-files-using-powershe.html>)

#### Kubernetes Control Plane

**Compute – Efficiency**

Reduce number of clusters (only GKE and EKS). Abandoned clusters cost $.10 per hour.

#### Load Balancers (AWS)

**Network – Waste**

This type of waste can be identified through Trusted Advisor in the AWS console. However, Trusted Advisor is available only for Business and Enterprise Support customers. All AWS customers regardless of support level can use [this CUR query](<https://www.wellarchitectedlabs.com/cost/300_labs/300_cur_queries/queries/compute/#elastic-load-balancing---idle-elb>) from CUR query library to identify Idle load balancers.

  * [Code Example](<https://www.wellarchitectedlabs.com/cost/300_labs/300_cur_queries/queries/compute/#elastic-load-balancing---idle-elb>)

#### Marketplace Licenses - Pay as you Go

**Marketplace / Licensing – Waste / efficiency**

Manually investigate the largest vendor spend. Create scripts that swaps out license sizing and the infrastructure underneath.

  * [Read the Story](<https://www.finops.org/resource/watch-your-licenses/>)
  * [Code example](<https://github.com/awslabs/tag-policy-setup/tree/main/scp_policies>)

#### Network Interface Cards (NICs)

**Network – Waste**

Create a workflow to delete unused Network Interface Cards (NICs) from Azure VMs since NICs unattach, but do not delete when VMs are removed.

  * [Related Material](<https://learn.microsoft.com/en-us/previous-versions/azure/virtual-machines/linux/find-unattached-nics>)

#### Object Storage Lifecycle

**Storage – Waste**

Manage object storage lifecycles to move data to nearlline or coldline when infequenlty accessed; remove obsolete versions / duplicates.

  * [Read the Story](<https://www.finops.org/resource/provisioning-storage-in-gcp/>)

#### Optimizing AWS Athena Costs

**Serverless – Waste**

One common optimization technique is to partition tables using relevant attributes, such as date or location, to reduce the amount of data scanned. For example, if a table contains daily sales data, partitioning the table by date allows queries to scan only the relevant partitions for a specific date range, rather than scanning the entire table. This can result in major cost savings, as the amount of data scanned is greatly reduced.

  * [Read the Story](<https://www.finops.org/resource/optimizing-aws-athena-costs/>)
  * [Related Material](<https://docs.aws.amazon.com/athena/latest/ug/ctas-partitioning-and-bucketing.html>)

#### Provisioning Object Storage in AWS

**Storage – Waste**

When using AWS S3 for storage, it’s crucial to consider object versioning and lifecycle management to avoid unnecessary costs. AWS S3 allows for the creation of multiple versions of the same object, and each version will incur additional storage charges. Therefore, it’s important to determine how to manage their lifecycle through different storage classes, including Standard, Intelligent-Tiering, Infrequent Access, and Glacier.

  * [Read the Story](<https://www.finops.org/resource/provisioning-object-storage-in-aws/>)
  * [Related Material](<https://docs.aws.amazon.com/AmazonS3/latest/userguide/view-object-properties.html>)

#### Snapshot Lifecycle

**Storage – Waste**

There are multiple ways to attack a lifecycle of snapshots in general. With EBS, you can use Amazon Data Lifecycle Manager to automate the retention of your snapshots. You can also use a myriad of 3rd party tools to help manage the data lifecycle of snapshots. I recommend first establishing a policy within your organization, communicate & collaborate on the policy, and enforce the policy with the ability to opt out.

  * [Read the Story](<https://www.finops.org/resource/managing-ebs-snapshots/>)
  * [Related Material](<https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html>)

#### Start/Stop VMs v2

**Compute – Efficiency**

Use the Azure Start/Stop VMs v2 to start and stop Azure Virtual Machines across multiple subscriptions. Users can define scheduling, generate insights, and get notifications to inform other efficiency tactics.

  * [Related Material](<https://learn.microsoft.com/en-us/azure/azure-functions/start-stop-vms/overview>)

#### Unattached Disks

**Storage – Waste**

Azure portal -> Disks -> Filter where Owner = “-” to list all unattached across all subscriptions you have read access to.

  * [Related Material](<https://docs.microsoft.com/en-us/azure/virtual-machines/disks-find-unattached-portal>)

#### Unattached Elastic IPs

**Network – Waste**

Unattached EIP cost $0.005 an hour. Over time this can compound into a waste of money. Also if there is something causing these EIPs to be unattached this problem will grow.

  * [Read the Story](<https://www.finops.org/resource/cleaning-up-elastic-ips/>)
  * [Related Material](<https://aws.amazon.com/premiumsupport/knowledge-center/elastic-ip-charges/>)
  * [Code Example](<https://github.com/Road-To-FinOps-Deploy/aws_tf_eip_cleaner>)

#### AWS Config

AWS Config provides oversight and information about all resources. With manual review we can understand all resources that are present in our environment and make sure we understand every resources that generate expense.

  * [Cloud Cost Allocation - Strategies Section](<https://www.finops.org/wg/cloud-cost-allocation/#strategies>)
  * [Playbook](<https://www.finops.org/wg/using-aws-config-to-identify-unused-resources-tagging-compliance/>)

#### AWS Elastic Container Registry (ECR)

**Stored GB and Transfer Out**

While in the midst of production, software engineers frequently experiment with various application versions, leading to the generation of a substantial volume of images in a relatively brief period. This can result in a significant accumulation of redundant or unnecessary images, with some potentially featuring extensive debugging symbols that demand considerable storage capacity. To efficiently curtail wastage, organizations can swiftly optimize their resources by ensuring that images remain compact, either through the utilization of Alpine or dedicated images, and by promptly eliminating superfluous ones.

  * [Playbook](<https://www.finops.org/wg/aws-ecr-optimization/>)
  * [AWS ECR Pricing](<https://aws.amazon.com/ecr/pricing/>)

#### DynamoDB Optimization

**Request Units**

Optimizing Dynamodb Request units provides saving oportunity on an hourly basis, which will generate saving opportunity on the long run.

  * [Playbook](<https://www.finops.org/wg/aws-dynamodb-optimization/>)
  * [DynamoDB Pricing](<https://aws.amazon.com/dynamodb/pricing/>)

#### EC2 & RDS Scheduling

**EC2 & RDS charged by hour**

Scheduling EC2 and RDS instances allows instances to be “turned on” only when needed. This solution helps reduce operational costs by stopping resources that are not in use and starting them when they are needed. The Instance Scheduler automates the starting and stopping of Amazon Elastic Compute Cloud (Amazon EC2) and Amazon Relational Database Service (Amazon RDS) instances through the use of Cloud Formation templates. Highest risk in production, while medium to low risk in development.

  * [Playbook](<https://www.finops.org/wg/aws-ec2-rds-instance-scheduling/>)
  * [Instance Scheduler on AWS](<https://aws.amazon.com/solutions/implementations/instance-scheduler-on-aws/>)
  * [Instance Scheduler Implementation Guide](<https://docs.aws.amazon.com/solutions/latest/instance-scheduler-on-aws/solution-overview.html>)
  * [Instance Scheduler Architecture Overview](<https://docs.aws.amazon.com/solutions/latest/instance-scheduler-on-aws/architecture-overview.html>)

#### EC2 Autoscaling

**Increase/Decrease Compute Capacity**

Amazon EC2 Auto Scaling is designed to optimize costs by automatically adjusting the number of EC2 instances based on demand or workload. This approach can result in significant cost savings compared to a static setup where a fixed number of instances are always running, regardless of actual demand. Organizations often report savings of around 20-60% when moving from a static environment to an Auto Scaling setup, but the range can vary widely depending on the factors mentioned above. To get a precise calculation, a thorough analysis of specific workload patterns and Auto Scaling configurations is essential.

  * [Playbook](<https://www.finops.org/wg/cost-optimization-for-aws-ec2-autoscaling/>)
  * [EC2 Autoscaling](<https://aws.amazon.com/ec2/autoscaling/>)
  * [EC2 Autoscaling Pricing](<https://aws.amazon.com/ec2/autoscaling/pricing/>)
  * [EC2 Autoscaling Benefits](<https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html>)
  * [EC2 Autoscaling Best Practices](<https://docs.aws.amazon.com/autoscaling/plans/userguide/best-practices-for-scaling-plans.html>)

#### Managed Services

**Per hour**

View breakdown of your managed service instance types. Use this information to influence architecture teams to modernise these instances as the re-architecture lift tends to be lower than EC2 modernization efforts. Modernizing managed service architecture (RDS, OpenSearch, ElastiCache and Redshift) benefits as newer instances are cheaper and faster. Also, by consolidating machine types the risk associated with commitment management is reduced.

  * [Playbook](<https://www.finops.org/wg/aws-managed-service-modernization/>)

#### RDS Unused

**Database instance hours**

Evaluating DB connection count can help us identify unused DB instances. With the provided playbook we can dive deeper into finding rouge databases.

  * [Playbook](<https://www.finops.org/wg/aws-rds-removal/>)
  * [RDS Pricing](<https://aws.amazon.com/rds/pricing/>)

#### S3 Lifecycle Policy

**Class type (accessibility, redundancy, region, data transfer), stored GB**

To analyse current S3 bucket configuration vs. required usage, and optimize your configuration accordingly to reduce cost while maintaining application performance.

  * [Playbook](<https://www.finops.org/wg/aws-s3-cost-optimization/>)
  * [AWS S3 Pricing](<https://aws.amazon.com/s3/pricing/>)
  * [Monitoring S3 Metrics with CloudWatch](<https://docs.aws.amazon.com/AmazonS3/latest/userguide/cloudwatch-monitoring.html>)

#### Single Use Blob Lifecycle Policy

**Price per GB**

For business use cases requiring to store Azure blob data at lower costs for longer duration which doesn’t need to be accessed, Blob Archive access Tier is the answer. Azure offers different access tiers (Hot/Cold/Archive) to store Azure blobs, with more cost efficiency, based on retention and access requirements. The appropriate access tier can be set for new blobs during initial upload or for existing blobs either manually or by using Azure Storage Lifecycle Management feature. To automate the process of updating access tier for blobs we can utilize Azure Storage Life Cycle Management policies where rules are set to move the blobs to different access tiers based on defined conditions. Note that the policies only run once a day with no user intervention.

  * [Blob Access Tiers](<https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview>)
  * [Azure Blob Pricing](<https://azure.microsoft.com/en-us/pricing/details/storage/blobs/>)
  * [Automating Lifecycle Policies](<https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview>)
  * [Configure Lifecycle Mangement Policies](<https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-policy-configure?tabs=azure-portal>)

#### Unused App Service Plans

**Price per hour**

Azure App Service Plan defines underlying compute resources for App services(web apps)/Azure Functions/Logic Apps to run. A single App Service Plan can host multiple apps. When all the underlying Azure apps in a plan are deleted but the plan is left intact by Azure engineers then it results in an unused App Service plan. An unused App service plan, with the exception of Dynamic or Free pricing tier plans, will continue to incur charges based on its configured pricing tier. As a good FinOps practice to reduce cloud wastage spend, it’s recommended to regularly review App service plans and any unused plans are promptly actioned upon to minimize the cloud charges. The unused app service plans can be deleted if not required anymore or scaled down to free tier as applicable.

  * [Playbook](<https://www.finops.org/wg/azure-unused-app-service-plans/>)
  * [Azure App Service Plan Overview](<https://learn.microsoft.com/en-us/azure/app-service/overview-hosting-plans>)
  * [App Service Pricing](<https://azure.microsoft.com/en-us/pricing/details/app-service/windows/>)
  * [Plan & Manage App Service Costs](<https://learn.microsoft.com/en-us/azure/app-service/overview-manage-costs>)

#### Unused Azure Private Link Services

**P / HR & Data processed**

Unused Azure Private Links are private links that aren’t used in a running deployment. Although Microsoft doesn’t charge for the service it’s good practice to remove any Private Link Service that’s no longer being used and has no Private Endpoints attached to it. Azure Private Links enable you to access Azure PaaS Services (for example, Azure Storage and SQL Database) and Azure hosted customer-owned/partner services over a private endpoint in your virtual network. Please see the attached playbook for more details.

  * [Playbook](<https://www.finops.org/wg/removing-unused-azure-private-links/>)
  * [Azure Private Link Services](<https://learn.microsoft.com/en-us/azure/private-link/>)

#### VM Rightsizing

**p/ HR**

VM’s can be sometimes chosen without proper alignment with the workload. This means it is over- or underutilized. This optimization tactic entails the rightsizing of the VM, i.e. to align with the workload properties.

  * [Playbook](<https://www.finops.org/wg/rightsizing-virtual-machines-on-azure/>)

## Thank you to all our contributors

[ ![Rich Hoyer](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Rich Hoyer SADA ](<https://www.linkedin.com/in/richhoyer/>) [ ![Steph Gooch](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Steph Gooch AWS ](<https://www.linkedin.com/in/awssteph/>) [ ![Eric Mulartrick](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Eric Mulartrick Boomi ](<https://www.linkedin.com/in/eric-mulartrick-mba-1a24744/>) [ ![Dennis Chang](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Dennis Chang Personal Project ](<https://www.linkedin.com/in/dennislchang/>) [ ![Anthony Bothe](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Anthony Bothe Procter & Gamble ](<https://www.linkedin.com/in/ajbothe/>) [ ![Scott Lapish](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Scott Lapish Telus ](<https://www.linkedin.com/in/scott-lapish-14751b1/>) [ ![Joe Daly](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Joe Daly FinOps Foundation ](<https://www.linkedin.com/in/joseph-daly-52789220/>) [ ![Mike Martin](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Mike Martin GLG ](<https://www.linkedin.com/in/michaelmartin1090/>) [ ![Pete Silva](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Pete Silva Yahoo ](<https://www.finops.org//www.linkedin.com/in/Pete-Silva-1392b92/>) [ ![Noel Crowley](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Noel Crowley Fidelity Investments ](<https://www.linkedin.com/in/noelcrowley/>) [ ![Bhups Hirani](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Bhups Hirani Kainos ](<https://www.linkedin.com/in/bhirani/>) [ ![Andy Foley](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Andy Foley Nationwide Building Society ](<https://www.linkedin.com/in/andyfoley1/>) [ ![Noah Abrahams](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Noah Abrahams Oracle ](<https://www.linkedin.com/in/noahabrahams/>)
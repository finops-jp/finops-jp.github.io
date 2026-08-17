# AWS ECR Optimization

**Summary:** FinOps Practitioners and Engineering teams can analyze Amazon ECR repositories to identify oversized repositories, unused images, and cleanup opportunities. By collecting repository size and cost data, teams can prioritize optimization actions such as removing stale images and reducing storage footprint. Use this guide as a practical workflow for investigating repository usage and collaborating with engineering teams to maintain efficient container image management. 

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Acknowledgments](<#acknowledgments>)

Amazon Elastic Container Registry (Amazon ECR) is a Docker container registry that AWS manages entirely. It provides a secure, scalable, and efficient platform for storing, managing, and deploying container images. However, with frequent updates or extensive development activities, ECR repositories can accumulate many images, increasing size and costs.

This playbook aims to identify high-cost ECR repositories and implement strategies for effective cost management. It provides guidelines for monitoring repository usage, optimizing storage through efficient image management, and applying cost-effective practices to maintain long-term financial sustainability in your containerized application deployment.

We acknowledge that the specific instructions to perform such activity may change over time as AWS rolls out new features, pricing models, user interfaces, etc. We have tried to link out to relevant AWS provided documentation where possible to help this document stay relevant over time. The insights, instructions, and resources provided herein, in combination with those available direct from AWS should help individuals have a more complete understanding of this action as it pertains to FinOps and usage optimization.

### Who Should Use this Playbook

This playbook is designed for engineers and FinOps practitioners, with FinOps practitioners utilizing it to pinpoint registries that engineers should prioritize. Specifically, the playbook is tailored to assist practitioners in reducing the costs associated with Amazon Elastic Container Registry (ECR). Making images smaller requires engineers to investigate and perform optimization activities due to the technical knowledge required.

Amazon Elastic Container Registry (Amazon ECR) is integral to deploying and managing containerized applications within AWS. Still, it can also become a significant source of escalating costs if not managed proactively. Cost savings in ECR management is crucial for controlling operational expenses and ensuring the financial efficiency of cloud deployments.

Managing costs effectively in Amazon ECR involves several strategic actions to optimize the storage and management of container images. Monitoring repository sizes and growth trends is essential to identify and address cost inefficiencies early. This enables organizations to adjust their usage patterns and storage strategies before costs become unwieldy.

One of the most effective ways to control costs is to implement lifecycle policies to automate the pruning of old or unused images. This action directly reduces storage requirements, thereby lowering costs. By maintaining only necessary images, organizations can avoid paying for unutilized resources, a common inefficiency in cloud spending.

Additionally, applying cost allocation tags to ECR repositories helps attribute costs accurately across different departments or projects. This visibility is key for effective budget management, allowing organizations to track cloud spending against specific initiatives and make informed decisions about resource allocation. It also supports accountability and encourages stakeholders to consider the financial impact of their usage patterns.

Optimizing image storage through compression and efficient layering techniques also saves cost. These methods reduce the physical space required for each image, directly reducing storage costs. Given the scale at which container images can grow, especially in active development environments, even small efficiencies in image storage can result in substantial cost reductions.

Prioritizing cost savings in Amazon ECR is essential for maintaining the financial health of an organization’s cloud infrastructure. By implementing systematic monitoring, lifecycle management, and optimization strategies, organizations can significantly reduce their ECR costs. These efforts not only prevent budget overruns but also align with broader financial objectives, ensuring that investments in cloud technology deliver maximum value.

## Prerequisites

To run this playbook, you will need access to the AWS account (depending on the amount of ECR registries, you can do it at the Master payer account, dedicated ECR registry account if you have one, or you can do it for specific accounts only) with sufficient permissions on AWS [**Amazon Elastic Container Registry (** ECR)](<https://aws.amazon.com/ecr/>) to describe repositories to collect information and Delete layer/ Update Lifecycle Policy permissions.

For ECR, the following IAM permissions are needed:

  * ecr:DescribeRepositories
  * ecr:DeleteRepository
  * ecr:PutLifecyclePolicy

### Who needs to be involved

  * FinOps practitioners or engineers will gather repository information, enabling engineers or account owners to take informed actions based on the collected data as deciders.
  * Engineers or account owners will be drivers since they can identify the unused ECR repositories.
  * Engineers or account owners will execute necessary actions to delete repositories and upload policies for life cycles as a decider.

### Information and resources required

#### Information

  * AWS Console: Basic understanding how AWS Console works, and how to access it: [Getting Started with the AWS Management Console | AWS Developer Center](<https://aws.amazon.com/getting-started/hands-on/getting-started-with-aws-management-console/>)
  * [AWS ECR](<https://docs.aws.amazon.com/AmazonECR/latest/userguide/what-is-ecr.html>): Basic understanding of ECR repository, or docker repository knowledge is also sufficient.
  * Understand [ECR pricing ](<https://aws.amazon.com/ecr/pricing/>)

#### Tools, utilities & templates

  * [AWS CLI:](<https://aws.amazon.com/cli/>) Tool is used to communicate with AWS API
  * Spreadsheet tooling & basic knowledge of use

## Instructions for running this Playbook

Complete the following steps to analyze and optimize your ECR cost and usage. According to your environment it can be beneficial to repeat it yearly.

### Collect Repository Information – 10 minutes

The goal is to collect information about each repository in the account or organization, so we can make decisions about the next steps according to the current state/data. Repository name, size, and approximate cost will be collected. Data collection can be performed by anyone who has access to the account with the ECR repositories.

  * [**Download the Script**](<https://github.com/s4mur4i/finops_scripts/tree/main/aws_ecr>)**:** Click on the provided download link to get the script file. Typically, this file will have a “.sh” extension for Unix/Linux-based systems or “.bat” for Windows systems. Link:
  * **Open the Command Line Interface (CLI):**
    * For Windows: Press Win + R, type “cmd” or “PowerShell,” and press Enter.
    * For Mac: Open Spotlight (press Cmd + Space), type “Terminal,” and press Enter.
    * For Linux: Use the keyboard shortcut Ctrl + Alt + T to open the terminal.

**Navigate to the Directory Where the Script is Saved:** Use the cd command followed by the path to the directory where the script is saved. For example:  
bash scriptname.sh

**Run the Script** : Type the command to run the script in the CLI. The specific command will depend on the script’s name and extension. For Unix/Linux-based systems, it might look like this:  
bash scriptname.sh

For Windows systems with a “.bat” file, it might look like:  
scriptname.bat

Once the script has finished running, review the output displayed in the CLI. It will provide Output should be similar:
[code] 
    # ./ecr_repository_sizes_osx.sh
    Repositories,Size,Expected Cost
    statsd-exporter,7 MB,0
    lambda-cloudfront-partition,394 MB,.03
    cloudflare_watcher,34 MB,0
    root-account-usage-notifier,225 MB,.02
    k8s-metadata-injector,20454 MB,1.99
    ...

[/code]

### Upload data to a spreadsheet & analyze – 5 minutes

  * The goal should be to Identify repositories needing clean-up and prioritize based on savings potential.The following are some guidelines for analyzing:
  * Cost analysis: Ordering repositories by cost can help identify your most expensive repositories. A quick reference for investigation can be either focusing on the top 10 cost-wise for the initial start and when results are in, continuing with another batch, calculating a median price, and investigating all above the median price. For reducing cost, image count or image sizes can be reduced. Details on how to do them can be found in steps 3 and 4.
  * Size analysis: Ordering repositories by size can help identify images that require optimization. With application owners, size can be reduced (using slimmer images or removing unneeded components from images), or with lifecycle rules, obsolete/unneeded images can be deleted automatically.
  * Identifying redundancies: Reviewing repositories can help identify obsolete or redundant repositories.
  * Actionable insights: Using the previous guidelines, a plan of action can be drafted for the next steps.

### Deploy Lifecycle Policy – 30 minutes

It is best practice to deploy a Lifecycle policy, to make sure that in future unused images get cleaned up automatically. ([ECR Best Practices](<https://github.com/awslabs/aws-config-rules/blob/master/aws-config-conformance-packs/Security-Best-Practices-for-ECR.yaml>) )

The following can be used as a base policy and tune it to organization requirements. Before implementing any lifecycle policies, make sure to back up the existing policies for safekeeping. Utilize the provided YAML as a starting point and tailor it according to the organization’s specific needs(for details, consult your engineering team). Further details can be found in AWS documentation on [automating the cleanup of images](<https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html>).

Periodically review and modify policies in response to changing requirements.
[code] 
    {
    "rules": [
    {
     "rulePriority": 1,
     "description": "Clean untagged",
     "selection": {
       "tagStatus": "untagged",
       "countType": "imageCountMoreThan",
       "countNumber": 1
     },
     "action": {
       "type": "expire"
     }
    },
    {
     "rulePriority": 2,
     "description": "KeepLatest",
     "selection": {
       "tagStatus": "tagged",
       "tagPrefixList": [
         "latest"
       ],
       "countType": "imageCountMoreThan",
       "countNumber": 1
     },
     "action": {
       "type": "expire"
     }
    },
    {
     "rulePriority": 3,
     "description": "Keep 9 versions",
     "selection": {
       "tagStatus": "tagged",
       "tagPrefixList": [
         "v"
       ],
       "countType": "imageCountMoreThan",
       "countNumber": 9
     },
     "action": {
       "type": "expire"
     }
    },
    {
     "rulePriority": 4,
     "description": "Keep 20 images all together",
     "selection": {
       "tagStatus": "any",
       "countType": "imageCountMoreThan",
       "countNumber": 20
     },
     "action": {
       "type": "expire"
     }
    }
    ]
    }

[/code]

Untagged or dangling images are safe to delete if they are unused (Docker images consist of layers. Dangling or untagged images are layers that have no relationship to any tagged images. They are not used and safe to delete).

`Latest` is a special tag in docker and is usually best practice to keep but not use in production.

**FinOps In The Wild:** One FinOps team uses semantic versioning for golden images deployed to production, retaining 9 images to allow for rollback. They also maintain at least 20 images globally to accommodate potential development or special images. This setup is one of the recommended approaches for managing images effectively.  
---  

### Reduce image sizes – 20 minutes

Even with configuring lifecycle policies, a single image can have debug symbols or unneeded resources/applications installed into the docker container. It is recommended to use the smallest images possible. Devops Cube offers some suggestions on [how to reduce docker image size](<https://devopscube.com/reduce-docker-image-size/>).

### Reporting and monitoring – 30 minutes

After actions are implemented, it’s important to note that changes in billing or Cost and Usage Reports (CUR) may not be immediately visible. Typically, the initial impacts become apparent within 2 days. During this period, it is essential to monitor the billing data and compare it with previous records.

Reporting is important for communicating success and also understanding the improvements. Monitoring is important for detecting changes within the resources. Key Points to Consider:

  * **Delayed Visibility:** Immediate changes in billing or CUR reports might not reflect the optimizations instantly; therefore, patience is necessary to observe the actual impact over a short period.

  * **Monitoring Period:** A monitoring period of at least 2 days is recommended to gauge the initial effects of the implemented actions on costs and resource utilization.

  * **Comparison with Previous Data:** Regularly compare the updated billing and CUR reports with the historical data to assess the effectiveness of the optimizations and cost reductions achieved through the undertaken actions.

  * **Communication with Stakeholders:** Once the improvements and cost reductions are quantified and substantiated with data, communicate the outcomes to the organization and stakeholders. Providing transparent updates ensures alignment with objectives and demonstrates the success of the optimization efforts.

## Outcomes and Indicators of Success

With this playbook, you will be able to reduce ECR costs and ensure that future costs don’t spiral out of control.

### Primary outcomes of running this playbook

  1. **Predictable Costs:** ECR repository costs become more predictable and manageable, ensuring better budget control due to optimized resource usage.
  2. **Budget Impact Mitigation:** With limits on each repository, even size increases have minimal impact on the overall bill, leading to enhanced cost management.
  3. **Resource Utilization Optimization:** The playbook optimizes resource usage, aligning repository sizes with organizational needs, thus reducing unnecessary expenses.
  4. **Enhanced Cost Predictability:** Organizations experience enhanced predictability in ECR costs, facilitating improved financial planning and resource allocation.
  5. **Better Bill Management:** By ensuring repositories are within limits, organizations can effectively manage their bills and prevent unexpected cost spikes.

### Exceptions and considerations

  1. **Compliance Requirements:** Ensure repository size adjustments do not violate compliance or regulatory requirements. Compliance considerations must be balanced with cost optimization efforts.
  2. **Data Retention Policies:** Some repositories might have specific data retention policies. Be mindful of these policies when optimizing repository sizes to avoid unintended data loss.

**Collaboration and Communication:** Collaboration between development, operations, and finance teams is crucial. Effective communication ensures alignment between cost optimization goals and operational requirements, avoiding conflicts during size adjustments.

## Acknowledgments

We’d like to thank the following people for their work on this Playbook:

[ ![Krisztian Banhidy](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Krisztian Banhidy Peak ](<https://www.linkedin.com/in/s4mur4i/>) [ ![Jacob Ferlin](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jacob Ferlin Charter Communications ](<https://www.linkedin.com/in/jacob-ferlin/>)

We’d also like to thank our supporters, Matt Whalen, Dusty Bowling, Brian Robbins, and Noel Crowley.

Last updated: March 16, 2026

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ Usage Optimization ](<https://www.finops.org/framework/capabilities/usage-optimization/>)
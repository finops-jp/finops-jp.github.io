# AWS S3 Cost Optimization

**Summary:** FinOps practitioners and Engineering teams can analyze Amazon S3 usage, access patterns, and bucket configuration to identify cost optimization opportunities. By evaluating storage classes, lifecycle policies, and data retention needs, teams can reduce storage costs while maintaining performance, availability, and compliance requirements.

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Acknowledgments](<#acknowledgments>)

[AWS S3](<https://aws.amazon.com/s3/>) (Amazon Simple Storage Service) is an object storage service provided by Amazon Web Services that stores data as objects within buckets. This playbook will detail a list of things to consider and check to optimize your usage of S3 object classes and reduce costs.

The specific instructions to perform such activity may change over time as AWS rolls out new features, pricing models, user interfaces, etc., and have tried to link out to relevant AWS-provided documentation where possible to help this document stay relevant over time. The insights, instructions, and resources provided herein, in combination with those available directly from AWS should help individuals have a more complete understanding of this action as it pertains to FinOps and usage optimization.

### Who Should Use this Playbook

This playbook should be used by FinOps practitioners, DevOps, or developers aiming to design/optimize their S3 usage with cost in mind.

## Prerequisites

The person taking action needs access to the AWS account and permission to Amazon S3. To get usage and billing information, this person should also be able to access Cost Explorer, cost usage reports (CUR), Cloudwatch, and S3 storage lens. To get the required permissions, you need to contact your AWS account admins or AWS account owners.

### Who needs to be involved:

  * **FinOps practitioners** will: 
    * Perform data collection on S3 usage
    * Decide on the right S3 policy as part of the evaluation of the collected data (both part of the Inform Phase) so that the potential for reducing S3 costs (by changing its configuration according to its buckets’ usage) is identified as a driver.
    * FinOps practitioners should also be informed as part of the Optimize Phase, in which the potential reducing S3 costs will be achieved by implementing the required steps.
    * **Optional:** FinOps practitioners will set up monitoring and alerting and track new buckets as part of the Operate phase to verify that new buckets will be configured properly as drivers.

  * **Engineers** are responsible for: 
    * Assisting the FinOps practitioners to collect data as part of the Inform phase so that the potential for reducing S3 costs (by changing its configuration according to its buckets’ usage) is identified as a contributor.
    * Analyzing the business/usage needs as part of the Inform phase as a driver.
    * Deciding on the right S3 policy as part of the evaluation together with FinOps practitioners as part of the Inform phase so that the potential for reducing S3 costs (by changing its configuration according to its buckets’ usage) is identified as a decider.
    * Implementing the necessary actions identified during the evaluation process as part of the Optimize phase, to implement a better S3 configuration and reduce costs so that S3 costs can be reduced as a driver.

  * **Product** is responsible for:

  *     * Assist the engineers in analyzing the business/usage needs as part of the Inform phase so that the potential for reducing S3 costs (by changing its configuration according to its buckets’ usage) is identified as a contributor.

  * **Security** or **Legal** is responsible for: 
    * Policy Development and Review: Advising on the creation and periodic review of S3 bucket policies to ensure they align with legal requirements, organizational security policies, and industry best practices. This includes defining who can access the data, what actions they can perform, and under what conditions.
    * Compliance and Regulatory Guidance: Providing expertise on compliance with data protection laws (e.g., GDPR, HIPAA) as they pertain to data stored in S3 buckets. This involves interpreting how regulations affect data storage and advising on compliance measures.
    * Security Measures Implementation: Recommending security measures to protect S3 data, such as encryption, access controls, and logging. They ensure that the data is protected in transit and at rest, and that access logs are maintained for auditing purposes.
    * Risk Assessment: Conducting risk assessments for data stored in S3 to identify potential security vulnerabilities or non-compliance issues. This includes evaluating the impact of proposed changes to S3 policies or configurations.
    * Incident Response Planning: Playing a key role in developing incident response plans for potential security breaches involving S3 data. This includes defining procedures for responding to data leaks or unauthorized access incidents.
    * Stakeholder Collaboration: Collaborating with other teams, such as IT, legal, and compliance departments, to ensure a holistic approach to S3 security and compliance. They act as a bridge between technical and non-technical stakeholders to ensure clear communication and alignment of objectives.

As a main driver of this process, the FinOps practitioner should communicate with all of the stakeholders before starting this process, including a brief guideline of the above requirements from each stakeholder involved to ensure everyone is aligned and will cooperate with the process.

### Information and resources required:

This section provides information that contributes to the success of this Playbook; the information here may include specific data sources, reports, or any relevant input

#### Information

  * AWS Console: Basic understanding of how AWS Console works and how to access it: [Getting Started with the AWS Management Console | AWS Developer Center](<https://aws.amazon.com/getting-started/hands-on/getting-started-with-aws-management-console/>)
  * S3: 
    * Understand the service – [Getting Started – Amazon Simple Storage Service (S3) – AWS](<https://aws.amazon.com/s3/getting-started/>)
    * [Understand S3 classes](<https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html>)
    * [Be familiar with S3 pricing](<https://aws.amazon.com/s3/pricing/>)

#### Tools, Utilities & Templates

Links to tools, utilities, and templates to use during the playbook.

  * S3 Storage Lens – [Understanding Amazon S3 Storage Lens](<https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage_lens_basics_metrics_recommendations.html>)
  * Billing and costs 
    * Cost Explorer – [Cloud Cost Analysis – AWS Cost Explorer](<https://aws.amazon.com/aws-cost-management/aws-cost-explorer/>)
    * Cost and usage report (CUR) knowledge – [Cloud Cost Reporting – AWS Cost & Usage Report](<https://aws.amazon.com/aws-cost-management/aws-cost-and-usage-reporting/>)
    * AWS Cloudwatch: Collects data points for different services. [What is Amazon CloudWatch? – Amazon CloudWatch](<https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html>)
    * Basic knowledge about the cloudwatch metrics related to S3.

## Instructions for running this Playbook

### Step 1 – FinOps / Engineering – Analyze your current S3 consumption per account, per region basis where applicable

**Estimated time:** 30 minutes

This step aims to gather all the information you will need to identify unoptimized S3 usage. Following these sub-steps would lead to gaining full visibility of your current S3 consumption and concluding which S3 buckets should be examined further, as candidates for cost optimization.

  * Look to understand which buckets are present. 
    * Create a list that includes details per bucket, such as class, size, region, and when it was last accessed if it has a lifecycle policy configured. If it is version-enabled.
    * ROI is an individual metric that each engineer and team will need to determine for their use case; when analyzing bucket costs, start with the most expensive; buckets below your ROI threshold should be reviewed for policy exception due to the diminishing return of those optimizations. 
      * The basic list of buckets can be retrieved from Amazon S3 > Buckets (Name, AWS region, access- public or private, and creation date).
      * Details of storage class, size, and last access can be retrieved from S3 > Buckets > drilling down to a specific bucket.
  * Break down your costs according to buckets. 
    * Find out how much you are paying per bucket using cost and usage reports: [Analyze Amazon S3 storage costs using AWS Cost and Usage Reports, Amazon S3 Inventory, and Amazon Athena | AWS Big Data Blog](<https://aws.amazon.com/blogs/big-data/analyze-amazon-s3-storage-costs-using-aws-cost-and-usage-reports-amazon-s3-inventory-and-amazon-athena/>)
  * Reviewing Cloudwatch Metrics

  * The basic storage metrics include total storage size, number of objects, and storage class; we addressed them in the previous sub-step. Additional Cloudwatch Metrics will bring a deeper understanding and identification of data archiving or deletion opportunities and whether different storage classes could be more cost-effective. 
    * Access Patterns – Metrics like GET and PUT requests and data retrieval times can indicate how frequently data is accessed. This information is vital for deciding whether to move data to a more cost-effective storage class like S3 Infrequent Access or Glacier.
    * Data Transfer and Requests – Monitoring the volume of data transferred and the number of requests can help identify cost drivers. Reducing data transfer or request rates can significantly cut costs.
    * Lifecycle Transition Metrics – If you’re using lifecycle policies, tracking how often data is transitioned between classes is essential. This helps ensure the lifecycle rules align with usage patterns, avoiding unnecessary costs.
  * The storage metrics and dimensions that Amazon S3 sends to CloudWatch are listed: [Metrics and dimensions – Amazon Simple Storage Service](<https://docs.aws.amazon.com/AmazonS3/latest/userguide/metrics-dimensions.html>) focuses on S3 dimensions.
  * How to set the metrics: [Creating a CloudWatch metrics configuration for all the objects in your bucket – Amazon Simple Storage Service](<https://docs.aws.amazon.com/AmazonS3/latest/userguide/configure-request-metrics-bucket.html>)
    * Please note that setting up some of these metrics might come at additional cost (see [Amazon CloudWatch Pricing – Amazon Web Services (AWS)](<https://aws.amazon.com/cloudwatch/pricing/>) for details). You are advised to perform a cost-benefit analysis prior to setting the required configuration to determine that the ROI matches your needs.

### Step 2 – Engineering/product – Analyze your business/usage needs per bucket

**Estimated time:** 30 minutes

This step aims to gather all the business and usage requirements for the buckets identified in the previous step. This is needed to identify buckets not set up according to their business or usage needs. These buckets would be candidates for cost optimization.

  * Data Necessity Assessment: Review each bucket to determine if the data is actively used or necessary for business operations. Consider legal, compliance, and historical data requirements. Is the data still needed? Can it be removed? This should be the first question you ask. Keeping unneeded data is a definite waste. Data that is not needed should be deleted or archived.
  * Access Pattern Analysis: Determine how frequently each bucket’s data is accessed. Classify as low or high frequency. Assess latency requirements for data retrieval. 
    * What is the required access to each bucket? Will access be at a low or high frequency? How often will access requests be made? What is the expected waiting time for the objects? If data is not required to be available at a high rate, selecting a lower access storage class can substantially reduce costs.
  * Redundancy Requirement: Evaluate if redundancy (multiple copies of data) is necessary for resilience and availability purposes for each bucket. Is data redundancy required? Replicating data brings additional costs. If it is not needed, we can eliminate these costs.
  * Versioning Needs: Determine if versioning is required for data integrity and backup. This is critical for data that changes frequently. Is versioning of the data required? If there is no use in keeping older versions of an object, removing versioning can eliminate more costs.
  * Object Size Analysis: Assess the size of objects in each bucket. Larger objects may benefit from different storage classes or compression.
  * Compression Opportunities: Identify if data can be stored in a compressed format to save space, thereby reducing costs.
  * Data Transfer and Regional Considerations: Analyze the source and destination of data transfers. Ensure the bucket’s region aligns with primary access locations to minimize transfer costs.

### Step 3 – FinOps / Engineering – decide on the right class/policy for each bucket

**Estimated time:** 20 minutes

The purpose of this step is to review all the information that was gathered in previous steps, focus on buckets that were identified as candidates for cost optimization, and define what should be the right and optimized configuration for each of these buckets – whether it is deleting data, switching to a different storage class, creating a lifecycle policy, etc..

  * Decide if data in the bucket or the bucket itself needs to be deleted.
  * Review S3 available storage classes and select the optimal class – the lowest cost class that matches your business needs (that were mapped in the previous step): <https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html#sc-compare>
    * Be careful with changing the storage class without proper analysis, while storage is cheaper, moving a lot of data or deleting data from these longer-term storage classes will result in charges being more, not less.
    * Additional cost considerations when deciding to change storage class: 
      * If your bucket has unknown or changing access patterns, then S3 Intelligent Tiering might be the best class. S3 Intelligent-Tiering “is the only cloud storage class that delivers automatic cost savings by moving data on a granular object level between access tiers when access patterns change.” – AWS documentation. Of note, analysis is needed to determine if intelligent tiering makes sense, if you find yourself going into IT buckets frequently, they can end up costing you more than standard storage.
      * There are also costs for data transfer. Choose the geographical AWS Region where Amazon S3 stores the buckets you create to reduce the data transfer costs.
      * Before changing your bucket configuration, check the following: If an object class transition is triggered before the minimum required period is met, additional early transition fees might be added. Plan the optimal time for making the wanted change.
    * Decide if redundancy and versioning are required for your bucket (based on the business mapping done in the previous step).
  * Determine if and which data lifecycle policy should be applied to a bucket. You should define lifecycle policies for your buckets to avoid future issues and ensure you remain optimized over time. A lifecycle policy is a set of rules that define actions Amazon applies to a group of objects, such as automatically transitioning data to more cost-effective storage classes as it becomes less frequently accessed, archiving them, or deleting expired objects. Decide for each bucket what is the right behavior that meets the business needs but reduces waste for more information on lifecycle policies: [Managing your storage lifecycle – Amazon Simple Storage Service](<https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html>).
  * Organization Policies – consider implementing global (account-wide) policies for their Amazon S3 buckets to standardize security practices and reduce the risk of data breaches. Two common examples of such policies include: 
    * Enforcing Encryption: Requiring that all S3 buckets use encryption to protect data at rest. This can be achieved using AWS-managed keys (SSE-S3 or SSE-KMS) or customer-managed keys (SSE-C). The policy ensures that any data stored in S3 is encrypted automatically, thereby protecting sensitive information from unauthorized access.
    * Default Private Access: Ensuring all S3 buckets and objects are set to private by default, thereby preventing unintentional public exposure of data. Access to the data should then be granted explicitly through IAM policies or pre-signed URLs for controlled access.
    * Consideration for a Global Bucket Policy: 
      * Implementing a global policy that requires all S3 buckets to be encrypted and set to private can significantly enhance security by:
      * Mitigating Data Leaks: Preventing accidental leaks of sensitive information due to misconfigured buckets.
      * Compliance: Helping to meet compliance requirements for data protection laws that mandate encryption of personal data.
      * Standardizing Security Practices: Establishing a baseline security standard for all data stored in S3 across the organization.
    * Risks of a Global Bucket Policy: 
      * However, there are also potential risks or challenges associated with implementing such a global policy:
      * Performance Impact: Encryption can introduce latency or performance overhead, especially for high-throughput applications. Organizations need to evaluate the performance impact and consider using AWS’s built-in encryption options for minimal overhead.
      * Management Complexity: Managing encryption keys, especially with customer-managed keys (SSE-C), can become complex and requires a robust key management process.
      * Cost Implications: Using server-side encryption with AWS KMS (SSE-KMS) can incur additional costs based on the number of encryption requests and the cost of managing KMS keys.
      * Overlooked Exceptions: Some applications or processes might have legitimate reasons for requiring public access to certain buckets or objects. A global policy might need exceptions or careful crafting to not disrupt these workflows.
    * Implementation Consideration: 
      * When implementing a global bucket policy, it’s essential to conduct a thorough assessment of the organization’s needs, the types of data stored in S3, and the specific requirements of different applications or departments. It’s also crucial to regularly review and update the policy to adapt to changes in the organization’s operations, AWS services, and regulatory environment.
      * Automation and monitoring tools, such as AWS CloudTrail, AWS Config, and custom Lambda functions, can help enforce these policies and alert administrators to any non-compliant configurations or potential security issues.

### Step 4 – Engineering – Setup the required configuration/ lifecycle policy

**Estimated time:** 20 minutes

By completing this step, you will implement any decision taken in the previous step and ensure your current S3 is set up correctly and with cost optimization in mind. Once completed, expect to witness the outcomes and success indicators indicated in the next section.

  * Instructions on how to delete unneeded data: [Deleting Amazon S3 objects – Amazon Simple Storage Service](<https://docs.aws.amazon.com/AmazonS3/latest/userguide/DeletingObjects.html>).
  * Instructions on changing a bucket storage class: [Using Amazon S3 storage classes](<https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-class-intro.html>) > “Setting the storage class of an object” section at the bottom of the article
  * Instructions on how to set lifecycle configuration on a bucket: [Setting lifecycle configuration on a bucket – Amazon Simple Storage Service](<https://docs.aws.amazon.com/AmazonS3/latest/userguide/how-to-set-lifecycle-configuration-intro.html>)
  * Instructions on how to suspend versioning in a bucket: [Enabling versioning on buckets – Amazon Simple Storage Service](<https://docs.aws.amazon.com/AmazonS3/latest/userguide/manage-versioning-examples.html>)
  * Instructions on how to delete incomplete multipart uploads: [Abort incomplete mpu lifecyle policy configuration – Amazon Simple Storage Service ](<https://docs.aws.amazon.com/AmazonS3/latest/userguide/mpu-abort-incomplete-mpu-lifecycle-config.html>)

**Optional:** FinOps – Set up monitoring and alerting to quickly identify new buckets that might not be set optimally or use AWS Trusted Advisor to identify new buckets without a lifecycle policy configured. Doing a periodic review or setting up a monitoring schedule to ensure continued optimization is generally advised.

  * See more information and options: [Monitoring Amazon S3 – Amazon Simple Storage Service](<https://docs.aws.amazon.com/AmazonS3/latest/userguide/monitoring-overview.html>).
  * Trusted Advisor alerts: <https://docs.aws.amazon.com/awssupport/latest/user/cost-optimization-checks.html#amazon-s3-bucket-lifecycle-policy-configured>

## Outcomes and Indicators of Success

### Primary Outcomes of running this playbook

  * **Reduced S3 cost:** A more optimized cost structure can be reached because of better utilization of S3 classes, where we see a decrease in the overall cost**.**
    * Use CUR to track your overall S3 expenses over time and ensure costs decrease. If you see another cost increase, go over the playbook again to ensure the increase is due to a justified increase in usage and that it is configured for optimization.

### Indicators of Success

  * **Unimpacted application performance:** Selecting the suitable lifecycle policy for a bucket ensures business continuity and application performance / SLA.

### Exceptions and Considerations

  * If the original bucket configuration doesn’t meet the business requirements for accessibility, redundancy, or other, adjusting the policy might not reduce costs. However, we would consider this situation cost-optimized as it will guarantee meeting business requirements while minimizing cost.
  * If a wrong class is chosen, there can be latency/performance impacts on your application, and with some classes, redundancy might also be affected, further complicating the overall system reliability.
  * As mentioned above, if an object class transition is triggered before the minimum required period is met, additional early transition fees might be added. This added cost might be required to meet the business needs defined as part of running the playbook.

## Acknowledgments

We’d like to thank the following people for their work on this Playbook:

[ ![Jacob Ferlin](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jacob Ferlin Charter Communications ](<https://www.linkedin.com/in/jacob-ferlin/>) [ ![Nurit Grinstein](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Nurit Grinstein Zesty ](<https://www.linkedin.com/in/nurit-grinstein/>)

We’d also like to thank our supporters, Krisztian Banhidy and Matt Walls.

Last updated: March 16, 2026

## Table of Contents

  * [Prerequisites](<#prerequisites>)
  * [Instructions](<#instructions>)
  * [Outcomes and Indicators of Success](<#outcomes-success>)
  * [Acknowledgments](<#acknowledgments>)

##### Related FinOps Capabilities

[ Usage Optimization ](<https://www.finops.org/framework/capabilities/usage-optimization/>)
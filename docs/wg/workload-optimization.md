---
title: "使用量の最適化機会ライブラリ（Usage Optimization Opportunities Library）"
---

[英語版]: https://www.finops.org/wg/workload-optimization/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

本アセットは、サービスプロバイダーごとにクラウドコスト（Cloud Cost）の無駄を特定するのに役立つリソース集を提供します。これには追加ツールへのリンクも含まれます。

各カードは、クラウドプロバイダー（Cloud Provider）または削減可能性（Saving Potential）で並べ替えられます。各カードには、FinOps実践者（FinOps Practitioner）によるユーザーストーリー（User Story）、プレイブック（Playbook）、ドキュメント、またはコード例が含まれています。

長年にわたり本アセットに尽力してくださった[すべての貢献者](<#contributors>)に感謝いたします。

最終更新日: 2025年6月30日

###### [基礎を学ぶ FinOps認定実践者（FinOps Certified Practitioner）で知識をレベルアップする 開始する  ![基礎を学ぶ](https://www.finops.org/wp-content/uploads/2025/12/certified-practitioner.svg) ](<https://learn.finops.org/path/finops-certified-practitioner-self-paced>)

##### 関連するFinOpsケイパビリティ

[ 使用量の最適化 ](<https://www.finops.org/framework/capabilities/usage-optimization/>)

### クラウドプロバイダー

  * Azure
  * AWS
  * GCP

### 相対的な削減効果

  * 低
  * 中
  * 高

### サービスカテゴリ

  * CloudOps
  * コンピュート
  * データベース
  * ストレージ
  * ネットワーク

### 相対的な対応負荷

  * 低
  * 中
  * 高

### リスク

  * 低
  * 高
  * 中

#### 古いスナップショット（Aged Snapshots）

**ストレージ – 無駄**

読み取り権限を持つすべてのサブスクリプションにわたるスナップショットの一覧を、Azureポータルで手動で確認します。

  * [関連資料](<https://docs.microsoft.com/en-us/answers/questions/72394/delete-old-snapshots-on-azure-files-using-powershe.html>)

#### AMIスナップショット（AMI Snapshots）

**ストレージ – 無駄**

利用できなくなったAMIから作成されたスナップショットです。これらはすでに使用されていないため、削除できます。

  * [ストーリーを読む](<https://www.finops.org/resource/removing-ami-snapshots/>)
  * [コード例](<https://wellarchitectedlabs.com/cost/300_labs/300_optimization_data_collection/3_deploy_data_collection_modules/>)

#### AWS S3 - マルチパートアップロード（Multipart Uploads）

**ストレージ – 無駄**

AWS Storage Lensまたは専任のテクニカルアカウントマネージャー（Technical Account Manager）は、S3バケット内の不完全なマルチパートアップロード（MPU）を特定できます。特定のバケットでMPUを特定したら、それらのS3バケットにライフサイクルルールを設定し、7日（または適切と判断した期間）が経過した未完了のマルチパートアップロードを自動的に中止できます。S3バケットのライフサイクルルールは、例外ではなくデフォルトにすべきです。サービスの完全な説明とこのプロセスの概要は、こちらのAWSブログ記事で確認できます。

  * [関連資料](<https://aws.amazon.com/blogs/aws-cloud-financial-management/discovering-and-deleting-incomplete-multipart-uploads-to-lower-amazon-s3-costs/>)

#### Azure SQL DatabaseおよびSQL Managed Instance

**データベース – 無駄**

既存のライセンスを、Azure SQL DatabaseおよびAzure SQL Managed Instanceの割引料金と交換できます。これにより、最大30%を削減できます。新規データベースの場合は、作成時に「基本」タブの「データベースの構成」を選択し、「コストの節約」オプションを選択します。既存のデータベースの場合は、「設定」メニューの「コンピューティング + ストレージ」を選択し、「コストの節約」オプションを選択します。

  * [関連資料](<https://docs.microsoft.com/en-us/azure/azure-sql/azure-hybrid-benefit>)

#### 非プロダクションワークロード向けのAzure SQL Databaseサーバーレスティア

**データベース – 無駄**

非プロダクションワークロードに対して（プロビジョニングされたコンピューティングオプションではなく）サーバーレスティアを設定することで、データベースコストを削減できます。自動一時停止を設定して、Azureコストを削減します。

  * [関連資料](<https://learn.microsoft.com/en-us/azure/azure-sql/database/serverless-tier-overview?view=azuresql&tabs=general-purpose>)

#### BigQuery容量コミットメント（Capacity Commitments）

**BigQuery – 無駄**

BigQueryの組織レベルの容量コミットメントを購入しない場合、オンデマンドのクエリコストによってコストが高騰する可能性があります。組織レベルの容量コミットメントを購入し、組織レベルでアイドル容量を有効にすることで、組織全体のBigQueryコストを安定させることができます。また、そのロケーションがマルチリージョンコミットメントをサポートしているか、あるいはワークロードがプロビジョニングされている各リージョンやロケーションごとに個別のコミットメントを購入する必要があるかについても考慮する必要があります。

  * [ストーリーを読む](<https://www.finops.org/resource/runaway-cost-in-bigquery-capacity-commitments/>)
  * [関連資料](<https://cloud.google.com/bigquery/docs/reservations-intro>)

#### CloudWatch

**モニタリング – 無駄**

取り込みコストを削減するには、不要なログの取り込みを停止します。ストレージコストを削減するには、ロググループの保持期間を変更します。CloudWatch Logs Insightsのクエリでスキャンされる取り込み済みのログデータを削減するには、より短い期間でクエリを実行します。

  * [ストーリーを読む](<https://www.finops.org/resource/managing-retention-in-cloudwatch/>)
  * [関連資料](<https://aws.amazon.com/premiumsupport/knowledge-center/cloudwatch-understand-and-reduce-charges/>)
  * [コード例](<https://wellarchitectedlabs.com/cost/300_labs/300_cur_queries/queries/management__governance/>)

#### データベースの最適化（Database Optimization）

**BigQuery – 無駄**

クエリやテーブル、データベースの構造を最適化し、スキャンされるデータ量を制限します。

  * [ストーリーを読む](<https://www.finops.org/resource/eliminating-waste-in-bigquery/>)

#### DynamoDBバックアップ（DynamoDB Backups）

**データベース – 無駄**

DynamoDBのフルバックアップを実行する頻度を確認してください。保持ポリシーなしで5分ごとに実行されている可能性があります。時間が経つにつれて、これらのコストは膨らんでいきます。ビジネスにこれほど多くのバックアップデータが必要かどうかを判断し、不要な場合は、DynamoDBのポイントインタイムリカバリ（Point-In-Time Recovery）を使用するソリューションに切り替えるのが一案です。

  * [ストーリーを読む](<https://www.finops.org/resource/dynamodb-backups-gone-wild/>)
  * [関連資料](<https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/PointInTimeRecovery.html>)

#### EBS - 放置されたボリューム（Abandoned Volumes）

**ストレージ – 無駄**

接続されていないEBSボリュームをスキャンして削除するスクリプトを実装できます。ボリュームを削除する前に、上位環境でスナップショットを取得することを検討してください。多くのスクリプトがGitHubやインターネット上の他の場所で見つかります。

  * [ストーリーを読む](<https://www.finops.org/resource/the-case-of-too-many-ebs-volumes/>)
  * [関連資料](<https://aws.amazon.com/blogs/mt/controlling-your-aws-costs-by-deleting-unused-amazon-ebs-volumes/>)

#### EBS - 新しいタイプへの移行

**ストレージ – 効率化**

gp2からgp3のEBSボリュームタイプに移行することで、EBSコストの一部を20%削減しました。

  * [関連資料](<https://aws.amazon.com/blogs/storage/migrate-your-amazon-ebs-volumes-from-gp2-to-gp3-and-save-up-to-20-on-costs/>)

#### GKE - コンテナと容量管理

**コンピュート – 無駄**

意図しないオートスケーリングを防ぐために、容量とリクエストのバランスをとるようにプロビジョニングします。[GKEの使用量計測](https://cloud.google.com/kubernetes-engine/docs/how-to/cluster-usage-metering)とダッシュボードを活用して、ワークロードのプロファイルを理解し、過少または過剰なプロビジョニングに対処します。

  * [ストーリーを読む](<https://www.finops.org/resource/gke-metering/>)
  * [関連資料](<https://cloud.google.com/blog/products/containers-kubernetes/use-gke-usage-metering-to-combat-over-provisioning>)

#### ハイブリッド特典（Hybrid Use Benefits）

**マーケットプレイス / ライセンス – 無駄**

Azureで仮想マシンを選択し、そのプロパティを確認して手動で調査します。AHUB（Azureハイブリッド特典）のチェックボックスがオンになっているかどうかを確認します。

  * [関連資料](<https://docs.microsoft.com/en-us/azure/virtual-machines/windows/hybrid-use-benefit-licensing>)

#### アイドル状態のVM（Idle VMs）

**コンピュート – 無駄**

完全に非アクティブなコンピューティングです。Azure Advisorは低利用率のコンピューティングを検出できます。シャットダウンが推奨されているものを探し、チームに確認を求めてください。

  * [関連資料](<https://docs.microsoft.com/en-us/answers/questions/72394/delete-old-snapshots-on-azure-files-using-powershe.html>)

#### Kubernetesコントロールプレーン（Kubernetes Control Plane）

**コンピュート – 効率化**

クラスターの数を削減します（GKEおよびEKSのみ）。放置されたクラスターには1時間あたり0.10ドルのコストがかかります。

#### ロードバランサー（Load Balancers）（AWS）

**ネットワーク – 無駄**

このタイプの無駄は、AWSコンソールのTrusted Advisorを通じて特定できます。ただし、Trusted Advisorはビジネスおよびエンタープライズサポートのお客様のみが利用できます。サポートレベルに関係なく、すべてのAWSのお客様は、CURクエリライブラリの[このCURクエリ](<https://www.wellarchitectedlabs.com/cost/300_labs/300_cur_queries/queries/compute/#elastic-load-balancing---idle-elb>)を使用して、アイドル状態のロードバランサーを特定できます。

  * [コード例](<https://www.wellarchitectedlabs.com/cost/300_labs/300_cur_queries/queries/compute/#elastic-load-balancing---idle-elb>)

#### マーケットプレイスライセンス - 従量課金制（Pay as you Go）

**マーケットプレイス / ライセンス – 無駄 / 効率化**

最大のベンダー支出を手動で調査します。ライセンスのサイズ設定と、その下にあるインフラストラクチャを入れ替えるスクリプトを作成します。

  * [ストーリーを読む](<https://www.finops.org/resource/watch-your-licenses/>)
  * [コード例](<https://github.com/awslabs/tag-policy-setup/tree/main/scp_policies>)

#### ネットワークインターフェースカード（NICs）

**ネットワーク – 無駄**

VMが削除されてもNICは接続解除されるだけで削除されないため、Azure VMから未使用のネットワークインターフェースカード（NIC）を削除するワークフローを作成します。

  * [関連資料](<https://learn.microsoft.com/en-us/previous-versions/azure/virtual-machines/linux/find-unattached-nics>)

#### オブジェクトストレージのライフサイクル（Object Storage Lifecycle）

**ストレージ – 無駄**

オブジェクトストレージのライフサイクルを管理し、アクセス頻度の低いデータをニアライン（Nearline）またはコールドライン（Coldline）に移動します。また、古いバージョンや重複を削除します。

  * [ストーリーを読む](<https://www.finops.org/resource/provisioning-storage-in-gcp/>)

#### AWS Athenaコストの最適化

**サーバーレス – 無駄**

一般的な最適化手法の1つは、日付や場所などの関連する属性を使用してテーブルをパーティション分割し、スキャンされるデータ量を削減することです。たとえば、テーブルに日次の売上データが含まれている場合、日付でテーブルをパーティション分割することで、テーブル全体をスキャンするのではなく、特定の期間の関連するパーティションのみをクエリでスキャンできます。これにより、スキャンされるデータ量が大幅に削減され、大きなコスト削減につながります。

  * [ストーリーを読む](<https://www.finops.org/resource/optimizing-aws-athena-costs/>)
  * [関連資料](<https://docs.aws.amazon.com/athena/latest/ug/ctas-partitioning-and-bucketing.html>)

#### AWSにおけるオブジェクトストレージのプロビジョニング

**ストレージ – 無駄**

ストレージにAWS S3を使用する場合、不要なコストを避けるために、オブジェクトのバージョニングとライフサイクル管理を考慮することが極めて重要です。AWS S3では、同じオブジェクトの複数のバージョンを作成できますが、バージョンごとに追加のストレージ料金が発生します。したがって、Standard、Intelligent-Tiering、Infrequent Access、Glacierなどの異なるストレージクラスを通じて、ライフサイクルをどのように管理するかを決定することが重要です。

  * [ストーリーを読む](<https://www.finops.org/resource/provisioning-object-storage-in-aws/>)
  * [関連資料](<https://docs.aws.amazon.com/AmazonS3/latest/userguide/view-object-properties.html>)

#### スナップショットのライフサイクル（Snapshot Lifecycle）

**ストレージ – 無駄**

一般的に、スナップショットのライフサイクルに対処する方法は複数あります。EBSでは、Amazon Data Lifecycle Managerを使用してスナップショットの保持を自動化できます。また、無数のサードパーティ製ツールを使用して、スナップショットのデータライフサイクルを管理することもできます。まずは組織内でポリシーを策定し、そのポリシーについてコミュニケーションとコラボレーションを行い、オプトアウト機能を提供した上でポリシーを適用することをお勧めします。

  * [ストーリーを読む](<https://www.finops.org/resource/managing-ebs-snapshots/>)
  * [関連資料](<https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html>)

#### Start/Stop VMs v2

**コンピュート – 効率化**

Azure Start/Stop VMs v2を使用して、複数のサブスクリプションにわたるAzure仮想マシンを起動および停止します。ユーザーはスケジュールを定義し、インサイトを生成し、通知を受け取ることで、他の効率化施策に役立てることができます。

  * [関連資料](<https://learn.microsoft.com/en-us/azure/azure-functions/start-stop-vms/overview>)

#### 接続されていないディスク（Unattached Disks）

**ストレージ – 無駄**

Azureポータル -> ディスク -> 所有者 = "-" でフィルターをかけ、読み取り権限を持つすべてのサブスクリプションにわたる、接続されていないすべてのディスクを一覧表示します。

  * [関連資料](<https://docs.microsoft.com/en-us/azure/virtual-machines/disks-find-unattached-portal>)

#### 接続されていないElastic IP（Unattached Elastic IPs）

**ネットワーク – 無駄**

接続されていないEIPは1時間あたり0.005ドルのコストがかかります。時間が経つにつれて、これは資金の無駄遣いにつながります。また、これらのEIPが接続解除される原因がある場合、この問題はさらに大きくなります。

  * [ストーリーを読む](<https://www.finops.org/resource/cleaning-up-elastic-ips/>)
  * [関連資料](<https://aws.amazon.com/premiumsupport/knowledge-center/elastic-ip-charges/>)
  * [コード例](<https://github.com/Road-To-FinOps-Deploy/aws_tf_eip_cleaner>)

#### AWS Config

AWS Configは、すべてのリソースに関する監視と情報を提供します。手動で確認することで、環境内に存在するすべてのリソースを把握し、費用を発生させているすべてのリソースを確実に理解できます。

  * [クラウドコスト配分（Cloud Cost Allocation） - 戦略セクション](<https://www.finops.org/wg/cloud-cost-allocation/#strategies>)
  * [プレイブック](<https://www.finops.org/wg/using-aws-config-to-identify-unused-resources-tagging-compliance/>)

#### AWS Elastic Container Registry（ECR）

**保存されたGBおよびデータ転送量（送信）**

本番運用の最中、ソフトウェアエンジニアは頻繁にさまざまなアプリケーションバージョンを実験するため、比較的短い期間に大量のイメージが生成されます。これにより、冗長または不要なイメージが大量に蓄積される可能性があり、中にはかなりのストレージ容量を必要とする大規模なデバッグシンボルが含まれている場合もあります。無駄を効率的に削減するために、組織はAlpineや専用イメージを利用してイメージをコンパクトに保ち、不要なイメージを速やかに削除することで、リソースを迅速に最適化できます。

  * [プレイブック](<https://www.finops.org/wg/aws-ecr-optimization/>)
  * [AWS ECRの料金](<https://aws.amazon.com/ecr/pricing/>)

#### DynamoDBの最適化（DynamoDB Optimization）

**リクエストユニット**

DynamoDBのリクエストユニットを最適化することで、時間単位での削減機会が得られ、長期的には大きな削減機会につながります。

  * [プレイブック](<https://www.finops.org/wg/aws-dynamodb-optimization/>)
  * [DynamoDBの料金](<https://aws.amazon.com/dynamodb/pricing/>)

#### EC2およびRDSのスケジュール設定

**時間単位で課金されるEC2およびRDS**

EC2およびRDSインスタンスのスケジュールを設定することで、必要なときにだけインスタンスを「オン」にできます。このソリューションは、使用していないリソースを停止し、必要なときに起動することで、運用コストの削減に役立ちます。Instance Schedulerは、CloudFormationテンプレートを使用して、Amazon Elastic Compute Cloud（Amazon EC2）およびAmazon Relational Database Service（Amazon RDS）インスタンスの起動と停止を自動化します。本番環境ではリスクが最も高くなりますが、開発環境では中程度から低いリスクとなります。

  * [プレイブック](<https://www.finops.org/wg/aws-ec2-rds-instance-scheduling/>)
  * [Instance Scheduler on AWS](<https://aws.amazon.com/solutions/implementations/instance-scheduler-on-aws/>)
  * [Instance Scheduler実装ガイド](<https://docs.aws.amazon.com/solutions/latest/instance-scheduler-on-aws/solution-overview.html>)
  * [Instance Schedulerアーキテクチャ概要](<https://docs.aws.amazon.com/solutions/latest/instance-scheduler-on-aws/architecture-overview.html>)

#### EC2 Autoscaling

**コンピューティング容量の増減**

Amazon EC2 Auto Scalingは、需要やワークロードに基づいてEC2インスタンスの数を自動的に調整し、コストを最適化するように設計されています。このアプローチは、実際の需要に関係なく固定数のインスタンスが常に実行されている静的なセットアップと比較して、大幅なコスト削減につながる可能性があります。組織は、静的な環境からAuto Scalingセットアップに移行する際、約20〜60%の削減を報告することが多いですが、その範囲は上記の要因によって大きく異なります。正確な計算を行うには、特定のワークロードパターンとAuto Scaling設定の詳細な分析が不可欠です。

  * [プレイブック](<https://www.finops.org/wg/cost-optimization-for-aws-ec2-autoscaling/>)
  * [EC2 Autoscaling](<https://aws.amazon.com/ec2/autoscaling/>)
  * [EC2 Autoscalingの料金](<https://aws.amazon.com/ec2/autoscaling/pricing/>)
  * [EC2 Autoscalingのメリット](<https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-benefits.html>)
  * [EC2 Autoscalingのベストプラクティス](<https://docs.aws.amazon.com/autoscaling/plans/userguide/best-practices-for-scaling-plans.html>)

#### マネージドサービス（Managed Services）

**時間単位**

マネージドサービスのインスタンスタイプの詳細を表示します。この情報を使用して、アーキテクチャチームにこれらのインスタンスのモダン化を促します。再アーキテクチャの負荷は、EC2のモダン化の取り組みよりも低くなる傾向があるためです。マネージドサービス（RDS、OpenSearch、ElastiCache、Redshift）のアーキテクチャをモダン化すると、新しいインスタンスの方が安価で高速であるというメリットがあります。また、マシンタイプを統合することで、コミットメント（Commitment）管理に関連するリスクが軽減されます。

  * [プレイブック](<https://www.finops.org/wg/aws-managed-service-modernization/>)

#### 未使用のRDS

**データベースインスタンス時間**

DB接続数を評価することで、未使用のDBインスタンスを特定できます。提供されているプレイブックを使用すると、管理外のデータベースの検出をさらに進めることができます。

  * [プレイブック](<https://www.finops.org/wg/aws-rds-removal/>)
  * [RDSの料金](<https://aws.amazon.com/rds/pricing/>)

#### S3ライフサイクルポリシー（S3 Lifecycle Policy）

**クラスタイプ（アクセス性、冗長性、リージョン、データ転送）、保存されたGB**

現在のS3バケット設定と必要な使用状況を分析し、それに応じて設定を最適化することで、アプリケーションのパフォーマンスを維持しながらコストを削減します。

  * [プレイブック](<https://www.finops.org/wg/aws-s3-cost-optimization/>)
  * [AWS S3の料金](<https://aws.amazon.com/s3/pricing/>)
  * [CloudWatchによるS3メトリクスのモニタリング](<https://docs.aws.amazon.com/AmazonS3/latest/userguide/cloudwatch-monitoring.html>)

#### 1回限りの使用のBlobライフサイクルポリシー

**GBあたりの料金**

アクセスする必要がなく、長期間にわたり低コストでAzure Blobデータを保存する必要があるビジネスユースケースには、Blob Archiveアクセスティアが最適です。Azureは、保持およびアクセスの要件に基づいて、より高いコスト効率でAzure Blobを保存するためのさまざまなアクセスティア（Hot/Cold/Archive）を提供しています。適切なアクセスティアは、最初のアップロード時に新しいBlobに対して設定するか、既存のBlobに対して手動で、またはAzure Storageライフサイクル管理機能を使用して設定できます。Blobのアクセスティアを更新するプロセスを自動化するために、定義された条件に基づいてBlobを異なるアクセスティアに移動するルールを設定する、Azure Storageライフサイクル管理ポリシーを利用できます。なお、ポリシーはユーザーの介入なしに1日1回のみ実行されます。

  * [Blobアクセスティア](<https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview>)
  * [Azure Blobの料金](<https://azure.microsoft.com/en-us/pricing/details/storage/blobs/>)
  * [ライフサイクルポリシーの自動化](<https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-overview>)
  * [ライフサイクル管理ポリシーの構成](<https://learn.microsoft.com/en-us/azure/storage/blobs/lifecycle-management-policy-configure?tabs=azure-portal>)

#### 未使用のApp Serviceプラン

**時間あたりの料金**

Azure App Serviceプランは、App Service（Webアプリ）、Azure Functions、Logic Appsを実行するための基盤となるコンピューティングリソースを定義します。1つのApp Serviceプランで複数のアプリをホストできます。プラン内の基盤となるすべてのAzureアプリが削除されたにもかかわらず、Azureエンジニアによってプランがそのまま残されている場合、未使用のApp Serviceプランが発生します。未使用 of App Serviceプランは、DynamicまたはFree料金ティアのプランを除き、構成された料金ティアに基づいて引き続き料金が発生します。クラウドの無駄な支出を削減するための優れたFinOpsプラクティスとして、App Serviceプランを定期的に確認し、未使用のプランに対して迅速に対処してクラウド料金を最小限に抑えることをお勧めします。未使用のApp Serviceプランは、不要になった場合は削除するか、適用可能であれば無料ティアにスケールダウンできます。

  * [プレイブック](<https://www.finops.org/wg/azure-unused-app-service-plans/>)
  * [Azure App Serviceプランの概要](<https://learn.microsoft.com/en-us/azure/app-service/overview-hosting-plans>)
  * [App Serviceの料金](<https://azure.microsoft.com/en-us/pricing/details/app-service/windows/>)
  * [App Serviceコストの計画と管理](<https://learn.microsoft.com/en-us/azure/app-service/overview-manage-costs>)

#### 未使用のAzure Private Linkサービス

**時間あたりの料金および処理されたデータ量**

未使用のAzure Private Linkとは、実行中のデプロイで使用されていないプライベートリンクのことです。Microsoftはこのサービスに対して課金しませんが、使用されておらず、プライベートエンドポイントが接続されていないPrivate Linkサービスを削除することは優れたプラクティスです。Azure Private Linkを使用すると、仮想ネットワーク内のプライベートエンドポイントを介して、Azure PaaSサービス（Azure StorageやSQL Databaseなど）や、Azureでホストされている顧客所有/パートナーサービスにアクセスできます。詳細については、添付のプレイブックを参照してください。

  * [プレイブック](<https://www.finops.org/wg/removing-unused-azure-private-links/>)
  * [Azure Private Linkサービス](<https://learn.microsoft.com/en-us/azure/private-link/>)

#### VMのサイズ適正化（VM Rightsizing）

**時間あたりの料金**

VMは、ワークロードと適切に整合させずに選択されることがあります。これは、VMが過剰または過少に利用されていることを意味します。この最適化手法では、VMのサイズ適正化、つまりワークロードの特性に合わせることを行います。

  * [プレイブック](<https://www.finops.org/wg/rightsizing-virtual-machines-on-azure/>)

## すべての貢献者への感謝

[ ![Rich Hoyer](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Rich Hoyer SADA ](<https://www.linkedin.com/in/richhoyer/>) [ ![Steph Gooch](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Steph Gooch AWS ](<https://www.linkedin.com/in/awssteph/>) [ ![Eric Mulartrick](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Eric Mulartrick Boomi ](<https://www.linkedin.com/in/eric-mulartrick-mba-1a24744/>) [ ![Dennis Chang](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Dennis Chang Personal Project ](<https://www.linkedin.com/in/dennislchang/>) [ ![Anthony Bothe](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Anthony Bothe Procter & Gamble ](<https://www.linkedin.com/in/ajbothe/>) [ ![Scott Lapish](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Scott Lapish Telus ](<https://www.linkedin.com/in/scott-lapish-14751b1/>) [ ![Joe Daly](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Joe Daly FinOps Foundation ](<https://www.linkedin.com/in/joseph-daly-52789220/>) [ ![Mike Martin](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Mike Martin GLG ](<https://www.linkedin.com/in/michaelmartin1090/>) [ ![Pete Silva](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Pete Silva Yahoo ](<https://www.finops.org//www.linkedin.com/in/Pete-Silva-1392b92/>) [ ![Noel Crowley](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Noel Crowley Fidelity Investments ](<https://www.linkedin.com/in/noelcrowley/>) [ ![Bhups Hirani](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Bhups Hirani Kainos ](<https://www.linkedin.com/in/bhirani/>) [ ![Andy Foley](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Andy Foley Nationwide Building Society ](<https://www.linkedin.com/in/andyfoley1/>) [ ![Noah Abrahams](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Noah Abrahams Oracle ](<https://www.linkedin.com/in/noahabrahams/>)

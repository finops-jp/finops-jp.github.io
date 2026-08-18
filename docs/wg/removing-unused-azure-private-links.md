---
title: "未使用のAzure Private Linkの削除（Removing Unused Azure Private Links）"
---

[英語版]: https://www.finops.org/wg/removing-unused-azure-private-links/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

**概要:** Azure Portalでアクティブな接続や関連付けられたプライベートエンドポイント（Private Endpoint）がないリソースを監査し、未使用のAzure Private Linkを特定します。削除を推奨する前に、Azure MonitorとLog Analyticsのテレメトリデータを分析し、十分な期間にわたってハートビートがないことを確認します。ステークホルダーが承認した後、FinOps実践者（FinOps Practitioner）は、Infrastructure as Code（IaC）や手動プロセスなど、元のデプロイ方法を使用して特定されたリンクを削除します。このアクションにより、組織の攻撃対象領域（Attack Surface）を最小限に抑え、クラウドインベントリをより効率的に管理できます。

## 目次

  * [前提条件](<#prerequisites>)
  * [データの収集](<#gather-data>)
  * [テレメトリデータの分析](<#analyze>)
  * [成果と成功指標](<#outcomes-success>)
  * [関連リソース](<#related-resources>)
  * [謝辞](<#acknowledgments>)

このプレイブックは、エンジニアリング（Engineering）チームおよびDevOpsチームが、未使用のAzure Private Linkおよびサービスを特定してクリーンアップするためのガイドです。未使用のAzure Private Linkとは、実行中のデプロイで使用されていないプライベートリンクを指します。

Microsoftは本サービスに対して課金しませんが、使用されておらず、プライベートエンドポイントが接続されていないAzure Private Linkは削除することが最善です。これにより、組織がアクティブに維持する実行中サービスを実際に使用しているものだけに削減できます。結果として、攻撃対象領域を縮小し、クラウドインベントリを効率的に活用できます。

Azureが新しい機能、料金モデル、ユーザーインターフェースなどをリリースするにつれて、このアクティビティを実行するための具体的な手順が時間の経過とともに変更される可能性があることを認識しています。そのため、このドキュメントの関連性を長期にわたって維持できるよう、可能な限りAzureが提供する関連ドキュメントへのリンクを掲載しています。

本書で提供するインサイト、手順、リソースを、Azureから直接提供される情報と組み合わせることで、FinOpsおよび使用量の最適化（Usage Optimization）に関連するこのアクションをより深く理解できます。

## 対象読者

Azureサブスクリプションの所有者（Owner）または共同作成者（Contributor）のアクセス権限を持つすべてのペルソナ（Persona）。

## 前提条件

### Azureサブスクリプションと権限

このプレイブックを効果的に活用するには、適切な請求詳細が設定されたAzureサブスクリプションを実行し、プライベートエンドポイントが有効なAzure PaaSサービス（Azure SQL、Azure Storage、Azure Monitorなど）を運用している必要があります。

### 関与が必要な担当者

  * **通知（Inform）** – 各自のクラウドコストに責任を持つサブスクリプション所有者、ビジネスチーム、エンジニアリングチームは、FinOpsのショーバック（Showback）レポートを確認し、未使用のAzure Private EndpointおよびLinkによって発生したクラウド支出を分析します。
  * **最適化（Optimize）** – エンジニアやアプリケーションアーキテクト（Application Architect）は、未使用のプライベートリンクのリストを確認し、アプリケーションの要件に応じて、削除するか保持するかという次の最適化ステップを決定します。
  * **運用（Operate）** – エンジニアは、現在のリソースを削除するか保持するかのアクションを実行します。

## 必要な情報とリソース

このプレイを成功させるには、以下が重要です。

  * [Azure Private Link](<https://learn.microsoft.com/en-us/azure/private-link/private-link-overview>)の理解 – Azure Private Linkを使用すると、仮想ネットワーク内のプライベートエンドポイントを介して、Azure PaaSサービス（Azure Monitor、Azure Storage、Azure SQL Databaseなど）や、Azureでホストされている顧客所有またはパートナーのサービスにアクセスできます。
  * Azure Portal、Azure Resource Graph Explorer、Azure PowerShellの習熟（ツールセクションを参照）
  * Azureサブスクリプションへの共同作成者アクセス権限

### ツール、ユーティリティ、テンプレート

プレイブックの実行中に使用するツール、ユーティリティ、テンプレートへのリンクは以下の通りです。

  * Azure Portal
  * Azure Resource Graph Explorer
  * Azure PowerShell
  * Azure Cost Analysis
  * Azure Network Watcher
  * Azure Monitor

## データの収集（所要時間：30分）

**担当者** : FinOpsアナリスト（FinOps Analyst）

**作業内容** : Azure Portalを使用してAzure Private Linkサービスのアセスメント（Assessment）を実施して監視を有効にし、未使用のAzure Private Linkを特定します。組織の承認を得た後、変更管理プロセス（組織の戦略に応じてIaCまたは手動）を使用してクリーンアップを実行します。

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20818%20352'%3E%3C/svg%3E)

ソース: [Azure プライベート エンドポイントの管理](<https://learn.microsoft.com/en-us/azure/private-link/manage-private-endpoint?tabs=manage-private-link-powershell#private-endpoint-connections>)

  * 現在のPrivate Linkサービスへのアクセス
    * Azure Portalにログインし、**Private Link サービス**に移動します。
    * コンソールで現在のAzure Private Linkのリストを表示し、アクティブな接続を確認します。
    * 現在アクティブな接続や、関連付けられたプライベートエンドポイントがないものを探します。

## Azure MonitorとLog Analyticsを使用したテレメトリデータの分析

### Azure MonitorでのPrivate Linkの診断の有効化（所要時間：10分）

まだ有効にしていない場合は、[Azure MonitorでPrivate Linkサービスの診断を有効にします](<https://learn.microsoft.com/en-us/azure/azure-monitor/logs/private-link-configure>)。これにより、関連するテレメトリデータを収集できます。この設定は、Azure Portal、Azure PowerShell、またはAzure CLIを使用して構成できます。

### Log Analyticsワークスペースの作成（所要時間：10分）

まだ作成していない場合は、[AzureでLog Analyticsワークスペースを作成します](<https://learn.microsoft.com/en-us/azure/azure-monitor/logs/quick-create-workspace?tabs=azure-portal>)。このワークスペースは、監視データの保存と分析に使用します。

### Log Analytics連携の構成（所要時間：10分）

Log Analyticsワークスペースにデータを送信するように[Azure Monitor内の診断を構成します](<https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/diagnostic-settings>)。以下のクエリを使用してLog AnalyticsでPrivate Linkの使用状況を照会し、Private Linkサービスおよび関連するネットワークインターフェースに関連するハートビートを取得します。

```
| where ResourceProvider == “MICROSOFT.NETWORK” and Resource == “PRIVATELINKSERVICES” and ResourceType == “NETWORKINTERFACE”

| project PrivateLinkServiceName, ResourceId, TimeGenerated
```

### 未使用のPrivate Linkの特定（所要時間：15分）

クエリ結果を分析し、長期間使用されていないPrivate Linkサービスを特定します。接続性への潜在的な影響を考慮し、このプロセスでは慎重に行動することが極めて重要です。

頻度の低い必要な接続を誤って削除しないように、分析対象の期間を長めに設定することをお勧めします。これにより、FinOpsの取り組みの信頼性を維持し、重要な業務を妨げないようにします。

さらに、削除アクションを検討する前に、合意形成を図り、エンジニアやビジネスユニット（Business Unit）などの関連するステークホルダーにデータを提供することをお勧めします。未使用のPrivate Linkサービスには最近のハートビートエントリがない場合があり、これはアクティブに使用されていないことを示します。これらの調査結果を詳細にまとめたレポートを作成し、運用の安定性を最優先しながら、コスト最適化の可能性のある領域を明確にします。

### 未使用のPrivate Linkのクリーンアップ

未使用のPrivate Linkサービスを特定したら、[それらを削除するために必要なアクションを実行します](<https://learn.microsoft.com/en-us/azure/stream-analytics/private-endpoints>)。

注意：Private Linkは、デプロイされたときと同じ方法（IaCまたは手動）で削除する必要があります。これには約**10分**かかります。

## 成果と成功指標

### このプレイブックを実行することによる主な成果

実行中のデプロイで使用されていない**未使用のAzure Private Link**を特定して削除し、アクティブに使用されていないリソースの数を削減します。これにより、メンテナンスが必要な実行中サービスが減るため、組織は攻撃対象領域を縮小し、クラウドインベントリをより効率的に活用できるようになります。さらに、このアクティビティは以下に貢献します。

  * コスト最適化：Azure Private Linkサービスの使用パターンを特定することで、組織はリソースの配分と使用量を最適化し、コストを削減できる可能性があります。これには、使用されているプライベートエンドポイントの数、関連するネットワークトラフィック、および関連コストの分析が含まれます。

  * ガバナンスとコンプライアンス：FinOpsは、Azure Private Linkサービスの使用がガバナンスやコンプライアンスの要件に適合していることを確認する上で、極めて重要な役割を果たします。これには、承認されたユーザーまたはサービスのみがアクセスできるようにプライベートエンドポイントの構成を確認することや、潜在的なセキュリティ脅威を監視することが含まれます。

  * 拡張性とパフォーマンス：FinOpsは、Azure Private Linkサービスの需要を分析し、それに応じてリソースがプロビジョニングされていることを確認することで、拡張性とパフォーマンスの計画を支援できます。これには、過去の使用パターンに基づく将来の需要予測や、必要に応じたスケールアップまたはスケールダウンの計画が含まれます。

  * 予算編成と予測：Azure Private Linkサービスのコストを理解することは、予算編成（Budgeting）と予測（Forecasting）に役ます。プライベートエンドポイントの使用に関連するコストを分析することで、組織は予算をより適切に計画し、将来のコストを予測できます。

### 成功指標

削減された未使用のプライベートリンク数：この取り組みの一環として削除されたアイテムの数。

### 例外と考慮事項

将来使用するために、これらのリソースの一部をアイドル状態で保持している可能性があります。現在は未使用であるものの、将来の段階で再利用されるというラベルを追加した上で、未使用のAzure Private Linkを「承知の上で無視（Informed ignore）」します。

## 関連リソース

  * 未使用のAzure Private Endpointの削除（未定）

### 関連するFinOpsリソースとフレームワークのケイパビリティ

<https://www.finops.org/framework/phases/>

クラウドにおけるコスト管理と最適化に焦点を当て、FinOpsのベストプラクティスを採用するためのリソースとコミュニティサポートを提供しています。[FinOps Foundation](<https://www.finops.org/>)

## 謝辞

このプレイブックの作成にご尽力いただいた以下のメンバーに感謝いたします。

[ ![Diana Bele](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Diana Bele 独立コンサルタント ](<https://www.linkedin.com/in/diana-bele-407bb224/>) [ ![Vinay Mani](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Vinay Mani EY ](<https://www.linkedin.com/in/vinay-mani-997558a/>)

また、サポーターであるDusty Bowling氏、Brian Robbins氏、Noel Crowley氏にも感謝いたします。

最終更新日：2026年3月17日

## 目次

  * [前提条件](<#prerequisites>)
  * [データの収集](<#gather-data>)
  * [テレメトリデータの分析](<#analyze>)
  * [成果と成功指標](<#outcomes-success>)
  * [関連リソース](<#related-resources>)
  * [謝辞](<#acknowledgments>)

###### [基礎を学ぶ FinOps認定実践者（FinOps Certified Practitioner）で知識をレベルアップする 開始する ![基礎を学ぶ](https://www.finops.org/wp-content/uploads/2025/12/certified-practitioner.svg) ](<https://learn.finops.org/path/finops-certified-practitioner-self-paced>)

##### 関連するFinOpsケイパビリティ

[ 使用量の最適化（Usage Optimization） ](<https://www.finops.org/framework/capabilities/usage-optimization/>)

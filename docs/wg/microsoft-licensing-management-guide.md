---
title: Microsoftライセンス管理ガイド（Microsoft Licensing Management Guide）
---

[英語版]: https://www.finops.org/wg/microsoft-licensing-management-guide/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

**概要:** クラウドにおけるMicrosoftライセンスを効果的に管理するため、FinOpsチームとIT資産管理（IT Asset Management: ITAM）チームは、複雑な使用許諾ルールと動的な消費パターンを整合させ、無駄と監査リスクを削減するために協力する必要があります。このプロセスには、SQL Serverのコア数やMicrosoft 365のシート数などの独自の単位を、総所有コスト（Total Cost of Ownership: TCO）の一貫した意思決定レベルのビューに正規化する、統合された可視化戦略が必要です。ライセンスの使用許諾データをクラウドの請求ワークフローに直接統合することで、組織は「二重支払い」のシナリオをプロアクティブに特定し、持ち込みライセンス（Bring Your Own License: BYOL）の活用を最適化できます。

## 目次

  * [はじめに](<#intro>)
  * [対象範囲](<#scope>)
  * [Microsoftライセンスの理解](<#licensing>)
  * [要約](<#recap>)
  * [定義](<#definitions>)
  * [リソース](<#resources>)
  * [謝辞](<#acknowledgments>)

## はじめに

多くの組織にとって、ソフトウェアライセンスやサービスの力を活用することは不可欠になっています。しかし、Microsoftのようなソフトウェアパブリッシャーの商用ソフトウェア製品をパブリッククラウドにデプロイすることによるコストへの影響は、効果的なライセンス管理の重要性を浮き彫りにしています。

組織が既存のMicrosoftへの投資を最大限に活用できるように、Microsoftは特定の条件下で、永続ライセンスまたはサブスクリプションライセンスをパブリッククラウドで使用することを顧客に許可しています。

多くの組織は、永続またはサブスクリプションのソフトウェアライセンスを購入することで、オンプレミスのツールやアプリケーションに多額の投資を行ってきました。オンプレミスからクラウドにワークロードを移行する際に、既存のライセンス使用許諾を活用しないと、組織はソフトウェアソリューションのコストを二重に支払うことになります。目標は、有効なサポート期間内にあるライセンスに対してBYOLを使用し、必要に応じてこれらのライセンスをパブリッククラウド環境に移行し、Microsoftのライセンス料をカバーするための追加のオンデマンド料金の支払いを避けることです。また、Microsoftはコスト削減に活用できるクラウド移行向けのさまざまなプロモーションプログラムも提供しています。

さらに、過去に購入したものの、その後廃止されたワークロードのために組織が保有している余剰のMicrosoftライセンスがある場合、これらの余剰ライセンスは、クラウドコンピューティング環境で新規に作成されたワークロードのBYOLとして利用できる可能性があります。組織が所有し、有効なサポート期間内にある余剰ライセンスを使用することで、組織はMicrosoftのライセンス料をカバーするための追加のオンデマンド料金の支払いを回避し、それによってワークロードの総所有コストを削減できます。

ライセンス管理を理解せずにパブリッククラウドにMicrosoft製品をデプロイする誤りを犯すと、最悪の場合、重大なコンプライアンス問題と、コンプライアンスを遵守するための高額なコストが発生する可能性があります。コンプライアンスを遵守するために、ワークロード用の追加ライセンスの購入が必要になったり、要件を満たすためにアーキテクチャの再デプロイや書き換えを余儀なくされ、運用やエンジニアリングに混乱が生じたりする場合があります。ライセンスの状況を理解せず、既存ライセンスの活用や移行に利用できるMicrosoftプロモーションプログラムの多くのメリットを享受せずに、すべてのワークロードでオンデマンドライセンスの使用を選択すると、大きなコスト削減の機会を見落とすことになります。

本ガイドは、Microsoftクラウドにおけるソフトウェアライセンスの複雑な仕組みをナビゲートする専門家にとって不可欠なリソースとして作成されました。クラウドコンピューティングの状況が進化し続ける中、ライセンスを効率的かつコンプライアンスを遵守して管理することは極めて重要です。本ガイドは、基本概念と高度な戦略を明確にし、読者が実際のシナリオでベストプラクティスを実践できるように支援します。

## 対象範囲

本ガイドは、Azureおよびサードパーティのクラウド環境における特定のMicrosoft製品のライセンスを対象としています。これらは「認定プロバイダー（Listed Providers）」（Microsoft Azure、Amazon AWS、Google Cloud Platform、Alibaba Cloud）と「認可アウトソーサー（Authorized Outsourcers）」（その他すべてのサードパーティ環境）に区別されます。本ガイドラインの対象となる製品セットは、Windows Server、SQL Server、Microsoft 365 Apps for Enterprise/Businessの3つです。各製品セットについて、Microsoftは使用するパブリッククラウドプロバイダーに応じて、特定の特典やコスト削減の機会を提供しています。

## Microsoftライセンスの理解

### Windows Server

#### Azure上のWindows Server

Azureで使用するWindows Serverは、以下の方法でライセンス取得または調達できます。

  * **従量課金制（別名：Pay-As-You-Go）**
    * 秒単位のWindows Serverの使用料は、特定の時点で実行されているvCPUの数によって決まります。

  * **Azure Hybrid Benefit（AHB）**
    * 顧客は、従量課金制で支払う代わりに、ソフトウェアアシュアランス（Software Assurance: SA）またはサブスクリプションライセンスを持つ既存のWindows Server Coreライセンスを、追加のソフトウェアコストなしでAzure VMに適用できます。ただし、インフラストラクチャの料金は引き続き発生します。
    * VMのサイズに関係なく、1つのVMをカバーするには最低8コア分のライセンスが必要です。
    * 必要に応じて、追加のコアを追加（スタック）できます。
    * 基盤となるVMのコンピューティングコストは引き続き発生しますが、リザーブドインスタンスやAzure Savings Planを使用して割引を受けることができます。
    * Windows Server Standardの顧客には、180日間の同時使用権（デュアルユース権）が認められます。これにより、移行先のAzure VMにAzure Hybrid Benefitを適用しながら、移行中のオンプレミスのワークロードでライセンスを引き続き使用できます。
    * Windows Server Datacenter Editionでは、顧客は永続的な同時使用権を持ちます。つまり、継続的に、オンプレミスでライセンスを使用すると同時に、Azureで2回目（無関係なワークロードを含む）の使用が可能です。この特典により、オンプレミス環境を持つ顧客は、2つの異なる環境（Azureとオンプレミス）およびワークロード間で同じ既存のライセンス使用許諾を使用できます。

#### 認定プロバイダー上のWindows Server

認定プロバイダー（現在はAlibaba、Amazon AWS、Google、Microsoft）で使用する Windows Server は、以下の方法でライセンス取得または調達できます。

  * **従量課金制**
    * 秒単位のWindows Serverの使用料は、特定の時点で実行されているvCPUの数によって決まります。

  * **専用物理サーバー**
    * 2019年10月1日より前に購入されたライセンスは、BYOL方式で使用できます。

#### 認可アウトソーサー上のWindows Server

認可アウトソーサー環境で使用するWindows Serverは、以下のようにライセンス取得または調達できます。

  * **フレキシブル仮想化特典（Flexible Virtualization Benefit）**
    * ソフトウェアアシュアランスまたはサブスクリプションライセンスを持つ顧客は、Windows Serverのコアライセンスを使用してソリューションを構築またはインストールし、認可アウトソーサーのインフラストラクチャ上で実行できます。これには、専用サーバーまたはマルチテナントサーバー上のVMへのデプロイが含まれます。

  * **BYOL**
    * ソフトウェアアシュアランスまたはサブスクリプションライセンスを持つ顧客は、アウトソーサーからソフトウェアを購入する代わりに、そのソフトウェアを組み込んだ構築済みソリューションを提供する認可アウトソーサーにWindows Serverのコアライセンスを持ち込むことができます。

### SQL Server

必要なエディション、ライフサイクル環境、およびワークロードが実行される場所に応じて、SQL Serverのライセンスを取得する方法はいくつかあります。

#### Azure上のSQL Server

  * **無料ライセンスのSQL Serverエディション:**

  * **SQL Server Express Edition**
    * ソフトウェアコストなしで利用でき、本番、開発、テスト、または概念実証（Proof of Concept: POC）インスタンスに使用できます（インフラストラクチャの料金は引き続き発生します）。

  * **SQL Server Developer Edition**
    * ソフトウェアコストなしで利用できます。本番環境には使用できませんが、開発、テスト、またはPOCインスタンスに適用できます（インフラストラクチャの料金は引き続き発生します）。

  * **SQL Server Evaluation Edition**
    * 非本番環境において、180日間にわたりSQL Server Enterprise Editionをソフトウェアコストなしで使用できます（インフラストラクチャの料金は引き続き発生します）。

  * **従量課金制（別名：Pay-As-You-Go）:**
    * SQL Server EnterpriseおよびSQL Server Standardエディションの使用に適用されます。
    * 時間単位のSQLライセンスは、最低4コアが適用されます。

  * **Azure Hybrid Benefit（AHB）:**
    * 顧客は、ソフトウェアアシュアランスまたはサブスクリプションライセンスを持つ既存のSQL Server StandardまたはEnterprise Coreライセンスを、Azure VMでBYOL方式で使用できます。
    * インフラストラクチャの料金は引き続き発生します。
    * 1つのパッシブセカンダリレプリカに対して無料ライセンスが適用されます。
    * 開発・テスト環境において、Visual Studio Enterpriseサブスクリプションを持つ顧客は、追加コストなしでSQLを使用できます（つまり、コンピューティング料金のみが課金されます）。その他の顧客は、AHBを適用しない限り、従量課金制のSQL料金が発生します。

  * **リソース** : 
    * [Azure SQL料金ガイダンス](<https://learn.microsoft.com/azure/azure-sql/virtual-machines/windows/pricing-guidance?view=azuresql>)

#### 認定プロバイダー上のSQL Server（AWS、GCP、OCI）

  * **ライセンス込み（従量課金制）**
    * ほとんどのクラウドプロバイダーは、現在サポートされているバージョンのSQL Serverを含むWindows Serverイメージを提供しています。ライセンスコストは秒単位で発生し、クラウドの請求書に追加されます。

  * **BYOL**
    * インポートしたイメージからSQL Serverインスタンスを起動し、既存のライセンスを持ち込みます。
    * ソフトウェアアシュアランスを通じたMicrosoftライセンスモビリティ（License Mobility）を使用して、有効なソフトウェアアシュアランスを持つ独自のSQL Serverライセンスを、共有テナントのコンピューティングリソースに持ち込みます。
    * 認定プロバイダー全体でSQL Serverのライセンスを取得する方法の詳細については、以下のリソースを参照してください。
      * **AWS** : 
        * <https://docs.aws.amazon.com/sql-server-ec2/latest/userguide/sql-server-on-ec2-licensing-options.html>
        * <https://aws.amazon.com/windows/resources/licensemobility/sql/>****
      * **GCP:**
        * <https://cloud.google.com/compute/docs/nodes/bringing-your-own-licenses>****
      * **Oracle:**
        * <https://docs.oracle.com/en-us/iaas/Content/Compute/References/microsoftlicensing.htm>

  * **Arc接続の従量課金制**
    * Azure外部（認定プロバイダーを含む）のSQL ServerをArcに接続し、従来のライセンスを使用する代わりに従量課金制で支払うことを選択できます。コストはAzureを通じて請求されます。これは、季節的なニーズや、断続的に実行されるワークロード（例：平日のみ実行されるワークロード）に適した選択肢です。これは、SQL Serverバージョン2012から最新バージョンまで利用可能です。

#### 認可アウトソーサー上のSQL Server

  * **フレキシブル仮想化特典**
    * ソフトウェアアシュアランスまたはサブスクリプションライセンスを持つ顧客は、SQL Serverのコアライセンスを使用してソリューションを構築またはインストールし、認可アウトソーサーのインフラストラクチャ上で実行できます。これには、専用サーバーまたはマルチテナントサーバー上のVMへのデプロイが含まれます。

  * **Arc接続の従量課金制**
    * 上記の認定プロバイダーのセクションで言及したこのオプションは、認可アウトソーサーにデプロイされたSQL Serverでも利用可能です。

### Microsoft 365 Apps for Enterprise/Business

Microsoft 365 Apps for Enterprise/Businessは、ユーザーのコンピューターにインストールされる生産性向上スイートです。ライセンス条項により、この製品をクラウドで使用することは複雑になる場合があります。このセクションは、FinOps実践者がいくつかの簡単なステップで状況を把握するのに役立ちます。

クラウドでMicrosoft 365 Apps for Enterprise/Businessを使用できますか？

  1. **ステップ1** : ユーザーに、Microsoft 365 Apps for Enterprise/Businessへのアクセス権を持つ有効なMicrosoft 365ライセンスが割り当てられていますか？
     1. はい：ステップ2に進む
     2. いいえ：Azure Active DirectoryまたはO365管理ポータル経由でライセンスを割り当てる
     3. 不明：<https://m365maps.com/> でライセンスプランを確認する
  2. **ステップ2:** AzureのワークロードにMicrosoft 365 Apps for Enterprise/Businessをインストールしようとしていますか？
     1. はい：Microsoft 365スイートにバンドルされているサービスであるAzure Virtual Desktopを使用する
     2. いいえ：ステップ3に進む
  3. **ステップ3** : Amazon AWS上でMicrosoft 365 Apps for Enterprise/Businessを使用しようとしていますか？
     1. はい：AWS Workspaces上にMicrosoft 365 Apps for Enterprise/Businessのインスタンスを1つインストールできます。このようなインスタンスは、Enterprise Monthly ChannelまたはCurrent Channelで実行されている必要があります。詳細は[Microsoft製品条項](<https://www.microsoft.com/licensing/terms/productoffering/AmazonWorkSpacesDeployments/EAEAS>)を参照してください。
     2. いいえ：ステップ4に進む
  4. **ステップ4:** Amazon AWS以外の認定プロバイダー上でMicrosoft 365 Apps for Enterprise/Businessを使用しようとしていますか？
     1. はい：これは許可されていません。
     2. いいえ：フレキシブル仮想化特典を使用して、認可アウトソーサー環境にソフトウェアをデプロイできます。
  5. **ステップ5:** Microsoft 365 Apps for Enterprise/Businessをパブリッククラウドにデプロイする際は、どのユーザーとシナリオで使用する予定であるかをITAM/SAM（ソフトウェア資産管理、Software Asset Management）実践者に通知してください。

## 要約

以下の表は、本ガイドで対象とする各環境タイプに適用可能なさまざまなライセンスモデルをまとめたものです。

**製品** | **Azure** | **認定プロバイダー** | **認可アウトソーサー**  
---|---|---|---  
Windows Server | Azure Hybrid Benefit | 専用サーバー* | BYOL / フレキシブル仮想化特典  
SQL Server | Azure Hybrid Benefit | ライセンスモビリティ Arc接続の従量課金制 | BYOL / フレキシブル仮想化特典 Arc接続の従量課金制  
Microsoft 365 Apps for Enterprise | Microsoft製品条項により付与される権利 | AWS Workspaceのみ | BYOL / フレキシブル仮想化特典  
Microsoft 365 Apps for Business | Microsoft製品条項により付与される権利 | AWS Workspaceのみ | BYOL / フレキシブル仮想化特典  

* 2019年10月1日より前に購入され、アクセス可能なバージョンであったライセンスのみ。ソフトウェアアシュアランスは不要。

**注意** : すべてのライセンスは、ソフトウェアアシュアランスまたは同等のサブスクリプション権限を持っている必要があります。

## 定義

#### Azure Hybrid Benefit（AHB）

これは、ワークロードをAzureに移行する際に、移行を支援しコストを削減するプロモーションライセンス特典です。この特典を適用するには、ソフトウェアアシュアランスを持つWindows ServerまたはSQL Serverのコアライセンス、あるいはこれらの製品のサブスクリプションのいずれかに対して支払いを行っている必要があります。

#### 認定プロバイダー（Listed Providers）

現在はAlibaba、Amazon、Google、Microsoftです。完全なリストは[こちら](<https://www.microsoft.com/licensing/docs/view/Listed-Providers>)にあります。

#### 認可アウトソーサー（Authorized Outsourcer）

[認可アウトソーサー](<https://www.lawinsider.com/dictionary/authorized-outsourcer>)とは、認定プロバイダーではなく、かつアウトソーシングサービスの一部として認定プロバイダーをデータセンタープロバイダーとして使用していない、サードパーティのサービスプロバイダーを指します。

#### フレキシブル仮想化特典（Flexible Virtualization Benefit）

フレキシブル仮想化特典は、単一の顧客専用の認可アウトソーサーのサーバーにソフトウェアをデプロイする現在の権利を、共有または専用を問わず、任意の認可アウトソーサーのサーバーに拡張します。

フレキシブル仮想化特典は、クラウド内の共有サーバーへのデプロイを許可する点で、ソフトウェアアシュアランスを通じたライセンスモビリティと似ています。しかし、ソフトウェアアシュアランスを通じたライセンスモビリティの対象外であるソフトウェア（Windows Serverやデスクトップ製品など）を含むすべてのソフトウェアに適用される点、およびライセンスモビリティフォームへの記入を必要とせず、より多くのクラウドプロバイダーを通じてより多くの顧客が利用できる点で異なります。

#### ライセンスモビリティ（License Mobility）

ソフトウェアアシュアランス（SA）を通じたライセンスモビリティにおいて、顧客は、以下の要件に従って、SAを保有しライセンスモビリティ対象として指定されている任意のライセンスに基づき、ライセンス取得済みのソフトウェアを共有サーバーに移動できます。自主ホスト（Self-Hosting）に使用される製品は、自主ホストライセンス条項の制限に従って、SAの権利を通じたライセンスモビリティの下で同時に使用できます。

## リソース

  * [Microsoftライセンスガイド](<https://www.microsoft.com/licensing/docs/view/Licensing-Guides>)
  * [Microsoft製品条項](<https://www.microsoft.com/licensing/terms>)

## 謝辞

このプレイブックの作成に尽力してくださった以下のメンバーに感謝いたします。

[ ![Amy Ashby](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amy Ashby Under Armour ](<https://www.linkedin.com/in/amyashbymke/>) [ ![Colin Jack](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Colin Jack Flexera ](<https://www.linkedin.com/in/cojack/>) [ ![Salomé Keet](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Salomé Keet FNB South Africa ](<https://www.linkedin.com/in/salom%C3%A9-keet-ba2522a/>) [ ![Chris Rininger](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Chris Rininger Microsoft ](<https://www.linkedin.com/in/chris-rininger-1185591/>) [ ![Kris Wong](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kris Wong Surveil ](<https://www.linkedin.com/in/kristopherwong/>) [ ![Rich Gibbons](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Rich Gibbons Synyega ](<https://www.linkedin.com/in/rich-gibbons-microsoft-licensing/>)

また、サポーターの皆様にも感謝いたします：Brian McCumber、Gregory Brinkerhoff、George Arzenia、Peter Schmidhofer、Amit Doshi、Ron Brill、およびTAC連絡担当のKim Wier。

最終更新日: 2026年3月17日

## 目次

  * [はじめに](<#intro>)
  * [対象範囲](<#scope>)
  * [Microsoftライセンスの理解](<#licensing>)
  * [要約](<#recap>)
  * [定義](<#definitions>)
  * [リソース](<#resources>)
  * [謝辞](<#acknowledgments>)

##### 関連するFinOpsケイパビリティ

[ ライセンスとSaaS ](<https://www.finops.org/framework/capabilities/licensing-saas/>) [ 専門分野間の連携 ](<https://www.finops.org/framework/capabilities/intersecting-disciplines/>)

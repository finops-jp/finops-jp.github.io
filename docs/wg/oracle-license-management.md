---
format: md
title: "Oracleライセンス管理ガイド（Oracle License Management Guide）"
---

[英語版]: https://www.finops.org/wg/oracle-license-management/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

## 目次

  * [はじめに](<#intro>)
  * [対象範囲](<#scope>)
  * [Oracleライセンスの理解](<#oracle-licensing>)
  * [ライセンス最適化戦略](<#licensing-strategy>)
  * [BYOL戦略](<#byol-strategy>)
  * [コンプライアンスの維持](<#maintaining-compliance>)
  * [定義](<#definitions>)
  * [リソース](<#resources>)
  * [謝辞](<#acknowledgments>)

## はじめに

このガイドは、ソフトウェアライセンスの複雑な仕組みを扱う専門家にとって不可欠なリソースとして作成されました。クラウドコンピューティングの環境が進化し続ける中、ライセンスを効率的かつコンプライアンスを遵守して管理することは極めて重要です。このガイドでは、基本概念から高度な戦略までを明確に説明し、読者が実際のシナリオでベストプラクティスを実践できるようにします。

## 対象範囲

Oracleは、エンタープライズソフトウェア企業としての基盤と歴史を持っています。そのため、同社のクラウドソリューションは、顧客がクラウド上でOracleソフトウェアライセンス（資産）を有効活用できるように、さまざまなモビリティプログラムを提供しています。これらのプログラムのメリットを特定・分析するには、プライベート、パブリック、ハイブリッド、マルチディメンショナル、分散型など、多様なクラウドモデルを管理するために、FinOpsやITAM（IT資産管理）/SAM（ソフトウェア資産管理）のベストプラクティスを継続的に活用する必要があります。

Oracleのクラウドサービス、サブスクリプション、モビリティプログラム（BYOL）、およびこれら相互の依存関係におけるOracleクラウドサービスとライセンスの継続的な消費管理を十分に理解するためには、相互に関連するいくつかの主要なトピックが存在します。

**クラウドサービス** | **クラウドサブスクリプション** | **ライセンスモビリティプログラム** | **サポート軽減プログラム** | **その他のクラウド**  
---|---|---|---|---  
Oracle Cloud Infrastructure (OCI) / IaaS-PaaS<br/>Oracle Fusion Cloud Applications / SaaS<br/>Cloud@Customer | 契約 / 契約書<br/>Universal Credits / 価格設定 | IaaS-OCIへのBYOL（リフト＆シフト）<br/>PaaSへのBYOL<br/>SaaS向けCustomer 2 Cloud (C2C) | Oracle Support Rewards (OSR) | 認定クラウド（Authorized Cloud） 

  * AWS
  * Azure

_技術とコアサービスプラットフォーム_ | _クラウドサービスの利用とコストを規定するポリシー_ | _オンプレミスライセンスとクラウドサービスにまたがる利用可能なプログラム_ | _オンプレミスのサポート費用を削減するために、クラウドへの投資や利用を活用するオプション_ | _他のクラウド環境でのOracle技術の利用_  

これらのトピックのうち、本ガイドでは、以降の「ライセンス最適化戦略」および「BYOL戦略」のセクションにおける戦略を説明するための代表例として、クラウドサービスにはOracle Cloud Infrastructure（OCI）、モビリティプログラムにはPaaSへのBYOL、サポート軽減プログラムにはOracle Support Rewards（OSR）を取り上げます。

### BYOLの概要

本ガイドは、FinOps実践者がクラウドでのBYOLデプロイにOracleのオンプレミスライセンスを活用する際のベストプラクティスを提供します。既存のオンプレミスライセンスへの投資を活用することは、クラウドへのワークロード移行と維持において、費用対効果の高い方法となります。Oracleは、クラウドへの移行の一環として、既存のライセンス投資を最適化するように設計されたいくつかのオプションを提供しています。

FinOps実践者は、Oracleのライセンス管理戦略をFinOpsのベストプラクティスと組み合わせて活用することで、組織のOracleライセンス投資を最適化できます。優れたライセンス管理戦略には、以下の要素が含まれます。

  * オプションの評価
  * 幅広いクラウド環境にわたるライセンスデプロイの管理
  * ライセンス契約と義務の理解
  * ライセンス管理を支援するツールの活用
  * クラウド移行プログラムの最適化
  * FinOpsプラクティスの適用

本ドキュメントで使用する用語の詳細については、[定義](<#definitions>)セクションを参照してください。

BYOLは、クラウドにデプロイされたOracle製品およびサービスのライセンス要素を満たすために、未使用のライセンスキャパシティや、ライセンス移行用に確保されたキャパシティをデプロイすることを目的としています。BYOLのライセンスデプロイには、大きく分けて以下の2つのカテゴリがあります。

  1. 顧客が完全にインストールおよび管理するクラウド上のインフラストラクチャへのOracle製品のインストール。この場合、継続的な管理、パッチ適用、アップデートは顧客が責任を負います。
  2. Oracle Managed Cloud Services。Oracleが管理、パッチアップデート、サービス品質の向上などに責任を負います。場合によっては、これらのサービスに、顧客がインストール・管理する製品以上の追加機能が含まれることがあります。顧客は、より低いサービス料金の適用を受けるために、未使用かつサポート対象のオンプレミスライセンスを割り当てて、サービスのライセンスコンポーネントを満たすことができます。Oracleテクノロジー分野のクラウドサービスでは、これらを「PaaSへのBYOL（BYOL to PaaS）」サービスと呼びます。

多くのOracleテクノロジーのデプロイでは、ライセンスプールがデプロイされる異なるBYOLタイプとクラウド環境が混在する可能性が高くなります。これらの異なる環境とBYOLタイプは、個別のポリシーによってカバーされます。

**Oracle PaaS & IaaS Universal CreditsおよびFunded Allocationモデル**

Universal Creditモデルは、Oracleが管理するクラウドサービスを購入するための主要な購入・消費モデルです。Funded Allocationモデルは、Oracleの承認を条件とする限定的な提供であり、Universal Creditsの変形として、主に公共セクターで見られる一貫した支出要件をサポートします。これらのモデルの下では、オンデマンドで非常に柔軟に利用できる幅広いOracle Managed Cloud Servicesが提供されます。これらのモデルの多くのサービスは、「PaaSへのBYOL」モードまたは「ライセンス込み（License Included）」モードのいずれかでサブスクライブできます。名前が示すように、ライセンス込みとは、クラウドサービスの価格にライセンスが含まれていることを意味します。PaaSへのBYOLの場合、顧客が既存の投資から未使用かつサポート対象のライセンスを提供し、それをクラウドサービス専用に割り当てるため、クラウドサービスの価格は低くなります。

Universal CreditsまたはFunded Allocationサブスクリプションの利用において遵守すべき重要なポリシー文書は、Oracle PaaS & IaaS Universal Credits Service Descriptions（[Oracle UCM v090723](<https://www.oracle.com/content/published/api/v1.1/assets/CONT973461D7AF694A2DBB06EE4BDAE2F940/native/Oracle%20PaaS%20and%20IaaS%20Universal%20Credits%20Service%20Descriptions.pdf?cb=_cache_1b97&channelToken=117bec9b3b4e4e90a1c4c9069d210baf&download=false>)）です。この文書は、サービスの概要を説明し、PaaSへのBYOLサービスをカバーするために維持する必要があるライセンスの詳細を提供します。これには、適切なライセンスタイプが導入されていることの確認（組み込みライセンスはPaaSへのBYOLには使用できません）や、使用されているライセンスのタイプ（制限事項を含む）が維持されていることの確認が含まれます。これらのサービス説明書には、各PaaSへのBYOLサービスのライセンス要件が詳しく記載されています。変換率（通常はProcessorまたはNUPからOCPUへの変換）が示されており、データベースの場合は、どのライセンスオプションとManagement Packを含める必要があるかも指定されています。

ライセンスは非常に柔軟にデプロイできる可能性があるため（Oracleが管理するPaaSへのBYOLの場合、ライセンスは変動する可能性のある使用量に一致させるだけで済みます）、規律あるライセンス管理を行うことが重要です。

## Oracleライセンスの理解

### ライセンスタイプ

  * **フルユースライセンス（Full-Use Licenses）**：最も一般的なエンドユーザー向けライセンスであり、通常はすべての機能を利用できます。一般的に、エンタープライズ製品のProcessorライセンス1つにつき、2 OCPUまたは2 vCPUが提供されます。ライセンス条項にある制限事項は、クラウドでの権利にも適用されます。
  * [**Oracle ASFUライセンス**](<https://redresscompliance.com/oracle-asfu-license-model-explained/>)：特定のアプリケーションでのみ動作するように限定されたアプリケーション特定フルユース（Application-Specific Full-Use）ライセンスであり、追加の制限が伴う場合があります。通常、Oracleパートナーは、指定されたアプリケーションとともにASFUライセンスを再販します。このライセンスをクラウドに移行する場合、購入時の対象となった特定のアプリケーションにのみ使用できます。
  * [**プロプライエタリ・アプリケーション・ホスティング・ライセンス**](<https://redresscompliance.com/oracle-pah-license-model-explained/>)（OracleからのISV修正条項が適用されます）
  * **BYOL適格**：すべてのBYOL適格ライセンスは、CSI（Customer Support Identifier）/ライセンス契約に対して有効なサポート契約を結んでいる必要があります。サポート対象外のライセンスは、Oracle BYOLプログラムには使用できません。
  * [**Oracle組み込みソフトウェアライセンス**](<https://redresscompliance.com/oracle-esl-license-oracle-embedded-license/>)**（ESL）**（BYOLでの利用は対象外）
  * **パブリッククラウドおよびプライベートクラウド**：Oracle BYOLは、OCIパブリッククラウドおよびCloud at Customer（C@C）プライベートクラウド環境で利用できます。

#### ライセンス関連の重要用語

  * **移行期間**：Oracleは、オンプレミスとBYOLの同時実行を、OCI（PaaS / IaaS）プラットフォームでは最大100日間、C2C（SaaS）プラットフォームでは最大6ヶ月間認めています。
  * **変換比率**：ライセンスメトリックからクラウドメトリックへの変換比率であり、ソリューションのエンティティやタイプによって異なります。変換比率は、サービス説明書（[Oracle UCM v090723](<https://www.oracle.com/content/published/api/v1.1/assets/CONT973461D7AF694A2DBB06EE4BDAE2F940/native/Oracle%20PaaS%20and%20IaaS%20Universal%20Credits%20Service%20Descriptions.pdf?cb=_cache_1b97&channelToken=117bec9b3b4e4e90a1c4c9069d210baf&download=false>)）で確認できます。

### ライセンスエディション

以下は、クラウドにおけるOracle Databaseのライセンスエディションを視覚的に表したものです。テクノロジースタック全体で最も一般的なエディションは、Enterprise EditionとStandard Editionです。（データベースのエディションにはStandard EditionとEnterprise Editionのみがあります。その他のオプションにはAutonomous Databaseがあります。）

ライセンス込み

**ライセンス込みPaaSデータベースエディション**  
---  
**Standard Edition** | **Enterprise Edition** | **EE High Performance** | **EE Extreme Performance**  
**含まれるオプションとパック**<br/>TDE表領域暗号化<br/>OML [Advanced Analytics]、Spatial & Graph<br/>19c以降の3つのPDB<br/>Data Safe | **追加されるオプションとパック：**<br/>Data Guard<br/>Data Masking & Subsetting Pack<br/>Diagnostics & Tuning Pack<br/>Real Application Testing | **追加されるオプションとパック：**<br/>Multitenant<br/>Partitioning<br/>Advanced Compression<br/>Advanced Security、Label Security、Database Vault<br/>Lifecycle Management Pack<br/>OLAP<br/>Cloud Management Packs | **追加されるオプションとパック：**<br/>In-Memory Column Store<br/>In-Memory Base Level<br/>Active Data Guard<br/>Real Application Clusters  
**_注意：_**<br/>_エディションのオプションとパックは、SEからEE、EEHP、EEEPへと累積されます。_<br/>_Autonomous Database、Exadata Cloud Services、Exadata Cloud@Customerも利用可能ですが、ここでは記載していません。_<br/>_ライセンス込みの代表的な価格は以下の表を参照してください。_  

BYOL

**PaaSへのBYOLデータベースエディション**  
---  
**Standard Edition** | **Enterprise Edition** | **EE High Performance** | **EE Extreme Performance**  
**含まれるオプションとパック**<br/>TDE表領域暗号化<br/>OML [Advanced Analytics]、Spatial & Graph<br/>19c以降の3つのPDB<br/>Data Safe | **追加されるオプションとパック：**<br/>Data Guard<br/>Data Masking & Subsetting Pack<br/>Diagnostics & Tuning Pack<br/>Real Application Testing | **追加されるオプションとパック：**<br/>+ BYOLに従ってサポート対象ライセンスを保有しているオプションとパックのみ | **追加されるオプションとパック：**<br/>+ BYOLに従ってサポート対象ライセンスを保有しているオプションとパックのみ  
**_注意：_**<br/>_エディションのオプションとパックは、SEからEEへと累積されます。_<br/>_EEHPおよびEEEPのエディションオプションとパックは、BYOLに従ってサポート対象ライセンスを保有しているもののみが含まれます。_<br/>_Autonomous Database、Exadata Cloud Services、Exadata Cloud@Customerも利用可能ですが、ここでは記載していません。_<br/>_BYOLの代表的な価格は以下の表を参照してください。_  

### 代表的なユニット価格

PaaSおよびIaaSクラウドサービスにおけるBYOLのユニット価格（利用可能な場合）は、ライセンス込みのユニット価格よりも大幅に安くなります（場合によっては最大80〜90%安価）。以下は、ライセンス込みオプション（ライセンスタイプおよびエディション別の標準ユニット価格）と、関連するBYOLオプション（ライセンスタイプおよびエディションは、顧客が該当するライセンス契約に基づいて保有するライセンスに従う）のユニット価格の代表的な比較です。

**データベースバージョン** | **ユニット価格*** | **メトリック**  
---|---|---  
Oracle Base Database Service – Standard | $0.2150 | OCPU/時間  
Oracle Base Database Service – Enterprise | $0.4301 | OCPU/時間  
Oracle Base Database Service – High Performance | $0.8871 | OCPU/時間  
Oracle Base Database Service – Extreme Performance | $1.3441 | OCPU/時間  
Oracle Base Database Service – BYOL | $0.1935 | OCPU/時間  
*2023年8月10日時点の価格。最新の価格：<https://www.oracle.com/a/ocom/docs/corporate/pricing/oracle-paas-and-iaas-global-price-list.pdf>  

### ライセンスメトリック

テクノロジー製品において、最も一般的なライセンスメトリックは以下の通りです。

  * Named User Plus (NUP)：ユーザーやデバイスを容易に特定およびカウントできる環境で使用されます。ソフトウェアにアクセスするすべての個人ユーザーおよび人間以外の操作デバイスにライセンスを付与する必要があります。
  * Processor (xCPU)：インターネットベースのアプリケーションなど、ソフトウェアユーザーを容易に特定およびカウントできない環境で使用されます。

### ライセンスモビリティプログラム

Oracleの主要なモビリティプログラムは、IaaS/PaaSプログラムとSaaSプログラムに分かれています。

  * [**Oracle PaaSへのBYOL**](<http://www.oracle.com/cloud/bring-your-own-license/faq>)：組織は既存のオンプレミスライセンスを、PaaS/IaaS（Oracle Cloud Infrastructure）やSaaS（Oracle Cloud Applications）などの同等のクラウドサービスに適用できます。BYOLの主なガイドラインは以下の通りです。
    * 組織は、[価格表](<http://www.oracle.com/a/ocom/docs/corporate/pricing/oracle-paas-and-iaas-global-price-list.pdf>)にBYOLバージョンが用意されている場合、そのクラウドサービスのBYOLバージョンを有効化できます（すべてのクラウドサービスにBYOLバージョンがあるわけではありません）。
    * 組織は、クラウドサービスのサービス説明書（[Oracle UCM v09072](<https://www.oracle.com/content/published/api/v1.1/assets/CONT973461D7AF694A2DBB06EE4BDAE2F940/native/Oracle%20PaaS%20and%20IaaS%20Universal%20Credits%20Service%20Descriptions.pdf?cb=_cache_1b97&channelToken=117bec9b3b4e4e90a1c4c9069d210baf&download=false>)）で要求および指定されている、十分なサポート対象オンプレミスライセンスを保有していることを条件に、有効化したクラウドサービスのBYOL料金を請求されます。
    * 組織は、該当するライセンスの注文文書（Ordering Document）で定義されている、オンプレミスライセンスに適用されるライセンス制限（メトリックを含む）の遵守について、引き続き責任を負います。
    * BYOLクラウドサービス環境での使用には、以下のライセンスタイプを適用できます：フルユース（Full Use）、限定ユース（Limited Use）、アプリケーション特定フルユース（Application Specific Full Use）、プロプライエタリ・ホスティング（Proprietary Hosting、ISV修正条項が適用されます）。期間ライセンス（Term license）は、ライセンスの期間がまだ有効である場合に限り、BYOLの対象となります。
    * 組み込みソフトウェアライセンス（Embedded Software Licenses）は、BYOLの対象外です。
    * 使用権（Entitlement）は、BYOLクラウドサービス環境に適用される関連オンプレミスライセンスの数に対応する、同数のOCPUまたはその他のクラウドメトリックとなります。
    * ライセンスタイプは、BYOLクラウドサービス環境に適用された状態のまま維持されます（例：フルユースはフルユースのまま、限定ユースは限定ユースのまま維持されます）。
    * クラウドサービスのBYOLバージョンに適用されたライセンスは、デプロイされて使用中であるとみなされます。すなわち、これらのライセンスは、クラウドサービスのBYOLバージョンに適用されている間は、オンプレミスで使用することはできません（使用開始から最初の100日間を除く）。
  * [**Oracle Customer to Cloud (C2C)**](<http://www.oracle.com/applications/customer2cloud>)：すべての製品ファミリー（Siebel、Peoplesoft、JD Edwards、Oracle E-Business Suiteなど）にわたってERP、EPM、HCM、CRMアプリケーションソリューションを使用している組織は、導入済みのオンプレミスソリューションの要素を、同一製品ファミリー内のOracle Applications Cloudに振り替えることができます。このプログラムにより、組織は現在のサポート支出を利用してクラウドアプリケーション（SaaS）に移行できます。 [ ](<http://www.oracle.com/applications/customer2cloud>)

### サポート軽減プログラム

  * [**Oracle Support Rewards (OSR)**](<http://www.oracle.com/cloud/rewards>)：クラウドサービスのUniversal Creditを契約している組織は、OCIのクラウド支出からサポート支出の特典（リワード）を蓄積できます。OSRは、OCIを利用しながらオンプレミスライセンスと関連サポートを保有する組織にメリットをもたらします。OCIでの支出1ドルにつき、組織は25セントのOSR特典を蓄積でき、これをテクノロジーライセンスのサポート費用に適用できます。ULAサポートの場合、OCIでの支出1ドルにつき33セントのOSRが蓄積されます。OSR特典は、組織の該当するサポート支出の最大100%まで蓄積できます。OSRは、Oracle Cloud Applications（OCA）または関連するOracleアプリケーションライセンスのサポートには適用されません。

### 追加プログラムと注意点

  * [**Oracle Cloud @ Customer (C@C)**](<http://www.oracle.com/cloud/cloud-at-customer>)：組織は、自社のデータセンターでOCIサービスおよびOracle Fusion SaaSアプリケーションを実行できます。これに伴い、Oracle’のライセンスモビリティプログラムはCloud @ Customerプログラムでも利用可能であり、これには以下のバリエーションが含まれます：Dedicated Region C@C、Autonomous Database Exadata C@C、Exadata C@C、Compute C@C。
  * **ライセンス込みPaaS**：PaaSクラウドサービス製品にライセンスとサポートが含まれています。これは「クラウド専用」の製品です。ライセンス込みの料金はBYOLの料金よりも高くなります。BYOLの料金は、組織の既存のライセンス使用権（および対応するサポート支払い）を同等のクラウドサービスとして使用するために割引されています。ライセンス込みPaaSとPaaSへのBYOLの主な違いは以下の通りです。
    * BYOLでは、BYOLプログラムに適用されるライセンスとサポート（同等のクラウドサービス用）を能動的に管理する必要がありますが、ライセンス込みには同様のライセンス管理要件はありません。
    * すべてのライセンス込みPaaS製品に、対応するPaaSへのBYOL製品があるわけではありません。ライセンス込みPaaSの中には、オンプレミスに類似製品がない、またはBYOLを適用できないクラウド専用サービスがあります。例として、Oracle Mobile Cloud、Oracle API Platform Cloud Service、Oracle Internet of Things Cloud Service、Oracle Visual Builder Cloud Serviceなどがあります。

## ライセンス最適化戦略

マルチディメンショナルなクラウド環境およびオンプレミス環境において、ライセンスとクラウドの消費を管理するためのガイドラインは以下の通りです。

#### 使用権

  * オンプレミスライセンスおよびクラウドサービスの契約内容、権利、利用規約を把握する
  * 関連する契約およびアセット/サービスのサイクル、期間、関連する更新決定の節目を把握する

#### デプロイ / 消費

  * ライセンスとクラウドの消費レベル（現在、過去、および傾向）を把握する
  * PaaSへのBYOLの機会を特定する
  * OCIの消費からOSRのサポート軽減特典を特定する

#### 投資経済性

  * 実現可能なBYOLおよびOSRのオプションを特定する
  * すべての実現可能なオプションについてTCO分析を実施する
  * BYOLおよびOSRのオプションを最適化する

#### 運用

  * デプロイ/消費および関連するTCOを管理し、最適化する
  * 管理策とガバナンスの決定を設定し、自動化する（プロセスの改善）

## BYOL戦略

BYOL（Bring Your Own License）プログラムは、ベンダーごとに独自のパラメータと特徴を持っています。Oracle Cloud Infrastructure（OCI）の主要なサブスクリプションモデルはUniversal Creditsです。組織がOracleのBYOL戦略を検討する上で理解すべきUniversal Creditsの主な特徴には、1) 従量課金制（PAYG）とAnnual Flexプランの比較、2) BYOLとライセンス込みオプションの比較があります。また、OCIの包括的なBYOL戦略には、3) Oracle Support Rewardsの理解も含まれます。注意：AWSやAzureなどの認定クラウドにおけるOracleライセンスのライセンス込みとBYOLの関係も同様に機能しますが、価格への影響は各クラウドサービスプロバイダーに固有のものです。

**従量課金制（PAYG）** | **Annual Flexプラン**  
---|---  
事前のコミットメントや支払いは不要<br/>リスト価格（定価）<br/>使用した分だけ支払い<br/>使用実績に基づき後払い<br/>不確実で柔軟な要件に適している | クレジットの事前コミットメントと支払い（クラウドサービスの消費全体に適用）<br/>ボリュームディスカウント価格<br/>クレジットを消費するための12ヶ月の期間（「使わなければ失効」）、未使用のクレジットは期間終了時に失効。超過消費分は期間終了時までレートカードのユニットレートレベルで請求<br/>集約、コミット、割引が可能な、既知で長期的な予測可能要件に有益  
**ライセンス込み** | **BYOL**  
ライセンスとサポートを含むクラウドサービス（「クラウド専用」製品）<br/>BYOLよりも高いサブスクリプション価格<br/>制限なし（すべてのクラウドサービスにライセンス込みの標準クラウド専用バージョンが存在）<br/>クラウドサービスの消費に関連するライセンス管理やコンプライアンス要件は不要 | 既存のライセンスとサポートを同等のクラウドサービスに適用。顧客は未使用のサポート対象ライセンスを活用して、より低い料金のBYOLバージョンを利用可能<br/>制限あり（BYOLバージョンがあり、かつBYOL利用に適格なライセンスタイプを持つクラウドサービスに限定）<br/>割引あり（クラウドサービスのBYOLバージョンは大幅に割引され、ライセンス込みバージョンよりも低い料金が適用）<br/>ライセンスコンプライアンスを確保するために、厳格なインベントリ管理策が必要  

#### BYOLの機会の特定

  * 多くの組織は、パーペチュアル（永久）または期間ソフトウェアライセンスを購入することで、オンプレミスのツールやアプリケーションに多額の投資を行ってきました。オンプレミスからクラウドにワークロードを移行する際に、既存のライセンス使用権を活用しないと、クラウド上でソフトウェアソリューションのコストを二重に支払うことになります。目標は、アクティブなサポート下にあるライセンスに対してOracle BYOLを使用し、これらのライセンスを必要に応じてパブリッククラウド環境に移行し、Oracleライセンス費用をカバーするための追加のオンデマンド料金の支払いを避けることです。
  * 多くの組織は、過去に購入したものの、その後廃止されたワークロード用の余剰なOracleライセンスを保有しています。これらの余剰ライセンスは、クラウドコンピューティング環境で作成されたワークロードのBYOLとして利用できる可能性があります。組織が所有し、アクティブなサポート下にある余剰ライセンスを使用することで、Oracleライセンスをカバーするための追加のオンデマンド料金の支払いを回避できます。
  * クラウドで作成される一部のワークロードは、定常的な性質を持っています。オンデマンドライセンスを使用するか、あるいは組織の既存のOracle契約に基づいてOracleの期間ライセンスまたはパーペチュアルライセンスを新たに調達するか、どちらが最も費用対効果の高いライセンス付与方法であるかを判断するために、TCO分析を実施する必要があります。
  * Oracle BYOLを使用すると、適格なOracleライセンスを任意の認定パブリッククラウド環境で使用できます。
  * BYOLの適格性は、ライセンスモデル、およびライセンスがアクティブなサポート対象のライセンスエディションであるかどうかによって決まります。
  * 一部の組織は、無制限ライセンス契約（ULA）を結んでいます。ULAに基づく各注文文書（オーダー）には、無制限に使用できるライセンス製品と、それに対応する無制限デプロイ期間が指定されている場合があります。これらのライセンス製品については、認定プロセスの終了後にクラウドでの使用に適しているかどうかを評価する必要があります。ULAの終了時に、顧客はOracleに対し、(a) ULAを延長するか、または (b) ULAを認定し、ULA認定プロセスを完了するか（注文書に指定された製品の認定数量で終了するため）を通知する必要があります。
  * 移行期間：Oracleは、オンプレミスとBYOLの同時実行を最大100日間認めています。その後は、同一のライセンスでオンプレミスとBYOLの両方を実行することはできません。
  * Oracleの顧客は、Oracleワークロードを移行するための最も費用対効果が高く最適な選択肢を決定する際、すべてのパブリッククラウドプラットフォームを検討する必要があります。
  * Oracle CloudまたはOracle Cloud @ Customerを利用するOracleの顧客は、新しい[Oracle PaaSおよびIaaS Universal Cloud Credits](<https://redresscompliance.com/universal-cloud-credits-oracle-benefits/>)を購入するか、BYOLを使用するか、どちらが最も費用対効果の高い選択肢であるかを評価する必要があります。

#### BYOLの実現可能性の評価

  * FinOpsは、ソリューションのライセンスコストを評価し、BYOLの使用によって費用対効果が向上するかどうかを判断する必要があります。
  * BYOLのコストを評価するために、FinOpsはITAMと連携し、利用可能なライセンスがあるかどうか、またある場合はそのコストがいくらになるかを把握する必要があります。
  * ライセンスポジションや実現可能性についてアドバイスを受けるために、以下のリソースに相談することもできます。
    * [Oracle Global License Advisory Services (GLAS)](<http://www.oracle.com/corporate/global-licensing-advisory-services>)：Software Investment Advisory Services（SIA）とDigital Transformation Consulting（DTC）の2つのチームを通じてアドバイザリーサービスを提供します。SIAとDTCはどちらも、Oracleの顧客がライセンス、クラウド、モビリティプログラムのレポート、分析、知識移転、ソリューションガイダンスを行うのを支援するために、無償のアドバイザリーサービスを提供しています。
    * Oracle Partner Network（OPN）のコンサルタントおよびアドバイザー：OPNには多くのITAM/SAMアドバイザーが所属しており、Oracleはアドバイザーコミュニティをさらに発展させるために、認定SAMパートナープログラムを開始しました。
      * [www.oracle.com/partnernetwork/program/](<http://www.oracle.com/partnernetwork/program/>)
      * <https://partner-finder.oracle.com/catalog/>
    * 独立系コンサルタントおよびアドバイザー：Oracle Partner Networkに所属していない独立系のITAM/SAMアドバイザーも存在します。これらのアドバイザーを見つけるには、専門的なITAM/SAMコミュニティが適しています。
      * <https://itassetmanagement.net/>
      * <https://iaitam.org/>
  * BYOLを使用する際のコンプライアンス要件、導入が必要なツール、およびBYOLの使用中にコンプライアンスを維持するために必要なプロセスを理解するために、ITAMに相談する必要があります。

#### BYOLポリシーの定義

  * BYOL：[www.oracle.com/cloud/bring-your-own-license/faq/](<http://www.oracle.com/cloud/bring-your-own-license/faq/>)
  * Oracle Support Rewards (OSR)：[www.oracle.com/cloud/rewards](<http://www.oracle.com/cloud/rewards>)
  * PaaS IaaS Universal Credits Service Descriptions：[Oracle UCM v090723](<https://www.oracle.com/content/published/api/v1.1/assets/CONT973461D7AF694A2DBB06EE4BDAE2F940/native/Oracle%20PaaS%20and%20IaaS%20Universal%20Credits%20Service%20Descriptions.pdf?cb=_cache_1b97&channelToken=117bec9b3b4e4e90a1c4c9069d210baf&download=false>)

#### BYOL管理ツールの導入

  * Oracleは、自社ソフトウェアの追跡および監査のために、いくつかのサードパーティ製ツールを推奨しています：[ツール | ライセンス管理サービス | Oracle](<https://www.oracle.com/corporate/license-management-services/tooling.html>)
  * BYOLの使用時に継続的なコンプライアンスを確保するため、ソフトウェアライセンスのコンプライアンス追跡を可能にするツールを90日以内に評価・導入することをお勧めします。
  * クラウド内のインベントリツールによって特定されたライセンス使用状況をITAMが追跡できるように、FinOpsとITAMは継続的に協力する必要があります。
  * OCI License Managerにも、BYOLの追跡および管理機能が備わっています：[OCI License Manager (BYOL)](<https://blogs.oracle.com/cloud-infrastructure/post/announcing-license-manager-for-oracle-cloud-infrastructure>)

#### 教育とコミュニケーション

  * BYOLの使用は組織に大きな財務的メリットをもたらす可能性がありますが、Oracleライセンス契約への非準拠（違反）のリスクは高まります。
  * ITAM実践者とFinOps実践者は、リソースのコンプライアンス確保とコスト最適化を両立させるために、緊密に連携する必要があります。
  * ステークホルダーに対し、BYOLライセンスを使用する際のリスクとリターンについて教育し、BYOLライセンスのインストールを厳密に監視する必要があります。

#### 運用

  * ITAM/FinOpsによるオンプレミスデプロイ/クラウド消費のレビューサイクルを（週次/月次/四半期）の頻度で設定します。
  * デプロイ/消費および関連するTCOを管理し、最適化します。
  * 代替オプションと比較して、BYOLおよびOSRを監視・評価します。
  * 管理策とガバナンスの決定を設定し、自動化します（プロセスの改善）。

## コンプライアンスの維持

Oracle BYOLを使用する場合、ライセンス管理とコンプライアンスに関して考慮すべき重要なポイントがいくつかあります。

  * ITAM/FinOpsは、両方のプラットフォームをカバーする適切なライセンスを確保するために、オンプレミスとクラウドの両方のデプロイを管理する必要があります。
  * 組織が[Oracle無制限ライセンス契約](<https://redresscompliance.com/oracle-ula/>)（ULA）を締結している場合、ULAをBYOLに使用することでコストを削減できます。
  * 通常、ULAの終了時に、ULAを締結した組織は、ULA終了時点で実際に使用している（インストールされ実行されている）ライセンス数を認定する必要があります。しかし、Oracleは、ULA終了時の認定対象から、パブリッククラウド環境におけるすべてのBYOLデプロイを除外しています。ULAが終了した後は、クラウド上のOracleワークロードに対して個別にライセンスを取得する必要があります。
  * BYOLへの移行後も使用制限は引き続き適用されるため、ITAMはOracleライセンス契約の使用制限を確認する必要があります。
  * Oracleは、Oracle BYOL向けに[License Manager](<https://redresscompliance.com/license-manager-oracle-oci-byol/>)機能をリリースしましたが、これは限定的なOracleライセンスのみを対象としています。

## 定義

  * **Oracle Cloud Infrastructure (OCI)**：パブリッククラウドとプライベートクラウドの両方で提供される、Oracleが管理する多様なクラウドサービスのポートフォリオ。これらのクラウドサービスには、Infrastructure as a Service（IaaS）およびPlatform as a Service（PaaS）が含まれます。
  * [**Oracle Universal Credits (UC)**](<https://upperedge.com/oracle/oracle-universal-cloud-credits-ucc-licensing-and-discounting-basics/>)：特定のOracleサービス向けの柔軟な購入・消費プログラム。将来リリースされるクラウドサービスを含め、任意のリージョンにおける任意のOracle Cloud Infrastructure（OCI）サービスの料金を、予測可能かつ一貫した方法で支払うことができます。
  * [**Oracle Cloud 従量課金制（PAYG）**](<https://k21academy.com/dba-to-cloud-dba/oracle-cloud-pay-as-you-go-payg-subscription-model/>)：コミットメントなしで迅速なプロビジョニングが可能であり、使用したIaaSおよびPaaSサービスの分だけ課金されるサービス。事前のコミットメントや最低利用期間はありません。消費されたクラウドインフラストラクチャおよびプラットフォームサービスは計測され、その消費量に基づいて請求されます。
  * **Annual Flex**：Oracleに対する年間コミットメントを必要とするAnnual-Flex Oracle Universal Creditsモデル。顧客は割引料金の適用を受け、クレジットを消費するために12ヶ月の期間が与えられます。各年間期間の終了時に未使用のクレジットは失効します。超過消費分は、期間終了時までレートカードのユニットレートレベルで請求されます。
  * **Funded Allocationモデル**：「Funded Allocation Value」に指定された年間金額をOracleに支払う柔軟性を提供するモデル。この金額は、対象となるOracle IaaSおよびPaaSクラウドサービスの将来の利用に適用されます。これは限定的に提供されるモデルであり、通常は公共セクターの顧客が利用できます。
  * **パーペチュアルライセンス（永久ライセンス）**：一回限りのライセンス費用を支払うことで利用可能になるライセンスタイプ。ライセンスを保有する組織がライセンス契約のすべての条項を遵守し続ける限り、ソフトウェアプログラムを継続して使用できます。
  * **期間ライセンス（Term license）**：特定の（限定された）期間にわたって利用可能なライセンスタイプ。この期間中、ライセンスを保有する組織はソフトウェアにアクセスして使用できます。
  * **制限付きライセンス（Restricted license）**：一部の製品には制限付き使用条項が適用される場合があり、指定されたプログラムと組み合わせるなど、文書化された一連の条件下でのみライセンスを使用できます。
  * **OCPU**：OCPUは物理CPUコアを表します。x86を含むほとんどのCPUアーキテクチャは、物理コアあたり2つのスレッドを実行するため、Oracle Cloudにおけるx86ベースのコンピュートでは、1 OCPUは2 vCPUに相当します。
  * **vCPU**：仮想CPU（Virtual CPU）は、仮想マシンに割り当てられるプロセッサの数です。
  * **ECPU**：エラスティックCPU（Elastic CPU）は、Autonomous Data WarehouseおよびAutonomous Transaction Processing向けの新しい課金メトリックです。ECPUは、コンピュートおよびストレージサーバーのプールから弾力的に割り当てられる1時間あたりのコア数に基づいています。ECPUは、物理ハードウェアの量として明示的に定義されているわけではなく、基礎となるプロセッサの正確なメーカー、モデル、またはクロック速度に紐づかない、永続的な価格設定メトリックです。
  * [**ライセンスモビリティ（License Mobility）**](<https://www.zdnet.com/article/oracle-unveils-universal-credits-license-mobility-for-easy-cloud-consumption/>)：顧客が既存のソフトウェアライセンスを、Oracle Database、Middleware、AnalyticsなどのOracle（PaaS）クラウド製品に使用できるようにするプログラム。
  * **アクティブサポート（Active Support）**：PaaSへのBYOLの対象となるライセンスは、CSI/ライセンス契約に対して有効なサポート契約を結んでいる必要があります。サポート対象外のライセンスは、Oracle BYOLのライセンスモビリティプログラムには使用できません。
  * **無制限ライセンス契約（ULA）**：Oracle製品に対する顧客のコミットメントを認め、将来の柔軟なライセンス拡張を組み込んだオンプレミスのライセンスモデル。ULAに詳細が記載されているライセンスは、BYOLの要件を満たすために必要なタイプ、エディション、製品バージョンであることを前提として、クラウド内のBYOLサービスに対してデプロイできます。

## リソース

### 契約と合意書

  * [Oracle契約](<http://www.oracle.com/contracts>)
  * Oracleマスター契約：[ソフトウェア](<http://www.oracle.com/contracts/software>)、[ハードウェア](<http://www.oracle.com/contracts/hardware>)
  * [クラウドサービス契約](<http://www.oracle.com/contracts/cloud-services>)
  * Universal Creditサービス説明書：[Oracle UCM v090723](<https://www.oracle.com/content/published/api/v1.1/assets/CONT973461D7AF694A2DBB06EE4BDAE2F940/native/Oracle%20PaaS%20and%20IaaS%20Universal%20Credits%20Service%20Descriptions.pdf?cb=_cache_1b97&channelToken=117bec9b3b4e4e90a1c4c9069d210baf&download=false>)

#### 価格設定 / メトリック

  * [グローバル価格設定](<http://www.oracle.com/corporate/pricing>)
  * OCI価格設定：[一般的な価格設定](<http://www.oracle.com/cloud/pricing>)、[価格表](<http://www.oracle.com/cloud/price-list>)

#### Oracleライセンスモビリティと関連プログラム

  * [PaaSへのBYOL](<http://www.oracle.com/cloud/bring-your-own-license/faq/>)
  * [Customer 2 Cloud](<http://www.oracle.com/applications/customer2cloud>)
  * [Oracle Support Rewards (OSR)](<http://www.oracle.com/cloud/rewards>)
  * [Cloud @ Customer](<http://www.oracle.com/cloud/cloud-at-customer>)

#### 認定クラウド

  * [認定クラウド環境](<http://www.oracle.com/assets/cloud-licensing-070579.pdf>)

#### AWS

  * [AWS上のOracleリソース](<http://aws.amazon.com/oracle/resources>)
  * [AWS上のOracle FAQ](<http://aws.amazon.com/oracle/faq>)

#### Azure

  * [Oracle Database@Azure](<http://www.oracle.com/cloud/azure/#database-at-azure>)
  * [Oracle Interconnect for Azure](<http://www.oracle.com/cloud/azure/interconnect>)
  * [Oracle Data Services for Azure](<http://www.oracle.com/cloud/azure/oracle-database-for-azure>)

#### コストと使用量ツール

  * [クラウドコスト見積もりツール](<http://www.oracle.com/cloud/costestimator.html>)
  * [クラウドワークロード見積もりツール](<http://www.oracle.com/webfolder/workload-estimator/index.html>)

#### ベストプラクティス

  * [クラウド導入フレームワーク](<http://www.oracle.com/cloud/cloud-adoption-framework>)

#### アドバイザリーリソース

  * Oracle Software Investment Advisory（SIA）およびDigital Transformation Consulting（DTC） – クラウドサービス、ライセンス、BYOLを含む（ただしこれらに限定されない）すべてのOracle製品およびサービスについて、無償のアドバイザリーサービス、レポート、分析、データに基づくインサイトを顧客に提供します。SIAおよびDTCは、関連し適用可能な場合、ITFM（IT財務管理）、ITAM（IT資産管理）、ITSM（ITサービス管理）の管理概念およびベストプラクティスをサポートします。SIAおよびDTCは、OracleのGlobal License Advisory Services（GLAS）チームの一部です。
    * [www.oracle.com/corporate/software-investment-advisory](<http://www.oracle.com/corporate/software-investment-advisory>)
    * [www.oracle.com/corporate/global-licensing-advisory-services](<http://www.oracle.com/corporate/global-licensing-advisory-services>)

  * SIAグローバル連絡先メールアドレス：[sia-global_ww@oracle.com](<mailto:sia-global_ww@oracle.com>)
  * DTCグローバル連絡先メールアドレス：[dtc-global_ww@oracle.com](<mailto:dtc-global_ww@oracle.com>)

  * 個別のSIA、DTC、GLAS、およびOracleの連絡先は、linkedin.comまたはSlackのF2コミュニティで確認できます。
  * SIAおよびDTCの主なアドバイザリーサービスは以下の通りです。
    * [クラウド投資サービス](<https://www.oracle.com/a/ocom/docs/111576.001_ORA_GLAS-Factsheet_Cloud-Investment-Services_dtc.pdf>)
    * [デプロイと消費の最適化](<https://www.oracle.com/a/ocom/docs/400918.001_ORA_GLAS-Factsheet_Deployment-and-Consumption-Optimization_dtc.pdf>)
    * [使用権インテリジェンス](<https://www.oracle.com/a/ocom/docs/400918.001_ORA_GLAS-Factsheet_Entitlement-Intelligence_dtc.pdf>)
    * [投資経済性](<https://www.oracle.com/a/ocom/docs/400409_008_ORA_GLAS-Factsheet_Investment-Economics_dtc.pdf>)
    * [知識移転](<https://www.oracle.com/a/ocom/docs/400918.001_ORA_GLAS-Factsheet_Knowledge-Transfer_dtc.pdf>)
  * GLASには、他にも専用のアドバイザリーサービスがあります。
    * GLASパートナーアドバイザリー（SAM認定プログラムを含む）：[www.oracle.com/corporate/global-licensing-advisory-services/](<https://www.oracle.com/corporate/global-licensing-advisory-services/>)
    * エンタープライズ契約コンサルティング（ECC） – ULA認定
    * サブスクリプション＆使用量管理（SUM） – SaaS利用状況のレポートと分析

#### ツール – ITAM-SAMサードパーティベンダー

  * Oracle検証済みサードパーティツールベンダー（3PTV） – パートナーは、GLASによって監査レベルの精度で承認された収集ツールを保有しており、Oracleの顧客向けにITAM-SAMアドバイザリーサービスを提供しています（監査/アシュアランスサポートサービスに加えて提供されます）：[www.oracle.com/corporate/license-management-services/tooling.html](<http://www.oracle.com/corporate/license-management-services/tooling.html>)
  * ライセンス使用状況を追跡および監視するための収集ツールを提供する、検証されていないサードパーティツールベンダーも多数存在します。

#### ツール – OCI向けFinOpsリソースサードパーティベンダー

  * 多くのFinOpsパートナーメンバーがOCI向けのツールを提供しています：[www.finops.org/about/partner-members](<http://www.finops.org/about/partner-members>)。
  * OCI向けのツールを提供するサードパーティベンダーは、Oracle Partner Network（OPN）に加盟している場合と加盟していない場合がありますが、サードパーティベンダーに直接問い合わせることに加えて、OPN（[https://partner-finder.oracle.com/catalog/](<https://partner-finder.oracle.com/catalog/>)）を確認することも価値があります。

#### ツール – OCIにおけるFinOpsリソース

**FinOpsフェーズ** | **FinOpsケイパビリティ** | **OCI管理ツール**  
---|---|---  
**可視化（Inform）** | 請求とレポート | 

  * [OCIコスト分析](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/costanalysisoverview.htm>)
  * [OCIコスト・使用状況レポート](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/usagereportsoverview.htm>)

タグ付け | 

  * [OCIタグ](<https://docs.oracle.com/en-us/iaas/Content/Tagging/home.htm>)

**最適化（Optimize）** | 予測 | 

  * [コスト分析における予測](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/costanalysisoverview.htm>)

クラウドコスト計画 | 

  * [OCIコスト見積もりツール](<https://www.oracle.com/cloud/costestimator.html>)

請求 | 

  * [OCI請求書](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/invoices.htm>)
  * [OCI支払い履歴](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/paymenthistory.htm>)
  * [OCI請求スケジュール](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/subscriptions.htm>)

推奨事項（利用率の最適化） | 

  * [OCI Cloud Advisor](<https://docs.oracle.com/en-us/iaas/Content/CloudAdvisor/Concepts/cloudadvisoroverview.htm>)
  * [OCI License Manager (BYOL-1)](<https://blogs.oracle.com/cloud-infrastructure/post/announcing-license-manager-for-oracle-cloud-infrastructure>)
  * [OCI License Manager (BYOL-2)](<https://docs.oracle.com/en-us/iaas/Content/LicenseManager/Concepts/licensemanageroverview.htm#licensemanagement__supported_products>)

**運用（Operate）** | アラートと通知 | 

  * [OCI予算アラート](<https://docs.oracle.com/en-us/iaas/Content/Billing/Tasks/managingalertrules.htm>)

管理策 | 

  * [クォータ](<https://docs.oracle.com/en-us/iaas/Content/General/Concepts/resourcequotas.htm>)
  * [Functionsとクォータを使用した予算の強制適用](<https://blogs.oracle.com/cloud-infrastructure/post/enforced-budgets-on-oci-using-functions-and-quotas>)

## 謝辞

ワーキンググループおよび本資産への貢献に対し、以下のメンバーに感謝いたします。

[ ![Amy Ashby](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amy Ashby Under Armour ](<https://www.linkedin.com/in/amyashbymke/>) [ ![Gregory Brinkerhoff](https://www.finops.org/wp-content/uploads/2022/10/persona-product.svg) Gregory Brinkerhoff Oracle ](<https://www.linkedin.com/in/gregory-brinkerhoff-4a4795/>) [ ![Salomé Keet](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Salomé Keet FNB South Africa ](<https://www.linkedin.com/in/salom%C3%A9-keet-ba2522a/>) [ ![George Arezina](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) George Arezina TAKEDA ](<https://www.linkedin.com/in/georgearezina/>) [ ![Peter Schmidhofer](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Peter Schmidhofer Oracle ](<https://www.linkedin.com/in/peter-schmidhofer-cisa-csam-a5544210/>)

また、サポーターの皆様にも感謝いたします：Brian McCumber, Colin Jack, Amit Doshi, Chris Rininger, Ron Brill, Kris Wong、およびTACリエゾンのKim Wier。

## 目次

  * [はじめに](<#intro>)
  * [対象範囲](<#scope>)
  * [Oracleライセンスの理解](<#oracle-licensing>)
  * [ライセンス最適化戦略](<#licensing-strategy>)
  * [BYOL戦略](<#byol-strategy>)
  * [コンプライアンスの維持](<#maintaining-compliance>)
  * [定義](<#definitions>)
  * [リソース](<#resources>)
  * [謝辞](<#acknowledgments>)

##### 関連するFinOpsケイパビリティ

[ ライセンスとSaaS ](<https://www.finops.org/framework/capabilities/licensing-saas/>) [ 専門分野間の連携 ](<https://www.finops.org/framework/capabilities/intersecting-disciplines/>)

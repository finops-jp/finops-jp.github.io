---
title: "FinOpsとITAM：コスト、リスク、価値の最適化に向けた連携（FinOps & ITAM: Collaborating to Optimize Cost, Risk, and Value）"
---

[英語版]: https://www.finops.org/wg/finops-itam-optimize-cost-risk-value/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

**要約:** FinOpsとITAM（IT資産管理）の実践者は、複雑なハイブリッド価格モデルやライセンスモデルを管理するために連携を続けています。実践者は、共有のガバナンスフォーラムを立ち上げ、CMDB（構成管理データベース）やクラウド請求プラットフォームなどのシステム（Systems of Record）を接続して技術資産データの一元的なビューを作成することで、これらの専門分野を整合できます。リアルタイムの使用量テレメトリ（Telemetry）を契約上のライセンス権利（Entitlements）とマッピングすることで、BYOL（Bring Your Own License）、ベンダーの更新、マーケットプレイスでの購入に関する正確な予測を支援します。FinOpsの使用率メトリクスとITAMのコンプライアンス追跡を組み合わせることで、組織全体におけるテクノロジーの価値、配賦、およびリスクを管理するための包括的なフレームワークを構築できます。

## 目次

  * [FinOpsとITAMの理解](<#understanding-finops-itam>)
  * [FinOpsとITAMの連携が不可欠な理由](<#why-collaboration-is-essential>)
  * [FinOpsとITAMの共通基盤](<#finops-itam-intersection-foundations>)
  * [ケイパビリティ別のFinOpsとITAMの連携](<#finops-itam-collaboration-by-capability>)
  * [次のステップ：FinOpsとITAMのシナリオ](<#next-steps-finops-itam-scenarios>)
  * [謝辞](<#acknowledgments>)

今日のハイブリッドなテクノロジー環境を管理するには、FinOpsとITAMの整合が不可欠になっています。組織がパブリッククラウド、SaaS、ライセンス、データセンター、および新たなAIプラットフォームを組み合わせて導入するにつれ、ベンダーはライセンス権利に基づくモデルと従量課金制（使用量ベース）の価格モデルをますます融合させています。この変化は新たな運用上の課題を生み出し、FinOpsとITAMの双方のスキルセットからのインプットを必要とする意思決定の範囲を広げています。

「State of FinOps 2026」の分析によると、FinOpsとITAMの連携は[毎年上昇を続けており](<https://data.finops.org/library/#26929>)、2025年と比較して20%増加しています。SaaSやハイブリッドライセンスの支出を管理し、その価値を組織に還元する必要性が高まるにつれて、この傾向はさらに加速するでしょう。

FinOpsとITAMは、最大のコスト効率でテクノロジーがビジネスにもたらす価値を最大化するという共通の目標に向かって共同で取り組むことができます。これにより、削減されたコストを戦略的優先事項やイノベーションへ再投資できます。

## FinOpsとITAMの理解

**FinOpsは、財務的な当事者意識、十分な情報に基づく意思決定、およびテクノロジー投資の継続的なイノベーションを通じて、価値の創出を推進します。**

コストと使用量のデータを実用的なインテリジェンスに変換することで、FinOpsはビジネス成果、プロダクト戦略、および顧客体験を直接サポートする優先順位付けと投資の選択を可能にします。

詳細については[FinOpsとは](<https://www.finops.org/introduction/what-is-finops/>)を参照するか、この分野が初めての場合は無料の[FinOps入門トレーニング](<https://learn.finops.org/introduction-to-finops>)を受講してください。

**ITAMは、ガバナンス、コンプライアンス、および契約上の責任をもたらします。**

ITAMは、テクノロジー資産全体にガバナンス、コンプライアンス、および契約上の責任をもたらします。ソフトウェア、ハードウェア、クラウド、サービスなどのすべての資産が、ビジネス戦略、ベンダーの規約、および規制上の義務に沿って、適切に取得、ライセンス付与、構成、追跡、サポート、および廃棄されることを保証します。これにより、契約上、規制上、および法律上のリスクから組織を保護し、商業的な規律を強制し、IT環境の整合性を維持します。

成熟したITAMプラクティスは、以下の5つの側面で測定可能なメリットをもたらします。

  * **財務の最適化:** 「4つのR」を適用することで、無駄と総所有コスト（TCO）を削減します。4つのRとは、未使用資産の削除（Remove）、ライセンスとデバイスの再利用（Reuse）、実際のニーズに合わせたソフトウェアライセンス容量の再構成（Reconfigure）、および正確な使用量と構成データに基づく契約再交渉（Renegotiate）の支援です。
  * **リスクの低減:** 資産が合意された規約内でのみ使用され、業界固有の規制要件を満たし、データ保護や環境要件に従って処分または廃棄されることを保証することで、契約上、規制上、および法律上のリスクを管理します。
  * **運用効率の向上:** サポート、変更管理、プロジェクト提供を改善する高品質な資産データを提供します。このデータは、CMDB、調達、人事、エンタープライズアーキテクチャなどの部門と共有でき、より迅速で情報に基づいた意思決定を可能にします。
  * **情報セキュリティ:** セキュリティチームに「何が、どこに、どのように構成されているか」という信頼できるビューを提供し、効果的なサイバーセキュリティおよび情報セキュリティ管理の基盤を形成します。
  * **サステナビリティ:** ハードウェア、ソフトウェア、およびクラウド消費に関する情報に基づいた選択を可能にすることで、持続可能なITプラクティスをサポートし、エネルギー使用量の最小化、資産ライフサイクルの延長、および環境への影響の低減を支援します。

伝統的に、ITAMは相互に依存する以下の3つのコンポーネントで構成される専門分野として機能します。

  1. **ソフトウェア資産管理（SAM）：** ソフトウェアライセンス、更新、および監査対応を監督する。
  2. **ハードウェア資産管理（HAM）：** 物理的および仮想的なインフラストラクチャ資産を追跡し、管理する。
  3. **サービスおよびクラウド資産管理：** ディスカバリツールや構成管理データベース（CMDB）を通じて、SaaS、PaaS、およびハイブリッド資産を管理する。

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20412%20382'%3E%3C/svg%3E)

## FinOpsとITAMの連携が不可欠な理由

各チームにおいて、どちらか一方の専門分野だけでは十分な効果が得られないいくつかの高価値なシナリオで、連携によって実行力が強化されることが確認されています。「ベンダーとプラットフォームの選定」において、価格構造、コミットメント戦略、および導入予測を共同でモデリングすることで、購入前の議論に財務的および契約上の洞察を早期に取り入れることができます。これにより、組織はコストのかかるベンダーロックインを回避し、月々のSaaS超過料金などのハイブリッドな請求パターンを理解し、長期的なコストと価値をより明確に見通してプラットフォームを選択できます。

また、Microsoft SQL、ServiceNow、AdobeなどのプラットフォームにおけるハイブリッドモデルやBYOLモデルでは、コンプライアンスを維持し、予期しない支出を防ぎ、未使用のソフトウェア（シェルフウェア）を排除するために、ITAMによる正確なライセンス権利情報と、FinOpsによる使用量テレメトリの組み合わせが必要です。

「マーケットプレイスでの購入」も、連携がすでに不可欠であると証明されている分野です。ITAMは、ライセンス権利の検証、インベントリの正確性の維持、および分散型の購買チャネルによって生じるコンプライアンスリスクの管理を、FinOpsの請求データに依存しているためです。

FinOpsとITAMの連携が不可欠である理由の詳細については、[FinOpsとITAMの統合：テクノロジー価値の実現、リスクの低減、効率の向上](<https://www.finops.org/insights/unifying-finops-and-itam-realize-tech-value-reduce-risk-increase-efficiency/>)を参照してください。

## FinOpsとITAMの共通基盤

FinOpsとITAMの双方にまたがって活動する実践者は、チームが自らの管轄範囲を守ることから共通の成果を追求することへとシフトしたときに、有意義な進歩が起こることをますます実感しています。組織のサイロ化、硬直化したRACI、および独立して作業する際のスキルギャップは依然として一般的な障壁ですが、これらに早期に対処した組織は、テクノロジー環境全体において、より明確な財務の可視性、強力なガバナンス、および優れた最適化の成果を報告しています。

以下のガイダンスは、実践者が行っているアクションと、それによって実現している価値を示しています。

### **組織とガバナンスの整合**

**アクション** | **価値**  
---|---  
FinOpsチームとITAMチームが相互に依存するシナリオに共同で取り組むための、共有フォーラムや定期的なルーティンを作成する。 | _重複する分析や一貫性のない意思決定を減らし、同じビジネス成果に向けて優先順位を整合します。_  
RACIマトリクス（実行責任者、説明責任者、協働者、報告先）は慎重に使用し、責任が自然に重複する部分では共同での当事者意識を促す。 | _境界線の固定化を避け、共同での問題解決をサポートします。_  
組織の状況が許す場合は、共通のビジョンを持つ統一されたリーダーシップや、密接に整合された報告ラインを検討する。 | _共有ビジョン（どこに向かっているのか、なぜなのか）を構築し、相反する目標を減らし、コスト、リスク、効率にわたる意思決定を加速します。_  
アーキテクチャのレビューや戦略的計画に、早い段階から両方の専門分野を関与させる。 | _予算や調達のコミットメントが行われる前に、コスト意識やライセンスの考慮事項が意思決定に影響を与えるようにします。_  
更新時や複雑な商業交渉の際には、調達、IT財務、法務部門と積極的に連携する。 | _ライセンス権利の知識、消費パターン、および財務的洞察を組み合わせることで、交渉力を強化します。_  

### **データ、テクノロジー、資産**

**アクション** | **価値**  
---|---  
FinOps、ITAM、調達にわたる主要なシステム（CMDB、SAM、契約ツール、調達システム、テクノロジーコストプラットフォームなど）を合意して連携させ、契約、資産、財務、使用量データの共有ビューを構築する。 | _統一されたデータ図により、レポートに関する解釈の不一致が減り、照合が簡素化され、最適化の機会を特定しやすくなります。_  
ベンダー契約、代理店、クレジットカード購入、マーケットプレイスでの購入、セルフサービスSaaSなど、調達チャネルを共同でマッピングする。 | _コンプライアンスのギャップや最適化機会の損失に一般的に直面するブラインドスポットを排除します。_  
ライセンス権利と使用量の洞察を組み合わせて、複雑な価格モデルを共同でレビューする（以下の主要ベンダーの測定例を参照）。 | _見積もりと予測の向上を通じて総コストの解釈を改善し、計画・調達の前後で最も効果的な最適化レバーを特定するのに役立ちます。_  

_主要ベンダーの測定 – FinOpsとITAMの連携を必要とする複雑な価格モデル_

ベンダー | 主要なエンタープライズ製品 | 測定指標  
---|---|---  
Microsoft | Microsoft 365, Azure | アカウント数（Seats）およびクラウド使用量  
AWS | EC2, S3, RDS | クラウド使用量/消費量  
Google | GCP, Google Workspace | Workspaceアカウント数およびGCP使用量  
Oracle | Oracle DB, Fusion Cloud Apps, OCI | コアDBおよびアプリケーションサブスクリプション、OCI使用量  
Salesforce | Sales/Service Cloud, Data Cloud, Tableau, Slack | CRMアカウント数、データ/AIクレジット  
SAP | S/4HANA, BTP, Business Network | ERPサブスクリプション、間接アクセス  
Adobe | Creative Cloud, Experience Cloud, Acrobat Sign | アカウントサブスクリプション、電子署名トランザクション、AIクレジット  
IBM | Red Hat OpenShift, watsonx, IBM Cloud | ソフトウェアサブスクリプション、プラットフォーム容量  
ServiceNow | Now Platform, ITSM, ITOM/FinOps | サブスクリプションライセンス権利  
Broadcom | VMware Cloud Foundation, vSphere, NSX | コア/CPUサブスクリプション、VCFバンドル  

### **スキルセット、教育、コアバリュー**

**アクション** | **価値**  
---|---  
両方の専門分野の補完的な強みを意図的に組み合わせる。 | _ライセンス権利のガバナンスとリアルタイムの使用状況の洞察を組み合わせることで、責任の所在が明確になり、より情報に基づいた購入や最適化の意思決定が可能になります。_  
双方向のトレーニングを活用してスキルのギャップを埋める（ITAMチーム向けのFinOps教育、およびFinOpsチーム向けのITAMの啓発）。 | _実践者は、これらの領域において実質的なコスト回避とリスク低減を一貫して報告しています。_  
ライセンス権利と使用量の洞察を組み合わせて、複雑な価格モデルを共同でレビューする（上記の主要ベンダーの測定例を参照）。 | _共通言語を構築し、摩擦を減らし、ハイブリッドなコストモデル全体で作業する際の自信を高めます。_  
ハイブリッドなコスト事例を境界線ではなく、学習の機会として扱う。 | _ライセンス権利、使用量、および消費ベースの請求がどのように相互作用するかを実践者が理解するのを助け、テクノロジー環境全体における意思決定を強化します。_  

## ケイパビリティ別のFinOpsとITAMの連携

FinOpsとITAMは交差するだけでなく、連携して[FinOpsケイパビリティ](<https://www.finops.org/framework/capabilities/>)を強化できます。以下のセクションでは、この連携の例とその組織的な価値の概要を説明します。

### 配賦

  * FinOpsとITAMは配賦の責任を共有する場合があります。
  * BYOL、クラウドサービスプロバイダー（CSP）マーケットプレイス、サポートコスト（CSPまたはソフトウェア）などの共有コストにおいて重複が発生します。
  * 特に[統一データスキーマ](<https://focus.finops.org>)（FOCUS）のもとで、命名標準の共通理解と利用方法を両者で構築できます。
  * 両者はアプリケーションオーナーと協力して、テクノロジー環境全体だけでなく、共有コストをどのように分割して配賦するかを決定できます。
  * 一括で前払いされ、消費に基づいて毎月引き落とされるSaaS製品は、共有コストをショーバックするかチャージバックするかによって、異なる方法で処理する必要があります。

### レポートと分析

  * FinOpsとITAMは、それぞれのプラクティスに基づいてレポート作成に異なるアプローチをとる場合があります。
  * 両者は、パブリッククラウドからの請求データ（BYOL、マーケットプレイスなど）のレポートにおける重複を意識しています。
  * 両者は協力して、既存のベンダーダッシュボード（利用可能な場合）にアクセスするか、消費ベースのテクノロジーを追跡するための新しいダッシュボードを作成できます。

### 異常管理

  * FinOpsとITAMは、どちらもSaaSやライセンスの超過を監視します。
  * SaaSのような消費ベースのテクノロジーは、クラウド使用量の異常と相関することがあり、コストを契約の見積もり使用量に合わせるためのアクションが必要になる場合があります。
  * 両者は、サービスや製品の不正な、またはサポートされていない使用（ブラックリストに登録された製品）を監視および報告し、これらは自動的に削除される場合があります。
  * 両者は、超過または不足の両方に対応して、ライセンスの適正化（ライトサイジング）に向けたアクションを実行できます。

### 予測

  * FinOpsは、一部のITAMチームの対象外となる可能性のあるクラウドのテクノロジー予測をカバーする場合があります。
  * BYOL、CSPマーケットプレイス、およびスタンドアロンSaaSにおいて重複が発生します。
  * 消費ベースのSaaS：両者はエンジニアリングと協力して、トレンドや計画された変更に基づいて予測される使用量を特定し、その後、FinOpsはITAMと協力して、最もコスト効率の高い取得または更新の最適な方法を決定します。

### 予算編成

  * FinOpsはITAMと連携して、ライセンスや消費ベースの使用量が月ごとに想定通りであることを確認し、予算が危機に瀕している場合は必要に応じて軌道修正のための調整を行います。
  * 財務目標、資産管理戦略、および予算計画における整合性を確保するために、FinOpsチームとITAMチームの間に定期的なコミュニケーションチャネルを確立します。
  * FinOpsチームとITAMチームの間でデータと洞察を交換し、FinOpsには詳細な資産情報を提供し、ITAMには財務およびテクノロジー価値のコンテキストを提供します。
  * 財務予測や、資産のライフサイクルコスト、調達ニーズ、およびBYOLが予算にメリットをもたらす可能性のある今後の更新に関する洞察など、予算計画プロセスで協力します。

### 料金の最適化

  * CSPマーケットプレイスを通じて行われたソフトウェアの購入は、（部分的に）クラウド全体の支出としてカウントされ、適用されるエンタープライズ割引の額に影響を与える可能性があります。
  * FinOpsとITAMは連携して、ホストされている場所、利用可能な割引（および関連する制限）、どのような柔軟性があるか（ある場合）、追加のライセンスコストが発生しないリソースへの移行が選択肢となるか、およびコミットメントベースの割引を利用するかどうかに基づいて、最適なライセンス方法を決定する必要があります。

### ユニットエコノミクス

  * FinOpsとITAMは、特に固定ライセンスと変動するクラウド運用コストが混在するテクノロジーが関与する場合に、ユニットコストを特定して管理するために連携する必要があります。
  * クラウド移行の際、支出のシフトが発生する一方で、移行プロセスの長さや既存の減価償却・保守スケジュールにより、短期的にはコストの重複が発生する可能性があるため、両者は連携できます。
  * 両者は連携して、すべてのチームがクラウドで使用されているBYOLライセンスの完全なインベントリを構築し、明確に理解できるようにすることで、過剰使用を防ぎ、監査関連のペナルティを回避します。

### データ取り込み

  * FinOpsチームとITAMチームは、データの「信頼できる唯一の情報源（Single Source of Truth）」を作成・共有するよう努め、同じデータの複数のリポジトリを維持するための労力とコストの重複を避けるべきです。
  * 両者は連携して、FinOps Open Cost and Usage Specification（[FOCUS](<https://focus.finops.org>))のような共通の仕様に基づいて、請求データの出力を整合できます。

### 請求とチャージバック

  * FinOpsとITAMは、チャージバックの一部であるライセンスコストを含めることについて連携する必要があります。
  * これらのコストは、使用されたライセンスの100%である場合もあれば、共有するライセンスの一定割合である場合もあります。

### ガバナンス、ポリシー、リスク

  * FinOpsとITAMは、ユーザーがCSPマーケットプレイスを介してソフトウェアやライセンスを調達する権限を持っているかどうかを共同でレビューし、それを防止して確立されたプロセスを強制するためのポリシーやガードレールを策定できます。
  * 両者は、リソースを作成するために、申請者が特定の基準（予算内など）を満たし、例外がある場合は承認を得る必要がある社内プロセスの形成を支援できます。
  * オンプレミス、データセンター、プライベートクラウドのリソースタグ付けポリシーとガバナンスは、組織全体で統一し、パブリッククラウドのリソースと密接に整合させる必要があります。これにより、さまざまな論理的・ビジネス的部門にわたる配賦を改善し、チャージバックとショーバックをサポートします。
  * 両者は、リソースがどのように、どこで作成されるか（リージョンやテクノロジーなど）、および既存の割引やライセンスを活用しているかどうに関するポリシーやガイドラインの作成を支援できます。
  * 両者は、契約交渉のためにテクノロジーベンダーへの総支出を評価する際に連携できます。

### FinOpsの教育と普及促進

  * FinOpsとITAMは、教育リソースを共有して、共通の理解、共通のタクソノミー（分類体系）、プロセスなどを構築できます。
  * 両者は、テクノロジー価値管理、ソフトウェアライセンス、コンプライアンス、資産の最適化などのトピックに焦点を当て、ステークホルダー向けの共同教育セッションを実施できます。
  * 両者は連携して、共通の言語と定義を確立し、両チーム間のコミュニケーションと理解を向上させることができます。

### 使用量の最適化

  * 絶え間ないナレッジ共有により、組織は幅広い最適化の機会を活用できるようになります。
  * FinOps and ITAM can collaborate to continually review license usage and engage in optimization, right-sizing, and data hygiene activities
  * アプリケーションを設計する際、ライセンス資産が関与する伸縮性（Elasticity）やスケーリングが、ライセンス権やライセンス権利を考慮していることを確認します。

### FinOpsプラクティスの運用

  * FinOpsとITAMは、お互いに対する義務、役割、および責任を理解できるように、意思決定と責任の構造を持つ必要があります。
  * 両者は、リーダーシップへの可視性の確保やエグゼクティブスポンサーシップの獲得に向けて、お互いをサポートできます。
  * 両者は、共通のステークホルダーと連携し、統一された視点、データ、および洞察を共有できます。

### ライセンスとSaaS

  * FinOpsとITAMがライセンスとSaaSにわたるソフトウェア使用状況の全体像を構築・共有することは、真のテクノロジー価値管理とユニットエコノミクスの鍵となります。
  * 両者は連携してデータを共有し、所有しているもの、使用されているもの、およびライセンスの契約条件を完全に可視化できます。
  * コンプライアンスの確保、リスクの軽減、最適な購入方法、有利なライセンス条件、およびビジネスに必要な使用量に合わせてライセンスが最適化されていることを保証するために協力します。
  * 組織内でSaaSがどのように選択され、使用され、最終的にガバナンスされるかについてのコスト、使用量、および意思決定が十分に理解されるように連携します。

### サステナビリティ

  * FinOpsとITAMは協力して、組織の排出量データの全体像の作成をサポートできます。

### 自動化、ツール、サービス

  * FinOpsチームとITAMチームは、それぞれのツールが価値やレポート作成においてどこで重複しているかを監査して特定し、調整と連携を改善できます。
  * チームが密接に整合している組織内では、特にBYOLの導入と管理に関して、サードパーティサービスとの重複が発生する可能性があります。
  * 独立したツール間でデータを共有し結合することが必要な場合があり、このプロセスには明確なオーナーを割り当て、可能であれば[統一請求スキーマ](<https://focus.finops.org>)（FOCUS）のもとで、可能な限り自動化する必要があります。

### 計画と見積もり

  * FinOpsとITAMは、計画と見積もりのプロセスをサポートし、より正確な見積もりを可能にし、計画されたプロジェクトやプログラムの一部としてライセンスの課題に関するリスクを低減できます。

### アーキテクチャ設計とワークロード配置

  * FinOpsとITAMは連携して、クラウド向けのアーキテクチャ設計をサポートし、よりライセンスを意識したアーキテクチャを可能にし、計画されたプロジェクトやプログラムの一部としてライセンスの課題に関するリスクを低減できます。
  * 新しいワークロードが計画される際には、新しいワークロードに必要なライセンスが確保され、最適な調達方法が選択されるように、FinOpsとITAMの双方に共同で相談する必要があります。

### KPIとベンチマーキング

  * FinOpsとITAMは、社内外でどのようなベンチマークを設定できるかの意思決定を支援するために、利用可能なKPIとユニットエコノミクスの測定基準をビジネスに提供する必要があります。
  * 両者は協力して、ベンチマークデータへのアクセスと可視化を容易にし、段階的なベストプラクティス（Good、Better、Best）がどのようなものかについてのガイダンスを提供する必要があります。
  * 両者は連携して、ベンチマークに関する情報をステークホルダーに共有する必要があります。

## 次のステップ

FinOpsとITAMの共通領域に慣れたら、これら2つのチームの連携がテクノロジー価値の向上をもたらす主要なシナリオに進んでください。

  * [計画と調達（Plan & Procure）](<https://www.finops.org/wg/finops-itam-practical-scenarios-planning-procurement/>)
  * [提供とガバナンス（Deliver & Govern）](<https://www.finops.org/wg/finops-itam-practical-scenarios-deliver-govern/>)
  * [最適化と進化（Optimize & Evolve）](<https://www.finops.org/wg/finops-itam-practical-scenarios-optimize-evolve/>)
  * [価値の実現と再投資（Realize Value & Reinvest）](<https://www.finops.org/wg/finops-itam-practical-scenarios-realize-value-reinvest/>)

## 謝辞

このペーパーへの協力に対して、以下のメンバーに感謝いたします。

[ ![Ron Brill](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Ron Brill Anglepoint ](<https://www.linkedin.com/in/ronbrill/>) [ ![Rich Gibbons](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Rich Gibbons Synyega ](<https://www.linkedin.com/in/rich-gibbons-microsoft-licensing/>) [ ![George Arezina](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) George Arezina TAKEDA ](<https://www.linkedin.com/in/georgearezina/>) [ ![Victoria Levy](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Victoria Levy Alteryx ](<https://www.linkedin.com/in/victoriarlevy/>) [ ![Lorant Kiss](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Lorant Kiss Delivery Hero ](<https://www.linkedin.com/in/lorantkiss/>) [ ![Keith Hiszem](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Keith Hiszem Cardinal Health ](<https://www.linkedin.com/in/keith-j-hiszem/>) [ ![Amy Ashby](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amy Ashby Under Armour ](<https://www.linkedin.com/in/amyashbymke/>) [ ![Colin Jack](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Colin Jack Flexera ](<https://www.linkedin.com/in/cojack/>) [ ![Robert Nieuwenhuizen](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Robert Nieuwenhuizen McKinsey ](<https://www.linkedin.com/in/robertnieuwenhuizen/>) [ ![Salomé Keet](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Salomé Keet FNB South Africa ](<https://www.linkedin.com/in/salom%C3%A9-keet-ba2522a/>) [ ![Savina Stoykova](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Savina Stoykova TP ICAP ](<https://www.linkedin.com/in/savina-stoykova-58352b26/>) [ ![Kevin Wade](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kevin Wade SHI International Corp. ](<https://www.linkedin.com/in/kevwade/>) [ ![Parker Nancollas](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Parker Nancollas SoftwareOne ](<https://www.linkedin.com/in/parkernancollas/>) [ ![David Gibbons](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) David Gibbons HSBC ](<https://www.linkedin.com/in/david-gibbons-70a75b6/>) [ ![Ben Pippenger](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Ben Pippenger Zylo ](<https://www.linkedin.com/in/benpipp/>) [ ![Martin Thompson](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Martin Thompson ITAM Forum ](<https://www.linkedin.com/in/martinthompson/>) [ ![John Cafferty](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) John Cafferty Lloyds Banking Group ](<https://www.linkedin.com/in/john-cafferty-77726767/>)

最終更新日：2026年4月7日

## 目次

  * [FinOpsとITAMの理解](<#understanding-finops-itam>)
  * [FinOpsとITAMの連携が不可欠な理由](<#why-collaboration-is-essential>)
  * [FinOpsとITAMの共通基盤](<#finops-itam-intersection-foundations>)
  * [ケイパビリティ別のFinOpsとITAMの連携](<#finops-itam-collaboration-by-capability>)
  * [次のステップ：FinOpsとITAMのシナリオ](<#next-steps-finops-itam-scenarios>)
  * [謝辞](<#acknowledgments>)

###### [基礎を学ぶ FinOps認定プロフェッショナル（FinOps Certified Practitioner）で知識をレベルアップする 始める  ![基礎を学ぶ](https://www.finops.org/wp-content/uploads/2025/12/certified-practitioner.svg) ](<https://learn.finops.org/path/finops-certified-practitioner-self-paced>)

##### 関連するFinOpsケイパビリティ

[ 専門分野間の連携 ](<https://www.finops.org/framework/capabilities/intersecting-disciplines/>)

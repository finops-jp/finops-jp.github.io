---
title: "FinOpsの導入（Adopting FinOps）"
---

[英語版]: https://www.finops.org/wg/adopting-finops/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

**概要：**

FinOpsの導入は、通常「調査（Research）」「提案（Propose）」「準備（Prepare）」「ローンチ（Launch）」の4つのステージで進めます。「調査」ステージでは、パブリッククラウド、データセンター、SaaS、その他同様のスコープを対象に、現在のテクノロジーコストと使用状況に関する情報を収集し、説得力のあるFinOps戦略とビジョンを構築します。「提案」ステージでは、FinOpsプラクティスを立ち上げるために必要なスポンサーシップや資金などを確保するため、FinOpsの導入を提案します。オペレーティングモデル、チーム体制、堅牢な実行プロセスを定義して、FinOpsの実装に向けた「準備」をします。最後に、プラクティスの発足を発表し、レポートを展開し、クイックウィン（早期の成果）を実行してビジネス価値を示し、勢いを維持することで「ローンチ」します。

## このページの内容

  * [前提条件](<#prerequisites>)
  * [ステージ1：調査](<#stage-1-research>)
  * [ステージ2：提案](<#stage-2-propose>)
  * [ステージ3：準備](<#stage-3-prepare>)
  * [ステージ4：ローンチ](<#stage-4-launch>)
  * [付録](<#appendix>)
  * [謝辞](<#acknowledgments>)

すべての組織に独自のFinOps導入ストーリーがありますが、一般的に導入は以下の3つのいずれかの方法で始まります。

  * **リーダーシップによる命令（Leadership Mandate）：** 組織のリーダーが組織に対してFinOpsの導入を指示する場合
  * **草の根的な導入（Grassroots Adoption）：** 組織の下部から自然発生的に広がる非公式かつ段階的なFinOpsの導入で、後に正式なFinOpsプラクティスとして制度化される場合
  * **個人のイニシアチブ（Individual Initiative）：** 組織内の個人が、FinOpsチームとFinOpsプラクティスの結成を通じてFinOpsを導入するために、リーダーシップから承認を得ようとする場合

こちらは、HealthEdgeのCTOであるRob Duffy氏を特集した[リーダーシップによる命令によるFinOps導入](<https://www.youtube.com/watch?v=JmPQ8O6AQpE>)の事例です。Duffy氏は、クラウド移行と、技術リーダーシップが主導するFinOpsの並行導入について語っており、この目標を達成するための適切な文化の構築に焦点を当てています。

以下の図は、初期のFinOps導入における一般的なステージを示しています。必ずしも最初から始める必要はありませんが、ガイドとして各ステージの目標と活動の概要を以下に示します。

FinOpsプラクティスのローンチに向けて、自社のビジネスに適したセクションを活用してください。その後、定期的にこれらのステージを再訪し、組織の新しい部門を取り込んだり、FinOpsプラクティスに新しいスコープを追加したりします。

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20998%20181'%3E%3C/svg%3E)

## 前提条件

現在、FinOpsはクラウドだけでなく、SaaS、PaaS、データセンター、データクラウドプラットフォームなど、さまざまなテクノロジーカテゴリに適用できます。歴史的に、多くの実践者はクラウド中心のジャーニーから開始しており、以下の基本的な理解を持っています。

  * [FinOpsの定義](<https://www.finops.org/introduction/what-is-finops/>)
  * [FinOpsフレームワーク](<https://www.finops.org/framework/>)
  * [FinOpsスコープ](<https://www.finops.org/framework/scopes/>)
  * パブリッククラウド、そのメリットと課題 
    * [パブリッククラウドとは？](<https://www.bing.com/search?q=What+is+public+cloud&cvid=d95b450fbaca43889f3942d69e18ea08&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQABhAMgYIAhBFGDsyBggDEAAYQDIGCAQQABhAMgYIBRAAGEAyBggGEAAYQDIGCAcQABhAMgYICBBFGDzSAQg1ODk0ajBqNKgCCLACAQ&FORM=ANAB01&PC=DCTS>)
    * [パブリッククラウド vs プライベートクラウド vs ハイブリッド](<https://azure.microsoft.com/en-us/resources/cloud-computing-dictionary/what-are-private-public-hybrid-clouds/>)
    * [クラウドコンピューティングとは？](<https://aws.amazon.com/what-is-cloud-computing/>)
  * 関連するコストと使用状況のデータ（FinOpsプラクティスの対象スコープに応じて、クラウド、データセンター、SaaSなどに必要なデータ） 
    * データの標準化については、[FOCUS](<https://focus.finops.org/>)も参照
  * 組織の構造、テクノロジー投資、および関連する目標や戦略

## ステージ1：調査

調査ステージでは、FinOps導入提案に必要なインプットを収集します。クラウド、SaaS、AI、データセンターの支出の現状と、関連情報が組織全体でどのように共有され、意思決定に利用されているかをしっかりと理解することが重要です。これらの投資の現状を調査し、主要なステークホルダーと利用状況やデータの可用性などについて対話することは、組織の現在の立ち位置を基準化し、FinOpsの導入や既存のFinOpsプラクティスへの新しいスコープの追加に向けたユースケースの構築を開始するのに役立ちます。

このステージの一環として、テクノロジーコストと使用状況の全体像を包括的に把握する必要があります。以下は、パブリッククラウドに関して収集すべき情報の例ですが、SaaS、AI、データセンターなどの追加スコープに対して同様の情報を探すために、このリストを適宜調整してください。

  * **クラウドの調達と利用に関する包括的な全体像を把握する。** すべての契約やクラウドの購入方法を特定できない場合、または関連するすべてのクラウド利用についてクラウドコストと使用状況のデータを簡単に収集できない場合、非効率な利用が検出されない可能性が高いため、リスクはさらに大きくなります。 
    * [AWS コストと使用状況レポート](<https://docs.aws.amazon.com/cur/latest/userguide/what-is-cur.html>)
    * [Azure の使用状況と料金](<https://learn.microsoft.com/en-us/azure/cost-management-billing/understand/download-azure-daily-usage>)
    * [GCP の課金レポートとコストの傾向](<https://cloud.google.com/billing/docs/how-to/reports>)
    * [OCI コストと使用状況レポート](<https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/usagereportsoverview.htm#Accessing_Cost_and_Usage_Reports>)
  * **現在のクラウド階層とタグ付けデータを確認し、組織全体のクラウド支出に対して適切なレベルの可視性が確保されているかを判断する。**
    * [AWS リソースのタグ付け](<https://docs.aws.amazon.com/tag-editor/latest/userguide/tagging.html>)
    * [Azure リソースと管理階層](<https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources>)
    * [GCP タグの作成と管理](<https://cloud.google.com/resource-manager/docs/tags/tags-creating-and-managing>)
    * [OCI タグ付けの概要](<https://docs.oracle.com/en-us/iaas/Content/Tagging/Concepts/taggingoverview.htm>)
  * **現在の料金と支出の傾向を確認する。** 料金の最適化の機会を特定し、月ごとの総支出額と、現在の支出傾向が予測や予算に対してどのように推移しているかを把握します。
  * **クラウドワークロードの使用状況パターンを分析する。** 環境内で実装可能な効率化の機会（アイドルリソースの停止、電源スケジューリング、リソースのライトサイジングなど）を特定します。
  * **FinOpsのKPIやその他の関連メトリクスを算出する。** これにより、FinOps導入の根拠を構築します。組織の現状と、FinOpsが組織を次のレベルに引き上げるためにどのように役立つかを理解することは、主要なステークホルダーから賛同を得て取り組みを前進させるのに役立ちます。 
    * [FinOps KPI ライブラリ](<https://www.finops.org/wg/finops-kpis/>)
  * **自社を他社やベンチマークと比較する。** この取り組みにより導入レベルが明確になり、組織はスモールスタートして状況に応じて成長・拡大できます。「State of FinOps」のデータは、自社を比較評価するための優れた情報源です。 
    * [State of FinOps](<https://data.finops.org/>)
  * **FinOpsのツールやサービスプロバイダー、およびそれらの相対的なコストを調査する。** 利用可能な既存のリソースを考慮し、追加リソースの調達が必要かどうかを検討します。 
    * [FinOps ランドスケープ](<http://finops.org/landscape/>)
  * **FinOpsの人材確保とトレーニングに必要な資金を見積もる。** 
    * [FinOps Foundation トレーニング](<https://www.finops.org/training-certification/>)

収集した情報を使用して、FinOpsの導入（または[新しいスコープ](<https://finops.org/framework/scopes>)の導入）に関するビジョンステートメントを作成し、このビジョンを実現するためのおおよそのスケジュールを含む活動の概要を策定します。

### 関与させるべき人物

提案時に活用するデータ、ユースケース、情報を収集するために、すべての[コアFinOpsペルソナ](<https://www.finops.org/framework/personas/>)に相談します。これらの対話の中で、現在の問題点と影響を受けているグループを特定し、FinOpsがどのようにその課題を解決できるかを説明します。

さらに、この取り組みを積極的にサポートしてくれる個人を特定します。これらの支持者は、組織全体で勢いをつけるのに役立ち、公式または非公式の変革連合や[FinOpsチャンピオン](<https://www.finops.org/wg/what-is-a-finops-champions-program/>)の優れた候補となります。クラウドとFinOpsに関するニーズを議論する際、財務とエンジニアリングは連携すべき2つの重要なペルソナグループです。

調査ステージで尋ねるべき推奨質問については、[FinOps導入ピッチデック](<https://docs.google.com/presentation/d/1ZmThkPecv4YV4BnUFeNhh-GLbqqV6HcC186eapD4Vhk/edit?slide=id.g3b1cd92a6f5_0_1262#slide=id.g3b1cd92a6f5_0_1262>)を参照してください。

## ステージ2：提案

関連するテクノロジー投資の現状を評価し、FinOpsを導入するための関連データ、事例、原動力を手に入れたら、次のステップは組織の他のメンバーを巻き込んでFinOpsプラクティスを実装することです。主要なステークホルダーに対して、FinOps（または特定の新しいスコープ）の導入がリソースを投資する価値のある取り組みであり、組織の戦略的目標に合致し、成功を収めるために不可欠であることを納得させることが重要です。

### 求めるアクションの明確化

自分が何を求めているのかを明確にすることが重要です。組織の規模によっては、進捗と影響を示す初期データがなければ、大規模な導入に対する賛同を得るのが難しい場合があります。広範な導入を提案する前に、組織の小さなセグメントでFinOpsを試験的に導入（パイロット導入）し、オペレーティングモデルの定義、支出を制御するためのガードレールやガイダンスの確立、主要な成功指標の決定などを行うことで、FinOpsケイパビリティの基礎を築き、小規模な成功を示すことが有益な場合があります。

あるいは、提案における求めるアクションが、組織全体への全面的な導入の承認である場合もあります。いずれの場合も、クイックウィンを積み重ねることで勢いがつき、組織全体の他のステークホルダーをこの取り組みに巻き込みやすくなります。自分が必要としているものを明確に伝えてください。以下のリストは、要求に含めることができる内容の例です。

  * 合意・承認
  * 資金（トレーニング、ツール導入など）
  * 専任の人材（人員の追加、サービスプロバイダー）
  * メッセージ発信やスポンサーシップによるサポート（FinOps導入への支持表明、期待値の設定など）

### 聴衆の把握：関与させるべき人物

提案ステージでは、複数の異なる人々にFinOpsの導入を提案することになります。多くの場合、これは単一のプレゼンテーションではなく、説得対象となる特定の[FinOpsペルソナ](<https://www.finops.org/framework/personas/>)に合わせてカスタマイズした複数のプレゼンテーションを行うことを意味します。組織内の適切なステークホルダーを探し出してください。勢いをつけるためには、シニアレベルのスポンサーシップと、育成された支持者の両方が必要になります。一部のステークホルダーには非公式な形でFinOpsの導入を提案し、他のステークホルダーには公式な形で提案する必要があるかもしれません。

各ペルソナグループは、FinOpsに対して異なる関心や動機を持っています。これらは以下のリンクで詳しく説明されています。これらの一般的な視点と、聴衆についてすでに知っている情報を組み合わせて、FinOps導入のためのカスタマイズされた魅力的な提案を作成してください。これにより、FinOps導入に関する合意形成の可能性を最大化し、時間と労力を最小限に抑えることができます。

  * [リーダーシップ](<https://www.finops.org/framework/persona/leadership/>)
  * [プロダクト](<https://www.finops.org/framework/persona/product/>)
  * [エンジニアリング](<https://www.finops.org/framework/persona/engineering/>)
  * [財務](<https://www.finops.org/framework/persona/finance/>)
  * [調達](<https://www.finops.org/framework/persona/procurement/>)

すべてのペルソナの中で最も注目すべきはリーダーシップグループです。多くの組織では、新しいプラクティス領域を立ち上げる際にシニアリーダーシップの承認が必要となるためです。さらに、さらなるサポートと影響力を得るために、FinOps導入の推進者である組織内の個人（ステージ1で出会った人々など）を提案の対話に含めることも検討してください。

### 機会の定義

提案の一環として、現状、FinOps活動のロードマップ、およびFinOpsを導入した魅力的な将来像を描きます。FinOpsプラクティスの実装が組織の目標達成にどのように役立つかを詳細に説明することが重要です。以下の表は、これらの各領域における追加のコンテキストを示しています。

**現状** | **活動のロードマップ** | **将来像**  
---|---|---  

  * 課題、好ましくないKPI、活用すべき機会などを強調して問題を提示する
  * 脅威を特定し、対策を講じなかった場合に起こり得るシナリオを示す
  * 調査、データ分析、ステークホルダーとの対話をコンテンツのソースとして活用する
  * 以下のいずれかの項目に触れることを検討する：
    * コストの増加や異常な支出の発生
    * 投資に対する可視性の欠如
    * 所有権の曖昧さ、使用量や料金の非効率性

| 

  * 将来像を達成するために、おおよそのスケジュールに沿って何を行うかの概要を共有し、解決策を提示する
  * 将来像を「どのように」達成するかについて詳細を提供できると、提案が強化される
  * 以下のいずれかの項目に触れることを検討する：
    * コミュニケーションおよびトレーニング計画
    * チームの結成
    * ツールの調達
    * ケイパビリティの実装（例：新しい異常管理プロセス、使用量の最適化の取り組みと既存プロセスとの統合、ガバナンス）
    * 期待される初期の成果
    * サプライヤーやパートナー
    * インプットとアウトプット
  * 
| 

  * FinOpsプログラムから得られる価値とメリットを強調する
  * FinOpsのミッション／ビジョンステートメントを共有する
  * 以下のいずれかの項目に触れることを検討する：
    * 組織内におけるFinOps機能の配置場所
    * 期待されるKPIの改善
    * コラボレーションの向上
    * タイムリーで情報に基づいた意思決定
    * 各構成要素の所有権が明確な、予測可能な請求書
    * 使用量と料金のさらなる効率化
    * 予算への影響やROI
  * 

提案のプレゼンテーションにスライドを使用したい場合は、[FinOps導入ピッチデック](<https://docs.google.com/presentation/d/1ZmThkPecv4YV4BnUFeNhh-GLbqqV6HcC186eapD4Vhk/edit#slide=id.g2cd3de6bc9b_0_3247>)をカスタマイズして利用できます。

### 意思決定

ピッチの直後（またはその少し後）に、提案または修正された提案に合意が得られたかどうかが分かります。合意が得られた場合は、ビジョンの実行を開始し、FinOps導入の次のステージに進みます。

提案が受け入れられなかった場合は、計画を練り直す必要があります。さらに調査を行う、FinOps導入の議論を再構成する、FinOpsを支持する連合に参加してくれる他のメンバーに働きかける、別の人にピッチする、あるいは単に時期を待って再挑戦するなどの対応を検討してください。

### 提案の継続的な強化

FinOpsを提案する行為自体は完了したとしても、導入ジャーニーの今後のステージを進めるにあたり、提案内容を継続的に補強していくことが推奨されます。これには、月次チャートを作成したり、FinOps活動の成果を長期的に示すKPIを追跡したりすることが含まれます。

ステークホルダーは、FinOps活動から得られる価値とメリットについて、確証を必要とします。プラクティスを存続させるためには、FinOpsから得られる価値を維持（理想的には向上）させ、その価値が組織全体に知れ渡るようにする必要があります。なぜFinOpsを導入することが重要なのかについての対話を続け、主要なステークホルダーからのサポートを要請してください。

### 役立つヒント

  * 聴衆がFinOpsとは何かを知っていると仮定せず、必要に応じて説明する。
  * 提案の伝え方（対話ベース、書面、プレゼンテーションベースなど）を慎重に検討する。聴衆に最も受け入れられやすい方法や、組織で定義されている要件を考慮する。
  * 提案の要素は、任意の順序で提示できる。例えば、「現状、ロードマップ、将来像、求めるアクション」や、「求めるアクション、将来像、現状、ロードマップ」など、要素の提示順序は適宜調整する。
  * 柔軟性を保ち、主要なステークホルダーの意見を取り入れる。提案の前、最中、後にフィードバックを受け入れる姿勢は、前向きで協力的なチームの取り組みを生み出し、FinOps導入ジャーニーとその先における継続的なコラボレーションの基礎を築く。
  * 技術的な概念は伝えるのが難しい場合がある。非技術的なステークホルダーが理解できる類似の概念を検討する。例えば、コミットメント割引を、電気料金を安くするための戦略（契約期間を約束する代わりに、キロワット時あたりの割引が適用される）に例えたり、使用量の最適化を、部屋を出るときに電気を消すことや、ランプに適したワット数の電球を使用することに例えたりする。
  * 特定の聴衆の関心領域（削減可能予測の割合、ROIなど）に焦点を当てる。
  * 説得力のあるビジュアルを取り入れることを検討する。

## ステージ3：準備（承認された提案の実行に向けて）

このステージでは、承認された提案を実行に移します。

FinOps導入の提案が受け入れられたことで、承認された活動ロードマップを実行するための計画を策定できるようになります。このステージは、それらの承認された計画を実行するための準備に焦点を当てています。例えば、承認されたロードマップに「シニアリーダーシップとのクラウドコスト管理ルーティンの確立」が含まれていた場合、以下のような準備を行います。

  * シニアリーダーシップとの月次ミーティングの日時を決定する
  * ミーティングで共有するコンテンツの概要を策定する
  * その情報の入手先と収集方法を決定する
  * ミーティングに招待するメンバーを特定する、など。

このステージでは、FinOpsの運用を設計し、組織の特定のニーズに運用を適合させながら、プラクティスの正式なローンチに向けて準備します。このステージで行うべきことは数多くあります。以下の内容は、FinOps導入ジャーニーを推進し参加してきたFinOps Foundationコミュニティの共同経験に基づき、FinOpsジャーニーをどこから始めるべきかについての提案を提供します。ただし、他の取り組みと同様に、緊急のニーズがある領域に労力を向けるべきです。

### FinOpsチームとチームの役割の定義

FinOpsジャーニーの要となるのは、変革を推進するための専門知識と能力を備えた専任チームの結成です。FinOps機能の組織内における「本拠地」を特定し、チームを何名で構成し、どのような役割を含めるかを決定します。どの役割を既存 of メンバーや社内異動で補い、どの役割を新規採用で補うかなどを決定します。Cloud Center of Excellence（CCoE）や同様の社内機能と統合することが役立つ場合があります。

FinOpsチームの構築とサポートに関する詳細なガイドについては、以下のリソースを参照してください。

  * [FinOpsチームに関するホワイトペーパー](<https://www.finops.org/wg/building-finops-teams-roles-structures-career-paths/>)
  * [書籍『Cloud FinOps』](<https://www.finops.org/community/finops-book/>)
  * [FinOpsのツールとサービス](<https://www.finops.org/wg/finops-tools-and-services/>)
  * [FinOpsチャンピオンプログラム](<https://www.finops.org/wg/what-is-a-finops-champions-program/>)

### ケイパビリティを実行するためのプロセスの開発

20近くある[ケイパビリティ](<https://www.finops.org/framework/capabilities/>)をうまく進めるには、堅牢な実行計画の開発が最も重要です。FinOpsジャーニーを始めたばかりの組織には、まず少数のケイパビリティを優先して取り組み、その後徐々に他のケイパビリティへとFinOpsの運用を拡大していくことを推奨します。調査ステージでの発見は、ケイパビリティを実装する順序を優先順位付けするのに役立ちます。

ケイパビリティを実行するためのプロセス開発の一環として、組織は重要業績評価指標（KPI）の特定、ワークフローやテンプレートの作成、ツールの準備、コミュニケーション計画の定義、相互作用モデルの確立などを行います。以下は、立ち上げ期のFinOpsプラクティスが通常最初に注力する代表的なケイパビリティです。

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201044%20424'%3E%3C/svg%3E)

[**データ取り込み**](<https://www.finops.org/framework/capabilities/data-ingestion/>)**、**[**配賦**](<https://www.finops.org/framework/capabilities/allocation/>)**、および**[**レポート**](<https://www.finops.org/framework/capabilities/reporting-analytics/>)**：** コストの可視化は、他の多くのFinOpsケイパビリティを可能にするため、芽生えつつあるFinOpsプラクティスが最初に取り組む項目の1つになることがよくあります。情報に基づいた意思決定を可能にするために、正確に記述され、包括的なコストと使用状況のデータをチームが利用できるようにする必要があります。さらに、これらのケイパビリティにおける成功は、[請求とチャージバック](<https://www.finops.org/framework/capabilities/invoicing-chargeback/>)の取り組みにおける成功の基礎を築きます。

[**予測**](<https://www.finops.org/framework/capabilities/forecasting/>)**および**[**予算編成**](<https://www.finops.org/framework/capabilities/budgeting/>)**：** 多くの組織にとって、予算超過や予想される支出に対する理解の不足は、FinOpsを導入する主な原動力となっています。したがって、クラウド支出をプロアクティブに管理できるよう、予測および予算編成のケイパビリティが最初の導入対象として優先されることがよくあります。組織は、予測および予算編成の取り組みを補完するために、何らかの形の[異常管理](<https://www.finops.org/framework/capabilities/anomaly-management/>)の確立を目指すこともあります。

[**ワークロードの最適化**](<https://www.finops.org/framework/capabilities/workload-optimization/>)**および**[**料金の最適化**](<https://www.finops.org/framework/capabilities/rate-optimization/>)**：** 最適化の取り組みはコスト削減を促進し、具体的なメリットを提供して、より広範なFinOps導入への勢いを醸成します。請求額が急増している組織の場合と同様に、支出の削減は重要かつ緊急のニーズです。

[**教育と普及促進**](<https://www.finops.org/framework/capabilities/finops-education-enablement/>)**：** 組織がFinOpsジャーニーに乗り出す際、テクノロジー投資のビジネス価値を最大化するという複雑な課題に対応するために必要なスキルと専門知識をチームメンバーに習得させるための、包括的なトレーニング計画を策定することは最優先事項です。これは、社内のFinOpsチームのメンバーと、FinOps活動に関与する他の組織ペルソナの両方に適用されます。トレーニングイベント（FinHacksやLunch & Learnsなど）、執筆物（FinOps Fridayブログや社内ナレッジベースのリポジトリなど）、公式な組織トレーニング（社内人事システムを通じて提供されるものなど）、CSPのトレーニング、および[FinOps Foundationのトレーニングと認定資格の機会](<https://learn.finops.org/>)を活用してください。

[**FinOpsのツールとサービス**](<https://www.finops.org/framework/capabilities/finops-tools-services/>)**：** 正確なデータと強力なツールへのアクセスは、効果的なFinOps管理の生命線です。有意義で価値のあるツールを利用可能にし、選択したツールセットを使用して関連データを関連するステークホルダーの進路上に配置することを優先します。これにより、チームは有意義なビジネス成果を推進する取り組みにおいて成功を収めることができます。SaaS製品を活用する場合でも、カスタムソリューションを開発する場合でも、組織は独自のニーズと目標に合致したソリューションを優先すべきです。

### コラボレーションと目標の整合

FinOpsには、すべての主要なステークホルダーからのコラボレーションが必要です。このステージでは、チームが協力して目標を整合させ、定期的な更新の頻度と相互作用のモードを確立する必要があります。ローンチの準備をし、FinOpsプラクティスの開発を繰り返す中で、主要なステークホルダー間のフィードバックループを構築します。そして、時間の経過とともに成熟していくFinOpsプラクティスを繰り返す中で、強力なコラボレーションを維持するために、ローンチ中およびローンチ後もこの習慣を継続します。定期的なミーティング、レポートなど、フィードバックループを促進するためのメカニズムとスペースを決定します。

### 関与させるべき人物

レポートやルーティンを準備する際には、さまざまなチーム間で期待値を設定し、説明責任を管理することが重要です。このステージでは、特定の活動に応じて、任意のコアペルソナまたは関連ペルソナが関与する可能性があります。ただし、一部のペルソナは特定の領域に関与する必要がない場合もあります。エンジニアリングと財務は、導入ロードマップが形成された調査ステージで相談を受けた主要なペルソナグループであり、同様に、FinOpsのローンチに向けた準備において関与し、協力すべき重要なペルソナグループです。

FinOpsチームの体制を定義し、堅牢な実行プロセスを開発し、目標を整合させ、協力的な相互作用パターンを確立することで、組織はFinOpsの実行へのシームレスな移行に向けた体制を整えることができます。

### 役立つヒント

  * ソリューションを過剰に設計しない。代わりに、実用最小限の製品（MVP）ソリューションから開始し、実践を通じてFinOpsプロセスを成熟させる。
  * 堅牢なコミュニケーション計画は、FinOpsイニシアチブの目標と期待される成果についてステークホルダーに通知し、主要なインフルエンサーやステークホルダーからの支持を獲得するために不可欠である。
  * 関連するステークホルダーと関わり、部門を超えた目標の整合とコラボレーションを確実にし、共通の責任と継続的な改善の文化を育む。
  * FinOpsのベストプラクティスを強化するための[ポリシーとガバナンス](<https://www.finops.org/framework/capabilities/cloud-policy-governance/>)を確立することは、組織全体でのコンプライアンスと説明責任の確保に役立つ。

## ステージ4：ローンチ

ローンチステージは、FinOpsプラクティス、または既存のプラクティスへの新しいスコープの導入を正式に開始し、設計されたプロセス、ツール、ポリシーの実装を開始する段階です。このマイルストーンは、通常かつ継続的なFinOps運用の始まりを示します。ローンチ時には、初期ローンチの一環として、または継続的なプログラムの一環として、以下のようなさまざまな活動を展開することを選択できます。

  * FinOpsプラクティスの確立と導入活動の発表
  * チームメンバーやステークホルダーが新しいツール、プロセス、ポリシーに慣れるための、トレーニングの実施とFinOpsナレッジベース文書の共有（ローンチ前に完了していない場合）
  * 簡単に達成できる成果（イージーウィン）を実行し、その成功を組織全体で共有する
  * 成果を称える「ウィン・ウォール（Win Wall）」の立ち上げ
  * ツールの展開
  * FinOpsレポートの配布と、ユーザー自身によるレポート作成の支援
  * 定期ミーティング（月次クラウドコスト更新コール、CCoE、ビジネスユニットミーティングなど）の主催と参加の開始
  * [FinOpsケイパビリティ](<https://www.finops.org/framework/capabilities/>)（予測、予算編成、使用量の最適化、料金の最適化など）の実行
  * 運用を改善するためのチームからのフィードバックの活用

### 関与させるべき人物

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20656%20603'%3E%3C/svg%3E)

ローンチステージにおいて、FinOps実践者およびFinOps導入の推進者は、導入の計画と進捗状況についてリーダーシップと緊密にコミュニケーションを取り続ける必要があります。すべてのペルソナがFinOpsの実行に関与するため、このステージおよびそれ以降においても全員が関与します。FinOpsチームとコアペルソナは、前のステージで定義した役割と責任に従って、価値を最大化するために連携して取り組みます。

### ローンチのヒント

FinOpsをローンチすることは、組織全体に対して、またはすべてのFinOpsケイパビリティに対してFinOpsプラクティスを実装しなければならないという意味ではありません。実際、最も短い時間で組織に最大の価値をもたらすものに焦点を当てることを推奨します。一度にすべてを行おうとしないでください。  

### 反復的な改善が鍵

ローンチの成功は、将来のFinOpsの成功を保証するものではありません。FinOpsの成功は、[FinOps原則](<https://www.finops.org/framework/principles/>)を継続的に遵守し、組織の進化するニーズを満たすためにケイパビリティの[成熟度レベル](<https://www.finops.org/framework/maturity-model/>)を向上させることから生まれます。

FinOpsプラクティスを運用するにあたり、定期的にプラクティスを評価して、さらなる投資によって価値が高まるかどうかを判断し、現在のケイパビリティリストと目標が組織にとって適切であるかどうかを確認し、FinOpsプラクティス開発のための新しい提案を進める必要があるタイミングに留意する必要があります。FinOpsの導入ジャーニーは、FinOpsが組織全体に広がる際や、企業買収が発生した際など、何度も繰り返すことになるジャーニーです。FinOpsは継続的かつ反復的なプロセスです。目の前にある課題と機会を受け入れましょう。

皆様のジャーニーの成功をお祈りいたします。

## 謝辞

このホワイトペーパーの更新に取り組んでくださった以下のメンバーに感謝いたします。

[ ![Borja Martinez](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Borja Martinez NTT Data ](<https://www.linkedin.com/in/bormartinez/>) [ ![Stewart Kasen](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Stewart Kasen Philips ](<https://www.linkedin.com/in/stewart-k/>) [ ![Laura Mills](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Laura Mills ManTech ](<https://www.linkedin.com/in/laura-mills-98737b105/>) [ ![Matt Walls](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Matt Walls NBCUniversal ](<https://www.linkedin.com/in/wallsmatthew/>) [ ![Jason Weimer](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jason Weimer CloudSaver ](<https://www.linkedin.com/in/jason-w-474b19307/>) [ ![Anderson Oliveira](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Anderson Oliveira CloudZero ](<https://www.linkedin.com/in/anderson-c-oliveira/>) [ ![Anastasija Jakovleva](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Anastasija Jakovleva FLSmidth ](<https://www.linkedin.com/in/anastasija-jakovleva-96140179/>) [ ![Tammy Burnitt](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Tammy Burnitt FinOps Foundation ](<https://www.linkedin.com/in/tammyburnitt/>)

また、FinOps導入アセットのオリジナル版の共同作成者である、Anderson Oliviera、Mike Eisenstein、Anthony “TJ” Johnson、Tracy Roesler、Bailey Caldwell、Erik Peterson、Kim Wier、Melvin Brown、Ashley Hromatko、Idaliz Baez、Rejane Leite、Rich Gibbons、Nick Grab、Mandy van Os、Bhups Hirani、およびMike Bradburyの各氏に特別に感謝いたします。

最終更新日：2026年2月18日

## このページの内容

  * [前提条件](<#prerequisites>)
  * [ステージ1：調査](<#stage-1-research>)
  * [ステージ2：提案](<#stage-2-propose>)
  * [ステージ3：準備](<#stage-3-prepare>)
  * [ステージ4：ローンチ](<#stage-4-launch>)
  * [付録](<#appendix>)
  * [謝辞](<#acknowledgments>)

##### 関連するFinOpsケイパビリティ

[ FinOpsプラクティスの運用 ](<https://www.finops.org/framework/capabilities/finops-practice-operations/>) [ FinOpsの教育と普及促進 ](<https://www.finops.org/framework/capabilities/finops-education-enablement/>)

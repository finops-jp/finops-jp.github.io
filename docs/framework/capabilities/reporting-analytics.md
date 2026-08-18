---
title: "レポートと分析（Reporting & Analytics）"
---

[英語版]: https://www.finops.org/framework/capabilities/reporting-analytics/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

[フレームワーク](<https://www.finops.org/framework/>) / [ドメイン](<https://www.finops.org/framework/domains/>) / [使用量とコストの把握（Understand Usage & Cost）](<https://www.finops.org/framework/domains/understand-usage-cost/>) / レポートと分析

## このページの内容

  * [定義](<#definition>)
  * [成熟度評価](<#maturity_assessment>)
  * [実務活動](<#functional_activities>)
  * [成功基準とKPI](<#success-kpis>)
  * [インプットとアウトプット](<#inputs_outputs>)

**組織は、データを分析してレポートを作成することで、使用パターンや支出パターンに関するインサイトを獲得し、改善の機会を特定し、テクノロジーリソースに関する情報に基づいた意思決定を支援します。**

**データとコンテキスト情報へのアクセス**

  * レポートと分析のスコープを定義し、データ取り込み（Data Ingestion）に提供する
  * レポートと分析の要件を定義し、FinOpsのツールとサービス（FinOps Tools & Services）に提供する
  * レポートで使用する共通の用語やタクソノミー（Taxonomy）を定義する
  * 社内外のデータソースとアクセス方法を特定する

**レポートのユースケース**

  * アドホックレポートを作成する
  * 調査レポートを支援する
  * ショーバック（Showback）レポートを作成する
  * 自動化やコミュニケーションのための、定期的かつ公式で構造化されたレポートを作成する

**各ペルソナのレポートと分析ニーズの支援**

  * すべてのペルソナに対して適切なトレーニングを実施する
  * ペルソナごとにデータの機密性と含めるべきガイドラインを特定する
  * レポートのドキュメント作成、サポート、開発を管理する
  * 適切な組織やペルソナにレポートと分析データを配布する

## 定義

レポートと分析（Reporting & Analytics）とは、組織内のさまざまなペルソナグループのニーズを満たすレポート作成メカニズムを構築し、データに対するインサイトを獲得するケイパビリティです。レポートは、アドホックレポート、ショーバック、調査レポート、または組織が使用する定期的なレポートなどのユースケースを詳細化、強調、要約、分類し、支援できます。これは[FinOpsケイパビリティ（FinOps Capabilities）](<http://finops.org/framework/capabilities>)の中で最も重要かつ不可欠なものの1つであり、ほぼすべての他のケイパビリティを支援します。

注意：ここでの「レポート」という用語は、紙や電子のレポートだけでなく、ダッシュボード、カスタマイズされたデータフィード、またはデータ取り込みケイパビリティで収集されたテクノロジーデータ、メタデータ、運用データ、その他のデータから組織が作成した構造化情報のAPIも含みます。

データ分析とレポートは、リソースやリソース階層に関するデータとメタデータを活用し、各ペルソナのニーズに応じてさまざまなレポート作成メカニズムを構築します。この作業は通常、コストと使用量データに焦点を当てますが、サステナビリティ（Sustainability）データ、オブザーバビリティ（Observability）、またはその他の関連データに関するレポートも含めることができます。これらのメタデータに関する戦略の多くは、配分（Allocation）ケイパビリティで定義されます。レポートと分析の結果は、特に請求とチャージバック（Invoicing & Chargeback）、予測（Forecasting）、予算編成（Budgeting）、サステナビリティ、および[使用量とコストの最適化（Optimize Usage & Cost）ドメイン](<https://www.finops.org/framework/domains/optimize-usage-cost/>)におけるすべての[ケイパビリティ](<http://finops.org/framework/capabilities>)に提供されます。

多くの場合、組織はこのケイパビリティの一部を満たすためにデータプロバイダーのツールに依存します。また、サードパーティのツールが機能を提供する場合もあります。組織は、エンジニアリング、財務、調達、サステナビリティ、およびその他のチームが業務を遂行するプロセスに情報を組み込むために、レポートケイパビリティの維持に継続的に取り組む必要があります。

また、組織は、データの機密性、レポートで使用する共通の用語（正確に定義されたもの）の策定、およびすべてのペルソナが適切なレポートデータにアクセスできるようにすることを含め、レポートに関するガイドラインを確立し、長期にわたって維持する必要があります。

## 成熟度評価

#### クロール

  * フィルタリングや結果表示の変更などの基本機能のみを備えた、定型レポートを使用している
  * レポートは、粒度が限られた大まかなコストと使用量のグループ化を中心に構成されている
  * 取り込まれた請求データへの変更は、ネイティブサービスが提供するものを通じてのみサポートされている
  * 分析結果は、チームに対して手動で伝達されている
  * チームは、請求データに関する疑問の答えを見つけるために、主に中央のFinOpsチームに依存している

#### ウォーク

  * レポートツールにより、カスタムビューや集計が可能になっている
  * KPIの追跡やショーバックレポートを可能にする詳細なレポートが作成されている
  * 取り込まれた使用量と請求のデータセットに、データエンリッチメント（Data enrichment）とビジネスロジックが追加されている（例：合成タグ、値の修正、サステナビリティなどの他のビジネスデータセットの結合）
  * データに基づいて予測や異常検出プロセスが実装されている
  * ダッシュボードレポートがチームに一元的に提供されている
  * チームは、使用量と請求のデータに関する疑問の答えを見つけるために、レポートや分析ツールをセルフサービスで利用し始めている

#### ラン

  * データセットを1つのソースの場所に結合している（例：[FOCUS](<https://focus.finops.org/>)の使用）
  * 複雑なビジネスロジックとデータエンリッチメントが可能になっている
  * 使用量とコスト以外の指標や関係性（例：サステナビリティ指標）を組み込むために、機械学習（ML）モデルの使用を含む高度な予測手法を採用している
  * 分析結果は、エンジニアリングチームが使用するダッシュボードやワークキューにプッシュされている（業務プロセスへのデータの組み込み）
  * ほとんどの（あるいはすべての）チームが、セルフサービスのレポートと分析に価値を見出している

## 実務活動

####  ![](https://www.finops.org/wp-content/uploads/2024/03/FinOps-Practitioner.svg) FinOps実践者（FinOps Practitioner）

**FinOpsチームのロールとして、私は以下を行います。**

  * すべてのグループと協力して、「公式」のアウトプットに含めるべき適切なメトリクス、測定基準、メタデータを決定する
  * チームがセルフサービスでレポートにアクセスする際にサポートを提供する
  * データをエンリッチし、使用量と請求のデータにビジネスロジックを適用するケイパビリティを開発する
  * 組織に対して、使用量と請求のデータに関する専門知識を提供する

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Engineering.svg) エンジニアリング（Engineering）

**エンジニアリングのロールとして、私は以下を行います。**

  * ソリューションの選択肢やサービスを評価する際、コストを考慮事項として積極的に含める
  * FinOpsを念頭に置いたエンジニアリングを最も効果的に支援する情報について、FinOpsチームとコミュニケーションをとる
  * FinOpsチームが提供するレポートやダッシュボードを学習し、アクセスする
  * エンジニアに必要な労力を軽減するために、FinOpsチームが既存のダッシュボードやワークキューにデータを組み込めるようにする
  * 自分のチームに対して達成可能なコスト目標を設定し、ビジネスパートナーにとって意味のあるKPIを達成する
  * ビジネスケイパビリティの構築と最適化の実施の両方の文脈において、開発サイクルを管理する

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Finance.svg) 財務（Finance）

**財務のロールとして、私は以下を行います。**

  * 自分のレポートやデータ分析のユースケース、およびそのデータをどのように提示、表現、ソート、要約、配信すべきかについて、FinOpsチームにガイダンスを提供するよう努める
  * 業務を遂行する上で、FinOpsチームが提供するデータ分析およびレポートケイパビリティを利用するよう努める
  * すべての他のペルソナに対してコスト情報を表現する適切な方法を決定するために、FinOpsチームと協力する

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Procurement.svg) 調達（Procurement）

**調達のロールとして、私は以下を行います。**

  * 自分のレポートやデータ分析のユースケース、およびそのデータをどのように提示、表現、ソート、要約、配信すべきかについて、FinOpsチームにガイダンスを提供するよう努める
  * 業務を遂行する上で、FinOpsチームが提供するデータ分析およびレポートケイパビリティを利用するよう努める
  * データの機密性と共有に関連する使用量、コスト、その他のデータを表現する適切な方法を決定するために、FinOpsチームと協力する

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Product.svg) プロダクト（Product）

**プロダクトのロールとして、私は以下を行います。**

  * 自分のレポートやデータ分析のユースケース、およびそのデータをどのように提示、表現、ソート、要約、配信すべきかについて、FinOpsチームにガイダンスを提供するよう努める
  * 業務を遂行する上で、FinOpsチームが提供するデータ分析およびレポートケイパビリティを利用するよう努める

####  ![](https://www.finops.org/wp-content/uploads/2024/03/Leadership.svg) リーダーシップ（Leadership）

**リーダーシップのロールとして、私は以下を行います。**

  * 自分のレポートやデータ分析のユースケース、およびそのデータをどのように提示、表現、ソート、要約、配信すべきかについて、FinOpsチームにガイダンスを提供するよう努める
  * 業務を遂行する上で、FinOpsチームが提供するデータ分析およびレポートケイパビリティを利用するよう努める
  * このケイパビリティから使用および信頼すべきレポートとデータ分析のタイプを特定するために、他のペルソナと協力する
  * ビジネス価値全体の文脈において、組織のコスト目標と炭素排出量目標の優先順位を設定する
  * チームが複数の競合する優先事項を持つトレードオフの意思決定を行えるようにするビジネス目標を確立する

####  ![]() 関連ペルソナ（Allied Personas）

**関連ペルソナのロールとして、私は以下を行います。**

  * 自分のレポートやデータ分析のユースケース、およびそのデータをどのように提示、表現、ソート、要約、配信すべきかについて、FinOpsチームにガイダンスを提供するよう努める
  * 業務を遂行する上で、FinOpsチームが提供するデータ分析およびレポートケイパビリティを利用するよう努める
  * サステナビリティペルソナとして、企業のサステナビリティ目標を推進するために、レポートと分析を活用および同期するようFinOpsチームに積極的にガイダンスを提供する

## 成功基準とKPI

  * 全体的なタグ付け（Tagging）の準拠率が90%を超えている
  * すべてのコアペルソナ（Core Personas）が、コンテキストに関連したコストレポートデータを利用できる
  * ユニットエコノミクス（Unit Economics）に関連する情報の公開をサポートするように、製品やサービスを設計している
  * FinOpsチームが、コミットメント（Commitment）のカバー率と利用率の望ましいレベルを定義できる
  * すべてのコアペルソナが、異常、利用率、コストの異常値、予算、予測の差異に関するセルフサービスレポートやアドホック分析を行える
  * 使用量とコストのレポートに関する質問の分析にかかる調査時間を短縮している
  * すべてのコアペルソナにおいて、テクノロジー支出に対する意識、説明責任、サステナビリティへの影響が高まっている
  * FinOpsチームが、コミットメントの更新日や有効期限、マーケットプレイスでの購入、BYOLの使用、SaaSサービスの重要な日付についてレポートできる

## インプットとアウトプット

### インプット

  * データプロバイダーの詳細な請求、使用量、オブザーバビリティ、ライセンス、炭素データ
  * 利用率データと料金の最適化（Rate Optimization）データを収集するためのサービス固有のAPI
  * ビジネスインテリジェンス（BI）ツールとデータ可視化ツール
  * 企業のコストセンター（Cost Center）や部門の階層に合わせたコスト配分（Cost Allocation）メタデータ
  * 共有サービス向けのコスト配分モデル
  * 定義されたタグ付け基準と戦略
  * FinOpsのレポートと分析を補完するための、関連ペルソナの専門分野からのデータ

### アウトプット

  * 許容差異しきい値付きの予測
  * 配分済みおよび未配分のリソースのカバー率レポート
  * コミットメントカバー率と空き率に関する料金最適化しきい値レポート
  * システム属性のベンチマーク（CPU、Memory、Storageなど）を含むリソース利用率レポート
  * ペルソナのロールや責任（財務、エンジニア、プロダクト、サステナビリティ、リーダーシップなど）に合わせて調整された、コンテキスト固有の分析
  * 関連ペルソナがそれぞれの専門分野の活動内で利用できるデータエクスポート
  * 信頼できる唯一の情報源（Source of Truth）としての、一元化されたFinOpsデータリポジトリとレポートツール

[以前のデータ分析とショーバックのページを表示](<https://www.finops.org/framework/previous-capabilities/analysis-showback/>)

## このページの内容

  * [定義](<#definition>)
  * [成熟度評価](<#maturity_assessment>)
  * [実務活動](<#functional_activities>)
  * [成功基準とKPI](<#success-kpis>)
  * [インプットとアウトプット](<#inputs_outputs>)

##### 関連アセット

[ ![]() クラウドコスト配分ガイド ](<https://www.finops.org/wg/cloud-cost-allocation/>) [ ![]() コンテナコストの計算 ](<https://www.finops.org/wg/calculating-container-costs/>) [ ![](https://www.finops.org/wp-content/uploads/2025/09/Scaling-Kubernetes-for-AIML-Workloads-FinOps-v1.png) 価値を最適化するためのFinOpsによるAI/MLワークロード向けKubernetesのスケール ](<https://www.finops.org/wg/scaling-kubernetes-for-ai-ml-workloads-with-finops/>) [ ![](https://www.finops.org/wp-content/uploads/2022/10/Identifying-Shared-Costs_1920x1080px.png) 共有クラウドコストの管理 ](<https://www.finops.org/wg/identifying-shared-costs/>) [ ![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2064%2036'%3E%3C/svg%3E) Azure Managed Disks向けFinOps：価値の最適化 ](<https://www.finops.org/wg/finops-for-azure-managed-disks-optimizing-for-value/>) [ ![](https://www.finops.org/wp-content/uploads/2023/09/liberty-mutual-x23.png) さまざまなペルソナの業務プロセスにレポートを組み込む（Liberty Mutual Insurance） ](<https://www.finops.org/assets/putting-reporting-in-the-path-of-different-personas-liberty-mutual-insurance/>) [ ![](https://www.finops.org/wp-content/uploads/2023/09/grupo-boticario-x23.png) クラウドとオンプレミスのレポートを統合する方法（Grupo Boticário） ](<https://www.finops.org/assets/how-to-integrate-cloud-and-on-premise-reports-grupo-boticario/>) [ ![](https://www.finops.org/wp-content/uploads/2023/09/hcl-x23.png) FinOpsの成熟と、リアルタイムでデータ駆動型のFinOpsアドバイザリーレポートの構築（HCL） ](<https://www.finops.org/assets/maturing-finops-and-building-real-time-data-driven-finops-advisory-reporting-hcl/>) [ ![](https://www.finops.org/wp-content/uploads/2022/12/video.png) クラウド請求データをマスターする方法（Etsy & Google Cloud） ](<https://www.finops.org/assets/mastering-your-billing-data-and-making-it-useful-etsy-google-cloud/>) [ ![](https://www.finops.org/wp-content/uploads/2023/08/F2-YouTube-Thumbnails-Template-3.png) FOCUS（FinOps Cost and Usage Specification）の紹介 ](<https://www.finops.org/assets/introduction-to-focus-finops-cost-and-usage-specification/>) [ ![](https://www.finops.org/wp-content/uploads/2022/10/podcast.svg) FinOpsPod 33：失敗しているタグ付け戦略を修正する方法 ](<https://www.finops.org/assets/finopspod-33-fixing-a-tagging-strategy/>)

---
format: md
title: "主な要点：FinOpsとITFMの交差（Key Takeaways: How FinOps & ITFM Are Intersecting）"
---

[英語版]: https://www.finops.org/wg/key-takeaways-finops-itfm-intersection/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

**要約：** 専任の役割、共同レビューの定例化、または構造化されたデータ交換を通じて、FinOpsとIT財務管理（ITFM：IT Financial Management）の間に永続的な架け橋を構築します。また、手動での照合なしに両方の機能が運用データと財務データを接続できるように、共有フィールドの最小限のセットを標準化します。最初の請求書が届く前に帰属ロジックを整備し、契約時にAIのような新しいコストカテゴリを分類することで、組織は事後に対処するのではなく、新たな支出を予防的に管理できます。

## 目次

  * [並行して運用される専門分野：FinOpsとITFM](<#disciplines-run-in-parallel>)
  * [従量課金制がもたらす整合](<#consumption-based-billing-drives-alignment>)
  * [FinOpsとITFMの5つの整合ポイント](<#five-points-of-finops-and-itfm-alignment>)
  * [効果的なコラボレーションを実現している組織に見られる共通の成功要因](<#common-success-factors>)
  * [補完的な使命、テクノロジーのコストと価値に関する信頼できる単一のビュー](<#trusted-view-of-technology-cost-value>)
  * [謝辞](<#acknowledgments>)

FinOps、ITFM、および関連するベンダー固有の専門分野は、それぞれ異なる目標、ステークホルダー、運用のサイクルを持っています。両者の整合は、5つの交差点に集中しています。それらは、削減効果の認識（Savings Recognition）、チャージバックとショーバックの設計（Chargeback & Showback Design）、予算と予測の整合（Budget & Forecast Alignment）、差異分析（Variance Decomposition）、そしてタグ付けと用語の整合（Tagging and Terminology Alignment）です。

本調査において、これらを補完的な機能として認識し、各交差点で明確なプロセスを設計した組織は、連携の失敗が少なく、共有された財務データに対する信頼性が高いと報告しています。これらを組み合わせることで、組織はテクノロジー投資の価値を最大化し、すべてのテクノロジーカテゴリにわたる既存および新たな従量課金制の支出を予防的に管理するための体制をより適切に整えることができます。

詳細な調査内容とすべての交差点については、ホワイトペーパー全文『[FinOpsとITFMの交差（How FinOps & ITFM Are Intersecting）](<https://www.finops.org/wg/finops-itfm-intersection>)』をご覧ください。

**_読者への注意書き：_** 本ペーパーは、すでにFinOpsとITFMの機能を確立している組織が、実際にこれら2つの専門分野をどのように融合させているかを検証するものです。2026年3月から4月にかけて、さまざまな業界、規模、成熟度の実践者や組織のリーダーを対象に実施した一次インタビューに基づき、異なる運用モデル全体で見られた独自の機能目標、共通の交差点、統合の障壁、および成功要因を明らかにしています。紹介する事例は、そのまま導入するのではなく、自組織の構造、成熟度、業界の要件、およびテクノロジー支出の複雑さに合わせてカスタマイズして適用することを想定しています。

## 並行して運用される専門分野：FinOpsとITFM

_FinOpsはエンジニアリング主導であり、ITFMは財務から発生することが多い。_

FinOps機能とITFM機能の両方を持つほとんどの組織は、これらを連携させるのではなく、並行して運用しています。FinOpsはリアルタイムのコストインテリジェンスを提供し、エンジニアリング、プロダクト、リーダーシップの各チームが、テクノロジー支出全体におけるコスト、使用量、およびビジネス価値を理解し、情報に基づいた意思決定を行えるよう支援します。ITFMの成熟度は組織によって異なり、財務やビジネス部門向けのコストセンター予算編成、チャージバック、月次の財務レポートから、ITポートフォリオ全体の総所有コスト（TCO：Total Cost of Ownership）とエンドツーエンドのコスト透明性を提供する、より成熟したサービスおよびプロダクト指向のプラクティスまで多岐にわたります。ITFMは通常、財務実績とレポートサイクルを通じて機能し、支出を発生させているリソースよりも高い財務的抽象度で、意思決定、価値管理、および最適化をサポートします。

両者はそれぞれのコア機能を果たしていますが、それらがどの程度うまく接続されるかは成熟度によって決まります。

  * FinOpsは、消費のスピードでコストインテリジェンスを提供します。
  * ITFMは、財務サイクルのペースで財務ガバナンスを提供します。

重要な交差点においてプロセスと所有権が共有されていない場合、それぞれが同じ基礎データに対して独自のビューを形成し、財務的な説明や解釈の不一致を招く原因となります。これらの違いは、意図の対立によるものではなく、タイミング、粒度、およびデータモデルの選択に起因することがほとんどです。成熟度の低い組織では、これが経営幹部の混乱を招き、報告された削減効果に対する信頼性を低下させ、期末決算時の差異説明を複雑にし、テクノロジーのコストと価値に対する信頼を損なう可能性があります。成熟度の高い組織では、共有ダッシュボード、明確な引き継ぎ、および合意されたレビューの定例化により、これらのビューを調整し、より信頼性の高い財務的な説明を構築できます。

_「組織が厳格な壁を築き、FinOpsは運用部門のもの、ITFMは財務部門のものと決めてしまうのは、事実上、失敗を前提とした設計と言えます。」_

— グローバル製造企業のテクノロジー財務リーダー

![FinOps x ITFM intersection diagram ](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20968%20559'%3E%3C/svg%3E)

## 従量課金制がもたらす整合

予測不可能なテクノロジー支出がますます増加しています。パブリッククラウドは従量課金制を主流にし、企業ITコストを調達サイクルではなく、エンジニアリングの意思決定によって形成される分単位の発生主義へと移行させました。現在、これと同様の移行が、オンプレミスのプライベートクラウド、SaaS、データクラウドプラットフォーム、およびAIへと広がっています。

AIはその最も顕著な例です。組織がAIサービスをどのように設計したかによって、同じビジネス活動が、クラウドのコンピュート、SaaS契約、エンタープライズソフトウェア契約、およびオンプレミスのインフラストラクチャにわたってコストを発生させる可能性があります。これらのコストは総勘定元帳に直接リンクしているとは限らず、成熟した組織は、これらを接続するために財務データと運用データを融合させたコストモデルに依存することがよくあります。

AI投資の費用対効果を精査する取締役会や経営幹部にとって、ガバナンス上の課題は、FinOpsとITFMがAIサービスの全コストと価値を説明するために必要な共有データ、コストモデル、帰属ロジック、および所有権を備えているかどうかです。

_「ここには2つの異なるデータの問題があります。第1に、クラウドの請求書に埋もれているトークンコストです。これは努力次第で分離できます。第2に、ソフトウェアライセンスに組み込まれているトークンコストです。ライセンス料にはAIの使用量コンポーネントが明記されていません。私たちは、使用量コンポーネントを含むすべてのライセンスがどこにあるのか、実際にいくらかかっているのか、および今後どれだけ増加すると予想されるのかを解明しなければなりません。」_

— Fortune 50企業のテクノロジー財務シニアエグゼクティブ

AI支出が拡大する前にFinOpsとITFMの間の運用モデルを確立した組織は、最初の請求書からそれを管理できます。確立していない組織は、クラウドコストが生み出した未配分の支出、所有権の争い、および事後的な照合に、より大きな規模で対処せざるを得ず、軌道修正に追われています。

_「AIのデータ階層は契約時に確立するべきです。トークンコストとライセンスコストを個別のラインアイテムに分け、買掛金処理を経て追跡システムに流れるようにします。そうすれば、この分析は数ヶ月ではなく数日で完了します。」_

— 電気通信会社のテクノロジー財務シニアエグゼクティブ

### ベンダー固有のITFM実装

インタビューを行ったいくつかの組織では、テクノロジービジネス管理（TBM：Technology Business Management）も導入されていました。これは主にコスト分類法および配賦方法論としての利用に関連しており、特定のベンダープラットフォームを通じて実装されることが最も一般的です。

## FinOpsとITFMの5つの整合ポイント

本調査では、FinOpsとITFMが最も頻繁に交差する5つのポイントを特定しました。これらの交差点を効果的に管理している組織では、それぞれに定義された所有権、明確な引き継ぎプロセス、および最小限の共有データセットが存在します。

  * [**削減効果の認識**](<https://www.finops.org/wg/how-finops-itfm-are-intersecting/#savings-recognition/>) — FinOpsはコスト効率を向上させてさらなる価値を生み出します。ITFMは、これらをコストベースにおいて正式に認識する必要があります。これがないと、コスト削減はFinOpsのレポート内にのみ存在し、財務部門やビジネス部門からは見えなくなります。
  * [**チャージバックとショーバックの設計**](<https://www.finops.org/wg/how-finops-itfm-are-intersecting/#chargeback-and-showback-design>) — FinOpsは帰属ロジックを設計し、即座に可視化するためのショーバックを提供します。ITFMは、これらをより長い間隔で洗練させ、財務レベルの仕訳やチャージバックに反映します。財務レポートは、運用のスピードを向上させる代わりに、ある程度の計算のズレを許容し、定義された許容範囲内の軽微な差異を反映する場合があります。
  * [**予算と予測の整合**](<https://www.finops.org/wg/how-finops-itfm-are-intersecting/#budget-and-forecast-alignment>) — 予測のプラクティスは成熟度によって異なります。FinOpsがローリング予測または定期的に更新される消費予測を提供する一方で、ITFMはそれらを財務部門向けの予算コミットメントに変換できます。連携することで、予測の整合をより早期に図ることができ、差異の説明が容易になり、決算の予測可能性が高まります。
  * [**差異分析**](<https://www.finops.org/wg/how-finops-itfm-are-intersecting/#variance-decomposition>) — コストが計画から乖離した場合、FinOpsとITFMは、異なるペルソナに対して異なるスピードで、単価要因と数量要因を説明する必要があります。FinOpsは運用の消費ビューを提供し、ITFMはそれらの要因を財務レポートサイクルや元帳への影響に接続します。共有モデルがない場合、同じ差異に対して部門間で異なる説明が生じる可能性があります。
  * [**用語とタグ付けの整合**](<https://www.finops.org/wg/how-finops-itfm-are-intersecting/#terminology-and-tagging-alignment>) — タグ付けの不一致は、手動での照合を余儀なくさせ、財務ガバナンスの整合性を損ないます。タグ付けを整合させることで、リアルタイムのコストに関する意思決定を、決算後の信頼できる財務レポートに接続できます。

![FinOps x ITFM intersection diagram with defined ownership boundaries](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20960%20533'%3E%3C/svg%3E)

これらの交差点において、組織は、FinOps、ITFM、および運用データをできるだけ手動の照合なしで接続できるように、共有データフィールドの最小限のセットを定義する必要があります。この最小限のセットには、通常以下が含まれます。

  * コストセンター
  * サービス／プロダクト
  * アプリケーション
  * 法人（Legal Entity）
  * 環境
  * プロジェクト識別子
  * 所有者（Owner）

これらを[FOCUS](<http://focus.finops.org>)（FinOps Open Cost and Usage Specification）に準拠して標準化した組織は、照合のオーバーヘッドが大幅に削減されたと報告しています。

## 効果的なコラボレーションを実現している組織に見られる共通の成功要因

本調査では、並行した活動から一歩進んで、より構造化されたコラボレーションへと移行した組織における4つの共通要因を特定しました。いずれのケースでも、これらの要因は一回限りの取り組みではなく、一貫したプラクティスとして観察されました。

  * **永続的な架け橋が存在する** — 関係性に対する説明責任を持つ専任の役割、共同の運用レビュー、または構造化されたデータの引き継ぎが存在します。その形態はさまざまですが、一貫しているのは、それが存在し、永続的であるということです。
  * **共通の用語を確立し、デプロイ時にタグ付けを強制する** — 共通の用語に合意し、タグ付けをデプロイ時のコントロールとして扱います。タグのないリソースは、事後に照合するのではなく、リリース前にブロックします。
  * **FinOpsとITFMの間で予測共有のサイクルが定義されている** — 週次、月次、決算前、またはアドホック（随時）のサイクルを定義することで、ITFMは事後対応ではなく予防的に差異を説明するためのコンテキストを得ることができます。
  * **契約時に新しいコストカテゴリを分類する** — 組織の財務アーキテクチャがサポートする適切なメカニズムを使用して、最初の請求書が届く前に帰属フィールドとコスト識別を確立します。現在はAIがその推進力となっていますが、このプラクティスは、既存の財務ガバナンスよりも速いスピードで拡大するすべての新しいカテゴリに適用されます。

## テクノロジーのコストと価値に関する補完的な使命

クラウド、SaaS、AI、データクラウドプラットフォーム、ライセンス、およびそれに続くあらゆるカテゴリにおいて、テクノロジーの価格設定が従量課金制へと移行し続ける中、運用モデルを確立している組織は、遡及的にコストを追跡するのではなく、最初の請求書から新しいコストカテゴリを管理しています。運用モデルを持たない組織は、本調査で記録されているような、未配分の支出、相反するレポート、および事後的な照合という同じサイクルに直面する可能性が高く、それを管理するために構築された財務ガバナンスよりも速いスピードで拡大する新しいカテゴリが登場するたびに、そのサイクルを繰り返すことになります。

## 謝辞

本ペーパーの作成にご協力いただいた以下の方方に感謝いたします。

[ ![Janine Pickard-Green](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Janine Pickard-Green MagicOrange ](<https://www.linkedin.com/in/pickardgreenj/>) [ ![Thom Bailey](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Thom Bailey MagicOrange ](<https://www.linkedin.com/in/thombailey/>) [ ![Nan Braun](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Nan Braun Thavron Solutions ](<https://www.linkedin.com/in/nanbraun/>) [ ![Kezanne Riley](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kezanne Riley Thavron Solutions ](<https://www.linkedin.com/in/kezanne-riley/>) [ ![Robert Mischianti](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Robert Mischianti Nicus Software ](<https://www.linkedin.com/in/robert-mischianti-a3bb251/>) [ ![Trevor Quesenberry](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Trevor Quesenberry Nicus Software ](<https://www.linkedin.com/in/trevor-quesenberry/>) [ ![Amod Bhise](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amod Bhise ServiceNow ](<https://www.linkedin.com/in/amodbhise/>) [ ![Michael Rentschler](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Michael Rentschler Yarken ](<https://www.linkedin.com/in/mrentschler/>) [ ![Fabian Mieloch](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Fabian Mieloch SERVICEWARE ](<https://www.linkedin.com/in/fabian-mieloch/>) [ ![Matt Temple](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Matt Temple IBM ](<https://www.linkedin.com/in/mattrtemple/>) [ ![Eugene Khvostov](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Eugene Khvostov Apptio, an IBM Company ](<https://www.linkedin.com/in/eugenekhvostov/>) [ ![Mike Eisenstein](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Mike Eisenstein Accenture ](<https://www.linkedin.com/in/mike-eisenstein/>) [ ![Kristen DeStefano](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kristen DeStefano Deloitte Consulting ](<https://www.linkedin.com/in/kristen-destefano-4ab084b4/>) [ ![Michelle Dupuis](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Michelle Dupuis Walgreens ](<https://linkedin.com/in/michelle-dupuis-37490a3>)

最終更新日：2026年6月4日

## 目次

  * [並行して運用される専門分野：FinOpsとITFM](<#disciplines-run-in-parallel>)
  * [従量課金制がもたらす整合](<#consumption-based-billing-drives-alignment>)
  * [FinOpsとITFMの5つの整合ポイント](<#five-points-of-finops-and-itfm-alignment>)
  * [効果的なコラボレーションを実現している組織に見られる共通の成功要因](<#common-success-factors>)
  * [補完的な使命、テクノロジーのコストと価値に関する信頼できる単一のビュー](<#trusted-view-of-technology-cost-value>)
  * [謝辞](<#acknowledgments>)

###### [基礎を学ぶ FinOps認定プロフェッショナル（FinOps Certified Practitioner）で知識をレベルアップする 始める ![基礎を学ぶ](https://www.finops.org/wp-content/uploads/2025/12/certified-practitioner.svg) ](<https://learn.finops.org/path/finops-certified-practitioner-self-paced>)

##### 関連するFinOpsケイパビリティ

[ 専門分野間の連携 ](<https://www.finops.org/framework/capabilities/intersecting-disciplines/>)

---
title: "SaaS向けFinOps：FOCUSの導入（FinOps for SaaS: Adopting FOCUS）"
---

[英語版]: https://www.finops.org/wg/finops-for-saas-best-practices-and-adopting-focus/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

**概要：** FOCUS（FinOps Open Cost and Usage Specification）は、複数のソフトウェアベンダー間で請求データを標準化し、一貫した分析を可能にすることで、SaaSコストの管理を改善するのに効果的です。組織は、更新を追跡するためのライセンス管理の一元化や、未使用または十分に活用されていないライセンスを特定して解約するための定期的な監査の実施など、ベストプラクティスを通じてSaaS向けFinOpsを実装します。テクノロジープロバイダーにとってFOCUSの導入が依然として課題である場合、FinOps実践者（FinOps Practitioner）は提供されているテンプレートを使用して、SaaSプロバイダーにFOCUS仕様への準拠を公式に要求できます。

本ホワイトペーパーは、SaaS向けFinOpsに関する3部構成シリーズのパート3です。このホワイトペーパーを読むことで、[FOCUS™（FinOps Open Cost and Usage Specification）](<https://focus.finops.org/>)を導入する方法、およびSaaSプロバイダーにFOCUS仕様への準拠を促す方法を学習できます。

  * [パート1：SaaS向けFinOpsの概要](<https://www.finops.org/wg/finops-for-software-as-a-service-saas/>)
  * [パート2：SaaSへのFinOpsフレームワークの適用](<https://www.finops.org/wg/applying-the-finops-framework-to-saas/>)
  * パート3：SaaS向けFinOps：FOCUSの導入（本書）

## SaaS向けFinOpsとFOCUS

[FOCUS](<https://focus.finops.org/>)は、パブリッククラウド、データクラウド、インフラストラクチャ、SaaSプロバイダーなどのテクノロジープロバイダーが一貫した請求データセットを作成するための明確な要件を定義するオープンソースの仕様です。

[FinOps Foundation](<http://finops.org>)が支援するFOCUSは、FinOps実践者の複雑さを軽減し、データ駆動型の意思決定を推進して、組織がテクノロジー投資の価値を実現できるようにします。この仕様は、請求データが一貫して収集および正規化されるようにすることで、組織が支出をより効果的に管理できるように設計されています。これは、複数のソフトウェアソリューションにわたってコスト、使用量、パフォーマンスを最適化するために一貫したデータを必要とするSaaS購入者にとって、特に価値があります。

FOCUS仕様は、SaaS購入者に請求データを統合および正規化するための強力なツール群を提供し、テクノロジー投資の管理、監視、最適化を向上させます。この仕様を採用することで、SaaSプロバイダーは透明性への取り組みを示し、顧客がデータ駆動型の購買意思決定を行えるように支援できます。

SaaSを購入する企業にとって特に有用なFOCUS仕様の主要要素に関する詳細情報は、[FOCUSのWebサイト](<https://focus.finops.org/what-is-focus/>)をご覧ください。

### 請求データと使用量データの一元化

FOCUSは、異なるベンダー間で請求データと使用量データを正規化することにより、企業がSaaS支出を表示および分析する方法を簡素化します。これは、複数のSaaSプロバイダーを利用する場合に不可欠であり、多様なフォーマットや用語にわたる時間のかかるデータ加工（データラングリング：Data Wrangling）の必要性を排除します。例えば、BilledCost（請求コスト）、UsageQuantity（使用量）、AmortizedCost（アモルタイズコスト）などの[FOCUSの列（FOCUS Columns）](<https://focus.finops.org/focus-columns/>)を使用することで、企業はサービス間でコストを一律に測定および比較できます。

### 透明性と予測可能性

この標準仕様は、実績コストとアモルタイズコスト（平準化コスト）の両方に関する詳細なレポートを要求するため、SaaS購入者は予測可能な費用構造に基づいて十分な情報に基づいた意思決定を行えます。この透明性は、大規模なSaaSツールのポートフォリオを管理する上で極めて重要です。各サービスに関連するコストを理解することで、企業は消費量を調整し、予算を最適化できます。

### 実用的なインサイトの獲得

FOCUSはマルチプロバイダー互換性をサポートしており、多種多様な分析ツールに適用できる一貫したデータフォーマットを提供します。この互換性により、企業は主要なSaaSメトリクス（使用率や効率など）をより簡単に追跡し、コスト削減の取り組みを推進したり、必要に応じて投資の増額を正当化したりできる実用的なインサイトを作成できます。

### リアルタイムの監視

FOCUSを使用すると、企業は請求データを社内の分析システムやBI（Business Intelligence）ツールに取り込むことができ、SaaS消費のリアルタイムの監視が可能になります。この機能は、最新のデータに基づいてSaaSの使用量を最適化し、コストが制御不能になる前にサービスを調整するために不可欠です。

### プロバイダー間の比較可能性

FOCUSを使用すると、企業は異なるSaaSプロバイダー間でコストを一貫して比較できるため、ベンダーロックインのリスクを軽減できます。共通の仕様を持つことで、SaaS購入者は機能だけでなく、コストや使用効率についてもソリューションを比較できるようになり、より適切な調達（Procurement）の意思決定や、透明性のあるコスト構造に基づく契約交渉が可能になります。

## 結論

FOCUS仕様は、SaaS購入者にテクノロジー請求データを統合するための強力なツール群を提供し、投資の管理、監視、最適化を向上させます。この標準を採用することで、SaaSプロバイダーは透明性への取り組みを示し、顧客がデータ駆動型の購買意思決定を行えるように支援できます。

### 参加方法

  * [FOCUSプロジェクトへの参加](<https://focus.finops.org/contributing-members/>)
  * [SaaSプロバイダーにFOCUSへの準拠を要求するレターテンプレート](<https://www.finops.org/assets/requesting-focus-conformance-saas/>)
  * [現在FOCUS™をサポートしているベンダーの確認](<https://www.finops.org/landscape/?prod_TOOLS_SERVICES%5Btoggle%5D%5Bis_focus_adopter%5D=true>)

## 謝辞

本ホワイトペーパーの作成にご協力いただいた以下の方々に感謝いたします。

[ ![Ron Brill](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Ron Brill Anglepoint ](<https://www.linkedin.com/in/ronbrill/>) [ ![Rich Gibbons](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Rich Gibbons Synyega ](<https://www.linkedin.com/in/rich-gibbons-microsoft-licensing/>) [ ![George Arezina](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) George Arezina TAKEDA ](<https://www.linkedin.com/in/georgearezina/>) [ ![Victoria Levy](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Victoria Levy Alteryx ](<https://www.linkedin.com/in/victoriarlevy/>) [ ![Lorant Kiss](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Lorant Kiss Delivery Hero ](<https://www.linkedin.com/in/lorantkiss/>) [ ![Mike Coates](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Mike Coates Emirates ](<https://www.linkedin.com/in/coatesmike/>) [ ![Juan Van Heerden](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Juan Van Heerden Lloyds Banking Group ](<https://www.linkedin.com/in/juan-van-heerden-b962762/>) [ ![Keith Hiszem](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Keith Hiszem Cardinal Health ](<https://www.linkedin.com/in/keith-j-hiszem/>) [ ![Amy Ashby](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amy Ashby Under Armour ](<https://www.linkedin.com/in/amyashbymke/>) [ ![Laura Mills](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Laura Mills ManTech ](<https://www.linkedin.com/in/laura-mills-98737b105/>) [ ![Colin Jack](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Colin Jack Flexera ](<https://www.linkedin.com/in/cojack/>) [ ![Sumaira Nazir](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Sumaira Nazir Platform.sh ](<https://www.linkedin.com/in/sumaira-nazir93/>) [ ![Kris Wong](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kris Wong Surveil ](<https://www.linkedin.com/in/kristopherwong/>) [ ![Robert Nieuwenhuizen](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Robert Nieuwenhuizen McKinsey ](<https://www.linkedin.com/in/robertnieuwenhuizen/>) [ ![Stephen Old](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Stephen Old Synyega ](<https://www.linkedin.com/in/stephen-old-6ab15082/>) [ ![Salomé Keet](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Salomé Keet FNB South Africa ](<https://www.linkedin.com/in/salom%C3%A9-keet-ba2522a/>) [ ![Gregory Brinkerhoff](https://www.finops.org/wp-content/uploads/2022/10/persona-product.svg) Gregory Brinkerhoff Oracle ](<https://www.linkedin.com/in/gregory-brinkerhoff-4a4795/>)

最終更新日：2026年3月16日

##### 関連するFinOpsケイパビリティ

[ ライセンスとSaaS ](<https://www.finops.org/framework/capabilities/licensing-saas/>)

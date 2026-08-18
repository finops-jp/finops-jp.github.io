---
title: 使用量とコストの把握（Understand Usage & Cost）
---

[英語版]: https://www.finops.org/framework/domains/understand-usage-cost/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

[フレームワーク](<https://www.finops.org/framework/>) / [ドメイン](<https://www.finops.org/framework/domains/>) / 使用量とコストの把握

このドメインの成果は、組織が任意の[FinOpsスコープ](<https://www.finops.org/topic/scopes/>)内におけるテクノロジーの利用状況をより深く理解することです。

このドメインにおいて、組織はテクノロジーのコスト、使用量、およびその他のメトリクスに関する必要なすべての情報を収集し、データソース間で正規化します。また、コストセンター間でコストをどのように配賦するかを定義し、このドメインや他のドメインのすべてのペルソナがデータを利用できるようにレポートを定義します。

組織は、クラウドプロバイダーやその他のサービスプロバイダーからテクノロジーの使用量データを収集します。また、コスト、利用率、炭素排出量などの関連メトリクスを定義して収集し、テクノロジーのコストと使用量を分類、配賦、要約するために使用する組織のメタデータを文書化します。

このドメインは、組織内のすべてのコストと使用量を把握し、配賦することに焦点を当てています。他のすべてのドメインや組織の他の部門は、このドメインで生成された情報とインサイトをさまざまな目的で使用します。

**このドメインのケイパビリティは、組織が以下を行うのに役立ちます。**

  * 関連するすべてのテクノロジーコストと使用量データの特定、カタログ化、および取り込み
  * [FOCUS](<https://focus.finops.org/>)データセットを優先的に使用した、必要に応じたデータソース間でのデータ正規化
  * すべてのコストを内部のテクノロジー利用者に紐付けるための配賦戦略の定義
  * 共有コストとリソースを配賦するための手法とポリシーの定義
  * 一貫したレポートツール、パラメータ、および手法の作成と定義
  * ペルソナの活動領域に応じた、関連性の高いレポートデータの定義と配信
  * ITAM、ITIL、サステナビリティ、セキュリティなどの専門分野間の連携を含め、組織全体で専門分野間の連携に取り組む関連ペルソナのテクノロジーデータに関するニーズの理解と文書化

**このドメインは、以下の[FinOps原則](<https://www.finops.org/framework/principles/>)を直接サポートします。**

  * チームはお互いに協力する必要がある
  * すべての人が自分のテクノロジー利用に当事者意識を持つ
  * FinOpsデータはアクセスしやすくタイムリーで正確であるべき
  * 組織横断の専門チームが中心となりFinOpsを推進するべき

このドメインにより、組織は任意のFinOpsスコープにおけるテクノロジーの利用状況、支出の要因、およびその支出の責任者を把握できます。このドメインのアクティビティは、現在のテクノロジー利用状況の全体像と過去のトレンドの推移をサポートするデータを一貫して提供します。このデータは、組織の現在の成熟度レベルに適した、他のすべてのドメインをサポートする詳細さのレベルで提供されます。

**このドメインは以下の質問に答えます。**

  * 関連するすべてのテクノロジーカテゴリにおいて、どのようなテクノロジーを使用しているか
  * それに対してどれだけのコストを費やしているか
  * その使用が、炭素排出量や組織にとって重要なその他のメトリクスにどのような影響を与えているか
  * 組織内の誰がその使用量とコストに対して責任を負っているか
  * すべての[FinOpsペルソナ](<https://www.finops.org/framework/personas/>)が、そのコストと使用量データにどのようにアクセスできるか

##### ドメインのケイパビリティ

[ ![](https://www.finops.org/wp-content/uploads/2024/03/Data-Ingestion.svg) データ取り込み ](<https://www.finops.org/framework/capabilities/data-ingestion/>) [ ![](https://www.finops.org/wp-content/uploads/2024/03/Allocation.svg) 配賦 ](<https://www.finops.org/framework/capabilities/allocation/>) [ ![](https://www.finops.org/wp-content/uploads/2024/03/Reporting-Analytics.svg) レポートと分析 ](<https://www.finops.org/framework/capabilities/reporting-analytics/>) [ ![](https://www.finops.org/wp-content/uploads/2024/03/Anomaly-Management.svg) 異常管理 ](<https://www.finops.org/framework/capabilities/anomaly-management/>)

---
title: 米国公共セクター向けFinOpsプレイブック（U.S. Public Sector FinOps Playbook）
---

[英語版]: https://www.finops.org/wg/us-gov-playbook/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

**概要**

「米国公共セクター向けFinOpsプレイブック」は、標準的なFinOpsフレームワーク（FinOps Framework）をベースに、連邦政府機関が急速に増加するクラウド支出を管理、予算編成（Budgeting）、予測（Forecasting）、および最適化（Optimization）するためのガイダンスを提供します。クラウドサービスの調達や利用時に発生する「減衰（摩擦）」の最小化に焦点を当て、政府調達や運用の独自の制約の中でFinOpsのコア原則がどのように適用されるかを解説します。FinOps実践者（FinOps Practitioner）は、エンジニアリング（Engineering）、財務（Finance）、調達の各チーム間のコラボレーションを積極的に推進し、クラウド支出に関する意思決定がデータに基づいて行われ、機関にとって最大のビジネス価値に整合するように行動する必要があります。

政府のクラウド市場は2019年に149億3,000万ドルと評価され、2025年には418億6,000万ドルに達すると予想されています。クラウド支出の増加に伴い、管理、予算編成、予測、および最適化の必要性がさらに高まっています。クラウド財務管理（Cloud Financial Management）とも呼ばれるFinOpsは、エンジニアリング、財務、技術、ビジネスの各チームがデータ駆動型の支出決定について協力できるよう支援することで、組織が最大のビジネス価値を得ることを可能にします。

[この米国公共セクター向けFinOpsプレイブック](<https://www.finops.org/wp-content/uploads/2022/10/FinOps-Foundation_US-Gov-Playbook.pdf>)は、既存のFinOpsフレームワークを拡張し、連邦政府機関のクラウド支出管理を支援することを目的としています。さまざまな政府機関やクラウド分野における長年の経験から、私たちはクラウドの調達や利用の際に「減衰」が生じる可能性があることに気づきました。

![](https://www.finops.org/wp-content/uploads/2022/10/us-gov-playbook.png)

プレイブックで提供するプレイ（施策）やガイダンスの一部が、高レベル（抽象的）な内容にとどまっていることは認識しています。そのため、今後は「専門的なプレイ」を追加して、このプレイブックをさらに拡充していく予定です。

以下の詳細情報については、定期的にご確認ください。

  * 公共セクターにおけるクラウドの予測と予算編成
  * 公共セクターにおけるクラウドの調達（Acquisition）
  * 機密環境またはクロス機密環境におけるFinOpsの運用

[プレイブックを読む](<https://www.finops.org/wp-content/uploads/2022/10/FinOps-Foundation_US-Gov-Playbook.pdf>)

## 謝辞

FinOps Foundationは、ワーキンググループの熱心なメンバーに感謝の意を表します。

[ ![Melvin Brown](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Melvin Brown（米国政府人事管理局：OPM） ](<https://www.linkedin.com/in/melvinbrownii/>) [ ![Amanda Dalton](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amanda Dalton（Deloitte） ](<https://www.linkedin.com/in/amanda-dalton-0564a295/>) [ ![William Nieusma](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) William Nieusma（AgileTrailblazers） ](<https://www.linkedin.com/in/williamnieusma/>) [ ![Rob Martin](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Rob Martin（FinOps Foundation） ](<https://www.linkedin.com/in/robmartin3/>) [ ![Florence Kasule](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Florence Kasule（米国デジタルサービス：USDS） ](<https://www.linkedin.com/in/florence-kasule-3626192/>) [ ![Tim Siegel](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Tim Siegel（PBG Consulting） ](<https://www.linkedin.com/in/timsiegel/>) [ ![Tim Cooke](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Tim Cooke（ASI） ](<https://www.linkedin.com/in/twcooke/>) [ ![Daniel York](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Daniel York（一般調達局：GSA） ](<https://www.linkedin.com/in/daniel-york-815028b6/>) [ ![Ylanda Hill](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Ylanda Hill（住宅都市開発省：HUD） ](<https://www.linkedin.com/in/ylanda-08ab3347/>)

![Christian MacMillan](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E)

#### Christian MacMillan

行政管理予算局（OMB）

[ ![Chris Gomba](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Chris Gomba（行政管理予算局：OMB）  ](<https://www.linkedin.com/in/christopher-f-gomba-24250277/>) [ ![Jamal Rittenberr](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jamal Rittenberr（行政管理予算局：OMB） ](<https://www.linkedin.com/in/jamal-rittenberry-2853689b/>) [ ![Sina Farahani](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Sina Farahani（Deloitte）  ](<https://www.linkedin.com/in/sina-farahani-114b85ab/>) [ ![Thomas Santucci](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Thomas Santucci（一般調達局：GSA） ](<https://www.linkedin.com/in/santucci/>)

最終更新日: 2025年10月9日

###### [基礎を学ぶ FinOps認定プロフェッショナル（FinOps Certified Practitioner）で知識をレベルアップする 始める  ![基礎を学ぶ](https://www.finops.org/wp-content/uploads/2025/12/certified-practitioner.svg) ](<https://learn.finops.org/path/finops-certified-practitioner-self-paced>)

##### 関連するFinOpsケイパビリティ

[ FinOpsの教育と普及促進 ](<https://www.finops.org/framework/capabilities/finops-education-enablement/>) [ FinOpsプラクティスの運用 ](<https://www.finops.org/framework/capabilities/finops-practice-operations/>)

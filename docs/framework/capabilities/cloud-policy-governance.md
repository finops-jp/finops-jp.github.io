---
title: クラウドポリシーとガバナンス
---

[英語版]: https://www.finops.org/framework/capabilities/cloud-policy-governance/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

# クラウドポリシーとガバナンス

ポリシー、制御、ガバナンス メカニズムを確立して進化させ、クラウドの使用がビジネス目標と一致し、規制要件に準拠し、クラウド リソースを効率的に最適化できるようにします。

> クラウドポリシーの策定
> 
> - 優先、必須、および制限のあるクラウド サービスとテクノロジを指定します
> - データストレージのライフサイクルと保持ポリシーを定義する
> - テクノロジーの最新化ライフサイクルポリシーを定義する
> - テクノロジーと支出に基づくコミットメントポリシーを定義する
> 
> クラウドガバナンスの確立
> 
> - ガバナンス ツールの要件を指定する
> - ガバナンス手順の定義

## 定義

ポリシーとガバナンスは、一連の意図の表明と、それに関連する遵守の保証と考えることができます。

クラウドポリシーは、明確な意図の表明であり、ビジネス価値をある程度向上させるように設計された標準モデルに従って、特定のクラウド関連アクティビティの実行を記述します。

Cloud Governance は、Cloud Policy で説明されているようにアクティビティを制御して、望ましい動作と結果を促進することを目的とした一連のプロセス、ツール、またはその他のガードレール ソリューションです。

優れたポリシーとガバナンスを組み合わせることで、Cloud FinOps の活動をオーケストレーションし、指揮するメカニズムが得られます。

良いことが自然に起こり、それらに注意や制御が加えられない世界を想像することは可能です。しかし、ほとんどのビジネス状況では、正しいことは、人々がそれを行うように指示されたり、触発されたりし、行動とその結果が監視され、彼らの行動から生じるいくつかの(ポジティブまたはネガティブな)結果がある場合にのみ起こります。

FinOps カルチャーとは、クラウド テクノロジーからビジネス価値を引き出すことを目的とした一連の態度と行動です。データセンターの文化からこれに移行することは、FinOpsの主要な課題の1つです。ポリシーとガバナンスは、FinOps文化を確立し維持する方法です。実際、それはすべての文化が確立され、維持される方法です。認識可能な文化を持つ組織を考えれば、効果的なポリシーとガバナンスのフレームワークが見つかります。

したがって、ポリシーとガバナンスのフレームワークが重要である理由に対する簡単な答えは、ポリシーとガバナンスのフレームワークがなければ、組織はクラウドからビジネス価値を持続的に提供できないということです。

クラウドポリシーとガバナンスは、クラウドFinOpsの実践を成功させるための重要な要素です。彼らは、クラウド内の活動をビジネス全体の目標と戦略に合わせ、ROIを最大化するためにクラウドリソースのデプロイと使用を制御するために働きます。クラウドのコストが予測可能で管理可能であることを保証でき、Cloud Policy & Governance を使用して、組織全体でのベスト プラクティスの一貫した採用をサポートし、既知の脅威とリスクに対する多層防御をサポートできます。

ガバナンスには、ポリシーを施行および制定するためのメカニズムと、利害関係者によって定義および合意されたコンプライアンスを測定するためのKPIの両方が含まれます。FinOpsの目標に沿ったKPI(例:コミットメントでカバーされるコンピューティングコストの80%、トレーニングを受けたチームの70%など)は、組織にとって最も価値のある行動を推進するために、すべてのペルソナと透過的に共有されます。この可視性により、組織が正しい軌道に乗っていることが保証され、そうでない場合は是正措置が必要な領域が特定されます。

追跡する指標が多すぎると、ノイズが発生して何もしないのを避けることが重要です。いくつかの強力な指標を開始することは、行動を起こすためのより良い選択肢かもしれません。コンプライアンス KPI は、FinOps の目標に適応するために、時間の経過とともに進化します。

Cloud Policy & Governance は、他の機能との多くの相互作用を持ち、Reporting & Analytics で報告できる良好な行動のガードレールを提供し、FinOps Education & Enablement での作業が必要な改善の機会を特定したり、Optimize Cloud Usage & Cost ドメインの機能の 1 つで作業が必要となる可能性があります。また、IT セキュリティ、IT 資産管理、クラウド センター オブ エクセレンス、DevOps プラットフォームと共有サービス チームなど、組織内の他の運用ポリシーやガバナンスの推進要因との強力な相互作用も発生します。これらのグループはすべて、クラウド内外で一貫した良好な行動を目指しています。

## 成熟度評価

### クロール

- クラウドポリシーとガバナンスは、全体的なビジネスポリシーの一部として存在します。ポリシーは、ビジネス価値に対する最も重要なリスクを制御することを目的としています
- 基本的な使用方法や料金の最適化などは、個々のエンジニアリングチームや製品に適用されます。
- 手動で、アドホックで、主に事後対応型のポリシーを作成するだけで十分です
- 手動で配布される静的なコンテンツとポリシーに関するトレーニング
- 手動による分析とレポート作成で十分です

### ウォーク

- クラウドポリシーとガバナンスの対策は、拡大され、標準化されています。現在、ベストプラクティスはビジネス全体に配布され、採用されています
- 部門間のコラボレーション。既存の組織のポリシーおよび標準との統合
- 定期的なレビューの頻度、プロアクティブなFinOpsポリシー
- ポリシーに関するトレーニングは、適切なペルソナが受ける定期的なトレーニングに統合されています
- ベンダーが提供する自動分析ツールを使用して、ガバナンスを自動化します

### ラン

- クラウドポリシーとガバナンスは、現在、全体的なビジネス戦略と密接に統合されています
- 現在、すべてのレベルのビジネスは、組織の戦略と目標に沿った方法で運営されています
- 継続的な自動化されたポリシーコンプライアンスレビューとトレンド
- 新しいアーキテクチャ概念との統合により、通貨性を確保
- マルチクラウド/エンリッチド正規化されたインサイト&自動化ソリューション

## 機能的なアクティビティ

### FinOpsプラクティショナー

FinOpsチームの一員として、私は...

- クラウドポリシーに関する可視性と教育を、すべてのペルソナの利害関係者に確実に提供
- 必要に応じてポリシーのコンプライアンスをサポートするためのガバナンスの実装を調整する
- 私の管理領域で実施されたサポートポリシーとガバナンス
- ペルソナグループ間のコラボレーションを促進し、他のFinOps Capabilityの出力へのアクセス

### エンジニアリング

エンジニアリングの役割を担う者として、私は...

- クラウドポリシーを実装し、システムの進化に合わせて改善を推奨します
- 必要に応じて是正措置計画を実施する
- 私の管理領域で実施されたサポートポリシーとガバナンス

### 財務

財務の役割を担っている者として、私は...

- 財務に関連するKPIの精緻化に参加する
- 私の管理領域で実施されたサポートポリシーとガバナンス

### 調達

調達の役割を担う者として、私は...

- 私の管理領域で実施されたサポートポリシーとガバナンス

### プロダクト

製品の役割を担う者として、私は...

- 私の管理領域で実施されたサポートポリシーとガバナンス

### リーダーシップ

リーダーシップの役割を担う者として、私は...

- 組織の価値に応じたクラウドポリシーの慎重な指示
- ポリシーの遵守を強制し、奨励する
- ポリシーのコンプライアンスを強化および奨励するために導入されたガバナンスをサポートします

## 成功の尺度とKPI

- クラウドポリシーの遵守:クラウドポリシーに準拠したリソースのコスト/リソースの総コスト

## 入力と出力

### 統治

ガバナンスは、次の方法でポリシーを実装します。

- ガイドライン – ポリシーの実施とその達成方法に関するベストプラクティスを定めたものです。これらは勧告であり、必須ではありません
- ガードレール – ポリシーに準拠した行動のための必須の経路を定義する正式なプロセスと構造、場合によってはコンプライアンス違反に対する結果
- 自動化 – ポリシーの実装を自動化し、コンプライアンスアクションの実行方法を制御するプロセス。

優れたクラウド ガバナンス対策の例としては、次のようなものがあります。

「毎月末に、使用率がゼロのクラウドリソースを通知します。これらは、保持の理由を提供してこのプロセスからオプトアウトしない限り、次の火曜日に当社によって廃止されます。」

### 政策

ポリシーが不適切に考案または表現されている場合、疑わしい権限がある場合、実際には役立つには広すぎるまたは一般的すぎる場合、または組織の利益に不釣り合いなコストを組織に課す場合、それは悪いポリシーです。
適切なポリシーステートメントの例としては、次のようなものがあります。

- 「当社のポリシーは、最適化されたクラウド使用量の80%以上を割引料金プランでカバーすることです」
- 「私たちのポリシーは、ビジネス価値をもたらさないクラウドリソースを廃止することで、無駄な支出を削減することです」

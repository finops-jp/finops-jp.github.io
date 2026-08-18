---
title: "コンテナコスト配分ラベルと辞書（Container Cost Allocation Labels and Dictionary）"
---

[英語版]: https://www.finops.org/wg/container-cost-allocation/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

## はじめに

当プロジェクト（Container Cost Allocation project）は、コンテナのコスト配分に関して、FinOps実践者に向けたガイダンスやベストプラクティスを作成することに焦点を当てています。

この最初の成果物では、すぐに使用でき、有用なスキーマに組み合わせることができる推奨コンテナラベルを提供します。また、このリソースを通じて、コンテナのコスト配分におけるラベル付け、スキーマ、ベストプラクティスに関するコミュニティでの議論を促し、貢献や将来の改善につながることを期待しています。

*2022年9月のサミットにおいて、ワーキンググループ（Working Group）はコンテナコスト配分ラベルスキーマツールを発表しました。*

当グループは、そのプレゼンテーションの最も重要な部分を、FinOpsコミュニティ向けのインタラクティブなツールに変換することを決定しました。

## 本リソースの使用方法

このインタラクティブな辞書を使用して、ワーキンググループ（WG）がコミュニティの貢献から収集した一般的なコンテナのラベル付けを学習できます。これらの辞書カードを組み合わせてスキーマを構築し、「ラベルエイリアス（Label alias）」を介して、類似した名前のラベルが特定のラベルと同様の目的を持つ可能性があるマッピングのバリエーションを学習できます。

  * **各フィルターをクリックする**と、選択したパラメーターでカードをソートできます。
  * **フィルターの選択を解除する**と、カードのソート方法を変更できます。例えば、*クロール（crawl）*パラメーターの選択を解除すると、*クロール*ラベルを持つカードを検索するフィルターが解除されます。

**注意：** コンテナコスト配分のラベル付けやスキーマは、ユースケース、目標、最適化、クラウドサービスプロバイダーが異なる組織間で大きく異なる場合があります。ここでの目的は、コンテナコスト配分の課題にどのように取り組むかについて、推奨される一例を提供することです。

**FinOpsペルソナでフィルター：**

エグゼクティブ（Executives）／ビジネス・プロダクトオーナー（Business/Product Owner）／エンジニア・運用（Engineers/Operations）／財務・調達（Finance/Procurement）

**FinOps成熟度レベルでフィルター：**

クロール（Crawl）／ウォーク（Walk）／ラン（Run）

詳細については、[FinOpsペルソナ](https://www.finops.org/framework/personas)および[成熟度モデル](https://www.finops.org/framework/maturity-model)に関するコミュニティドキュメントを参照してください。  

### application

アプリケーションアーキテクチャの階層に基づいて支出を整理するためのラベル。

**クロール**

**エグゼクティブ**

**ビジネス**

**コンテキスト：** アプリケーション／サービス階層

**一般的なリソース：** namespace, pod, deployment

**エイリアス：** _application, app, application-name, application-id_

**例：** `ACME Fitness`

[GitHubで見る](https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-schemas/deployment-crawl.yaml)

### cost-center

コストセンターはビジネス構造に準拠し、企業の経費を発生させているさまざまな領域を定義するのに役立ちます。

**クロール**

**財務**

**コンテキスト：** ビジネス組織

**一般的なリソース：** namespace, pod, deployment

**エイリアス：** _psp-element, cost-center_

**例：** `英数字のコードなど`

[GitHubで見る](https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-schemas/deployment-crawl.yaml)

### team

チームラベルは、その支出に責任を持つ組織内のグループを特定するのに役立ちます。

**クロール**

**エグゼクティブ**

**ビジネス**

**エンジニアリング**

**財務**

**コンテキスト：** ビジネス組織

**一般的なリソース：** namespace, pod, deployment

**エイリアス：** _team, squad, group, owner, maintainer, contact_

**例：** `[チーム名] [チームID]`

[GitHubで見る](https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-schemas/deployment-crawl.yaml)

### product

プロダクトラベルは、企業の顧客が消費する「プロダクト」に合わせて支出を整理します。このラベルは、プロダクトを支えるアプリケーションやサービスの整理に役立ちます。

**ウォーク**

**ビジネス**

**財務**

**コンテキスト：** アプリケーション／サービス階層

**一般的なリソース：** namespace, pod, deployment

**エイリアス：** _product, workload, project_

**例：** `ACME Fitness Store, ACME Fitness + Video Streaming`

[GitHubで見る](https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-schemas/deployment-walk.yaml)

### department

デパートメントはビジネス組織に適用されます。一部の組織ではビジネスユニット（Business Unit）などの用語を使用します。その意味は組織によって大きく異なります。

**ウォーク**

**ビジネス**

**財務**

**コンテキスト：** ビジネス組織

**一般的なリソース：** namespace, pod, deployment

**エイリアス：** _business-unit, department, business-domain, domain_

**例：** `retail BU, streaming BU`

[GitHubで見る](https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-schemas/deployment-walk.yaml)

### environment

エンバイロメントは売上原価（COGS）の計算をサポートし、組織がコードをデプロイする方法（例：本番環境と開発環境など）に合わせます。

**ウォーク**

**ビジネス**

**エンジニアリング**

**コンテキスト：** プラットフォーム ＋ 運用

**一般的なリソース：** namespace, pod, deployment

**エイリアス：** _stage, environment, env_

**例：** `dev, staging, prod`

[GitHubで見る](https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-schemas/deployment-walk.yaml)

### customer

カスタマーラベルは、プロダクトやサービスを消費している顧客を特定できます。これにより、マルチテナント環境やサイロ化されたテナント環境をサポートできます。

**ウォーク**

**ビジネス**

**エンジニアリング**

**コンテキスト：** ビジネス組織

**一般的なリソース：** namespace, pod, deployment

**エイリアス：** _customer_

**例：** `[顧客ID] または [顧客名]`

[GitHubで見る](https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-schemas/deployment-walk.yaml)

### service

サービスラベルは、企業がプロダクトやアプリケーションをサブコンポーネントに整理する方法について、アプリケーション／サービス階層にレイヤーを追加します。

**ラン**

**エンジニアリング**

**財務**

**コンテキスト：** アプリケーション／サービス階層

**一般的なリソース：** pod, deployment

**エイリアス：** _service, service-id_

**例：** `Point of Sale, Store Shopping Cart, Store Catalog`

[GitHubで見る](https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-schemas/deployment-run.yaml)

### component

コンポーネントラベルは、アプリケーションやサービスをサポートする「マイクロサービス／コンポーネント／機能」を企業がどのように整理するかに基づいて、アプリケーション／サービス階層にレイヤーを追加します。

**ラン**

**ビジネス**

**エンジニアリング**

**コンテキスト：** アプリケーション／サービス階層

**一般的なリソース：** namespace, pod

**エイリアス：** _component, tier_

**例：** `database, storage`

[GitHubで見る](https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-schemas/deployment-run.yaml)

### tech-stack

テックスタックは、目的に応じて支出の文脈をプラットフォームや運用の視点に関連付けるのに役立ちます。

**ラン**

**ビジネス**

**エンジニアリング**

**財務**

**コンテキスト：** プラットフォーム ＋ 運用

**一般的なリソース：** namespace, pod, deployment

**エイリアス：** _stack, servicegroup_

**例：** `observability, build-tools, automation, security`

[GitHubで見る](https://github.com/finopsfoundation/sig-containers/blob/main/wg-container-cost-allocation/label-schemas/deployment-run.yaml)

### コンテナクラウドサービスプロバイダー

ハイブリッドおよびマルチクラウドのデプロイでは、コンテナが実行されているクラウドサービスプロバイダーまたはデータセンターを特定するためのタグを追加します。

**ウォーク**

**エンジニアリング**

**コンテキスト：** エンジニアリング、およびコンテナ化サービスをオーケストレーションする担当者

### call-for-contribution

ランステージのエグゼクティブに対して、どのようなコンテナのラベル付けが情報やコンテキストの追加に役立つでしょうか。こちらから貢献してください！

**ラン**

**エグゼクティブ**

**コンテキスト：** ビジネス組織

**一般的なリソース：** namespace, pod, deployment

**エイリアス：** _TBD_

**例：** `TBD`

## 貢献する方法

FinOps実践者は2つの方法で貢献できます。このカードのコレクションは、より多くの生の情報やスクリプトを処理するワーキンググループのリポジトリとは別に管理されています。将来的にこれらすべてのコンテンツを単一の信頼できる情報源（Source of Truth）から取得できるように取り組んでいますが、どなたでもこれらどちらのリポジトリへの貢献も歓迎します。

**要約：**

  * [このリポジトリ](https://github.com/finopsfoundation/framework)に貢献すると、ウェブサイトのコンテンツ（上記のカード）が編集されます。
  * [このリポジトリ](https://github.com/finopsfoundation/sig-containers)に貢献すると、ソースコードの例やワーキンググループの生コンテンツが編集されます。

推奨事項を伝えるためにIssueを作成するか、「Make a Suggestion（提案の作成）」を行ってサイトの編集を提案してください。

## 謝辞

FinOps Foundationは、ワーキンググループの熱心なメンバーに感謝の意を表します。

[ ![Erik Peterson](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Erik Peterson（CloudZero） ](https://www.linkedin.com/in/erikpeterson/) [ ![Stephen Arthur](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Stephen Arthur（Coinbase） ](https://www.linkedin.com/in/stephenarthursaur/) [ ![Stuart Davidson](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Stuart Davidson（Skyscanner） ](https://www.linkedin.com/in/spedge/) [ ![Pavan Chavva](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Pavan Chavva（VMware） ](https://www.linkedin.com/in/pkchavva/) [ ![David Sterz](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) David Sterz（Mindcurv） ](https://www.linkedin.com/in/david-sterz-679a938/) [ ![Noah Abrahams](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Noah Abrahams（Oracle） ](https://www.linkedin.com/in/noahabrahams/) [ ![Dhanabalaji \(Bala\) Kaliamurthy](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Dhanabalaji (Bala) Kaliamurthy（IBM Cloudability） ](https://www.linkedin.com/in/dhanabalaji-kaliamurthy-20156ab/) [ ![Roi Ravhon](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Roi Ravhon（Finout） ](https://www.linkedin.com/in/roiravhon/) [ ![Hannah Raikes](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Hannah Raikes（Cisco） ](https://www.linkedin.com/in/hannah-raikes/) [ ![Sean Pomeroy](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Sean Pomeroy（Stackwatch） ](https://www.linkedin.com/in/srpomeroy/) [ ![Jonathan Morin](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Jonathan Morin（Datadog） ](https://www.linkedin.com/in/jonathanmorin/) [ ![Dan Casson](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Dan Casson（Pivot Technology） ](https://www.linkedin.com/in/dancasson2022/) [ ![Laila Majidi](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Laila Majidi（Georgia-Pacific） ](https://www.linkedin.com/in/lailamajidi/) [ ![Kevin Mueller](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Kevin Mueller（CloudZero） ](https://www.linkedin.com/in/kevinmueller/) [ ![Casey Doran](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Casey Doran（Apptio, an IBM Company） ](https://www.linkedin.com/in/dcdoran/)

![Mike Giacommetti](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E)

#### Mike Giacommetti

[ ![Rachel Dines](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Rachel Dines（Chronosphere） ](https://www.linkedin.com/in/rdines/) [ ![Peter Treese](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Peter Treese（DXC） ](https://www.linkedin.com/in/peter-treese/) [ ![Matt Leonard](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Matt Leonard（Oracle） ](https://www.linkedin.com/in/mgl001/) [ ![Chris Aniszczyk](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Chris Aniszczyk（CNCF） ](https://www.linkedin.com/in/caniszczyk/) [ ![Debo Aderibigbe](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Debo Aderibigbe（Netflix） ](https://www.linkedin.com/in/deboaderibigbe/)

最後に、私たちの取り組みを実現に導いてくれたFinOps Foundationサポートチームに深く感謝します：Ashley Hromatko（スタッフスポンサー）、Samantha White（プログラム管理）、Tom Sharpe（デザイン）、Andrew Nhem（コンテンツ）。

最終更新日：2026年3月16日

##### 関連するFinOpsケイパビリティ

[ 割り当て ](https://www.finops.org/framework/capabilities/allocation/)

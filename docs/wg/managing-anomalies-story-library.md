---
format: md
title: "異常管理ストーリー集（Managing Anomalies Story Collection）"
---

[英語版]: https://www.finops.org/wg/managing-anomalies-story-library/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

他のFinOps実践者（FinOps Practitioner）がこのケイパビリティ（Capability）をどのように実装しているかをより深く理解するために、この異常管理（Managing Anomalies）ストーリー集を活用してください。これらのストーリーは、異常管理ワーキンググループ（Managing Anomalies Working Group）が厳選して収集しました。[Slackコミュニティ](<https://finopsfoundation.slack.com/archives/C044FHU7V0X>)でメンバーと交流し、クラウドコスト（Cloud Cost）の異常について語り合いましょう。

最終更新日：2026年3月17日

##### 関連するFinOpsケイパビリティ

[ 異常管理 ](<https://www.finops.org/framework/capabilities/anomaly-management/>)

[ ![](https://www.finops.org/wp-content/uploads/2024/04/FinOps-Assets-Story-Featured-v1.png) 料金モデル変更の影響への対応：BigQueryの例 検出や予測が困難であったGCP BigQueryの料金モデル変更に、あるFinOps実践者がどのように適応したかを紹介します。 ストーリー ](<https://www.finops.org/assets/navigating-impact-of-pricing-model-changes-bigquery-example/>) [ ![](https://www.finops.org/wp-content/uploads/2024/04/FinOps-Assets-Story-Featured-v1.png) AWS Lambdaの無限ループの検知と防止 制御不能になったAWS Lambda関数は、予期しないコストを大量に発生させる可能性があります。この実践者がどのようにしてこれらの異常を防いでいるかを紹介します。 ストーリー ](<https://www.finops.org/assets/catching-and-preventing-aws-lambda-looping/>) [ ![](https://www.finops.org/wp-content/uploads/2024/04/FinOps-Assets-Story-Featured-v1.png) 不十分なボリュームテストがAWS S3料金を急増させる理由 AWS S3に関して、アプリケーション設計と中央ポリシーの決定を個別に進めた結果、発生した予期せぬコストについて解説します。 ストーリー ](<https://www.finops.org/assets/how-inadequate-volume-testing-spikes-aws-s3-charges/>) [ ![](https://www.finops.org/wp-content/uploads/2024/04/FinOps-Assets-Story-Featured-v1.png) AWS Lambdaコストの暴走への警戒 あるFinOps実践者が、暴走するAWS Lambdaのコストを特定し、エンジニアに通知して潜在的な異常に対する意識を高めた方法を紹介します。 ストーリー ](<https://www.finops.org/assets/beware-of-runaway-aws-lambda-costs/>) [ ![](https://www.finops.org/wp-content/uploads/2024/04/FinOps-Assets-Story-Featured-v1.png) 暴走するAWS RDS/SQLコストの抑制 AWS RDSインスタンスがコミットメントベースの割引でカバーされていると考えていても、異常が発生する可能性は依然としてあります。 ストーリー ](<https://www.finops.org/assets/wrangling-runaway-aws-rds-sql-costs/>) [ ![](https://www.finops.org/wp-content/uploads/2024/04/FinOps-Assets-Story-Featured-v1.png) 異常なデータ分析コストの暴走への対処 あるFinOps実践者が、データ分析ワークフローによって発生したGCP BigQueryの超過料金を特定し、阻止した方法を紹介します。 ストーリー ](<https://www.finops.org/assets/tackling-anomalous-runaway-data-analysis-costs/>)

## 貢献者への謝辞

[ ![Dmitry Kizilov](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Dmitry Kizilov Align Technology ](<https://www.linkedin.com/in/dmitry-kizilov/>) [ ![Ian Foster](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Ian Foster Marsh McLennan ](<https://www.linkedin.com/in/ianfosterbristol/>) [ ![Usha Ganesh](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Usha Ganesh Electronic Arts ](<https://www.linkedin.com/in/uganesh/>) [ ![Nikita Gambashidze](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Nikita Gambashidze SAP ](<https://www.linkedin.com/in/nikita-gambashidze-1a67a11b7/>) [ ![Keith Knowles](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Keith Knowles Envisor ](<https://www.linkedin.com/in/keithdavidknowles/>) [ ![Mark Syznaka](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Mark Syznaka CloudeBroker ](<https://www.linkedin.com/in/markszynaka/>) [ ![Angel Alves](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Angel Alves Saint-Gobain ](<https://www.linkedin.com/in/alvesangel/>) [ ![Brian Gladden](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Brian Gladden Monkey Industries Consulting ](<https://www.linkedin.com/in/briangladden/>)

TAC連絡担当（TAC Liaison）のBindu Sharma氏、およびサポーターとインタビュー協力者であるDr. Maneesha Asundi氏、Amy Ashby氏、Courtney Bormann氏に感謝いたします。

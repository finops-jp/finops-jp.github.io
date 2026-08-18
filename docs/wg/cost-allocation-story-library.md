---
title: コスト配分ストーリー集（Cost Allocation Story Collection）
---

[英語版]: https://www.finops.org/wg/cost-allocation-story-library/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

他のFinOps実践者がこのケイパビリティをどのように実装しているかをより深く理解するために、このコスト配分に関するストーリー集を活用してください。これらのストーリーは、コスト配分ワーキンググループ（Cost Allocation Working Group）が厳選して収集したものです。

最終更新日：2026年3月16日

##### 関連するFinOpsケイパビリティ

[ 割り当て ](<https://www.finops.org/framework/capabilities/allocation/>)

[ ![](https://www.finops.org/wp-content/uploads/2024/04/FinOps-Assets-Story-Featured-v1.png) トラフィックに基づく共有コストの配分方法：マルチテナントサービスのトラフィックにおけるクラウドコスト配分のベストプラクティスを紹介します。 ストーリー ](<https://www.finops.org/assets/how-to-allocate-shared-cost-based-on-traffic/>) [ ![](https://www.finops.org/wp-content/uploads/2024/04/FinOps-Assets-Story-Featured-v1.png) 多次元的なコストショーバックの提供方法：リソース、マイクロサービス、テナントの各視点を使用して、クラウドコストを正確に配分する方法を学びます。 ストーリー ](<https://www.finops.org/assets/how-to-provide-multidimensional-cost-showback/>) [ ![](https://www.finops.org/wp-content/uploads/2024/04/FinOps-Assets-Story-Featured-v1.png) 財務プロセスがFinOpsに追いつくべき理由：従来の財務手法において、クラウドコストをより適切に配分するためにFinOpsの視点や実践方法を取り入れるべき理由を説明します。 ストーリー ](<https://www.finops.org/assets/why-finance-processes-need-to-catch-up-to-finops/>) [ ![](https://www.finops.org/wp-content/uploads/2024/04/FinOps-Assets-Story-Featured-v1.png) Old MutualにおけるFinOpsの歩み：チャージバックとコスト配分への取り組み：大規模な金融組織が、FinOpsのチャージバックとコスト配分を大規模に管理する方法を紹介します。 ストーリー ](<https://www.finops.org/assets/finops-journey-at-old-mutual-addressing-chargeback-and-cost-allocation/>) [ ![](https://www.finops.org/wp-content/uploads/2024/04/FinOps-Assets-Story-Featured-v1.png) コスト配分の健全化がもたらすFinOpsの連鎖効果：FinOpsのコスト配分におけるベストプラクティスから始めることで、他のクラウドコスト最適化の健全化や文化的な改善がどのように促進されるかを紹介します。 ストーリー ](<https://www.finops.org/assets/cascading-finops-impacts-of-cost-allocation-hygiene/>) [ ![](https://www.finops.org/wp-content/uploads/2024/04/FinOps-Assets-Story-Featured-v1.png) セグメンテーションがもたらすFinOpsの劇的な変化：AzureおよびAWSでセグメンテーションを使用してコストを配分し、コスト配分の自動化に向けた基盤を構築する事例を紹介します。 ストーリー ](<https://www.finops.org/assets/segmentation-can-be-a-finops-game-changer/>)

## 貢献者への謝辞

[ ![Alex Dominic Savio](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Alex Dominic Savio Micro Focus ](<https://www.linkedin.com/in/alex-dominic-savio-dev-ops-sols-expert/>) [ ![Mike Ebels](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Mike Ebels Fidelity Investments ](<https://www.linkedin.com/in/michael-ebels-0a73831a/>) [ ![Tatum Tummins](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Tatum Tummins Kion ](<https://www.linkedin.com/in/tatum-tummins-45513986/>) [ ![Larry Advey](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Larry Advey CloudZero ](<https://www.linkedin.com/in/ladvey/>) [ ![Amit Doshi](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Amit Doshi PSEG ](<https://www.linkedin.com/in/amitdoshi3280/>) [ ![Omshree Butani](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Omshree Butani Intuitive.cloud ](<https://www.linkedin.com/in/omshree-butani/>)

サポーターであるPeter Brent、Janine Pickard-Green、Joshua Varney、Brian Robbins、およびストーリーの著者であるJacqui Wilson、Abhishek Jain、Anderson Oliveira、Maneesha Asundi、Mark Szynakaの各氏にも感謝いたします。

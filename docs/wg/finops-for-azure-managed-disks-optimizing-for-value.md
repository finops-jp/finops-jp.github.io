---
title: "Azure Managed DisksにおけるFinOps：価値の最適化（FinOps for Azure Managed Disks: Optimizing for Value）"
---

[英語版]: https://www.finops.org/wg/finops-for-azure-managed-disks-optimizing-for-value/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

**概要：**

使用済みディスク容量と利用可能なディスク容量、およびプロビジョニング済みIOPSと使用済みIOPSの両方を分析してストレージの無駄を定量化し、Azure Managed Disksの真の費用対効果（コストパフォーマンス比）を把握します。主要な対策の1つは、適用可能な場合にPremium V2 Disksへ移行することです。Premium V2 Disksは、きめ細かなサイズ設定と独立したIOPSプロビジョニングを提供するため、Premium (V1) Disksと比較して大幅なコスト削減を実現できます。FinOps実践者は、継続的な見直しと最適化の活動をFinOpsライフサイクルのオペレート（Operate）フェーズに組み込む必要があります。これにより、一貫したライトサイジング（適切なサイズへの変更）を実現し、低パフォーマンスのワークロードに対して費用対効果の高いStandard Disksを使用できます。

## 目次

  * [本ドキュメントについて](<#about-this-paper>)
  * [対象読者](<#who-should-read-this-paper>)
  * [ストレージ環境におけるディスクコストの分析](<#analyze-disk-costs-storage-environment>)
  * [ストレージの無駄の定量化](<#quantify-types-of-storage-waste>)
  * [価値の最適化](<#optimizing-for-value>)
  * [結論](<#conclusion>)
  * [参照文献](<#references>)
  * [謝辞](<#acknowledgments>)

Azure Managed Disksは、Azureクラウドコンピューティングプラットフォームの基本コンポーネントであり、Azure Virtual Machines（VM）向けに永続的で保護されたブロックストレージを提供します。これらは本質的に仮想化された物理ディスクであり、Azureが基盤となるストレージの管理責任を担います。

## 本ドキュメントについて

本ドキュメントは、Azure Managed Disks（以下、ディスクと表記）の使用方法、最適化、およびパフォーマンスに関するガイダンスを提供します。本ドキュメントでは、価格モデル、価格とパフォーマンスの関係、および無駄を特定する方法を理解するための主要な手順を説明します。主な対象はStandard、Premium、Premium V2の各ティアを含むAzure Managed Disksですが、ここで説明する概念はAWSのEBSボリュームにも同様に適用できます。

## 対象読者

本ドキュメントは、[FinOps実践者](<http://finops.org/framework/personas>)がパフォーマンスに関連するディスク支出を理解し、無駄のある領域を特定するのを支援します。また、無駄を削減し、各ワークロードに最も適切な種類のマネージドディスクを選択することで、価値を最大化する方法を理解できるように導きます。

## 前提条件

  * Azure Managed Disksおよび運用の基本的な理解
  * コストと使用状況レポートへのアクセス権
  * AzureポータルおよびAzure Monitorメトリックへのアクセス権
  * Azure Log Analyticsまたはその他の既存のオブザーバビリティ（可観測性）ツールへのアクセス権
  * Excel、PowerBI、またはその他任意のレポートツール

## ストレージ環境におけるディスクコストの分析

以下のサンプル表に示すように、この分析はストレージの金銭的価値を明らかにし、FinOps実践者がどの製品に焦点を当てるべきかを可視化するのに役立ちます。このストレージ支出分析により、FinOps実践者は経営陣や技術チームに対して、最適化による効果の規模を伝えることができます。この分析は、Azureポータル内のコスト分析ツールを使用し、必要に応じてフィルターと日付範囲を設定することで実行できます。

[![sample table showing an example of storage spend analysis.](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201956%20814'%3E%3C/svg%3E)](<https://www.finops.org/wp-content/uploads/2025/09/paper-azure-managed-disks-img01.png>)

_このサンプル表は、ストレージ支出分析の例を示しています。_

## ストレージの無駄の定量化

本セクションでは、ストレージの最適化を支援する、ストレージの無駄を特定するための2つの主要なアプローチを検討します。

  * A. 使用済みディスク容量と利用可能なディスク容量
  * B. プロビジョニング済みIOPSと使用済みIOPS

#### 使用済みディスク容量と利用可能なディスク容量

空きディスク容量の分析は、潜在的なストレージの無駄を特定するための有用な指標です。このデータは、Azure Log Analytics、またはサイト信頼性エンジニアリング（SRE）チームが一般的に管理するオブザーバビリティツールから取得できます。有意義な洞察を得るために、単一の時点での測定値に依存するのではなく、代表的な期間（例：3ヶ月）の平均値として空き容量を計算することをお勧めします。

以下のサンプル表は、P20 LRSやP30 LRSなど、いくつかのAzure Managed Disk構成において、かなりの量の空き容量が存在することを示しています。信頼性を維持するためにある程度の空き容量を確保することは必要ですが、過剰な空き容量は無駄を示している可能性があり、それに伴い最適化の機会が存在します。特に、特定のディスクタイプは、使用済み容量とプロビジョニング済み容量をより緊密に一致させることができる構成をサポートしています。これらのオプションについては、本ドキュメントの後半で詳しく説明します。

[![sample table showing free space across several Azure Managed Disk configurations such as P20 LRS and P30 LRS.](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20610%20563'%3E%3C/svg%3E)](<https://www.finops.org/wp-content/uploads/2025/09/paper-azure-managed-disks-img02.png>)

_このサンプル表は、P20 LRSやP30 LRSなど、いくつかのAzure Managed Disk構成における空き容量を示しています。_

#### プロビジョニング済みIOPSと使用済みIOPS

ストレージの無駄を特定するもう1つのアプローチは、使用率の低いディスクを見つけることです。ディスクは一般にプロビジョニングされた容量（GiBあたり）に基づいて課金されますが、IOPS（1秒あたりのインプット/アウトプット操作数）などのパフォーマンス特性もコストに大きく影響します。IOPSは、ディスクの速度と応答性を反映する重要な指標です。例えば、Premium Disksは優れたパフォーマンス能力を備えているため、同じサイズのStandard Disksよりもコストが高くなります。容量とパフォーマンスの両方で過剰にプロビジョニングされているディスクを特定することで、さらなる最適化の機会を明らかにできます。

高IOPSディスクは、通常、コストが高くなります。以下の分析は、プロビジョニングされた（つまり、料金を支払っている）IOPSと、実際に使用されたIOPSとの間のギャップを浮き彫りにし、潜在的な使用率の低さを明らかにしています。プロビジョニングされた容量に対してIOPSの使用率が一貫して低いディスクは、より低パフォーマンスで低コストのオプションへダウンサイジングするための適切な候補となります。この分析は、ワークロードの季節性や変動を考慮するために、使用されたIOPSの3ヶ月平均に基づいています。

平均IOPSは有用ですが、ピーク時のIOPSも関連性があります。ただし、パフォーマンスに対する追加料金が妥当であるかどうかを判断するために、ピーク値は慎重に評価する必要があります。例えば、バックアップ処理中にディスクのIOPSスパイクが発生する場合、高速なバックアップ実行を維持するために高IOPSのプロビジョニングが必要なのか、それともバックアップウィンドウをわずかに長くする（例：5分追加する）ことで有意義なコスト削減を実現できるのかを検討する価値があります。

以下のサンプル表に示す結果は、集計された平均値を大まかな指標として使用し、分析と最適化の取り組みをどこに集中させるべきかを示しています。この分析では、各製品の結果を単一の「使用済みIOPS」値（例：すべてのP10 LRSディスクの平均）に集計しています。この簡素化により、ディスクごとの正確な結果ではない可能性がありますが、最適化の可能性に関する一般的な尺度を提供します。P10 LRSディスクに戻ると、ディスクの数が多く、プロビジョニングされたIOPSに対する平均使用率が低いことは、最適化の可能性を示しています。

[![sample table showing the average IOPS used; also consider the Max IOPS. This is the average of multiple Disks, some Disks might have higher IOPS than average.](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20610%20520'%3E%3C/svg%3E)](<https://www.finops.org/wp-content/uploads/2025/09/paper-azure-managed-disks-img03.png>)

_このサンプル表は、使用された平均IOPSを示しています。最大IOPSも考慮してください。これは複数のディスクの平均であり、一部のディスクは平均よりも高いIOPSを持つ場合があります。_

## 価値の最適化

前セクションでは、ストレージの無駄の2つの主な形態として、過剰な空きディスク容量と、使用率の低いディスクIOPSを特定しました。本セクションでは、これらの非効率性に対処するために利用可能なオプションを探索し、それぞれに関連する潜在的なコスト削減効果を検討します。

空きディスク容量による無駄を削減する1つの方法は、ディスクをより小さな容量にリサイズすることであり、これによりコストが直接削減されます。これを達成するためのアプローチはいくつかあります。1つのオプションは、同じディスクタイプを維持したままダウンサイジングすることです。例えば、Premium P30（1 TB）をPremium P20（512 GiB）に縮小します。あるいは、以下で説明する明確なメリットと制限事項を持つ、Premium V2などの異なるストレージティアにディスクを移行することもできます。

Premium V2はいくつかのメリットを提供し、以下のサンプル図においてPremium Disksの実行可能な代替案と見なされています。最初の主要なメリットは、Premium Disksと比較して容量1 GiBあたりのコストが低いことです。2つ目は、サイズ設定の柔軟性が高いことです。Premium Disksはディスクあたり月単位で課金され、固定サイズ（例：512 GiB、1 TB、2 TB）でのみ利用可能ですが、Premium V2 DisksはGiBあたり月単位で課金され、350 GiBや1.2 TBなど、よりきめ細かなサイズでプロビジョニングできます。

サイズの柔軟性に加えて、Premium V2ではIOPSも独立してプロビジョニングできます。例えば、大容量でのみ高いIOPSが提供されるPremium Disksとは異なり、比較的容量の小さいディスクであっても高いIOPSを設定できます。

ただし、Premium V2 Disksには、適用性を制限する可能性のある制約もあります。これらはまだすべてのリージョンで利用できるわけではなく、OSディスクとして使用することはできません。また、リージョン全体のスケールセットではなく、ゾーンのスケールセット内のVMでのみサポートされます。Premium SSD v2ディスクを使用してVMまたはVMスケールセットをデプロイする場合、デプロイは可用性ゾーン（Availability Zones）を持つリージョンで行う必要があり、スケールセットのVMは作成時に明示的にゾーンに関連付ける必要があります。制限事項の完全かつ最新のリストについては、本ドキュメントの最後にある参照文献セクションを参照してください。

以下の図は、ベンチマークとなるPremium (v1)ディスクに対する、さまざまなPremium SSD v2のIOPSプロビジョニングオプションを比較しています。この場合のベンチマークはP30であり、1 TBのストレージ、5,000 IOPS、および200 MB/sのスループットを提供します。一貫した比較を行うために、ストレージ容量とスループットは同じに保ち、IOPSを変化させてPremium SSD v2ディスクをプロビジョニングします。図に示すように、同等のIOPSを持つPremium SSD v2ディスクは、P30と比較して18%のコスト削減（167ドルに対して137ドル）を実現します。言い換えれば、P30のコストよりわずか4%多いだけで、同じストレージとスループットのレベルを維持しながら、2倍のIOPSを持つPremium SSD v2ディスクをプロビジョニングできます。

[![sample chart showing a range of SSD Premium V2 IOPS provisioning options with a benchmark Premium \(V1\) Disk.](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20610%20346'%3E%3C/svg%3E)](<https://www.finops.org/wp-content/uploads/2025/09/paper-azure-managed-disks-img04.png>)

_このサンプル図は、ベンチマークとなるPremium (V1)ディスクと、さまざまなSSD Premium V2のIOPSプロビジョニングオプションを比較しています。_

以下の図は同様の分析を示しており、今回はそれぞれ2 TBのストレージと固定スループットを持つ一連 of Premium SSD v2ディスクを、同等のPremium P40ディスクと比較しています。図に示すように、一致するIOPSを持つPremium v2ディスクは、320ドルに対して276ドルという大幅に低いコストで利用できます。あるいは、Premium (v1) P40ディスクと同じコストで、同じストレージとスループットを維持しながら、ほぼ2倍のIOPS（7,500に対して13,500）を持つPremium v2ディスクをプロビジョニングできます。

[![sample chart comparing a range of Premium V2 Disks \(with 2TB of storage and fixed throughput\) with an equivalent Premium P40 Disk.](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20610%20342'%3E%3C/svg%3E)](<https://www.finops.org/wp-content/uploads/2025/09/paper-azure-managed-disks-img05.png>)

_このサンプル図は、一連のPremium V2ディスク（2 TBのストレージと固定スループット）を、同等のPremium P40ディスクと比較しています。_

2 TB（P40）のシナリオにおける削減率の差は、1 TB（P30）のシナリオよりもわずかに小さいことに注意してください。1 TBのディスクではPremium V2に切り替えることで18%削減できますが、2 TBのディスクではその差は14%にとどまります。この削減効果が減少する傾向は、より大きなプロビジョニング済みディスク（P50、P60など）でも続きます。これは、Premium Disksが段階的に増加するIOPSでプロビジョニングされるのに対し、Premium V2の価格モデルでは、3,000のベースラインを超えるIOPSに対して線形なコスト増加（100 IOPSあたり月額0.74ドル）が発生するためです。対照的に、Premiumの価格モデルはストレージサイズに比例して線形に増加します。要約すると、最大のディスクサイズであっても、同等に構成されたPremium V2ディスクはPremiumディスクよりも安価になりますが、削減率は小さいディスクサイズほど劇的ではありません。

考慮すべき一般的なユースケースは、RAIDアレイのデプロイです。設計上、RAID構成は同じサイズの複数のディスクで構成されます。これはRAIDという頭字語の「冗長（redundant）」という側面を反映しています。その結果、アレイ内のすべてのディスクに対して非標準のサイズ設定を特に必要としない限り、Premium SSD v2の主要なメリットであるディスクサイズの柔軟性は、この文脈では一般的にあまり重要ではありません。

ただし、サイズの多様性というメリットがなくても、GiBあたりのコストが低く、柔軟なIOPSプロビジョニングが可能なため、Premium v2ディスクは依然として魅力的です。RAIDアレイは、回復性、パフォーマンス、またはコスト効率を最適化するように設計でき、これがディスクの数、ストライピング戦略、およびその他のアーキテクチャ上の決定などの要因に影響を与えます。ディスクタイプの選択やストレージソリューションの設計を行う際には、これらの考慮事項を慎重に評価する必要があります。

以下のサンプル表は、空きディスク容量に金銭的価値を割り当てています。空き容量を排除し、妥当な量（この例では20%）を残すことで、削減の可能性を定量化できます。

[![sample table showing places a dollar value on free Disk space](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20610%20484'%3E%3C/svg%3E)](<https://www.finops.org/wp-content/uploads/2025/09/paper-azure-managed-disks-img06.png>)

さらに、プロビジョニングされたIOPSと使用されたIOPSとの間に大きなギャップがあることは、現在のディスクティアがワークロードに対して過剰にプロビジョニングされている可能性を示しています。このような場合、PremiumからStandard Diskに切り替えることで、有意義なコスト削減につながる可能性があります。Standard Disksは、バックアップや開発環境などの低パフォーマンスのワークロードに適しています。

以下のサンプル表は、同じサイズのStandard Diskに移行することによる潜在的な削減効果を示すことで、プロビジョニング済みIOPSと使用済みIOPSに関する先ほどの分析を補強しています。また、IOPSの課金モデルなどの重要なニュアンスも考慮に入れています。Premium Disksには追加コストなしでプロビジョニングされたIOPSが含まれていますが、Standard Disksは実際のIOPS使用量に基づいて課金されるため、正確なコストモデリングを行うには過去3ヶ月の使用状況が重要なインプットとなります。

[![sample table showing an analysis of provisioned versus utilized IOPS by illustrating the potential savings from moving to a Standard Disk of the same size.](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20610%20336'%3E%3C/svg%3E)](<https://www.finops.org/wp-content/uploads/2025/09/paper-azure-managed-disks-img07.png>)

## 結論

要約すると、デプロイされたストレージディスクの詳細なコストと使用状況の分析を行うとともに、プロビジョニングされたディスクの機能と価格モデルをしっかりと理解し、最適化戦略を効果的に実行することで、Azure Managed Disksの大きな価値を引き出すことができます。具体的には、Premium V2 DisksはさまざまなシナリオにおいてPremium (V1) Disksと比較して魅力的な削減機会を提供し、Standard Disksは両方のPremiumティアに対する費用対効果の高い代替手段を提供します。

これらの機会を活かすための最初のステップは、既存のディスク群を分析することです。このデータを収集することで、ストレージ容量またはIOPSのいずれかにおいて大幅に過剰プロビジョニングされているディスクを特定し、コスト削減とプロビジョニング最適化の両方の機会を明らかにできます。この初期フェーズは、FinOpsライフサイクルのインフォーム（Inform）フェーズに合致しており、現在デプロイされているプロビジョニング済みディスクの構成とコストを明確に理解することに焦点を当てています。

各ディスクタイプのメリットとデメリットをしっかりと理解することが不可欠です。例えば、Premium (V1) Disksは、特定のディスクサイズに対してあらかじめ設定されたIOPS/スループットレベルを提供します。一方、Premium V2 Disksははるかに柔軟なプロビジョニングモデルを備えており、さまざまな状況で大幅なコスト削減をもたらす可能性がありますが、考慮すべき機能的な制限もいくつか存在します。Standard Disksも、特定の状況において有益となり得る費用対効果の高い選択肢です。この分析は、ライフサイクルのオプティマイズ（Optimize）フェーズに該当します。最適化の機会を特定し、さまざまなオプションの適用可能性を評価し、適切な対策を講じることで実現できるコスト削減効果を定量化します。

最後に、プロビジョニングされたディスクを最適化するために必要な対策を実行することは、FinOpsフレームワークにおけるオペレート（Operate）フェーズに該当します。これらの最適化の価値を長期的に維持するためには、ディスクコストの見直し、最適化機会の特定、是正措置の実行といった継続的な活動を、FinOpsチームおよび運用チームの通常のワークフローに組み込むことが極めて重要です。

## 参照文献

  * Premium V2の制限事項：[Select a Disk type for Azure IaaS VMs – managed Disks – Azure Virtual Machines | Microsoft Learn](<https://learn.microsoft.com/en-us/azure/virtual-machines/disks-types#premium-ssd-v2-limitations>)（2025年3月27日時点）
  * [Convert managed Disks storage between different Disk types – Azure Virtual Machines | Microsoft Learn](<https://learn.microsoft.com/en-us/azure/virtual-machines/disks-convert-types?tabs=azure-powershell#convert-premium-ssd-v2-disks>)（2025年3月27日時点）
  * Azure Storageの料金ページ：[Azure Pricing](<https://azure.microsoft.com/en-ca/pricing/details/managed-disks/>)
  * Azure Monitorのディスクメトリック：[Disk metrics – Azure Virtual Machines | Microsoft Learn](<https://learn.microsoft.com/en-us/azure/virtual-machines/disks-metrics>)（2025年4月8日時点）
  * Azure Monitor REST API：[Azure Monitor REST API reference | Microsoft Learn](<https://learn.microsoft.com/en-us/rest/api/monitor/>)

## 謝辞

本ドキュメントの作成にご尽力いただいた以下の皆様に感謝いたします。

[ ![Dave Chodos](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Dave Chodos PointClickCare ](<https://www.linkedin.com/in/dave-chodos/>) [ ![Samer Karkhi](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Samer Karkhi ServiceTitan ](<https://www.linkedin.com/in/samer-alkarkhi/>)

最終更新日：2025年9月19日

## 目次

  * [本ドキュメントについて](<#about-this-paper>)
  * [対象読者](<#who-should-read-this-paper>)
  * [ストレージ環境におけるディスクコストの分析](<#analyze-disk-costs-storage-environment>)
  * [ストレージの無駄の定量化](<#quantify-types-of-storage-waste>)
  * [価値の最適化](<#optimizing-for-value>)
  * [結論](<#conclusion>)
  * [参照文献](<#references>)
  * [謝辞](<#acknowledgments>)

##### 関連するFinOpsケイパビリティ

[ 使用量の最適化 ](<https://www.finops.org/framework/capabilities/usage-optimization/>) [ レポートと分析 ](<https://www.finops.org/framework/capabilities/reporting-analytics/>) [ データ取り込み ](<https://www.finops.org/framework/capabilities/data-ingestion/>) [ 自動化、ツール、サービス ](<https://www.finops.org/framework/capabilities/automation-tools-services/>)

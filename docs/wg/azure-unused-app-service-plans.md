---
format: md
title: "Azureの未使用のApp Service Plan（Azure Unused App Service Plans）"
---

[英語版]: https://www.finops.org/wg/azure-unused-app-service-plans/

:::warning[ドラフトのページ]

翻訳は機械翻訳により提供されています。
翻訳内容と[英語版]の間で齟齬、不一致、矛盾がある場合は[英語版]を優先します。

:::

**概要：** アプリケーションが削除されてもサービスプランがアクティブなまま残っている場合、組織はプランに設定された価格レベル（Pricing Tier）に基づいて、不要なクラウドコストを負担することになります。FinOps実践者やエンジニアリングチームは、本プレイブック（Playbook）のガイダンスを利用して、未使用のApp Service Planを特定し、それらを削除するか、より低い価格レベルにスケールダウンするかを判断できます。プランの使用状況を定期的に確認し、アプリケーション所有者と協力することで、効率的なアプリケーションホスティング環境を維持しながら、無駄な支出を削減します。

## 目次

  * [前提条件](<#prerequisites>)
  * [手順](<#instructions>)
  * [成果と成功指標](<#outcomes-success>)
  * [関連リソース](<#related-resources>)
  * [謝辞](<#acknowledgments>)

Azure App Serviceを使用すると、組織はインフラストラクチャを管理することなく、Azure上でWebアプリを開発および実行できます。すべてのApp Serviceは、App Service Plan内で実行する必要があります。App Service Planは、無料レベル（Free Tier）の基本的なものから、提供するサービスに基づいて非常に高額なものまで存在します。

高額すぎるApp Service Planを選択することや、App Serviceを削除した後にApp Service Planを実行したままにすることは、App Serviceを大規模に使用している組織や、経験の浅い組織における典型的な課題です。過剰なサイズのVM（仮想マシン）と同様に、App Service Planは、その中で実行するワークロードのニーズに合わせてライトサイズ（Right Size）化できます。

FinOpsチームは、本プレイブックを「情報（Inform）」フェーズの周期で実行する必要があります。過剰なApp Service Planのコストが検出された場合、本プレイブックを使用してAzureサブスクリプション（Subscription）内の未使用のApp Service Planを特定し、削除するか無料レベルにスケールダウンしてコストを削減します。

### 本プレイブックの対象者

アプリケーションをホストするためにサブスクリプション内でAzure App Serviceを運用しているリソースコスト所有者やエンジニアは、本プレイブックを活用できます。

## 前提条件

### 関与が必要な担当者

  * 「情報（Inform）」フェーズ – 各自のクラウドコストに責任を持つサブスクリプション所有者、ビジネスチーム、エンジニアリングチームが、FinOpsのショーバックレポートを確認し、未使用のApp Service Planによって発生したクラウド支出を分析する。
  * 「最適化（Optimize）」フェーズ – エンジニアやアプリケーションアーキテクトが、コストが発生している未使用のApp Service Planのリストを確認し、アプリケーションの要件に応じて、削除または無料レベルへのスケールダウンといった次の最適化ステップを決定する。
  * 「運用（Operate）」フェーズ – エンジニアが、未使用のApp Service Planに対して、削除または無料レベルへのスケールダウンを実行する。

### 必要な情報とリソース

本プレイブックを最大限に活用するには、以下の情報が必要です。

  * [App Service](<https://learn.microsoft.com/en-us/azure/app-service/>)に関する理解
  * [Azure App Service Plan](<https://learn.microsoft.com/en-us/azure/app-service/overview-hosting-plans>)に関する理解
  * [Azure App Service Planの価格レベル](<https://azure.microsoft.com/en-us/pricing/details/app-service/windows/>)に関する理解
  * [Azure App Service Planのコスト管理](<https://learn.microsoft.com/en-us/azure/app-service/overview-manage-costs>)に関する知識

#### アクセス権限の要件

  * 未使用 of App Service Planを特定して報告するための、サブスクリプションに対する閲覧者（Reader）レベルのアクセス権限
  * 未使用のApp Service Planに対する最適化戦略を実行するための、サブスクリプション、リソースグループ（Resource Group）、またはAzure App Service Planのスコープにおける共同作成者（Contributor）権限

#### ツール、ユーティリティ、テンプレート

  * [Azure portal](<https://portal.azure.com>)
  * PowerShellの概要：[Azure PowerShell の概要 | Microsoft Learn](<https://learn.microsoft.com/en-us/powershell/azure/get-started-azureps?view=azps-10.4.1>)
  * PowerShellコマンド：
    * [Azure App Service Plan](<https://learn.microsoft.com/en-us/powershell/module/az.websites/get-azappserviceplan?view=azps-10.4.1>)の詳細の取得
    * [Azure App Service Plan](<https://learn.microsoft.com/en-us/powershell/module/az.websites/remove-azappserviceplan?view=azps-10.4.1>)の削除
    * [Azure App Service Planのプロパティ設定](<https://learn.microsoft.com/en-us/powershell/module/az.websites/set-azappserviceplan?view=azps-10.4.1>)
  * 成熟したプラクティスにおいては、未使用のASPの特定や、削除またはスケールダウンによる対処手順を含む各ステップを自動化するために、自動化ツールを使用できます。

## 本プレイブックの実行手順

以下は、Azure portalまたはPowerShellコマンドを使用して、未使用のApp Service Plan（ASP）を特定、検証、および削除するか、無料レベルにスケールダウンするための手順です。

成熟したFinOpsプラクティスでは、利用可能な自動化ツールを使用して、以下の手順を自動化できます。

  * 本プレイブックのステップ1は、定期的な「情報（Inform）」フェーズのレポート作成に自動化できます。
  * ステップ2〜4は、ステップ1の定期レポートで対処が必要な項目が特定された場合にのみ実行します。
  * 成熟した組織では、プロセス管理ツールを使用してステップ2を自動化できます。
  * 成熟した組織では、自動化ツールを使用してステップ3および4を自動化できます。

### ステップ1 – すべての未使用のASPの特定と一覧化（10分）

ASP内に構成されたアプリがなくなると、そのASPは未使用状態になります。テナント全体、または特定のサブスクリプションやリソースグループ内のすべての未使用のASPを特定してリストを取得するには、Azure Portalの「App Service プラン」サービスページに移動し、「アプリ」列が「0」に設定されているプランをフィルターします。サブスクリプションやリソースグループのサブセットを対象とする場合は、それに応じてサブスクリプションやリソースグループのフィルターを設定します。

[Azure Advisor](<https://learn.microsoft.com/en-us/azure/advisor/advisor-reference-cost-recommendations#web>)を使用して、未使用のASPに関する推奨事項を確認することもできます。

### ステップ2 – 未使用のASPの最適化に関する検証（30分）

***注意：さらに最適化の承認を確認する必要があるため、実行時間は状況によって異なります。***

特定した未使用のASPの使用要件について、アプリケーションチームまたはアーキテクトチームと検証する必要があります。

開発環境やテスト環境のApp Serviceアプリケーションは、単一のASPを共有したり、本番環境やより厳格なテスト環境に移行する前に無料レベルを使用したりすることがよくあります。アプリケーション、エンジニアリング、アーキテクチャの各チームは、構築されたASPの必要性について裏付けを提供する必要があります。

アプリケーションチームによる必要性の検証結果に基づいて、以下のアクションを決定します。

  * ASPが不要になった場合、リソース所有者またはプラットフォームチームはプランの削除に進みます**（ステップ3へ）**。
  * 将来のユースケースでASPが必要であるものの、より低い価格レベルまたは無料レベルにスケールダウンできる場合、リソース所有者またはプラットフォームチームは、ASPのレベルを無料レベルまたはより低い価格レベルにスケールダウンします**（ステップ4へ）**。
  * 高度な機能が構成されているASPの場合、無料レベルへのスケールダウンはできないことに注意してください。
  * 構築時の構成のままASPが必要な場合、FinOpsチームはリソース所有者から提供された理由を記録し、特定されたASPに対してアクションは不要と判断します。

### ステップ3 – 未使用のASPの削除

未使用のASPが特定・検証され、削除が承認された場合、リソースを管理しRBAC（ロールベースのアクセス制御）権限を持つチームまたは個人は、以下の手順に従って、Azure portalまたはPowerShellコマンドから未使用のASPを削除できます。

#### Azure Portalの使用（15分）

ポータルのASPの「概要」ペインにおいて、以下のスクリーンショットで強調表示されている「アプリ/(スロット)」リンクが「0」であることを確認し、未使用のApp Service Planであることを検証します。

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201240%20237'%3E%3C/svg%3E)

図1：Azure App Service Planの概要

検証後、強調表示されている「削除」ボタンをクリックして、App Service Planを削除します。

#### PowerShellコマンドの使用（20分）

以下のAzure PowerShellコマンドレットを使用して、未使用のASPを検証および削除できます。

指定したApp Service Planに構成されているアプリの数を取得し、それが「0」であることを確認します。

_Get-AzAppServicePlan_ – コマンドレットの詳細については、[こちらのMicrosoftドキュメントのリンク](<https://learn.microsoft.com/en-us/powershell/module/az.websites/get-azappserviceplan?view=azps-11.3.0>)を参照してください。

例：
[code] 
    $NumOfSites=(get-azappserviceplan -resourcegroupname "<YourRGName>" -Name "<YourASPName>").NumberOfSites
[/code]

未使用のASPの検証に成功したら、Azure App Service Planを削除します。

_Remove-AzAppServicePlan_ – コマンドレットの詳細については、[Microsoftドキュメントのリンク](<https://learn.microsoft.com/en-us/powershell/module/az.websites/remove-azappserviceplan?view=azps-11.2.0>)を参照してください。

例：
[code] 
    Remove-AzAppServicePlan -ResourceGroupName "<YourRGName>" -Name "<YourASPName>"
[/code]

### ステップ4 – 未使用のASPを無料レベルまたはより低い価格レベルへスケールダウン

未使用のASPが特定・検証され、スケールダウンが承認された場合、リソース所有者は以下の手順に従って、Azure portalまたはPowerShellコマンドから未使用のASPをスケールダウンできます。

#### Azure Portalの使用（15分）

ポータルのASPの「概要」ペインにおいて、上記のセクション3のスクリーンショット「図1」で強調表示されている「アプリ/(スロット)」リンクを確認し、未使用のApp Service Planであることを検証します。

ASPの現在の価格プランを書き留め、同じ内容の新しいタグを追加します。このタグは、未使用のASPが再びアプリをホストすることになり、元の価格構成に戻す必要がある場合に役立ちます。

価格レベルをスケールダウンするには、左ペインの「スペックアップ（Scale Up）」をクリックし、表示された画面で「Free F1」を選択して無料の価格レベル、または合意されたより低い価格レベルにスケールダウンします。

![](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201922%20820'%3E%3C/svg%3E)

図2：Azure App Service Planのスケールオプション

#### PowerShellコマンドの使用（20分）

以下のPowerShellコマンドレットを使用して、未使用のASPを検証およびスケールダウンできます。

指定したApp Service Planに構成されているアプリの数を取得し、それが「0」であることを確認します。

_Get-AzAppServicePlan_ – コマンドレットの詳細については、[Microsoftドキュメントのリンク](<https://learn.microsoft.com/en-us/powershell/module/az.websites/get-azappserviceplan?view=azps-11.3.0>)を参照してください。

例：
[code] 
    $NumOfSites=(get-azappserviceplan -resourcegroupname "<YourRGName>" -Name "<YourASPName>").NumberOfSites
[/code]

ASPの現在の価格プランを書き留め、同じ内容の新しいタグを追加します。このタグは、未使用のASPが再びアプリをホストすることになり、元の価格構成に戻す必要がある場合に役立ちます。

_Update-AzTag_ – コマンドレットの詳細については、Microsoftドキュメントのリンクまたは[PowerShellのヘルプ](<https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/tag-resources-powershell >)を参照してください。

例：
[code] 
    $OrigTier=(Get-AzAppServicePlan -ResourceGroupName "<YourRGName>" -Name "<YourASPName>").Sku.Size


    $tags = @\{“OriginalPricingTier”=$OrigTier\}


    $resource = Get-AzResource -Name “<YourASPName>” -ResourceGroup “<YourRGName>”


    Update-AzTag -ResourceId $resource.id -Tag $tags -Operation Merge


[/code]

検証に成功したら、プランのレベルを確認済みのレベルまたはワーカーサイズにスケールダウンします。

_Set-AzAppServicePlan_ – コマンドレットの詳細については、こちらの[Microsoftドキュメントのリンク](<https://learn.microsoft.com/en-us/powershell/module/az.websites/set-azappserviceplan?view=azps-11.3.0>)を参照してください。

例：
[code] 
    set-Azappserviceplan -Tier "<YourASPTier>"-resourcegroupname “<YourRGName>" -Name "<YourASPName>" -WorkerSize "<YourASPWorkerSize>”
[/code]

*無料レベルF1の場合は、パラメータ値として `-Tier "Free"`, `-WorkerSize "Small"` を使用します。*

## 成果と成功指標

### 本プレイブック実行による主な成果

  * 必要とされる未使用のApp Service Planが特定され、ドキュメント化される。
  * 未使用 of App Service Planの総数と、それに対応するコストが削減される。

### 成功指標

  * 未使用のApp Service Planに関するAzureリソースレポートで大幅な削減が示され、既存の未使用のApp Service Planが無料レベルになっているか、必要であることがドキュメント化されている。
  * ショーバックレポートにおける未使用のApp Service Planの総消費コストがゼロである。

### 例外と考慮事項

  * App Service Planに構成されている追加機能が無料レベルでサポートされていない場合、無料レベルへのスケールダウンは機能しません。
  * すべてのASP価格レベルから無料レベルへスケールダウンできるわけではありません。

## 関連するFinOpsリソースとフレームワークのケイパビリティ

  * [リソースの利用率と効率（Resource Utilization & Efficiency） (finops.org)](<https://www.finops.org/framework/capabilities/utilization-efficiency/>)

## 謝辞

本プレイブックの作成にご尽力いただいた以下のメンバーに感謝いたします。

[ ![Madhuri Mereddy](data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2080%2080'%3E%3C/svg%3E) Madhuri Mereddy 氏（Shell） ](<https://www.linkedin.com/in/madhuri-mereddy-a865668/>)

また、ご支援いただいた Diana Bele 氏と Marcel Paap 氏にも感謝いたします。

最終更新日：2026年3月16日

## 目次

  * [前提条件](<#prerequisites>)
  * [手順](<#instructions>)
  * [成果と成功指標](<#outcomes-success>)
  * [関連リソース](<#related-resources>)
  * [謝辞](<#acknowledgments>)

##### 関連するFinOpsケイパビリティ

[ 使用量の最適化（Usage Optimization） ](<https://www.finops.org/framework/capabilities/usage-optimization/>)

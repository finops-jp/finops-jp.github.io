# System Architecture

## System Overview
FinOps Japan Community（finops-jp.github.io）の公式Webサイト。Docusaurus 3で構築された静的サイトで、GitHub Pagesにデプロイされている。

## Architecture Diagram

```
+-------------------+     +-------------------+     +-------------------+
|   Content (MD)    | --> |   Docusaurus 3    | --> |  GitHub Pages     |
|   blog/, docs/    |     |   Build (npm)     |     |  Static Hosting   |
+-------------------+     +-------------------+     +-------------------+
                                   |
                                   v
                          +-------------------+
                          | GitHub Actions    |
                          | CI/CD Pipeline    |
                          +-------------------+
```

## Component Descriptions

### Content Layer
- **Purpose**: マークダウンによるコンテンツ管理
- **Responsibilities**: FinOpsフレームワーク文書、ブログ記事
- **Type**: Content

### Application Layer (Docusaurus)
- **Purpose**: 静的サイト生成
- **Responsibilities**: ビルド、ルーティング、テーマ、検索
- **Dependencies**: React 18, MDX, Algolia Search
- **Type**: Application

### Infrastructure Layer
- **Purpose**: ホスティングとCI/CD
- **Responsibilities**: ビルド実行、デプロイ
- **Dependencies**: GitHub Actions, GitHub Pages
- **Type**: Infrastructure

## Integration Points
- **External APIs**: Algolia DocSearch（サイト内検索）
- **Third-party Services**: GitHub Pages（ホスティング）

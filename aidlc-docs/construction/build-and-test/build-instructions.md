# Build Instructions

## Prerequisites
- **Build Tool**: npm (Node.js >=18.0)
- **Dependencies**: package-lock.json で固定
- **Environment Variables**: なし（静的サイト）
- **System Requirements**: Node.js 18+, npm 9+

## Build Steps

### 1. Install Dependencies
```bash
npm ci
```
注: `npm install`ではなく`npm ci`を使用すること（lock fileの整合性を保証）

### 2. Build
```bash
npm run build
```

### 3. Verify Build Success
- **Expected Output**: `[SUCCESS] Generated static files in "build".`
- **Build Artifacts**: `build/` ディレクトリ配下に静的ファイル生成
- **Build Time**: 約40〜50秒

## Troubleshooting

### Build Fails with Dependency Errors
- **Cause**: node_modulesが古い、lock fileと不整合
- **Solution**: `rm -rf node_modules && npm ci`

### Build Fails after Package Update
- **Cause**: 破壊的変更を含むパッケージが更新された
- **Solution**: `git checkout package.json package-lock.json && npm ci`でロールバック

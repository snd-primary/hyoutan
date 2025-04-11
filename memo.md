# Astro + PayloadCMS アーキテクチャ概要

## フロントエンド構成

- **フレームワーク**: Astro
- **UIコンポーネント**: React
- **スタイリング**: Tailwind CSS
- **言語**: TypeScript
- **ホスティング**: Cloudflare Pages

## コンテンツ管理システム

- **CMS**: PayloadCMS (ホスティングは後決め)
- **コンテンツモデル**:
  - 型定義をTypeScriptで共有
  - フロントエンドとバックエンド間で型安全性確保

## データフロー

1. コンテンツ作成・編集: PayloadCMS管理画面
2. データ取得方法:
   - ビルド時取得 (SSG) - 静的コンテンツ向け
   - オンデマンド取得 (SSR) - 動的コンテンツ向け
3. コンテンツ配信: Cloudflare CDN経由

## 資産管理

- **画像**: PayloadCMSでアップロード → 適切なストレージ(Cloudflare R2など)
- **その他メディア**: PayloadCMSで管理

## 更新フロー

1. 非エンジニアがCMSでコンテンツ更新
2. コンテンツ変更がトリガー (Webhook)
3. 自動ビルド実行 (GitHub Actions等)
4. Cloudflare Pagesへデプロイ

## 拡張性とパフォーマンス

- Astroのアイランドアーキテクチャによる最適なJavaScript配信
- PayloadCMSのAPIを活用した柔軟なデータ取得
- 必要に応じたインクリメンタルビルドの導入

## 開発ワークフロー

1. ローカル開発環境: Astro + PayloadCMS (開発用DB)
2. ステージング環境: プレビュー用デプロイメント
3. 本番環境: Cloudflare Pages本番デプロイ

## 認証・権限管理

- PayloadCMS側で編集者/管理者ロールを設定
- コンテンツタイプごとのアクセス権限設定

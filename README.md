# コーディング支援のためのプロジェクト情報

## 1. プロジェクト概要と目標

- **プロジェクト名:** (例: 居酒屋ひょうたん 店舗Webサイト)
- **目的:** 飲食店のホームページ作成。店舗認知の拡大とブランディング。
- **ターゲットユーザー:** (例: 新規顧客、リピーター)

## 2. あなた (AIエージェント) への期待事項

- **役割:** 要件に基づいた機能開発、コンポーネント作成、マークアップ支援。
- **協業スタイル:** 私の要求に対し、ステップバイステップでの実装提案、コード生成、レビューをお願いします。不明点があれば質問してください。
- **主なタスク例:**
  - 指定されたUIデザインに基づくAstro/Reactコンポーネントの作成
  - 特定の機能（例: お知らせ一覧、メニュー表示）の実装
  - 既存コードのリファクタリング提案
  - TailwindCSS を用いたスタイリング

## 3. 技術スタック

- **主要技術:** Astro, React, Tailwind CSS
- **パッケージマネージャー:** pnpm
- **バージョン管理:** Git (GitHub)
- **`package.json` の依存関係:**

  ````json
  "dependencies": {
    "@astrojs/react": "^4.2.3",
    "@radix-ui/react-icons": "^1.3.2",
    "@tailwindcss/vite": "^4.1.3",
    "@types/react": "^19.1.0",
    "@types/react-dom": "^19.1.1",
    "@typescript-eslint/eslint-plugin": "^8.29.0",
    "@typescript-eslint/parser": "^8.29.0",
    "astro": "^5.6.0",
    "husky": "^9.1.7",
    "lint-staged": "^15.5.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "tailwindcss": "^4.1.3"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "eslint": "^9.23.0",
    "eslint-config-prettier": "^10.1.1",
    "eslint-plugin-astro": "^1.3.1",
    "jiti": "^2.4.2",
    "prettier": "3.5.3",
    "prettier-plugin-astro": "0.14.1",
    "ts-node": "^10.9.2"
  }  ```


  ````

## 4. UI/UXデザイン

- **デザイン資料:** なし。index.astroの実装をみる
- **カラースキーム・フォント:** `src/styles/globals.css` (または該当ファイル) を参照。主要なカラーコードやフォントファミリーをここに抜粋しても良い。
- **デザイントークン:** (例: `tailwind.config.js` で定義されたカスタムカラー、スペーシングなどがあれば言及)

## 5. コーディング規約

### 5.1. **最重要**

- **コンポーネント:**
  - 静的なUIやサーバーサイドでのレンダリングが主の場合は、極力 `.astro` コンポーネントとして作成する。
  - クライアントサイドでのインタラクション（状態管理、イベントハンドリング）が必要な場合に限り、Reactコンポーネント (`.tsx`) を使用し、Astroファイル内で `<Component client:load />` (または適切な `client:` ディレクティブ) を用いて読み込む。
- **スタイリング:** Tailwind CSS を使用する。原則としてインラインスタイルや別CSSファイルでのスタイル指定は避ける。

### 5.2. **言語・構文**

- TypeScript を使用する (`.ts`, `.tsx`)。
- JavaScript モジュールは ES Modules 形式 (`import`/`export`) を使用する。
- 型定義には原則 `type` を使用する (`interface` は特定のケース、例: クラス実装時などに限定)。

### 5.3. **フォーマット・Lint**

- **フォーマッター:** Prettier を使用 (`.prettierrc` の設定に従う)。
- **リンター:** ESLint を使用 (`.eslintrc.js` または `.eslintrc.json` の設定に従う)。
- **(補足)** `lint-staged` と `husky` が設定されているため、コミット前に自動チェックが走ることを伝える。

### 5.4. **命名規則**

- **コンポーネントファイル:** `PascalCase.astro` / `PascalCase.tsx` (例: `Header.astro`, `MenuButton.tsx`)
- **変数・関数:** `camelCase` (例: `userName`, `WorkspaceData`)
- **型定義:** `PascalCase` (例: `type UserProfile = { ... }`)
- **定数:** `UPPER_SNAKE_CASE` (例: `const MAX_ITEMS = 10;`)

### 5.5. **ディレクトリ構造** (例)

- `src/components/`: 再利用可能なUIコンポーネント (.astro, .tsx)
- `src/layouts/`: ページ全体のレイアウトコンポーネント (.astro)
- `src/pages/`: 各ページのルーティングに対応するファイル (.astro)
- `src/styles/`: グローバルCSS (`globals.css` など)
- `src/lib/` or `src/utils/`: ヘルパー関数、ユーティリティ (.ts)
- `src/types/`: 共有の型定義 (.ts)

### 5.6. **その他**

- コメントは、複雑なロジックや意図を説明する場合に記述する。

## 6. プロジェクト固有の要件・制約

- **アクセシビリティ:** HTML要素はセマンティックにマークアップし、WAI-ARIA属性を適切に使用するなど、アクセシブルな実装を心がける。
- **パフォーマンス:** クライアントサイドJavaScriptの量を最小限に抑え、Astroのアイランドアーキテクチャを活かす。画像最適化なども考慮する。
- **ブラウザサポート:** (例: 主要なモダンブラウザの最新2バージョン)
- **(その他あれば追記)**

## 7. よくある質問やTips (随時更新)

- **過去に直面した問題:**
  - (例) AstroアイランドでReactコンポーネントの状態が初期化される問題 → `client:visible` と `useEffect` を利用して解決。
- **よく参照するリソース:**
  - Astro Docs: [https://docs.astro.build/ja/](https://docs.astro.build/ja/)
  - React Docs: [https://react.dev/](https://react.dev/)
  - Tailwind CSS Docs: [https://tailwindcss.com/docs/installation](https://tailwindcss.com/docs/installation)
  - (プロジェクト内部のドキュメントやWikiがあればリンク)

## 8. セットアップ手順 (任意)

1.  `git clone <repository-url>`
2.  `cd <project-directory>`
3.  `npm install` (または `yarn install`, `pnpm install`)
4.  `npm run dev` (または `yarn dev`, `pnpm dev`)

---
あいうえお
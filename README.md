## プロジェクト概要と目標

飲食店のホームページとなるWebサイトを作成。
店舗認知の拡大とブランディンが主な目的

## 技術スタックの情報

- 主な技術構成は、 Astro, React, Tailwindcss。

詳細は以下参照。

```json
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
  }
```

## UI/UXデザイン資料

配色などは、
globals.cssを参照

## コーディング規約

- TypeScriptファースト
- ESModulesファースト
- 型定義は極力`type`を使用する
- スタイリングにはTailwindCSSを使用する

## よくある質問や課題

過去に直面した技術的な問題とその解決策
開発中によく参照するリソースやドキュメント

### DOCS

よく参照するDOCS

- Astro: https://docs.astro.build/en/concepts/why-astro/
- Tailwind: https://tailwindcss.com/docs/installation/using-vite

## プロジェクト固有の要件や制約

- HTML要素はセマンティックで、アクセシブルであること
- クライアントサイドの処理はできるだけ減らすこと

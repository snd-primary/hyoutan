// src/data/shopInfo.ts

/**
 * 店舗情報を管理するデータファイル
 *
 * このファイルでは二つのアプローチを提供しています：
 * 1. 表示用のセクションデータ（components/sections/InfoSectionで直接使用可能）
 * 2. 構造化されたデータ（計算や条件分岐が必要な場合に使用）
 */

// ---------------------------------------------
// 表示用データ構造（コンポーネントに直接渡せる形式）
// ---------------------------------------------

/**
 * 情報セクション項目の型定義
 */
export interface InfoItem {
  title: string
  contents: string[]
}

/**
 * 情報セクションの型定義
 */
export interface InfoSectionData {
  id: string
  title: string
  items: InfoItem[]
}

/**
 * 基本情報セクション（営業時間・予約情報）
 */
export const basicInfoSection: InfoSectionData = {
  id: "info",
  title: "基本情報",
  items: [
    {
      title: "営業時間",
      contents: [
        "<strong>平日:</strong> 17:00 - 23:30（L.O. 23:00）",
        "<strong>定休日:</strong> 毎週日曜日,祝日",
      ],
    },
    {
      title: "ご予約・お問い合わせ",
      contents: [
        "<strong>電話番号:</strong> 000-0000-0000",
        "<strong>メール:</strong> info@yakiton-sakaba.com",
        "<p>ご予約はお電話にて承っております。 <br />団体様のご利用もお気軽にご相談ください。</p>",
      ],
    },
    {
      title: "ご利用",
      contents: [
        "<strong>席数:</strong> カウンター7席、テーブル2組（4人掛け）",
        "<strong>喫煙:</strong> 全席喫煙可",
        "<strong>ご予算感:</strong> 3000~4000円程度",
      ],
    },
  ],
}

/**
 * アクセスセクション（店舗情報）
 */
export const accessInfoSection: InfoSectionData = {
  id: "access",
  title: "アクセス",
  items: [
    {
      title: "店舗情報",
      contents: [
        "<strong>住所:</strong> 〒123-4567 東京都〇〇区△△町 0-0-0 □□ビル 1F",
        "<strong>最寄り駅:</strong> 〇〇線△△駅から徒歩5分",
      ],
    },
  ],
}

// 全セクションをまとめたオブジェクト（インポートを簡単にするため）
export const allInfoSections = {
  basicInfo: basicInfoSection,
  access: accessInfoSection,
}

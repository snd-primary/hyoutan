// src/content/config.ts
import { defineCollection, z } from "astro:content"

// 情報コレクション ブロックタイプのスキーマを定義
const keyValueBlockSchema = z.object({
  _type: z.literal("keyValue"),
  key: z.string(),
  value: z.string(),
})

const contactBlockSchema = z.object({
  _type: z.literal("contact"),
  title: z.string().optional(),
  phoneNumber: z.string().optional(),
  email: z.string().email().optional(), // Email形式バリデーション
  notes: z.string().optional(), // Markdownを想定
})

const linkBlockSchema = z.object({
  _type: z.literal("link"),
  label: z.string().optional(),
  url: z.string().url().optional(),
  ariaLabel: z.string().optional(),
})

const accessBlockSchema = z.object({
  _type: z.literal("access"),
  title: z.string().optional(),
  address: z.string().optional(),
  stationInfo: z.string().optional(),
  // mapUrl: z.string().url().optional(),
  // latitude: z.number().optional(),
  // longitude: z.number().optional(),
})

const detailListBlockSchema = z.object({
  _type: z.literal("detailList"),
  title: z.string().optional(),
  items: z.array(
    z.object({
      label: z.string(),
      detail: z.string(),
    }),
  ),
})

// menuSectionsのスキーマを定義

// 個々のフードアイテムのスキーマ
const basicfoodListBlockSchema = z.object({
  _type: z.literal("foodList"),
  title: z.string().optional(),
  items: z.array(
    z.object({
      name: z.string().describe("メニュー名"), // describeで説明を追加可能
      price: z.number().int().positive().optional(),
      description: z.string().optional(),
    }),
  ),
})

// 個々のドリンクアイテムのスキーマ
const drinkItemSchema = z.object({
  name: z.string().describe("ドリンク名"),
  price: z
    .number()
    .int()
    .positive()
    .optional()
    .describe("価格（税込、ボトルキープなど価格なしの場合あり）"),
  description: z.string().optional().describe("補足説明（例: 「各種」など）"),
})

// ドリンクカテゴリのスキーマ
const drinkCategorySchema = z.object({
  category: z.string().describe("ドリンクカテゴリ名（例: ハイボール, ビール）"),
  items: z.array(drinkItemSchema).nonempty().describe("カテゴリ内のドリンクアイテムリスト"),
})

const drinkListBlockSchema = z.object({
  _type: z.literal("drinkList"),
  title: z.string().optional(),
  items: z.array(drinkCategorySchema).nonempty().describe("ドリンクカテゴリのリスト"),
})

// 個々の日本酒アイテムのスキーマ
const sakeItemSchema = z.object({
  name: z.string().describe("日本酒の名称（例: 純米吟醸, 大吟醸）"),
  price: z.number().int().positive().describe("価格（税込、グラスなど単位あたり）"),
  size: z.string().optional().describe("提供サイズ（例: グラス, 一合, ボトル）"),
})

// 日本酒の銘柄ごとのスキーマ
const sakeBrandSchema = z.object({
  brand: z.string().describe("銘柄名（例: 黒竜, 新政）"),
  prefecture: z.string().describe("都道府県"),
  items: z.array(sakeItemSchema).nonempty().describe("銘柄内の日本酒アイテムリスト"),
  description: z.string().optional().describe("銘柄に関する補足説明"),
})

// sake コレクションのスキーマ
const sakeListBlockSchema = z.object({
  _type: z.literal("sakeList"),
  title: z.string().optional(),
  items: z.array(sakeBrandSchema).nonempty().describe("日本酒の銘柄リスト"),
})

const paragraphBlockSchema = z.object({
  _type: z.literal("paragraph"),
  text: z.string(), // Markdownを想定
})

// 情報コレクション ブロックタイプのUnionスキーマ
const infoSectionBlockSchemaUnion = z.union([
  keyValueBlockSchema,
  contactBlockSchema,
  linkBlockSchema,
  accessBlockSchema,
  detailListBlockSchema,
  paragraphBlockSchema,
])

// 情報コレクションのスキーマ
const infoSectionCollecton = defineCollection({
  type: "data", // APIからのJSONデータを想定
  schema: z.object({
    // `id` はファイル名 (slug) で管理するか、データに含めるか選択
    // id: z.string(), // データに含める場合はコメント解除
    title: z.string(),
    blocks: z.array(infoSectionBlockSchemaUnion), // 異なるブロックタイプの配列
  }),
})

//メニューコレクションのUnionスキーマ
const menuSectionBlockSchemaUnion = z.union([
  basicfoodListBlockSchema,
  drinkListBlockSchema,
  sakeListBlockSchema,
])

//メニューコレクションのスキーマ
const menuSectionCollection = defineCollection({
  type: "data",
  schema: z.object({
    blocks: z.array(menuSectionBlockSchemaUnion),
  }),
})

export const collections = {
  infoSections: infoSectionCollecton,
  menuSection: menuSectionCollection,
}

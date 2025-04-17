// src/content/config.ts
import { defineCollection, z } from "astro:content"

// shopInfoセクション ブロックタイプのスキーマを定義

const accessBlockSchema = z.object({
  _type: z.literal("access"),
  order: z.number().positive(),
  title: z.string().optional(),
  address: z.string().optional(),
  stationInfo: z.string().optional(),
  mapUrl: z.string().url().optional(),
})

const detailListBlockSchema = z.object({
  _type: z.literal("detailList"),
  order: z.number().positive(),
  title: z.string().optional(),
  items: z.array(
    z.object({
      label: z.string(),
      detail: z.string(),
    }),
  ),
})

/**
 * menuSectionsのスキーマを定義
 */

// 個々のフードアイテムのスキーマ
const foodListBlockSchema = z.object({
  _type: z.literal("foodList"),
  order: z.number().positive(),
  title: z.string().optional(),
  items: z.array(
    z.object({
      name: z.string(),
      price: z.number().int().positive().optional(),
      description: z.string().optional(),
    }),
  ),
})

// 個々のドリンクアイテムのスキーマ
const drinkItemSchema = z.object({
  name: z.string(),
  price: z.number().int().positive().optional(),
  description: z.string().optional(),
})

// ドリンクカテゴリのスキーマ
const drinkCategorySchema = z.object({
  category: z.string(),
  items: z.array(drinkItemSchema).nonempty(),
})

const drinkListBlockSchema = z.object({
  _type: z.literal("drinkList"),
  order: z.number().positive(),
  title: z.string().optional(),
  items: z.array(drinkCategorySchema).nonempty(),
})

// 個々の日本酒アイテムのスキーマ
const sakeItemSchema = z.object({
  name: z.string(),
  price: z.number().int().positive(),
  size: z.string().optional(),
})

// 日本酒の銘柄ごとのスキーマ
const sakeBrandSchema = z.object({
  brand: z.string().describe("銘柄名（例: 黒竜, 新政）"),
  prefecture: z.string().describe("都道府県"),
  items: z.array(sakeItemSchema).nonempty(),
  description: z.string().optional(),
})

// sake コレクションのスキーマ
const sakeListBlockSchema = z.object({
  _type: z.literal("sakeList"),
  order: z.number().positive(),
  title: z.string().optional(),
  items: z.array(sakeBrandSchema).nonempty(),
})

// 情報コレクション ブロックタイプのUnionスキーマ
const infoSectionBlockSchemaUnion = z.union([accessBlockSchema, detailListBlockSchema])

// 情報コレクションのスキーマ
const infoSectionCollecton = defineCollection({
  type: "data", // APIからのJSONデータを想定
  schema: infoSectionBlockSchemaUnion,
})

const menuSectionBlockSchemaUnion = z.union([
  foodListBlockSchema,
  drinkListBlockSchema,
  sakeListBlockSchema,
])

const menuSectionCollection = defineCollection({
  type: "data",
  schema: menuSectionBlockSchemaUnion,
})

export const collections = {
  shopinfo: infoSectionCollecton,
  menu: menuSectionCollection,
}

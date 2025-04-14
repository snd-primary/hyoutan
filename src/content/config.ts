import { defineCollection, z } from 'astro:content'

// 一品料理とやきとんのスキーマ
const foodsSchema = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    name: z.string(),
    price: z.number().optional(),
    description: z.string().optional(),
  }),
})

// ドリンク（日本酒以外）のスキーマ
const drinksSchema = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    name: z.string(),
    price: z.union([z.number(), z.string()]),
    description: z.string().optional(),
  }),
})

// 日本酒のスキーマ
const sakesSchema = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    brand: z.string(),
    prefecture: z.string(),
    name: z.string(),
    price: z.union([z.number(), z.string()]),
    description: z.string().optional(),
  }),
})

export const collections = {
  foods: foodsSchema,
  yakiton: foodsSchema,
  drinks: drinksSchema,
  sakes: sakesSchema,
}

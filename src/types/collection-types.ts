import type { CollectionEntry } from 'astro:content'

// Define typed map function helpers
export function mapYakiton(item: CollectionEntry<'yakiton'>) {
  return item
}

export function mapFoods(item: CollectionEntry<'foods'>) {
  return item
}

export function mapDrinks(item: CollectionEntry<'drinks'>) {
  return item
}

export function mapSakes(item: CollectionEntry<'sakes'>) {
  return item
}

// Define typed collection maps
export type DrinksByCategory = Record<string, CollectionEntry<'drinks'>[]>
export type SakeBrandInfo = { prefecture: string; items: CollectionEntry<'sakes'>[] }
export type SakeBrandMap = Record<string, SakeBrandInfo>

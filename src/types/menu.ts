export interface FoodItem {
  name: string
  price?: number
  description?: string
}

export interface DrinkItem {
  name: string
  price?: number
  description?: string
}

export interface DrinkBrand {
  brand: string
  prefecture: string
  items: DrinkItem[]
}

export type MenuItemType =
  | { type: 'food'; items: FoodItem[] }
  | { type: 'drink'; brands: DrinkBrand[] }

export interface Menu {
  id: string
  title: string
  content: MenuItemType
}

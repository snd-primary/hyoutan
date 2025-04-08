//メニューアイテムの基本形
export interface MenuItem {
  name: string
  price?: number
  description?: string
}

export interface SakeGroup {
  brand: string
  prefecture: string
  items: MenuItem[]
}

export interface CategoryGroup {
  category: string
  items: MenuItem[]
}

export interface MenuSection<T> {
  title: string
  contents: T[]
}

export type FoodMenu = MenuSection<MenuItem>
export type DrinkMenu = MenuSection<CategoryGroup>
export type SakeMenu = MenuSection<SakeGroup>

export type Menu = FoodMenu | DrinkMenu | SakeMenu

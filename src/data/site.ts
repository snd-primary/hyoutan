// ナビゲーションリンクのデータ型定義
export interface NavLink {
  href: string
  label?: string
}

// ヘッダーメニューのリンク
export const navLinks: NavLink[] = [
  { href: "#info", label: "基本情報" },
  { href: "#menu", label: "メニュー" },
  { href: "#access", label: "アクセス" },
  { href: "tel:000-0000-0000", label: "ご予約" },
]

//メニューセクション内のページ内リンク
export const menuTitles = {
  food: "#一品料理",
  yakiton: "#やきとん",
  sake: "#日本酒",
  drink: "#ドリンク",
}

//メタデータ
export const siteMeta = {
  title: "串とん亭日本酒酒場 | 三代目ひょうたん",
  description: "米子市富士見町にある串とん亭日本酒酒場三代目ひょうたん",
}

export const siteUrl = {
  root: import.meta.env.PROD
    ? ((import.meta.env.PUBLIC_BASEURL as string) ?? "")
    : (import.meta.env.DEVURL as string),
}

export interface SnsLink {
  name: string
  url: string
  ariaLabel: string
}

export const snsLinks: SnsLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/yakiton-sakaba",
    ariaLabel: "三代目ひょうたん公式Instagram",
  },
  {
    name: "X",
    url: "https://x.com/yakiton-sakaba",
    ariaLabel: "三代目ひょうたん公式X",
  },
  {
    name: "LINE",
    url: "https://line.me/yakiton-sakaba",
    ariaLabel: "三代目ひょうたん公式LINE",
  },
]

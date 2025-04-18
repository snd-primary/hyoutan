// ナビゲーションリンクのデータ型定義
export interface NavLink {
  href: string
  label?: string
}

export const sectionId = {
  concept: "concept",
  menu: {
    title: "menu",
    blocks: {
      food: "一品料理",
      yakiton: "やきとん",
      sake: "日本酒",
      drink: "ドリンク",
    },
  },
  shopInfo: "shop-info",
  sns: "sns",
  cta: "cta",
}

// ヘッダーメニューのリンク
export const navLinks: NavLink[] = [
  { href: `#${sectionId.concept}`, label: "コンセプト" },
  { href: `#${sectionId.menu.title}`, label: "メニュー" },
  { href: `#${sectionId.shopInfo}`, label: "店舗案内" },
  { href: `#${sectionId.cta}`, label: "ご予約" },
]

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
    url: "https://www.instagram.com/sandaimehyoutan3/",
    ariaLabel: "三代目ひょうたん公式Instagram",
  },
  {
    name: "X",
    url: "https://x.com/3Hyoutan",
    ariaLabel: "三代目ひょうたん公式X",
  },
  {
    name: "LINE",
    url: "https://page.line.me/195sgdop?oat_content=url&openQrModal=true",
    ariaLabel: "三代目ひょうたん公式LINE",
  },
]

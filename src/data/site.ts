// ナビゲーションリンクのデータ型定義
interface NavLink {
  href: string
  label: string
}

// ナビゲーションリンクのデータ
export const navLinks: NavLink[] = [
  { href: "#info", label: "基本情報" },
  { href: "#menu", label: "メニュー" },
  { href: "#access", label: "アクセス" },
  { href: "tel:000-0000-0000", label: "ご予約" },
]

export const siteMeta = {
  title: "串とん亭日本酒酒場 | 三代目ひょうたん",
  description: "米子市富士見町にある串とん亭日本酒酒場三代目ひょうたん",
}

export const siteUrl = {
  root: import.meta.env.PROD
    ? ((import.meta.env.PUBLIC_BASEURL as string) ?? "")
    : (import.meta.env.DEVURL as string),
}

// ナビゲーションリンクのデータ型定義
interface NavLink {
  href: string
  label: string
}

// ナビゲーションリンクのデータ
export const navLinks: NavLink[] = [
  { href: '#info', label: '基本情報' },
  { href: '#menu', label: 'メニュー' },
  { href: '#access', label: 'アクセス' },
  { href: 'tel:000-0000-0000', label: 'ご予約' },
]

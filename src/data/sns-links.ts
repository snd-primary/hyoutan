// src/data/snsLinks.ts
export interface SnsLink {
  name: string
  url: string
  icon: string // アイコン文字（簡易的な実装として）
}

export const snsLinks: SnsLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/yakiton-sakaba',
    icon: 'I',
  },
  {
    name: 'X',
    url: 'https://x.com/yakiton-sakaba',
    icon: 'X',
  },
  {
    name: 'LINE',
    url: 'https://line.me/yakiton-sakaba',
    icon: 'L',
  },
]

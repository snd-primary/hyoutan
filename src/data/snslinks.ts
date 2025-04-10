export interface SnsLink {
  name: string
  url: string
  ariaLabel: string
}

export const snsLinks: SnsLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/yakiton-sakaba',
    ariaLabel: '三代目ひょうたん公式Instagram',
  },
  {
    name: 'X',
    url: 'https://x.com/yakiton-sakaba',
    ariaLabel: '三代目ひょうたん公式X',
  },
  {
    name: 'LINE',
    url: 'https://line.me/yakiton-sakaba',
    ariaLabel: '三代目ひょうたん公式LINE',
  },
]

///////////////////////////
// ↓ OLD たぶん消す↓
// getImageの使い方知りたくて実装しただけ。
///////////////////////////

/* import { getImage } from 'astro:assets'
import type { GetImageResult } from 'astro'

import instagramLogo from '../assets/logo/brandlogo-instagram.png'
import xLogo from '../assets/logo/brandlogo-x.png'
import lineLogo from '../assets/logo/brandlogo-line.png'

export interface SnsLink {
  name: string
  url: string
  logoSrc?: string
  ariaLabel: string
  optimizedSrc: Promise<GetImageResult>
}

export const snsLinks: SnsLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/yakiton-sakaba',
    logoSrc: '../assets/logo/brandlogo-instagram.png',
    ariaLabel: '三代目ひょうたん公式Instagram',
    optimizedSrc: getImage({ src: instagramLogo }),
  },
  {
    name: 'X',
    url: 'https://x.com/yakiton-sakaba',
    logoSrc: '../assets/logo/brandlogo-x.png',
    ariaLabel: '三代目ひょうたん公式X',
    optimizedSrc: getImage({ src: xLogo }),
  },
  {
    name: 'LINE',
    url: 'https://line.me/yakiton-sakaba',
    logoSrc: '../assets/logo/brandlogo-line.png',
    ariaLabel: '三代目ひょうたん公式LINE',
    optimizedSrc: getImage({ src: lineLogo }),
  },
]
 */

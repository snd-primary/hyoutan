import type React from "react"
import { menuTitles } from "@/data/menu.ts"
import { useEffect, useRef, useState } from "react"
import "../../styles/scroll-timeline.css"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// menuTitlesのキーの型を定義 (例: 'foods' | 'yakiton' | 'sake' | 'drink')
type MenuKey = keyof typeof menuTitles

export const MenuNav: React.FC = () => {
  // menuTitlesを扱いやすいエントリー配列 ([key, value]の配列) に変換
  const menuEntries = Object.entries(menuTitles) as [MenuKey, string][]

  // 初期状態として最初のメニューのキーを設定 (例: 'foods')
  const initialMenukey: MenuKey = menuEntries[0][0]

  // 現在選択されているメニューのキーを保持する状態
  const [currentMenuKey, setCurrentMenuKey] = useState<MenuKey>(initialMenukey)

  const handleMenuItemSelect = (
    selectedKey: MenuKey,
    e: React.MouseEvent<HTMLAnchorElement>,
  ): void => {
    setCurrentMenuKey(selectedKey)
  }

  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = menuRef.current
    if (!element) return

    const animation = gsap.fromTo(
      element,
      {
        borderRadius: 48,
      },
      {
        borderRadius: 0,
        width: "100%",
        transformOrigin: "center",
        scrollTrigger: {
          trigger: element,
          start: "center 50%", // ビューポートの80%位置に要素の上端が来たら開始
          end: "center 8%", // ビューポートの20%位置に要素の上端が来たら終了
          scrub: true,
          markers: true,
        },
      },
    )

    // コンポーネントのアンマウント時に実行されるクリーンアップ関数
    return () => {
      if (animation.scrollTrigger) {
        animation.scrollTrigger.kill()
      }
    }
  }, [])

  return (
    <div ref={menuRef} className={`sticky-menu`}>
      <nav className="grid grid-cols-4 grid-rows-1 w-2xl bg-primary h-16 place-content-center place-items-center gap-0.5 p-0.5 rounded-4xl">
        {menuEntries.map(([key, title], i) => (
          <a
            key={key}
            href={`#${title}`}
            className={`w-full h-full bg-accent grid place-content-center nth-[1]:rounded-s-4xl nth-last-[1]:rounded-e-4xl duration-150 ease-in-out transition-colors hover:bg-primary
						${currentMenuKey === key ? "bg-primary text-background" : "bg-accent hover:bg-primary active:bg-parimary"}
						
						`}
            onClick={(e) => handleMenuItemSelect(key, e)}
          >
            {title}
          </a>
        ))}
      </nav>
    </div>
  )
}

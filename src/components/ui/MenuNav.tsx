import type React from "react"
import { useRef, useState } from "react"
import { sectionId } from "@/data/site.ts"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const menuTitles = sectionId.menu.blocks

// menuTitlesのキーの型を定義
type MenuKey = keyof typeof menuTitles

export const MenuNav: React.FC = () => {
  // menuTitlesをエントリー配列に変換
  const menuEntries = Object.entries(menuTitles) as [MenuKey, string][]

  // 初期状態として最初のメニューのキーを設定
  const initialMenuKey: MenuKey = menuEntries[0][0]

  // 現在選択されているメニューのキーを保持する状態
  const [currentMenuKey, setCurrentMenuKey] = useState<MenuKey>(initialMenuKey)

  const handleMenuItemSelect = (
    selectedKey: MenuKey,
    e: React.MouseEvent<HTMLAnchorElement>,
  ): void => {
    // e.preventDefault()
    setCurrentMenuKey(selectedKey)

    // スムーズスクロール実装
    const targetId = `#${menuTitles[selectedKey]}`
    const targetElement = document.querySelector(targetId)

    if (targetElement) {
      // ヘッダーの高さを考慮したオフセット
      const headerOffset = 120
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  // GSAP ScrollTrigger
  const menuRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={menuRef}
      className={`sticky w-full  mx-auto md:w-fit backdrop-blur-2xl top-[9vh]  md:mb-10 py-3 px-4 z-50 transition-all duration-300 border border-primary-foreground/10 rounded-full grid place-items-center justify-items-center`}
    >
      <nav className="w-full md:w-3xl mx-auto grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-4">
        {menuEntries.map(([key, title]) => (
          <a
            key={key}
            href={`#${title}`}
            className={`block rounded-3xl w-full h-full py-2.5 px-2 text-center border border-primary-foreground  transition-all duration-200 text-sm sm:text-base font-medium
                ${
                  currentMenuKey === key
                    ? "bg-primary text-background shadow-md transform"
                    : "bg-background/10 text-foreground hover:bg-primary/70 hover:text-background"
                }`}
            onClick={(e) => handleMenuItemSelect(key, e)}
          >
            {title}
          </a>
        ))}
      </nav>
    </div>
  )
}

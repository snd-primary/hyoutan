import type React from 'react'
import { menuTitles } from '@/data/menu.ts'
import { useState } from 'react'

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

  return (
    <div className="sticky top-20 left-0 w-full mx-auto grid place-items-center z-50 ">
      <nav className="grid grid-cols-4 grid-rows-1 w-2xl bg-primary h-16 place-content-center place-items-center gap-0.5 p-0.5 rounded-4xl">
        {menuEntries.map(([key, title], i) => (
          <a
            href={`#${title}`}
            className={`w-full h-full bg-accent grid place-content-center nth-[1]:rounded-s-4xl nth-last-[1]:rounded-e-4xl duration-150 ease-in-out transition-colors hover:bg-primary
						${currentMenuKey === key ? 'bg-primary text-background' : 'bg-accent hover:bg-primary active:bg-parimary'}
						
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

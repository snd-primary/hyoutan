import type React from "react"
import { useEffect, useState } from "react"
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import { sectionId, siteMeta } from "@/data/site.ts"

const globalNavLinks = Object.entries(sectionId).map((i) => i[1].title)

type NavButtonProps = {
  onClick: () => void
  icon: React.ReactNode
  ariaLabel: string
}

const NavButton: React.FC<NavButtonProps> = ({ onClick, icon, ariaLabel }) => {
  return (
    <button
      className="md:hidden p-1 hover:bg-foreground/80 rounded-md transition-colors"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {icon}
    </button>
  )
}

export const MobileNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const openMenu = () => {
    setIsMenuOpen(() => true)
  }

  const closeMenu = () => {
    setIsMenuOpen(() => false)
  }

  //メニューオープン時、body要素のスクロールを抑止
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isMenuOpen])

  // リンククリック時にメニューを閉じるためのハンドラー
  const handleLinkClick = () => {
    closeMenu()
  }

  return (
    <>
      <NavButton
        onClick={openMenu}
        ariaLabel="メニューを開く"
        icon={<HamburgerMenuIcon width={30} height={30} />}
      />
      <div
        className={`fixed inset-0 bg-foreground/95 z-60 transform transition-transform duration-300 md:hidden  grid grid-cols-1 w-full h-dvh items-start ${isMenuOpen ? "" : "-translate-y-full"}`}
      >
        <div className="flex justify-between items-center mb-8 p-4">
          <span className="flex items-center  ">
            {siteMeta.title}
            <br />
            公式ホームページメニュー
          </span>
          <NavButton
            onClick={closeMenu}
            ariaLabel="メニューを閉じる"
            icon={<Cross1Icon width={30} height={30} />}
          />
        </div>
        <div role="navigation" className="block">
          <ul className="px-5">
            {globalNavLinks.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="block  py-2 hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`#${sectionId.shopInfo.blocks.contact}`}
                className="block py-2 hover:text-primary transition-colors"
                onClick={handleLinkClick}
              >
                {sectionId.shopInfo.blocks.contact}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

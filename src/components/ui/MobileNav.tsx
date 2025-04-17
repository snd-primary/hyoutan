import type React from "react"
import { navLinks } from "@/data/site.ts"
import { useEffect, useState } from "react"
import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons"

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

  return (
    <>
      <NavButton
        onClick={openMenu}
        ariaLabel="メニューを開く"
        icon={<HamburgerMenuIcon width={30} height={30} />}
      />
      <div
        className={`fixed inset-0 bg-foreground/95 z-50 transform transition-transform duration-300 md:hidden  grid grid-cols-1 w-full h-dvh items-start ${isMenuOpen ? "" : "-translate-y-full"}`}
      >
        <div className="flex justify-between items-center mb-8 p-4">
          <a href="/" className="flex items-center text-xl font-bold">
            やきとん酒場
          </a>
          <NavButton
            onClick={closeMenu}
            ariaLabel="メニューを閉じる"
            icon={<Cross1Icon width={30} height={30} />}
          />
        </div>
        <div role="navigation" className="block">
          <ul className="block">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="block py-2 hover:text-primary transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

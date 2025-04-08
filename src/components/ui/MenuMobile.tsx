import type React from 'react'
import type { NavLink } from '../Header.astro'
import { useEffect, useState } from 'react'
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'

type Props = {
  navLinks: NavLink[]
}

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

export const MenuMobile: React.FC<Props> = ({ navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const openMenu = () => {
    setIsMenuOpen(() => true)
  }

  const closeMenu = () => {
    setIsMenuOpen(() => false)
  }

  return (
    <>
      <NavButton onClick={openMenu} ariaLabel="メニューを開く" icon={<HamburgerMenuIcon />} />
      <div
        className={`fixed inset-0 bg-foreground/95 z-50 transform transition-transform duration-300 md:hidden  grid grid-cols-1 w-full h-dvh items-start ${isMenuOpen ? '' : '-translate-y-full'}`}
      >
        <div className="flex justify-between items-center mb-8 p-4">
          <a href="/" className="flex items-center text-xl font-bold">
            やきとん酒場
          </a>
          <NavButton onClick={closeMenu} ariaLabel="メニューを閉じる" icon={<Cross1Icon />} />
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

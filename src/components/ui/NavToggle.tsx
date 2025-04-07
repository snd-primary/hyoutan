import { useState } from 'react'
import { Cross1Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'

export const NavToggle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handleMenuOpen = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <button
      className="md:hidden p-1 hover:bg-foreground/80 rounded-md transition-colors"
      aria-label="メニュー開閉ボタン"
      onClick={handleMenuOpen}
    >
      {isMenuOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
    </button>
  )
}

import type { NavLink } from '../Header.astro'

type Props = {
  navLinks: NavLink[]
  isMenuOpen: boolean
}

export const MenuMobile: React.FC<Props> = ({ navLinks, isMenuOpen }) => {
  return (
    <div
      id="mobile-menu"
      className={`fixed inset-0 bg-foreground/95 z-50 transform transition-transform duration-300 md:hidden ${isMenuOpen ? '' : '-translate-y-full'}`}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-8">
          <a href="/" className="flex items-center text-xl font-bold">
            <img
              src="/api/placeholder/40/40"
              alt="やきとん酒場"
              className="h-10 mr-2 rounded border-2 border-background p-0.5 bg-white"
            />
            やきとん酒場
          </a>
        </div>
        <nav>
          <ul className="space-y-6 text-center text-xl">
            {navLinks.map((link) => (
              <li>
                <a href={link.href} className="block py-2 hover:text-primary transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

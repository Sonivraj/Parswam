import clsx from 'clsx'
import Link from 'next/link'
import { TextLink } from '../text'
import CartIconBtn from './cart-icon-btn'
import HamburgerIconMenu from './hamburger-icon-menu'
import SearchIconPopover from './search-icon-popover'
import UserIconPopover from './user-icon-popover'

interface HeaderProps {
  className?: string
  hasBottomBorder?: boolean
  variant?: 'default' | 'bg-white-text-black'
}

export default function Header({ className, hasBottomBorder = true, variant = 'default' }: HeaderProps) {
  return (
    <div
      className={clsx(
        className,
        'group z-10 w-full',
        variant === 'default' && 'relative',
        variant === 'bg-white-text-black' &&
          'absolute inset-x-0 top-0 bg-transparent text-white transition-colors duration-300'
      )}
    >
      <nav aria-label="Global" className="container">
        <div
          className={clsx(
            'flex items-center justify-between border-zinc-950/10 py-6 dark:border-white/10',
            hasBottomBorder && 'border-b'
          )}
        >
          {/* LEFT LOGO */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Parswam</span>
              {/* Replace Logo with Image from public folder */}
              <div className="flex items-center">
                <img src="/images/jeans/logo-b.png" alt="Company Logo" className="h-8 w-auto" />
              </div>
            </Link>
          </div>

          {/* MAIN CENTER MENUS */}
          <div className="hidden lg:flex lg:gap-x-8">
            <TextLink href="/collections/all">Shop</TextLink>
            <TextLink href="/about-us">About Us</TextLink>
            <TextLink href="/blog">Blogs</TextLink>
            <TextLink href="/contact">Contact Us</TextLink>
          </div>

          {/* RIGHT ICON BUTTONS */}
          <div className="flex flex-1 justify-end gap-x-2.5 md:gap-x-4 xl:gap-x-5">
            <HamburgerIconMenu />
            <SearchIconPopover />

            <UserIconPopover />
            <CartIconBtn />
          </div>
        </div>
      </nav>
    </div>
  )
}

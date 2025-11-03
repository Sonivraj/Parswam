import { Logo } from '@/app/logo'
import clsx from 'clsx'
import Link from 'next/link'
import { Text } from './text'

// Define the navigation data
const navigationData = {
  quicklinks: [
    { name: 'MENS JEANS', href: '#' },
    { name: 'KIDS JEANS', href: '#' },
    { name: 'CARGO & JOGGERS', href: '#' },
    { name: 'NEW ARRIVALS', href: '#' },
    { name: 'FEATURED COLLECTION', href: '#' },
    { name: 'PREMIUM COLLECTION', href: '#' },
    { name: 'ONLINE EXCLUSIVE', href: '#' },
    { name: 'BEST SALE', href: '#' },
  ],
  corporate: [
    { name: 'ABOUT US', href: '#' },
    { name: 'CAREER', href: '#' },
    { name: 'BECOME A FRANCHISE', href: '#' },
    { name: 'B2B INQUIRY', href: '#' },
    { name: 'OUR STORY', href: '#' },
  ],
  help: [
    { name: 'ORDER STATUS & TRACKING', href: '#' },
    { name: 'CONTACT US', href: '#' },
    { name: 'RETURN & EXCHANGE POLICY', href: '#' },
    { name: 'TERM & CONDITION', href: '#' },
    { name: 'PRIVACY POLICY', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

interface FooterProps {
  className?: string
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={clsx('border-t border-gray-200 bg-white', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
            {/* Brand section with logo */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {/* Logo and brand name */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Logo />
                  </div>
                  <Text className="text-sm font-semibold tracking-wide text-gray-700 uppercase"></Text>
                </div>
                <Text className="text-center text-sm leading-relaxed text-gray-600 md:text-left lg:text-justify">
                  ESTABLISHED IN 2008, WE'VE EVOLVED FROM A HUMBLE FASHION MANUFACTURER INTO A LEADING TRENDSETTER —
                  REDEFINING STYLE WITH TIMELESS DESIGNS, UNMATCHED COMFORT AND THE FINEST BRANDED FABRICS.
                </Text>
              </div>
            </div>

            {/* Navigation columns */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-3">
              {/* Quick Links Column */}
              <div>
                <Text className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase">QUICK LINK®</Text>
                <ul className="space-y-3">
                  {navigationData.quicklinks.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block py-1 text-sm text-gray-600 transition-colors duration-200 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Corporate Column */}
              <div>
                <Text className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase">CORPORATE</Text>
                <ul className="space-y-3">
                  {navigationData.corporate.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block py-1 text-sm text-gray-600 transition-colors duration-200 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Let Us Help You Column */}
              <div>
                <Text className="mb-4 text-sm font-semibold tracking-wider text-gray-900 uppercase">
                  LET US HELP YOU
                </Text>
                <ul className="space-y-3">
                  {navigationData.help.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block py-1 text-sm text-gray-600 transition-colors duration-200 hover:text-gray-900"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <Text className="text-sm text-gray-500">© 2025 PARSWANG, ALL RIGHTS RESERVED.</Text>
            </div>

            {/* Social links */}
            <div className="mt-4 flex space-x-6 md:mt-0">
              {navigationData.social.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 transition-colors duration-200 hover:text-gray-600"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'

const menuItems: string[] = []

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header>
      <nav className="fixed top-0 left-0 z-50 w-full">
        <div
          className={cn(
            // 🔥 Removed mx-auto + max-w-6xl so it's full width
            'w-full flex items-center justify-between px-6 lg:px-12 py-4 transition-all duration-300',
            isScrolled && 'bg-background/80 backdrop-blur-lg shadow-md'
          )}
        >
          {/* Brand on the far left */}
          <Link href="/">
            <h1 className="text-2xl font-bold tracking-tight text-white">
              BotanicaRx <span className="text-emerald-500">.</span>
            </h1>
          </Link>

          {/* Desktop menu (currently empty, but stays in center if needed) */}
          <div className="hidden lg:flex gap-8 text-sm flex-1 justify-center">
            {menuItems.map((item, index) => (
              <li key={index}></li>
            ))}
          </div>

          {/* Right side: Contact + burger */}
          <div className="flex items-center gap-4">
            {/* Contact button (desktop) */}
            <a
              href="mailto:you@example.com"
              className="hidden lg:inline-block bg-emerald-600 text-white hover:bg-black hover:text-white font-semibold py-2 px-6 rounded-lg shadow transition"
            >
              Contact
            </a>

            {/* Mobile burger */}
            <button
              onClick={() => setMenuState(!menuState)}
              aria-label={menuState ? 'Close Menu' : 'Open Menu'}
              className="lg:hidden p-2.5"
            >
              {menuState ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

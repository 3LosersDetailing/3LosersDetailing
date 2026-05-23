'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'glass py-3' : 'bg-transparent py-5'
        )}
      >
     <div className="container mx-auto px-4 flex items-center justify-between">
  {/* Logo */}
  <Link
    href="/"
    className="relative w-[140px] h-[60px] flex-shrink-0"
  >
    <Image
      src="/images/Logo.png"
      alt="3Losers Mobile Detailing"
      fill
      className="object-contain"
      priority
    />
  </Link>

  {/* Desktop Navigation */}
  <nav className="hidden lg:flex items-center gap-8">
    {navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          'relative text-sm font-medium transition-colors duration-300 hover:text-lime',
          pathname === link.href ? 'text-lime' : 'text-white/80'
        )}
      >
        {link.label}

        {pathname === link.href && (
          <motion.div
            layoutId="navIndicator"
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-lime"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
      </Link>
    ))}
  </nav>

  {/* Desktop CTA */}
  <div className="hidden lg:flex items-center gap-4">
    <a
      href="tel:+1 6193155836"
      className="flex items-center gap-2 text-sm text-white/80 hover:text-lime transition-colors"
    >
      <Phone className="w-4 h-4" />
      <span>+1 619 315 5836</span>
    </a>

    <Link
      href="/booking"
      className="bg-lime text-black font-semibold px-6 py-2.5 rounded-lg hover:glow-lime transition-all duration-300 text-sm"
    >
      Book Now
    </Link>
  </div>

  {/* Mobile Menu Button */}
  <button
    onClick={() => setIsOpen(!isOpen)}
    className="lg:hidden p-2 text-white hover:text-lime transition-colors"
    aria-label="Toggle menu"
  >
    {isOpen ? (
      <X className="w-6 h-6" />
    ) : (
      <Menu className="w-6 h-6" />
    )}
  </button>
</div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-xl">
              <div className="flex flex-col items-center justify-center h-full gap-8 pt-20">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'text-2xl font-semibold transition-colors duration-300',
                        pathname === link.href ? 'text-lime' : 'text-white hover:text-lime'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8"
                >
                  <Link
                    href="/booking"
                    className="bg-lime text-black font-bold px-10 py-4 rounded-lg hover:glow-lime transition-all duration-300 text-lg"
                  >
                    Book Now
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

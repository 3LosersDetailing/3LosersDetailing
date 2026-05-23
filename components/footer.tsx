'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

import {
 
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Send,
  Globe
} from 'lucide-react'
import { useState } from 'react'

const socialLinks = [
  {
    name: "Instagram",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    href: "#"
  },
  {
    name: "Facebook",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    href: "#"
  },
  {
    name: "TikTok",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
      </svg>
    ),
    href: "#"
  }
]

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/booking', label: 'Book Now' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/contact', label: 'Contact' },
]

const services = [
  { href: '/services#regular', label: 'Regular Wash' },
  { href: '/services#wax', label: 'Inside Outside Wax' },
  { href: '/services#full', label: 'Full Detailing' },
]

// const socialLinks = [
//   { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
//   { href: 'https://facebook.com', icon: FacebookIcon, label: 'Facebook' },
//   { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
// ]

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="bg-[#030303] border-t border-white/5">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">

<Link
  href="/"
  className="relative w-[170px] h-[80px] block mb-6"
>
  <Image
    src="/images/Logo.png"
    alt="3Losers Mobile Detailing"
    fill
    className="object-contain"
    priority
  />
</Link>

<p className="text-white/60 text-sm leading-relaxed mb-6">
  Premium mobile car detailing services at your doorstep.
  We bring the car wash to you with professional results.
</p>

<div className="flex gap-4">
  {socialLinks.map((social) => (
    <motion.a
      key={social.name}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      className="w-10 h-10 rounded-lg glass flex items-center justify-center text-white/60 hover:text-lime transition-all duration-300"
      aria-label={social.name}
    >
      {social.icon} 
    </motion.a>
  ))}
</div>
</div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-lime transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-lime" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-white/60 hover:text-lime transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-lime" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h5 className="font-medium text-white mb-4 text-sm">Business Hours</h5>
              <div className="space-y-1 text-white/60 text-sm">
                <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 5:00 PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-6 text-lg">Contact Us</h4>

            <ul className="space-y-4 mb-8">
              <li>
                <a href="tel:+1 6193155836" className="text-white/60 hover:text-lime transition-colors duration-300 text-sm flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 text-lime" />
                  +1 619 315 5836  
                </a>
              </li>

              <li>
                <a href="mailto:Threelosersdetailing@outlook.com" className="text-white/60 hover:text-lime transition-colors duration-300 text-sm flex items-start gap-3">
                  <Mail className="w-4 h-4 mt-0.5 text-lime" />
                  Threelosersdetailing@outlook.com
                </a>
              </li>

              <li>
                <span className="text-white/60 text-sm flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-lime" />
                  Mobile Service - We Come To You!
                </span>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <h5 className="font-medium text-white mb-4 text-sm">Newsletter</h5>

              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 pr-12 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-lime/50 transition-colors"
                />

                <button
                  type="submit"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-lime rounded-md flex items-center justify-center text-black"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lime text-xs mt-2"
                >
                  Thanks for subscribing!
                </motion.p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} 3Losers Mobile Detailing. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/faq" className="text-white/40 hover:text-lime text-sm transition-colors">
              FAQ
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/contact" className="text-white/40 hover:text-lime text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
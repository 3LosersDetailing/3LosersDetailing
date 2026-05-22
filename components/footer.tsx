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

{/* <div className="flex gap-4">
  {socialLinks.map((social) => (
    <motion.a
      key={social.label}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      className="w-10 h-10 rounded-lg glass flex items-center justify-center text-white/60 hover:text-lime transition-all duration-300"
      aria-label={social.label}
    >
      <social.icon className="w-5 h-5" />
    </motion.a>
  ))}
</div> */}
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
                  619 315 5836  
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
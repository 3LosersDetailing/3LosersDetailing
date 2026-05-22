"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const faqs = [
  {
    question: "How long does detailing take?",
    answer: "Service times vary based on the package selected. A Regular Wash typically takes 45-60 minutes. Inside Outside Wax takes about 1.5-2 hours. Full Detailing can take 3-5 hours depending on the vehicle size and condition. We always provide accurate time estimates before starting."
  },
  {
    question: "Do you come to apartments?",
    answer: "Absolutely! We service apartments, condos, office parking lots, and any location where you can park your vehicle. We bring all necessary equipment and water supply with us. Just let us know any specific parking or access instructions when booking."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express, Discover), debit cards, Apple Pay, Google Pay, Venmo, and cash. Payment is collected after the service is complete and you're satisfied with the results."
  },
  {
    question: "Do I need to provide water?",
    answer: "No, we are completely self-sufficient! Our mobile detailing units carry their own water supply, power, and all necessary equipment. You don't need to provide anything - just access to your vehicle."
  },
  {
    question: "What areas do you service?",
    answer: "We currently service San Diego and surrounding areas. Contact us to confirm service availability in your specific location."
  },
  {
    question: "How do I book an appointment?",
    answer: "Booking is easy! You can book directly through our website using the online booking form, call us at (555) 123-4567, or send us a message through our contact page. We'll confirm your appointment within 1 hour during business hours."
  },
  {
    question: "What is included in full detailing?",
    answer: "Our Full Detailing package includes: complete hand wash, wheel and tire cleaning, clay bar treatment, paint decontamination, hand wax protection, full interior vacuum, steam cleaning, leather conditioning, dashboard and trim treatment, window cleaning inside and out, door jamb cleaning, and premium sealant application. It's our most comprehensive service!"
  },
  {
    question: "Can I stay in my car during the service?",
    answer: "For safety and to allow our team to work efficiently, we ask that you step out of the vehicle during the detailing process. You're welcome to watch nearby or we can notify you when we're finished!"
  },
  {
    question: "What if it rains on my appointment day?",
    answer: "We monitor weather closely. If rain is forecasted, we'll contact you to reschedule at no additional cost. If covered parking is available at your location, we can often proceed with the service."
  },
  {
    question: "Do you offer any guarantees?",
    answer: "Yes! We offer a 100% satisfaction guarantee. If you're not completely happy with our work, we'll re-do the service at no extra charge. We take pride in our work and want every customer to be thrilled with the results."
  }
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-lime/5 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              Frequently Asked <span className="text-lime">Questions</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Got questions? We&apos;ve got answers. Find everything you need to know about our mobile detailing services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="mb-4"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full glass-card p-6 rounded-xl text-left transition-all ${
                    openIndex === index ? "border-lime/50" : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-lg font-bold text-white pr-8">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0"
                    >
                      <svg
                        className={`w-6 h-6 transition-colors ${
                          openIndex === index ? "text-lime" : "text-gray-500"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </div>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-400 mt-4 leading-relaxed">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="glass-card p-12 rounded-2xl border-lime/30">
              <h2 className="text-3xl font-black text-white mb-4">
                Still Have <span className="text-lime">Questions?</span>
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Can&apos;t find what you&apos;re looking for? Our team is here to help. Reach out and we&apos;ll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-lime text-black font-bold px-8 py-4 rounded-full hover:bg-lime/90 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact Us
                </Link>
                <a
                  href="tel:+15551234567"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-bold px-8 py-4 rounded-full border border-white/20 hover:bg-white/20 transition-all"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-xl text-center group hover:border-lime/50 transition-all"
            >
              <div className="w-14 h-14 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lime/30 transition-colors">
                <svg className="w-7 h-7 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">View Our Services</h3>
              <p className="text-gray-500 text-sm mb-4">Explore our detailing packages</p>
              <Link href="/services" className="text-lime text-sm font-medium hover:underline">
                Learn More →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6 rounded-xl text-center group hover:border-lime/50 transition-all"
            >
              <div className="w-14 h-14 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lime/30 transition-colors">
                <svg className="w-7 h-7 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">Book Now</h3>
              <p className="text-gray-500 text-sm mb-4">Schedule your appointment</p>
              <Link href="/booking" className="text-lime text-sm font-medium hover:underline">
                Book Today →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 rounded-xl text-center group hover:border-lime/50 transition-all"
            >
              <div className="w-14 h-14 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lime/30 transition-colors">
                <svg className="w-7 h-7 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-2">Read Reviews</h3>
              <p className="text-gray-500 text-sm mb-4">See what customers say</p>
              <Link href="/reviews" className="text-lime text-sm font-medium hover:underline">
                View Reviews →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

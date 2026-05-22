'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Check, 
  Star,
  ArrowRight,
  Sparkles,
  Shield,
  Droplets,
  Wind
} from 'lucide-react'

// Services Data
const servicesData = [
  {
    id: 'regular',
    title: 'Regular Wash',
    price: 150,
    description: 'Our essential exterior cleaning package for maintaining your vehicle\'s appearance.',
    image: '/images/service-wash.jpg',
    features: [
      'Hand Wash Exterior',
      'Wheel & Tire Cleaning',
      'Windows Cleaned Inside & Out',
      'Door Jambs Cleaned',
      'Towel Dry',
      'Tire Dressing',
    ],
    icon: Droplets,
  },
  {
    id: 'wax',
    title: 'Inside Outside Wax',
    price: 200,
    description: 'Complete interior and exterior care with protective wax for lasting shine.',
    image: '/images/service-wax.jpg',
    popular: true,
    features: [
      'Everything in Regular Wash',
      'Full Interior Vacuum',
      'Dashboard & Console Wipe Down',
      'Leather/Vinyl Conditioning',
      'Hand Wax Protection',
      'UV Protection Applied',
      'Air Freshener',
    ],
    icon: Shield,
  },
  {
    id: 'full',
    title: 'Full Detailing',
    price: 250,
    description: 'The ultimate detailing experience with deep cleaning and premium protection.',
    image: '/images/service-detail.jpg',
    features: [
      'Everything in Wax Package',
      'Deep Interior Steam Cleaning',
      'Carpet & Upholstery Shampooing',
      'Leather Deep Conditioning',
      'Paint Decontamination',
      'Clay Bar Treatment',
      'Premium Sealant Protection',
      'Engine Bay Cleaning',
      'Headlight Restoration',
    ],
    icon: Sparkles,
  },
]

// Hero Section
function ServicesHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#050505]" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-lime text-sm font-medium tracking-wider uppercase">Our Services</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6 text-balance">
            Premium Detailing Packages
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            Professional-grade car care delivered to your location. 
            Choose the package that best fits your needs.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Service Cards Section
function ServiceCards() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-4">
        <div className="space-y-32">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative rounded-2xl overflow-hidden"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-lime text-black text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2">
                      <Star className="w-4 h-4 fill-current" />
                      Most Popular
                    </div>
                  )}
                </motion.div>
                {/* Floating price tag */}
                <div className="absolute -bottom-6 left-6 bg-[#0a0a0a] border border-lime/30 rounded-xl p-4 glow-lime-sm">
                  <span className="text-white/60 text-sm">Starting at</span>
                  <div className="text-lime text-4xl font-bold">${service.price}</div>
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-lime" />
                  </div>
                  <h2 className="text-4xl font-bold text-white">{service.title}</h2>
                </div>
                <p className="text-white/70 text-lg mb-8">{service.description}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-white/80">
                      <Check className="w-5 h-5 text-lime flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/booking"
                  className={`inline-flex items-center gap-2 font-semibold px-8 py-4 rounded-lg transition-all duration-300 ${
                    service.popular
                      ? 'bg-lime text-black hover:glow-lime'
                      : 'glass text-white hover:border-lime/50'
                  }`}
                >
                  Book This Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Comparison Table
function ComparisonTable() {
  const features = [
    { name: 'Hand Wash Exterior', regular: true, wax: true, full: true },
    { name: 'Wheel & Tire Cleaning', regular: true, wax: true, full: true },
    { name: 'Windows Cleaned', regular: true, wax: true, full: true },
    { name: 'Towel Dry', regular: true, wax: true, full: true },
    { name: 'Tire Dressing', regular: true, wax: true, full: true },
    { name: 'Interior Vacuum', regular: false, wax: true, full: true },
    { name: 'Dashboard Wipe Down', regular: false, wax: true, full: true },
    { name: 'Hand Wax Protection', regular: false, wax: true, full: true },
    { name: 'UV Protection', regular: false, wax: true, full: true },
    { name: 'Steam Cleaning', regular: false, wax: false, full: true },
    { name: 'Carpet Shampooing', regular: false, wax: false, full: true },
    { name: 'Paint Decontamination', regular: false, wax: false, full: true },
    { name: 'Clay Bar Treatment', regular: false, wax: false, full: true },
    { name: 'Premium Sealant', regular: false, wax: false, full: true },
    { name: 'Engine Bay Cleaning', regular: false, wax: false, full: true },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-[#050505] to-[#080808]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-lime text-sm font-medium tracking-wider uppercase">Compare</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 text-balance">
            Service Comparison
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-x-auto"
        >
          <table className="w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-6 px-4 text-white/60 font-medium">Features</th>
                <th className="py-6 px-4 text-center">
                  <div className="text-white font-semibold">Regular Wash</div>
                  <div className="text-lime font-bold text-2xl">$150</div>
                </th>
                <th className="py-6 px-4 text-center bg-lime/5 rounded-t-xl">
                  <div className="text-lime font-semibold flex items-center justify-center gap-2">
                    <Star className="w-4 h-4 fill-current" />
                    Inside Outside Wax
                  </div>
                  <div className="text-lime font-bold text-2xl">$200</div>
                </th>
                <th className="py-6 px-4 text-center">
                  <div className="text-white font-semibold">Full Detailing</div>
                  <div className="text-lime font-bold text-2xl">$250</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={feature.name} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 text-white/80">{feature.name}</td>
                  <td className="py-4 px-4 text-center">
                    {feature.regular ? (
                      <Check className="w-5 h-5 text-lime mx-auto" />
                    ) : (
                      <span className="text-white/20">—</span>
                    )}
                  </td>
                  <td className={`py-4 px-4 text-center ${index === features.length - 1 ? 'rounded-b-xl' : ''} bg-lime/5`}>
                    {feature.wax ? (
                      <Check className="w-5 h-5 text-lime mx-auto" />
                    ) : (
                      <span className="text-white/20">—</span>
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {feature.full ? (
                      <Check className="w-5 h-5 text-lime mx-auto" />
                    ) : (
                      <span className="text-white/20">—</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
        >
          <Link
            href="/booking"
            className="bg-lime text-black font-semibold px-8 py-4 rounded-lg hover:glow-lime transition-all duration-300 text-center"
          >
            Book Now
          </Link>
          <Link
            href="/contact"
            className="glass text-white font-semibold px-8 py-4 rounded-lg hover:border-lime/50 transition-all duration-300 text-center"
          >
            Have Questions?
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// Add-Ons Section
function AddOns() {
  const addOns = [
    { name: 'Ceramic Coating', price: 100, icon: Shield },
    { name: 'Odor Elimination', price: 50, icon: Wind },
    { name: 'Pet Hair Removal', price: 40, icon: Sparkles },
    { name: 'Headlight Restoration', price: 60, icon: Droplets },
  ]

  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-lime text-sm font-medium tracking-wider uppercase">Extras</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 text-balance">
            Premium Add-Ons
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Enhance any package with our premium add-on services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {addOns.map((addon, index) => (
            <motion.div
              key={addon.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-xl glass hover:border-lime/30 transition-all duration-500 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-lime/10 flex items-center justify-center mx-auto mb-4">
                <addon.icon className="w-6 h-6 text-lime" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
              <div className="text-lime text-2xl font-bold">+${addon.price}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// CTA Section
function ServicesCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#050505]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">
            Not Sure Which Package?
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Contact us for a personalized recommendation based on your vehicle and needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/booking"
              className="inline-flex items-center justify-center gap-3 bg-lime text-black font-bold text-lg px-10 py-4 rounded-xl hover:glow-lime transition-all duration-500"
            >
              Book Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 glass text-white font-bold text-lg px-10 py-4 rounded-xl hover:border-lime/50 transition-all duration-500"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceCards />
      <ComparisonTable />
      <AddOns />
      <ServicesCTA />
    </>
  )
}

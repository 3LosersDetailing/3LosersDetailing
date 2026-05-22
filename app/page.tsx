'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Sparkles, 
  Clock, 
  Shield, 
  Leaf, 
  Award, 
  Zap,
  ChevronRight,
  Star,
  MapPin,
  ArrowRight
} from 'lucide-react'

// Hero Section
function HeroSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="/images/hero-car.jpg"
          alt="Premium car detailing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </motion.div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-lime/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: -10,
              opacity: 0
            }}
            animate={{
              y: typeof window !== 'undefined' ? window.innerHeight + 10 : 1000,
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'linear'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-lime rounded-full text-lime text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            Premium Mobile Detailing
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-balance"
        >
          <span className="text-white">3Losers</span>
          <br />
          <span className="text-lime text-glow-lime">Mobile Detailing</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-white/70 mb-4 font-light"
        >
          Premium Mobile Car Detailing At Your Doorstep
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lime font-semibold tracking-[0.3em] text-sm mb-12"
        >
          CLEAN. PROTECT. PERFECT.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/booking"
            className="group relative bg-lime text-black font-bold px-8 py-4 rounded-lg overflow-hidden transition-all duration-300 hover:glow-lime"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book Appointment
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            href="/services"
            className="group glass px-8 py-4 rounded-lg font-semibold text-white hover:border-lime/50 transition-all duration-300 flex items-center gap-2"
          >
            View Services
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0, 1], y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-lime rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

// Why Choose Us Section
const features = [
  { icon: MapPin, title: 'We Come To You', description: 'Mobile service at your home, office, or anywhere you need us.' },
  { icon: Clock, title: 'Save Time', description: 'No more waiting at car washes. We work around your schedule.' },
  { icon: Award, title: 'Professional Results', description: 'Expert detailers with years of experience and top-tier equipment.' },
  { icon: Leaf, title: 'Eco Friendly', description: 'Water-saving techniques and biodegradable cleaning products.' },
  { icon: Shield, title: 'Premium Products', description: 'We use only the highest quality professional-grade products.' },
  { icon: Zap, title: 'Fast Service', description: 'Efficient detailing without compromising on quality.' },
]

function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-lime text-sm font-medium tracking-wider uppercase">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 text-balance">
            The Premium Detailing Experience
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group p-8 rounded-2xl glass hover:border-lime/30 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-lime/10 flex items-center justify-center mb-6 group-hover:bg-lime/20 group-hover:glow-lime-sm transition-all duration-500">
                <feature.icon className="w-7 h-7 text-lime" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Services Preview Section
const services = [
  {
    title: 'Regular Wash',
    price: 150,
    image: '/images/service-wash.jpg',
    features: ['Hand Wash Exterior', 'Wheel & Tire Cleaning', 'Windows Cleaned', 'Towel Dry'],
    href: '/services#regular'
  },
  {
    title: 'Inside Outside Wax',
    price: 200,
    image: '/images/service-wax.jpg',
    features: ['Everything in Regular Wash', 'Vacuum Interior', 'Interior Wipe Down', 'Hand Wax Protection'],
    href: '/services#wax',
    popular: true
  },
  {
    title: 'Full Detailing',
    price: 250,
    image: '/images/service-detail.jpg',
    features: ['Everything in Wax Package', 'Deep Interior Cleaning', 'Steam Cleaning', 'Premium Sealant'],
    href: '/services#full'
  }
]

function ServicesPreview() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#050505] to-[#080808] relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-lime text-sm font-medium tracking-wider uppercase">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 text-balance">
            Premium Detailing Packages
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Choose the perfect package for your vehicle. All services include our mobile convenience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative rounded-2xl overflow-hidden ${
                service.popular ? 'ring-2 ring-lime' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-20 bg-lime text-black text-xs font-bold px-3 py-1 rounded-full">
                  POPULAR
                </div>
              )}
              
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6 bg-[#0a0a0a] border border-white/5 border-t-0 rounded-b-2xl">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-white/60 text-sm">Starting at</span>
                  <span className="text-lime text-3xl font-bold">${service.price}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-white/70 text-sm">
                      <div className="w-1.5 h-1.5 bg-lime rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/booking"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular 
                      ? 'bg-lime text-black hover:glow-lime' 
                      : 'glass text-white hover:border-lime/50'
                  }`}
                >
                  Book Now
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-lime hover:underline font-medium"
          >
            View All Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// Before After Gallery
function BeforeAfterGallery() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-lime/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-lime text-sm font-medium tracking-wider uppercase">Our Results</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 text-balance">
            Before & After Transformations
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden max-w-4xl mx-auto"
        >
          <Image
            src="/images/before-after-1.jpg"
            alt="Before and after car detailing transformation"
            width={1200}
            height={600}
            className="w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between">
            <div className="glass px-6 py-3 rounded-lg">
              <span className="text-white/60 text-sm">Before</span>
            </div>
            <div className="bg-lime text-black px-6 py-3 rounded-lg font-semibold">
              <span className="text-sm">After</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

// Testimonials Section
const testimonials = [
  {
    name: 'Michael R.',
    role: 'Tesla Model S Owner',
    content: 'Absolutely incredible service! They came to my office and my car looked brand new when I got off work. Highly recommend!',
    rating: 5
  },
  {
    name: 'Sarah L.',
    role: 'BMW X5 Owner',
    content: 'The convenience of mobile detailing is unmatched. Professional, thorough, and my car has never looked better.',
    rating: 5
  },
  {
    name: 'James T.',
    role: 'Porsche 911 Owner',
    content: 'These guys know what they are doing. The attention to detail is on another level. Worth every penny.',
    rating: 5
  }
]

function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#080808] to-[#050505]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-lime text-sm font-medium tracking-wider uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 text-balance">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="p-8 rounded-2xl glass hover:border-lime/20 transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-lime text-lime" />
                ))}
              </div>
              <p className="text-white/80 leading-relaxed mb-6 text-lg">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-white/50 text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            href="/reviews" 
            className="inline-flex items-center gap-2 text-lime hover:underline font-medium"
          >
            Read More Reviews
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

// Service Areas Section
function ServiceAreas() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-lime/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-lime text-sm font-medium tracking-wider uppercase">Service Areas</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6 text-balance">
              We Come To You
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Our mobile detailing service covers a wide area. Whether you are at home, work, or anywhere in between, 
              we bring the premium car care experience directly to your location.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Homes', 'Offices', 'Apartments', 'Parking Lots', 'Dealerships', 'Events'].map((area) => (
                <div key={area} className="flex items-center gap-3 text-white/80">
                  <MapPin className="w-4 h-4 text-lime" />
                  {area}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square max-w-md mx-auto"
          >
            {/* Animated map visualization */}
            <div className="absolute inset-0 rounded-full border border-lime/20" />
            <div className="absolute inset-8 rounded-full border border-lime/30" />
            <div className="absolute inset-16 rounded-full border border-lime/40" />
            <div className="absolute inset-24 rounded-full border border-lime/50 animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-lime rounded-full flex items-center justify-center glow-lime">
                <MapPin className="w-8 h-8 text-black" />
              </div>
            </div>
            {/* Animated dots */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-lime/60 rounded-full"
                style={{
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#050505]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-lime/10 rounded-full blur-[200px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 text-balance">
            Book Your Appointment
            <span className="text-lime text-glow-lime"> Today</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
            Experience the convenience of premium mobile car detailing. 
            Your vehicle deserves the best care, delivered right to your doorstep.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href="/booking"
              className="inline-flex items-center gap-3 bg-lime text-black font-bold text-lg px-12 py-5 rounded-xl hover:glow-lime-lg transition-all duration-500"
            >
              Book Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Main Home Page
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <ServicesPreview />
      <BeforeAfterGallery />
      <Testimonials />
      <ServiceAreas />
      <FinalCTA />
    </>
  )
}

'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Target, 
  Heart, 
  Award,
  Users,
  Car,
  Calendar,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

// Animated Counter Component
function AnimatedCounter({ end, suffix = '', label }: { end: number; suffix?: string; label: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      const duration = 2000
      const steps = 60
      const increment = end / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
      return () => clearInterval(timer)
    }
  }, [inView, end])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold text-lime mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-white/60 text-sm uppercase tracking-wider">{label}</div>
    </motion.div>
  )
}

// Hero Section
function AboutHero() {
  return (
    <section className="relative min-h-[70vh] flex items-center pt-24">
      <div className="absolute inset-0">
        <Image
          src="/images/about-hero.jpg"
          alt="About 3Losers Mobile Detailing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="text-lime text-sm font-medium tracking-wider uppercase">About Us</span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mt-4 mb-6 text-balance">
            Our Story
          </h1>
          <p className="text-white/70 text-lg md:text-xl leading-relaxed">
            Born from a passion for perfection and a love for automobiles, 
            3Losers Mobile Detailing brings professional-grade car care 
            directly to your doorstep.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

// Story Section
function StorySection() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-lime text-sm font-medium tracking-wider uppercase">Our Journey</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8 text-balance">
              From Passion to Profession
            </h2>
            <div className="space-y-6 text-white/70 leading-relaxed">
              <p>
                What started as three friends detailing cars in a garage has evolved into 
                a premier mobile detailing service. We called ourselves &ldquo;losers&rdquo; because 
                we&apos;d rather spend our weekends making cars shine than anything else.
              </p>
              <p>
                That obsession became our strength. We invested in professional-grade 
                equipment, mastered advanced techniques, and built a reputation for 
                delivering showroom-quality results at any location.
              </p>
              <p>
                Today, 3Losers Mobile Detailing brings that same passion and precision 
                to every vehicle we touch. We&apos;re not just cleaning cars&mdash;we&apos;re 
                preserving your investment and exceeding expectations.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/team.jpg"
                alt="3Losers Detailing Team"
                width={600}
                height={400}
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-lime text-black p-6 rounded-xl">
              <div className="text-4xl font-bold">1+</div>
              <div className="text-sm font-medium">Years Experience</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Mission & Values
function MissionValues() {
  const values = [
    { icon: Target, title: 'Our Mission', description: 'To deliver exceptional mobile detailing services that exceed expectations while providing unmatched convenience to our clients.' },
    { icon: Heart, title: 'Our Passion', description: 'We genuinely love what we do. Every vehicle is treated as if it were our own, with attention to every detail.' },
    { icon: Award, title: 'Our Promise', description: 'Professional results, premium products, and complete satisfaction guaranteed with every service.' },
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
          <span className="text-lime text-sm font-medium tracking-wider uppercase">What Drives Us</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 text-balance">
            Mission & Values
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center p-8 rounded-2xl glass hover:border-lime/30 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-xl bg-lime/10 flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-lime" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{value.title}</h3>
              <p className="text-white/60 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stats Section
function StatsSection() {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <AnimatedCounter end={350} suffix="+" label="Cars Detailed" />
          <AnimatedCounter end={400} suffix="+" label="Happy Clients" />
          <AnimatedCounter end={1} suffix="+" label="Years Experience" />
          <AnimatedCounter end={100} suffix="%" label="Satisfaction" />
        </div>
      </div>
    </section>
  )
}

// Timeline Section
function TimelineSection() {
  const milestones = [
    { year: '2022', title: 'The Beginning', description: 'Started detailing cars as a hobby in a small garage.' },
    { year: '2023', title: 'Testing & Learning', description: 'Spent the year practicing and testing detailing techniques on our own cars and vehicles of friends and relatives.' },
    { year: '2024', title: 'Perfecting the Craft', description: 'Improved our skills, tested different products, and built confidence through real hands-on experience.' },
    { year: '2025', title: 'Going Mobile', description: 'Invested in mobile equipment and officially started serving clients at their locations.' },
    { year: '2026', title: 'Community Trust', description: 'Became the go-to mobile detailing service in the region.' },
  ]

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
          <span className="text-lime text-sm font-medium tracking-wider uppercase">Our Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 text-balance">
            Timeline
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-lime/20" />

          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex items-center gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : ''
              }`}
            >
              <div className="hidden md:block flex-1" />
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-lime rounded-full -translate-x-1/2 glow-lime-sm" />
              <div className="flex-1 pl-16 md:pl-0">
                <div className="glass p-6 rounded-xl hover:border-lime/30 transition-all duration-500">
                  <span className="text-lime font-bold text-lg">{milestone.year}</span>
                  <h3 className="text-xl font-semibold text-white mt-2 mb-2">{milestone.title}</h3>
                  <p className="text-white/60">{milestone.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why We Started
function WhyWeStarted() {
  const reasons = [
    'Frustrated with long wait times at car washes',
    'Wanted showroom-quality results at home',
    'Believed convenience should not sacrifice quality',
    'Passionate about protecting automotive investments',
  ]

  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-lime text-sm font-medium tracking-wider uppercase">The Why</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-8 text-balance">
              Why We Started
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              We saw a gap in the market&mdash;people wanted professional detailing 
              but did not have time to sit at a shop for hours. We built a solution 
              that brings the shop to you.
            </p>
            <ul className="space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-center gap-4 text-white/80">
                  <CheckCircle className="w-5 h-5 text-lime flex-shrink-0" />
                  {reason}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="p-6 rounded-xl glass">
                <Users className="w-8 h-8 text-lime mb-4" />
                <div className="text-2xl font-bold text-white">350+</div>
                <div className="text-white/60 text-sm">Happy Clients</div>
              </div>
              <div className="p-6 rounded-xl bg-lime text-black">
                <Car className="w-8 h-8 mb-4" />
                <div className="text-2xl font-bold">400+</div>
                <div className="text-sm font-medium">Cars Detailed</div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="p-6 rounded-xl glass">
                <Award className="w-8 h-8 text-lime mb-4" />
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-white/60 text-sm">Satisfaction</div>
              </div>
              <div className="p-6 rounded-xl glass">
                <Calendar className="w-8 h-8 text-lime mb-4" />
                <div className="text-2xl font-bold text-white">1+</div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// CTA Section
function AboutCTA() {
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
            Ready to Experience the
            <span className="text-lime text-glow-lime"> Difference?</span>
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Join hundreds of satisfied customers who trust us with their vehicles.
          </p>
          <Link
            href="/booking"
            className="inline-flex items-center gap-3 bg-lime text-black font-bold text-lg px-10 py-4 rounded-xl hover:glow-lime transition-all duration-500"
          >
            Book Your Appointment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StorySection />
      <MissionValues />
      <StatsSection />
      <TimelineSection />
      <WhyWeStarted />
      <AboutCTA />
    </>
  )
}

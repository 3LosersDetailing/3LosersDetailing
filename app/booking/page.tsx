"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"

const services = [
  { name: "Regular Wash", price: "$150" },
  { name: "Inside Outside Wax", price: "$200" },
  { name: "Full Detailing", price: "$250" }
]

const timeSlots = [
  "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
  "4:00 PM", "5:00 PM"
]

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    vehicleMake: "",
    vehicleModel: "",
    vehicleYear: "",
    service: "",
    appointmentDate: "",
    appointmentTime: "",
    notes: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit booking")
      }

      setIsSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="glass-card p-12 rounded-2xl">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-24 h-24 bg-lime/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <svg className="w-12 h-12 text-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <h1 className="text-4xl font-bold text-white mb-4">Booking Confirmed!</h1>
              <p className="text-gray-400 text-lg mb-8">
                Thank you for choosing 3Losers Mobile Detailing. We&apos;ll contact you shortly to confirm your appointment.
              </p>
              <div className="space-y-4">
                <Link
                  href="/"
                  className="inline-block bg-lime text-black font-bold px-8 py-4 rounded-full hover:bg-lime/90 transition-all"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

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
              Book Your <span className="text-lime">Appointment</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Schedule your premium mobile detailing service. We come to you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-12 rounded-2xl">
              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
                  {error}
                </div>
              )}

              {/* Personal Information */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-lime text-black rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Personal Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-400 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-lime text-black rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Service Location
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-gray-400 mb-2">Street Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none transition-colors"
                      placeholder="123 Main Street"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">City *</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none transition-colors"
                      placeholder="Los Angeles"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">ZIP Code *</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none transition-colors"
                      placeholder="90001"
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Information */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-lime text-black rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  Vehicle Information
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Vehicle Make *</label>
                    <input
                      type="text"
                      name="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none transition-colors"
                      placeholder="BMW"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Vehicle Model *</label>
                    <input
                      type="text"
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none transition-colors"
                      placeholder="M4"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Vehicle Year *</label>
                    <input
                      type="text"
                      name="vehicleYear"
                      value={formData.vehicleYear}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none transition-colors"
                      placeholder="2024"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-lime text-black rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  Select Service
                </h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {services.map((service) => (
                    <label
                      key={service.name}
                      className={`relative cursor-pointer group ${
                        formData.service === service.name ? "ring-2 ring-lime" : ""
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service.name}
                        checked={formData.service === service.name}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      <div className={`p-6 rounded-xl border transition-all ${
                        formData.service === service.name
                          ? "bg-lime/10 border-lime"
                          : "bg-white/5 border-white/10 hover:border-lime/50"
                      }`}>
                        <h3 className="font-bold text-white mb-1">{service.name}</h3>
                        <p className="text-lime font-bold text-xl">{service.price}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Appointment Date/Time */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-lime text-black rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  Appointment Time
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Preferred Date *</label>
                    <input
                      type="date"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Preferred Time *</label>
                    <select
                      name="appointmentTime"
                      value={formData.appointmentTime}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none transition-colors"
                    >
                      <option value="">Select a time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-8 bg-lime text-black rounded-full flex items-center justify-center text-sm font-bold">6</span>
                  Additional Notes
                </h2>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none transition-colors resize-none"
                  placeholder="Any special requests or instructions..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-lime text-black font-bold text-xl py-5 rounded-full hover:bg-lime/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-6 w-6" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Confirm Booking
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

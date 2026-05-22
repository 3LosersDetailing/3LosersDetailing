"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const reviews = [
  {
    id: 1,
    name: "Marcus Johnson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    date: "2 weeks ago",
    vehicle: "2025 BMW M4",
    service: "Full Detailing",
    review: "Absolutely incredible work! My M4 looks better than when I first bought it. The attention to detail is unmatched. They got into every nook and cranny. Highly recommend their full detailing service!"
  },
  {
    id: 2,
    name: "Sarah Williams",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
    date: "1 month ago",
    vehicle: "2025 Mercedes GLE",
    service: "Inside Outside Wax",
    review: "The convenience of having them come to my office was amazing. I dropped off my keys in the morning and by lunch, my car was sparkling. The wax protection has kept my car looking fresh for weeks!"
  },
  {
    id: 3,
    name: "David Chen",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 5,
    date: "3 weeks ago",
    vehicle: "2026 Porsche 911",
    service: "Full Detailing",
    review: "These guys know what they&apos;re doing! As a car enthusiast, I&apos;m very particular about who touches my 911. They treated it with the care and respect it deserves. Phenomenal results!"
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    date: "1 week ago",
    vehicle: "2026 Tesla Model Y",
    service: "Regular Wash",
    review: "Quick, efficient, and professional. They came to my apartment complex and had my Tesla looking brand new in under an hour. Great value for the quality of service!"
  },
  {
    id: 5,
    name: "James Thompson",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    rating: 5,
    date: "2 months ago",
    vehicle: "2026 Audi RS7",
    service: "Full Detailing",
    review: "My RS7 has never looked this good. The paint correction they did was incredible - all the swirl marks from the previous owner are completely gone. Worth every penny!"
  },
  {
    id: 6,
    name: "Michelle Park",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    rating: 5,
    date: "3 days ago",
    vehicle: "2026 Range Rover",
    service: "Inside Outside Wax",
    review: "The interior cleaning was spotless! They got out stains I thought were permanent. My Range Rover smells and looks amazing. Already booked my next appointment!"
  }
]

const stats = [
  { label: "5-Star Reviews", value: "390+" },
  { label: "Happy Customers", value: "400+" },
  { label: "Years Experience", value: "1+" },
  { label: "Cars Detailed", value: "350+" }
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-lime" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  const [selectedReview, setSelectedReview] = useState<number | null>(null)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    vehicle: "",
    service: "",
    review: ""
  })

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
              Customer <span className="text-lime">Reviews</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              See what our satisfied customers have to say about our premium detailing services.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl text-center"
              >
                <p className="text-3xl md:text-4xl font-black text-lime mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {reviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedReview(review.id)}
                className="glass-card p-6 rounded-xl cursor-pointer hover:border-lime/50 transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-bold text-white">{review.name}</h3>
                    <p className="text-gray-500 text-sm">{review.date}</p>
                  </div>
                </div>
                <StarRating rating={review.rating} />
                <div className="mt-4 mb-4">
                  <p className="text-lime text-sm font-medium">{review.service}</p>
                  <p className="text-gray-500 text-sm">{review.vehicle}</p>
                </div>
                <p className="text-gray-300 line-clamp-3 group-hover:line-clamp-none transition-all">
                  {review.review}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Add Review Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12"
          >
            <button
              onClick={() => setShowReviewForm(true)}
              className="inline-flex items-center gap-2 bg-lime text-black font-bold px-8 py-4 rounded-full hover:bg-lime/90 transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Write a Review
            </button>
          </motion.div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-black text-white mb-4">
              Video <span className="text-lime">Testimonials</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Watch real customers share their experiences with 3Losers Mobile Detailing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl overflow-hidden group cursor-pointer"
              >
                <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className="w-16 h-16 bg-lime/20 rounded-full flex items-center justify-center group-hover:bg-lime group-hover:scale-110 transition-all">
                    <svg className="w-8 h-8 text-lime group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-white">Customer Story #{i}</h3>
                  <p className="text-gray-500 text-sm">Watch the transformation</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Form Modal */}
      <AnimatePresence>
        {showReviewForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setShowReviewForm(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card p-8 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Write a Review</h2>
                <button
                  onClick={() => setShowReviewForm(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, rating: star }))}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                          star <= formData.rating ? "bg-lime text-black" : "bg-white/5 text-gray-500"
                        }`}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Vehicle</label>
                  <input
                    type="text"
                    value={formData.vehicle}
                    onChange={(e) => setFormData(prev => ({ ...prev, vehicle: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none"
                    placeholder="e.g., 2024 BMW M4"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Service Received</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="Regular Wash">Regular Wash</option>
                    <option value="Inside Outside Wax">Inside Outside Wax</option>
                    <option value="Full Detailing">Full Detailing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Your Review</label>
                  <textarea
                    value={formData.review}
                    onChange={(e) => setFormData(prev => ({ ...prev, review: e.target.value }))}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-lime focus:outline-none resize-none"
                    placeholder="Share your experience..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-lime text-black font-bold py-4 rounded-full hover:bg-lime/90 transition-all"
                >
                  Submit Review
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

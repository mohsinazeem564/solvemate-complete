'use client'

import { useState } from 'react'
import { Search, Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo/Title */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <Sparkles className="w-12 h-12 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold">SolveMate</h1>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl mb-4 opacity-90">
          Your Complete AI Teacher & Problem Solver
        </p>
        <p className="text-lg mb-8 opacity-80">
          Learn anything from A to Z • All subjects • All topics • Explained simply
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What do you want to learn today? (e.g., Photosynthesis, Python, Marketing...)"
              className="w-full pl-12 pr-4 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/50"
            />
          </div>
        </form>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold">50+</div>
            <div className="text-sm opacity-80">Subjects</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold">5000+</div>
            <div className="text-sm opacity-80">Topics</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-sm opacity-80">AI Assistant</div>
          </div>
        </div>
      </div>
    </section>
  )
}
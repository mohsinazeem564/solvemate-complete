'use client'

import Link from 'next/link'
import { Sparkles, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Sparkles className="w-8 h-8 text-indigo-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              SolveMate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/subjects" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Subjects
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-indigo-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
            <Link
              href="/subjects"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Subjects
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
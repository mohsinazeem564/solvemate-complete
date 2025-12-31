import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AIAssistant from '@/components/chat/AIAssistant'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SolveMate - Complete AI Teacher & Problem Solver',
  description: 'Learn anything from A to Z with AI-powered explanations, examples, and visual aids across all subjects.',
  keywords: 'education, learning, AI teacher, problem solver, study help, mathematics, physics, chemistry, biology, computer science',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <Footer />
        <AIAssistant />
      </body>
    </html>
  )
}
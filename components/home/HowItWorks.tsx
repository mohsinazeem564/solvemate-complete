import { BookOpen, Lightbulb, CheckCircle, Sparkles } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: <BookOpen className="w-12 h-12 text-indigo-600" />,
      title: 'Choose Your Subject',
      description: 'Browse through 50+ subjects covering all areas of knowledge'
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-indigo-600" />,
      title: 'Learn with AI',
      description: 'Get clear explanations, examples, and visual aids for every topic'
    },
    {
      icon: <Sparkles className="w-12 h-12 text-indigo-600" />,
      title: 'Ask Questions',
      description: 'Chat with our AI assistant anytime for instant help and clarification'
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-indigo-600" />,
      title: 'Master Concepts',
      description: 'Practice with examples, avoid common mistakes, and become an expert'
    }
  ]

  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-4">How It Works</h2>
      <p className="text-center text-gray-600 mb-12">
        Your learning journey in 4 simple steps
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="text-center">
            <div className="flex justify-center mb-4">{step.icon}</div>
            <div className="text-2xl font-bold text-indigo-600 mb-2">{index + 1}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
export default function PopularTopics() {
  const popularTopics = [
    { title: 'Pythagorean Theorem', subject: 'Mathematics', icon: '📐' },
    { title: 'Photosynthesis', subject: 'Biology', icon: '🧬' },
    { title: "Newton's Laws", subject: 'Physics', icon: '⚛️' },
    { title: 'Variables in Programming', subject: 'Computer Science', icon: '💻' },
    { title: 'Periodic Table', subject: 'Chemistry', icon: '🧪' },
    { title: 'Digital Marketing Basics', subject: 'Marketing', icon: '📱' },
  ]

  return (
    <section className="max-w-7xl mx-auto py-16 px-4 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-4">Popular Topics</h2>
      <p className="text-center text-gray-600 mb-12">
        Start with these frequently accessed topics
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {popularTopics.map((topic, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="text-4xl mb-3">{topic.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{topic.title}</h3>
            <p className="text-sm text-gray-500">{topic.subject}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
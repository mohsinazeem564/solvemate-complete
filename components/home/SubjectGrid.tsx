import Link from 'next/link'
import { subjects } from '@/lib/constants/subjects'

export default function SubjectGrid() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-4">Explore All Subjects</h2>
      <p className="text-center text-gray-600 mb-12">
        Click any subject to see all topics from A to Z
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {subjects.map((subject) => (
          <Link
            key={subject.id}
            href={`/subjects/${subject.id}`}
            className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-indigo-500"
          >
            <div className="text-5xl mb-3">{subject.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
              {subject.name}
            </h3>
            <p className="text-sm text-gray-500 mt-2 line-clamp-2">
              {subject.description}
            </p>
            <div className="mt-4 text-sm text-indigo-600 font-medium">
              {subject.topicCount}+ topics →
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
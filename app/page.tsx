import HeroSection from '@/components/home/HeroSection'
import SubjectGrid from '@/components/home/SubjectGrid'
import PopularTopics from '@/components/home/PopularTopics'
import HowItWorks from '@/components/home/HowItWorks'

export default function HomePage() {
  return (
    <div className="w-full">
      <HeroSection />
      <SubjectGrid />
      <PopularTopics />
      <HowItWorks />
    </div>
  )
}
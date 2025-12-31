import mongoose, { Schema, Document } from 'mongoose'

export interface ITopic extends Document {
  id: string
  subjectId: string
  category: string
  letter: string
  title: string
  slug: string
  content: {
    whatItIs: string
    whyItMatters: string
    howItWorks: string
    whereUsed: string
    examples: Array<{
      title: string
      description: string
      code?: string
    }>
    visuals: Array<{
      type: 'diagram' | 'chart' | 'table' | 'image'
      title: string
      data: any
      imageUrl?: string
    }>
    faqs: Array<{
      question: string
      answer: string
    }>
    commonMistakes: string[]
    tips: string[]
    summary: string
  }
  relatedTopics: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  estimatedReadTime: number
  views: number
  createdAt: Date
  updatedAt: Date
}

const TopicSchema = new Schema<ITopic>({
  id: { type: String, required: true, unique: true },
  subjectId: { type: String, required: true, index: true },
  category: { type: String, required: true },
  letter: { type: String, required: true, index: true },
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  content: {
    whatItIs: String,
    whyItMatters: String,
    howItWorks: String,
    whereUsed: String,
    examples: [{
      title: String,
      description: String,
      code: String
    }],
    visuals: [{
      type: { type: String, enum: ['diagram', 'chart', 'table', 'image'] },
      title: String,
      data: Schema.Types.Mixed,
      imageUrl: String
    }],
    faqs: [{
      question: String,
      answer: String
    }],
    commonMistakes: [String],
    tips: [String],
    summary: String
  },
  relatedTopics: [String],
  difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'], default: 'beginner' },
  estimatedReadTime: { type: Number, default: 5 },
  views: { type: Number, default: 0 },
}, {
  timestamps: true
})

// Indexes for search
TopicSchema.index({ title: 'text', 'content.whatItIs': 'text' })

export default mongoose.models.Topic || mongoose.model<ITopic>('Topic', TopicSchema)
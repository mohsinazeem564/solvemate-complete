import mongoose, { Schema, Document } from 'mongoose'

export interface ISubject extends Document {
  id: string
  name: string
  icon: string
  description: string
  topicCount: number
  categories: string[]
  createdAt: Date
  updatedAt: Date
}

const SubjectSchema = new Schema<ISubject>({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  icon: { type: String, required: true },
  description: { type: String, required: true },
  topicCount: { type: Number, default: 0 },
  categories: [{ type: String }],
}, {
  timestamps: true
})

export default mongoose.models.Subject || mongoose.model<ISubject>('Subject', SubjectSchema)
import mongoose, { Schema } from 'mongoose'
const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
)
const Topic =
  mongoose.models.MYBLOG_Topic || mongoose.model('MYBLOG_Topic', topicSchema)
export default Topic

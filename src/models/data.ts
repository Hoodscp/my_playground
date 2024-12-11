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
const Data =
  mongoose.models.MYBLOG_Data || mongoose.model('MYBLOG_Data', topicSchema)
export default Data

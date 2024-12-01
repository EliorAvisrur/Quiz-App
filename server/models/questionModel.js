import mongoose from "mongoose";
const Schema = mongoose.Schema;
const QuestionSchema = new Schema({
  category: { type: String },
  content: { type: String },
  options: { type: [String] },
  answer: { ype: Number }
});
export default mongoose.model("question", QuestionSchema);

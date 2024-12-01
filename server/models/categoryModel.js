import mongoose from "mongoose";
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
  name: { type: String },
  code: { type: String }
});
export default mongoose.model("category", CategorySchema);

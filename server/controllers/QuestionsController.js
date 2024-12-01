import Question from "../models/questionModel.js";
const controller = {
  async getAll(req, res, next) {
    try {
      let data = await Question.find();
      res.json(data);
    } catch (err) {
      res.json({ error: err });
    }
  },
  async getByCategory(req, res, next) {
    try {
      let data = await Question.find({ category: req.params.category });
      res.json(data);
    } catch (err) {
      res.json({ error: err });
    }
  },
};
export default controller;

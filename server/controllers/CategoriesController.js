import Category from "../models/categoryModel.js";
const controller = {
  async getAll(req, res, next) {
    try {
      let {data} = await Category.find();
      res.json(data);
    } catch (err) {
      res.json({ error: err });
    }
  }
};
export default controller;

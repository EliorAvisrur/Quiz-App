import express from "express"
import QuestionsController from "../controllers/QuestionsController.js"
let QuestionsRouter=express.Router()
QuestionsRouter.get("/",QuestionsController.getAll);
QuestionsRouter.get("/:category",QuestionsController.getByCategory);
export default QuestionsRouter

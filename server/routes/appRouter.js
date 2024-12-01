import express from "express"
import CategoryRouter from "./CategoriesRouter.js"
import QuestionRouter from "./QuestionsRouter.js"
let appRouter = express.Router()

appRouter.use("/questions", QuestionRouter);
appRouter.use("/categories",CategoryRouter)

export default appRouter;

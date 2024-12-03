import express from "express"
import CategoriesController from "../controllers/CategoriesController.js"
let CategoriesRouter=express.Router()
CategoriesRouter.get("/",CategoriesController.getAll)
export default CategoriesRouter
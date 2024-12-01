import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import appRouter from "./routes/appRouter.js"
import { reqDetails } from "./middlewares/reqDetails.js"
import "./db/dbConnect.js"
const app=express()
app.use(express.json())
app.use(cors())
dotenv.config()
app.use("/",reqDetails)
app.use("/api/v1",appRouter);
app.use("*", (req, res) => {
  res.status(404).send("Forbidden");
});

 const port =process.env.PORT||3000
 app.listen(port,()=>{
    console.log("Running on port "+port);
    
 })


import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import dbConnect from "./config/database.js";
import User from "./models/User.js";

import companyModel from "./models/company.js";
import router from "./routes/FeedbackRoutes.js";


const app=express();

const PORT=3000;

dotenv.config();
app.use(express.json())
app.use("/api/v1",router)
dbConnect();





app.listen(PORT,()=>{
    console.log(`server is running at :${PORT}`);
})





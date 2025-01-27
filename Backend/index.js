import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./Routes/user.route.js"
import bookRoute from "./Routes/book.route.js";

import cors from "cors";


const app = express()
app.use(cors());
app.use(express.json())

dotenv.config();
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

//connect to mongodb

try{
  mongoose.connect(URI)
  console.log("connected to mongodb")
}catch(error){
 console.log("Error ", error)
}

//routes
app.use("/book", bookRoute);
app.use("/user", userRoute);



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
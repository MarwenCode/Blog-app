// // import express, { json } from "express";
// // import pkg from 'mongoose';
// // const { connect } = pkg;
// // import { connect } from "mongoose";
// // import express from "express";
// // import dotenv from "dotenv";
// // import mongoose from "mongoose";
// const express = require("express");
// const  mongoose = require("mongoose");

// const app = express()




// app.use(express.json())
// dotenv.config()

// // mongoose.connect("mongodb+srv://marwen:marwen@blog-app.hbt0l.mongodb.net/blog-app", {
// //     useNewUrlParser :true
// // }).then(console.log("connected to Mongo DB")).catch((err) => console.log(err))

// mongoose.connect(process.env.MONGODB, {
//     // useNewUrlParser :true
// }).then(console.log("connected to Mongo DB")).catch((err) => console.log(err))


// // mongoose.connect("mongodb+srv://Marwen:marwen@cluster0.uwqgc.mongodb.net/?retryWrites=true&w=majority", {
// //     useNewUrlParser :true
// // }).then(console.log("connected to Mongo DB")).catch((err) => console.log(err))



// app.get('/', (req, res) => {
//     res.send('Hello World!');
//   });


// app.listen("8000", () => {
    
//     console.log("Backend is running")


import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import postRoute from "./routes/posts.js";



const app = express()
dotenv.config()


const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("connected to MongoDB")
    }catch (error) {
        throw error
    
    }

}


//middlewares
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)
app.use("/api/post", postRoute)








app.listen(8000, () => {
    connect()
    console.log("connected to backend")
})
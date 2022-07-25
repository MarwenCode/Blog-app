// const router = require("express").Router();
import express from "express";
import User from "../models/User.js"
const router = express.Router();
import bcrypt from "bcrypt"



//Register
router.post("/register", async(req, res) => {
    try {
       //generate new password
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        });

        const user = await newUser.save()
        res.status(200).json(user)
        
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
        
    }
})



export default router

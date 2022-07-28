import express from "express";
import User from "../models/User.js"
const userRoute = express.Router();

// update profile
userRoute.put("/:id", async(req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(
            req.params.id, 
            {$set: req.body},
            {new: true}
        );
         res.status(200).json(updateUser)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})


// Delete profile 
userRoute.delete("/:id", async(req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        // res.status(200).json(deleteUser, "user deleted")
        res.status(200).json({
            deleteUser,
            message:"user has been deleted"
            
        })
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})


// Get user 
userRoute.get("/:id", async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
        
    } catch (error) {
        res.status(500).json(error)
        
    }
})





export default userRoute

import express from "express";
import Post from "../models/Post.js";
const postRoute = express.Router()

//create Post 
postRoute.post("/", async(req, res) => {
    try {

        // const newPost = new Post({
        //     title: req.body.title,
        //     description: req.body.description,
        //     username: req.body.username
        // })

       const newPost = new Post(req.body)
       const post = await newPost.save()
       res.status(200).json(post)
        
    } catch (error) {
        res.status(500).json(error)
    }
})

//updata a post 
postRoute.put("/:id", async(req, res) => {
    try {
        const updatePost = await Post.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new: true}
        );
        res.status(200).json(updatePost)
        
    } catch (error) {
        res.status(500).json(error)
    }
})


//Delete Post
postRoute.delete("/:id", async(req, res) => {
    try {
        const deletePost = await Post.findByIdAndDelete( req.params.id);
        res.status(200).json({
            deletePost, 
            message:"post has been deleted"
        })
        

    } catch (error) {
        res.status(500).json(error)
    }
})

//Get Post
postRoute.get("/:id", async(req, res) => {
    try {
        
        const post = await Post.findById(req.params.id)
        res.status(200).json(post)
        
    } catch (error) {
        res.status(500).json(error)
    }
})


//Get All posts

postRoute.get("/", async (req, res) => {
    const users = req.body.userId;
    try {
        let posts;
        if (users) {
          posts = await Post.find({ users });
        }  else {
          posts = await Post.find();
        }
        res.status(200).json(posts);
      } catch (err) {
        res.status(500).json(err);
      }
});





export default postRoute
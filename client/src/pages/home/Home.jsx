import React, {useContext, useState,useEffect}from 'react';
import "./home.scss"
import Header from '../../components/header/Header';
import Posts from '../../components/posts/Posts';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { axiosInstance } from '../../config';
// import { AppContext } from "../../context/context";




const Home = () => {
  // const {toggleTheme } = useContext(AppContext);
  const [posts, setPosts] =useState([])
  const {search} = useLocation()



  useEffect(() => {
      const fetchPosts = async() => {
<<<<<<< HEAD
          // const res = await axios.get("/post")
          const res = await axios.get("https://blog-app-api.onrender.com/api/post")
=======
          const res = await axios.get("/post")
          // const res = await axios.get("https://blog-app-api.onrender.com/api/post")
>>>>>>> main
          console.log(res)
          setPosts(res.data)
          
      }

      fetchPosts()
  }, [])

  return (
    <div className='home'>
  
        <Posts  posts={posts}/>
        
    </div>
  )
}

export default Home
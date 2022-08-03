
import axios from "axios";
import React, { useState, useEffect } from "react";
import ProfileSideBar from "../../components/profileSideBar/ProfileSideBar";
import "./aboutme.scss";

const AboutMe = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async() => {
            const res = await axios.get("/post")
            console.log(res)
            setPosts(res.data)
            
        }
  
        fetchPosts()
    }, [])



  return (
    <div className="aboutme">
      <div className="leftSection">
        test
        <ProfileSideBar />
      </div>
      <div className="bloc">
        test
        {posts.map((post) => (
            <>
             <div className="singlePost">
          <div className="singlePostWrapper">
            <img className="singlePostImg" alt="" />


            <h1 className="singlePostTitle"> </h1>
                {post.title}
              <div className="singlePostEdit">
                <i className="singlePostIconEdit far fa-edit"></i>
                <i className="singlePostIconDelete far fa-trash-alt"></i>
              </div>
            

              <div className="postInfo">
        {/* <Link to={`/post/${post._id}`} className="link"> */}
          <span className="postTitle">{post.title}</span>
        {/* </Link> */}

        <span className="author">{post.name}</span>
        <span className="postDate">{post.createdAt}</span>
      </div>
      <p className="postDesc">{post.description}</p>

          
          </div>
        </div>
            </>

        ))}
       
      </div>
      <div className="rightSection">test</div>
    </div>
  );
};

export default AboutMe;

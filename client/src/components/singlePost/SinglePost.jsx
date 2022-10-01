import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Link, useLocation } from "react-router-dom";
import "./singlepost.scss";
import ProfileSideBar from "../profileSideBar/ProfileSideBar";
import { ToastContainer, toast } from 'react-toastify';

const SinglePost = () => {
  const publicFolder = "http://localhost:8000/images/";
  const { user } = useContext(AppContext);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  const location = useLocation();
  console.log(location);
  const path = location.pathname.split("/")[2];
  console.log(path);

  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/post/" + path);
      // const res = await axios.get("https://blog-app-api.onrender.com/api/post/" + path);
      console.log(res.data);
      setPost(res.data);
      setTitle(res.data.title);
      setDescription(res.data.description)

    };

    getPost();
  }, [path]);

  const handleUpdate = async () => {
    try {
      await axios.put(`/post/${post._id}`, {
        username: user.username,
        title,
        description,
      });
      setUpdateMode(false)
    
    } catch (error) {
      console.log(error);
    }
  };

  console.log(handleUpdate)

  // const handleDelete = async() => {
  //   try {

  //     await axios.delete(`/post/${post._id}`);

  //     // or we can do also 
  //     //  await axios.delete(`/posts/${post._id}`, {
  //     //   data : {username: user.username}
  //     // });
  //     window.location.replace("/");
  //     toast("post has been deleted")
      
  //   } catch (error) {
  //     console.log(error)
  //   }

  // }

  const handleDelete = async() => {
    try {

      await axios.delete(`/post/${post._id}`, {
        data : {username: user.username}
      });
      window.location.replace("/");
      
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <div className="singlePost">
      <ProfileSideBar  className="sideBar"/>
      <div className="singlePostWrapper">
        {/* <img className="singlePostImg" src={publicFolder + post.photo} alt="" /> */}
        <img className="singlePostImg" src="/images/image3.jpeg" alt="" />
        {updateMode ? (
          <input
            className="singlePostTitleInput"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <div className="top">
              <h1 className="singlePostTitle">
            {title}
            </h1>

          
            <div className="singlePostEdit">
              <i
                className="singlePostIconEdit far fa-edit"
                onClick={() => setUpdateMode(true)}></i>
              <i className="singlePostIconDelete far fa-trash-alt"  onClick={handleDelete}></i>
            </div>
          
          
          </div>
        
          
        )}

        <div className="singlePostInfo">
          <span>
            Author: {post.username}
            <b className="singlePostAuthor"></b>
          
          </span>
        </div>

        {updateMode ? (
          <textarea
            type="text"
            className="singlePostDescInput"
            autoFocus
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{description}</p>
        )}
        {/* <p className="singlePostDesc">{post.description}</p> */}
        {updateMode && (
          <button className="signlePostButton" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
};

export default SinglePost;

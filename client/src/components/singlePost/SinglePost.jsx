import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Link, useLocation } from "react-router-dom";
import "./singlepost.scss"
import ProfileSideBar from "../profileSideBar/ProfileSideBar";

const SinglePost = () => {
    const publicFolder = "http://localhost:8000/images/";
  const { user } = useContext(AppContext);
  const location = useLocation();
  console.log(location);
  const path = location.pathname.split("/")[2];
  console.log(path);

  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/post/" + path);
      console.log(res.data);
      setPost(res.data)
    };

    getPost();
  }, [path]);

  return (
    <div className="singlePost">
        <ProfileSideBar />
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={publicFolder + post.photo} alt="" />

        <h1 className="singlePostTitle">
            {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>

        <div className="singlePostInfo">
          <span>
            Author: {post.username}
            <b className="singlePostAuthor"></b>
          </span>
          <span></span>
        </div>
        <textarea type="text" className="singlePostDescInput" autoFocus />
        

        <p className="singlePostDesc">{post.description}</p>

        <button className="signlePostButton">Update</button>
      </div>
    </div>
  );
};

export default SinglePost;

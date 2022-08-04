import axios from "axios";
import React, { useState, useEffect } from "react";
import ProfileSideBar from "../../components/profileSideBar/ProfileSideBar";
import "./aboutme.scss";

const AboutMe = () => {
  const publicForlder = "http://localhost:8000/images/";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post");
      console.log(res);
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

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
                <img className="singlePostImg" src={publicForlder + post.photo}  alt="" />
              

                <div className="singlePostEdit">
                  <h1 className="singlePostTitle"> {post.title} </h1>
                  <i className="singlePostIconEdit far fa-edit"></i>
                  <i className="singlePostIconDelete far fa-trash-alt"></i>
                </div>

                <div className="postInfo">
                  {/* <Link to={`/post/${post._id}`} className="link"> */}
                  {/* <span className="postTitle">{post.title}</span> */}
                  {/* </Link> */}

                  <span className="author">{post.username}</span>
                  <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
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

import React from 'react';
import "./post.scss";
import { Link } from 'react-router-dom';

const Post = ({post}) => {
  const publicForlder = "http://localhost:8000/images/";
  return (
    <div className="post">
      {post.photo && (
        <img className="postImg" src={publicForlder + post.photo} alt="" />
      )}
      <div className="postInfo">
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        

        <span className="author">{post.username}</span>
        <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">{post.description}</p>
    </div>
  );
}

export default Post
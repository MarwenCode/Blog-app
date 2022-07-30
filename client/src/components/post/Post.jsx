import React from 'react';
import "./post.scss"

const Post = ({post}) => {
  return (
    <div className='post'>
         <img className="postImg" src="" alt="" />
        <div className='postInfo'>
            <span className='postTitle'>
              {post.title}

            </span>
            <span className='author'>
                {post.name}

            </span>
            <span className='postDate'>
              {post.createdAt}

            </span>
        </div>
        <p className='postDesc'>
       {post.description}
        </p>
        
    </div>
  )
}

export default Post
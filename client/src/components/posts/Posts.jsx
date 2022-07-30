import React from 'react';
import Post from '../post/Post';
import ProfileSideBar from '../profileSideBar/ProfileSideBar';
import "./posts.scss"

const Posts = ({posts}) => {
  return (
    <div className='posts'>
        {posts.map((post, index)=> (
          <Post post={post} key={index}/>

        ))}
        
       

        
    </div>
  )
}

export default Posts
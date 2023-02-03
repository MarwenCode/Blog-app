import axios from "axios";
import React, { useState, useEffect,useContext} from "react";
import ProfileSideBar from "../../components/profileSideBar/ProfileSideBar";
import "./aboutme.scss";
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa";
// import image1 from "./images/image1.jpg"
// import image2 from "./images/image2.jpeg"
// import image3 from "./images/image3.jpeg"
import { SliderData } from "./SliderData";
import { AppContext } from "../../context/context";
import { Link } from "react-router-dom";




const AboutMe = () => {
  const {user} = useContext(AppContext)
  // const publicForlder = "http://localhost:8000/images/";
  const publicForlder = "https://blog-app-api.onrender.com/images/";
  const [posts, setPosts] = useState([]);

  const [currentImage, setCurrentImage] = useState(0);


  useEffect(() => {
    const fetchPosts = async () => {
      // const res = await axios.get(`/post/myposts/${user._id}`);
      const res = await axios.get(`https://blog-app-api.onrender.com/api/post/myposts/${user._id}`);
      console.log(res);
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  console.log(SliderData)
  const length = SliderData.length

  const nextSlide = () => {
  
    setCurrentImage( currentImage >=4 ? 0 : currentImage + 1)
    // setCurrentImage( currentImage === length ? 0 : currentImage + 1)
  }
  const prevSlide = () => {
    // setCurrentImage(currentImage <= 0 ? currentImage  : currentImage -1)
    setCurrentImage(currentImage <= 0 ? 4  : currentImage -1)
  }


  console.log(currentImage)






  return (
    <div className="aboutme">
      <div className="leftSection">
        <ProfileSideBar />
      </div>
      <div className="bloc">

        {posts.map((post) => (
          <>
            <div className="singlePost">
              <div className="singlePostWrapper">
                <img className="singlePostImg" src={publicForlder + post.photo}  alt="" />
              

                <div className="singlePostEdit">
                  <h1 className="singlePostTitle"> {post.title} </h1>
                <Link   to={`/post/${post._id}`} className="link">
                <i className="singlePostIconEdit far fa-edit"></i>
                </Link >
              
                 <Link to={`/post/${post._id}`} className="link">
                 <i className="singlePostIconDelete far fa-trash-alt"></i>
               
                 </Link>
                
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
      <div className="rightSection">
        <div className="carouselInner">
          <img 
          className="img"
          // src={`./images/${}`}
          // src={`photos`}
          // src="photos"
          
          />
          {/* {allImg.map((img) => {
            return <img 
            src={`./images/${img.image1}`}
            
            
            />
          })} */}

{SliderData.map((slide, index) => {
        return (
          <div
            className={index === currentImage ? 'active' : 'slide'}
            key={index}
          >
            {index === currentImage && (
              <img src={slide.image} alt='travel image' className='img' />
            )}
          </div>
        );
      })}
        </div>
        <div className="arrow">
        <FaArrowAltCircleLeft onClick={prevSlide}/>
        </div>
        <div className="arrow">
        <FaArrowAltCircleRight onClick={nextSlide}/>
        
        </div>

      </div>
    </div>
  );
};

export default AboutMe;

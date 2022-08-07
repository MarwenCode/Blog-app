import React, {useState,useContext,useEffect} from 'react';
import "./navbar.scss"
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/context';
import axios from 'axios';

const Navbar = () => {
  const {user, dispatch} = useContext(AppContext)
  const publicFolder = "http://localhost:8000/images/";
  const [posts, setPosts] =useState([])

  const [searchTerm, setSearchTerm] = useState("")


  const handleLogout = () => {
    dispatch({type:"LOGOUT"})
  }

  useEffect(() => {
    const fetchPosts = async() => {
        const res = await axios.get("/post")
        console.log(res)
        setPosts(res.data)
        
    }

    fetchPosts()
}, [])

 



  return (
    <div className="navbar">
      <div className="leftnavbar">
        <ul className="list">
          <Link to='/aboutme' className='link'>
          <li className="item">About Me & My Blogs</li>
          </Link>
        
          <Link to="/" className="link">
            <li className="item">Home</li>
          </Link>
          <Link to="write" className="link">
            <li className="item">Write</li>
          </Link>
          <Link to="profile" className="link">
            <li className="item">Profile</li>
          </Link>
        </ul>
      </div>
      <div className="search">
        <FaSearch className="Fasearch" />
        <input 
        className="inputSearch" 
        type="text"
        placeholder="search for a post..."
        onChange={(e) => setSearchTerm(e.target.value)}
        
        
        />
        {posts.filter((post) => {
          if(searchTerm == "") {
            return post
          }else if(post.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return post
          }
        }).map((post, key) => {
          return (
            <div className='searchTerm' key={key}>
          
            </div>
          )
        })
        
        }
    
      </div>
      <div className="signin">
        {user ? (
          <>
            <span className="logout" onClick={handleLogout}>
              Logout
            </span>
            <img className="topImg"   src={publicFolder+user.profilePic} />
          </>
        ) : (
          <>
            <Link to="login" className="link">
              <span className="signItem">Login</span>
            </Link>
            <Link to="register" className="link">
              <span className="signItem">Register</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar

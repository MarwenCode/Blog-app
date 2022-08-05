import React, {useContext} from 'react';
import "./navbar.scss"
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/context';

const Navbar = () => {
  const {user, dispatch} = useContext(AppContext)
  const publicFolder = "http://localhost:8000/images/";


  const handleLogout = () => {
    dispatch({type:"LOGOUT"})
  }



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
        <input className="inputSearch" />
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

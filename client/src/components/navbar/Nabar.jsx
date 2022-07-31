import React, {useContext} from 'react';
import "./navbar.scss"
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/context';

const Nabar = () => {
  const {user, dispatch} = useContext(AppContext)


  const handleLogout = () => {
    dispatch({type:"LOGOUT"})
  }



  return (
    <div className="navbar">
    
      <div className="leftnavbar">
        <ul className="list">
        <li className="item">About Me & My Blogs</li>
          <Link to="/"   className='link'>
          <li className="item">Home</li>
          </Link>
          <Link to="write" className="link">
          <li className="item">Write</li>
          </Link>
          <li className="item">Profile</li>
          
        
        </ul>
      </div>
      <div className="search">
        <FaSearch className='Fasearch'/>
        <input className='inputSearch'/>
      </div>
      <div className="signin">
       {user ? <span className='logout' onClick={handleLogout}>Logout</span> :

       <>
           <Link to="login" className='link'>
        <span className='signItem'>Login</span>
        </Link>
        <Link to="register" className='link'>
        <span className='signItem'>Register</span>
        </Link>
       </>
       
      
      }
        
    
       
       
      </div>
    </div>
  );
}

export default Nabar

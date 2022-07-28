import React from 'react';
import "./navbar.scss"
import { FaSearch } from "react-icons/fa"

const Nabar = () => {
  return (
    <div className="navbar">
    
      <div className="leftnavbar">
        <ul className="list">
          {/* <li className="item">Login</li> */}
          <li className="item">Home</li>
          <li className="item">Write</li>
        </ul>
      </div>
      <div className="search">
        <FaSearch className='Fasearch'/>
        <input className='inputSearch'/>
      </div>
      <div className="signin">
        <span className='signItem'>Signin</span>
       
      </div>
    </div>
  );
}

export default Nabar

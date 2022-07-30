import React from 'react';
import "./header.scss"

const Header = () => {
  return (
    <div className="header">
    <div className="headerTitles">
      <span className="headerTitleSm">WRITE YOUR</span>
      <span className="headerTitleLg">BLOG</span>
    </div>
    <img
      className="headerImg"
      src="photos/header-pic.jpg"
      alt=""
    />
  </div>
  )
}

export default Header
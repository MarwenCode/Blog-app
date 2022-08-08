import React, { useState, useContext, useEffect } from "react";
import "./navbar.scss";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/context";
import axios from "axios";

const Navbar = () => {
  const { user, dispatch } = useContext(AppContext);
  const publicFolder = "http://localhost:8000/images/";
  const [posts, setPosts] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post");
      console.log(res);
      setPosts(res.data);
    };

    fetchPosts();
  }, []);

  const handleClickSearchTerm = () => {
    setSearchActive(false);
  };

  useEffect(() => {
    const closeSearchBox = (e) => {
      console.log(e);
      if (e.path[0].tagName !== "INPUT") {
        setSearchActive(false);
      }
    };
    document.body.addEventListener("click", closeSearchBox);
    return () => document.body.removeEventListener("click", closeSearchBox);
  }, []);

  return (
    <div className="navbar">
      <div className="leftnavbar">
        <div className="siwtchBtn">
          <label className="switch">
            <input type="checkbox" />
             <span className="slider"></span>

          </label>
        </div>
        <ul className="list">
          <Link to="/aboutme" className="link">
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
      <div className="SearchSection">
        {searchActive && (
          <div className="search">
            {posts
              .filter((post) => {
                if (searchTerm == "") {
                  return post;
                } else if (
                  post.title.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return post;
                }
              })
              .map((post, key) => {
                return (
                  <div className="searchTerm" key={key}>
                    <Link to={`/post/${post._id}`} className="link">
                      <p
                        className="searchTitle"
                        onClick={handleClickSearchTerm}>
                        {post.title}{" "}
                      </p>
                      {/* <p className="searchTitle" >{post.title} </p> */}
                    </Link>
                  </div>
                );
              })}
          </div>
        )}

        <div className="FasearchInput">
          <FaSearch className="Fasearch" />
          <input
            className="inputSearch"
            type="text"
            placeholder="search for a post..."
            onChange={(e) => setSearchTerm(e.target.value)}
            // onClick={() => setSearchActive(true)}
            onClick={() => setSearchActive((prev) => !prev)}
          />
        </div>
      </div>
      <div className="signin">
        {user ? (
          <>
            <span className="logout" onClick={handleLogout}>
              Logout
            </span>
            <img className="topImg" src={publicFolder + user.profilePic} />
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
};

export default Navbar;

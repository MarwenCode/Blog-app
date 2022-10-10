import React, { useState, useContext, useEffect } from "react";
import "./navbar.scss";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, dispatch, toggleTheme, theme } = useContext(AppContext);
  const publicFolder = "https://blog-app-api.onrender.com/images/";
  const [posts, setPosts] = useState([]);
  const Navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [searchActive, setSearchActive] = useState(false);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    // window.location.replace("/login")
    Navigate("/login");
  };

  useEffect(() => {
    const fetchPosts = async () => {
      // const res = await axios.get("/post");
      const res = await axios.get("https://blog-app-api.onrender.com/api/post");
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
            <input type="checkbox" onChange={toggleTheme} />
            {/* <input type="checkbox" onChange={toggleTheme} checked={theme === "light"}/> */}
            <span className="slider"></span>
          </label>
        </div>

        <ul className="list">
          {!user ? (
            <Link to="/" className="link">
              <li className="item">Home</li>
            </Link>
          ) : (
            <>
              <Link to="/aboutme" className="link">
                <li className="item"> My Blogs</li>
              </Link>

              <Link to="write" className="link">
                <li className="item">Write</li>
              </Link>
              <Link to="profile" className="link">
                <li className="item">Profile</li>
              </Link>
              <Link to="/" className="link">
                <li className="item">Home</li>
              </Link>
            </>
          )}
        </ul>
      </div>
      <div className="SearchSection">
        {searchActive && (
          <div className="search">
            {posts
              .filter((post) => {
                if (searchTerm == "") {
                  return;
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
              <span className="signItemLogin">Login</span>
            </Link>
            <Link to="register" className="link">
              <span className="signItemRegister">Register</span>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

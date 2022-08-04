import React, { useState, useEffect } from "react";
import "./profilesidebar.scss";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../context/context";

const ProfileSideBar = () => {
  const { user } = useContext(AppContext);
  const publicFolder = "http://localhost:8000/images/";

  const [expression, setExpression] = useState("");
  const [inputGroup, setInputGroup] = useState([]);
  const [updateMode, setUpdateMode] = useState(false);

  const handleExpression = (e) => {
    e.preventDefault();
    const newExpression = {
      id: new Date().getTime().toString(),
      expression: expression,
    };
    setInputGroup([...inputGroup, newExpression]);
    setExpression("");
    setUpdateMode(false)
  };

  console.log(inputGroup);

  const exp = localStorage.getItem("exp");
  if (exp) {
    return JSON.parse(localStorage.getItem("exp"));
  }

  return (
    <div className="ProfileSideBar">
      <div className="profileUp">
        <img className="profilepic" src={publicFolder + user.profilePic} />
        <span className="name">{user.username}</span>
      </div>
      <div className="profileDown">
        <div className="profileInfo">
          <i
            className="singlePostIconEdit far fa-edit"
            onClick={() => setUpdateMode(true)}></i>

          {updateMode && (
            <form className="profileItems">
              <textarea
                className="item"
                type="text"
                autoFocus
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
              />
              <button
                className="ExpressionBtn"
                onClick={handleExpression}></button>
            </form>
          )} 

            <div className="inputExpression">
              {inputGroup.map((exp) => (
                <div className="expression">
                  <p> {exp.expression}</p>
                </div>
              ))}
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default ProfileSideBar;

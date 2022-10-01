import React, { useState, useEffect } from "react";
import "./profilesidebar.scss";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../context/context";


const getlocalStorage = () => {
  let expression = localStorage.getItem("expression")
  if(expression) {
    return JSON.parse(localStorage.getItem("expression"))
  }else {
    return []

  }
}

const ProfileSideBar = () => {
  const { user } = useContext(AppContext);
  const publicFolder = "http://localhost:8000/images/";


  const [expression, setExpression] = useState("");
  const [inputGroup, setInputGroup] = useState(getlocalStorage());
  const [updateMode, setUpdateMode] = useState(false);
  

  const handleExpression = (e) => {
    e.preventDefault();
    const newExpression = {
      id: new Date().getTime().toString(),
      expression: expression,
    };
    setInputGroup([newExpression]);
    // setInputGroup(e.target.value);

    setExpression("");
    setUpdateMode(false)
  };






  console.log(inputGroup);

  useEffect(() => {
    localStorage.setItem("expression", JSON.stringify(inputGroup))

    // const exp = localStorage.getItem('expression')
    // const initialValue = JSON.parse(exp);
    // return initialValue || "";
  }, [inputGroup])

  // useEffect(() => {
  // const exp = JSON.parse(localStorage.getItem("expression"))
  // setInputGroup(exp)

  // })




// useEffect(() => {
//   const exp = localStorage.getItem('expression')
//   const initialValue = JSON.parse(exp);
//   return initialValue || "";

// }, [])



    


  return (
    <div className="ProfileSideBar">
      <div className="profileUp">
        {/* <img className="profilepic" src={publicFolder + user.profilePic} /> */}
        <img className="profilepic" src="/images/image1.jpg"/>
        <span className="name">{user?.username}</span>
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
            
                // onChange={handleExpression}
              />
              <button
                className="ExpressionBtn"
                onClick={handleExpression}>update</button>
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

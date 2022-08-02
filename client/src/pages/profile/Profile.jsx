import axios from "axios";
import React, { useContext, useState } from "react";
import { AppContext } from "../../context/context";
import "./profile.scss"


const Profile = () => {
    const {user, dispatch} = useContext(AppContext)
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPasswrod] = useState("")
    const [successMessage, setSuccessMessage] = useState(false)


    const handleSubmit = async (e) => {
      e.preventDefault()
      dispatch({type:"UPDATE_START"})
      const updateUser = {
       userId: user._id,
      username,
        email,
        password
      }

      try {
        const res = await axios.put("/user/" + user._id, updateUser)
    
        console.log(res)
        setSuccessMessage(true)

        dispatch({type:"UPDATE_SUCCESS", payload: res.data})

        
      } catch (error) {

        dispatch({ type: "UPDATE_FAILURE" });
        
      }
    }



  return (
    <>

<div className="updateTitle"> update profile </div>
    <div className="profile">
         {/* <h1 className="updateTitle">Update profile</h1> */}
      <div className="settingContainer">
       
     
        <form className="settingForm" onSubmit={handleSubmit} >
          <label></label>
          <div className="settingProfilePicutre">
            <img />
            <label >
              <i className="settingsPPIcon far fa-user-circle"></i>
            </label>
            <input type="file"  className="fileInput" />
          </div>

          <div className="inputText">
            <label>username</label>
            <input 
            type="text" 
            placeholder={user.username}
             className="settingInput"
             onChange={(e) => setUsername(e.target.value)}
             
             />
            <label>Email</label>
            <input 
            type="email" 
            placeholder={user.email}
            className="settingInput" 
            onChange={(e) => setEmail(e.target.value)}
            
            />
            <label>Password</label>
            <input 
            type="password" 
            placeholder="password" 
            className="settingInput" 
            onChange={(e) => setPasswrod(e.target.value)}
            
            />
          </div>
          <button className="settingsSubmit " type="submit">
            Update
          </button>
          {successMessage && (
            <span style={{
                color:"green"


            }}>
                Your profile has been updated

            </span>
          )}
        </form>
      </div>
    </div>
    </>

  );
};

export default Profile;

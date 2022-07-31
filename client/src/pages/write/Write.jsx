import React,{useState, useContext}from "react";
import ProfileSideBar from "../../components/profileSideBar/ProfileSideBar";
import "./write.scss";
import axios from "axios";
import { AppContext } from "../../context/context";


const Write = () => {
    const {user} = useContext(AppContext)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
          username: user.username,
          title,
          description,
          userId: user._id
         
        };
        if (file) {
          const data =new FormData();
          const filename = Date.now() + file.name;
          data.append("name", filename);
          data.append("file", file);
          newPost.photo = filename;
          try {
            await axios.post("/upload", data);
          } catch (err) {}
        }
        try {
          const res = await axios.post("/post", newPost);
          console.log(res.data)
        //   window.location.replace("/post/" + res.data._id);
          window.location.replace("/");
        } catch (err) {}
      };






  return (
    <>
 
    <div className="profilebar">
    <ProfileSideBar />
    {/* <div className="publishDiv"> */}
       
        {/* </div> */}
    </div>
   
    <div className="write">
    {file && (
      <img
      className="writeImg"
      src={URL.createObjectURL(file)}
      alt=""
    />

    )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" 
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <input
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={e=>setDescription(e.target.value)}
           
          />
        </div>
      
        <button className="writebtn" type="submit">
            Publish
          </button>
      
      </form>
    
    
      
 
      
     
    </div>
    </>
   
  );
};

export default Write;

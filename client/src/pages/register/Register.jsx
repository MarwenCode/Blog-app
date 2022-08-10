import React,{useState, useEffect, useContext}  from 'react';
import "./register.scss";
import axios from 'axios';
import { AppContext } from '../../context/context';

const Register = () => {
  const {dispatch } = useContext(AppContext)
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()


  const handleRegister = async(e) => {
   
    e.preventDefault()
    dispatch({type:"LOGIN_START"})
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      localStorage.setItem("user", JSON.stringify(res))
      console.log(res)
      dispatch({type:"LOGIN_SUCCESS",payload: res.data})
      res.data && window.location.replace("/login");
    }catch(error) {
      console.log(error)
     
    }

  }





  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleRegister}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="registerButton">Register</button>
      </form>
    </div>
  );
}

export default Register
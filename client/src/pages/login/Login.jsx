import React,{useContext, useState, useRef} from 'react';
import "./login.scss";
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/context';
import axios from 'axios'



const Login = () => {
  const {dispatch } = useContext(AppContext)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  // const emailRef = useRef() 
  // const passwordRef = useRef()

  // const handleLogin = async(e) => {
  //   e.preventDefault()
  //   dispatch({type:"LOGIN_START"})
  //   try {
  //     const res = await axios.post("/auth/login",{
  //       email: emailRef.current.value,
  //       passworl: passwordRef.current.value

  //     })
  //     console.log(res)
  //     dispatch({type:"LOGIN_SUCCESS",payload: res.data})
  //     res.data && window.location.replace("/");

  //   } catch (error) {
  //     dispatch({type:"LOGIN_FAILURE"})
      
  //   }

  //   console.log(e.target.value)


  // }

  const handleLogin = async(e) => {
    e.preventDefault()
      dispatch({type:"LOGIN_START"})
      try {
        // const res = await axios.post("auth/login",{
        const res = await axios.post("https://blog-app-api.onrender.com/api/auth/login",{
          email,
          password
  
        })
        console.log(res)
        dispatch({type:"LOGIN_SUCCESS",payload: res.data})
        res.data && window.location.replace("/");
  
      } catch (error) {
        dispatch({type:"LOGIN_FAILURE"})
        
      }
  
      console.log(e.target.value)

  }


  return (
    <div className="login">
    <span className="loginTitle">Login</span>
    <form className="loginForm" onSubmit={handleLogin}>
      <label>Email</label>
      <input
        className="loginInput"
        type="text"
        placeholder="Enter your email"
        // ref={emailRef}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        className="loginInput"
        type="password"
        placeholder="Enter your password"
        // ref={passwordRef}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button className="loginButton">Login</button>
    </form>
    {/* <Link to="/login">
       <button className="registerLoginButton">Register</button>
       </Link> */}
  </div>
  )
}

export default Login
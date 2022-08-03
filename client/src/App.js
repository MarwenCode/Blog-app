import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nabar from './components/navbar/Nabar';
import ProfileSideBar from './components/profileSideBar/ProfileSideBar';
import Posts from './components/posts/Posts';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { AppContext } from './context/context';
import { useContext } from 'react';
import Write from './pages/write/Write';
import SinglePost from './components/singlePost/SinglePost';
import Profile from './pages/profile/Profile';
import AboutMe from './pages/AboutMe/AboutMe';



function App() {
  const {user} = useContext(AppContext)
  return (
    <Router>
    <div className="container">
      <Nabar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={user ? <Home /> : <Login />}/>
        <Route path="/write" element={<Write />}/>
        <Route path="/post/:postId" element={<SinglePost/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        
      
        
      </Routes>
    </div>
   
    </Router>
  );
}

export default App;

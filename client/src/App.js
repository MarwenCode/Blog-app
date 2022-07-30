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
        
      </Routes>
    </div>
   
    </Router>
  );
}

export default App;

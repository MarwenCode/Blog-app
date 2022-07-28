import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Nabar from './components/navbar/Nabar';
import ProfileSideBar from './components/profileSideBar/ProfileSideBar';

function App() {
  return (
    <div className="container">
      <Nabar />
      <ProfileSideBar />
     
    </div>
  );
}

export default App;

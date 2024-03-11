import { Routes, Route } from 'react-router-dom'; 

import Path from '../Paths.js';

import Home from './Home/Home';
import Signup from '../components/Authorization/Signup/Signup.jsx';
import Login from '../components/Authorization/Login/Login.jsx';
import SearchJob from './Pages/SearchJob/SearchJob.jsx';
import PostJob from './Pages/PostJob/PostJob.jsx';
import Logout from './Authorization/Logout/Logout.jsx';
import UserProfile from './Pages/UserProfile/UserProfile.jsx';


export default function Routing() {
    return (
        <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path={Path.SignUp} element={<Signup />} />
            <Route path={Path.Login} element={<Login />} />
            <Route path={Path.SearchJob} element={<SearchJob />} />
            <Route path={Path.PostJob} element={<PostJob /> } />
            <Route path={Path.Logout} element={<Logout />} />
            <Route path={Path.UserProfile} element={<UserProfile />} />
        </Routes>
    );
}
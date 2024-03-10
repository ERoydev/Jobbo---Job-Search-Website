import { Routes, Route } from 'react-router-dom'; 
import Home from './Home/Home';
import Signup from '../components/Authorization/Signup/Signup.jsx';
import Login from '../components/Authorization/Login/Login.jsx';
import SearchJob from './Pages/SearchJob/SearchJob.jsx';
import PostJob from './Pages/PostJob/PostJob.jsx';
import Path from '../Paths.js';
import Logout from './Authorization/Logout/Logout.jsx';


export default function Routing() {
    return (
        <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path={Path.SignUp} element={<Signup />} />
            <Route path={Path.Login} element={<Login />} />
            <Route path={Path.SearchJob} element={<SearchJob />} />
            <Route path={Path.PostJob} element={<PostJob /> } />
            <Route path={Path.Logout} element={<Logout />} />
        </Routes>
    );
}
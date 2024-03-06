import { Routes, Route } from 'react-router-dom'; 
import Home from './Home/Home';
import Signup from '../components/Authorization/Signup/Signup.jsx';
import Login from '../components/Authorization/Login/Login.jsx';
import SearchJob from './Pages/SearchJob/SearchJob.jsx';
import PostJob from './Pages/PostJob/PostJob.jsx';


export default function Routing() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path="/searchJob" element={<SearchJob />} />
            <Route path='/postJob' element={<PostJob /> } />
        </Routes>
    );
}
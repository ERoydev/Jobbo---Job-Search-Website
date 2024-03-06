import { Routes, Route } from 'react-router-dom'; 
import Home from './Home/Home';
import Signup from '../components/Authorization/Signup';
import Login from '../components/Authorization/Login';
import SearchJob from './Pages/SearchJob/SearchJob';
import PostJob from './Pages/PostJob/PostJob';


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
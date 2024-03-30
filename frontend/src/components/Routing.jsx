import { Routes, Route } from 'react-router-dom'; 

import Path from '../Paths.js';

import Home from './Home/Home';
import Signup from '../components/Authorization/Signup/Signup.jsx';
import Login from '../components/Authorization/Login/Login.jsx';
import SearchJob from './Pages/SearchJob/SearchJob.jsx';
import PostJob from './Pages/PostJob/PostJob.jsx';
import Logout from './Authorization/Logout/Logout.jsx';
import UserProfile from './Pages/UserProfile/UserProfile.jsx';

import Notifications from './Pages/UserProfile/Pages/Notifications.jsx';
import AccountSettings from './Pages/UserProfile/Pages/AccountSettings.jsx';
import Applicants from './Pages/UserProfile/EmployerProfile/Applicants.jsx';
import JobsPosted from './Pages/UserProfile/EmployerProfile/JobsPosted.jsx';
import JobDetails from './Pages/JobDetails/JobDetails.jsx';

import EmployeeJobsApplied from './Pages/UserProfile/EmployeeProfile/EmployeeJobsApplied.jsx';

export default function Routing() {
    return (
        <Routes>
            <Route path={Path.Home} element={<Home />} />
            <Route path={Path.SignUp} element={<Signup />} />
            <Route path={Path.Login} element={<Login />} />
            <Route path={Path.SearchJob} element={<SearchJob />} />
            <Route path={Path.PostJob} element={<PostJob /> } />
            <Route path={Path.Logout} element={<Logout />} />
            <Route path={Path.UserProfile} element={<UserProfile />}>
                <Route path={Path.UserNotifications} element={<Notifications />} />
                <Route path={Path.UserSettings} element={<AccountSettings />} />
                <Route path={Path.EmployerApplicants} element={<Applicants />} />
                <Route path={Path.EmployerJobsPosted} element={<JobsPosted />} />
                <Route path={Path.EmployeeJobsApplied} element={<EmployeeJobsApplied />} />
            </Route>
            <Route path={`${Path.JobDetails}/:id`} element={<JobDetails />} />
        </Routes>
    );
}
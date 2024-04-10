import { useContext, useState, useEffect } from "react";

import AuthContext from "../../../contexts/AuthContext.jsx";

import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import EmployeeBar from "./Sidebars/EmployeeBar.jsx";
import EmployerBar from "./Sidebars/EmployerBar.jsx";
import * as UserService from '../../../services/UserService.js';

import AccountSettings from './Pages/AccountSettings.jsx';
import { Outlet } from "react-router-dom";


export default function UserProfile() {
    const { role } = useContext(AuthContext);
    const [showAccountSettings, setShowAccountSettings] = useState(true);
    const [userInformation, setUserInformation] = useState({})

    const onComponentChangeHandler = () => {
        setShowAccountSettings(false);
    }


    return (
        <>
            <Header />
            <div className="userprofile">
                { role === 'employee' && <EmployeeBar onComponentChangeHandler={onComponentChangeHandler} /> }
                { role === 'employer' && <EmployerBar onComponentChangeHandler={onComponentChangeHandler} /> }
                
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
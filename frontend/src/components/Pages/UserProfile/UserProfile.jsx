import { useContext, useState } from "react";

import AuthContext from "../../../contexts/AuthContext.jsx";


import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import EmployeeBar from "./Sidebars/EmployeeBar.jsx";
import EmployerBar from "./Sidebars/EmployerBar.jsx";

import Notifications from "./Pages/Notifications.jsx";
import AccountSettings from './Pages/AccountSettings.jsx';

export default function UserProfile() {
    const { role } = useContext(AuthContext);


    return (
        <>
            <Header />
            <div className="userprofile">
                { role === 'employee' && <EmployeeBar /> }
                { role === 'employer' && <EmployerBar /> }
                <Notifications />
            </div>
            <Footer />
        </>
    );
}
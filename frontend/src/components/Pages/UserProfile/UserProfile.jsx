import { useContext, useState } from "react";

import AuthContext from "../../../contexts/AuthContext.jsx";


import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import EmployeeBar from "./Sidebars/EmployeeBar.jsx";
import EmployerBar from "./Sidebars/EmployerBar.jsx";

import AccountSettings from './Pages/AccountSettings.jsx';
import { Outlet } from "react-router-dom";


export default function UserProfile() {
    const { role } = useContext(AuthContext);
    const [showAccountSettings, setShowAccountSettings] = useState(true);

    const onComponentChangeHandler = () => {
        setShowAccountSettings(false);
    }


    console.log(role)

    return (
        <>
            <Header />
            <div className="userprofile">
                { role === 'employee' && <EmployeeBar /> }
                { role === 'employer' && <EmployerBar onComponentChangeHandler={onComponentChangeHandler} /> }

                {showAccountSettings && <AccountSettings />}

                <Outlet />
            </div>
            <Footer />
        </>
    );
}
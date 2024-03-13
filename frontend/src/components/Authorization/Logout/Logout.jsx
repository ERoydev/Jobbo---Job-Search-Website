import { useNavigate } from "react-router-dom";
import Path from '../../../Paths.js';
import { useContext, useEffect } from "react";
import AuthContext from "../../../contexts/AuthContext";
import * as AuthService from "../../../services/AuthService.js";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext);

    useEffect(() => {
        AuthService.logout()
            .then(() => {
                // If succesfully logout from server then logout from client (' clean auth state ')
                logoutHandler();
                navigate(Path.Home);
            })
            .catch(() => navigate(Path.Home));
    }, [])
    

    return null;
}
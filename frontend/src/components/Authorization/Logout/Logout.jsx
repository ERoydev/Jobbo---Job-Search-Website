import { useNavigate } from "react-router-dom";
import Path from '../../../Paths.js';
import { useContext, useEffect } from "react";
import AuthContext from "../../../contexts/AuthContext.js";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext).values;

    useEffect(() => {

    }, [])
    

    return null;
}
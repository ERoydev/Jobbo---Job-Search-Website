import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import * as AuthService from '../services/AuthService';
import Path from "../Paths";
import usePersistedState from "../hooks/usePersistedState";

export const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate()
    const [auth, setAuth] = usePersistedState('auth', {});

    const registerSubmitHandler = async (values) => {
        
        const result = await AuthService.register(values);

        if (values.password !== values.confirmPassword) {
            throw new Error('Password do not match')
        } else {
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken)
            navigate(Path.Home);
        }
    }

    const loginSubmitHandler = async (values) => {
        const result = await AuthService.login(values.email, values.password);
        
        if (!result.accessToken) {
            throw new Error('Email or password dont exists!')
        } else {
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken)
            navigate(Path.Home);
        }
    }

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    }

    const values = {
        registerSubmitHandler,
        loginSubmitHandler,
        logoutHandler,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
        userId: auth._id,
        role: auth.role,
    } 

    return (
        <AuthContext.Provider value={values} >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
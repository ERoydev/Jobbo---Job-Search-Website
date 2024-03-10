import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from './contexts/AuthContext';
import * as AuthService from './services/AuthService.js';

import Home from "./components/Home/Home"
import Routing from "./components/Routing"
import Path from './Paths.js';


function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    // When refreshed token stays my temporary solution is this
    sessionStorage.removeItem('accessToken');
    return {};
  });

  const registerSubmitHandler = async (values) => {
    const result = await AuthService.register(values.email, values.password);

    if (values.password !== values.confirmPassword) {
      throw new Error('Password do not match')
    } else {
      setAuth(result);
      sessionStorage.setItem('accessToken', result.token)
      navigate(Path.Home);
    }
  }

  const loginSubmitHandler = async (values) => {
    const result = await AuthService.login(values.email, values.password);
    
    if (!result.token) {
      throw new Error('Email or password dont exists!')
    } else {
      setAuth(result);
      sessionStorage.setItem('accessToken', result.token)
      navigate(Path.Home);
    }
  }

  const logoutHandler = () => {
    setAuth({});
    sessionStorage.removeItem('accessToken');
  }

  const values = {
    registerSubmitHandler,
    loginSubmitHandler,
    logoutHandler,
    email: auth.email,
    isAuthenticated: !!auth.token,
  } 

  return (
    <>
      <AuthContext.Provider value={{ values }}>
        <input type="checkbox" id="nav-toggle"></input>
        <div className="site">
          <Routing />
        </div>
      </AuthContext.Provider>
    </>
  )
}

export default App

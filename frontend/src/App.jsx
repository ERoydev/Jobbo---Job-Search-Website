import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from './contexts/AuthContext';
import * as AuthService from './services/AuthService.js';

import Home from "./components/Home/Home"
import Routing from "./components/Routing"


function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState([]);

  const registerSubmitHandler = async (values) => {
    const result = AuthService.register(values.email, values.password);

    if (values.password !== values.confirmPassword) {
      throw new Error('Password do not match')
    } else {
      setAuth(result);
      navigate('/');
    }
  }

  const loginSubmitHandler = async (values) => {
    const result = AuthService.login(values.email, values.password);


  }

  const values = {
    registerSubmitHandler,
    loginSubmitHandler,
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

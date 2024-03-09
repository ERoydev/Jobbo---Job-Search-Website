import { useState } from "react";
import Home from "./components/Home/Home"
import Routing from "./components/Routing"
import AuthContext from './contexts/AuthContext';

function App() {
  const [auth, setAuth] = useState([]);

  const values = {

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

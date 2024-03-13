
import Routing from "./components/Routing"
import { AuthProvider } from './contexts/AuthContext.jsx';

function App() {
 

  return (
    <>
      <AuthProvider >
        <input type="checkbox" id="nav-toggle"></input>
        <div className="site">
          <Routing />
        </div>
      </AuthProvider>
    </>
  )
}

export default App

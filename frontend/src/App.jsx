import Home from "./components/Home/Home"
import Routing from "./components/Routing"

function App() {

  return (
    <>
      <input type="checkbox" id="nav-toggle"></input>
      <div className="site">
        <Routing />
      </div>
    </>
  )
}

export default App


import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Dashboard from "./pages/Dashboard"
import Users from "./pages/Users"
import Settings from "./pages/Settings"
import { Routes, Route} from "react-router-dom"

function App() {

  return (
    <div style={{ display: "flex"}}>
      <Sidebar />
      <div style={{  flex:1}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>

      </div>
    </div>
  )
}

export default App

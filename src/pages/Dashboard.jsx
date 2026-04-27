import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts"
import { useNavigate } from "react-router-dom"

const data = [
  { name: "Lun", users: 30 },
  { name: "Mar", users: 45 },
  { name: "Mie", users: 60 },
  { name: "Jue", users: 40 },
  { name: "Vie", users: 80 },
]

const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    flex: 1
}

function Dashboard() {
  const navigate = useNavigate()
  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard</h2>
      <div style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px"
        }}>
     
        <div style={cardStyle}>
          <h3>Usuarios</h3>
          <p>120</p>
        </div>

        <div style={cardStyle}>
          <h3>Ventas</h3>
          <p>$500</p>
        </div>

        <div style={cardStyle}>
          <h3>Visitas</h3>
          <p>1,200</p>
        </div>
      </div>
      <button onClick={() => navigate("/users")}>
        Ir a gestionar usuarios
      </button>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="users" stroke="#8884d8" />
      </LineChart>
    </div>
  )
}


export default Dashboard
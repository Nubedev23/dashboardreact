import { Link } from "react-router-dom"

function Sidebar() {
    return (
        <div style={{  
            width: "200px",
            height: "100vh",
            background: "#111",
            color: "white",
            padding: "20px",
        }}>
            <h2>Menú</h2>
            <Link to="/" style={{ color: "white", display: "block", margin: "10px 0" }}>
                Dashboard
            </Link>

            <Link to="/users" style={{ color: "white", display: "block", margin: "10px 0" }}>
                Usuarios
            </Link>

            <Link to="/settings" style={{ color: "white", display: "block", margin: "10px 0" }}>
                Configuración
            </Link>
      </div>
    )
}

export default Sidebar
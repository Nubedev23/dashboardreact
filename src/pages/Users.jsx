import { useState, useEffect } from "react"


function Users() {
    const [users, setUsers] = useState(() => {
      const saved = localStorage.getItem("users")
      return saved ? JSON.parse(saved) : [
        { id: 1, name: "Ana Pérez", email: "ana@email.com", role: "Admin" },
        { id: 2, name: "Juan Soto", email: "juan@email.com", role: "User" },
        { id: 3, name: "María López", email: "maria@email.com", role: "User" },
      ]
    })
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const [search, setSearch] = useState("")
    
    const addUser = () => {
      if (!name || !email || !role) return

      if (editingUser) {
        const updated = users.map(user =>
          user.id === editingUser.id
            ? { ...user, name, email, role }
            : user
        )
        setUsers(updated)
        setEditingUser(null)
      } else {
        const newUser = {
          id: users.length + 1,
          name,
          email,
          role
        }
        setUsers([...users, newUser])
      }

      setName("")
      setEmail("")
      setRole("")
    }
    
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(search.toLowerCase())
    )

    const deleteUser = (id) => {
      const updatedUsers = users.filter(user => user.id !== id)
      setUsers(updatedUsers)
    }
    const [editingUser, setEditingUser] = useState(null)
    useEffect(() => {
      if (editingUser) {
        setName(editingUser.name)
        setEmail(editingUser.email)
        setRole(editingUser.role)
      }
    }, [editingUser])

    useEffect(() => {
      localStorage.setItem("users", JSON.stringify(users))
    }, [users])
  return (
    <div style={{ padding: "20px" }}>
      <h2>Usuarios</h2>
        
        <div style={{ marginTop: "20px" }}>
            <input
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                placeholder="Rol"
                value={role}
                onChange={(e) => setRole(e.target.value)}
            />

            <button onClick={addUser}>
              {editingUser ? "Actualizar Usuario" : "Agregar Usuario"}
            </button>
        </div>
        <input
        type="text"
        placeholder="Buscar usuario..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
            padding: "10px",
            marginTop: "10px",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ccc"
        }}
        />
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}>
        <thead>
          <tr style={{ background: "#eee" }}>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Nombre</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Email</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Rol</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Acciones</th>
          </tr>
          
        </thead>

        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id} style={{
                transition: "0.2s",
                }}
            onMouseEnter={e => e.currentTarget.style.background = "#fac8e8"}
            onMouseLeave={e => e.currentTarget.style.background = "white"}
            >
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{user.name}</td>
              <td style={{ padding: "10px", border: "1px solid #c6e2ed" }}>{user.email}</td>
              <td style={{ padding: "10px", border: "1px solid #d7d3ef" }}>{user.role}</td>
              <td style={{ padding: "10px", border: "1px solid #d7d3ef" }}>
                <button onClick={() => deleteUser(user.id)} style={{
                    marginLeft: "10px",
                    marginRight: "10px",
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}>Eliminar 
                </button>
                <button onClick={() => setEditingUser(user)} style={{
                    marginLeft: "10px",
                    marginRight: "10px",
                    background: "blue",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}> Editar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
  )
  
}

export default Users
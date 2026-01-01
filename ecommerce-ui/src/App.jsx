// import { Routes, Route,} from "react-router-dom";
// import Home from './components/Home'
// import Login from './components/Login'
// import State from './components/states'

// function App() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/state" element={<State />}></Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;

















import { useEffect, useState } from "react";
import API from "./services/api";

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const [editId, setEditId] = useState(null);

  // READ
  const fetchUsers = async () => {
    const res = await API.get("/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // CREATE
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await API.put(`/users/${editId}`, form);
      setEditId(null);
    } else {
      await API.post("/users", form);
    }
    setForm({ name: "", email: "", age: "" });
    fetchUsers();
  };

  // DELETE
  const handleDelete = async (id) => {
    await API.delete(`/users/${id}`);
    fetchUsers();
  };

  // EDIT
  const handleEdit = (user) => {
    setForm(user);
    setEditId(user._id);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>User CRUD App</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Age"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}
        />
        <button type="submit">
          {editId ? "Update" : "Add"}
        </button>
      </form>

      <hr />

      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} - {user.email} - {user.age}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

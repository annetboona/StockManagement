import { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ username: "", password: "", id: null });

  const loadUsers = () => {
    axios
      .get("http://localhost:5000/api/users", { withCredentials: true })
      .then((res) => setUsers(res.data));
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(
      `http://localhost:5000/api/users`,
      {
        username: form.username,
        ...(form.password && { password: form.password }),
      },
      { withCredentials: true }
    );

    setForm({ username: "", password: "", id: null });
    loadUsers();
  };

  const handleEdit = async (u) => {
    setForm({ username: u.username, password: "", id: u._id });
    await axios.put(`http://localhost:5000/api/users/${id}`, {
      withCredentials: true,
    });
    loadUsers();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this user?")) {
      await axios.delete(`http://localhost:5000/api/users/${id}`, {
        withCredentials: true,
      });
      loadUsers();
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Manage Users</h2>

      <form onSubmit={handleSubmit} className="mb-6">
        <div className="grid grid-cols-2 gap-4 ">
          <input
            type="text"
            placeholder="Username"
            className="border p-2 rounded"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <input
            type="password"
            placeholder={form.id ? "(Optional) New Password" : "Password"}
            className="border p-2 rounded"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
          {form.id ? "Update User" : "Add User"}
        </button>
      </form>

      <table className="w-500 border-collapse border border-gray-300 rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Username</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{u.username}</td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                <button
                  onClick={() => handleEdit(u)}
                  className="text-sm px-2 py-1 bg-blue-400 text-white rounded mx-1"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(u._id)}
                  className="text-sm px-2 py-1 bg-red-600 text-white rounded mx-1"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

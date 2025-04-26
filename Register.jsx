import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.value]: e.target.value });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/users/register",
        {
          formData,
        }
      );
      console.log("Registeration successful:", response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return (
    <>
      <div className="container">
        <h1>Register</h1>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <label htmlFor="">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="p-2 border rounded"
          />
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;

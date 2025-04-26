import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/Backend/src/routes/users",
        { username, password },
        { withCredentials: true }
      );
      navigate("/dashboard");
      console.log("Login successful");
    } catch (error) {
      console.log("Login failed:", error.message);
    }
  };

  return (
    <div className="container">
      <form>
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="button" onClick={handleLogin}>
            Sign In
          </button>
          <span>
            Don't have an account? <a href="/register">Register</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;

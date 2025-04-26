import axios from "axios";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  const handleLogout = async () => {
    try {
      await axios.get("http://localhost:5000/api/user/logout");
      Navigate("/");
    } catch (error) {
      console.error("logout failed:", error);
    }
  };
  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          backgroundColor: "#3b82f6",
          padding: "15px",
        }}
      >
        <Link to="/dashboard" style={navStyle}>
          Dashboard
        </Link>
        <Link to="/products" style={navStyle}>
          Products
        </Link>
        <Link to="/Stock" style={navStyle}>
          Stock In
        </Link>
        <Link to="/StockOut" style={navStyle}>
          Stock Out
        </Link>
        <Link to="/StockReport" style={navStyle}>
          Stock Report
        </Link>
        <Link to="/Users" style={navStyle}>
          Users
        </Link>
      </nav>

      <main
        style={{
          padding: "30px",
          backgroundColor: "#EDF2F7",
          minHeight: "80vh",
        }}
      >
        <h1
          style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}
        >
          Apade Stock Management System
        </h1>
        <Outlet />
      </main>
    </div>
  );
};
const navStyle = {
  color: "white",
  textDecoration: "none",
  padding: "10px",
  borderRadius: "5px",
  backgroundColor: "#3b82f6",
};

export default Dashboard;

import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";
import Products from "./Components/Products";
import Stock from "./Components/Stock";
import StockOut from "./Components/StockOut";
import StockReport from "./Components/StockReport";
import Users from "./pages/Users";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/stoctout" element={<StockOut />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Products />} />
          <Route path="/users" element={<Users />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/stockreport" element={<StockReport />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

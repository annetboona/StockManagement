import React from "react";
import apadeImage from "../assets/img/apade.jpg";

const HomePage = () => {
  const navStyles = {
    backgroundColor: "#667EEA",
    color: "white",
    padding: "16px",
    display: "flex",
    justifyContent: "center",
    alignments: "center",
  };

  const ulStyles = {
    display: "flex",
    gap: "30%",
    listStyleType: "none",
    margin: "0",
    padding: "0",
  };

  const linkStyles = {
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const hoverLinkStyles = {
    color: "#a0aec0",
    transition: "none",
  };
  const main = {
    textAlign: "center",
    padding: "10px",
    display: "flex",
    justifyContent: "center",
    marginLeft: "100px",
  };

  const container = {
    backgroundColor: "#efef",
    boxshadow: "#eee",
    padding: "100px",
  };
  const sidePage = {
    gap: "10px",
    padding: "10px",
  };
  const footerStyles = {
    backgroundColor: "#2d3748",
    color: "white",
    textAlign: "center",
    padding: "16px",
    marginTop: "20px",
  };
  const goals = {
    gap: "10px",
    padding: "10px",
  };
  const image = {
    widith: "50%",
    height: "101.50vh",
  };

  return (
    <>
      <div style={navStyles}>
        <ul style={ulStyles}>
          <li>
            <a href="/Home" style={linkStyles}>
              Home
            </a>
          </li>
          <li>
            <a href="/Dashboard" style={linkStyles}>
              Dashboard
            </a>
          </li>
          <li>
            <a href="/Services" style={linkStyles}>
              Services
            </a>
          </li>
          <li>
            <a href="/Profile" style={linkStyles}>
              Profile
            </a>
          </li>
          <li>
            <a href="/Login" style={linkStyles}>
              Login
            </a>
          </li>
        </ul>
      </div>
      <div className="main">
        <img src={apadeImage} alt="apade stock" style={image} />
        <h2 style={main}>Apade Stock Management</h2>
        <p style={main}>Welcome To Our School's Stock</p>
      </div>
      <div className="cotainer" style={container}>
        <div className="sidePages" style={sidePage}>
          <h1>Our Services</h1>
          <p>
            <span>
              At Apade School, we offer efficient stock management solutions,
              ensuring accurate inventory tracking, streamlined procurement, and
              effective resource distribution for educational needs.
            </span>
          </p>
        </div>
        <div className="goals">
          <h1>Our Goals And Mission</h1>
          <p>
            To optimize stock usage, minimize waste, and ensure all supplies are
            readily available to support students, staff, and school operations
          </p>
          <span>
            Our Mission: To enhance educational excellence by providing a
            seamless and reliable stock management system that meets the dynamic
            demands of the school community.
          </span>
        </div>
      </div>
      <footer style={footerStyles}>
        <p>&copy; 2025 Apade School Stock Management. All rights reserved.</p>
        <p>
          Designed and maintained by{" "}
          <a href="/about" style={{ color: "#38B2AC" }}>
            Our Team
          </a>
        </p>
      </footer>
    </>
  );
};

export default HomePage;

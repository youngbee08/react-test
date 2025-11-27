import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#222",
    color: "white",
    padding: "10px 20px",
  };

  const buttonStyle = {
    backgroundColor: "white",
    color: "#222",
    border: "none",
    padding: "8px 16px",
    borderRadius: "5px",
    cursor: "pointer",
    marginLeft: "10px",
  };

  return (
    <nav style={navStyle}>
      <h2>MyApp</h2>
      <div>
        <Link to="/signup"><button style={buttonStyle}>Signup</button></Link>
        <Link to="/login"><button style={buttonStyle}>Login</button></Link>
      </div>
    </nav>
  );
};

export default Navbar;

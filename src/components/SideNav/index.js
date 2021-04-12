import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function SideNav(props) {
  const { openNav, closeNav } = props;

  return (
    <div>
      <div id="mySidenav" className="sidenav">
        <button className="closebtn btn" onClick={closeNav}>
          &times;
        </button>
        <Link className="nav-link" style={{ color: "white" }} to="/">
          Home
        </Link>
        <Link className="nav-link" style={{ color: "white" }} to="/about">
          About
        </Link>
        <Link className="nav-link" style={{ color: "white" }} to="/projects">
          Projects
        </Link>
        <Link className="nav-link" style={{ color: "white" }} to="/contact">
          Contact
        </Link>
      </div>

      <button id="open-nav" className="btn" onClick={openNav}>
        &#9776;
      </button>
    </div>
  );
}

export default SideNav;

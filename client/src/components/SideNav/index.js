import React from "react";
import "./style.css";

function SideNav(props) {
  const { openNav, closeNav } = props;

  return (
    <div>
      <div id="mySidenav" className="sidenav">
        <button className="closebtn btn" onClick={closeNav}>
          &times;
        </button>
        <a className="nav-link" style={{ color: "white" }} href="/">
          Home
        </a>
        <a className="nav-link" style={{ color: "white" }} href="/about">
          About
        </a>
        <a className="nav-link" style={{ color: "white" }} href="/projects">
          Projects
        </a>
        <a className="nav-link" style={{ color: "white" }} href="/contact">
          Contact
        </a>
      </div>

      <button id="open-nav" className="btn" onClick={openNav}>
        &#9776;
      </button>
    </div>
  );
}

export default SideNav;

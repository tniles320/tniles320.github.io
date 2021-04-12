import React from "react";
import { Link } from "react-router-dom";
import SideNav from "../SideNav";
import "./style.css";

function Nav() {
  function openNav(event) {
    event.preventDefault();
    document.getElementById("mySidenav").style.width = "250px";
  }

  /* Set the width of the side navigation to 0 */
  function closeNav(event) {
    event.preventDefault();
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <SideNav openNav={openNav} closeNav={closeNav} />
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
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
      </div>
    </nav>
  );
}

export default Nav;

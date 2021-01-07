import React from "react";
import SideNav from "../SideNav";
import "./style.css";

function Nav() {
  function openNav(event) {
    event.preventDefault();
    document.getElementById("mySidenav").style.width = "250px";
    console.log("hello");
  }

  /* Set the width of the side navigation to 0 */
  function closeNav(event) {
    event.preventDefault();
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
      <SideNav openNav={openNav} closeNav={closeNav} />
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
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
      </div>
    </nav>
  );
}

export default Nav;

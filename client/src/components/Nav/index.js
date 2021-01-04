import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
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

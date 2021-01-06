import React from "react";
import "./style.css";

function Contacts(props) {
  const { handleBtn } = props;
  return (
    <div id="links">
      <div className="row">
        <div className="col"></div>
        <div className="col right-div">
          <button
            className="row btn-info link-btn"
            id="email"
            onClick={handleBtn}
          >
            <span>tniles320@gmail.com</span>
            <i className="fa fa-envelope link-icon"></i>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col left-div">
          <button
            className="row btn-info link-btn"
            id="phone"
            onClick={handleBtn}
          >
            <span>(909) 230-0325</span>
            <i className="fa fa-phone-square link-icon"></i>
          </button>
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col right-div">
          <button
            className="row btn-info link-btn"
            id="linkedin"
            onClick={handleBtn}
          >
            <span>LinkedIn</span>
            <i className="fa fa-linkedin-square link-icon"></i>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col left-div">
          <button
            className="row btn-info link-btn"
            id="github"
            onClick={handleBtn}
          >
            <span>GitHub</span>
            <i className="fa fa-github link-icon"></i>
          </button>
        </div>
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col right-div">
          <button
            className="row btn-info link-btn"
            id="twitter"
            onClick={handleBtn}
          >
            <span>Twitter</span>
            <i className="fa fa-twitter link-icon"></i>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col left-div">
          <button
            className="row btn-info link-btn"
            id="resume"
            onClick={handleBtn}
          >
            <span>My Resume</span>
            <i className="fa fa-file-text link-icon"></i>
          </button>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Contacts;

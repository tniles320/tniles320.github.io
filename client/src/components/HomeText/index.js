import React from "react";
import "./style.css";

function HomeText() {
  return (
    <div className="card-body home-text">
      <h3 className="card-title">A little about me</h3>
      <p className="card-text" id="about-text">
        I am full-stack web developer with extensive experience working with and
        managing teams. <br />I have experience with the following:
      </p>
      <div className="row no-gutters d-flex justify-content-around">
        <p className="languages">HTML</p>
        <p className="languages">CSS</p>
        <p className="languages">Javascript</p>
        <p className="languages">Node</p>
        <p className="languages">React</p>
      </div>
    </div>
  );
}

export default HomeText;

import React from "react";
import "./style.css";

function CardText() {
  return (
    <div className="card-body">
      <h1 className="card-title info">Taylor Niles</h1>
      <p className="card-text info" id="home-title">
        Software Engineer
      </p>
      {/* <p className="card-text">
        <small className="text-muted">tniles320@gmail.com</small>
      </p>
      <p className="card-text">
        <small className="text-muted">909-230-0325</small>
      </p>
      <p className="card-text">
        <small className="text-muted">Upland, California</small>
      </p> */}
    </div>
  );
}

export default CardText;

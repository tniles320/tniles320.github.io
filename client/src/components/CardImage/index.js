import React from "react";
import "./style.css";
import profile from "../../img/profile-photo.jpg";

function CardImage() {
  return (
    <div>
      <img
        src={profile}
        id="profile-image"
        className="card-img"
        alt="taylor niles"
      ></img>
    </div>
  );
}

export default CardImage;

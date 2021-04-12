import React from "react";
import "./style.css";
import cymbal from "../../img/cymbal-bg.jpg";

function Background() {
  // set variable to change with page
  const img = cymbal;
  return (
    <div
      id="background"
      style={{
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    ></div>
  );
}

export default Background;

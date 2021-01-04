import React from "react";

function ProjectsImage(props) {
  return (
    <div className="img-container">
      <a href={props.link}>
        <img alt="project" src={props.image} className="proj-img" />
      </a>
    </div>
  );
}

export default ProjectsImage;

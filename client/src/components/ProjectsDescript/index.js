import React from "react";

function ProjectsDescript(props) {
  return (
    <div className="proj-text">
      <h3 className="proj-title">{props.title}</h3>
      <div className="proj-descript">{props.description}</div>
      <a className="proj-github" href={props.github}>
        GitHub
      </a>
    </div>
  );
}

export default ProjectsDescript;

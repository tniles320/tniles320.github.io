import React from "react";
import ProjectsImage from "../ProjectsImage";
import ProjectsDescript from "../ProjectsDescript";

function ProjectsComponent(props) {
  const { ProjectsList } = props;
  return ProjectsList.map((project) => {
    return (
      <div className="proj-container">
        <ProjectsDescript
          title={project.title}
          description={project.description}
          github={project.github}
        />
        <ProjectsImage image={project.image} link={project.link} />
      </div>
    );
  });
}

export default ProjectsComponent;

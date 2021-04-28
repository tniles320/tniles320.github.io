import React from "react";
import ProjectsImage from "../ProjectsImage";
import ProjectsDescript from "../ProjectsDescript";

function ProjectsComponent(props) {
  const { ProjectsList } = props;
  return ProjectsList.map((project, index) => {
    return (
      <div className="proj-container" key={index}>
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

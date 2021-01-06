import React from "react";
import ProjectsComponent from "../../components/ProjectsComponent";
import bindrr from "../../img/bindrr-screenshot.jpg";
import healthapp from "../../img/healthapp-screenshot.png";
import weatherDashboard from "../../img/weather-dashboard1-screenshot.png";
import employeeDirectory from "../../img/employee-directory.jpg";
import teamGenerator from "../../img/team-generator-screenshot.jpg";
import fitnessTracker from "../../img/fitness-tracker-ss.jpg";
import "./style.css";

function Projects() {
  const ProjectsList = [
    {
      title: "Bindrr",
      description:
        "A web application for property management companies and rental agents to organize contact information",
      image: bindrr,
      github: "https://github.com/tniles320/bindrr",
      link: "https://lit-wildwood-97501.herokuapp.com/",
    },
    {
      title: "Healthapp",
      description:
        "This application allows a user to search for local health-oriented businesses based on individual needs and goals",
      image: healthapp,
      github: "https://github.com/tniles320/healthapp",
      link: "https://tniles320.github.io/healthapp/",
    },
    {
      title: "Weather Dashboard",
      description:
        "The weather dashboard allows you to search for a city's current weather and five day forecast",
      image: weatherDashboard,
      github: "https://github.com/tniles320/weather-dashboard",
      link: "https://tniles320.github.io/weather-dashboard/",
    },
    {
      title: "Employee Directory",
      description:
        "The employee directory is a React app that generates a table of 40 random users along with their associated information",
      image: employeeDirectory,
      github: "https://github.com/tniles320/employee-directory",
      link: "https://tniles320.github.io/employee-directory/",
    },
    {
      title: "Team Generator",
      description:
        "The Team generator allows a user quickly generate a website showcasing their team of employees",
      image: teamGenerator,
      github: "https://github.com/tniles320/team-generator",
      link: "https://github.com/tniles320/team-generator",
    },
    {
      title: "Fitness Tracker",
      description:
        "The fitness tracker allows a user to keep track of workouts by adding exercises performed",
      image: fitnessTracker,
      github: "https://github.com/tniles320/fitness-tracker",
      link: "https://fitness-tracker117.herokuapp.com/",
    },
  ];
  return (
    <div className="projects-container">
      <ProjectsComponent ProjectsList={ProjectsList} />
    </div>
  );
}

export default Projects;

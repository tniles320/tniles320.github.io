import React from "react";
import ProjectsComponent from "../../components/ProjectsComponent";
import bindrr from "../../img/bindrr-screenshot.jpg";
import healthapp from "../../img/healthapp-screenshot.png";
import weatherDashboard from "../../img/weather-dashboard1-screenshot.png";
import employeeDirectory from "../../img/employee-directory.jpg";
import googleBooksSearch from "../../img/google-books-search-ss.png";
import foothillFitness from "../../img/foothillfitness-ss.png";
import "./style.css";

function Projects() {
  const ProjectsList = [
    {
      title: "Foothill Fitness",
      description:
        "A React app that uses Node, Express, and MongoDB for back-end functionality. The site features admin pages, protected by Passport authentication, that allow an admin to store and update data.",
      image: foothillFitness,
      github: "https://github.com/tniles320/foothillfitness",
      link: "https://foothillfitness.com/",
    },
    {
      title: "Bindrr",
      description:
        "A web application for property management companies and rental agents to organize contact information",
      image: bindrr,
      github: "https://github.com/tniles320/bindrr",
      link: "https://lit-wildwood-97501.herokuapp.com/",
    },
    {
      title: "Google Books Search",
      description:
        "Google Books Search is a React app that uses the Google Books API and MongoDB to display and save book information from a user query",
      image: googleBooksSearch,
      github: "https://github.com/tniles320/google-books-search",
      link: "https://google-books-search-117.herokuapp.com/",
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
  ];
  return (
    <div className="projects-container">
      <ProjectsComponent ProjectsList={ProjectsList} />
    </div>
  );
}

export default Projects;

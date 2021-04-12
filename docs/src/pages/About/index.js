import React from "react";
import Heading from "../../components/Heading";
import AboutText from "../../components/AboutText";
import Data from "./Data";
import "./style.css";

function About() {
  const { education, languages, goals } = Data;
  return (
    <main>
      <div className="container">
        <Heading heading="EDUCATION" />
        <AboutText text={education} />
      </div>
      <div className="container">
        <Heading heading="LANGUAGES/FRAMEWORKS" />
        <AboutText text={languages} />
      </div>
      <div className="container">
        <Heading heading="GOALS" />
        <AboutText text={goals} />
      </div>
    </main>
  );
}

export default About;

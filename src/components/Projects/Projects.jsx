// Projects.jsx

import React from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="internship">
      <h2 className={styles.title}>Internships</h2>
      <div className={styles.projects}>
        <ProjectCard
          imagePath="src/assets/nav/internships/aiIntern.png"
          description="An AI Internship provided by Pantech Solutions. I have learned and executed many projects that included many skills like Computer vision, Deep Learning Algorithm, Machine learning Algorithm, etc."
        />
        <ProjectCard
          imagePath="src/assets/nav/internships/Technohacks2.png"
          description="A Java Development Internship where I have completed three tasks to make Rock Paper Scissor game, Password Generator, and Tic Tac Toe game."
        />
        <ProjectCard
          imagePath="src/assets/nav/internships/twilearn.png"
          description="A Data Science Internship where I learned basics of python, data handling, plotting charts, Tableau, etc."
        />
      </div>
    </section>
  );
};

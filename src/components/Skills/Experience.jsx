// Experience.jsx

import React from "react";

import styles from "./Experience.module.css";

export const Experience = () => {
  const skillsData = [
    {
      title: "HTML",
      imageSrc: "src/assets/nav/skills/html.png",
    },
    {
      title: "CSS",
      imageSrc: "src/assets/nav/skills/css.png",
    },
    {
      title: "Bootstrap",
      imageSrc: "src/assets/nav/skills/bootstrap.png",
    },
    {
      title: "C ",
      imageSrc: "src/assets/nav/skills/cpng.png",
    },
    {
      title: "Java",
      imageSrc: "src/assets/nav/skills/javapng.png",
    },
    
  ];

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skillsData.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={skill.imageSrc} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

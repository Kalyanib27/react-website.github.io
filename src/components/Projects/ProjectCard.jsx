import React from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({ imagePath, description }) => {
  return (
    <div className={styles.container}>
      <img
        src={imagePath}
        alt="Project Image"
        className={styles.image}
      />
      <p className={styles.description}>{description}</p>
    </div>
  );
};

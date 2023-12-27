import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import ResumePDF from "../../assets/nav/resume/resume.pdf"

export const Hero = () => {
       return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}> Hi, I am Kalyani Bhokardankar </h1>
                <p className={styles.description}>I am third year Computer Science Engineering student at Sipna COET, Amravati. Primarily interested in web development.
                   I like to learn new skills and implementing them in real life! 

                </p>
                <a href="mailto:kalyanibhokardankar@gmail.com" className={styles.contactBtn}>Contact me</a>
                <a target="blank" href="src/assets/nav/resume/resume.pdf" className={styles.resumeBtn}>Download Resume</a>
            </div>
            <img src="src/assets/nav/hero/kalyani.png" alt="Hero image of me" className={styles.heroImg}/>
              <div className={styles.topBlur}/>
              <div className={styles.bottomBlur}/>
        </section>
    );
};
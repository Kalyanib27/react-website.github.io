import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src="src/assets/nav/about/laptop.png" 
                alt="Me sitting with a laptop"
                className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src="src/assets/nav/about/cursorIcon.png" alt="cursor icon"/>
                        <div className={styles.aboutItemText}>
                            <h3> Frontend Developer</h3>
                            <p> I am a Frontend Developer created small designs using html and css.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="src/assets/nav/about/serverIcon.png" alt="server icon"/>
                        <div className={styles.aboutItemText}>
                            <h3> Software Developer</h3>
                            <p> I do coding in Java and also know some of DSA. 
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src="src/assets/nav/about/pursor.png" alt="pursor icon"/>
                        <div className={styles.aboutItemText}>
                            <h3> Graphic Design </h3>
                            <p> I like Graphic Designing and made many logos, cards, invitation, thumbnails, etc.
                            </p>
                        </div>
                    </li>
                   
                </ul>
            </div>
        </section>
    )
}
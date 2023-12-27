import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return ( <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src="src/assets/nav/contact/emailIcon.png" alt="Email Icon"/>
                <a href="mailto:kalyanibhokardankar@gmail.com">kalyanibhokardankar@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src="src/assets/nav/contact/linkedin.png" alt="Linkedin Icon"/>
                <a target="_blank" href="https://www.linkedin.com/in/kalyani-bhokardankar-944363241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin.com/kalyanibhokardankar</a>
            </li>
            <li className={styles.link}>
                <img src="src/assets/nav/contact/github.png" alt="Github Icon"/>
                <a target="_blank" href="https://github.com/Kalyanib27">github.com/kalyanibhokardankar</a>
            </li>
        </ul>
    </footer>
    );
};
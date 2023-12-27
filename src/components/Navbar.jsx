import React,{useState} from "react";

import styles from "./Navbar.module.css";
import {getImageUrl} from "../utils";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/"> Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn} 
        src={
          menuOpen
          ? "src/assets/nav/menuIcon.png"
          : "src/assets/nav/closeIcon.png"
        }
        alt="Menu-Button"
        onClick={() => setMenuOpen(!menuOpen)}
        />
      <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
      onClick={() => setMenuOpen(false)}>
           <li>
             <a href="#about">About</a>
           </li>
           <li>
             <a href="#skills">Skills</a>
           </li>
           <li>
             <a href="#internship">Internship</a>
           </li>
           <li>
             <a href="#contact">Contact</a>
           </li>
        </ul>
      </div>
    </nav>
  );
};

import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { Experience } from "./components/Skills/Experience";
import { Navbar } from "./components/navbar";


function App() {
  return (
  <div className={styles.App}>
  <Navbar/>
  <Hero/>
  <About/>
  <Experience/>
  <Projects/>
  <Contact/>
  </div>
  );
}


export default App;

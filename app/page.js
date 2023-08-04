import styles from "./page.module.css";
import Header from "./components/Header";
import Story from "./components/Story";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <h1 style={{ textAlign: "center" }}>The site is under-construction.</h1>
      <Header />
      <Story />
      <Projects />
      <Skill />
      <Contact />
    </main>
  );
}

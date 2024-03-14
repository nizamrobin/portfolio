import Header from "./components/Header";
import Story from "./components/Story";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Cta from "./components/Cta";
import classes from "./ctaContainer.module.css";
import { fontPrimary } from "./components/fonts";

export default function Home() {
  return (
    <main>
      <Header />
      <div className={classes.ctaContainer}>
        <h3 className={`${classes.ctaContainerTitle} ${fontPrimary.variable}`}>
          Want to have a look at my resume?
        </h3>
        <Cta link="resume.pdf" caption="download" />
      </div>
      <Story />
      <Projects />
      <Skill />
      <Contact />
    </main>
  );
}

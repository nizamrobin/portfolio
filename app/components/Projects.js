import ProjectItem from "./ProjectItem";
import styles from "../components/Projects.module.css";

export default function Projects() {
  return (
    <section id={styles.projects} className={styles.projects}>
      <h3 className={styles.projectTitle}>Projects</h3>
      <ul className={styles.projectItems}>
        <ProjectItem
          link={"https://moonlight-bd.com/"}
          caption={"Moonlight Group"}
          imgLink={"/mlg.png"}
        />
        <ProjectItem
          link={"https://offbeat-todo-app.netlify.app/"}
          caption={"Todo App"}
          imgLink={"/todo-app.png"}
        />
        <ProjectItem
          link={"https://offbeat-random-quote.netlify.app/"}
          caption={"Random Quote Machine"}
          imgLink={"/random-quote.png"}
        />
      </ul>
    </section>
  );
}

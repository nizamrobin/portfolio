import ProjectItem from "./ProjectItem";
import styles from "../components/Projects.module.css";

export default function Projects() {
  return (
    <section id={styles.projects} class="projects">
      <h3 class="projectTitle">Projects</h3>
      <ul class="projectItems">
        <ProjectItem />
        <li class="projectItem">
          <a href="https://moonlight-bd.com/" target="_blank">
            <img class="projectItemImg" src="../res/mlg.PNG" alt="" />
            <h4 class="projectItemCap">Moonlight Group</h4>
          </a>
          <a
            href="https://moonlight-bd.com/"
            target="_blank"
            class="button projectItemOpen"
          >
            Live Preview
          </a>
        </li>
        <li class="projectItem">
          <a href="https://offbeat-todo-app.netlify.app/" target="_blank">
            <img class="projectItemImg" src="../res/todo-app.png" alt="" />
            <h4 class="projectItemCap">Todo App</h4>
          </a>
          <a
            href="https://offbeat-todo-app.netlify.app/"
            target="_blank"
            class="button projectItemOpen"
          >
            Live Preview
          </a>
        </li>
        <li class="projectItem">
          <a href="https://offbeat-random-quote.netlify.app/" target="_blank">
            <img class="projectItemImg" src="../res/random-quote.png" alt="" />
            <h4 class="projectItemCap">Random Quote Machine</h4>
          </a>
          <a
            href="https://offbeat-random-quote.netlify.app/"
            target="_blank"
            class="button projectItemOpen"
          >
            Live Preview
          </a>
        </li>
      </ul>
    </section>
  );
}

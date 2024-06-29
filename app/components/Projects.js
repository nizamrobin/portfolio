import ProjectItem from "./ProjectItem";
import styles from "../components/Projects.module.css";
import { fontSecondary } from "./fonts";

export default function Projects() {
  return (
    <section
      id="projects"
      className={`${styles.projects} ${fontSecondary.variable}`}
    >
      <h3 className={styles.projectTitle}>Projects</h3>
      <ul className={styles.projectItems}>
      <ProjectItem
          link={"https://prolap.netlify.app/"}
          caption={"proআলাপ"}
          imgLink={"prolap.png"}
          description={["A chatting web app. Inspire from the chat app build by", <a href="https://www.freecodecamp.org/news/building-a-real-time-chat-app-with-reactjs-and-firebase/">Timonwa Akintokun</a>,"and improved it by adding features like person to person private chat, message editing or deleting and still working on enriching features. Technologies used are React, Vite, JS, Firebase Auth and Firestore and deployed and hosted on Netlify for live preview."]}
        />
        <ProjectItem
          link={"https://offbeat-todo-app.netlify.app/"}
          caption={"Todo App"}
          imgLink={"todo-app.png"}
          description="A project for hands-on experience of React and javascript. Technologies used are React, Vanila Javascript, Firebase for data storage and Raw CSS. The app is deployed and hosted on Netlify."
        />
        <ProjectItem
          link={"https://moonlight-bd.com/"}
          caption={"Moonlight Group"}
          imgLink={"mlg.jpg"}
          description="Official Website for the Moonlight pharmaceutical company. Made by wordpress by customizing theme and added different plugings. Photography and contents are written by Offbeat."
        />
        <ProjectItem
          link={"https://ef-frontend-dev-task.netlify.app/"}
          caption={"Electronic First Project"}
          imgLink={"ef-frontend.png"}
          description="A project was given by Electronic First company for the purpose of Frontend Developer job reqruitment. Done successfully with the use of raw HTML, CSS and Vanila Javascript. Build with Vite and hosted on Netlify."
        />
        <ProjectItem
          link={"https://offbeat-random-quote.netlify.app/"}
          caption={"Random Quote Machine"}
          imgLink={"random-quote.png"}
          description="Initial project for having the taste of React. Raw CSS and Vanila Javascript is used. A free quote API is integrated for quote generation. Hosted on Netlify."
        />
      </ul>
    </section>
  );
}

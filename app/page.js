import styles from "./page.module.css";
import Header from "./components/Header";
import Story from "./components/Story";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main>
      <Header />
      <Story />
      <Projects />
    </main>
  );
}

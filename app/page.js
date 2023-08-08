import Header from "./components/Header";
import Story from "./components/Story";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Header />
      <Story />
      <Projects />
      <Skill />
      <Contact />
    </main>
  );
}

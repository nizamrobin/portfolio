import SkillItem from "./SkillItem";
import styles from "../components/Skill.module.css";
import { fontSecondary } from "./fonts";

export default function Skill() {
  return (
    <section id="skill" className={`${styles.skill} ${fontSecondary.variable}`}>
      <h3 className={styles.skillTitle}>Skills</h3>
      <ul className={styles.skillItems}>
        <SkillItem imgLink="next.png" caption="Next.js" />
        <SkillItem imgLink="react.png" caption="React" />
        <SkillItem imgLink="css.png" caption="CSS" />
        <SkillItem imgLink="git.png" caption="Git" />
        <SkillItem imgLink="html.png" caption="HTML" />
      </ul>
    </section>
  );
}

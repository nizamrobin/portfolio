import Image from "next/image";
import styles from "../components/ProjectItem.module.css";

export default function ProjectItem() {
  return (
    <li class={styles.projectItem}>
      <a href="https://moonlight-bd.com/" target="_blank">
        <Image
          class={styles.projectItemImg}
          src="/mlg.png"
          alt="Project-Moonlight Group"
          width={500}
          height={500}
        />
        <h4 class={styles.projectItemCap}>Moonlight Group</h4>
      </a>
      <a
        href="https://moonlight-bd.com/"
        target="_blank"
        class={`button ${styles.projectItemOpen}`}
      >
        Live Preview
      </a>
    </li>
  );
}

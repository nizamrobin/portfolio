import Image from "next/image";
import styles from "../components/ProjectItem.module.css";
import Link from "next/link";

export default function ProjectItem({ link, caption, imgLink }) {
  return (
    <li class={styles.projectItem}>
      <Link href={link} target="_blank">
        <Image
          class={styles.projectItemImg}
          src={imgLink}
          alt={"Project-" + caption}
          width={500}
          height={500}
        />
        <h4 class={styles.projectItemCap}>Moonlight Group</h4>
      </Link>
      <Link
        href={link}
        target="_blank"
        class={`button ${styles.projectItemOpen}`}
      >
        Live Preview
      </Link>
    </li>
  );
}

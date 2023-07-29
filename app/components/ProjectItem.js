import Image from "next/image";
import styles from "../components/ProjectItem.module.css";
import Link from "next/link";

export default function ProjectItem({ link, caption, imgLink }) {
  return (
    <li class={styles.projectItem}>
      <Link href={link} target="_blank">
        <Image
          class={styles.projectItemImg}
    <li className={styles.projectItem}>
      <Link href={link} target="_blank">
        <Image
          className={styles.projectItemImg}
          src={imgLink}
          alt={"Project-" + caption}
          width={500}
          height={500}
        />
        <h4 className={styles.projectItemCap}>{caption}</h4>
      </Link>
      <Link
        href={link}
        target="_blank"
        className={`button ${styles.projectItemOpen}`}
      >
        Live Preview
      </Link>
    </li>
  );
}

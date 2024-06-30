import Image from "next/image";
import styles from "../components/ProjectItem.module.css";
import Link from "next/link";
import { fontPrimary, fontSecondary } from "./fonts";

export default function ProjectItem({ link, caption, imgLink, description }) {
  return (
    <article className={styles.projectItem}>
      <Link href={link} target="_blank">
        <h4 className={styles.projectItemCap}>{caption}</h4>
        <Image
          className={styles.projectItemImg}
          src={imgLink}
          alt={"Project-" + caption}
          width={500}
          height={500}
        />
        <p
          className={`${styles.projectItemDescription} ${fontPrimary.variable}`}
        >
          {description}
        </p>
      </Link>
      <Link
        href={link}
        target="_blank"
        className={`button ${styles.projectItemOpen}`}
      >
        Live Preview
      </Link>
    </article>
  );
}

import styles from "../components/SkillItem.module.css";
import Image from "next/image";

export default function SkillItem({ imgLink, caption }) {
  return (
    <li className={styles.skillItem}>
      <Image
        className={styles.skillItemImg}
        src={imgLink}
        alt={caption}
        width={500}
        height={500}
      />
      {caption}
    </li>
  );
}

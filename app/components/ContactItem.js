import Link from "next/link";
import Image from "next/image";
import styles from "./ContactItem.module.css";

export default function ContactItem({ hLink, imgLink, caption, text }) {
  return (
    <Link href={hLink} className={styles.contactItem}>
      <Image
        className={`logo ${styles.contactItemImg}`}
        src={imgLink}
        alt={caption}
        width={500}
        height={500}
      />
      {text}
    </Link>
  );
}

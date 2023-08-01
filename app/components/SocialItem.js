import Link from "next/link";
import Image from "next/image";
import styles from "./SocialItem.module.css";

export default function SocialItem({ hLink, imgLink, caption }) {
  return (
    <Link className={styles.socialItem} href={hLink}>
      <Image
        className={`logo ${styles.socialItemImg}`}
        src={imgLink}
        alt={caption}
        title={caption}
        width={500}
        height={500}
      />
    </Link>
  );
}

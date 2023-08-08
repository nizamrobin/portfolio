import Link from "next/link";
import styles from "./NavlistItem.module.css";

export default function NavlistItem({ name, link }) {
  return (
    <li className={styles.navListItem}>
      <Link href={link}>{name}</Link>
    </li>
  );
}

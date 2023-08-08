import Link from "next/link";
import styles from "./NavlistItem.module.css";

export default function NavlistItem({ name, link, onClick }) {
  return (
    <li className={styles.navListItem} onClick={onClick}>
      <Link href={link}>{name}</Link>
    </li>
  );
}

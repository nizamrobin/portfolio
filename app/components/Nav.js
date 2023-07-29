import styles from "./Nav.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <Link className={styles.navHead} href="#">
        <Image
          src="logo/brandMini.svg"
          alt="logo"
          width={500}
          height={500}
          className={styles.brand}
        />
        <h3 className={styles.navTitle}>nizamrobin</h3>
      </Link>
      <Image
        className={`${styles.logo} ${styles.menuLogo} ${styles.menuOpen}`}
        src="logo/menu.svg"
        width={500}
        height={500}
        alt="Menu"
      />
      <Image
        className={`${styles.logo} ${styles.menuLogo} ${styles.menuClose}`}
        src="logo/cross.svg"
        width={500}
        height={500}
        alt="Close"
      />
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <a href="#story">Story</a>
        </li>
        <li className={styles.navListItem}>
          <a href="#projects">Projects</a>
        </li>
        <li className={styles.navListItem}>
          <a href="#skill">Skill</a>
        </li>
        <li className={styles.navListItem}>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

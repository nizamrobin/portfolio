import styles from "../components/Footer.module.css";
import { fontSecondary } from "./fonts";

export default function Footer() {
  return (
    <footer className={`${styles.footer} ${fontSecondary.variable}`}>
      <p className={styles.footerText}>
        Thanks for visiting me!
        <br />
        Love from nizamrobin
      </p>
    </footer>
  );
}

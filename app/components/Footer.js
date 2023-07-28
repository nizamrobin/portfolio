import styles from "../components/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        Thanks for visiting me!
        <br />
        Love from nizamrobin
      </p>
    </footer>
  );
}

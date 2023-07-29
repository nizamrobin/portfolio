import styles from "../components/Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <section className={styles.header}>
      <div className={styles.headerText}>
        <h1>
          Hi,
          <br />
          I&apos;m nizamrobin
        </h1>
        <p className={styles.headerTextSub}>Front-End Developer</p>
      </div>
      <Image
        className={styles.headerImage}
        src="brandNLarge.svg"
        alt="header Image"
        width={500}
        height={500}
      />
    </section>
  );
}

import styles from "../components/Header.module.css";
import Image from "next/image";
import Typewriter from "./Typewriter";

export default function Header() {
  return (
    <section className={styles.header}>
      <div className={styles.headerText}>
        <h1>
          Hi,
          <br />
          I&apos;m nizamrobin
        </h1>
        <Typewriter
          textReceived={"• Front-End Developer • React • Next.js"}
          delayTime={200}
          classes={styles.headerTextSub}
        />
      </div>
      <Image
        className={styles.headerImage}
        src="brandLarge.svg"
        alt="header Image"
        width={500}
        height={500}
      />
    </section>
  );
}

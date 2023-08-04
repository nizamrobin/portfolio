"use client";
import { useState } from "react";
import styles from "../components/Story.module.css";
import Image from "next/image";

export default function Story() {
  const [storyDetail, setStoryDetail] = useState(
    "Passionate and driven Electrical & Electronic Engineering graduate with a deep interest in the technology industry, eager to establish a rewarding career in the IT field. During my undergraduation, I gained experience in web development skills such as HTML, CSS, and JavaScript, and successfully completed a commercial project, showcasing my practical expertise. \n\n I have a strong love for learning new technologies, which has led me to self-teach React while effectively managing my time alongside my current job. With a strong work ethic, adaptability, and a commitment to excellence, I am now seeking an opportunity to relaunch my career in the IT industry. I am dedicated to leveraging my technical skills, continuously expanding my knowledge base, contributing to innovative projects, and thriving in a collaborative and dynamic environment."
  );
  const handleClickShort = () => {
    setStoryDetail(
      "Passionate and driven Electrical & Electronic Engineering graduate with a deep interest in the technology industry, eager to establish a rewarding career in the IT field. During my undergraduation, I gained experience in web development skills such as HTML, CSS, and JavaScript, and successfully completed a commercial project, showcasing my practical expertise. \n\n I have a strong love for learning new technologies, which has led me to self-teach React while effectively managing my time alongside my current job. With a strong work ethic, adaptability, and a commitment to excellence, I am now seeking an opportunity to relaunch my career in the IT industry. I am dedicated to leveraging my technical skills, continuously expanding my knowledge base, contributing to innovative projects, and thriving in a collaborative and dynamic environment."
    );
  };
  const handleClickDetail = () => {
    setStoryDetail("Detail");
  };
  return (
    <section id="story" className={styles.story}>
      <div className={styles.storyHead}>
        <Image
          className={styles.watermark}
          src="/brandNLarge.svg"
          alt="Brand"
          width={500}
          height={500}
        />
        <h3 className={styles.storyTitle}>Know me</h3>
        <button className={styles.button} onClick={handleClickShort}>
          Shortly
        </button>
        <span className={styles.buttonSeparator}>or</span>
        <button
          className={`${styles.button} ${styles.btnSecondary}`}
          onClick={handleClickDetail}
        >
          In Detail
        </button>
      </div>
      <div className={styles.storyDetail}>
        <p>{storyDetail}</p>
      </div>
    </section>
  );
}

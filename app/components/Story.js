"use client";
import { useState } from "react";
import styles from "../components/Story.module.css";
import Image from "next/image";
import { fontSecondary, fontThird } from "./fonts";

export default function Story() {
  const [storyDetail, setStoryDetail] = useState(
    "Hey there, I'm Nizam Robin, a passionate Front-End Developer with a background in Electrical and Electronic Engineering. Through self-guided learning, I've mastered web technologies like HTML, CSS, React, and Next.js.\n\nAfter a brief break from the field, I dedicated the last one and a half years to honing my skills in React and Next.js, working on hobby projects to gain hands-on experience.\n\nNow, I'm excited to dive back into the technology field as a proficient Front-End Developer. My ultimate goal is to become a Full-Stack Developer while exploring the realms of AI and Blockchain technologies.\n\nWith three years of experience in the industry, I'm eager to craft seamless user experiences, tackle complex challenges, and drive innovation in the digital landscape.\n\nI'm passionate about continuous learning and look forward to seizing new opportunities and making a positive impact in the tech world. Let's create something amazing together!"
  );
  const handleClickShort = () => {
    setStoryDetail(
      "Hey there, I'm Nizam Robin, a passionate Front-End Developer with a background in Electrical and Electronic Engineering. Through self-guided learning, I've mastered web technologies like HTML, CSS, React, and Next.js.\n\nAfter a brief break from the field, I dedicated the last one and a half years to honing my skills in React and Next.js, working on hobby projects to gain hands-on experience.\n\nNow, I'm excited to dive back into the technology field as a proficient Front-End Developer. My ultimate goal is to become a Full-Stack Developer while exploring the realms of AI and Blockchain technologies.\n\nWith three years of experience in the industry, I'm eager to craft seamless user experiences, tackle complex challenges, and drive innovation in the digital landscape.\n\nI'm passionate about continuous learning and look forward to seizing new opportunities and making a positive impact in the tech world. Let's create something amazing together!"
    );
  };
  const handleClickDetail = () => {
    setStoryDetail("Detail");
  };
  return (
    <section id="story" className={styles.story}>
      <div className={`${styles.storyHead} ${fontSecondary.variable}`}>
        <Image
          className={styles.watermark}
          src="brandLarge.svg"
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
      <p className={`${styles.storyDetail} ${fontThird.variable}`}>
        {storyDetail}
      </p>
    </section>
  );
}

"use client";
import { useState } from "react";
import styles from "../components/Story.module.css";
import Image from "next/image";
import { fontSecondary, fontThird } from "./fonts";

export default function Story() {
  const [storyDetail, setStoryDetail] = useState(
    <>
      <p>
        Hey there, I'm Nizam Robin, a passionate Front-End Developer with a
        background in Electrical and Electronic Engineering. Through self-guided
        learning, I've mastered web technologies like HTML, CSS, React, and
        Next.js.
      </p>
      <br></br>
      <p>
        After a brief break from the field, I dedicated the last one and a half
        years to honing my skills in React and Next.js, working on hobby
        projects to gain hands-on experience.
      </p>
      <br></br>
      <p>
        Now, I'm excited to dive back into the technology field as a proficient
        Front-End Developer. My ultimate goal is to become a Full-Stack
        Developer while exploring the realms of AI and Blockchain technologies.
      </p>
      <br></br>
      <p>
        With three years of experience in the industry, I'm eager to craft
        seamless user experiences, tackle complex challenges, and drive
        innovation in the digital landscape.
      </p>
      <br></br>
      <p>
        I'm passionate about continuous learning and look forward to seizing new
        opportunities and making a positive impact in the tech world. Let's
        create something amazing together!
      </p>
    </>
  );
  const handleClickShort = () => {
    setStoryDetail(
      <>
        <p>
          Hey there, I'm Nizam Robin, a passionate Front-End Developer with a
          background in Electrical and Electronic Engineering. Through
          self-guided learning, I've mastered web technologies like HTML, CSS,
          React, and Next.js.
        </p>
        <br></br>
        <p>
          After a brief break from the field, I dedicated the last one and a
          half years to honing my skills in React and Next.js, working on hobby
          projects to gain hands-on experience.
        </p>
        <br></br>
        <p>
          Now, I'm excited to dive back into the technology field as a
          proficient Front-End Developer. My ultimate goal is to become a
          Full-Stack Developer while exploring the realms of AI and Blockchain
          technologies.
        </p>
        <br></br>
        <p>
          With three years of experience in the industry, I'm eager to craft
          seamless user experiences, tackle complex challenges, and drive
          innovation in the digital landscape.
        </p>
        <br></br>
        <p>
          I'm passionate about continuous learning and look forward to seizing
          new opportunities and making a positive impact in the tech world.
          Let's create something amazing together!
        </p>
      </>
    );
  };
  const handleClickDetail = () => {
    setStoryDetail(
      <>
        <h3>Introduction</h3>
        <p>
          I am a results-driven professional with a strong passion for
          technology and a proven track record of adapting to diverse challenges
          in the dynamic world of IT. Graduating from Rajshahi University of
          Engineering & Technology (RUET) with a degree in Electrical &
          Electronic Engineering, I embarked on a journey that has led me to
          become a dedicated Front-End Developer specializing in React and
          Next.js technologies.
        </p>
        <br></br>
        <h3>Early Exploration and Foundation</h3>
        <p>
          My fascination with the potential of technology was ignited during my
          time at RUET. Although my formal education was in Electrical &
          Electronic Engineering, I seized every opportunity to immerse myself
          in the world of programming languages, including C, C++, and Java. As
          my curiosity grew, I delved into web technologies such as HTML, CSS,
          and JavaScript, sparking my passion for creating impactful digital
          experiences.
        </p>
        <br></br>
        <h3>Entrepreneurial Ventures and Teaching</h3>
        <p>
          Eager to translate my enthusiasm into practical outcomes, I embarked
          on personal and commercial projects that not only honed my skills but
          also generated my first earnings in the field. Concurrently, I
          embraced the role of an educator, sharing my knowledge at coaching
          centers and through private tuitions. Together with fellow alumni, I
          co-founded an IT firm and managed a successful distribution business,
          showcasing my ability to navigate both technical and business
          landscapes.
        </p>
        <br></br>
        <h3>A Transition and Resilience</h3>
        <p>
          In 2019, I embarked on a new chapter, joining a government-owned bank.
          While the role offered stability, it came at the cost of my
          deep-rooted passion for technology. Determined to create a balance, I
          dedicated myself to my job responsibilities while seeking
          opportunities for professional growth.
        </p>
        <br></br>
        <h3>Resurgence and Specialization</h3>
        <p>
          In 2022, I reignited my commitment to technology. Despite the
          constraints of a demanding job, I embarked on a rigorous journey to
          master React and Next.js. With unwavering dedication, I completed an
          online React course and undertook hands-on projects to solidify my
          expertise. My determination culminated in the development of my own
          portfolio site using Next.js, showcasing my ability to transform ideas
          into tangible digital experiences.
        </p>
        <br></br>
        <h3>Embracing the Future</h3>
        <p>
          Armed with proficiency in React and Next.js, I am poised to embark on
          a fulfilling career as a Front-End Developer. I aspire to further
          evolve into a Full Stack Developer, with a vision to integrate
          Artificial Intelligence into my skill set. I am committed to continual
          learning, innovation, and contributing my expertise to shaping the
          future of technology.
        </p>
        <br></br>
        <p>
          Thank you for visiting my portfolio, and I invite you to explore the
          projects and achievements that embody my journey and passion.
        </p>
      </>
    );
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
      <article className={`${styles.storyDetail} ${fontThird.variable}`}>
        {storyDetail}
      </article>
    </section>
  );
}

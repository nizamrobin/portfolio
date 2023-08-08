"use client";
import styles from "./Nav.module.css";
import Image from "next/image";
import Link from "next/link";
import NavlistItem from "./NavlistItem";
import { useEffect, useState } from "react";
import { fontPrimary, fontSecondary } from "./fonts";

export default function Nav({ classes }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState();

  // nav menu style change based on window width
  useEffect(() => {
    let winWidth = window.innerWidth;
    setWindowWidth(winWidth);
    const resizeHandler = () => {
      winWidth = window.innerWidth;
      setWindowWidth(winWidth);
    };
    window.addEventListener("resize", resizeHandler);
    if (windowWidth >= 768) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }, [windowWidth]);

  // Open and close nav menu
  const handleClick = () => {
    if (window.innerWidth < 768) {
      isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
    }
  };

  return (
    <nav
      className={`${styles.navbar} ${styles[classes]} ${fontSecondary.variable}`}
    >
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
      {!isMenuOpen && (
        <Image
          className={`${styles.logo} ${styles.menuLogo}`}
          src="logo/menu.svg"
          width={500}
          height={500}
          alt="Menu"
          onClick={handleClick}
        />
      )}
      {isMenuOpen && (
        <>
          <Image
            className={`${styles.logo} ${styles.menuLogo}`}
            src="logo/cross.svg"
            width={500}
            height={500}
            alt="Close"
            onClick={handleClick}
          />

          <ul className={styles.navList}>
            <NavlistItem name="Story" link="#story" onClick={handleClick} />
            <NavlistItem
              name="Projects"
              link="#projects"
              onClick={handleClick}
            />
            <NavlistItem name="Skill" link="#skill" onClick={handleClick} />
            <NavlistItem name="Contact" link="#contact" onClick={handleClick} />
          </ul>
        </>
      )}
    </nav>
  );
}

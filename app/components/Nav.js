"use client";
import styles from "./Nav.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
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
      console.log("big");
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
            <li className={styles.navListItem} onClick={handleClick}>
              <a href="#story">Story</a>
            </li>
            <li className={styles.navListItem} onClick={handleClick}>
              <a href="#projects">Projects</a>
            </li>
            <li className={styles.navListItem} onClick={handleClick}>
              <a href="#skill">Skill</a>
            </li>
            <li className={styles.navListItem} onClick={handleClick}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
}

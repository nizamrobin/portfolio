"use client";
import { useEffect, useState } from "react";

export default function Typewriter({ textReceived, delayTime, classes }) {
  const [text, setText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (currentIndex < textReceived.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + textReceived[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delayTime);
      return () => clearTimeout(timeout);
    } else if (currentIndex === textReceived.length) {
      const timeout = setTimeout(() => {
        setText("");
        setCurrentIndex(0);
      }, delayTime * 2);
    }
  }, [currentIndex, delayTime, textReceived]);
  return (
    <h3 className={classes}>
      {text}
      {"|"}
    </h3>
  );
}

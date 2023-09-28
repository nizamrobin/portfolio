import classes from "./Cta.module.css";
import { fontSecondary } from "./fonts";

export default function Cta({ link, caption }) {
  return (
    <a
      type="pdf"
      href={link}
      download="Resume-Nizam Robin"
      className={`${classes.cta} ${fontSecondary.variable}`}
    >
      {caption}
    </a>
  );
}

import classes from "./Cta.module.css";
import { fontSecondary } from "./fonts";

export default function Cta({ link, caption }) {
  return (
    <a
      type="pdf"
      href={link}
      download="Resume_Md_Nizamuddin"
      className={`${classes.cta} ${fontSecondary.variable}`}
    >
      {caption}
    </a>
  );
}

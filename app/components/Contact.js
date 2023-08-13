import ContactItem from "./ContactItem";
import styles from "./Contact.module.css";
import SocialItem from "./SocialItem";
import { fontPrimary, fontSecondary } from "./fonts";
export default function Contact() {
  return (
    <section id="contact" className={styles.contacts}>
      <h3 className={`${styles.contactsTitle} ${fontSecondary.variable}`}>
        Contact me
      </h3>
      <div className={`${styles.contactDetails} ${fontPrimary.variable}`}>
        <div className={styles.contact}>
          <ContactItem
            hLink="mailto:nizamrobin@gmail.com"
            imgLink="logo/email.svg"
            caption="Email address"
            text="nizamrobin@gmail.com"
          />
          <ContactItem
            hLink="tel:8801731900580"
            imgLink="logo/phone.svg"
            caption="Mobile number"
            text="+880 1731 900 580"
          />
        </div>
        <div class="socials">
          <SocialItem
            hLink="https://www.linkedin.com/in/nizamrobin"
            imgLink="logo/linkedin.svg"
            caption="LinkedIn"
          />
          <SocialItem
            hLink="https://codepen.io/nizamrobin"
            imgLink="logo/codepen.svg"
            caption="Codepen"
          />
          <SocialItem
            hLink="https://github.com/nizamrobin"
            imgLink="logo/github.svg"
            caption="Github"
          />
        </div>
      </div>
    </section>
  );
}

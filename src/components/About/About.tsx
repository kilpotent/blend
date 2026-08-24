import styles from "./About.module.css";
import logo from "../../assets/logos/logo-leuko.png";
import kokoi from "../../assets/icons/kokoi.png";

function About() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutHeader}>
          <h1 className={styles.aboutTitle}>Our Story</h1>
          <img src={kokoi} alt="Kokoi icon" className={styles.kokoiIcon} />
        </div>
        <p
          className={styles.aboutText}
        >{`Good coffee. Good energy. Good moments.`}</p>
        <p
          className={styles.aboutText}
        >{`Blend was born from a simple idea: coffee should fit naturally into everyday life.
A place for a quick espresso on the go, a slow morning coffee, or a moment to pause between everything else.
We keep things simple — quality coffee, a relaxed atmosphere, and a little bit of character in every cup.
At Blend, coffee is more than a drink. It’s part of the rhythm of the day.`}</p>
        <p
          className={`${styles.aboutText} ${styles.aboutFooter}`}
        >{`Brewed for your everyday.`}</p>
        <img src={logo} alt="Blend logo" className={styles.aboutLogo} />
      </div>
    </section>
  );
}

export default About;

import styles from "./Hero.module.css";
import heroImage from "../../assets/images/hero-image.jpg";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroWrapper}>
        <img src={heroImage} alt="Hero" className={styles.heroImage} />
      </div>
    </section>
  );
}

export default Hero;

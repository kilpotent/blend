import styles from "./Hero.module.css";
import heroImage from "../../assets/images/hero-image.jpg";
import heroImageMobile from "../../assets/images/hero-image-mobile.jpg";

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroWrapper}>
        <picture>
          <source media="(max-width: 767.98px)" srcSet={heroImageMobile} />
          <img src={heroImage} alt="Hero" className={styles.heroImage} />
        </picture>
      </div>
    </section>
  );
}

export default Hero;

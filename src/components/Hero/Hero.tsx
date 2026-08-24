import styles from "./Hero.module.css";
import heroImage from "../../assets/icons/magazi-grammiko.png";
import heroArrow from "../../assets/icons/velaki.png";
import heroSpot from "../../assets/icons/spot.png";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroWrapper}>
        <img src={heroImage} alt="Hero" className={styles.heroImage} />
      </div>
      <div className={styles.heroIcon}>
        <img src={heroArrow} alt="Hero Arrow" className={styles.heroArrow} />
        <img src={heroSpot} alt="Coffee Spot" className={styles.heroSpot} />
      </div>
    </section>
  );
}

export default Hero;

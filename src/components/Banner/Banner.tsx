import styles from "./Banner.module.css";

function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.overlay}></div>
      <h2 className={styles.bannerText}>
        Coffee tastes better
        <br />
        when we <span className={styles.highlight}>blend</span> together.
      </h2>
    </section>
  );
}

export default Banner;

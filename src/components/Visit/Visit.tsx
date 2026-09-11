import styles from "./Visit.module.css";
import { useInView } from "../../hooks/useInView";

function Visit() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);

  return (
    <section className={styles.visitSection} id="visit">
      <div className={styles.titleWrapper}>
        <h1 className={styles.visitTitle}>VisiT Us</h1>
        <h5 className={styles.visitSubtitle}>
          [Come for the coffee.
          <br /> Stay for the vibe.]
        </h5>
      </div>
      <div className={styles.visitWrapper} ref={ref}>
        <div className={`${styles.mapWrapper} ${inView ? styles.visible : ""}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d776.3997304167225!2d22.440614109909827!3d38.88741724794718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135f5bc0a1743b45%3A0x943c83b8cc8ba0a7!2sBlend%20Street%20Espresso!5e0!3m2!1sen!2sgr!4v1788493193872!5m2!1sen!2sgr"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            className={styles.mapFrame}
          ></iframe>
        </div>
      </div>

      <div className={styles.visitFooter}>
        <div className={styles.footerItem}>
          <i className={`bi bi-geo-alt ${styles.footerIcon}`}></i>
          <span>Ταϋγέτου 6, Λαμία</span>
        </div>

        <div className={styles.footerItem}>
          <i className={`bi bi-clock ${styles.footerIcon}`}></i>
          <span>Mon. - Sat. 05:00-21:00</span>
          <span>Sun. 07:00-21:00</span>
        </div>

        <div className={styles.footerItem}>
          <i className={`bi bi-telephone ${styles.footerIcon}`}></i>
          <span>22310-42200</span>
        </div>
      </div>
    </section>
  );
}

export default Visit;

import styles from "./Visit.module.css";

function Visit() {
  return (
    <section className={styles.visitSection}>
      <div className={styles.mapWrapper}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d976.5575803418192!2d22.439868496557693!3d38.88797777945804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135f5bb3379623cf%3A0xeba32747ecbb24b6!2zzpzPhc-Bz4TOuc6sIFNvdXZsYWtlcmk!5e1!3m2!1sen!2sgr!4v1787495231015!5m2!1sen!2sgr"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Blend location on Google Maps"
          className={styles.mapFrame}
        />
      </div>
    </section>
  );
}

export default Visit;

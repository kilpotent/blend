import styles from "./Footer.module.css";
import mascotIcon from "../../assets/logos/logo-prasino.png";
import blendLogo from "../../assets/logos/logo-blend.png";

function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerWrapper}>
        <div className={styles.logoWrapper}>
          <img
            src={mascotIcon}
            alt="Blend Mascot"
            className={styles.mascotIcon}
          />
          <img src={blendLogo} alt="Blend logo" className={styles.blendLogo} />
        </div>

        <div className={styles.footerTextWrapper}>
          <p className={styles.footerText}>
            <i className={`bi bi-geo-alt ${styles.footerIcon}`}></i> Ταϋγέτου 6,
            Λαμία
            <br />
            <i className={`bi bi-clock ${styles.footerIcon}`}></i> Καθημερινά
            05:00-22:00
          </p>
        </div>

        <a
          href="https://www.instagram.com/blend_street_espresso_?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerInsta}
        >
          <i className="bi bi-instagram"></i> INSTAGRAM
        </a>
      </div>
      <div className={styles.footerDivider} />

      <div className={styles.footerBottom}>
        <p className={styles.footerBottomText}>
          © 2026 Blend Street Espresso. All rights reserved.
        </p>
        <p className={styles.footerBottomText}>
          Made by{" "}
          <a
            href="https://mlydesign.gr"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerCredit}
          >
            mlydesign.gr
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

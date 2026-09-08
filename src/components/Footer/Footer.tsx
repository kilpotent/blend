import styles from "./Footer.module.css";
import mascotIcon from "../../assets/logos/mascot-light.png";
import blendLogo from "../../assets/logos/logo-light.png";

function Footer() {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerWrapper}>
        <div className={styles.logoWrapper}>
          <img src={blendLogo} alt="Blend logo" className={styles.blendLogo} />
        </div>

        <div className={styles.footerTextWrapper}>
          <img
            src={mascotIcon}
            alt="Blend Mascot"
            className={styles.mascotIcon}
          />
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

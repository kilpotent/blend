import mascotIcon from "../../assets/logos/logo-prasino.png";
import blendLogo from "../../assets/logos/logo-blend.png";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className={styles.navContainer}>
        <a href="#home" className={styles.iconLink}>
          <img src={mascotIcon} alt="Blend" className={styles.icon} />
        </a>

        <a href="#home" className={styles.brandLink}>
          <img
            src={blendLogo}
            alt="Blend - Street Espresso"
            className={styles.logo}
          />
        </a>

        <div className={styles.actions}>
          <button
            className={`navbar-toggler ${styles.toggler}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
            aria-controls="navMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>

          <div
            className={`collapse navbar-collapse ${styles.mobileMenu}`}
            id="navMenu"
          >
            <ul className={`navbar-nav ${styles.navList}`}>
              <li className="nav-item">
                <a
                  className={`nav-link ${styles.navLink}`}
                  href="#about"
                  data-bs-toggle="collapse"
                  data-bs-target="#navMenu"
                >
                  Our Story
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${styles.navLink}`}
                  href="#menu"
                  data-bs-toggle="collapse"
                  data-bs-target="#navMenu"
                >
                  Our Menu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${styles.navLink}`}
                  href="#visit"
                  data-bs-toggle="collapse"
                  data-bs-target="#navMenu"
                >
                  Visit Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

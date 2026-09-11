import { useRef } from "react";
import blendLogo from "../../assets/logos/logo-dark.png";
import blendLogoMobile from "../../assets/logos/logo-mobile.png";
import styles from "./Navbar.module.css";

function Navbar() {
  const togglerRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    const btn = togglerRef.current;
    if (btn && btn.getAttribute("aria-expanded") === "true") {
      btn.click();
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
      <div className={styles.navContainer}>
        <div className={styles.brandGroup}>
          {" "}
          <a href="#home" className={styles.iconLink}></a>
          <a href="#home" className={styles.brandLink}>
            <picture>
              <source media="(max-width: 767.98px)" srcSet={blendLogoMobile} />
              <img
                src={blendLogo}
                alt="Blend - Street Espresso"
                className={styles.logo}
              />
            </picture>
          </a>
        </div>

        <div className={styles.actions}>
          <button
            ref={togglerRef}
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
            <ul className={`navbar-nav ${styles.navList} ${styles.mobileMenuInner}`}>
              <li className="nav-item">
                <a
                  className={`nav-link ${styles.navLink}`}
                  href="#about"
                  onClick={closeMenu}
                >
                  Our Story
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${styles.navLink}`}
                  href="#menu"
                  onClick={closeMenu}
                >
                  Our Menu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${styles.navLink}`}
                  href="#visit"
                  onClick={closeMenu}
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

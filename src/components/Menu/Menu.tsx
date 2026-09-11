import styles from "./Menu.module.css";
import foodMenu from "../../assets/images/menu-fagita.png";
import drinkMenu from "../../assets/images/menu-kafedes.png";

function Menu() {
  return (
    <section className={styles.menuSection} id="menu">
      <div className={styles.menuHeader}>
        <h2 className={styles.menuTitle}>Our Menu</h2>
        <h5 className={styles.menuSubtitle}>[Grab. Sip. Go] </h5>
      </div>
      <div className={styles.menuContent}>
        <img
          src={drinkMenu}
          alt="Drink Menu"
          className={`${styles.menuImage} ${styles.drinkMenu}`}
        />
        <img
          src={foodMenu}
          alt="Food Menu"
          className={`${styles.menuImage} ${styles.foodMenu}`}
        />
      </div>
    </section>
  );
}

export default Menu;

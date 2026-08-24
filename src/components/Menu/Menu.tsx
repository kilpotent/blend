import styles from "./Menu.module.css";
import menuFood from "../../assets/images/menu-fagita.png";
import menuDrink from "../../assets/images/menu-kafedes.png";
import underlineIcon from "../../assets/icons/curved-line.png";
import coffee from "../../assets/icons/potiri.png";
import baguette from "../../assets/icons/mpagketa.png";
import cup from "../../assets/icons/koupa.png";
import croissant from "../../assets/icons/krouasan.png";

function Menu() {
  return (
    <div className={styles.menuSection}>
      <img
        src={coffee}
        alt=""
        className={` ${styles.coffee} ${styles.decorIcon}`}
      />
      <img
        src={baguette}
        alt=""
        className={`${styles.baguette} ${styles.decorIcon}`}
      />
      <img src={cup} alt="" className={`${styles.cup} ${styles.decorIcon}`} />
      <img
        src={croissant}
        alt=""
        className={`${styles.croissant} ${styles.decorIcon}`}
      />

      <div className={styles.menuHeader}>
        <h1 className={styles.menuTitle}>QUicK PicKs</h1>
        <img
          src={underlineIcon}
          alt="Underline Icon"
          className={styles.underlineIcon}
        />
      </div>

      <div className={styles.menuItem}>
        <img src={menuDrink} alt="Menu Drink" className={styles.menuImage} />
        <img src={menuFood} alt="Menu Food" className={styles.menuImage} />
      </div>
    </div>
  );
}

export default Menu;

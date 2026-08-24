import styles from "./Gallery.module.css";
import chairs from "../../assets/images/magazi-mesa.jpg";
import cups from "../../assets/images/potiria.jpg";
import counter from "../../assets/images/pagkoi.jpg";

function Gallery() {
  return (
    <section className={styles.gallerySection}>
      <img
        src={chairs}
        alt="Blend interior seating"
        className={styles.galleryImage}
      />
      <img src={cups} alt="Blend coffee cups" className={styles.galleryImage} />
      <img
        src={counter}
        alt="Blend coffee counter"
        className={styles.galleryImage}
      />
    </section>
  );
}

export default Gallery;

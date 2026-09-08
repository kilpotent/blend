import styles from "./Gallery.module.css";
import chairs from "../../assets/images/magazi-mesa.jpg";
import cups from "../../assets/images/potiria.jpg";
import counter from "../../assets/images/pagkoi.jpg";
import coffeeIcon from "../../assets/icons/coffee-icon.png";
import cupIcon from "../../assets/icons/koupa-icon.png";
import Reveal from "../Reveal/Reveal";

function Gallery() {
  const images = [
    { src: chairs, alt: "Blend interior seating" },
    { src: cups, alt: "Blend coffee cups" },
    { src: counter, alt: "Blend coffee counter" },
  ];

  return (
    <section className={styles.gallerySection}>
      <img
        src={coffeeIcon}
        alt="Coffee icon"
        className={`${styles.icon} ${styles.coffeeIcon}`}
      />
      <img
        src={cupIcon}
        alt="Cup icon"
        className={`${styles.icon} ${styles.cupIcon}`}
      />
      {images.map((img, i) => (
        <Reveal key={img.src} direction="up" delay={i * 120}>
          <img src={img.src} alt={img.alt} className={styles.galleryImage} />
        </Reveal>
      ))}
    </section>
  );
}

export default Gallery;

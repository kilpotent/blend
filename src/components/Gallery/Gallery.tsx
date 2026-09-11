import styles from "./Gallery.module.css";
import chairs from "../../assets/images/magazi-mesa.jpg";
import cups from "../../assets/images/potiria.jpg";
import counter from "../../assets/images/pagkoi.jpg";
import coffeeIcon from "../../assets/icons/coffee-icon.png";
import cupIcon from "../../assets/icons/koupa-icon.png";
import Reveal from "../Reveal/Reveal";
import { useInView } from "../../hooks/useInView";

function Gallery() {
  const images = [
    { src: chairs, alt: "Blend interior seating" },
    { src: cups, alt: "Blend coffee cups" },
    { src: counter, alt: "Blend coffee counter" },
  ];

  const { ref: iconRef, inView: iconsInView } = useInView<HTMLImageElement>(0.3);

  return (
    <section className={styles.gallerySection}>
      <img
        ref={iconRef}
        src={coffeeIcon}
        alt="Coffee icon"
        className={`${styles.icon} ${styles.coffeeIcon} ${iconsInView ? styles.iconVisible : ""}`}
      />
      <img
        src={cupIcon}
        alt="Cup icon"
        className={`${styles.icon} ${styles.cupIcon} ${iconsInView ? styles.iconVisible : ""}`}
      />
      {images.map((img, i) => (
        <Reveal key={img.src} direction="up" delay={i * 120} threshold={0.3}>
          <img src={img.src} alt={img.alt} className={styles.galleryImage} />
        </Reveal>
      ))}
    </section>
  );
}

export default Gallery;

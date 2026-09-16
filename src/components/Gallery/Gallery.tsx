import { useEffect, useRef, useState } from "react";
import styles from "./Gallery.module.css";
import coffeeIcon from "../../assets/icons/coffee-icon.png";
import cupIcon from "../../assets/icons/koupa-icon.png";
import Reveal from "../Reveal/Reveal";
import { useInView } from "../../hooks/useInView";

import chairs from "../../assets/gallery-images/blend-chair-image-01.jpg";
import coffeemaking1 from "../../assets/gallery-images/blend-coffeemaking-image-01.jpg";
import coffeemaking2 from "../../assets/gallery-images/blend-coffeemaking-image-02.jpg";
import coffeemaking3 from "../../assets/gallery-images/blend-coffeemaking-image-03.jpg";
import couch1 from "../../assets/gallery-images/blend-couch-image-01.jpg";
import couch2 from "../../assets/gallery-images/blend-couch-image-02.jpg";
import cupsClose from "../../assets/gallery-images/blend-cups-image-01.jpg";
import front from "../../assets/gallery-images/blend-front-image.jpg";
import table from "../../assets/gallery-images/blend-table-image.jpg";
import seating from "../../assets/gallery-images/magazi-mesa.jpg";
import counter from "../../assets/gallery-images/pagkoi.jpg";
import cups from "../../assets/gallery-images/potiria.jpg";

const images = [
  { src: seating, alt: "Blend interior seating" },
  { src: cups, alt: "Blend coffee cups" },
  { src: counter, alt: "Blend coffee counter" },
  { src: chairs, alt: "Blend chairs" },
  { src: coffeemaking1, alt: "Making coffee at Blend" },
  { src: coffeemaking2, alt: "Making coffee at Blend" },
  { src: coffeemaking3, alt: "Making coffee at Blend" },
  { src: couch1, alt: "Blend couch seating" },
  { src: couch2, alt: "Blend couch seating" },
  { src: cupsClose, alt: "Blend coffee cups close-up" },
  { src: front, alt: "Blend storefront" },
  { src: table, alt: "Blend table" },
];

const PAGE_SIZE = 3;
const PAGE_COUNT = images.length / PAGE_SIZE;

function getPage(page: number) {
  const p = ((page % PAGE_COUNT) + PAGE_COUNT) % PAGE_COUNT;
  return images.slice(p * PAGE_SIZE, p * PAGE_SIZE + PAGE_SIZE);
}

type Phase = "idle" | "next" | "prev";
const TRACK_POSITION: Record<Phase, number> = { prev: 0, idle: 1, next: 2 };
const TRANSITION_MS = 600; // πρέπει να ταιριάζει με το transition: transform 0.6s στο .track

function GalleryCarousel() {
  const [page, setPage] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [noTransition, setNoTransition] = useState(false);
  const [iconsSwapped, setIconsSwapped] = useState(false);
  const advanceTimeout = useRef<number | null>(null);
  // gates clicks; stays locked slightly longer than `phase` does, so a click
  // can never land in the no-transition snap-back window (see advance())
  const locked = useRef(false);

  useEffect(() => {
    return () => {
      if (advanceTimeout.current !== null) {
        window.clearTimeout(advanceTimeout.current);
      }
    };
  }, []);

  const pages = [getPage(page - 1), getPage(page), getPage(page + 1)];
  const offsetPercent = TRACK_POSITION[phase] * (100 / 3);

  const advance = (direction: "next" | "prev") => {
    if (locked.current) return;
    locked.current = true;
    setPhase(direction);
    setIconsSwapped((s) => !s);

    // driven by a timer (not onTransitionEnd) so a click landing in the
    // brief no-transition snap-back window can't leave anything stuck
    advanceTimeout.current = window.setTimeout(() => {
      // `page` and `phase` must land in the SAME batch: `pages` is derived
      // from `page` and the visible slide from `phase`, so if they update on
      // separate renders the wrong slide flashes for a frame or two.
      setPage((p) =>
        direction === "next" ? (p + 1) % PAGE_COUNT : (p - 1 + PAGE_COUNT) % PAGE_COUNT,
      );
      setNoTransition(true);
      setPhase("idle");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setNoTransition(false);
          locked.current = false; // only unblock clicks once transitions are genuinely back on
        });
      });
    }, TRANSITION_MS);
  };

  const goNext = () => advance("next");
  const goPrev = () => advance("prev");

  const { ref: iconRef, inView: iconsInView } =
    useInView<HTMLImageElement>(0.3);

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel}>
        <img
          ref={iconRef}
          src={coffeeIcon}
          alt="Coffee icon"
          className={`${styles.icon} ${styles.coffeeIcon} ${iconsInView ? styles.iconVisible : ""} ${iconsSwapped ? styles.swapped : ""}`}
        />
        <img
          src={cupIcon}
          alt="Cup icon"
          className={`${styles.icon} ${styles.cupIcon} ${iconsInView ? styles.iconVisible : ""} ${iconsSwapped ? styles.swapped : ""}`}
        />
        <div className={styles.carouselViewport}>
          <div
            className={`${styles.track} ${noTransition ? styles.noTransition : ""}`}
            style={{ transform: `translateX(-${offsetPercent}%)` }}
          >
            {pages.map((group, i) => (
              <div className={styles.pageSlide} key={i}>
                {group.map((img) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    className={styles.galleryImage}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.carouselControls}>
        <button
          type="button"
          className={styles.carouselButton}
          onClick={goPrev}
          aria-label="Previous photos"
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <button
          type="button"
          className={styles.carouselButton}
          onClick={goNext}
          aria-label="Next photos"
        >
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

function MobileGalleryGrid() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className={styles.mobileGrid}>
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            className={`${styles.mobileGridItem} ${
              (i + 1) % 3 === 0 ? styles.mobileGridItemWide : styles.mobileGridItemNarrow
            }`}
            onClick={() => setLightboxIndex(i)}
          >
            <img src={img.src} alt={img.alt} />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className={styles.lightbox}
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={images[lightboxIndex].alt}
        >
          <button
            type="button"
            className={styles.lightboxClose}
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
          >
            <i className="bi bi-x-lg"></i>
          </button>
          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            className={styles.lightboxImage}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

function Gallery() {
  return (
    <section className={styles.gallerySection}>
      <Reveal direction="up" threshold={0.3}>
        <GalleryCarousel />
      </Reveal>
      <MobileGalleryGrid />
    </section>
  );
}

export default Gallery;

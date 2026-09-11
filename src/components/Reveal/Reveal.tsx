import type { ReactNode } from "react";
import { useInView } from "../../hooks/useInView";
import styles from "./Reveal.module.css";

type RevealProps = {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  threshold?: number;
};

function Reveal({
  children,
  direction = "up",
  delay = 0,
  threshold = 0.2,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>(threshold);

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${styles[direction]} ${
        inView ? styles.visible : ""
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default Reveal;

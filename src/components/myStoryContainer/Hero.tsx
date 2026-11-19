import styles from "./myStory.module.css";

export function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroImage} role="img" aria-label="Portrait of Johnny Medhane" />

      <div className={styles.heroOverlay} />

      <div className={styles.heroContent}>
        {/* <h1 className={styles.heroTitle}>Johnny Medhane</h1> */}
        <p className={styles.heroTagline}>I&apos;m Johnny. And this is my story.</p>
      </div>
    </div>
  );
}

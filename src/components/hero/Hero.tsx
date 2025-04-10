import React from "react";
import styles from "./Hero.module.css";
import backgroundImage from "../../assets/background.png";
import dashboardImage from "../../assets/dashboard.png";

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundContainer}>
        <img
          src={backgroundImage}
          alt='Abstract background'
          className={styles.backgroundImage}
          aria-hidden='true'
        />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Simplifica la gestió <br />
            de les teves fires
          </h1>
          <p className={styles.subtitle}>
            Troba, inscriu-te i fes seguiment de totes les convocatòries en una sola plataforma
          </p>
          <button className={styles.ctaButton}>Vull saber-ne més</button>
        </div>
        <div className={styles.imageContainer}>
          {/* Placeholder for the complex image group from Figma */}
          {/* The actual implementation might involve absolute positioning */}
          {/* and multiple layers as seen in the Figma structure (430:5550) */}
          <img
            src={dashboardImage}
            alt='Firal Dashboard Preview'
            className={styles.dashboardImage}
          />
        </div>
      </div>
    </section>
  );
};

import React from "react";
import styles from "./FeaturesSection.module.css";
import featureFires1 from "../../assets/feature-fires-1.png";
import featureFires2 from "../../assets/feature-fires-2.png";
import featureSolicituds1 from "../../assets/feature-solicituds-1.png";

// Based on Figma Group 2818 (430:5615)

export const FeaturesSection: React.FC = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>Mai havia estat tant fàcil</h2>

        <div className={styles.featureContent}>
          <div className={styles.textBlock}>
            <h3 className={styles.featureTitle}>Controla les teves sol·licituds</h3>
            <p className={styles.featureDescription}>Filtra per multiples possibilitats</p>
            <p className={styles.featureDescription}>Fires amb tota la informació</p>
          </div>

          <div className={styles.imagesBlock}>
            {/* Replicating the exact overlap and positioning from Figma */}
            {/* might require more complex CSS (absolute positioning, transforms) */}
            {/* This is a simplified layout */}
            <img
              src={featureFires1}
              alt='Feature Fires 1'
              className={`${styles.featureImage} ${styles.image1}`}
            />
            <img
              src={featureFires2}
              alt='Feature Fires 2'
              className={`${styles.featureImage} ${styles.image2}`}
            />
            <img
              src={featureSolicituds1}
              alt='Feature Solicituds 1'
              className={`${styles.featureImage} ${styles.image3}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

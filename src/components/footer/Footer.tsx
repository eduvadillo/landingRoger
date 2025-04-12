import React from "react";
import styles from "./Footer.module.css";
import fira from "../../assets/logo.png";

// Based on Figma Group 2832 (430:5645) and Line 76 (430:5658)

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <img src={fira} alt='Firal Logo' className={styles.logo} />
          <div className={styles.social}>
            {/* The Figma data shows text "Instagram" (430:5647) */}
            {/* If an icon is preferred, it needs to be added/downloaded */}
            <a
              href='#' /* Replace with actual Instagram link */
              className={styles.socialLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              Instagram
            </a>
            <span className={styles.separation}>|</span>
            <p className={styles.copyright}>Firal 2025 ©</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

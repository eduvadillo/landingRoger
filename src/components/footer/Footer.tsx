import React from "react";
import styles from "./Footer.module.css";
import logoFooter from "../../assets/logo-footer.svg";

// Based on Figma Group 2832 (430:5645) and Line 76 (430:5658)

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <hr className={styles.divider} />
        <div className={styles.content}>
          <img src={logoFooter} alt='Firal Logo' className={styles.logo} />
          <p className={styles.copyright}>Firal 2025 ©</p>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

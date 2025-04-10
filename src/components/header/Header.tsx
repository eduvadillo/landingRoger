import React from "react";
import styles from "./Header.module.css";
import logoHeader from "../../assets/logo-header.svg";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={logoHeader} alt='Firal Logo' className={styles.logo} />
        <nav>
          <a href='#' className={styles.loginLink}>
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

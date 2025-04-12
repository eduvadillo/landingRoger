import React from "react";
import styles from "./Header.module.css";
import fira from "../../assets/logo.png";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={fira} alt='Firal Logo' className={styles.logo} />
        {/* <nav>
          <button className={styles.loginLink}>Login</button>
        </nav> */}
      </div>
    </header>
  );
};

import React, { useState } from "react";
import styles from "./WaitlistForm.module.css";
import arrowDownIcon from "../../assets/icon-arrow-down.svg";

// Based on Figma Group 2827 (430:5627)

const stallTypes = ["Alimentació", "Artesania", "Roba i complements", "Llibres i música", "Altres"];

export const WaitlistForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [stallType, setStallType] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO: Implement actual form submission logic (e.g., API call)
    console.log("Form submitted:", { name, email, stallType, privacyAccepted });
    // Reset form or show success message
    setName("");
    setEmail("");
    setStallType("");
    setPrivacyAccepted(false);
    alert("Gràcies per apuntar-te!"); // Simple feedback
  };

  return (
    <section className={styles.waitlistSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Uneix-te a la llista d'espera</h2>
          <p className={styles.subtitle}>Vols provar firal.app abans que ningú?</p>
          <p className={styles.description}>
            {`Apunta't a la llista i sigues el primer en saber quan firal.app estigui disponible.
            Tindràs accés prioritari a la versió beta i l'oportunitat de provar l'eina abans del llançament oficial.
            A més, podràs fer-nos arribar els teus comentaris i ajudar-nos a construir una plataforma realment útil per a paradistes com tu.
            Ens ajudes?`}
          </p>
        </div>
      </div>
    </section>
  );
};

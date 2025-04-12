import React from "react";
import styles from "./App.module.css";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { ChallengesSolutions } from "./components/challenges-solutions/ChallengesSolutions";
import { FeaturesSection } from "./components/features-section/FeaturesSection";
import { WaitlistForm } from "./components/waitlist-form/WaitlistForm";
import { Footer } from "./components/footer/Footer";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <Hero />
        <ChallengesSolutions />
        <FeaturesSection />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;

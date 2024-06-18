import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroTitle}>
        <h1 className={styles.heroHeading}>Experience the simplicity of studying online with <span>Abhi Trainings</span></h1>
        <p className={styles.heroSubheading}>Abhi Trainings is an interesting platform that will teach you in a more interactive way</p>
        <button className={styles.heroButton}>Join for free</button>
      </div>
      <div className={styles.heroImageContainer}>
        <img 
          src="./hero-image.png" 
          alt="Hero" 
          className={styles.heroImage}
        />
      </div>
      
    </div>
  );
};

export default Hero;

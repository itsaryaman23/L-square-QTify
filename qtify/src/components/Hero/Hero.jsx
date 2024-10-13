import React from 'react';
import styles from './Hero.module.css';
import HeroImg from '../../assets/hero.svg'

const Hero = () => {
  return (
    <>
    <div className={styles.hero}>
      <div className={styles.text}>
        <p>100 Thousand Songs, ad-free</p>
        <p>Over thousands podcast episodes</p>
      </div>
      <img src={HeroImg} width="212" heigth="212"/>
    </div>
    </>
  );
}

export default Hero;
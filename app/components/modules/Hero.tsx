import React from 'react';

import Image from 'next/image';

import Button from '@element/Button';

import ArrowImg from '../../../public/arrow.svg';
import AboutMeImg from '../../../public/me-3.png';
import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <span>Hey there!</span>
        <h1>
          I am Hassan <br />
        </h1>
        <p>
          I am an expert frontend engineer <br />
          with 6+ years of experience in building responsive <br />
          and scalable web applications using Angular and React.
        </p>
        <Button link='/#footer'>
          <div>{`Let's Talk`}</div>
          <div className={styles.icon}>
            <Image src={ArrowImg} alt='arrow' />
          </div>
        </Button>
      </div>
      <div className={styles.image}>
        <Image src={AboutMeImg} alt='hero image' />
      </div>
    </div>
  );
};

export default Hero;

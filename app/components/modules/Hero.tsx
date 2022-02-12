import React from 'react'

import Image from 'next/image'

import Button from '@element/Button'

import ArrowImg from '../../../public/arrow.svg'
import HeroImg from '../../../public/hero-img.svg'
import styles from './Hero.module.scss'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <span>Hey there!</span>
        <h1>
          Let’s Create <br />
          an Awesome Website <br />
          For Your Business
        </h1>
        <p>
          My name is Hassan. I am a web designer and developer. <br />
          I design and develop fast and pleasing websites to get <br />
          the most out of your business.
        </p>
        <Button link="/contact">
          <div>{`Let's Talk`}</div>
          <div className={styles.icon}>
            <Image src={ArrowImg} alt="arrow" />
          </div>
        </Button>
      </div>
      <div className={styles.image}>
        <Image src={HeroImg} alt="hero image" />
      </div>
    </div>
  )
}

export default Hero

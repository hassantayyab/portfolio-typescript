import Image from 'next/image'

import Button from '@element/Button'

import AboutMeImg from '../../../public/about-me.svg'
import styles from './AboutMe.module.scss'

const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.content}>
        <h3>About Me</h3>
        <p>
          <span>
            My name is Hassan Tayyab. I am a web designer and developer with a
            deep passion for this craft. I love to solve business problems and
            help them achieve their goals.
          </span>
          <span>
            My name is Hassan Tayyab. I am a web designer and developer with a
            deep passion for this craft. I love to solve business problems and
            help them achieve their goals.
          </span>
        </p>

        <div className={styles.button}>
          <Button link="/about">Learn More</Button>
        </div>
      </div>
      <div className={styles.image}>
        <Image src={AboutMeImg} alt="About Me" />
      </div>
    </section>
  )
}

export default AboutMe

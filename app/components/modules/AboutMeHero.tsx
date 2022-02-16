import Image from 'next/image'

import MeImg from '../../../public/me.svg'
import styles from './AboutMeHero.module.scss'

const AboutMeHero = () => {
  return (
    <section className={styles.aboutMeHero}>
      <div className={styles.content}>
        <h2>
          Hi! My name Hassan.
          <br />
          I&apos;m a web designer & developer.
        </h2>
        <p>
          <span>
            My name is Hassan Tayyab. I am a web designer and developer with a
            deep passion for this craft. I love to solve businsess problems and
            help them achieve their goals.
          </span>
          <span>
            My name is Hassan Tayyab. I am a web designer and developer with a
            deep passion for this craft. I love to solve businsess problems and
            help them achieve their goals.
          </span>
        </p>

        <a
          href="https://drive.google.com/file/d/128LEyQP1MX-okA8q1GRHT96i37vQYjXV/view?usp=sharing"
          target="_blank"
          rel="noreferrer">
          Download CV
        </a>
      </div>
      <div className={styles.image}>
        <Image src={MeImg} alt="About Me" />
      </div>
    </section>
  )
}

export default AboutMeHero

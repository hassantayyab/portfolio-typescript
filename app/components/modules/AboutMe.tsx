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
            I am passionate about my caft with the mission to create fast and
            great looking websites for business in order to boost their sales,
            as well as leaving a pleasant and satisfying experience for their
            users.
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

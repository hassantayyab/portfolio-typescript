import Image from 'next/image'

import { resumeLink } from '@constant/resume-link'

import ArrowImg from '../../../public/arrow.svg'
import MeImg from '../../../public/me.svg'
import styles from './AboutMeHero.module.scss'

const AboutMeHero = () => {
  return (
    <section className={styles.aboutMeHero}>
      <div className={styles.content}>
        <h2>
          {`Hi! I'm Hassan.`}
          <br />
          I&apos;m a web designer & developer.
        </h2>
        <p>
          <span>
            I am passionate about my caft with the mission to create fast and
            great looking websites for business in order to boost their sales,
            as well as leaving a pleasant and satisfying experience for their
            users.
          </span>
          <span>
            I love to use best and modern industry tools and methodologies to
            deliver up to date work with no compromise on the quality of work
            and satisfaction of the client.
          </span>
        </p>

        <a href={resumeLink} target="_blank" rel="noreferrer">
          View CV{' '}
          <div className={styles.icon}>
            <Image src={ArrowImg} alt="arrow" />
          </div>
        </a>
      </div>
      <div className={styles.image}>
        <Image src={MeImg} alt="About Me" priority />
      </div>
    </section>
  )
}

export default AboutMeHero

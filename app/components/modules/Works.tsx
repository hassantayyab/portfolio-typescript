import Image from 'next/image'

import { WORKS } from '@constant/works'
import WorkCard from '@element/WorkCard'

import 'swiper/css'
import 'swiper/css/free-mode'

import SlideArrowImg from '../../../public/slide-arrow.svg'
import styles from './Works.module.scss'

const Works = () => {
  const works = WORKS

  return (
    <section>
      <div className={styles.heading}>
        <div>
          <h3>Works</h3>
          <p>We love to show some of our best work</p>
        </div>

        <div className={styles.actions}>
          <button type="button">
            <div className={styles.image}>
              <Image
                width="24"
                height="24"
                src={SlideArrowImg}
                alt="click to slide"
              />
            </div>
          </button>
          <button type="button">
            <div className={styles.image}>
              <Image
                width="24"
                height="24"
                src={SlideArrowImg}
                alt="click to slide"
              />
            </div>
          </button>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.wrapper}>
          {works.map((work, i) => (
            <WorkCard key={i} {...work} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works

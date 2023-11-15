import Image from 'next/image'
import { Swiper as ISwiper } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SWIPER_OPTIONS } from '@constant/swiper-options'
import { WORKS } from '@constant/works'
import WorkCard from '@element/WorkCard'

import 'swiper/css'

import SlideArrowImg from '../../../public/slide-arrow.svg'
import styles from './Works.module.scss'

const Works = () => {
  let swiper: ISwiper
  const swiperOptions = SWIPER_OPTIONS
  const works = WORKS

  return (
    <section>
      <div className={styles.heading}>
        <div>
          <h3>Works</h3>
          <p>We love to show some of our best work</p>
        </div>

        <div className={styles.actions}>
          <button type="button" onClick={() => swiper.slidePrev()}>
            <div className={styles.image}>
              <Image
                width="24"
                height="24"
                src={SlideArrowImg}
                alt="click to slide"
              />
            </div>
          </button>
          <button type="button" onClick={() => swiper.slideNext()}>
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

      <Swiper
        {...swiperOptions}
        onSwiper={s => {
          swiper = s
        }}>
        {works.map((work, i) => (
          <SwiperSlide key={i}>
            <WorkCard {...work} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Works

import Image from 'next/image'

import ArrowImg from '../../../public/arrow-down.svg'
import styles from './ScrollButton.module.scss'

const ScrollButton = () => {
  return (
    <button type="button" className={styles.button}>
      <small>scroll to explore</small>
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={ArrowImg}
          alt="click to scroll"
          layout="responsive"
        />
      </div>
    </button>
  )
}

export default ScrollButton

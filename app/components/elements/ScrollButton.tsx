import Image from 'next/image'
import Link from 'next/link'

import ArrowImg from '../../../public/arrow-down.svg'
import styles from './ScrollButton.module.scss'

const ScrollButton = () => {
  return (
    <Link href="/#services" passHref>
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
    </Link>
  )
}

export default ScrollButton

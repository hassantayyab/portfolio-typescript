import { RefObject } from 'react'

import Image from 'next/image'

import ArrowImg from '../../../public/arrow-down.svg'
import styles from './ScrollButton.module.scss'

interface Props {
  focusElement: RefObject<null | HTMLDivElement>
}

const ScrollButton = ({ focusElement }: Props) => {
  const scroll = () => {
    if (!focusElement.current) throw Error('focusElement is not assigned')
    focusElement.current.scrollIntoView()
  }

  return (
    <button type="button" className={styles.button} onClick={scroll}>
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

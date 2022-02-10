import Image from 'next/image'

import { ChildrenProp } from 'types'

import styles from './ServiceCard.module.scss'

interface Props extends ChildrenProp {
  image: string
  imageAlt: string
  title: string
  tools?: string[]
}

const ServiceCard = ({ title, image, imageAlt, children }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Image src={image} width={100} height={100} alt={imageAlt} />
      </div>
      <h5>{title}</h5>
      <p>{children}</p>
    </div>
  )
}

export default ServiceCard

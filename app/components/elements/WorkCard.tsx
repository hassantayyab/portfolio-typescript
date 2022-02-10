import Image from 'next/image'

import { ChildrenProp } from 'types'

import ArrowSmallImg from '../../../public/arrow-small.svg'
import Badge from './Badge'
import styles from './WorkCard.module.scss'

interface Props extends ChildrenProp {
  image: string
  imageAlt: string
  title: string
  technologies?: string[]
}

const WorkCard = ({
  title,
  technologies,
  image,
  imageAlt,
  children,
}: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image className={styles.image} src={image} alt={imageAlt} />
      </div>
      <div className={styles.content}>
        <h5>{title}</h5>
        <p>{children}</p>
        <div className={styles.items}>
          {technologies &&
            technologies.map((tech, i) => <Badge key={i}>{tech}</Badge>)}
        </div>
        <button type="button">
          <span>View Project</span>
          <Image
            src={ArrowSmallImg}
            alt="Click to view project"
            width={12}
            height={12}
          />
        </button>
      </div>
    </div>
  )
}

export default WorkCard

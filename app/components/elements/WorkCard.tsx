import Image from 'next/image'
import { useRouter } from 'next/router'

import { IWork } from 'types'

import ArrowSmallImg from '../../../public/arrow-small.svg'
import Badge from './Badge'
import styles from './WorkCard.module.scss'

interface Props extends Omit<IWork, 'client'> {}

const WorkCard = ({
  id,
  title,
  description,
  technologies,
  image,
  imageAlt,
}: Props) => {
  const router = useRouter()

  return (
    <div className={styles.card} onClick={() => router.push(`works/${id}`)}>
      <div className={styles.imageWrapper}>
        <Image className={styles.image} src={image} alt={imageAlt} />
      </div>
      <div className={styles.content}>
        <h5>{title}</h5>
        <p>{description}</p>
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

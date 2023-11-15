import { IExperience } from 'types'

import Badge from './Badge'
import styles from './ExperienceCard.module.scss'

interface Props extends IExperience {}

const ExperienceCard = ({
  company,
  years,
  location,
  designation,
  description,
  technologies,
}: Props) => (
  <div className={styles.card}>
    <div className={styles.header}>
      <div>
        <h5>{company}</h5>
        <span>({location})</span>
      </div>
      <span>{years}</span>
    </div>
    <h6>{designation}</h6>
    <p>{description}</p>
    <div className={styles.items}>
      {technologies.map((tech, i) => (
        <Badge key={i}>{tech}</Badge>
      ))}
    </div>
  </div>
)

export default ExperienceCard

import ExperienceCard from '@element/ExperienceCard'
import { IExperience } from 'types'

import styles from './Experience.module.scss'

const Experience = () => {
  const experiences: IExperience[] = [
    {
      company: 'Remberg GmbH',
      years: '2022 - Present',
      designation: 'Software Engineer',
      description:
        'EXTEDO is a software company responsible for software solutions for pharmaceutical agencies. Worked as a Software engineer for the eSUBmanager web application.',
      technologies: [
        'Angular',
        'Typescript',
        'Nestjs',
        'Nodejs',
        'NoSql',
        'MongoDB',
      ],
    },
    {
      company: 'EXTEDO GmbH',
      years: '2020 - 2022',
      designation: 'Software Engineer',
      description:
        'EXTEDO is a software company responsible for software solutions for pharmaceutical agencies. Worked as a Software engineer for the eSUBmanager web application.',
      technologies: ['Angular', 'Typescript', 'Jasmine', 'NgRx'],
    },
    {
      company: 'DevStudio',
      years: '2018 - 2020',
      designation: 'MEAN Stack Developer',
      description:
        'EXTEDO is a software company responsible for software solutions for pharmaceutical agencies. Worked as a Software engineer for the eSUBmanager web application.',
      technologies: ['Angular', 'Typescript', 'Ionic'],
    },
  ]

  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>Experience</h3>

      <div className={styles.content}>
        {experiences.map((experience, i) => (
          <div className={styles.experience} key={i}>
            <ExperienceCard {...experience} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

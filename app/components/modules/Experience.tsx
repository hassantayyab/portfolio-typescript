import ExperienceCard from '@element/ExperienceCard'
import { IExperience } from 'types'

import styles from './Experience.module.scss'

const Experience = () => {
  const experiences: IExperience[] = [
    {
      company: 'remberg GmbH',
      years: '2022 - Present',
      location: 'München, Germany',
      designation: 'Software Engineer',
      description:
        'I served as a full-stack developer, focusing on high-quality code for both frontend and backend, accompanied by thorough e2e, unit, and API testing. Additionally, I handled mobile development using Ionic and our own libraries like a PDF rendering one, involving JavaScript coding with Handlebars templating. Alongside coding responsibilities, I actively participated in code reviews, technical planning, grooming sessions, and regular reviews.',
      technologies: [
        'Angular',
        'Typescript',
        'NestJS',
        'Node.js',
        'Ionic',
        'MongoDB',
        'Cypress',
        'Jest',
        'Jasmine',
      ],
    },
    {
      company: 'EXTEDO GmbH',
      years: '2020 - 2022',
      location: 'Ottobrunn, Germany',
      designation: 'Software Engineer',
      description:
        'I served as a frontend developer for the application, where my responsibilities encompassed UI and feature development, along with the implementation of unit tests.',
      technologies: ['Angular', 'Typescript', 'Jasmine', 'NgRx'],
    },
    {
      company: 'DevStudio',
      years: '2018 - 2020',
      location: 'Lahore, Germany',
      designation: 'MEAN Stack Developer',
      description:
        'Courier/package delivery service. I was responsible for complete frontend development of 4 portals: Sender, Traveller, Enterprise and Admin Portals.',
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

import Image from 'next/image'

import WorkCard from '@element/WorkCard'

import 'swiper/css'
import 'swiper/css/free-mode'
import ProjectAngelImg from '../../../public/project-angel.svg'
import ProjectOPVImg from '../../../public/project-opv.svg'
import ProjectRJImg from '../../../public/project-rj.svg'
import SlideArrowImg from '../../../public/slide-arrow.svg'
import styles from './Works.module.scss'

interface Work {
  image: string
  imageAlt: string
  title: string
  description: string
  technologies: string[]
}

const Works = () => {
  const works: Work[] = [
    {
      image: ProjectRJImg,
      imageAlt: 'Rosen Justice Website',
      title: 'Rosen Justice',
      description:
        'A marketing website for injury lawyers. It uses Jamstack for the development.',
      technologies: ['Jamstack', 'React', 'Wordpress CMS', 'Gatsby', 'GraphQL'],
    },
    {
      image: ProjectOPVImg,
      imageAlt: 'Open Process Ventures',
      title: 'Open Process Ventures',
      description: 'Complete website development using Next.js',
      technologies: ['Next.js', 'React'],
    },
    {
      image: ProjectAngelImg,
      imageAlt: 'Angel',
      title: 'Angel',
      description:
        'A marketing and blog website development. It uses Jamstack for the development',
      technologies: ['Jamstack', 'React', 'Wordpress CMS', 'Gatsby', 'GraphQL'],
    },
    {
      image: ProjectRJImg,
      imageAlt: 'Rosen Justice Website',
      title: 'Rosen Justice',
      description:
        'A marketing website for injury lawyers. It uses Jamstack for the development.',
      technologies: ['Jamstack', 'React', 'Wordpress CMS', 'Gatsby', 'GraphQL'],
    },
  ]

  return (
    <section>
      <div className={styles.heading}>
        <div>
          <h3>Works</h3>
          <p>We love to show some of our best work</p>
        </div>

        <div className={styles.actions}>
          <button type="button">
            <div className={styles.image}>
              <Image
                width="24"
                height="24"
                src={SlideArrowImg}
                alt="click to slide"
              />
            </div>
          </button>
          <button type="button">
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

      <div className={styles.content}>
        <div className={styles.wrapper}>
          {works.map(
            ({ title, image, imageAlt, description, technologies }, i) => (
              <WorkCard
                key={i}
                title={title}
                technologies={technologies}
                image={image}
                imageAlt={imageAlt}>
                {description}
              </WorkCard>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default Works

import ProjectAngelImg from '../../public/project-angel.svg'
import ProjectOPVImg from '../../public/project-opv.svg'
import ProjectRJImg from '../../public/project-rj.svg'

interface Work {
  image: string
  imageAlt: string
  title: string
  description: string
  technologies: string[]
}

export const WORKS: Work[] = [
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

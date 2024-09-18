import { IWork } from 'types'

import ProjectAngelImg from '../../public/project-angel.svg'
import ProjectOPVImg from '../../public/project-opv.svg'
import ProjectRJImg from '../../public/project-rj.svg'

export const WORKS: IWork[] = [
  {
    id: 'rosen-justice',
    image: ProjectRJImg,
    imageAlt: 'Rosen Justice Website',
    title: 'Rosen Justice',
    websiteLink: 'https://rosenjustice.com/',
    description:
      'A marketing website for injury lawyers. It uses Jamstack for the development. A marketing website for injury lawyers. It uses Jamstack for the development. A marketing website for injury lawyers. It uses Jamstack for the development. A marketing website for injury lawyers. It uses Jamstack for the development.',
    client: 'RaufTech',
    role: 'Complete Website Development',
    technologies: ['Jamstack', 'React', 'Wordpress CMS', 'Gatsby', 'GraphQL'],
  },
  {
    id: 'open-process-ventures',
    image: ProjectOPVImg,
    imageAlt: 'Open Process Ventures',
    title: 'Open Process Ventures',
    websiteLink: 'https://www.openprocessventures.com/',
    description: 'Complete website development using Next.js',
    client: 'RaufTech',
    role: 'Complete Website Development',
    technologies: ['Next.js', 'React'],
  },
  {
    id: 'angel',
    image: ProjectAngelImg,
    imageAlt: 'Angel',
    title: 'Angel',
    websiteLink: 'https://www.angelhvac.com/',
    description: 'A marketing and blog website development. It uses Jamstack for the development',
    client: 'RaufTech',
    role: 'Complete Website Development',
    technologies: ['Jamstack', 'React', 'Wordpress CMS', 'Gatsby', 'GraphQL'],
  },
  {
    id: 'fahrenheit',
    image: ProjectRJImg,
    imageAlt: 'Fahrenheit Website',
    title: 'Fahrenheit',
    websiteLink: 'https://www.fahrenheithvac.com/',
    description: 'A marketing website for injury lawyers. It uses Jamstack for the development.',
    client: 'RaufTech',
    role: 'Complete Website Development',
    technologies: ['Jamstack', 'React', 'Wordpress CMS', 'Gatsby', 'GraphQL'],
  },
];

import DribbbleImg from '../../public/dribbble.svg'
import GitHubImg from '../../public/github.svg'
import InstagramImg from '../../public/instagram.svg'
import LinkedInImg from '../../public/linkedin.svg'
import TwitterImg from '../../public/twitter.svg'

export interface Socials {
  image: string
  title: string
  link: string
}

export const SOCIALS: Socials[] = [
  {
    image: InstagramImg,
    title: 'Instagram',
    link: 'https://www.instagram.com/hassan.t.dogar/',
  },
  {
    image: GitHubImg,
    title: 'GitHub',
    link: 'https://github.com/hassantayyab',
  },
  {
    image: TwitterImg,
    title: 'Twitter',
    link: 'https://twitter.com/htdogar',
  },
  {
    image: DribbbleImg,
    title: 'Dribbble',
    link: 'https://dribbble.com/hassantayyab',
  },
  {
    image: LinkedInImg,
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/hassan-tayyab-91b2a8157/',
  },
]

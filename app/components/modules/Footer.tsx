import Image from 'next/image'

import { ROUTES } from '@constant/routes'
import Menu from '@element/Menu'

import DribbbleImg from '../../../public/dribbble.svg'
import EmailImg from '../../../public/email.svg'
import GitHubImg from '../../../public/github.svg'
import InstagramImg from '../../../public/instagram.svg'
import LinkedInImg from '../../../public/linkedin.svg'
import TwitterImg from '../../../public/twitter.svg'
import WhatsappImg from '../../../public/whatsapp.svg'
import styles from './Footer.module.scss'

interface Socials {
  image: string
  title: string
  link: string
}

const Footer = () => {
  const routes = ROUTES
  const socials: Socials[] = [
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

  return (
    <section className={styles.footer}>
      <h3>Are You Ready to Take the First Step?</h3>

      <section className={styles.content}>
        <div>
          <h6>Contact Options</h6>
          <div className={styles.options}>
            <a
              href="mailto:hassandogar9@gmail.com"
              target="_blank"
              rel="noreferrer">
              <span className={styles.image}>
                <Image
                  src={EmailImg}
                  alt="click to email"
                  width={24}
                  height={24}
                />
              </span>
              <span>hassandogar9@gmail.com</span>
            </a>
            <a href="tel:+4915226129682">
              <span className={styles.image}>
                <Image
                  src={WhatsappImg}
                  alt="click to whatsapp"
                  width={24}
                  height={24}
                />
              </span>
              <span>{`Let's Whatsapp`}</span>
            </a>
          </div>
        </div>

        <div>
          <h6>Explore More</h6>
          <div className={styles.socials}>
            {socials.map((social, i) => (
              <a key={i} href={social.link} target="_blank" rel="noreferrer">
                <Image
                  src={social.image}
                  alt="Click to go to page"
                  width={28}
                  height={28}
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.foot}>
        <p>&copy; Copyright {new Date().getFullYear()}. All rights reserved.</p>
        <Menu menus={routes} />
      </section>
    </section>
  )
}

export default Footer

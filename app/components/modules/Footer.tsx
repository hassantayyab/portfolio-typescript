import Image from 'next/image'

import { ROUTES } from '@constant/routes'
import { SOCIALS } from '@constant/socials'
import Menu from '@element/Menu'

import EmailImg from '../../../public/email.svg'
import WhatsappImg from '../../../public/whatsapp.svg'
import styles from './Footer.module.scss'

const Footer = () => {
  const routes = ROUTES
  const socials = SOCIALS

  return (
    <section className={styles.footer}>
      <h3>Are you ready to take the first step?</h3>

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
            <a href="https://wa.me/+4915226129682">
              <span className={styles.image}>
                <Image
                  src={WhatsappImg}
                  alt="click to whatsapp"
                  width={24}
                  height={24}
                />
              </span>
              <span>+49 1522 6129682</span>
            </a>
          </div>
        </div>

        <div>
          <h6>Explore More</h6>
          <div className={styles.socials}>
            {socials.map((social, i) => (
              <a key={i} href={social.link} target="_blank" rel="noreferrer">
                <Image src={social.image} alt="Click to go to page" />
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

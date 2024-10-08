import { MouseEvent } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import { Route } from '@constant/routes'
import { SOCIALS } from '@constant/socials'

import EmailImg from '../../../public/email.svg'
import WhatsappImg from '../../../public/whatsapp.svg'
import styles from './MobileMenu.module.scss'

interface Props {
  menus: Route[]
  isOpen: boolean
  setIsOpen(v: boolean): void
}

const MobileMenu = ({ menus, isOpen, setIsOpen }: Props) => {
  const router = useRouter()
  const socials = SOCIALS

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsOpen(false)
    router.push(href)
  }

  return (
    <div className={`${styles.content} ${isOpen && styles.open}`}>
      <ul>
        {menus.map(({ label, path }, i) => (
          <li key={i} className={router.pathname === path ? styles.active : ''}>
            <a href={path} onClick={e => handleClick(e, path)}>
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.options}>
        <a
          href="mailto:hassandogar9@gmail.com"
          target="_blank"
          rel="noreferrer">
          <span className={styles.image}>
            <Image src={EmailImg} alt="click to email" width={28} height={28} />
          </span>
          <span>hassandogar9@gmail.com</span>
        </a>
        <a href="tel:+4915226129682">
          <span className={styles.image}>
            <Image
              src={WhatsappImg}
              alt="click to whatsapp"
              width={28}
              height={28}
            />
          </span>
          <span>{`Let's Whatsapp`}</span>
        </a>
      </div>

      <div className={styles.socials}>
        {socials.map((social, i) => (
          <a key={i} href={social.link} target="_blank" rel="noreferrer">
            <Image
              src={social.image}
              alt="Click to go to page"
              width={36}
              height={36}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default MobileMenu

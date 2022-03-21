import { useEffect, useRef, useState } from 'react'

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import Image from 'next/image'
import Link from 'next/link'

import { ROUTES } from '@constant/routes'
import Menu from '@element/Menu'

import CrossImg from '../../../public/cross.svg'
import HamburgerImg from '../../../public/hamburger.svg'
import MobileMenu from './MobileMenu'
import styles from './NavBar.module.scss'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const mobileNavRef = useRef<HTMLElement>(null)
  const routes = ROUTES

  useEffect(() => {
    if (isOpen) {
      disableBodyScroll(mobileNavRef.current!)
    } else {
      enableBodyScroll(document.body)
    }
  }, [isOpen])

  return (
    <>
      <div className={styles.navBar}>
        <Link href="/" passHref>
          <h4>hassan.</h4>
        </Link>
        <nav>
          <Menu menus={routes} />
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setIsOpen(!isOpen)}>
          <div
            className={`${styles.hamburger} ${isOpen && styles.close} ${
              !isOpen && styles.open
            }`}>
            <Image src={HamburgerImg} alt="open menu" />
          </div>
          <div
            className={`${styles.cross} ${isOpen && styles.open} ${
              !isOpen && styles.close
            }`}>
            <Image src={CrossImg} alt="close menu" />
          </div>
        </button>
      </div>

      <nav
        ref={mobileNavRef}
        className={`
        ${styles.mobileNav} 
        ${isOpen && styles.open}`}>
        <MobileMenu menus={routes} isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
    </>
  )
}

export default NavBar

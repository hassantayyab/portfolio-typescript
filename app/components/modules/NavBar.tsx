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
      enableBodyScroll(mobileNavRef.current!)
    }
  }, [isOpen])

  return (
    <>
      <div className={styles.nav}>
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
          {!isOpen && <Image src={HamburgerImg} alt="open menu" />}
          {isOpen && <Image src={CrossImg} alt="close menu" />}
        </button>
      </div>

      {isOpen && (
        <nav ref={mobileNavRef}>
          <MobileMenu
            menus={routes}
            navRef={mobileNavRef}
            setIsOpen={setIsOpen}
          />
        </nav>
      )}
    </>
  )
}

export default NavBar

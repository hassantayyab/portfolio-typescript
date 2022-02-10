import Image from 'next/image'
import Link from 'next/link'

import { ROUTES } from '@constant/routes'
import Menu from '@element/Menu'

import MenuImg from '../../../public/hamburger.svg'
import styles from './NavBar.module.scss'

const NavBar = () => {
  const routes = ROUTES

  return (
    <nav className={styles.nav}>
      {/* TODO: Logo Component */}
      <Link href="/" passHref>
        <h4>hassan.</h4>
      </Link>

      {/* TODO: MenuItems Component */}
      <Menu menus={routes} />

      <button type="button" className={styles.menuButton}>
        <Image src={MenuImg} alt="toggle menu" />
      </button>
    </nav>
  )
}

export default NavBar

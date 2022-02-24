import Link from 'next/link'

import { Route } from '@constant/routes'

import styles from './MobileMenu.module.scss'

interface Props {
  menus: Route[]
}

const MobileMenu = ({ menus }: Props) => {
  return (
    <div className={styles.mobileMenu}>
      <ul>
        {menus.map((menu, i) => (
          <li key={i}>
            <Link href={menu.path}>{menu.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileMenu

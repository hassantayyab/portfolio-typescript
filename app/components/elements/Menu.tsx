import Link from 'next/link'
import { useRouter } from 'next/router'

import { Route } from '@constant/routes'

import styles from './Menu.module.scss'

interface Props {
  menus: Route[]
}

const Menu = ({ menus }: Props) => {
  const router = useRouter()

  return (
    <ul className={styles.menu}>
      {menus.map(({ path, label }, i) => (
        <li key={i} className={router.pathname === path ? styles.active : ''}>
          <Link href={path}>{label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default Menu

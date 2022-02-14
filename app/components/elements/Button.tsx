import { useRouter } from 'next/router'

import { ChildrenProp } from 'types'

import styles from './Button.module.scss'

interface Props extends ChildrenProp {
  type?: 'button' | 'submit' | 'reset'
  link?: string
}

const Button = ({ link, type = 'button', children }: Props) => {
  const router = useRouter()

  return (
    <button
      type={type}
      className={styles.button}
      onClick={() => link && router.push(link)}>
      {children}
    </button>
  )
}

export default Button

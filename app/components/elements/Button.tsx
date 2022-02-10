import { useRouter } from 'next/router'

import { ChildrenProp } from 'types'

import styles from './Button.module.scss'

interface Props extends ChildrenProp {
  link?: string
}

const Button = ({ link, children }: Props) => {
  const router = useRouter()

  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => link && router.push(link)}>
      {children}
    </button>
  )
}

export default Button

import styles from './Container.module.scss'

interface Props {
  children: React.ReactNode
}

const Container = ({ children }: Props) => (
  <div className={styles.container}>{children}</div>
)

export default Container

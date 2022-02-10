import styles from './Heading.module.scss'

interface Props {
  title: string
  subTitle: string
  align?: 'center' | 'left'
}

const Heading = ({ title, subTitle, align = 'center' }: Props) => {
  return (
    <div
      className={
        align === 'left' ? styles.headingAlignLeft : styles.headingAlignCenter
      }>
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </div>
  )
}

export default Heading

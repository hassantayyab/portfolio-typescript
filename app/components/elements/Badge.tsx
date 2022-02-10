import React from 'react'

import { ChildrenProp } from 'types'

import styles from './Badge.module.scss'

const Badge = ({ children }: ChildrenProp) => {
  return (
    <div className={styles.badge}>
      <span>{children}</span>
    </div>
  )
}

export default Badge

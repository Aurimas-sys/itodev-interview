import type { JSX } from 'react'
import styles from '@/components/no-results/NoResults.module.scss'

export function NoResults(): JSX.Element {
  return (
    <div className={styles['no-result']}>
      <i className={`${styles['no-result__icon']} ri-emotion-sad-fill`}></i>
      <h3 className={styles['no-result__message']}>Sorry!</h3>
      <p className={styles['no-result__sub-message']}>We could not find any results</p>
    </div>
  )
}

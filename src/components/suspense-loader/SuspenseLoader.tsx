import Spinner from 'react-bootstrap/Spinner'
import styles from './SuspenseLoader.module.scss'

export function SuspenseLoader() {
  return (
    <div className={styles['suspense-loader']}>
      <Spinner animation="grow" />
    </div>
  )
}

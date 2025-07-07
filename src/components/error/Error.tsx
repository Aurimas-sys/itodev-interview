import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../models/constants/router'
import styles from './Error.module.scss'

export default function Error() {
  const navigate = useNavigate()

  return (
    <main className={styles.error}>
      <div className={styles.error__content}>
        <h2 className={styles.error__message}>Whoops! Something went wrong!</h2>
        <p className={styles['error__sub-message']}>We could not find what you were looking for.</p>
        <Button
          className={styles.error__button}
          variant="danger"
          onClick={() => navigate(ROUTES.HOME)}
        >
          Main Page
        </Button>
      </div>
    </main>
  )
}

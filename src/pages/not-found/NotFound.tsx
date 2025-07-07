import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../models/constants/router'
import styles from './NotFound.module.scss'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <main className={styles['not-found-view']}>
      <div className={styles['not-found-view__content']}>
        <h2 className={styles['not-found-view__message']}>Whoops! The page you were looking for does not exist!</h2>
        <p className={styles['not-found-view__sub-message']}>We could not find what you were looking for. Please recheck the intended destination or retry another route.</p>
        <Button
          className={styles['not-found-view__button']}
          variant="danger"
          onClick={() => navigate(ROUTES.HOME)}
        >
          <i className="ri-arrow-left-line"></i>
          Back
        </Button>
      </div>
    </main>
  )
}

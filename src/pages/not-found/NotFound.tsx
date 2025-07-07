import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/button/Button'
import { ROUTES } from '@/models/constants/router'
import styles from "@/pages/not-found/NotFound.module.scss"

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <main className={styles['not-found-view']}>
      <div className={styles['not-found-view__content']}>
        <h3 className={styles['not-found-view__message']}>Whoops! The page you were looking for does not exist!</h3>
        <p className={styles['not-found-view__sub-message']}>We could not find what you were looking for. Please recheck the intended destination or retry another route.</p>
        <Button
          className={styles['not-found-view__button']}
          prependIcon={<i className="ri-arrow-left-line" />}
          variant="danger"
          onClick={() => navigate(ROUTES.HOME)}
        >
          Back
        </Button>
      </div>
    </main>
  )
}

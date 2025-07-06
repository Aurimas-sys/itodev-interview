import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../models/constants/router'
import styles from './home.module.scss'

export default function Home() {
  const navigate = useNavigate()

  return (
    <main className={styles['home-view']}>
      <div className={styles['home-view__content']}>
        <h2 className={styles['home-view__message']}>Welcome to Star Wars Movies and Characters Explorer</h2>
        <Button
          className={styles['home-view__button']}
          variant="primary"
          onClick={() => navigate(ROUTES.FILMS)}
        >
          View Movies
        </Button>
        <Button
          className={styles['home-view__button']}
          variant="secondary"
          onClick={() => navigate(ROUTES.CHARACTERS)}
        >
          View Characters
        </Button>
      </div>
    </main>
  )
}

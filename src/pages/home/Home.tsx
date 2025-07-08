import type { JSX } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/button/Button'
import { ROUTES } from '@/models/constants/router'
import styles from '@/pages/home/home.module.scss'

export default function Home(): JSX.Element {
  const navigate = useNavigate()

  return (
    <main className={styles['home-view']}>
      <div className={styles['home-view__content']}>
        <h3 className={styles['home-view__message']}>Welcome to Star Wars Films and Characters Explorer</h3>
        <h5 className={styles['home-view__sub-message']}>Dive into the vast universe</h5>
        <div className={styles['home-view__buttons']}>
          <Button
            className={styles['home-view__button']}
            variant="complementary"
            onClick={(): void | Promise<void> => navigate(ROUTES.FILMS)}
          >
            View Films
          </Button>
          <Button
            className={styles['home-view__button']}
            variant="secondary"
            onClick={(): void | Promise<void> => navigate(ROUTES.CHARACTERS)}
          >
            View Characters
          </Button>
        </div>
      </div>
    </main>
  )
}

import type { JSX } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/button/Button'
import styles from '@/components/error/Error.module.scss'
import { ROUTES } from '@/models/constants/router'

export default function Error(): JSX.Element {
  const navigate = useNavigate()

  return (
    <main
      className={styles.error}
      data-testid="error-container"
    >
      <div
        className={styles.error__content}
        data-testid="error-content"
      >
        <h3
          className={styles.error__message}
          data-testid="error-title"
        >
          Whoops! Something went wrong!
        </h3>
        <p
          className={styles['error__sub-message']}
          data-testid="error-sub-message"
        >
          We could not find what you were looking for.
        </p>
        <Button
          data-testid="error-button"
          variant="danger"
          onClick={(): void | Promise<void> => navigate(ROUTES.HOME)}
        >
          Main Page
        </Button>
      </div>
    </main>
  )
}

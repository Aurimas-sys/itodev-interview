import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../models/constants/router'
import { getImage } from '../../utils/image'
import styles from './FilmCard.module.scss'

interface FilmCardProps {
  title: string
  crawl: string
  url: string
}

export function FilmCard({ title, crawl, url }: FilmCardProps) {
  const MAX_LENGTH = 128
  const truncatedCrawl = crawl.length > MAX_LENGTH ? `${crawl.slice(0, MAX_LENGTH).trim()}…` : crawl
  const id = Number(url.split('/').filter(Boolean).pop()) ?? 1
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate(ROUTES.FILM_BY_ID(id))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleNavigation()
    }
  }

  return (
    <Card
      className={styles['film-card']}
      style={{ backgroundImage: `url(${getImage(id)})` }}
    >
      <Card.Body className={styles['film-card__body']}>
        <div className={styles['film-card__information']}>
          <div className={styles['film-card__movie-title']}>
            { title }
          </div>
          <p>
            { truncatedCrawl }
          </p>
        </div>
        <span
          className={`ri-arrow-right-wide-fill ${styles['film-card__button']}`}
          role="button"
          tabIndex={0}
          onClick={handleNavigation}
          onKeyDown={handleKeyDown}
        />
      </Card.Body>
    </Card>
  )
}

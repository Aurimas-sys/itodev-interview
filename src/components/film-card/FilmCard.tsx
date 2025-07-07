import { useNavigate } from 'react-router-dom'
import styles from '@/components/film-card/FilmCard.module.scss'
import { ROUTES } from '@/models/constants/router'
import { getImage } from '@/utils/image'

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
    if (e.key === 'Enter') {
      e.preventDefault()
      handleNavigation()
    }
  }

  return (
    <div
      className={styles['film-card']}
      style={{ backgroundImage: `url(${getImage(id)})` }}
      tabIndex={0}
      onClick={handleNavigation}
      onKeyDown={handleKeyDown}
    >
      <div className={styles['film-card__film-title']}>
        { title }
      </div>
      <p className={styles['film-card__film-crawl']}>
        { truncatedCrawl }
      </p>
      <div className={styles['film-card__button']}>
        <div>View Details</div>
        <i className="ri-arrow-right-line" />
      </div>
    </div>
  )
}

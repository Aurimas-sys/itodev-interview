import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../models/constants/router'
import styles from './CharacterCard.module.scss'

interface CharacterCardProps {
  name: string
  url: string
}

export function CharacterCard({ name, url }: CharacterCardProps) {
  const id = Number(url.split('/').filter(Boolean).pop()) ?? 1
  const navigate = useNavigate()

  const handleNavigation = () => {
    navigate(ROUTES.CHARACTER_BY_ID(id))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleNavigation()
    }
  }

  return (
    <Card className={styles['character-card']}>
      <Card.Body className={styles['character-card__body']}>
        <div className={styles['character-card__name']}>
          { name }
        </div>
        <span
          className={`ri-arrow-right-wide-fill ${styles['character-card__button']}`}
          role="button"
          tabIndex={0}
          onClick={handleNavigation}
          onKeyDown={handleKeyDown}
        />
      </Card.Body>
    </Card>
  )
}

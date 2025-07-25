import type { JSX } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '@/components/character-card/CharacterCard.module.scss'
import { ROUTES } from '@/models/constants/router'
import { getImage } from '@/utils/image'

interface CharacterCardProps {
  name: string
  url: string
}

export function CharacterCard({ name, url }: CharacterCardProps): JSX.Element {
  const id = Number(url.split('/').filter(Boolean).pop()) ?? 1
  const navigate = useNavigate()

  const handleNavigation = (): void => {
    navigate(ROUTES.CHARACTER_BY_ID(id))
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>): void => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleNavigation()
    }
  }

  return (
    <div
      className={styles['character-card']}
      data-testid={`character-card-${id}`}
      style={{ backgroundImage: `url(${getImage(id)})` }}
      tabIndex={0}
      onClick={handleNavigation}
      onKeyDown={handleKeyDown}
    >
      <div className={styles['character-card__name']}>
        { name }
      </div>
    </div>
  )
}

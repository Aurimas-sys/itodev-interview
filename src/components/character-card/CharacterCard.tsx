import { useNavigate } from 'react-router-dom'
import styles from '@/components/character-card/CharacterCard.module.scss'
import { ROUTES } from '@/models/constants/router'
import { getImage } from '@/utils/image'

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
    <div
      className={styles['character-card']}
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

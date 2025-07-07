import { useNavigate } from 'react-router-dom'
import styles from "@/components/character-card/CharacterCard.module.scss"
import { getImage } from '@/utils/image'
import { ROUTES } from '@/models/constants/router'

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
            role="button"
        tabIndex={0}
        onClick={handleNavigation}
      onKeyDown={handleKeyDown}
      style={{ backgroundImage: `url(${getImage(id)})` }}
    >
      <div className={styles['character-card__name']}>
        { name }
      </div>
    </div>
  )
}

import { Card, Placeholder } from 'react-bootstrap'
import styles from './SkeletonCard.module.scss'

interface SkeletonCardProps {
  className?: string
}

export function SkeletonCard({ className }: SkeletonCardProps) {
  return (
    <Card>
      <Placeholder
        animation="wave"
        as="div"
        className={`${className} ${styles['skeleton-card']}`}
      />
    </Card>
  )
}

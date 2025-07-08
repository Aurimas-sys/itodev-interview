import type { JSX } from 'react'
import styles from '@/components/loaders/pulsating-loader/PulsatingLoader.module.scss'

type LoaderType = 'primary' | 'secondary' | 'complementary'

interface PulsatingLoaderProps {
  variant: LoaderType
  className?: string
}

export function PulsatingLoader({ variant, className }: PulsatingLoaderProps): JSX.Element {
  const extendedClassName = `${styles['pulsating-loader']} ${styles[`pulsating-loader--${variant}`]} ${className || ''}`.trim()

  return (
    <div className={extendedClassName} />
  )
}

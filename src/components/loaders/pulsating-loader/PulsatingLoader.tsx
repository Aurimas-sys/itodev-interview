import styles from '@/components/loaders/pulsating-loader/PulsatingLoader.module.scss'

type LoaderType = 'primary' | 'secondary' | 'complementary'

interface PulsatingLoaderProps {
  variant: LoaderType
  className?: string
}

export function PulsatingLoader({ variant, className }: PulsatingLoaderProps) {
  const extendedClassName = `${styles['pulsating-loader']} ${styles[`pulsating-loader--${variant}`]} ${className || ''}`.trim()

  return (
    <div className={extendedClassName} />
  )
}

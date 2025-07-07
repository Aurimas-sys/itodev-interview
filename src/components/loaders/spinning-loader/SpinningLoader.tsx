import styles from '@/components/loaders/spinning-loader/SpinningLoader.module.scss'

type LoaderType = 'primary' | 'secondary' | 'complementary'

interface SpinnerLoaderProps {
  variant: LoaderType
  className?: string
}

export function SpinningLoader({ variant, className }: SpinnerLoaderProps) {
  const extendedClassName = `${styles['spinner-loader']} ${styles[`spinner-loader--${variant}`]} ${className || ''}`.trim()

  return (
    <div className={extendedClassName} />
  )
}

import type { JSX } from 'react'
import styles from '@/components/button/Button.module.scss'

type ButtonType = 'primary' | 'secondary' | 'danger' | 'complementary'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: ButtonType
  prependIcon?: React.ReactNode
  className?: string
}

export function Button({ children, variant = 'primary', prependIcon, className, ...props }: ButtonProps): JSX.Element {
  const extendedClassName = `${styles.button} ${styles[`button--${variant}`]} ${className || ''}`.trim()

  return (
    <button
      className={extendedClassName}
      {...props}
    >
      {prependIcon && (
        <span className={styles.icon}>
          {prependIcon}
        </span>
      )}
      {children}
    </button>
  )
}

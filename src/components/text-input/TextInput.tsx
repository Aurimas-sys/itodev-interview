import type { JSX } from 'react'
import styles from '@/components/text-input/TextInput.module.scss'

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export function TextInput({ className, ...inputProps }: TextInputProps): JSX.Element {
  const extendedClassName = `${styles['text-input']}  ${className || ''}`.trim()

  return (
    <input
      className={extendedClassName}
      {...inputProps}
    />
  )
}

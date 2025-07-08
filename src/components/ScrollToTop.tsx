import type { JSX, ReactNode } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface ScrollToTopProps {
  children: ReactNode
}

export function ScrollToTop({ children }: ScrollToTopProps): JSX.Element {
  const { pathname } = useLocation()

  useEffect((): void => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      {children}
    </>
  )
}

export default ScrollToTop

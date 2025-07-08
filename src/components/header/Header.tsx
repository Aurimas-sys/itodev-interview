import type { JSX } from 'react'
import { NavLink } from 'react-router-dom'
import styles from '@/components/header/Header.module.scss'
import { ROUTES } from '@/models/constants/router'

const navItems = [
  { to: ROUTES.HOME, label: 'STAR WARS', end: true },
  { to: ROUTES.FILMS, label: 'Films' },
  { to: ROUTES.CHARACTERS, label: 'Characters' },
]

function getLinkClass(isActive: boolean): string {
  return `${styles['nav-list__element']} ${isActive ? styles['nav-list__element--active'] : ''}`.trim()
}

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles['nav-list']}>
          {navItems.map(({ to, label, end }): JSX.Element => (
            <li
              key={to}
              className={styles['nav-list__link']}
            >
              <NavLink
                className={({ isActive }): string => getLinkClass(isActive)}
                end={end}
                to={to}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

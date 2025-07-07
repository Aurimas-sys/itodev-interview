import { NavLink } from 'react-router-dom'
import styles from '@/components/header/Header.module.scss'
import { ROUTES } from '@/models/constants/router'

const navItems = [
  { to: ROUTES.HOME, label: 'STAR WARS', end: true },
  { to: ROUTES.FILMS, label: 'Films' },
  { to: ROUTES.CHARACTERS, label: 'Characters' },
]

function getLinkClass(isActive: boolean) {
  return `${styles['nav-list__element']} ${isActive ? styles['nav-list__element--active'] : ''}`.trim()
}

export function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles['nav-list']}>
          {navItems.map(({ to, label, end }) => (
            <li
              key={to}
              className={styles['nav-list__link']}
            >
              <NavLink
                className={({ isActive }) => getLinkClass(isActive)}
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

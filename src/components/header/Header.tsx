import { NavLink } from 'react-router-dom'
import styles from './Header.module.scss'

export function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles['nav-list']}>
          <li>
            <NavLink
              end
              className={({ isActive }) => `${styles['nav-list__element']} ${isActive ? styles['nav-list__element--active'] : ''}`.trim()}
              to="/"
            >
              Star Wars
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `${styles['nav-list__element']} ${isActive ? styles['nav-list__element--active'] : ''}`.trim()}
              to="/films"
            >
              Films
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => `${styles['nav-list__element']} ${isActive ? styles['nav-list__element--active'] : ''}`.trim()}
              to="/characters"
            >
              Characters
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

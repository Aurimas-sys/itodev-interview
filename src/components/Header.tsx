import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <NavLink
              end
              className={({ isActive }) => isActive ? 'active' : ''}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? 'active' : ''}
              to="/movies"
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => isActive ? 'active' : ''}
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

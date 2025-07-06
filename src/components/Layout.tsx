import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './header/Header'
import { Notifications } from './notifications/Notifications'

export function Layout() {
  const location = useLocation()

  return (
    <>
      <Header />
      <Notifications />
      <Outlet key={location.key} />
    </>
  )
}

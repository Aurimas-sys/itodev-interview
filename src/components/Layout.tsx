import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '@/components/header/Header'
import { Notifications } from '@/components/notifications/Notifications'

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

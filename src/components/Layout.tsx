import type { JSX } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from '@/components/header/Header'
import { Notifications } from '@/components/notifications/Notifications'
import ScrollToTop from '@/components/ScrollToTop'

export function Layout(): JSX.Element {
  const location = useLocation()

  return (
    <ScrollToTop>
      <Header />
      <Notifications />
      <Outlet key={location.key} />
    </ScrollToTop>
  )
}

import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './components/header/Header'
import { Notifications } from './components/notifications/Notifications'

export function App() {
  return (
    <>
      <Header />
      <Notifications />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}

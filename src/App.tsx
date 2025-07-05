import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './components/Header'

export function App() {
  return (
    <>
      <Header />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  )
}

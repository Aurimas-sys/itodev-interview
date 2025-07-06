import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'

const Home = lazy(() => import('./pages/Home'))
const Films = lazy(() => import('./pages/Films'))
const Film = lazy(() => import('./pages/Film'))
const Characters = lazy(() => import('./pages/Characters'))
const Character = lazy(() => import('./pages/Character'))
const Error = lazy(() => import('./pages/Error'))
const NotFound = lazy(() => import('./pages/NotFound'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: 'films', element: <Films /> },
      { path: 'films/:filmId', element: <Film /> },
      { path: 'characters', element: <Characters /> },
      { path: 'characters/:characterId', element: <Character /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'

const Home = lazy(() => import('./pages/home/Home'))
const Films = lazy(() => import('./pages/Films'))
const Film = lazy(() => import('./pages/Film'))
const Characters = lazy(() => import('./pages/Characters'))
const Character = lazy(() => import('./pages/Character'))
const Error = lazy(() => import('./pages/Error'))
const NotFound = lazy(() => import('./pages/NotFound'))

export const ROUTES = {
  HOME: '/',
  FILMS: '/films',
  FILM: '/films/:filmId',
  CHARACTERS: '/characters',
  CHARACTER: '/characters/:characterId',
  FILM_BY_ID: (filmId: string | number) => `/films/${filmId}`,
  CHARACTER_BY_ID: (characterId: string | number) => `/characters/${characterId}`,
  NOT_FOUND: '*',
}

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: ROUTES.FILMS, element: <Films /> },
      { path: ROUTES.FILM, element: <Film /> },
      { path: ROUTES.CHARACTERS, element: <Characters /> },
      { path: ROUTES.CHARACTER, element: <Character /> },
      { path: ROUTES.NOT_FOUND, element: <NotFound /> },
    ],
  },
])

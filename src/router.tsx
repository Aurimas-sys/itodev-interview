import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'

const Home = lazy(() => import('./pages/Home'))
const Movies = lazy(() => import('./pages/Movies'))
const Movie = lazy(() => import('./pages/Movie'))
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
      { path: 'movies', element: <Movies /> },
      { path: 'movies/:movieId', element: <Movie /> },
      { path: 'characters', element: <Characters /> },
      { path: 'characters/:characterId', element: <Character /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

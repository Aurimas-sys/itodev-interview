import { QueryClientProvider } from '@tanstack/react-query'
import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { SuspenseLoader } from './components/suspense-loader/SuspenseLoader'
import { ROUTES } from './models/constants/router'
import { queryClient } from './services/queryClient'
import { store } from './store/store'

const Home = lazy(() => import('./pages/home/Home'))
const Films = lazy(() => import('./pages/films/Films'))
const Film = lazy(() => import('./pages/Film'))
const Characters = lazy(() => import('./pages/Characters'))
const Character = lazy(() => import('./pages/Character'))
const NotFound = lazy(() => import('./pages/not-found/NotFound'))

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              element={<Layout />}
              path={ROUTES.HOME}
            >
              <Route
                index
                element={(
                  <Suspense fallback={<SuspenseLoader />}>
                    <Home />
                  </Suspense>
                )}
              />
              <Route
                element={(
                  <Suspense fallback={<SuspenseLoader />}>
                    <Films />
                  </Suspense>
                )}
                path={ROUTES.FILMS}
              />
              <Route
                element={(
                  <Suspense fallback={<SuspenseLoader />}>
                    <Film />
                  </Suspense>
                )}
                path={ROUTES.FILM}
              />
              <Route
                element={(
                  <Suspense fallback={<SuspenseLoader />}>
                    <Characters />
                  </Suspense>
                )}
                path={ROUTES.CHARACTERS}
              />
              <Route
                element={(
                  <Suspense fallback={<SuspenseLoader />}>
                    <Character />
                  </Suspense>
                )}
                path={ROUTES.CHARACTER}
              />
              <Route
                element={(
                  <Suspense fallback={<SuspenseLoader />}>
                    <NotFound />
                  </Suspense>
                )}
                path={ROUTES.NOT_FOUND}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  )
}

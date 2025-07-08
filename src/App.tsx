import type { JSX } from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { SuspenseLoader } from '@/components/loaders/suspense-loader/SuspenseLoader'
import { ROUTES } from '@/models/constants/router'
import { queryClient } from '@/services/queryClient'
import { store } from '@/store/store'

const Home = lazy((): Promise<{ default: React.ComponentType<any> }> => import('@/pages/home/Home'))
const Films = lazy((): Promise<{ default: React.ComponentType<any> }> => import('@/pages/films/Films'))
const Film = lazy((): Promise<{ default: React.ComponentType<any> }> => import('@/pages/film/Film'))
const Characters = lazy((): Promise<{ default: React.ComponentType<any> }> => import('@/pages/characters/Characters'))
const Character = lazy((): Promise<{ default: React.ComponentType<any> }> => import('@/pages/character/Character'))
const NotFound = lazy((): Promise<{ default: React.ComponentType<any> }> => import('@/pages/not-found/NotFound'))

export function App(): JSX.Element {
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

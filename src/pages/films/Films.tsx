import { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Error from '../../components/error/Error'
import { FilmCard } from '../../components/film-card/FilmCard'
import { NoResults } from '../../components/no-results/NoResults'
import { useFilmsQuery } from '../../services/queries/general'
import { addNotification } from '../../store/slices/notificationsSlice'
import styles from './Films.module.scss'

export default function Films() {
  const { data, error, isError, isPending } = useFilmsQuery()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      dispatch(addNotification({ type: 'danger', message: 'Failed to load movies' }))
    }
  }, [isError, error])

  if (isPending) {
    return (
      <main className={styles['films-view']}>
        <Spinner
          animation="border"
          variant="secondary"
        />
      </main>
    )
  }

  if (isError) {
    return (
      <main className={styles['films-view']}>
        <Error />
      </main>
    )
  }

  return (
    <main className={styles['films-view']}>
      <div className={styles['films-view__container']}>
        <h3 className={styles['films-view__title']}>Movies</h3>
        {data.length > 0
          ? (
              data.map(film => (
                <FilmCard
                  key={film.url}
                  crawl={film.opening_crawl}
                  title={film.title}
                  url={film.url}
                />
              ))
            )
          : <NoResults /> }
      </div>
    </main>
  )
}

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Error from '../../components/error/Error'
import { FilmCard } from '../../components/film-card/FilmCard'
import { SkeletonCard } from '../../components/skeletons/skeleton-card/SkeletonCard'
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
        <div className={styles['films-view__skeleton-container']}>
          <h2 className={styles['films-view__title']}>Movies</h2>
          <SkeletonCard className={styles['films-view__skeleton-card']} />
          <SkeletonCard className={styles['films-view__skeleton-card']} />
          <SkeletonCard className={styles['films-view__skeleton-card']} />
        </div>
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
        <h2 className={styles['films-view__title']}>Movies</h2>
        {data.map((film, idx) => (
          <FilmCard
            key={idx}
            crawl={film.opening_crawl}
            title={film.title}
            url={film.url}
          />
        ))}
      </div>
    </main>
  )
}

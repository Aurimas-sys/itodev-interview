import type { JSX } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Error from '@/components/error/Error'
import { FilmCard } from '@/components/film-card/FilmCard'
import { SpinningLoader } from '@/components/loaders/spinning-loader/SpinningLoader'
import { NoResults } from '@/components/no-results/NoResults'
import styles from '@/pages/films/Films.module.scss'
import { useFilmsQuery } from '@/services/queries/general'
import { addNotification } from '@/store/slices/notificationsSlice'

export default function Films(): JSX.Element {
  const { data, isError, isPending } = useFilmsQuery()
  const dispatch = useDispatch()
  let content

  useEffect((): void => {
    if (isError) {
      dispatch(addNotification({ type: 'danger', message: 'Failed to load films' }))
    }
  }, [isError])

  if (isPending) {
    content = (
      <SpinningLoader
        className={styles['films-view__loader']}
        variant="complementary"
      />
    )
  }
  else if (isError) {
    content = <Error />
  }
  else if (data.length > 0) {
    content = data.map(({ url, title, opening_crawl }): JSX.Element => (
      <FilmCard
        key={url}
        crawl={opening_crawl}
        title={title}
        url={url}
      />
    ))
  }
  else {
    content = <NoResults />
  }

  return (
    <main className={styles['films-view']}>
      <div className={styles['films-view__container']}>
        <h3 className={styles['films-view__title']}>BROWSE FILMS</h3>
        {content}
      </div>
    </main>
  )
}

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { CharacterCard } from '@/components/character-card/CharacterCard'
import Error from '@/components/error/Error'
import { SpinningLoader } from '@/components/loaders/spinning-loader/SpinningLoader'
import styles from '@/pages/film/Film.module.scss'
import { useFilmQuery, usePeopleByUrlsQuery } from '@/services/queries/general'
import { addNotification } from '@/store/slices/notificationsSlice'
import { getImage } from '@/utils/image'

export default function Film() {
  const { filmId } = useParams()
  let content

  if (!filmId) {
    return (
      <main className={styles['film-view']}>
        <div className={styles['film-view__container']}>
          <Error />
        </div>
      </main>
    )
  }

  const { data: film, isError: isFilmLoadError, isPending: isFilmLoadPending } = useFilmQuery(filmId)
  const { data: characters, isError: isCharactersLoadError, isPending: isCharactersPending } = usePeopleByUrlsQuery(film?.characters)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isFilmLoadError || isCharactersLoadError) {
      dispatch(addNotification({ type: 'danger', message: 'Failed to load film' }))
    }
  }, [isFilmLoadError, isCharactersLoadError])

  if (isFilmLoadPending || isCharactersPending) {
    content = (
      <SpinningLoader
        className={styles['film-view__loader']}
        variant="complementary"
      />
    )
  }
  else if (isFilmLoadError || isCharactersLoadError) {
    content = <Error />
  }
  else {
    content = (
      <>
        <h3 className={styles['film-view__title']}>
          {film.title}
        </h3>
        <div
          className={styles['film-view__image']}
          style={{ backgroundImage: `url(${getImage(Number(filmId))})` }}
        />
        <div className={styles['sub-information']}>
          <div>
            <span className={styles['sub-information__title']}>Episode: </span>
            {film.episode_id}
          </div>
          <div>
            <span className={styles['sub-information__title']}>Director: </span>
            {film.director}
          </div>
          <div>
            <span className={styles['sub-information__title']}>Producer: </span>
            {film.producer}
          </div>
          <div>
            <span className={styles['sub-information__title']}>Released: </span>
            { film.release_date}
          </div>
        </div>
        <p className={styles['film-view__crawl']}>
          {film.opening_crawl}
        </p>

        <div className={styles['film-view__characters-cards']}>
          {characters.map(({ name, url }) => (
            <CharacterCard
              key={url}
              name={name}
              url={url}
            />
          ))}
        </div>
      </>
    )
  }

  return (
    <main className={styles['film-view']}>
      <div className={styles['film-view__container']}>
        {content}
      </div>
    </main>
  )
}

import type { JSX } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import Error from '@/components/error/Error'
import { FilmCard } from '@/components/film-card/FilmCard'
import { SpinningLoader } from '@/components/loaders/spinning-loader/SpinningLoader'
import styles from '@/pages/character/Character.module.scss'
import { useFilmsByUrlsQuery, usePersonQuery } from '@/services/queries/general'
import { addNotification } from '@/store/slices/notificationsSlice'
import { getImage } from '@/utils/image'

export default function Character(): JSX.Element {
  const { characterId } = useParams()
  let content

  if (!characterId) {
    return (
      <main className={styles['character-view']}>
        <div className={styles['character-view__container']}>
          <Error />
        </div>
      </main>
    )
  }

  const { data: character, isError: isCharacterLoadError, isPending: isCharacterLoadPending } = usePersonQuery(characterId)
  const { data: films, isError: isFilmsLoadError, isPending: isFilmsLoadPending } = useFilmsByUrlsQuery(character?.films)
  const dispatch = useDispatch()

  useEffect((): void => {
    if (isCharacterLoadError || isFilmsLoadError) {
      dispatch(addNotification({ type: 'danger', message: 'Failed to character film' }))
    }
  }, [isCharacterLoadError, isFilmsLoadError])

  if (isCharacterLoadPending || isFilmsLoadPending) {
    content = (
      <SpinningLoader
        className={styles['character-view__loader']}
        variant="complementary"
      />
    )
  }
  else if (isCharacterLoadError || isFilmsLoadError) {
    content = <Error />
  }
  else {
    content = (
      <>
        <h3 className={styles['character-view__title']}>
          {character.name}
        </h3>
        <div
          className={styles['character-view__image']}
          style={{ backgroundImage: `url(${getImage(Number(characterId))})` }}
        />
        <div className={styles['sub-information']}>
          <div>
            <span className={styles['sub-information__title']}>Mass: </span>
            {character.mass}
          </div>
          <div>
            <span className={styles['sub-information__title']}>Hair Color: </span>
            {character.hair_color}
          </div>
          <div>
            <span className={styles['sub-information__title']}>Height: </span>
            {character.height}
          </div>
          <div>
            <span className={styles['sub-information__title']}>Skin Color: </span>
            { character.skin_color}
          </div>
          <div>
            <span className={styles['sub-information__title']}>Eye Color: </span>
            { character.eye_color}
          </div>
          <div>
            <span className={styles['sub-information__title']}>Birth Year: </span>
            { character.birth_year}
          </div>
          <div>
            <span className={styles['sub-information__title']}>Gender: </span>
            { character.gender}
          </div>
        </div>
        <div className={styles['character-view__characters-cards']}>
          {films.map(({ url, opening_crawl, title }): JSX.Element => (
            <FilmCard
              key={url}
              crawl={opening_crawl}
              title={title}
              url={url}
            />
          ))}
        </div>
      </>
    )
  }

  return (
    <main className={styles['character-view']}>
      <div className={styles['character-view__container']}>
        {content}
      </div>
    </main>
  )
}

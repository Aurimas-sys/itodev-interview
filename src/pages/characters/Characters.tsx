import type { JSX } from 'react'
import type { Person } from '@/models/interfaces/api'
import { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { CharacterCard } from '@/components/character-card/CharacterCard'
import Error from '@/components/error/Error'
import { SpinningLoader } from '@/components/loaders/spinning-loader/SpinningLoader'
import { NoResults } from '@/components/no-results/NoResults'
import { Pagination } from '@/components/pagination/Pagination'
import { TextInput } from '@/components/text-input/TextInput'
import styles from '@/pages/characters/Characters.module.scss'
import { usePeopleQuery } from '@/services/queries/general'
import { addNotification } from '@/store/slices/notificationsSlice'

export default function Characters(): JSX.Element {
  const ITEMS_PER_PAGE = 9
  let content

  const { data, isError, isPending } = usePeopleQuery()
  const dispatch = useDispatch()

  const [page, setPage] = useState(1)
  const [searchInput, setSearchInput] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')

  const filteredCharacters = useMemo((): Person[] | undefined => {
    if (!debouncedSearch)
      return data

    return data?.filter((character): boolean => character.name.toLowerCase().includes(debouncedSearch))
  }, [data, debouncedSearch])

  const totalPages = filteredCharacters ? Math.ceil(filteredCharacters.length / ITEMS_PER_PAGE) : 0
  const paginatedCharacters = filteredCharacters?.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  const changePage = (newPage: number): void => {
    if (newPage < 1 || newPage > totalPages)
      return

    setPage(newPage)
  }

  useEffect((): () => void => {
    const timeout = setTimeout((): void => {
      setDebouncedSearch(searchInput.trim().toLowerCase())
      setPage(1)
    }, 1000)

    return (): void => clearTimeout(timeout)
  }, [searchInput])

  useEffect((): void => {
    if (isError) {
      dispatch(addNotification({ type: 'danger', message: 'Failed to load characters' }))
    }
  }, [isError])

  if (isPending) {
    content = (
      <SpinningLoader
        className={styles['characters-view__loader']}
        variant="complementary"
      />
    )
  }
  else if (isError || !paginatedCharacters) {
    content = <Error />
  }
  else {
    content = (
      <>
        <TextInput
          placeholder="Search characters..."
          type="text"
          value={searchInput}
          onChange={(e): void => setSearchInput(e.target.value)}
        />

        {paginatedCharacters.length > 0
          ? (
              <>
                <div className={styles['characters-view__cards']}>
                  {paginatedCharacters.map((character, idx): JSX.Element => (
                    <CharacterCard
                      key={idx}
                      name={character.name}
                      url={character.url}
                    />
                  ))}
                </div>
                <Pagination
                  page={page}
                  totalPages={totalPages}
                  onPageChange={changePage}
                />
              </>
            )
          : <NoResults />}
      </>
    )
  }

  return (
    <main className={styles['characters-view']}>
      <div className={styles['characters-view__container']}>
        <h3 className={styles['characters-view__title']}>BROWSE CHARACTERS</h3>
        {content}
      </div>
    </main>
  )
}

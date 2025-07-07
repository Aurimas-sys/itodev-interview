import { useEffect, useMemo, useState } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { CharacterCard } from '../../components/character-card/CharacterCard'
import { CustomPagination } from '../../components/custom-pagination/CustomPagination'
import Error from '../../components/error/Error'
import { NoResults } from '../../components/no-results/NoResults'
import { usePeopleQuery } from '../../services/queries/general'
import { addNotification } from '../../store/slices/notificationsSlice'
import styles from './Characters.module.scss'

export default function Characters() {
  const ITEMS_PER_PAGE = 7

  const { data, isError, error, isPending } = usePeopleQuery()
  const dispatch = useDispatch()

  const [page, setPage] = useState(1)
  const [searchInput, setSearchInput] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')

  const filteredCharacters = useMemo(() => {
    if (!debouncedSearch)
      return data
    return data?.filter(character =>
      character.name.toLowerCase().includes(debouncedSearch),
    )
  }, [data, debouncedSearch])
  const totalPages = filteredCharacters ? Math.ceil(filteredCharacters.length / ITEMS_PER_PAGE) : 0
  const paginatedCharacters = filteredCharacters?.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE)

  const changePage = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages)
      return
    setPage(newPage)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(searchInput.trim().toLowerCase())
      setPage(1)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [searchInput])

  useEffect(() => {
    if (isError) {
      dispatch(addNotification({ type: 'danger', message: 'Failed to load characters' }))
    }
  }, [isError, error])

  if (isPending) {
    return (
      <main className={styles['characters-view']}>
        <Spinner
          animation="border"
          variant="secondary"
        />
      </main>
    )
  }

  if (isError || !paginatedCharacters) {
    return (
      <main className={styles['characters-view']}>
        <Error />
      </main>
    )
  }

  return (
    <main className={styles['characters-view']}>
      <div className={styles['characters-view__container']}>
        <h3 className={styles['characters-view__title']}>Characters</h3>
        <Form className={styles['characters-view__form']}>
          <Form.Control
            placeholder="Search characters..."
            type="text"
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />
        </Form>
        {paginatedCharacters.length > 0
          ? (
              <>
                {paginatedCharacters.map((character, idx) => (
                  <CharacterCard
                    key={idx}
                    name={character.name}
                    url={character.url}
                  />
                ))}
                <CustomPagination
                  className={styles['characters-view__pagination']}
                  page={page}
                  totalPages={totalPages}
                  onPageChange={changePage}
                />
              </>
            )
          : <NoResults />}
      </div>
    </main>
  )
}

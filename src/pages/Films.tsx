import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useFilmsQuery } from '../services/queries/general'
import { addNotification } from '../store/slices/notificationsSlice'

export default function Films() {
  const { data, error, isError } = useFilmsQuery()

  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      dispatch(addNotification({ type: 'danger', message: 'Failed to load movies' }))
    }
  }, [isError, error])

  return (
    <main>
      <h1>Films</h1>
      <p>All films</p>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  )
}

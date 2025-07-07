import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useFilmQuery } from '@/services/queries/general'
import { addNotification } from '@/store/slices/notificationsSlice'

export default function Film() {
  const { filmId } = useParams()

  if (!filmId) {
    return (<div>Something went wrong..</div>)
  }

  // We could implement logic to get film information from query and if it exsists, and if it doesnt - to fetch from single film end-point,
  // but IMO such implmenetation would not be of very much benefit in current scenrario but instead be hard to maintain/error prone.
  const { data, isError, error } = useFilmQuery(filmId)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      dispatch(addNotification({ type: 'danger', message: 'Failed to load film' }))
    }
  }, [isError, error])

  return (
    <main>
      <h1>Film</h1>
      <p>
        {`Single film with ${filmId} id`}
      </p>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  )
}

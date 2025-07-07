import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { usePersonQuery } from '@/services/queries/general'
import { addNotification } from '@/store/slices/notificationsSlice'

export default function Character() {
  const { characterId } = useParams()

  if (!characterId) {
    return (<div>Something went wrong..</div>)
  }

  // We could implement logic to get person information from query and if it exsists, and if it doesnt - to fetch from single person end-point,
  // but IMO such implmenetation would not be of very much benefit in current scenrario but instead be hard to maintain/error prone.
  const { data, isError, error } = usePersonQuery(characterId)
  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      dispatch(addNotification({ type: 'danger', message: 'Failed to load character' }))
    }
  }, [isError, error])

  return (
    <main>
      <h1>Character</h1>
      <p>
        {`Single character with ${characterId} id`}
      </p>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  )
}

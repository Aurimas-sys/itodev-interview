import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addNotification } from '../store/slices/notificationsSlice'

export default function Home() {
  const dispatch = useDispatch()

  const handleNotification = () => {
    dispatch(addNotification({ type: 'success', message: 'Test' }))
  }

  return (
    <main>
      <h1>Home</h1>
      <p>Browse movies or characters</p>
      <Button
        variant="success"
        onClick={handleNotification}
      >
        Add notification
      </Button>
    </main>
  )
}

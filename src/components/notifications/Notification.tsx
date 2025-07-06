import { useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removeNotification } from '../../store/slices/notificationsSlice'

interface NotificationProps {
  id: number
  type: 'success' | 'danger' | 'info' | 'warning'
  message: string
}

export function Notification({ id, type, message }: NotificationProps) {
  let timeOutId: ReturnType<typeof setTimeout> | null = null
  const dispatch = useDispatch()

  const handleClose = (id: number) => {
    dispatch(removeNotification(id))
  }

  useEffect(() => {
    timeOutId = setTimeout(() => handleClose(id), 3000)

    return () => {
      if (!timeOutId)
        return

      clearTimeout(timeOutId)
    }
  }, [])

  return (
    <Alert
      dismissible
      variant={type}
      onClose={() => handleClose(id)}
    >
      {message}
    </Alert>
  )
}

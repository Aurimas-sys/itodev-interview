import { useEffect } from 'react'
import { Toast } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removeNotification } from '../../../store/slices/notificationsSlice'
import styles from './Notification.module.scss'

interface NotificationProps {
  id: number
  type: 'success' | 'danger' | 'info' | 'warning'
  message: string
}

export function Notification({ id, type, message }: NotificationProps) {
  let timeOutId: ReturnType<typeof setTimeout> | null = null
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(removeNotification(id))
  }

  useEffect(() => {
    timeOutId = setTimeout(() => handleClose(), 3000)

    return () => {
      if (!timeOutId)
        return

      clearTimeout(timeOutId)
    }
  }, [])

  return (
    <Toast
      animation
      bg={type}

      onClose={handleClose}
    >
      <Toast.Header
        closeButton
        className={styles.notification__header}
      />
      <Toast.Body className={styles.notification__message}>
        {message}
      </Toast.Body>
    </Toast>
  )
}

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styles from '@/components/notifications/Notification/Notification.module.scss'
import { removeNotification } from '@/store/slices/notificationsSlice'

interface NotificationProps {
  id: number
  type: 'danger'
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
    <div className={`${styles.notification} ${styles[`notification--${type}`]}`}>
      {message}
    </div>
  )
}

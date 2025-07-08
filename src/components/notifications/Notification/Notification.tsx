import type { JSX } from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styles from '@/components/notifications/Notification/Notification.module.scss'
import { removeNotification } from '@/store/slices/notificationsSlice'

interface NotificationProps {
  id: number
  type: 'danger'
  message: string
}

export function Notification({ id, type, message }: NotificationProps): JSX.Element {
  let timeOutId: ReturnType<typeof setTimeout> | null = null
  const dispatch = useDispatch()

  const handleClose = (): void => {
    dispatch(removeNotification(id))
  }

  useEffect((): () => void => {
    timeOutId = setTimeout((): void => handleClose(), 3000)

    return (): void => {
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

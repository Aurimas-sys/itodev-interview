import type { JSX } from 'react'
import type { SingleNotification } from '@/store/slices/notificationsSlice'
import type { RootStore } from '@/store/store'
import { useSelector } from 'react-redux'
import { Notification } from '@/components/notifications/Notification/Notification'
import styles from '@/components/notifications/Notifications.module.scss'

export function Notifications(): JSX.Element {
  const notifications = useSelector((state: RootStore): SingleNotification[] => state.notifications.items)

  return (
    <div className={styles['notifications-container']}>
      {notifications.map(({ id, message, type }): JSX.Element => (
        <Notification
          key={id}
          id={id}
          message={message}
          type={type}
        />
      ))}
    </div>
  )
}

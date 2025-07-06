import type { RootStore } from '../../store/store'
import { useSelector } from 'react-redux'
import { Notification } from './Notification'
import styles from './Notifications.module.scss'

export function Notifications() {
  const notifications = useSelector((state: RootStore) => state.notifications.items)

  return (
    <div className={styles['notifications-container']}>
      {notifications.map(({ id, message, type }) => (
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

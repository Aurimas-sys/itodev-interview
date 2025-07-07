import { PulsatingLoader } from '@/components/loaders/pulsating-loader/PulsatingLoader'
import styles from '@/components/loaders/suspense-loader/SuspenseLoader.module.scss'

export function SuspenseLoader() {
  return (
    <div className={styles['suspense-loader']}>
      <PulsatingLoader variant="complementary" />
    </div>
  )
}

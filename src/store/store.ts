import { configureStore } from '@reduxjs/toolkit'
import notificationsReducer from '@/store/slices/notificationsSlice'

export const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
  },
})

export type RootStore = ReturnType<typeof store.getState>

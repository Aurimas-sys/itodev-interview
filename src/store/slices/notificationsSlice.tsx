import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface Notification {
  id: number
  type: 'success' | 'danger' | 'info' | 'warning'
  message: string
}

interface State {
  items: Notification[]
}

const initialState: State = {
  items: [],
}

let nextId = 0

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification(state, action: PayloadAction<Omit<Notification, 'id'>>) {
      const id = nextId++
      state.items.push({ id, ...action.payload })
    },
    removeNotification(state, action: PayloadAction<number>) {
      state.items = state.items.filter(n => n.id !== action.payload)
    },
  },
})

export const { addNotification, removeNotification } = notificationsSlice.actions
export default notificationsSlice.reducer

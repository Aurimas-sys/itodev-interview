import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface SingleNotification {
  id: number
  type: 'danger'
  message: string
}

interface State {
  items: SingleNotification[]
}

const initialState: State = {
  items: [],
}

let nextId = 0

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification(state, action: PayloadAction<Omit<SingleNotification, 'id'>>): void {
      nextId++
      state.items.push({ id: nextId, ...action.payload })
    },
    removeNotification(state, action: PayloadAction<number>): void {
      state.items = state.items.filter((n): boolean => n.id !== action.payload)
    },
  },
})

export const { addNotification, removeNotification } = notificationsSlice.actions
export default notificationsSlice.reducer

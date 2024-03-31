import { configureStore } from "@reduxjs/toolkit"
import tagExplorerReducer from "./tagExplorerSlice/tagExplorerSlice"

export const store = configureStore({
  reducer: {
    tagExplorer: tagExplorerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

import { configureStore } from '@reduxjs/toolkit'
import FlyData from "./flyDataSlice"

export const store = configureStore({
  reducer: {
    data:FlyData,
  },
})
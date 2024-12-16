import { configureStore } from '@reduxjs/toolkit'
import centralSlice from '../slices/centralSlice'

export default configureStore({
  reducer: {
    central : centralSlice
  }
})
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
}) 


// Steps
// 1. Create A Store
// 2. Wrap app component under provider and pass the store
// 3. Create a slice (reducer + actions)
// 4. register reducer in the store

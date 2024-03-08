import { configureStore } from '@reduxjs/toolkit'
import { noteReducer } from './features/notes/notesSlice';

 const store = configureStore({
  reducer: {
    notes : noteReducer
  },
}); 

export type RootState = ReturnType<typeof store.getState>
export type AppDispach = typeof store.dispatch


export default store 
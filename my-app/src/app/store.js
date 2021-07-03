import { createStore } from '@reduxjs/toolkit';
import NoteListReducer from './NoteListReducer';

/* export const store = configureStore({
  reducer: {
    NoteBlock: NoteListReducer,
  },
}); */

export const store = createStore(NoteListReducer)
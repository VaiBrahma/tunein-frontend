import { configureStore } from '@reduxjs/toolkit';
import roomReducer from './state/index.js';

const store = configureStore({
  reducer: {
    room: roomReducer,
  },
});

export default store;
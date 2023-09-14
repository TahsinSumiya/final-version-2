import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/Slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
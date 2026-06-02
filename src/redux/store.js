import { configureStore } from '@reduxjs/toolkit';
import bookingEngineReducer from './slices/bookingSlice'
export const store = configureStore({
  reducer: { bookingEngine: bookingEngineReducer },
});

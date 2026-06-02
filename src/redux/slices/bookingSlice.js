import { createSlice } from '@reduxjs/toolkit';

const initialState = { isBookingOpen: false };

const bookingEngineSlice = createSlice({
  name: 'bookingEngine',
  initialState,
  reducers: {
    openBookingEngine: (state) => { state.isBookingOpen = true; },
    closeBookingEngine: (state) => { state.isBookingOpen = false; },
    toggleBookingEngine: (state) => { state.isBookingOpen = !state.isBookingOpen; },
  },
});

export const {
  openBookingEngine,
  closeBookingEngine,
  toggleBookingEngine,
} = bookingEngineSlice.actions;

export const selectIsBookingOpen = (state) => state.bookingEngine.isBookingOpen;

export default bookingEngineSlice.reducer;

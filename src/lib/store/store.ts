import { configureStore } from '@reduxjs/toolkit';
import citiesSlice from './slices/cities-slice';
import citySlice from './slices/city-slice';
import unitSlice from './slices/unit-slice';

export const store = configureStore({
  reducer: {
    cities: citiesSlice,
    city: citySlice,
    unit: unitSlice,
  },
});

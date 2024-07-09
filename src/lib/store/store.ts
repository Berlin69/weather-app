import { configureStore } from '@reduxjs/toolkit';
import citiesSlice from './slices/citiesSlice';
import citySlise from './slices/citySlise';

export const store = configureStore({
  reducer: {
    cities: citiesSlice,
    city: citySlise,
  },
});

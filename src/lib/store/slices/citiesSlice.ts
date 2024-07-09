import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = [
  {
    name: 'Санкт-Петербург',
    lat: '59.934280',
    lon: '30.335098',
  },
  {
    name: 'Москва',
    lat: '55.755825',
    lon: '37.617298',
  },
];

const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<any>) => {
      const { name, lat, lon } = action.payload;
      state.push({ name, lat, lon });
    },
    deleteCity: (state, action: PayloadAction<any>) => {
      const cityName = action.payload;
      return state.filter((city: any) => city.name !== cityName);
    },
  },
});

export const { addCity, deleteCity } = citiesSlice.actions;
export default citiesSlice.reducer;

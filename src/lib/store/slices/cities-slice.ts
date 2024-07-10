import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = [];

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
    setCities: (state, action: PayloadAction<any>) => {
      return action.payload;
    },
  },
});

export const { addCity, deleteCity, setCities } = citiesSlice.actions;
export default citiesSlice.reducer;

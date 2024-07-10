import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const citySlice = createSlice({
  name: 'city',
  initialState: {
    name: 'Санкт-Петербург',
    lat: '59.934280',
    lon: '30.335098',
  },
  reducers: {
    changeCity: (state, action: PayloadAction<any>) => {
      state.name = action.payload.name;
      state.lat = action.payload.lat;
      state.lon = action.payload.lon;
    },
  },
});

export const { changeCity } = citySlice.actions;

export default citySlice.reducer;

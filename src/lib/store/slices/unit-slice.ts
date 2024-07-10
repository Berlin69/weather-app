import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const unitSlice = createSlice({
  name: 'unit',
  initialState: { unit: 'metric' },
  reducers: {
    setUnit: (state, action: PayloadAction<any>) => {
      state.unit = action.payload;
    },
  },
});

export const { setUnit } = unitSlice.actions;

export default unitSlice.reducer;

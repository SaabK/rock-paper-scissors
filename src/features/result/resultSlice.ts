import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { IResult } from '../../types';

const initialState: IResult  = {
  result: null
}

export const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    setResult: (state, action: PayloadAction<IResult>) => {
      state.result = action.payload.result;
    }
  },
})

export const { setResult } = resultSlice.actions;

export default resultSlice.reducer;
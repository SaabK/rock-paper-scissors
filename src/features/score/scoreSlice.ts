import { createSlice } from '@reduxjs/toolkit'
import { IScore } from '../../types';

const initialState: IScore  = {
  score: JSON.parse(localStorage.getItem("score")!).score || 0
}

console.log(initialState.score);

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    incrementScore: (state) => {
      state.score += 1;
      localStorage.setItem("score", JSON.stringify({ score: state.score }));
    },
    resetScore: (state) => {
      state = initialState;
    }
  },
})

export const { incrementScore, resetScore } = scoreSlice.actions;

export default scoreSlice.reducer;
import { createSlice } from '@reduxjs/toolkit'
import { PlayerState, player } from '../../types';

const initialState: PlayerState & player = {
  player: null
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayer: (state, action) => {
      state.player = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
// export const { } = playerSlice.actions

export default playerSlice.reducer
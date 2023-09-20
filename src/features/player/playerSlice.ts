import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';
import { PlayerState, player } from '../../types';

const initialState: PlayerState & player = {
  player: null
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayer: (state, action: PayloadAction<player>) => {
      state.player = action.payload.player;
    },
    resetPlayer: (state) => {
      state.player = initialState.player;
    }
  },
})

export const { setPlayer, resetPlayer } = playerSlice.actions;

export default playerSlice.reducer;
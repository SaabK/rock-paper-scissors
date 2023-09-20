import { configureStore } from '@reduxjs/toolkit';
import playerReducer from './features/player/playerSlice';
import resultReducer from './features/result/resultSlice';
import scoreReducer from './features/score/scoreSlice';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    result: resultReducer,
    score: scoreReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
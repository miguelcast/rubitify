import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Song } from '../songs/songsSlice';

interface InitialState {
  status?: 'playing' | 'pause' | 'stopped' | null;
  current?: Song | null;
}

const initialState: InitialState = {
  status: null,
  current: null
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrent(state, action: PayloadAction<Song>) {
      return {
        ...state,
        current: action.payload
      }
    }
  }
});

export const { setCurrent } = playerSlice.actions;

export default playerSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Song } from '../songs/songsSlice';
import { PLAYER_STATUS } from '../../config/types';

interface InitialState {
  status?: PLAYER_STATUS;
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
        current: action.payload,
        status: 'playing'
      }
    },
    pauseCurrent(state) {
      return {
        ...state,
        status: 'paused'
      }
    },
    playCurrent(state) {
      return {
        ...state,
        status: 'playing'
      }
    }
  }
});

export const { setCurrent, playCurrent, pauseCurrent } = playerSlice.actions;

export default playerSlice.reducer;

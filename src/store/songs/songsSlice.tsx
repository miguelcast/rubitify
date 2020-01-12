import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../index';
import { albumSongs as albumSongsService } from '../../services';

export interface Song {
  id: number;
  name: string;
  spotify_url: string;
  duration_ms: string | number;
  preview_url?: string;
  explicit?: 't' | 'f'
}

interface InitialState {
  songs: Song[];
  current?: Song | null;
}

const initialState: InitialState = {
  songs: [],
  current: null
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    songsSuccess(state, action: PayloadAction<Song[]>) {
      return {
        ...state,
        songs: action.payload
      };
    },
    songsClear(state) {
      return {
        ...state,
        songs: []
      };
    },
    setCurrent(state, action: PayloadAction<Song>) {
      return {
        ...state,
        current: action.payload
      }
    }
  }
});

export const { songsClear, songsSuccess, setCurrent } = songsSlice.actions;

export default songsSlice.reducer;

export const fetchSongs = (albumId: number | string): AppThunk => async dispatch => {
  dispatch(songsClear());
  try {
    const response = await albumSongsService(albumId);
    dispatch(songsSuccess(response.data.data));
  } catch (e) {
    console.log('Error songs');
  }
};

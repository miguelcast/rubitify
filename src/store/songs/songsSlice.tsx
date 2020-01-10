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

const initialState: Song[] = [];

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    songsSuccess(state, action: PayloadAction<Song[]>) {
      return action.payload;
    },
    songsClear() {
      return [];
    }
  }
});

export const { songsClear, songsSuccess } = songsSlice.actions;

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

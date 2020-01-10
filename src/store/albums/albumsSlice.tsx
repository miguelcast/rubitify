import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../index';
import { artistAlbums as artistsAlbumsService } from '../../services';

export interface Album {
  id: number;
  name: string;
  image: string;
  total_tracks: number;
}

const initialState: Album[] = [];

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    albumsSuccess(state, action: PayloadAction<Album[]>) {
      return action.payload;
    },
    albumsClear() {
      return [];
    }
  }
});

export const { albumsClear, albumsSuccess } = albumsSlice.actions;

export default albumsSlice.reducer;

export const fetchAlbums = (artistId: number | string): AppThunk => async dispatch => {
  dispatch(albumsClear());
  try {
    const response = await artistsAlbumsService(artistId);
    dispatch(albumsSuccess(response.data.data));
  } catch (e) {
    console.log('Error albums');
  }
};

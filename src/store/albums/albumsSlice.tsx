import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { artistAlbums as artistsAlbumsService } from '../../services';
import { AppThunk } from '../index';
import { RootState } from '../rootReducer';

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

export const albumSelector = (state: RootState, id?: string | null) =>
  state.albums.find(album => album.id.toString() === id);

export const fetchAlbums = (artistId: number | string): AppThunk => async dispatch => {
  dispatch(albumsClear());
  try {
    const response = await artistsAlbumsService(artistId);
    dispatch(albumsSuccess(response.data.data));
  } catch (e) {
    console.log('Error albums');
  }
};

export const fetchAlbumsIfNotExists = (artistId: number):AppThunk =>
  async (dispatch, getState) => {
    const albums = getState().albums;
    try {
      if (!albums || albums?.length === 0) {
        const response = await artistsAlbumsService(artistId);
        dispatch(albumsSuccess(response.data.data));
      }
    } catch (e) {
      console.log('Error album');
    }
  };

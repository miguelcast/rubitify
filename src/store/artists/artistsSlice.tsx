import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../index';
import { artists as artistsService } from '../../services';

export interface Artist {
  id: number;
  name: string;
  image: string;
}

const initialState: Artist[] = [];

const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {
    artistsSuccess(state, action: PayloadAction<Artist[]>) {
      return action.payload;
    },
    artistsError() {
      return [];
    }
  }
});

export const { artistsSuccess, artistsError } = artistsSlice.actions;

export default artistsSlice.reducer;

export const fetchArtists = (): AppThunk => async dispatch => {
  try {
    const response = await artistsService();
    dispatch(artistsSuccess(response.data.data));
  } catch (e) {
    dispatch(artistsError());
  }
};

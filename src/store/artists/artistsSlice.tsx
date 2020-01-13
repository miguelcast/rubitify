import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../index';
import { artists as artistsService, artist as artistService } from '../../services';
import { RootState } from "../rootReducer";

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
    artistAdd(state, action: PayloadAction<Artist>) {
      return [...state, action.payload];
    },
    artistsClear() {
      return [];
    }
  }
});

export const { artistsSuccess, artistAdd, artistsClear } = artistsSlice.actions;

export default artistsSlice.reducer;

export const artistSelector = (state: RootState, id?: string | null) =>
  state.artists.find(artist => artist.id.toString() === id);

export const fetchArtists = (): AppThunk => async dispatch => {
  dispatch(artistsClear());
  try {
    const response = await artistsService();
    dispatch(artistsSuccess(response.data.data));
  } catch (e) {
    console.log('Error artist');
  }
};

export const fetchArtistIfNotExists = (artistId: number):AppThunk =>
  async (dispatch, getState) => {
    const artists = getState().artists;
    let currentArtist = artists.some(artist => artist.id === artistId);
    try {
      if (!currentArtist) {
        const response = await artistService(artistId);
        dispatch(artistAdd(response.data.data));
      }
    } catch (e) {
      console.log('Error artist');
    }
  };

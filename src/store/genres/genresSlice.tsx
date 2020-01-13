import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppThunk } from '../index';
import { setCurrent } from '../player/playerSlice';
import { genres as genresService, genresRandom as genresRandomService } from '../../services';
import { getRandom } from '../../utils/utilities';

const initialState: string[] = [];

const genresSlice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    genresSuccess(state, action: PayloadAction<Array<string>>) {
      return action.payload
    }
  }
});

export const { genresSuccess } = genresSlice.actions;

export default genresSlice.reducer;

export const fetchGenresAndRandom = (): AppThunk => async (dispatch, getState) => {
  let genres = getState().genres;
  try {
    if (!genres || genres.length === 0) {
      const response = await genresService();
      genres = response.data.data;
      dispatch(genresSuccess(genres));
    }
    const randomForGenre = getRandom(genres.length);
    const response = await genresRandomService(genres[randomForGenre]);
    dispatch(setCurrent(response.data.data));
  } catch (e) {
    console.log('Error ' + e.toString());
  }
};

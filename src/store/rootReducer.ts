import { combineReducers } from '@reduxjs/toolkit';

import artistsReducer from './artists/artistsSlice';
import albumsReducer from './albums/albumsSlice';
import songsReducer from './songs/songsSlice';

const rootReducer = combineReducers({
  artists: artistsReducer,
  albums: albumsReducer,
  songs: songsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

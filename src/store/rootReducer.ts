import { combineReducers } from '@reduxjs/toolkit';

import artistsReducer from './artists/artistsSlice';
import albumsReducer from './albums/albumsSlice';
import songsReducer from './songs/songsSlice';
import playerReducer from './player/playerSlice';

const rootReducer = combineReducers({
  artists: artistsReducer,
  albums: albumsReducer,
  songs: songsReducer,
  player: playerReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

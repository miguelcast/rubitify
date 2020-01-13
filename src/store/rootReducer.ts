import { combineReducers } from '@reduxjs/toolkit';

import artistsReducer from './artists/artistsSlice';
import albumsReducer from './albums/albumsSlice';
import songsReducer from './songs/songsSlice';
import playerReducer from './player/playerSlice';
import genresReducer from './genres/genresSlice';

const rootReducer = combineReducers({
  artists: artistsReducer,
  albums: albumsReducer,
  songs: songsReducer,
  player: playerReducer,
  genres: genresReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

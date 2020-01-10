import { combineReducers } from '@reduxjs/toolkit';

import artistsReducer from './artists/artistsSlice';

const rootReducer = combineReducers({
  artists: artistsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

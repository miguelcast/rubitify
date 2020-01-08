import { createStore, combineReducers } from 'redux';

const textReducer = (state: string = '', action: { type: string, payload: string }): string => state;

const rootReducers = combineReducers({
  text: textReducer
});

export type AppState = ReturnType<typeof rootReducers>

const initialState = {};

const store = createStore(rootReducers, initialState);

export default store;

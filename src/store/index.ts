import { Action, combineReducers, configureStore } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';

import appSlice from './slices/appSlice';

const rootReducer = combineReducers({
  app: appSlice
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export default store;

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { LangEnum } from '@src/types';

import { AppThunk, RootState } from '..';

export type appSliceStateType = {
  isLoading: boolean;
  error: string;
  favoritesList: string[];
  language: LangEnum;
};

const initialState: appSliceStateType = {
  isLoading: false,
  error: '',
  favoritesList: [],
  language: 'ru'
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setFavoriteItems: (state, action: PayloadAction<string[]>) => {
      state.favoritesList = action.payload;
    },
    setLanguage: (state, action: PayloadAction<LangEnum>) => {
      state.language = action.payload;
    }
  }
});

export const handleFavoriteItem =
  (payload: string): AppThunk =>
  async (dispatch, getState) => {
    const { favoritesList } = getState().app;
    const isExistItem = favoritesList.find((id) => id === payload);
    const list = isExistItem
      ? favoritesList.filter((id) => id !== payload)
      : [...favoritesList, payload];

    dispatch(setFavoriteItems(list));
  };

export const { setLoading, setError, setFavoriteItems, setLanguage } =
  appSlice.actions;

export const appSelector = (state: RootState) => state.app;

export default appSlice.reducer;

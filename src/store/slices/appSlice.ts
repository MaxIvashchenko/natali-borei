import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { LangEnum, ShopItem } from '@src/types';

import { AppThunk, RootState } from '..';

export type appSliceStateType = {
  isLoading: boolean;
  error: string;
  favoritesList: ShopItem[];
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
    setFavoriteItems: (state, action: PayloadAction<ShopItem[]>) => {
      state.favoritesList = action.payload;
    },
    addFavoriteItem: (state, action: PayloadAction<ShopItem>) => {
      state.favoritesList = [...state.favoritesList, action.payload];
    },
    setLanguage: (state, action: PayloadAction<LangEnum>) => {
      state.language = action.payload;
    }
  }
});

export const deleteFavoriteItem =
  (payload: string): AppThunk =>
  async (dispatch, getState) => {
    const { favoritesList } = getState().app;

    const list = favoritesList.filter(({ id }) => id !== payload);
    dispatch(setFavoriteItems(list));
  };

export const {
  setLoading,
  setError,
  setFavoriteItems,
  addFavoriteItem,
  setLanguage
} = appSlice.actions;

export const appSelector = (state: RootState) => state.app;

export default appSlice.reducer;

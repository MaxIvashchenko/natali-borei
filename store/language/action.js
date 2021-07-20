import { SET_LANG } from './type'

export const setLang = (lang) => (dispatch) => dispatch(
  {
    type: SET_LANG,
    payload: lang
  }
);

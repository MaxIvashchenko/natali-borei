import { SET_TITLE } from './type'

//Action Creator
export const setTitle = (value) => (dispatch) => dispatch(
  {
    type: SET_TITLE,
    payload: value
  }
);


import { SET_TITLE } from './type'

//Action Creator
export const setTitle = (value) => (dispatch) => {


  return dispatch({
    type: SET_TITLE,
    payload: value
  });
};

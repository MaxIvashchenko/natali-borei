import { SET_COLLECTION } from './type'

//Action Creator
export const setCollection = (value) => (dispatch) => dispatch(
  {
    type: SET_COLLECTION,
    payload: value
  }
);


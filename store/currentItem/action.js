import { SET_ITEM, DELETE_ITEM } from './type'

//Action Creator
export const setItem = (value) => (dispatch) => dispatch(
  {
    type: SET_ITEM,
    payload: value
  }
);

export const deleteItem = () => (dispatch) => dispatch(
  { type: DELETE_ITEM }
);


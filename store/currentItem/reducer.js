import { SET_ITEM, DELETE_ITEM } from './type'

const INIT_STATE = {};

export default function currentItemReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case SET_ITEM:
      return action.payload;
    case DELETE_ITEM:
      return INIT_STATE;
    default:
      return state;
  }
};
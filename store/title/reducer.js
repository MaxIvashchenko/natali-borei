import { SET_TITLE } from './type'

const INIT_STATE = 'necklace';

export default function titleReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case SET_TITLE:
      return action.payload ;
    default:
      return state;
  }
};
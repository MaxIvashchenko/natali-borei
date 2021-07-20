import { SET_LANG } from './type'

const INIT_STATE = 'en';

export default function currentItemReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case SET_LANG:
      return action.payload;
    default:
      return state;
  }
};
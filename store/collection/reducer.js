import { SET_COLLECTION } from './type'

const INIT_STATE = '';

export default function collectionReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case SET_COLLECTION:
      return action.payload ;
    default:
      return state;
  }
};
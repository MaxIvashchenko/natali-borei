//Action Types
import { SET_TITLE } from '../types'


//Action Creator
export const setTitle = (value) => ({
    type: SET_TITLE,
    payload: value
});

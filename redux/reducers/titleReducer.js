import { SET_TITLE } from '../types'


const INIT_STATE = 'necklace'

const titleReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case SET_TITLE:
            return action.payload;
        default:
            return state;
    }
};

export default titleReducer;
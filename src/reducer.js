import { Action } from './actions';

const initialState = {
    isWaiting: false,
    memories: [],
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case Action.LoadMemories:
            return {
                ...state,
                memories: action.payload,
            }
        default:
                return state;
    }
}

export default reducer;
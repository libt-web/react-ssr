import { GET_LIST } from '../action/actionType';

const defaultState = {
    apps: []
}

export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case GET_LIST: {
            return {
                ...state,
                apps: action.apps
            }
        }
        default: return state;
    }
}
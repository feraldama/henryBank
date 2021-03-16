import {TRANSFER,INFO_TRANFER} from '../actions_types';

const initialState = {
    dataTransfer: [],
    infoTransfer: {}
}

export default function transferReducer(state=initialState, action){
    switch(action.type){
        case TRANSFER:
        return {
            ...state,
            dataTransfer: action.payload
        }
        case INFO_TRANFER:
        return {
            ...state,
            infoTransfer: action.payload
        }

        default:
            return state;
    }
}

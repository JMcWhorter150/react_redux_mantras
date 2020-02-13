import { ADD_MANTRA } from "./actions";

const defaultState = [];

function mantras(state=defaultState, action) {
    const newState = [...state];

    switch (action.type) {
        case ADD_MANTRA:
            newState.push(action.payload);
            break;
        default:
            break;
    }
    return newState;
}

export default mantras;

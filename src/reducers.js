import { ADD_MANTRA, SELECT_MANTRA } from "./actions";

const defaultState = {
    mantras:[],
    currentMantra: 0,
};

function mantras(state=defaultState, action) {
    const newState = { mantras: [...state.mantras], currentMantra:state.currentMantra};
    switch (action.type) {
        case ADD_MANTRA:
            newState.mantras.push(action.payload.mantra);
            break;
        case SELECT_MANTRA:
            newState.currentMantra = action.payload;
        default:
            break;
    }
    return newState;
}

export default mantras;

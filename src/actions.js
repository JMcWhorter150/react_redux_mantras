export const ADD_MANTRA = 'ADD_MANTRA';
export const SELECT_MANTRA = "SELECT_MANTRA"

export function actionAddMantra(mantra) {
    return {
        type: ADD_MANTRA,
        payload: {
            mantra
        }
    }
}

export function actionSelectMantra(id) {
    return {
        type: SELECT_MANTRA,
        payload: id
    }
}
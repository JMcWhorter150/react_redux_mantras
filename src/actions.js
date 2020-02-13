export const ADD_MANTRA = 'ADD_MANTRA';

export function actionAddMantra(mantra) {
    return {
        type: ADD_MANTRA,
        payload: {
            mantra
        }
    }
}
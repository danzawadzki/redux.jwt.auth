import {alertConstants} from "../constants/alert.constants";

/**
 * The alert reducer.
 *
 * @param state - The reducer state.
 * @param action - The action to be dispatched.
 * @returns {*}
 */
export const alert = (state = {}, action) => {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                ...state,
                type: 'alert-success',
                message: action.message
            };
        case alertConstants.ERROR:
            return {
                ...state,
                type: 'alert-danger',
                message: action.message
            };
        case alertConstants.CLEAR:
            return {};
        default:
            return state
    }
};
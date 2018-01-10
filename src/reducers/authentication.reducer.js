import {userConstants} from "../constants/user.constants";

/** Checking local storage */
let user = localStorage.getItem(userConstants.LOGIN_JWT);

/** Initial state */
const initialState = user ? {loggedIn: true, user} : {logging_pending: false};

/**
 * The authentication reducer.
 *
 * @param state - The reducer state.
 * @param action - The action to be dispatched.
 * @returns {*}
 */
export const authentication = (state = initialState, action) => {
    switch (action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                logging_pending: true,
                user: action.user
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                logging_pending: false,
                user: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {};
        case userConstants.LOGOUT:
            return {};
        default:
            return state;
    }
}
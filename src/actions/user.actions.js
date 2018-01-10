import {userConstants} from "../constants/user.constants";
import {userServices} from "../services/user.services";
import {alertConstants} from "../constants/alert.constants";

/**
 * Action to login user.
 *
 * @param username - The user name.
 * @param password - The user password.
 * @returns {function(*)}
 */
const login = (username, password) => async dispatch => {
    /** Initialize login request */
    dispatch({type: userConstants.LOGIN_REQUEST});

    try {
        let response = await userServices.login(username, password);
        let data = await response.json();
        let token = data.token;
        localStorage.setItem(userConstants.LOGIN_JWT, token);

        console.info("user_jwt has been added to the local storage.")

        /** Dispatching action on login success */
        dispatch({type: userConstants.LOGIN_SUCCESS, token})
    } catch (e) {

        /** Dispatching action on login failure */
        dispatch({type: userConstants.LOGIN_FAILURE, e})
        dispatch({type: alertConstants.ERROR(e)});
    }

};

/**
 * Action to logout user.
 */
const logout = dispatch => {
    userServices.logout();
    dispatch({type: userConstants.LOGOUT});
};

/**
 * Action to fetch data.
 */
const getAll = () => {

}

/**
 * Contains redux public actions for actions related to the users.
 *
 * @type {{login: function(*=, *=): function(*), logout: function(), getAll: function()}}
 */
export const userActions = {
    login,
    logout,
    getAll
};
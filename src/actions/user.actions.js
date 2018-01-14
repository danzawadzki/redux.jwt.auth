import {userConstants} from "../constants/user.constants";
import {userServices} from "../services/user.services";
import {alertConstants} from "../constants/alert.constants";
import {history} from "../router/history.router";

/**
 * Action to login user.
 *
 * @param {String} username - The user name.
 * @param {String} password - The user password.
 * @returns {function(*)}
 */
export const login = (username, password) => async dispatch => {
    /** Initialize login request */
    dispatch({type: userConstants.LOGIN_REQUEST});
    dispatch({type: alertConstants.CLEAR});

    try {
        let response = await userServices.login(username, password);
        let data = await response.json();
        let token = data.token;
        if(!token) throw "Missing token";
        localStorage.setItem(userConstants.LOGIN_JWT, token);

        /** Dispatching action on login success */
        dispatch({type: userConstants.LOGIN_SUCCESS, user: token});
        history.push("/");
    } catch (e) {

        /** Dispatching action on login failure */
        dispatch({type: alertConstants.ERROR, message: e});
        dispatch({type: userConstants.LOGIN_FAILURE, message: e});

    }

};

/**
 * Action to logout user.
 */
export const logout = dispatch => {
    userServices.logout();
    dispatch({type: userConstants.LOGOUT});
};

/**
 * Action to fetch data.
 */
export const getAll = () => {

}

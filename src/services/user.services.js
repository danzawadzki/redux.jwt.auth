import {apiConstants} from "../constants/api.constants";
import {userConstants} from "../constants/user.constants";

export const login = (username, password) => {

    /** Request body - to simplify development process */
    const request = {
        email: username,
        password: password
    };

    /** Fetching data */
    return fetch(`${apiConstants.url}/api/login`, {
        method: "POST",
        body: JSON.stringify(request),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
};

export const logout = () => {
    localStorage.removeItem(userConstants.LOGIN_JWT);
};

export const getAll = () => {

};

export const userServices = {
    login,
    logout,
    getAll
};
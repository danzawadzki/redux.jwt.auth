import {apiConstants} from "../constants/api.constants";
import {userConstants} from "../constants/user.constants";

const login = (username, password) => {

    /** Request body - to simplify development process */
    const request = {
        email: "peter@klaven",
        password: "cityslicka"
    };

    /** Fetching data */
    return fetch(`${apiConstants.url}/api/login`, {
        method: "POST",
        body: JSON.stringify(request),
        headers: new Headers({"content-type": "application/json"})
    })
};

const logout = () => {
    localStorage.removeItem(userConstants.LOGIN_JWT);
};

const getAll = () => {

};

export const userServices = {
    login,
    logout,
    getAll
};
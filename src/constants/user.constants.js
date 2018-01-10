/**
 * The user constants object contains the redux user action types.
 *
 * @type {{LOGIN_REQUEST: string, LOGIN_SUCCESS: string, LOGIN_FAILURE: string, LOGOUT: string, GETALL_REQUEST: string, GETALL_SUCCESS: string, GETALL_FAILURE: string}}
 */
export const userConstants = {
    LOGIN_REQUEST: 'USER_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    LOGIN_FAILURE: 'USER_LOGIN_FAILURE',
    LOGIN_JWT: 'LOGIN_JWT',

    LOGOUT: 'USER_LOGOUT',

    GETALL_REQUEST: 'USERS_GETALL_REQUEST',
    GETALL_SUCCESS: 'USERS_GETALL_SUCCESS',
    GETALL_FAILURE: 'USERS_GETALL_FAILURE'
};
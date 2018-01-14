import {alertConstants} from "../constants/alert.constants";

/**
 * Action to display success alert.
 *
 * @param {String} message - The alert message.
 * @returns {{type: string, message: *}}
 */
export const success = message => {
    return {
        type: alertConstants.SUCCESS, message
    }
};

/**
 * Action to display error alert.
 *
 * @param {String} message - The alert message.
 * @returns {{type: string, message: *}}
 */
export const error = message => {
    return {
        type: alertConstants.ERROR, message
    }
};

/**{String}
 * Action to clear alert.
 *
 * @returns {{type: string}}
 */
export const clear = () => {
    return {
        type: alertConstants.CLEAR
    }
};

/**
 * Contains redux public actions for actions related to the alerts.
 *
 * @type {{success: function(*), error: function(*), clear: function()}}
 */
export const alertActions = {
    success,
    error,
    clear
};
import * as React from "react";
import PropTypes from "prop-types";

/**
 * The notification alert component.
 *
 * @param {String} message - The notification message.
 * @param {String} type - The notification type.
 * @param {Function} handleClose - The handler to clear icon onClick event.
 * @constructor
 */
const Notification = ({message, type = "primary", handleClose}) => (
    <div className={`alert ${type}`} role="alert">
        {message}

        {/* Close button */}
        <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={handleClose}>
            <span aria-hidden="true">&times;</span>
        </button>
    </div>

);

/** PropTypes */
Notification.propTypes = {
    message: PropTypes.string.isRequired,
    handleClose: PropTypes.string.isRequired,
    type: PropTypes.string
};
export default Notification;
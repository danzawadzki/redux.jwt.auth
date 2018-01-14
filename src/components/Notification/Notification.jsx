import * as React from "react";


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
export default Notification;
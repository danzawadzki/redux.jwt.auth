import * as React from "react";
import PropTypes from "prop-types";
import "./Layout.css";

/**
 * The form type layout. Contains one vertically and horizontally centered container.
 *
 * @param {Number} width - Width of the form in columns (default 4).
 * @param children - The child nodes.
 * @constructor
 */
const LayoutForm = ({width = 5, children}) => (
    <div className="container container__form">
        <div className="row row__form--h100 justify-content-center align-items-center">
            <div className={`col-lg-${width}`}>
                <div className="form form--shadow">
                    {children}
                </div>
            </div>
        </div>
    </div>
);

/** PropTypes */
LayoutForm.propTypes = {
    width: PropTypes.number,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default LayoutForm;

import * as React from "react";
import PropTypes from "prop-types";

/**
 * The button component.
 *
 * @param {String} text - The button text.
 * @param {String} type - The button type attribute.
 * @param {String} color - The button color.
 * @param {('sm'|'lg')} size - The button size (bootstrap).
 * @param {Function} handleClick
 * @constructor
 */
const Button = ({text, type = "button", color = "primary", size, handleClick}) => (

    <button type={type}
            onClick={handleClick}
            className={`btn btn-${color} btn-${size}`}>
        {text}
    </button>

);

/** PropTypes */
Button.propTypes = {
    text: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    size: PropTypes.string,
    type: PropTypes.string
};

export default Button;


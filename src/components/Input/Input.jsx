import * as React from "react";
import PropTypes from "prop-types";

/**
 * The input component.
 *
 * @param {String} id - The input id attribute.
 * @param {String} type - The input type attribute (default is text).
 * @param {Function} handleChange - The handler to input onChange event.
 * @param {String} placeholder - The input placeholder attribute.
 * @constructor
 */
const Input = ({id, type = "text", handleChange, placeholder}) => (
    <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        aria-label={placeholder}
        onChange={handleChange}
        id={id}/>
);

/** PropTypes */
Input.propTypes = {
    id: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string
};

export default Input;

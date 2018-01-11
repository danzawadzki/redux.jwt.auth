import * as React from "react";
import PropTypes from "prop-types";

/**
 * The input component with label above and option small description under.
 *
 * @param id - The input id attribute.
 * @param type - The input type attribute (default is text).
 * @param handleChange - The handler to input onChange ev
 * @param placeholder - The input placeholder attribute.
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

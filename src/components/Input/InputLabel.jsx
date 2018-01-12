import * as React from "react";
import Input from "./Input";
import PropTypes from "prop-types";

/**
 * The input component with label above and option small description under.
 *
 * @param {String} label - The input label.
 * @param {String} id - The input id attribute.
 * @param {String} type - The input type attribute (default is text).
 * @param {Function} handleChange - The handler to input onChange event.
 * @param {String} placeholder - The input placeholder attribute.
 * @param {String} idLabelSmall - The id attribute for small additional label under the input.
 * @param {String} textLabelSmall - The text content for small additional label under the input.
 * @param {String} classLabelSmall - The class name attribute for small additional label under the input.
 * @returns {XML}
 * @constructor
 */
const InputLabel = ({label, id, type, handleChange, placeholder, idLabelSmall, textLabelSmall, classLabelSmall}) => {

    /** Optional small label under the input */
    const smallLabel = (
        <small id={idLabelSmall}
               className={`form-text text-muted ${classLabelSmall}`}>
            {textLabelSmall}
        </small>
    );

    return (
        <div className="form-group">

            {/* Label */}
            <label htmlFor={id}>
                {label}
            </label>

            {/* Input */}
            <Input id={id}
                   type={type}
                   handleChange={handleChange}
                   placeholder={placeholder}/>

            {/* Small label */}
            {textLabelSmall && smallLabel}

        </div>
    )
};

/** PropTypes */
InputLabel.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    idLabelSmall: PropTypes.string,
    textLabelSmall: PropTypes.string,
    classLabelSmall: PropTypes.string
};

export default InputLabel

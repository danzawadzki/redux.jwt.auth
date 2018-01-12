import * as React from "react";
import "./Loader.css";

/**
 * Loader spinner component.
 *
 * @constructor
 */
const LoaderSpinner = () => (
    <div className="spinner">
        <div className="bounce1"/>
        <div className="bounce2"/>
        <div className="bounce3"/>
    </div>
);

/** PropTypes */
LoaderSpinner.propTypes = {};

export default LoaderSpinner;




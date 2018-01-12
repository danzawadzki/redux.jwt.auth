import * as React from "react";
import "./Loader.css";
import LoaderSpinner from "./LoaderSpinner";

/**
 * Loader form component. Additional layer filling parent container.
 *
 * @constructor
 */
const LoaderForm = () => (
    <div className="loaderForm d-flex justify-content-center align-items-center">
        <LoaderSpinner/>
    </div>
);

/** PropTypes */
LoaderForm.propTypes = {};

export default LoaderForm;
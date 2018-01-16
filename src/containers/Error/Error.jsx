import * as React from "react"
import LayoutForm from "../../components/Layout/LayoutForm";
import Button from "../../components/Button/Button";
import {history} from "../../router/history.router";

/**
 * The error view container.
 *
 * @constructor
 */
const Error = () => (
    <LayoutForm width={4}>
        <form className="text-center">
            <h1 className="display-1">401</h1>
            <p className="text-center">Page not found.</p>
            <Button text="Go back" handleClick={history.goBack}/>
        </form>
    </LayoutForm>
);

/** PropTypes */
Error.propTypes = {};

export default Error;
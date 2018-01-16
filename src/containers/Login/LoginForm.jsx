import * as React from "react";
import InputLabel from "../../components/Input/InputLabel";
import Button from "../../components/Button/Button";

/**
 * The login form presentational component.
 *
 * @param {Function} handleChange - The handler to onChange event.
 * @param {Function} handleSubmit - The handler to onSubmit event.
 * @constructor
 */
const LoginForm = ({handleChange, handleSubmit}) => (
    <form onSubmit={handleSubmit}>
        <InputLabel
            id="userEmail"
            label="Email"
            placeholder="test"
            handleChange={handleChange}/>
        <InputLabel
            id="userPassword"
            label="Password"
            placeholder="test"
            handleChange={handleChange}/>
        <Button
            text="submit"
            type="submit"
            handleClick={handleSubmit}/>
        Forgot password? Register
    </form>
);

/** PropTypes */
LoginForm.propTypes = {};

export default LoginForm;
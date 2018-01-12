import * as React from "react";
import {connect} from "react-redux";
import LayoutForm from "../../components/Layout/LayoutForm";
import LoginForm from "./LoginForm";
import {login} from "../../actions/user.actions";
import {handleChange} from "../../helpers/handler.helpers";
import LoaderForm from "../Loader/LoaderForm";

/**
 * The login view container.
 */

class Login extends React.Component {

    /** Handler to onSubmit event */
    handleSubmit = e => {
        e.preventDefault();

        const {userEmail, userPassword} = this.state;
        const {login} = this.props;
        login(userEmail, userPassword);
    };

    constructor(props) {
        super(props);

        this.state = {
            userEmail: null,
            userPassword: null
        };

        this.handleChange = handleChange.bind(this);
    }

    render() {
        return (
            <LayoutForm>

                {/* Loader */}
                {this.props.logging_pending && <LoaderForm/>}

                {/* Login Form */}
                <LoginForm
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}/>

            </LayoutForm>

        )
    }
}

/**
 * Mapping redux state to props.
 *
 * @param {Object||Array} state - The redux state.
 * @returns {{logging_pending: *}}
 */
const mapStateToProps = state => {
    const {logging_pending} = state.authentication;
    console.log(state);
    return {logging_pending}
};

/** PropTypes */
Login.propTypes = {};

export default connect(mapStateToProps, {login})(Login);
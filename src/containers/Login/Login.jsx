import * as React from "react";
import {connect} from "react-redux";
import {userConstants} from "../../constants/user.constants";
import {userActions} from "../../actions/user.actions";

// const Login = () => (
//     <h1>Login</h1>
// );
//
// export default Login;

class Login extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                {this.props.logging_pending ? "LOADING..." : ""}
                <button value="LOGIN" onClick={()=>this.props.dispatch(userActions.login("a","a"))}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {logging_pending} = state.authentication;
    return {logging_pending}
};

export default connect(mapStateToProps)(Login);
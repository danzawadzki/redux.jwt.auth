import * as React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {userConstants} from "../constants/user.constants";

/**
 *
 * @param Component
 * @param rest
 * @returns {XML}
 * @constructor
 */
const PrivateRouter = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            localStorage.getItem(userConstants.LOGIN_JWT)
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
        )}/>
    )
};

export default PrivateRouter;
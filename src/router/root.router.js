import * as React from "react";
import {Route, Router} from "react-router-dom";
import {createBrowserHistory} from "history";
import GuestRouter from "./guest.router";
import AuthRouter from "./auth.router";
import {userConstants} from "../constants/user.constants";

const rootRouter = () => {
    const history = createBrowserHistory();

    return (
        <Router history={history}>
            <Route render={() => (
                localStorage.getItem(userConstants.LOGIN_JWT)
                    ? <AuthRouter/>
                    : <GuestRouter/>
            )}/>
        </Router>
    )
};

export default rootRouter;
import * as React from "react";
import {Route, Router} from "react-router-dom";
import GuestRouter from "./guest.router";
import AuthRouter from "./auth.router";
import {userConstants} from "../constants/user.constants";
import {history} from "./history.router";

/**
 * Root router
 * Checks if user is logged in and renders appropriate router.
 */
const rootRouter = () => (
    <Router history={history}>
        <Route render={() => (
            localStorage.getItem(userConstants.LOGIN_JWT)
                ? <AuthRouter/>
                : <GuestRouter/>
        )}/>
    </Router>
);

export default rootRouter;
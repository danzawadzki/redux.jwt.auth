import * as React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "../containers/HomePage/HomePage";
import Error from "../containers/Error/Error";

/**
 * Authorized router
 * Checks if user is logged in and renders appropriate router.
 */
const authRouter = () => (
    <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="*" component={Error}/>
    </Switch>
);

export default authRouter;
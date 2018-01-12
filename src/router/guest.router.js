import * as React from "react";
import {Route, Switch} from "react-router-dom";
import Login from "../containers/Login/Login";
import Error from "../containers/Error/Error";

/**
 * Guest router
 * Checks if user is not logged in and renders appropriate router.
 */
const guestRouter = () => (
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="*" component={Error}/>
    </Switch>
);

export default guestRouter;
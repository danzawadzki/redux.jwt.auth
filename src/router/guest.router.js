import * as React from "react";
import {Route, Switch} from "react-router-dom";
import Login from "../containers/Login/Login";
import Error from "../containers/Error/Error";

const guestRouter = () => (
    <Switch>
        <Route exact path="/" component={Login}/>
        <Route path="*" component={Error}/>
    </Switch>
);

export default guestRouter;
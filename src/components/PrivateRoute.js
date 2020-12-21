import React from "react";
import { Route, Redirect } from "react-router";
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={props => (
        auth ? (
            <Component {...props} />
        ) : (
                <Redirect to="/sign-in" />
            )
    )} />
)
export default PrivateRoute
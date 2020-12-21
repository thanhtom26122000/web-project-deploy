import React from "react";
import { Route, Redirect } from "react-router";
const AuthRoute = ({ component: Component, auth, ...rest }) => (
    <Route {...rest} render={props => (
        !auth ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />
)
export default AuthRoute
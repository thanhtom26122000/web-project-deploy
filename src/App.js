import React, { useEffect } from 'react';
import Account from './pages/Account';
import LandingPage from './pages/LandingPage';
import { Route, Switch } from 'react-router';
import PrivateRoute from "./components/PrivateRoute"
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AuthRoute from './components/AuthRoute';
import { checkIsLogIn } from './redux/actions/auth';
import { connect } from 'react-redux';
import Modal from "./components/Modal"
import ReactGA from 'react-ga';
ReactGA.initialize("G-D5T80E8443");
const App = ({ checkIsLogIn = () => { }, authReducer }) => {
    useEffect(() => {
        checkIsLogIn()
    }, [checkIsLogIn])
    useEffect(() => {
        console.log("123")
        ReactGA.pageview("/")
    })
    if (!authReducer.isLoaded || authReducer.loading) {
        return (
            <Modal show={true}></Modal>
        )
    }
    return (
        <div style={{ height: "100%" }}>
            <Switch>
                <Route exact path="/">
                    <LandingPage auth={authReducer.isLogin}></LandingPage>
                </Route>
                <PrivateRoute path="/account/:child" pathRedirect="/sign-in" component={Account} auth={authReducer.isLogin}></PrivateRoute>
                <AuthRoute exact path="/sign-in" component={SignIn} auth={authReducer.isLogin}></AuthRoute>
                <AuthRoute exact path="/sign-up" component={SignUp} auth={authReducer.isLogin}></AuthRoute>
            </Switch>
        </div>

    );
}
const mapStateToProps = (state) => ({
    authReducer: state.authReducer,
})
const mapDispatchToProps = (dispatch) => ({
    checkIsLogIn: () => dispatch(checkIsLogIn())
})
export default connect(mapStateToProps, mapDispatchToProps)(App);

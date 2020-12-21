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

const App = ({ checkIsLogIn = () => { }, authReducer }) => {
    useEffect(() => {
        checkIsLogIn()
    }, [checkIsLogIn])
    console.log(authReducer, "xxx loading")
    if (!authReducer.isLoaded || authReducer.loading) {
        return (
            <Modal show={true}></Modal>
        )
    }
    return (
        <div style={{ height: "100%" }}>
            <Switch>
                <Route exact path="/" component={LandingPage}></Route>
                <PrivateRoute path="/account/:child" component={Account} auth={authReducer.isLogin}></PrivateRoute>
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

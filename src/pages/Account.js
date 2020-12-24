import { Grid } from "@material-ui/core";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import ControlTab from "../components/ControlTab";
import Header from "../components/Header";
import Profile from "../components/Profile";
import "../resources/scss/account.scss";
import AddProperty from "../components/AddProperty"
import Favorites from "../components/Favorites";
import AlertDialog from "../components/AlertDialog";
import { connect } from "react-redux";
import ListPropery from "../components/ListProperty";
import ListAccount from "../components/ListAccount";
const Account = ({ userReducer }) => {
    const { url } = useRouteMatch()
    console.log("123 userReducer", userReducer)
    // console.log(p)
    console.log(userReducer.typeAccount)
    return (
        <>
            <Header image={userReducer.imagePath}></Header>
            <Grid container style={{ height: "calc(100% - 89px)" }}>
                <Grid item xs={2} style={{ borderRight: "1px solid #E4E4E4" }} >
                    <ControlTab image={userReducer.imagePath} typeAccount={userReducer.typeAccount} ></ControlTab>
                </Grid>
                <Grid item xs={10}>
                    {!userReducer.status && url === "/account/add-property" ? <AlertDialog></AlertDialog> : null}
                    {userReducer.typeAccount === 1 ? (
                        <Switch>
                            <Route path={`/account/my-profile`} render={() => <Profile status={userReducer.status}></Profile>} >
                            </Route>
                            <Route path="/account/add-property" component={AddProperty}></Route>
                            <Route exact path="/account/favorites" component={Favorites}></Route>
                            <Route path="/account/list-property" component={ListPropery}></Route>
                        </Switch>
                    ) :
                        (
                            <Switch>
                                <Route path="/account/admin/add-property" component={AddProperty}></Route>
                                <Route path="/account/admin/list-account" component={ListAccount}></Route>
                                <Route path="/account/admin/list-real-estate" component={AddProperty}></Route>
                            </Switch>
                        )}
                </Grid>
            </Grid>
        </>
    )
}
const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})
export default connect(mapStateToProps, null)(Account)
import { Grid } from "@material-ui/core";
import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import ControlTab from "../components/ControlTab";
import Header from "../components/Header";
import Profile from "../components/Profile";
import "../resources/scss/account.scss";
import AddProperty from "../components/AddProperty"
import Favorites from "../components/Favorites";
import PrivateRoute from "../components/PrivateRoute";
import AlertDialog from "../components/AlertDialog";
const Account = ({ status, imagePath }) => {
    const { url } = useRouteMatch()
    console.log("xxx ", status, "path ", imagePath)
    console.log()

    return (
        <>
            <Header image={imagePath}></Header>
            <Grid container style={{ height: "calc(100% - 89px)" }}>
                <Grid item xs={2} style={{ borderRight: "1px solid #E4E4E4" }} >
                    <ControlTab image={imagePath} ></ControlTab>
                </Grid>
                <Grid item xs={10}>
                    {!status && url === "/account/add-property" ? <AlertDialog></AlertDialog> : null}
                    <Switch>
                        <Route path={`/account/my-profile`} render={() => <Profile status={status}></Profile>} >

                        </Route>
                        <Route path="/account/add-property" component={AddProperty}></Route>
                        <Route path={`/account/favorites`} component={Favorites}></Route>
                    </Switch>
                </Grid>
            </Grid>
        </>
    )
}
export default Account
import { Grid } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router";
import ControlTab from "../components/ControlTab";
import Header from "../components/Header";
import Profile from "../components/Profile";
import "../resources/scss/account.scss";
import AddProperty from "../components/AddProperty"
import Favorites from "../components/Favorites";
const Account = () => {
    return (
        <>
            <Header></Header>
            <Grid container style={{ height: "calc(100% - 89px)" }}>
                <Grid item xs={2} style={{ borderRight: "1px solid #E4E4E4" }} >
                    <ControlTab></ControlTab>
                </Grid>
                <Grid item xs={10}>
                    <Switch>
                        <Route exact path="/my-profile" component={Profile}></Route>
                        <Route exact path="/add-property" component={AddProperty}></Route>
                        <Route exact path="/favorites" component={Favorites}></Route>
                    </Switch>
                </Grid>
            </Grid>
        </>

    )
}
export default Account
import { Container, makeStyles, Grid, FormControl, InputLabel, Select, MenuItem, TextField, Slider, Button, Slide } from "@material-ui/core";
import React from "react";
import "../resources/scss/landing-page.scss";
import logo from "../resources/images/logo.png"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItem from "../components/ListItem";
import { useHistory } from "react-router";
import Config from "../Config"
import { useEffect } from "react";
import ButtonCustom from "../components/ButtonCustom";
import Search from "../components/Search";
const useStyles = makeStyles({
    accountIcon: {
        color: "white",
        fontSize: "30px",
        cursor: "pointer",
        "&:hover": {
            opacity: "0.6"
        }
    },
    containerNavigation: {
        display: "flex",
        position: "relative",
        padding: "20px",
        alignItems: "center",
        justifyContent: "space-between"
    },
    logo: {
        cursor: "pointer"
    },
    gridContainer: {
        marginTop: "auto",
        marginBottom: "100px",
        backgroundColor: "transparent"
    },
    select: {
        minWidth: "200px"
    }
})
const LandingPage = ({ auth }) => {
    console.log("xx auth", auth)
    const classes = useStyles();
    const history = useHistory()

    return (
        <div style={{ backgroundColor: "#f7f7f7" }}>
            <header className="header">
                <div className="image-opacity"></div>
                <Container>
                    <div className={classes.containerNavigation}>
                        <img src={logo} alt="logo" className={classes.logo}></img>
                        {auth ? <img src={Config.BASE_URL + "/images/default_user_small.png"} alt="avatar" style={{ height: "45px", width: "45px", borderRadius: "50%" }} /> : <AccountCircleIcon onClick={() => history.push("/sign-in")} className={classes.accountIcon}></AccountCircleIcon>}
                    </div>
                </Container >
                <div className="header-title">
                    <h1>Find the Perfect Home</h1>
                    <span>stop looking. start finding with wpresidence</span>
                </div>
            </header>
            <Search></Search>
            <ListItem Search={false}></ListItem>
        </div >

    )
}

export default LandingPage
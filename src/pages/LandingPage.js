import { Container, makeStyles, Grid, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import React from "react";
import "../resources/scss/landing-page.scss";
import logo from "../resources/images/logo.png"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItem from "../components/ListItem";
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
const LandingPage = ({ }) => {
    const classes = useStyles()
    return (
        <div style={{ backgroundColor: "#f7f7f7" }}>
            <header className="header">
                <div className="image-opacity"></div>
                <Container>
                    <div className={classes.containerNavigation}>
                        <img src={logo} alt="logo" className={classes.logo}></img>
                        <AccountCircleIcon className={classes.accountIcon}></AccountCircleIcon>
                    </div>
                </Container >
                <div className="header-title">
                    <h1>Find the Perfect Home</h1>
                    <span>stop looking. start finding with wpresidence</span>
                </div>
            </header>
            <Container style={{ marginTop: "20px", display: "flex", justifyContent: "space-between" }}>
                <FormControl variant="outlined" style={{ margin: "8px" }}>
                    <InputLabel id="demo-simple-select-required-label-1">Quận</InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label-1"
                        // value={age}
                        // onChange={handleChange}
                        label="Age"
                        className={classes.select}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" style={{ margin: "8px" }}>
                    <InputLabel id="demo-simple-select-required-label-2">Huyện</InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label-2"
                        // value={age}
                        // onChange={handleChange}
                        label="Age"
                        className={classes.select}

                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" style={{ margin: "8px" }}>
                    <InputLabel id="demo-simple-select-required-label-3">Loại</InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label-3"
                        // value={age}
                        // onChange={handleChange}
                        label="Age"
                        className={classes.select}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" style={{ margin: "8px" }}>
                    <InputLabel id="demo-simple-select-required-label-3">Số giường ngủ</InputLabel>
                    <Select
                        labelId="demo-simple-select-required-label-3"
                        // value={age}
                        // onChange={handleChange}
                        label="Age"
                        className={classes.select}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Container>
            <ListItem></ListItem>
        </div>

    )
}
export default LandingPage 
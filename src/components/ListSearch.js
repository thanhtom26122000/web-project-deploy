import { Button, Container, makeStyles, Slider, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Header from "./Header";
import ListItems from "./ListItem";
import Search from "./Search";
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
const ListSearch = ({ image, typeAccount }) => {
    const classes = useStyles();
    useEffect(() => {

    })

    return (
        <div style={{ backgroundColor: "#f7f7f7" }}>
            <Header image={image} typeAccount={typeAccount}></Header>
            <Search></Search>
            <ListItems search={true}></ListItems>
        </div>

    )
}
export default ListSearch
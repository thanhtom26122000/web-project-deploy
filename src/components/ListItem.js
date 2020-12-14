import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import test1 from "../resources/images/test1.jpg";
const useStyles = makeStyles({
    container: {
        marginTop: "20px",
    },
    imageContainer: {
        overflow: "hidden",
        position: "relative",
    },
    img: {
        transition: "all 0.7s ease",
        filter: "brightness(90%)",
        zIndex: 5
    },
    itemContainer: {
        transition: "all 0.5s",
        marginTop: "20px",
        "&:hover": {
            borderRadius: "2px",
            boxShadow: "0 10px 31px 0 rgba(7,152,255,0.09)",
            marginTop: "8px",
            "& > div > img": {
                transform: "scale(1.1)",
                filter: "brightness(70%)",
            },
            "& > div > div": {
                transition: "color 0.3s ease-out",
                color: "#ae8c63",
            }
        },
    },
    itemName: {
        fontSize: "20px",
        fontWeight: 600
    },
    price: {
        color: "#ae8c63",
    },
    description: {
        fontSize: "13px",
        marginTop: "4px"
    },
    backgroundImage: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "auto",
        opacity: "0.6"
    }
});
const ListItem = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container} >
            <h1 style={{ textAlign: "center", color: "#222222" }}>Một số bất động sản</h1>
            <Grid container spacing={6}>
                <Grid item xs={4} className={classes.itemContainer}>
                    <div style={{ width: "100%" }} className={classes.imageContainer}>
                        <img src={test1} style={{ width: "100%", height: "auto" }} className={classes.img} alt="temp"></img>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", padding: "16px", backgroundColor: "#fff" }}>
                        <div className={classes.itemName}>Boutique Space Greenville</div>
                        <span className={classes.price}>2.000.00 VND</span>
                        <span className={classes.description}>Downtown Frederick hot spot. Top location for local entertainment. All fixtures are includ [more]</span>
                    </div>
                </Grid>
                <Grid item xs={4} className={classes.itemContainer}>
                    <div style={{ width: "100%" }} className={classes.imageContainer}>
                        <img src={test1} style={{ width: "100%", height: "auto" }} className={classes.img} alt="temp"></img>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", padding: "16px", backgroundColor: "#fff" }}>
                        <div className={classes.itemName}>Boutique Space Greenville</div>
                        <span className={classes.price}>2.000.00 VND</span>
                        <span className={classes.description}>Downtown Frederick hot spot. Top location for local entertainment. All fixtures are includ [more]</span>
                    </div>
                </Grid>
                <Grid item xs={4} className={classes.itemContainer}>
                    <div style={{ width: "100%" }} className={classes.imageContainer}>
                        <img src={test1} style={{ width: "100%", height: "auto" }} className={classes.img} alt="temp"></img>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", padding: "16px", backgroundColor: "#fff" }}>
                        <div className={classes.itemName}>Boutique Space Greenville</div>
                        <span className={classes.price}>2.000.00 VND</span>
                        <span className={classes.description}>Downtown Frederick hot spot. Top location for local entertainment. All fixtures are includ [more]</span>
                    </div>
                </Grid>
                <Grid item xs={4} className={classes.itemContainer}>
                    <div style={{ width: "100%" }} className={classes.imageContainer}>
                        <img src={test1} style={{ width: "100%", height: "auto" }} className={classes.img} alt="temp"></img>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", padding: "16px", backgroundColor: "#fff" }}>
                        <div className={classes.itemName}>Boutique Space Greenville</div>
                        <span className={classes.price}>2.000.00 VND</span>
                        <span className={classes.description}>Downtown Frederick hot spot. Top location for local entertainment. All fixtures are includ [more]</span>
                    </div>
                </Grid>
                <Grid item xs={4} className={classes.itemContainer}>
                    <div style={{ width: "100%" }} className={classes.imageContainer}>
                        <img src={test1} style={{ width: "100%", height: "auto" }} className={classes.img} alt="temp"></img>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", padding: "16px", backgroundColor: "#fff" }}>
                        <div className={classes.itemName}>Boutique Space Greenville</div>
                        <span className={classes.price}>2.000.00 VND</span>
                        <span className={classes.description}>Downtown Frederick hot spot. Top location for local entertainment. All fixtures are includ [more]</span>
                    </div>
                </Grid>
                <Grid item xs={4} className={classes.itemContainer}>
                    <div style={{ width: "100%" }} className={classes.imageContainer}>
                        <img src={test1} style={{ width: "100%", height: "auto" }} className={classes.img} alt="temp"></img>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", padding: "16px", backgroundColor: "#fff" }}>
                        <div className={classes.itemName}>Boutique Space Greenville</div>
                        <span className={classes.price}>2.000.00 VND</span>
                        <span className={classes.description}>Downtown Frederick hot spot. Top location for local entertainment. All fixtures are includ [more]</span>
                    </div>
                </Grid>
                <Grid item xs={4} className={classes.itemContainer}>
                    <div style={{ width: "100%" }} className={classes.imageContainer}>
                        <img src={test1} style={{ width: "100%", height: "auto" }} className={classes.img} alt="temp"></img>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", padding: "16px", backgroundColor: "#fff" }}>
                        <div className={classes.itemName}>Boutique Space Greenville</div>
                        <span className={classes.price}>2.000.00 VND</span>
                        <span className={classes.description}>Downtown Frederick hot spot. Top location for local entertainment. All fixtures are includ [more]</span>
                    </div>
                </Grid>
                <Grid item xs={4} className={classes.itemContainer}>
                    <div style={{ width: "100%" }} className={classes.imageContainer}>
                        <img src={test1} style={{ width: "100%", height: "auto" }} className={classes.img} alt="temp"></img>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", padding: "16px", backgroundColor: "#fff" }}>
                        <div className={classes.itemName}>Boutique Space Greenville</div>
                        <span className={classes.price}>2.000.00 VND</span>
                        <span className={classes.description}>Downtown Frederick hot spot. Top location for local entertainment. All fixtures are includ [more]</span>
                    </div>
                </Grid>
                <Grid item xs={4} className={classes.itemContainer}>
                    <div style={{ width: "100%" }} className={classes.imageContainer}>
                        <img src={test1} style={{ width: "100%", height: "auto" }} className={classes.img} alt="temp"></img>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", padding: "16px", backgroundColor: "#fff" }}>
                        <div className={classes.itemName}>Boutique Space Greenville</div>
                        <span className={classes.price}>2.000.00 VND</span>
                        <span className={classes.description}>Downtown Frederick hot spot. Top location for local entertainment. All fixtures are includ [more]</span>
                    </div>
                </Grid>
            </Grid>

        </Container >
    )
}
export default ListItem
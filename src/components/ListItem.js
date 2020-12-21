import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import test1 from "../resources/images/test1.jpg";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import HotelIcon from '@material-ui/icons/Hotel';
const useStyles = makeStyles({
    container: {
        marginTop: "20px",
    },
    imageContainer: {
        overflow: "hidden",
        position: "relative",
    },
    img: {
        transition: "all 1s ease",
        filter: "brightness(80%)",
        zIndex: 5
    },
    itemContainer: {
        transition: "all 1s",
        marginTop: "20px",
        cursor: "pointer",
        "&:hover": {
            borderRadius: "2px",
            boxShadow: "0 10px 31px 0 rgba(7,152,255,0.09)",
            marginTop: "8px",
            "& > div > img": {
                transform: "scale(1.1)",
                filter: "brightness(65%)",
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
    let temp = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    const classes = useStyles()
    return (
        <Container className={classes.container} >
            <h1 style={{ textAlign: "center", color: "#222222" }}>Một số bất động sản</h1>
            <Grid container spacing={6}>
                {temp.map(el => {
                    return (
                        <Grid item xs={4} key={el}>
                            <div className={classes.itemContainer}>
                                <div style={{ width: "100%" }} className={classes.imageContainer}>
                                    <img src={test1} style={{ width: "100%", height: "auto" }} className={classes.img} alt="temp"></img>
                                    <div style={{ backgroundColor: "#ae8c63d9", color: "#fff", position: "absolute", top: "16px", right: "16px", padding: "4px 15px" }}>
                                        <div style={{ fontSize: "12px", textAlign: "center" }}>Chung cư</div>
                                    </div>
                                    <div style={{ backgroundColor: "#f1bf7fd9", color: "#fff", position: "absolute", top: "16px", left: "16px", padding: "4px 15px" }}>
                                        <div style={{ fontSize: "12px", textAlign: "center" }}>Nội thất</div>
                                    </div>
                                    <div style={{ position: "absolute", bottom: "16px", left: "16px", color: "#fff", width: "100%", display: "flex", alignItems: "center" }}>
                                        <div style={{ display: "flex", alignItems: "center", }}>
                                            <LocationOnIcon style={{ fontSize: "18px", color: "#fff", }}></LocationOnIcon>
                                            <span style={{ marginLeft: "4px", fontSize: "13px", fontWeight: 600 }}>Ba Đình, Hà Nội</span>
                                        </div>
                                        <div style={{ marginLeft: "auto", marginRight: "40px", display: "flex", alignItems: "center" }}>
                                            <PhotoCameraIcon style={{ color: "#fff", fontSize: "18px" }}></PhotoCameraIcon>
                                            <span style={{ marginLeft: "4px", fontSize: "14px", fontWeight: 600 }}>9</span>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", padding: "16px 24px", backgroundColor: "#fff" }}>
                                    <div className={classes.itemName}>Boutique Space Greenville</div>
                                    <span className={classes.price}>2.000.00 VND</span>
                                    <span className={classes.description}>Downtown Frederick hot spot. Top location for local entertainment. All fixtures are includ [more]</span>
                                    <div style={{ display: "flex", marginTop: "8px" }}>
                                        <div style={{ display: "flex", alignItems: "center", marginRight: "16px" }}>
                                            <HotelIcon style={{ color: "#5c727d", fontSize: "20px" }}></HotelIcon>
                                            <span style={{ marginLeft: "8px", fontSize: "14px", color: "#5c727d" }}>2</span>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", marginRight: "16px" }}>
                                            <HotelIcon style={{ color: "#5c727d", fontSize: "20px" }}></HotelIcon>
                                            <span style={{ marginLeft: "8px", fontSize: "14px", color: "#5c727d" }}>2</span>
                                        </div>
                                        <div style={{ display: "flex", alignItems: "center", marginRight: "16px" }}>
                                            <HotelIcon style={{ color: "#5c727d", fontSize: "20px" }}></HotelIcon>
                                            <span style={{ marginLeft: "8px", fontSize: "14px", color: "#5c727d" }}>2</span>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
                                        <img src="https://demo5.wpresidence.net/wp-content/uploads/2014/05/person3-120x120.jpg" style={{ width: "30px", height: "30px", borderRadius: "50%" }} alt="avatar" ></img>
                                        <span style={{ marginLeft: "8px" }}>Maria Barlow</span>
                                    </div>
                                </div>

                            </div>
                        </Grid>
                    )
                })}
            </Grid>

        </Container >
    )
}
export default ListItem
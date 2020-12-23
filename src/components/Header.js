import React from "react";
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import { makeStyles } from "@material-ui/core";
import Config from "../Config";
const useStyles = makeStyles({
    countNotify: {
        position: "absolute",
        top: "-8px",
        right: "-4px",
        fontSize: "16px",
        backgroundColor: "#ae8c63",
        color: "white",
        borderRadius: "50%",
        width: "26px",
        height: "26px",
        textAlign: "center",
    }
})
const Header = ({ image }) => {
    console.log("image", image)
    const classes = useStyles()
    return (
        <div style={{ display: "flex", padding: "20px 60px", backgroundColor: "#fff" }}>
            <div>
                <img src="https://demo5.wpresidence.net/wp-content/uploads/2020/07/demo5_black.png" alt="12"></img>
            </div>
            <div style={{ display: "flex", marginLeft: "auto", marginRight: "20px", alignItems: "center", position: "relative", cursor: "pointer" }}>
                <div className={classes.countNotify}>1</div>
                <img src={image ? (Config.BASE_URL + "/api/user" + image) : "https://demo5.wpresidence.net/wp-content/themes/wpresidence/img/default_user_small.png"} alt="avatar" style={{ width: "45px", height: "45px", borderRadius: "50%", border: "1px solid red" }}></img>
            </div>
        </div>
    )
}
export default Header
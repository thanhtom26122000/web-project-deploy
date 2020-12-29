import React from "react";
import { ListItemIcon, List, ListItem, ListItemText, makeStyles, Paper, Popover, Typography } from "@material-ui/core";
import Config from "../Config";
import ConfigInput from "../ConfigInput";
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
const Header = ({ image, auth, typeAccount }) => {
    console.log("image", typeAccount)
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    return (
        <div style={{ display: "flex", padding: "20px 60px", backgroundColor: "#fff" }}>
            <div>
                <img src="https://demo5.wpresidence.net/wp-content/uploads/2020/07/demo5_black.png" alt="12"></img>
            </div>
            <div style={{ display: "flex", marginLeft: "auto", marginRight: "20px", alignItems: "center", position: "relative", cursor: "pointer" }} onClick={handleClick}>
                <div className={classes.countNotify}>1</div>
                <img src={image ? (Config.BASE_URL + image) : "https://demo5.wpresidence.net/wp-content/themes/wpresidence/img/default_user_small.png"} alt="avatar" style={{ width: "45px", height: "45px", borderRadius: "50%", border: "1px solid red" }}></img>
            </div>
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Paper >
                    <List component="nav">
                        {typeAccount === Config.MEMBER_ACCOUNT ?
                            ConfigInput.listControlTabMember.map(el => {
                                return (
                                    <ListItem button key={el.name}>
                                        <ListItemIcon>{el.icon}</ListItemIcon>
                                        <ListItemText primary={el.name}></ListItemText>
                                    </ListItem>
                                )
                            }) : ConfigInput.listControlTabAdmin.map(el => {
                                return (
                                    <ListItem button key={el.name}>
                                        <ListItemIcon>{el.icon}</ListItemIcon>
                                        <ListItemText primary={el.name}></ListItemText>
                                    </ListItem>
                                )
                            })}
                    </List>
                </Paper>
            </Popover>
        </div >
    )
}
export default React.memo(Header)
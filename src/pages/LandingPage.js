import { Container, makeStyles, Popover, Paper, List, ListItemText, ListItem, ListItemIcon } from "@material-ui/core";
import React from "react";
import "../resources/scss/landing-page.scss";
import logo from "../resources/images/logo.png"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ListItems from "../components/ListItem";
import { useHistory } from "react-router";
import Config from "../Config"
import Search from "../components/Search";
import ConfigInput from "../ConfigInput";
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
const LandingPage = ({ auth, image, typeAccount }) => {
    console.log("xx auth", auth)
    const classes = useStyles();
    const history = useHistory()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    return (
        <div style={{ backgroundColor: "#f7f7f7" }}>
            <header className="header">
                <div className="image-opacity"></div>
                <Container>
                    <div className={classes.containerNavigation}>
                        <img src={logo} alt="logo" className={classes.logo}></img>
                        {auth ?
                            <>
                                <img src={Config.BASE_URL + image} alt="avatar" style={{ height: "45px", width: "45px", borderRadius: "50%" }} onClick={handleClick} />
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
                                                    <ListItem button>
                                                        <ListItemIcon>{el.icon}</ListItemIcon>
                                                        <ListItemText primary={el.name}></ListItemText>
                                                    </ListItem>
                                                }) : ConfigInput.listControlTabAdmin.map(el => {
                                                    return (
                                                        <ListItem button>
                                                            <ListItemIcon>{el.icon}</ListItemIcon>
                                                            <ListItemText primary={el.name}></ListItemText>
                                                        </ListItem>
                                                    )
                                                })}
                                        </List>
                                    </Paper>
                                </Popover>
                            </>
                            : <AccountCircleIcon onClick={() => history.push("/sign-in")} className={classes.accountIcon}></AccountCircleIcon>}
                    </div>
                </Container >
                <div className="header-title">
                    <h1>Find the Perfect Home</h1>
                    <span>stop looking. start finding with wpresidence</span>
                </div>
            </header>
            <Search></Search>
            <ListItems search={false}></ListItems>
        </div >

    )
}

export default React.memo(LandingPage)
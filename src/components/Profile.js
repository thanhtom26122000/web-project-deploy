import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import ConfigInput from "../ConfigInput";
import { getUserInfo } from "../redux/actions/user";
import ButtonCustom from "./ButtonCustom";
import Modal from "./Modal";

const useStyles = makeStyles({
    textField: {
        "& .MuiOutlinedInput-root": {
            borderRadius: "10px"
        },
        marginBottom: "32px",
    },
    rightTabContainer: {
        padding: "40px",
        backgroundColor: "#fff",
        borderRadius: "20px"
    }
})
const Profile = ({ getUserInfo = () => { }, userReducer }) => {
    const classes = useStyles();
    const [input, setInput] = useState({
        email: "",
        firstName: "",
        lastName: "",
        phone: "",
        cardId: "",
        address: "",
        facebook: "",
        zalo: "",
        insta: "",
    })
    useEffect(() => {
        if (userReducer.infoUser) {
            setInput({ ...input, ...userReducer.infoUser })
        } else {
            getUserInfo()
        }
    }, [getUserInfo, userReducer.infoUser])
    const handleOnChange = (event, field) => {
        return setInput({
            ...input,
            [field]: event.target.value
        })
    }
    if (userReducer.loading) {
        return <Modal show={true}></Modal>
    }
    console.log("123 input", input)
    return (
        <div style={{ padding: "20px 40px 0px 40px" }}>
            <h2 style={{ fontWeight: "bold", fontSize: "40px" }}>Thông tin cá nhân</h2>
            <Grid container style={{ marginBottom: "60px" }}>
                <Grid item xs={8} className={classes.rightTabContainer}>
                    <div style={{ marginBottom: "20px", fontSize: "18px", fontWeight: 500 }}>Thông tin liên lạc</div>
                    <Grid container>
                        {ConfigInput.listInforProfile.map(el => (
                            <Grid item xs={6} key={el.label}>
                                <TextField variant={el.label === "Email" ? "filled" : "outlined"}
                                    label={el.label}
                                    type={el.type}
                                    value={input[el.stateName] ? input[el.stateName] : ""}
                                    disabled={el.label === "Email" ? true : false}
                                    className={classes.textField}
                                    style={{ width: "90%" }}
                                    onChange={(event) => handleOnChange(event, el.stateName)}>
                                </TextField>
                            </Grid>
                        ))}
                    </Grid>
                    <div style={{ marginBottom: "20px", fontSize: "18px", fontWeight: 500 }}>Mạng xã hội</div>
                    <Grid container>
                        {ConfigInput.listSocialMedia.map(el => (
                            <Grid item xs={6} key={el.label}>
                                <TextField variant="outlined"
                                    label={el.label}
                                    type={el.type}
                                    value={input[el.stateName] ? input[el.stateName] : ""}
                                    onChange={(event) => handleOnChange(event, el.stateName)}
                                    className={classes.textField}
                                    style={{ width: "90%" }}>
                                </TextField>
                            </Grid>
                        ))}
                    </Grid>
                    <ButtonCustom>Update Profile</ButtonCustom>
                </Grid>
                <Grid item xs={3} style={{ backgroundColor: "#fff", marginLeft: "auto", marginRight: "auto", borderRadius: "20px", height: "100%", padding: "16px" }}>
                    <div style={{ margin: "8px 0px 16px 8px", fontSize: "18px", fontWeight: 600 }}>Ảnh</div>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <img src="https://demo5.wpresidence.net/wp-content/themes/wpresidence/img/default_user.png" alt="avatar-3" style={{ marginBottom: "32px", width: "100%", height: "auto" }}></img>
                        <Button style={{ textTransform: "none", backgroundColor: "#ae8c63", color: "#fff", padding: "16px 24px", borderRadius: "10px" }} variant="contained" >Tải ảnh lên</Button>
                    </div>
                </Grid>
                <Grid item xs={8} style={{ padding: "32px", backgroundColor: "#fff", borderRadius: "20px", marginTop: "24px" }}>
                    <div style={{ marginBottom: "20px", fontSize: "18px", fontWeight: 500 }}>Thông tin liên lạc</div>
                    <Grid container >
                        {ConfigInput.listInputChangePassowrd.map(el => (
                            <Grid key={el.label} item xs={el.label === "Mật khẩu cũ" ? 12 : 6}>
                                <TextField variant="outlined"
                                    label={el.label}
                                    type={el.type}
                                    className={classes.textField}
                                    style={{ width: el.label === "Mật khẩu cũ" ? "95%" : "90%" }}>
                                </TextField>
                            </Grid>
                        ))}
                    </Grid>
                    <ButtonCustom>Save</ButtonCustom>
                </Grid>
            </Grid>
        </div >
    )
}
const mapStateToProps = (state) => {
    return {
        userReducer: state.userReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: () => dispatch(getUserInfo())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile)
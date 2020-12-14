import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import React from "react";
import ConfigInput from "../ConfigInput";
import ButtonCustom from "./ButtonCustom";

const useStyles = makeStyles({
    textField: {
        "& .MuiOutlinedInput-root": {
            borderRadius: "10px"
        },
        marginBottom: "32px",
    }
})
const Profile = () => {
    const classes = useStyles()
    return (
        <div style={{ padding: "20px 40px 0px 40px" }}>
            <h2 style={{ fontWeight: "bold", fontSize: "40px" }}>Thông tin cá nhân</h2>
            <Grid container >
                <Grid item xs={8} className="right-tab-container">
                    <div style={{ marginBottom: "20px", fontSize: "18px", fontWeight: 500 }}>Thông tin liên lạc</div>
                    <Grid container>
                        {ConfigInput.listInforProfile.map(el => (
                            <Grid item xs={6}>
                                <TextField variant={el.label === "Email" ? "filled" : "outlined"}
                                    label={el.label}
                                    type={el.type}
                                    disabled={el.label === "Email" ? true : false}
                                    defaultValue={el.label === "Email" ? "thanhtom.26122000@gmail.com" : ""}
                                    className={classes.textField}
                                    style={{ width: "90%" }}>
                                </TextField>
                            </Grid>
                        ))}
                    </Grid>
                    <div style={{ marginBottom: "20px", fontSize: "18px", fontWeight: 500 }}>Mạng xã hội</div>
                    <Grid container>
                        {ConfigInput.listSocialMedia.map(el => (
                            <Grid item xs={6}>
                                <TextField variant="outlined"
                                    label={el.label}
                                    type={el.type}
                                    className={classes.textField}
                                    style={{ width: "90%" }}>
                                </TextField>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={3} style={{ backgroundColor: "#fff", marginLeft: "auto", marginRight: "auto", borderRadius: "20px", maxHeight: "350px", padding: "16px" }}>
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
                            <Grid item xs={el.label === "Mật khẩu cũ" ? 12 : 6}>
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
export default Profile
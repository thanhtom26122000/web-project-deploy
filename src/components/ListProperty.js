import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles({
    textField: {
        "& .MuiOutlinedInput-root": {
            borderRadius: "10px"
        },
        marginBottom: "32px",
    },
    input: {
        display: "none"
    },
    rightTabContainer: {
        padding: "40px !important",
        backgroundColor: "#fff",
        borderRadius: "20px",
    }
})
const ListPropery = () => {
    const classes = useStyles()

    return (
        <div style={{ padding: "20px 40px 0px 40px" }}>
            <h2 style={{ fontWeight: "bold", fontSize: "40px" }}>Danh Sách phòng</h2>
            <Grid container spacing={6} style={{ display: "flex" }}>
                <Grid item xs={7} className={classes.rightTabContainer}>
                    <div style={{ marginBottom: "20px", fontSize: "18px", fontWeight: 500 }}>Thông tin nhà cho thuê</div>
                    <Grid container>
                        <Grid item xs={8}></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
export default ListPropery
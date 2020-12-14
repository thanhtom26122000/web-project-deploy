import { Checkbox, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Select, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useState } from "react";
import ConfigInput from "../ConfigInput";
import ButtonCustom from "./ButtonCustom"
const useStyles = makeStyles({
    textField: {
        "& .MuiOutlinedInput-root": {
            borderRadius: "10px"
        },
        marginBottom: "32px",
    }
})
const AddProperty = () => {
    const classes = useStyles()
    const [input, setInput] = useState({
        state: "",
        district: "",
        priceHouse: "",
        perMonth: "",
        priceElectric: "",
        priceWater: "",
        type: ""
    })
    console.log("xxxx", input)
    const handleOnChange = (event, field, value) => {
        setInput({
            ...input,
            [field]: (field === "state" || field === "district") ? value : event.target.value
        })
    }
    return (
        <div style={{ padding: "20px 40px 0px 40px" }}>
            <h2 style={{ fontWeight: "bold", fontSize: "40px" }}>Cho thuê nhà</h2>
            <Grid container>
                <Grid item xs={7} className="right-tab-container">
                    <div style={{ marginBottom: "20px", fontSize: "18px", fontWeight: 500 }}>Thông tin nhà cho thuê</div>
                    <Grid container>
                        {ConfigInput.propertyDescriptionInput.map(el => (
                            <Grid item xs={12} key={el.label}>
                                <TextField variant="outlined"
                                    label={el.label}
                                    type={el.type}
                                    className={classes.textField}
                                    multiline={el.label === "Miêu tả" ? true : false}
                                    rows={el.label === "Miêu tả" ? 8 : 1}
                                    style={{ width: "95%" }}>
                                </TextField>
                            </Grid>
                        ))}
                    </Grid>
                    <div style={{ marginBottom: "20px", fontSize: "18px", fontWeight: 500 }}>Thông tin nhà cho thuê</div>
                    <Grid container>
                        {ConfigInput.propertyPrice.map((el) => (
                            <Grid item xs={6} key={el.label}>
                                {el.type === "select" ? (
                                    <FormControl variant="outlined" style={{ width: "90%" }}>
                                        <InputLabel id={el.label}>{el.label}</InputLabel>
                                        <Select value={input[el.nameState]} onChange={(event) => handleOnChange(event, el.nameState)} labelId={el.label} label={el.label} style={{ borderRadius: "10px" }}>
                                            {el.value?.map(value => {
                                                return (
                                                    <MenuItem key={value} value={value}>{value}</MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                ) :
                                    (<TextField variant="outlined"
                                        label={el.label}
                                        type={el.type}
                                        className={classes.textField}
                                        style={{ width: "90%" }}>
                                    </TextField>)
                                }
                            </Grid>
                        ))}
                    </Grid>
                    <div style={{ marginBottom: "20px", fontSize: "18px", fontWeight: 500, marginTop: "20px" }}>Chọn loại</div>
                    <Grid container>
                        <Grid item xs={6}>
                            <Autocomplete
                                options={ConfigInput.listState}
                                inputValue={input.state}
                                onInputChange={(event, value) => handleOnChange(event, "state", value)}
                                renderInput={(params) => <TextField  {...params} className={classes.textField} style={{ width: "90%" }} label="Tỉnh" variant="outlined" />}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Autocomplete
                                options={ConfigInput.mapDistrict[input.state] ? ConfigInput.mapDistrict[input.state] : []}
                                inputValue={input.district}
                                onInputChange={(event, value) => handleOnChange(event, "district", value)}
                                renderInput={(params) => <TextField {...params} className={classes.textField} style={{ width: "90%" }} label="Quận/Huyện" variant="outlined" />}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField variant="outlined"
                                label="Địa chỉ chi tiết"
                                type="text"
                                className={classes.textField}
                                style={{ width: "90%" }}>
                            </TextField>
                        </Grid>
                    </Grid>
                    <div style={{ marginBottom: "20px", fontSize: "18px", fontWeight: 500, marginTop: "20px" }}>Chi tiết</div>
                    <Grid container >
                        {ConfigInput.listDetails.map((el) => (
                            <Grid item xs={6} key={el.label}>
                                {el.type === "select" ? (
                                    <FormControl variant="outlined" style={{ width: "90%" }}>
                                        <InputLabel id={el.label}>{el.label}</InputLabel>
                                        <Select value={input[el.nameState]} onChange={(event) => handleOnChange(event, el.nameState)} labelId={el.label} label={el.label} style={{ borderRadius: "10px" }}>
                                            {el.value?.map(value => {
                                                return (
                                                    <MenuItem key={value} value={value}>{value}</MenuItem>
                                                )
                                            })}
                                        </Select>
                                    </FormControl>
                                ) :
                                    (<TextField variant="outlined"
                                        label={el.label}
                                        type={el.type}
                                        className={classes.textField}
                                        style={{ width: "90%" }}>
                                    </TextField>)
                                }
                            </Grid>
                        ))}
                    </Grid>
                    <div style={{ marginBottom: "20px", fontSize: "18px", fontWeight: 500, marginTop: "20px" }}>Tiện nghi</div>
                    <Grid container >
                        {ConfigInput.features.map((el) => (
                            <Grid item xs={3} key={el.label}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="checkedB"
                                            color="primary"
                                        />
                                    }
                                    label={el.label}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <div style={{ marginBottom: "20px", fontSize: "18px", fontWeight: 500, marginTop: "20px" }}>Chú thích của bạn</div>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField variant="outlined"
                                label="Chú thích"
                                type="text"
                                className={classes.textField}
                                multiline={true}
                                rows={10}
                                style={{ width: "95%" }}>
                            </TextField>
                        </Grid>
                    </Grid>
                    <ButtonCustom>Save</ButtonCustom>
                </Grid>
            </Grid>
        </div>
    )
}
export default AddProperty
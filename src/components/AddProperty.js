import { Card, CardActionArea, CardMedia, Checkbox, FormControl, FormControlLabel, Grid, InputLabel, makeStyles, MenuItem, Select, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import React, { useState } from "react";
import ConfigInput from "../ConfigInput";
import ButtonCustom from "./ButtonCustom";
import addFile from "../resources/images/add-file.svg";
import { addString, convertNumber } from "../utils"
import { callApi } from "../axios";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
} from "@material-ui/pickers";
import Modal from "./Modal";
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
const AddProperty = ({ status }) => {
    const classes = useStyles()
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState({
        state: "",
        district: "",
        price: "",
        pricePer: "",
        electricPrice: "",
        waterPrice: "",
        typeRealEstate: "",
        size: "",
        bedroom: "",
        bathroom: "",
        isPrivate: "",
        kitchenDetail: "",
        image: null,
        note: "",
        title: "",
        description: "",
        features: [],
        addressDetail: "",
        date: ""
    })
    console.log("xxxx propety", input)
    const handleOnChange = (event, field, option) => {
        if (option === "number") {
            let number = convertNumber(event.target.value);
            let regExp = /[^0-9]/g;
            let temp = number.match(regExp);
            if (!temp) {
                return setInput({
                    ...input,
                    [field]: addString(number)
                });
            }
        } else {
            setInput({
                ...input,
                [field]: (field === "state" || field === "district") ? option : event.target.value
            })
        }

    }
    const handleOnSubmit = async (event) => {
        setLoading(true);
        let form = new FormData()
        event.preventDefault()
        for (let item in input) {
            if (item === "image") {
                if (input[item] && input[item].length > 0) {
                    input[item].forEach((el, index) => {
                        form.append(item, el)
                    })
                }
            } else {
                if (item.search("price") !== -1 && item !== "pricePer") {
                    let number = parseInt(convertNumber(input[item]));
                    console.log(typeof number)
                    form.append(item, number)
                } else {
                    form.append(`${item}`, input[item])
                }
            }
        }
        let xhr = await callApi({ url: "/api/real-estate/add-property", data: form, checkAuth: true, token: localStorage.getItem("_user") })
        console.log("xhr", xhr)
        if (xhr) {
            if (xhr === "success") {
                
            }
            setLoading(false);
        }

        console.log(xhr, "callApi add-property")

    }
    return (
        <form encType="multipart/form-data" onSubmit={(event) => handleOnSubmit(event)}>
            <Modal show={loading}></Modal>
            <div style={{ padding: "20px 40px 0px 40px" }}>
                <h2 style={{ fontWeight: "bold", fontSize: "40px" }}>Cho thuê nhà</h2>
                <Grid container spacing={6} style={{ display: "flex" }}>
                    <Grid item xs={7} className={classes.rightTabContainer}>
                        <div style={{ marginBottom: "20px", fontSize: "18px", fontWeight: 500 }}>Thông tin nhà cho thuê</div>
                        <Grid container>
                            {ConfigInput.propertyDescriptionInput.map(el => (
                                <Grid item xs={12} key={el.label}>
                                    <TextField variant="outlined"
                                        label={el.label}
                                        type="text"
                                        value={input[el.nameState]}
                                        onChange={(event) => handleOnChange(event, el.nameState, el.type)}
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
                                            <Select
                                                value={input[el.nameState] ? input[el.nameState] : ""}
                                                onChange={(event) => handleOnChange(event, el.nameState, el.type)}
                                                labelId={el.label}
                                                label={el.label}
                                                value={input[el.nameState] ? input[el.nameState] : ""}
                                                style={{ borderRadius: "10px" }}>
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
                                            type="text"
                                            className={classes.textField}
                                            value={input[el.nameState] ? input[el.nameState] : ""}
                                            onChange={(event) => handleOnChange(event, el.nameState, el.type)}
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
                                    inputValue={input.state ? input.state : ""}
                                    onInputChange={(event, value) => handleOnChange(event, "state", value)}
                                    renderInput={(params) => <TextField  {...params} className={classes.textField} style={{ width: "90%" }} label="Tỉnh" variant="outlined" />}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Autocomplete
                                    options={ConfigInput.mapDistrict[input.state] ? ConfigInput.mapDistrict[input.state] : []}
                                    inputValue={input.district ? input.district : ""}
                                    onInputChange={(event, value) => handleOnChange(event, "district", value)}
                                    renderInput={(params) => <TextField {...params} className={classes.textField} style={{ width: "90%" }} label="Quận/Huyện" variant="outlined" />}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField variant="outlined"
                                    label="Địa chỉ chi tiết"
                                    type="text"
                                    className={classes.textField}
                                    value={input["addressDetail"]}
                                    onChange={(event) => setInput({ ...input, addressDetail: event.target.value })}
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
                                            <Select
                                                value={input[el.nameState] ? input[el.nameState] : ""}
                                                onChange={(event) => handleOnChange(event, el.nameState)}
                                                labelId={el.label}
                                                label={el.label}
                                                style={{ borderRadius: "10px" }}>
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
                                            type="text"
                                            value={input[el.nameState] ? input[el.nameState] : ""}
                                            onChange={(event) => handleOnChange(event, el.nameState, el.type)}
                                            className={classes.textField}
                                            style={{ width: "90%" }}>
                                        </TextField>)
                                    }
                                </Grid>
                            ))}
                        </Grid>
                        <div style={{ marginBottom: "20px", fontSize: "18px", fontWeight: 500, marginTop: "20px" }}>Tiện nghi</div>
                        <Grid container >
                            {ConfigInput.features.map((el, index) => (
                                <Grid item xs={3} key={el.label}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="checkedB"
                                                color="primary"
                                                onChange={(event) => {
                                                    let tempArr = [...input.features];
                                                    tempArr[index] = event.target.checked ? 1 : 0;
                                                    console.log("xxx tempArr", tempArr)
                                                    setInput({
                                                        ...input,
                                                        features: [...tempArr]
                                                    })
                                                }}
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
                                    onChange={(event) => handleOnChange(event, "note")}
                                    value={input.note}
                                    rows={10}
                                    style={{ width: "95%" }}>
                                </TextField>
                                <div style={{ display: "flex", marginBottom: "16px", alignItems: "center" }}>
                                    <MuiPickersUtilsProvider variant="outlined" utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            margin="normal"
                                            label="Hiển thị tới ngày"
                                            format="MM/dd/yyyy"
                                            minDate={new Date().getTime()}
                                            // error={true}
                                            value={input["date"] ? input["date"] : new Date().getTime()}
                                            onChange={(date) =>
                                                setInput({
                                                    ...input,
                                                    date: date.getTime()
                                                })
                                            }
                                        // variant="outlined"
                                        />
                                    </MuiPickersUtilsProvider>
                                </div>
                            </Grid>
                        </Grid>
                        <ButtonCustom type="submit" >Save</ButtonCustom>
                    </Grid>
                    <Grid item xs={5} style={{ padding: "0px 24px" }}>
                        <input
                            accept="image/*"
                            className={classes.input}
                            id="contained-button-file"
                            multiple={true}
                            type="file"
                            onChange={(event) => {
                                setInput({
                                    ...input, image: Object.values(event.target.files)
                                })
                            }}
                        />
                        <Card style={{ borderRadius: "20px" }}>
                            <CardActionArea style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                                <label htmlFor="contained-button-file">
                                    <div style={{ fontSize: "16px", padding: "20px", borderBottom: "1px solid #0000001f", }}>Tải ảnh lên</div>
                                    <CardMedia style={{ padding: "20px", maxWidth: "90%", marginLeft: "auto", marginRight: "auto", boxSizing: "border-box" }} >
                                        <div style={{ display: "flex", border: "1px dashed #0000001f", padding: "20px" }}>
                                            <img src={addFile} height="100px" alt="add-image-icon"></img>
                                            <div >
                                                <div style={{ fontSize: "24px", fontWeight: "bold" }}>Chọn ảnh</div>
                                                <div>Thả ảnh vào đây hoặc là ấn vào đây để chọn ảnh từ máy của bạn</div>
                                            </div>
                                        </div>
                                    </CardMedia>
                                </label>
                                <span style={{ fontSize: "14px", marginLeft: "40px", marginBottom: "16px" }}>Chú thích : Bạn phải đăng ít nhất 3 ảnh </span>

                                {input.image ? <div style={{ margin: "20px 40px", display: "flex", flexDirection: "column" }}>{input.image.length > 0 ? input.image.map(el => <div key={el.name} style={{ marginTop: "16px" }}>{el.name}</div>) : null}</div> : null}
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </form >
    )
}
export default React.memo(AddProperty)
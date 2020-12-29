import React, { useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import ConfigInput from "../ConfigInput";
import { Button, Container, makeStyles, Slider, TextField } from "@material-ui/core";

const useStyles = makeStyles({
    select: {
        width: "80%",
        marginBottom: "16px"
    }
})
const SearchColumn = () => {
    const classes = useStyles();

    const [input, setInput] = useState({
        state: "",
        district: "",
        typeRealEstate: "",
        bathroom: "",
        price: ""
    })
    const handleSelectOnChange = (field, value) => {
        setInput({
            ...input,
            [field]: value
        })
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center", backgroundColor: "#fff", boxShadow: " 0 10px 31px 0 rgba(7,152,255,0.09)", }}>
            <div style={{ marginBottom: "16px", fontWeight: 700, fontSize: "18px", marginTop: "16px", color: "#434953", textAlign: "start", }}>Tìm kiếm nâng cao</div>
            <Autocomplete
                options={ConfigInput.listState}
                className={classes.select}
                fullWidth={true}
                inputValue={input.state ? input.state : ""}
                onInputChange={(event, value) => handleSelectOnChange("state", value)}
                renderInput={(params) => <TextField  {...params} className={classes.textField} label="Tỉnh" variant="outlined" />}
            />
            <Autocomplete
                options={ConfigInput.mapDistrict[input.state] ? ConfigInput.mapDistrict[input.state] : []}
                className={classes.select}
                fullWidth={true}
                inputValue={input.district ? input.district : ""}
                onInputChange={(event, value) => handleSelectOnChange("district", value)}
                renderInput={(params) => <TextField {...params} className={classes.textField} label="Quận/Huyện" variant="outlined" />}
            />
            <Autocomplete
                options={ConfigInput.propertyPrice[4].value}
                className={classes.select}
                fullWidth={true}
                inputValue={input.typeRealEstate ? input.typeRealEstate : ""}
                onInputChange={(event, value) => handleSelectOnChange("typeRealEstate", value)}
                renderInput={(params) => <TextField  {...params} className={classes.textField} label="Loại phòng" variant="outlined" />}
            />
            <Autocomplete
                options={ConfigInput.listState}
                className={classes.select}
                fullWidth={true}
                inputValue={input.state ? input.state : ""}
                onInputChange={(event, value) => handleSelectOnChange("state", value)}
                renderInput={(params) => <TextField fullWidth={true} {...params} className={classes.textField} label="Tỉnh" variant="outlined" />}
            />
            <TextField
                label="Số giường ngủ"
                variant="outlined"
                type="number"
                value={input.bathroom}
                className={classes.select}
                onChange={(event) => setInput({ ...input, bathroom: event.target.value })}>
            </TextField>

            <Slider className={classes.select}></Slider>
            <Button>Tim kiem</Button>
        </div>
    )
}
export default SearchColumn
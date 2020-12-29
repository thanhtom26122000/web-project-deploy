import { AppBar, Button, Checkbox, Container, FormControlLabel, Grid, makeStyles, Tab, Tabs } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import Header from "../components/Header";
import Search from "../components/Search";
import { getProperty } from "../redux/actions/action";
import { convertNumber } from "../utils";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchColumn from "../components/SearchColum";
import Config from "../Config";
import { Bathroom, SizeBig } from "../components/Icons";
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined';
import { TabPanel } from "../components/TabPanel";
import ConfigInput from "../ConfigInput";
import Modal from "../components/Modal"
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
    tab: {
        fontSize: "16px",
        textTransform: "none"
    },
    select: {
        minWidth: "200px"
    },
    sectionContainer: {
        backgroundColor: "#fff",
        boxShadow: " 0 10px 31px 0 rgba(7,152,255,0.09)",
        padding: "30px",
        marginTop: "40px"
    },
    propertyInfor: {

    }
})
const Property = ({ realEstateReducer, getProperty = () => { } }) => {
    let params = useParams()
    let offset = params.id.lastIndexOf("-")
    let id = params.id.substring(offset + 1, params.id.length)
    console.log("xxx offset", id)
    let property = realEstateReducer.property
    const classes = useStyles();
    useEffect(() => {
        getProperty(id)
    }, [getProperty])
    const [valueIndex, setValueIndex] = useState(0);
    const [indexImage, setIndexImage] = useState(0);
    const [open, setOpen] = useState(false);
    console.log("xxx value index", valueIndex, open)

    // console.log("price", convertNumber(property.price.toString()))
    return (
        <>
            <Header></Header>
            <Search></Search>
            <Modal show={open}
                image={property.imagePath ? property.imagePath[indexImage] : ""}
                click={() => setOpen(false)}
                nextImage={() => {
                    if (indexImage === (property.imagePath.length - 1)) {
                        setIndexImage(0)
                    } else {
                        setIndexImage(indexImage + 1)
                    }
                }}
                prevImage={() => {
                    if (indexImage === 0) {
                        setIndexImage(property.imagePath.length - 1)
                    } else {
                        setIndexImage(indexImage - 1)
                    }
                }}
            ></Modal>
            <Container style={{ marginTop: "100px" }}>
                <div style={{ display: "flex" }}>
                    <div style={{ background: "#f1bf7fd9", color: "#fff", marginRight: "8px", padding: "4px 8px" }}>{property.typeRealEstate}</div>
                    <div style={{ background: "#f1bf7fd9", color: "#fff", padding: "4px 8px" }}>{property.status}</div>
                </div>
                <div style={{ display: "flex" }}>
                    <h1>{property.title}</h1>
                    <div style={{ marginLeft: "auto", fontSize: "30px", color: "#ae8c63" }}>{property.price ? convertNumber(property.price.toString()) : ""} VND/ {property.pricePer}</div>
                </div>
                <div style={{ display: "flex", fontSize: "14px", color: "#5c727d" }}>
                    <LocationOnIcon style={{ fontSize: "14px", color: "#5c727d", marginRight: "4px" }}></LocationOnIcon>
                    <span>{property.state}, {property.district}</span>
                </div>
                <Grid container style={{ marginTop: "40px", display: "flex", alignItems: "flex-start" }} spacing={6} >
                    <Grid item xs={8} style={{}}>
                        <Grid container style={{ display: "flex", alignItems: "center", backgroundColor: "#fff", padding: "12px" }}>
                            <Grid item xs={8} style={{ height: "500px" }}>
                                <img src={Config.BASE_URL + (property.imagePath ? property.imagePath[0] : "")}
                                    style={{ height: "100%", width: "100%", cursor: "pointer" }}
                                    onClick={() => {
                                        setOpen(true);
                                        setIndexImage(0);
                                    }}></img>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid container>
                                    <Grid item xs={12} style={{ height: "250px" }}>
                                        <img src={Config.BASE_URL + (property.imagePath ? property.imagePath[1] : "")}
                                            style={{ height: "100%", width: "100%", cursor: "pointer" }}
                                            onClick={() => {
                                                setOpen(true);
                                                setIndexImage(1);
                                            }}></img>
                                    </Grid>
                                    <Grid item xs={12} style={{ height: "250px" }}>
                                        <img src={Config.BASE_URL + (property.imagePath ? property.imagePath[2] : "")}
                                            style={{ height: "100%", width: "100%", cursor: "pointer" }}
                                            onClick={() => {
                                                setOpen(true);
                                                setIndexImage(2);
                                            }}></img>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <div className={classes.sectionContainer}>
                            <h4 style={{ margin: "0px 0px 16px" }}>Overview</h4>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <div style={{ display: "flex", flexDirection: "column" }}>
                                    <span style={{ fontWeight: 550, fontSize: "14px" }}>Updated On:</span>
                                    <span>{new Date(property.createTime).toDateString()}</span>
                                </div>
                                <div style={{ marginLeft: "40px", display: "flex", flexDirection: "column", alignItems: 'center' }}>
                                    <HotelOutlinedIcon></HotelOutlinedIcon>
                                    <div style={{ marginTop: "4px" }}>{property.bedroom} Phòng ngủ</div>
                                </div>
                                <div style={{ marginLeft: "40px", display: "flex", flexDirection: "column", alignItems: 'center' }}>
                                    <Bathroom></Bathroom>
                                    <div style={{ marginTop: "4px" }}>{property.size} Phòng tắm</div>
                                </div>

                                <div style={{ marginLeft: "40px", display: "flex", flexDirection: "column", alignItems: 'center' }}>
                                    <SizeBig></SizeBig>
                                    <div style={{ marginTop: "4px" }}>{property.size} m2</div>
                                </div>
                            </div>
                            <div style={{ fontWeight: 550, fontSize: "14px", marginTop: "16px" }}>Thông tin liên lạc :</div>
                            <div style={{ display: "flex", alignItems: "center", marginTop: "16px" }}>
                                <div style={{ fontWeight: 550, fontSize: "14px", marginRight: "40px" }}>Anh/Chị: {property.fullname}</div>
                                <div style={{ fontWeight: 550, fontSize: "14px" }}>Số điện thoại: {property.phone}</div>

                            </div>
                        </div>
                        <div className={classes.sectionContainer} style={{ padding: "0px" }}>
                            <AppBar position="static" style={{ background: "#ae8c63", boxShadow: "none" }}>
                                <Tabs
                                    value={valueIndex}
                                    TabIndicatorProps={{
                                        style: {
                                            display: "none",
                                        }
                                    }}
                                    onChange={(event, value) => setValueIndex(value)}
                                >
                                    <Tab className={classes.tab} style={valueIndex === 0 ? { backgroundColor: "#fff", color: '#000' } : {}} label="Miêu tả" />
                                    <Tab className={classes.tab} style={valueIndex === 1 ? { backgroundColor: "#fff", color: '#000' } : {}} label="Địa chỉ" />
                                    <Tab className={classes.tab} style={valueIndex === 2 ? { backgroundColor: "#fff", color: '#000' } : {}} label="Chi tiết" />
                                    <Tab className={classes.tab} style={valueIndex === 3 ? { backgroundColor: "#fff", color: '#000' } : {}} label="Đồ đạc" />
                                    <Tab className={classes.tab} style={valueIndex === 4 ? { backgroundColor: "#fff", color: '#000' } : {}} label="Chú thích" />

                                </Tabs>
                            </AppBar>
                            <TabPanel value={valueIndex} index={0}>{property.description}</TabPanel>
                            <TabPanel value={valueIndex} index={1}>
                                <Grid container>
                                    <Grid item xs={4} style={{ display: 'flex', justifyContent: "space-between" }}>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ fontWeight: 600, color: "#222", fontSize: "14px" }}>Địa chỉ:</div>
                                            <div style={{ color: "#333", marginLeft: "4px", fontSize: "14px" }}>{property.addressDetail}</div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4} style={{ display: 'flex', justifyContent: "space-between" }}>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ fontWeight: 600, color: "#222", fontSize: "14px" }}>Tỉnh:</div>
                                            <div style={{ color: "#333", marginLeft: "4px", fontSize: "14px" }}>{property.state}</div>
                                        </div>
                                    </Grid>
                                    <Grid item xs={4} style={{ display: 'flex', justifyContent: "space-between" }}>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ fontWeight: 600, color: "#222" }}>Huyện:</div>
                                            <div style={{ color: "#333", marginLeft: "4px" }}>{property.district}</div>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Button style={{ backgroundColor: "#ae8c63", color: "#fff", padding: "4px 8px", marginTop: "16px", textTransform: "none" }} variant="outlined">Open in Google Maps</Button>
                            </TabPanel>
                            <TabPanel value={valueIndex} index={2}>
                                <Grid container>
                                    {ConfigInput.propertyInformationDetail.map(el => {
                                        return (
                                            <Grid key={el.value} item xs={4} style={{ display: 'flex', justifyContent: "space-between" }}>
                                                <div style={{ display: "flex" }}>
                                                    <div style={{ fontWeight: 550, color: "#222" }}>{el.label}</div>
                                                    <div style={{ color: "#5c727d", marginLeft: "4px" }}>{property[el.value]}</div>
                                                </div>
                                            </Grid>
                                        )
                                    })}
                                    {/* <Grid item xs={6}>
                                        <div style={{ display: "flex" }}>
                                            <div style={{ fontWeight: 600, color: "#222" }}>:</div>
                                            <div style={{ color: "#333", marginLeft: "4px" }}>{property.district}</div>
                                        </div>
                                    </Grid> */}
                                </Grid>
                            </TabPanel>
                            <TabPanel value={valueIndex} index={3}>
                                <Grid container>
                                    {ConfigInput.features.map((el, index) => {
                                        return (
                                            <Grid key={el.label} item xs={3}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            name="checkedB"
                                                            color="primary"
                                                            disabled={true}
                                                            checked={property.features ? (property.features[index] == 1 ? true : false) : false}
                                                        />
                                                    }
                                                    label={el.label}
                                                />
                                            </Grid>
                                        )
                                    })}

                                </Grid>
                            </TabPanel>
                            <TabPanel value={valueIndex} index={4}>
                                {property.note && property.note.length > 0 ? property.note : <div>Không có chú thích nào</div>}
                            </TabPanel>
                        </div>
                    </Grid>
                    <Grid item xs={4} style={{ marginLeft: "auto" }}>
                        <SearchColumn></SearchColumn>
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        realEstateReducer: state.realEstateReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getProperty: (id) => dispatch(getProperty(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Property)
import { CircularProgress, IconButton } from "@material-ui/core";
import React from "react";
import Config from "../Config";
import { Close as IconClose } from '@material-ui/icons';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
const Modal = (props) => {
    console.log("xxx show", props.click)
    return (
        <div>
            <Backdrop handleClick={props.click} show={props.show}></Backdrop>
            <div
                className="Modal"
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? "1" : "0",
                    width: props.image ? "100%" : "80%",
                    height: props.image ? "100%" : "80%",
                    top: props.image ? "0" : "10%",
                    left: props.image ? "0" : "10%",
                }}>
                {props.image ?
                    <>
                        <IconButton onClick={props.click} style={{ position: 'absolute', top: 10, right: 10, backgroundColor: "#ae8c63", borderRadius: "0px" }}>
                            <IconClose fontSize="small" style={{ color: "#fff" }} />
                        </IconButton>
                        <IconButton onClick={props.nextImage} style={{ position: 'absolute', top: "calc(50% - 30px)", right: 10, borderRadius: "0px" }}>
                            <NavigateNextIcon style={{ color: "#fff", fontSize: "60px" }} />
                        </IconButton>
                        <IconButton onClick={props.prevImage} style={{ position: 'absolute', top: "calc(50% - 30px)", left: 10, borderRadius: "0px" }}>
                            <NavigateBeforeIcon style={{ color: "#fff", fontSize: "60px" }} />
                        </IconButton>
                        <div style={{ width: "50%", position: 'relative', marginLeft: "auto", marginRight: "auto" }}>
                            <img style={{ width: "100%", height: "auto" }} src={Config.BASE_URL + props.image} alt="" />
                        </div>
                    </>
                    :
                    <CircularProgress size={100} style={{ position: "fixed", top: "46%", left: "48%" }}></CircularProgress>
                }
            </div>
        </div>
    )
}
const Backdrop = (props) => (
    props.show ? <div className="Backdrop" onClick={props.handleClick}></div> : null
);
export default Modal
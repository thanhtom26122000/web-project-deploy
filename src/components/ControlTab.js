import React from "react";
import { List } from "@material-ui/core";
import ControlTabItem from "./ControlTabItem";
import Config from "../Config";
import ConfigInput from "../ConfigInput";
const ControlTab = ({ image, typeAccount }) => {

    return (
        <div style={{ marginTop: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src={image ? (Config.BASE_URL + image) : "https://demo5.wpresidence.net/wp-content/themes/wpresidence/img/default_user_small.png"} alt="avatar" alt="avatar-2" style={{ width: "60px", height: "60px", borderRadius: "50%" }}></img>
                <div style={{ marginTop: "16px", fontSize: "14px", fontWeight: 500 }}>Welcome back, tienthanh2612!</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "24px" }}>
                <List component="nav">
                    {typeAccount === 1 ?
                        (
                            ConfigInput.listControlTabMember.map(el => {
                                return (<ControlTabItem icon={el.icon} name={el.name} key={el.name} path={el.path}></ControlTabItem>)
                            })
                        ) :
                        (
                            ConfigInput.listControlTabAdmin.map(el => {
                                return <ControlTabItem icon={el.icon} name={el.name} key={el.name} path={el.path}></ControlTabItem>
                            })
                        )
                    }
                </List>
            </div>
        </div>
    )
}
export default ControlTab
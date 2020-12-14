import React from "react";
import { List } from "@material-ui/core";
import ControlTabItem from "./ControlTabItem";
import Config from "../ConfigInput";
const ControlTab = () => {

    return (
        <div style={{ marginTop: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src="https://demo5.wpresidence.net/wp-content/themes/wpresidence/img/default-user_1.png" alt="avatar-2" style={{ width: "60px", height: "60px", borderRadius: "50%" }}></img>
                <div style={{ marginTop: "16px", fontSize: "14px", fontWeight: 500 }}>Welcome back, tienthanh2612!</div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "24px" }}>
                <List component="nav">
                    {Config.listControlTabMember.map(el => {
                        return (<ControlTabItem icon={el.icon} name={el.name} key={el.name} path={el.path}></ControlTabItem>)
                    })}
                </List>
            </div>
        </div>
    )
}
export default ControlTab
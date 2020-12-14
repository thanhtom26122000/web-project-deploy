import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React from "react";
import { useHistory, useLocation } from "react-router";
interface controlTabItemProps {
    icon?: any;
    name: string;
    path: string;
}
const ControlTabItem = (props: controlTabItemProps) => {
    const history = useHistory();
    const location = useLocation()
    return (
        <ListItem button onClick={() => history.push(props.path)} style={{
            backgroundColor: location.pathname === props.path ? "#ae8c63" : "",
            color: location.pathname === props.path ? "#fff" : "#222",
            borderRadius: "10px",
        }}>
            <ListItemIcon style={{ color: location.pathname === props.path ? "#fff" : "", }}>
                {props.icon}
            </ListItemIcon>
            <ListItemText primary={props.name} />
        </ListItem >
    )
}
export default ControlTabItem
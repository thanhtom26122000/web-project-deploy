import { TableContainer } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getListAccount } from "../redux/actions/user";
import CustomTable from "./CustomTable";
const ListAccount = ({ userReducer, getListAccount }) => {
    useEffect(() => {
        getListAccount()
    }, [getListAccount])
    return (
        <div style={{ padding: "20px 40px 0px 40px" }}>
            <h2 style={{ fontWeight: "bold", fontSize: "40px" }}>Duyệt tài khoản</h2>
            <CustomTable ></CustomTable>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        userReducer: state.userReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListAccount: () => dispatch(getListAccount())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListAccount)
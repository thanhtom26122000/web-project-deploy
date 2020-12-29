import { TableContainer } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getListAccount } from "../redux/actions/user";
import CustomTable from "./CustomTable";
const ListAccount = ({ userReducer, getListAccount = () => { } }) => {
    useEffect(() => {
        getListAccount()
    }, [getListAccount])
    console.log("xxxx userReducer", userReducer)
    return (
        <div style={{ padding: "20px 40px 0px 40px" }}>
            <h2 style={{ fontWeight: "bold", fontSize: "40px" }}>Duyệt tài khoản</h2>
            {userReducer.listAccount && userReducer.listAccount.length > 0 ?
                <CustomTable rows={userReducer.listAccount} config="tableAccount"></CustomTable>
                :
                <h3>Không có người dùng nào cần xác nhận!</h3>
            }
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
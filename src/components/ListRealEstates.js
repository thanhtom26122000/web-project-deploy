import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getListRealEstate } from "../redux/actions/action";
import CustomTable from "./CustomTable";
const ListRealEstate = ({ realEstateReducer, getListRealEstate = () => { } }) => {
    useEffect(() => {
        getListRealEstate()
    }, [getListRealEstate])
    console.log("xxxx userReducer", realEstateReducer)
    return (
        <div style={{ padding: "20px 40px 0px 40px" }}>
            <h2 style={{ fontWeight: "bold", fontSize: "40px" }}>Duyệt các phòng</h2>
            {realEstateReducer.listRealEstate && realEstateReducer.listRealEstate.length > 0 ?
                <CustomTable rows={realEstateReducer.listRealEstate} config="tableRealEstates"></CustomTable>
                :
                <h3>Không có phòng nào cần duyệt!</h3>
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        realEstateReducer: state.realEstateReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListRealEstate: () => dispatch(getListRealEstate())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ListRealEstate)
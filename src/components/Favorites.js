import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getListFavorites } from "../redux/actions/action";
import CustomTable from "./CustomTable"
const Favorites = ({ realEstateReducer, getListFavorites = () => { } }) => {
    useEffect(() => {
        getListFavorites()
    }, [getListFavorites])
    return (
        <div style={{ padding: "20px 40px 0px 40px" }}>
            <h2 style={{ fontWeight: "bold", fontSize: "40px" }}>Yêu thích</h2>
            <CustomTable config = "tableFavo" rows={realEstateReducer.listRealEstate}></CustomTable>
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
        getListFavorites: () => dispatch(getListFavorites())
        // getListLandingPage: () => dispatch(getListLandingPage()),
        // addFavorites: (id) => dispatch(addFavorites(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
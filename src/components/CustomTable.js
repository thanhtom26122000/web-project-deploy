// import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
// import React from "react";
// import { connect } from "react-redux";

// const Table = ({ listRealEstate }) => {
//     return (
//         <div>
//             <Paper >
//                 {/* <Table > */}
//                     {/* <TableHead>
//                         <TableRow>
//                             <TableCell>Dessert (100g serving)</TableCell>
//                             <TableCell align="right">Calories</TableCell>
//                             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//                             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//                             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {rows.map((row) => (
//                         <TableRow key={row.name}>
//                             <TableCell component="th" scope="row">
//                                 {row.name}
//                             </TableCell>
//                             <TableCell align="right">{row.calories}</TableCell>
//                             <TableCell align="right">{row.fat}</TableCell>
//                             <TableCell align="right">{row.carbs}</TableCell>
//                             <TableCell align="right">{row.protein}</TableCell>
//                         </TableRow>
//                     ))}
//                     </TableBody> */}
//                 {/* </Table> */}
//             </Paper>
//         </div>


//     )
// }
// const mapStateToProps = () => {
//     return {

//     }
// }
// const mapDispatchToProps = () => {
//     return {}
// }
// export default Table
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ButtonCustom from './ButtonCustom';
import { Button } from "@material-ui/core"
import ConfigInput from '../ConfigInput';
import Config from '../Config';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: "20px",
        padding: "0px 20px"
    },
    tableCellHover: {
        "&:hover": {
            backgroundColor: "#f3f3f3"
        }
    }

});
const CustomTable = ({ rows, config }) => {
    console.log(rows, "xxx test1")
    console.log("xxxx", config, "1234", ConfigInput.mapListHeadTable[config])
    const classes = useStyles();
    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {ConfigInput.mapListHeadTable[config].map(el => (
                            <TableCell key={el.label} align={el.align}>{el.label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows && rows.length > 0 ? rows.map((el, index) => {
                        return (
                            <TableRow key={el.id} className={classes.tableCellHover} >
                                {config === "tableAccount" ? null : <TableCell align="left" style={{ padding: "40px" }} >
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <img src={Config.BASE_URL + el.imagePath[0]} style={{ height: "70px", width: "105px" }} alt={"img" + index}></img>
                                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "16px" }}>
                                            <span style={{ fontSize: "16px", color: "#222222" }}>{el.title}</span>
                                            <span style={{ fontSize: "14px", color: "#808191" }}>{el.state}, {el.district}</span>
                                        </div>
                                    </div>
                                </TableCell>}
                                {ConfigInput.mapCellTable[config].map(cell => {
                                    return <TableCell align={cell.align}>{el[cell.label]}</TableCell>
                                })}
                                <TableCell align="center">
                                    <Button color="primary" variant="contained" style={{ marginRight: "16px" }}>Đồng ý</Button>
                                    <Button color="secondary" variant="contained">Xoá</Button>
                                </TableCell>
                            </TableRow>
                        )
                    }) : null}

                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default CustomTable
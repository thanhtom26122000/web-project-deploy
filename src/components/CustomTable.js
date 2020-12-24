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

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableContainer: {
        borderRadius: "20px",
        padding: "0px 20px"
    }

});
let customRows = [
    { id: "12333", phone: "12333123", cardId: "123112323", address: "test address" },
    { id: "12333", phone: "12333123", cardId: "123112323", address: "test address" },
    { id: "12333", phone: "12333123", cardId: "123112323", address: "test address" },

]
const CustomTable = ({ rows }) => {
    console.log(rows, "xxx test1")
    const classes = useStyles();
    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Id</TableCell>
                        <TableCell align="left">Số điện thoại</TableCell>
                        <TableCell align="left">Số chứng minh thư</TableCell>
                        <TableCell align="left">Địa chi</TableCell>
                        <TableCell align="center">Hành động</TableCell>
                    </TableRow>

                </TableHead>
                <TableBody>
                    {customRows && customRows.length > 0 ? customRows.map(el => {
                        return (
                            <TableRow key={el.id}>
                                <TableCell align="left">
                                    {el.id}
                                </TableCell>
                                <TableCell align="left">{el.phone}</TableCell>
                                <TableCell align="left">{el.cardId}</TableCell>
                                <TableCell align="left" color="#ae8c63">{el.address}</TableCell>
                                <TableCell align="center" >
                                    <Button color="primary" variant="contained" style={{ marginRight: "16px" }}>Duyệt tài khoản</Button>
                                    <Button color="secondary" variant="contained">Từ chối</Button>
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
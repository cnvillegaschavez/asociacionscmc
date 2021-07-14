import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getOrderByUserId } from '../../../api/orderApi';
import { getUserInfo } from '../../../api/userApi';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function Orders() {
  const classes = useStyles();
  const [orders, setOrders] = useState([]);

  useEffect (() => {
        const getListOrders = () => {
        const user = getUserInfo();
        getOrderByUserId(user.id, user.api_token).then(r=>{
            const lista = r.data.data;
            setOrders(lista);
        }).catch(e=>{
            
        });
      }
      getListOrders();
  },[])

  

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">N° Orden</StyledTableCell>
            <StyledTableCell align="center">Fecha creación</StyledTableCell>
            <StyledTableCell align="center">Cantidad</StyledTableCell>
            <StyledTableCell align="center">Tarifa de entrega</StyledTableCell>
            <StyledTableCell align="center">Total</StyledTableCell>
            <StyledTableCell align="center">Estado</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {orders.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center">{row.id}</StyledTableCell>
              <StyledTableCell align="center">{row.created_at}</StyledTableCell>
              <StyledTableCell align="center">{row.product_orders.quantity}</StyledTableCell>
              <StyledTableCell align="center">S/. {row.delivery_fee}</StyledTableCell>
              <StyledTableCell align="center">{row.product_orders.price}</StyledTableCell>
              <StyledTableCell align="center">{row.order_status.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}

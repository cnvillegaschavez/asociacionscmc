import React, { useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getNotificationByUserId } from '../../../api/notificationApi';
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


export default function  Notification(){

    const classes = useStyles();
    const [notifications, setNotifications] = useState([]);
    
    useEffect(() => {
        const getListNotifications = () => {
            const user = getUserInfo();
            getNotificationByUserId(user.id, user.api_token).then(r => {
                const lista = r.data.data;
                setNotifications(lista);
            }).catch(e => {
    
            });
        }
        getListNotifications();
    }, [])

    
    return (
        <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Leido</StyledTableCell>
            <StyledTableCell align="center">Fecha creación</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {notifications.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center">{row.read_at}</StyledTableCell>
              <StyledTableCell align="center">{row.created_at}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
    );
}


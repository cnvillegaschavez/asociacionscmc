import React from 'react';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import nosotros from '../../../images/nosotros.jpg';


const useStyles = makeStyles((theme) => ({
    image: {
       width: "100%",
       height: "100%"
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontWeight: "bold"
    }, 
    paragraph: {
        color: "#7C99C1",
        marginTop: "20px",
        textAlign: "justify",
    }

}));

export default function We() {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={12} sm={6} md={6}>
                <img src={nosotros} className={classes.image}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <div className={classes.paper}>
                    <Typography variant="h3" color="primary" className={classes.title}>Que es el centro de conciliación EX LEGE?</Typography>
                    <Typography variant="h5" color="initial" className={classes.paragraph}>EX LEGE es un Centro de Conciliación de Cusco debidamente autorizado por el Ministerio de Justicia y Derechos Humanos que proporciona servicios de conciliación extrajudicial con altos estándares de calidad, seguridad y confidencialidad, gracias a su filosofía basada en la innovación, desarrollo, capacitación constante y valores éticos.</Typography>
                    
                </div>
            </Grid>
        </Grid>
    );
}

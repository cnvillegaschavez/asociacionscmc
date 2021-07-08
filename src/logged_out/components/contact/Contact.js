import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: "#ffffff",
        paddingBottom: "60px"
    },
    title: {
        textAlign: "center",
        marginTop: "30px",
    },
    divider: {
        marginTop: "10px",
        marginBottom: "60px",
        marginRight: "auto",
        marginLeft: "auto",
        backgroundColor: theme.palette.secondary.main,
        width: "100px",
        height: "3px",
    },
    paragraph: {
        paddingRight: "100px",
        paddingLeft: "100px",
        fontFamily: "Montserrat,sans-serif",
        color: "#f1f1f7",
        fontSize: "16px",
        textAlign: "justify"
    },
    input: {
        backgroundColor: "#ffffff",
        width: "400px"
    },
    form: {
        paddingLeft: "100px", 
    }

}));

const Contact = () => {
    const classes = useStyles();
    return (
        <Fragment>
            <Grid container className={classes.root}>
                <Grid xs={12} className={classes.title}>
                    <Typography variant="h4">ESTAMOS AQUI PARA AYUDAR</Typography>
                    <Typography variant="h6">Contáctenos hoy para programar una consulta</Typography>
                    <Divider className={classes.divider} />
                </Grid>
                <Grid lg={6} className={classes.paragraph}>
                    <Typography variant="subtitle1" >
                        Si tiene preguntas, necesita el consejo de un consejero de confianza o simplemente no sabe a quién acudir, nuestro equipo está aquí para ayudarlo. Contáctenos hoy para programar una consulta gratis.
                        Si no puede visitarnos en nuestra oficina en el centro durante la semana, estaremos más que felices de encontrarnos con usted en su casa o en nuestra oficina durante el fin de semana. Hablamos español.
                    </Typography>
                </Grid>
                <Grid lg={6} className={classes.form}>
                    <Grid container>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                id="name"
                                label="Nombre"
                                name="nombre"
                                /* onChange={handleChange} */
                                autoComplete="nombre"
                                color="secondary"
                                className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                id="email"
                                label="Correo"
                                name="coreo"
                                /* onChange={handleChange} */
                                autoComplete="correo"
                                color="secondary"
                                className={classes.input}
                            />
                        </Grid>
                    </Grid>
                    
                </Grid>

            </Grid>
        </Fragment>
    )
}

export default Contact;

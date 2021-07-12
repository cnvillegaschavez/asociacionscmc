import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';

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
    paragraphWeb: {
        paddingRight: "2%",
        paddingLeft: "20%",
        fontFamily: "Montserrat,sans-serif",
        color: "#f1f1f7",
        fontSize: "16px",
        textAlign: "justify"
    },
    formWeb: {
        paddingLeft: "2%",
        paddingRight: "20%",
    },
    inputWeb: {
        backgroundColor: "#ffffff",
        width: "100%",
        borderRadius: "5px",
        marginTop: "10px"
    },
    paragraphMovil: {
        paddingRight: "10%",
        paddingLeft: "10%",
        fontFamily: "Montserrat,sans-serif",
        color: "#f1f1f7",
        fontSize: "16px",
        textAlign: "justify"
    },
    formMovil: {
        paddingLeft: "10%",
        paddingRight: "10%",
        paddingTop: "20px",
    },
    inputMovil: {
        backgroundColor: "#ffffff",
        width: "100%",
        borderRadius: "5px",
        marginTop: "10px"
    },
    button: {
        marginTop: "10px",
        width: "100%",
        color: theme.palette.common.darkBlack,
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


                <Hidden xsDown>
                    <Grid sm={6} className={classes.paragraphWeb}>
                        <Typography variant="subtitle1" >
                            Si tiene preguntas, necesita el consejo de un consejero de confianza o simplemente no sabe a quién acudir, nuestro equipo está aquí para ayudarlo. Contáctenos hoy para programar una consulta gratis.
                            <br />
                            <br />
                            Si no puede visitarnos en nuestra oficina en el centro durante la semana, estaremos más que felices de encontrarnos con usted en su casa o en nuestra oficina durante el fin de semana. Hablamos español.
                        </Typography>
                    </Grid>
                    <Grid sm={6} className={classes.formWeb}>
                        <form>
                            <Grid container>
                                <Grid item xs={12}>
                                    <TextField
                                        id="name"
                                        placeholder="Nombre"
                                        required
                                        multiline
                                        variant="outlined"
                                        color="secondary"
                                        size="small"
                                        autoComplete="nombre"
                                        className={classes.inputWeb}
                                        inputProps={{ maxLength: 30 }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="name"
                                        placeholder="Correo electrónico"
                                        required
                                        multiline
                                        variant="outlined"
                                        color="secondary"
                                        size="small"
                                        autoComplete="nombre"
                                        className={classes.inputWeb}
                                        inputProps={{ maxLength: 30 }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="name"
                                        placeholder="Cuéntanos su caso..."
                                        required
                                        multiline
                                        variant="outlined"
                                        color="secondary"
                                        size="small"
                                        autoComplete="nombre"
                                        className={classes.inputWeb}
                                        inputProps={{ maxLength: 1000 }}
                                        rows={10}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="secondary" type="submit" className={classes.button}>
                                        Enviar mensaje
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>

                    </Grid>
                </Hidden>


                <Hidden smUp>
                    <Grid sm={6} className={classes.paragraphMovil}>
                        <Typography variant="subtitle1" >
                            Si tiene preguntas, necesita el consejo de un consejero de confianza o simplemente no sabe a quién acudir, nuestro equipo está aquí para ayudarlo. Contáctenos hoy para programar una consulta gratis.
                            <br />
                            <br />
                            Si no puede visitarnos en nuestra oficina en el centro durante la semana, estaremos más que felices de encontrarnos con usted en su casa o en nuestra oficina durante el fin de semana. Hablamos español.
                        </Typography>
                    </Grid>
                    <Grid sm={6} className={classes.formMovil}>
                        <Grid container>
                            <Grid item xs={12}>
                                <TextField
                                    id="name"
                                    placeholder="Nombre"
                                    required
                                    multiline
                                    variant="outlined"
                                    color="secondary"
                                    size="small"
                                    autoComplete="nombre"
                                    className={classes.inputMovil}
                                    inputProps={{ maxLength: 30 }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="name"
                                    placeholder="Correo electrónico"
                                    required
                                    multiline
                                    variant="outlined"
                                    color="secondary"
                                    size="small"
                                    autoComplete="nombre"
                                    className={classes.inputMovil}
                                    inputProps={{ maxLength: 30 }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    id="name"
                                    placeholder="Cuéntanos su caso..."
                                    required
                                    multiline
                                    variant="outlined"
                                    color="secondary"
                                    size="small"
                                    autoComplete="nombre"
                                    className={classes.inputMovil}
                                    inputProps={{ maxLength: 1000 }}
                                    rows={10}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="secondary" className={classes.button}>
                                    Enviar mensaje
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>
            </Grid>
        </Fragment>
    )
}

export default Contact;

import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
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
        marginBottom: "20px",
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
    },
    img: {
        width: "100%",
        marginTop: "10px",
        borderRadius: "5px"
    },
    messageWhatsapp: {
        fontSize: "16px",
        textAlign: "justify",
        marginTop: "10px",
    },
    styleIconWhatsApps: {
        color: "#fff",
        background: "#0DC143",
        borderRadius: "6px",
    }
}));

const Contact = (props) => {
    const { title, subtitle, descriptionPrimary, descriptionSecondary, img } = props;
    const classes = useStyles();
    const phone = "+51962212903";
    const message = `Hola, quisiera consultar acerca del servicio de `;

    return (
        <Fragment>
            <Grid container className={classes.root}>
                <Grid xs={12} className={classes.title}>
                    <Typography variant="h3">{title}</Typography>
                    <Typography variant="h6">{subtitle}</Typography>
                    <Divider className={classes.divider} />
                </Grid>

                <Hidden smDown>
                    <Grid xs={6} className={classes.paragraphWeb}>
                        {
                            img ? <img src={img} alt="no hay imagen" className={classes.img} /> : ''
                        }
                        <Typography variant="subtitle1" >
                            {descriptionPrimary}
                            <br />
                            <br />
                            {descriptionSecondary}
                        </Typography>
                    </Grid>
                    <Grid xs={6} className={classes.formWeb}>
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
                        <Typography variant="subtitle1" className={classes.messageWhatsapp}>
                            Tambien puedes comunicarte con nosotros mediante nuestro <span style={{ color: "#FFB341" }}>WhatsApp</span>, te atenderemos inmediatamente.
                        </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<WhatsAppIcon className={classes.styleIconWhatsApps} style={{ fontSize: "30px" }} />}
                        >
                            <a href={`https://api.whatsapp.com/send?phone=${phone}&text=${message} ${title}`} style={{ textDecoration: "none", color: "#181717" }}>
                                Contactar
                            </a>
                        </Button>

                    </Grid>
                </Hidden>
                
                <Hidden mdUp>
                    <Grid xs={12} className={classes.paragraphMovil}>
                        {
                            img ? <img src={img} alt="no hay imagen" className={classes.img} /> : ''
                        }
                        <Typography variant="subtitle1" >
                            {descriptionPrimary}
                            <br />
                            <br />
                            {descriptionSecondary}
                        </Typography>
                    </Grid>
                    <Grid xs={12} className={classes.formMovil}>
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
                        </form>
                        <Typography variant="subtitle1" className={classes.messageWhatsapp}>
                            Tambien puedes comunicarte con nosotros mediante nuestro <span style={{ color: "#FFB341" }}>WhatsApp</span>, te atenderemos inmediatamente.
                        </Typography>
                        <Button
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<WhatsAppIcon className={classes.styleIconWhatsApps} style={{ fontSize: "30px" }} />}
                        >
                            <a href={`https://api.whatsapp.com/send?phone=${phone}&text=${message} ${title}`} style={{ textDecoration: "none", color: "#181717" }}>
                                Contactar
                            </a>
                        </Button>
                    </Grid>
                </Hidden>
            </Grid>
        </Fragment>
    )
}

export default Contact;

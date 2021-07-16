import React, { Fragment, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import DoneIcon from '@material-ui/icons/Done';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Box from '@material-ui/core/Box';
import emailjs from 'emailjs-com';



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
    },
    list: {
        marginTop: "10px",
        marginLeft: "5%",
        color: "#fff",
    }
}));

const Contact = (props) => {
    const { title, subtitle, descriptionPrimary, descriptionSecondary, list, img } = props;
    const classes = useStyles();
    const phone = "+51962212903";
    const message = `Hola, quisiera consultar acerca del servicio de `;
    const [messageConfirm, setMessageConfirm] = useState();
    const [messageColor, setMessageColor] = useState();


    /* Work with EmailJS */
    const onSendEmailJS = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_4eftzhy', 'template_osenj4a', e.target, 'user_gces61yfrtx4j8VJ8mDOy').then(resp => {
            console.log(resp);
            setMessageConfirm('Su mensaje fue enviado, un representante de SCMC se comunicará con usted los más pronto posible.');
            setMessageColor('#FFFFFF');
            e.target.reset();
        }).catch(err => {
            console.log(err);
            setMessageConfirm('No se pudo enviar sus datos, intente más tarde');
            setMessageColor('#E3B24B');
        });
    }

    /* Work with EmailJS - YO*/
    const onSendEmailJS2 = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_gopng3w', 'template_chvehkr', e.target, 'user_1e3ChOzPpO6EG9B6U3aTm').then(resp => {
            console.log(resp);
            setMessageConfirm('Su mensaje fue enviado, un representante de SCMC se comunicará con usted los más pronto posible');
            setMessageColor('#FFFFFF');
            e.target.reset();
        }).catch(err => {
            console.log(err);
            setMessageConfirm('No se pudo enviar sus datos, intente más tarde');
            setMessageColor('#E3B24B');
        });
    }

    return (
        <Fragment>
            <Grid container className={classes.root}>
                <Grid item xs={12} className={classes.title}>
                    <Typography variant="h3">{title}</Typography>
                    <Typography variant="h6">{subtitle}</Typography>
                    <Divider className={classes.divider} />
                </Grid>

                <Hidden smDown>
                    <Grid item xs={6} className={classes.paragraphWeb}>
                        {
                            img ? <img src={img} alt="no hay imagen" className={classes.img} /> : ''
                        }
                        <Typography variant="subtitle1" >
                            {descriptionPrimary}
                            <br />
                            <br />
                            {descriptionSecondary}
                        </Typography>
                        <List className={classes.list}>
                            {
                                list
                                    ?
                                    list.map((element, index) => (
                                        <Box m={-3}>
                                            <ListItem key={index}>
                                                <ListItemIcon>
                                                    <DoneIcon style={{ color: "#FFB341" }} />
                                                </ListItemIcon>
                                                <ListItemText>
                                                    {element}
                                                </ListItemText>
                                            </ListItem>
                                        </Box>

                                    ))
                                    : ""
                            }
                        </List>
                    </Grid>
                    <Grid item xs={6} className={classes.formWeb}>
                        <form onSubmit={onSendEmailJS}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <TextField
                                        id="name"
                                        name="name"
                                        placeholder="Nombre"
                                        required
                                        variant="outlined"
                                        color="secondary"
                                        size="small"
                                        autoComplete="name"
                                        className={classes.inputWeb}
                                        inputProps={{ maxLength: 30 }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="email"
                                        name="email"
                                        placeholder="Correo electrónico"
                                        required
                                        variant="outlined"
                                        color="secondary"
                                        size="small"
                                        autoComplete="email"
                                        className={classes.inputWeb}
                                        inputProps={{ maxLength: 30 }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="message"
                                        name="message"
                                        placeholder="Cuéntanos su caso..."
                                        required
                                        multiline
                                        variant="outlined"
                                        color="secondary"
                                        size="small"
                                        autoComplete="message"
                                        className={classes.inputWeb}
                                        inputProps={{ maxLength: 1000 }}
                                        rows={10}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="secondary" type="submit" className={classes.button}>
                                        Enviar mensaje
                                    </Button>
                                    <Typography variant="subtitle1" style={{color: messageColor, fontWeight: "normal", fontStyle: "italic"}}>{messageConfirm}</Typography>
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
                    <Grid item xs={12} className={classes.paragraphMovil}>
                        {
                            img ? <img src={img} alt="no hay imagen" className={classes.img} /> : ''
                        }
                        <Typography variant="subtitle1" >
                            {descriptionPrimary}
                            <br />
                            <br />
                            {descriptionSecondary}
                        </Typography>
                        {/* aqui */}
                    </Grid>
                    <Grid item xs={12} className={classes.formMovil}>
                        <form onSubmit={onSendEmailJS}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <TextField
                                        id="name"
                                        name="name"
                                        placeholder="Nombre"
                                        required
                                        variant="outlined"
                                        color="secondary"
                                        size="small"
                                        autoComplete="name"
                                        className={classes.inputMovil}
                                        inputProps={{ maxLength: 30 }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="email"
                                        name="email"
                                        placeholder="Correo electrónico"
                                        required
                                        variant="outlined"
                                        color="secondary"
                                        size="small"
                                        autoComplete="email"
                                        className={classes.inputMovil}
                                        inputProps={{ maxLength: 30 }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="message"
                                        name="message"
                                        placeholder="Cuéntanos su caso..."
                                        required
                                        multiline
                                        variant="outlined"
                                        color="secondary"
                                        size="small"
                                        autoComplete="message"
                                        className={classes.inputMovil}
                                        inputProps={{ maxLength: 1000 }}
                                        rows={10}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained" color="secondary" type="submit" className={classes.button}>
                                        Enviar mensaje
                                    </Button>
                                    <Typography variant="subtitle1" style={{color: messageColor, fontWeight: "normal", fontStyle: "italic"}}>{messageConfirm}</Typography>
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

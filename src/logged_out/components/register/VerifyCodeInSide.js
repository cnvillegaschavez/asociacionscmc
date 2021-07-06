import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Box, withWidth, Snackbar } from "@material-ui/core";
import { useHistory } from 'react-router';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {verifyCode, register, startVerification} from '../../../api/userApi';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: "url('../assets/logo.png')",
        backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        fontSize: "35px",
        fontWeight: "bold",
        paddingTop: "40px",
        paddingLeft: "40px",
    },
    paper: {
        margin: theme.spacing(4, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    buttonLink: {
        textDecoration: "none",
        color: theme.palette.common.greenColor,
        fontWeight: 'bold',
        cursor: 'pointer'
    }
}));

const VerifyCodeInSide = () => {   

    const history = useHistory();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
        
    const [values, setValues] = useState({
        name:  history.location.state.name,
        country_code: history.location.state.country_code,
        phone: history.location.state.phone,
        email: history.location.state.email,
        password: history.location.state.password,
        passwordConfirm: history.location.state.passwordConfirm, 
        token: '',
        isDisabled: false,
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({ ...values, [name]: value });        
    };

    const onPageRegister = () =>{
        history.push('/register');
    }   

    const onVerifyCode = (event) => {
        event.preventDefault();
        console.log("Mis datos");
        console.log(values)
        verifyCode(values).then(r=>{
            console.log("Registrado")
            setValues({ ...values, isDisabled: false });
            onRegister();
        }).catch(e=>{
            console.log("Error cath")
            setOpen2(true);
            setValues({ ...values, isDisabled: false });
            setValues({ ...values, token: '' });
            console.log("Mis datos catch");
            console.log(values)
        });
    }

    const onRegister = () => {    
        register(values).then(r=>{
            history.push("/login");
        }).catch(e=>{
            console.log("no registro")
        });
    }

    const onStartVerification = (event) => {
        event.preventDefault();
        setValues({ ...values, isDisabled: true });
        startVerification(values).then(r=>{
            setValues({ ...values, isDisabled: false });
            setOpen(true);
        }).catch(e=>{
            setValues({ ...values, isDisabled: false });
        });
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    const handleClose2 = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen2(false);
    };

    const showCodeVerificationError = () => <div>
        <Snackbar
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        open={open2}
        autoHideDuration={6000}
        onClose={handleClose2}
        message='El código de validación no es correcto'
        action={
            <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose2}>
                Cerrar
            </Button>
            <IconButton
                aria-label="close"
                color="inherit"
                className={classes.close}
                onClick={handleClose2}
            >
                <CloseIcon />
            </IconButton>
            </React.Fragment>
        }
        />
    </div>;

    const showSendCodeVerification = () => <div>
        <Snackbar
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message='Reenviamos el codigo a su teléfono nuevamente'
        action={
            <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                Cerrar
            </Button>
            <IconButton
                aria-label="close"
                color="inherit"
                className={classes.close}
                onClick={handleClose}
            >
                <CloseIcon />
            </IconButton>
            </React.Fragment>
        }
        />
    </div>;

    
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Hidden xsDown> 
                <Grid item xs={false} sm={4} md={7} className={classes.image}>
                            Hola, Bienvenido de nuevo
                </Grid>
            </Hidden>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>


                    <Grid container>
                        <Grid item xs={12}>
                            <Box border={0} mt={10}>
                                <Typography variant="h5" align="left" className={classes.color1}>
                                    Verificar teléfono
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Box mb={4}>
                            <Grid item xs={12}>
                                <Box border={0}>
                                    <Typography variant="subtitle1" align="left" className={classes.color2}>
                                        Verificamos tu nro de teléfono por mensaje de texto, ingresa el codigo de 4 digitos que recibiste y haz click en "confirmar".
                                    </Typography>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>

                    <form className={classes.form} onSubmit={onVerifyCode}>
                        <Box  mb={2}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="token"
                                label="Codigo"
                                name="token"
                                onChange={handleChange}
                                autoComplete="token"
                                autoFocus
                            />   
                        </Box>

                        <Button
                            fullWidth
                            variant="contained"
                            color='primary'
                            type="submit">
                            Confirmar
                        </Button>
                        <br/>
                        <br/>
                        <Button
                            fullWidth
                            variant="contained"
                            color='secondary'
                            disabled={values.isDisabled}
                            onClick={onStartVerification}>
                            Reenviar codigo
                        </Button>
                        <br/>
                        <br/>
                        <Button
                            fullWidth
                            variant="contained"
                            color='secondary'
                            onClick={onPageRegister}
                            >
                            Cancelar
                        </Button>

                    </form>
                    { showSendCodeVerification() }
                    { showCodeVerificationError() }
                </div>
            </Grid>
        </Grid>
    );
}

export default withWidth()(VerifyCodeInSide);

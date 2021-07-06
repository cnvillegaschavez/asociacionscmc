import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Box, withWidth, Snackbar } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router';
import Hidden from '@material-ui/core/Hidden';
import { sendEmail } from '../../../api/userApi'

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

const SignInSide = () => {   

    const history = useHistory();
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({
        email: '',
        isDisabled: false
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({ ...values, [name]: value });        
    };

    const onLogin = () => {
        history.push('/login');
    } 

    const onRegister = () => {
        history.push('/register');
    }   

    const onSendEmail = (event) => {
        event.preventDefault();
        setValues({ ...values, isDisabled: true });
        sendEmail(values).then(r=>{
            setValues({ ...values, isDisabled: false });
    
        }).catch(e=>{
            setOpen(true);
            setValues({ ...values, isDisabled: false });
        });
        console.log("envio de correo")
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    const showLoginEmailError = ()=> <div>
        <Snackbar
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message='El correo ingresado no existe'
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
                            Hola, Bienvenido de nuevo!
                </Grid>
            </Hidden>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>

                    <Grid container >
                        <Grid item xs={10}>
                            <Box border={0}>
                                <Typography variant="body2" align="right">
                                    ¿No tienes una cuenta?
                        </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2}>
                            <Box border={0} align="center" mb={4}>
                                <Link to="/register" variant="body2" className={classes.buttonLink} onClick={onRegister}>
                                    Empezar
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Box mb={4}>
                            <Grid item xs={12}>
                                <Box border={0}>
                                    <Typography variant="subtitle1" align="left" className={classes.color2}>
                                        Se le hara el envio de un enlace para restablecer su contraseña
                                    </Typography>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12}>
                            <Box border={0}>
                                <Typography variant="h5" align="left" className={classes.color1}>
                                    Reiniciar contraseña
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <form className={classes.form} onSubmit={onSendEmail}>
                        <Box mb={2}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Correo"
                                name="email"
                                onChange={handleChange}
                                autoComplete="email"
                                autoFocus
                            />
                        </Box>
                        <Button
                            fullWidth
                            variant="contained"
                            color='primary'
                            disabled={values.isDisabled}
                            type="submit">
                            Enviar
                        </Button>
                        <br/>
                        <br/>
                        <Button
                            fullWidth
                            variant="contained"
                            color='secondary'
                            onClick={onLogin}
                            >
                            Volver a inicio de sesión
                        </Button>

                    </form>
                    { showLoginEmailError() }
                </div>
            </Grid>
        </Grid>
    );
}


export default withWidth()(SignInSide);

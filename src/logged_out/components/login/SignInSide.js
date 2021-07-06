import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Box, withWidth, Snackbar } from "@material-ui/core";
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router';
import Hidden from '@material-ui/core/Hidden';
import login from '../../../api/userApi'
import Constants from './../../../util/constants';


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
        password: '',
        showPassword: false,
        isDisabled: false
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({ ...values, [name]: value });        
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const onContinue = () =>{
        history.push('/');
    }

    const onRegister = () =>{
        history.push('/register');
    } 
     
    const onLogin = (event) => {
        event.preventDefault();
        setValues({ ...values, isDisabled: true });
        login(values).then(r=>{
            setValues({ ...values, isDisabled: false });
            if(r.data.data){
                sessionStorage.setItem(Constants.userInfo,JSON.stringify(r.data.data));
                onContinue();
            } else {
                setOpen(true);
            }
        }).catch(e=>{
            setOpen(true);
            setValues({ ...values, isDisabled: false });
        });
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    const showLoginUserError = ()=> <div>
        <Snackbar
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message='El usuario es incorrecto intente de nuevo'
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
                                        Ingrese sus datos a continuación
                                    </Typography>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12}>
                            <Box border={0}>
                                <Typography variant="h5" align="left" className={classes.color1}>
                                    Iniciar sesión
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <form className={classes.form} onSubmit={onLogin}>
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

                        <FormControl variant="outlined" fullWidth>
                            <InputLabel htmlFor="outlined-adornment-password">Contraseña *</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                name="password"
                                required
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                }
                                labelWidth={100}
                            />
                        </FormControl>
                        
                        <Grid container>
                            <Grid item xs={6}>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Recuérdame"
                                />
                            </Grid>
                            <Grid item xs={6} align="right">
                                <Link href="/resetpassword" variant="body2">
                                    ¿Se te olvidó tu contraseña?
                                </Link>
                            </Grid>
                        </Grid>

                        <Button
                            fullWidth
                            variant="contained"
                            color='primary'
                            disabled={values.isDisabled}
                            type="submit">
                            Iniciar sesíon
                        </Button>
                        <br/>
                        <br/>
                        <Button
                            fullWidth
                            variant="contained"
                            color='secondary'
                            onClick={onContinue}
                            >
                            Continuar sin iniciar sesión
                        </Button>

                    </form>
                    { showLoginUserError() }
                </div>
            </Grid>
        </Grid>
    );
}


export default withWidth()(SignInSide);

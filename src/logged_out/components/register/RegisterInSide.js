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
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router';
import Hidden from '@material-ui/core/Hidden';
import { startVerification } from '../../../api/userApi';

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
        name: '',
        country_code: '+51',
        phone: '',
        email: '',
        password: '',
        passwordConfirm: '',
        showPassword: false,
        showPasswordConfirm: false,
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

    const handleClickShowPasswordConfirm = () => {
        setValues({ ...values, showPasswordConfirm: !values.showPasswordConfirm });
    };

    const handleMouseDownPasswordConfirm = (event) => {
        event.preventDefault();
    };

    const onLogin = () =>{
        history.push('/login');
    }

    const onStartVerification = (event) => {
        event.preventDefault();
        setValues({ ...values, isDisabled: true });
        startVerification(values).then(r=>{
            setValues({ ...values, isDisabled: false });
            if(!r.data.data){
                history.push({ 
                    pathname: '/verifycode',
                    state: values,
                });
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

    const showRegisterUserError = () => <div>
        <Snackbar
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message='Este usuario ya existe, por favor intente de nuevo'
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
                    Bienvenido, unete a Glovito App                
                </Grid>
            </Hidden>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>

                    <Grid container>
                        <Grid item xs={8}>
                            <Box border={0}>
                                <Typography variant="body2" align="right">
                                    ¿Ya tienes una cuenta?
                        </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box border={0} align="center" mb={4}>
                                <Link variant="body2" className={classes.buttonLink} onClick={onLogin}>
                                    Iniciar sesión
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12}>
                            <Box border={0}>
                                <Typography variant="h5" align="left" className={classes.color1}>
                                    Crear cuenta
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Box mb={4}>
                            <Grid item xs={12}>
                                <Box border={0}>
                                    <Typography variant="subtitle1" align="left" className={classes.color2}>
                                        Pide lo que desees una vez creado tu cuenta
                                    </Typography>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>

                    <form className={classes.form} onSubmit={onStartVerification}>
                        <Box mb={-2.6} mt={2}>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="name"
                                        label="Nombre"
                                        name="name"
                                        onChange={handleChange}
                                        autoComplete="name"
                                        autoFocus
                                    />
                                </Grid>
                            </Grid>
                        </Box>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="phone"
                            label="Télefono"
                            name="phone"
                            onChange={handleChange}
                            autoComplete="phone"
                            
                        />

                        <Box mt={-2}>
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
                                
                            />
                        </Box>

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

                        <Box mt={1} mb={3}>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="outlined-adornment-password2">Confirmar contraseña *</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password2"
                                    name="passwordConfirm"
                                    required
                                    type={values.showPasswordConfirm ? 'text' : 'password'}
                                    value={values.passwordConfirm}
                                    onChange={handleChange}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPasswordConfirm}
                                        onMouseDown={handleMouseDownPasswordConfirm}
                                        edge="end"
                                        >
                                            {values.showPasswordConfirm ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    labelWidth={170}
                                />
                            </FormControl>
                        </Box>
                        
                        <Button
                            fullWidth
                            variant="contained"
                            color='primary'
                            disabled={values.isDisabled}
                            type='submit'>
                                Continuar
                        </Button>
                        
                    </form>
                    { showRegisterUserError() }
                </div>
            </Grid>
        </Grid>
    );
}


export default withWidth()(SignInSide);
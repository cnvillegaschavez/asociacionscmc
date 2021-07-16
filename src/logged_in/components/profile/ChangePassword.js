import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from '@material-ui/core/styles';
import { getUserInfo } from '../../../api/userApi';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    accountAvatar: {
        backgroundColor: theme.palette.secondary.main,
        height: 100,
        width: 100,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.down("xs")]: {
          marginLeft: theme.spacing(1.5),
          marginRight: theme.spacing(1.5),
        }
    },
    paper: {
        padding: theme.spacing(1),
    },
}));

const ChangePassword = () => {

    const classes = useStyles();
    const [values, setValues] = useState({
        oldPassword: '',
        newPassword: '',
        newPasswordConfirm: '',
        showOldPassword: false,
        showNewPassword: false,
        showNewPasswordConfirm: false,
        isDisabled: false,
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({ ...values, [name]: value });   
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
   
    const handleClickShowOldPassword = () => {
        setValues({ ...values, showOldPassword: !values.showOldPassword });
    };

    const handleClickShowNewPassword = () => {
        setValues({ ...values, showNewPassword: !values.showNewPassword });
    };

    const handleClickShowNewPasswordConfirm = () => {
        setValues({ ...values, showNewPasswordConfirm: !values.showNewPasswordConfirm });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
       
        // const user = getUserInfo();
        // TODO: aqui consumir api "changeNewPassword";
    }
   
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={8}>
                    <Box align="right" p={2} m={2} >
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <Box align="left">
                                <Typography variant="h5">
                                    Cambiar contraseña:
                                </Typography>
                            </Box> 

                            <Box mt={3} mb={3}>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel htmlFor="outlined-adornment-password">Antigua contraseña *</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password1"
                                        name="oldPassword"
                                        required
                                        type={values.showOldPassword ? 'text' : 'password'}
                                        value={values.oldPassword}
                                        onChange={handleChange}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowOldPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {values.showOldPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                        labelWidth={160}
                                    />
                                </FormControl>
                            </Box>

                            <Box mt={3} mb={3}>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel htmlFor="outlined-adornment-password">Nueva contraseña *</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password2"
                                        name="newPassword"
                                        required
                                        type={values.showNewPassword ? 'text' : 'password'}
                                        value={values.newPassword}
                                        onChange={handleChange}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowNewPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {values.showNewPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                        labelWidth={150}
                                    />
                                </FormControl>
                            </Box>
                           
                            <Box mt={3} mb={3}>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel htmlFor="outlined-adornment-password2">Confirmar nueva contraseña *</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password3"
                                        name="newPasswordConfirm"
                                        required
                                        type={values.showNewPasswordConfirm ? 'text' : 'password'}
                                        value={values.newPasswordConfirm}
                                        onChange={handleChange}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowNewPasswordConfirm}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                                {values.showNewPasswordConfirm ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                        labelWidth={230}
                                    />
                                </FormControl>
                            </Box>

                            <Grid item xs={12} md={4}>
                                <Box mt={3}>
                                    <Button
                                        color="primary"
                                        variant="contained"
                                        startIcon={<SaveIcon/>}
                                        type="submit"
                                        fullWidth
                                        disabled={values.isDisabled}
                                    >
                                        Cambiar contraseña
                                    </Button>
                                </Box>
                            </Grid>    
                           
                        </form>        
                    </Box>
                </Grid>
            </Grid>   
        </div>
    )
}
export default ChangePassword;

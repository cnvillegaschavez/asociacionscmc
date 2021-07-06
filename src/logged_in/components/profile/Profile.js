import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Box } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";
import Constants from './../../../util/constants';
import { makeStyles } from '@material-ui/core/styles';
import { isAuth, getUserInfo, updateUserInfo } from '../../../api/userApi';
import { updateProfile } from '../../../api/profileApi';
import { useHistory } from 'react-router';


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

const Profile = () => {

    const classes = useStyles();
    const history = useHistory();
    const [values, setValues] = useState([
        {
            name: '',
            email: '',
            phone: '',
            address: ''
        }
    ]);

    useEffect (() => {
        if(isAuth()){
            const user = getUserInfo();
            setValues([
                {
                    name: user.name,
                    email: user.email,
                    phone: user.custom_fields.phone.value,
                    address: user.custom_fields.address.value,
                }
            ]);
        }
    },[])

    const handleChange = (index, event) => {
        const data = [...values];
        data[index][event.target.name] = event.target.value;
        setValues(data);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { name: values[0].name, address: values[0].address, email: values[0].email }
        const user = getUserInfo();

        updateProfile(user.id, user.api_token, data).then(r=>{
            updateUserInfo(data);     
            history.push('/c/profile');
        }).catch(e=>{
            console.log(e);
        });        
    }
   
    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={4}>
                    <Box align="center" p={4} m={2}>
                        Foto de perfil
                        <Box my={10}>
                            <Avatar
                                alt="profile picture"
                                src={Constants.profilePicture}
                                className={classNames(classes.accountAvatar)}
                            />
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box align="center" p={2} m={2} >
                        <form className={classes.form} onSubmit={handleSubmit}>
                            <Box align="left">
                                <Typography variant="h5">
                                    Datos personsales:
                                </Typography>
                            </Box>
                            { 
                                values.map((element, index) => (
                                    <div key={index}>
                                                   
                                        <Grid container>
                                            <Grid item xs={12} md={6} className={classes.paper}>
                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="name"
                                                    label="Nombre completo"
                                                    name="name"
                                                    autoFocus
                                                    value={element.name || ''}
                                                    onChange={event => handleChange(index, event)}
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6} className={classes.paper}>
                                                <Box ml={0}>
                                                    <TextField
                                                        variant="outlined"
                                                        margin="normal"
                                                        required
                                                        fullWidth
                                                        id="email"
                                                        label="Correo"
                                                        name="email"
                                                        value={element.email || ''}
                                                        onChange={event => handleChange(index, event)}
                                                    />
                                                </Box>
                                            </Grid>
                                        </Grid>

                                        <Grid container>
                                            <Grid item xs={12} sm={12} md={3} className={classes.paper}>
                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    required
                                                    fullWidth
                                                    id="phone"
                                                    label="Teléfono"
                                                    name="phone"
                                                    value={element.phone || ''}
                                                    onChange={event => handleChange(index, event)}
                                                    disabled
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={9} className={classes.paper}>
                                                <Box ml={0}>
                                                    <TextField
                                                        variant="outlined"
                                                        margin="normal"
                                                        required
                                                        fullWidth
                                                        id="address"
                                                        label="Dirección"
                                                        name="address"
                                                        value={element.address || ''}
                                                        onChange={event => handleChange(index, event)}
                                                    />
                                                </Box>
                                            </Grid>
                                        </Grid>

                                    </div>
                                )
                            )}
                 
                            <Grid container>
                                <Grid item xs={12} md={5} lg={3} className={classes.paper}>
                                    <Box mt={4}>
                                        <Button
                                        color="primary"
                                        variant="contained"
                                        fullWidth
                                        startIcon={<SaveIcon/>}
                                        type="submit"
                                        >
                                            Guardar cambios
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </form>        
                    </Box>
                </Grid>
            </Grid>   
        </div>
    )
}
export default Profile;

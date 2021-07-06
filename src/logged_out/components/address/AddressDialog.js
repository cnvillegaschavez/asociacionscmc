import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Snackbar from '@material-ui/core/Snackbar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import HomeIcon from '@material-ui/icons/Home';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AddressAutocomplete from './AddressAutocomplete';
import { getAddressByUserId, registerAddress } from '../../../api/addressApi';
import { getUserInfo } from '../../../api/userApi';
import { useDispatch } from 'react-redux';
import { getListAddressActionRedux, addCurrentAddressActionRedux } from '../../../redux/actions/addressAction';
import { v1 as uuid} from 'uuid';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    avatar: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.secondary.main,
    },
    flechaRight: {
        backgroundColor: theme.palette.common.white,
        color: theme.palette.primary.main,
    },
    buttonClose:{
        marginLeft: theme.spacing(2)
    },
    menuButtonText: {
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.h6.fontWeight,
        width: '100%',
    },
    caja: {
        display: 'flex',
    }
}));

function SimpleDialog(props) {
    const classes = useStyles();
    const [openModel, setOpenModal] = useState(false);
    const refPickupLocationAddress1 = useRef();
    const user = getUserInfo();
    const { onClose, selectedValue, open } = props;
    const [ listAdress, setListAddress ] = useState([]);
    const [ addressInfo, setAddressInfo ] = useState({
        description:  '',
        address: '',
        latitude: '',
        longitude: '',
        is_default: false,
        user_id: '',
    });
    
    const dispatch = useDispatch();
    const misAddress = useSelector(store => store.dataAddress.arrayAddress);
    const currentAddress = useSelector(store => store.dataAddress.currentAddress);

    useEffect (() => {
        if(user){
            getListAddress(); // cargara lista en el AddressDialog
            //----------------------------------------------------------//
            getStoreListAddress(user.id, user.api_token); // cargara lista de direcciones en el "store"
            //----------------------------------------------------------//
        }
    }, [])

    const getStoreListAddress = (id, token) => {
        dispatch(  
            getListAddressActionRedux(id, token)
        );
    }

    const addStoreCurrentAddress = (address) => {
        dispatch(  
            addCurrentAddressActionRedux(address)
        );
    }

    const handleClose = () => {
        onClose(selectedValue);
    };
    
    const closeDialog = () => {
        onClose('');
    }
    
    const handleListItemClick = (address) => {
        onClose(address);
        localStorage.setItem("currentAddress", address)
    };
   
    const onSelectPickupLocationAddressLine1 = (value) => {
        try{
            if(user){
                const newAddress = {
                    description:  '',
                    address: value.fullAddress,
                    latitude: value.latitude,
                    longitude: value.longitude,
                    is_default: false,
                    user_id: user.id,
                }
                setAddressInfo(newAddress);
            }else{
                setOpenModal(true);
            }
        }catch(e){
            setOpenModal(true);
        } 
    }

    const addDeliveryAddress = () => { /* boton añadir */
        if(user){
            registerAddress(user.api_token, addressInfo).then(r=>{
                handleListItemClick(addressInfo.address); 
                addStoreCurrentAddress(addressInfo.address);
                getListAddress();
            }).catch(e=>{
                console.log("error: addDeliveryAddress")
            });
        }
    };

    const getListAddress = () => {
        getAddressByUserId(user.id, user.api_token).then(r=>{
            const lista = r.data.data;
            setListAddress(lista);
        }).catch(e=>{
            console.log("error: getListAddress")
        });
    }

    const handleCloseModal = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpenModal(false);
    };

    const showLoginUserError = ()=> <div>
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            open={openModel}
            autoHideDuration={6000}
            onClose={handleCloseModal}
            message='Necesitas iniciar sesión'
            action={
                <React.Fragment>
                    <Button color="secondary" size="small" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                    <IconButton
                        aria-label="close"
                        color="inherit"
                        className={classes.close}
                        onClick={handleCloseModal}
                    >
                        <CloseIcon />
                    </IconButton>
                </React.Fragment>
            }
        />
    </div>;

    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title">Direcciones de entrega agregadas:</DialogTitle>
            <List>
                {listAdress.map((element, key) => (
                    <ListItem button key={key} onClick={() => handleListItemClick(element.address)}>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <HomeIcon/>
                            </Avatar>
                        </ListItemAvatar>

                        <ListItemText primary={element.address} />

                        <ListItemAvatar>
                            <Avatar className={classes.flechaRight}>
                                <ChevronRightIcon color="primary"/>
                            </Avatar>
                        </ListItemAvatar>

                    </ListItem>
                ))}

                <Box mx={2} mb={1} border={0}>
                    <AddressAutocomplete 
                        ref={refPickupLocationAddress1} 
                        idName='pickupLocationAddressLine1'
                        name= 'pickupLocationAddressLine1'
                        onSelectAddressInfo={onSelectPickupLocationAddressLine1} 
                        isRequired
                    />
                </Box>
 
                <Box mx={2} mb={1} border={0} align="right">
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => addDeliveryAddress()}
                    >
                        Agregar
                    </Button>
                    <Button
                        className={classes.buttonClose}
                        color="secondary"
                        variant="contained"
                        onClick={() => closeDialog()}
                    >
                        Cerrar
                     </Button>
                </Box>
                { showLoginUserError() }
            </List>
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function AddressDialog() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValueCut, setSelectedValueCut] = useState('');
    const user = getUserInfo();
    const dispatch = useDispatch();
    const currentAddress = useSelector(store => store.dataAddress.currentAddress);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (values) => {
        setOpen(false);
        setSelectedValue(values);
        if(values){
            console.log(values);
            addStoreCurrentAddress(values);
            var cut='';
            for(var i=0; i<23; i++){
                cut = cut + values.charAt(i);
            }
            setSelectedValueCut(cut + ' ...');
        }
    };

    const addStoreCurrentAddress = (value) => {
        dispatch(  
            addCurrentAddressActionRedux(value)
        );
    }

    useEffect (() => {
        if(user){
            //console.log("currentAddress: " + currentAddress);
            const localStoreCurrentAddress = localStorage.getItem("currentAddress");
            setSelectedValue(localStoreCurrentAddress);
            var cut='';
            for(var i=0; i<23; i++){
                cut = cut + localStoreCurrentAddress.charAt(i);
            }
            setSelectedValueCut(cut + ' ...');
        }
    }, [])


    return (
        <div>
            <br/>
            <Hidden mdUp>
                <Button color="primary" onClick={handleClickOpen} size="small" className={ classes.menuButtonText } endIcon={<ExpandMoreIcon/>}>
                    { selectedValueCut || "Dirección de entrega"}
                </Button>
            </Hidden>
            <Hidden smDown>
                <Button color="primary" onClick={handleClickOpen} size="small" className={ classes.menuButtonText } endIcon={<ExpandMoreIcon/>}>
                    { selectedValue || "Dirección de entrega"}
                </Button>
            </Hidden>
            <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
        </div>
    );
}

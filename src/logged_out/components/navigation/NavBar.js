import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  Hidden,
  IconButton,
  withStyles,
  Avatar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import classNames from "classnames";
import { isAuth, getUserInfo } from '../../../api/userApi';
import Menu from '@material-ui/core/Menu';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Constants from './../../../util/constants';
import { useHistory } from 'react-router';
import AddressDialog from '../address/AddressDialog';

const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },  
  noDecoration: {
    textDecoration: "none !important",
  },
  logo : { width: 57, cursor:'pointer' },
  username: {
    paddingLeft: 0,
    paddingRight: theme.spacing(2)
  },
  accountAvatar: {
    backgroundColor: theme.palette.secondary.main,
    height: 32,
    width: 32,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1.5)
    }
  },
  address: {
    // position: 'relative',
    display: 'block',
    paddingBottom: theme.spacing(2.5),
    // whiteSpace: 'nowrap',
    // overOflow: 'hidden',
    // textOverflow: 'ellipsis',
    //width: '100px'
  },
  caja: {
    position: 'float',
    display: 'block',
  }
  
});

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

function NavBar(props) {
  const {
    classes,
    handleMobileDrawerOpen,
    handleMobileDrawerClose,
    mobileDrawerOpen,
    selectedTab
  } = props;
 
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorButtonServices, setAnchorButtonServices] = useState(null);
  const [userUrlIcon, setUserUrlIcon] = useState(Constants.profilePicture);
  const [servicesConciliacion, setServicesConciliacion] = useState([
      'Conciliación para MYPE', 'Conciliación Familiar', 'Conciliación Empresarial', 'Conciliación para Divorcio',
      'Conciliación Social', 'Conciliación para Personas Naturales', 'Conciliación en Contratación con el Estado',
      'Conciliación fuerda del Centro de Conciliación', 'Conciliación con Apoderado', 'Conciliación hoy mismo'
  ]);
  const [menuItems, setMenuItems] = useState([
    {
      link: "/",
      name: "Mediación Online",
      isLogin: false,
      icon: <HomeIcon className="text-white" />
    },
    {
      link: "/products",
      name: "Arbitraje Virtual",
      isLogin: false,
      icon: <ShoppingCartIcon className="text-white" />
    },
    {
      link: "/company",
      name: "Abogado Virtual",
      isLogin: false,
      icon: <AccountBalanceIcon className="text-white" />
    },
    {
        link: "/login",
        name: "Mesa de Partes Virtual",
        isLogin: false,
        icon: <AccountBalanceIcon className="text-white" />
      }
  ]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorButtonServices(null);
  }

  const handleOpenMenu = (event) => {
    setAnchorButtonServices(event.currentTarget);    
  }

  useEffect(() => {
    const getUserMenu = () => {
      if(isAuth()){
        let user= getUserInfo();
        let urlIcon = Constants.profilePicture;
        if(user.media && user.media[0]){
          urlIcon = user.media[0].thumb.replace(Constants.replacePath, Constants.extension);
        }
        setUserUrlIcon(urlIcon);
        let isLoginItem =
        {
          name: user.name,
          isLogin: true,
          link: '/c/profile',
          icon: <SupervisorAccountIcon className="text-white" />
        };
        let items= menuItems;       
        items.pop();
        items.push(isLoginItem);
        setMenuItems(items);
      }
    }
    getUserMenu();
  },[menuItems]);

  const onGoToHome = ()=>{
    props.history.go('/');
  }

  const logOut = () => {
    sessionStorage.removeItem(Constants.userInfo);
    props.history.go('/');
  }

  const onProfile = () => {
    history.push('/c/profile')
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div>
            <img src='logo.png' alt="Logo" className={classes.logo} onClick={onGoToHome}/>  
          </div>
       
          <div className={classes.caja}>
            <Hidden mdUp>
              <IconButton
                className={classes.menuButton}
                onClick={handleMobileDrawerOpen}
                aria-label="Open Navigation"
              >
                <MenuIcon color="primary" />
              </IconButton>
            </Hidden>
        
            <Hidden smDown>

              <Button
                aria-controls="menu"
                onClick={handleOpenMenu}
                disableRipple
                variant="contained"
                color="primary"
                size="large"
                endIcon={<KeyboardArrowDownIcon/>}
              >
                Servicios de Conciliación
              </Button>
              
              <Menu style={{marginTop: "35px", width: "1000px"}} id="menu" onClose={handleMenuClose} anchorEl={anchorButtonServices} open={Boolean(anchorButtonServices)}>
                  {
                      servicesConciliacion.map((element, index) => (
                        <div key={index}>
                            <MenuItem onClick={handleMenuClose}>{element}</MenuItem>
                        </div>
                      ))
                  }
              </Menu>


              {menuItems.map(element => {
                if (element.isLogin===false) {
                  return (
                    <Link
                      key={element.name}
                      to={element.link}
                      className={classes.noDecoration}
                      onClick={handleMobileDrawerClose}
                    >
                      
                      <Button
                        color="primary"
                        size="large"
                        classes={{ text: classes.menuButtonText }}
                      >
                        {element.name}
                      </Button>
                    </Link>
                  );
                }               
                return (
                  <Fragment key={element.name}>
                    <Button
                        color="primary"
                        size="large"
                        onClick={handleClick}
                        classes={{ text: classes.menuButtonText }}
                    >
                        <Avatar
                            alt="profile picture"
                            src={userUrlIcon}
                            className={classNames(classes.accountAvatar)}
                        />
                    </Button>
                    <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <StyledMenuItem onClick={onProfile}>
                            <ListItemIcon>
                                <PersonIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Mi perfil" />
                        </StyledMenuItem>
                        <StyledMenuItem onClick={logOut}>
                            <ListItemIcon>
                                <ExitToAppIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Cerrar sesión" />
                        </StyledMenuItem>
                    </StyledMenu>
                  </Fragment> 
                );
              })}
            </Hidden>
          
          </div>
        </Toolbar>
      </AppBar>
      
      <NavigationDrawer
        menuItems={menuItems}
        anchor="right"
        open={mobileDrawerOpen}
        selectedItem={selectedTab}
        onClose={handleMobileDrawerClose}
      />
    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleMobileDrawerOpen: PropTypes.func,
  handleMobileDrawerClose: PropTypes.func,
  mobileDrawerOpen: PropTypes.bool,
  selectedTab: PropTypes.string,
  openRegisterDialog: PropTypes.func.isRequired,
  openLoginDialog: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(NavBar);

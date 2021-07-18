import React, { PureComponent, Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Drawer,
  List,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
  Tooltip,
  Box,
  withStyles,
  isWidthUp,
  withWidth,
  Menu,
  MenuItem
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import NavigationDrawer from "../../../shared/components/NavigationDrawer";
import Constants from './../../../util/constants';
import { isAuth, getUserInfo } from '../../../api/userApi';

const styles = theme => ({
  appBar: {
    boxShadow: theme.shadows[6],
    backgroundColor: theme.palette.common.white,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginLeft: 0
    }
  },
  appBarToolbar: {
    display: "flex",
    justifyContent: "space-between",
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    }
  },
  accountAvatar: {
    backgroundColor: theme.palette.secondary.main,
    height: 24,
    width: 24,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    cursor: 'pointer',
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1.5),
      marginRight: theme.spacing(1.5)
    }
  },
  drawerPaper: {
    height: "100%vh",
    whiteSpace: "nowrap",
    border: 0,
    width: theme.spacing(7),
    overflowX: "hidden",
    marginTop: theme.spacing(8),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    },
    backgroundColor: theme.palette.common.black
  },
  smBordered: {
    [theme.breakpoints.down("xs")]: {
      borderRadius: "50% !important"
    }
  },
  menuLink: {
    textDecoration: "none",
    color: theme.palette.text.primary
  },
  iconListItem: {
    width: "auto",
    borderRadius: theme.shape.borderRadius,
    paddingTop: 11,
    paddingBottom: 11,
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  textPrimary: {
    color: theme.palette.primary.main
  },
  mobileItemSelected: {
    backgroundColor: `${theme.palette.primary.main} !important`
  },
  brandText: {
    fontFamily: "'Baloo Bhaijaan', cursive",
    fontWeight: 400
  },
  username: {
    paddingLeft: 0,
    paddingRight: theme.spacing(2)
  },
  justifyCenter: {
    justifyContent: "center"
  },
  permanentDrawerListItem: {
    justifyContent: "center",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  logo : { width: 57, cursor:'pointer' },
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
class NavBar extends PureComponent {
    constructor(props) {
        super(props);
    }
  state = { mobileOpen: false, sideDrawerOpen: false, userName:'', anchorEl: null, menuMobileItems:[]};

  componentDidMount(){
    if(isAuth()){
      const user = getUserInfo();
      const { menuMobileItems } = this.state;
      this.setState({ userName: user.name });
      menuMobileItems.push(
        {
          link: "/c/profile",
          name: user.name,
          onClick: () => {
            this.closeMobileDrawer();
          },
          icon: {
            mobile: <DashboardIcon className="text-white" />
          }
        }
      );
      menuMobileItems.push(
        {
          link: "/",
          name: 'Ir a Inicio',
          onClick: () => {
            this.closeMobileDrawer();
          },
          icon: {
            mobile: <ExitToAppIcon className="text-white" />
          }
        }
      );
    }
  }  
 
  // Will be use to make website more accessible by screen readers
  links = [];

  openMobileDrawer = () => {
    this.setState({ mobileOpen: true });
  };

  closeMobileDrawer = () => {
    this.setState({ mobileOpen: false });
  };

  closeDrawer = () => {
    this.setState({ sideDrawerOpen: false });
  };

  openDrawer = () => {
    this.setState({ sideDrawerOpen: true });
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  


  render() {
    const { mobileOpen, userName, anchorEl, menuMobileItems} = this.state;
    const { history } = this.props;
    const {
      selectedTab,
      classes,
      width
    } = this.props;

    const menuItems = [
      {
        link: "/c/dashboard",
        name: "Dashboard",
        onClick: () => {
          this.closeMobileDrawer();
        },
        icon: {
          desktop: (
            <DashboardIcon
              className={
                selectedTab === "Dashboard" ? classes.textPrimary : "text-white"
              }
              fontSize="small"
            />
          ),
          mobile: <DashboardIcon className="text-white" />
        }
      },
      {
        link: "/c/subscription",
        name: "Subscription",
        onClick: () => {
          this.closeMobileDrawer();
        },
        icon: {
          desktop: (
            <AccountBalanceIcon
              className={
                selectedTab === "Subscription"
                  ? classes.textPrimary
                  : "text-white"
              }
              fontSize="small"
            />
          ),
          mobile: <AccountBalanceIcon className="text-white" />
        }
      }
    ];

    

    return (
      <Fragment>
        <AppBar position="sticky" className={classes.appBar}>
          <Toolbar className={classes.appBarToolbar}>
          <div>
            <Link to='/'>
              <img src='../favicon-192x192.png' alt="Logo" className={classes.logo}/>
              </Link>
          </div>
          <div>
           
            <Hidden smUp>
                
                  <IconButton
                    aria-label="Open Navigation"
                    onClick={this.openMobileDrawer}
                    color="primary"
                  >
                    <MenuIcon />
                  </IconButton>
                
              </Hidden>
            <Box
              display="flex"
              justifyContent="flex-end"
              alignItems="center"
              width="100%"
            >
              <ListItem
                disableGutters
                className={classNames(classes.iconListItem, classes.smBordered)}
              >
                {isWidthUp("sm", width) && (
                  <Fragment>
                  <Avatar
                  alt="profile picture"
                  src={Constants.profilePicture}
                  className={classNames(classes.accountAvatar)}
                  onClick={this.handleClick}
                  aria-controls="simple-menu" aria-haspopup="true" 
                  />
                  <ListItemText
                    className={classes.username}
                    primary={
                      <Typography color="textPrimary">{userName}</Typography>
                    }
                  />

                    <StyledMenu
                        id="customized-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                    >
                        <StyledMenuItem onClick={()=>{ history.push('/c/profile'); }}>
                            <ListItemIcon >
                                <PersonIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Mi perfil" />
                        </StyledMenuItem>
                        <StyledMenuItem onClick={()=>{ sessionStorage.removeItem(Constants.userInfo); history.push('/'); }}>
                            <ListItemIcon>
                                <ExitToAppIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary="Cerrar sesión" />
                        </StyledMenuItem>
                    </StyledMenu>
                  </Fragment>
                )}
              </ListItem>
            </Box>
            </div>
          </Toolbar>
        </AppBar>
        <Hidden xsDown>
          <Drawer //  both drawers can be combined into one for performance
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
            open={false}
          >
            <List>
              {menuItems.map((element, index) => (
                <Link
                  to={element.link}
                  className={classes.menuLink}
                  onClick={element.onClick}
                  key={index}
                  ref={node => {
                    this.links[index] = node;
                  }}
                >
                  <Tooltip
                    title={element.name}
                    placement="right"
                    key={element.name}
                  >
                    <ListItem
                      selected={selectedTab === element.name}
                      button
                      divider={index !== menuItems.length - 1}
                      className={classes.permanentDrawerListItem}
                      onClick={() => {
                        this.links[index].click();
                      }}
                      aria-label={
                        element.name === "Logout"
                          ? "Logout"
                          : `Go to ${element.name}`
                      }
                    >
                      <ListItemIcon className={classes.justifyCenter}>
                        {element.icon.desktop}
                      </ListItemIcon>
                    </ListItem>
                  </Tooltip>
                </Link>
              ))}
            </List>
          </Drawer>
        </Hidden>
        <NavigationDrawer
          menuItems={menuMobileItems.map(element => ({
            link: element.link,
            name: element.name,
            icon: element.icon.mobile,
            onClick: element.onClick
          }))}
          anchor="left"
          open={mobileOpen}
          selectedItem={selectedTab}
          onClose={this.closeMobileDrawer}
        />
      </Fragment>
    );
  }
}

NavBar.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedTab: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withWidth()(withStyles(styles, { withTheme: true })(NavBar));
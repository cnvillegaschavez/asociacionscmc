import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import AOS from "aos/dist/aos";
import { withStyles } from "@material-ui/core";
import NavBar from "./navigation/NavBar";
import ServicesConciliation from "./servicesConciliation/ServicesConciliation";
import Cardx from "./servicesConciliation/Cardx";
import We from "./we/We";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import "aos/dist/aos.css";
import CookieRulesDialog from "./cookies/CookieRulesDialog";
import CookieConsent from "./cookies/CookieConsent";
import Routing from "./Routing";
import smoothScrollTop from "../../shared/functions/smoothScrollTop";
import settingApi, { getExistSettings } from "./../../api/settingApi";
import Constants from "./../../util/constants";

AOS.init({ once: true });

const styles = theme => ({
  wrapper: {
    backgroundColor: theme.palette.common.white,
    overflowX: "hidden"
  }
});

class Main extends PureComponent {
  titleWeb = 'Glovito App Web'; 

  state = {
    selectedTab: null,
    mobileDrawerOpen: false,
    dialogOpen: null,
    cookieRulesDialogOpen: false
  };

  componentDidMount() {
    this.fetchSettings();
  }

  selectHome = () => {
    smoothScrollTop();
    document.title = this.titleWeb;
    this.setState({ selectedTab: "Home" });
  };

  selectBlog = () => {
    smoothScrollTop();
    document.title = this.titleWeb;
    this.setState({ selectedTab: "Blog" });
  };

  selectCompany = () => {
    smoothScrollTop();
    document.title = this.titleWeb;
    this.setState({ selectedTab: "Company" });
  };

  selectProducts = () => {
    smoothScrollTop();
    document.title = this.titleWeb;
    this.setState({ selectedTab: "Products" });
  };

  openLoginDialog = () => {
    this.setState({ dialogOpen: "login", mobileDrawerOpen: false });
  };

  closeDialog = () => {
    this.setState({ dialogOpen: null });
  };

  openRegisterDialog = () => {
    this.setState({
      dialogOpen: "register",
      mobileDrawerOpen: false
    });
  };

  openTermsDialog = () => {
    this.setState({ dialogOpen: "termsOfService" });
  };

  handleMobileDrawerOpen = () => {
    this.setState({ mobileDrawerOpen: true });
  };

  handleMobileDrawerClose = () => {
    this.setState({ mobileDrawerOpen: false });
  };

  switchSelectedTab = tab => {
    this.setState({ selectedTab: tab });
  };

  openChangePasswordDialog = () => {
    this.setState({ dialogOpen: "changePassword" });
  };

  fetchSettings = () => {
    if(!getExistSettings()) {
      settingApi().then(r=>{
        if(r.data){
          sessionStorage.setItem(Constants.settingName, JSON.stringify(r.data.data))
        }      
      });
    }    
  };

  handleCookieRulesDialogOpen = () => {
    this.setState({ cookieRulesDialogOpen: true });
  };

  handleCookieRulesDialogClose = () => {
    this.setState({ cookieRulesDialogOpen: false });
  };

  render() {
    const { classes, history } = this.props;
    const {
      selectedTab,
      mobileDrawerOpen,
      cookieRulesDialogOpen      
    } = this.state;
    return (
      <div className={classes.wrapper}>
        {!cookieRulesDialogOpen && (
          <CookieConsent
            handleCookieRulesDialogOpen={this.handleCookieRulesDialogOpen}
          />
        )}
        <CookieRulesDialog
          open={cookieRulesDialogOpen}
          onClose={this.handleCookieRulesDialogClose}
        />
        <NavBar
          selectedTab={selectedTab}
          selectTab={this.selectTab}
          openLoginDialog={this.openLoginDialog}
          openRegisterDialog={this.openRegisterDialog}
          mobileDrawerOpen={mobileDrawerOpen}
          handleMobileDrawerOpen={this.handleMobileDrawerOpen}
          handleMobileDrawerClose={this.handleMobileDrawerClose}
          history= {history}
        />

        {/* <Routing
          selectHome={this.selectHome}
          selectBlog={this.selectBlog}
          selectCompany={this.selectCompany}
          selectProducts={this.selectProducts}
        /> */}

        <ServicesConciliation/>

        <We/>
        
        <Contact/>

        <Footer/>
      </div>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Main);

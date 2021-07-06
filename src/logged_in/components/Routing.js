import React from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import Dashboard from "./dashboard/Dashboard";
import Subscription from "./subscription/Subscription";
import PropsRoute from "../../shared/components/PropsRoute";
import UserProfile from './/profile/UserProfile';

const styles = theme => ({
  wrapper: {
    margin: theme.spacing(0),
    width: "auto",
    [theme.breakpoints.up("xs")]: {
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0)
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto"
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto"
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(0),
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto"
    }
  }
});

function Routing(props) {
  const {
    classes,
    selectDashboard,
    selectSubscription
  } = props;
  return (
    <div className={classes.wrapper}>
      <Switch>
        <PropsRoute
            path="/c/profile"
            component={UserProfile}
            selectDashboard= {selectDashboard}
            selectSubscription = {selectSubscription}
        />
        <PropsRoute
          path="/c/subscription"
          component={Subscription}
          selectDashboard= {selectDashboard}
          selectSubscription = {selectSubscription}
        />
        <PropsRoute
          path=""
          component={Dashboard}
          selectDashboard= {selectDashboard}
          selectSubscription = {selectSubscription}
        />
         
      </Switch>
    </div>
  );
}

Routing.propTypes = {
  classes: PropTypes.object.isRequired,
  selectDashboard: PropTypes.func.isRequired,
  selectSubscription: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(Routing);

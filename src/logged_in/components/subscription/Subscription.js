import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { List, Divider, Paper, withStyles } from "@material-ui/core";

const styles = {
  divider: {
    backgroundColor: "rgba(0, 0, 0, 0.26)"
  }
};

class Subscription extends PureComponent {
  componentDidMount() {
    const { selectSubscription } = this.props;
    selectSubscription();
  }

  render() {
    const {  classes } = this.props;
    return (
      <Paper>
        <List disablePadding>
          <Divider className={classes.divider} />
        </List>
      </Paper>
    );
  }
}

Subscription.propTypes = {
  classes: PropTypes.object.isRequired,
  selectSubscription: PropTypes.func.isRequired
};

export default withStyles(styles)(Subscription);

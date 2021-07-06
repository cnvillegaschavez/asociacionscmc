import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@material-ui/core";

class Dashboard extends PureComponent {
  componentDidMount() {
    const { selectDashboard } = this.props;
    selectDashboard();
  }

  render() {
    
    return (
      <Fragment>
        
        <Box mt={4}>
          <Typography variant="subtitle1" gutterBottom>
            Your Account
          </Typography>
        </Box>
       
        <Box mt={4}>
          <Typography variant="subtitle1" gutterBottom>
            Settings
          </Typography>
        </Box>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  CardChart: PropTypes.elementType,
  selectDashboard: PropTypes.func.isRequired
};

export default Dashboard;

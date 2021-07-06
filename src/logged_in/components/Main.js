import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import Routing from "./Routing";
import NavBar from "./navigation/NavBar";
import smoothScrollTop from "../../shared/functions/smoothScrollTop";
import { useHistory } from 'react-router';

const styles = theme => ({
  main: {
    marginLeft: theme.spacing(9),
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0
    }
  }
});


const Main = (props) =>  {

    const [value, setValue] = useState({
        selectedTab: null,
        CardChart: null,
        EmojiTextArea: null,
        ImageCropper: null,
        Dropzone: null,
        DateTimePicker: null,
        transactions: [],
        targets: [],
        messages: [],
        isAccountActivated: false
      });
      const history = useHistory();



  const selectDashboard = () => {
    smoothScrollTop();
    document.title = "Glovito App Web - Dashboard";
    setValue({
      selectedTab: "Dashboard"
    });
  };


  const selectSubscription = () => {
    smoothScrollTop();
    document.title = "RUWAYTECH - Subscription";
    setValue({
      selectedTab: "Subscription"
    });
  };

  
    const { classes } = props;
    const {
      selectedTab,
      ImageCropper,
      EmojiTextArea,
      CardChart,
      Dropzone,
      DateTimePicker,
      transactions,
      targets,
      isAccountActivated,
      messages
    } = value;
    return (
      <Fragment>
       
        <NavBar
          selectedTab={selectedTab}
          messages={messages}
          history={history}
        />
       
        <main className={classNames(classes.main)}>
          <Routing
            isAccountActivated={isAccountActivated}
            ImageCropper={ImageCropper}
            EmojiTextArea={EmojiTextArea}
            CardChart={CardChart}
            Dropzone={Dropzone}
            DateTimePicker={DateTimePicker}
            transactions={transactions}
            targets={targets}
            selectDashboard={selectDashboard}
            selectSubscription={selectSubscription}
          />
        </main>
      </Fragment>
    );
  
}

Main.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Main);

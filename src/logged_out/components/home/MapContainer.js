import React, { Component } from "react";
import { withStyles, withTheme  } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import classNames from "classnames";

const useStyles = theme => ({
  containerFix: {
    
    position: 'relative !important;',
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(6)
    },
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(4)
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    },
    overflow: "hidden",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  containerMap: {
    height: 500
  }
});

export class MapContainer extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    const  { classes } = this.props;
    return (      
          <div className= {classNames("lg-p-top container-fluid", classes.containerMap)}  >
            <Typography variant="h3" align="center" className="lg-mg-bottom">
              Ubícanos
            </Typography>
                <Map className={classNames("container-fluid", classes.containerFix)}  
                      google={this.props.google} zoom={14}
                      initialCenter={{
                        lat: -12.0485451,
                        lng: -77.094062
                      }}
                      >
          
                  <Marker   title={'RUWAYTECH S.R.L.'} 
                            position={{lat: -12.0485451, lng: -77.094062}}
                            name={'RUWAYTECH S.R.L.'} />
          
                </Map>
        </div>      
    );
  }
}
 

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBqTAXHCx7BRXRF_D0nkjYksZCthMl6Vto'
})(withTheme((withStyles(useStyles)(MapContainer))))